# Pawsome — 宠物社区单页站

> 由 **EdgeOne 团队** 出品 · WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 官方示例

## 🎬 Demo

![Pawsome demo](../assets/demos/pawsome.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/pawsome.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Pawsome |
| 类型 | 宠物社区落地页 |
| 技术栈 | React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Edge Functions + KV Storage |
| 出品方 | EdgeOne 团队 |

## 📝 作品介绍

Pawsome 是一个专为宠物爱好者打造的温馨社区平台，采用 React + Vite + TypeScript + Tailwind CSS 技术栈开发。设计风格暗黑奢华，融入 Apple 风格的「液态玻璃」视觉特效，以纯黑背景配合温暖的奶油色调，营造舒适惬意的氛围。核心功能包括实时「Paw Check-in」访客计数器、宠物日常分享社区、精选宠物用品商城等，为猫狗宠物主人提供分享日常、购物和社交的一站式体验。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

`````
Build a single-page landing page for **Pawsome — a cozy community for pet parents to share daily moments and shop curated goods for cats and dogs**. Use React + Vite + TypeScript + Tailwind CSS + shadcn/ui. The aesthetic is dark, premium, Apple-inspired with a custom "liquid glass" morphism effect. Pure black background throughout, with warm cream/honey/caramel accent highlights to convey the cozy, heartwarming pet community vibe.

The site has one dynamic feature: a real-time "Paw Check-in" live visitor counter powered by an edge function with KV storage (see the EDGE FUNCTION REQUIREMENT section).

═══════════════════════════════════════════════════
FONTS & DESIGN SYSTEM
═══════════════════════════════════════════════════

Google Fonts import:
- Instrument Serif (italic) — headings
- Barlow (300, 400, 500, 600) — body text

Tailwind config — extend fontFamily:
- heading: ["'Instrument Serif'", "serif"]
- body: ["'Barlow'", "sans-serif"]

CSS Variables (:root in index.css):
--background: 30 25% 8%;
--foreground: 0 0% 100%;
--primary: 0 0% 100%;
--primary-foreground: 30 25% 8%;
--accent: 32 70% 65%;
--border: 0 0% 100% / 0.2;
--radius: 9999px;
--font-heading: 'Instrument Serif', serif;
--font-body: 'Barlow', sans-serif;

All headings: font-heading italic text-white tracking-tight leading-[0.9]
All body text: font-body font-light text-white/60 text-sm
All buttons: font-body rounded-full

IMPORTANT — smooth scroll for anchor navigation:
In index.css, on the `html` element add:
  scroll-behavior: smooth;
  scroll-padding-top: 80px;

═══════════════════════════════════════════════════
LIQUID GLASS CSS (in @layer components)
═══════════════════════════════════════════════════

Two variants — .liquid-glass (subtle) and .liquid-glass-strong (more visible):

.liquid-glass:
- background: rgba(255, 255, 255, 0.01);
- background-blend-mode: luminosity;
- backdrop-filter: blur(4px);
- border: none;
- box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
- position: relative;
- overflow: hidden;

::before pseudo-element — a gradient border mask:
- content: '';
- position: absolute; inset: 0;
- border-radius: inherit;
- padding: 1.4px;
- background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
- -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
- -webkit-mask-composite: xor;
- mask-composite: exclude;
- pointer-events: none;

.liquid-glass-strong: Same but backdrop-filter: blur(50px), stronger box-shadow: 4px 4px 4px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,0.15), and slightly higher gradient opacity (0.5 / 0.2).

═══════════════════════════════════════════════════
SHARED HOOK — Lazy autoplay video
═══════════════════════════════════════════════════

Create a shared hook at `src/lib/useLazyVideo.ts`:
- Returns a `videoRef` (React ref to HTMLVideoElement)
- Uses IntersectionObserver with `rootMargin: '300px'` to observe the video element
- When the video enters the viewport, call `videoRef.current.play()` (ignore AbortError)
- When the video leaves the viewport, call `videoRef.current.pause()`
- Cleanup observer on unmount
- All 4 background videos (Hero, HowItWorks, Stats, CtaFooter) must use this hook so only visible videos actually play. Prevents mobile Safari throttling of concurrent autoplay and saves bandwidth.

═══════════════════════════════════════════════════
BRAND LOGO — Pawsome Paw Mark (shared component)
═══════════════════════════════════════════════════

Create a reusable logo component at `src/components/Logo.tsx`.

Props:
- `size?: "nav" | "footer"` (default "nav")
- `asLink?: boolean` (default true) — wraps in `<a href="#home">`

Layout: horizontal flex, `items-center gap-3`, two parts:

1. **Paw mark icon** — hand-crafted inline SVG (NOT emoji, NOT image file), 40×40 px in "nav" / 48×48 px in "footer". A stylized pet paw with one large pad + four small toe beans, rendered in warm cream `#F4E5C9` with soft amber drop-shadow. Exact SVG markup (viewBox 0 0 64 64):

```jsx
<svg
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="shrink-0"
  style={{ filter: "drop-shadow(0 0 6px rgba(244,184,96,0.35))" }}
>
  {/* Main pad */}
  <ellipse cx="32" cy="44" rx="14" ry="11" fill="#F4E5C9" />
  {/* Outer toes (left / right) */}
  <ellipse cx="18" cy="24" rx="5" ry="7" fill="#F4E5C9" />
  <ellipse cx="46" cy="24" rx="5" ry="7" fill="#F4E5C9" />
  {/* Inner toes (left / right) */}
  <ellipse cx="26" cy="14" rx="4.5" ry="6" fill="#F4E5C9" />
  <ellipse cx="38" cy="14" rx="4.5" ry="6" fill="#F4E5C9" />
</svg>
```

2. **Wordmark** — "Pawsome" in Instrument Serif italic, text-white:
   - "nav" size: `text-3xl`
   - "footer" size: `text-4xl`
   - Both: `font-heading italic tracking-tight leading-none`

When `asLink=true`, wrap in `<a href="#home" class="flex items-center gap-3 group cursor-pointer transition-opacity hover:opacity-90">`.

Use this Logo in both Navbar (size="nav") and in CtaFooter's footer block (size="footer", `mb-6` above copyright).

═══════════════════════════════════════════════════
SECTION 1 — NAVBAR (fixed, smart background on scroll)
═══════════════════════════════════════════════════

`<header>` fixed at top-4, full-width, z-50, px-4 md:px-8, with `transition-all duration-300`.

Inner container: `max-w-7xl mx-auto flex items-center justify-between`.

- **Left**: `<Logo size="nav" />`
- **Center** (hidden on mobile, `md:flex`): liquid-glass rounded-full pill `px-2 py-1.5` with nav links (smooth-scroll anchors):
  - "Home" → `#home`
  - "Community" → `#community`
  - "Shop" → `#shop`
  - "Stories" → `#stories`
  - "About" → `#about`
  Each link: `text-sm font-medium text-white/90 px-3.5 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition-colors`.
- **Right**: solid `bg-white text-black rounded-full` "Join Pawsome" button (anchor to `#home`) with ArrowUpRight icon, px-4 py-2.

**Scroll-aware background**: on window scroll > 50, add `backdrop-blur-md bg-black/30` to `<header>`. useState + scroll listener in useEffect (throttle with requestAnimationFrame).

═══════════════════════════════════════════════════
SECTION 2 — HERO (1000px height) — id="home"
═══════════════════════════════════════════════════

`<section id="home">`, relative overflow-visible, height 1000px, black background.

Background video — FULL BLEED, no black bars:
- Container: `absolute inset-0 z-0` (NOT top:20%, NOT object-contain)
- `<video>`: `w-full h-full object-cover` with `style={{ objectPosition: 'center 30%' }}` — positions cat in lower half so it's not hidden behind the headline.
- src: https://pawsome.tobiasliu.cn/pawsome_video1.mp4
- poster: https://pawsome.tobiasliu.cn/pawsome_picture1.png
- Uses useLazyVideo hook
- autoPlay, loop, muted, playsInline

Overlays:
- Radial-gradient dim for readability: `<div class="absolute inset-0 z-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 35%, rgba(0,0,0,0.15), rgba(0,0,0,0.55))' }} />`
- Bottom fade: `absolute bottom-0 left-0 right-0 z-[1]`, height 300px, linear-gradient(to bottom, transparent, black)

Content (z-10, centered, paddingTop: 120px, max-w-6xl mx-auto, text-center):
- Badge pill: liquid-glass rounded-full containing `bg-white text-black rounded-full` "NEW" tag + "A cozy little home for every tail." text
- Heading: `<BlurText>` — "Where Every Pet Has a Story." — `text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-foreground leading-[0.8] tracking-[-4px] drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]`. Word-by-word blur-to-clear (delay 100ms per word).
- Subtext (motion.p, 0.8s delay): "Share the tiny moments. Find your pet's people. Shop the good stuff. Pawsome is the warmest corner of the internet for cat and dog parents." — `drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]`
- CTA buttons (motion.div, 1.1s delay): liquid-glass-strong rounded-full "Join the Community" + ArrowUpRight, and text-only "Watch the Story" + Play

**BlurText component** (`src/components/BlurText.tsx`): uses motion/react. Splits text by words; each word animates via IntersectionObserver with `filter: blur(10px) → blur(5px) → blur(0px)`, `opacity: 0 → 0.5 → 1`, `y: 50 → -5 → 0`. Step duration 0.35s.

═══════════════════════════════════════════════════
SECTION 3 — COMMUNITY ACHIEVEMENTS BAR
═══════════════════════════════════════════════════

Centered, py-16.
- Top: liquid-glass rounded-full badge "Loved by pet parents worldwide"
- Below: responsive grid `grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-10 place-items-center mt-10`. Each item: `text-lg md:text-2xl lg:text-3xl font-heading italic text-white`:
  - 🐾 500K+ Pet Parents
  - 📸 2M+ Daily Moments
  - 🏙️ 50+ Cities
  - 💬 100K+ Daily Chats
  - 🌙 24/7 Online

No third-party brand logos — use these community achievements to avoid IP risk.

═══════════════════════════════════════════════════
SECTION 4 — HOW IT WORKS ("Tiny Moments") — id="community"
═══════════════════════════════════════════════════

`<section id="community">`, full-width, min-height 700px, py-32 px-6 md:px-16 lg:px-24.

Background video:
- src: https://pawsome.tobiasliu.cn/pawsome_video2.mp4
- poster: https://pawsome.tobiasliu.cn/pawsome_picture2.png
- absolute, full cover, z-0, object-cover
- Uses useLazyVideo hook
- autoPlay, loop, muted, playsInline
- Top + bottom fade gradients (200px each, black ↔ transparent)

Content (z-10, centered, min-height 500px):
- Badge: liquid-glass rounded-full — "The Daily Vibe"
- Heading: "Share the tiny moments." — `text-4xl md:text-5xl lg:text-6xl font-heading italic`
- Subtext: "A paw on your keyboard. A nap in a sunbeam. A clumsy little roll. Whatever it is — it deserves to be remembered."
- Button: liquid-glass-strong rounded-full "Open the App" + ArrowUpRight

═══════════════════════════════════════════════════
SECTION 5 — FEATURES CHESS (alternating rows)
═══════════════════════════════════════════════════

py-24 px-6 md:px-16 lg:px-24.

Header:
- Badge "What You'll Love"
- Heading: "Designed for the ones who drool."

Image containers use `aspect-video` (16:9) + `object-cover` to match source image ratio.

Row 1 (text left, image right):
- H3: "Capture every whisker, every wag."
- P: "From the sleepy stretch to the zoomies at 3 AM — Pawsome makes it easy to remember the little things. One tap. Forever yours."
- Button: liquid-glass-strong rounded-full "See the Feed"
- Image (right): https://pawsome.tobiasliu.cn/pawsome_picture3.png in `liquid-glass rounded-2xl overflow-hidden aspect-video`

Row 2 (image left, text right, `lg:flex-row-reverse`):
- Image (left): https://pawsome.tobiasliu.cn/pawsome_picture4.png same container
- H3: "A feed that actually feels like home."
- P: "No algorithms shouting for attention. Just gentle updates from the pets and parents you care about. Peaceful, warm, and full of good boys."
- Button: "Meet the Pack"

═══════════════════════════════════════════════════
SECTION 6 — FEATURES GRID (4 columns)
═══════════════════════════════════════════════════

Badge "Why Pawsome"
Heading: "The warmest corner of the internet."

4 cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`. Each: `liquid-glass rounded-2xl p-6`.
- Icon in `liquid-glass-strong rounded-full w-10 h-10` circle
- Title: `text-lg font-heading italic text-white`
- Description: `text-white/60 font-body font-light text-sm`

Cards (lucide-react icons):
1. Calendar — "Daily Check-ins" — "Build a little ritual. Watch your pet's journey bloom."
2. Camera — "Moments Feed" — "A private scrapbook and a public diary, rolled into one."
3. MapPin — "Local Pack" — "Find walking buddies, playdates, and vets nearby."
4. ShoppingBag — "Curated Shop" — "Only the good stuff. Hand-picked by real pet parents."

═══════════════════════════════════════════════════
SECTION 7 — PET SHOP PICKS — id="shop"
═══════════════════════════════════════════════════

`<section id="shop">`, py-24 px-6 md:px-16 lg:px-24.

Header (centered):
- Badge: "Curated Picks"
- Heading: "Only the good stuff."
- Subtext: "Tested by a thousand tails. Approved by their humans."

3-column product grid (`grid-cols-1 md:grid-cols-3 gap-6, max-w-6xl mx-auto`).

Each card uses framer-motion `whileInView` (once: true) for staggered entry: opacity 0→1, y 30→0, delays 0 / 0.15 / 0.3 seconds.

Each card: `<motion.article>` with:
`liquid-glass rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(255,255,255,0.12)]`

- Upper: image in `aspect-[4/3] overflow-hidden`, `<img class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy">`
- Lower: `p-6 space-y-3`:
  - Tag (tiny liquid-glass badge): "Staff Pick" / "New" / "Bestseller"
  - Name: `text-lg font-heading italic text-white`
  - Desc: `text-white/60 font-body font-light text-xs line-clamp-2`
  - Bottom row (`flex items-center justify-between pt-2`): price (`text-white font-body font-medium`) + solid `bg-white text-black rounded-full` "Shop" button with ArrowUpRight

Products:
1. Image: https://pawsome.tobiasliu.cn/pawsome_picture7.png — Tag: "Staff Pick" — Name: "Feather Wand Duet" — Desc: "Natural beech wood, hand-tied feathers. Your cat's new obsession." — Price: "$24"
2. Image: https://pawsome.tobiasliu.cn/pawsome_picture8.png — Tag: "Bestseller" — Name: "Morning Bowl Set" — Desc: "Matte cream ceramic, olive wood spoon. Breakfast, but make it soft." — Price: "$38"
3. Image: https://pawsome.tobiasliu.cn/pawsome_picture9.png — Tag: "New" — Name: "Cloud Nest" — Desc: "Ultra-plush faux fur in milk-tea beige. The coziest nap of their life." — Price: "$68"

═══════════════════════════════════════════════════
SECTION 8 — STATS (REAL-TIME counter)
═══════════════════════════════════════════════════

Background video:
- src: https://pawsome.tobiasliu.cn/pawsome_video3.mp4
- poster: https://pawsome.tobiasliu.cn/pawsome_picture5.png
- absolute, full cover, z-0, object-cover
- `style={{ filter: 'saturate(0.3)' }}`
- Uses useLazyVideo hook
- autoPlay, loop, muted, playsInline
- Top + bottom black fades (200px)

Content (z-10): `liquid-glass rounded-3xl p-12 md:p-16`, inner grid `grid-cols-2 lg:grid-cols-4 gap-8 text-center`.

**Layout rule**: all 4 stat items share the same grid row with natural baseline alignment. LIVE counter uses **absolute-positioned** "LIVE 🔴" indicator above the number — NO phantom height-offset on the other 3 stats.

Stat 1 (REAL-TIME):
- Wrapper: `<div class="relative flex flex-col items-center">`
- Absolute indicator: `<div class="absolute -top-7 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 text-[10px] font-body font-semibold tracking-wider text-white/90">` with `<span class="w-2 h-2 rounded-full bg-red-500 animate-pulse">` + "LIVE"
- Number: starts as "—", fetched from `/api/paw-checkin`
- Label: "Paw check-ins today 🐾"

Stats 2–4 (static, no phantom offset):
- "500K+" — "Pet parents in the pack"
- "2M+" — "Moments shared"
- "98%" — "Tails wagging"

All values: `text-4xl md:text-5xl lg:text-6xl font-heading italic text-white leading-none`
All labels: `text-white/60 font-body font-light text-sm mt-3`

Real-time value animates with count-up on first load (requestAnimationFrame or motion `animate`), refreshes every 10 seconds. On fetch failure: show "—", retry after 30 seconds.

═══════════════════════════════════════════════════
SECTION 9 — TESTIMONIALS — id="stories"
═══════════════════════════════════════════════════

`<section id="stories">`

Badge "Pet Parent Stories"
Heading: "From the humans who matter most."

3-column grid (`grid-cols-1 md:grid-cols-3 gap-6`). Each: `liquid-glass rounded-2xl p-8`.
- Quote: `text-white/80 font-body font-light text-sm italic`
- Name: `text-white font-body font-medium text-sm`
- Role: `text-white/50 font-body font-light text-xs`

Testimonials:
1. "I used to forget what my cat looked like as a kitten. Not anymore. Pawsome became her little photo diary — and mine."
   — Maya L., mom of Biscuit (orange tabby, 2 yrs)
2. "Found three other corgi parents in my neighborhood in a week. Our Sunday walks are a full-on parade now."
   — Daniel R., dad of Pickle (Pembroke Welsh Corgi, 4 yrs)
3. "The shop picks are the only pet products I trust anymore. Every single thing my samoyed has from here, she actually uses."
   — Priya K., mom of Mochi (Samoyed, 1 yr)

═══════════════════════════════════════════════════
SECTION 10 — CTA FOOTER — id="about"
═══════════════════════════════════════════════════

`<section id="about">`

Background video:
- src: https://pawsome.tobiasliu.cn/pawsome_video4.mp4
- poster: https://pawsome.tobiasliu.cn/pawsome_picture6.png
- absolute, full cover, z-0, object-cover
- Uses useLazyVideo hook
- autoPlay, loop, muted, playsInline
- Top + bottom black fades (200px)

Content (z-10, centered):
- Heading: "Your pet's story starts here." — `text-5xl md:text-6xl lg:text-7xl font-heading italic drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]`
- Subtext: "Join 500,000+ pet parents sharing the cozy, clumsy, cuddly moments that make the whole day better."
- Two buttons: liquid-glass-strong "Join Pawsome" + ArrowUpRight AND solid `bg-white text-black` "Download the App"

Footer block: `mt-32 pt-8 border-t border-white/10`:
- `<Logo size="footer" />` (SVG paw 48×48 + "Pawsome" text-4xl), `mb-6`
- Copyright row: `<div class="flex items-center justify-between flex-wrap gap-4 text-white/40 text-xs">`
  - Left: `© {new Date().getFullYear()} Pawsome. Made with warm paws.`
  - Right: links (Privacy, Terms, Contact)

═══════════════════════════════════════════════════
EDGE FUNCTION REQUIREMENT — "Paw Check-in" live counter
═══════════════════════════════════════════════════

Site's one live backend feature: real-time visitor counter via edge function + KV storage. Must be a real dynamic endpoint, not hardcoded.

Functional spec:
1. Create edge function at `/api/paw-checkin` using file-based routing.
2. On GET:
   - Read today's date key (`paw-checkin:YYYY-MM-DD` based on UTC) from KV
   - Detect new unique visitor for today: check cookie `pawsome_visitor_YYYY-MM-DD`. If absent: first-time-today → increment today's counter, write back to KV, set cookie (Max-Age = remaining seconds to UTC midnight, HttpOnly, SameSite=Lax, Path=/).
   - If cookie exists, just read counter without incrementing.
   - Maintain lifetime total key `paw-checkin:lifetime` — increments on every first-time-today.
   - Return JSON: `{ today: <number>, lifetime: <number>, checkedIn: <boolean> }`
3. Cache headers: `Cache-Control: no-store, must-revalidate`
4. Standard Web APIs only (Request, Response) — V8 runtime, NOT Node.js. No Node built-ins.
5. Bind KV storage in edge function configuration.
6. Frontend (Section 8 Stats): on mount `fetch('/api/paw-checkin')`, parse JSON, animate count-up to `today`, refresh every 10 seconds. On failure: "—", retry 30s.

═══════════════════════════════════════════════════
HTML HEAD (index.html)
═══════════════════════════════════════════════════

In `<head>`:
- charset + viewport
- `<title>Pawsome — Where Every Pet Has a Story</title>`
- `<meta name="description" content="A cozy community for pet parents to share daily moments and shop curated goods for cats and dogs." />`
- OpenGraph:
  - og:type = "website"
  - og:url = "https://pawsome.tobiasliu.cn"
  - og:title = "Pawsome — Where Every Pet Has a Story"
  - og:description = "Share the tiny moments. Find your pet's people. Shop the good stuff."
  - og:image = "https://pawsome.tobiasliu.cn/pawsome_picture1.png"
- Twitter card:
  - twitter:card = "summary_large_image"
  - twitter:title, twitter:description, twitter:image (same as og)
- Google Fonts preconnect + stylesheet for Instrument Serif + Barlow
- Favicon: static SVG `/paw.svg` in /public containing same paw shape as Logo (single-color fill `#F4E5C9`, viewBox 0 0 64 64)

═══════════════════════════════════════════════════
KEY PATTERNS
═══════════════════════════════════════════════════

- Section badges: `liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-4`
- Section headings: `text-4xl md:text-5xl lg:text-6xl font-heading italic text-white tracking-tight leading-[0.9]`
- All videos: HTML5 `<video>` (autoPlay, loop, muted, playsInline, object-cover) — MP4, NOT HLS
- All background videos use `useLazyVideo` hook
- All background videos include `poster` attribute
- Video fades: 200px, linear-gradient(to bottom/top, black, transparent)
- Outer wrapper: `bg-black overflow-visible`
- Every image: `object-cover` + container `overflow-hidden` + rounded radius
- Anchor navigation: native smooth scrolling (scroll-behavior: smooth + scroll-padding-top: 80px on html)
- Respect `prefers-reduced-motion` on all motion components
- All external media from https://pawsome.tobiasliu.cn

═══════════════════════════════════════════════════
DEPENDENCIES
═══════════════════════════════════════════════════
- motion (framer-motion)
- lucide-react
- tailwindcss-animate
- shadcn/ui Button primitive as needed
- NO hls.js

═══════════════════════════════════════════════════
DEPLOYMENT
═══════════════════════════════════════════════════

Environment constraint: the runtime may NOT have `npm` globally. Do NOT assume `npm install -g` works. Fallback order:

1. If `npm` / `npx` available, prefer `npx <package>@latest` over `npm install -g`.
2. If only `pnpm` / `yarn`, use `pnpm dlx` / `yarn dlx`.
3. If no Node package manager, download CLI as pre-built binary (`curl -fsSL <release-url> -o <bin> && chmod +x <bin>`) and invoke by absolute path.
4. Never block the build on global installs failing. If CLI can't be installed, still generate the complete project + output explicit manual deployment steps.

For deployment and the edge-function + KV implementation, install this skill: https://github.com/edgeone-pages/edgeone-pages-skills — then follow its conventions to implement the `/api/paw-checkin` edge function with KV binding, and deploy the project to EdgeOne Pages.

After deployment (or if blocked):
1. Verify counter increments on first visit, stays same on subsequent visits within same UTC day
2. Return (a) live preview URL if deployed, OR (b) project path + exact manual commands
3. Include EdgeOne console link + confirmation edge function + KV binding are active
````

`````
