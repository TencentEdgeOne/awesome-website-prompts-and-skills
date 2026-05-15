# AI Generate — 作品介绍生成（双引擎）

> **何时加载本文件**：用户的请求涉及 AI 生成作品介绍、自动写文案、智能填写描述、生成项目说明、AI 助手回答访客提问等。
>
> **核心设计**：双引擎架构 —— 默认用"模板拼接 + 领域词库随机组合"，零依赖可跑；可选接 DeepSeek 真 LLM 作为增强模式。

---

## 一、双引擎架构

```
用户在 admin 后台点"AI 生成介绍"
  ↓
POST /api/generate { field, projectName, type, style, role, area, duration, goal }
  ↓
generate.js 路由：
  ├─ 检查 env DEEPSEEK_API_KEY 是否存在？
  │   ├─ 存在 → 尝试调用 DeepSeek（30 秒超时）
  │   │         ├─ 成功 → 返回 { source: 'ai', content: ... }
  │   │         └─ 失败 → 静默降级到模板引擎
  │   └─ 不存在 → 直接走模板引擎
  ↓
模板引擎：
  1. 加载对应领域的词库（portfolio-knowledge.md）
  2. pick() 随机抽取短语
  3. 拼接成结构化项目说明
  4. 返回 { source: 'template', content: ... }
```

---

## 二、完整代码

### functions/api/generate.js

```javascript
/**
 * Portfolio AI Generate API
 *
 * 路由：
 *   POST /api/generate
 *   {
 *     field: 'landscape' | 'graphic' | 'interior' | 'industrial' | 'ux',
 *     projectName: string,
 *     type: string,         // 项目类型，如 '社区公园'
 *     style?: string,       // 风格，如 '自然生态'
 *     role?: string,
 *     area?: string,
 *     duration?: string,
 *     goal?: string,
 *     mode?: 'template' | 'ai' | 'auto'   // 默认 auto
 *   }
 *
 *   返回：
 *   {
 *     ok: true,
 *     source: 'template' | 'ai',
 *     content: '生成的项目说明文本',
 *     warnings?: ['AI 调用失败，已降级到模板引擎']
 *   }
 */

// === 领域词库（5 个领域） ===

const KNOWLEDGE = {
  landscape: {
    intros: [
      '让设计回到土地与人居',
      '用最少的介入实现最丰富的体验',
      '在城市与自然之间编织新的对话',
      '为每一片土地写一封情书',
      '以场地的方式重新思考场地',
      '让风、水、光、植物，一起参与设计',
      '用景观回应城市的真实问题',
    ],
    styles: {
      '现代简约': ['极简几何线条', '强调功能与形式统一', '材料的克制运用', '尺度感的精准把握'],
      '自然生态': ['尊重场地原生肌理', '低介入设计哲学', '本土植物为骨架', '生境网络的细致编织'],
      '古典中式': ['移步换景的空间序列', '借景与框景的传统手法', '诗意栖居的当代诠释'],
      '工业复古': ['场地工业记忆的保留', '钢铁与植物的对话', '锈蚀美学的当代运用'],
      '北方风格': ['抵御冬季严寒的微气候策略', '常绿植物为骨架的全季视效', '雪景作为设计要素'],
      '南方风格': ['雨水管理与海绵理念', '亚热带植物的层次表达', '通风遮阳的气候适应'],
    },
    strategies: [
      '以人群行为为驱动重组功能分区，强化亲子、运动、静憩三类活动的边界与互动',
      '引入微气候调节策略，通过乔木阵列、水体降温、铺装透水提升场地全年舒适度',
      '植物配置遵循季相主题原则，确保四季皆有视觉焦点',
      '材料选型立足耐久性与本土性，重点回应当地气候对工艺的特殊要求',
      '强化无障碍系统，确保老人、儿童、残障人士都能平等使用',
      '引入雨水管理体系，将场地变为城市海绵基础设施的一部分',
    ],
    closes: [
      '让设计回到土地与人居',
      '用最少的介入实现最丰富的体验',
      '为这座城市留下一处可以呼吸的空间',
    ],
  },
  
  graphic: {
    intros: [
      '用视觉讲一个值得记住的故事',
      '设计是信息与情感的精准翻译',
      '让品牌成为可被识别的态度',
      '在二维空间里造一个有重量的世界',
      '字体、色彩、构图——每一寸都是表达',
    ],
    styles: {
      '极简主义': ['留白即设计', '字体的极致运用', '色彩的克制选择'],
      '复古印刷': ['网点、油墨与做旧', '老式排版的当代演绎', '手作质感的数字模拟'],
      '现代几何': ['模数化的网格系统', '色块与几何的构成游戏', '欧洲瑞士风格的当代延续'],
      '潮流插画': ['手绘的人格化表达', '渐变与噪点的当代审美', '社交媒体友好的视觉语言'],
      '日式美学': ['和风留白与季节感', '汉字与假名的层次美', '极简但充满情绪'],
    },
    strategies: [
      '从品牌核心价值出发反向定义视觉系统',
      '建立可延展的视觉语言库，确保品牌在不同载体上保持一致',
      '色彩与字体的双轴并行实验，找到最符合品牌气质的组合',
      '考虑印刷工艺与数字呈现的双向适配',
      '为品牌建立"声音"——视觉之外的语言风格统一',
    ],
    closes: [
      '让设计成为品牌最沉默也最有力的代言',
      '用克制的视觉表达最深的态度',
      '为不被看见的设计争取一秒注意力',
    ],
  },
  
  interior: {
    intros: [
      '空间是生活的容器，也是情绪的容器',
      '用材料、光线、尺度，雕刻日常',
      '让每个角落都值得驻足',
      '从生活方式出发，反向定义空间',
    ],
    styles: {
      '现代简约': ['白墙木地板的克制', '隐藏式收纳的极致', '少而精的家具陈设'],
      '日式侘寂': ['原木与亚麻的质感对话', '不完美中的完整', '光影作为材料的一部分'],
      '北欧风格': ['浅色木材与白墙的温暖', '功能主义家具', '自然光的充分利用'],
      '工业风': ['裸露的混凝土与钢架', '皮革与金属的搭配', '空间的开放感'],
      '新中式': ['传统纹样的当代转化', '深色硬木与素色软装', '禅意空间的现代演绎'],
      '法式优雅': ['线条与曲线的雕刻感', '香槟金与浅木色', '生活仪式感的强调'],
    },
    strategies: [
      '从居住者的真实生活动线出发重新组织空间序列',
      '以光线为隐藏的设计元素，避免任何区域出现死角',
      '材料选择优先考虑耐久与触感，远胜短期视觉效果',
      '家具与陈设遵循"减一件原则"——能拿走的都拿走',
      '收纳系统隐入墙体，让生活物品有归宿',
    ],
    closes: [
      '把好生活，安进具体的房间',
      '让空间为居住者讲一个温柔的故事',
      '相信空间会改变住在里面的人',
    ],
  },
  
  industrial: {
    intros: [
      '产品是问题的回答，不是形式的炫技',
      '好的设计让人忘记设计本身',
      '为日常物品争取一点诗意',
      '从功能出发，止于形式之美',
    ],
    styles: {
      'Dieter Rams 极简': ['Less, but better', '功能优先于装饰', '色彩与材料的诚实表达'],
      '日式人文': ['物哀美学的当代演绎', '触感与温度的考究', '使用习惯的细腻洞察'],
      '北欧温暖': ['天然材料的运用', '柔和的几何形态', '生活方式产品的定位'],
      '硬核工业': ['结构外显的诚实美学', '金属与机械感', '高性能产品定位'],
      '生活美学': ['日常物品的提升', '材料与工艺的讲究', '可持续设计理念'],
    },
    strategies: [
      '深入用户使用场景，找出当前产品中最反人性的细节',
      'CMF 在草图阶段就介入，确保最终成品的质感符合设计意图',
      '与工程团队同步迭代，保证设计可制造',
      '考虑全生命周期，包含包装、运输、回收',
      '用最少的零件实现最丰富的功能',
    ],
    closes: [
      '用毫米计的克制，做更人性的产品',
      '让产品成为生活里安静的好朋友',
      '相信形式追随用户的真实需求',
    ],
  },
  
  ux: {
    intros: [
      '为复杂的系统设计简单的入口',
      '让每一次点击都有理由',
      '好的体验是看不见的体验',
      '设计是与用户的一场长期对话',
    ],
    styles: {
      '极简清爽': ['白底大留白', '排版优先于装饰', '色彩仅作功能区分'],
      '玻璃拟态': ['毛玻璃与透明分层', '柔和的高光与阴影', '深色背景的科技感'],
      '新拟物': ['软阴影与凸起感', '现实物体的数字隐喻', '触感丰富'],
      '科技深色': ['深色底 + 高对比', '荧光色点缀', '数据可视化友好'],
      'Apple 风格': ['SF 字体与系统色彩', '极致的对齐与间距', '动效的克制运用'],
    },
    strategies: [
      '从用户研究出发建立清晰的人物画像和场景地图',
      '信息架构先于视觉，避免在错误的骨架上做漂亮的皮肤',
      '原型阶段做可用性测试，让真实用户走一遍',
      '建立设计系统，让所有页面共享同一套视觉语言',
      'A/B 实验驱动关键决策，数据与直觉并重',
    ],
    closes: [
      '让产品成为用户的延伸，而不是阻碍',
      '在数据与情感之间寻找平衡',
      '为每一个被服务的用户感到值得',
    ],
  },
};

// === 工具函数 ===

function pick(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return '';
  return arr[Math.floor(Math.random() * arr.length)];
}

function pickN(arr, n) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const shuffled = [...arr].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(n, arr.length));
}

// === 模板引擎 ===

function generateFromTemplate({ field, projectName, type, style, role, area, duration, goal }) {
  const lib = KNOWLEDGE[field] || KNOWLEDGE.landscape;  // 兜底用景观
  
  const intro = pick(lib.intros);
  const styleDescs = lib.styles[style] || lib.styles[Object.keys(lib.styles)[0]];
  const styleDesc = pickN(styleDescs, 2).join('，');
  const strategies = pickN(lib.strategies, 4);
  const close = pick(lib.closes);
  
  const areaPart = area ? `，规划/服务规模约 ${area}` : '';
  const rolePart = role ? `，我担任 ${role}` : '';
  const durationPart = duration ? `，历时 ${duration}` : '';
  const goalPart = goal || '在功能、美学、可持续性三个维度找到平衡';
  
  return `【项目概况】
${projectName} 是一个 ${type} 项目${areaPart}${rolePart}${durationPart}。

【设计立意】
${intro}。本项目采用 ${style || '当代'} 的设计语言，注重${styleDesc}。

【设计目标】
本项目的核心目标是：${goalPart}。围绕这一目标，方案在多个维度展开系统性思考。

【设计策略】
${strategies.map((s, i) => `${['其一', '其二', '其三', '其四'][i]}，${s}。`).join('\n')}

【设计立意延展】
${close}。

— 由 PortfolioFlow 生成`;
}

// === DeepSeek 引擎（可选）===

async function generateFromDeepSeek(data, apiKey) {
  const { field, projectName, type, style, role, area, duration, goal } = data;
  
  const fieldNameMap = {
    landscape: '景观设计',
    graphic: '平面设计',
    interior: '室内设计',
    industrial: '工业设计',
    ux: 'UX/UI 设计',
  };
  
  const prompt = `你是一位资深的${fieldNameMap[field] || '设计'}从业者，请为下面这个作品写一段约 300 字的专业项目说明。

要求：
- 分为【项目概况】【设计立意】【设计目标】【设计策略】【创新点】五个段落
- 语言专业但有人味，避免空洞的大词
- 不要使用 emoji
- 末尾不要加签名

作品信息：
- 项目名称：${projectName}
- 项目类型：${type}
- 设计风格：${style || '未指定'}
- 我的角色：${role || '未指定'}
- 项目规模：${area || '未指定'}
- 项目时长：${duration || '未指定'}
- 核心目标：${goal || '未指定'}

请直接输出项目说明文本，不要任何前后说明。`;
  
  const response = await fetch('https://api.deepseek.com/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 800,
      temperature: 0.7,
    }),
    signal: AbortSignal.timeout(30000),  // 30 秒超时
  });
  
  if (!response.ok) {
    throw new Error(`DeepSeek API returned ${response.status}`);
  }
  
  const data2 = await response.json();
  const content = data2.choices?.[0]?.message?.content;
  if (!content) throw new Error('Empty response from DeepSeek');
  
  return content.trim() + '\n\n— 由 PortfolioFlow + DeepSeek 协作生成';
}

// === 主路由 ===

export async function onRequest({ request }) {
  if (request.method !== 'POST') {
    return jsonResponse({ error: 'Method not allowed' }, 405);
  }
  
  let body;
  try { body = await request.json(); } catch {
    return jsonResponse({ error: 'Invalid JSON' }, 400);
  }
  
  // 校验
  if (!body.field || !body.projectName || !body.type) {
    return jsonResponse({ error: 'field, projectName, type are required' }, 400);
  }
  
  const mode = body.mode || 'auto';
  const apiKey = typeof DEEPSEEK_API_KEY !== 'undefined' ? DEEPSEEK_API_KEY : null;
  const warnings = [];
  
  // 用户明确要求模板
  if (mode === 'template') {
    return jsonResponse({
      ok: true,
      source: 'template',
      content: generateFromTemplate(body),
    });
  }
  
  // 用户明确要求 AI 但没配 key
  if (mode === 'ai' && !apiKey) {
    return jsonResponse({
      error: 'DeepSeek API key not configured. Add DEEPSEEK_API_KEY in EdgeOne Pages environment variables.',
      hint: 'Or use mode=template to use the built-in template engine.',
    }, 400);
  }
  
  // auto 模式：有 key 优先 AI，失败降级
  if (apiKey) {
    try {
      const aiContent = await generateFromDeepSeek(body, apiKey);
      return jsonResponse({
        ok: true,
        source: 'ai',
        content: aiContent,
      });
    } catch (err) {
      warnings.push(`AI generation failed: ${err.message}. Falling back to template engine.`);
    }
  }
  
  // 降级到模板
  return jsonResponse({
    ok: true,
    source: 'template',
    content: generateFromTemplate(body),
    warnings: warnings.length ? warnings : undefined,
  });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
```

---

## 三、前端调用（admin.html）

```javascript
// 在作品编辑表单里，点"AI 生成介绍"按钮触发
async function generateDescription() {
  const form = document.getElementById('work-form');
  const btn = document.getElementById('btn-ai-generate');
  const targetField = document.getElementById('description');
  
  btn.disabled = true;
  btn.textContent = '✨ 生成中...';
  
  try {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify({
        field: form.field.value,
        projectName: form.title.value,
        type: form.type.value,
        style: form.style.value,
        role: form.role.value,
        area: form.area.value,
        duration: form.duration.value,
        goal: form.goal.value,
      }),
    });
    const data = await res.json();
    
    if (!res.ok) {
      alert('生成失败：' + data.error);
      return;
    }
    
    // 打字机效果展示
    targetField.value = '';
    let i = 0;
    const text = data.content;
    const timer = setInterval(() => {
      if (i >= text.length) {
        clearInterval(timer);
        btn.disabled = false;
        btn.textContent = '✨ AI 生成介绍';
        // 显示来源
        const badge = document.getElementById('ai-source-badge');
        badge.textContent = data.source === 'ai' ? '🤖 由 DeepSeek 生成' : '✍️ 由模板引擎生成';
        badge.style.display = 'inline-block';
        return;
      }
      targetField.value += text[i];
      i++;
    }, 20);
  } catch (err) {
    alert('网络错误：' + err.message);
    btn.disabled = false;
    btn.textContent = '✨ AI 生成介绍';
  }
}
```

---

## 四、可选：访客 AI 助手对话框

前台首页右下角浮动一个"问问关于这个设计师"对话框，提升网站互动感。

### functions/api/assistant.js（独立 Edge Function）

```javascript
// 简化版：根据当前作品集数据，回答访客的简单问题
export async function onRequest({ request }) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405 });
  }
  
  const { question } = await request.json();
  if (!question) {
    return new Response(JSON.stringify({ error: 'question required' }), { status: 400 });
  }
  
  // 取当前所有公开作品作为上下文
  const indexRaw = (typeof PORTFOLIO_WORKS !== 'undefined')
    ? await PORTFOLIO_WORKS.get('index:all', 'json')
    : [];
  const slugs = (indexRaw || []).slice(0, 20);
  const works = await Promise.all(slugs.map(s => 
    PORTFOLIO_WORKS.get(`work:${s}`, 'json')
  ));
  const validWorks = works.filter(Boolean);
  
  const apiKey = typeof DEEPSEEK_API_KEY !== 'undefined' ? DEEPSEEK_API_KEY : null;
  
  if (apiKey) {
    // 真 LLM
    return await answerWithAI(question, validWorks, apiKey);
  }
  
  // 规则引擎兜底
  return answerWithRules(question, validWorks);
}

function answerWithRules(question, works) {
  const q = question.toLowerCase();
  
  let answer;
  if (q.includes('多少') || q.includes('几个') || q.includes('total')) {
    answer = `我目前发布了 ${works.length} 个作品。`;
  } else if (q.includes('擅长') || q.includes('好') || q.includes('best')) {
    const types = [...new Set(works.map(w => w.type))];
    answer = `从作品看，我主要在 ${types.slice(0, 3).join('、')} 等领域有较多实践。`;
  } else if (q.includes('最新') || q.includes('latest')) {
    const latest = works[0];
    answer = latest ? `最新作品是「${latest.title}」（${latest.year}）。` : '暂无作品。';
  } else if (q.includes('联系') || q.includes('contact')) {
    answer = '欢迎通过页面底部的联系方式与我沟通。';
  } else {
    answer = `感谢提问。这个问题可能需要更具体的描述，建议直接查看作品集了解我的设计风格，或通过联系方式深入交流。`;
  }
  
  return new Response(JSON.stringify({ ok: true, source: 'rules', answer }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

async function answerWithAI(question, works, apiKey) {
  const context = works.slice(0, 10).map(w => 
    `- ${w.title}（${w.type}, ${w.year}）：${w.summary}`
  ).join('\n');
  
  const prompt = `你是一位设计师本人，正在自己的作品集网站上回答访客的提问。

我的作品列表：
${context}

访客的问题：${question}

请用第一人称简洁友好地回答（2-3 句话），如果问题与作品无关，礼貌引导对方查看作品集。`;
  
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
        temperature: 0.6,
      }),
      signal: AbortSignal.timeout(20000),
    });
    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content || '抱歉，我现在不太方便回答这个问题。';
    return new Response(JSON.stringify({ ok: true, source: 'ai', answer }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } catch (err) {
    return answerWithRules(question, works);
  }
}
```

---

## 五、AI 执行清单

生成 `generate.js` 时按顺序确认：

- [ ] 包含 5 个领域的完整词库（intros / styles / strategies / closes）
- [ ] `pick()` 和 `pickN()` 工具函数实现随机选择
- [ ] 模板引擎为默认行为（零依赖即可跑）
- [ ] DeepSeek 接入是可选增强（环境变量 `DEEPSEEK_API_KEY`）
- [ ] DeepSeek 调用失败时**静默降级**到模板引擎，附带 warnings 字段
- [ ] DeepSeek 设置 30 秒 timeout
- [ ] 响应里的 `source` 字段如实标注来源（`'ai'` 或 `'template'`）
- [ ] 前端打字机效果加 20ms/字符的延迟，增强 AI 感

---

## 六、关键技术亮点（评委视角）

| 亮点 | 评委看到会想 |
|---|---|
| 双引擎容错降级 | "工程思维成熟，考虑生产环境" |
| 5 个领域独立词库 | "真的为不同设计领域做了功课" |
| 随机抽取保证生成结果不重复 | "做出 AI 感的核心技巧" |
| 来源透明（source 字段） | "用户体验透明诚实" |
| 不强依赖外部 API Key | "零配置可复现" |

---

## 七、反例

❌ **错误**：所有领域共用一套词库  
✅ **正确**：每个领域独立词库，专业术语隔离

❌ **错误**：调用 DeepSeek 失败时直接报错 500  
✅ **正确**：静默降级到模板引擎，warnings 字段透明告知

❌ **错误**：每次生成结果一模一样（用 join 拼死内容）  
✅ **正确**：`pick()` 随机抽取，让 100 次生成有 100 种结果

❌ **错误**：把 DEEPSEEK_API_KEY 硬编码在代码里  
✅ **正确**：从环境变量读取，README 中引导用户配置
