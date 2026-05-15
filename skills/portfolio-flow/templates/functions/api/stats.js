/**
 * PortfolioFlow · Stats API
 *
 * 路由：
 *   POST /api/stats { event: 'page_view', slug?, referrer? }  → 记录访问
 *   POST /api/stats { event: 'contact_click' }                → 记录联系点击
 *   GET  /api/stats?action=summary                            → 看板汇总（需登录）
 *   GET  /api/stats?action=daily&days=30                      → 最近 N 天日 PV（需登录）
 *   GET  /api/stats?action=top&n=10                           → Top 作品（需登录）
 *
 * KV 依赖：PORTFOLIO_STATS, PORTFOLIO_WORKS（top 查询用）
 */

const enc = new TextEncoder();

export async function onRequest({ request }) {
  if (typeof PORTFOLIO_STATS === 'undefined') {
    return jsonResponse({ error: 'KV namespace PORTFOLIO_STATS not bound' }, 500);
  }
  
  const url = new URL(request.url);
  
  if (request.method === 'POST') {
    const body = await request.json().catch(() => ({}));
    return await handleEvent(body, request);
  }
  
  if (request.method === 'GET') {
    const action = url.searchParams.get('action') || 'summary';
    switch (action) {
      case 'summary': return await getSummary();
      case 'daily':   return await getDailyTrend(parseInt(url.searchParams.get('days') || '30', 10));
      case 'top':     return await getTopWorks(parseInt(url.searchParams.get('n') || '10', 10));
      default:        return jsonResponse({ error: 'Unknown action' }, 400);
    }
  }
  
  return jsonResponse({ error: 'Method not allowed' }, 405);
}

// === 事件记录 ===

async function handleEvent(body, request) {
  const { event, slug, referrer } = body;
  if (!event) return jsonResponse({ error: 'event required' }, 400);
  
  const today = formatDate(new Date());
  const visitorHash = await getVisitorHash(request);
  
  switch (event) {
    case 'page_view': {
      await incr('total:pv');
      await incr(`daily:${today}`);
      
      const uvKey = `daily-uv:${today}`;
      const uvList = (await PORTFOLIO_STATS.get(uvKey, 'json')) || [];
      if (!uvList.includes(visitorHash)) {
        uvList.push(visitorHash);
        if (uvList.length > 10000) uvList.shift();
        await PORTFOLIO_STATS.put(uvKey, JSON.stringify(uvList));
        await incr('total:uv');
      }
      
      if (slug) {
        await incr(`work:${slug}:pv`);
        const workUvKey = `work:${slug}:uv-list`;
        const workUvList = (await PORTFOLIO_STATS.get(workUvKey, 'json')) || [];
        if (!workUvList.includes(visitorHash)) {
          workUvList.push(visitorHash);
          if (workUvList.length > 5000) workUvList.shift();
          await PORTFOLIO_STATS.put(workUvKey, JSON.stringify(workUvList));
          await incr(`work:${slug}:uv`);
        }
      }
      
      if (referrer) {
        try {
          const domain = new URL(referrer).hostname;
          if (domain && !domain.endsWith(new URL(request.url).hostname)) {
            await incr(`referrer:${domain}`);
          }
        } catch { /* invalid referrer */ }
      }
      
      return jsonResponse({ ok: true });
    }
    
    case 'contact_click':
      await incr('total:contacts');
      return jsonResponse({ ok: true });
    
    default:
      return jsonResponse({ error: 'Unknown event' }, 400);
  }
}

// === 看板查询 ===

async function getSummary() {
  const pv = parseInt((await PORTFOLIO_STATS.get('total:pv')) || '0', 10);
  const uv = parseInt((await PORTFOLIO_STATS.get('total:uv')) || '0', 10);
  const contacts = parseInt((await PORTFOLIO_STATS.get('total:contacts')) || '0', 10);
  
  const today = formatDate(new Date());
  const todayPv = parseInt((await PORTFOLIO_STATS.get(`daily:${today}`)) || '0', 10);
  const todayUvList = (await PORTFOLIO_STATS.get(`daily-uv:${today}`, 'json')) || [];
  
  return jsonResponse({
    ok: true,
    summary: {
      totalPV: pv,
      totalUV: uv,
      totalContactClicks: contacts,
      todayPV: todayPv,
      todayUV: todayUvList.length,
      contactConversion: pv > 0 ? `${((contacts / pv) * 100).toFixed(2)}%` : '0%',
    },
  });
}

async function getDailyTrend(days) {
  days = Math.min(Math.max(days, 1), 90);
  
  const result = [];
  const today = new Date();
  
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const dateStr = formatDate(d);
    
    const pv = parseInt((await PORTFOLIO_STATS.get(`daily:${dateStr}`)) || '0', 10);
    const uvList = (await PORTFOLIO_STATS.get(`daily-uv:${dateStr}`, 'json')) || [];
    
    result.push({
      date: dateStr,
      pv,
      uv: uvList.length,
    });
  }
  
  return jsonResponse({ ok: true, daily: result });
}

async function getTopWorks(n) {
  n = Math.min(Math.max(n, 1), 50);
  
  if (typeof PORTFOLIO_WORKS === 'undefined') {
    return jsonResponse({ error: 'PORTFOLIO_WORKS KV not bound' }, 500);
  }
  
  const allSlugs = (await PORTFOLIO_WORKS.get('index:all', 'json')) || [];
  
  const stats = await Promise.all(allSlugs.map(async (slug) => {
    const pv = parseInt((await PORTFOLIO_STATS.get(`work:${slug}:pv`)) || '0', 10);
    const uv = parseInt((await PORTFOLIO_STATS.get(`work:${slug}:uv`)) || '0', 10);
    const workData = await PORTFOLIO_WORKS.get(`work:${slug}`, 'json');
    return { slug, title: workData?.title || slug, pv, uv };
  }));
  
  stats.sort((a, b) => b.pv - a.pv);
  
  return jsonResponse({ ok: true, top: stats.slice(0, n) });
}

// === 工具 ===

async function incr(key) {
  const current = parseInt((await PORTFOLIO_STATS.get(key)) || '0', 10);
  await PORTFOLIO_STATS.put(key, String(current + 1));
}

async function getVisitorHash(request) {
  const ip = request.headers.get('CF-Connecting-IP')
    || request.headers.get('X-Forwarded-For')
    || request.headers.get('X-Real-IP')
    || '0.0.0.0';
  const ua = request.headers.get('User-Agent') || '';
  const fingerprint = `${ip}::${ua}`;
  
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(fingerprint));
  return btoa(String.fromCharCode(...new Uint8Array(buf))).substring(0, 12);
}

function formatDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
