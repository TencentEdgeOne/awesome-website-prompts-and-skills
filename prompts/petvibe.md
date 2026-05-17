# PetVibe

> **赛道**：Prompt　**作者**：bobo · [GitHub @zipporcui](https://github.com/zipporcui)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![PetVibe demo](../assets/demos/petvibe.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | PetVibe |
| 赛道 | Prompt |
| 作者 | bobo |
| GitHub | [@zipporcui](https://github.com/zipporcui) |

## 📝 作品介绍

作品名称：PetVibe — 宠物周边个性化定制跨境电商独立站
核心价值：解决宠物周边同质化痛点，一键定制 + 实时预览 + 全球配送
亮点功能：
实时定制预览（填写表单时右侧即时渲染效果）
三亮点功能：
实时定制预览（填写表单时右侧即时渲染效果）
三步式结账（Shipping → Payment → Review，进度指示器）
localStorage 持久化购物车（跨页面共享，刷新步式结账（Shipping → Payment → Review，进度指示器）
localStorage 持久化购物车（跨页面共享，刷新不丢失）
促销码系统（PETVIBE10 10% / FIRSTPET 15%）
完整博客内容体系（6篇演示文章 +不丢失）
促销码系统（PETVIBE10 10% / FIRSTPET 15%）
完整博客内容体系（6篇演示文章 + 评论系统）
Cyberpunk-lite 暗色美学（#0a0a0f + 霓虹渐变）

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# PetVibe — 宠物周边个性化定制跨境电商独立站

> 参赛作品 · WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛

---

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | PetVibe |
| 类型 | 宠物周边个性化定制跨境电商独立站 |
| 技术栈 | React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Edge Functions + Cloud Functions + KV Storage |
| 参赛赛道 | WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 |

---

## 📝 作品介绍

PetVibe 是一个面向全球消费者的宠物周边个性化定制跨境电商独立站。用户可以选择宠物项圈、铭牌、服饰、玩具等周边产品，并上传宠物照片或输入宠物名字，生成个性化定制预览。网站支持多语言（英文 / 西班牙文 / 德文），集成 PayPal 与 Stripe 主流跨境收款工具，并具备完整的定制需求收集与订单管理功能。设计风格炫酷现代，采用深色模式配合渐变霓虹色调，营造科技感与温度并存的购物体验。

---

## 🎯 GOAL

Create a cool， modern cross-border e-commerce website for **PetVibe — personalized pet accessory customization**.

Design direction:
- Dark mode base (#0a0a0f) with neon gradient accents (cyan #00f5d4 → purple #7b61ff → pink #ff6fd8)
- Cyberpunk-lite aesthetic: glassmorphism cards， subtle grid lines， glowing borders
- Premium but approachable — not overly tech-y， warm enough for pet lovers
- Mobile-first responsive， smooth Framer Motion animations
- Multi-language support (EN / ES / DE) via i18n
- Production-grade: accessible， semantic HTML， proper loading states

This is NOT a generic Shopify store， NOT a boring corporate site， NOT a heavy cyberpunk visual that hurts readability.

The site uses **EdgeOne Pages Edge Functions** for form handling and **Cloud Functions (Node.js)** for payment webhook processing.

---

## 🌐 ASSETS

Use the following CDN assets directly (do NOT copy locally):

CDN base: `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/`

### Hero Video
`https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/hero-video.mp4`

### Product Images (use these exact URLs)
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/product-collar.png` — Custom Name Collar
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/product-tag.png` — Laser Engraved ID Tag
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/product-apparel.png` — Personalized Pet Hoodie
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/product-ornament.png` — Photo Pet Ornament
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/product-toy.png` — Custom Printed Frisbee
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/product-portrait.png` — Hand-Drawn Portrait Mug

### Lifestyle Images
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/lifestyle-1.png` — Happy dog wearing custom collar
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/lifestyle-2.png` — Cat with engraved ID tag
- `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/lifestyle-3.png` — Owner holding custom mug

If any CDN asset fails to load， fall back to a stable dark gradient placeholder with the PetVibe paw logo centered.

---

## 🛠 TECH STACK

- React 18+
- Vite
- TypeScript
- Tailwind CSS v3
- shadcn/ui
- lucide-react
- framer-motion
- react-i18next (i18n)
- EdgeOne Pages Edge Functions
- EdgeOne Pages Cloud Functions (Node.js)

---

## 🔤 FONTS & DESIGN SYSTEM

### Google Fonts
```html

```

### Tailwind Config
```js
fontFamily: {
  heading: ['Orbitron'， 'sans-serif']，
  body: ['Inter'， 'sans-serif']，
}
```

### CSS Variables (`:root` in `index.css`)
```css
:root {
  --background: 240 20% 5%;
  --foreground: 0 0% 100%;
  --primary: 160 100% 48%;        /* #00f5d4 cyan */
  --primary-foreground: 240 20% 5%;
  --secondary: 262 100% 64%;       /* #7b61ff purple */
  --accent: 330 100% 65%;          /* #ff6fd8 pink */
  --muted: 240 10% 20%;
  --muted-foreground: 240 5% 65%;
  --border: 240 10% 20% / 0.4;
  --radius: 12px;
}
```

### Core Color Usage
- Backgrounds: `#0a0a0f` (deep dark blue-black)
- Cards: `rgba(255，255，255，0.03)` with `backdrop-filter: blur(12px)`
- Primary CTA: linear-gradient(135deg， `#00f5d4`， `#7b61ff`)
- Accent glow: `0 0 20px rgba(0，245，212，0.3)`
- Text primary: white
- Text secondary: `rgba(255，255，255，0.6)`

---

## 🧩 SHARED COMPONENTS

### `.cyber-glass` (subtle card)
```css
.cyber-glass {
  background: rgba(255，255，255，0.03);
  backdrop-filter: blur(12px) saturate(120%);
  border: 1px solid rgba(0，245，212，0.12);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0，0，0，0.3);
  position: relative;
  overflow: hidden;
}
```
Glow border effect via `::before` pseudo-element with gradient border mask (same technique as pawsome liquid-glass).

### `.cyber-glass-strong` (CTA / important cards)
Same as above but:
- `backdrop-filter: blur(40px)`
- border: `1px solid rgba(0，245，212，0.25)`
- box-shadow: `0 0 30px rgba(0，245，212，0.15)， 0 8px 32px rgba(0，0，0，0.4)`
- Used for primary CTAs and product cards on hover

### `SectionBadge` component
```tsx
// Reusable section badge pill

  
  
    {label}
  

```

### `GradientButton` component
```tsx

  {children}

```

---

## 📐 GLOBAL LAYOUT RULES

- Max-width container: `max-w-7xl mx-auto`
- Horizontal padding: `px-6 md:px-10 lg:px-16`
- Section spacing: `py-20 md:py-28`
- Smooth scroll: `scroll-behavior: smooth` on `html`， `scroll-padding-top: 80px`
- Respect `prefers-reduced-motion`
- All images: `object-cover`， `loading="lazy"`
- Grid breakpoints: 1 col (mobile) → 2 col (tablet) → 3-4 col (desktop)

---

## 🏗 SITE STRUCTURE (9 Sections)

---

### SECTION 1 — NAVBAR (fixed， smart background)

`` fixed top-0， full-width， z-50， transition-all duration-300.

Inner: `max-w-7xl mx-auto flex items-center justify-between px-6 py-4`.

**Left**: Logo component — inline SVG paw mark (same as Pawsome but with cyan `#00f5d4` glow) + "PetVibe" text in Orbitron， text-2xl， font-heading.

**Center** (hidden mobile， `md:flex`): nav links in `cyber-glass rounded-full px-2 py-1.5`:
- "Home" → `#home`
- "Products" → `#products`
- "Customize" → `#customize`
- "Reviews" → `#reviews`

Each link: `text-sm font-medium text-white/80 px-3 py-1.5 rounded-full hover:bg-white/5 hover:text-white transition-colors`

**Right**: 
- Language switcher: `cyber-glass rounded-full px-3 py-1.5 text-xs` with globe icon， dropdown for EN/ES/DE
- CTA: `GradientButton` size sm "Shop Now" → `#products`

**Scroll behavior**: on scroll > 50， add `bg-[#0a0a0f]/80 backdrop-blur-md`.

---

### SECTION 2 — HERO (min-height 100vh) — id="home"

``， relative， overflow-hidden， min-h-screen， bg-[#0a0a0f].

**Background effects** (absolute inset-0， z-0):
1. Animated gradient orbs:
   - Orb 1: 400×400px radial-gradient cyan → transparent， absolute top-20 left-20， animate pulse 4s
   - Orb 2: 300×300px radial-gradient purple → transparent， absolute bottom-40 right-20， animate pulse 6s
   - Orb 3: 200×200px radial-gradient pink → transparent， absolute top-1/2 left-1/3， animate pulse 5s
2. Subtle grid: `background-image: linear-gradient(rgba(0，245，212，0.03) 1px， transparent 1px)， linear-gradient(90deg， rgba(0，245，212，0.03) 1px， transparent 1px)` with `background-size: 60px 60px`
3. Radial dark overlay for readability

**Background video** (optional enhancement):
- src: `https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/petvibe/hero-video.mp4`
- absolute inset-0， w-full h-full object-cover， opacity-20
- Uses `useLazyVideo` hook (create at `src/hooks/useLazyVideo.ts`， same as Pawsome)
- autoPlay， loop， muted， playsInline

**Content** (z-10， centered， max-w-4xl mx-auto， text-center， pt-40):
- Badge: `SectionBadge` with Sparkles icon + "Personalized with Love"
- Heading: "Your Pet. Their Style. `` Custom Made." — `text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white leading-[0.95] tracking-tight`
  - "Custom Made." text in gradient: `bg-gradient-to-r from-[#00f5d4] via-[#7b61ff] to-[#ff6fd8] bg-clip-text text-transparent`
- Subtext (motion.p， delay 0.5s): "Create one-of-a-kind pet accessories — engraved tags， custom collars， personalized portraits. Worldwide shipping. PayPal & Stripe accepted." — `text-lg text-white/60 font-body max-w-2xl mx-auto`
- CTA row (motion.div， delay 0.8s): 
  - `GradientButton` "Start Customizing" + ArrowRight icon
  - `cyber-glass rounded-full px-6 py-3 text-white/80 hover:text-white transition-colors` "View Products"
- Trust badges (below CTA): `flex items-center justify-center gap-6 mt-10 text-white/40 text-sm`
  - "🛡️ Secure Payment"
  - "🌍 Worldwide Shipping"
  - "⭐ 4.9/5 Rating"

**Animation**: Heading words blur-in (same as Pawsome BlurText component).

---

### SECTION 3 — HOW IT WORKS — id="customize"

``， py-28， relative.

**Header** (centered):
- Badge: SectionBadge with Wand2 icon + "How It Works"
- Heading: "Three Steps to Your Pet's Unique Look" — `text-4xl md:text-5xl font-heading text-white`

**3-Step Process** (`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16`):

Each step card: `cyber-glass p-8 rounded-2xl text-center relative`:

Step 1:
- Icon: `div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00f5d4] to-[#7b61ff] flex items-center justify-center"` + `Upload` icon (lucide-react)， white， w-8 h-8
- Number badge: absolute top-4 right-4， `cyber-glass rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-[#00f5d4]` "1"
- Title: "Upload & Describe" — `text-xl font-heading text-white mt-4`
- Desc: "Upload your pet's photo or describe their personality. Our AI generates customization preview." — `text-white/60 text-sm mt-2`

Step 2:
- Icon: `Palette` icon + gradient purple→pink
- Number badge: "2"
- Title: "Preview & Adjust"
- Desc: "Tweak colors， fonts， and layout. See your design in real-time 3D preview."

Step 3:
- Icon: `Send` icon + gradient pink→cyan
- Number badge: "3"
- Title: "We Craft & Ship"
- Desc: "Premium materials， hand-finished. Ships worldwide in 5-7 days."

**Connecting lines** (desktop only): `hidden md:block absolute top-1/2 left-[calc(33.33%+2rem)] w-[calc(33.33%-4rem)] h-px bg-gradient-to-r from-[#00f5d4] to-[#7b61ff] opacity-30`

---

### SECTION 4 — PRODUCT GRID — id="products"

``， py-28， bg-[#0c0c14] (slightly lighter than pure black).

**Header** (centered):
- Badge: SectionBadge with ShoppingBag icon + "Our Products"
- Heading: "Hand-Crafted Pet Accessories"
- Subtext: "Each piece is made to order， personalized with your pet's name or photo."

**Product Grid** (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16`):

Each product card: `cyber-glass rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0，245，212，0.15)]`:

Upper (image area):
```tsx

  
  

```

Lower (info area): `p-6 space-y-3`
- Tag: `cyber-glass rounded-full px-3 py-0.5 text-xs text-[#00f5d4] inline-block` — "Best Seller" / "New" / "Custom"
- Name: `text-lg font-heading text-white`
- Price: `text-xl font-heading text-[#00f5d4]` — "$24.99"
- Customize button: `GradientButton` "Customize" (small) → opens customization modal

**Products data** (eventually fetch from `/api/products`， hardcode as fallback):
1. Custom Name Collar — $24.99 — image: product-collar.png — tag: "Best Seller"
2. Laser Engraved ID Tag — $19.99 — image: product-tag.png — tag: "New"
3. Personalized Pet Hoodie — $49.99 — image: product-apparel.png — tag: "Popular"
4. Photo Pet Ornament — $34.99 — image: product-ornament.png — tag: ""
5. Custom Printed Frisbee — $29.99 — image: product-toy.png — tag: "Best Seller"
6. Hand-Drawn Portrait Mug — $22.99 — image: product-portrait.png — tag: "New"

---

### SECTION 5 — CUSTOMIZATION MODAL (Product Page Simulation)

When user clicks "Customize" on any product， open a full-screen modal overlay:

``

**Modal content** (`cyber-glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8`):

**Header**: "Customize Your [Product Name]" + close button (X icon)

**Form fields** (vary by product type):
1. Pet Name: `input type="text"` with cyber-glass styling， placeholder "e.g. Biscuit"
2. Font Style: 3-option radio group with preview (Classic Serif / Modern Sans / Playful Script)
3. Color: color picker or 4-option preset swatches
4. Upload Photo: drag-and-drop zone with preview thumbnail
5. Special Instructions: `textarea`， optional
6. Quantity: number input， min 1

**Live Preview** (right side on desktop， below form on mobile):
- `cyber-glass rounded-2xl p-4` containing preview render
- "Preview updates in real-time" indicator
- Estimated delivery: "5-7 business days"

**Footer**: 
- Total price (updates with quantity)
- `GradientButton` "Add to Cart — ${total}" 
- `text-sm text-white/40 text-center w-full mt-3` "Secure checkout with PayPal or Stripe"

**On "Add to Cart"**: 
- POST to `/api/cart/add` (Edge Function)
- Show success toast: "Added! Continue shopping or View Cart"
- Toast: `cyber-glass rounded-xl px-4 py-3 flex items-center gap-3 fixed bottom-6 right-6 z-50`

---

### SECTION 6 — FEATURES GRID

`py-28`， centered.

Header: Badge "Why PetVibe" + Heading "Made for Pet Lovers， by Pet Lovers"

**4-column grid** (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`):

Each card: `cyber-glass p-6 rounded-2xl`:
- Icon in gradient circle (w-12 h-12)
- Title: `text-lg font-heading text-white`
- Description: `text-sm text-white/60`

Cards:
1. Shield icon → "Secure Payments" → "PayPal & Stripe integration. 100% secure checkout."
2. Globe icon → "Worldwide Shipping" → "Ships to 50+ countries. DHL/UPS tracked delivery."
3. Sparkles icon → "AI Design Preview" → "See your custom design in real-time 3D before ordering."
4. HeartHandshake icon → "Satisfaction Guaranteed" → "Not happy? Full refund within 30 days."

---

### SECTION 7 — CUSTOMER REVIEWS — id="reviews"

``， py-28， bg-[#0c0c14].

Header (centered):
- Badge: SectionBadge with Star icon + "Customer Reviews"
- Heading: "Loved by Pet Parents Worldwide"
- Subtext: "4.9/5 stars from 2，000+ happy customers"

**Reviews Grid** (`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto`):

Each review: `cyber-glass p-6 rounded-2xl`:
- Stars row: 5 gold stars (Star icon， fill `#fbbf24`)
- Text: `text-white/80 text-sm italic font-body leading-relaxed`
- Customer: avatar circle (gradient) + name + pet name + verified badge

Reviews:
1. "The engraved tag I ordered for Luna arrived in 5 days. The quality is incredible — the lettering is deep and crisp. She gets compliments every walk!" — Sarah M.， Luna's mom ✓ Verified Buyer
2. "I was skeptical about ordering a custom portrait mug online， but the AI preview was spot-on. The final product made me tear up. Worth every penny." — Marco R.， Biscuit's dad ✓ Verified Buyer
3. "Ordered 3 customized collars for my pack. The colors are vibrant， the hardware feels premium， and the personalization is perfect. Shipping to Germany was super fast!" — Julia K.， Mom of 3 ✓ Verified Buyer

---

### SECTION 8 — CTA + PAYMENT INFO

py-28， relative， overflow-hidden.

Background: same animated gradient orbs as hero， but slower animation.

Content (centered， max-w-3xl mx-auto):
- Heading: "Ready to Create Something Special?" — `text-5xl md:text-6xl font-heading text-white`
- Subtext: "Join 2，000+ pet parents who've created one-of-a-kind accessories their pets wear with pride."
- `GradientButton` "Start Customizing Now" (large)
- Payment method icons row (below CTA): flex row with PayPal logo， Stripe logo， and "🔒 SSL Secured" badge
  - PayPal/Sripe logos: use inline SVG or reference CDN URLs for payment icons
  - Container: `cyber-glass rounded-full px-6 py-3 flex items-center gap-4 mt-8`

---

### SECTION 9 — FOOTER — id="contact"

`border-t border-white/10 pt-16 pb-8`:

**Top row** (`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6`):
1. Brand: Logo + "PetVibe — where every pet's personality shines through custom-crafted accessories." — `text-sm text-white/50`
2. Quick Links: "Products"， "Customize"， "Shipping Info"， "FAQ" — each as `#anchor` links
3. Support: "Contact Us"， "Returns"， "Size Guide"， "Track Order"
4. Newsletter: "Get 10% off your first order" — email input + `GradientButton` "Subscribe" (small)

**Bottom bar** (`max-w-7xl mx-auto flex items-center justify-between pt-8 border-t border-white/5 mt-8`):
- Left: `© {new Date().getFullYear()} PetVibe. All rights reserved.`
- Right: flag icons for EN/ES/DE + social icons (Instagram， TikTok， Pinterest — lucide-react icons in `cyber-glass rounded-full w-10 h-10 flex items-center justify-center`)

---

## 🔧 EDGE FUNCTIONS

Create these Edge Function endpoints (file-based routing in `edge-functions/api/`):

### `GET /api/products`
Return JSON array of all products (name， price， image， description， tags).
```js
export function onRequestGet() {
  const products = [
    { id: 'collar-001'， name: 'Custom Name Collar'， price: 2499， image: '...'， description: '...'， tags: ['bestseller'] }，
    // ...
  ];
  return new Response(JSON.stringify(products)， {
    headers: { 'Content-Type': 'application/json'， 'Cache-Control': 's-maxage=60' }
  });
}
```

### `POST /api/cart/add`
Accept `{ productId， customization: { petName， fontStyle， color， photoUrl }， quantity }`.
Store in KV Storage (key: `cart:{sessionId}`).
Return `{ success: true， cartId， itemCount }`.

### `POST /api/orders/create`
Accept order data， generate order ID， return `{ orderId， paypalCheckoutUrl }`.

### `GET /api/health`
Return `{ ok: true， timestamp: Date.now() }`.

---

## 💳 CLOUD FUNCTIONS (Node.js) — Payment Integration

Create `cloud-functions/api/[[default]].js` using **Express** framework:

```js
// cloud-functions/api/[[default]].js
import express from 'express';
import { PayPalClient， Stripe } from '...'; // actual imports from npm

const app = express();
app.use(express.json());

// Create PayPal order
app.post('/api/payments/paypal/create'， async (req， res) => {
  // PayPal SDK integration
  // Return approval_url for frontend redirect
});

// PayPal webhook
app.post('/api/payments/paypal/webhook'， async (req， res) => {
  // Verify webhook signature
  // Update order status in KV
});

// Create Stripe Checkout Session
app.post('/api/payments/stripe/create'， async (req， res) => {
  // Stripe SDK integration
  // Return session.url for redirect
});

// Stripe webhook
app.post('/api/payments/stripe/webhook'， async (req， res) => {
  // Verify Stripe signature
  // Update order status
});

export default function onRequest(ctx) {
  return app(ctx.request， ctx.request);
}
```

**Payment Integration Notes:**
- PayPal: Use `@paypal/sdk-client` (frontend) + PayPal REST API (backend)
- Stripe: Use `@stripe/stripe-js` (frontend) + `stripe` npm package (backend)
- Store API keys in EdgeOne Pages console environment variables (`PAYPAL_CLIENT_ID`， `STRIPE_SECRET_KEY`)
- Access via `context.env.VARIABLE_NAME` in Cloud Functions (Node.js)

---

## 🗄 KV STORAGE

**Prerequisite**: Enable KV Storage in EdgeOne Pages console， create namespace `petvibe-kv`， bind to variable name `petvibe_kv`.

**Usage**:
- Cart data: `petvibe_kv.put('cart:{sessionId}'， JSON.stringify(cartItems))`
- Order status: `petvibe_kv.put('order:{orderId}'， JSON.stringify(orderData))`
- Site analytics: `petvibe_kv.get('stats:visits')` → increment on each visit

**KV is a global variable**， NOT on `context.env`:
```js
// ✅ Correct
export async function onRequest() {
  const visits = await petvibe_kv.get('stats:visits') || '0';
  await petvibe_kv.put('stats:visits'， String(Number(visits) + 1));
  return new Response(JSON.stringify({ visits: Number(visits) + 1 })， {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

---

## 🌍 I18N (Multi-language)

Use `react-i18next`:

`src/i18n/config.ts`:
```ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      hero_title: 'Your Pet. Their Style. Custom Made.'，
      customize_cta: 'Start Customizing'，
      // ...
    }
  }，
  es: { translation: { /* Spanish */ } }，
  de: { translation: { /* German */ } }，
};

i18n.use(initReactI18next).init({
  resources，
  lng: 'en'，
  fallbackLng: 'en'，
  interpolation: { escapeValue: false }
});

export default i18n;
```

Language switcher in Navbar cycles through `i18n.changeLanguage('es')` etc.

---

## ⛔ NON-NEGOTIABLE RULES

1. **NO** overlapping collage layouts
2. **NO** negative margins for decorative offset
3. **NO** neon colors that hurt readability (keep neon as glow/accent only)
4. **NO** floating elements that break grid alignment
5. **NO** `position: absolute` for main content (backgrounds only)
6. **NO** hardcoded product data in production — use `/api/products` Edge Function
7. **NO** storing API secrets in frontend code — use EdgeOne Pages environment variables
8. **NO** `Response.json()` in Edge Functions — use `new Response(JSON.stringify(...))`
9. **NO** Node.js built-ins in Edge Functions — use Web APIs only
10. **ALL** images must have `alt` text for accessibility
11. **ALL** interactive elements must have visible focus states
12. **ALL** animations must respect `prefers-reduced-motion`

---

## 📦 DEPLOYMENT

### Environment Setup
```bash
export PAGES_SOURCE=skills
```

### Install Skill
Before deployment， install the EdgeOne Pages skill:
```
https://github.com/TencentEdgeOne/edgeone-pages-skills
```

### Steps
1. `edgeone pages init` — initialize project
2. `edgeone pages link` — link to EdgeOne Pages project (required for KV)
3. `edgeone pages dev` — local development on `http://localhost:8088`
4. Set environment variables in EdgeOne Pages console: `PAYPAL_CLIENT_ID`， `STRIPE_SECRET_KEY`， `JWT_SECRET`
5. Enable KV Storage in console， create namespace `petvibe-kv`， bind to project
6. `edgeone pages deploy` — deploy to EdgeOne Pages

### After Deployment
1. Verify `/api/products` returns product data
2. Test customization form → cart → checkout flow
3. Verify PayPal/Stripe payment redirect works (use sandbox mode first)
4. Return **live preview URL** and **EdgeOne console URL** to user

---

## 🎨 ANIMATION SPECIFICATIONS

- **Hero heading**: BlurText (blur 10px → 0px， word-by-word， 100ms delay each)
- **Section entries**: `whileInView`， y: 40 → 0， opacity 0 → 1， duration 0.6s， once: true
- **Product cards**: staggered delay 0 / 0.1 / 0.2s per card
- **Hover effects**: translateY -4px， shadow glow， duration 0.3s
- **Gradient orbs**: CSS animation `pulse` 4-6s， `animate-pulse` with custom timing
- **No bounce effects**. Ever. Premium = smooth， not playful.

---

## ✅ FINAL QUALITY BAR

The result must look like:
- A premium cross-border e-commerce brand homepage
- Dark， cyberpunk-lite aesthetic with warm pet-friendly vibe
- Production-grade: accessible， performant， responsive
- Structurally stable across all screen sizes
- Integrated with real payment APIs (PayPal + Stripe sandbox)

The result must NOT look like:
- A generic e-commerce template with pet images
- A heavy cyberpunk site that's hard to read
- A tech demo without real commerce functionality
- A pure frontend demo (must have real Edge/Cloud Functions)

---

## 🚀 COMPLETE PROMPT (Copy from here for AI tools)

> **Copy everything below this line into WorkBuddy / Claude Code / Cursor**

```

[The entire content above， from "Build a single-page..." through the quality bar， is the complete prompt.]

```

````
