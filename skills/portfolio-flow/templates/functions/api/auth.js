/**
 * PortfolioFlow · Auth API
 *
 * 路由：
 *   POST /api/auth { action: 'login', email, password }       → 登录
 *   POST /api/auth { action: 'logout' }                       → 登出
 *   POST /api/auth { action: 'changePassword', oldPw, newPw } → 改密码（需登录）
 *   GET  /api/auth?init=true                                  → 首次部署初始化
 *   GET  /api/auth?action=me                                  → 检查当前登录状态
 *
 * KV 依赖：PORTFOLIO_USERS（全局变量，需在 EdgeOne Pages 控制台绑定）
 * 环境变量：JWT_SECRET（推荐配置，未配置时使用兜底字符串）
 */

const enc = new TextEncoder();
const dec = new TextDecoder();

// === 工具函数 ===

async function sha256base64(text) {
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(text));
  return btoa(String.fromCharCode(...new Uint8Array(buf)));
}

function randomBase64(byteLen) {
  const arr = new Uint8Array(byteLen);
  crypto.getRandomValues(arr);
  return btoa(String.fromCharCode(...arr));
}

function generatePassword() {
  const chars = 'ABCDEFGHJKMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  const arr = new Uint8Array(12);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => chars[b % chars.length]).join('');
}

async function hashPassword(password, salt) {
  return await sha256base64(password + ':' + salt);
}

// === JWT 实现（HS256，零依赖）===

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
    if (payload.exp && Date.now() / 1000 > payload.exp) return null;
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
  if (options.maxAge !== undefined) parts.push(`Max-Age=${options.maxAge}`);
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
      password,
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
    return jsonResponse({ error: 'KV namespace PORTFOLIO_USERS not bound' }, 500);
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
  
  user.salt = randomBase64(16);
  user.passwordHash = await hashPassword(newPassword, user.salt);
  await PORTFOLIO_USERS.put(`user:${payload.sub}`, JSON.stringify(user));
  
  return jsonResponse({ ok: true, message: 'Password changed successfully' });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
