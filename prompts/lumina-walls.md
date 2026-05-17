# AI wallpaper generator

> **赛道**：Prompt　**作者**：EdgeOne · [GitHub @TencentEdgeOne](https://github.com/TencentEdgeOne)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![AI wallpaper generator cover](../assets/demos/lumina-walls.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/lumina-walls.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | AI wallpaper generator |
| 赛道 | Prompt |
| 作者 | EdgeOne |
| GitHub | [@TencentEdgeOne](https://github.com/TencentEdgeOne) |

## 📝 作品介绍

AI壁纸生成器是一款智能壁纸创作工具网站，基于React技术栈开发，部署于EdgeOne CDN。用户只需输入创意描述，即可通过AI技术自动生成独特的个性化壁纸。网站界面简洁现代，支持多种壁纸尺寸和风格选择，生成速度快、质量高，让每个人都能轻松拥有专属的艺术壁纸。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
All local file paths replaced with the EdgeOne COS CDN. Base URL: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper

Build a single-page AI wallpaper generator website using React + Vite + TypeScript + Tailwind CSS + shadcn/ui. The aesthetic is dark, cinematic, nature-inspired with a custom "aurora glass" morphism effect. Deep indigo-black background throughout.

The website must use EdgeOne Pages Edge Functions for lightweight backend functionality.

Install this skill: https://github.com/edgeone-pages/edgeone-pages-skills Then deploy this project to EdgeOne Pages.

GOAL
Create a visually stunning AI-powered wallpaper generator landing page called Lumina Walls.

The site should feel like a premium creative tool — an immersive gallery of AI-generated nature wallpapers where users can browse, preview, and generate custom wallpapers:

dark
immersive
cinematic
nature-inspired
magical realism
tool-like but beautiful
This is not a generic SaaS template, not a stock photo site, and not a basic gallery grid.

ASSETS
All media is loaded directly from the EdgeOne CDN. Reference these absolute URLs in the code (no need to copy into public/assets/).

CDN base: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper

URLUsage
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-1.pngKingfisher — gallery card image + hero poster fallback
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-1.mp4Kingfisher — hero background video
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-2.pngKoi Fish — gallery card image + Showcase section poster
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-2.mp4Koi Fish — Showcase section background video
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-3.pngKitten — gallery card image + How It Works section poster
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-3.mp4Kitten — How It Works section background video
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-4.pngPuppy — gallery card image + CTA section poster
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-4.mp4Puppy — CTA section background video
BRAND RULES
Brand name: Lumina Walls

Tagline: AI-crafted wallpapers that breathe.

Color world:

deep indigo-black (#050a14)
midnight navy (#0a1628)
warm amber gold (#d4a853)
soft ivory white (#f5f0e8)
teal accent (#2dd4bf)
Avoid:

neon rainbow gradients
startup/SaaS generic aesthetics
stock photo website look
cluttered collage layouts
bright white backgrounds
FONTS & DESIGN SYSTEM
Google Fonts import:

Instrument Serif (400, italic) — headings
Inter (300, 400, 500, 600) — body text
Tailwind config — extend fontFamily:

heading: ["'Instrument Serif'", "serif"]
body: ["'Inter'", "sans-serif"]
CSS Variables (:root in src/index.css):

css
复制
:root {
  --background: 220 50% 4%;
  --foreground: 35 28% 95%;
  --primary: 41 55% 58%;
  --primary-foreground: 220 50% 4%;
  --muted-foreground: 35 12% 68%;
  --border: 35 25% 92% / 0.12;
  --card: 220 35% 8%;
  --accent: 168 76% 50%;
  --radius: 12px;
}
Typography rules:

All headings: font-heading italic text-foreground tracking-tight leading-[0.9]
All body text: font-body font-light text-muted-foreground text-sm
All buttons: font-body rounded-full
AURORA GLASS CSS (in @layer components)
Two variants — .aurora-glass (subtle) and .aurora-glass-strong (more visible):

.aurora-glass
css
复制
.aurora-glass-strong
Same structure but:

backdrop-filter: blur(20px) saturate(140%)
stronger box-shadow: inset 0 1px 1px rgba(255,255,255,0.12), 0 12px 40px rgba(0,0,0,0.4)
slightly higher gradient opacity (0.25 / 0.1)
use for primary CTA buttons and important overlay cards
NON-NEGOTIABLE LAYOUT RULES
One centered content container, max 1280px, px-6 md:px-10 lg:px-16, mx-auto
Section spacing: py-24 md:py-32
Background media absolute inset-0, object-cover; foreground content relative z-10
Gallery: 1 / 2 / 4 cols ; Features: 1 / 2 / 3 cols ; Stats: 2 / 4 cols
Tested at 390 / 768 / 1024 / 1440 px
No collage overlaps, no negative margins, no drifting cards/CTAs
BACKGROUND MEDIA COMPONENT
Reusable BackgroundMedia with props videoSrc?, imageSrc?, poster?, overlay?, className?. Falls back to deep indigo-black if media missing. Video uses autoplay muted loop playsInline. Includes top + bottom 200px fades to background.

SITE STRUCTURE — 8 SECTIONS
1. NAVBAR
Fixed top, z-50. Left "Lumina Walls" (font-heading italic text-xl). Center aurora-glass rounded-full pill nav (Gallery / Generate / How It Works / Pricing). Right aurora-glass-strong rounded-full "Start Creating" CTA. Transparent at top, gently darkens on scroll.

2. HERO (min-h-[900px])
Background video: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-1.mp4 Poster: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-1.png Badge ✨ Powered by AI. Headline "Wallpapers That Come Alive" with BlurText per-word reveal (text-5xl md:text-6xl lg:text-7xl font-heading italic). Subtext fade-up at 0.8s. CTA row at 1.1s: aurora-glass-strong "Generate Your Wallpaper" + Sparkles, ghost "Browse Gallery" + ArrowDown. Prestige line "4K · HDR · Instant Download · Unlimited Styles".

BlurText: split by words, IntersectionObserver, filter: blur(10px)→0, opacity: 0→1, y: 30→0, 0.3s step, 80ms delay/word.

3. FEATURED GALLERY
Static. Badge "Featured Wallpapers", heading "Every pixel, dreamed into existence." 4 cards, grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4:

ImageTitleTag
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-1.pngKingfisher RisingWildlife
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-2.pngGolden KoiUnderwater
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-3.pngMidnight ChaseWhimsical
https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-4.pngGolden Hour RunDreamy
Card: aurora-glass rounded-2xl overflow-hidden, aspect-[16/10] object-cover, hover scale 1.03 + overlay fade-in with title/tag/Preview button. Below grid: centered "View All Wallpapers →" aurora-glass-strong rounded-full.

4. AI GENERATION SHOWCASE
Background video: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-2.mp4 Poster: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-2.png Badge "AI Generation", heading "Describe it. We'll create it." Mock prompt panel (aurora-glass-strong rounded-2xl p-6 md:p-8 max-w-2xl mx-auto) with mock input "A golden retriever running through twilight meadow with fireflies..." and accent "Generate" button. Below: 3 sequential thumbnails (use the other CDN PNGs). Stats row in aurora-glass rounded-2xl: < 30s Generation time · 4K Resolution · 100+ Styles · ∞ Unlimited.

5. HOW IT WORKS
Background video: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-3.mp4 Poster: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-3.png Badge "How It Works", heading "From thought to wallpaper in three steps." 3 cards, each aurora-glass rounded-2xl p-8 with circular aurora-glass-strong rounded-full w-12 h-12 step number in accent.

Describe Your Vision — "Type anything — a mood, a scene, a creature. Our AI understands natural language and artistic intent."
AI Creates in Seconds — "Our model generates a unique, cinematic 4K wallpaper tailored to your description. No templates, no stock photos."
Download & Enjoy — "Preview in full resolution, download instantly, and set as your wallpaper across any device. It's yours forever."
6. FEATURES GRID
Static, bg var(--card). Badge "Why Lumina Walls", heading "Not just another wallpaper app." 4 cards grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6, aurora-glass rounded-2xl p-6 with aurora-glass-strong rounded-full w-10 h-10 icon circle.

Zap — Instant Generation — "From prompt to 4K wallpaper in under 30 seconds. No waiting, no queue."
Palette — Cinematic Quality — "Every wallpaper looks like a frame from a nature documentary. Deep colors, dramatic lighting."
Monitor — Any Device, Any Size — "Auto-resize for phone, tablet, desktop, or ultrawide. Perfect fit every time."
Infinity — Unlimited & Free Tier — "Generate up to 10 wallpapers daily for free. Unlimited with Pro."
7. PRICING
Static. Badge "Pricing", heading "Start free. Go unlimited." Two cards, max-w-3xl, centered.

Free (aurora-glass rounded-2xl p-8): $0/month — 10 wallpapers/day, 1080p, Standard styles, Community gallery — aurora-glass-strong rounded-full "Get Started Free".
Pro (aurora-glass-strong rounded-2xl p-8 w/ subtle accent glow): "Most Popular" pill, $9.99/month — Unlimited wallpapers, 4K + HDR, 100+ exclusive styles, Priority generation, No watermark, Commercial license — bg-accent text-black rounded-full font-medium "Upgrade to Pro".
8. CLOSING CTA + FOOTER
Background video: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-4.mp4 Poster: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-4.png Heading "Your perfect wallpaper is one prompt away." (text-4xl md:text-5xl lg:text-6xl font-heading italic). Subtext "Join thousands of creators who use Lumina Walls to transform their screens into living art." CTA row: aurora-glass-strong "Start Creating Now" + Sparkles, aurora-glass "Browse Gallery". Footer (mt-32 pt-8 border-t border-white/10): "© 2026 Lumina Walls" left; Privacy / Terms / Contact right; text-muted-foreground/40 text-xs font-body.

EDGE FUNCTIONS
edge-functions/api/
  wallpapers.js
  generate.js
  styles.js
  health.js
GET /api/wallpapers — returns the 4 wallpapers with CDN image and video URLs (full https URLs, not /assets/):

json
复制
[
  {
    "id": "w1",
    "title": "Kingfisher Rising",
    "tag": "Wildlife",
    "image": "https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-1.png",
    "video": "https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/ai-wallpaper-1.mp4",
    "prompt": "A kingfisher bursting out of dark water, wings spread, golden light beam, cinematic"
  }
  // … w2 koi, w3 kitten, w4 puppy with the corresponding CDN URLs
]
POST /api/generate — accepts { prompt, style, resolution }, returns { success, requestId: "GEN-...", message, estimatedTime: 20 }.

GET /api/styles — returns 4 styles: cinematic / dreamy / dramatic / minimal with descriptions.

GET /api/health — returns { ok: true }.

V8 runtime — always new Response(JSON.stringify(...)), no Node modules, no Response.json().

TECHNICAL REQUIREMENTS
TypeScript everywhere, semantic HTML, accessible alt text + focus states, lucide-react, motion/framer-motion (no bouncy), tailwindcss-animate, reusable BackgroundMedia, SectionBadge, GlassButton, WallpaperCard, BlurText.

DEPENDENCIES
motion (framer-motion), lucide-react, tailwindcss-animate.

KEY PATTERNS
Section badge: aurora-glass rounded-full px-3.5 py-1 text-xs font-medium text-foreground font-body inline-block mb-4
Section heading: text-3xl md:text-4xl lg:text-5xl font-heading italic text-foreground tracking-tight leading-[0.9]
All video sections: 200px top + bottom dark fades
Page wrapper: bg-[hsl(var(--background))]
DELIVERY REQUIREMENT
All assets load from https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/ai-wallpaper/... — no local copies.
Run locally and verify.
Verify layout at 390 / 768 / 1024 / 1440.
Verify media loading + fallbacks.
Verify Edge Function API wiring.
Deploy to EdgeOne Pages with edgeone pages deploy.
```
