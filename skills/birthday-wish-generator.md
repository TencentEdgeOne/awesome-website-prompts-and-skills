# Birthday Wish Generator

> **赛道**：Skill　**作者**：qjh
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Birthday Wish Generator demo](../assets/demos/birthday-wish-generator.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/birthday-wish-generator.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Birthday Wish Generator |
| 赛道 | Skill |
| 作者 | qjh |

## 📝 作品介绍

作品名称
Birthday Wish Generator — 在线生日祝福生成器

核心价值
将生日祝福从干瘪的「微信文字消息」升级为 可分享的、有温度的、独一无二的互动祝福页面。用户无需任何设计能力，选模板、填内容、一键生成精美祝福卡，通过链接即可送达心意。同时借助腾讯云 EdgeOne Pages 边缘计算平台，实现 零服务器、零运维、全球 CDN 加速 的极简架构。

适用场景
场景	说明
家人朋友生日祝福	选一个主题模板，写下真心话，生成专属页面分享到微信
情人纪念日表白	复用模板创建纪念日祝福，支持设置过期时间
团队员工生日关怀	团队管理者批量创建祝福，每位员工收到专属链接
个人创作展示	前端开发者展示纯原生 JS + 边缘云函数的全栈能力
亮点功能
1. 6 套精美主题模板 Elegant 奢华、Playful 活泼、Floral 浪漫、Cosmic 星空、Vintage 复古、Minimalist 极简 — 每套模板都有独立的配色、字体、动效和粒子特效。

2. 一键生成可分享链接 填写收件人姓名、祝福语、署名后即刻生成祝福页，通过链接分享，对方无需注册即可查看。

3. 用户个人仪表盘 登录后查看所有已创建的卡片，实时统计浏览量和点赞数，支持删除管理。

4. 边缘节点全球加速 基于 EdgeOne Pages 云函数 + KV 存储，所有 API 在边缘节点执行，毫秒级响应，无冷启动服务器瓶颈。

5. 安全认证体系 SHA-256 密码加密存储、Token 签名认证（7天有效期）、资源所有者权限校验（只能管理自己的卡片）。

6. 点赞互动与浏览计数 祝福页支持点赞功能（自动去重），每次被查看自动累计浏览量，让发送者知道心意被收到了。

技术架构亮点
纯前端零框架：HTML5 + CSS3 + Vanilla JS，无 React/Vue 依赖，极致轻量
EdgeOne 全栈：Pages 静态托管 + Cloud Functions 云函数 + KV 键值存储，一个平台搞定前后端
Vite 工程化：多页面构建 + 自定义 copyStaticAssets 插件，标准化开发流程
8 个 RESTful API：完整的用户系统、卡片 CRUD、点赞系统

---

## 🚀 完整 Skill 说明

````
/---
name: birthday-wishes-website
description: >-
  Build a birthday wishes website with beautiful templates， user authentication， and blessing functionality on EdgeOne Pages.
  Use when user wants to create a birthday celebration website， birthday greeting cards， or birthday-related web app.
  Examples: "create a birthday wishes website"， "build a birthday greeting card site"， "创建生日祝福网站"， "做一个生日祝福页面生成器".
  Do NOT trigger for simple static birthday pages or pure frontend animation demos.
metadata:
  author: user
  version: "2.0.0"
---

# Birthday Wishes Website Builder (EdgeOne Pages)

Build a full-stack birthday wishes website on **EdgeOne Pages** with Cloud Functions + KV Storage.Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills.

## ⛔ Critical Rules (MUST follow)

1. **KV is a global variable** — Access KV bindings directly as global variables， NOT via `context.env`
2. **KV keys: underscore only** — Keys must be `user_xxx`， `page_xxx`; colons/slashes cause runtime errors
3. **Bearer token auth** — Frontend sends `Bearer`， backend must check AND extract with `Bearer ` prefix
4. **Field name consistency** — Frontend and backend MUST use identical field names
5. **`edgeone pages dev`** — Requires TTY; use `npx edgeone pages dev` in terminal， not in CI
6. **Vite copyStaticAssets** — Must copy `templates/`， `css/`， `js/` to `dist/` via custom Vite plugin
7. **`edgeone.json` functions.directory** — Set to `"cloud-functions"` (NOT `"node-functions"`)
8. **Test locally first** — Write test scripts before deploying (see Testing section)

---

## Technology Stack

| Layer | Tech |
|-------|------|
| Frontend | HTML + CSS + Vanilla JS (no framework) |
| Build | Vite |
| Backend | EdgeOne Pages Cloud Functions (Node.js) |
| Storage | EdgeOne Pages KV |
| Deploy | EdgeOne Pages |

---

## Project Structure

```
birthday-wishes/
├── index.html              # Homepage with template selection
├── dashboard.html          # User's card management dashboard
├── page.html               # View a birthday card (by ?id=)
├── package.json
├── vite.config.js          # MUST include copyStaticAssets plugin
├── edgeone.json            # functions.directory: "cloud-functions"
├── css/
│   └── style.css
├── js/
│   ├── main.js             # Homepage logic
│   ├── auth.js             # Login/register modal
│   ├── api.js              # API client class
│   └── dashboard.js        # Dashboard logic
├── templates/
│   ├── elegant.html
│   ├── playful.html
│   ├── minimalist.html
│   ├── floral.html
│   ├── cosmic.html
│   └── vintage.html
└── cloud-functions/
    └── api/
        ├── auth/
        │   ├── register.js
        │   └── login.js
        ├── pages/
        │   ├── create.js
        │   ├── list.js
        │   ├── get/[id].js
        │   ├── update/[id].js
        │   └── delete/[id].js
        └── likes/
            ├── add.js
            └── get/[pageId].js
```

---

## EdgeOne Pages KV — Pitfall Reference

### ✅ Correct: KV is a global variable

```javascript
// Cloud Functions access KV via global variable (injected by EdgeOne runtime)
export async function onRequestPost(context) {
  const kv = birthday_kv; // ✅ Global variable， matching edgeone.json binding name
  await kv.get('user_test');
  await kv.put('user_test'， JSON.stringify(data));
}
```

### ❌ WRONG: Accessing via context.env

```javascript
// context.env only contains system env vars (PATH， NODE_PATH， etc.)
// KV binding is NOT in context.env!
const kv = context.env.birthday_kv; // ❌ UNDEFINED!
```

### ✅ KV Key format: underscore only

```javascript
// ✅ Correct keys
await birthday_kv.put('user_test'， '...');
await birthday_kv.put('page_abc123'， '...');
await birthday_kv.put('likes_page_abc123'， '...');

// ❌ WRONG — will throw "Key can only contain letters， numbers， and underscores"
await birthday_kv.put('user:test'， '...');  
   // colon not allowed
await birthday_kv.put('page/abc'， '...');     // slash not allowed
```

### KV API

```javascript
await birthday_kv.get(key)             
   // returns string or null
await birthday_kv.get(key， 'json')     
   // auto-parse JSON
await birthday_kv.put(key， value)      
   // value: string， max 25MB
await birthday_kv.delete(key)
await birthday_kv.list({ prefix， limit， cursor })
```

---

## Cloud Functions — Correct Patterns

### Token Authentication Pattern

```javascript
export async function onRequestPost(context) {
  const request = context.request;

  // 1. Validate Authorization header
  const authHeader = request.headers.get('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return json({ success: false， message: '未授权' }， 401);
  }

  // 2. Extract token — use SAME prefix as validation!
  const token = authHeader.replace('Bearer '， '');  // NOT 'Basic '!

  // 3. Parse and validate token
  let tokenData;
  try {
    tokenData = JSON.parse(atob(token));
  } catch (e) {
    return json({ success: false， message: 'Token 无效' }， 401);
  }

  if (tokenData.exp  b.toString(16).padStart(2， '0'))
    .join('');
}
```

### Dynamic Route Params

```javascript
// File: cloud-functions/api/pages/get/[id].js
export async function onRequestGet(context) {
  const pageId = context.params.id;  // from URL path
  const pageData = await birthday_kv.get(`page_${pageId}`);
  // ...
}
```

---

## edgeone.json Configuration

```json
{
  "name": "birthday-wishes"，
  "version": "1.0.0"，
  "build": {
    "command": "npm run build"，
    "output": "dist"
  }，
  "functions": {
    "directory": "cloud-functions"
  }
}
```

> ⚠️ `functions.directory` must be `"cloud-functions"`， NOT `"node-functions"` or `"edge-functions"`

---

## Vite Config — copyStaticAssets Plugin

```javascript
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { cpSync } from 'fs';

function copyStaticAssets() {
  return {
    name: 'copy-static-assets'，
    closeBundle() {
      const dirs = ['css'， 'js'， 'templates'];
      for (const dir of dirs) {
        try {
          cpSync(resolve(__dirname， dir)， resolve(__dirname， 'dist/' + dir)， { recursive: true });
          console.log('✓ 已复制 ' + dir + '/ 到 dist/');
        } catch (err) {
          console.warn('⚠ 复制 ' + dir + '/ 失败:'， err.message);
        }
      }
    }，
  };
}

export default defineConfig({
  root: '.'，
  build: {
    outDir: 'dist'，
    rollupOptions: {
      input: {
        main: resolve(__dirname， 'index.html')，
        dashboard: resolve(__dirname， 'dashboard.html')，
        page: resolve(__dirname， 'page.html')，
      }，
    }，
  }，
  plugins: [copyStaticAssets()]，
});
```

> ⚠️ Forgetting to copy `templates/` causes 404 errors for template HTML files

---

## Frontend API Client Pattern

```javascript
class BirthdayAPI {
  constructor() {
    this.API_BASE = '/api';
  }

  // Public: no auth needed
  async register(username， password) {
    return fetch(`${this.API_BASE}/auth/register`， {
      method: 'POST'，
      headers: { 'Content-Type': 'application/json' }，
      body: JSON.stringify({ username， password })，
    }).then(r => r.json());
  }

  async login(username， password) {
    return fetch(`${this.API_BASE}/auth/login`， {
      method: 'POST'，
      headers: { 'Content-Type': 'application/json' }，
      body: JSON.stringify({ username， password })，
    }).then(r => r.json());
  }

  // Authenticated: must send Bearer token
  async createPage(pageData) {
    const token = localStorage.getItem('auth_token');
    if (!token) return { success: false， message: '请先登录' };
    return fetch(`${this.API_BASE}/pages/create`， {
      method: 'POST'，
      headers: {
        'Content-Type': 'application/json'，
        'Authorization': `Bearer ${token}`，
      }，
      body: JSON.stringify(pageData)，
    }).then(r => r.json());
  }

  // List pages: must pass username as query param
  async listPages() {
    const token = localStorage.getItem('auth_token');
    const username = localStorage.getItem('auth_username');
    if (!token) return { success: false， message: '请先登录' };
    return fetch(`${this.API_BASE}/pages/list?username=${encodeURIComponent(username)}`， {
      headers: { 'Authorization': `Bearer ${token}` }，
    }).then(r => r.json());
  }
}

window.birthdayAPI = new BirthdayAPI();
```

---

## KV Storage Setup (MUST do before coding)

1. Login to [EdgeOne Pages Console](https://console.cloud.tencent.com/edgeone/pages)
2. Navigate to **KV Storage** → Click **Apply Now** (free: 1GB)
3. Click **Create Namespace** (e.g.， `birthday_kv`)
4. **Bind** namespace to project， set variable name (e.g.， `birthday_kv`)
5. This variable name becomes the global variable in Cloud Functions

---

## Local Testing

### Option 1: edgeone pages dev (requires TTY)
```bash
npx edgeone pages dev
# Runs on localhost:8088 with KV bindings
```

### Option 2: Test script (no TTY needed)
Create `test-api.mjs` to mock KV and test all endpoints:
```javascript
// Mock KV
const kv = new Map();
globalThis.birthday_kv = {
  async get(k) { return kv.get(k) || null; }，
  async put(k， v) { kv.set(k， v); }，
  async delete(k) { kv.delete(k); }，
  async list(opts) { /* ... */ }，
};

// Import and test each function
```

Run: `node test-api.mjs`

---

## Deployment

```bash
# Install EdgeOne CLI locally (avoids PATH issues)
npm install edgeone --save-dev

# Login (first time only)
npx edgeone login --site china

# Link to remote project
npx edgeone pages link

# Build + Deploy
npm run build
npx edgeone pages deploy
```

---

## Common Pitfalls (learned from real deployment)

| # | Pitfall | Symptom | Fix |
|---|---------|---------|-----|
| 1 | KV accessed via `context.env` | 500: Cannot read properties of undefined | Use global `birthday_kv` directly |
| 2 | KV key contains `:` or `/` | 500: Key can only contain letters， numbers， underscores | Use underscore: `user_xxx` |
| 3 | Auth checks `Basic`， extracts `Bearer` | 401: Token 无效 | Use same prefix everywhere |
| 4 | Frontend sends `recipientName`， backend expects `title` | 400: 标题不能为空 | Align field names |
| 5 | `vite.config.js` missing `templates/` copy | 404 for template HTML | Add to `copyStaticAssets` |
| 6 | `list` API missing `username` param | 400: 缺少用户名参数 | Add `?username=xxx` to fetch URL |
| 7 | `edgeone.json` wrong `functions.directory` | Functions not found | Set to `"cloud-functions"` |
| 8 | `edgeone pages dev` in non-TTY | Hangs or error | Use terminal directly， or write test script |

---

## Template Design

| Template | Style | Colors |
|----------|-------|--------|
| elegant | Serif fonts， subtle fade | Dark slate + purple + gold |
| playful | Rounded sans， bouncing | Pink + purple + rainbow |
| minimalist | Clean， whitespace | White + gray + single accent |
| floral | Handwritten， petals | Soft pink + green + pastel |
| cosmic | Space theme， stars | Dark blue + purple + white |
| vintage | Nostalgic， warm | Cream + brown + amber |

Each template reads page data from URL params or API and renders accordingly.

---

## References

- [EdgeOne Pages KV Storage](https://pages.edgeone.ai/zh/document/kv-storage)
- [EdgeOne Pages Cloud Functions](https://pages.edgeone.ai/zh/document/cloud-functions)
- [EdgeOne CLI npm](https://www.npmjs.com/package/edgeone)
- [EdgeOne Pages Docs](https://pages.edgeone.ai/zh/document)

````
