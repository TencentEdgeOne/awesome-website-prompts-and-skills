---
name: edgeone-pages-website-skeleton
description: >-
  基于 EdgeOne Pages 的全栈网站生成方案。用户说一句话（如「帮我建一个电商站」「做一个AI客服站」「做个管理后台」），AI 自动组合 Auth、Cart、Payment、AI Chat、Admin 五大模块，生成完整 Next.js 前后端代码并部署到 EdgeOne Pages 全球 CDN。支持电商、AI 助手、SaaS 管理后台三大模板。底层使用 Edge Functions（KV 存储、JWT 校验）+ Cloud Functions（bcrypt、MySQL、微信/支付宝支付、SSE 流式 AI）+ Platform Middleware（鉴权、CORS、CSP、支付回调 IP 白名单）。支持支付幂等原子锁、订单超卖防护、Refresh Token 并发安全等 P0 安全设计。

  触发场景：
  "帮我建一个电商网站"、"帮我建一个AI客服站"、"做个带登录的电商站"、"建一个全栈网站"、
  "帮我做一个带支付功能的网站"、"做一个电商站，包含登录注册、购物车、微信支付宝支付"、
  "Build me an e-commerce website"、"Create an AI customer service site with login"、
  "Make a SaaS admin dashboard"、"建一个网站，登录注册、AI客服、支付全要"
metadata:
  author: liuboacean
  version: "2.1.0"
  demo: https://geek-mall-demo-4qaxvmeh.edgeone.cool
---

# Website Skeleton Skill — EdgeOne Pages 全栈网站骨架

Scaffold and deploy a production-ready full-stack website on EdgeOne Pages from a single natural language request.

## When to use this skill

- User wants to **start a new full-stack website** (e-commerce, AI chatbot, SaaS admin) with zero config
- User mentions: e-commerce, shopping cart, payment, AI chat, admin dashboard, login/register, or similar
- User wants Edge Functions + Cloud Functions + KV + MySQL on EdgeOne Pages

**Do NOT use for:**
- Adding a single API/function to an existing project → use `edgeone-pages-dev`
- Deploying an already-built project → use `edgeone-pages-deploy`
- Pure static sites or blogs without business logic

---

## ⛔ Critical Rules (never skip)

1. **ALWAYS ask the user to confirm the scenario first.** Three built-in templates are available:
   - **E-commerce** (🛒)：Auth + Cart + Payment (WeChat/Alipay) + Orders + Admin
   - **AI Assistant** (🤖)：Auth + AI Chat (SSE streaming) + Admin
   - **SaaS Admin** (📊)：Auth + RBAC Admin + Subscription Payments
2. **Never fabricate the user's requirements.** If information is missing, ask clarifying questions before generating code.
3. **Respect EdgeOne Pages platform constraints:**
   - KV is only accessible from **Edge Functions** (not Cloud Functions)
   - Cloud Functions directory must be named `cloud-functions/`
   - bcrypt must run inside **Cloud Functions**
   - AI SSE streaming must be implemented in **Cloud Functions** (Edge cannot use `waitUntil`)
4. **Payment idempotency is mandatory.** Use Edge `putIfNotExists` with 24h TTL (< WeChat retry window of 72h).
5. **Never commit `.env.local` or any real API keys.** Ensure `.gitignore` covers it.
6. **Always verify EdgeOne Pages CLI is installed** before deployment.

---

## Main Flow

### Step 1 — Confirm scenario

Use `ask_followup_question` to ask:

> 你想要建什么类型的网站？
>
> - **🛒 电商站** — 登录注册、购物车、微信/支付宝支付、订单管理
> - **🤖 AI 客服站** — 登录注册、AI 对话（SSE 流式）、访客留言
> - **📊 SaaS 管理后台** — 登录注册、RBAC 权限、数据看板
> - **⚙️ 自定义** — 自由组合模块

Branch:
- E-commerce → use `references/templates.md` § "电商模板"
- AI Assistant → use `references/templates.md` § "AI助手模板"
- SaaS Admin → use `references/templates.md` § "管理后台模板"
- Custom → confirm which modules are needed

### Step 2 — Collect requirements

Read `references/templates.md` and confirm with user:
1. Site name / domain
2. Which modules to enable (Auth always required)
3. Payment providers (WeChat / Alipay / Both / None)
4. AI provider (if AI Chat enabled)

Output: a **Spec object**
```json
{
  "scenario": "e-commerce | ai-assistant | saas-admin | custom",
  "siteName": "...",
  "modules": ["auth", "cart", "payment", "ai-chat", "admin"],
  "paymentProviders": ["wx", "ali"],
  "aiProvider": "openai | hunyuan | none",
  "envVars": ["JWT_SECRET", "DATABASE_URL", ...]
}
```

Show the Spec back and ask for confirmation.

### Step 3 — Generate project structure

Based on the selected template, generate the following directory tree:

```
<project>/
├── client/                     # Next.js frontend (SPA)
│   ├── app/ (pages: login, register, cart, checkout, orders, admin/*)
│   ├── lib/ (api client, auth service, cart service, SSE client)
│   └── middleware (optional, for pure SPA)
├── edge-functions/            # Edge Functions (V8 + KV)
│   ├── _middleware.js         # JWT check + KV session + rate limit
│   └── api/
│       ├── auth/login.js     # JWT issue + KV session
│       ├── auth/me.js        # KV session read
│       ├── auth/refresh.js   # RT rotation with KV version lock
│       ├── auth/logout.js
│       ├── internal/idempotency.js  # Edge atomic idempotency lock ← P0
│       ├── products/list.js  # KV cache + MySQL fallback
│       ├── cart/*.js         # KV cart
│       ├── orders/list.js    # MySQL read
│       └── ai/history.js     # KV AI session history
├── cloud-functions/          # Cloud Functions (Node.js + MySQL)
│   ├── api/
│   │   ├── auth/register.js  # bcrypt cost=12 ← P0
│   │   ├── pay/create-order.js
│   │   ├── pay/wx-notify.js  # Edge idempotency lock ← P0
│   │   ├── pay/ali-notify.js
│   │   ├── order/create.js   # SELECT FOR UPDATE ← P0
│   │   ├── order/cancel.js
│   │   ├── admin/products.js
│   │   └── ai/chat-stream.js  # SSE streaming ← AI module
│   └── utils/
│       ├── db.js             # MySQL pool (mysql2/promise)
│       └── payment-sdk.js    # WeChat V3 / Alipay SDK
├── db/
│   ├── migrations/001_init.sql  # users, products, orders, order_items
│   └── seed.sql
├── docs/
│   └── env-vars.md           # Environment variable matrix
└── references/
    └── auth-module.md / payment-module.md / ai-chat-module.md / kv-storage.md
```

Generate each file according to `references/` documents.

### Step 4 — Environment variables

Read `references/env-setup.md` (or inline from SKILL.md § Environment Variables) and:
1. List all required env vars for the selected modules
2. Ask user to provide values (or provide placeholder examples)
3. Remind: **never commit `.env.local`**

### Step 5 — Local verification

Guide user to run locally:
```bash
npm run dev   # Next.js on http://localhost:3000
```

Verify:
- Homepage renders
- Auth signup/login works
- Selected modules (cart / payment / AI chat) are functional

### Step 6 — Deploy to EdgeOne Pages

**6.1 — Check `edgeone-pages-deploy` skill**

Check if `~/.codebuddy/skills/edgeone-pages-deploy/` exists (or Windows equivalent). If yes → go to 6.2. If no → go to 6.3.

**6.2 — Hand off to deploy skill**

> ✅ 项目已就绪，本地跑通后随时可以部署。
>
> 告诉 AI **「部署到 EdgeOne Pages」**，会自动加载 `edgeone-pages-deploy` skill 完成上线。

**6.3 — Manual deploy**

```bash
# Install CLI (first time)
npm install -g edgeone@latest

# Login
edgeone login --site china

# Deploy
cd <project>
edgeone pages deploy -n <project-name>
```

> ⚠️ The final URL contains `eo_token` / `eo_time` query params — **must be kept**, removing them causes 401.

---

## Routing

| Step | Read |
|------|------|
| Scenario confirmation + module matrix | [references/templates.md](references/templates.md) |
| Auth module (JWT, KV session, bcrypt, RT) | [references/auth-module.md](references/auth-module.md) |
| Payment module (idempotency, WeChat/Alipay, callbacks) | [references/payment-module.md](references/payment-module.md) |
| AI Chat module (SSE, history, streaming) | [references/ai-chat-module.md](references/ai-chat-module.md) |
| KV Storage strategy (single query, layered access) | [references/kv-storage.md](references/kv-storage.md) |

---

## Quick Reference

**Demo:** https://geek-mall-demo-4qaxvmeh.edgeone.cool

**Platform constraints:**
- KV → Edge Functions only
- bcrypt → Cloud Functions only
- AI SSE → Cloud Functions only
- Platform Middleware → CORS, CSP, Bearer check, Payment callback IP whitelist (direct return)

**P0 Security (all implemented):**
- Payment idempotency: Edge `putIfNotExists` (24h TTL)
- Order atomicity: `SELECT FOR UPDATE` + optimistic lock + MySQL CHECK
- RT concurrency: KV version optimistic lock (409 retry)
- Price integrity: Server-side MySQL (never trust frontend price)
- Payment callback isolation: Platform Middleware direct return
- Password: bcrypt cost ≥ 12

**Template repos:** https://github.com/TencentEdgeOne/edgeone-pages-skills


---

## ⚠️ 安全与合规说明

### 1. 部署确认机制
AI Agent 部署前会显示待部署文件清单和变更概要，请求用户确认后执行部署。

### 2. 支付安全
- 支付回调实现 HMAC-SHA256 签名验证（微信官方算法）
- 校验 appid/mchid 商户身份一致性
- 校验回调金额与订单金额完全匹配
- 仅接受 result_code=SUCCESS 的交易状态
- KV 幂等锁防止重复回调处理

### 3. 数据保留策略
| 数据类型 | 存储位置 | 保留期限 |
|---------|---------|---------|
| KV Session | EdgeOne KV | 7 天 TTL |
| AI 聊天历史 | EdgeOne KV | 30 天 TTL |
| 审计日志 | EdgeOne KV | 90 天 TTL |
| 订单数据 | MySQL | 永久（业务必需）|

### 4. Cron 定时任务
- PENDING 超时 30 分钟 → CANCELLED
- SHIPPED 超过 7 天 → COMPLETED
- 提供一键禁用脚本 `cloud-functions/cron/disable-cron.js`

### 5. 使用建议
- 在测试项目中验证全部功能
- 使用测试/沙箱商户号
- 部署前审查生成的代码和环境变量
- 启用真实支付前完成签名验证测试
