# LUCID/01

> **赛道**：Prompt　**作者**：张miao · [GitHub @zhangmiao03](https://github.com/zhangmiao03)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![LUCID/01 cover](../assets/demos/lucid-01.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/lucid-01.gif" alt="LUCID/01 demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | LUCID/01 |
| 赛道 | Prompt |
| 作者 | 张miao |
| GitHub | [@zhangmiao03](https://github.com/zhangmiao03) |

## 📝 作品介绍

LUCID/01 是一款虚构的 AI 智能眼镜概念电商落地页，采用 React + Vite + TypeScript + Tailwind CSS 技术栈构建，部署于 EdgeOne Pages。

设计理念： 视觉风格追求通透、明亮的未来感美学，以深海蓝为基底（#06111f），搭配冰蓝色渐变、青色高光和银色点缀。不同于传统的暗黑赛博朋克风格，LUCID/01 呈现出一种高端时尚科技品牌应有的呼吸感与精致度。

核心功能：

动态沉浸式背景 — Canvas 实现的流动光晕、粒子、扫描线效果
AI HUD 演示 — 5 个生活场景（通勤、会议、旅行、运动、创作）的实时 AI 叠加层演示
产品配置器 — 4 种镜框颜色（月光银、石墨黑、冰钛金、沙丘金）实时切换
Reality Cards — 可截图分享的诗意生活瞬间卡片
完整电商流程 — 购物车、结算、预约演示表单（含 localStorage 持久化）
隐私控制中心 — 可视化开关管理 AI 功能状态
技术亮点：

Tailwind CSS v4 零配置集成
EdgeOne Pages Edge Functions 实现访问统计和表单提交
玻璃拟态（Glassmorphism）设计系统
Framer Motion 流畅动画

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills

Build a premium single-page AI glasses ecommerce landing page using React + Vite + TypeScript + Tailwind CSS + shadcn/ui， and deploy it to EdgeOne Pages.

PROJECT NAME
LUCID/01

TAGLINE
Reality， gently annotated.

GOAL

Create a cinematic， premium， futuristic landing page for a fictional AI glasses brand called LUCID/01.

This should feel like:
- a high-end tech fashion campaign
- a futuristic hardware launch page
- a premium ecommerce landing page
- a believable AI lifestyle product experience

This should NOT feel like:
- a generic SaaS website
- a boring electronics page
- a dark empty cyberpunk page
- a dashboard
- a cluttered sci-fi UI
- a template site

The main concept is:
LUCID/01 is not just a product page. It should feel like a glimpse into daily life enhanced by AI glasses.

═══════════════════════════════════════════════════
CORE VISUAL DIRECTION
═══════════════════════════════════════════════════

The overall page must feel brighter， more transparent， and more refined than a typical dark sci-fi page.

Use a luminous， airy blue-futuristic visual system:
- deep navy base
- soft blue gradients
- ice blue glow
- cyan highlights
- cool white accents
- subtle silver tones
- transparent glass layers
- soft light bloom
- clean futuristic atmosphere

Important:
Do NOT make the page too dark.
Do NOT make the background black and empty.
Do NOT use red as a major visual color.
Do NOT use heavy cyberpunk neon.
Do NOT make the interface look crowded.

The whole page should feel:
- luminous
- transparent
- elegant
- futuristic
- premium
- clean
- editorial
- fashionable
- believable

═══════════════════════════════════════════════════
BACKGROUND SYSTEM
═══════════════════════════════════════════════════

The homepage must have a beautiful dynamic wallpaper / animated background instead of a static plain background.

Create a reusable component:
`BackgroundWallpaper.tsx`

The animated background should include:
- slow-moving blue and ice-blue gradient light
- soft glowing radial light fields
- subtle futuristic grid lines
- low-opacity floating digital numbers
- tiny coordinate fragments
- soft particles
- transparent light streaks
- a very light ambient sci-fi atmosphere

The background should feel clean and expensive， not noisy.

Use:
- 60% soft deep blue base
- 20% luminous blue light
- 10% transparent glass haze
- 10% silver-white glow

Make sure foreground content remains readable.

═══════════════════════════════════════════════════
PRODUCT DESIGN REQUIREMENT
═══════════════════════════════════════════════════

The product must be redesigned as:
**lightweight rimmed AI glasses**
or
**slim frame AI glasses**

This is extremely important.

The glasses should look like:
- everyday wearable smart glasses
- slim frame glasses
- refined rimmed eyewear
- lightweight and elegant
- slightly rectangular or softly squared frame shape
- premium and believable
- minimal but futuristic

The glasses should NOT look like:
- giant AR visor helmets
- ski goggles
- heavy wraparound goggles
- cartoon glasses
- oversized sci-fi headgear

The product should feel like a next-generation version of real premium eyewear.

Create:
`GlassesModel.tsx`

Support 4 color variants:
- Moon Silver
- Graphite Black
- Ice Titanium
- Sand Gold

═══════════════════════════════════════════════════
HERO SECTION DIRECTION
═══════════════════════════════════════════════════

The Hero should be visually striking and be the strongest section of the page.

Do NOT use a video.
Instead， create a premium hero composition with:
- a large central visual
- a fashionable model or stylized figure wearing LUCID/01 glasses
- a futuristic but clean city-tech atmosphere
- transparent sci-fi overlays around the center area
- elegant glowing interface fragments
- some subtle floating HUD labels

The center of the Hero should have a stronger sci-fi feeling， but still remain clean and premium.

The hero should feel like:
- a future lifestyle scene
- a premium fashion-tech campaign
- a wearable AI world
- elegant science fiction， not loud science fiction

Hero layout:
- large center composition
- left or center-aligned text content
- product / human visual in the main focus area
- layered transparent HUD elements floating near the center
- soft luminous glow behind the main subject

Hero text:
Badge:
"AI GLASSES CONCEPT · 2026"

Headline:
"Reality， gently annotated."

Subheadline:
"LUCID/01 is a lightweight AI glasses concept that layers translation， navigation， meeting intelligence， and subtle memory support onto daily life."

CTA buttons:
- "See Through AI"
- "Choose Your Frame"

Floating chips / labels:
- Live Translate
- Route 200m
- Meeting Brief
- Memory Ready
- Privacy On

Bottom metrics:
- 38g Feather Frame
- 12h Smart Assist
- Local-first Memory

═══════════════════════════════════════════════════
TECH STACK
═══════════════════════════════════════════════════

Use:
- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- framer-motion

Avoid:
- heavy 3D libraries
- Three.js unless absolutely necessary
- unstable external media dependencies
- fake buttons
- non-functional interactions

═══════════════════════════════════════════════════
RENDERING SAFETY RULES
═══════════════════════════════════════════════════

The page must never render as a blank white page.

Required:
1. In `src/main.tsx`， import `./index.css`.
2. In `src/index.css`， include:
   - `@tailwind base;`
   - `@tailwind components;`
   - `@tailwind utilities;`
3. Wrap the app with:
   ``
4. Create `ErrorBoundary.tsx` and wrap the full app with it.
5. If a runtime error occurs， show a styled dark-blue fallback panel instead of a blank page.
6. Use local fallback data for initial rendering.
7. API failures must never block page rendering.

═══════════════════════════════════════════════════
DEV SERVER AND PREVIEW URL SAFETY
═══════════════════════════════════════════════════

Before returning any preview URL， verify that the preview is serving the current LUCID/01 project.

Required steps:
1. Check whether the Vite port is already occupied.
2. If an old Vite / Node process is occupying the port， stop it before starting the new dev server.
3. Start the current dev server explicitly， for example:
   `npm run dev -- --host 0.0.0.0 --port 5173`
4. Do not reuse an old preview URL.
5. Verify the preview contains:
   - title includes `LUCID/01`
   - hero headline includes `Reality， gently annotated.`
   - bright blue futuristic background
   - the AI glasses project， not a stale cached page
6. Add a hidden build marker:
   `LUCID/01 AI Glasses Current Build`
7. Confirm this marker exists before returning the preview URL.

═══════════════════════════════════════════════════
DESIGN SYSTEM
═══════════════════════════════════════════════════

Use a premium glassmorphism-inspired visual system.

Create reusable styles:

1. `.optical-glass`
- transparent blue glass panel
- blur background
- subtle border
- soft inner highlight
- elegant glow

2. `.optical-glass-strong`
- stronger glass effect
- used for hero panels， product cards， modals， and important sections

3. `.hud-panel`
- readable futuristic transparent panel
- soft cyan border
- light glow
- used for HUD content

4. `.digital-number`
- low-opacity mono floating numbers
- subtle decorative background detail

Typography should feel premium and editorial.

Recommended fonts:
- Instrument Serif for major headings
- Inter for body
- JetBrains Mono for HUD labels and tiny technical text

═══════════════════════════════════════════════════
SITE STRUCTURE
═══════════════════════════════════════════════════

Build these 10 sections in this order:

1. Fixed Navbar
2. Hero
3. See Through AI Demo
4. Product Selector
5. Feature Highlights
6. Reality Cards
7. Vision Pulse + Privacy
8. Cart + Checkout
9. Demo Form
10. Closing CTA + Footer

Keep the site focused， polished， and well-paced.

═══════════════════════════════════════════════════
SECTION 1 — NAVBAR
═══════════════════════════════════════════════════

Top fixed navbar.

Left:
- LUCID/01 logo

Center links:
- Experience
- Product
- Features
- Privacy
- Demo

Right:
- CTA button: `Book Demo`

Style:
- transparent at top
- becomes soft glass on scroll
- rounded
- premium
- minimal

═══════════════════════════════════════════════════
SECTION 2 — HERO
═══════════════════════════════════════════════════

This is the key visual section.

Build a highly polished Hero with:
- dynamic luminous wallpaper background
- a central premium composition
- a stylish model or stylized human figure wearing slim frame AI glasses
- subtle sci-fi feeling concentrated in the middle
- floating transparent interface fragments
- soft glow and layered depth

Important:
The center composition should include:
- the model / figure
- the glasses
- a futuristic aura
- clean transparent HUD elements
- slight cinematic depth

Do not make it overly dark or visually heavy.

Text content:
Badge:
"AI GLASSES CONCEPT · 2026"

Headline:
"Reality， gently annotated."

Subheadline:
"LUCID/01 is a lightweight AI glasses concept that quietly layers useful intelligence onto the world around you."

Buttons:
- "See Through AI"
- "Choose Your Frame"

Floating labels:
- Live Translate
- Route 200m
- Meeting Brief
- Memory Ready
- Privacy On

Metrics:
- 38g Feather Frame
- 12h Smart Assist
- Local-first Memory

═══════════════════════════════════════════════════
SECTION 3 — SEE THROUGH AI DEMO
═══════════════════════════════════════════════════

Title:
"See Through AI"

This is the main interactive feature.

Layout:
- scene switcher on the left
- large transparent HUD viewport on the right

Scene tabs:
- Commute
- Meeting
- Travel
- Run
- Create

HUD viewport requirements:
- brighter and more transparent than a typical dashboard
- readable cyan / white text
- translucent blue interface layers
- detection boxes
- subtle scan line
- floating labels
- coordinates
- summary cards
- route cards
- elegant motion

Scene content examples:

Commute:
- TURN LEFT IN 200M
- TRANSLATING: EXIT
- METRO LINE 2 · 3 MIN
- ETA 08:42

Meeting:
- MEETING BRIEF READY
- DECISION: Beta test this Friday
- TODO: Send interaction draft before 18:00
- RISK: Scope may expand

Travel:
- IDENTIFIED: MODERNIST BUILDING
- MENU TRANSLATION ACTIVE
- CAFE NEARBY · 4.8
- WALK 7 MIN

Run:
- PACE 5'42" / KM
- HEART RATE 142 BPM
- GOAL 72%
- KEEP CURRENT RHYTHM 8 MIN

Create:
- HIGHLIGHT MOMENT DETECTED
- TITLE: THE CITY REBOOTS AT DUSK
- MEMORY CARD SAVED
- POST IDEA READY

═══════════════════════════════════════════════════
SECTION 4 — PRODUCT SELECTOR
═══════════════════════════════════════════════════

Title:
"Choose Your Frame"

Show the product clearly with the corrected rimmed AI glasses design.

Left:
- large product display

Right:
- product name: LUCID/01
- price: From ¥3，999
- 38g
- up to 12h battery
- Whisper HUD
- Local-first Memory

Color options:
- Moon Silver
- Graphite Black
- Ice Titanium
- Sand Gold

Buttons:
- Add to Cart
- Book Demo

Changing color should update the product visually.

═══════════════════════════════════════════════════
SECTION 5 — FEATURE HIGHLIGHTS
═══════════════════════════════════════════════════

Create 4 premium feature cards:

1. FeatherFrame
"38g of all-day comfort."

2. Whisper HUD
"Information appears near your vision， not in front of your life."

3. Context AI
"Translation， navigation， meeting capture， and memory support."

4. Privacy Pulse
"Visible privacy status you can trust."

Use elegant glass cards with subtle hover motion.

═══════════════════════════════════════════════════
SECTION 6 — REALITY CARDS
═══════════════════════════════════════════════════

Title:
"Reality Cards"

Make this section visually shareable and screenshot-worthy.

Tabs:
- Commute
- Meeting
- Travel
- Create

Each card should:
- be vertical
- look premium
- use transparent blue glass styling
- include timestamp
- include LUCID/01 mark
- include 3 HUD data lines
- include 1 poetic line

Example poetic lines:
- "The city did not become faster. You finally learned how to read it."
- "The meeting ended. The decisions were already waiting."
- "Language stopped being a wall. It became a subtitle."
- "Reality looked back and offered a title."

Buttons:
- Copy Caption
- Save Card

═══════════════════════════════════════════════════
SECTION 7 — VISION PULSE + PRIVACY
═══════════════════════════════════════════════════

Part A: Vision Pulse

Title:
"Vision Pulse Today"

Fetch from:
`/api/vision-pulse`

Display:
- today visitors
- lifetime visitors
- checked-in status
- UTC date

If API fails:
- show fallback UI
- page must continue working

Part B: Privacy

Title:
"Privacy You Can See"

Create 3 cards:
- Visible Capture Light
- One-tap Silence
- Local-first Memory

Each card has a toggle.
Persist toggle states in localStorage.

═══════════════════════════════════════════════════
SECTION 8 — CART + CHECKOUT
═══════════════════════════════════════════════════

Implement a real front-end cart interaction.

Cart drawer:
- opens from the right
- shows product， color， quantity， subtotal
- supports quantity increase / decrease
- supports remove item
- persists in localStorage

Checkout modal fields:
- name
- contact
- city
- delivery method
- payment method

This is a mock ecommerce checkout.
Do not implement real payment.

Success state:
"Your LUCID/01 experience has been reserved."

═══════════════════════════════════════════════════
SECTION 9 — DEMO FORM
═══════════════════════════════════════════════════

Title:
"Book a Private Demo"

Fields:
- name
- contact
- city
- preferred frame color
- preferred scenario
- note

Submit to:
`POST /api/private-demo`

If API fails:
- save locally
- show a graceful success message
- do not break the page

═══════════════════════════════════════════════════
SECTION 10 — FOOTER CTA
═══════════════════════════════════════════════════

Closing heading:
"The next screen is not in your hand."

Subheading:
"It is quietly layered over the world."

Buttons:
- Experience the HUD
- Book Private Demo

Footer links:
- Experience
- Product
- Privacy
- Demo

Copyright:
`© 2026 LUCID/01`

═══════════════════════════════════════════════════
DATA AND BACKEND RULES
═══════════════════════════════════════════════════

Use local data for initial rendering.

Required local files:
- `src/data/siteContent.ts`
- `src/data/products.ts`
- `src/data/scenes.ts`
- `src/data/realityCards.ts`

Required real APIs:
- `GET /api/vision-pulse`
- `POST /api/private-demo`
- `GET /api/health`

Optional:
- `POST /api/simulate-hud`

The main page must render fully even if all APIs fail.

═══════════════════════════════════════════════════
EDGE FUNCTION + KV REQUIREMENT
═══════════════════════════════════════════════════

Use EdgeOne Pages Edge Functions.

Required endpoints:
- `GET /api/health`
- `GET /api/vision-pulse`
- `POST /api/private-demo`

Implement `/api/vision-pulse` using KV storage.

Requirements:
- track unique daily visitors
- maintain today count and lifetime count
- use a cookie to avoid duplicate same-day counting
- return JSON with:
  - today
  - lifetime
  - checkedIn
  - date

KV binding name:
`LUCID_KV`

═══════════════════════════════════════════════════
LOCAL STORAGE
═══════════════════════════════════════════════════

Use localStorage to persist:
- selected scene
- selected frame color
- cart items
- privacy toggles
- saved Reality Cards
- demo form draft
- last Vision Pulse data

All localStorage usage must be safe:
- check for window
- catch parse errors
- fallback to defaults if invalid

═══════════════════════════════════════════════════
PROJECT STRUCTURE
═══════════════════════════════════════════════════

src/
  components/
    ErrorBoundary.tsx
    BackgroundWallpaper.tsx
    Logo.tsx
    Navbar.tsx
    GlassesModel.tsx
    HeroSection.tsx
    VisionDemo.tsx
    ProductSelector.tsx
    FeatureHighlights.tsx
    RealityCards.tsx
    VisionPulse.tsx
    PrivacyControls.tsx
    CartDrawer.tsx
    CheckoutModal.tsx
    DemoForm.tsx
    ClosingFooter.tsx
  data/
    siteContent.ts
    products.ts
    scenes.ts
    realityCards.ts
  lib/
    api.ts
    storage.ts
    utils.ts
  index.css
  main.tsx
  App.tsx

edge-functions/
  api/
    vision-pulse.js
    private-demo.js
    health.js

public/
  lucid.svg

═══════════════════════════════════════════════════
FINAL QUALITY BAR
═══════════════════════════════════════════════════

The final result should feel like:
- a premium AI glasses launch page
- a brighter and more transparent blue sci-fi experience
- a clean fashion-tech ecommerce page
- a believable future lifestyle interface
- a strong competition-level landing page

The final result must NOT feel like:
- a generic template
- an empty dark page
- a red cyberpunk page
- a dashboard
- a white-screen bug

Most important things to get right:
1. Bright transparent animated wallpaper
2. Premium hero with rimmed AI glasses
3. Clean central sci-fi atmosphere
4. Transparent readable HUD demo
5. Correct frame-glasses product design
6. Product selector
7. Reality Cards
8. Stable cart + demo interaction
9. No blank page
10. Correct preview and deployment

═══════════════════════════════════════════════════
DEPLOYMENT
═══════════════════════════════════════════════════

Before deployment:
1. run locally
2. verify the bright blue transparent background is visible
3. verify Hero shows the correct LUCID/01 content
4. verify preview URL is the current project
5. verify `/api/health`
6. verify `/api/vision-pulse`
7. verify `/api/private-demo`
8. verify build succeeds
9. verify no missing imports or exports

Deploy to EdgeOne Pages and return:
- preview URL
- deployed public URL
- project structure
- main components
- API endpoints
- KV design
- local run command
- deployment notes

```
