# Start Somewhere — 电影感旅行目录站

> 由 **Tracy** 创作 · WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

<video src="../assets/demos/start-somewhere.mp4" controls poster="../assets/demos/start-somewhere.png" width="100%"></video>

如果你的 Markdown 阅读器无法直接播放视频，可点击下方链接：

- ▶️ [在线播放 / 下载 demo 视频](../assets/demos/start-somewhere.mp4)
- 🖼️ [查看封面截图](../assets/demos/start-somewhere.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Start Somewhere |
| 类型 | 电影感旅行目录站 |
| 技术栈 | React + Vite + Tailwind CSS + Framer Motion + Edge Functions |
| 作者 | Tracy |

## 📝 作品介绍

Start Somewhere 是一个电影感的高端旅行目录网站，采用 React + Tailwind CSS + Framer Motion 构建，通过 EdgeOne Pages 部署，并使用 Edge Function 提供个性化问候。整站采用 100vh 全屏垂直 scroll-snap 布局，纯黑底色配合 5 段沉浸式视频（蓝海开场、印尼 Raja Ampat、法国普罗旺斯、冰岛极光、埃及金字塔），让访客通过视觉与文字的力量，迈出第一步。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

``````
# Start Somewhere — 网站生成 Prompt（Final v3）

> **用途**：把下面代码块中的 Prompt 整段复制，喂给执行型 AI（Claude / Cursor / Codex 等），一次性产出 React 网站 + Edge Function，并部署到 EdgeOne Pages。
>
> **前置条件**：以下 5 段视频已生成并存放在本地 `/Users/tracycxlai/Desktop/video assets/` 目录下：
> - `landing.mp4` — 蓝天白云慢动作海浪（开场 Hero）
> - `indonesia.mp4` — Raja Ampat 群岛 + phinisi 木船
> - `france.mp4` — Provence 薰衣草田 + 石头村庄
> - `iceland.mp4` — Reykjavík 冬夜彩色小镇 + 极光
> - `egypt.mp4` — 吉萨金字塔 + 骆驼商队（白天）

---

## 📋 完整 Prompt（直接复制以下内容）

`````
Build a high-end, cinematic travel catalog website called "Start Somewhere"
with beautiful typography. The site must use a full-screen vertical scroll-snap
layout where every section is 100vh. The site will be deployed to EdgeOne Pages
with a real Edge Function powering a personalized greeting.

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
STEP 1 — TECH STACK & PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• React + Vite + Tailwind CSS + Framer Motion
• Scroll container uses `scroll-snap-type: y mandatory`; every section uses
  `scroll-snap-align: start` and is exactly 100vh
• Typography: Inter (or Helvetica Neue fallback) for UI; keep a clean,
  tracking-tight display treatment for headlines. Use Fraunces (or any
  similar serif) for small italic accents in the country descriptions.
• Color: pure black base (#000) with off-white text (#FAFAF7). Let the videos
  be the color — no bright accents.
• Accessibility: respect `prefers-reduced-motion`; all videos muted +
  autoplay + loop + playsInline; provide poster frames for every video.

Project layout (MUST follow this exact structure for EdgeOne Pages):

    /start-somewhere
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── package.json
    ├── src/
    │   ├── main.jsx
    │   ├── App.jsx
    │   ├── components/
    │   │   ├── Landing.jsx
    │   │   ├── DestinationSection.jsx
    │   │   └── Nav.jsx
    │   └── styles/index.css
    ├── public/
    │   ├── videos/          ← put all 5 mp4 files here (see STEP 2)
    │   └── posters/         ← poster jpgs extracted from each video
    └── functions/           ← EdgeOne Pages Edge Functions live here
        └── api/
            └── greeting.js  ← the Edge Function (see STEP 4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 2 — VIDEO ASSETS (USER-PROVIDED, ALREADY EXIST)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The 5 videos already exist. Do NOT attempt to generate or regenerate them.
Just copy them from the user's local path into `public/videos/`:

    Source (local macOS):
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/landing.mp4
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/indonesia.mp4
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/france.mp4
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/iceland.mp4
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/egypt.mp4

    Destination (project):
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/landing.mp4      ← hero background (blue sky + ocean waves)
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/indonesia.mp4
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/france.mp4
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/iceland.mp4
    https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/egypt.mp4

Each video is 16:9, 720p, ~10s, muted, seamless loop, <10MB.

Also generate a poster frame for each video by extracting frame 00:00:01
with ffmpeg into `public/posters/`, so the site doesn't flash black on load:

    ffmpeg -ss 00:00:01 -i https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/landing.mp4    -frames:v 1 -q:v 3 https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/landing.jpg
    ffmpeg -ss 00:00:01 -i https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/indonesia.mp4  -frames:v 1 -q:v 3 https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/indonesia.jpg
    ffmpeg -ss 00:00:01 -i https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/france.mp4     -frames:v 1 -q:v 3 https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/france.jpg
    ffmpeg -ss 00:00:01 -i https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/iceland.mp4    -frames:v 1 -q:v 3 https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/iceland.jpg
    ffmpeg -ss 00:00:01 -i https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/egypt.mp4      -frames:v 1 -q:v 3 https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/egypt.jpg

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 3 — PAGE STRUCTURE & CONTENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

▎SECTION 1 — LANDING (100vh)

Background video:
  <video src="https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/landing.mp4" poster="https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/landing.jpg"
         autoPlay muted loop playsInline
         className="absolute inset-0 w-full h-full object-cover" />

  The landing video is a bright, blue-sky daytime scene of slow ocean
  waves rolling onto a dark volcanic sand beach. Its composition
  intentionally keeps the left two-thirds of the frame as clean negative
  space (open sky and calm water) so large typography sits on top
  cleanly. Trust the composition — do not crop aggressively.

Overlay:
  A dark gradient overlay for readability:
  `linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.15) 100%)`
  (heavier on the left where the text sits, lighter on the right where
  the wave action is — intentional, to protect the typography without
  muddying the hero imagery).

Layout: heavy typography focus, content left-aligned with a generous
padding-left: clamp(2rem, 6vw, 6rem), padding-block: clamp(4rem, 10vh, 8rem).
Content occupies roughly the left 55% of the viewport; the right 45%
stays open so the wave is visible.

Headline (top block):
  "Pick a destination, start your journey."
  — massive, tracking-tight, white, Inter 600,
    clamp(2.75rem, 6.5vw, 5.5rem), letter-spacing -0.025em,
    leading-[1.02], max-width roughly 14ch so it wraps to 2 lines
    gracefully (e.g. "Pick a destination,\nstart your journey.")

Personalized greeting line (immediately under the headline, small):
  This line is injected at runtime by the Edge Function (see STEP 4).
  Default placeholder while loading: "— Begin anywhere. Start now."
  Once the function responds, it becomes something like:
  "— Begin from {CityOrCountry}. Start now."
  Style: 0.95rem, uppercase tracking-wider (0.15em), opacity 0.8, Inter 400.
  Note: the Edge Function also returns `nearest` destination and `distanceKm`
  in the JSON payload, but we intentionally DO NOT display them here — the
  vibe of this site is "just go, don't overthink". Keep those fields available
  for future use but don't render them.

Interactive numbered destination list (bottom block of the section):
  Rendered as a semantic <ul>. Each row:
    ┌─────────────────────────────────────────────┐
    │  01   Indonesia                          →  │
    │  02   France                                │
    │  03   Iceland                               │
    │  04   Egypt                                 │
    └─────────────────────────────────────────────┘

  • Index number in small serif (Fraunces) 400, 0.9rem, opacity 0.6
  • Destination name in display sans 500, clamp(1.75rem, 3.5vw, 2.75rem)
  • Thin 1px top border between rows, border-white/10
  • Hover interaction (Framer Motion):
      — name shifts right +24px (250ms ease-out)
      — arrow "→" fades in from opacity 0 → 1 on the right
      — row background tints to white/5
  • Click: smooth scroll (behavior: "smooth") to the matching section id
  • Keyboard: each item is focusable; Enter key triggers the same scroll

Entrance animation: headline and greeting fade up 24px, 800ms ease, staggered;
list rows stagger-in 80ms each after headline settles.

▎SECTIONS 2-5 — DESTINATIONS (each 100vh)

Order on the page MUST match the landing list: Indonesia → France → Iceland
→ Egypt.

For each destination, render a <DestinationSection /> with these props:

  {
    id: "indonesia",
    index: "01",
    name: "Indonesia",
    tagline: "A thousand islands scattered like jade on the sea.",
    description: "You simply can't beat the island hopping across Raja Ampat — turquoise lagoons, karst cliffs, and some of the best diving on Earth. Bali's rice terraces and temples are magic too, and the warungs serve the kind of rendang and satay you'll think about for months.",
    meta: {
      capital: "Jakarta",
      season: "Oct – Apr",
      signature: "Raja Ampat by phinisi",
    },
    videoSrc: "https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/indonesia.mp4",
    poster: "https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/indonesia.jpg",
  }

Full dataset (use exactly these values — do not rewrite the descriptions):

  01  Indonesia
      tagline:      "A thousand islands scattered like jade on the sea."
      description:  "You simply can't beat the island hopping across Raja Ampat — turquoise lagoons, karst cliffs, and some of the best diving on Earth. Bali's rice terraces and temples are magic too, and the warungs serve the kind of rendang and satay you'll think about for months."
      capital:      Jakarta   ·  season: Oct – Apr   ·  signature: Raja Ampat by phinisi
      video:        https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/indonesia.mp4

  02  France
      tagline:      "Where every village looks like a memory."
      description:  "Provence in summer is pure cinema — lavender fields at golden hour, hilltop villages, and the Côte d'Azur a short drive away. Paris is always Paris, but honestly, the countryside cheese, wine, and small bistros are what win you over."
      capital:      Paris     ·  season: May – Sept  ·  signature: Provence at golden hour
      video:        https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/france.mp4

  03  Iceland
      tagline:      "A sky that writes in light."
      description:  "You go for the aurora and stay for everything else — glaciers, geothermal lagoons, black-sand beaches, and waterfalls around every bend of the Ring Road. Reykjavík is tiny, warm, and endlessly charming, especially under a winter sky."
      capital:      Reykjavík ·  season: Sept – Mar  ·  signature: Aurora over a sleeping town
      video:        https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/iceland.mp4

  04  Egypt
      tagline:      "Sand, stone, and five thousand years of gold."
      description:  "Standing at the foot of the Pyramids is something photos really can't prepare you for — five thousand years of history, right there. A Nile felucca at sunset, Luxor's temples, and the mezze at a Cairo rooftop café make the whole trip feel unreal."
      capital:      Cairo     ·  season: Oct – Apr   ·  signature: The Pyramids at noon
      video:        https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/somewhere/egypt.mp4

Section visual spec:
  • <video> with autoplay, muted, loop, playsInline, poster={poster},
    className="absolute inset-0 w-full h-full object-cover"
  • Dark gradient overlay on top:
      linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)
  • Centered white text block (text-center, max-w-2xl, mx-auto, flex-col
    with consistent vertical rhythm):
      – Row 1  —  index "0x / 04", small caps, tracking-widest (0.25em),
                  opacity 0.7, Inter 400, 0.8rem
      – Row 2  —  destination name in display sans, Inter 600,
                  clamp(4rem, 9vw, 7rem), leading-none, letter-spacing -0.02em
      – Row 3  —  tagline in Fraunces italic 400 (or Inter italic as fallback),
                  clamp(1.05rem, 1.4vw, 1.25rem), opacity 0.95, max-w-xl
      – Row 4  —  description paragraph in Inter 400,
                  clamp(0.95rem, 1.05vw, 1.05rem), line-height 1.7,
                  opacity 0.85, max-w-[560px] mx-auto, rendered with opening
                  and closing typographic quotes ("…") — do NOT use straight
                  quotes. Keep it to 2-3 lines on desktop.
  • Bottom-center meta strip (absolute positioned, bottom-[clamp(2rem,5vh,4rem)]),
    3 items separated by thin vertical dividers:
        CAPITAL · Jakarta       SEASON · Oct – Apr       SIGNATURE · Raja Ampat by phinisi
      Each label in uppercase tracking-widest opacity 0.5, value in
      normal case opacity 1.0, both small (0.8rem).
  • Framer Motion entrance: whileInView, once: true, amount: 0.5
      – index:       opacity 0→1, duration 0.5
      – name:        opacity 0→1, y: 32→0, duration 0.9, delay 0.1,
                     ease: [0.22, 1, 0.36, 1]
      – tagline:     opacity 0→1, y: 16→0, duration 0.7, delay 0.35
      – description: opacity 0→1, y: 12→0, duration 0.7, delay 0.5
      – meta strip:  opacity 0→1, duration 0.6, delay 0.75

▎TOP NAV (fixed, transparent over content)

• Left: brand mark "Start Somewhere" in small caps tracking-widest (0.2em),
  Inter 500, 0.85rem. Use a thin vertical separator "·" or a space-arranged
  two-word treatment; DO NOT all-caps — use sentence case "Start Somewhere"
  with the letter-spacing doing the visual work.
• Right: anchor links Indonesia · France · Iceland · Egypt, with the
  active one underlined based on IntersectionObserver
• Blur-on-scroll: after 60vh scroll, add backdrop-blur-md bg-black/30
  for legibility

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 4 — EDGEONE PAGES EDGE FUNCTION (REQUIRED)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

You MUST implement a real EdgeOne Pages Edge Function that powers the
personalized greeting line on the landing section. This is not optional.

Why this choice: the greeting uses `request.eo.geo` to read the visitor's
location directly at the edge node handling the request — something that
cannot be done with a static site. It showcases EdgeOne's global edge
network (3,200+ nodes) by returning a per-user personalized message with
near-zero latency.

File: `functions/api/greeting.js`
Route (auto-mapped by EdgeOne Pages file-based routing): `GET /api/greeting`

Behavior:
  1. Read visitor GEO from `request.eo.geo` (country, city, latitude, longitude)
  2. Pick the nearest destination from the 4 countries using great-circle
     distance (Haversine formula) against these coordinates:
         Indonesia (Raja Ampat):  -0.5897,  130.1000
         France    (Provence):    43.9493,    5.0000
         Iceland   (Reykjavík):   64.1466,  -21.9426
         Egypt     (Giza):        29.9792,   31.1342
  3. Return JSON:
         {
           "from":       "Shanghai, CN",
           "nearest":    "Indonesia",
           "distanceKm": 4821,
           "message":    "Begin from Shanghai, CN. Start now."
         }
     Note: `nearest` and `distanceKm` are NOT displayed in the UI right now,
     but we keep them in the payload for future extensions.
  4. Always set CORS headers and `cache-control: public, max-age=60`.

Implementation (exact code, use this as-is):

```js
// functions/api/greeting.js
// Runs on EdgeOne Pages Edge Functions (V8 runtime, Web Standard APIs).
// Docs: https://edgeone.ai/document/162227908259442688

const DESTINATIONS = [
  { name: "Indonesia", lat:  -0.5897, lon: 130.1000 },
  { name: "France",    lat:  43.9493, lon:   5.0000 },
  { name: "Iceland",   lat:  64.1466, lon: -21.9426 },
  { name: "Egypt",     lat:  29.9792, lon:  31.1342 },
];

function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
}

export function onRequestGet({ request }) {
  const geo = (request.eo && request.eo.geo) || {};
  const { countryName, cityName, latitude, longitude } = geo;

  const from = cityName && countryName
    ? `${cityName}, ${countryName}`
    : countryName || "anywhere";

  let nearest = null;
  let distanceKm = null;

  if (typeof latitude === "number" && typeof longitude === "number") {
    let best = Infinity;
    for (const d of DESTINATIONS) {
      const km = haversineKm(latitude, longitude, d.lat, d.lon);
      if (km < best) {
        best = km;
        nearest = d.name;
      }
    }
    distanceKm = best;
  }

  const message = `Begin from ${from}. Start now.`;

  return new Response(
    JSON.stringify({ from, nearest, distanceKm, message }),
    {
      headers: {
        "content-type": "application/json; charset=UTF-8",
        "access-control-allow-origin": "*",
        "cache-control": "public, max-age=60",
      },
    }
  );
}
```

Client consumption (in Landing.jsx):

```jsx
const [greeting, setGreeting] = useState("— Begin anywhere. Start now.");

useEffect(() => {
  fetch("/api/greeting")
    .then((r) => r.json())
    .then((data) => data.message && setGreeting("— " + data.message))
    .catch(() => { /* keep default */ });
}, []);
```

Local development:
  • Run the Vite dev server normally for the React UI
  • Run `edgeone pages dev` in a second terminal to proxy the Edge Function
    at `/api/greeting` (per edgeone-pages-skills documentation)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STEP 5 — BUILD & DEPLOY TO EDGEONE PAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Local dev sanity check:
     npm install
     npm run dev                  # Vite on :5173
     edgeone pages dev            # proxy so /api/greeting resolves

2. Build:
     npm run build                # outputs to dist/

3. Deploy (the edgeone-pages-deploy skill will drive this automatically
   once triggered):
     Deploy this project to EdgeOne Pages

   The skill will:
     • install the `edgeone` CLI if missing
     • prompt browser login (or use API token)
     • detect Vite, build, and publish
     • return a preview URL + Console link

4. After first successful deploy, verify:
     • Open the preview URL, confirm all 5 videos autoplay (landing + 4 destinations)
     • Open <preview-url>/api/greeting directly and confirm JSON response
     • Confirm the landing headline's second line reads "— Begin from ..."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DELIVERABLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. A working React + Vite + Tailwind + Framer Motion project at /start-somewhere
2. All 5 user-provided mp4s placed in public/videos/ (+ poster jpgs extracted to public/posters/)
3. A working Edge Function at functions/api/greeting.js deployed on
   EdgeOne Pages, consumed by the landing page
4. A successful EdgeOne Pages deployment — share the preview URL
5. A short README.md explaining: how to run locally, how to regenerate
   posters if a video is swapped, how to redeploy
`````

---

## ✅ 执行 Checklist

- [ ] 把上面【完整 Prompt】复制给执行型 AI
- [ ] 确认 AI 已执行 `npx skills add edgeone-pages/edgeone-pages-skills`
- [ ] 确认 5 个 mp4 已从 Desktop 复制到 `public/videos/`
- [ ] 确认 5 个 poster jpg 已用 ffmpeg 生成到 `public/posters/`
- [ ] 本地 `npm run dev` + `edgeone pages dev` 双开跑通
- [ ] `/api/greeting` 本地返回 `{from, nearest, distanceKm, message}` JSON
- [ ] Landing 第二行显示 "— Begin from {地点}. Start now."
- [ ] 4 段目的地视频全部自动播放，且 description 段落带印刷体引号正常渲染
- [ ] `edgeone deploy` 部署成功，拿到预览 URL
- [ ] 预览 URL 打开 `<preview-url>/api/greeting` 验证 Edge Function 在生产环境工作

---

*品牌：Start Somewhere · 部署：EdgeOne Pages · 更新日期：2026-04-20*
``````
