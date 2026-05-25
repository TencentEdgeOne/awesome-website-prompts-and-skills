# Auth & JWT — 邮箱密码登录与 JWT 鉴权完整方案

> **何时加载本文件**：用户的请求涉及登录、注册、鉴权、密码、token、JWT、Session、保护管理后台、限制访问等。
>
> **核心原则**：本方案只用 Edge Functions 原生能力 + KV Storage，**零 npm 依赖**——这是 EdgeOne Pages Edge Functions 运行时的硬约束（V8 隔离环境，不支持 Node.js 模块）。

---

## 一、整体架构

```
用户访问 /admin
  ↓
_middleware.js 拦截 → 检查 Cookie 里的 portfolio_token
  ↓
有 token + 验证通过 → 放行
没 token / 验证失败 → 重定向到 /login.html
  ↓
用户在 /login 提交邮箱密码
  ↓
POST /api/auth (action: 'login')
  ↓
auth.js 验证：
  1. 查 PORTFOLIO_USERS KV 拿 user record
  2. 用 Web Crypto API 比对密码 hash
  3. 用 Web Crypto API 签发 JWT
  4. Set-Cookie: portfolio_token=xxx; HttpOnly; SameSite=Strict
  ↓
前端跳转 /admin.html
```

---

## 二、KV 数据结构

### `PORTFOLIO_USERS` 命名空间

```
key: user:{email}              # 例如 user:admin@portfolio.local
value: {
  "email": "admin@portfolio.local",
  "passwordHash": "base64(SHA-256(password + salt))",
  "salt": "base64(16 bytes random)",
  "role": "admin",
  "createdAt": 1730000000000,
  "lastLoginAt": 1730000000000
}
```

### 首次部署时自动创建默认管理员

部署完成后第一次访问 `/api/auth?init=true`，如果 KV 里没有任何 user 记录，则：

1. 生成随机 12 位密码（包含字母 + 数字）
2. 哈希后写入 `PORTFOLIO_USERS`
3. 在响应里**仅一次性**返回明文密码给用户
4. 后续访问该端点直接返回 `{ error: 'already initialized' }`

---

## 三、完整代码

### functions/api/auth.js

```javascript
/**
 * Portfolio Auth API
 * 路由：
 *   POST /api/auth { action: 'login', email, password }      → 登录
 *   POST /api/auth { action: 'changePassword', oldPw, newPw } → 改密码（需登录）
 *   GET  /api/auth?init=true                                  → 首次部署初始化
 *   GET  /api/auth?action=me                                  → 检查当前登录状态
 *   POST /api/auth { action: 'logout' }                       → 登出
 */

// === 工具函数 ===

const enc = new TextEncoder();
const dec = new TextDecoder();

// SHA-256 哈希 → base64
async function sha256base64(text) {
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(text));
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}

// 生成随机字节 → base64
function randomBase64(byteLen) {
  const arr = new Uint8Array(byteLen);
  crypto.getRandomValues(arr);
  return btoa(String.fromCharCode(...arr));
}

// 生成随机密码（12 位字母+数字）
function generatePassword() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  const arr = new Uint8Array(12);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => chars[b % chars.length]).join('');
}

// 密码哈希（password + salt → hash）
async function hashPassword(password, salt) {
  return await sha256base64(password + ':' + salt);
}

// === JWT 实现（HS256，无依赖）===

// base64url 编码
function b64urlEncode(input) {
  let s = typeof input === 'string'
    ? btoa(input)
    : btoa(String.fromCharCode(...new Uint8Array(input)));
  return s.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function b64urlDecode(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return atob(s);
}

// HMAC-SHA256 签名
async function hmacSign(data, secret) {
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return b64urlEncode(sig);
}

async function signJWT(payload, secret) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const headerB64 = b64urlEncode(JSON.stringify(header));
  const payloadB64 = b64urlEncode(JSON.stringify(payload));
  const sig = await hmacSign(`${headerB64}.${payloadB64}`, secret);
  return `${headerB64}.${payloadB64}.${sig}`;
}

async function verifyJWT(token, secret) {
  try {
    const [headerB64, payloadB64, sigGiven] = token.split('.');
    if (!headerB64 || !payloadB64 || !sigGiven) return null;
    
    const expectedSig = await hmacSign(`${headerB64}.${payloadB64}`, secret);
    if (sigGiven !== expectedSig) return null;
    
    const payload = JSON.parse(b64urlDecode(payloadB64));
    if (payload.exp && Date.now() / 1000 > payload.exp) return null;  // 过期
    return payload;
  } catch (e) {
    return null;
  }
}

// === Cookie 工具 ===

function getCookie(request, name) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(new RegExp(`(^|; )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, options = {}) {
  const parts = [`${name}=${encodeURIComponent(value)}`];
  if (options.maxAge) parts.push(`Max-Age=${options.maxAge}`);
  if (options.path) parts.push(`Path=${options.path}`);
  if (options.httpOnly) parts.push('HttpOnly');
  if (options.secure) parts.push('Secure');
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);
  return parts.join('; ');
}

// === 主路由 ===

export async function onRequest({ request }) {
  const url = new URL(request.url);
  const SECRET = (typeof JWT_SECRET !== 'undefined' && JWT_SECRET)
    || 'portfolio-flow-default-secret-please-change-me';
  
  // 首次初始化
  if (request.method === 'GET' && url.searchParams.get('init') === 'true') {
    return await handleInit();
  }
  
  // 检查当前登录状态
  if (request.method === 'GET' && url.searchParams.get('action') === 'me') {
    return await handleMe(request, SECRET);
  }
  
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }
  
  let body;
  try { body = await request.json(); } catch { 
    return jsonResponse({ error: 'Invalid JSON' }, 400);
  }
  
  switch (body.action) {
    case 'login':          return await handleLogin(body, SECRET);
    case 'logout':         return handleLogout();
    case 'changePassword': return await handleChangePassword(body, request, SECRET);
    default:               return jsonResponse({ error: 'Unknown action' }, 400);
  }
}

// === 各路由实现 ===

async function handleInit() {
  if (typeof PORTFOLIO_USERS === 'undefined') {
    return jsonResponse({ error: 'KV namespace PORTFOLIO_USERS not bound' }, 500);
  }
  
  // 检查是否已初始化
  const existing = await PORTFOLIO_USERS.get('user:admin@portfolio.local');
  if (existing) {
    return jsonResponse({ error: 'Already initialized', hint: 'Login at /login' }, 400);
  }
  
  const password = generatePassword();
  const salt = randomBase64(16);
  const passwordHash = await hashPassword(password, salt);
  
  const user = {
    email: 'admin@portfolio.local',
    passwordHash,
    salt,
    role: 'admin',
    createdAt: Date.now(),
    lastLoginAt: null,
  };
  
  await PORTFOLIO_USERS.put('user:admin@portfolio.local', JSON.stringify(user));
  
  return jsonResponse({
    ok: true,
    message: '🎉 PortfolioFlow initialized successfully!',
    credentials: {
      email: 'admin@portfolio.local',
      password,  // 仅一次性返回
    },
    warning: '⚠️ Save this password NOW. It will not be shown again. Change it immediately after first login.',
  });
}

async function handleLogin(body, secret) {
  const { email, password } = body;
  if (!email || !password) {
    return jsonResponse({ error: 'Email and password required' }, 400);
  }
  
  if (typeof PORTFOLIO_USERS === 'undefined') {
    return jsonResponse({ error: 'KV not bound' }, 500);
  }
  
  const userRaw = await PORTFOLIO_USERS.get(`user:${email}`);
  if (!userRaw) {
    // 故意延迟，防止时序攻击
    await new Promise(r => setTimeout(r, 200));
    return jsonResponse({ error: 'Invalid credentials' }, 401);
  }
  
  const user = JSON.parse(userRaw);
  const inputHash = await hashPassword(password, user.salt);
  
  if (inputHash !== user.passwordHash) {
    return jsonResponse({ error: 'Invalid credentials' }, 401);
  }
  
  // 更新 lastLoginAt
  user.lastLoginAt = Date.now();
  await PORTFOLIO_USERS.put(`user:${email}`, JSON.stringify(user));
  
  // 签发 JWT（7 天过期）
  const payload = {
    sub: email,
    role: user.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7,
  };
  const token = await signJWT(payload, secret);
  
  const cookie = setCookie('portfolio_token', token, {
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
  });
  
  return new Response(JSON.stringify({
    ok: true,
    user: { email: user.email, role: user.role },
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': cookie,
    },
  });
}

function handleLogout() {
  const cookie = setCookie('portfolio_token', '', {
    maxAge: 0,
    path: '/',
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
  });
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': cookie,
    },
  });
}

async function handleMe(request, secret) {
  const token = getCookie(request, 'portfolio_token');
  if (!token) return jsonResponse({ authenticated: false }, 200);
  
  const payload = await verifyJWT(token, secret);
  if (!payload) return jsonResponse({ authenticated: false }, 200);
  
  return jsonResponse({
    authenticated: true,
    user: { email: payload.sub, role: payload.role },
    expiresAt: payload.exp * 1000,
  });
}

async function handleChangePassword(body, request, secret) {
  const token = getCookie(request, 'portfolio_token');
  if (!token) return jsonResponse({ error: 'Unauthorized' }, 401);
  
  const payload = await verifyJWT(token, secret);
  if (!payload) return jsonResponse({ error: 'Invalid token' }, 401);
  
  const { oldPassword, newPassword } = body;
  if (!oldPassword || !newPassword) {
    return jsonResponse({ error: 'Both old and new password required' }, 400);
  }
  if (newPassword.length < 8) {
    return jsonResponse({ error: 'New password must be at least 8 characters' }, 400);
  }
  
  const userRaw = await PORTFOLIO_USERS.get(`user:${payload.sub}`);
  if (!userRaw) return jsonResponse({ error: 'User not found' }, 404);
  
  const user = JSON.parse(userRaw);
  const oldHash = await hashPassword(oldPassword, user.salt);
  if (oldHash !== user.passwordHash) {
    return jsonResponse({ error: 'Old password incorrect' }, 401);
  }
  
  // 更新密码（重新生成 salt）
  user.salt = randomBase64(16);
  user.passwordHash = await hashPassword(newPassword, user.salt);
  await PORTFOLIO_USERS.put(`user:${payload.sub}`, JSON.stringify(user));
  
  return jsonResponse({ ok: true, message: 'Password changed successfully' });
}

// === 公共工具：JSON 响应 ===
function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
```

---

## 四、Middleware：保护 /admin 路由

### functions/_middleware.js

```javascript
const PROTECTED_PATHS = ['/admin', '/admin.html'];
const PROTECTED_API = ['/api/portfolios', '/api/stats'];  // 这些 API 需要登录

const enc = new TextEncoder();

// （复用 auth.js 的 verifyJWT，但 middleware 是独立文件，所以这里要复制一份核心逻辑）
function b64urlEncode(input) {
  let s = typeof input === 'string'
    ? btoa(input)
    : btoa(String.fromCharCode(...new Uint8Array(input)));
  return s.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}
function b64urlDecode(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return atob(s);
}
async function hmacSign(data, secret) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(data));
  return b64urlEncode(sig);
}
async function verifyJWT(token, secret) {
  try {
    const [h, p, s] = token.split('.');
    if (!h || !p || !s) return null;
    const expected = await hmacSign(`${h}.${p}`, secret);
    if (s !== expected) return null;
    const payload = JSON.parse(b64urlDecode(p));
    if (payload.exp && Date.now() / 1000 > payload.exp) return null;
    return payload;
  } catch { return null; }
}
function getCookie(request, name) {
  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(new RegExp(`(^|; )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  const SECRET = (typeof JWT_SECRET !== 'undefined' && JWT_SECRET)
    || 'portfolio-flow-default-secret-please-change-me';
  
  // 1. CORS 预检
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }
  
  // 2. 检查是否是受保护路径
  const isProtectedPage = PROTECTED_PATHS.some(p => url.pathname.startsWith(p));
  const isProtectedApi = PROTECTED_API.some(p => url.pathname.startsWith(p));
  
  if (isProtectedPage || isProtectedApi) {
    const token = getCookie(request, 'portfolio_token');
    const payload = token ? await verifyJWT(token, SECRET) : null;
    
    if (!payload) {
      if (isProtectedApi) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      // 页面 → 重定向到登录
      return Response.redirect(`${url.origin}/login.html?from=${encodeURIComponent(url.pathname)}`, 302);
    }
    
    // 把用户信息透传给后端 API（通过 header）
    const newRequest = new Request(request);
    newRequest.headers.set('X-Auth-Email', payload.sub);
    newRequest.headers.set('X-Auth-Role', payload.role);
  }
  
  // 3. 调用下游
  const response = await next();
  
  // 4. 给所有 /api 响应加 CORS 和品牌头
  if (url.pathname.startsWith('/api')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('X-Powered-By', 'PortfolioFlow');
  }
  
  return response;
}
```

---

## 五、前端登录页（login.html 关键 JS 片段）

```javascript
const form = document.getElementById('login-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value;
  const errorEl = document.getElementById('error-msg');
  errorEl.textContent = '';
  
  try {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login', email, password }),
      credentials: 'same-origin',  // 关键：让 Cookie 被存储
    });
    const data = await res.json();
    
    if (!res.ok) {
      errorEl.textContent = data.error || '登录失败';
      return;
    }
    
    // 登录成功，跳转
    const from = new URLSearchParams(location.search).get('from') || '/admin.html';
    location.href = from;
  } catch (err) {
    errorEl.textContent = '网络错误：' + err.message;
  }
});
```

---

## 六、关键安全约束（必须遵守）

1. **JWT_SECRET 不能硬编码**——通过 EdgeOne Pages 环境变量配置：
   ```
   控制台 → 项目 → 环境变量 → 新增
   Key: JWT_SECRET
   Value: 任意 32 字符以上的随机字符串
   ```
2. **Cookie 必须 `HttpOnly + Secure + SameSite=Strict`**——防止 XSS 偷 token
3. **密码必须加盐哈希**——salt 每个用户独立，永不复用
4. **失败响应人为延迟 200ms**——防止时序攻击枚举邮箱
5. **JWT 过期时间设为 7 天**——长期 session 但有时效

---

## 七、AI 执行清单

生成 `auth.js`、`_middleware.js`、`login.html` 时按顺序确认：

- [ ] `auth.js` 包含 5 个 action：login / logout / me / init / changePassword
- [ ] `_middleware.js` 保护 `/admin*` 和 `/api/portfolios` `/api/stats` 路径
- [ ] JWT 使用 HMAC-SHA256，通过 Web Crypto API 实现，**不引入任何 npm 包**
- [ ] 默认 `JWT_SECRET` 兜底字符串，但 README 提示用户在控制台改
- [ ] 部署完成后**自动调用** `/api/auth?init=true` 一次，把默认管理员账号密码返回给用户
- [ ] login 失败时延迟 200ms 回应
- [ ] 密码哈希使用 SHA-256 + per-user salt
- [ ] Cookie 设置 HttpOnly + Secure + SameSite=Strict + Max-Age 7 天

---

## 八、KV 绑定提醒（部署后必做）

部署完成后引导用户在 EdgeOne 控制台**手动绑定**：

```
项目 → KV 存储 → 绑定命名空间

变量名: PORTFOLIO_USERS
命名空间: 新建（名字随意，如 portfolio-users）
```

**重要**：绑定后**必须重新部署一次**，否则 `PORTFOLIO_USERS` 全局变量仍是 undefined。

绑定生效后，首次访问 `/api/auth?init=true` 自动创建管理员账号。

---

## 九、反例：常见错误

❌ **错误**：在 Edge Function 中 `import bcrypt from 'bcrypt'`  
✅ **正确**：用 Web Crypto API 的 SHA-256（V8 隔离环境不支持 npm 模块）

❌ **错误**：用 `env.PORTFOLIO_USERS.get(...)`  
✅ **正确**：用全局 `PORTFOLIO_USERS.get(...)`（EdgeOne 规范）

❌ **错误**：把 JWT secret 写死在代码里  
✅ **正确**：从全局 `JWT_SECRET` 读，配合控制台环境变量

❌ **错误**：登录失败立即返回 401  
✅ **正确**：人为延迟 200ms 后再返回，避免时序攻击

❌ **错误**：Cookie 不设 HttpOnly  
✅ **正确**：HttpOnly + Secure + SameSite=Strict 三件套
