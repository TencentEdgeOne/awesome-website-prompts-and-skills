# ProductLens

> **赛道**：Prompt　**作者**：临渊不羡鱼
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![ProductLens demo](../assets/demos/productlens.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/productlens.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | ProductLens |
| 赛道 | Prompt |
| 作者 | 临渊不羡鱼 |

## 📝 作品介绍

一、核心价值
**ProductLens** 是一个面向产品决策者的 AI 驱动市场洞察平台，能在 **30 秒内**完成跨平台（淘宝/京东/Amazon/Shopee）的产品研究分析，将原本需要 **2-3 天**的人工调研工作自动化。
**核心价值主张：**
- 📊 **一站式市场情报**：打破平台壁垒，同一界面对比淘宝、京东、Amazon、Shopee、Lazada 五平台数据
- 🤖 **AI 洞察引擎**：自动从用户评论中提取情感倾向、高频关键词、未被满足的需求机会点
- ⚡ **秒级响应**：Edge Functions 边缘计算架构，API 响应 <200ms，远超传统爬虫方案
- 💰 **成本极低**：Serverless 架构，月均运维成本 < ¥100

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
Build a full-stack Market Intelligence Dashboard called **"ProductLens"** — an AI-powered product research & analysis platform deployable to EdgeOne Pages. The dashboard provides real-time multi-platform sales tracking， customer sentiment analysis， and market opportunity insights.

---

## GOAL

Create a production-grade， EdgeOne Pages-deployable dashboard that researches any product category across platforms (Taobao， JD， Amazon， Shopee， Lazada)， visualizes the data with interactive charts， and uses AI to extract actionable customer insights.

The site must feel like a **professional market intelligence tool** (think: Nielsen， SimilarWeb， Consumer Reports) — not a generic ecommerce site， not a blog， and not a SaaS landing page.

This project **must use EdgeOne Pages Edge Functions + Cloud Functions** for backend data APIs， and **EdgeOne Pages KV Storage** for caching analysis results.

---

## ASSETS

Use these CDN assets for the UI demo (replace with real API data in production):

CDN base: `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/productlens/`

Placeholder product images:
- `https://picsum.photos/seed/product1/400/400`
- `https://picsum.photos/seed/product2/400/400`
- `https://picsum.photos/seed/product3/400/400`

Chart library (CDN， no npm install needed for basic usage):
- Chart.js: `https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js`
- Chart.js type: `https://cdn.jsdelivr.net/npm/chartjs-chart-wordcloud@4.1.3/dist/chartjs-chart-wordcloud.min.js` (for review word cloud)

---

## TECH STACK

- **Frontend**: Vite + React 18 + TypeScript + Tailwind CSS
- **UI Components**: shadcn/ui (install via `npx shadcn@latest init`)
- **Icons**: lucide-react
- **Charts**: Chart.js (CDN) + react-chartjs-2
- **Backend**: EdgeOne Pages Edge Functions (lightweight APIs) + Node.js Cloud Functions (data processing)
- **Storage**: EdgeOne Pages KV Storage (cache analysis results)
- **Deployment**: EdgeOne Pages (`edgeone pages deploy`)

---

## COLOR WORLD & DESIGN SYSTEM

### Core Palette (HSL format for Tailwind):
```
--background: 210 20% 98%      // slate-50 base
--foreground: 215 25% 27%      // slate-800 text
--primary: 221 83% 53%         // blue-600 (trust， data)
--primary-foreground: 0 0% 100%
--accent: 24 96% 48%            // orange-500 (insights， CTAs)
--accent-foreground: 0 0% 100%
--muted: 210 20% 96%           // slate-100
--muted-foreground: 215 16% 47% // slate-500
--border: 215 20% 90%           // slate-200
--card: 0 0% 100%              // white cards
--success: 142 76% 36%          // green-600
--warning: 38 96% 54%            // amber-500
--danger: 0 84% 60%            // red-500
```

### Typography:
- **Headings**: `Inter` (600， 700) — Google Fonts
- **Body/Numbers**: `JetBrains Mono` (400， 500) for metric numbers — Google Fonts
- **Body text**: `Inter` (400， 500)

### Tailwind font families:
```css
--font-sans: ['Inter'， 'system-ui'， 'sans-serif'];
--font-mono: ['JetBrains Mono'， 'ui-monospace'， 'monospace'];
```

---

## NON-NEGOTIABLE LAYOUT RULES

The dashboard must be **data-first， scannable， and fast**. No decorative fluff.

**DO NOT do any of the following:**
- no hero image taking 100vh (this is a tool， not a landing page)
- no overlapping decorative elements
- no heavy animations that slow down data rendering
- no magazine-style editorial layouts
- no stock photo collages
- no 3D decorations or floating shapes

**Global layout rules:**
- Max width: `1400px` (wider than normal site， dashboard needs space)
- Horizontal padding: `px-4 md:px-6 lg:px-8`
- Standard section spacing: `py-6 md:py-8`
- Sticky top navbar (always visible for quick search)
- All charts: `aspect-ratio: 16/9` or fixed height `h-64 md:h-80`

**Grid rules:**
- Metrics row: 2 cols mobile， 4 cols desktop (equal width)
- Charts: 1 col mobile， 2 cols desktop
- Tables: horizontally scrollable on mobile

---

## SITE STRUCTURE (Build exactly 6 sections)

### SECTION 1 — STICKY NAVBAR + GLOBAL SEARCH
**Structure:**
- Sticky top navbar (`sticky top-0 z-50`)
- LEFT: Logo "ProductLens" + tagline "Market Intelligence"
- CENTER: Search input — "Search product category..." (triggers analysis)
- RIGHT: "Export PDF" button， "Last updated: [time]" badge

**Behavior:**
- Navbar has light border-bottom， white/semi-transparent background
- Search: on Enter， calls `POST /api/analyze` with `{ category: "..." }`
- Show loading state in navbar when analysis is running

---

### SECTION 2 — HERO METRICS (Real-time Stats Bar)
**Layout:** 4 equal cards in a responsive grid

**Cards (each card = metric + sparkline + trend):**
1. **Platforms Tracked** — number + list of platform icons
2. **Avg. Price Range** — `¥XXX - ¥XXX` + trend arrow
3. **Review Sentiment** — score 0-100 + sentiment bar
4. **Market Growth** — `%` + "vs. last quarter"

**Data source:** `GET /api/dashboard-metrics`

**Each card shows:**
- Metric name (muted， small caps)
- Big number (JetBrains Mono， bold)
- Mini sparkline (inline SVG or tiny Chart.js)
- Trend: `↑ 12%` (green) or `↓ 3%` (red)

---

### SECTION 3 — PLATFORM SALES COMPARISON
**Layout:** Chart (left 2/3) + Filter panel (right 1/3)

**Chart:** Horizontal bar chart
- X axis: Sales volume
- Y axis: Platforms (Taobao， JD， Amazon， Shopee， Lazada)
- Bars: use `--primary` color， with `--accent` for the top platform

**Filter panel:**
- Time range: `7d / 30d / 90d` (segmented control)
- Category: dropdown (Electronics / Fashion / Home / Sports / Beauty)
- "Refresh Data" button (triggers `GET /api/platform-sales?days=30&category=...`)
- Show: "Cached: 12 min ago" or "Live data"

**Data source:** `GET /api/platform-sales`

---

### SECTION 4 — PRICE TREND & FEATURE MATRIX
**Layout:** Two panels， stacked on mobile， side-by-side on desktop

**LEFT: Price Trend Line Chart**
- X axis: Time (last 90 days)
- Y axis: Price (CNY)
- Multiple lines: one per platform (use color-coded legend)
- Dotted line: industry average
- Interaction: hover to see exact price + platform

**RIGHT: Feature Comparison Table**
- Rows: Features (Battery Life， Waterproof， Warranty， etc.)
- Columns: Product A / Product B / Product C
- Icons: ✅ supported， ⚠️ partial， ❌ not supported
- "Export CSV" button

**Data sources:**
- `GET /api/price-trends?product=...`
- `GET /api/feature-compare?products=...`

---

### SECTION 5 — CUSTOMER REVIEW INSIGHTS (Sentiment Analysis)
**Layout:** 3 columns on desktop， 1 column mobile

**COLUMN 1: Word Cloud (Customer Language)**
- Word cloud of most frequent words in reviews
- Size = frequency， Color = sentiment (green=positive， gray=neutral， red=negative)
- "Top words customers use to describe this product category"

**COLUMN 2: Sentiment Breakdown**
- Doughnut chart: Positive / Neutral / Negative %
- Below chart: "Top 3 Customer Concerns" callout box:
  ```
  1. "Battery life too short" — mentioned in 34% of negative reviews
     → Opportunity: market a product with >48h battery
  2. "Price too high for quality" — 28%
     → Opportunity: value-tier product line
  3. "Shipping took too long" — 18%
     → (Not actionable for product design， note only)
  ```

**COLUMN 3: Review Excerpts (Real Voice)**
- 3~5 anonymized review snippets
- Each with: star rating， sentiment tag， highlighted keyword
- "Read full analysis →" link

**Data source:** `GET /api/sentiment?category=...`

---

### SECTION 6 — MARKET OPPORTUNITY + EXPORT CTA
**Layout:** Two-column， full-width

**LEFT: "Market Gaps & Opportunities" (AI-generated insights)**
- 3 insight cards， each:
  - Insight headline (bold， 1 line)
  - Evidence (data point backing it up)
  - "Opportunity Score" (0-100， rendered as a circular progress)
- Example insights:
  ```
  1. "Premium wireless earbuds under-served in ¥200-500 range"
     Evidence: 67% of search volume is in this price band， but only 12% of products
     Opportunity Score: 82/100
  
  2. "Customer complaints about 'charging case battery' are rising"
     Evidence: Mention frequency +45% QoQ in reviews
     Opportunity Score: 74/100
  ```

**RIGHT: Export & Share**
- "Download Full Report (PDF)" — primary CTA button
- "Share Insights" — copy link / social share
- "Set Up Alert" — email notification for price changes (input: email)
- Footer note: "Data sourced from Taobao， JD， Amazon， Shopee. Updated hourly."

**Data source:** `POST /api/generate-report` (Cloud Function)

---

## API REQUIREMENTS (Edge Functions + Cloud Functions)

### Edge Functions (lightweight， <200ms):
```
GET  /api/dashboard-metrics     → returned cached metrics (KV)
GET  /api/platform-sales       → sales per platform (with mock/fallback data)
GET  /api/price-trends         → price history (mock data with realistic variance)
GET  /api/feature-compare      → feature matrix (mock)
GET  /api/sentiment            → sentiment analysis (mock word frequencies)
GET  /api/health               → { ok: true， cachedAt: "..." }
```

### Node.js Cloud Functions (heavy processing):
```
POST /api/analyze              → trigger full analysis (category = "...")
                                      → simulate: fetch platform data → NLP sentiment → cache to KV
                                      → returns: { requestId， estimatedSeconds }
                                      
POST /api/generate-report      → generate PDF report (mock: return { reportUrl: "/reports/sample.pdf" })
                                      → in production: use Puppeteer / PDFKit
                                      
GET  /api/review-raw           → raw review snippets (for excerpt display)
```

### KV Storage Usage:
```javascript
// Global variable name (set when binding namespace in EdgeOne Pages console):
// variable name: product_cache

// Cache strategy:
await product_cache.put(`metrics:${category}:${days}`， JSON.stringify(data))
const cached = await product_cache.get(`metrics:${category}:${days}`)

// NOTE: KV does NOT have TTL. Implement TTL by storing timestamp:
// { data: {...}， cachedAt: Date.now()， ttl: 1800000 }  // 30 min TTL
```

---

## FRONTEND DATA FLOW RULE

- Do NOT hardcode product data in React components
- All data via `fetch()` to `/api/*` endpoints
- Show **skeleton loaders** while fetching (use shadcn/ui Skeleton component)
- Graceful fallback: if API fails， show "Data updating， please refresh" with manual refresh button
- All charts: show "No data yet. Search a category to begin." when data is empty

---

## CHART VISUAL RULES

- Use Chart.js (loaded via CDN， not npm， to keep bundle small)
- Colors: use CSS variables (`hsl(var(--primary))` etc.) for chart colors
- All charts: `responsive: true`， `maintainAspectRatio: false`
- Tooltips: dark background， white text， rounded corners
- No 3D charts (they distort data)
- No overly decorative chart types (stick to bar， line， doughnut， scatter)

---

## IMPLEMENTATION NOTES

- Use the **EdgeOne Pages skill** from: `https://github.com/TencentEdgeOne/edgeone-pages-skills`
- Follow the EdgeOne Pages skill rules during setup and deployment
- Before login， ask whether to use the **China site** or the **Global site**
- After the project is built and verified locally (`npm run dev`)， deploy it to EdgeOne Pages
- KV Storage must be enabled in the EdgeOne Pages console BEFORE using it in Edge Functions

---

## FINAL QUALITY BAR

The result must NOT look like:
- ❌ A generic admin template with charts pasted in
- ❌ A marketing landing page pretending to be a dashboard
- ❌ A static report (must have live API data flow)
- ❌ A blog or editorial site

The result SHOULD look like:
- ✅ A professional market intelligence dashboard (think: SimilarWeb， App Annie， Consumer Reports)
- ✅ Clean data viz， fast loading (Edge Functions = <200ms response)
- ✅ Mobile responsive (check at 390px， 768px， 1024px， 1440px)
- ✅ Data feels "alive" (timestamps， refresh buttons， loading states， skeleton screens)
- ✅ Typography: numbers in JetBrains Mono (feels like data)， headings in Inter (clean)

---

## DEPLOYMENT REQUIREMENT

After building:
1. Run locally: `npm run dev` → verify all charts render
2. Verify API wiring: open `/api/health` in browser， should return JSON
3. Deploy: `edgeone pages deploy -n productlens`
4. After deploy: verify `/api/*` routes return valid JSON (not HTML 404)

## EDGEONE PAGES SKILL INTEGRATION NOTE

When the AI agent builds this project， it should:
1. Load the `edgeone-pages-dev` skill (for creating Edge Functions + Cloud Functions)
2. Load the `edgeone-pages-deploy` skill (for deployment)
3. Ask user: China site or Global site? before running `edgeone login`
4. Create `edge-functions/api/*.js` files for lightweight endpoints
5. Create `cloud-functions/api/*.js` files for heavy processing endpoints
6. Enable KV Storage in the EdgeOne Pages console (user action， note in Prompt)
7. Bind KV namespace and set variable name `product_cache`
````
