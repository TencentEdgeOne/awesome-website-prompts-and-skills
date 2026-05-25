/**
 * PortfolioFlow · AI Generate API
 *
 * 路由：
 *   POST /api/generate
 *   {
 *     field: 'landscape' | 'graphic' | 'interior' | 'industrial' | 'ux',
 *     projectName: string,
 *     type: string,
 *     style?: string,
 *     role?: string,
 *     area?: string,
 *     duration?: string,
 *     goal?: string,
 *     mode?: 'template' | 'ai' | 'auto'
 *   }
 *
 * 双引擎：
 *   - 默认 / auto：有 DEEPSEEK_API_KEY 先 AI，失败降级模板
 *   - mode=template：强制模板
 *   - mode=ai：强制 AI（无 Key 时报错）
 *
 * 环境变量：DEEPSEEK_API_KEY（可选）
 */

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

// === 工具 ===

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
  const lib = KNOWLEDGE[field] || KNOWLEDGE.landscape;
  
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

// === DeepSeek 引擎 ===

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
    signal: AbortSignal.timeout(30000),
  });
  
  if (!response.ok) {
    throw new Error(`DeepSeek API returned ${response.status}`);
  }
  
  const respData = await response.json();
  const content = respData.choices?.[0]?.message?.content;
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
  
  if (!body.field || !body.projectName || !body.type) {
    return jsonResponse({ error: 'field, projectName, type are required' }, 400);
  }
  
  const mode = body.mode || 'auto';
  const apiKey = typeof DEEPSEEK_API_KEY !== 'undefined' ? DEEPSEEK_API_KEY : null;
  const warnings = [];
  
  if (mode === 'template') {
    return jsonResponse({
      ok: true,
      source: 'template',
      content: generateFromTemplate(body),
    });
  }
  
  if (mode === 'ai' && !apiKey) {
    return jsonResponse({
      error: 'DeepSeek API key not configured. Add DEEPSEEK_API_KEY in EdgeOne Pages environment variables.',
      hint: 'Or use mode=template to use the built-in template engine.',
    }, 400);
  }
  
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
