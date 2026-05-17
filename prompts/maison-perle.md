# Maison Perle

> **赛道**：Prompt　**作者**：EdgeOne · [GitHub @TencentEdgeOne](https://github.com/TencentEdgeOne)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Maison Perle cover](../assets/demos/maison-perle.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/maison-perle.gif" alt="Maison Perle demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Maison Perle |
| 赛道 | Prompt |
| 作者 | EdgeOne |
| GitHub | [@TencentEdgeOne](https://github.com/TencentEdgeOne) |

## 📝 作品介绍

Maison Perle 是一款高端奢侈珠宝品牌电商网站，采用 React + Vite + TypeScript + Tailwind CSS + shadcn/ui 技术栈构建，并集成 EdgeOne Pages Edge Functions 实现轻量级后端功能。

网站设计灵感源自名画《戴珍珠耳环的少女》，打造出如同"可购物的油画展览"般的沉浸式体验。整体视觉以深普鲁士蓝黑为主调，搭配群青丝蓝、珍珠象牙白与香槟金，营造出暗黑、静谧、优雅且富有电影感的博物馆级氛围。

页面包含9大精心设计的模块：固定导航栏、全屏视频Hero区、品牌故事、珠宝系列展示、产品网格、工艺信任背书、媒体评价及预约功能。采用"museum-glass"毛玻璃组件与 Framer Motion 动效，兼顾艺术美感与生产级布局稳定性，完美呈现一个真实可用的奢侈珠宝品牌官网体验。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Build a single-page luxury jewelry ecommerce website in English using React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

GOAL Create a premium English-language homepage for a fictional luxury jewelry maison called Maison Perle.

The site should feel like a shoppable oil-painting exhibition inspired by the emotional atmosphere of ""Girl with a Pearl Earring"":

dark
museum-grade
quiet
elegant
cinematic
collectible
This is not a generic ecommerce template, not a SaaS landing page, and not a fashion campaign collage.

The website must use EdgeOne Pages Edge Functions for lightweight backend functionality.

ASSETS Use the following remote CDN assets directly. Do not copy them into local public/media/ as the main workflow.

CDN base: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/

Media URLs:

Hero video https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/hero.mp4

Maison Story video https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Maison%20Story.mp4

Maison Story poster https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Maison%20Story.png

Craftsmanship / Stats video https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Craftsmanship%20%20Stats.mp4

Closing CTA video https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Closing%20CTA.mp4

Closing CTA poster https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Closing%20CTA.png

Pearls Collection https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Pearls%20Collection.png

Fine Jewelry Collection https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Fine%20Jewelry%20Collection.png

High Jewelry Collection https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/High%20Jewelry%20Collection.png

Lune Pearl Drop https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Lune%20Pearl%20Drop.png

Noir Halo Stud https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Noir%20Halo%20Stud.png

Atelier Ribbon Collar https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Atelier%20Ribbon%20Collar.png

Velours Earring https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Velours%20Earring.png

Eclipse Ring https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Eclipse%20Ring.png

Nocturne Cuff https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Nocturne%20Cuff.png

BRAND RULES Brand name: Maison Perle

Color world:

deep Prussian blue-black
ultramarine silk blue
pearl ivory
muted champagne gold
Pearl rule: Pearls must look perfectly round or near-spherical, smooth, symmetrical, luminous, and high-jewelry grade. Do not generate baroque, lumpy, irregular, distorted, or asymmetrical pearls.

Avoid:

recognizable luxury brand logos
iconic brand silhouettes
neon sci-fi lighting
startup aesthetics
loud commercial jewelry-ad styling
collage-style fashion layouts
TECH STACK

React
Vite
TypeScript
Tailwind CSS
shadcn/ui
lucide-react
motion / framer-motion
tailwindcss-animate
FONTS Use Google Fonts:

Cormorant Garamond (500, 600, 700, italic) for headings
Manrope (300, 400, 500, 600) for body text
Tailwind font families:

heading: [""Cormorant Garamond"", ""serif""]
body: [""Manrope"", ""sans-serif""]
CSS VARIABLES Define these in src/index.css:

:root { --background: 220 34% 6%; --foreground: 35 28% 95%; --primary: 41 42% 74%; --primary-foreground: 220 34% 6%; --muted-foreground: 35 12% 72%; --border: 35 25% 92% / 0.14; --card: 220 24% 10%; --radius: 9999px; }

Typography:

headings: font-heading italic, elegant, tight leading, ivory tone
body text: font-body, light, muted ivory
buttons: rounded-full, refined, tactile, premium
GLASS COMPONENTS Create two reusable component styles in @layer components:

.museum-glass

background: rgba(255,255,255,0.03)
backdrop-filter: blur(10px) saturate(120%)
border: 1px solid rgba(255,255,255,0.08)
box-shadow: inset 0 1px 0 rgba(255,255,255,0.08), 0 12px 40px rgba(0,0,0,0.22)
position: relative
overflow: hidden
subtle luxury gradient border effect using ::before
.museum-glass-strong

same structure
stronger blur
stronger shadow
slightly brighter border treatment
use for primary CTA buttons and important overlay cards
NON-NEGOTIABLE LAYOUT RULES The site may feel editorial and cinematic, but the layout itself must remain stable, structured, and production-grade.

Do not do any of the following:

no overlapping collage layouts
no floating image clusters
no negative margins for decorative offset
no staggered text/image misalignment
no sticky split editorial panels
no freeform magazine-style composition
no text drifting outside its wrapper
no cards breaking grid alignment
no decorative motion affecting layout flow
Global layout rules:

Use one centered content container for all non-full-bleed content
Max width: 1280px
Horizontal padding: px-6 md:px-10 lg:px-16
Use mx-auto consistently
Standard section spacing: py-24 md:py-32
Keep vertical rhythm consistent
Keep headings, body copy, and CTA groups inside predictable wrappers
Media rules:

Background media must be absolute inset-0 only
Foreground content must be inside a separate relative z-10 wrapper
Background media uses object-cover
Media sections must keep stable heights
Cards and grids remain in normal document flow
Grid rules:

Collections: 1 col mobile, 2 col tablet, 3 equal-width cards desktop
Products: 2 col mobile, 3 col desktop
Testimonials: 1 col mobile, 3 col desktop
Stats: 2 col mobile, 4 col desktop
Aspect ratio rules:

Collection cards: 4:5
Product cards: 4:5
Keep card heights consistent within the same row
Do not mix random heights
Responsiveness:

Intentionally design mobile, tablet, desktop
Prevent overflow, collisions, broken nav, or drifting CTAs
Check 390px, 768px, 1024px, 1440px
Final layout priority: If artistic direction conflicts with layout stability, choose layout stability.

BACKGROUND MEDIA COMPONENT Create a reusable BackgroundMedia component that supports:

videoSrc?: string
imageSrc?: string
poster?: string
overlay?: boolean
className?: string
Rules:

use video when videoSrc exists
use image as poster / fallback only when the image URL is valid
if both poster and image fallback are unavailable, render a stable dark Prussian-black background instead of showing a broken asset
autoplay, muted, loop, playsInline
preserve text readability with dark overlays and fade gradients
keep layout unchanged if media source changes later
SITE STRUCTURE Build exactly 9 main sections in this order.

SECTION 1 — FIXED NAVBAR Structure:

fixed top navbar
content inside max-width container
left: circular monogram MP in museum-glass
center: nav pill with links
right: primary CTA button
Nav links:

New Arrivals
Collections
Maison
Craft
Appointment
CTA:

Shop the Collection
Behavior:

transparent at top
gently darkens on scroll
stable 3-part layout
do not let center nav collide with CTA on smaller screens
SECTION 2 — HERO Height:

min-h-[1000px]
Background:

use Hero video
full-bleed background media
subtle dark overlay
bottom fade gradient
Foreground:

centered max-width wrapper
stable vertical spacing
no floating foreground composition
Content:

badge: New + The Pearl Reimagined
headline: Where Masterpiece Meets Desire
subtext: A maison of pearls, diamonds, and sculpted light — inspired by silence, devotion, and the unforgettable magnetism of the gaze.
CTA 1: Shop High Jewelry
CTA 2: Book a Private Appointment
prestige line: Pearls. Diamonds. Objects of devotion.
Animation:

gentle blur-to-clear reveal for headline
fade-up for paragraph and CTA row
slow, tasteful, no bounce
SECTION 3 — PRESTIGE / EDITORIAL BAR Static breathing-space section.

Content:

badge: Seen In
editorial names: Vogue, Numéro, Harper's Bazaar, W, Galeries
Rules:

no video
calm and readable
centered layout
SECTION 4 — MAISON STORY Background:

use Maison Story video
use Maison Story poster as fallback
full-width background media
top and bottom dark fades
Foreground layout:

centered wrapper
compact text block
no split layout
no staggered overlays
no editorial offset composition
Content:

badge: Our Maison
heading: A study in light, rarity, and restraint.
subtext: Born from the poetry of old-master portraiture, each piece is designed to feel collected, not consumed — treasured not for trend, but for atmosphere, memory, and permanence.
CTA: Discover the Story
Mood:

quiet
elegant
cinematic
like the Hero world expanding into a still-life room
SECTION 5 — SIGNATURE COLLECTIONS Use a clean responsive grid, not editorial staggered rows.

Layout:

1 column on mobile
2 columns on tablet
3 equal-width cards on desktop
consistent heights and spacing
Images:

Pearls Collection
Fine Jewelry Collection
High Jewelry Collection
Card copy:

Pearls — Round, luminous, and quietly commanding.
Fine Jewelry — Diamond fire, rendered with discipline.
High Jewelry — Collector pieces for evening, memory, and ceremony.
Buttons:

Explore Pearls
View Fine Jewelry
Enter High Jewelry
SECTION 6 — FEATURED PRODUCTS GRID Use a clean ecommerce product grid.

Layout:

2 columns on mobile
3 columns on desktop
consistent card height
clean typography
restrained hover effects only
Products:

Lune Pearl Drop — Round Cultured Pearl / 18k Gold — $1,280
Noir Halo Stud — Diamond / White Gold — $2,450
Atelier Ribbon Collar — Pearl / Sapphire / Gold — $4,800
Velours Earring — South Sea Pearl / Diamond — $3,900
Eclipse Ring — Pearl / Diamond / Gold — $1,960
Nocturne Cuff — Brushed Gold / Pearl — $2,780
Each card includes:

image
product name
material line
price
button: View Piece
SECTION 7 — CRAFTSMANSHIP / TRUST STATS Background:

use Craftsmanship / Stats video: https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/jewelry/Craftsmanship%20%20Stats.mp4
do not use the previous broken Craftsmanship poster URL
if this video fails to load, fall back to a stable dark Prussian-black background with overlay treatment instead of a broken image
Foreground layout:

one centered stats panel only
keep all four stats inside one structured museum-glass card
do not scatter metrics across the section
Content:

badge: Craft & Trust
heading: Precision you can feel before you can name it.
subtext: From nacre to setting, every detail is shaped to preserve rarity, comfort, and enduring value.
Stats:

18k — Solid gold craftsmanship
VS+ — Selected diamond clarity
100% — Certified authenticity
Worldwide — White-glove delivery
Visual rule:

darker
more material-driven
more technical
still calm and readable
SECTION 8 — TESTIMONIALS / EDITORIAL VOICES Layout:

1 column mobile
3 columns desktop
calm grid
no video
Badge:

Editorial Voices
Heading:

Admired in private. Remembered in public.
Testimonials:

“The kind of jewelry that changes the posture of the person wearing it.” — Elisa Moreau, Fashion Editor
“Every piece feels less like a purchase and more like an acquisition.” — Nina Hart, Collector
“Quiet, exacting, unforgettable — luxury without performance.” — Camille Ross, Creative Director
SECTION 9 — CLOSING CTA + FOOTER Background:

use Closing CTA video
use Closing CTA poster as fallback
Foreground layout:

one narrow centered column for heading, subtext, buttons
footer in a separate bottom row inside a max-width container
no overlap between CTA content and footer
footer must remain darker and more readable than the central CTA area
Content:

heading: Enter the maison.
subtext: Discover the collection, or book a private appointment for a more intimate way to explore the pieces.
CTA 1: Shop the Collection
CTA 2: Book Appointment
Footer:

left: © 2026 Maison Perle
right links: Shipping, Returns, Care, Contact
EDGE FUNCTIONS Use EdgeOne Pages Edge Functions.

Create these endpoints:

edge-functions/api/site-content.js
edge-functions/api/collections.js
edge-functions/api/products.js
edge-functions/api/private-appointment.js
edge-functions/api/health.js
API REQUIREMENTS

GET /api/site-content Return JSON for:

brand name
nav links
hero copy
section labels
testimonial content
footer links
GET /api/collections Return:

title
subtitle
image path
href
GET /api/products Return:

name
material
price
image path
slug
POST /api/private-appointment Accept:

name
email
preferredDate
message
Validate payload and return: { ""success"": true, ""requestId"": ""APT-..."", ""message"": ""Your private appointment request has been received."" }

GET /api/health Return: { ""ok"": true }

FRONTEND DATA RULE Do not hardcode all content directly inside React components. Use APIs for:

collections
products
part of site content
appointment submission
Use sensible loading states.

IMPLEMENTATION NOTES

Use the EdgeOne Pages skill from: https://github.com/edgeone-pages/edgeone-pages-skills
Follow the EdgeOne Pages skill rules during setup and deployment.
Before login, ask whether to use the China site or the Global site.
After the project is built and verified locally, deploy it to EdgeOne Pages.
TECHNICAL REQUIREMENTS

TypeScript everywhere
clean component structure
semantic HTML
accessible alt text and labels
visible focus states
lucide-react icons
motion / framer-motion for restrained entrance animation
no bouncy animation
use tailwindcss-animate
reusable media config mapping
reusable BackgroundMedia component
reusable button and section badge components
RECOMMENDED COMPONENTS

Navbar
HeroSection
PrestigeBar
MaisonStorySection
CollectionsSection
FeaturedProductsSection
CraftSection
TestimonialsSection
ClosingCTASection
BackgroundMedia
SectionBadge
GlassButton
AppointmentDialog or AppointmentDrawer
FINAL QUALITY BAR The result must not look like:

a generic Shopify theme
a SaaS landing page with jewelry images dropped in
a loud fashion campaign
a tech demo
an experimental collage layout
The result should look like:

an English-language luxury jewelry maison homepage
a shoppable oil-painting exhibition
dark, controlled, elegant, and memorable
structurally stable across screen sizes
premium enough to feel like a real brand site
DELIVERY REQUIREMENT After building:

run locally
verify layout at multiple breakpoints
verify media loading and fallback behavior
verify API wiring
deploy according to the implementation notes above
```
