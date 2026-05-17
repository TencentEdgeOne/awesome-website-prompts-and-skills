# 二次元风格个人博客

> **赛道**：Prompt　**作者**：蒲浩 · [GitHub @SpiritoXI](https://github.com/SpiritoXI)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![二次元风格个人博客 cover](../assets/demos/er-ci-yuan-feng-ge-ge-ren-bo-ke.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/er-ci-yuan-feng-ge-ge-ren-bo-ke.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 二次元风格个人博客 |
| 赛道 | Prompt |
| 作者 | 蒲浩 |
| GitHub | [@SpiritoXI](https://github.com/SpiritoXI) |

## 📝 作品介绍

Prompt 亮点
独特的视觉系统：Sakura Glass CSS、CSS-only 樱花花瓣飘落、渐变艺术占位图
完整的 Edge 能力链：GEO 个性化问候 + KV 访客计数 + 评论存储 + 健康检查（6 个 Edge Functions）
Dark/Light 主题切换：完整的 CSS 变量系统工程
中文原生内容：5 篇高质量博客文章、时间线、技能卡片
技术栈
React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion + EdgeOne Pages Edge Functions + KV Storage

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

`````
/---
name: edgeone-pages-anime-blog
description: >-
  二次元风格个人博客 — 基于动漫/二次元审美的个人博客与作品集网站。
  使用 React + Vite + TypeScript + Tailwind CSS 构建，部署到 EdgeOne Pages。
  包含文章展示、实时访客统计（Edge Functions + KV Storage）、评论系统、
  动态主题切换、个性化问候（GEO 定位）等能力。
  适用场景："帮我搭建一个二次元博客"、"deploy an anime blog"、"动漫风格个人站"。
  Do NOT trigger for non-anime/non-blog static sites， or for SaaS products.
metadata:
  author: user
  version: "1.0.0"
---

# 二次元个人博客 — Full Prompt

> **用途**：把下面代码块中的 Prompt 整段复制，喂给执行型 AI（Claude / Cursor / Codex 等），一次性产出 React 博客网站 + Edge Functions，并部署到 EdgeOne Pages。

---

## 完整 Prompt（直接复制以下内容）

````
Sakura Blog — 二次元风格个人博客 — Full Prompt

Build a personal blog website called "Sakura Blog" with an anime/二次元 aesthetic using React + Vite + TypeScript + Tailwind CSS. The design should feel like stepping into a beautifully illustrated anime world — soft， dreamy， and distinctly Japanese otaku culture inspired， with sakura pink， deep indigo， and warm gold accents on a dark base.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 0 — INSTALL EDGEONE PAGES SKILL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Install the EdgeOne Pages skill for Edge Functions， routing， and deployment reference:

    npx skills add edgeone-pages/edgeone-pages-skills

Then deploy this project to EdgeOne Pages.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FONTS & DESIGN SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Google Fonts import:
- Noto Serif SC (400， 500， 700， italic) — headings (elegant CJK serif)
- Zen Maru Gothic (300， 400， 500) — body text (rounded， friendly， Japanese-inspired)

CSS Variables (:root in index.css):

:root {
  --background: 230 30% 6%;
  --foreground: 35 28% 95%;
  --primary: 330 65% 72%;         /* sakura pink */
  --primary-foreground: 230 30% 6%;
  --accent: 45 90% 55%;           /* warm gold */
  --secondary: 240 50% 45%;       /* deep indigo */
  --muted-foreground: 230 15% 60%;
  --border: 330 65% 72% / 0.15;
  --card: 230 25% 9%;
  --radius: 16px;
}

All headings: font-heading (Noto Serif SC)， font-weight 700， text-foreground， tracking-tight， leading-[0.95]
All body text: font-body (Zen Maru Gothic)， font-weight 300， text-muted-foreground， text-sm to text-base
All buttons: font-body， rounded-full (pill shape)

Root font-size: clamp(15px， 1vw + 12px， 17px) for automatic responsive scaling

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SAKURA GLASS CSS (in @layer components)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Two variants — .sakura-glass (subtle) and .sakura-glass-strong (prominent):

.sakura-glass:
- background: rgba(255， 183， 197， 0.03)
- background-blend-mode: luminosity
- backdrop-filter: blur(12px)
- border: none
- box-shadow: inset 0 1px 0 rgba(255， 183， 197， 0.08)， 0 4px 16px rgba(0，0，0，0.2)
- position: relative; overflow: hidden
- ::before pseudo-element creates a gradient border mask (pink-to-transparent gradient， same technique as liquid-glass but with pink tones)
- pointer-events: none on pseudo

.sakura-glass-strong:
- Same structure but backdrop-filter: blur(40px) saturate(130%)
- Stronger box-shadow: inset 0 1px 0 rgba(255， 183， 197， 0.15)， 0 12px 40px rgba(0，0，0，0.35)
- Higher gradient opacity (0.4 / 0.15)
- Subtle pink inner glow

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BACKGROUND DESIGN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Base background: --background (#0d0f1a) — a deep indigo-black， NOT pure black.

Layered effects:
1. Subtle dot pattern: radial-gradient(rgba(255，183，197，0.03) 1px， transparent 1px)， background-size: 24px 24px
2. Floating sakura petals: CSS-only animation with 6-8 small SVG petal shapes floating downward at different speeds (using @keyframes with translateX wobble + translateY fall)， opacity varying between 0.15-0.35， position: fixed， pointer-events: none， z-index: 0
3. Sections have different ambient glows:
   - Hero section: pink glow radial-gradient(ellipse 800px 500px at 50% 40%， rgba(255，183，197，0.06)， transparent 70%)
   - Blog section: indigo glow radial-gradient(ellipse 600px 400px at 50% 50%， rgba(99，102，241，0.04)， transparent 70%)
   - Gallery section: gold glow radial-gradient(ellipse 500px 350px at 50% 40%， rgba(234，179，8，0.04)， transparent 70%)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEPENDENCIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

motion (framer-motion)， lucide-react， tailwindcss-animate

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SITE STRUCTURE — 9 SECTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SECTION 1 — NAVBAR (fixed， full-width)

Fixed at top， z-50. Three-column layout inside max-width 1200px container:
- Left: Brand logo — inline SVG of a simple sakura flower (5 petals， pink fill with drop-shadow) + "Sakura Blog" text (Noto Serif SC 700， 16px， sakura pink --primary color)
- Center: Nav links ("博客"， "作品集"， "关于"， "联系") — Zen Maru Gothic 14px/400， muted-foreground， hover → text-foreground with sakura-pink underline animation (underline slides in from left via scaleX transform)
- Right: Search icon button (sakura-glass pill) + dark/light theme toggle (sun/moon icon， sakura-glass pill)

On scroll (>80px): container gets sakura-glass-strong background with border， rounded-full pill effect. Transition 0.4s.
Mobile: hamburger menu， links stack in sakura-glass-strong dropdown.

SECTION 2 — HERO (full viewport height)

Container: min-height: 100vh， flex column， background var(--background)， overflow hidden.

Content (z-10， centered， flex-end， text-align: center， padding 0 24px 80px， max-width 800px):

Heading (motion.h1， word-by-word blur-in): "在像素与幻想之间" (or "Between Pixels & Dreams") — Noto Serif SC 700， font-size: clamp(1.8rem， 4.5vw， 3.5rem)， sakura-pink text， letter-spacing: -0.02em

Subtext (motion.p， fade-in 0.6s delay): "一个热爱二次元、编程与创作的角落。记录技术探索、分享动漫感悟、展示创意作品。" — Zen Maru Gothic 300， 16px， muted-foreground， max-width 520px

CTA buttons: sakura-glass-strong "开始阅读" + BookOpen icon， and ghost "浏览作品集" + Palette icon

Decorative elements:
- Floating sakura petals (CSS animated， 3-4 petals at different sizes and speeds)
- Subtle glowing orb behind the heading (radial-gradient， pulsing opacity animation)
- Animated typing cursor effect on the subtext

SECTION 3 — FEATURED POSTS (博客精选)

Background: var(--background)， padding 128px 24px.

Header: sakura-glass badge "最新文章" + heading "技术笔记 & 随想" (Noto Serif SC 700， clamp(2rem， 5vw， 3.5rem)) + subtext

3-column responsive grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3， gap-6):

Each blog card: sakura-glass rounded-2xl overflow-hidden， hover: -translate-y-2， transition 0.4s
- Top: Featured image area (aspect-[16/10]， bg gradient with sakura tint， contains a decorative anime-style illustration placeholder using CSS gradient art — NOT a real image， create an abstract pattern with layered gradients that evokes a sunset/sky scene)
- Content padding: p-6， space-y-3
  - Tag pill: sakura-glass rounded-full text-xs "技术" / "随笔" / "教程"
  - Title: font-heading text-lg text-foreground， hover:text-primary transition
  - Date: text-xs text-muted-foreground/50
  - Excerpt: text-sm text-muted-foreground/70 line-clamp-2
  - Read more link: text-primary text-sm font-medium， hover: underline offset-4

Blog post data (5 posts， top 3 shown):

Post 1:
- Title: "用 React 和 Three.js 打造 3D 二次元场景"
- Tag: "技术"
- Date: "2026-04-28"
- Excerpt: "探索如何将 WebGL 技术与日系赛璐璐渲染结合，在浏览器中重现新海诚式光影效果。从着色器到后处理，一步步构建沉浸式 3D 动漫世界。"
- Read time: "8 分钟"

Post 2:
- Title: "2026 年春番追番记录与感想"
- Tag: "随笔"
- Date: "2026-04-15"
- Excerpt: "这个季度值得关注的新番梳理。从原创到改编，从治愈到热血，记录每一部打动我的作品和值得回味的瞬间。"
- Read time: "5 分钟"

Post 3:
- Title: "从零搭建个人博客：技术选型全记录"
- Tag: "教程"
- Date: "2026-04-01"
- Excerpt: "为什么选择 React 而不是 Astro？EdgeOne Pages 的 Edge Functions 怎么用？一篇讲清楚从设计到部署的完整决策链路。"
- Read time: "12 分钟"

Post 4:
- Title: "AI 绘画工具横评：Midjourney vs Stable Diffusion vs NovelAI"
- Tag: "技术"
- Date: "2026-03-20"
- Excerpt: "从二次元画风适配度、出图质量、上手难度三个维度，深度对比当下最热门的三个 AI 绘画平台。"
- Read time: "10 分钟"

Post 5:
- Title: "我的桌面改造：程序员 + 宅男的工位美学"
- Tag: "随笔"
- Date: "2026-03-08"
- Excerpt: "RGB 灯带、机械键盘、手办陈列柜和一个超宽屏显示器。分享我的桌面布局思路和改造过程。"
- Read time: "6 分钟"

"查看全部文章 →" centered link below grid.

SECTION 4 — GALLERY / 作品集

Background: subtle indigo glow， padding 128px 24px.

Header: sakura-glass badge "作品集" + heading "创意角落" + subtext "手绘、像素画、UI 设计与实验性项目"

Masonry-like grid (grid-cols-2 md:grid-cols-3 lg:grid-cols-4， gap-4):

Each gallery item: sakura-glass rounded-xl overflow-hidden， aspect-[4/5] or aspect-[3/4] alternating for visual rhythm.
- Each item uses a CSS gradient art placeholder creating abstract anime-inspired patterns:
  - Item 1: Sunset sky gradient (pink → orange → indigo) with circle "moon"
  - Item 2: Forest scene (deep green → teal gradient with triangle tree shapes)
  - Item 3: Cherry blossom (pink → white gradient with petal dot patterns)
  - Item 4: Night city (deep blue → purple gradient with yellow rectangle "windows")
  - Item 5: Ocean waves (teal → deep blue gradient with wavy CSS shapes)
  - Item 6: Starry sky (dark indigo → black with white dot "stars")
  - Item 7: Abstract kanji (gradient background with large semi-transparent Japanese character)
  - Item 8: Pixel art grid (CSS grid of small colored squares forming a simple character)

On hover: image scales 1.05， sakura-pink border appears， title overlay fades in from bottom.

Below grid: "查看更多作品 →" sakura-glass-strong rounded-full button.

SECTION 5 — LIVE STATS (REAL-TIME COUNTER via Edge Functions + KV)

Background: var(--background)， padding 96px 24px.

Layout: sakura-glass rounded-3xl p-12 md:p-16， inner grid grid-cols-2 lg:grid-cols-4 gap-8 text-center.

4 stat items:
1. (REAL-TIME) "今日访客" — fetched from /api/visitor-count， count-up animation
2. (REAL-TIME) "文章总数" — fetched from /api/posts
3. "创作天数" — static "365+"
4. "开源项目" — static "12"

Real-time items: starts as "—"， fetched from Edge Function， animates with count-up on load， refreshes every 30 seconds.
On fetch failure: show "—"， retry after 60 seconds.

Above real-time items: pulsing green dot "LIVE" indicator.

SECTION 6 — SKILLS / ABOUT

Background: subtle pink glow， padding 128px 24px， max-width 1000px centered.

Header: sakura-glass badge "关于我" + heading "不只是代码，更是创造"

Two-column layout (md:grid-cols-2， gap-12):

Left column:
- Avatar area: Large sakura-glass rounded-2xl square， contains CSS gradient art creating an anime-style avatar silhouette (abstract， not a real photo — use layered gradients with a circle "head" and curved "shoulders" in muted colors)
- Name: "Sakura" — font-heading text-2xl
- Bio: "全栈开发者 / 二次元爱好者 / 创意探索者。相信技术与美学的交汇处藏着最有趣的东西。" — text-muted-foreground
- Social links: GitHub， Twitter/X， Bilibili icons in sakura-glass pills

Right column — Skills grid (2×3):
Each skill card: sakura-glass rounded-xl p-5
  - Icon in sakura-glass-strong circle (40px)
  - Name: font-heading text-base text-foreground
  - Level: text-xs text-primary (e.g. "熟练" / "精通")

Skills:
1. Code icon → "前端开发" — "React / Vue / TypeScript"
2. Palette icon → "UI 设计" — "Figma / 设计系统"
3. Terminal icon → "后端 & DevOps" — "Node.js / Python / Docker"
4. Gamepad2 icon → "游戏开发" — "Unity / WebGL"
5. PenTool icon → "创意写作" — "小说 / 散文 / 脚本"
6. Sparkles icon → "AI 应用" — "提示工程 / AI 绘画"

SECTION 7 — TIMELINE (创作时间线)

Background: var(--background)， padding 128px 24px， max-width 800px centered.

Header: sakura-glass badge "时间线" + heading "创作旅程"

Vertical timeline with alternating left/right cards on desktop， all-left on mobile.

6 timeline entries:
1. "2026-04" — "部署 Sakura Blog 到 EdgeOne Pages" — "使用 Edge Functions + KV Storage 实现实时访客统计和个性化问候" — star icon
2. "2026-03" — "开源像素风 UI 组件库" — "在 GitHub 发布了一套受动漫启发的 React 组件库" — git-branch icon
3. "2025-12" — "完成第一个 Three.js 动漫场景" — "重现了《你的名字》中的彗星场景" — sparkle icon
4. "2025-09" — "开始 AI 绘画创作" — "用 NovelAI 和 Stable Diffusion 制作同人插画" — palette icon
5. "2025-06" — "第一篇技术博客" — "在博客上分享了关于 CSS 动画的深度教程" — file-text icon
6. "2025-01" — "开启编程之旅" — "从 Hello World 到全栈开发的第一步" — rocket icon

Each entry: sakura-glass rounded-xl p-5， connected by a vertical line with sakura-pink dots at each entry point.

SECTION 8 — CONTACT / CTA

Background: warm gold glow， padding 128px 24px， max-width 600px centered.

Heading: "一起创造点什么吧。" — font-heading， clamp(2rem， 5vw， 3.5rem)
Subtext: "无论是技术合作、创意交流还是单纯聊聊天，都欢迎联系我。"

Two buttons:
- sakura-glass-strong "发送邮件" + Mail icon
- sakura-glass "GitHub" + Github icon

Footer: mt-24， border-t border-primary/10
- Left: sakura SVG logo + "© 2026 Sakura Blog. 用热爱构建。"
- Right: "隐私政策" / "RSS" / "站点地图" links in text-muted-foreground/40 text-xs

SECTION 9 — PERSONALIZED GREETING (EdgeOne Pages Edge Function)

Use EdgeOne Pages Edge Functions to implement a personalized greeting based on visitor location.

Create an Edge Function at functions/api/greeting.js that handles:
- GET /api/greeting — reads request.eo.geo for visitor location (country， city)
- Returns a personalized greeting message based on time-of-day and location
- Morning: "早上好" / Afternoon: "下午好" / Evening: "晚上好"
- Appends: "来自{city}的朋友" if city available
- Returns JSON: { greeting， city， country， period }
- Uses request.eo.geo for GEO data (EdgeOne's 3200+ global edge nodes)
- Cache-Control: public， max-age=60

Display the greeting in the Hero section (Section 2)， below the subtext， in a small sakura-glass pill.

EDGE FUNCTIONS (ALL)

Create these Edge Functions:

1. GET /api/greeting — personalized greeting based on GEO + time-of-day
2. GET /api/visitor-count — real-time visitor counter using KV Storage
   - Reads today's date key (visitor:YYYY-MM-DD) from KV
   - Detects new unique visitor: check cookie. If absent: increment counter， set cookie (Max-Age = remaining seconds to UTC midnight， HttpOnly， SameSite=Lax， Path=/)
   - Also maintains lifetime total key visitor:lifetime
   - Returns JSON: { today， lifetime， checkedIn }
   - Cache-Control: no-store， must-revalidate
3. GET /api/posts — returns blog post list (metadata only: title， tag， date， excerpt， readTime， slug)
4. GET /api/posts/:slug — returns full post content for a given slug
5. POST /api/contact — accepts { name， email， message }， validates， stores in KV with key contact:{timestamp}， returns success response
6. GET /api/health — returns { ok: true， timestamp }

V8 runtime — always new Response(JSON.stringify(data))， no Node modules， no Response.json().
KV namespace variable name: blog_kv (global variable， NOT context.env).

KV Storage setup:
- In EdgeOne Pages console， enable KV Storage， create namespace "sakura-blog-kv"， bind to project with variable name blog_kv

KV Data Structure:
- visitor:YYYY-MM-DD → string (today's count)
- visitor:lifetime → string (total visits)
- post:{slug} → JSON (post content)
- contact:{timestamp} → JSON (contact form submission)
- config:greeting_secret → string (optional， for future JWT use)

ANIMATIONS & INTERACTIONS

All sections use useInView from motion/react to trigger entrance animations， once: true， margin: '-80px'.
Entrance: elements animate from { opacity: 0， y: 30-40 } to { opacity: 1， y: 0 } with staggered delays.
Hero heading: word-by-word blur-in (filter: blur(8px) → blur(0px)).
Gallery items: hover scale 1.05 + sakura-pink border fade-in.
Timeline entries: stagger from top， alternating slide-from-left / slide-from-right on desktop.
Theme toggle: smooth transition on all color variables (transition: colors 0.3s).
Respect prefers-reduced-motion on all motion components.

DARK/LIGHT THEME

Default: dark (as described above).
Light theme: swap CSS variables via data-theme="light" on :
- --background: 330 20% 97% (very light pink-white)
- --foreground: 230 25% 15%
- --primary: 330 65% 65% (slightly deeper sakura)
- --card: 0 0% 100%
- Glass effects adjust to light: darker border， subtle shadow
- Sakura petals remain but at lower opacity
- Toggle stored in localStorage， key: sakura-theme

KEY PATTERNS

All section badges: sakura-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-4
All section headings: text-3xl md:text-4xl lg:text-5xl font-heading text-foreground tracking-tight leading-[0.95]
All glass borders use pink tones (rgba(255，183，197，...)) instead of white
Hover transitions: transition-all duration-500 for slow elegant effects
Background base: #0d0f1a (indigo-black)， NOT pure black
Pill buttons: rounded-full (border-radius: 9999px)
Card hover: -translate-y-2 with transition

RESPONSIVE BREAKPOINTS

Mobile ( 1024px): full layout， max-w-7xl container
Test at: 390px， 768px， 1024px， 1440px

SEO & META (index.html)

- charset + viewport
- Sakura Blog — 在像素与幻想之间
- 
- OpenGraph: og:type， og:title， og:description， og:image
- Twitter card: summary_large_image
- Google Fonts preconnect + stylesheet for Noto Serif SC + Zen Maru Gothic
- Favicon: inline SVG sakura flower in /public/favicon.svg

DELIVERY REQUIREMENT

1. Run locally: npm run dev
2. Verify layout at 390 / 768 / 1024 / 1440
3. Verify dark/light theme toggle
4. Verify sakura petal animation
5. Verify Edge Function API wiring (use edgeone pages dev for local testing)
6. Deploy to EdgeOne Pages: npx edgeone pages deploy

PROJECT STRUCTURE

    /sakura-blog
    ├── index.html
    ├── vite.config.ts
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── package.json
    ├── src/
    │   ├── main.tsx
    │   ├── App.tsx
    │   ├── index.css
    │   ├── components/
    │   │  
   ├── Navbar.tsx
    │   │  
   ├── Hero.tsx
    │   │  
   ├── FeaturedPosts.tsx
    │   │  
   ├── Gallery.tsx
    │   │  
   ├── LiveStats.tsx
    │   │  
   ├── About.tsx
    │   │  
   ├── Timeline.tsx
    │   │  
   ├── Contact.tsx
    │   │  
   ├── Footer.tsx
    │   │  
   ├── SakuraPetals.tsx
    │   │  
   ├── ThemeToggle.tsx
    │   │  
   ├── SectionBadge.tsx
    │   │  
   └── BlurText.tsx
    │   ├── lib/
    │   │  
   └── api.ts
    │   └── data/
    │       └── posts.ts
    ├── public/
    │   └── favicon.svg
    └── functions/
        └── api/
            ├── greeting.js
            ├── visitor-count.js
            ├── posts.js
            ├── health.js
            └── contact.js
````

---

## 执行 Checklist

- [ ] 把上面【完整 Prompt】复制给执行型 AI
- [ ] 确认 AI 已执行 `npx skills add edgeone-pages/edgeone-pages-skills`
- [ ] 确认 sakura petal 动画流畅（尊重 prefers-reduced-motion）
- [ ] 确认 dark/light 主题切换正常
- [ ] 确认 5 篇博客文章数据和 CSS gradient art 占位图正常渲染
- [ ] 确认 EdgeOne Pages 控制台已创建 KV 命名空间 "sakura-blog-kv" 并绑定变量名 blog_kv
- [ ] 本地 `npm run dev` + `edgeone pages dev` 双开跑通
- [ ] `/api/visitor-count` 返回 `{ today， lifetime， checkedIn }` 且计数器递增
- [ ] `/api/greeting` 返回带 GEO 信息的个性化问候
- [ ] `/api/posts` 返回文章列表
- [ ] `edgeone pages deploy` 部署成功，拿到预览 URL

---

*品牌：Sakura Blog · 部署：EdgeOne Pages · 技术栈：React + Vite + TypeScript + Tailwind CSS + Edge Functions + KV Storage*

`````
