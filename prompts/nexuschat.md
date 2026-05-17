# NexusChat

> **赛道**：Prompt　**作者**：蜗牛 · [GitHub @Mr-xxp](https://github.com/Mr-xxp)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![NexusChat cover](../assets/demos/nexuschat.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/nexuschat.gif" alt="NexusChat demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | NexusChat |
| 赛道 | Prompt |
| 作者 | 蜗牛 |
| GitHub | [@Mr-xxp](https://github.com/Mr-xxp) |

## 📝 作品介绍

🔮 NexusChat — 多模型 AI 对话客户端
作品名称
NexusChat Nexus 意为「枢纽、连接」，Chat 代表对话——寓意将分散在各处的 AI 大模型汇聚于一处，打通用户与 AI 的连接入口。

核心价值
一个界面，接入所有主流 AI 大模型，无需搭建后端，即开即用。

当前市面上 AI 模型百花齐放——Claude、DeepSeek、GLM、Qwen、Moonshot、Doubao……用户往往需要在多个平台之间来回切换，体验割裂、效率低下。NexusChat 将 7 家主流模型服务商统一接入，只需填写各自的 API Key，即可在同一界面自由切换模型，专注于对话本身，而非工具切换。

适用场景
场景	说明
🧑‍💻 开发者评测	同一问题快速对比不同模型的回答质量
🏢 企业内部工具	自部署、自配置 Key，数据不经第三方
📚 学习与研究	随时切换最适合当前任务的模型
🌍 国际化用户	内置中英双语，全球 CDN 加速访问
亮点功能
① 7 大模型服务商，一站接入 支持 Anthropic（Claude）、DeepSeek、智谱 GLM、通义千问、Moonshot、豆包，以及自定义 OpenAI 兼容端点——覆盖国内外主流大模型。

② 实时流式输出，打字机效果 全面采用 SSE（Server-Sent Events）流式传输，AI 回复逐字呈现，响应体验与原生客户端无异。

③ 对话永久保存，跨页面不丢失 基于 IndexedDB 持久化所有对话历史，刷新或关闭页面后重新打开，消息记录完整保留。

④ 纯静态部署，零运维成本 单页应用（SPA）+ EdgeOne Edge Function 代理，无需服务器，直接部署到 EdgeOne Pages，全球 CDN 分发，访问快、维护零成本。

⑤ 精致 UI 设计，支持深色 / 浅色主题 玻璃拟态（Glass Morphism）设计语言，动态渐变背景，代码块语法高亮，内置亮色 / 暗色主题切换，界面美观而专业。

⑥ 中英双语，开箱即用 内置 i18n 国际化系统，自动识别浏览器语言，中英无缝切换，适合国内外用户。

技术栈一览
前端：Vue 3 (CDN) + 纯 CSS 变量 + Marked.js + Highlight.js
部署：EdgeOne Pages (静态托管 + Edge Function 代理)
存储：浏览器 IndexedDB（零后端依赖）
流式：ReadableStream SSE 解析（Anthropic 原生 + OpenAI 兼容双协议）

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

---

# Goal

Build a beautiful, production-ready multi-model AI chat client as a single-page application. The app is named **NexusChat**. It runs entirely in the browser (no backend server needed) and is deployed as a static site to EdgeOne Pages.

The app must support 7 AI model providers with real-time SSE streaming, IndexedDB message persistence, and a glass morphism design system.

---

# Assets

No external image assets are required. All icons are inline SVG. The favicon is an SVG data URI (puzzle piece emoji).

CDN dependencies (load via CDN, no npm install):
- Vue 3 (CDN, Composition API)
- Marked.js (Markdown rendering)
- Highlight.js (code syntax highlighting, GitHub Dark theme)

---

# Brand

- **Product Name**: NexusChat
- **Tagline**: Multi-Model AI Client
- **Accent Color**: Purple gradient (`#7c5cfc` → `#a78bfa`)
- **Dark Theme BG**: `#0d0f1a` (deep blue-gray, NOT pure black)
- **Light Theme BG**: `#f8f9fc`
- **Glass Morphism**: `backdrop-filter: blur(20px)` on topbar/panel/input bar
- **Version Badge**: "v2.0" in topbar, gradient background
- **Tone**: Professional, modern, technical. Inspired by Linear + Notion dark modes.

---

# Tech Stack

- **Framework**: Vue 3 (CDN, Composition API, `setup()` pattern)
- **Styling**: Custom CSS with CSS Variables (no Tailwind, no CSS modules)
- **Markdown**: Marked.js with Highlight.js integration
- **Persistence**: IndexedDB (object stores: `conversations`, `messages`)
- **API Proxy**: EdgeOne Pages Edge Function (`/api/claude`)
- **Streaming**: SSE (Server-Sent Events) with `ReadableStreamDefaultReader`
- **Multi-Provider**: Anthropic (native) + OpenAI-compatible (DeepSeek, GLM, Qwen, Moonshot, Doubao, Custom)
- **Build**: None (single HTML file, static deployment)
- **Deploy**: EdgeOne Pages (`edgeone.json` with `"outputDirectory": "public"`)

---

# Layout Constraints

## Overall Layout
- Full viewport height (`100vh`), flex column
- Animated gradient background (`::before` pseudo-element, `radial-gradient`, `animation: bgShift 20s infinite`)
- Three layers: Topbar → Body → (Conversation Panel + Chat Panel)

## Topbar (52px fixed height)
- Glass morphism background with `backdrop-filter: blur(20px)`
- Logo: gradient icon (16px SVG) + "Nexus" + "Chat" (accent color)
- Version badge: "v2.0", gradient background, right side
- Provider select dropdown (left) + Model select dropdown (right)
- Settings button (gear SVG) + Theme toggle (sun/moon SVG)
- All buttons: `icon-btn` class, 34x34px, border, hover effect

## Conversation Panel (260px desktop, slide drawer on mobile)
- Glass morphism background
- "CONVERSATIONS" header (uppercase, letter-spacing: 1px)
- "+" button (gradient background, white text, hover scale 1.1)
- Conversation list items:
  - Left: avatar circle (first letter of title, gradient background for active)
  - Center: title (ellipsis overflow)
  - Right: delete button (×, appears on hover)
- Active state: `border-left: 3px solid var(--accent)`, accent background tint
- Mobile (<768px): fixed position, left: -280px → left: 0 on `.open`, z-index: 50, box-shadow

## Chat Panel (flex: 1)
- Messages container: `flex: 1`, `overflow-y: auto`, padding: 20px 28px
- **Welcome screen** (when no messages):
  - Centered, max-width: 520px
  - Hero icon: 72x72px, gradient background, float animation (`heroFloat` 3s infinite)
  - Title: "Nexus" + "Chat" (gradient text via `-webkit-background-clip: text`)
  - Subtitle: 15px, max-width: 440px
  - Feature grid: 2x2 grid, 4 cards with icon/title/description
  - "Powered by EdgeOne Pages" at bottom
- **Message bubble** (`.msg`):
  - User messages: light accent background (`var(--bg-msg-user)`)
  - AI messages: transparent background
  - Animation: `msgIn` (fade in + slide up, 300ms cubic-bezier)
  - Header: avatar + role + timestamp (right-aligned)
  - User avatar: "U", gradient background
  - AI avatar: chat SVG icon, border
  - Actions (copy/redo): appear on hover, flex gap 4px
  - Copy button: has `<button onclick="copyCode(this)">` global function
- **Code blocks**:
  - Background: `var(--bg-code)` (dark, `#1e1f2e` light / `#0a0c18` dark)
  - Header: language label (uppercase) + copy button
  - Monospace font: SF Mono / Fira Code / Cascadia Code
  - Border-radius: `var(--radius)` (12px)
  - Box-shadow: `var(--shadow-md)`
- **Streaming cursor**: `::after` pseudo-element, 7x16px accent-color block, blink animation
- **Thinking indicator**: 3 animated dots (`.thinking-dots span`), `thinkPulse` animation

## Input Bar
- Glass morphism background, `backdrop-filter: blur(20px)`
- Padding: 14px 20px 16px
- Textarea: `flex: 1`, border 1.5px, focus: accent border + glow shadow
- Send button: gradient background, white text, SVG icon, hover scale 1.02
- Stop button (during generation): red background, white text
- Hint text: centered, 11px, faded
- Disabled state: `opacity: .35`, `cursor: not-allowed`

## Settings Modal
- Centered modal, max-width: 500px, border-radius: 16px
- Glass morphism backdrop (`backdrop-filter: blur(4px)` on mask)
- Animation: `modalIn` (scale + fade, 250ms cubic-bezier)
- Header: "Settings" + close button
- Provider select: full width, margin-bottom: 16px
- API Key input: `type="password"`, placeholder from provider config
- Custom base URL input (only for "custom" provider)
- API status indicator: green check / red warning
- Model select: full width, section divider above
- Footer: Cancel (secondary) + Save (primary, gradient)
- Save writes to `localStorage` with key `nexuschat_api_key_{provider}` AND updates `keyCache` (reactive)

## Status Float
- Glass morphism, bottom of chat panel
- Dot indicator: green (ready), red (error), accent (thinking, pulse animation)
- Text: provider name + status

## Toast Notification
- Fixed position, bottom 80px, centered
- Background: `var(--text-bright)`, color: `var(--bg)`
- Animation: fade in + slide up, auto-hide after 2s

---

# Functional Requirements

## Multi-Provider Support
- 7 providers: anthropic, deepseek, zhipu, qwen, moonshot, doubao, custom
- Each provider has: `id`, `name`, `keyHint`, `baseUrl`
- Provider select changes available models dynamically
- API Key stored per-provider in `localStorage` as `nexuschat_api_key_{provider}`
- `keyCache = reactive({})` solves Vue non-reactivity with localStorage
- `saveApiKey()` writes to BOTH localStorage AND keyCache (triggers reactive updates)

## Model Configuration
- Anthropic: claude-sonnet-4, claude-haiku-3.5, claude-opus-4
- DeepSeek: deepseek-chat (V3), deepseek-reasoner (R1)
- GLM: glm-4-plus, glm-4-flash, glm-4-long
- Qwen: qwen-plus, qwen-turbo, qwen-max
- Moonshot: moonshot-v1-128k, moonshot-v1-8k
- Doubao: doubao-pro-4k, doubao-pro-32k
- Custom: empty (user provides model name in payload)

## IndexedDB Persistence
- Database name: `nexuschat`, version: 1
- Object store `conversations`: keyPath `id`, index `updatedAt`
- Object store `messages`: keyPath `id`, index `convId`, index `order`
- On mount: load all conversations + messages, sort by `updatedAt`
- On new message: `dbPut('messages', msg)` immediately
- On delete conversation: cascade delete all messages with matching `convId`
- Survives page refresh (messages re-loaded from IndexedDB)

## SSE Streaming
- Anthropic: parse `content_block_delta` → `delta.text`
- OpenAI-compatible: parse `choices[0].delta.content`
- Use `ReadableStreamDefaultReader` + `TextDecoder`
- Buffer incomplete lines, process line by line
- Stop on `data: [DONE]` or `done: true`

## Abort Generation
- Use `AbortController`
- Stop button appears during generation (replaces Send button)
- On abort: save partial response with "*[Stopped]*" note

## Regenerate
- Remove assistant message + all subsequent messages from IndexedDB
- Re-send the user message that triggered the assistant response
- Maintains conversation history correctly

## Theme Toggle
- Light: `#f8f9fc` background, `#ffffff` panel
- Dark: `#0d0f1a` background, `#12142a` panel
- Store preference in `localStorage` as `nexuschat_theme`
- Apply via `document.documentElement.setAttribute('data-theme', ...)`
- Smooth transition: `transition: background .3s, color .3s`

## Mobile Responsive
- Breakpoint: 768px
- Conversation panel: fixed position, slide from left (transform: translateX)
- Mobile toggle button (3-line SVG) appears in topbar
- Overlay behind conversation panel (click to close)
- Message padding reduced on mobile

---

# Edge Function (`edge-functions/api/claude.js`)

Must handle:
1. CORS preflight (`onRequestOptions`)
2. POST with `{ apiKey, provider, baseUrl, payload }`
3. Anthropic native API: `https://api.anthropic.com/v1/messages`, headers: `x-api-key`, `anthropic-version: 2023-06-01`
4. OpenAI-compatible API: dynamic `baseUrl`, headers: `Authorization: Bearer {apiKey}`
5. Return SSE stream: `Content-Type: text/event-stream`, `Cache-Control: no-cache`, `Connection: keep-alive`
6. Error handling: return JSON error with 400/500 status

---

# File Structure

```
nexuschat/
├── public/
│   └── index.html          # Complete SPA (~1100 lines, HTML+CSS+JS)
├── edge-functions/
│   └── api/
│       └── claude.js       # Multi-provider Edge Function
├── references/
│   └── design-system.md  # Design system documentation
├── templates/
│   └── edge-function.js   # Edge Function template
├── prompt-for-submission.txt  # Prompt text for Prompt track
├── edgeone.json            # EdgeOne Pages config
└── package.json           # Project metadata
```

---

# EdgeOne Pages Deployment

1. `edgeone.json` must have:
   ```json
   { "buildCommand": "", "outputDirectory": "public", "installCommand": "", "cleanUrls": true }
   ```
2. Deploy via EdgeOne Pages skill or CLI
3. Verify: set API Key → send message → verify streaming → refresh → verify persistence
4. The public URL must be accessible without authentication

---

# Quality Checklist

- [ ] Glass morphism on topbar/panel/input bar
- [ ] Gradient accents (purple, `#7c5cfc` → `#a78bfa`)
- [ ] Animated gradient background (20s infinite)
- [ ] Smooth animations (200-300ms, cubic-bezier)
- [ ] Dark theme uses `#0d0f1a` (NOT pure black)
- [ ] Messages persist after page refresh
- [ ] SSE streaming works for ALL 7 providers
- [ ] Stop button appears during generation
- [ ] Code blocks have language labels + copy buttons
- [ ] Mobile responsive (conversation panel as slide drawer)
- [ ] No console errors
- [ ] Settings modal works (save/close/cancel)
- [ ] Multi-provider support works (test with at least 2 providers)
- [ ] IndexedDB persistence works (refresh page, messages still there)
- [ ] Deployed to EdgeOne Pages with public URL

---

# Notes for AI Executing This Prompt

- The entire app is a SINGLE HTML FILE (`public/index.html`). Do NOT split into multiple files.
- All CSS goes in `<style>` tag, all JS goes in `<script>` tag.
- Use Vue 3 CDN with Composition API (`setup()` pattern).
- Marked.js config: `marked.setOptions({ highlight: ... })` for code blocks.
- The `copyCode` function must be global: `window.copyCode = function(btn) { ... }`
- Edge Function MUST be in `edge-functions/api/claude.js` (EdgeOne Pages convention).
- All API keys are stored in browser `localStorage` only. Never send keys to any server except the target API.
- Test with at least 2 providers before considering the build complete.

````
