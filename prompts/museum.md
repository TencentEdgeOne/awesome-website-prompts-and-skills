# Museum · 个人作品博物馆

> **赛道**：Prompt　**作者**：黄梓庭 · [GitHub @beiyuii](https://github.com/beiyuii)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Museum · 个人作品博物馆 demo](../assets/demos/museum.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Museum · 个人作品博物馆 |
| 赛道 | Prompt |
| 作者 | 黄梓庭 |
| GitHub | [@beiyuii](https://github.com/beiyuii) |

## 📝 作品介绍

Museum · 个人作品博物馆 博物馆逻辑的个人展示站，而非博客。三个展厅（Tech 工程参考室 / Think 私人书房 / Create 项目工坊），每件展品带独立馆藏号与版本号。访客首次进入获得「今晚有效」票根（全局递增），留言簿牛皮纸风格含 honeypot 防 spam 验证。Warm Cinematic 设计语言，Threshold 穿门滚动动效，React 19 + EdgeOne Pages 全栈部署。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

COMPETITION HIGHLIGHTS (Prompts Track)
- UI/UX (45%): Warm cinematic editorial — cream-white museum with one door-opening scroll effect， staggered hero text rise， perforated visitor ticket， left-right guestbook spread. Restraint everywhere except the Threshold.
- Prompts Quality (25%): Fully structured (Positioning → Brand → Tokens → Tech → Routes → Rooms → Interactions → Data → File Structure → Performance → Execution Order → Verification). Every color， font weight， animation curve， and layout dimension specified. Copy-paste reproducible.
- Social Reach (20%): OG Image per wing via Edge Function. Real routes shareable on social media. Visitor ticket designed to be screenshot-worthy. Guestbook has anti-spam + auto-publish — real interaction， not decoration.
- Technical Depth (10%): Edge Functions (guestbook + visitor ticket)， KV-backed atomic increment， honeypot + rule-based moderation + simple-captcha， 24h auto-publish cron， SPA history fallback.

---

BUILD STATUS (Current Implementation)

The project already has a working implementation under `bmuseum/`. Treat it as the foundation. DO NOT rebuild what is already working — only complete the gaps listed below.

Already Working (DO NOT REBUILD):
- ✅ 8 个 URL / 6 条 Route，全部可独立访问（History API + 参数化路由）
- ✅ 设计系统完全应用（tokens.css / fonts.css / globals.css + grain texture）
- ✅ Grand Hall: Hero 入场动画 + Threshold 门开启滚动 + Hall Preview 三翼卡片 + Foyer 出口小语段（Foyer 是实现时自定义添加，保留）
- ✅ About 页面 7 段全部完成（Hero / Identity / Principles / Thinking Loop / Shipping / Vision / Contact）
- ✅ Wing 页面 4 段共用模板（Intro / Featured / Recent / All Exhibits）
- ✅ Article Detail：阅读进度条 + 馆藏铭牌 + markdown 渲染 + prev/next 导航
- ✅ Index：三种视图 (time/wing/tag) + 客户端搜索 + 分组展示
- ✅ Guestbook 视觉：牛皮纸房间 + 左右翻页 + honeypot + 反 spam 题 + 敏感词过滤（数据层走 localStorage 降级）
- ✅ Visitor Ticket：弹出动画 + 展开详情 + 房间历史（数据层走 localStorage 降级）
- ✅ Nav：Grand Hall 滚动时 on-dark 切换
- ✅ Footer：三列深色底带
- ✅ Hooks：useScrollProgress / useReveal / useVisitorTicket
- ✅ Data：articles.json (18 articles) / wings.json (3 wings) / types.ts

Gaps To Complete (BUILD THESE):
1. Edge Functions：`functions/api/guestbook/`、`functions/api/visitor/`
2. KV 集成：替换 Guestbook 与 Visitor Ticket 的 localStorage 降级方案
3. SPA fallback：`functions/_middleware.ts` 或 EdgeOne 控制台规则
4. 移除 Guestbook seed data（prompt 禁止 fake data）
5. `blocklist.json` 敏感词规则表（当前是硬编码数组）
6. RSS / Atom feed (`feed.xml`)
7. `sitemap.xml`
8. 各页面独立 SEO meta tags（title / description / og:*）
9. OG Image Edge Function（按 wing slug / article slug 动态生成）
10. 性能验证与优化（LCP / bundle size / font preload / Threshold 图片 WebP）
11. 部署到 EdgeOne Pages（History fallback + CDN 缓存策略）
12. 清理空组件目录（hero/ / threshold/ / hall-preview/ / shared/，功能已内联到 GrandHall.tsx）
13. `about.json`（当前数据硬编码在 About.tsx 中）

Known Code-Level Deltas (修代码时一并处理，不影响 prompt 指导)：
- Visitor Ticket 回访自动弹出缺少 `setShowTicket(true)`
- `mdToHtml` 缺少 h1 / image / link / code-block / table 支持
- `formatVol` 生成 `TECH` 而非 `Tech`（大小写）
- About §05/§06/§07 文本与 prompt 有微小偏差
- Footer 右列缺少 RSS / Atom 链接

---

Build a personal works museum website called B.Museum using React + Vite + TypeScript.

GOAL
You are the chief curator-engineer of B.Museum. It is NOT a blog — it is a museum. Visitors browse by "walking through rooms"， not by scrolling a timeline. The entire site follows the "Path D · Warm Cinematic / Editorial" visual direction: warm cream-white base + one powerful cinematic entrance moment +极致 restrained layout everywhere else.

After reading this entire prompt， build in the order specified in §10 Execution Order. After completing each item， run the self-check in §11 Verification Criteria before proceeding. Do NOT skip any section — every room has its reason to exist.

BRAND
Brand name: B.Museum
Tagline: Walk through the mind.

The museum is space， not flow. Every exhibit has a position， a number， a version. They are not stacked on a timeline.

Visitor narrative: "By day I ship code. By night I curate what survived the thinking." Three wings， one volume per year.

Target experience: Three-second wow + whole-museum restraint. First-screen text enters with animation → door-opening scroll effect → see three wings → explore freely.

ABSOLUTE PROHIBITIONS:
- Dark color as primary基调 (dark is ONLY for Hall Preview / Footer / Room Markers)
- Particle backgrounds / WebGL / any 60fps sustained GPU task
- Timeline scroll flow
- Modal overlays as content main pages (articles， wings， about are all real routes)
- Fake / placeholder social data in Guest Book
- i18n (this site is Chinese-only， no language toggle)
- Dark mode toggle (the主线 is always warm cream-white)

DEPLOYMENT PLATFORM & TECH STACK (hard constraints)

```yaml
platform:    Tencent EdgeOne Pages
frontend:    React 19 + TypeScript 6 + Vite 8
routing:     React Router v7 (react-router-dom@^7.15.0， History API — real routes， NO hash routes; v7 兼容 v6 API)
styling:     CSS variables (design tokens) + modular CSS / Tailwind (pick one)， but NO runtime CSS-in-JS
backend:     EdgeOne Pages Functions (lightweight API)
storage:     EdgeOne KV (guestbook entries， visitor ticket counter. If KV unavailable， degrade to LocalStorage + built-in JSON placeholder)
fonts:       Google Fonts (Fraunces， Inter， Noto Serif SC) + jsDelivr (lxgw-wenkai-webfont)
language:    Simplified Chinese only， no i18n
```

Key engineering constraints:
- Every route must be independently accessible， shareable， and indexable by search engines (Edge Functions configured with SPA fallback to index.html)
- Zero runtime dependency on browser storage APIs except localStorage (for visitor ticket only)
- Font loading: font-display: swap + critical fonts 
- First-screen LCP target < 1.5s

DESIGN SYSTEM (Path D Visual Tokens — Immutable)

3.1 Color

```css
:root {
  /* Main color temperature (warm cream-white主线) */
  --bg:        #F0EEE6;   /* warm cream · primary background */
  --bg-warm:   #ECE7DA;  
   /* warm card */
  --bg-card:   #EAE6DC;  
   /* card/spec block */
  --ink:       #1F1E1B;   /* primary text */
  --ink-soft:  #5A5750;  
   /* secondary text */
  --ink-faint: #9A9490;   /* metadata / gray text */
  --hairline:  rgba(31，30，27，.11);
  --hairline-s:rgba(31，30，27，.22);

  /* Dark (Hall Preview / Footer / Room Marker ONLY) */
  --bg-deep:   #1F1E1B;
  --cream-text:#E8E4D8;

  /* Primary accent (red earth， unified across entire site) */
  --accent:    #C15F3C;

  /* Wing accents (ONLY for hover/tag/active indicators within wings， NOT for main backgrounds) */
  --a-tech:    #5B7A9A;  
   /* Tech Wing · steel blue-gray */
  --a-think:   #C15F3C;  
   /* Think Wing · red earth (same as main accent) */
  --a-create:  #7A8C5F;  
   /* Create Wing · moss green */
}
```

Iron rules:
- Only 3 color-temperature zones allowed: ① Warm cream-white主线 ② Guest Book kraft paper `#F4ECD6` ③ Hall Preview / Footer / Room Marker dark `#1F1E1B`
- No fourth color-temperature zone
- Wing accents affect ONLY hover， wing tag， and active indicators — they do NOT change main backgrounds
- NO dark mode toggle — the主线 is always warm cream-white

3.2 Typography

```css
:root {
  --f-en:  'Fraunces'， Georgia， serif;          /* English serif (italic editorial) */
  --f-cn:  'Noto Serif SC'， serif;              /* Chinese body */
  --f-kai: 'LXGW WenKai'， 'Kaiti SC'， cursive;  /* Chinese "italic substitute" · kaiti emphasis */
  --f-ui:  'Inter'， -apple-system， sans-serif;  /* UI / uppercase micro-copy */
  --f-mono:'JetBrains Mono'， monospace;         /* code block */
}
```

| Usage | Font | Weight |
|---|---|---|
| Hero Chinese headline | Noto Serif SC | 200 |
| Chinese kaiti emphasis (words like "收藏") | LXGW WenKai | 400 |
| Chinese body text | Noto Serif SC | 400， line-height 1.85， body width 680px |
| English italic subtitle | Fraunces italic | 300 |
| eyebrow / nav / metadata | Inter | 500， letter-spacing .18em， UPPERCASE |
| code block | JetBrains Mono | 400 |

3.3 Grain Texture

A permanent ultra-light SVG noise grain layer across the entire site， `opacity: .04`， `mix-blend-mode: multiply`， `z-index: 200`， `pointer-events: none`. Makes the cream-white look like printed paper.

3.4 Spacing & Layout

- Page max-width `1100px`， horizontal padding `40px` (mobile `24px`)
- Vertical whitespace between sections: `88-100px`
- Article body container width `680px`， line-height `1.9`， paragraph spacing `28px`

SITE MAP (Real Routes — All Independent Pages)

```
/                   Grand Hall · Main Hall
/about              About · About the Curator
/wing/tech          Tech Wing · Engineering Reference Room
/wing/think         Think Wing · Private Study
/wing/create        Create Wing · Project Workshop
/article/:slug      Article Detail · Exhibit Detail
/index              Index · Collection Index
/guestbook          Guest Book · Visitor's Book
```

Each route is an independent React page component， configured via ``. DO NOT use modal overlays to simulate new pages — article detail， about， and wings must all be independent routes where the URL bar changes， content is shareable， and back-button works.

Page transition animation: 200ms cross-fade + 4px translateY. NO complex entrance animations on every navigation — avoid re-playing the wow moment on every page change.

ROOM SPECIFICATIONS

5.1 / · Grand Hall (Main Hall)

The page has three segments in scroll order:

═══════ Segment A · Hero (100vh) ═══════

- Fixed nav at top: brand `B.Museum` on left (Fraunces italic)， empty center， links `Index / About / Guest Book` on right
- Nav switches to `on-dark` state (white text) when Hall Preview segment triggers
- Hero body uses下沉式 layout， `align-self: end`:

```
[eyebrow · Inter UPPERCASE red earth color]
● Tech · Think · Create  /  curated solo， opened after the workday

[h1 · Noto Serif SC 200， three-line stagger rise entrance animation]
白天写代码，
夜里[收藏 · LXGW WenKai kaiti emphasis]
想清楚的事。

[subtitle · Fraunces italic 300]
By day， I ship. By night， I curate what survived the thinking.
— 三个展厅，一年一馆。

[plate-rule · 1px top hairline， left-right aligned]
Vol. 01 · One-author archive              
   est. 2026
```

Entrance animation:
- nav: fade 1.2s @ 0.1s delay
- eyebrow: fade 0.9s @ 0.2s delay
- h1 three lines sequentially `translateY(110%) → 0`， cubic-bezier(.2，.7，.2，1)， 1.15s， 200ms stagger (at 0.35s， 0.55s， 0.75s)
- subtitle / plate-rule: fade 1.4s @ 1.4s， fade 1.4s @ 1.6s

═══════ Segment B · Threshold (Door-Opening Scroll Effect， 220vh container + sticky 100vh stage) ═══════

Core interaction. A warm-toned doorway/corridor photo placed in a letterbox plate， responding to scroll:
1. Container progress `p ∈ [0，1]`， ease-in-out: `eased = p 0.55， nav switches to on-dark
7. When p ∈ [0.3， 0.85]， show "继续向下 · Step inside" cue at bottom-right

JS uses `requestAnimationFrame` + `passive scroll listener`.

═══════ Segment C · Hall Preview (Dark， corridor with three wing entrances) ═══════

- Background `#1F1E1B`， text `#E8E4D8`， overlaid with a radial-gradient red-earth glow at top
- eyebrow: `● 三个展厅 · Three Wings` (accent red earth)
- Title: "走廊里，没有别人，只有你 —— 和[被你想清楚的事 · kaiti]。"
- Three wing entrance cards (grid 3 columns， 1px gap， hairline dividers):

```
┌─────────────────┬─────────────────┬─────────────────┐
│ Wing · 01       │ Wing · 02       │ Wing · 03       │
│ Tech 翼         │ Think 翼        │ Create 翼       │
│ 工程参考室      │ 私人书房        │ 项目工坊        │
│                 │                 │                 │
│ 工程实录、技术  │ 思考碎片、认知  │ 在建的、已发布的│
│ 决策、架构备忘  │ 迭代、还没想清  │ 、停工的。项目 
   │
│ ...             │ 楚的问题。      │ 决策记录。      │
│                 │                 │                 │
│ ─────────       │ ─────────       │ ─────────       │
│ 14 件展品  → 进入│ 19 件展品  → 进入│ 14 件展品  → 进入│
└─────────────────┴─────────────────┴─────────────────┘
   blue top bar      red earth top bar   moss green top bar
```

Each card has a 2px wing-specific accent color bar at the top; on hover: background brightens one notch， accent bar becomes solid， arrow shifts right 5px. Click → `navigate('/wing/tech')` etc.

5.2 /about · About the Curator (Independent Page)

Seven segments in order， each separated by 88px whitespace and 1px hairline:

**§ 01 Hero Placard**
```
[eyebrow] ● Plate · Curator's File
[h1 large] 关于馆长
[Fraunces italic] Hello.
[plate-rule] B.Museum · Vol. 01 · One-author archive  ／ 
   est. 2026
```

**§ 02 Identity Card (Two-column layout)**

Left column: Archive card (with corner badge `CURATOR · FILE NO.01` in red earth， hanging on the border)
```
名号    大佬
世代    00 后
身份    全栈工程师 → AI 应用开发者（red earth highlight）
设备    MacBook Air M4
状态    转型期 · 正在构建中（red earth highlight）
馆龄    Vol. 01 · 2026
```

Right column: Three-paragraph quotation-style introduction:
> 白天在写代码，夜里在想这些代码到底有没有意义。这个博物馆是那些**想清楚了的事**的陈列室——技术、思考、正在做的项目，按翼分类，不按时间线堆叠。
>
> 我不相信单一来源，不相信感觉，也不相信"差不多就行"。每一件展品背后都有版本号，因为**认知本来就是迭代的**。
>
> — 本馆由馆长独立策展，不对外合作，不接受投稿。

**§ 03 Six Core Principles (3×2 grid， 1px hairline dividers， hover background micro-change)**

| No | Title | Body |
|--|--|--|
| 01 | 务实至上 | 所有方案的第一个问题永远是：能不能真正落地？够用胜过最强，实用胜过时髦。 |
| 02 | 数据驱动 | 感觉告诉你方向，数据告诉你对不对。做判断要有指标，定目标要能量化。 |
| 03 | 隐私优先 | 产品设计里隐私保护是不可谈判的底线。不为功能方便牺牲用户数据。 |
| 04 | 系统化洞察 | 好的认知应该被提炼出来，反复使用，而不是想一次扔一次。让洞察可复用。 |
| 05 | 信任但验证 | 不盲信任何单一来源，包括 AI。多角度交叉验证建立信心，人类最终审查。 |
| 06 | 版本控制思维 | 无论代码还是想法，都该有版本，可以回滚，可以追溯。这个博物馆就是实践。 |

**§ 04 Thinking Loop (Plan → Review → Execute → Test → Iterate)**

Centered horizontal 5-node layout. Each node = circle (52×52， 1px border) + Chinese label + small annotation. Between nodes: 1px horizontal line + triangle arrow. Hover any node: circle becomes red-earth solid fill， white text.

Below， centered: "← 带数据回到 Plan" (flanked by two hairlines)

Node annotations:
- Plan · 规划：分层，拆解，定边界
- Review · 审查：验证假设，找盲区
- Execute · 执行：专注，不在途中改
- Test · 验证：跑数据，不靠感觉
- Iterate · 迭代：带数据进下一轮

Footer note (Fraunces italic): "这个闭环不只用于写代码——用于做任何值得认真对待的事。"

**§ 05 Currently Shipping (Three exhibit cards， 3 columns)**

Each card structure: top 3px wing accent color bar → exhibit number SHIP-NN → project name (Noto Serif 300， 17px) → subtitle → status (green dot + text) → tech tags → description → footer link row.

```
SHIP-01 · rencai · 人才政策助手 · 微信小程序
  Status：● 生产环境运行中
  tech：FastAPI · 微信小程序 · 腾讯云
 
   Description：给在陌生城市找落脚点的人做的工具。政府人才补贴政策繁杂难查，
        这个小程序把它变成一问一答。21 个集成测试全通过，准备提审。
  footer：即将上线 →
  Top bar color：red earth (--accent)

SHIP-02 · Drift · 情绪沉淀 · iOS
  Status：● MVP 可体验
  tech：SwiftUI · Metal · Apple Vision
 
   Description：不是日记，不是打卡——是用相机捕捉情绪的实验。Vision 框架分析
        情绪向量，驱动 Metal 动态画布。本地优先。
  footer：TestFlight 内测 →
  Top bar color：steel blue-gray (--a-tech)

SHIP-03 · Personal API · AI 身份层 · v2.0.0
  Status：● v2.0.0 · 开源运行中
  tech：Obsidian · Agent SDK · Hermes
  Description：让 AI 真正读懂你的基础设施。把 Obsidian 知识库变成 AI 可读的
        身份协议，已被 awesome-hermes-agent 社区收录。
  footer：GitHub · 开源 →
  Top bar color：moss green (--a-create)
```

**§ 06 Vision (Max width 680px， bracketed words use LXGW WenKai kaiti)**

```
[eyebrow] ● Curator's Note · 馆长自述
[h3 title] 为什么有这个博物馆

长期，我想成为一个能独立跑完「[技术 + 产品 + 运营 · kaiti]」全链路的工程师。
不只是会写代码的人——而是能把一个[想法 · kaiti]从零推到真实用户手上的那种人。

我相信 AI 应该[懂你 · kaiti]，而不只是回答问题。好的人机协作不是替换，
是分工：人定义问题与验证答案，AI 负责执行和探索。

这个博物馆是一次实验——把三年里写过的代码、想清楚的事、还没想清楚的事，
按照展品的方式陈列出来。不追求完整，只要[真实 · kaiti]。
```

**§ 07 Contact (Top hairline + left-right layout)**

Left: "联系馆长 · Find the Curator" (eyebrow)
Right: GitHub · X · Email · RSS (with small icons， hover red earth)
Below， right-aligned italic: `B.Museum · Vol. 01 · Opened 2026 · Built solo， after the workday.`

5.3 /wing/:slug · Wing Landing Pages

Three wings share a template， differentiated via prop injection (curator's note， accent color， article list):

═══════ Segment A · Wing Intro Copper Plate (Two-column) ═══════

Left column:
- eyebrow: `● Wing · 01 · 工程参考室` (in wing accent color)
- Large wing name (Noto Serif 200， clamp 48-96px): `Tech / 翼` where "翼" uses wing accent color
- English subtitle (Fraunces italic): `Engineering Reference Room`
- Curator's Note block: left 2px wing accent border， label `Curator's Note`， body text explaining why this wing exists

Right column: Wing Stats card
```
展品总数    14 件
精选展品    1 件
最近更新    2026-05-09
主题标签    FastAPI · Agent · 架构
翼色        钢蓝灰 #5B7A9A
```

Wing-specific curator's notes:

```yaml
tech:
  name: Tech 翼
  subtitle: 工程参考室 · Engineering Reference Room
  accent: '#5B7A9A'
  curator_note: |
   
   写代码是容易的，知道为什么这样写才难。这个展厅记录工程决策背后的推理过程
    ——哪些路是走通的，哪些是走通了之后又推倒重来的。

think:
  name: Think 翼
  subtitle: 私人书房 · Private Study
  accent: '#C15F3C'
  curator_note: |
   
   这是想东西想到一半的房间。有些已经想清楚，有些还在路上，有些可能永远都
   
   想不清楚。展品按"想清楚的程度"陈列，不按发表时间。

create:
  name: Create 翼
  subtitle: 项目工坊 · Project Workshop
  accent: '#7A8C5F'
  curator_note: |
   
   在建的、已发布的、停工的。项目背后的决策记录，比发布公告更诚实——
    包括为什么放弃，为什么重启，为什么这个时间点把它砍掉。
```

═══════ Segment B · Featured Exhibit (Curator's Pick Large Card) ═══════

Horizontal grid `1fr 1.4fr`:
- Left cell: wing accent color solid fill， cream-text. Contains `Tech · Vol.01 · No.001` volume number + large Fraunces italic number `001` + small label `精选展品`
- Right cell: metadata row (wing + date + version) → large title (Noto Serif 300) → summary → bottom hairline + "进入展品 →" + reading time

═══════ Segment C · Recent Additions (3-column grid small cards) ═══════

Each card: metadata (wing·date) → title (Noto Serif 300， 16px) → summary (13px ink-soft) → bottom hairline + reading time + version chip

═══════ Segment D · All Exhibits (Year-grouped table list) ═══════

Grouped by year， year label sticky top， row structure: `80px date | 1fr title | 64px time | 56px version`， hover background bg-card full-width extend.

═══════ Seed Data for Three Wings (at least 6 articles each for development) ═══════

**Tech Wing**:
1. `2026-05-09 v1.0 · FastAPI 迁移实录：为什么我把 NestJS 换掉了` (8min， featured)
2. `2026-05-01 v1.1 · Agent 工程化的三个层次：记忆、规划、执行` (6min)
3. `2026-04-22 v1.0 · 版本控制不只是 Git：知识的版本化实践` (5min)
4. `2026-04-10 v1.0 · 为什么删掉了粒子背景` (4min)
5. `2026-03-28 v2.0 · Mini 程序提审前的工程 Checklist` (5min)
6. `2026-03-15 v1.0 · 腾讯云 Lighthouse 生产部署实录` (7min)

**Think Wing**:
1. `2026-05-05 v1.0 · 认知也需要版本控制` (5min， featured)
2. `2026-04-18 v1.0 · 为什么我不再追求"完整"` (4min)
3. `2026-04-02 v1.1 · 转型期的时间分配陷阱` (6min)
4. `2026-03-20 v1.0 · 创业心态 vs 工程师心态` (5min)
5. `2026-03-08 v1.0 · 信任但验证：和 AI 协作的边界` (7min)
6. `2026-02-22 v1.0 · 删掉一个项目比开始一个更难` (4min)

**Create Wing**:
1. `2026-05-03 v1.0 · Drift：用 Metal 渲染情绪` (8min， featured)
2. `2026-04-26 v1.0 · rencai 的产品决策记录` (6min)
3. `2026-04-09 v1.0 · Personal API v2 设计文档` (7min)
4. `2026-03-25 v1.0 · 为什么停掉了 GPU Compass` (5min)
5. `2026-03-10 v1.0 · ihuoxu.com 的复盘：OPC 探索为什么暂停` (6min)
6. `2026-02-28 v1.0 · 一个人独立做产品的工具链` (5min)

5.4 /article/:slug · Exhibit Detail (Independent Route)

Page structure (max-width 680px， centered):

**Top Fixed Reading Progress Bar**
2px height， red earth color， fills width based on scroll progress within article area.

**Catalog Tag (馆藏铭牌)**
1px border + bg-card background， 2-column grid:

```
馆藏号  Tech · Vol.01 · No.001 (wing accent color)        标签   FastAPI · NestJS · 架构决策
日期    2026-05-09 首发 · 2026-05-09 更新           阅读   约 8 分钟
版本    v1.0                                      
   展厅   Tech 翼 · 工程参考室
```

**Title Area**
- h1 (Noto Serif 200， clamp 32-68px， max 16ch line break)
- subtitle (Fraunces italic， gray， optional)

**Body (680px wide， line-height 1.9)**
- p: Noto Serif 400， 17px
- p.lead (first paragraph): 18px， 300， ink-soft
- h2: Noto Serif 300， 24px， top margin 52px
- blockquote: left 2px wing accent border， Fraunces italic
- code (inline): JetBrains Mono 13px + bg-card
- pre: bg-card + 1px hairline-s + JetBrains Mono 13px

**Bottom Prev/Next Navigation**
2-column grid， each card:
- Left card: `← 上一展品` + title
- Right card (right-aligned): `下一展品 →` + title
- hover: background bg-card

5.5 /index · Collection Index

- Top铭牌: `Vol. 01 Catalog · 47 entries`
- Three view switch chips: by time / by wing / by tag
- Search box: client-side fuzzy matching (no backend dependency)
- List rows: `date · wing · title · version`
- List style consistent with Wing's All Exhibits table

5.6 /guestbook · Visitor's Book

**Visual — The Only Kraft Paper Room**
```css
--bg-guestbook: #F4ECD6;       /* kraft paper */
--ink-guestbook: #3A2E1F;      /* brown ink */
```
Background overlaid with paper-texture SVG (stronger than main site grain). This room's color temperature is deliberately different from the rest of the site.

**Layout — An Open Kraft Paper Guest Book**
Left page: reading history (reverse chronological)， right page: writing. Center spine line divider.

**Message History**
- Each entry: author name (LXGW WenKai) + message body (Noto Serif SC) + timestamp (Inter micro text)
- Page-turn effect (CSS page-flip animation 800ms)
- 8 entries per page

**Message Input (Right Page)**
```
姓名（max 30）   [input field]
留言（max 280） [textarea， placeholder in LXGW WenKai: "留下你今晚看到的"]
反 spam 简单题  [博物馆英文是？  → Answer: museum]
                  [Submit button · red earth underline style]
```

**Submission Flow (Critical)**

```typescript
// POST /api/guestbook
async function submit(entry: { name: string; message: string; honeypot: string }) {
  // 1. Honeypot field check (hidden honeypot input， bots will fill it)
  if (entry.honeypot) return reject('spam');

  // 2. Length limits (name ≤30， message ≤280)
  // 3. Simple question validation (answer === 'museum')

  // 4. Rule-based sensitive word filtering (bilingual word list)
  if (RULES.containsBlocked(entry.message)) return reject('blocked');

  // 5. Same-IP rate limit: max 1 entry per 60 seconds
  // 6. Write to KV， default status 'pending'
  // 7. Auto-transition to 'published' after 24 hours (Cron Edge Function)
}
```

**Sensitive Word Rule Table** (minimum viable set， no ML， all hardcoded lists):
- Chinese: politically sensitive， violence， pornography， abuse， advertising keywords
- English: profanity， spam patterns ('http'， 'www.'， 'click here'， etc.)
- Complete word list stored in `functions/api/guestbook/blocklist.json`
- Hit = reject with friendly message "留言含违规词，未发布"

**Post-Submission State**:
- Show "已收到，馆长审核 24h 内展出" (don't expose the exact review mechanism， give users a friendly narrative)
- Auto-published after 24h via Cron， no curator admin panel needed

5.7 Permanent Component · Visitor Ticket (访客票根)

**Position**
- Grand Hall: bottom-left large size (240×100px)
- All other pages: bottom-right small size (140×60px)
- z-index 70 (below nav， above content)

**Visual (Ticket Design)**
```
┌─────────────────────────────────┐
│  B.MUSEUM            #00237     │
│  ─────────────                  │
│  Valid for tonight              │
│  Issued 21:47， May 10， 2026     │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ (perforated edge) │
│  SEAT NO. A-{visitor_id}        │
└─────────────────────────────────┘
```
- Kraft paper `#F4ECD6` + red earth stamp + monochrome print feel
- SVG perforated edges
- "Valid for tonight" is the core narrative — one-time ticket， expires when browser closes

**Data Persistence**
```typescript
// LocalStorage primary
type Visitor = {
  id: string;          // uuid
  ticketNo: number;    // site-wide incrementing (from KV)
  issuedAt: string;    // ISO timestamp
  visitedRooms: string[];   // route history
};
// EdgeOne KV backup (for site-wide ticket number increment)
key: visitor:{id}
key: counter:visitors  // atomic increment counter
```

**Behavior**
- First visit: auto-issue ticket， fetch next ticketNo from KV (using `counter:visitors` atomic increment)， spring-up animation on issue (ticket pops up from bottom-right + 0.6s)
- Return visit same session: recognized as same ticket， no re-issue
- After browser close + revisit: recognized as new visit， issue new ticket ("valid for tonight")
- Click ticket: expands to full ticket card showing complete visit history (visitedRooms list + entry time)

5.8 Footer · Museum Closing Notice

Full-width `#1F1E1B` dark band， cream-text， top 1px red-earth hairline divider.

3-column layout:
- Left: `B.Museum` (Fraunces italic 22px) + tagline `Walk through the mind.` (kaiti)
- Center: "展厅导览" label + Tech/Think/Create wing links + About link
- Right: "订阅" label + RSS / Atom / GitHub / Guest Book links

Bottom separator line: `© 2026 B.Museum · Built solo  ／ 
   Vol. 01 · Est. 2026 · Walk through the mind.`

KEY INTERACTIONS (Behavior-Level Specifications)

6.1 Hero Entrance Animation
- nav fade-in 1.2s @ 0.1s delay
- eyebrow fade-in 0.9s @ 0.2s delay
- h1 three lines sequentially `transform: translateY(110%) → 0` cubic-bezier(.2，.7，.2，1) 1.15s， staggered 200ms (at 0.35s， 0.55s， 0.75s)
- subtitle / plate-rule fade-in @ 1.4s， 1.6s

6.2 Threshold Scroll (Door-Opening)
See §5.1 Segment B. The ONLY "complex" animation on the entire site — use it wisely.

6.3 Page Transitions
All route transitions use the same: 200ms cross-fade + 4px translateY. DO NOT re-play the Hero entrance animation on every page change.

6.4 Scroll Reveal
All non-Hero segments use `IntersectionObserver` to trigger: `opacity 0→1， translateY 18→0， 700ms ease`. Threshold `.06`， rootMargin `0 0 -32px 0`. One-time trigger then `unobserve`.

6.5 Article Reading Progress
Only active on `/article/:slug` route. Top 2px red-earth bar fills width based on scroll progress within article body range.

6.6 Ticket Pop-Up
On first visit to Grand Hall， after 2.5 seconds the ticket springs up from bottom-right: `transform: translateY(40px) → 0， opacity 0 → 1， 600ms cubic-bezier(.34，1.56，.64，1)`.

6.7 Nav Color-Temperature Inversion
Only active on Grand Hall route. Monitor Threshold scroll progress， when eased > 0.55 add `nav.classList.add('on-dark')`， otherwise remove.

DATA MODELS (TypeScript Schemas)

```typescript
// Article
type Article = {
  slug: string;
  wing: 'tech' | 'think' | 'create';
  no: number;                  // catalog number， incrementing per wing
  title: string;
  subtitle?: string;
  summary: string;             // for cards
  body: string;                // markdown
  created: string;             // ISO
  updated: string;             // ISO
  version: string;             // 'v1.0'， 'v1.1'
  featured: boolean;
  tags: string[];
  cover?: string;
  reading_time_min: number;
};

// Wing
type Wing = {
  slug: 'tech' | 'think' | 'create';
  name: string;
  subtitle: string;
  curator_note: string;
  accent: string;              // hex
  featured_slug: string;
};

// Guest Entry
type GuestEntry = {
  id: string;
  name: string;                // ≤30
  message: string;             // ≤280
  created: string;
  status: 'pending' | 'published' | 'blocked';
  ip_hash: string;             // for rate limit
};

// Visitor
type Visitor = {
  id: string;
  ticket_no: number;
  issued_at: string;
  visited_rooms: string[];
  is_returning: boolean;
};
```

Data initialization:
- Articles & Wings: load from `/src/data/articles.json` and `/src/data/wings.json` statically (development phase)， later can migrate to Edge Function `/api/articles`， `/api/wings/:slug`
- Guest & Visitor: read/write via Edge Function + KV

GUESTBOOK DUAL-TRACK STRATEGY

开发期（当前状态，可接受的降级方案）:
- localStorage 存储；视觉与表单逻辑（honeypot / 反 spam / 长度 / 限频）已就位
- 自动发布延迟 30s 用于本地调试（生产环境应为 24h）
- 注意：当前实现含 8 条 SEED 留言用于 UI 调试，迁移到生产前必须移除（prompt 禁止 fake data）

生产期（Gap，需实现）:
1. 创建 `functions/api/guestbook/index.ts`
   - GET：从 KV 读取已发布留言，按时间倒序返回
   - POST：校验 → honeypot → 长度限制（name ≤30， message ≤280）→ 反 spam 题（answer === 'museum'）→ 规则过滤 → 同 IP 限频(60s)
   - 写入 KV，默认 status='pending'
2. 创建 `functions/api/guestbook/blocklist.json`
   - 中文：政治敏感 / 暴力 / 色情 / 辱骂 / 广告关键词
   - 英文：profanity / spam patterns（'http'， 'www.'， 'click here' 等）
   - 命中 = 拒绝，友好提示 "留言含违规词，未发布"
3. 迁移前端 `Guestbook.tsx`
   - localStorage 为空时返回空数组（不注入 SEED）
   - 提交走 `fetch('/api/guestbook'， { method: 'POST' })`
   - 读取走 `fetch('/api/guestbook')`
   - 移除 SEED 常量与 30s autoPublish 逻辑
4. 自动发布：Cron Edge Function 每小时扫描 pending 超过 24h 的条目 → 改为 published

VISITOR TICKET KV MIGRATION

当前（localStorage 降级）:
- ticket_no 由 `Math.floor(Math.random() * 9000) + 1000` 生成（非全局递增，仅本地伪随机）
- visitor 数据完全存于浏览器 localStorage

目标（KV 集成）:
1. 创建 `functions/api/visitor/issue.ts`
   - POST：使用 KV `counter:visitors` 原子递增（INCR），返回 `{ ticketNo， visitorId， issuedAt }`
2. 改写 `useVisitorTicket.ts`
   - 首次访问：POST `/api/visitor/issue` 拿到全局递增票号
   - localStorage 缓存 visitor 数据，减少重复请求；同会话回访不再重发
   - 浏览器关闭后再访问：识别为新访问，重新发票（"Valid for tonight" 语义）
   - 移除 `Math.random()` 票号生成

KV Schema（最小必要集）:
```
counter:visitors             → integer (atomic INCR via KV)
visitor:{id}                 → JSON Visitor
guestbook:{id}               → JSON GuestEntry
guestbook:index:published    → array，按时间倒序
guestbook:index:pending      → array，等待 24h 自动发布
guestbook:ratelimit:{ipHash} → ISO timestamp，TTL 60s
```

FILE STRUCTURE (Recommended — ✅ 已建 / ❌ 未建)

```
src/
├── pages/                  # ✅ 全部已建
│   ├── GrandHall.tsx       # ✅
│   ├── About.tsx           # ✅
│   ├── Wing.tsx            # ✅ 单组件渲染三翼，按 :slug 区分
│   ├── ArticleDetail.tsx   # ✅
│   ├── Index.tsx           # ✅
│   └── Guestbook.tsx       # ✅（数据层 localStorage 降级）
├── components/
│   ├── nav/Nav.tsx                    # ✅
│   ├── hero/                          # ❌ 空目录（功能内联在 GrandHall.tsx，建议删除）
│   ├── threshold/                     # ❌ 空目录（功能内联在 GrandHall.tsx，建议删除）
│   ├── hall-preview/                  # ❌ 空目录（功能内联在 GrandHall.tsx，建议删除）
│   ├── visitor-ticket/VisitorTicket.tsx  # ✅
│   ├── footer/Footer.tsx              # ✅
│   └── shared/                        # ❌ 空目录（建议删除）
├── data/
│   ├── articles.json       # ✅ 18 articles
│   ├── wings.json          # ✅ 3 wings
│   ├── types.ts            # ✅
│   └── about.json          # ❌ 当前数据硬编码在 About.tsx，建议抽出
├── hooks/
│   ├── useScrollProgress.ts   # ✅
│   ├── useReveal.ts           # ✅
│   └── useVisitorTicket.ts    # ✅（待 KV 迁移）
├── styles/
│   ├── tokens.css          # ✅
│   ├── fonts.css           # ✅
│   └── globals.css         # ✅
└── App.tsx                 # ✅ Routes configuration

functions/                  # ❌ 全部未建（Gap）
├── api/
│   ├── guestbook/
│   │   ├── index.ts        # ❌ GET 列表 / POST 提交
│   │   └── blocklist.json  # ❌ 敏感词规则表
│   └── visitor/
│       └── issue.ts        # ❌ POST 发票 + KV 原子递增
└── _middleware.ts          # ❌ SPA fallback

public/
├── images/                 # ✅
├── feed.xml                # ❌ RSS（构建时生成）
└── sitemap.xml             # ❌
```

PERFORMANCE BUDGET (Mandatory)

| Metric | Target |
|---|---|
| LCP (first screen) | < 1.5s |
| TTFB | < 200ms (EdgeOne CDN) |
| Main bundle gzipped | < 80KB |
| Font strategy | font-display: swap + preload Noto Serif 200， Inter 500 |
| Threshold image | WebP + 2400w + LQIP base64 placeholder (< 100 bytes) |
| Corridor article list | API data client-side fetch， does not block first screen |
| Edge Functions cache | articles.json 1 hour， wings.json 5 minutes， guestbook no cache |

NEVER: particle backgrounds， WebGL corridors， any 60fps sustained GPU task， dependency on third-party tracking scripts (if analytics needed， use EdgeOne's built-in Web Analytics).

DEPLOYMENT CHECKLIST

1. **SPA fallback（最高优先级 — 没有它，子路由刷新全部 404）**
   - 创建 `functions/_middleware.ts`，或在 EdgeOne 控制台配置 SPA fallback
   - 规则：非文件请求 + 非 `/api/*` → 返回 `index.html`

2. **vite.config.ts**
   - `build.rollupOptions.output.manualChunks`：vendor 拆分（`react`， `react-dom`， `react-router-dom`）
   - 验证 main bundle gzipped < 80KB
   - 启用 `build.sourcemap` 仅在非生产环境

3. **EdgeOne Pages 配置**
   - Functions 路由：`/api/guestbook`、`/api/visitor/issue`
   - KV namespace：`bmuseum-guestbook`（留言）、`bmuseum-visitors`（票号计数 + visitor 详情）
   - CDN 缓存：`articles.json` 1h、`wings.json` 5min、`/api/guestbook` no-cache
   - History fallback 必须开启

4. **字体加载优化**
   - 当前全部用 `@import` 加载（fonts.css），改为 `` 关键字体（Noto Serif SC 200、Inter 500）
   - 全部字体声明加 `font-display: swap`，避免阻塞首屏渲染

5. **Threshold 图片**
   - 当前用 Unsplash 远程图（`photo-1554907984-15263bfd63bd`）
   - 生产期下载 → WebP 转换 → 2400w 主图 + LQIP base64 placeholder（< 100 bytes）
   - 通过 `` 预加载主图

6. **SEO 资产（纯前端改动，不依赖 Edge Functions）**
   - 各页面组件设置 `document.title`（或引入 `react-helmet-async`）
   - `index.html` 中的 `` 作为默认 fallback
   - 各路由独立 `` 和 ``
   - `sitemap.xml`：列出 8 个基础 URL + 所有文章 URL
   - `feed.xml`：RSS 2.0 格式，每篇文章一条 entry

7. **OG Image Edge Function**
   - 按 wing slug / article slug 动态生成卡片图（1200×630）
   - 使用 EdgeOne Pages Function + Satori / 类似 SVG→PNG 路径

EXECUTION ORDER (Build in this sequence， commit after each)

⚠️ 增量构建顺序（不是从零构建）：项目已有 `bmuseum/` 实现，下列步骤覆盖剩余 Gap。如果你确实要从零起步，先按 §BUILD STATUS 的「Already Working」清单复现一遍。

1. **基建闸门：SPA fallback** — 没有它，所有子路由（/about、/wing/:slug 等）刷新都会 404。先创建 `functions/_middleware.ts` 或 EdgeOne 控制台配置。
2. **抽出 about.json** — About.tsx 当前硬编码数据，迁移到 `src/data/about.json` 并在组件里 import。
3. **修代码层小 bug**（与 prompt 一致性相关）：
   - 给 `useVisitorTicket` 回访路径补 `setShowTicket(true)`
   - 扩展 `mdToHtml` 支持 h1 / image / link / fenced code block / table
   - `formatVol` 改为首字母大写（`Tech` 不是 `TECH`）
   - 校正
````
