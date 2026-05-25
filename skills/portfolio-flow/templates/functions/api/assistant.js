/**
 * PortfolioFlow · AI Assistant API（前台访客对话框）
 *
 * 路由：
 *   POST /api/assistant { question: string }
 *
 * 双引擎：
 *   - 有 DEEPSEEK_API_KEY：用 DeepSeek 答（以"设计师本人"第一人称）
 *   - 无 Key：规则引擎兜底（关键词匹配）
 */

export async function onRequest({ request }) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  let body;
  try { body = await request.json(); } catch {
    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  const { question } = body;
  if (!question) {
    return new Response(JSON.stringify({ error: 'question required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  
  // 取当前所有公开作品作为上下文
  let validWorks = [];
  if (typeof PORTFOLIO_WORKS !== 'undefined') {
    const indexRaw = await PORTFOLIO_WORKS.get('index:all', 'json');
    const slugs = (indexRaw || []).slice(0, 20);
    const works = await Promise.all(slugs.map(s => 
      PORTFOLIO_WORKS.get(`work:${s}`, 'json')
    ));
    validWorks = works.filter(Boolean).filter(w => w.isPublished !== false);
  }
  
  const apiKey = typeof DEEPSEEK_API_KEY !== 'undefined' ? DEEPSEEK_API_KEY : null;
  
  if (apiKey) {
    try {
      return await answerWithAI(question, validWorks, apiKey);
    } catch (err) {
      // 静默降级到规则引擎
    }
  }
  
  return answerWithRules(question, validWorks);
}

// === 规则引擎兜底 ===

function answerWithRules(question, works) {
  const q = question.toLowerCase();
  
  let answer;
  if (q.includes('多少') || q.includes('几个') || q.includes('total') || q.includes('how many')) {
    answer = `我目前发布了 ${works.length} 个作品。`;
  } else if (q.includes('擅长') || q.includes('好') || q.includes('best') || q.includes('强项')) {
    const types = [...new Set(works.map(w => w.type).filter(Boolean))];
    answer = types.length > 0
      ? `从作品看，我主要在 ${types.slice(0, 3).join('、')} 等领域有较多实践。`
      : '请直接查看作品集了解我的设计实践。';
  } else if (q.includes('最新') || q.includes('latest') || q.includes('近期')) {
    const latest = works[0];
    answer = latest ? `最新作品是「${latest.title}」（${latest.year}）。` : '暂无作品。';
  } else if (q.includes('联系') || q.includes('contact') || q.includes('合作') || q.includes('找到我')) {
    answer = '欢迎通过页面底部的邮箱与我沟通，我会在 48 小时内回复每一封诚意之信。';
  } else if (q.includes('你是') || q.includes('介绍') || q.includes('about') || q.includes('who')) {
    answer = `这是一个用 PortfolioFlow 搭建的设计师作品集，目前展示了 ${works.length} 个作品。具体的设计理念请查看作品详情。`;
  } else {
    answer = '感谢提问。这个问题可能需要更具体的描述，建议直接查看作品集了解我的设计风格，或通过联系方式深入交流。';
  }
  
  return new Response(JSON.stringify({ ok: true, source: 'rules', answer }), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}

// === DeepSeek AI 引擎 ===

async function answerWithAI(question, works, apiKey) {
  const context = works.slice(0, 10).map(w => 
    `- ${w.title}（${w.type}, ${w.year}）：${w.summary || ''}`
  ).join('\n');
  
  const prompt = `你是一位设计师本人，正在自己的作品集网站上回答访客的提问。

我的作品列表：
${context || '（暂无作品）'}

访客的问题：${question}

请用第一人称简洁友好地回答（2-3 句话）。如果问题与作品集无关，礼貌引导对方查看作品集或通过联系方式深入交流。`;
  
  try {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 300,
        temperature: 0.6,
      }),
      signal: AbortSignal.timeout(20000),
    });
    
    if (!response.ok) throw new Error(`DeepSeek returned ${response.status}`);
    
    const data = await response.json();
    const answer = data.choices?.[0]?.message?.content?.trim() || '抱歉，我现在不太方便回答这个问题。';
    
    return new Response(JSON.stringify({ ok: true, source: 'ai', answer }), {
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  } catch (err) {
    // 由调用方处理降级
    throw err;
  }
}
