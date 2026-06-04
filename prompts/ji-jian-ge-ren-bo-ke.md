# 极简个人博客

> **赛道**：Prompt　**作者**：苏不不不酥 · [GitHub @Senguk520](https://github.com/Senguk520)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![极简个人博客 demo](../assets/demos/ji-jian-ge-ren-bo-ke.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 极简个人博客 |
| 赛道 | Prompt |
| 作者 | 苏不不不酥 |
| GitHub | [@Senguk520](https://github.com/Senguk520) |

## 📝 作品介绍

核心价值 ：这是一个基于 Astro + Svelte + Tailwind CSS 构建的极简个人博客，以"安静、克制、有结构"为设计理念，提供沉浸式的阅读体验。

适用场景 ：适合作为个人技术博客、创作笔记、训练日志的发布平台，支持文章归档、相册展示、项目展示、日记、时间线等多维度内容管理。

亮点功能 ：

- 全局毛玻璃 UI 设计 + 深色/浅色主题切换
- 本地全文搜索（基于 Pagefind + 自定义搜索索引）
- 文章内 Mermaid 图表动态渲染
- 多 Tab 轮播横幅（支持跨标签页同步）
- Giscus 评论系统集成（需要用户自行在github获取密钥后到edgeone配置环境变量）
- 相册 Lightbox 全屏查看
- 文章目录高亮追踪（IntersectionObserver）
- 响应式导航栏 + 移动端适配

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

## WorkBuddy Competition Prompt — Construction-Grade Self-Contained Personal Blog for Senguk

You are building a **brand-new personal blog website from scratch**.

This prompt is intentionally **self-contained** and must be treated as the **only execution source**.

Do **not** assume access to:
- any previous repository
- any hidden project files
- any local `src/...` or `public/...` assets
- any earlier conversation memory outside this prompt
- any prebuilt theme, starter, or blog template that defines the final structure for you

If something is not provided, resolve it according to the fallback and acceptance rules in this prompt instead of asking to inspect an old codebase.

If there is any conflict between:
- visual experimentation and implementation stability → choose **implementation stability**
- decoration and page completeness → choose **page completeness**
- artistic mood and reading usability → choose **reading usability**
- optional enhancements and required pages → choose **required pages**

The result must be suitable for **WorkBuddy competition delivery**, **EdgeOne Pages deployment**, and **stable reproduction by a new CodeBuddy conversation** that only receives some initial images.

## 1. Core Mission

Build a complete, production-quality, multi-page personal blog for **Senguk's blog**.

This website must feel:
- restrained
- premium
- soft and luminous
- airy and editorial
- emotionally calm
- elegant instead of cute
- anime-inspired only in atmosphere, never in literal character focus

This is **not**:
- a landing page
- a one-screen visual demo
- a portfolio-only shell
- a mascot-centered anime site
- a generic SaaS template

It must be a real personal publication system with enough structure for long-term writing, archives, gallery browsing, project documentation, diary fragments, and real reader interaction.

## 2. Fixed Brand Inputs

Use these inputs **exactly**. Do not paraphrase, localize, rename, or reinterpret them.

- Chinese site name: **苏不不不酥的小站**
- English site name: **Senguk's blog**
- Slogan: **A seed of resolve planted in the heart, Endurance becomes a required art.**
- Bio: **心中埋下争气的种子，忍耐便是人生的必修课**
- Home hero title: **Like splitting bamboo**

These must remain fixed in the final result.

## 3. Site Personality and Tone

The emotional identity must communicate:
- restraint
- endurance
- softness
- quiet inner strength
- patience
- emotional maturity
- gentle reflection

The writing tone across the interface should feel:
- calm
- thoughtful
- warm but not childish
- poetic but not pretentious
- refined but not commercial

Avoid copy that feels:
- cute for the sake of cuteness
- startup-like
- over-marketed
- loud or clickbait-driven
- fan-service heavy
- cold and robotic

## 4. Audience and Use Cases

Build the site for readers who enjoy:
- long-form writing
- personal reflection
- calm visual environments
- project and skill documentation
- timeline-based life records
- image-led album browsing
- short diary fragments

Primary use cases:
- browsing recent writing from the homepage
- reading full articles with strong typography, rendered Markdown, and TOC support
- navigating older content through archive and search
- browsing links, albums, projects, skills, and timeline records
- experiencing clearly differentiated desktop and mobile layouts rather than one compressed shared layout
- leaving comments on articles through a real usable comment provider

## 5. Explicit Non-Goals

Do **not** allow the final site to become:
- a character shrine
- a fandom page
- a neon cyberpunk showcase
- a collage-heavy art experiment
- a dashboard-style admin interface
- a visual-only mockup without real page depth

## 6. Required Tech Direction

Use a modern blog-friendly stack that can be deployed, previewed, and verified directly on EdgeOne Pages.

Preferred stack:
- Astro
- Svelte for interactive islands where needed
- Tailwind CSS
- TypeScript
- a soft page-transition system in the spirit of Swup
- a static-friendly local search solution in the spirit of Pagefind
- a real usable comment solution such as Giscus or Twikoo
- markdown rendering and prose styling that produces a true reading page instead of raw source text

Do not overcomplicate the stack. Choose maintainability, readability, EdgeOne compatibility, and static-friendly performance.

## 7. Required Information Architecture and Routes

The final site must contain these routes or direct equivalents with the same content meaning:

1. `/` — Home
2. `/posts/[slug]/` — Article detail page
3. `/archive/` — Archive page
4. `/about/` — About page
5. `/friends/` — Friends / Links page
6. `/albums/` — Albums / Gallery page
7. `/albums/[id]/` — Album detail page
8. `/projects/` — Projects page
9. `/skills/` — Skills page
10. `/timeline/` — Timeline page
11. `/diary/` — Diary / Micro-journal page
12. search capability — preferably overlay/panel, not necessarily a standalone route
13. comment capability on article pages
14. `/404/` or framework-equivalent custom 404 page

Do not shrink this site into only home + posts + about.

## 8. Explicitly Forbidden Modules

Do **not** include any of the following in the target site:
- Live2D mascot
- Pio companion
- anime / bangumi / watchlist page
- music player
- sakura falling effect
- devices page
- share poster generator
- overly cute mascot decoration
- character-centered home hero
- noisy particles or festival effects
- gamified UI distractions

These are **forbidden target features**, not optional toggles.

## 9. Execution Priority

Follow this order strictly:
1. fixed brand inputs
2. forbidden-module exclusion
3. required routes and page completeness
4. global layout system
5. reusable component system
6. page-by-page blueprints
7. search and real comments capability
8. asset mapping and fallback generation
9. motion polish and page-level interaction quality
10. EdgeOne deployment readiness and acceptance checks

## 10. Remote Asset Protocol

The site may be built in a fresh conversation where the user only provides a small number of remote image URLs.

Use user-provided assets first.
Do not assume local path mirrors.
Do not rewrite the asset strategy around `src/...` or `public/...` references.

### Provided Remote URL Asset Pack (use directly when available)

Map the following roles exactly when the user provides this pack:

- `assets.banner.desktop`
  - `https://edgeone.senguk.top/public/PC/1.webp`
  - `https://edgeone.senguk.top/public/PC/2.webp`
  - `https://edgeone.senguk.top/public/PC/3.webp`
  - `https://edgeone.senguk.top/public/PC/4.webp`
  - `https://edgeone.senguk.top/public/PC/5.webp`
  - `https://edgeone.senguk.top/public/PC/6.webp`
- `assets.banner.mobile`
  - `https://edgeone.senguk.top/public/mobile/1.webp`
  - `https://edgeone.senguk.top/public/mobile/2.webp`
  - `https://edgeone.senguk.top/public/mobile/3.webp`
  - `https://edgeone.senguk.top/public/mobile/4.webp`
  - `https://edgeone.senguk.top/public/mobile/5.webp`
  - `https://edgeone.senguk.top/public/mobile/6.webp`
- `assets.avatar`
  - `https://edgeone.senguk.top/public/avatar.webp`
- `assets.favicon`
  - `https://edgeone.senguk.top/public/favicon.ico`
- `assets.hero.home`
  - `https://edgeone.senguk.top/public/home.png`
- `assets.cover.articleDefault`
  - `https://edgeone.senguk.top/ai-fitness.webp`
- `assets.project.defaultPreview`
  - `https://edgeone.senguk.top/AI-Fitness.jpg`

### Asset usage constraints

- Use remote URLs directly first; do not download and rehost as the default workflow.
- The browser favicon, site icon, and related head metadata must use `assets.favicon` exactly when it is provided.
- Keep desktop and mobile banner pools strictly separated.
- The homepage `hero-overlay` must be implemented as a real rotating carousel rather than a single static hero image.
- Desktop hero slides must come from `assets.banner.desktop[]`; mobile hero slides must come from `assets.banner.mobile[]`; do not mix them.
- `assets.hero.home` may be used only as a single-image fallback when the required banner carousel pool is missing or broken.
- Non-home pages should reuse the same homepage image atmosphere as a subtle ambient layer: prefer the same `assets.banner.desktop[]` / `assets.banner.mobile[]` carousel pools used by the homepage, or `assets.hero.home` only as a fallback, as a blurred, low-opacity, gradient-masked page background behind glass surfaces. Do not let non-home pages fall back to a plain gold/black radial-gradient-only background when banner assets exist.
- The homepage carousel and non-home ambient background must share one synchronized banner index and timing model. If the homepage is currently showing slide `N`, navigating to any non-home page must initially show slide `N` from the corresponding desktop/mobile banner pool and continue rotating to later slides instead of resetting to slide `0` or freezing on a static image.
- Implement the shared carousel state with a static-friendly client mechanism such as `localStorage` plus a timestamp and a custom browser event. Store at least `index` and `updatedAt`, derive the current index from elapsed time, and use one shared interval constant so page navigation does not interrupt the carousel rhythm.
- Keep desktop and mobile banner pools strictly separated while sharing only the numeric slide index; never use desktop URLs on mobile or mobile URLs on desktop just to satisfy synchronization.
- Every hero, card, album, project, and prose image must render inside a ratio-controlled wrapper with bounded height, hidden overflow, and intentional cropping rules rather than exposing raw remote dimensions.
- `assets.avatar` must be used in About page identity sections and any author/profile card.
- `assets.cover.articleDefault` may be used as an SEO, Open Graph, article-detail banner, or explicit fallback-cover seed, but homepage/latest-post cards must not blindly show it for every post that lacks a genuinely adapted cover. If a post has no real post-specific cover and no curated fallback pool, hide the media area or use a neutral placeholder treatment instead of displaying a misleading repeated default image.
- `assets.project.defaultPreview` should be used as the default project preview when a project-specific image is missing, ideally as a muted full-card or bounded-media visual with text-safe overlay treatment rather than an awkward isolated raw image block.

## 11. Fallback Asset Generation Rules

If provided images are missing, broken, insufficient, visually inconsistent, or too low quality, generate replacements according to this rule set.

### Required mood
- scenic
- quiet
- breathable
- low saturation
- soft cinematic light
- emotionally restrained
- elegant rather than commercial
- anime-inspired only in atmosphere, never in literal anime characters

### Preferred subjects
- distant mountains
- lakeside light
- cloudy sky after rain
- soft green summer trees
- city edges at dusk
- window light on a desk
- quiet travel scenes
- calm streets with pale sunlight
- still water, bridges, rail lines, wind, empty paths

### Explicitly avoid
- literal anime characters
- mascot illustrations
- idol imagery
- moe-style decoration
- flashy cyberpunk neon scenes
- nightclub aesthetics
- oversexualized figures
- noisy collage composition
- commercial stock-photo energy

### Missing-asset generation priority
1. home hero / homepage banner set
2. article fallback cover set
3. about-page support image
4. project placeholder set
5. archive / search / gallery / diary / 404 empty-state illustrations
6. subtle section-divider atmosphere images

Only generate the categories that are actually missing.

## 12. Global Design System

### 12.1 Core spatial values

Use these values as **direct implementation targets**, not vague inspiration:

- `--page-width`: `90rem`
- `--sidebar-width`: `17.5rem`
- `--banner-height`: `35vh`
- `--banner-height-home`: `65vh`
- `--content-top-offset-no-banner`: `5.5rem`
- `--radius-card`: `1rem`
- `--radius-small`: `0.75rem`
- `--radius-pill`: `999px`
- `--blur-glass`: `8px`
- `--transition-fast`: `150ms`
- `--transition-medium`: `250ms`
- `--space-section-desktop`: `3rem`
- `--space-section-mobile`: `1.5rem`

### 12.2 Breakpoints

Use these exact responsive breakpoints:
- mobile: under `768px`
- tablet: `768px–1279px`
- desktop: `1280px and above`

Responsive hard rules:
- desktop, tablet, and mobile must not be near-identical compressed versions of the same layout
- desktop may use wider hero media, multi-column composition, side panels, and denser metadata presentation
- tablet must simplify column count and supporting panels without collapsing into the exact mobile arrangement
- mobile must re-stack navigation, hero copy, CTA rows, filters, metadata, and card internals into a touch-first single-column reading flow
- if the desktop and mobile screenshots look almost the same except for scale, the implementation fails this prompt

### 12.3 Typewriter timing

If a typewriter subtitle is used, use:
- type speed: `100ms`
- delete speed: `50ms`
- pause time: `2000ms`

### 12.4 Color system direction

Build a refined light-first palette with calm dark-mode support.

Primary palette direction:
- warm beige
- misty off-white
- pale sage green
- soft dusty pink
- low-saturation brown-gold accents
- deep warm neutrals for text

Use a warm hue direction around **60**.

### 12.5 Recommended semantic CSS variables

Define a semantic token system so the final site remains consistent:

```css
:root {
  --page-width: 90rem;
  --sidebar-width: 17.5rem;
  --banner-height: 35vh;
  --banner-height-home: 65vh;
  --content-top-offset-no-banner: 5.5rem;
  --radius-card: 1rem;
  --radius-small: 0.75rem;
  --radius-pill: 999px;
  --blur-glass: 8px;
  --transition-fast: 150ms;
  --transition-medium: 250ms;

  --page-bg: oklch(0.96 0.015 60);
  --surface: rgba(255,255,255,0.74);
  --surface-strong: rgba(255,255,255,0.88);
  --surface-border: rgba(110,95,70,0.12);
  --text-primary: rgba(44,39,32,0.92);
  --text-secondary: rgba(44,39,32,0.68);
  --text-tertiary: rgba(44,39,32,0.48);
  --accent: oklch(0.74 0.08 60);
  --accent-strong: oklch(0.68 0.11 60);
  --line-soft: rgba(110,95,70,0.10);
  --shadow-soft: 0 12px 32px rgba(70,58,39,0.08);
  --shadow-hover: 0 18px 48px rgba(70,58,39,0.12);
}

.dark {
  --page-bg: oklch(0.18 0.015 60);
  --surface: rgba(29,27,24,0.72);
  --surface-strong: rgba(38,35,31,0.88);
  --surface-border: rgba(255,255,255,0.10);
  --text-primary: rgba(255,255,255,0.90);
  --text-secondary: rgba(255,255,255,0.68);
  --text-tertiary: rgba(255,255,255,0.48);
  --accent: oklch(0.76 0.08 60);
  --accent-strong: oklch(0.80 0.10 60);
  --line-soft: rgba(255,255,255,0.10);
  --shadow-soft: 0 12px 32px rgba(0,0,0,0.20);
  --shadow-hover: 0 18px 48px rgba(0,0,0,0.28);
}
```

Do not blindly copy exact project-only variables from a hidden repository. Keep the semantic structure self-contained and implementable.

### 12.6 Global image and media control
- no hero, card, prose, project, album, or diary image may render at raw remote size without a bounded wrapper
- homepage hero media should usually stay near `65vh` on desktop, around `52vh` on tablet, and around `38vh–44vh` on mobile
- card-level media should use explicit ratios such as `4:3` or `16:10`, with `overflow: hidden` and intentional radius inheritance
- default card and hero imagery should use `object-fit: cover`; diagrams, screenshots, or formulas inside article prose may switch to `object-fit: contain` only when preserving full content matters more than filling the box
- article body figures should keep `max-width: 100%` and a controlled maximum height so long vertical images do not dominate the reading flow
- album detail and gallery images must preserve stable spacing and avoid sudden viewport-filling jumps before lightbox interaction
- large media should lazy-load where practical and must preserve layout stability through reserved space or intrinsic sizing metadata
- missing post covers must never produce misleading repeated imagery on the homepage; either use a genuinely curated fallback cover from a small varied pool or render a text-first card/neutral placeholder with stable spacing
- project images must either live in a controlled media box or become a subdued full-card background with a bottom-to-top surface gradient behind text; text must remain readable before any hover interaction
- page-level atmospheric images must be low-contrast support layers, not raw decorative photos competing with content

### 12.7 Theme-safe overlay and gradient hardening
These rules are mandatory because the site relies on remote atmospheric images, glass surfaces, and light/dark theme switching.

- never reuse a light-mode white/beige hero fade unchanged in dark mode; every hero-ending or page-transition gradient must have an explicit `.dark` / `dark:` equivalent that fades into `var(--page-bg)` through warm dark intermediate stops
- the homepage hero bottom fade must transition smoothly from transparent image to the semantic page background: in light mode it may pass through soft warm white/beige, while in dark mode it must pass through low-alpha warm dark neutrals such as `rgba(29,27,24,0.34)` and stronger dark stops before `var(--page-bg)`
- avoid sudden opaque white, grey, or beige bands at the bottom of dark-mode hero media; if a glow/wave layer is used, it must switch to a dark-compatible radial or linear treatment instead of leaving a pale halo
- image-backed cards that place text over media must use layered overlays: one broad radial/elliptical mask for the image field and one bottom-to-top surface-colored gradient behind the text block
- for project cards with full-card background images, the center/subject area should keep lower overlay opacity so the image remains visible, while the outer edges and especially the lower text area must use higher opacity; the transition between the low-opacity center and high-opacity outside must be gradual, not a hard ring
- text, badges, chips, and CTAs must never sit directly on busy image detail; verify both light and dark themes before declaring the card complete
- prefer semantic CSS variables (`--page-bg`, `--surface`, `--surface-strong`, `--text-primary`, `--text-secondary`) inside gradients so future theme tuning does not create mismatched seams
- if a Tailwind arbitrary gradient is used, keep the syntax valid and build-safe; avoid experimental gradient strings that pass visually but break `npm run build`

### 12.8 Regression-proof formula and lightbox hardening
These rules are mandatory because prior implementations drifted into formula overlap, duplicated KaTeX output, low lightbox stacking, oversized image previews, loose frames, and unreadable caption controls.

Article math hardening:
- Display math must render exactly once as a visual formula block, never as both plain formula text and rendered KaTeX HTML.
- KaTeX MathML/accessibility helper markup must not be visually exposed inside `.article-prose`; hide `.katex .katex-mathml` visually or with `display: none` while keeping the visible `.katex-html` rendering intact.
- `.katex-display` must be a stable block-level element with explicit vertical margins, safe horizontal overflow, and enough line-height/min-height so the formula cannot collide with preceding or following paragraphs.
- A display formula container should use the same framed surface language as Mermaid blocks: `max-width: 100%`, `overflow-x: auto`, readable padding, border, radius, and theme-safe surface background.
- The inner visible KaTeX node should be inline-block or equivalent with `min-width: max-content` and safe horizontal scrolling rather than shrinking or wrapping into unreadability.
- Seed at least one display formula in an article and verify it renders once, does not overlap surrounding prose, and remains readable on mobile.

Album lightbox hardening:
- The lightbox overlay must escape page-level stacking contexts. In Svelte, use a body-level portal/action or equivalent DOM strategy that appends the overlay to `document.body`; do not rely only on a larger local `z-index` inside `main`.
- The overlay z-index must be higher than navbar, search overlay, footer, ambient backgrounds, glass cards, and any floating panels; use an intentionally high modal layer such as `z-[9999]` or an equivalent semantic token.
- The backdrop must cover the full viewport with a dark translucent layer and backdrop blur while preserving click-backdrop-to-close and keyboard access.
- The enlarged photo figure must shrink-wrap the displayed image instead of becoming a full-width card. Use `inline-block`, `w-fit`, or equivalent, tight padding around `0.125rem–0.25rem`, `overflow: hidden`, and a border that visually hugs the photo.
- The enlarged image must use `object-contain` with bounded viewport sizes. A good desktop target is around `max-height: 76vh` and `max-width: min(78vw, 58rem)`; mobile may use around `82vh` and `calc(100vw - safe margin)`.
- Do not add a separate large caption panel below the image. Captions and controls should be overlaid inside the figure near the bottom so the outer frame remains tight to the photo.
- The caption band must be a soft bottom gradient, not a hard fixed black rectangle: fade from transparent at the top into darker translucent stops near the bottom, with slight blur and strong text shadow for readability across light/dark themes and bright/busy photos.
- Lightbox caption text must remain white or otherwise high-contrast by default. The close button must have white default text before hover; hover may invert to a light pill with dark text, and keyboard focus must remain visible.
- The lightbox must support click backdrop to close, close button, ESC to close, ArrowLeft/ArrowRight navigation, and lifecycle-safe event listener cleanup.


## 13. Typography System

Typography must feel:
- elegant in English
- gentle in Chinese
- mature
- readable
- editorial

### 13.1 Font direction
- English headings: **Playfair Display** or **Cormorant Garamond**
- Chinese body/UI text: **PingFang SC**, **Noto Serif SC**, or a similarly gentle readable Chinese typeface
- Monospace for code: a clean modern developer-friendly mono font such as **JetBrains Mono** or **IBM Plex Mono**

### 13.2 Font rules
- do not use childish font naming
- do not use the old name **“萝莉体”**
- do not make the typography feel overly cute, decorative, or gimmicky
- preserve strong long-form reading comfort

### 13.3 Recommended scale

Use a stable typography hierarchy similar to this:
- page hero title: `clamp(2.75rem, 6vw, 5.5rem)`
- page H1: `clamp(2rem, 3vw, 3rem)`
- section H2: `clamp(1.5rem, 2vw, 2rem)`
- card title: `1.125rem–1.5rem`
- body text: `1rem`
- small/meta text: `0.875rem`
- micro text: `0.75rem`

### 13.4 Long-form reading rules
- article paragraphs should use comfortable line-height around `1.8`
- article width should avoid overlong lines; aim for approximately `70–76` readable characters per line
- body copy should usually stay near `1rem–1.0625rem` depending on viewport density
- paragraph spacing should usually land around `1.125rem–1.375rem`
- H2 inside article prose should normally have around `3rem` top margin and `1rem` bottom margin
- H3 inside article prose should normally have around `2.25rem` top margin and `0.875rem` bottom margin
- H4 inside article prose should normally have around `1.75rem` top margin and `0.75rem` bottom margin
- ordered and unordered lists should keep a clear left indent around `1.25rem–1.5rem`, with list items separated enough to scan comfortably
- blockquotes should read as reflective editorial callouts, not as generic grey boxes
- code blocks must preserve horizontal overflow safely and keep padding stable across themes
- fenced code blocks must be theme-aware: light mode may preserve a clean `github-light`/white code surface, but dark mode must override Shiki or inline token colors inside the article prose scope so the block background, text, strings, keywords, numbers, and punctuation remain readable on a dark page
- if a syntax highlighter emits inline light-theme styles, dark-mode CSS must use sufficiently specific selectors such as `.dark .article-prose pre.astro-code` and scoped token overrides; do not leave a white or low-contrast code block inside a dark article page
- Mermaid fenced blocks must render as actual diagrams in the final article view rather than remaining visible as raw `flowchart` source code; raw source is acceptable only as an intentional failure fallback after a render error
- article TOC data must come from the actual Markdown render result or a verified heading extraction path; never ship a visible TOC component with an empty headings array while the article contains `H2`/`H3` headings
- tables must never break the reading column; wrap them in an overflow container when needed
- figures, captions, formulas, Mermaid diagrams, and image groups must each have their own spacing rhythm and must never collapse into paragraph styling
- anchor jump behavior for headings should account for sticky navigation offset so deep links do not hide headings

## 14. Reusable Component Standards

Use reusable components or equivalent abstractions so the design system stays consistent.

### 14.1 `AppShell`
Responsibilities:
- apply global page background
- render navbar
- render main content container
- manage sidebar collapse rules
- keep footer spacing stable

Non-home background treatment:
- `AppShell` must provide a shared ambient background system for every page except the homepage hero view
- when banner assets exist, non-home pages should use the same visual family as the homepage: a blurred remote banner/home image layer, a soft light/dark gradient mask, and glass-compatible overlays behind the main content
- this ambient background must not be a fixed first-image `<picture>` forever; it must be a client-enhanced carousel component or equivalent shared state system that reads the homepage carousel index, starts from that same slide after navigation, and keeps rotating on non-home pages
- the shared ambient component should accept `desktop[]`, `mobile[]`, and `fallback` inputs; choose the active pool by breakpoint, share only the numeric index, and use the same interval as the homepage hero carousel
- the carousel state should survive route changes and full page reloads through `localStorage` or an equivalent static-friendly browser store containing `index` and `updatedAt`; when loading a page later, derive the current slide from elapsed time rather than simply replaying slide `0`
- browser-only carousel helpers that call `window.setTimeout` must type the timer handle as `number | undefined` or `ReturnType<typeof window.setTimeout>`, not unqualified `ReturnType<typeof setTimeout>` and not `NodeJS.Timeout`, because mixed DOM/Node TypeScript environments can otherwise infer a Node timer type and mark assignment from `window.setTimeout` as invalid
- pair `window.setTimeout` with `window.clearTimeout`, guard browser APIs with `typeof window !== 'undefined'`, and keep timer cleanup in the returned lifecycle disposer so IDE and build TypeScript checks stay clean
- the homepage must opt out of this shared ambient layer when its own hero carousel is visible, so the hero media is not double-stacked
- avoid plain gold/black radial-gradient-only pages unless all image assets are unavailable
- keep content, footer, and fixed background z-index layers explicit so glass panels remain readable and interactive content stays above the atmosphere

### 14.2 `GlassPanel`
Use for cards, overlays, sidebar panels, and feed helper panels.

Visual standard:
- translucent surface using `--surface` or `--surface-strong`
- `backdrop-filter: blur(var(--blur-glass))`
- `border: 1px solid var(--surface-border)`
- `border-radius: var(--radius-card)`
- soft shadow using `--shadow-soft`
- subtle shadow increase on hover only where hover makes sense

### 14.3 `PrimaryButton`
Use for strongest actions.

CSS rules:
- minimum height `2.75rem`
- horizontal padding `1rem–1.25rem`
- pill or softly rounded shape
- accent-filled or accent-outlined depending on context
- visible hover, active, and keyboard focus states

### 14.4 `SecondaryButton`
Use for quieter actions.

CSS rules:
- lighter visual weight than `PrimaryButton`
- clear border or soft glass fill
- never visually dominate the primary CTA

### 14.5 `TagChip`
Use for tags, categories, tech stack items, and filter chips.

CSS rules:
- compact pill shape
- small typography
- distinct selected, hover, and default states
- do not let large tag sets create visual noise

### 14.6 `MetaRow`
Use for article meta, archive entries, project meta, and feed metadata.

Rules:
- use subdued secondary text color
- use consistent icon spacing
- keep separators subtle
- avoid stacking too much metadata on narrow screens

### 14.7 `SectionHeader`
Use for major page sections.

Structure:
- optional eyebrow / badge
- H2 title
- short supporting description
- optional trailing action link

### 14.8 `EmptyStateCard`
Use for no-result, no-content, missing-data, or unavailable-feature states.

Required elements:
- calm illustration or icon
- clear short explanation
- one recovery action or navigation link
- styling consistent with the rest of the site

### 14.9 `SearchOverlay`
Use for site-wide search.

Rules:
- keyboard accessible
- ESC closes
- input autofocus on open
- result list is navigable and readable
- no-result state is designed, not blank
- mount exactly one global search overlay or equivalent search panel inside the shared app shell/layout used by all routes; do not leave search as a page-local component that only exists on the homepage
- every visible search trigger, including navbar search, homepage `Search notes`, mobile search entry, and `Ctrl/Cmd + K`, must open the same overlay instance or the same shared search controller
- use one clear event pathway for each trigger; do not combine a `data-open-search` delegated click handler with a second component-local `on:click` custom-event dispatch on the same button unless the duplicate path is explicitly prevented
- the overlay must add and remove document/window listeners safely during client lifecycle so repeated navigation or hydration does not create duplicated handlers
- opening must autofocus the input after the DOM is visible, closing must clear transient query/results state, and ESC or backdrop/close-button behavior must not leave an invisible blocking layer
- render result rows defensively when optional fields are missing: title, excerpt, description, destination, and tags need safe fallbacks rather than throwing runtime errors or showing blank links
- mobile overlay/panel z-index must sit above navbar, hero media, ambient backgrounds, and glass layers while preserving a visible close affordance and scrollable result area

### 14.10 `CommentMount`
Use on article pages.

Rules:
- must reserve visual space for a real comment provider and should load a usable discussion area by default
- should show loading, transient error, and disabled-per-post states
- must not treat a long-term “temporarily unavailable” placeholder as an acceptable finished-site outcome
- if Giscus is chosen, implement it as a first-class themed component rather than dropping the default iframe into the article page
- Giscus custom theme CSS must be generated as static public files, usually `public/giscus-theme.css` and `public/giscus-theme-light.css`, and the theme URL passed to Giscus must include a stable cache-busting version query such as `/giscus-theme.css?v=card-YYYYMMDD-N`
- the version query must be updated whenever the Giscus theme CSS changes so a fresh conversation, dev server, browser cache, CDN cache, or Giscus iframe cache cannot keep using an old line-based theme
- `CommentMount` must compute an absolute theme URL from `window.location.origin` on the client; do not pass a relative theme path that may resolve incorrectly inside the iframe
- `CommentMount` must synchronize the Giscus theme after initial script load, after iframe load, after light/dark theme changes, and once more with a short delayed retry so Giscus internal initialization cannot overwrite the custom theme with the default Primer theme
- theme synchronization should use the official `postMessage({ giscus: { setConfig: { theme }}})` pattern against the Giscus iframe and must guard `window`, `document`, and missing iframe states safely
- per-post disabled comments should render an intentional quiet card, while provider-loading and transient-error states should preserve the comment area instead of collapsing layout

Giscus visual rules:
- the finished Giscus area must follow the same warm glass/card language as the article page, not GitHub’s default line-heavy Primer look
- visible hard outlines, white rectangular borders, and one-pixel line frames inside the Giscus iframe are failure states for this design
- Write/Preview tabs must read as filled pill controls or soft cards, not as tabnav line borders
- the textarea/editor, preview pane, markdown hint area, bottom action row, reaction buttons, pagination, reply buttons, and GitHub login button must all be styled as filled card/pill surfaces with soft shadows and enough background contrast
- focus states must remain accessible but should use a warm soft glow/ring; do not use bright white hard borders as the primary focus treatment
- both light and dark Giscus themes must be implemented and verified; do not style only the dark theme while leaving the light theme with default Primer outlines

Giscus/Primer CSS hardening:
- custom Giscus theme CSS must override not only `border`, but also `border-color`, `outline`, `box-shadow` one-pixel pseudo-borders, `--color-primer-shadow-inset`, and Primer border variables such as `--color-border-default`, `--color-border-muted`, `--color-btn-border`, and `--color-btn-primary-border`
- do not search only for `border: 1px`; Giscus/Primer line artifacts may come from `box-shadow: inset 0 0 0 1px`, focus outlines, tabnav borders, CSS variables, or pseudo-elements
- include a low-risk local reset inside each Giscus theme for `*, *::before, *::after` that neutralizes hard border colors and outlines while preserving readable surfaces
- cover real Giscus and Primer selectors including at least `.gsc-comment-box-tabs`, `.tabnav-tab`, `.gsc-comment-box-main`, `.gsc-comment-box-write`, `.gsc-comment-box-textarea`, `.gsc-comment-box-preview`, `.gsc-comment-box-textarea-extras`, `.gsc-comment-box-markdown-hint`, `.form-control`, `.input-contrast`, `.gsc-reactions-button`, `.gsc-social-reaction-summary-item`, `.gsc-comment-reactions button`, `.gsc-comment-reply button`, `.gsc-comment-box-bottom`, `.gsc-comment-box-bottom button`, `.gsc-direct-reaction-button`, `.gsc-pagination-button`, `.btn`, `.Button`, `.Button--secondary`, and `[class*="Button"]`
- use `:where(...)` groups or equivalent maintainable selectors to reduce selector brittleness while keeping `!important` where necessary to beat Primer defaults inside the iframe
- use filled backgrounds, radius, spacing, and shadows to communicate hierarchy after borders are removed; do not replace borders with invisible transparent boxes that make controls look unfinished
- light theme should use warm cream/card fills with deep brown text; dark theme should use warm black/brown cards with ivory text and low-saturation gold accents
- verify the built `dist/giscus-theme*.css` files do not contain hard line artifacts such as `border: 1px`, `border-color: rgba(...)`, `border-color: var(...)`, `--color-btn-border: rgba(...)`, `--color-btn-primary-border: rgba(...)`, `--color-border-default: rgba(...)`, `--color-border-muted: rgba(...)`, or `inset 0 1px`

### 14.11 Design-Spec Hardening Checklist for Five Critical Areas

For the five highest-drift areas below, the prompt must not stop at feature lists. Each entry must be written as a unified design-system spec using exactly these four subsections:
- `Anatomy`
- `Spacing & Sizing`
- `States`
- `Dos & Don'ts`

Every one of those five entries must explicitly define:
- shell size and card/container padding
- media ratio and media fallback treatment
- information order from top to bottom
- title, excerpt, and description line clamps
- badge, tag, and CTA placement
- hover, focus, active, and keyboard states
- missing-image, missing-link, and missing-data behavior
- desktop, tablet, and mobile changes
- aesthetic drift to avoid, not only features to include

Apply this checklist explicitly to:
- homepage post card system
- article prose system
- friend card system
- album card system
- project card system

### 14.12 `PostCard`
Use for homepage feeds, related reading blocks, and archive-like featured lists.

#### Anatomy
1. optional media wrapper when a real post-specific cover or curated fallback exists
2. content body
3. title
4. `MetaRow`
5. excerpt
6. tag row
7. optional trailing reading action

The information order above should remain fixed in standard list mode. If the trailing reading action is omitted, the rest of the card order must remain unchanged.

#### Spacing & Sizing
- default list-mode card should use a calm horizontal layout on desktop, with media width around `11rem–13rem`
- media ratio should default to `4:3`; only carefully justified featured variations may stretch toward `16:10`
- card padding should usually be `1rem` on mobile, around `1.125rem–1.25rem` on tablet, and `1.25rem–1.5rem` on larger screens
- card title should clamp to `2` lines
- excerpt should clamp to `2` lines on mobile and `3` lines on desktop
- metadata must appear above the excerpt and should wrap cleanly on narrow screens
- tags must sit below the excerpt and should not visually compete with the title
- avoid more than `3` visible chips before collapsing the rest into a quieter `+n` summary
- mobile layout may stack vertically; when media exists, the visual order must still read as cover first and text second; when media is hidden, the text body must expand cleanly without a blank cover slot
- the whole card may be clickable, but nested interactive controls must remain accessible and visually distinct

#### States
- hover lift should stay subtle, around `translateY(-2px)` at most, paired with `var(--shadow-hover)`
- focus state must remain clearly visible for keyboard users even if the hover treatment is minimal
- active/clicked feedback should feel crisp and restrained rather than springy or game-like
- if the cover is missing, first determine whether the layout is a homepage/latest-post card or a detail/SEO context
- homepage/latest-post cards must not blindly display `assets.cover.articleDefault` when the post lacks a genuinely adapted cover; repeated mismatched default covers are worse than no media
- acceptable missing-cover treatments for homepage cards are: hide the media area and let the text card breathe, use a neutral glass placeholder, or use a small curated fallback-cover pool where each fallback visually fits the post category
- if the media area is hidden, adjust the card grid/classes so the content body does not leave an empty image column
- article detail pages may still use `assets.cover.articleDefault` as a banner/metadata fallback if the result remains visually intentional
- if tag count is excessive, collapse overflow chips instead of increasing card height unpredictably
- if excerpt text is missing, keep metadata and tag spacing stable instead of leaving an awkward cavity
- on small screens, CTA treatment must simplify rather than forcing crowded inline controls

#### Dos & Don'ts
- do keep the card rhythm calm, editorial, and consistent across a full feed
- do preserve one shared visual language even when a featured first card exists
- do keep metadata quieter than title and excerpt
- don't move tags above the excerpt or into the media corner
- don't let missing covers, missing excerpts, or tag overflow break card height rhythm
- don't use aggressive hover lift, overscaled shadows, or promotional-card styling
- don't turn the card into a badge wall or CTA-heavy marketing tile

### 14.13 `ArticleProse`
Use inside the article body instead of relying on a generic default markdown theme.

#### Anatomy
The prose system should be treated as one structured reading surface composed of:
1. lead paragraph zone (optional, near the top only)
2. standard paragraph flow
3. heading hierarchy (`H2`, `H3`, `H4` inside prose)
4. list blocks
5. blockquote blocks
6. inline code and fenced code blocks
7. tables inside overflow wrappers
8. figures and captions
9. formulas and Mermaid blocks
10. anchor-linked headings with safe scroll offset

`H1` belongs to the article header, not the prose body itself.

#### Spacing & Sizing
- reading width should stay controlled, usually near `46rem–52rem` inside the main article column
- paragraphs should use `var(--text-primary)` and must never become washed out against translucent backgrounds
- lead paragraphs may use slightly larger size or stronger color, but only once near the start of the article
- prose `H2`, `H3`, and `H4` must create hierarchy through spacing, weight, and size rather than color alone
- inline code should use a restrained surface, compact horizontal padding, and a radius based on `var(--radius-small)`
- fenced code blocks should use stronger contrast than surrounding prose, with stable padding around `1rem–1.25rem`
- fenced code blocks must have explicit light and dark theme behavior: light mode may keep the clean white Shiki style, but dark mode must apply a dark warm-neutral block surface and readable token colors scoped to `.article-prose`, overriding inline highlighter styles where necessary
- Mermaid diagrams must be transformed from fenced code blocks into rendered diagram containers, either through a build-time plugin or a client island that scans only the article prose; the final visible page must not show `flowchart LR` as a normal code block when the syntax is valid
- article TOC must be generated from actual rendered headings (`post.render().headings` or equivalent) and must not silently render empty when headings exist
- blockquotes should use a left accent rule or soft panel treatment, with enough internal padding to feel intentional
- lists should preserve readable indentation and item spacing instead of collapsing into paragraph rhythm
- tables should sit inside an overflow wrapper, keep header/background separation clear, and avoid microscopic text
- figure images should keep a stable caption gap, use bounded height, and avoid turning long images into endless vertical walls; captions should use secondary text around `0.875rem`
- formulas and Mermaid diagrams should render inside framed containers that preserve overflow and spacing
- display formulas must have explicit block layout rather than relying on default KaTeX spacing: use top/bottom margins around `1.5rem–2rem`, `clear: both`, readable padding, safe line-height, and horizontal scrolling for long equations
- `.katex-display` must never collapse into adjacent paragraphs; test it between two normal paragraphs and verify there is no overlap, clipping, or doubled visual line
- the visible `.katex-display > .katex` or equivalent rendered math node should stay `inline-block`/content-sized with `min-width: max-content` so the formula scrolls horizontally instead of wrapping into broken fragments
- KaTeX MathML helper markup must not appear visually in the page. If KaTeX emits `.katex-mathml`, hide it inside the article prose scope so readers do not see the same formula twice as plain text plus rendered math
- Mermaid and formula containers may share a visual frame, but formula-specific CSS must still be present; do not assume Mermaid spacing automatically fixes KaTeX spacing
- markdown content must render as semantic readable prose blocks rather than exposing raw Markdown syntax in the finished article view
- on narrow screens, code blocks, tables, formulas, and diagrams must preserve readability through padding reduction and safe horizontal scrolling rather than shrinking text into illegibility
- anchor-linked headings should have enough scroll margin to remain visible below sticky navigation

#### States
- heading anchor focus and active states must stay discoverable without becoming noisy
- if the article begins with a lead paragraph, it should appear only once and should not become a repeated style pattern later in the post
- if a code block or table overflows, the reader should still be able to scroll horizontally without breaking the prose column
- if formulas render through KaTeX, the normal state must show only the final visual formula once; visible MathML/plain duplicate text is a failure state
- if formulas or Mermaid rendering fail, preserve a readable fallback container instead of leaving a collapsed void
- if Mermaid syntax is valid, the normal finished state must be an SVG/diagram-like rendering, not a plain highlighted `mermaid` code block
- if the TOC component is shown while article headings exist, it must receive real heading data and render links; an empty TOC beside a heading-rich article is a failure state
- if an image has no caption, figure spacing should still feel complete and not collapse into paragraph spacing
- if the content is short, prose spacing should still feel intentional rather than stretched by template defaults
- mobile reading should retain hierarchy even when heading size, block padding, or caption spacing is slightly reduced

#### Dos & Don'ts
- do make the article feel authored, readable, and editorial rather than auto-themed
- do let headings, quotes, code, tables, figures, and formulas read as clearly different content types
- do keep the reading column disciplined and comfortable across breakpoints
- don't rely on a generic markdown preset without custom prose styling
- don't let code, tables, or diagrams shatter the article column on mobile
- don't style blockquotes like default browser quotes or flat grey utility boxes
- don't overdecorate prose with loud colors, excessive borders, or gimmicky reading effects

### 14.14 `FriendCard`
Use for curated external links.

#### Anatomy
1. logo or monogram area
2. title row
3. short description
4. tag/category row
5. outbound action row

The visual order above should remain fixed so the card reads like a curated profile entry rather than a generic utility tile.

#### Spacing & Sizing
- logo area should reserve a stable square box around `3rem–3.5rem`
- title should clamp to `2` lines only if truly necessary; prefer a single strong line
- description should clamp to `3` lines
- card body should use flex or grid so the CTA row stays aligned near the bottom edge
- raw long URLs should not dominate the card body; use a quieter domain label if needed
- tags should remain compact and never wrap into a noisy wall
- external-link affordance should be obvious but visually secondary to the title
- mobile layout may compress spacing, but title, description, tags, and CTA must keep the same reading order
- tablet and desktop variants should preserve equal logo scale and card-height rhythm across a row

#### States
- hover feedback should emphasize polish, not button-like aggression
- focus state must remain visible for keyboard navigation on the whole card and on the outbound action itself
- missing logos must fall back to a monogram tile or restrained icon panel without changing card height
- if description is missing, use a compact secondary summary or tighten the card body without leaving a large dead zone
- if the title runs long, clamp it gracefully instead of letting the CTA row shift unpredictably
- if tags are absent, preserve the card rhythm through spacing rather than leaving a broken strip
- if the outbound destination is unavailable, the card should still read as a complete curated item rather than a broken admin record

#### Dos & Don'ts
- do make the card feel curated, warm, and editorial rather than operational
- do keep the title as the primary text signal and the domain label as a quiet secondary cue
- do preserve bottom alignment so the grid feels calm and intentional
- don't let raw URLs dominate the surface
- don't let tag walls, oversized logos, or loud external-link icons hijack the hierarchy
- don't collapse card height when a logo or description is missing
- don't style the card like a dashboard widget, affiliate tile, or browser bookmark dump

### 14.15 `AlbumCard`
Use for the album overview page.

#### Anatomy
1. cover image
2. album title
3. short description or summary
4. metadata row
5. optional tags or count emphasis

The card should read top-to-bottom like an exhibition entry. Optional tags or count emphasis may be omitted, but title and metadata order should remain fixed.

#### Spacing & Sizing
- overview album cards should use a stable cover ratio such as `4:3`
- title should clamp to `2` lines
- summary text should clamp to `2` lines or be omitted entirely if it weakens rhythm
- metadata should prioritize date, location, and photo count in a consistent order
- metadata should usually sit below the cover instead of floating over busy imagery
- image hover zoom must stay subtle, around `scale(1.02)` or less
- card spacing should support a calm gallery rhythm rather than a social-feed density
- mobile layout may reduce summary visibility, but title and metadata hierarchy must remain intact
- overview grids should preserve stable heights rather than forcing irregular visual jumps between neighboring cards

#### States
- if the cover is missing, use a calm placeholder with the same ratio so the grid remains stable
- if summary text is omitted, the title-to-metadata spacing should still feel intentional
- if metadata such as location is missing, remove the field cleanly instead of leaving dangling labels
- if the album title is unusually long, clamp it rather than letting the card height drift unpredictably
- if tags are omitted, the remaining metadata spacing should still feel complete
- hover treatment should stay image-led and quiet rather than turning the card into an interactive commerce tile
- on mobile, the card must simplify gracefully instead of stacking too many metadata fragments under the cover

#### Dos & Don'ts
- do make the card feel like a gallery overview entry rather than a social post
- do keep imagery calm, metadata understated, and card rhythm orderly
- do preserve consistent cover ratio and stable vertical flow across the grid
- don't overlay busy metadata on top of photography by default
- don't simulate masonry in the album overview grid
- don't let long titles or missing fields create random height jumps
- don't overanimate covers or turn the gallery into a noisy visual feed

### 14.16 `AlbumLightbox`
Use for enlarged photo viewing from album detail pages.

#### Anatomy
1. full-viewport overlay mounted outside the page content stacking context
2. dark translucent blurred backdrop
3. centered shrink-wrapped figure
4. object-contained image
5. bottom gradient caption/control overlay inside the figure
6. caption text and close button

The lightbox should feel like a polished photo viewer, not a generic full-width modal card.

#### Spacing & Sizing
- mount the overlay to `document.body` through a portal/action or equivalent so it can sit above `AppShell`, navbar, search, footer, and ambient backgrounds
- use a dedicated top modal layer such as `z-[9999]` or a semantic z-index token reserved for global overlays
- the backdrop should be `fixed inset-0`, dark translucent, blurred, and scroll-safe on short viewports
- the figure should use `inline-block`, `w-fit`, or equivalent shrink-to-fit behavior; it must not use `w-full max-w-5xl` or another class that creates large empty side/bottom panels around portrait or narrow photos
- keep the frame tight: use only a hairline border and tiny padding around `0.125rem–0.25rem`; the black/glass frame should visually hug the image
- the image should be `display: block`, `object-contain`, and bounded to viewport-safe dimensions; desktop should usually stay near `max-height: 76vh` and `max-width: min(78vw, 58rem)`, while mobile may allow around `82vh` with `calc(100vw - safe margin)`
- do not let the image preview fill the entire viewport by default; leave breathing room for backdrop, rounded frame, and controls
- the caption/control area should be absolutely overlaid inside the bottom of the figure instead of adding a separate block that increases the frame height

#### States
- opening uses a soft fade backdrop and a restrained panel transition using opacity plus small translate/scale
- clicking the backdrop closes the lightbox; clicking inside the figure does not close it
- ESC closes; ArrowRight and ArrowLeft navigate photos when multiple photos exist
- event listeners must be added and removed safely during the client lifecycle to avoid duplicated handlers after navigation/hydration
- the bottom caption overlay must use a soft transparent-to-dark gradient with slight blur and text shadow; it must not become a hard fixed dark rectangle
- caption text must remain readable on bright, dark, and busy photos in both light and dark site themes
- the close button must have white default text before hover; on hover it may invert to a light pill with dark text; keyboard focus must be clearly visible
- when captions are missing, use `alt` text as the caption fallback or keep the control overlay visually balanced without an empty-looking text slot

#### Dos & Don'ts
- do use a body-level portal or equivalent global overlay strategy
- do keep the frame tight to the photo and theme-independent
- do keep caption gradients soft, gradual, and image-led
- do preserve accessibility semantics such as `role="dialog"`, `aria-modal="true"`, alt text, keyboard close, and focus-visible controls where possible
- don't rely on increasing z-index inside `main`; that can still sit below the navbar because of parent stacking contexts
- don't use a full-width glass card that leaves a large black or blurred area around the photo
- don't attach a separate large caption bar below the image
- don't use a fixed hard black caption background unless the user explicitly asks for a utilitarian viewer
- don't let the close button start with low-contrast dark text on top of a dark gradient

### 14.17 `ProjectCard`
Use for standard and featured project presentation.

#### Anatomy
1. status/category row
2. project cover or preview area
3. title
4. short description
5. tech stack chips
6. CTA row

`FeaturedProjectCard` should be treated as a layout variant of `ProjectCard`, not as a separate visual language. The information order above should remain recognizable even in featured split layouts.

#### Spacing & Sizing
- standard cards should default to a stable media ratio such as `16:10`, with a compact preview height that fits a calm 2-column desktop grid rather than an oversized showcase tile
- a featured single-project card may replace the separate preview box with a full-card background image, but the image must be subdued through opacity, blur, saturation control, and overlay gradients
- when using a full-card background image, place a bottom-to-top surface-colored gradient behind the text area so title, description, chips, and CTAs remain readable on light and dark themes
- when the project image is used as a full-card background, implement a two-layer text-safe overlay: first a soft radial or elliptical mask whose center/subject region has low opacity and whose outer region gradually reaches higher opacity, then a bottom-to-top gradient that becomes strongest behind the text zone
- the radial mask must not create a visible hard circle; use wide color-stop distances so the circled/subject area and the outside area blend smoothly
- the bottom text area must be more opaque than the image center in both themes, using `var(--surface-strong)` or theme-compatible rgba stops, so project title, description, chips, and buttons remain readable without relying on hover
- title should clamp to `2` lines
- description should clamp to `3` lines
- status badges should be distinct through tone and border treatment, not through neon color or oversized shapes
- tech stack chips should usually show `3–5` items before collapsing additional items
- CTA priority should normally be `Live Demo` first and `GitHub` second when both exist
- featured project cards may use a split layout, but their text rhythm must remain aligned with standard cards
- CTA rows should sit near the bottom of the card body so cards feel aligned inside the grid
- mobile layout should preserve the same content order while simplifying chip density and CTA crowding

#### States
- hover feedback should stay polished and restrained rather than mimicking a promotional product tile
- focus state must remain visible on the card surface and on each CTA for keyboard users
- missing project images must keep the preview area reserved by using `assets.project.defaultPreview` or a similarly calm fallback rather than an empty box
- if no explicit repository link is provided, the GitHub CTA should default to `https://github.com/Senguk520` instead of disappearing
- if one CTA is absent, the remaining CTA should not leave an awkward empty slot or misaligned button row
- if the project has many tech items, collapse the extras rather than letting the chip row dominate the card
- if description text is short or missing, preserve vertical rhythm rather than letting the card collapse into a badge-and-button stub
- featured variants may widen, but they must not abandon the same title, description, chip, and CTA hierarchy

#### Dos & Don'ts
- do keep projects scannable first by title, then by description, stack, and action
- do let featured cards feel highlighted through layout and breathing room, not through a new aesthetic language
- do keep status badges disciplined and informative
- do ensure project images either fill their controlled media area cleanly or become a calm atmospheric card background with a text-safe gradient overlay
- don't let tech chips, badges, or CTAs overpower the project title
- don't use fake dashboard mockups, noisy gradients, or startup-landing-page theatrics as placeholders
- don't leave empty CTA gaps when one link is missing
- don't let a project preview appear as an awkward floating image block detached from the text hierarchy
- don't place text directly on a busy image without a bottom-to-top white/surface-to-transparent gradient or equivalent readability layer
- don't let featured cards break the grid logic or read like unrelated ad banners


## 15. Global Layout Rules

### 15.1 Page shell
Desktop should use a stable three-column grid when sidebars are active:
- left sidebar: `17.5rem`
- main content: flexible center column
- right sidebar: `17.5rem`

If a page does not need the right sidebar, keep the main column visually centered and do not force an empty right rail.

Sticky navigation rules:
- the navbar shell must stay visually centered inside the same page-width system rather than hugging the left edge
- the navigation inner wrapper must use the same centered max-width container with balanced inline padding so the glass bar never appears offset
- primary nav items should feel balanced around the center area, with logo/brand, main links, and utility actions aligned intentionally instead of drifting
- do not include `RSS` or `Atom` as visible navbar items
- mobile navigation may collapse into a drawer or compact sheet, but the trigger area and resulting menu still need centered visual alignment and controlled width

### 15.2 Main content width
- non-full-bleed content must sit inside a centered container
- total max width should align to `90rem`
- use consistent horizontal padding at every breakpoint
- article body, article footer metadata, previous/next navigation, and comments must share one centered reading container or one explicit grid system; do not let a TOC rail make the body and footer navigation appear horizontally offset
- if a right rail is present, use `minmax(0, 1fr)` for the main track and keep footer/continuation sections aligned to the same max-width as the readable content

### 15.2.1 Non-home ambient background
- all non-home pages should inherit a shared ambient background from `AppShell` instead of each page inventing its own gold/black gradient
- this background should use homepage-family imagery when available, softened through blur, low opacity, gradient masks, and glass-compatible overlays
- if the homepage hero carousel has reached slide `N`, navigating to archive, albums, article detail, diary, projects, or any other non-home route must show the same slide index `N` first, using the corresponding active breakpoint image pool, and then continue the same timed rotation
- do not implement non-home ambient backgrounds as `assets.banner.desktop[0]` / `assets.banner.mobile[0]` hardcoded forever when a banner pool exists; this fails the shared-background requirement
- the ambient layer must sit behind content and footer with `pointer-events: none`; it must not reduce text contrast or interfere with sticky navigation
- if image assets are unavailable, fall back to the semantic `--page-bg` and soft radial accents, but document this as a fallback rather than the default visual direction


### 15.3 Banner behavior
- home page hero uses approximately `65vh`
- inner-page banners use approximately `35vh`
- non-banner pages begin content around `5.5rem` below the top
- on smaller screens, inner-page banners may reduce height, but the spacing rhythm must remain intentional

### 15.4 Sidebar behavior
- sidebars support browsing and reading; they must not overpower content
- on tablet, right sidebar may collapse into lower panels or drawer behavior
- on mobile, sidebars must become stacked panels or a drawer, never a cramped mini-column

### 15.5 Layout safety rules
Do not do any of the following:
- overlapping collage layout that hurts reading
- floating decoration that breaks alignment
- random card heights in the same visual row without reason
- excessive negative margins
- text drifting outside wrappers
- unstable mobile navigation
- hero text placed on visually busy image areas without overlay control

## 16. Global Interaction Rules

Motion must feel soft, polished, and calm.

Use:
- subtle fades
- gentle lift on meaningful hover targets
- soft blur transitions
- measured nav state changes on scroll
- quiet content reveal
- lightweight page transitions in the spirit of Swup

Avoid:
- bounce-heavy motion
- noisy particles
- exaggerated parallax
- gamified motion
- excessive autoplay behavior

### 16.1 Required interaction behaviors
- navbar transparency changes with scroll
- homepage hero carousel transitions should feel soft and readable rather than abrupt or static
- search overlay opens and closes predictably
- hover and focus states exist for interactive controls
- projects, albums, and skills interactions should include restrained hover/enter feedback so major pages do not feel motionless
- image galleries and album images support lightbox behavior
- article TOC highlights active headings if TOC exists
- pagination and previous/next navigation are obvious and keyboard accessible


### 16.2 Optional but allowed enhancements
Only after the core site is complete:
- elegant light/dark theme switching
- gentle wave-like hero ending
- tasteful charting in the skills page
- low-key section divider visuals
- lightweight view transitions

## 17. Content and Data Contracts

Define data structures clearly so the new conversation knows what fields to implement.

### 17.1 Post frontmatter contract
Each article should support at least:
- `title`
- `description`
- `published`
- `updated`
- `category`
- `tags`
- `image` (optional)
- `draft`
- `comment` (optional per-post comment toggle)
- `lang` (optional)

Optional but acceptable:
- `series`
- `toc`
- `featured`
- `pinned`

Content seed rule:
- the initial article seed must stay intentionally small: generate only `1–3` fitness-related articles
- do not invent extra posts just to make the homepage, archive, pagination, or search feel busier than the seed actually is

### 17.2 Friends data contract
Each friend/link item should support:
- `id`
- `title`
- `description`
- `siteUrl`
- `imageUrl` or `icon`
- `tags` (optional)
- `category` (optional)

Friends seed rule:
- the initial friends list should stay fixed to this curated set unless the user adds more later:
  - Python official website — `https://www.python.org/`
  - Astro official website — `https://astro.build/`
  - Senguk GitHub — `https://github.com/Senguk520`
  - EdgeOne official website — `https://edgeone.ai/`
- do not fabricate extra friend links, partner sites, or random community links just to make the page denser

### 17.3 Album data contract
Each album should support:
- `id`
- `title`
- `description`
- `cover`
- `date`
- `location` (optional)
- `tags` (optional)
- `photos[]`

Each photo should support:
- `src`
- `alt`
- `width` (optional)
- `height` (optional)
- `caption` (optional)

Album seed rule:
- the initial gallery seed should usually stay to `1` album using these `3` photos only unless the user later expands the dataset:
  - `https://edgeone.senguk.top/daily/life_1.jpg`
  - `https://edgeone.senguk.top/daily/life_2.jpg`
  - `https://edgeone.senguk.top/daily/life_3.jpg`
- do not create a large synthetic gallery just to fill the albums routes

### 17.4 Project data contract
Each project should support:
- `id`
- `title`
- `description`
- `image` (optional)
- `category` (optional)
- `techStack[]`
- `status` (`completed`, `in-progress`, `planned`)
- `featured` (optional)
- `liveDemo` (optional)
- `sourceCode` (optional)
- `startDate` (optional)
- `endDate` (optional)
- `tags[]` (optional)

Project CTA rules:
- `liveDemo` powers the primary visit/demo button when present
- `sourceCode` powers the source/GitHub button; when a project needs a generic source destination, `https://github.com/Senguk520` may be used as the fallback target

Project seed rule:
- the initial project seed should stay centered on one flagship project: `AI智能健身助手`
- its description may be authored by the system, but it should read like one coherent real project rather than a bundle of invented sub-projects
- `https://edgeone.senguk.top/AI-Fitness.jpg` may be used as the project image seed when a dedicated project image is needed

### 17.5 Skill data contract
Each skill should support:
- `id`
- `name`
- `description`
- `icon`
- `category` (optional)
- `level` (`beginner`, `intermediate`, `advanced`, `expert`)
- `experience` (`years`, `months`)
- `color` (optional)
- `certifications[]` (optional)
- `officialUrl`

Skill CTA rules:
- each real skill/tool card should expose an official-site CTA using `officialUrl`
- the CTA should point to the product homepage, docs, or canonical official page rather than a random article mirror

Skill seed rule:
- the initial skill dataset should stay intentionally small, usually `2–3` skills only
- do not inflate the page with long certification walls, giant tool matrices, or extra filler skills

### 17.6 Timeline data contract
Each timeline item should support:
- `id`
- `title`
- `description`
- `type` (`education`, `work`, `project`, `achievement`)
- `startDate`
- `endDate`
- `location` (optional)
- `organization`
- `position` (optional)
- `skills[]` (optional)
- `links[]` (optional)
- `icon` (optional)
- `color` (optional)
- `featured` (optional)

Timeline seed rule:
- the initial timeline should stay to a very small, plausible segment, usually `1–3` items only
- it may reference a GitHub release, a project milestone, or a short internship period, but do not backfill a full fictional life history

### 17.7 Diary data contract
Each diary entry should support:
- `id`
- `content`
- `date`
- `images[]` (optional)
- `location` (optional)
- `mood` (optional)
- `tags[]` (optional)

Diary seed rule:
- the initial diary dataset should use a few simulated entries only, usually around `2–4`
- keep them as light mock diary fragments rather than turning the page into a long social-feed archive

### 17.8 Seed dataset lock
Use these seed boundaries unless the user explicitly asks for more:
- articles: only `1–3` fitness-related posts
- friends: only the fixed curated list for Python, Astro, Senguk GitHub, and EdgeOne
- projects: one flagship project, `AI智能健身助手`
- albums: one album built from the three provided `life_1/life_2/life_3` images
- skills: only `2–3` skills
- timeline: a small plausible segment, usually `1–3` items
- diary: a few simulated entries only
- do not invent filler content purely to make sparse pages look busy


## 18. Page Blueprint Template

For every required page, implement it using this internal logic:
1. route and purpose
2. section order
3. layout and responsive behavior
4. reusable components involved
5. CSS / visual rules
6. states and fallbacks
7. data fields needed
8. acceptance criteria

Do not stop at “the page should include X.” Implement each page according to the following detailed blueprints.

## 19. Page Blueprint — Home (`/`)

### 19.1 Purpose
The homepage is the emotional entry point and the primary browsing surface for new visitors.

### 19.2 Section order
Use this order:
1. semi-transparent navbar
2. atmospheric hero media
3. hero text layer
4. one clear hero search shortcut (`Search notes`) as the primary hero action
5. latest posts section header
6. latest post stream
7. optional compact overview panel only if it reflects real seed data
8. “view archive” continuation below the post stream, not inside the hero CTA row

### 19.3 Layout and responsive behavior
- Desktop: hero spans full content width; the `hero-overlay` area must run as a rotating carousel using `assets.banner.desktop[]`, with the small post stream centered beneath it.
- Tablet: keep hero large, preserve carousel readability, and keep the post stream compact rather than inventing extra homepage modules.
- Mobile: switch to `assets.banner.mobile[]`, keep the hero atmospheric but shorter if necessary, maintain strong title visibility and safe overlay spacing, and avoid desktop-like multi-column density.
- Home post stream should default to a stable list layout built from the seed article set; with only `1–3` posts, do not force a dense grid or fake pagination.
- Navbar content and hero copy should share the same centered width logic so the top of the page never feels visually left-drifted.

### 19.4 Components
- `Navbar`
- `HomeHero`
- `HeroSubtitleRotator` or `TypewriterSubtitle`
- `SearchEntry`
- `PostList`
- `PostCard`
- optional `SidebarWidgetGroup`
- `Pagination` or archive continuation only when the article count truly requires it

### 19.5 CSS and visual rules
- hero title should use the largest typography scale and a text-safe overlay
- hero media must rotate through multiple slides with restrained transition timing instead of staying static when a banner pool exists
- desktop and mobile hero crops must feel related but not identical; each breakpoint should use its own banner set and overlay spacing
- hero copy must sit inside a content-safe wrapper, never edge-to-edge on mobile
- the hero bottom transition must be theme-specific: light mode may fade through warm translucent beige/white into `var(--page-bg)`, but dark mode must use a separate dark-compatible gradient that fades through warm dark neutrals into `var(--page-bg)` without a pale white/beige band
- any decorative glow, wave, or radial layer at the bottom of the hero must also have a dark-mode counterpart; never leave a light halo over a dark page background
- hero action area should prioritize a single `Search notes` button or search-entry control; do not place a competing `Read archive` / `View archive` button beside or above it in the hero
- archive navigation belongs below the latest-post stream as a quiet continuation link, not as a second hero CTA unless the user explicitly asks for multiple hero CTAs
- the navbar glass shell above the hero must remain centered with a controlled max width and no visible left drift
- homepage feed cards must implement the `PostCard` design-spec entry above and must satisfy the `14.11` checklist rather than improvising a new card pattern
- the homepage post seed should feel curated and small, usually only `1–3` fitness-related posts rather than a long fake publication history
- post cards in list mode should clearly separate cover, title, metadata, excerpt, and tags in that fixed order
- in list mode, the cover area should usually occupy around `35%–40%` of the card width on desktop only when a real post-specific or curated fallback cover is present
- do not force `assets.cover.articleDefault` into homepage cards that lack adapted covers; text-first cards are acceptable and preferable to repeated mismatched imagery
- feed gap should remain stable, usually around `1rem` on mobile and `1.25rem` on desktop
- the first card may be slightly more featured, but it must not create a different visual language from the rest of the list
- metadata must remain quieter than the title and must not push the excerpt below the fold on smaller screens
- tags should stay in the lower text zone, not in the hero corner of the card
- if a wave ending is used, keep it subtle and quiet

### 19.6 States and fallbacks
- if no banner set exists, use a single fallback hero visual
- if only one banner exists in the active breakpoint pool, disable carousel autoplay and keep a stable single-slide hero instead of faking a broken rotator
- if only one subtitle exists, disable delete animation and keep the subtitle static or gently faded
- if there are no posts, show a designed empty state with archive/about navigation
- if there are only `1–3` posts, treat that as the intended curated outcome rather than as a reason to fabricate more content
- if a post lacks a cover, do not force the generic default cover into the homepage feed; use the `PostCard` missing-cover treatment so the card remains stable without misleading imagery
- if tag count is excessive, collapse extra chips rather than letting the card grow chaotically
- if search is unavailable, keep the search entry visible and degrade to a local client-side search or a documented unavailable state
- if archive continuation is needed, render it as a quiet post-section link or card after the feed, not as a hero button competing with `Search notes`

### 19.7 Data fields needed
- hero title
- hero subtitle array
- desktop banner array
- mobile banner array
- latest post collection (`1–3` fitness-related posts in the seed dataset)
- optional homepage summary data only if it comes from real seeded content
- post cover
- post excerpt
- post tags
- post metadata summary

### 19.8 Acceptance criteria
- home hero is clearly branded and readable
- desktop and mobile hero treatments are clearly different beyond simple scaling
- post list is usable on mobile and desktop
- homepage cards read consistently as one system rather than mixed templates
- search entry is discoverable from the top area and is not crowded by a competing `Read archive` hero button
- homepage post cards without adapted covers do not show repeated misleading default images
- the page feels complete even when the article seed is intentionally small
- homepage does not feel crowded or template-generic



## 20. Page Blueprint — Article Detail (`/posts/[slug]/`)

### 20.1 Purpose
Deliver a mature, long-form reading experience with strong typography, metadata clarity, and continuation paths.

### 20.2 Section order
Use this order:
1. inner-page banner or cover zone
2. article title block
3. metadata row
4. article cover inside content only if needed by the design
5. TOC zone or floating/side TOC
6. article body
7. updated/metadata foot area
8. previous/next navigation
9. comments section

### 20.3 Layout and responsive behavior
- Desktop: reading column centered; TOC may appear in a right rail or sticky side region.
- The desktop layout must make the article body, article header, previous/next navigation, and comments feel aligned as one reading system; the TOC rail may sit beside the reading column but must not visually push the prose or footer navigation off-center.
- Use an explicit grid such as `minmax(0, 1fr) + sidebar` and a shared max-width wrapper for continuation sections so the body card and `PrevNextNav` do not have different visual center lines.
- Tablet: TOC may collapse into a toggleable block above content.
- Mobile: TOC must not consume too much vertical space; use a compact expand/collapse pattern.
- Code blocks, tables, formulas, diagrams, and wide media must support overflow safely on narrow screens.

### 20.4 Components
- `ArticleHeader`
- `PostMetadata`
- `TOC`
- `MarkdownRenderer`
- `ArticleProse`
- `CodeBlock`
- `FormulaBlock`
- `MermaidBlock`
- `ImageLightbox`
- `PrevNextNav`
- `CommentMount`

### 20.5 CSS and visual rules
- H1 must be clearly dominant
- the article body must implement the `ArticleProse` design-spec entry above and must satisfy the `14.11` checklist instead of using a default unmodified markdown preset
- metadata row should use secondary text styling and subtle separators
- the main reading column should stay controlled, usually near `46rem–52rem`
- ArticleHeader, metadata, prose card, previous/next navigation, and comment mount should share compatible centered containers; avoid placing `PrevNextNav` in a narrower or differently centered wrapper that creates visible horizontal offset
- when a TOC side rail exists, it should be a secondary track that does not alter the visual center of the reading card; on smaller screens it should collapse above or below content with matching horizontal padding
- lead paragraphs may be slightly stronger, but the effect should happen only once and near the top of the article
- headings inside content need strong vertical rhythm and clear scroll offsets for deep linking
- blockquotes, tables, code blocks, inline code, formulas, Mermaid diagrams, and image captions need distinct styles
- code blocks should use stable internal padding around `1rem–1.25rem`, safe overflow, and a stronger surface than surrounding prose
- blockquotes should use intentional padding and an editorial accent rule rather than looking like a default browser quote
- image captions should sit close enough to the image to feel attached, but clearly separate from paragraph text
- TOC active item should be visibly highlighted without being loud

### 20.6 States and fallbacks
- if no cover exists, do not leave a broken header gap
- if the article is too short for a meaningful TOC, suppress TOC gracefully
- if a table or code sample overflows, preserve readability through horizontal scrolling rather than breaking the layout
- if a comment provider hits a transient request error, preserve the mounted discussion area with retry/context instead of replacing it with a permanent unavailable finish state
- if comments are disabled for this specific post, show an intentional disabled-per-post state rather than pretending the feature does not exist
- if previous or next article is missing on one side, keep layout balanced rather than leaving a broken frame
- if formulas or Mermaid rendering fail, preserve a readable fallback container instead of leaving a collapsed block

### 20.7 Data fields needed
- title
- description
- published
- updated
- category
- tags
- image
- reading time
- word count
- comment toggle
- optional lead paragraph
- optional headings for TOC generation
- rich content blocks including code, table, formula, Mermaid, figure, and quote support

### 20.8 Acceptance criteria
- the article reads comfortably on mobile and desktop
- metadata is complete and not cluttered
- TOC works or is intentionally omitted
- the article body renders as readable prose rather than raw Markdown syntax
- all major prose elements have distinct styling instead of sharing plain paragraph treatment
- article header, prose, previous/next navigation, and comments align as one intentional reading system without visible horizontal drift
- comments are usable by default or intentionally disabled per post
- continuation to more reading is obvious


## 21. Page Blueprint — Archive (`/archive/`)

### 21.1 Purpose
Help readers browse the entire writing history through calm chronological scanning.

### 21.2 Section order
1. page header
2. archive summary or post count
3. optional filter chips only if the article count grows beyond the seed dataset
4. year groups
5. month/day entry rows
6. empty-result or no-post state

### 21.3 Layout and responsive behavior
- Desktop: use a stable vertical grouping layout with clear year separation.
- Tablet: preserve grouping hierarchy while reducing horizontal density.
- Mobile: collapse into a single readable time list without losing year labels.
- With only `1–3` seeded articles, the archive may stay intentionally compact rather than pretending to be a large publication archive.

### 21.4 Components
- `ArchiveHeader`
- optional `ArchiveFilterChips`
- `ArchiveYearGroup`
- `ArchiveRow`
- `EmptyStateCard`

### 21.5 CSS and visual rules
- year headings should feel strong and calm
- archive rows should use low-noise separators
- dates should be easy to scan
- hover styles should be minimal and reading-friendly
- if the archive contains only a small seed set, spacing and typography should still make the page feel deliberate rather than underfilled

### 21.6 States and fallbacks
- if filters return nothing, show a designed empty state rather than blank output
- if the archive contains only one year, keep year grouping visible rather than flattening everything
- if the article seed stays at `1–3` posts, do not fabricate older archive rows, fake months, or filler post history

### 21.7 Data fields needed
- title
- published date
- tags
- category
- url

### 21.8 Acceptance criteria
- scanning the archive is easier than scanning the homepage post stream
- time hierarchy is immediately understandable
- the archive still feels intentional with a tiny seeded article set
- filtering does not break layout when it is actually enabled


## 22. Page Blueprint — About (`/about/`)

### 22.1 Purpose
Present identity, story, belief, links, and emotional tone without feeling like a résumé dump.

### 22.2 Section order
1. identity hero or header card
2. avatar + fixed bio + slogan
3. personal introduction narrative
4. belief / habits / direction sections
5. external links
6. optional supporting imagery

### 22.3 Layout and responsive behavior
- Desktop: avatar + identity info may sit beside the introduction block, but must remain balanced.
- Tablet/mobile: stack identity and story vertically.
- The page should never feel like a corporate team profile.

### 22.4 Components
- `AboutHero`
- `AvatarCard`
- `ProfileFacts`
- `RichTextSection`
- `ExternalLinkList`
- `SupportImageBlock`

### 22.5 CSS and visual rules
- avatar treatment should be soft and intentional
- fixed brand lines should be clearly visible
- body sections need generous spacing and editorial rhythm
- links should feel refined, not like a raw URL dump

### 22.6 States and fallbacks
- if no support image exists, keep the layout complete without a large empty frame
- if external links are few, use a compact layout rather than a sparse grid

### 22.7 Data fields needed
- avatar
- site name
- bio
- slogan
- long-form introduction content
- social/external links

### 22.8 Acceptance criteria
- the page communicates identity clearly
- the page feels personal, mature, and narrative-driven
- fixed brand text appears exactly as defined

## 23. Page Blueprint — Friends / Links (`/friends/`)

### 23.1 Purpose
Provide a curated, elegant browsing system for a very small fixed list of links rather than a raw link dump.

### 23.2 Section order
1. page header
2. short curated-intro text or result summary
3. friend card grid
4. optional search/filter controls only if the user later expands beyond the fixed link seed
5. no-result state

### 23.3 Layout and responsive behavior
- Desktop: `2–4` cards may sit in a calm centered grid depending on available width.
- Tablet: `2` columns.
- Mobile: `1` column.
- With only four fixed links, the page should prefer a clean curated presentation over a heavy directory UI.

### 23.4 Components
- `FriendsHeader`
- optional `FriendsSearch`
- optional `FilterChips`
- `FriendCard`
- `EmptyStateCard`

### 23.5 CSS and visual rules
- the page must implement the `FriendCard` design-spec entry above and must satisfy the `14.11` checklist instead of inventing multiple unrelated link card variants
- friend cards must follow the fixed order of logo/icon, title, description, tags, and action affordance
- cards should preserve a stable body structure so the CTA row aligns near the bottom edge
- descriptions should clamp to `3` lines to prevent inconsistent heights
- the logo/monogram zone should keep a stable square footprint so cards remain visually aligned
- domain or outbound labels should be quieter than the title and must not dominate the card body
- hover styles should be refined and low-noise
- if the page only contains the fixed curated seed, do not force a heavy search/filter shell just for decoration

### 23.6 States and fallbacks
- if a friend has no logo, use a tasteful fallback monogram or icon
- if a friend has no description, use a compact secondary summary rather than leaving a large dead zone
- if search is enabled later and returns no results, show a designed empty state with a reset action
- if tags are absent, the card should still look complete
- if the title is long, clamp it gracefully instead of letting the CTA row shift unpredictably
- do not fabricate extra outbound sites beyond the fixed friends seed just to make the grid fuller

### 23.7 Data fields needed
- title
- description
- siteUrl
- imageUrl or icon
- tags (optional)
- category (optional)
- optional domain label
- optional featured flag
- the initial fixed seed should cover Python, Astro, Senguk GitHub, and EdgeOne only

### 23.8 Acceptance criteria
- visitors can browse the fixed curated links without confusion
- cards are visually consistent and not noisy
- missing logos and missing descriptions do not break card rhythm
- the page does not feel like a utility admin table
- no fabricated friend links were added beyond the fixed seed list

## 24. Page Blueprint — Albums / Gallery (`/albums/`)

### 24.1 Purpose
Offer a calm, exhibition-like overview of a very small photo set.

### 24.2 Section order
1. page header
2. gallery introduction or summary
3. album overview grid or single centered album card
4. empty state if no albums exist

### 24.3 Layout and responsive behavior
- Desktop: if only one seeded album exists, let it sit in a centered single-card or small-grid presentation rather than pretending there are many albums.
- Tablet: `1–2` columns.
- Mobile: `1` column.
- Album cards must not create chaotic height variation.

### 24.4 Components
- `AlbumsHeader`
- `AlbumCard`
- `GalleryMeta`
- `EmptyStateCard`

### 24.5 CSS and visual rules
- the overview page must implement the `AlbumCard` design-spec entry above and must satisfy the `14.11` checklist
- album cards must preserve the fixed top-to-bottom hierarchy of cover, title, summary, metadata, and optional tags/count emphasis
- album covers should use a stable ratio, preferably `4:3`, unless a carefully controlled alternative is justified
- title should clamp to `2` lines
- summary text should clamp to `2` lines or be omitted entirely if it weakens the grid rhythm
- metadata should be understated and readable
- metadata should prioritize date, location, and photo count in a consistent order
- metadata should normally sit below the cover instead of overlaying busy imagery
- cards should feel more like exhibition entries than social tiles
- if only one seeded album exists, the page must still feel complete without synthesizing additional album cards

### 24.6 States and fallbacks
- if an album has no cover, use a calm generated placeholder or atmospheric fallback
- if metadata such as location is missing, remove the field cleanly instead of leaving dangling labels
- if the album title is unusually long, clamp it rather than letting the card height drift unpredictably
- if tags are omitted, the remaining metadata spacing should still feel intentional
- do not create extra gallery albums beyond the fixed small seed just to satisfy the overview page

### 24.7 Data fields needed
- album id
- title
- description
- cover
- date
- location (optional)
- tags (optional)
- photo count
- optional summary text
- the initial seed should normally be one album built from the three provided `life_1/life_2/life_3` images

### 24.8 Acceptance criteria
- album cards are calm and consistent
- title, summary, and metadata follow one stable card rhythm
- browsing feels deliberate and gallery-like
- page remains visually stable across breakpoints
- the gallery works gracefully even when only one seeded album exists


## 25. Page Blueprint — Album Detail (`/albums/[id]/`)

### 25.1 Purpose
Present one small seeded album as a thoughtful photo sequence with lightbox browsing.

### 25.2 Section order
1. album header
2. album metadata
3. photo grid
4. optional caption/meta area
5. navigation back to albums

### 25.3 Layout and responsive behavior
- Desktop: use a clean small-grid composition suited to a `3`-photo seed rather than forcing a dramatic masonry wall.
- Tablet/mobile: reduce complexity; keep the grid orderly and touch-friendly.
- Image tap targets must remain comfortable on touch devices.

### 25.4 Components
- `AlbumHeader`
- `AlbumMeta`
- `PhotoGrid`
- `Lightbox`
- `CaptionBlock`

### 25.5 CSS and visual rules
- image spacing should be breathable
- border radius should match the rest of the site
- album grid images must show a clear selected/hover/focus state when the pointer or keyboard focus moves across them: use a subtle lift, accent border/ring, soft shadow, gradient overlay, and slight image zoom/brightness change scoped to the gallery item only
- do not apply gallery hover styles globally to every `.media-wrap`; use a dedicated class such as `photo-grid-item` so article, diary, project, and card images are not accidentally affected
- captions should not overpower images
- loading behavior should preserve layout stability
- with only three seeded photos, the layout should feel calm and intentional instead of padded into a fake large gallery
- the lightbox overlay should implement the `AlbumLightbox` design-spec entry above and must satisfy the same portal, tight-frame, gradient-caption, and close-button contrast requirements
- the lightbox overlay should visually match the search overlay interaction language: a fixed full-viewport dark translucent backdrop, backdrop blur, fade-in background, and a gently animated centered panel using opacity + translate/scale
- the lightbox must use a high enough z-index to cover navbar, footer, glass cards, ambient backgrounds, and floating panels; the close button must never be hidden behind the footer or bottom page card
- the enlarged image, caption, and `Close` button must belong to one centered shrink-wrapped figure with max-height constraints such as `calc(100vh - safe margin)` and internal overflow handling on small screens
- the figure must not be a full-width modal card; the outer border should hug the actual displayed image with only tiny padding and no large black/glass empty bands
- the image preview should be intentionally bounded rather than viewport-filling by default; use an `object-contain` image with desktop limits around `76vh` and `min(78vw,58rem)` or equivalent
- the caption and `Close` button should sit inside a soft bottom gradient overlay on the image/figure, not in a separate hard panel below the photo
- caption text and the default `Close` button label must be white/high-contrast before hover; hover may invert the button to a light pill with dark text
- preserve click-backdrop-to-close, ESC-to-close, keyboard previous/next behavior, and safe event listener cleanup during component lifecycle

### 25.6 States and fallbacks
- if some photos are missing, the album should continue rendering without broken boxes
- if captions are absent, image spacing and structure should still feel complete
- if a user hovers or focuses a photo grid item, the current image must visibly read as selected; a motionless grid with no hover/focus feedback is incomplete
- if the lightbox is open on a small or short viewport, caption and `Close` must remain reachable through centered layout and safe internal scrolling rather than falling under the footer or a bottom floating card
- do not synthesize extra photos to fake a denser album detail page

### 25.7 Data fields needed
- album title
- description
- date
- location (optional)
- tags (optional)
- photos[] with alt and optional caption
- the initial album detail seed should use the three provided `life_1/life_2/life_3` images

### 25.8 Acceptance criteria
- album images are easy to browse and enlarge
- hovering or keyboard-focusing different photo grid images creates a clear, elegant selected-state effect
- lightbox behavior is accessible and stable
- the lightbox opens with a search-overlay-like blurred backdrop and soft enter animation, keeps the rounded image card/caption/Close composition centered, and never lets `Close` be covered by the footer, navbar, search overlay, or other floating glass panels
- the lightbox overlay is mounted outside the page content stacking context, such as through a body-level portal/action, so navbar and app-shell z-index layers cannot cover it
- the enlarged photo frame is tight to the image, with no large black side band, bottom band, or full-width modal card behavior
- the caption/control treatment uses a soft bottom gradient, remains readable in both light and dark themes, and does not become a fixed hard black bar
- the `Close` button default text is white/high-contrast before hover, hover inversion remains readable, and keyboard focus is visible
- the page feels complete with only the provided three-photo seed
- page does not feel cramped on mobile


## 26. Page Blueprint — Projects (`/projects/`)

### 26.1 Purpose
Show one flagship project with clear status, stack, links, and visual grouping.

### 26.2 Section order
1. page header
2. project summary or intro
3. flagship project block
4. optional supporting notes or implementation highlights
5. empty state

### 26.3 Layout and responsive behavior
- Desktop: the page may present one centered flagship card or split showcase block, but it must still read as a single-project page rather than a portfolio grid.
- Tablet: keep the flagship project compact and readable without adding fake companion cards.
- Mobile: `1` column with clear CTA hierarchy, reduced media height, and compact chip wrapping.

### 26.4 Components
- `ProjectsHeader`
- `FeaturedProjectCard` or `ProjectCard`
- `StatusBadge`
- `TechStackList`
- `EmptyStateCard`

### 26.5 CSS and visual rules
- the page must implement the `ProjectCard` design-spec entry above and must satisfy the `14.11` checklist
- if a featured layout is used, it must be treated as a layout variant of `ProjectCard`, not as a separate visual language
- the flagship project must preserve the fixed order of status/category, media, title, description, tech stack, and CTA
- project cards should feel slightly more compact than oversized portfolio showcase tiles; avoid excessive vertical padding or poster-like media blocks
- project covers should use a stable ratio such as `16:10`; use `4:3` only if the image set truly requires it
- for a one-project page, a full-card muted background image is preferred when it improves cohesion: it must fill the card, stay visually subdued, and include a bottom-to-top white/surface-to-transparent gradient behind the text
- avoid displaying the project image as a detached floating block that competes with or separates from the text hierarchy
- status badges must be distinct but not loud
- title should clamp to `2` lines and description should clamp to `3` lines
- CTA rows should normally contain a primary visit/demo action and a secondary `GitHub`/source action when both are available
- demo and source links must be visually secondary to the project title
- tech stack chips should be visually compact and scannable
- the page must still feel complete if there is only one flagship project: `AI智能健身助手`

### 26.6 States and fallbacks
- if no demo link exists, keep the GitHub/source action as the remaining CTA instead of showing disabled noise
- if no source link exists, default the source CTA to `https://github.com/Senguk520` and keep card alignment intact
- if no project image exists, use `assets.project.defaultPreview` or another restrained placeholder rather than a fake dashboard mockup
- if the project has many tech items, collapse the extras rather than letting the chip row dominate the card
- if only one CTA remains, keep the button row balanced and intentional instead of leaving an empty slot
- do not fabricate additional projects, categories, or filter bars just to make the page feel fuller

### 26.7 Data fields needed
- title (`AI智能健身助手` for the initial seed)
- description
- image
- category
- techStack[]
- status
- liveDemo
- sourceCode
- dates
- tags[]
- featured
- optional short status summary

### 26.8 Acceptance criteria
- the flagship project can be scanned by status and stack quickly
- the page feels complete and intentional with one core project
- project imagery fills a controlled area or a muted full-card background without becoming a detached awkward block
- text remains readable over project imagery because a bottom-to-top surface gradient or equivalent overlay is present
- if a full-card background is used, the overlay must keep the center/subject area lower opacity and the outside/lower text area higher opacity, with a smooth radial-to-linear transition and no hard circular seam
- card hierarchy stays stable even when links or images are missing
- missing links and missing images are handled gracefully


## 27. Page Blueprint — Skills (`/skills/`)

### 27.1 Purpose
Display a very small set of skills with restrained proficiency expression and strong readability.

### 27.2 Section order
1. page header
2. optional short summary line
3. `2–3` skill cards

### 27.3 Layout and responsive behavior
- Desktop: `2–3` cards may sit in a compact grid or calm row layout.
- Tablet: `1–2` columns when possible.
- Mobile: `1` column, with the official-site action still easy to reach without crowding the description.
- Do not build a large dashboard-like skills matrix when the seed contains only a few skills.

### 27.4 Components
- `SkillsHeader`
- optional `SkillCategorySection`
- `SkillCard`
- `LevelBadge`
- optional `ProgressBar`

### 27.5 CSS and visual rules
- charts must remain optional and secondary; with only `2–3` skills, a concise card layout is usually preferable
- level indicators should be calm, not gamified
- progress bars should be compact and not scream for attention
- cards must preserve consistent padding and icon scale
- each skill card should reserve a clear right-side action area for an `Official Site` CTA so the outbound action does not float randomly through the content
- the official-site button should feel secondary but clearly actionable, not hidden in tiny inline text links

### 27.6 States and fallbacks
- if charts are not feasible or feel visually noisy, replace them with concise summary cards
- if the seed contains only `2–3` skills, do not invent highlighted-vs-regular tiers just to create more layout complexity
- if a skill lacks icon or color, use a neutral fallback style
- if certification data is absent, do not leave empty label shells
- if a public-facing skill lacks `officialUrl`, resolve a canonical homepage before calling the page finished rather than silently omitting the official CTA everywhere

### 27.7 Data fields needed
- category (optional)
- name
- description
- level
- experience
- icon
- color
- certifications[]
- officialUrl

### 27.8 Acceptance criteria
- the small skill set is easy to understand
- proficiency display is clear but restrained
- each real skill card exposes a clear official-site action
- the page feels professional, not toy-like
- the page does not invent extra skills beyond the small seeded set


## 28. Page Blueprint — Timeline (`/timeline/`)

### 28.1 Purpose
Show a small, plausible slice of life, study, work, or project milestones in a premium timeline structure.

### 28.2 Section order
1. page header
2. optional short context line
3. timeline item list

### 28.3 Layout and responsive behavior
- Desktop: vertical timeline is preferred for clarity; keep the composition compact when only `1–3` items exist.
- Horizontal timeline is acceptable only if it still reads clearly on mobile and keyboard navigation is not harmed.
- Mobile: timeline must collapse to a single-column readable sequence.

### 28.4 Components
- `TimelineHeader`
- `TimelineList`
- `TimelineItemCard`
- `TypeBadge`

### 28.5 CSS and visual rules
- use calm accent colors by type, but keep the palette cohesive
- the time axis should be visible without dominating the page
- cards should balance date, title, organization, description, and metadata cleanly
- with only a tiny timeline seed, the page should favor restraint over elaborate milestone scaffolding

### 28.6 States and fallbacks
- if there are very few items, accept a sparse but intentional timeline; do not pad the page with invented summary blocks or fake milestones
- if location or links are missing, remove them without collapsing card structure awkwardly

### 28.7 Data fields needed
- type
- title
- description
- startDate
- endDate
- organization
- position
- location (optional)
- skills[] (optional)
- links[] (optional)
- color (optional)
- icon (optional)

### 28.8 Acceptance criteria
- visitors can scan the small timeline segment clearly
- type distinctions are visible but not noisy
- mobile layout remains readable without sideways strain
- no fictional filler milestones were added just to make the page longer

## 29. Page Blueprint — Diary / Micro-journal (`/diary/`)

### 29.1 Purpose
Capture a few short, intimate, diary-like fragments without turning into a social feed clone.

### 29.2 Section order
1. page header
2. optional short intro
3. diary entry list
4. optional closing note

### 29.3 Layout and responsive behavior
- Desktop: single-column reading flow is preferred; images can form a compact internal grid inside entries.
- Tablet/mobile: keep diary entries stacked in a calm timeline or note-card flow.
- Do not mimic a social app feed UI.
- A small simulated seed should still feel complete without stats-heavy chrome.

### 29.4 Components
- `DiaryHeader`
- `DiaryEntryCard`
- optional `DiaryImageGrid`
- `DiaryMeta`

### 29.5 CSS and visual rules
- diary cards should feel softer and more intimate than project or archive cards
- timestamp area should be understated
- image grids should maintain consistent aspect handling
- the overall page should feel like private notes, not a feed algorithm product
- with only a few mock entries, avoid dashboard-like counters or noisy social affordances

### 29.6 States and fallbacks
- if an entry has no image, the text card must still look complete
- if there are no diary entries, show a calm empty-state note
- if relative time is used, keep absolute date available where helpful
- do not generate a long fake diary backlog just to make the route feel fuller

### 29.7 Data fields needed
- content
- date
- images[] (optional)
- location (optional)
- mood (optional)
- tags[] (optional)

### 29.8 Acceptance criteria
- diary cards feel personal and calm
- image handling is clean on small screens
- the page is recognizably diary-like, not social-clone-like
- a few simulated entries are enough; the page does not invent a large fake archive


## 30. Page Blueprint — 404 (`/404/`)

### 30.1 Purpose
Recover gracefully from broken routes while staying on-brand.

### 30.2 Section order
1. quiet illustration or atmospheric image
2. short message
3. back-home action
4. optional secondary navigation suggestions

### 30.3 Layout and responsive behavior
- center-aligned is acceptable if it remains elegant
- maintain good vertical spacing
- do not overdesign or over-joke

### 30.4 Components
- `NotFoundIllustration`
- `NotFoundMessage`
- `PrimaryButton`
- `SecondaryNavLinks`

### 30.5 CSS and visual rules
- should match the same palette and card language as the rest of the site
- message should be comforting rather than harsh

### 30.6 States and fallbacks
- if no illustration exists, use a calm icon or generated atmospheric placeholder

### 30.7 Data fields needed
- title
- message
- home link
- optional secondary suggestions

### 30.8 Acceptance criteria
- users can recover immediately
- the page still feels like part of the same site

## 31. Search and Comments Standards

### 31.1 Search
Search must be a real site-wide capability.

Preferred pattern:
- integrated into the navbar
- desktop expanding input or overlay/panel
- mobile panel or modal
- keyboard accessible
- fast and quiet UX

Required search states:
- idle / closed
- focused / open
- loading
- results found
- no results
- library unavailable fallback

Required search result content:
- title
- matched excerpt
- destination link
- readable highlighting

If a Pagefind-like library is unavailable, build an equivalent local content-search experience rather than removing search entirely.

### 31.1.1 Local Search Implementation Hardening
When implementing a local static search fallback, treat the search index as a production data contract, not as a decorative JSON placeholder.

Required local-search index behavior:
- generate a static client-readable index, such as `public/search-data.json`, during the build or prebuild step when a Pagefind-like index is not used
- include at least these fields for each searchable article entry: `title`, `description`, `href`, `excerpt`, and `tags`; `category`, `published`, or `type` may be added when useful
- support both Unix LF and Windows CRLF Markdown frontmatter boundaries; parsing must not fail when files use `\r\n`
- strip frontmatter, fenced code blocks where appropriate, HTML tags, and Markdown control characters from excerpts so result snippets do not leak raw metadata or source syntax
- normalize `tags` into an array of clean strings whether the source frontmatter stores them as YAML arrays, bracketed strings, comma-separated strings, or quoted values
- provide safe field fallbacks: missing title falls back to slug/file name, missing description falls back to an empty string, missing tags becomes an empty array, and missing href must not create a broken clickable result
- the index must cover the real seeded article set instead of only indexing navbar labels, page titles, or fabricated filler content
- at least one seeded fitness article must be searchable by title keyword, body/excerpt keyword, and tag keyword

Required client search behavior:
- fetch the static search index from a deployment-safe path that works after static build and EdgeOne Pages deployment
- distinguish loading, unavailable-index, empty-query, no-result, and results-found states
- filter defensively by checking optional fields before joining or lowercasing them
- never assume `tags` is already an array at runtime; guard or normalize before spreading or joining it
- result rendering must tolerate missing optional fields without producing empty titles, `undefined` text, or runtime exceptions
- highlighting, if implemented, must escape or safely render matched text rather than injecting untrusted raw HTML
- search links must use site routes that remain valid after static build, trailing slash normalization, and direct deployment refresh

Implementation failure conditions:
- if clicking the navbar or hero search trigger does not open the overlay, search is incomplete
- if the generated index file exists but lacks title/description/href/excerpt/tags for seeded posts, search is incomplete
- if excerpts include raw frontmatter such as `title:` or `tags:`, search is incomplete
- if a missing optional field can crash the overlay while typing, search is incomplete
- if local search works only in the dev server and not from the built static output, search is incomplete.

### 31.2 Comments
Article pages must preserve a real usable comments area by default.

Acceptable providers:
- Twikoo
- Giscus
- another lightweight comment solution

Required comment states:
- available and loaded
- loading
- transient provider/request error with retry-safe fallback
- comments disabled for this specific post

Rules:
- do not ship a finished site whose steady-state comment experience is only a permanent unavailable placeholder
- if the preferred provider cannot be configured, switch to another lightweight real provider instead of deleting the mount
- keep the discussion block visually integrated with the article layout even when it is empty or loading

### 31.2.1 Giscus Implementation and Theme Hardening
If Giscus is selected, implement it as a production-ready comment feature with a custom warm card theme from the beginning.

Required files and structure:
- create a dedicated article comment island/component, such as `src/components/comments/CommentMount.svelte`
- create `public/giscus-theme.css` for dark mode and `public/giscus-theme-light.css` for light mode
- the Giscus script mount must be idempotent: avoid duplicate scripts/iframes after navigation, hydration, or theme switching
- theme selection must be based on the current site theme and must update when the site theme changes
- pass an absolute custom theme URL to Giscus, not a fragile relative path
- append a version query to both theme URLs, for example `?v=card-YYYYMMDD-N`, and bump it whenever the theme CSS changes

Required synchronization behavior:
- send the selected theme URL during initial Giscus script creation
- after the Giscus iframe exists, send `postMessage({ giscus: { setConfig: { theme }}})` to update the iframe theme
- repeat theme synchronization after iframe load and after a short delay, because Giscus can apply its own default theme during initialization
- synchronize again on site theme changes, route/page transitions where applicable, and browser theme changes if the site follows system theme
- guard all browser-only APIs so static build and SSR do not fail

Required no-line card visual outcome:
- the Giscus iframe must visually match the site’s warm glass/card design rather than GitHub’s default Primer line system
- the comment box, Write/Preview tabs, textarea, preview pane, bottom toolbar, reaction controls, reply buttons, pagination, and GitHub login button must look like filled cards or pill buttons
- remove hard line frames from controls; use warm filled surfaces, rounded corners, subtle shadows, and spacing to create hierarchy
- do not leave white rectangular outlines around Write/Preview tabs, the editor, or login buttons in either light or dark mode
- focus-visible states must remain accessible but use soft warm glow/ring treatments instead of bright hard white borders

Required CSS override scope:
- set Primer/Giscus border variables to transparent or card-safe values, including `--color-border-default`, `--color-border-muted`, `--color-btn-border`, `--color-btn-primary-border`, and `--color-primer-shadow-inset`
- override `border`, `border-color`, `outline`, and `box-shadow` pseudo-borders; many visible Giscus lines are caused by shadow or CSS variables rather than literal `border: 1px`
- include local resets for `*, *::before, *::after` inside the Giscus theme files to neutralize inherited border colors and outlines
- target actual Giscus/Primer selectors including `.gsc-comment-box-main`, `.gsc-comment-box-write`, `.gsc-comment-box-tabs`, `.tabnav-tab`, `.form-control`, `.input-contrast`, `.Button`, `.Button--secondary`, `.btn`, and `[class*="Button"]`
- keep both theme files structurally parallel so fixes applied to the dark theme are not forgotten in the light theme

Giscus acceptance tests:
- in browser preview, open an article page and inspect the Giscus iframe theme URL; it must include the current version query
- switch between light and dark modes and confirm the iframe updates without duplicating comment iframes or scripts
- verify the visible Giscus editor area has no hard white line frames around Write/Preview, textarea/editor, bottom toolbar, or GitHub login controls
- search the built `dist/giscus-theme*.css` files and confirm no hard-line artifacts remain: `border: 1px`, `border-color: rgba`, `border-color: var`, `--color-btn-border: rgba`, `--color-btn-primary-border: rgba`, `--color-border-default: rgba`, `--color-border-muted: rgba`, or `inset 0 1px`
- a successful build alone is not enough; the browser-rendered iframe must be visually checked because stale iframe/theme cache can hide CSS changes

### 31.3 Feed exclusion
For this prompt, do not generate human-readable RSS/Atom pages or machine-readable feed files.

Required exclusions:
- do not create `/rss/`, `/atom/`, `rss.xml`, or `atom.xml`
- do not place RSS/Atom links in navbar, footer, or article utilities
- only reintroduce feeds if the user explicitly requests them in a later task


## 32. Markdown and Reading Feature Standards

The site is a serious personal publication.
Support:
- long-form writing
- code blocks
- formulas where useful
- diagrams where useful
- image-rich posts
- archive discoverability
- project and skill documentation
- diary-style fragments

The finished article view must render content through a real Markdown/content renderer rather than exposing source syntax in the final UI.

### 32.1 Body content CSS requirements
- raw Markdown syntax must not appear in the finished article body
- code blocks need padding, scroll safety, title area or language indication when practical
- inline code needs soft contrast, not harsh black pills
- blockquotes need a visible but subtle left accent
- tables need mobile overflow handling
- image captions need muted but readable text
- formulas need overflow safety on mobile
- diagrams need spacing and readable backgrounds

### 32.2 Mermaid, TOC, and code-theme hardening
The article Markdown pipeline must be verified as a complete feature, not a partially styled surface.

Required implementation rules:
- Use a real Markdown/content renderer through Astro content collections or an equivalent static renderer.
- Enable GFM tables, math/formula rendering, heading slugs, heading anchors, and syntax highlighting.
- If seeded Markdown contains a fenced `mermaid` block, implement Mermaid rendering end-to-end. Valid Mermaid source such as `flowchart LR` must become a rendered diagram/SVG-like visual block in the article body.
- It is acceptable to render Mermaid either at build time or through a client island that scans only `[data-article-prose] pre[data-language="mermaid"]`; if using a client island, it must actually be mounted in the article page and must provide a visible fallback only when rendering fails.
- Do not stop at adding `.mermaid` CSS styles. Styling a selector without converting the fenced block into a rendered diagram is incomplete.
- Article TOC must use `post.render().headings` or an equivalent verified heading list. Do not depend on stale `post.rendered?.html` data that may be empty after rendering changes.
- If a TOC rail is visible and the article contains `H2`/`H3` headings, the rail must contain links; an empty TOC beside a heading-rich article is a delivery failure.
- Shiki or any syntax highlighter that emits inline light-theme colors must be paired with dark-theme overrides. Scope overrides to `.dark .article-prose pre.astro-code` or an equivalent prose-only selector so light mode keeps the intended white code surface while dark mode gets a dark warm-neutral surface and readable tokens.
- Dark-mode code tokens must not be low-contrast: keywords, function names, strings, numbers/types, punctuation/base text, and comments should each remain legible against the dark code background.
- Code blocks, Mermaid diagrams, formulas, and tables must all preserve horizontal overflow rather than breaking the reading column on mobile.

Markdown acceptance tests:
- A seeded `python` or `ts` fenced block is syntax-highlighted and horizontally scrollable.
- In light mode, code blocks keep a clean white/light Shiki-style appearance if that is the chosen theme.
- In dark mode, the same code blocks are not white/light blocks; they use dark surfaces and readable token colors.
- A seeded Mermaid `flowchart` renders as a diagram, not a raw highlighted code block.
- If Mermaid rendering fails intentionally in a test, the original source remains visible with an explicit fallback message.
- Article headings generate working anchors and a non-empty TOC when a TOC is displayed.
- A seeded display formula between two normal paragraphs renders once as KaTeX visual math, not as duplicated plain text plus visual math.
- The formula block has stable top/bottom spacing, does not overlap adjacent prose, and scrolls horizontally on narrow screens instead of wrapping or clipping.

## 33. Accessibility Standards

The site must be production-credible.

Required:
- semantic HTML
- keyboard navigable menus and search
- visible focus states
- sufficient color contrast
- meaningful alt text behavior
- accessible lightbox behavior where possible
- accessible comment mount where possible

Do not ship a visually elegant but keyboard-hostile experience.

## 34. SEO and Performance Standards

### 34.1 SEO
Required:
- proper page titles and descriptions
- article metadata
- clear heading hierarchy
- favicon and site-icon metadata
- usable 404 page
- social and canonical metadata where appropriate

### 34.2 Performance
Required:
- homepage should not be overloaded with heavy media layers
- homepage hero carousels should avoid eagerly decoding every slide at once when a lighter strategy is possible
- large imagery should lazy-load when possible
- preserve layout stability
- prioritize fast reading experience on mobile
- do not let decorative animation slow the site noticeably

## 35. Deployment Requirements

The final result must be optimized for direct EdgeOne Pages deployment and public verification.

Required delivery sequence:
1. finish the site implementation inside the repository without adding local-build-only success requirements
2. verify all required routes and page contracts exist
3. verify desktop, tablet, and mobile layouts, including clearly differentiated mobile vs desktop composition
4. verify search behavior, real comments behavior, hero carousel switching, centered navigation, and image-size control
5. verify that no stray `RSS`/`Atom` routes or feed files were generated
6. verify asset loading, missing-asset behavior, and favicon usage
7. deploy to EdgeOne Pages
8. provide the public URL and confirm the key pages work in the deployed environment

Search-specific delivery verification:
- run the search index generation step, if one exists, before the final static build
- inspect the generated search index, not just its existence; seeded article entries must contain non-empty `title`, valid `href`, clean `excerpt`, and normalized `tags`
- verify the built static output includes the search index or Pagefind-equivalent assets needed by the deployed site
- verify the built HTML/JS contains working search triggers and the mounted overlay/panel logic, not only a visual button
- in browser preview or deployed public URL, click navbar search and homepage `Search notes`, type a seeded article title/tag/body keyword, confirm results appear, click a result, confirm navigation works, test no-result copy, and close with ESC
- repeat the search open/type/close path on a mobile viewport to ensure the overlay is not hidden behind navbar, hero, or background layers
- if search passes locally but fails from the static `dist` output or public EdgeOne URL, the delivery is not complete


## 36. Benchmark-Inspired Execution Guardrails

Use high-discipline prompt engineering patterns inspired by strong competition entries:
- write enforceable constraints, not vague creative wishes
- define forbidden outcomes explicitly
- define role-based asset mapping before visual polish
- require fallback behavior for broken or missing media
- prioritize layout stability over experimental composition
- verify delivery through a concrete acceptance checklist

Hard guardrails:
- If any required route or page is missing, the result is not complete.
- If any forbidden module appears, the result is not acceptable.
- If fixed brand inputs change, regenerate until exact.
- If URL assets fail, fill only the missing role category according to priority.
- If a page only lists features without defining structure, layout, states, and acceptance, it is not finished.

## 37. Final Acceptance Checklist

Before declaring success, verify all of the following:

### 37.1 Brand
- fixed brand inputs are exact
- tone remains restrained, mature, and soft-editorial

### 37.2 Pages
- all required routes/pages exist
- home is structurally complete
- article detail is readable and complete
- archive is scannable even with a tiny article seed
- about is narrative and branded
- friends presents the fixed curated links clearly without fabricated extras
- albums and album detail work visually with the small seeded photo set
- album detail lightbox uses a body-level portal/global overlay layer above navbar/search/footer, not a page-local modal trapped under parent stacking contexts
- album lightbox preview is bounded and shrink-wrapped to the actual photo with a tight border/frame, no full-width card, no oversized preview, and no large black/glass empty bands
- album lightbox caption uses a soft bottom gradient overlay, remains readable across bright/dark photos and both site themes, and avoids a hard fixed black rectangle
- album lightbox `Close` button has white/high-contrast default text before hover, readable hover inversion, visible focus, and remains reachable on short/mobile viewports
- projects present one coherent flagship project, `AI智能健身助手`
- skills remain readable and expose official-site actions even with only `2–3` cards
- timeline is clear and stable with a small plausible segment
- diary feels intimate, not social-clone-like, even with only a few simulated entries
- 404 is gentle and branded

### 37.3 Capabilities
- search exists and has fallback behavior
- the homepage hero exposes `Search notes` clearly and does not include a competing `Read archive` hero button unless the user explicitly asks for multiple hero CTAs
- navbar search, homepage search entry, mobile search access, and `Ctrl/Cmd + K` open the same search experience rather than separate disconnected implementations
- search can complete a real end-to-end interaction: open, autofocus input, query a seeded article, show result title/excerpt/link, navigate to the result, show no-result state for an unmatched query, and close with ESC
- generated static search data or Pagefind-equivalent assets are present in the final build and usable from the deployed public URL
- local search indexes do not leak raw frontmatter into excerpts and do not omit required result fields for seeded posts
- comments are usable by default or intentionally disabled per post
- if Giscus is used, both `public/giscus-theme.css` and `public/giscus-theme-light.css` exist, are passed to the iframe as absolute versioned URLs, and are synchronized after iframe load and theme changes
- if Giscus is used, the rendered iframe has no hard white line frames around Write/Preview tabs, textarea/editor, bottom toolbar, reaction controls, pagination, reply controls, or GitHub login buttons in either light or dark mode
- if Giscus is used, built `dist/giscus-theme*.css` contains no hard-line remnants such as `border: 1px`, `border-color: rgba`, `border-color: var`, `--color-btn-border: rgba`, `--color-btn-primary-border: rgba`, `--color-border-default: rgba`, `--color-border-muted: rgba`, or `inset 0 1px`
- article bodies render as readable prose rather than raw Markdown source
- display formulas render exactly once, with KaTeX MathML not visually duplicated, and formula blocks do not overlap surrounding paragraphs
- formula, Mermaid, table, and code overflow remains readable on mobile
- the homepage hero carousel rotates correctly and switches between desktop/mobile banner pools by breakpoint
- shared carousel timer code is TypeScript-clean in a DOM + Node typings environment: `window.setTimeout` handles are not typed as Node `Timeout`, cleanup uses `window.clearTimeout`, and no IDE red diagnostics remain in the carousel helper
- no RSS/Atom pages or feed files are present unless the user explicitly reintroduces them

### 37.4 Design system
- width, banner heights, sidebar width, blur, centered navbar behavior, and breakpoints follow the required values
- typography is elegant in English and gentle in Chinese
- cards, buttons, tags, and panels use a coherent component system
- non-home pages use the shared homepage-family image-gradient/glass ambient background when assets exist, not an unrelated plain gold/black gradient
- non-home page background state is synchronized with the homepage carousel through a shared index/timestamp mechanism and does not reset to the first banner on every route
- project cards keep images bounded or subdued as full-card backgrounds, with a bottom-to-top readability gradient behind text
- article detail header, prose, previous/next navigation, and comments align as one reading system without visible horizontal drift
- motion is present but restrained across homepage, article navigation, projects, and gallery interactions
- light and dark modes both feel calm and usable

### 37.5 Assets
- provided remote URLs are used first when available
- desktop/mobile banners are not mixed carelessly
- favicon uses `assets.favicon` when available
- the fixed album seed uses the provided `life_1/life_2/life_3` image pool unless the user later expands it
- homepage/latest-post cards do not show repeated mismatched `assets.cover.articleDefault` imagery when posts lack adapted covers
- project fallbacks use `assets.project.defaultPreview` when a project image is missing
- fallback generation only fills missing categories
- no forbidden visual direction has slipped in

### 37.6 Quality
- layout is stable across screen sizes
- mobile and desktop feel intentionally different rather than merely scaled versions of each other
- no page feels like a placeholder
- no page is only a list of bare data without design structure
- no hero, card, or prose image breaks the layout through raw size overflow
- the seeded content scale remains intentionally small: `1–3` fitness posts, the fixed four friends links, one flagship project, one small album, `2–3` skills, a tiny timeline segment, and only a few mock diary entries
- no filler content is invented purely to make sparse pages look busier than the real seed dataset
- the overall result feels like a carefully art-directed personal publication
- the site is suitable for EdgeOne Pages deployment and WorkBuddy competition judging



## 38. One-Sentence Operating Summary

Build a self-contained, premium, soft-editorial, multi-page personal blog for Senguk that can be implemented in a fresh CodeBuddy conversation without any repository context, using fixed brand inputs, route-complete page blueprints, concrete layout and CSS standards, role-based remote asset mapping, fallback rules, and final acceptance checks.
````
