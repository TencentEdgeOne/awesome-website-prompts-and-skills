/**
 * PortfolioFlow · Global Middleware
 *
 * 职责：
 *   1. CORS 预检处理
 *   2. 保护 /admin 页面和 /api/portfolios、/api/stats（GET）需要登录
 *   3. /api 响应统一加 CORS 头和品牌标识
 *
 * 鉴权：JWT Token 从 Cookie `portfolio_token` 中读取
 */

const PROTECTED_PAGES = ['/admin', '/admin.html'];
const PROTECTED_API_WRITE = ['/api/portfolios', '/api/stats'];
// 注：/api/portfolios GET 是公开的，由 portfolios.js 内部根据 method 区分
// 这里"保护"的含义是：受保护页面 + 看板查询类 API

const enc = new TextEncoder();

// === JWT 验证（与 auth.js 一致的实现）===

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

// === 主入口 ===

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
  
  // 2. 鉴权判定
  const isProtectedPage = PROTECTED_PAGES.some(p => url.pathname.startsWith(p));
  
  // /api/portfolios 和 /api/stats：写操作需要登录
  const isProtectedApi = PROTECTED_API_WRITE.some(p => url.pathname.startsWith(p))
    && (request.method !== 'GET' || url.pathname === '/api/stats' && url.searchParams.get('action'));
  
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
      return Response.redirect(
        `${url.origin}/login?from=${encodeURIComponent(url.pathname)}`,
        302
      );
    }
  }
  
  // 3. 调用下游
  const response = await next();
  
  // 4. 给 /api 响应加 CORS 和品牌头
  if (url.pathname.startsWith('/api')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('X-Powered-By', 'PortfolioFlow');
  }
  
  return response;
}
