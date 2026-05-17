# DreamyBot Studio

> **赛道**：Prompt　**作者**：dreamybot · [GitHub @dreamybot](https://github.com/dreamybot)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![DreamyBot Studio cover](../assets/demos/dreamybot-studio.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/dreamybot-studio.gif" alt="DreamyBot Studio demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | DreamyBot Studio |
| 赛道 | Prompt |
| 作者 | dreamybot |
| GitHub | [@dreamybot](https://github.com/dreamybot) |

## 📝 作品介绍

DreamyBot Studio是一座可漫步的AI数字艺术画廊—访客如同亲临一座真实的当代美术馆，从赛博朋克到水墨丹青，在4个风格迥异的展厅楼层间自由穿行。网站以"衬线艺术体×几何无衬线"的字体对比营造画廊级的视觉气质，每件画作均支持鼠标视差倾斜交互与详情弹窗；首页以全屏背景图搭配优雅衬线斜体标题、浮动光球与粒子视效，构建沉浸式艺术入口。后端基于EdgeOne Pages 的 Edge Functions 提供轻量 API，KV Storage 实现访问缓存，并含完整的 Cloud Functions 与中间件。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# DreamyBot Studio — Immersive AI Art Gallery

Build a single-page immersive AI art gallery website in English using React 19 + Vite 6 + TypeScript + Tailwind CSS v4 + framer-motion.

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills Then deploy this project to EdgeOne Pages.

## GOAL

Create an immersive multi-floor art gallery where visitors walk through themed exhibition rooms. The site simulates strolling through a real AI creative studio and gallery — each floor has a distinct art style with its own visual identity， and every artwork is clickable for detailed interaction.

This is NOT a traditional landing page， NOT a SaaS dashboard， and NOT a scroll-through brochure.
It IS a walkable gallery space with 5 distinct floors.

## ASSETS

All artwork images are real PNG files placed in the public/ directory， named by their ID (e.g. /cyber-1.png， /anime-2.png， /ink-3.png， /pixel-4.png). A hero background image is at /hero-bg.png. When artwork.image is present， render an [图片] tag; otherwise fall back to a deterministic CSS gradient placeholder based on the artwork's seed (8-palette seed-based gradient).

## BRAND RULES

Brand name: DreamyBot Studio
Tagline: Where imagination becomes reality

Color world:
- Deep obsidian background
- Each floor has its own accent color and visual language
- Glass morphism is the universal design language across all floors

Pearl rule:
- Consistency: every floor uses the same layout structure， only theming changes
- Performance: scroll-snap for all navigation， no custom scroll JS
- Immersion: artwork cards respond to mouse hover with subtle perspective tilt

## TECH STACK

- React 19
- Vite 6
- TypeScript
- Tailwind CSS v4 (with @theme block， NOT tailwind.config)
- framer-motion (AnimatePresence for modal transitions only)
- lucide-react (icons)
- @tanstack/react-query (API data fetching with mock fallback)

## FONTS

Use Google Fonts:
- Cormorant Garamond (300， 400， 600; italic 300， 400， 600) — elegant serif for hero titles & subtitles
- Orbitron (400， 700， 900) — geometric display for badges， labels， studio floor
- Space Grotesk (500， 600， 700) — clean sans-serif for headings
- Noto Sans SC (300， 400， 500， 700) — CJK body text
- Press Start 2P (400) — pixel art floor ONLY

Tailwind font families:
- heading: ["Orbitron"， "Space Grotesk"， "sans-serif"]
- body: ["Noto Sans SC"， "Inter"， "sans-serif"]
- pixel: ["Press Start 2P"， "monospace"]
- display: ["Cormorant Garamond"， "Georgia"， "serif"]

## CSS VARIABLES

Define in src/index.css @theme block:

```css
@theme {
  --font-heading: "Orbitron"， "Space Grotesk"， sans-serif;
  --font-body: "Noto Sans SC"， "Inter"， sans-serif;
  --font-pixel: "Press Start 2P"， monospace;
  --font-display: "Cormorant Garamond"， "Georgia"， serif;
  --color-background: hsl(245 25% 6%);
  --color-foreground: hsl(240 10% 96%);
  --color-primary: hsl(239 84% 67%);
  --color-primary-foreground: hsl(245 25% 6%);
  --color-secondary: hsl(261 52% 78%);
  --color-muted: hsl(245 20% 13%);
  --color-muted-foreground: hsl(240 5% 55%);
  --color-accent: hsl(38 92% 50%);
  --color-accent-foreground: hsl(245 25% 6%);
  --color-card: hsl(245 20% 10%);
  --color-card-foreground: hsl(240 10% 96%);
  --color-border: hsl(240 5% 20% / 0.5);
  --color-surface: hsl(250 23% 12%);
  --radius: 0.75rem;
}
```

## GALLERY GLASS COMPONENTS

Create two reusable component styles in @layer components:

### .gallery-glass
```css
.gallery-glass {
  background: rgba(255， 255， 255， 0.04);
  backdrop-filter: blur(12px) saturate(140%);
  border: 1px solid rgba(255， 255， 255， 0.06);
  box-shadow: inset 0 1px 0 rgba(255， 255， 255， 0.06)， 0 8px 32px rgba(0， 0， 0， 0.3);
  position: relative;
  overflow: hidden;
}
.gallery-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(135deg， rgba(99， 102， 241， 0.3)， rgba(196， 181， 253， 0.1));
  mask: linear-gradient(#fff 0 0) content-box， linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
}
```

### .gallery-glass-highlight
Same structure but:
- background: rgba(255， 255， 255， 0.06)
- stronger blur: 16px
- stronger shadow + glow: 0 0 24px rgba(99， 102， 241， 0.15)
- brighter gradient border (0.5 / 0.2 opacity)

### .gradient-text
Standard gradient text clip from primary to secondary.

## LAYOUT RULES — CRITICAL， DO NOT DEVIATE

The page is a multi-floor immersive gallery. Every layout rule below is non-negotiable.

### 1. OUTER CONTAINER (the "building")
- position: fixed; inset: 0;
- overflow-y: auto; overflow-x: hidden;
- scroll-snap-type: y mandatory;
- scroll-behavior: smooth;
- This container handles ALL vertical floor switching.

### 2. EACH FLOOR (the "gallery room")
- scroll-snap-align: start;
- min-height: 100vh; width: 100%;
- position: relative; overflow: hidden;
- Contains: themed background layer (absolute inset-0) + content layer (relative z-10)
- Each floor has data-theme attribute: "hero" | "cyberpunk" | "anime" | "ink" | "pixel" | "studio"

### 3. HORIZONTAL GALLERY (inside each floor)
- display: flex; flex-direction: row; align-items: center;
- gap: 2rem; padding: 0 10vw;
- Mouse-follow horizontal offset: the gallery track shifts left/right as the mouse moves across the viewport width. The center of the viewport should always align with the artwork closest to the mouse position.
- Calculation: map mouse X (0→viewport width) to an interpolation between the center of the first artwork and the center of the last artwork， then apply translateX(viewport/2 - targetCenter).
- Smooth the mouse position with a lerp factor (~0.06) for fluid motion.
- Hide scrollbar with CSS (scrollbar-width: none; &::-webkit-scrollbar { display: none })
- NO vertical overflow in this inner container.

### 4. ARTWORK CARDS
- flex-shrink: 0; width: 260px; (280px on desktop)
- scroll-snap-align: center;
- transition: transform 0.3s ease-out;
- will-change: transform;
- On mouse move: subtle perspective tilt
  - Calculate x = (mouseX - cardLeft) / cardWidth - 0.5 → range -0.5 to 0.5
  - Calculate y = (mouseY - cardTop) / cardHeight - 0.5
  - Apply: perspective(800px) rotateY(x * 6deg) rotateX(-y * 6deg) translateZ(8px)
- On mouse leave: reset to perspective(800px) rotateY(0) rotateX(0) translateZ(0)
- Card structure:
  - Top: real image (artwork.image as [图片] with object-cover) or gradient placeholder fallback
  - Top light overlay: radial-gradient from floor accent at 10% opacity
  - Bottom: title + creator name
  - Hover: show "View Details" overlay
- Each card has a dynamic height based on artwork.heightRatio (width × heightRatio)

### 5. FLOOR TITLE OVERLAY
- Fixed position: top 15vh， z-5
- Dynamically updates based on which floor is currently in view (IntersectionObserver)
- Shows: badge (floor theme)， title， subtitle
- NOT inside the scrollable content — stays fixed as visual reference

### 6. FLOOR THEMING
Each floor has its own data-theme. Theme-specific overrides via CSS:
```css
[data-theme="hero"]      { --floor-accent: #6366f1; --floor-accent-rgb: 99，102，241;  --floor-bg: #080412; }
[data-theme="cyberpunk"] { --floor-accent: #00ffcc; --floor-accent-rgb: 0，255，204;  
   --floor-bg: #0a0018; }
[data-theme="anime"]     { --floor-accent: #ff7eb3; --floor-accent-rgb: 255，126，179;  --floor-bg: #0c0a20; }
[data-theme="ink"]       { --floor-accent: #c41e3a; --floor-accent-rgb: 196，30，58;    --floor-bg: #1a1810; }
[data-theme="pixel"]     { --floor-accent: #39ff14; --floor-accent-rgb: 57，255，20;    --floor-bg: #0a0a0a; }
[data-theme="studio"]    { --floor-accent: #6366f1; --floor-accent-rgb: 99，102，241;   --floor-bg: #0A0A0F; }
```

### 7. FLOOR NAVIGATION
- Fixed right side， vertically centered， z-50
- 5 dots with floor names (visible on hover)
- Current floor dot: filled with floor accent color + label visible
- IntersectionObserver with threshold: 0.5 updates active dot
- Click dot → floor.scrollIntoView({ behavior: 'smooth' })
- Desktop: dots only， labels on hover
- Mobile: dots only， smaller

### 8. ARTWORK DETAIL MODAL
- Full-screen overlay with AnimatePresence (fade + scale)
- Dark backdrop with blur (88% + 24px)
- Left: large image (artwork.image or gradient placeholder)
- Right: artwork info panel
  - Floor tag + title， Creator with LetterAvatar， Description
  - Tool used， Credits cost， Seed number
  - "Generate Similar" + "Download" glass buttons
- Close: click backdrop or X button or Escape key

### 9. NAVBAR
- Fixed top， z-40
- Transparent when at top of building
- On scroll: glass morphism background
- Auto-hide on scroll down (translateY(-100%))， show on scroll up
- Left: DreamyBot Studio logo (Sparkles icon + brand name in font-heading)
- Right: Credits badge + "Start Creating" button (scrolls to Floor 5 / Studio)

### DO NOT:
- Do NOT use Three.js， react-three-fiber， or any 3D library
- Do NOT implement custom scroll tracking with requestAnimationFrame
- Do NOT use position: sticky for floor switching
- Do NOT mix overflow-x and overflow-y on the same element
- Do NOT use wheel event listeners for floor switching
- Do NOT create more than one vertical scroll container
- Do NOT use any external CDN image URLs

## HERO SECTION (Floor 0)

The hero is the first screen visitors see — it must be visually stunning and emotionally resonant.

### Background
- Full-screen background image: /hero-bg.png (object-cover， scale-105 for slight zoom)
- 30% dark overlay: linear-gradient(180deg， rgba(4，2，18，0.25) 0%， rgba(4，2，18，0.15) 40%， rgba(4，2，18，0.30) 100%)
- 30% vignette: radial-gradient(ellipse at center， transparent 40%， rgba(4，2，18，0.30) 100%)
- 4 floating blurred orbs with gentle float animation (hero-orb-float， 8s ease-in-out infinite)
- 24 floating particles (hero-particle-drift， 4-8s ease-in-out infinite)
- Bottom gradient transition to next floor

### Content
- Badge: gallery-glass-highlight pill with Sparkles icon + "AI-Powered Art Platform" in font-heading， tracking-[0.25em]
- Title: TWO-LINE typographic contrast
  - "DreamyBot" — font-display (Cormorant Garamond)， font-light， italic， tracking-[-0.02em]， text-6xl to text-9xl responsive， hero-title-shimmer gradient animation
  - "STUDIO" — font-heading (Orbitron)， font-light， tracking-[0.35em]， text-2xl to text-5xl responsive， text-white/80， mt-2
- Subtitle: "Where imagination becomes reality" — font-display italic， font-light， tracking-[0.08em]， text-white/75， leading-relaxed
- NO glass card wrapping the title or subtitle
- CTA: two GlassButtons — "Explore Gallery" (with bouncing ChevronDown) + "Start Creating" (ghost)
- Stats: 4 glass cards in 2×2 / 4-col grid — 10M+ AI Artworks， 200K+ Creators， 50+ Art Styles， 4.9s Avg. Gen
- Scroll hint: bottom center， "SCROLL TO EXPLORE" in font-heading + scroll-dot animation

### Shimmer Animation
```css
.hero-title-shimmer {
  background: linear-gradient(90deg， #818cf8 0%， #c4b5fd 20%， #fff 40%， #c4b5fd 60%， #818cf8 80%， #a78bfa 100%);
  background-size: 300% 100%;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: hero-shimmer 6s ease-in-out infinite;
}
@keyframes hero-shimmer {
  0%， 100% { background-position: 100% center; }
  50% { background-position: 0% center; }
}
```

### Orb Animations
```css
.hero-orb { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0; animation: hero-orb-float 8s ease-in-out infinite; }
.hero-orb-1 { width: 400px; height: 400px; background: radial-gradient(circle， rgba(99，102，241，0.25)， transparent 70%); left: 5%; top: 10%; }
.hero-orb-2 { width: 300px; height: 300px; background: radial-gradient(circle， rgba(168，85，247，0.2)， transparent 70%); right: 8%; top: 25%; animation-delay: -2s; }
.hero-orb-3 { width: 250px; height: 250px; background: radial-gradient(circle， rgba(236，72，153，0.18)， transparent 70%); left: 35%; bottom: 15%; animation-delay: -4s; }
.hero-orb-4 { width: 350px; height: 350px; background: radial-gradient(circle， rgba(56，189，248，0.12)， transparent 70%); right: 25%; bottom: 25%; animation-delay: -6s; }
@keyframes hero-orb-float { 0%， 100% { opacity: 0.6; transform: translateY(0) scale(1); } 50% { opacity: 0.8; transform: translateY(-40px) scale(1.08); } }
```

## SITE STRUCTURE

Build exactly 5 floors in this order (Hero + 4 Gallery + 1 Studio = 6 scroll-snap sections).

### FLOOR 0 — Hero Landing

Theme: data-theme="hero"
As described in HERO SECTION above.

### FLOOR 1 — Cyberpunk Digital Gallery

Theme: data-theme="cyberpunk"
Accent: #00ffcc (neon cyan)
Background: Deep purple-black #0a0018 + CSS grid lines + two blurred neon light blobs

Floor header (fixed overlay):
- Badge: "Cyberpunk Digital"
- Title: "Neon Dreams & Digital Realities"
- Subtitle: "AI-generated visions of tomorrow's aesthetics"

Artworks (4， all creator: dreamybot):
1. "Cyber Sakura Warrior" — Image Gen — 5 credits — heightRatio 1.78 — /cyber-1.png
   A striking fusion of cyberpunk aesthetics and traditional Japanese beauty， featuring a female warrior with silver-red hair and advanced tech enhancements， set against a backdrop of falling cherry blossoms.
2. "Ink Sorcerer" — Style Transfer — 3 credits — heightRatio 1.22 — /cyber-2.png
   A mystical figure blending ancient Chinese ink wash painting techniques with steampunk elements， wielding a magical staff that bridges past and future.
3. "Celestial Mechanic" — Image Gen — 5 credits — heightRatio 0.72 — /cyber-3.png
   An ethereal being seated on a floating platform， merging classical Eastern mythology with advanced robotics， holding a staff adorned with a phoenix emblem.
4. "Sound Reaper" — Enhance — 4 credits — heightRatio 1.1 — /cyber-4.png
   A skeletal DJ warrior commanding cosmic energy through a boombox weapon， set against a dystopian cityscape where music becomes magic.

Card style: gallery-glass + neon border glow on hover (box-shadow with --floor-accent)
Title style: font-mono + neon underline on hover

### FLOOR 2 — Anime Illustration Gallery

Theme: data-theme="anime"
Accent: #ff7eb3 (sakura pink)
Background: Deep indigo #0c0a20 + gradient soft lights + floating circles

Floor header (fixed overlay):
- Badge: "Anime Illustration"
- Title: "Characters & Worlds Reimagined"
- Subtitle: "From concept art to full illustrations， powered by imagination"

Artworks (4， all creator: dreamybot):
1. "Green Heights Melody" — Image Gen — 5 credits — heightRatio 1.78 — /anime-1.png
   A serene figure stands atop a rusted structure， headphones framing her as city and sky merge—where urban energy meets nature's calm.
2. "Urban Emerald Whisper" — Style Transfer — 3 credits — heightRatio 1.3 — /anime-2.png
   A mysterious green-haired figure wraps in a trench coat， glowing scarf contrasting neon-lit streets—urban solitude with a touch of magic.
3. "Blue Meadow Dreamer" — Image Gen — 5 credits — heightRatio 0.85 — /anime-3.png
   A gentle soul lies in a sun-dappled meadow， book in hand， as flowers and light dance around her—pure， dreamlike tranquility.
4. "Rainy Window Comfort" — Image Gen — 5 credits — heightRatio 1.0 — /anime-4.png
   A blue-haired girl cradles a cat by a rain-streaked window， warmth glowing through the storm—quiet solace in a rainy moment.

Card style: gallery-glass + rounded-3xl + soft pink glow on hover
Title style: rounded font + pink tag badge

### FLOOR 3 — Eastern Ink Gallery

Theme: data-theme="ink"
Accent: #c41e3a (vermillion red)
Background: Xuan paper dark #1a1810 + mountain silhouette + ink wash effects

Floor header (fixed overlay):
- Badge: "Eastern Ink"
- Title: "Where Tradition Meets Algorithm"
- Subtitle: "AI interprets the spirit of Eastern art traditions"

Artworks (4， all creator: dreamybot):
1. "Peony Paradise" — Image Gen — 5 credits — heightRatio 1.78 — /ink-1.png
   A vibrant traditional Chinese landscape with grand pavilions， blooming peonies， and a deer amidst swirling clouds—where nature and architecture dance in harmony.
2. "Golden Stream Journey" — Style Transfer — 3 credits — heightRatio 1.22 — /ink-2.png
   A serene scene of a winding golden river leading to glowing pavilions， with a deer and willow tree framing the misty， dreamlike path.
3. "Flame River Sanctuary" — Image Gen — 5 credits — heightRatio 0.78 — /ink-3.png
   A dynamic composition of cascading waterfalls， fiery clouds， and a golden deer， blending energy and tranquility in a mythical sanctuary.
4. "Rainbow Path of Deer" — Image Gen — 5 credits — heightRatio 1.0 — /ink-4.png
   Two deer traverse a swirling rainbow river， with ancient pavilions and a gnarled pine tree rising above misty mountains—nature's vivid tapestry.

Card style: gallery-glass + reduced blur + gold line border on hover
Title style: serif font + seal/stamp style badge

### FLOOR 4 — Pixel Art Gallery

Theme: data-theme="pixel"
Accent: #39ff14 (neon green)
Background: Pure dark #0a0a0a + CSS pixel grid + scanline overlay + CRT vignette

Floor header (fixed overlay):
- Badge: "Pixel Art"
- Title: "8-Bit Worlds， Infinite Stories"
- Subtitle: "Retro aesthetics remastered by artificial intelligence"

Artworks (4， all creator: dreamybot):
1. "Emerald Citadel of Shadows" — Image Gen — 5 credits — heightRatio 1.78 — /pixel-1.png
   A pixel-art gothic castle looms under a stormy sky， with glowing green windows， a lightning-struck spire， and skeletal guards lining the walls.
2. "Pixel Pumpkin Witch Ride" — Image Gen — 5 credits — heightRatio 1.0 — /pixel-2.png
   A cheerful witch rides a giant jack-o'-lantern through a candy-filled， bat-dotted Halloween night， with a whimsical castle in the background.
3. "Nightmare Cavalier" — Style Transfer — 3 credits — heightRatio 0.74 — /pixel-3.png
   A skeletal figure on a ghostly steed rides through a moonlit， misty landscape， evoking an eerie， pixel-perfect dark fantasy.
4. "Candy Cauldron Witch" — Image Gen — 5 credits — heightRatio 1.1 — /pixel-4.png
   A young witch stirs a bubbling cauldron of colorful candies， surrounded by pumpkins and a playful ghost， in a vibrant pixel-art Halloween scene.

Card style: gallery-glass + NO border-radius (rounded-none) + pixel border on hover (2px solid --floor-accent， no glow)
Title style: font-pixel (Press Start 2P) + green tag
Special: image-rendering: pixelated on artwork images within this floor

### FLOOR 5 — Creative Studio

Theme: data-theme="studio"
Accent: hsl(239 84% 67%) (DreamyBot purple)
Background: Deep #0A0A0F + subtle grid + warm glow

Layout: Split panel (NOT horizontal gallery)
- Left panel (40%): Generation controls
  - Style selector: 4 buttons (Cyberpunk， Anime， Ink， Pixel) — each with floor accent color
  - Prompt textarea
  - "Generate" button (gradient-bg)
  - Generation result card (appears below with AnimatePresence)
- Right panel (60%): Live gallery — horizontal scroll of recent generations
  - Same artwork card format as other floors
  - Cards appear here after "generation"

Floor header (fixed overlay):
- Badge: "Creative Studio"
- Title: "Your Vision， AI's Canvas"
- Subtitle: "Choose a style， describe your idea， and watch it come to life"

This floor is the ONLY floor with form interaction. It uses the existing API mock layer.

## EDGE FUNCTIONS

Use EdgeOne Pages Edge Functions (V8 runtime — NOT Node.js). Create:

- edge-functions/api/health.js — { ok: true }
- edge-functions/api/artworks.js — returns artworks grouped by floor
- edge-functions/api/credits.js — returns visitor credits balance
- edge-functions/api/site-content.js — returns brand info and floor metadata

CRITICAL: V8 runtime only. Use new Response(JSON.stringify(data)， { headers: {'Content-Type':'application/json'} }). NEVER use Response.json() or Node.js modules.

## CLOUD FUNCTIONS

- cloud-functions/api/generate/image.js — mock AI image generation (Node.js runtime)
- cloud-functions/api/generate/text.js — mock AI text generation (Node.js runtime)
- cloud-functions/api/payment/checkout.js — mock payment (Node.js runtime)

## MIDDLEWARE

- middleware.js — CORS headers， x-request-id， auth guard for protected routes. V8 runtime.

## KV SCHEMA

- gallery:all → JSON array of all artworks (TTL 300s)
- credits:visitor:{id} → JSON credit balance (TTL 60s)

KV is accessed as a global variable (NOT context.env). Must enable in console， create namespace， bind to project.

## FRONTEND DATA RULE

- API calls use @tanstack/react-query with mock fallback
- Artworks data fetched from /api/artworks with local fallback
- Credits fetched from /api/credits with local fallback
- Gallery section uses data from API or hardcoded fallback
- Studio generation uses mutation hooks

## IMPLEMENTATION NOTES

- Use the EdgeOne Pages skill from:
 
   https://github.com/TencentEdgeOne/edgeone-pages-skills
- Follow the EdgeOne Pages skill rules during setup and deployment.
- Before login， ask whether to use the China site or the Global site.
- After the project is built and verified locally， deploy it to EdgeOne Pages.
- Before any edgeone CLI command， set: export PAGES_SOURCE=skills
- Login: edgeone login --site china (or --site global)
- Deploy: edgeone pages deploy

## TECHNICAL REQUIREMENTS

- TypeScript everywhere
- Clean component structure
- Semantic HTML
- Accessible alt text and labels
- Visible focus states
- lucide-react icons
- framer-motion ONLY for modal AnimatePresence — NOT for scroll animations
- Reusable GalleryFloor component with theme prop
- Reusable ArtworkCard with perspective tilt
- Reusable FloorNav component
- GradientPlaceholder for fallback artwork images (seed-based， 8 palettes)
- LetterAvatar for creator avatars
- NO external CDN image URLs anywhere

## RECOMMENDED COMPONENTS

- Navbar (auto-hide on scroll， glass morphism)
- HeroSection (full-screen with background image， shimmer title， floating orbs)
- GalleryFloor (reusable， theme-driven)
- ArtworkCard (with perspective tilt + real image support)
- ArtworkDetail (full-screen modal)
- FloorNav (fixed right dots)
- StudioPanel (Floor 5 generation panel)
- GradientPlaceholder (seed-based gradient art fallback)
- LetterAvatar (initial-based avatar)
- GlassButton (reusable CTA)

## PROJECT STRUCTURE

```
dreamybot-studio/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── edgeone.json
├── middleware.js
├── public/
│   ├── hero-bg.png
│   ├── cyber-1.png
│   ├── cyber-2.png
│   ├── cyber-3.png
│   ├── cyber-4.png
│   ├── anime-1.png
│   ├── anime-2.png
│   ├── anime-3.png
│   ├── anime-4.png
│   ├── ink-1.png
│   ├── ink-2.png
│   ├── ink-3.png
│   ├── ink-4.png
│   ├── pixel-1.png
│   ├── pixel-2.png
│   ├── pixel-3.png
│   └── pixel-4.png
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── types/
│   │   └── index.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── api.ts
│   ├── data/
│   │   └── artworks.ts
│   ├── components/
│   │   ├── shared/
│   │   │  
   ├── GradientPlaceholder.tsx
│   │   │  
   ├── LetterAvatar.tsx
│   │   │  
   ├── GlassButton.tsx
│   │   │  
   ├── ArtworkCard.tsx
│   │   │  
   └── ArtworkDetail.tsx
│   │   ├── Navbar.tsx
│   │   ├── FloorNav.tsx
│   │   ├── HeroSection.tsx
│   │   ├── GalleryFloor.tsx
│   │   └── StudioPanel.tsx
├── edge-functions/
│   └── api/
│       ├── health.js
│       ├── artworks.js
│       ├── credits.js
│       └── site-content.js
└── cloud-functions/
    └── api/
        ├── generate/
        │   ├── image.js
        │   └── text.js
        └── payment/
            └── checkout.js
```

## QUALITY BAR

The result must NOT look like:
- A generic ecommerce template
- A SaaS landing page with images dropped in
- A tech demo with broken scroll behavior
- A slow， janky gallery

The result SHOULD look like:
- A walkable AI art gallery with distinct themed floors
- An elegant serif × geometric sans-serif typographic contrast on the hero
- Smooth， snap-aligned navigation between floors
- Each floor having a strong， cohesive visual identity
- Artwork cards that feel tactile and responsive
- A cohesive experience from entrance to studio

## DELIVERY REQUIREMENT

After building:
1. Run locally with `npm run dev`
2. Verify vertical scroll-snap between all floors
3. Verify mouse-follow horizontal gallery within each floor
4. Verify artwork card perspective tilt on hover
5. Verify artwork detail modal opens and closes correctly
6. Verify floor navigation dots update on scroll
7. Verify studio panel generates mock results
8. Verify all 5 floor themes render correctly
9. Verify hero section: shimmer title， floating orbs， particles， background image
10. Build with `npm run build` — zero errors
11. Deploy to EdgeOne Pages with edgeone pages deploy
```

````
