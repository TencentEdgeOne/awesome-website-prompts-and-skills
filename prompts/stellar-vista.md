# Stellar Vista — 太空天文观测站

> 由 **miaoxiansheng** 出品 · WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Stellar Vista demo](../assets/demos/stellar-vista.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/stellar-vista.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Stellar Vista |
| 类型 | 太空天文观测站单页站 |
| 技术栈 | React + Vite + TypeScript + Tailwind CSS + Framer Motion + Edge Functions |
| 出品方 | miaoxiansheng |

## 📝 作品介绍

Stellar Vista 是一个沉浸式太空天文观测站网站，采用 React + Tailwind CSS + Framer Motion 构建，通过 EdgeOne Pages 部署，并使用 Edge Function 提供实时天文数据。整站采用深空主题配色（Deep Space #0a0e27），搭配自主研发的 Observatory Glass 毛玻璃组件系统，将天文数据可视化与太空美学完美融合。

核心亮点：
- **CSS/SVG 动画太阳系** — 8颗行星以不同速度围绕太阳旋转，点击行星查看详细信息
- **SVG 星图可视化** — 今晚星空实时星图，标注星座连线与恒星位置
- **内联 SVG 数据仪表盘** — 月相曲线、行星轨道图、流星雨预测柱状图、太阳活动折线图，无需第三方图表库
- **Observatory Glass 视觉系统** — 两级毛玻璃效果（subtle + strong），搭配呼吸光晕动画
- **Edge Functions** — 3个天文数据 API（行星数据、月相数据、今晚天象事件）

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

``````
# Stellar Vista — 网站生成 Prompt（Final v1）

> **用途**：把下面代码块中的 Prompt 整段复制，喂给执行型 AI（Claude / Cursor / WorkBuddy 等），一次性产出 React 网站 + Edge Functions，并部署到 EdgeOne Pages。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 0 — INSTALL THE EDGEONE PAGES SKILL FIRST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Before writing any code, install the official EdgeOne Pages skill so you have
the authoritative reference for Edge Functions, routing, and deployment:

    npx skills add edgeone-pages/edgeone-pages-skills

Consult the skill's references (especially `edgeone-pages-dev/references/
edge-functions.md` and `edgeone-pages-deploy`) whenever you write function
code or run deploy commands.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 1 — GOAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Build "Stellar Vista — Your Window to the Cosmos", a single-page immersive
space observatory website. The site must feel like looking through a high-end
observatory's glass dome into deep space.

### What it IS:
- A visually stunning space observatory with glass-morphism UI
- An interactive solar system with animated orbiting planets
- A tonight's sky section with star map and astronomical events
- A data dashboard with moon phases, meteor showers, solar activity charts
- A deep space gallery showcasing nebulae, galaxies, black holes

### What it MUST NOT be:
- A generic dark-themed dashboard with no personality
- A flat, static page with no motion or interactivity
- A Three.js-heavy app that can't deploy on EdgeOne Pages
- A site using heavy chart libraries (recharts, chart.js) — use inline SVG instead
- A site with absolute asset paths — all paths must be relative (`./`)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — BRAND RULES & COLOR SYSTEM
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand: Stellar Vista
Tagline: "Your Window to the Cosmos"

Color palette (use as CSS custom properties in `:root`):
```css
--deepSpace: #0a0e27;          /* Background */
--nebulaBlue: #7dd3fc;         /* Primary accent */
--starGold: #fbbf24;           /* Secondary accent */
--supernovaPink: #f472b6;      /* Alert/highlight */
--cosmicPurple: #a78bfa;       /* Tertiary accent */
--asteroidGray: #94a3b8;       /* Text/secondary */
--surface: rgba(10 14 39 / 0.6);
--surface-strong: rgba(10 14 39 / 0.85);
--border: rgba(125 211 252 / 0.15);
--border-strong: rgba(125 211 252 / 0.3);
--glow: 0 0 20px rgba(125 211 252 / 0.3);
--glow-strong: 0 0 40px rgba(125 211 252 / 0.5);
```

Tailwind config must extend these as named colors + RGB variants.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — FONTS & TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Google Fonts (load in `<head>`):
- Space Grotesk (wght 300–700) → display headings
- Inter (wght 300–500) → body text
- JetBrains Mono (wght 400–500) → data labels, timestamps, specs

Font families in Tailwind config:
```
fontFamily: {
  display: ['Space Grotesk', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — OBSERVATORY GLASS CSS EFFECT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is the signature visual effect. Every card, panel, and info box uses it.

```css
/* Variant 1: Subtle — default card */
.observatory-glass {
  backdrop-blur: 16px;
  background: rgba(10 14 39 / 0.6);
  border: 1px solid rgba(125 211 252 / 0.15);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(125 211 252 / 0.3);
}

/* Variant 2: Strong — featured panels, data charts */
.observatory-glass-strong {
  backdrop-blur: 24px;
  background: rgba(10 14 39 / 0.85);
  border: 1px solid rgba(125 211 252 / 0.3);
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(125 211 252 / 0.5);
}
```

The `<ObservatoryGlass>` React component accepts `variant="default"|"strong"`,
optional `glow` prop (adds pulse animation), and `className` for overrides.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 — LAYOUT RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Max content width: `max-w-6xl` (72rem)
- Sections: `py-20 px-4` padding
- Grid layouts: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` or `lg:grid-cols-4`
- All sections animate in with framer-motion `whileInView` + `viewport={{ once: true }}`
- Vite base MUST be `./` (relative paths for EdgeOne Pages)
- Build script MUST be `vite build` (skip tsc check)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 6 — SITE STRUCTURE (section by section)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### Section 1: Hero (100vh, full-screen)
- Deep space gradient background
- Decorative nebula glows (purple + pink blurred circles)
- ObservatoryGlass-strong panel centered with:
  - "Stellar Vista" — text-5xl md:text-7xl, nebulaBlue, text-shadow glow
  - "Your Window to the Cosmos" — text-xl, asteroidGray
  - Two CTA buttons: "Enter Observatory" (nebulaBlue bg/border), "View Tonight's Sky" (glass style)
  - Tagline: "Live Data · Real-time Events · 3D Solar System" — text-xs, starGold
- Scroll indicator at bottom (animated bouncing chevron)

### Section 2: Tonight's Sky (`id="tonight-sky"`)
- Title: "Tonight's Sky" + current date (zh-CN format, starGold)
- 3-column grid: Events panel (left) + Star map (right 2 cols)
- Events: ObservatoryGlass cards with name, time, type, magnitude, description
- Star map: SVG (viewBox 0 0 100 100) with:
  - 12 named stars at computed positions (Sirius, Betelgeuse, Vega, etc.)
  - Constellation lines (polyline, nebulaBlue stroke)
  - Radial gradient background glow
  - Star brightness based on magnitude

### Section 3: Solar System Explorer (`id="solar-system"`)
- Title: "Solar System Explorer"
- 4-column grid: SVG scene (3 cols) + Info panel (1 col)
- SVG solar system (viewBox -350 -350 700 700):
  - 200 background stars (random positions, opacity 0.1–0.5)
  - Sun: circle r=35, fill starGold + glow rings
  - 8 planet orbit rings (circle, nebulaBlue 0.08 opacity)
  - 8 planets at orbit positions with glow halos
  - Saturn with ellipse ring
  - Planet labels (text, asteroidGray)
  - CSS orbit animations: each planet class rotates at different speed
    (.orbit-mercury 4s, .orbit-venus 7s, .orbit-earth 10s, .orbit-mars 14s,
     .orbit-jupiter 30s, .orbit-saturn 45s, .orbit-uranus 60s, .orbit-neptune 80s)
- Info panel: ObservatoryGlass-strong with planet details (name, facts, diameter, distance, period)
- Planet list sidebar when no planet selected
- Click planet → setSelectedPlanet

Planet data:
```js
Mercury: color #8c7e6d, orbitRadius 60, facts "Smallest planet", diameter "4,879 km", distance "0.39 AU", period "88 days"
Venus: color #e8cda0, orbitRadius 90, facts "Hottest planet", diameter "12,104 km", distance "0.72 AU", period "225 days"
Earth: color #4a90d9, orbitRadius 120, facts "Our home", diameter "12,756 km", distance "1.00 AU", period "365 days"
Mars: color #c1440e, orbitRadius 150, facts "Red planet", diameter "6,792 km", distance "1.52 AU", period "687 days"
Jupiter: color #c88b3a, orbitRadius 195, facts "Largest planet", diameter "142,984 km", distance "5.20 AU", period "12 years"
Saturn: color #e8d5a3, orbitRadius 240, facts "Famous rings", diameter "120,536 km", distance "9.58 AU", period "29 years"
Uranus: color #7ec8e3, orbitRadius 280, facts "Ice giant", diameter "51,118 km", distance "19.22 AU", period "84 years"
Neptune: color #3f54ba, orbitRadius 310, facts "Farthest planet", diameter "49,528 km", distance "30.05 AU", period "165 years"
```

### Section 4: Deep Space Gallery
- Title: "Deep Space Gallery"
- 3-column grid mixing gallery cards + stat cards
- Gallery cards: gradient background (category-specific), decorative overlay stars, name + category + description
- Stat cards: ObservatoryGlass-strong centered, label + large value (Observable Universe "93 billion light-years", Known Galaxies "2 trillion+")

Gallery items:
```js
NGC 7000 Nebula — gradient from #1a1040 via #3a1860 to #e84680
M31 Andromeda — gradient from #0a1a3a via #2a3a6a to #4a80d9
SN 1987A Supernova — gradient from #1a0a0a via #3a1a1a to #fbbf24
M87 Black Hole — gradient from #0a0a1a via #1a1a3a to #f472b6
```

### Section 5: Data Dashboard
- Title: "Astronomical Data" + "Real-time astronomical observations and forecasts"
- 2x2 grid of ObservatoryGlass-strong panels:

**Moon Phases panel:**
- Moon illumination circle (linear-gradient left/right split by percentage)
- Current phase name + next full moon date
- Inline SVG area chart (300x80 viewBox): 30-day illumination curve, starGold stroke + fill, current day dot

**Planetary Positions panel:**
- SVG orbital diagram (200x200 viewBox): Sun center, 6 orbit rings, planets at computed angles
- 4-row list of planets with distance (AU)

**Meteor Shower Forecast panel:**
- Inline SVG bar chart (300x120 viewBox): 7 meteor showers, nebulaBlue bars with chartBarGrow animation
- Y axis labels, bar labels

**Solar Activity panel:**
- Current sunspot count + flare count
- Inline SVG line chart (300x100 viewBox): dual lines — sunspots (starGold) + flares (supernovaPink)
- End-point dots for current values

### Section 6: About / Our Mission
- Centered layout, max-w-2xl
- Title: "Our Mission"
- Description paragraph
- 3-column feature cards: Real Data (📡), Interactive 3D (🪐), AI-Powered (✨)
- Footer: "Data sources: NASA/JPL · ESA · IAU"

### Section 7: Footer
- ObservatoryGlass-strong container
- Logo (gradient circle nebulaBlue→cosmicPurple with glow)
- Navigation links (Home, Tonight's Sky, Solar System, Gallery, Data, About)
- Social placeholders (GitHub, Twitter, Discord)
- "Built with EdgeOne Pages · Deployed from the cosmos"
- "Visitors from Earth: 1,247"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 7 — EDGE FUNCTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Create 3 Edge Functions in `functions/api/` directory. Each must export:

```ts
export const config = { runtime: 'edge' }
export default async function handler(request: Request): Promise<Response>
```

### GET /api/data-moon
Returns moon phase data for current month:
```json
{
  "phase": "Waning Crescent",
  "illumination": 35,
  "next_full": "May 23",
  "next_new": "May 30",
  "cycle_data": [{ "day": 1, "phase_name": "...", "illumination_pct": 45 }, ...]
}
```
Generate 30-day cycle using `Math.sin((i - 7) * Math.PI / 14.5)` for illumination curve.

### GET /api/data-planets
Returns 8 planets with distance, magnitude, position angle, rise/set times:
```json
{
  "planets": [
    { "name": "Mercury", "distance_au": 0.39, "magnitude": -1.9, "position_angle": 45, "rise_time": "05:30", "set_time": "20:15" },
    ...
  ]
}
```

### GET /api/events-tonight
Returns tonight's astronomical events (accepts optional `?date=YYYY-MM-DD` param):
```json
{
  "events": [
    { "name": "Saturn at Opposition", "type": "planet", "time": "22:30", "magnitude": "+0.4", "description": "Best night to observe Saturn", "constellation": "Aquarius", "visibility_score": 92 },
    { "name": "Lyrid Meteor Shower Peak", "type": "meteor", "time": "03:00", "magnitude": "18/hr", ... },
    { "name": "ISS Pass (Bright)", "type": "satellite", ... },
    { "name": "Venus Evening Star", "type": "planet", ... },
    { "name": "M13 Hercules Cluster", "type": "deepsky", ... }
  ],
  "date": "2026-05-15"
}
```

All functions must return `Content-Type: application/json` headers.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 8 — CSS ANIMATIONS (add to index.css)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```css
/* Orbit animations */
.orbit-mercury { animation: orbit 4s linear infinite; }
.orbit-venus   { animation: orbit 7s linear infinite; }
.orbit-earth   { animation: orbit 10s linear infinite; }
.orbit-mars    { animation: orbit 14s linear infinite; }
.orbit-jupiter { animation: orbit 30s linear infinite; }
.orbit-saturn  { animation: orbit 45s linear infinite; }
.orbit-uranus  { animation: orbit 60s linear infinite; }
.orbit-neptune { animation: orbit 80s linear infinite; }

@keyframes orbit {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* Planet glow pulse */
.planet-glow { animation: pulseGlowPlanet 3s ease-in-out infinite; }
@keyframes pulseGlowPlanet {
  0%, 100% { opacity: 0.6; }
  50%      { opacity: 1; }
}

/* Chart bar grow animation */
.chart-bar { animation: chartBarGrow 0.6s ease-out forwards; transform-origin: bottom; }
@keyframes chartBarGrow {
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 9 — TECHNICAL REQUIREMENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- React 18 + Vite 5 + TypeScript
- Tailwind CSS 3.4 (use `@tailwind` directives, custom theme extend)
- Framer Motion 11 (for section entrance animations + hero motion)
- Lucide React (icons, if needed)
- NO Three.js, NO @react-three/fiber, NO @react-three/drei
- NO Recharts, NO chart.js — use inline SVG charts instead
- NO hls.js
- Build: `vite build` only (skip tsc check)
- Vite config: `base: './'` (relative asset paths for EdgeOne Pages)
- TypeScript strict mode with `noUnusedLocals`, `noUnusedParameters`
- Semantic HTML with proper heading hierarchy
- Responsive: mobile-first, breakpoints at sm/md/lg
- Custom scrollbar styling (6px width, nebulaBlue colors)
- Selection highlight: nebulaBlue background

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 10 — DEPENDENCIES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

```json
{
  "dependencies": {
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "edgeone": "^1.4.9",
    "postcss": "^8.4.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.3.0",
    "vite": "^5.1.0"
  }
}
```

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 11 — DEPLOYMENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

After building (`npm run build`), deploy to EdgeOne Pages:

```bash
npx edgeone pages deploy dist/
```

Verify:
- All sections render with Observatory Glass effects
- Solar system planets orbit with CSS animations
- Charts display with inline SVG
- Edge Functions respond at /api/data-moon, /api/data-planets, /api/events-tonight
- Asset paths are relative (./assets/ not /assets/)
- Total JS bundle under 300KB
``````