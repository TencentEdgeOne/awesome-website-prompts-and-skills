---
name: portfolio-flow
description: >
  Generates a complete designer portfolio website with admin login, portfolio
  CRUD management, AI-powered project description generation, theme customization
  (5 presets or custom hex), and visit analytics. Deploys to EdgeOne Pages with
  Edge Functions, KV Storage, JWT auth, and middleware. Use when a user wants to
  build a personal portfolio site, designer's online showcase, individual brand
  website, or multi-discipline design portfolio covering landscape, graphic,
  interior, industrial, or UX/UI design. Triggers include: "做一个设计师作品集"
  "做一个个人作品集网站" "建一个景观/平面/室内/工业/UX设计师作品集"
  "PortfolioFlow 建站" "生成作品集" "make a designer portfolio"
  "build a personal portfolio" "create a designer showcase site"
  "用 PortfolioFlow 做一个作品集".
license: MIT
---

# PortfolioFlow Skill

把一句话，变成设计师的完整作品集网站。

PortfolioFlow 是面向**5 大设计领域**（景观 / 平面 / 室内 / 工业 / UX）的作品集
建站 Skill。用户用一句中文或英文描述需求，本 Skill 自动生成：

- 完整作品集前台站（Hero + 作品网格 + 详情页 + 关于 + AI 助手对话框）
- 设计师管理后台（登录 + 作品 CRUD + AI 生成介绍 + 统计看板）
- 主题色自定义（5 套预设主题 + 用户传入 hex 自由组合）
- Edge Functions / KV / Middleware / JWT 鉴权全栈能力

最终通过 `edgeone-pages-deploy` 一键部署到 EdgeOne Pages。

---

## 触发后的执行流程（决策树）

收到符合本 Skill 触发条件的用户请求后，按以下顺序执行：

### Step 1 — 收集必填信息

如果用户描述中**缺少**以下任意字段，向用户**一次性追问**（不要反复问）：

| 字段 | 必填 | 示例 | 默认值 |
|---|---|---|---|
| 设计师姓名 | ✅ | "李博" / "Alex Chen" | 用户名 |
| 设计领域 | ✅ | 景观 / 平面 / 室内 / 工业 / UX | 询问选一个 |
| 网站标题 | ❌ | "Lee · 景观设计作品集" | "{姓名} 作品集" |
| 一句话定位 | ❌ | "让设计回到土地与人居" | 按领域默认 |
| 主题方案 | ❌ | "暗夜森林" / hex 颜色 | "暗夜森林" |
| 预填作品数 | ❌ | 3-6 | 默认 3 个示例作品 |

**追问示例**：
> 我需要确认几个关键信息：
> 1. 你的设计领域是什么？（景观/平面/室内/工业/UX）
> 2. 设计师姓名？
> 3. 主题方案？（暗夜森林/晨曦米色/深海蓝调/暖阳橙红/纯白极简，或者直接给一个 hex 颜色）

### Step 2 — 决定项目结构

`view` 以下参考文件之一，根据用户领域加载对应的内容套路：

- 景观 / 室内 / 工业 → `references/portfolio-knowledge.md` 中的对应章节
- 平面 / UX → 同上

### Step 3 — 生成项目骨架

在 `/tmp/portfolio-{slug}/` 下创建以下文件（**禁止使用 cd 进入路径包含特殊字符的目录**，所有
路径都用绝对路径或 `~/Desktop/` 下的干净路径）：

```
portfolio-{slug}/
├── index.html              # 前台首页（用 templates/index.html 模板）
├── portfolio-detail.html   # 作品详情
├── admin.html              # 管理后台
├── login.html              # 登录页
├── assets/                 # 图片素材（用户上传或占位图）
├── functions/
│   ├── api/
│   │   ├── auth.js         # 登录鉴权 + JWT 签发（参考 references/auth-jwt.md）
│   │   ├── portfolios.js   # 作品 CRUD（参考 references/portfolio-crud.md）
│   │   ├── generate.js     # AI 生成介绍（参考 references/ai-generate.md）
│   │   └── stats.js        # 访问统计（参考 references/stats-kv.md）
│   └── _middleware.js      # JWT 校验 + CORS
└── README.md
```

### Step 4 — 主题色注入

用户选定的主题方案需要**同时**注入到：
- `index.html` 的 `<style>` 中的 CSS 变量
- `admin.html` 的同位置
- `login.html` 的同位置

5 套预设主题的具体 CSS 变量值见 `references/design-system.md`。

如果用户传入 hex 颜色（如 `#FF6B6B`），按 `references/design-system.md` 中"hex
转完整主题"的算法生成配套色阶。

### Step 5 — 调用部署 Skill

完成所有文件生成后，调用 `edgeone-pages-deploy` Skill 执行部署：

```
触发短语：deploy this portfolio to EdgeOne Pages
项目目录：~/Desktop/portfolio-{slug}/
```

部署成功后，**必须**：

1. 在 EdgeOne Pages 控制台引导用户绑定以下 KV 命名空间（手动一次性操作）：
   - 变量名 `PORTFOLIO_USERS` ← 用户账号库
   - 变量名 `PORTFOLIO_WORKS` ← 作品库
   - 变量名 `PORTFOLIO_STATS` ← 访问统计
   - **重要**：变量名必须严格匹配，KV 绑定后在 Edge Function 中作为**全局变量**
     访问，而非 `env.PORTFOLIO_WORKS`（这是 EdgeOne Pages 的特殊规范）。
2. 重新部署一次让 KV 绑定生效。
3. 返回访问 URL + 默认管理员账号密码（首次部署时自动写入 KV）。

---

## 路由表（references/ 按需加载）

下表帮助 AI 决定何时打开哪份 reference：

| 用户场景关键词 | 加载的 reference |
|---|---|
| "主题色 / 配色 / 视觉风格 / hex / 自定义颜色" | `references/design-system.md` |
| "登录 / 鉴权 / JWT / 密码 / token" | `references/auth-jwt.md` |
| "作品 / CRUD / 添加 / 编辑 / 删除 / 增删改查" | `references/portfolio-crud.md` |
| "AI 生成 / 作品介绍 / 描述生成 / 智能填写" | `references/ai-generate.md` |
| "统计 / 浏览量 / PV / 热门作品 / 看板" | `references/stats-kv.md` |
| "部署 / 上线 / EdgeOne / 域名 / KV 绑定" | `references/deploy-workflow.md` |
| "景观 / 平面 / 室内 / 工业 / UX 行业话术" | `references/portfolio-knowledge.md` |

---

## 核心约束（必须遵守）

1. **绝不依赖外部 API Key**——默认模式下所有功能（包括 AI 生成）必须零配置可跑。
   `references/ai-generate.md` 描述了可选的 DeepSeek 增强模式，但**不是默认行为**。

2. **绝不写入用户路径含特殊字符的目录**——优先使用 `~/Desktop/` 下不含 `× ' " /` 的干净路径。

3. **图片字段不做 `startsWith('http')` 兜底判断**——直接信任传入的 `img` 字段，
   本地 `/assets/xxx.jpg` 和远程 `https://...` 都要原样使用。

4. **JWT secret 不硬编码在代码里**——从 EdgeOne Pages 环境变量 `JWT_SECRET`
   读取，部署后引导用户在控制台手动设置。

5. **首次部署完成后必须返回**：
   - 公开访问 URL
   - 控制台链接
   - 默认管理员账号（提示首次登录后立即修改密码）

---

## 可选增强（用户明确要求时启用）

| 用户说 | 启用 |
|---|---|
| "接真 AI" / "用 DeepSeek" / "AI 能力更强一点" | `references/ai-generate.md` 中的 Plan B：DeepSeek 双引擎 |
| "支持中英文切换" / "双语" | 在 `index.html` 添加 i18n 字典 + 切换按钮 |
| "加上 RSS / 订阅功能" | 新增 `functions/api/rss.js` |
| "支持作品评论" | 新增 `functions/api/comments.js` + 评论 KV namespace |

---

## 反例：不应触发本 Skill 的请求

- "做一个景观项目展示站"（指特定项目站，不是设计师作品集） → 使用 `landscapeflow` Prompt
- "做一个落地页 / SaaS / 电商网站" → 不属于作品集场景
- "把我现有的简历改成网页" → 是简历不是作品集
- 单纯的"AI 生成一段作品介绍"（不建站） → 不需要建站 Skill

---

## 输出契约

执行完成后，向用户输出以下结构化结果：

```
✅ PortfolioFlow 作品集已就绪

🌐 访问 URL: https://portfolio-{slug}.edgeone.cool
🔐 管理后台: https://portfolio-{slug}.edgeone.cool/admin
   - 默认账号: admin@portfolio.local
   - 默认密码: PortfolioFlow_{随机6位}
   - ⚠️ 首次登录后请立即修改密码

📊 已部署能力:
   ✅ 前台作品集首页（{N} 个示例作品）
   ✅ 作品详情页
   ✅ 管理后台（登录 / CRUD / AI 生成）
   ✅ Edge Functions × 4
   ✅ KV Storage × 3
   ✅ JWT 鉴权 + CORS Middleware

🎨 当前主题: {主题名称}
📁 项目目录: {本地路径}

下一步建议:
1. 登录后台添加你的真实作品
2. 上传头像和封面图到 /assets/
3. 修改 footer 中的版权和联系方式
```
