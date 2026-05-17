# DramaAI

> **赛道**：Prompt　**作者**：EdgeOne · [GitHub @TencentEdgeOne](https://github.com/TencentEdgeOne)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![DramaAI demo](../assets/demos/drama-ai.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | DramaAI |
| 赛道 | Prompt |
| 作者 | EdgeOne |
| GitHub | [@TencentEdgeOne](https://github.com/TencentEdgeOne) |

## 📝 作品介绍

DramaAI是一款AI驱动的短剧剧本生成器，采用React + Vite + TypeScript + Tailwind CSS技术栈构建。平台专注于短视频剧本创作，支持一键生成完整剧本框架、智能编剧、小说转剧本等功能。覆盖都市、古装、言情、悬疑等多种题材，输出可直接用于拍摄的场景描述和镜头指导，支持中英双语，适配TikTok、YouTube Shorts等平台创作需求。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
DramaAI — AI Short Drama Script Generator — Full Prompt
Build a single-page landing page for DramaAI, an AI-powered short drama screenplay generator. Use React + Vite + TypeScript + Tailwind CSS. The aesthetic is dark, premium, cinematic — inspired by streaming platforms like Apple TV+ and short drama apps. Deep black background (#080808) with warm gold accents.

IMPORTANT — Static Assets: All static assets are hosted on CDN. Reference them directly:

Video: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/hero-video.mp4
Covers: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/01-reborn.png through 12-empire.png
In code, reference them as CDN URLs (Vite serves from public/ but assets are on CDN).

Install this skill: https://github.com/edgeone-pages/edgeone-pages-skills Then deploy this project to EdgeOne Pages.

FONTS & DESIGN SYSTEM
Google Fonts import: Barlow (300, 400, 500, 600, 700) — used for ALL text (headings and body).

CSS Variables (:root in index.css):

css
复制
--font-body: "Barlow", sans-serif;
--bg-deep: #080808;
--gold: #c0a070;
--gold-light: #dcc496;
All headings use: font-family: var(--font-body), font-weight: 700, white color, letter-spacing: -0.03em
All body text uses: font-family: var(--font-body), font-weight: 300, color: rgba(255,255,255,0.55), responsive sizing via clamp()
All buttons use: font-family: var(--font-body), border-radius: 9999px
Root font-size: clamp(15px, 1vw + 12px, 18px) for automatic responsive scaling
All section[id] should have scroll-margin-top: 80px for fixed navbar offset
GLASS CSS EFFECTS
Three glass variants using backdrop-filter:

.glass (subtle): background: rgba(255,255,255,0.03), backdrop-filter: blur(12px), border: 1px solid rgba(255,255,255,0.14)

.glass-strong (more visible): background: rgba(255,255,255,0.05), backdrop-filter: blur(40px), border: 1px solid rgba(255,255,255,0.16), box-shadow: 0 8px 32px rgba(0,0,0,0.3)

.glass-gold (warm accent): background: rgba(192,160,112,0.04), backdrop-filter: blur(24px), border: 1px solid rgba(192,160,112,0.12)

BACKGROUND DESIGN
The page is NOT pure black. Use --bg-deep: #080808 as base, with:

Subtle grid texture: background-image with rgba(255,255,255,0.015) grid lines, 60px spacing
Different sections have different radial-gradient glows:
Studio section: gold glow radial-gradient(ellipse 600px 400px at 50% 30%, rgba(192,160,112,0.05), transparent 70%)
Features section: warm glow radial-gradient(ellipse 500px 350px at 50% 40%, rgba(245,158,11,0.04), transparent 70%)
Pricing section: subtle white glow radial-gradient(ellipse 500px 400px at 50% 50%, rgba(255,255,255,0.02), transparent 70%)
Global noise texture overlay at opacity: 0.012 using inline SVG feTurbulence filter, position: fixed, pointer-events: none, z-index: 9999
DEPENDENCIES
motion (framer-motion), lucide-react

SECTION 1 — NAVBAR (fixed, full-width)
Fixed at top, full width, z-50. Three-column layout inside a max-width 1200px container:

Left: Brand logo (28px gold gradient circle with Sparkles icon) + "DramaAI" text (Barlow 600, 15px, white)
Center: Nav links ("Studio", "Showcase", "Features", "Pricing") — Barlow 14px/400, rgba(255,255,255,0.55), padding 6px 18px, hover → white
Right: "Log in" text link + "Sign up free" solid gold gradient button (background: linear-gradient(135deg, var(--gold), var(--gold-light)), black text, rounded-full)
On scroll (>60px): the container gets background: rgba(8,8,8,0.8), backdrop-filter: blur(20px), border-radius: 9999px, border: 1px solid rgba(255,255,255,0.06) — pill effect. Transition 0.4s.

Mobile: hamburger menu, links stack vertically in a glass-strong dropdown.

SECTION 2 — HERO (full viewport height)
Container: min-height: 100vh, flex, flex-direction: column, background var(--bg-deep), overflow hidden.

Background video (looping, muted, autoplay, playsInline):

src: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/hero-video.mp4 — This is a 7.8s montage of two AI-generated short drama scenes (ancient general riding through battlefield + woman kneeling in rain), cross-dissolved with cool blue-purple color grading, fade in/out for seamless loop.
Position: absolute, inset 0, object-fit cover, opacity 0.55
Overlay: linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.75) 80%, var(--bg-deep) 100%) — darker at bottom for text readability, lighter at top to show video.

Content (z-10, centered horizontally, pushed to bottom via justify-content: flex-end, text-align: center, padding 0 24px 80px, max-width 800px):

Heading (motion.h1, blur-in animation): "The Script Your Drama Deserves" — Barlow 700, font-size: clamp(1.8rem, 4.5vw, 3.5rem), white, white-space: nowrap, letter-spacing: -0.03em
Subtext (motion.p, fade-in 0.6s delay): "Feed your creative spark. AI crafts the full screenplay — characters, arcs, episode scripts. Professional quality, in minutes." — Barlow 300, 16px, rgba(255,255,255,0.55), max-width 480px
CTA buttons: Gold gradient "Start Creating" + ArrowUpRight icon, and a circle-play "View Examples" text link
Stats bar (bottom, centered, flex-wrap, gap 56px): "100K+ Scripts", "30K+ Creators", "98% Satisfaction", "<3 min Per episode" — values in Barlow 700 20px, labels in Barlow 300 11px uppercase
SECTION 3 — CREATIVE STUDIO (the core tool)
Wrapped in bg-glow-gold bg-grid background. Padding 128px 24px. Max-width 760px, centered.

Header: Glass badge "Creative Studio" + heading "Type your idea. Get a script." (Barlow 700, clamp(2.5rem, 6vw, 4.5rem)) + subtext (Barlow 400, 16px, rgba(255,255,255,0.6))

4-Step Flow (grid 4 columns, centered icons): Each step: 48px rounded-14 icon box (gold-tinted background rgba(192,160,112,0.06), border rgba(192,160,112,0.25)) + Barlow 600 14px title + Barlow 400 12px description.

PenLine icon → "Describe" / "Your idea in words"
Brain icon → "AI Writes" / "Characters & plot arcs"
FileText icon → "Review" / "Read & refine scripts"
Send icon → "Export" / "PDF/Word, ready to go"
Studio Card (the input area):

Background: rgba(192,170,130,0.06), border rgba(192,170,130,0.15), rounded-20, backdrop-filter: blur(40px), box-shadow: 0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,245,230,0.08)
When generating: pulsing gold glow animation on the card border
Label: "STORY CONCEPT" in Barlow 600, 11px, rgba(255,255,255,0.8), uppercase, tracking 0.12em
Textarea: 4 rows, Barlow 400 15px, white text, background rgba(255,250,240,0.04), border rgba(192,170,130,0.18), rounded-14. On focus: border changes to rgba(192,160,112,0.5) with gold glow shadow.
Animated placeholder: When textarea is empty, show a cycling auto-typing placeholder (4 different story ideas cycling, with a blinking gold cursor). Uses a custom useTypingPlaceholder hook that types forward at 40ms/char, pauses 2s, deletes at 20ms/char, then moves to next placeholder.
Dropdowns: "Genre" (8 options: Urban Revenge, Sweet Romance, Historical Fantasy, Thriller, Post-Apocalyptic, Campus, Sci-Fi, Comedy) and "Episodes" (20/50/80/100) — glass pill buttons, animated dropdown panels.
Generate button: Gold gradient (linear-gradient(135deg, var(--gold), var(--gold-light))), black text, Barlow 600. When disabled: rgba(255,255,255,0.06) background, muted text. Pulse animation on hover.
Output area: Expands with animation when generating. Toolbar with green dot status indicator + "Copy" / "Export" buttons. Script output in <pre> with Barlow 400, 14px, rgba(255,255,255,0.85), line-height 1.9. Blinking gold cursor during generation.
Quick prompts (below card): 3 pill buttons ("💡 A delivery boy secretly a billionaire", "🎭 Flash marriage — he's the CEO", "⚔️ Reborn as a discarded disciple") — clicking fills the textarea.

SECTION 4 — SHOWCASE (auto-scrolling poster wall)
Background: var(--bg-deep), padding 128px 24px.

Header: Glass badge "Showcase" + heading "Every genre. Every story." + subtext "From urban revenge to fantasy epics — scripts and posters, all AI-generated."

4-column auto-scrolling masonry grid (max-width 1060px, padding 0 20px, grid gap 14px):

Each column is a div with overflow: hidden, height: 680px, containing duplicated poster images for seamless infinite scroll
Column 1: scrolls UP, 25s duration
Column 2: scrolls DOWN, 30s duration
Column 3: scrolls UP, 22s duration
Column 4: scrolls DOWN, 28s duration
CSS keyframes: scrollUp { 0%{translateY(0) translateZ(0)} 100%{translateY(-50%) translateZ(0)} } and reverse for scrollDown
Each column inner div: will-change: transform, backface-visibility: hidden for GPU acceleration
Each image: aspect-ratio: 2/3, object-fit: cover, rounded-12, background #111 as placeholder
Top and bottom of each column: 80px gradient fade to var(--bg-deep) for seamless edges
12 poster images (vertical 2:3 ratio, cinematic drama posters with Chinese+English titles): Use these CDN URLs for the poster images:

https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/01-reborn.png — 重生逆袭 / REBORN TO RISE
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/02-romance.png — 闪婚甜宠 / FLASH MARRIAGE
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/03-immortal.png — 医仙传 / THE IMMORTAL HEALER
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/04-shadow.png — CLASSIFIED SHADOW / 绝密谍影
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/05-return.png — 前妻归来 / HER RETURN
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/06-lastlight.png — LAST LIGHT / 末日余晖
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/07-phoenix.png — 凤临天下 / REIGN OF THE PHOENIX
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/08-neon.png — NEON HEIR / 霓虹继承者
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/09-fog.png — 迷雾追凶 / FOG CITY FILES
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/10-stellar.png — STELLAR COMMAND / 星际指挥官
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/11-blade.png — 剑影江湖 / MOONLIT BLADE
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/12-empire.png — 她的商业帝国 / EMPIRE
Distribution: 3 posters per column, duplicated once (6 items per column for seamless loop).

SECTION 5 — FEATURES (capability grid)
Wrapped in bg-glow-warm bg-grid background. Padding 128px 24px. Max-width 800px centered.

Header: Glass badge "Capabilities" + heading "Pro features. Zero complexity." + subtext

3×2 grid of feature cards (glass rounded-2xl, padding 24px, hover brightens): Each card: 40px rounded-xl icon box (background rgba(255,255,255,0.05), border rgba(255,255,255,0.08), gold icon) + Barlow 600 15px title + Barlow 300 13px description.

Cards:

Wand2 → "One-Click Generation" — "Enter a concept — get a full screenplay framework."
Brain → "Smart Screenwriting" — "Understands hooks, cliffhangers, emotional pacing."
BookOpen → "Novel-to-Script" — "Import your novel. AI converts to screenplay format."
Layers → "Multi-Genre" — "Urban, historical, romance, thriller — all covered."
Clapperboard → "Production-Ready" — "Scene descriptions, camera directions. Ready to shoot."
Globe → "Multilingual" — "English and Chinese. Built for TikTok, YouTube Shorts."
SECTION 6 — PRICING
Wrapped in bg-glow-subtle. Padding 128px 24px. Max-width 840px centered.

Header: Glass badge "Pricing" + heading "Simple, transparent pricing." + subtext

Monthly/Yearly toggle: Glass pill with two buttons, active state has white bg + black text. Yearly shows "Save 20%" in gold.

3-column pricing cards:

PlanPriceFeatured
Free (Zap icon)$0No
Pro (Sparkles icon)$14/moYes — glass-gold border, gold gradient CTA, "Most Popular" badge
Team (Crown icon)$49/moNo
Each card: glass (or glass-gold for Pro), rounded-2xl, padding 28px. Plan name + price (Barlow 700, 36px) + description + CTA button + feature checklist with gold Check icons.

SECTION 7 — TESTIMONIALS
Wrapped in bg-glow-gold. Padding 128px 24px. Max-width 800px centered.

Header: Glass badge "Testimonials" + heading "Don't take our word for it."

2×2 grid of testimonial cards (glass rounded-2xl, padding 28px): Each: italic quote (Barlow 300, 14px, rgba(255,255,255,0.6), line-height 1.8) + avatar circle (gold gradient, first initial) + name (Barlow 500, 14px) + role (Barlow 300, 11px).

Mia Chen, Senior Screenwriter — "DramaAI gave me a solid first draft in three days..."
Marcus Zhang, Head of Production — "Cut our team from 12 to 4. Triple efficiency..."
Sophie Wang, Author — "Novel-to-script turned my book into a shootable screenplay."
Ryan Li, Producer — "The only tool that gets short drama rhythm — hooks, twists, tension."
SECTION 8 — CTA FOOTER
Padding 128px 24px. Max-width 560px centered.

Heading: "Your next hit drama starts here." — Barlow 700, clamp(2.5rem, 6vw, 4.5rem) Subtext: "Start free. See what AI-powered screenwriting can do." Two buttons: Gold gradient "Start Creating Free" (Sparkles icon) + glass-strong "View Plans" (ArrowUpRight)

Footer bar: max-width 800px, border-top: 1px solid rgba(255,255,255,0.06), flex between brand (logo + "© 2026 DramaAI") and links ("Privacy", "Terms", "Contact") in Barlow 300, 12px, rgba(255,255,255,0.25).

SECTION 9 — SIGN UP / LOGIN (EdgeOne Pages Edge Function)
Use EdgeOne Pages Edge Functions to implement a serverless authentication system for the "Sign up free" and "Log in" buttons in the navbar.

Create an Edge Function at functions/api/auth.js that handles:

POST /api/auth/signup — accepts { email, password }, validates input, hashes password, stores user in KV Storage (key: user:{email}, value: JSON with hashed password + created timestamp), returns JWT token
POST /api/auth/login — accepts { email, password }, looks up user in KV, verifies password hash, returns JWT token
GET /api/auth/me — validates JWT from Authorization: Bearer header, returns user info
Use Web Crypto API (crypto.subtle) for password hashing (SHA-256) and JWT signing (HMAC-SHA256). Store the JWT secret in KV under key config:jwt_secret.

On the frontend, create a simple modal dialog (glass-strong styled) that appears when clicking "Sign up free" or "Log in":

Two tabs: Sign Up / Log In
Email + Password fields (same warm gold styling as Studio textarea)
Submit button with gold gradient
On success: close modal, update navbar to show user email + "Log out" button
Store JWT in localStorage
ANIMATIONS & INTERACTIONS
All sections use useInView from motion/react to trigger entrance animations (not whileInView), once: true, margin: '-80px'
Entrance: elements animate from { opacity: 0, y: 30-40 } to { opacity: 1, y: 0 } with staggered delays
Hero heading: blur-in effect (filter: blur(8px) → blur(0px))
Studio typing placeholder: custom hook cycling through 4 prompts
Showcase columns: pure CSS infinite scroll animation with GPU acceleration
Generate button: pulse ring animation on hover via ::after pseudo-element
KEY PATTERNS
All inline styles (NOT Tailwind classes for layout) to ensure rendering reliability
All section badges: glass pill, Barlow 500 12px, rgba(255,255,255,0.7), display: inline-block
All section headings: Barlow 700, font-size: clamp(2rem, 5vw, 3.75rem), white, letter-spacing: -0.03em
Glass borders at rgba(255,255,255,0.14) for standard, rgba(255,255,255,0.16) for strong
Gold accent color: var(--gold): #c0a070 / var(--gold-light): #dcc496
Background base: var(--bg-deep): #080808
DEPLOYMENT
Assets are already on CDN — no local copy needed. Reference them directly:

Video: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/hero-video.mp4
Covers: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/drama-ai/covers/
Install this skill: https://github.com/edgeone-pages/edgeone-pages-skills Then deploy this project to EdgeOne Pages.

The Edge Function for auth goes in functions/api/auth.js. After deployment, EdgeOne Pages will automatically serve static files from public/ and route /api/* requests to Edge Functions.
```
