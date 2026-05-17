# NexusChat

> **赛道**：Skill　**作者**：蜗牛 · [GitHub @Mr-xxp](https://github.com/Mr-xxp)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![NexusChat cover](../assets/demos/nexuschat-125.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/nexuschat-125.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | NexusChat |
| 赛道 | Skill |
| 作者 | 蜗牛 |
| GitHub | [@Mr-xxp](https://github.com/Mr-xxp) |

## 📝 作品介绍

🔮 NexusChat — 多模型 AI 对话客户端
作品名称
NexusChat Nexus 意为「枢纽、连接」，Chat 代表对话——寓意将分散在各处的 AI 大模型汇聚于一处，打通用户与 AI 的连接入口。

核心价值
一个界面，接入所有主流 AI 大模型，无需搭建后端，即开即用。

当前市面上 AI 模型百花齐放——Claude、DeepSeek、GLM、Qwen、Moonshot、Doubao……用户往往需要在多个平台之间来回切换，体验割裂、效率低下。NexusChat 将 7 家主流模型服务商统一接入，只需填写各自的 API Key，即可在同一界面自由切换模型，专注于对话本身，而非工具切换。

适用场景
场景	说明
🧑‍💻 开发者评测	同一问题快速对比不同模型的回答质量
🏢 企业内部工具	自部署、自配置 Key，数据不经第三方
📚 学习与研究	随时切换最适合当前任务的模型
🌍 国际化用户	内置中英双语，全球 CDN 加速访问
亮点功能
① 7 大模型服务商，一站接入 支持 Anthropic（Claude）、DeepSeek、智谱 GLM、通义千问、Moonshot、豆包，以及自定义 OpenAI 兼容端点——覆盖国内外主流大模型。

② 实时流式输出，打字机效果 全面采用 SSE（Server-Sent Events）流式传输，AI 回复逐字呈现，响应体验与原生客户端无异。

③ 对话永久保存，跨页面不丢失 基于 IndexedDB 持久化所有对话历史，刷新或关闭页面后重新打开，消息记录完整保留。

④ 纯静态部署，零运维成本 单页应用（SPA）+ EdgeOne Edge Function 代理，无需服务器，直接部署到 EdgeOne Pages，全球 CDN 分发，访问快、维护零成本。

⑤ 精致 UI 设计，支持深色 / 浅色主题 玻璃拟态（Glass Morphism）设计语言，动态渐变背景，代码块语法高亮，内置亮色 / 暗色主题切换，界面美观而专业。

⑥ 中英双语，开箱即用 内置 i18n 国际化系统，自动识别浏览器语言，中英无缝切换，适合国内外用户。

技术栈一览
前端：Vue 3 (CDN) + 纯 CSS 变量 + Marked.js + Highlight.js
部署：EdgeOne Pages (静态托管 + Edge Function 代理)
存储：浏览器 IndexedDB（零后端依赖）
流式：ReadableStream SSE 解析（Anthropic 原生 + OpenAI 兼容双协议）

---

## 🚀 完整 Skill 说明

```
https://github.com/Mr-xxp/nexuschat

```
