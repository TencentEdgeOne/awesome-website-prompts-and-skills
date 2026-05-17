# Soul 测试台

> **赛道**：Skill　**作者**：Senkawa
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Soul 测试台 demo](../assets/demos/soul-137.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Soul 测试台 |
| 赛道 | Skill |
| 作者 | Senkawa |

## 📝 作品介绍

Soul 测试台是一款面向 AI Agent 开发者的 Soul（人格文件）训练与评估工具。用户粘贴 Soul 文本，系统用 3 道场景题（回绝生人 / 婉拒熟人 / 应对压力）测试 Agent 的边界风格忠实度，并从 6 个维度（模板内容、边界清晰、立场表达、拒绝方式、无废话、简洁度）给出量化评分。
主要亮点：① 推理链可视化——动画展示模型每一步判断依据；② 改进项一键应用——勾选即可修改 Soul 并重新评分；③ 进化记录——localStorage 持久化，追踪训练过程。纯静态部署，打开即用，无需后端。
在Prompt版的基础上增加使用了KV Cashe管理打分和历史记录，并通过Edge Functions实现了真实模型接入的测试，目前为本地Ollama

---

## 🚀 完整 Skill 说明

```
https://github.com/Sensenkawa/soul-testbench-skill

```
