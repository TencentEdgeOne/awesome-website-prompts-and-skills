# NetKeeper

> **赛道**：Prompt　**作者**：幽静森林
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![NetKeeper demo](../assets/demos/netkeeper.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | NetKeeper |
| 赛道 | Prompt |
| 作者 | 幽静森林 |

## 📝 作品介绍

科技风格的展示落地页。
主要用于saas服务类型的网站

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# NetKeeper — 单页落地页 Prompt
前置说明
这是一个edgeone的pages项目，你需要满足edgeone自动部署的部分
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.
---

## 1. 项目概览与技术栈

构建一个单页落地页——**NetKeeper — 新一代 Web 网络资源管理面板，让每一个域名、证书、服务器都在掌控之中**。

使用 **Vue3 + Vite + TypeScript + Tailwind CSS + shadcn/vue**。视觉风格为科技风、苹果级精致、带自定义"液态玻璃"毛玻璃效果。支持日间/夜间双主题切换，日间暖白底色配沉稳蓝，夜间纯黑底色配亮青蓝，分别以霓虹绿 (#22C55E) / 琥珀橙 (#F59E0B) / 告警红 (#EF4444) 代表正常、警告、危险三种资源状态，营造专业、活力、值得信赖的 DevOps 管理工具氛围。

站点有一个动态功能：实时"服务器心跳检测"面板，由边缘函数 + KV 存储驱动（见边缘函数需求章节）。

---

## 2. 字体与设计系统

Google Fonts 引入：
- **Plus Jakarta Sans** (300, 400, 500, 600, 700, 800) — 标题字体，圆润有张力
- **DM Sans** (300, 400, 500, 600, 700) — 正文字体
- **DM Mono** (400, 500) — 数据/代码等宽字体

Tailwind 配置 — extend fontFamily：
```js
heading: ["'Plus Jakarta Sans'", "sans-serif"]
body: ["'DM Sans'", "sans-serif"]
mono: ["'DM Mono'", "monospace"]
```

CSS 变量 — 双主题支持（`:root` 为日间模式，`.dark` 为夜间模式）：

```css
:root {
  --background: 40 20% 97%;        /* 暖白 #F7F7F5 */
  --foreground: 0 0% 10%;          /* 深灰 #1A1A1A */
  --primary: 210 100% 40%;         /* 沉稳蓝 #0284C7 */
  --primary-foreground: 0 0% 100%;
  --accent-success: 142 60% 40%;
  --accent-warning: 38 92% 48%;
  --accent-danger: 0 80% 55%;
  --border: 0 0% 0% / 0.08;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 10%;
  --radius: 12px;
  --font-heading: 'Plus Jakarta Sans', sans-serif;
  --font-body: 'DM Sans', sans-serif;
  --font-mono: 'DM Mono', monospace;
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 100%;
  --primary: 190 100% 45%;         /* 亮青蓝 #00E5FF */
  --primary-foreground: 0 0% 4%;
  --accent-success: 142 70% 45%;
  --accent-warning: 38 92% 50%;
  --accent-danger: 0 84% 60%;
  --border: 0 0% 100% / 0.12;
  --card: 0 0% 8%;
  --card-foreground: 0 0% 98%;
}
```

所有标题：`font-heading text-foreground tracking-tight leading-[1.1]`
所有正文：`font-body font-normal text-foreground/70 text-sm`
所有按钮：`font-body rounded-lg font-medium`
所有代码/数据值：`font-mono text-primary`

> **主题适配说明**：以下所有 Section 中的颜色类名（如 `text-white` / `text-white/60` / `bg-black` / `bg-white` 等）在双主题实现时应通过 CSS 变量映射自动适配。日间模式下 `text-white` 对应 `var(--foreground)` 的深色值，`bg-black` 对应 `var(--background)` 的暖白色值；夜间模式下 `text-white` 保持白色，`bg-black` 保持纯黑。液态玻璃 `.tech-glass` 在日间模式下背景透明度调整为 `rgba(0, 0, 0, 0.02)`，夜间模式保持 `rgba(255, 255, 255, 0.02)`。

在 index.css 的 `html` 元素上添加：
```css
scroll-behavior: smooth;
scroll-padding-top: 80px;
```

---

## 3. 液态玻璃 CSS（`@layer components`）

两个变体——`.tech-glass`（柔和版）和 `.tech-glass-strong`（强效版）：

### `.tech-glass`
- `background: rgba(255, 255, 255, 0.02);`
- `backdrop-filter: blur(8px);`
- `border: 1px solid rgba(255, 255, 255, 0.06);`
- `box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);`
- `position: relative;`
- `overflow: hidden;`

`::before` 伪元素——渐变边框线：
- `content: '';`
- `position: absolute; inset: 0;`
- `border-radius: inherit;`
- `padding: 1.2px;`
- `background: linear-gradient(180deg,
    rgba(0, 229, 255, 0.35) 0%, rgba(0, 229, 255, 0.08) 30%,
    transparent 50%, transparent 70%,
    rgba(0, 229, 255, 0.08) 85%, rgba(0, 229, 255, 0.35) 100%);`
- `-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);`
- `-webkit-mask-composite: xor;`
- `mask-composite: exclude;`
- `pointer-events: none;`

### `.tech-glass-strong`
同上但：
- `backdrop-filter: blur(50px)`
- `box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(0,229,255,0.05)`
- 渐变线透明度提升至 0.5/0.15

### 状态徽章规则
- **在线/正常**：青蓝色边框 `.tech-glass` + 左侧 4px 霓虹绿实色条
- **警告/即将到期**：琥珀色边框 + glow
- **危险/已过期**：红色边框 + glow + 脉冲动画

---

## 4. 共享 Hook — 数字递增动画

创建 `src/composables/useCountUp.ts`：
- 接收目标数字 + 持续时间参数
- 使用 `requestAnimationFrame` 驱动，从 0 或起始值缓动到目标值
- 支持格式化函数（如 1234 → "1,234"）
- 在 Stats 区域（实时资源计数）使用

---

## 5. 项目 Logo — NetKeeper 品牌标记（共享组件）

创建 `src/components/Logo.vue`。

### Props
- `size?: "nav" | "footer"`（默认 "nav"）
- `asLink?: boolean`（默认 true）— 包装为 `<a href="#home">`

### 布局
水平 flex，`items-center gap-3`，两部分组成：

**第一部分：图标标记** — 引入独立的 SVG 文件 `src/assets/svgs/logo-shield.svg`（非 emoji、非图片），40×40px（nav）/ 48×48px（footer）。一个风格化的"盾牌 + 信号波纹"图标，象征守护与连接，渲染为当前主题下 primary 色带柔和 glow 阴影。SVG 内容如下（保存为独立文件，不在模板中内联）：

```svg
<!-- src/assets/svgs/logo-shield.svg -->
<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- 盾牌底部 -->
  <path d="M32 4L8 16v12c0 16 10.5 28 24 32 13.5-4 24-16 24-32V16L32 4z"
        fill="none" stroke="#00E5FF" stroke-width="2.5" />
  <!-- 信号波纹 — 三道弧线 -->
  <path d="M22 28a14 14 0 0 1 20 0" stroke="#00E5FF" stroke-width="2"
        stroke-linecap="round" />
  <path d="M16 22a26 26 0 0 1 32 0" stroke="#00E5FF" stroke-width="2"
        stroke-linecap="round" opacity="0.6" />
  <path d="M10 16a38 38 0 0 1 44 0" stroke="#00E5FF" stroke-width="2"
        stroke-linecap="round" opacity="0.3" />
</svg>
```

在 Logo.vue 中通过 `<img src="assets/svgs/logo-shield.svg" :width="size === 'nav' ? 40 : 48" :height="size === 'nav' ? 40 : 48">` 引用，或通过 Vite 静态资源导入方式在 build 时打包。

**第二部分：文字商标** — "NetKeeper" 使用 Plus Jakarta Sans，text-foreground：
- nav 尺寸：`text-2xl font-heading tracking-tight`，其中 "Net" 为 text-white，"Keeper" 为 text-primary
- footer 尺寸：`text-3xl`，同理配色

当 `asLink=true` 时，包装为 `<a href="#home" class="flex items-center gap-3 group cursor-pointer transition-opacity hover:opacity-90">`。

在 Navbar（size="nav"）和 CtaFooter 的底部块（size="footer"）中使用此 Logo。

---

## 6. Section 1 — 导航栏（固定，滚动后智能背景）

`<header>` 固定于 top-4，全宽，z-50，px-4 md:px-8，`transition-all duration-300`。

内部容器：`max-w-7xl mx-auto flex items-center justify-between`。

### 左侧
`<Logo size="nav" />`

### 中心（移动端隐藏，md:flex）
tech-glass 圆角矩形药丸 `px-2 py-1.5` 包含导航链接（平滑滚动锚点）：
- "概览" → `#overview`
- "功能" → `#features`
- "监控" → `#monitor`
- "方案" → `#pricing`
- "开始" → `#start`

每个链接：`text-sm font-medium text-white/80 px-3.5 py-1.5 rounded-lg hover:bg-white/5 hover:text-primary transition-colors font-mono`

### 右侧
实心 `bg-primary text-black rounded-lg font-medium` "免费体验"按钮（锚点到 `#start`），带 `<img src="assets/svgs/arrow-up-right.svg" class="w-4 h-4 inline-block align-text-middle">` 图标，px-4 py-2。

### 滚动感知背景
窗口滚动 > 50 时在 `<header>` 上添加 `backdrop-blur-md bg-black/60`。useState + scroll listener（requestAnimationFrame 节流）。

---

## 7. Section 2 — HERO 主视觉（900px 高度）— id="overview"

`<section id="overview">`，relative，overflow-hidden，高度 900px，纯黑背景。

### 背景
动态科技抽象网格（使用 Three.js 或 Canvas 实现的流动网格线 + 粒子）— 非视频，使用 `<canvas>` 渲染，从黑渐变为青蓝色调的动态网络拓扑图。

> **注意**：如果 Three.js 引入过于复杂，可用 CSS 动画网格 + 径向渐变替代。

### 覆盖层
- 径向渐变：`<div class="absolute inset-0 z-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 40%, rgba(0,229,255,0.08), transparent 60%, rgba(0,0,0,0.6) 100%)" />`
- 底部渐变：`absolute bottom-0 left-0 right-0 z-[1] h-64 bg-gradient-to-t from-black to-transparent`

### 内容（z-10，居中，paddingTop: 140px，max-w-6xl mx-auto，text-center）

- **徽章药丸**：tech-glass 圆角矩形，内含 `bg-primary text-black px-2 py-0.5 text-[10px] font-bold rounded` 的 "v2.0" 标签 + "管理你的网络资产，像呼吸一样自然" 文字
- **标题**：使用 motion 组件逐词模糊入场——"你的域名。你的证书。你的服务器。一个面板掌控。"——`text-5xl md:text-6xl lg:text-7xl font-heading text-foreground leading-[1.05] tracking-[-2px]`。关键部分 "一个面板掌控" 使用 text-primary 着色。
- **副标题**（motion，0.8s 延迟）："从域名注册到到期续费，从 SSL 证书到服务器监控 — NetKeeper 将所有网络资源整合为一个清晰、自动化的管理仪表盘。再也不会错过任何截止日期。"——`text-white/60 font-body max-w-2xl mx-auto`
- **CTA 按钮**（motion，1.1s 延迟）：tech-glass-strong 圆角 "立即开始管理" + `<img src="assets/svgs/arrow-up-right.svg" class="w-4 h-4 inline-block align-text-middle">`，以及纯文字 "查看演示" + `<img src="assets/svgs/play.svg" class="w-4 h-4 inline-block align-text-middle">` 图标

### BlurText 组件
创建 `src/components/BlurText.vue`：使用 motion/vue。按词分割文本；每个词通过 IntersectionObserver 动画：
- `filter: blur(8px) → blur(0px)`
- `opacity: 0 → 1`
- `y: 30 → 0`
- 每步 0.35s

---

## 8. Section 3 — 数据能力条

居中，py-20。

### 顶部
tech-glass 圆角徽章 "实时数据能力"

### 下方
响应式网格 `grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 place-items-center mt-10`。每项：`text-lg md:text-2xl font-heading text-white`：
- `<img src="assets/svgs/globe.svg" class="w-5 h-5 inline-block align-text-bottom">` 10,000+ 域名管理
- `<img src="assets/svgs/shield.svg" class="w-5 h-5 inline-block align-text-bottom">` 50,000+ SSL 证书
- `<img src="assets/svgs/server.svg" class="w-5 h-5 inline-block align-text-bottom">` 8,000+ 服务器节点
- `<img src="assets/svgs/bell.svg" class="w-5 h-5 inline-block align-text-bottom">` 99.9% 到期提醒准确率
- `<img src="assets/svgs/pulse.svg" class="w-5 h-5 inline-block align-text-bottom">` 实时心跳检测
- `<img src="assets/svgs/building.svg" class="w-5 h-5 inline-block align-text-bottom">` 2,000+ 企业用户

> 无需第三方品牌 Logo — 使用能力数据避免版权风险。

---

## 9. Section 4 — 产品价值（"为什么选择 NetKeeper"）— id="features"

`<section id="features">`，全宽，min-height 600px，py-24 px-6 md:px-16 lg:px-24。

### 背景
深色径向渐变 + 微弱科技图案纹理。

### 内容（z-10，居中）
- **徽章**：tech-glass — "核心价值"
- **标题**："别让一个过期的域名毁了你的业务。"——`text-4xl md:text-5xl lg:text-6xl font-heading text-white`
- **副标题**："NetKeeper 用自动化生命周期管理，把"我忘了续费"永远变成过去式。"

### 三个大卡片
横向排列：`grid-cols-1 md:grid-cols-3 gap-8`

1. **自动化提醒引擎** — 到期前 3个月 → 1个月 → 15天 → 7天 → 3天 → 1天，逐级递进提醒，支持邮件 + 浏览器桌面通知
2. **全生命周期可视化管理** — 每个资源的创建、到期、过期、赎回、删除各阶段完整时间轴 + 进度条 + 倒计时，一目了然
3. **一站式聚合面板** — 域名、SSL、服务器、网站四维资源统一管理，相互关联，数据联动展示

---

## 10. Section 5 — 功能棋盘（交替排列）

py-24 px-6 md:px-16 lg:px-24。

### 标题区
- 徽章："核心功能"
- 标题："每一个细节，都为不遗漏而生。"

每行使用 `aspect-video` (16:9) + `object-cover` 的图片容器，图片为功能界面 mockup。

### Row 1（文字左，图片右）
- **H3**：`font-heading text-2xl md:text-3xl` — "域名全生命周期管理"
- **功能列表**（带 check 图标）：
  - WHOIS 智能查询，自动提取创建/到期/删除时间
  - 自定义续费提醒策略（时间点可配置）
  - 完整时间轴：正常 → 即将到期 → 已过期 → 赎回期 → 待删除
  - 支持多后缀自定义生命周期策略（如 .cn vs .com 不同配置）
- **按钮**：tech-glass-strong "了解更多"
- **右侧图片**：NetKeeper 域名管理界面 mockup

### Row 2（图片左，文字右，`lg:flex-row-reverse`）
- **左侧图片**：SSL 证书管理界面 mockup
- **H3**："SSL 证书指纹管理，轻量又安全"
- **功能列表**：
  - 仅保存公钥指纹，不保存证书全文
  - 起止时间 + 到期前阶梯提醒
  - 批量导入、更新、删除
  - 证书与网站自动关联展示

### Row 3（文字左，图片右）
- **H3**："服务器心跳检测 + 在线状态面板"
- **功能列表**：
  - 通过 curl 请求获取 CPU / 内存 / 磁盘 / 在线时间
  - hash 鉴权 Token，GET/POST 双协议支持
  - 历史数据记录，状态变化趋势图
  - 卡片式展示，负载/内存/磁盘使用率图表 + 徽章

### Row 4（图片左，文字右，`lg:flex-row-reverse`）
- **左侧图片**：综合网站管理界面 mockup
- **H3**："网站管理——资源的交汇点"
- **功能列表**：
  - 直观展示域名 → SSL → 服务器三层关联
  - 标记后端技术栈（C#、PHP、Node.js 等）使用彩色徽章
  - 自动展示关联资源的到期时间
  - 多服务器绑定，统一检查站点状态

---

## 11. Section 6 — 功能网格（4 列特写）

徽章："更多能力"
标题："你需要的，这里都有。"

4 列卡片：`grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`。每张：`tech-glass rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-0.5`。

- 图标：tech-glass-strong 圆角 `w-10 h-10` 圆形容器内的 SVG 图标（对应路径见下表第二列）
- 标题：`text-lg font-heading text-white`
- 描述：`text-white/60 font-body text-sm`

| 图标 | 标题 | 描述 |
|------|------|------|
| `<img src="assets/svgs/bell.svg" class="w-6 h-6">` | 智能提醒系统 | 3个月 / 1个月 / 15天 / 7天 / 3天 / 1天六级提醒，支持自定义时间点，桌面通知 + 邮件 + 站内 Toast |
| `<img src="assets/svgs/clock.svg" class="w-6 h-6">` | 倒计时进度条 | 每个资源都有清晰的创建→到期时间轴，进度条实时展示剩余比例，负数表示已过期天数 |
| `<img src="assets/svgs/shield.svg" class="w-6 h-6">` | 后缀生命周期配置 | 按域名后缀统一配置生命周期策略（如 .cn 续费窗口不同），未配置则使用 .* 通用策略 |
| `<img src="assets/svgs/users.svg" class="w-6 h-6">` | 用户独立空间 | 每个用户管理自己的资源、提醒配置，数据隔离存储，安全可靠 |

---

## 12. Section 7 — 功能模块市场 — id="monitor"

`<section id="monitor">`，py-24 px-6 md:px-16 lg:px-24。

### 标题区（居中）
- 徽章："实时监控台"
- 标题："所有资源的健康状态，一眼尽收。"
- 副标题："从域名到期倒计时到服务器内存水位，我们为你盯紧每一秒。"

### 3 列卡片网格
`grid-cols-1 md:grid-cols-3 gap-6, max-w-6xl mx-auto`。

每张卡片使用 motion `whileInView` (once: true) 渐入：opacity 0→1，y 20→0，延时 0 / 0.12 / 0.24s。

卡片设计：`<motion.article>` 带 `tech-glass rounded-xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(0,229,255,0.15)]`。

#### 上半部分
模拟服务器状态面板的占位 UI，可以是纯 CSS 绘制的"模拟仪表盘"——如圆环进度条、脉冲绿点、数据行。

#### 下半部分 `p-6 space-y-3`
- **状态标签**（tech-glass 小徽章）："在线" + `<img src="assets/svgs/status-online.svg" class="w-3 h-3 inline-block align-text-bottom">` / "警告" + `<img src="assets/svgs/status-warning.svg" class="w-3 h-3 inline-block align-text-bottom">` / "危险" + `<img src="assets/svgs/status-danger.svg" class="w-3 h-3 inline-block align-text-bottom">`
- **名称**：`text-lg font-heading text-white`
- **数据行矩阵**：
  - CPU 负载：0.12, 0.08, 0.05
  - 内存：使用 3.2GB / 总量 8GB
  - 磁盘：使用 45% / 总量 256GB
  - 在线时间：87天 12小时
- **底部**：到期倒计时（`text-primary font-mono`）+ "详情"按钮

### 三张卡片示例
1. **主节点服务器** — 状态：在线 `<img src="assets/svgs/status-online.svg" class="w-3 h-3 inline-block align-text-bottom">` — CPU 0.12, 0.08, 0.05 | 内存 3.2/8GB | 磁盘 45% | 到期倒计时 127天
2. **API 网关集群** — 状态：警告 `<img src="assets/svgs/status-warning.svg" class="w-3 h-3 inline-block align-text-bottom">` — CPU 0.45, 0.38, 0.22 | 内存 6.1/8GB | 磁盘 72% | 到期倒计时 14天
3. **海外边缘节点** — 状态：在线 `<img src="assets/svgs/status-online.svg" class="w-3 h-3 inline-block align-text-bottom">` — CPU 0.08, 0.05, 0.03 | 内存 1.8/4GB | 磁盘 32% | 到期倒计时 231天

---

## 13. Section 8 — 实时数据面板（心跳检测）

### 背景
深色背景 + 闪烁粒子动画（极简 Canvas 或 CSS）

### 内容
`tech-glass rounded-2xl p-12 md:p-16`，内部网格 `grid-cols-2 lg:grid-cols-4 gap-8 text-center`。

> **布局规则**：所有 4 个数据项使用相同的网格行，自然基线对齐。实时计数器使用绝对定位的"LIVE"指示器位于数字上方——不对其他 3 项产生偏移。

#### 数据项 1（**实时**）
- 容器：`<div class="relative flex flex-col items-center">`
- 绝对定位指示器：`<div class="absolute -top-7 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-[10px] font-mono font-semibold tracking-wider text-primary">` + `<span class="w-2 h-2 rounded-full bg-primary animate-pulse">` + "LIVE"
- 数值：初始为 "—"，从 `/api/heartbeat-stats` 获取
- 标签："当前在线服务器 " + `<img src="assets/svgs/monitor.svg" class="w-4 h-4 inline-block align-text-middle">`

#### 数据项 2–4（静态）
- "99.9%" — "系统可用性"
- "<50ms" — "平均告警响应"
- "10,000+" — "每日检测请求"

所有数值：`text-4xl md:text-5xl lg:text-6xl font-heading text-white leading-none font-mono`
所有标签：`text-white/50 font-body font-light text-sm mt-3`

实时值使用 countUp 动画首次加载，每 15 秒刷新。获取失败时显示 "—"，30 秒后重试。

---

## 14. Section 9 — 用户证言 — id="pricing"

`<section id="pricing">`

### 头部
- 徽章："用户故事"
- 标题："被上千名运维和站长验证。"

### 3 列网格
`grid-cols-1 md:grid-cols-3 gap-6`。每项：`tech-glass rounded-xl p-8`。

- 头部：`<img src="assets/svgs/avatar-1.svg" class="w-10 h-10 rounded-full">` + 公司名称（每个证言使用不同的头像 SVG：`avatar-1.svg`、`avatar-2.svg`、`avatar-3.svg`）
- 引用：`text-white/80 font-body text-sm`
- 姓名 + 职位：`text-white font-body font-medium text-sm` / `text-white/50 font-body text-xs`

#### 证言 1
"以前我管理 200 多个域名全靠 Excel 表格 + 手机闹钟。自从用了 NetKeeper，自动提醒 + 可视化时间轴再也没让我错过一次续费。"
— **张明**，某互联网公司运维负责人

#### 证言 2
"服务器心跳检测功能太实用了。之前有几台海外节点挂了 3 天才发现，现在不到 5 分钟就收到告警。年度预算直接省了 30%。"
— **李婷**，SaaS 平台 CTO

#### 证言 3
"API 简洁，部署方便，EdgeOne 加持下全球访问速度极快。最重要的是——开源友好，我们团队自己二次开发也很顺畅。"
— **陈浩**，独立开发者/站长

---

## 15. Section 10 — CTA 页脚 — id="start"

`<section id="start">`

### 背景
深色背景 + 科技网格线。

### 内容（z-10，居中）
- **标题**："掌控你的网络世界，从今天开始。"——`text-5xl md:text-6xl lg:text-7xl font-heading drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]`，其中"掌控" 使用 text-primary
- **副文本**："加入 2,000+ 运维团队和独立开发者，用 NetKeeper 让每一个域名、证书、服务器都在你的掌心之中。"
- **两个按钮**：tech-glass-strong "开始免费使用" + `<img src="assets/svgs/arrow-up-right.svg" class="w-4 h-4 inline-block align-text-middle">`，以及实心 `bg-primary text-black` "查看 GitHub"

### 页脚块
`mt-32 pt-8 border-t border-white/10`：
- `<Logo size="footer" />`（SVG 盾牌 48×48 + "NetKeeper" 文字），`mb-6`
- 版权行：`<div class="flex items-center justify-between flex-wrap gap-4 text-white/30 text-xs font-mono">`
  - 左侧：`© {new Date().getFullYear()} NetKeeper. Built with stability.`
  - 右侧：链接（隐私、条款、联系我们）

---

## 16. 边缘函数需求 — "服务器心跳检测"实时面板

站点唯一的动态后端功能：通过边缘函数 + KV 存储实现的服务器在线统计面板。必须是真实动态端点，不可硬编码。

### 功能规范

#### 端点 1：`GET /api/heartbeat-stats`
- 从 KV 读取 `heartbeat:today-count`（当天检测到的活跃服务器数）
- 读取 `heartbeat:lifetime`（累计检测总数）
- 读取 `heartbeat:online-now`（当前在线服务器数）
- 返回 JSON：
```json
{
  "todayActive": <number>,
  "lifetimePings": <number>,
  "onlineNow": <number>,
  "updatedAt": "<ISO string>"
}
```

#### 端点 2：`POST /api/heartbeat-report`
- 服务器端调用 curl 时触发此端点
- 每次收到有效的服务器心跳请求，递增今日计数和累计计数
- 使用唯一的服务器 hash token 防重复计数

### 技术细节
- 缓存头：`Cache-Control: no-store, must-revalidate`
- 标准 Web API（Request, Response）— V8 运行时，非 Node.js。不可使用 Node 内置库。
- KV 绑定在边缘函数配置中定义。

### 前端交互
挂载时 `fetch('/api/heartbeat-stats')`，解析 JSON，动画递增到 todayActive，每 15 秒刷新。失败时显示 "—"，30 秒重试。

---

## 17. HTML Head 配置（index.html）

在 `<head>` 中：
- charset + viewport
- `<meta name="color-scheme" content="light dark" />`
- `<title>NetKeeper — 网络资源管理面板，让你不再错过任何到期</title>`
- `<meta name="description" content="一站式管理域名、SSL证书、服务器和网站的自动化面板。智能到期提醒、全生命周期进度条、实时心跳检测 — 让每一个网络资源都在掌控之中。" />`

### OpenGraph
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://netkeeper.tobiasliu.cn" />
<meta property="og:title" content="NetKeeper — 网络资源管理面板" />
<meta property="og:description" content="管理域名、SSL 证书、服务器和网站。智能提醒、进度条、心跳检测。" />
<meta property="og:image" content="https://netkeeper.tobiasliu.cn/og-image.png" />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="NetKeeper — 网络资源管理面板" />
<meta name="twitter:description" content="管理域名、SSL 证书、服务器和网站。智能提醒、进度条、心跳检测。" />
<meta name="twitter:image" content="https://netkeeper.tobiasliu.cn/og-image.png" />
```

### 其他
- Google Fonts preconnect + stylesheet for Plus Jakarta Sans + DM Sans + DM Mono
- Favicon：`/favicon.svg` 位于 /public，引用 `src/assets/svgs/logo-shield.svg` 的简化单色版本（单色填充 currentColor，viewBox 0 0 64 64）

---

## 18. 关键模式公约

### 区域模板
- 区域徽章：`tech-glass rounded-lg px-3 py-1 text-xs font-medium text-primary font-mono inline-block mb-4`
- 区域标题：`text-4xl md:text-5xl lg:text-6xl font-heading text-white tracking-tight leading-[1.05]`

### 状态指示器
所有状态指示器使用脉冲圆点 SVG 图片配合文字标签。在线/正常：`<img src="assets/svgs/status-online.svg" class="w-3 h-3 inline-block">`，警告：`<img src="assets/svgs/status-warning.svg" class="w-3 h-3 inline-block">`，危险/错误：`<img src="assets/svgs/status-danger.svg" class="w-3 h-3 inline-block">`。

### 倒计时/进度条
使用 tech-glass 进度条容器 + 渐变填充条（绿→黄→红根据剩余比例变化）。

### 进度条颜色梯度
- 剩余 >60%：绿色
- 剩余 30-60%：黄色
- 剩余 <30%：橙色
- 已过期：红色

### 卡片交互
hover 时上移 1px + 边框发光。

### Toast 通知
- 所有消息提示使用 Toast 在右上角弹出
- 成功：绿色
- 警告：橙色
- 错误：红色
- 提醒也使用 Toast 作为通知方式（但桌面通知也要有）
- 叠加层级最高（z-100）

### 外部容器
`bg-[#0A0A0A] overflow-visible`

### 所有图片
`object-cover` + 容器 `overflow-hidden` + 圆角

### 锚点导航
原生平滑滚动（scroll-behavior: smooth + scroll-padding-top: 80px）

### 动画
- 尊重 `prefers-reduced-motion`
- 能提供动画的地方就提供动画

### 双主题模式
支持日间/夜间两种界面。在导航栏右侧提供主题切换开关（`<img src="assets/svgs/sun.svg" class="w-4 h-4 inline-block">` / `<img src="assets/svgs/moon.svg" class="w-4 h-4 inline-block">` 图标），点击切换 `<html>` 标签的 `.dark` 类。默认跟随系统 `prefers-color-scheme`。所有颜色通过 CSS 变量自动适配。此外在 `<head>` 中添加 `<meta name="color-scheme" content="light dark" />` 以支持浏览器原生主题切换。

### 桌面通知
使用 Notification API，需用户授权。

### 表单校验
所有表单数据校验保持健壮，错误状态使用 toast 提示而非 alert()。

### 默认排序
所有列表默认按到期时间升序排列。

### 倒计时格式
`XX天XX小时XX分`，正数为剩余时间，负数为已过期天数。

---

## 19. 依赖清单

```json
{
  "dependencies": {
    "vue": "^3.4",
    "vue-router": "^4.3",
    "motion": "^11.0",
    "tailwindcss-animate": "^1.0",
    "shadcn-vue": "latest"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0",
    "vite": "^5.4",
    "typescript": "^5.5",
    "tailwindcss": "^3.4",
    "autoprefixer": "^10.4",
    "postcss": "^8.4"
  }
}
```

> **SVG 资源**：所有图标、状态指示器、头像占位图等均以独立的 `.svg` 文件存放在 `src/assets/svgs/` 目录下，而非通过 npm 图标库引入。文件清单详见各相关 Section 的引用路径。
> **注意**：Three.js 或简单 Canvas 为可选依赖（仅用于 Hero 动画背景）。禁止使用 hls.js。

---

## 20. 部署指南

### 环境约束
运行时可能没有全局 `npm`。降级顺序：

1. 如果有 `npm` / `npx`，优先 `npx <package>@latest`
2. 如果只有 `pnpm` / `yarn`，使用 `pnpm dlx` / `yarn dlx`
3. 如果没有任何 Node 包管理器，下载 CLI 为预构建二进制（`curl -fsSL <release-url> -o <bin> && chmod +x <bin>`）并通过绝对路径调用
4. 永远不要因全局安装失败而阻塞构建。如果 CLI 无法安装，仍然生成完整项目 + 输出明确的手动部署步骤

### 构建与部署步骤
```bash
# 1. 安装依赖
npm install

# 2. 构建前端
npm run build    # vite build

# 3. 复制边缘函数到 dist
cp -r edge-functions dist/

# 4. 部署到 EdgeOne Pages
# 按照 EdgeOne Pages 文档完成部署
```

### 部署后验证
1. 首页加载后，心跳面板显示 LIVE 指示器 + 实时数据
2. 导航平滑滚动正常
3. 所有 Section 可见且布局正确
4. 移动端响应式正常
5. 返回 (a) 在线预览 URL 或 (b) 项目路径 + 精确手动命令
6. 附带 EdgeOne 控制台链接 + 确认边缘函数和 KV 绑定活跃

````
