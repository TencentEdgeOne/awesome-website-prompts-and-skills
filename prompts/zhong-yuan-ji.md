# 中原纪

> **赛道**：Prompt　**作者**：昏黎 · [GitHub @https://github.com/HunLi-X](https://github.com/https://github.com/HunLi-X)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![中原纪 demo](../assets/demos/zhong-yuan-ji.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/zhong-yuan-ji.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 中原纪 |
| 赛道 | Prompt |
| 作者 | 昏黎 |
| GitHub | [@https://github.com/HunLi-X](https://github.com/https://github.com/HunLi-X) |

## 📝 作品介绍

中原纪是一个展示河南文化遗产的沉浸式数字展示平台。项目以"居天下之中"的河南为叙事主线，通过中英双语呈现十三朝古都洛阳、八朝古都开封、殷商故都安阳的历史积淀。核心价值在于用现代 Web 体验讲好中原文明故事，适用于文化遗产宣传、文旅推广及数字展馆场景。技术亮点包括：Glassmorphism 毛玻璃 UI 设计、明暗主题无缝切换、全响应式布局、EdgeOne Pages 全球加速部署，为读者带来流畅的视觉叙事体验。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

Build a single-page Central Plains (Henan) tourism showcase website in Chinese + English using React + Vite + TypeScript + Tailwind CSS + shadcn/ui.

GOAL
Create a premium bilingual homepage for a fictional cultural tourism brand called 中原纪 (Zhongyuan Chronicle) — a curated digital exhibition of Henan Province's most iconic landscapes， heritage sites， and cultural landmarks.

The site should feel like walking through a cinematic documentary museum — as if a National Geographic editorial met a Song dynasty scroll painting:
- ancient
- atmospheric
- cinematic
- scholarly
- reverent
- immersive

This is not a generic tourism brochure， not a government portal， not a travel agency booking page， and not a modern city promotion site.

The website must use EdgeOne Pages Edge Functions for lightweight backend functionality.

ASSETS
Use the following remote CDN assets directly. Do not copy them into local public/media/ as the main workflow.

CDN base:
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/

Media URLs:

Hero video
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/hero.mp4

Heritage Story video
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/heritage-story.mp4

Heritage Story poster
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/heritage-story.png

Culture & Craft video
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/culture-craft.mp4

Closing CTA video
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/closing-cta.mp4

Closing CTA poster
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/closing-cta.png

Destinations — Grottoes & Temples
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/dest-grottoes-temples.png

Destinations — Mountains & Rivers
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/dest-mountains-rivers.png

Destinations — Ancient Capitals
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/dest-ancient-capitals.png

Longmen Grottoes
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/longmen-grottoes.png

Shaolin Temple
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/shaolin-temple.png

Yuntai Mountain
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/yuntai-mountain.png

Henan Museum
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/henan-museum.png

Qingming Riverside Park
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/qingming-riverside.png

Red Flag Canal
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/red-flag-canal.png

White Horse Temple
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/white-horse-temple.png

Taihang Grand Canyon
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/taihang-canyon.png

Anyang Yinxu
https://cdnstatic.tencentcs.com/edgeone/pages/zhongyuan/anyang-yinxu.png

BRAND RULES
Brand name: 中原纪 / Zhongyuan Chronicle

Color world:
- deep ink black (墨黑) — like aged calligraphy ink
- warm loess amber (黄土金) — the color of Henan's earth
- temple vermillion (朱砂红) — muted， not neon
- mist white (烟白) — like morning fog over the Yellow River
- celadon grey (青瓷灰) — quiet， scholarly

Cultural tone rule:
All imagery， copy， and visual treatment must convey:
- deep historical reverence
- the weight of 5，000 years of civilization
- landscape grandeur (太行山， 黄河， 伏牛山)
- scholarly quietude， not tourist excitement
- the feeling of standing before something ancient and still alive

Avoid:
- bright neon tourism colors
- cartoon mascots or playful illustrations
- stock-photo tourism brochure aesthetics
- "Visit Henan!" promotional energy
- over-saturated HDR photography
- generic modern cityscape shots
- political or propaganda imagery

TECH STACK
- React
- Vite
- TypeScript
- Tailwind CSS
- shadcn/ui
- lucide-react
- motion / framer-motion
- tailwindcss-animate

FONTS
Use Google Fonts:
- Noto Serif SC (400， 600， 700) for Chinese headings
- Cormorant Garamond (500， 600， 700， italic) for English headings
- Noto Sans SC (300， 400， 500) for Chinese body text
- Manrope (300， 400， 500) for English body text

Tailwind font families:
- heading-cn: ["Noto Serif SC"， "serif"]
- heading-en: ["Cormorant Garamond"， "serif"]
- body-cn: ["Noto Sans SC"， "sans-serif"]
- body-en: ["Manrope"， "sans-serif"]

Bilingual typography rule:
- Primary language is Chinese
- English appears as secondary accent text (headings， section labels， navigation)
- Chinese headings use heading-cn
- English headings use heading-en italic
- Body text defaults to body-cn
- All navigation items are bilingual: "龙门石窟 · Longmen Grottoes"

CSS VARIABLES
Define these in src/index.css:

:root {
  --background: 220 30% 5%;
  --foreground: 32 20% 92%;
  --primary: 28 45% 58%;
  --primary-foreground: 220 30% 5%;
  --accent: 8 52% 48%;
  --accent-foreground: 32 20% 95%;
  --muted-foreground: 32 10% 65%;
  --border: 32 18% 88% / 0.12;
  --card: 220 20% 9%;
  --radius: 9999px;
}

Typography:
- Chinese headings: font-heading-cn， elegant， generous leading， warm ivory tone
- English headings: font-heading-en italic， as secondary accent
- body text: font-body-cn， light， muted ivory
- buttons: rounded-full， refined， tactile， premium

GLASS COMPONENTS
Create two reusable component styles in @layer components:

.scroll-glass
- background: rgba(255，255，255，0.03)
- backdrop-filter: blur(10px) saturate(110%)
- border: 1px solid rgba(255，255，255，0.06)
- box-shadow: inset 0 1px 0 rgba(255，255，255，0.06)， 0 12px 40px rgba(0，0，0，0.25)
- position: relative
- overflow: hidden
- subtle ink-wash gradient border effect using ::before (simulate 水墨晕染 edge)

.scroll-glass-strong
- same structure
- stronger blur
- stronger shadow
- slightly brighter border treatment with faint vermillion accent
- use for primary CTA buttons and important overlay cards

NON-NEGOTIABLE LAYOUT RULES
The site may feel editorial and cinematic， but the layout itself must remain stable， structured， and production-grade.

Do not do any of the following:
- no overlapping collage layouts
- no floating image clusters
- no negative margins for decorative offset
- no staggered text/image misalignment
- no sticky split editorial panels
- no freeform magazine-style composition
- no text drifting outside its wrapper
- no cards breaking grid alignment
- no decorative motion affecting layout flow

Global layout rules:
- Use one centered content container for all non-full-bleed content
- Max width: 1280px
- Horizontal padding: px-6 md:px-10 lg:px-16
- Use mx-auto consistently
- Standard section spacing: py-24 md:py-32
- Keep vertical rhythm consistent
- Keep headings， body copy， and CTA groups inside predictable wrappers

Media rules:
- Background media must be absolute inset-0 only
- Foreground content must be inside a separate relative z-10 wrapper
- Background media uses object-cover
- Media sections must keep stable heights
- Cards and grids remain in normal document flow

Grid rules:
- Destinations: 1 col mobile， 2 col tablet， 3 equal-width cards desktop
- Featured Sites: 2 col mobile， 3 col desktop
- Testimonials / Quotes: 1 col mobile， 3 col desktop
- Stats: 2 col mobile， 4 col desktop

Aspect ratio rules:
- Destination cards: 4:5
- Featured site cards: 4:5
- Keep card heights consistent within the same row
- Do not mix random heights

Responsiveness:
- Intentionally design mobile， tablet， desktop
- Prevent overflow， collisions， broken nav， or drifting CTAs
- Check 390px， 768px， 1024px， 1440px

Final layout priority:
If artistic direction conflicts with layout stability， choose layout stability.

BACKGROUND MEDIA COMPONENT
Create a reusable BackgroundMedia component that supports:
- videoSrc?: string
- imageSrc?: string
- poster?: string
- overlay?: boolean
- className?: string

Rules:
- use video when videoSrc exists
- use image as poster / fallback only when the image URL is valid
- if both poster and image fallback are unavailable， render a stable dark ink-black background instead of showing a broken asset
- autoplay， muted， loop， playsInline
- preserve text readability with dark overlays and fade gradients
- keep layout unchanged if media source changes later

SITE STRUCTURE
Build exactly 9 main sections in this order.

SECTION 1 — FIXED NAVBAR
Structure:
- fixed top navbar
- content inside max-width container
- left: circular monogram 中原 in scroll-glass
- center: nav pill with links
- right: primary CTA button

Nav links:
- 新品 · New
- 目的地 · Destinations
- 中原纪 · Chronicle
- 匠心 · Heritage
- 行程定制 · Plan

CTA:
- 探索目的地 · Explore

Behavior:
- transparent at top
- gently darkens on scroll
- stable 3-part layout
- do not let center nav collide with CTA on smaller screens

SECTION 2 — HERO
Height:
- min-h-[1000px]

Background:
- use Hero video
- full-bleed background media
- subtle dark overlay
- bottom fade gradient

Foreground:
- centered max-width wrapper
- stable vertical spacing
- no floating foreground composition

Content:
- badge: 五千年 · The Heart of Civilization
- headline: 华夏之根，山河之间
- headline-en: Where Civilization Was Forged in Stone and River
- subtext: 从殷墟甲骨到龙门佛光，从太行绝壁到黄河奔流——中原大地，是中华文明最深沉的回响。
- subtext-en: From oracle bones at Yinxu to the radiance of Longmen， from the cliffs of Taihang to the roaring Yellow River — the Central Plains are the deepest resonance of Chinese civilization.
- CTA 1: 探索目的地 · Explore Destinations
- CTA 2: 定制行程 · Plan Your Journey
- prestige line: 山河 · 石窟 · 古都 · 千年回响

Animation:
- gentle blur-to-clear reveal for headline
- fade-up for paragraph and CTA row
- slow， tasteful， no bounce

SECTION 3 — PRESTIGE / EDITORIAL BAR
Static breathing-space section.

Content:
- badge: 被世界看见 · Featured In
- editorial names: National Geographic， Lonely Planet， 中国国家地理， Condé Nast Traveler， Travel + Leisure

Rules:
- no video
- calm and readable
- centered layout

SECTION 4 — HERITAGE STORY
Background:
- use Heritage Story video
- use Heritage Story poster as fallback
- full-width background media
- top and bottom dark fades

Foreground layout:
- centered wrapper
- compact text block
- no split layout
- no staggered overlays
- no editorial offset composition

Content:
- badge: 中原纪 · Our Chronicle
- heading: 一部用山河写就的文明史
- heading-en: A civilization written in mountains and rivers.
- subtext: 河南，居天下之中。十三朝古都洛阳、八朝古都开封、殷商故都安阳——每一寸土地都沉淀着王朝的记忆、信仰的刻痕与匠人的心血。
- subtext-en: Henan， the center of the world. Thirteen dynasties in Luoyang， eight in Kaifeng， the Shang capital at Anyang — every inch of earth holds the memory of empires， the marks of devotion， and the blood of artisans.
- CTA: 了解更多 · Learn More

Mood:
- quiet
- reverent
- cinematic
- like a scroll slowly unrolling in a dimly lit museum hall

SECTION 5 — SIGNATURE DESTINATIONS
Use a clean responsive grid， not editorial staggered rows.

Layout:
- 1 column on mobile
- 2 columns on tablet
- 3 equal-width cards on desktop
- consistent heights and spacing

Images:
- Grottoes & Temples (石窟与寺庙)
- Mountains & Rivers (山河胜境)
- Ancient Capitals (古都遗韵)

Card copy:
- 石窟与寺庙 · Grottoes & Temples — 千年佛光，石壁上的信仰史诗。A millennium of faith carved in stone.
- 山河胜境 · Mountains & Rivers — 太行绝壁，黄河奔涌，天地大美不言。Where cliffs meet clouds and rivers roar in silence.
- 古都遗韵 · Ancient Capitals — 十三朝洛阳，八朝开封，王朝的最后呼吸。The last breath of empires， preserved in earth and brick.

Buttons:
- 探索石窟 · Explore Grottoes
- 探索山河 · Explore Mountains
- 探索古都 · Explore Capitals

SECTION 6 — FEATURED SITES GRID
Use a clean destination grid.

Layout:
- 2 columns on mobile
- 3 columns on desktop
- consistent card height
- clean typography
- restrained hover effects only

Sites:
- 龙门石窟 · Longmen Grottoes — 世界文化遗产 · UNESCO — 洛阳 · Luoyang
- 少林寺 · Shaolin Temple — 禅宗祖庭 · Birthplace of Chan — 登封 · Dengfeng
- 云台山 · Yuntai Mountain — 世界地质公园 · Geopark — 焦作 · Jiaozuo
- 河南博物院 · Henan Museum — 国家一级 · National Tier-1 — 郑州 · Zhengzhou
- 清明上河园 · Qingming Riverside Park — 宋文化活化 · Song Dynasty Revival — 开封 · Kaifeng
- 红旗渠 · Red Flag Canal — 人工天河 · The Heavenly River — 安阳 · Anyang
- 白马寺 · White Horse Temple — 中国第一古刹 · China's First Temple — 洛阳 · Luoyang
- 太行大峡谷 · Taihang Grand Canyon — 绝壁长廊 · Cliff Gallery — 安阳 · Anyang
- 殷墟 · Yinxu — 甲骨文发源地 · Origin of Oracle Script — 安阳 · Anyang

Each card includes:
- image
- site name (Chinese · English)
- tag (UNESCO / cultural category)
- location
- button: 探索 · Explore

SECTION 7 — HERITAGE & CRAFT STATS
Background:
- use Culture & Craft video
- if video fails to load， fall back to a stable dark ink-black background with overlay treatment instead of a broken image

Foreground layout:
- one centered stats panel only
- keep all four stats inside one structured scroll-glass card
- do not scatter metrics across the section

Content:
- badge: 匠心传承 · Heritage & Trust
- heading: 每一处细节，都是时间的注脚
- heading-en: Every detail is a footnote written by time.
- subtext: 从千年石窟的修复技艺，到古建筑的榫卯智慧，中原的匠心跨越朝代，至今仍在呼吸。
- subtext-en: From the restoration of ancient grottoes to the mortise-and-tenon wisdom of classical architecture， the craftsmanship of the Central Plains spans dynasties and still breathes today.

Stats:
- 5，000+ — 年文明史 · Years of Civilization
- 5处 — 世界遗产 · UNESCO World Heritage Sites
- 13朝 — 古都洛阳 · Dynasties in Luoyang
- 100+ — 国家级文保单位 · National Heritage Sites

Visual rule:
- darker
- more material-driven
- more scholarly
- still calm and readable

SECTION 8 — QUOTES / EDITORIAL VOICES
Layout:
- 1 column mobile
- 3 columns desktop
- calm grid
- no video

Badge:
- 旅者之声 · Traveler Voices

Heading:
- 来过的人都记得，未曾来过的人一直向往
- Those who came still remember. Those who haven't， still dream.

Quotes:
- "站在龙门石窟前，你会忘记时间的存在。那是一种被文明本身凝视的感觉。" — 李明远，文化旅行作家
  "Standing before Longmen， you forget time itself. It is the feeling of being watched by civilization." — Li Mingyuan， Cultural Travel Writer
- "河南的每一座山、每一条河，都像是中国历史的一页注脚。" — 张雨桐，《中国国家地理》编辑
  "Every mountain， every river in Henan reads like a footnote to Chinese history." — Zhang Yutong， Editor， Chinese National Geography
- "这不是旅游，这是一次朝圣。" — 陈思远，纪录片导演
  "This is not tourism. This is a pilgrimage." — Chen Siyuan， Documentary Director

SECTION 9 — CLOSING CTA + FOOTER
Background:
- use Closing CTA video
- use Closing CTA poster as fallback

Foreground layout:
- one narrow centered column for heading， subtext， buttons
- footer in a separate bottom row inside a max-width container
- no overlap between CTA content and footer
- footer must remain darker and more readable than the central CTA area

Content:
- heading: 踏入中原
- heading-en: Enter the Heartland.
- subtext: 探索目的地，或定制一段专属于你的中原文化之旅。
- subtext-en: Explore the destinations， or plan a journey crafted just for you.
- CTA 1: 探索目的地 · Explore Destinations
- CTA 2: 定制行程 · Plan Your Journey

Footer:
- left: © 2026 中原纪 Zhongyuan Chronicle
- right links: 交通 · Transport， 住宿 · Stay， 文保资讯 · Heritage News， 联系我们 · Contact

EDGE FUNCTIONS
Use EdgeOne Pages Edge Functions.

Create these endpoints:
- edge-functions/api/site-content.js
- edge-functions/api/destinations.js
- edge-functions/api/sites.js
- edge-functions/api/trip-planner.js
- edge-functions/api/health.js

API REQUIREMENTS

GET /api/site-content
Return JSON for:
- brand name (cn + en)
- nav links (bilingual)
- hero copy (cn + en)
- section labels (bilingual)
- quote content (cn + en)
- footer links (bilingual)

GET /api/destinations
Return:
- title (cn + en)
- subtitle (cn + en)
- image path
- href

GET /api/sites
Return:
- name (cn + en)
- tag (UNESCO / category)
- location (cn + en)
- image path
- slug

POST /api/trip-planner
Accept:
- name
- email
- preferredDates
- interests (array: grottoes， mountains， capitals， temples， museums， cuisine)
- message

Validate payload and return:
{
  "success": true，
  "requestId": "TRIP-..."，
  "message": "您的行程定制请求已收到，我们将在48小时内与您联系。"
  "messageEn": "Your trip planning request has been received. We will contact you within 48 hours."
}

GET /api/health
Return:
{ "ok": true }

FRONTEND DATA RULE
Do not hardcode all content directly inside React components.
Use APIs for:
- destinations
- sites
- part of site content
- trip planner submission

Use sensible loading states.

IMPLEMENTATION NOTES
- Use the EdgeOne Pages skill from:
  https://github.com/edgeone-pages/edgeone-pages-skills
- Follow the EdgeOne Pages skill rules during setup and deployment.
- Before login， ask whether to use the China site or the Global site.
- After the project is built and verified locally， deploy it to EdgeOne Pages.

TECHNICAL REQUIREMENTS
- TypeScript everywhere
- clean component structure
- semantic HTML
- accessible alt text and labels (bilingual alt text for all images)
- visible focus states
- lucide-react icons
- motion / framer-motion for restrained entrance animation
- no bouncy animation
- use tailwindcss-animate
- reusable media config mapping
- reusable BackgroundMedia component
- reusable button and section badge components
- bilingual support: all user-facing text must have both Chinese and English versions

RECOMMENDED COMPONENTS
- Navbar
- HeroSection
- PrestigeBar
- HeritageStorySection
- DestinationsSection
- FeaturedSitesSection
- HeritageStatsSection
- QuotesSection
- ClosingCTASection
- BackgroundMedia
- SectionBadge
- GlassButton
- TripPlannerDialog or TripPlannerDrawer

FINAL QUALITY BAR
The result must not look like:
- a generic government tourism portal
- a travel agency booking page with stock photos
- a modern city promotion site with neon gradients
- a tech demo
- a playful cartoon-style travel app

The result should look like:
- a bilingual (Chinese primary， English secondary) cultural heritage showcase
- a cinematic digital scroll of Henan's greatest landscapes and sites
- dark， reverent， scholarly， and unforgettable
- structurally stable across screen sizes
- premium enough to feel like a National Geographic × museum exhibition collaboration

DELIVERY REQUIREMENT
After building:
1. run locally
2. verify layout at multiple breakpoints
3. verify bilingual text rendering (check Chinese font loading)
4. verify media loading and fallback behavior
5. verify API wiring
6. deploy according to the implementation notes above
```
