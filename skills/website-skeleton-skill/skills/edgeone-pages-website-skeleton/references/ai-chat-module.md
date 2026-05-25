# AI Chat 模块参考文档

## 一、架构选择

**Edge Function 限制：**
- 200ms **CPU time** 限制（不是 wall clock time）
- `fetch()` 到外部 AI API 的 I/O 等待**不计入** CPU time
- **无 `waitUntil`**：异步写 KV 无法保证在响应发送前完成

**结论：** 流式 SSE 主力实现在 **Cloud Functions**，历史读取在 **Edge Functions**。

## 二、SSE 实现方案 B（前端中转历史）

```
前端
  ↓ GET /api/ai/history（Edge，KV 读取）
  ← 拿到 history JSON

  ↓ 建立 SSE 连接 /api/ai/chat-stream（Cloud）
  ← 带 history context 参数

Cloud SSE 流式响应
  ↓ 完成后异步写 KV（不阻塞响应）
```

```javascript
// Cloud Function: cloud-functions/api/ai/chat-stream.js
export async function onRequest(request, env) {
  const { userId } = await auth(request, env);
  const url = new URL(request.url);
  const historyParam = url.searchParams.get('history');
  const history = historyParam ? JSON.parse(historyParam) : [];

  const stream = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();

      async function sendEvent(type, data) {
        controller.enqueue(encoder.encode(`event: ${type}\ndata: ${JSON.stringify(data)}\n\n`));
      }

      try {
        await sendEvent('status', { status: 'thinking' });

        const response = await fetch('https://api.example.com/chat', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${env.AI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ messages: history, stream: true }),
        });

        const reader = response.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value);
          await sendEvent('message', { content: chunk });
        }

        await sendEvent('done', {});

      } catch (err) {
        await sendEvent('error', { message: err.message });
      } finally {
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    }
  });
}
```

## 三、前端 SSE 客户端

```javascript
// client/src/services/ai.js
import { EventBus } from '../utils/event-bus.js';

class AIService {
  constructor() {
    this.es = null;
  }

  async startChatSession() {
    // Step 1: 从 Edge KV 拿历史
    const history = await fetch('/api/ai/history').then(r => r.json());

    // Step 2: 建立 SSE，带历史 context
    this.es = new EventSource(`/api/ai/chat-stream?history=${encodeURIComponent(JSON.stringify(history))}`);

    this.es.addEventListener('message', (e) => {
      const data = JSON.parse(e.data);
      EventBus.emit('ai:message', { role: 'assistant', content: data.content });
    });

    this.es.addEventListener('status', (e) => {
      EventBus.emit('ai:status', JSON.parse(e.data));
    });

    this.es.addEventListener('done', () => {
      EventBus.emit('ai:status', { status: 'idle' });
    });

    this.es.addEventListener('error', (e) => {
      EventBus.emit('ai:error', { message: 'SSE 连接断开' });
    });
  }

  sendMessage(content) {
    EventBus.emit('ai:message', { role: 'user', content });
    return fetch('/api/ai/chat-stream', {
      method: 'POST',
      body: JSON.stringify({ content }),
      credentials: 'include'
    });
  }
}
```

## 四、AI 限流

```javascript
// Edge Middleware 或独立限流函数
async function aiRateLimit(request, env, userId, ip) {
  const key = userId ? `ai:user:${userId}` : `ai:ip:${ip}`;
  const limit = userId ? 60 : 10;  // 已登录 60次/分钟，未登录 10次/分钟
  const window = 60;

  const count = parseInt(await env.KV.get(`rl:${key}:${Math.floor(Date.now() / 60000)}`) || '0');
  if (count >= limit) {
    return { allowed: false, remaining: 0 };
  }
  await env.KV.put(`rl:${key}:${Math.floor(Date.now() / 60000)}`, String(count + 1), { expirationTtl: 65 });
  return { allowed: true, remaining: limit - count - 1 };
}
```

## 五、AI Widget（嵌入代码）

```javascript
// 注册为 Custom Element，完全自包含，不依赖 SPA 状态
class AIChatWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host { position: fixed; bottom: 20px; right: 20px; z-index: 9999; }
        .widget { width: 360px; height: 520px; border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.15); }
      </style>
      <div class="widget"><!-- 渲染逻辑 --></div>
    `;
  }
}
customElements.define('ai-chat-widget', AIChatWidget);
```

## 六、安全注意事项

### 6.1 会话所有权校验（必须实现）

AI Chat 的会话历史存储在 KV 中，**必须校验当前用户是否为会话所有者**。参见个人仓库中的完整实现：
https://github.com/liuboacean/website-skeleton-skill

### 6.2 数据清理

- AI 聊天历史建议设置 KV TTL（如 30 天）
- 用户注销时应提供清除聊天历史的选项
- 不在客户端持久化完整的聊天历史

### 6.3 限流

已登录用户 60 次/分钟，未登录用户 10 次/分钟。
