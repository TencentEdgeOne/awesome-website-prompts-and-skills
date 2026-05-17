# 智能招聘仪表盘

> **赛道**：Prompt　**作者**：严学峰 · [GitHub @yanxuefengyan](https://github.com/yanxuefengyan)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![智能招聘仪表盘 demo](../assets/demos/zhi-neng-zhao-pin-yi-biao-pan.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/zhi-neng-zhao-pin-yi-biao-pan.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 智能招聘仪表盘 |
| 赛道 | Prompt |
| 作者 | 严学峰 |
| GitHub | [@yanxuefengyan](https://github.com/yanxuefengyan) |

## 📝 作品介绍

智能招聘仪表盘
核心价值：为HR提供一站式候选人管理与数据看板，支持增删改查与面试状态追踪，数据持久化不丢失。
适用场景：中小企业招聘流程管理、面试进度追踪、候选人库维护。
亮点功能：React+Tailwind仪表盘、Recharts招聘漏斗图、KV存储持久化、Edge Functions全栈CRUD接口。一句话Prompt可生成完整前后端项目，秒级部署上线。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

# 任务目标

你是一名资深全栈工程师，请使用 React + Tailwind CSS + Recharts 构建一个企业级智能招聘管理仪表盘（HR Recruitment Dashboard）。

# 数据存储要求

在 ./edge-functions/api/candidates 目录下：

创建一个 Edge Function，处理候选人数据的 GET / POST / PUT / DELETE 完整 CRUD 逻辑。

数据持久化必须使用 EdgeOne Pages KV。

步骤：

1. 在 EdgeOne Pages 控制台创建 KV 命名空间，命名为 "hr_recruitment_kv"
2. 将命名空间与 Pages 项目绑定，运行时环境变量名设为 "HR_KV"
3. 在 Edge Function 中通过 HR_KV.get() 和 HR_KV.put() 操作数据

```
