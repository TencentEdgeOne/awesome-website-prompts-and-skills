/**
 * PortfolioFlow · Portfolio CRUD API
 *
 * 路由：
 *   GET    /api/portfolios                       → 列表（公开，支持分页/筛选）
 *   GET    /api/portfolios?slug=xxx              → 详情（公开）
 *   POST   /api/portfolios                       → 创建（需登录）
 *   PUT    /api/portfolios?slug=xxx              → 更新（需登录）
 *   DELETE /api/portfolios?slug=xxx              → 删除（需登录）
 *
 * KV 依赖：PORTFOLIO_WORKS
 * 索引设计：
 *   work:{slug}              ← 作品本体
 *   index:all                ← 所有作品 slug 倒序数组
 *   index:featured           ← 精选作品 slug 数组
 *   index:by-type:{type}     ← 按类型分组
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

// === 列表查询 ===

async function getList(params) {
  const page = parseInt(params.get('page') || '1', 10);
  const pageSize = Math.min(parseInt(params.get('pageSize') || '12', 10), 50);
  const type = params.get('type');
  const featured = params.get('featured') === 'true';
  
  let indexKey = 'index:all';
  if (featured) indexKey = 'index:featured';
  else if (type) indexKey = `index:by-type:${type}`;
  
  const indexRaw = await PORTFOLIO_WORKS.get(indexKey, 'json');
  const allSlugs = Array.isArray(indexRaw) ? indexRaw : [];
  
  const total = allSlugs.length;
  const start = (page - 1) * pageSize;
  const slugs = allSlugs.slice(start, start + pageSize);
  
  const works = await Promise.all(
    slugs.map(async (s) => {
      const raw = await PORTFOLIO_WORKS.get(`work:${s}`, 'json');
      return raw;
    })
  );
  
  const validWorks = works.filter(Boolean);
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
  const required = ['title', 'type', 'year'];
  for (const f of required) {
    if (!data[f]) return jsonResponse({ error: `Field "${f}" is required` }, 400);
  }
  
  const slug = data.slug || slugify(data.title);
  
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
  
  if (data.year) updated.year = parseInt(data.year, 10);
  
  await PORTFOLIO_WORKS.put(`work:${slug}`, JSON.stringify(updated));
  
  // 如果 featured 或 type 变化了，更新索引
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
  const indexKeys = ['index:all'];
  if (work.isFeatured) indexKeys.push('index:featured');
  if (work.type) indexKeys.push(`index:by-type:${work.type}`);
  
  for (const key of indexKeys) {
    const current = (await PORTFOLIO_WORKS.get(key, 'json')) || [];
    let updated;
    
    if (action === 'add') {
      updated = [slug, ...current.filter(s => s !== slug)];
    } else {
      updated = current.filter(s => s !== slug);
    }
    
    await PORTFOLIO_WORKS.put(key, JSON.stringify(updated));
  }
}

// === 工具 ===

function slugify(text) {
  const ascii = text.replace(/[^a-zA-Z0-9\s-]/g, '').trim().toLowerCase();
  if (ascii.length > 2) {
    return ascii.replace(/\s+/g, '-').substring(0, 40) + '-' + Date.now().toString(36);
  }
  return 'work-' + Date.now().toString(36);
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
