# Deploy Workflow — 部署流程（调用 edgeone-pages-deploy）

> **何时加载本文件**：用户请求涉及部署、上线、发布、EdgeOne Pages、KV 绑定、环境变量、域名设置等。
>
> **核心原则**：本 Skill 自身不直接执行部署，而是**调用 `edgeone-pages-deploy` Skill** 完成。我们的职责是把项目生成好，并引导用户完成部署后的 KV 绑定等手动配置。

---

## 一、整体流程

```
1. 生成本地项目目录       ← 本 Skill 负责
2. 调用 edgeone-pages-deploy 部署
3. 引导用户在控制台绑定 KV
4. 引导用户在控制台设置环境变量
5. 重新部署一次让绑定生效
6. 首次访问 /api/auth?init=true 获取默认管理员密码
7. 返回完整访问信息给用户
```

---

## 二、Step 1: 生成本地项目目录

### 路径选择

**必须避免**包含特殊字符（`× ' " /` 等）和长串空格的路径。优先选择：

```
~/Desktop/portfolio-{slug}/           ← 推荐
~/portfolio-flow/                     ← 备选
/tmp/portfolio-{slug}/                ← 临时
```

**绝不**写入到：
- 包含 `×` 字符的目录（曾经踩过的坑）
- 中文路径深度超过 3 层的目录
- 含特殊符号 `'"!?` 的目录

### 目录结构

```
portfolio-{slug}/
├── index.html
├── portfolio-detail.html
├── admin.html
├── login.html
├── assets/
│   └── works/
├── functions/
│   ├── api/
│   │   ├── auth.js
│   │   ├── portfolios.js
│   │   ├── generate.js
│   │   ├── stats.js
│   │   └── assistant.js
│   └── _middleware.js
└── README.md
```

---

## 三、Step 2: 调用 edgeone-pages-deploy

本 Skill 完成项目生成后，**主动调用** EdgeOne Pages 官方部署 Skill。

### 触发方式

向用户的 AI 编程工具发出明确的部署请求：

```
Deploy this PortfolioFlow project to EdgeOne Pages.
Project directory: ~/Desktop/portfolio-{slug}/
Project name: portfolio-{slug}
```

`edgeone-pages-deploy` 会自动：
1. 检查 / 安装 EdgeOne CLI
2. 验证登录状态（已登录则跳过）
3. 上传项目文件到 EdgeOne COS
4. 创建生产环境部署
5. 返回访问 URL 与控制台链接

### 部署成功后的输出

```
EDGEONE_DEPLOY_URL=https://portfolio-{slug}.edgeone.cool?eo_token=xxx&eo_time=xxx
EDGEONE_PROJECT_ID=pages-xxxxxx
```

**记录下** `EDGEONE_PROJECT_ID`，后续控制台操作需要它。

---

## 四、Step 3: 引导用户绑定 3 个 KV 命名空间

部署成功后，**立即引导用户在控制台完成 KV 绑定**。

向用户输出以下指引（截图最佳，文字也可）：

```markdown
## 🔧 部署完成！但还差一步关键配置

PortfolioFlow 需要 3 个 KV 命名空间才能运行：

### 操作步骤（约 2 分钟）

1. 打开控制台：
   https://console.cloud.tencent.com/edgeone/pages/project/pages-{你的项目ID}
2. 左侧菜单点 **「KV 存储」**
3. 点击 **「绑定命名空间」** 按钮，分别绑定以下 3 个：

   | 变量名 | 命名空间 |
   |---|---|
   | `PORTFOLIO_USERS` | 新建（名字随意） |
   | `PORTFOLIO_WORKS` | 新建（名字随意） |
   | `PORTFOLIO_STATS` | 新建（名字随意） |

⚠️ **变量名必须一字不差**——它们在代码中作为**全局变量**访问。
```

### 为什么是全局变量？

EdgeOne Pages 的 KV 绑定规范：绑定的变量名直接在 Edge Function 中作为**全局变量**使用，而**不是** `env.VARIABLE_NAME` 的方式。

```javascript
// ❌ 错误
await env.PORTFOLIO_USERS.get(...);

// ✅ 正确
await PORTFOLIO_USERS.get(...);
```

这是 LandscapeFlow AI 实战踩出来的关键经验，必须在生成的代码里就遵守。

---

## 五、Step 4: 引导用户配置环境变量

PortfolioFlow 用到 2 个环境变量：

| 环境变量 | 必填 | 用途 |
|---|---|---|
| `JWT_SECRET` | ✅ 必填 | JWT 签名密钥，决定登录安全 |
| `DEEPSEEK_API_KEY` | ❌ 可选 | 启用 AI 增强模式 |

### 配置步骤

```markdown
1. 控制台 → 项目设置 → 环境变量 → 新增
2. 添加 JWT_SECRET：
   Key: JWT_SECRET
   Value: 任意 32+ 字符的随机字符串
   
   生成方法（终端运行）：
   openssl rand -base64 32
   
3. （可选）添加 DEEPSEEK_API_KEY：
   Key: DEEPSEEK_API_KEY
   Value: 你的 DeepSeek API Key

4. 保存后回到顶部，点 **「构建部署」** → **「新建部署」** 重新部署一次
```

---

## 六、Step 5: 重新部署让绑定生效

⚠️ **关键步骤，绝不能跳过**——KV 绑定和环境变量都需要重新部署一次才会注入到运行时。

```bash
cd ~/Desktop/portfolio-{slug}
edgeone pages deploy .
```

或者在控制台点"重新部署"按钮。

---

## 七、Step 6: 首次初始化获取默认管理员

第二次部署完成后，**自动**访问初始化端点：

```bash
curl "https://portfolio-{slug}.edgeone.cool/api/auth?init=true&eo_token=xxx&eo_time=xxx"
```

**期望响应**：

```json
{
  "ok": true,
  "message": "🎉 PortfolioFlow initialized successfully!",
  "credentials": {
    "email": "admin@portfolio.local",
    "password": "随机12位密码"
  },
  "warning": "⚠️ Save this password NOW. It will not be shown again."
}
```

**重要**：

- 这个密码**只显示一次**，后续调用同一端点返回 `Already initialized`
- 必须**立即**告知用户保存密码，并提醒首次登录后改密码

---

## 八、Step 7: 返回完整结果给用户

部署链路全部完成后，按以下格式向用户输出结构化结果：

```markdown
✅ PortfolioFlow 作品集已就绪

## 🌐 访问地址

- **前台首页**：https://portfolio-{slug}.edgeone.cool
- **管理后台**：https://portfolio-{slug}.edgeone.cool/login
- **控制台**：https://console.cloud.tencent.com/edgeone/pages/project/pages-{id}

## 🔐 默认管理员

- 邮箱：`admin@portfolio.local`
- 密码：`{12位随机密码}`
- ⚠️ 首次登录后请立即修改密码

## 📊 已部署能力

| 模块 | 状态 |
|---|---|
| 前台首页 | ✅ |
| 作品详情页 | ✅ |
| 管理后台（登录/CRUD/AI生成/看板）| ✅ |
| Edge Functions × 5 | ✅ |
| KV Storage × 3 | ✅ |
| JWT 鉴权 + CORS Middleware | ✅ |
| 访问统计 + 数据看板 | ✅ |

## 🎨 当前主题

{用户选定的主题名}

## 📁 本地项目目录

~/Desktop/portfolio-{slug}/

## 💡 下一步建议

1. 登录后台修改默认密码
2. 添加你的真实作品（覆盖 3 个示例作品）
3. 上传作品图到 /assets/works/，重新部署
4. （可选）添加 DEEPSEEK_API_KEY 启用真 AI 模式
5. （可选）绑定自定义域名解除 3 小时 token 限制
```

---

## 九、域名问题（必告知用户）

EdgeOne Pages 默认域名 `xxx.edgeone.cool` 的特殊机制：

```
⚠️ 默认域名限制
- 链接形如 https://xxx.edgeone.cool?eo_token=xxx&eo_time=xxx
- token 默认 3 小时过期
- 不带 token 直接访问会 401

要解除限制，必须绑定自定义域名：
1. 控制台 → 域名管理 → 添加自定义域名
2. 配置 CNAME 解析到 EdgeOne 给的地址
3. 等待 HTTPS 证书签发（约 5 分钟）
4. 此后 https://your-domain.com 可永久公开访问
```

**对参赛作品来说**：评委如果要复现，会用临时 token 链接看 3 小时内的版本，不一定需要自定义域名。但用户长期使用必须配域名。

---

## 十、常见部署错误与排查

| 错误 | 原因 | 解决 |
|---|---|---|
| `KV namespace PORTFOLIO_USERS not bound` | 跳过了 Step 3 | 在控制台绑定 KV，重新部署 |
| `Unauthorized` 访问 /admin | JWT_SECRET 没配 | 配 JWT_SECRET，重新部署 |
| 模板库空白卡在 loading | KV 绑定后没重新部署 | 重新部署一次 |
| 401 Unauthorized 访问任何路径 | 默认域名 token 过期 | 重新部署获取新 URL，或绑定自定义域名 |
| `LANDSCAPE_CASES is not defined` | KV 变量名错误 | 必须是全局变量，不是 `env.xxx` |
| Edge Function 部署成功但调用 500 | KV 绑定不全 | 检查 3 个 KV 是否都绑定 |

---

## 十一、AI 执行清单

完整的部署流程检查：

- [ ] 已生成完整项目目录
- [ ] 项目路径不含 `×` 等特殊字符
- [ ] 调用 `edgeone-pages-deploy` 完成第一次部署
- [ ] 引导用户绑定 3 个 KV 命名空间
- [ ] 引导用户配置 `JWT_SECRET` 环境变量
- [ ] 触发第二次部署让绑定生效
- [ ] 访问 `/api/auth?init=true` 获取默认账号
- [ ] 输出完整的部署结果给用户（含访问 URL、控制台、默认账号、本地路径）
- [ ] 提醒用户首次登录后修改密码
- [ ] 提醒用户域名 3 小时限制（如未绑定自定义域名）

---

## 十二、反例

❌ **错误**：部署成功就告诉用户"完成了"，不引导 KV 绑定  
✅ **正确**：必须把 KV 绑定、环境变量、二次部署整套流程跑完

❌ **错误**：默认域名 token 链接当作最终交付物  
✅ **正确**：明确告知用户域名有 3 小时限制，引导绑定自定义域名

❌ **错误**：把 `admin@portfolio.local` 默认密码写死  
✅ **正确**：首次部署随机生成，仅一次性返回

❌ **错误**：跳过二次部署，KV 绑定不生效  
✅ **正确**：KV 绑定/环境变量配置后**必须**重新部署
