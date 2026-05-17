# Brochure Mobile

> **赛道**：Prompt　**作者**：郑坚兵 · [GitHub @h5wawaji](https://github.com/h5wawaji)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Brochure Mobile demo](../assets/demos/brochure-mobile.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/brochure-mobile.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Brochure Mobile |
| 赛道 | Prompt |
| 作者 | 郑坚兵 |
| GitHub | [@h5wawaji](https://github.com/h5wawaji) |

## 📝 作品介绍

Brochure Mobile https://pdfsite.h5wawaji.com/ 
   一条命令将PDF宣传册转化为移动端交互Web页面，告别附件分发。内置中英日三语UI与询盘表单，客户浏览完即可留言，从"看"到"问"一步完成。EdgeOne无服务器部署，零运维开箱即用，让产品册从静态附件变成可分享、可追踪、可互动的链接。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
为中国传统外贸企业搭建一套**国际多语言、移动端优先的 PDF 宣传册展示站点**，部署在 EdgeOne Pages。

## 目标（GOAL）

把客户提供的**单个 PDF 产品宣传册**，转化成一份适合在手机上发给海外买家浏览的 Web 页面：
逐页滑动 → 任意一页可点击查看高清大图 → 顶部右上角支持 **English / 中文 / 日本語** 国旗切换 → 最后一页是**在线留言询盘表单**，提交到可配置的后端接口（默认走 EdgeOne Edge Function 模拟后端）。

它**不是**通用的 PDF.js 阅读器，**不是**桌面优先的营销站，也**不是**单语言宣传册克隆。它是一份**移动优先 / 弱网友好 / 国际化**的宣传册轮播 + 询盘收集页。

## 工具与模型记录（参赛信息）

- **AI 编程工具**：WorkBuddy（CodeBuddy Work），原生支持 Skills
- **AI Agent 模型**：`GLM-5.1`
- **必须先安装的 Skill**：
  ```bash
  npx skills add TencentEdgeOne/edgeone-pages-skills
  ```
  会同时获得 `edgeone-pages-dev` 与 `edgeone-pages-deploy`。
- **前端**：React + Vite + TypeScript + Tailwind CSS + shadcn/ui + framer-motion + swiper + lucide-react
- **国际化**：`react-i18next` + `i18next-browser-languagedetector`
- **离线 PDF 处理（Node 脚本，仅本地跑，不上 EdgeOne）**：`pdfjs-dist` + `sharp` + `commander`
- **后端**：EdgeOne Pages **Edge Functions**（V8 运行时），单一接口 `/api/contact`
- **部署**：EdgeOne Pages CLI（`edgeone pages deploy`）

> 任何 `edgeone` 命令前先 `export PAGES_SOURCE=skills`。

## 架构 —— 严格切成两个独立模块

EdgeOne Pages **只发布模块 B 的产物**，永远不要在线上跑模块 A。

```
project/
├── tools/pdf-pipeline/       ← 模块 A：离线批处理（本地按需执行）
│   ├── package.json
│   ├── pdf-to-images.mjs     ← CLI 入口
│   └── README.md
└── web/                      ← 模块 B：移动端站点（被部署的部分）
    ├── public/brochure/
    │   ├── small/page-01.webp ... page-NN.webp     ← 单张 < 400 KB 的预览图
    │   └── large/page-01.jpg  ... page-NN.jpg      ← 高清原图（点击放大用）
    ├── public/brochure/manifest.json              
   ← 页面清单 + 多语言标题
    ├── src/
    ├── functions/api/contact.js                    ← Edge Function
    ├── edgeone.json
    └── ...
```

铁律：前端**永不在浏览器里解析 PDF**，只读 `manifest.json` + 已生成的图片。

---

## 模块 A：PDF → 双套图片 批处理

**目录**：`tools/pdf-pipeline/`。
**用法**：`node pdf-to-images.mjs --input ./brochure.pdf --out ../web/public/brochure`

行为：

1. 用 `pdfjs-dist` + `node-canvas` 以 **300 DPI** 渲染每一页为高清 PNG buffer。
2. 每页输出**两套图**：
   - **大图**（`large/page-XX.jpg`）：JPEG 质量 92，长边最大 2400px，体积通常 2–4 MB —— 用于点击放大查看。
   - **小图**（`small/page-XX.webp`）：WebP 质量 72，长边 1080px，**强制 ≤ 400 KB**（用二分法把质量往下压，下限 50） —— 默认手机预览用。
3. 生成 `public/brochure/manifest.json`：
   ```json
   {
     "version": "1"，
     "generatedAt": ""，
     "pageCount": 12，
     "pages": [
       {
         "index": 1，
         "small": "/brochure/small/page-01.webp"，
         "large": "/brochure/large/page-01.jpg"，
         "smallBytes": 312045，
         "largeBytes": 2871234，
         "width": 1080，
         "height": 1527，
         "title": { "en": "Cover"， "zh": "封面"， "ja": "表紙" }，
         "enabled": true
       }
     ]
   }
   ```
4. **幂等**：再次执行不重新生成已有页面，除非加 `--force`。
5. CLI 参数：`--input`、`--out`、`--dpi`（默认 300）、`--small-max-kb`（默认 400）、`--force`。

附带 `tools/pdf-pipeline/README.md` 说明安装与用法。

---

## 模块 B：移动端站点

### 路由结构

单页应用（SPA），只有一个主路由。"宣传册的每一页"是 Swiper 中的 slide，**不**是 React Router 路由。

### 布局（移动优先，先针对 390 × 844 设计）

```
┌─────────────────────────────────┐
│  ☰ 
   [logo]           
   🇬🇧 ▾    │ ← 顶栏（透明，滚动后毛玻璃）
├─────────────────────────────────┤
│                                
   │
│        [宣传册页面图]            │ ← Swiper，铺满视口
│                                
   │
│         🔍 查看高清              │ ← 右下浮动按钮
│                                
   │
│  ● 
   ○  ○  ○ 
   ○  ○  ○           
   │ ← 进度点 / "3 / 12"
└─────────────────────────────────┘
```

- 默认滑动方向：**纵向上下滑**（类似 IG Stories）。同时通过配置项 `swipeDirection: 'vertical' | 'horizontal'` 支持横滑，两种都必须可用。
- **最后一张** slide **不是**图片，而是**询盘表单**（见下文）。
- 点击「🔍 查看高清」 → 全屏 lightbox 显示对应的 `large/` 大图，支持双指缩放（用 `react-zoom-pan-pinch` 或同类）；下滑或点击空白区关闭。
- slide 必须懒加载，DOM 中只保留当前 ±1 张 `small`。**绝不预加载 `large/`**，只有在 lightbox 打开瞬间才请求。

### 右上角语言切换

- 始终固定在右上角。
- 触发器：胶囊按钮，显示**当前语言的国旗 emoji + 缩写**（如 `🇬🇧 EN`）。
- 点击 → 下拉三个选项：
  - 🇬🇧 English（`en`，**默认**）
  - 🇨🇳 中文（`zh`）
  - 🇯🇵 日本語（`ja`）
- 选择持久化到 `localStorage.brochure.locale`。首次访问通过 `i18next-browser-languagedetector` 探测，**探测失败一律回落 `en`**。
- 所有 UI 文案（按钮、表单 label、错误、页面标题）都从 `src/i18n/{en，zh，ja}.json` 取，**JSX 里禁止硬编码英文**。

### 弱网优化（不可妥协）

- 默认 slide 永远用 `small/` 的 WebP，单张 < 400 KB。
- `[图片]` 必须 `loading="lazy"`、`decoding="async"`，并用 manifest 里的 `width` / `height` 设死尺寸防 CLS。
- `` 到 EdgeOne 域名。
- slide 加载中显示骨架屏。
- 大图请求时显示居中转圈 + 本地化的"高清图加载中…"提示。

### 最后一页：询盘表单

字段（除注明外均必填）：

| 字段 | 类型 | i18n key |
|---|---|---|
| 姓名 | text | `form.name` |
| 公司名（选填） | text | `form.company` |
| 邮箱 | email | `form.email` |
| WhatsApp / 电话（选填） | tel | `form.phone` |
| 国家 | select（ISO 列表） | `form.country` |
| 感兴趣的产品 | 多选 checkbox，选项来自 `manifest.pages[].title` | `form.products` |
| 留言 | textarea，最多 1000 字符 | `form.message` |

行为：

- 前端做完整校验，错误信息按当前语言显示。
- `POST` 到**配置好的接口**（见下文 CONFIG）。
- 成功：显示本地化的感谢页 + "回到首页"按钮。
- 失败：显示本地化错误，保留已填内容。

### 客户后期定制面板（满足甲方频繁加减页的需求）

一个**隐藏的设置抽屉**，两种打开方式：
1. **长按顶栏 logo 1.5 秒**；或
2. 访问 `/?admin=1`。

抽屉内可：

1. **重排 / 启用 / 禁用页面** —— 操作 `manifest.pages[].enabled`，支持拖拽排序。
2. **编辑每页在三种语言下的标题**（用于产品多选 checkbox 显示）。
3. **配置询盘提交接口 URL**（完整 URL，例如 `https://example.com/inquiry`）。默认值取自 `VITE_CONTACT_ENDPOINT`，抽屉里的覆盖优先。
4. **配置滑动方向**（`vertical` | `horizontal`）。
5. **导出 / 导入** 整个配置为 JSON 文件。

所有覆盖写入 `localStorage.brochure.config`，提供"恢复默认"按钮。

> 抽屉故意藏起来，避免最终海外买家看到；外贸老板用它在每次发货前微调宣传册而不必重新构建项目。

---

## 配置 —— 单一来源

`src/config.ts`：

```ts
export interface BrochureConfig {
  defaultLocale: 'en' | 'zh' | 'ja';
  swipeDirection: 'vertical' | 'horizontal';
  contactEndpoint: string;       // 运行时覆盖 VITE_CONTACT_ENDPOINT
  brand: { name: string; logo: string };
  pageOverrides: Record<number， { enabled?: boolean; title?: Record }>;
}
```

优先级（高 → 低）：
1. `localStorage.brochure.config`（管理抽屉里的配置）
2. `import.meta.env.VITE_*`
3. 硬编码默认值

---

## Edge Function：`functions/api/contact.js`

EdgeOne Pages Edge Function，V8 运行时。**禁止 npm import，禁止 Node 内置模块**。

```js
// functions/api/contact.js
export async function onRequest({ request， env }) {
  if (request.method !== 'POST') {
    return new Response('Method Not Allowed'， { status: 405 });
  }
  let payload;
  try { payload = await request.json(); }
  catch { return json({ ok: false， error: 'invalid_json' }， 400); }

  const required = ['name'， 'email'， 'country'， 'message'];
  for (const k of required) {
    if (!payload[k] || String(payload[k]).trim() === '') {
      return json({ ok: false， error: `missing_${k}` }， 400);
    }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return json({ ok: false， error: 'invalid_email' }， 400);
  }

  const requestId = 'INQ-' + Date.now().toString(36).toUpperCase();
  const record = { requestId， receivedAt: new Date().toISOString()， ...payload };

  // 1) 配置了真实后端 URL 就转发过去
  const forwardUrl = env.CONTACT_FORWARD_URL;
  if (forwardUrl) {
    try {
      await fetch(forwardUrl， {
        method: 'POST'，
        headers: { 'content-type': 'application/json' }，
        body: JSON.stringify(record)，
      });
    } catch (e) {
      // 静默吞掉错误，仍然回执给客户；运维可后续重放
    }
  }

  // 2) 否则仅打日志（演示用 mock 后端）
  console.log('[contact]'， JSON.stringify(record));

  return json({ ok: true， requestId， message: 'received' });
}

function json(body， status = 200) {
  return new Response(JSON.stringify(body)， {
    status，
    headers: { 'content-type': 'application/json; charset=utf-8' }，
  });
}
```

- `CONTACT_FORWARD_URL` 在 EdgeOne Pages 控制台 → 项目 → 环境变量里配置，老板换后端不需要重新部署。
- 前端"可配置的提交接口"既可以指向这个 Edge Function（默认 `/api/contact`），也可以指向老板在管理抽屉里粘贴的任意外部 URL。

---

## 设计 Token

```css
:root {
  --bg: 220 18% 98%;
  --fg: 222 14% 12%;
  --primary: 14 88% 55%;          /* 外贸暖橙红 */
  --accent: 35 92% 52%;
  --muted: 220 12% 92%;
  --radius: 14px;
}
```

- 标题字体：Inter / Noto Sans SC / Noto Sans JP（按当前语言自动切换）。
- 正文：同字体，weight 400。
- 按钮按下做轻微反馈，**禁止 bouncy 弹跳动画**。
- **暗色模式不在范围内**，仅做亮色。

## 不可妥协的规则

- ❌ 浏览器中不解析 PDF。
- ❌ 默认 slide 不允许出现 > 450 KB 的图片。
- ❌ 不允许硬编码 UI 文案，全部走 `react-i18next`。
- ❌ 不允许用路由分页，slide 全部装在一个 Swiper 里。
- ❌ 管理抽屉不允许在普通 UI 上暴露入口给海外买家。
- ✅ 页面列表必须从 `manifest.json` 读，加减页只需重跑模块 A。
- ✅ 12 页时 Lighthouse 移动端（模拟 Slow 4G） **Performance ≥ 90**。

## 交付清单

构建完成后，Agent 必须依次：

1. 拿示例 PDF 跑一次模块 A，确认 `manifest.json` 和两个图片目录都生成。
2. 先 `export PAGES_SOURCE=skills` 再 `edgeone pages dev`，在 `http://localhost:8088` 验证：
   - 横滑 / 纵滑切换都正常。
   - 高清 lightbox 仅在点击时加载。
   - 语言切换 `en → zh → ja` 持久化生效。
   - 表单提交 `/api/contact` 返回 `{ ok: true， requestId }`。
   - 管理抽屉禁用某页后，slide 无需重新构建即消失。
3. 在 360×640 / 390×844 / 414×896 / 768×1024 多断点验证。
4. 调用 **`edgeone-pages-deploy`** Skill 完成部署：
   - 先问用户：国内站还是国际站？
   - 执行 `edgeone pages deploy -n brochure-mobile`。
   - 输出**完整保留 query string** 的 `EDGEONE_DEPLOY_URL` + 控制台 URL。
5. 最后打印汇总：部署 URL、总页数、`small/` 总字节、`large/` 总字节、单张 small 平均 KB。

## 质量底线

最终成品必须像：
- 一个真实外贸公司的移动端宣传册，业务员可以直接通过 WhatsApp 发给海外客户。
- 在东南亚 / 非洲的 4G 网络下也能秒开。
- 英 / 中 / 日 切换无负担。
- 非技术老板能通过抽屉自行加减页 / 改后端，不动代码。

绝不能像：
- 通用 PDF 阅读器。
- 桌面优先的 SaaS 着陆页。
- 占位 Lorem Ipsum 的 demo。

````
