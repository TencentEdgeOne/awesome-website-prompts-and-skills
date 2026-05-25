# Portfolio CRUD — 作品管理完整实现

> **何时加载本文件**：用户的请求涉及作品的添加/编辑/删除/列表/详情、作品管理、增删改查、KV 数据存储、图片上传、分页等。

---

## 一、数据模型

### `PORTFOLIO_WORKS` 命名空间

每个作品一条 KV 记录：

```
key:   work:{slug}                # 例：work:landscape-park-2024
value: {
  "slug": "landscape-park-2024",
  "title": "北方滨海生态公园",
  "type": "滨海景观",
  "year": 2024,
  "area": "120 公顷",
  "role": "项目总负责人",
  "duration": "8 个月",
  "tags": ["生态修复", "滨海景观", "微气候设计"],
  "cover": "/assets/works/landscape-park-2024-cover.jpg",
  "gallery": [
    "/assets/works/landscape-park-2024-01.jpg",
    "/assets/works/landscape-park-2024-02.jpg"
  ],
  "summary": "120 公顷北方滨海公园方案设计，回应北方冬季旅游淡季问题",
  "description": "完整的 Markdown 项目说明...",
  "isFeatured": true,
  "isPublished": true,
  "createdAt": 1730000000000,
  "updatedAt": 1730000000000
}
```

### 索引 key

为了支持快速列表查询，额外维护索引：

```
key:   index:all
value: ["landscape-park-2024", "graphic-vi-2023", ...]   # 按 createdAt 倒序排列的 slug 数组

key:   index:featured
value: ["landscape-park-2024", "landscape-wetland-2022"]  # 精选作品 slug 数组

key:   index:by-type:{type}
value: ["slug1", "slug2", ...]                            # 按类型分组
```

**为什么用索引？**——KV 不支持列表/扫描操作，必须自己维护索引。每次 CRUD 都同步更新索引。

---

## 二、完整代码

### functions/api/portfolios.js

```javascript
/**
 * Portfolio CRUD API
 * 路由：
 *   GET    /api/portfolios                       → 列表（公开，支持分页/筛选）
 *   GET    /api/portfolios?slug=xxx              → 详情（公开）
 *   POST   /api/portfolios                       → 创建（需登录）
 *   PUT    /api/portfolios?slug=xxx              → 更新（需登录）
 *   DELETE /api/portfolios?slug=xxx              → 删除（需登录）
 *
 * 注：写操作的鉴权由 _middleware.js 完成，本文件假设到达这里的写请求都已通过验证
 */

export async function onRequest({ request }) {
  if (typeof PORTFOLIO_WORKS === 'undefined') {
    return jsonResponse({ error: 'KV namespace PORTFOLIO_WORKS not bound' }, 500);
  }
  
  const url = new URL(request.url);
  const slug = url.searchParams.get('slug');
  
  switch (request.method) {
    case 'GET':
      return slug ? await getOne(slug) : await getList(url.searchParams);
    case 'POST':
      return await createWork(await request.json());
    case 'PUT':
      if (!slug) return jsonResponse({ error: 'slug required' }, 400);
      return await updateWork(slug, await request.json());
    case 'DELETE':
      if (!slug) return jsonResponse({ error: 'slug required' }, 400);
      return await deleteWork(slug);
    default:
      return jsonResponse({ error: 'Method not allowed' }, 405);
  }
}

// === 列表查询（支持分页 + 筛选） ===

async function getList(params) {
  const page = parseInt(params.get('page') || '1', 10);
  const pageSize = Math.min(parseInt(params.get('pageSize') || '12', 10), 50);
  const type = params.get('type');
  const featured = params.get('featured') === 'true';
  
  // 从索引拿到 slug 列表
  let indexKey = 'index:all';
  if (featured) indexKey = 'index:featured';
  else if (type) indexKey = `index:by-type:${type}`;
  
  const indexRaw = await PORTFOLIO_WORKS.get(indexKey, 'json');
  const allSlugs = Array.isArray(indexRaw) ? indexRaw : [];
  
  // 分页切片
  const total = allSlugs.length;
  const start = (page - 1) * pageSize;
  const slugs = allSlugs.slice(start, start + pageSize);
  
  // 并行读取每条作品记录
  const works = await Promise.all(
    slugs.map(async (s) => {
      const raw = await PORTFOLIO_WORKS.get(`work:${s}`, 'json');
      return raw;
    })
  );
  
  // 过滤掉 null（数据损坏的情况）
  const validWorks = works.filter(Boolean);
  
  // 只对已发布的作品返回（公开访问时）
  const published = validWorks.filter(w => w.isPublished !== false);
  
  return jsonResponse({
    ok: true,
    works: published,
    pagination: {
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    },
  });
}

// === 单条详情 ===

async function getOne(slug) {
  const raw = await PORTFOLIO_WORKS.get(`work:${slug}`, 'json');
  if (!raw) return jsonResponse({ error: 'Not found' }, 404);
  
  return jsonResponse({ ok: true, work: raw });
}

// === 创建 ===

async function createWork(data) {
  // 校验必填字段
  const required = ['title', 'type', 'year'];
  for (const f of required) {
    if (!data[f]) return jsonResponse({ error: `Field "${f}" is required` }, 400);
  }
  
  // 生成 slug（如果用户没提供）
  const slug = data.slug || slugify(data.title);
  
  // 检查 slug 是否已存在
  const existing = await PORTFOLIO_WORKS.get(`work:${slug}`);
  if (existing) {
    return jsonResponse({ error: `Slug "${slug}" already exists, please choose another` }, 409);
  }
  
  const now = Date.now();
  const work = {
    slug,
    title: data.title,
    type: data.type,
    year: parseInt(data.year, 10),
    area: data.area || null,
    role: data.role || null,
    duration: data.duration || null,
    tags: Array.isArray(data.tags) ? data.tags : [],
    cover: data.cover || null,
    gallery: Array.isArray(data.gallery) ? data.gallery : [],
    summary: data.summary || '',
    description: data.description || '',
    isFeatured: !!data.isFeatured,
    isPublished: data.isPublished !== false,
    createdAt: now,
    updatedAt: now,
  };
  
  await PORTFOLIO_WORKS.put(`work:${slug}`, JSON.stringify(work));
  await updateIndexes(slug, work, 'add');
  
  return jsonResponse({ ok: true, work }, 201);
}

// === 更新 ===

async function updateWork(slug, data) {
  const raw = await PORTFOLIO_WORKS.get(`work:${slug}`, 'json');
  if (!raw) return jsonResponse({ error: 'Not found' }, 404);
  
  const oldFeatured = !!raw.isFeatured;
  const oldType = raw.type;
  
  const updated = {
    ...raw,
    ...data,
    slug,  // slug 不允许通过 PUT 修改
    updatedAt: Date.now(),
  };
  
  // 类型强转
  if (data.year) updated.year = parseInt(data.year, 10);
  
  await PORTFOLIO_WORKS.put(`work:${slug}`, JSON.stringify(updated));
  
  // 索引同步：如果 featured 或 type 变化了，更新索引
  if (oldFeatured !== !!updated.isFeatured || oldType !== updated.type) {
    await updateIndexes(slug, { ...raw, isFeatured: oldFeatured, type: oldType }, 'remove');
    await updateIndexes(slug, updated, 'add');
  }
  
  return jsonResponse({ ok: true, work: updated });
}

// === 删除 ===

async function deleteWork(slug) {
  const raw = await PORTFOLIO_WORKS.get(`work:${slug}`, 'json');
  if (!raw) return jsonResponse({ error: 'Not found' }, 404);
  
  await PORTFOLIO_WORKS.delete(`work:${slug}`);
  await updateIndexes(slug, raw, 'remove');
  
  return jsonResponse({ ok: true, message: `Work "${slug}" deleted` });
}

// === 索引维护 ===

async function updateIndexes(slug, work, action) {
  // 操作：'add' 或 'remove'
  
  const indexKeys = ['index:all'];
  if (work.isFeatured) indexKeys.push('index:featured');
  if (work.type) indexKeys.push(`index:by-type:${work.type}`);
  
  for (const key of indexKeys) {
    const current = (await PORTFOLIO_WORKS.get(key, 'json')) || [];
    let updated;
    
    if (action === 'add') {
      // 加到最前（最新的在前）
      updated = [slug, ...current.filter(s => s !== slug)];
    } else {
      updated = current.filter(s => s !== slug);
    }
    
    await PORTFOLIO_WORKS.put(key, JSON.stringify(updated));
  }
}

// === 工具函数 ===

function slugify(text) {
  // 中文转拼音过于复杂，简化处理：保留字母数字 + 时间戳
  const ascii = text.replace(/[^a-zA-Z0-9\s-]/g, '').trim().toLowerCase();
  if (ascii.length > 2) {
    return ascii.replace(/\s+/g, '-').substring(0, 40) + '-' + Date.now().toString(36);
  }
  // 全中文 → 使用时间戳作为 slug
  return 'work-' + Date.now().toString(36);
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
```

---

## 三、前端管理后台（admin.html 关键 JS）

```javascript
// 加载作品列表
async function loadWorks() {
  const res = await fetch('/api/portfolios?page=1&pageSize=50', {
    credentials: 'same-origin',
  });
  const data = await res.json();
  if (!res.ok) {
    alert('加载失败：' + (data.error || '未知错误'));
    return;
  }
  renderWorksList(data.works);
}

// 创建作品
async function createWork(formData) {
  const res = await fetch('/api/portfolios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  if (!res.ok) {
    alert('创建失败：' + data.error);
    return null;
  }
  return data.work;
}

// 更新作品
async function updateWork(slug, formData) {
  const res = await fetch(`/api/portfolios?slug=${encodeURIComponent(slug)}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    body: JSON.stringify(formData),
  });
  return await res.json();
}

// 删除作品
async function deleteWork(slug) {
  if (!confirm(`确定删除作品 "${slug}"？此操作不可撤销。`)) return;
  
  const res = await fetch(`/api/portfolios?slug=${encodeURIComponent(slug)}`, {
    method: 'DELETE',
    credentials: 'same-origin',
  });
  const data = await res.json();
  if (data.ok) {
    alert('删除成功');
    loadWorks();
  } else {
    alert('删除失败：' + data.error);
  }
}

// 切换发布状态
async function togglePublish(slug, currentState) {
  await updateWork(slug, { isPublished: !currentState });
  loadWorks();
}

// 切换精选状态
async function toggleFeatured(slug, currentState) {
  await updateWork(slug, { isFeatured: !currentState });
  loadWorks();
}
```

---

## 四、前台首页加载作品（index.html 关键 JS）

```javascript
async function loadFeaturedWorks() {
  const grid = document.getElementById('works-grid');
  if (!grid) return;
  
  try {
    const res = await fetch('/api/portfolios?featured=true&pageSize=6');
    const data = await res.json();
    
    if (!data.ok || !data.works || data.works.length === 0) {
      grid.innerHTML = '<p class="works-empty">暂无作品</p>';
      return;
    }
    
    grid.innerHTML = data.works.map(w => `
      <a class="work-card" href="/portfolio-detail.html?slug=${encodeURIComponent(w.slug)}">
        ${w.cover ? `<div class="work-cover" style="background-image: url('${w.cover}')"></div>` : '<div class="work-cover-empty"></div>'}
        <div class="work-body">
          <div class="work-meta">${w.type} · ${w.year}${w.area ? ' · ' + w.area : ''}</div>
          <h3 class="work-title">${escapeHtml(w.title)}</h3>
          <p class="work-summary">${escapeHtml(w.summary || '')}</p>
        </div>
      </a>
    `).join('');
  } catch (err) {
    grid.innerHTML = `<p class="works-error">加载失败：${escapeHtml(err.message)}</p>`;
  }
}

function escapeHtml(s) {
  if (typeof s !== 'string') return '';
  return s.replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

loadFeaturedWorks();
```

---

## 五、图片上传策略

**Edge Function 不支持直接接收 multipart 文件上传**（V8 隔离环境限制）。
两个可行方案：

### 方案 A（推荐）：让用户把图片直接放到 `assets/works/` 后部署

后台编辑表单提供"图片 URL"字段，用户事先把图片放到项目的 `/assets/works/` 目录，然后填路径 `/assets/works/xxx.jpg`。

**优点**：
- 零复杂度
- 图片走 EdgeOne CDN，加载快
- 适合作品集这种"图不频繁变"的场景

**缺点**：
- 每次新增图片需要重新部署一次

### 方案 B（进阶）：base64 内联存到 KV

后台支持拖拽上传，前端 FileReader 读为 base64，POST 到 `/api/portfolios` 时塞到 cover 字段，存到 KV。

```javascript
// admin.html 上传逻辑
fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  if (file.size > 500 * 1024) {  // 500KB 上限
    alert('图片不能超过 500KB');
    return;
  }
  const reader = new FileReader();
  reader.onload = (ev) => {
    document.getElementById('cover-preview').src = ev.target.result;
    document.getElementById('cover-data').value = ev.target.result;
  };
  reader.readAsDataURL(file);
});
```

**优点**：
- 上传体验好
- 无需重新部署

**缺点**：
- KV 单条 value 上限 25KB → 图片要严格控制大小
- 大量作品时 KV 存储费用较高

**默认采用方案 A**，但 README 中告知用户两种方式。

---

## 六、KV 绑定提醒

部署完成后在 EdgeOne 控制台**手动绑定**：

```
项目 → KV 存储 → 绑定命名空间

变量名: PORTFOLIO_WORKS
命名空间: 新建（如 portfolio-works）
```

**绑定后必须重新部署一次**，否则 `PORTFOLIO_WORKS` 全局变量为 undefined。

---

## 七、首次部署的示例作品种子

部署完成、KV 绑定生效后，**自动创建 3 个示例作品**作为占位（按用户选定的设计领域）。

示例代码（在某个初始化 API 中调用，例如 `/api/portfolios?init=true`）：

```javascript
const SEED_WORKS = {
  landscape: [
    { title: '北方滨海生态公园', type: '滨海景观', year: 2024, area: '120 公顷', isFeatured: true, isPublished: true, summary: '120 公顷北方滨海公园方案设计，回应北方冬季旅游淡季问题' },
    { title: '社区口袋花园改造', type: '城市口袋公园', year: 2023, area: '2,800 ㎡', isFeatured: true, isPublished: true, summary: '老城区废弃绿地激活，让边缘空间重新成为社区中心' },
    { title: '城市湿地修复项目', type: '生态修复', year: 2022, area: '46 公顷', isFeatured: false, isPublished: true, summary: '退耕还湿，重建城市边缘的生物栖息廊道' },
  ],
  graphic: [
    { title: '独立咖啡品牌 VI', type: '品牌设计', year: 2024, isFeatured: true, isPublished: true, summary: '为一家独立咖啡品牌从 Logo 到包装的全套视觉体系' },
    { title: '城市文化季主视觉', type: '活动视觉', year: 2023, isFeatured: true, isPublished: true, summary: '某城市年度文化季的主视觉与衍生物料设计' },
    { title: '独立诗集装帧', type: '书籍装帧', year: 2023, isFeatured: false, isPublished: true, summary: '为青年诗人首部诗集所做的封面与内页设计' },
  ],
  // 其他三个领域（interior / industrial / ux）类似
};

async function seedWorks(field) {
  for (const w of SEED_WORKS[field] || []) {
    await createWork(w);  // 复用上面的 createWork 函数
  }
}
```

---

## 八、AI 执行清单

生成 `portfolios.js` 和管理后台时按顺序确认：

- [ ] 五个方法齐全：GET list / GET one / POST / PUT / DELETE
- [ ] 每个写操作（POST/PUT/DELETE）都同步更新索引（`index:all`、`index:featured`、`index:by-type:{type}`）
- [ ] 公开访问 GET list 时**过滤掉 `isPublished: false`** 的作品
- [ ] 创建时自动生成 slug，并检查重复
- [ ] 删除时确认对话框（前端）
- [ ] cover/gallery 字段保留 `/assets/...` 路径，**不做 startsWith('http') 兜底判断**
- [ ] 首次部署后调用 seed 方法插入 3 个示例作品

---

## 九、反例：常见错误

❌ **错误**：每次列表查询遍历所有 KV key  
✅ **正确**：维护 `index:all` 等索引数组

❌ **错误**：cover 字段做 `startsWith('http')` 判断（这是 LandscapeFlow V8 踩过的坑）  
✅ **正确**：直接信任传入的路径，本地 `/assets/...` 与远程 URL 一视同仁

❌ **错误**：更新 isFeatured 时只改记录、不动 `index:featured`  
✅ **正确**：所有可能影响索引的字段变化都同步索引

❌ **错误**：DELETE 没有 confirm 确认  
✅ **正确**：前端必须二次确认
