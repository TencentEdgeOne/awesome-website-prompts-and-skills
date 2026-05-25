# Auth 模块参考文档

## 一、认证架构总览

```
未登录 → 跳转登录页（AuthGuard）
已登录 → JWT Cookie → Edge Middleware 验证 → context.user 注入
过期 → 自动刷新 RT → 换新 JWT
```

## 二、JWT 配置

```javascript
// edge-functions/utils/jwt-helper.js
import { crypto } from '@edge-runtime/primitives';

const JWT_SECRET = new TextEncoder().encode(env.JWT_SECRET);
const ALGORITHM = 'HS256';

export async function signAccessToken(payload) {
  const header = btoa(JSON.stringify({ alg: ALGORITHM, typ: 'JWT' }));
  const body = btoa(JSON.stringify({ ...payload, exp: Date.now() + 15 * 60 * 1000, iat: Date.now() }));
  const signature = await crypto.subtle.sign('HMAC', JWT_SECRET, new TextEncoder().encode(`${header}.${body}`));
  return `${header}.${body}.${btoa(String.fromCharCode(...new Uint8Array(signature)))}`;
}

export async function verifyAccessToken(token) {
  try {
    const [header, body, sig] = token.split('.');
    const valid = await crypto.subtle.verify('HMAC', JWT_SECRET, Uint8Array.from(atob(sig), c => c.charCodeAt(0)), new TextEncoder().encode(`${header}.${body}`));
    if (!valid) return null;
    const payload = JSON.parse(atob(body));
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}
```

## 三、KV Session 存储

```javascript
// edge-functions/utils/kv-helper.js
const SESSION_TTL = 86400;  // 24h

export async function getSession(kv, sessionId) {
  const data = await kv.get(`session:${sessionId}`);
  return data ? JSON.parse(data) : null;
}

export async function setSession(kv, sessionId, userData) {
  await kv.put(`session:${sessionId}`, JSON.stringify({ ...userData, createdAt: Date.now() }), {
    expirationTtl: SESSION_TTL
  });
}

export async function deleteSession(kv, sessionId) {
  await kv.delete(`session:${sessionId}`);
}
```

## 四、Cookie 安全属性

```javascript
// Edge Middleware 中签发 Cookie
new Response(body, {
  headers: {
    'Set-Cookie': [
      `access_token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=900`,
      `refresh_token=${rt}; HttpOnly; Secure; SameSite=Strict; Path=/api/auth/refresh; Max-Age=604800`
    ].join(', ')
  }
});
```

## 五、RT 轮换（version 乐观锁）

```javascript
// edge-functions/api/auth/refresh.js
// 见 SKILL.md 主文件完整实现
// 核心：KV.put 在 version 不匹配时返回 false → 返回 409 → 客户端重试
```

## 六、skipAuthPaths 白名单

```javascript
const skipAuthPaths = [
  '/api/auth/login',
  '/api/auth/register',
  '/api/auth/refresh',
  '/api/products',
  '/api/products/list',
  '/api/products/categories',
  '/api/products/[id]',
  '/api/ai/chat',
  '/api/pay/wx-notify',
  '/api/pay/ali-notify',
];
```

## 七、前端 AuthService（内存模式）

```javascript
// client/src/services/auth.js
let _currentUser = null;

export const AuthService = {
  async getCurrentUser() {
    if (_currentUser) return _currentUser;
    const res = await fetch('/api/auth/me', { credentials: 'include' });
    if (!res.ok) return null;
    _currentUser = await res.json();
    return _currentUser;
  },
  setUser(user) { _currentUser = user; },
  clearUser() { _currentUser = null; },
  isLoggedIn() { return !!_currentUser; },
  onAuthChange(callback) {
    window.addEventListener('auth:changed', (e) => callback(e.detail));
  }
};

window.dispatchEvent(new CustomEvent('auth:changed', { detail: user }));
```
