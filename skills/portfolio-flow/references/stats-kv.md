# Stats & KV — 访问统计与数据看板

> **何时加载本文件**：用户的请求涉及访问量、PV、UV、热门作品、统计看板、数据可视化、访客分析等。

---

## 一、统计能力总览

PortfolioFlow 在 `PORTFOLIO_STATS` KV 命名空间下维护以下数据：

```
total:pv             → 总浏览量（数字）
total:uv             → 总独立访客数（数字，按 IP+UA hash 去重）
total:contacts       → "联系我"按钮被点击次数

work:{slug}:pv       → 单个作品的浏览量
work:{slug}:uv       → 单个作品的独立访客数

daily:{YYYY-MM-DD}   → 当日 PV
daily-uv:{YYYY-MM-DD} → 当日 UV (Set 形式存 visitor hash)

ranking:top10         → Top 10 热门作品 slug 数组（每小时聚合更新）
referrer:{domain}     → 各来源域名带来的访问数
```

---

## 二、完整代码

### functions/api/stats.js

```javascript
/**
 * Portfolio Stats API
 *
 * 路由：
 *   POST /api/stats { event: 'page_view', slug?, referrer? }  → 记录访问（公开）
 *   POST /api/stats { event: 'contact_click' }                → 记录联系点击
 *   GET  /api/stats?action=summary                            → 看板汇总（需登录）
 *   GET  /api/stats?action=daily&days=30                      → 最近 N 天日 PV（需登录）
 *   GET  /api/stats?action=top&n=10                           → Top 作品（需登录）
 *
 * 注：GET 类查询的鉴权由 _middleware.js 完成
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
    case 'page_view':
      await incr('total:pv');
      await incr(`daily:${today}`);
      
      // UV：检查访客 hash 是否当天已记录
      const uvKey = `daily-uv:${today}`;
      const uvList = (await PORTFOLIO_STATS.get(uvKey, 'json')) || [];
      if (!uvList.includes(visitorHash)) {
        uvList.push(visitorHash);
        // 限制每天 UV 集合最多 10000，防止 value 超出 KV 上限
        if (uvList.length > 10000) uvList.shift();
        await PORTFOLIO_STATS.put(uvKey, JSON.stringify(uvList));
        await incr('total:uv');
      }
      
      // 单作品 PV
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
      
      // 来源统计
      if (referrer) {
        try {
          const domain = new URL(referrer).hostname;
          if (domain && !domain.endsWith(new URL(request.url).hostname)) {
            await incr(`referrer:${domain}`);
          }
        } catch { /* invalid referrer URL */ }
      }
      
      return jsonResponse({ ok: true });
    
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
  
  // 今日数据
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
  days = Math.min(Math.max(days, 1), 90);  // 限制 1-90 天
  
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
  
  // 取所有作品 slug
  if (typeof PORTFOLIO_WORKS === 'undefined') {
    return jsonResponse({ error: 'PORTFOLIO_WORKS KV not bound, cannot determine work list' }, 500);
  }
  
  const allSlugs = (await PORTFOLIO_WORKS.get('index:all', 'json')) || [];
  
  // 取每个作品的 PV
  const stats = await Promise.all(allSlugs.map(async (slug) => {
    const pv = parseInt((await PORTFOLIO_STATS.get(`work:${slug}:pv`)) || '0', 10);
    const uv = parseInt((await PORTFOLIO_STATS.get(`work:${slug}:uv`)) || '0', 10);
    const workData = await PORTFOLIO_WORKS.get(`work:${slug}`, 'json');
    return { slug, title: workData?.title || slug, pv, uv };
  }));
  
  // 按 PV 倒序排
  stats.sort((a, b) => b.pv - a.pv);
  
  return jsonResponse({ ok: true, top: stats.slice(0, n) });
}

// === 工具 ===

async function incr(key) {
  const current = parseInt((await PORTFOLIO_STATS.get(key)) || '0', 10);
  await PORTFOLIO_STATS.put(key, String(current + 1));
}

async function getVisitorHash(request) {
  // 用 IP + User-Agent 简单生成访客指纹
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
```

---

## 三、前端埋点（index.html / portfolio-detail.html）

```javascript
// 页面加载时埋点（首页或作品详情页都用同一套）
(async function trackPageView() {
  try {
    const slug = new URLSearchParams(location.search).get('slug') || null;
    await fetch('/api/stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: 'page_view',
        slug,
        referrer: document.referrer || null,
      }),
      // 注意：不要 await 阻塞渲染，用 keepalive 后台发送
      keepalive: true,
    });
  } catch (e) { /* 静默失败，不影响用户体验 */ }
})();

// "联系我"按钮点击埋点
document.querySelectorAll('[data-event="contact-click"]').forEach(btn => {
  btn.addEventListener('click', () => {
    fetch('/api/stats', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event: 'contact_click' }),
      keepalive: true,
    }).catch(() => {});
  });
});
```

---

## 四、管理后台看板（admin.html）

```javascript
async function loadDashboard() {
  try {
    // 并行加载三类数据
    const [summaryRes, dailyRes, topRes] = await Promise.all([
      fetch('/api/stats?action=summary', { credentials: 'same-origin' }),
      fetch('/api/stats?action=daily&days=30', { credentials: 'same-origin' }),
      fetch('/api/stats?action=top&n=10', { credentials: 'same-origin' }),
    ]);
    
    const summary = (await summaryRes.json()).summary;
    const daily = (await dailyRes.json()).daily;
    const top = (await topRes.json()).top;
    
    // 渲染汇总卡片
    document.getElementById('stat-total-pv').textContent = summary.totalPV.toLocaleString();
    document.getElementById('stat-total-uv').textContent = summary.totalUV.toLocaleString();
    document.getElementById('stat-today-pv').textContent = summary.todayPV.toLocaleString();
    document.getElementById('stat-today-uv').textContent = summary.todayUV.toLocaleString();
    document.getElementById('stat-contacts').textContent = summary.totalContactClicks.toLocaleString();
    document.getElementById('stat-conversion').textContent = summary.contactConversion;
    
    // 渲染近 30 天趋势（用 SVG 简单画一条折线）
    renderDailyChart(daily);
    
    // 渲染 Top 10 作品列表
    const topList = document.getElementById('top-works-list');
    topList.innerHTML = top.map((w, i) => `
      <li>
        <span class="rank">#${i + 1}</span>
        <a href="/portfolio-detail.html?slug=${encodeURIComponent(w.slug)}">${w.title}</a>
        <span class="metric">PV ${w.pv} · UV ${w.uv}</span>
      </li>
    `).join('');
  } catch (err) {
    console.error('Dashboard load failed:', err);
  }
}

// 用纯 SVG 画 30 天趋势折线图（不依赖任何图表库）
function renderDailyChart(daily) {
  const svg = document.getElementById('chart-daily');
  if (!svg || !daily.length) return;
  
  const W = 800, H = 200, PAD = 30;
  const maxPV = Math.max(...daily.map(d => d.pv), 1);
  const stepX = (W - 2 * PAD) / (daily.length - 1 || 1);
  
  const points = daily.map((d, i) => {
    const x = PAD + i * stepX;
    const y = H - PAD - (d.pv / maxPV) * (H - 2 * PAD);
    return `${x},${y}`;
  }).join(' ');
  
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
  svg.innerHTML = `
    <polyline points="${points}"
      fill="none" stroke="var(--primary)" stroke-width="2"/>
    ${daily.map((d, i) => {
      const x = PAD + i * stepX;
      const y = H - PAD - (d.pv / maxPV) * (H - 2 * PAD);
      return `<circle cx="${x}" cy="${y}" r="3" fill="var(--primary)"/>`;
    }).join('')}
    <text x="${PAD}" y="${H - 5}" font-size="10" fill="var(--text-faint)">${daily[0].date}</text>
    <text x="${W - PAD - 60}" y="${H - 5}" font-size="10" fill="var(--text-faint)">${daily[daily.length - 1].date}</text>
  `;
}

loadDashboard();
```

---

## 五、KV 绑定提醒

部署完成后在 EdgeOne 控制台**手动绑定**：

```
项目 → KV 存储 → 绑定命名空间

变量名: PORTFOLIO_STATS
命名空间: 新建（如 portfolio-stats）
```

**绑定后必须重新部署一次**让 `PORTFOLIO_STATS` 全局变量生效。

---

## 六、AI 执行清单

生成 `stats.js`、前端埋点、看板时按顺序确认：

- [ ] 包含 6 个 action：page_view / contact_click + summary / daily / top
- [ ] PV 埋点使用 `keepalive: true` 后台发送，不阻塞页面渲染
- [ ] UV 通过 IP+UA 哈希去重，**每日重置集合**
- [ ] UV 集合上限保护（10000/5000），防止 KV value 超限
- [ ] 看板看板用纯 SVG 画图，**不引入任何图表库**
- [ ] Top 作品依赖 `PORTFOLIO_WORKS` KV 已绑定
- [ ] 看板路由通过 middleware 鉴权（需登录）

---

## 七、反例

❌ **错误**：每个 PV 都同步等待响应再渲染页面  
✅ **正确**：`keepalive: true` 后台静默发送

❌ **错误**：UV 集合无上限，最终超过 KV value 25KB 限制  
✅ **正确**：超过上限时 `shift()` 移除最老条目

❌ **错误**：用 echarts/chart.js 等图表库（增加包体积）  
✅ **正确**：原生 SVG 画折线图，简洁专业

❌ **错误**：referrer 不做来源域名过滤（自家域名也算外部来源）  
✅ **正确**：过滤掉与当前 host 相同的 referrer
