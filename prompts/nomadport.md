# NomadPort —— 数字游民作品集

> **赛道**：Prompt　**作者**：严学峰 · [GitHub @yanxuefeng](https://github.com/yanxuefeng)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![NomadPort —— 数字游民作品集 demo](../assets/demos/nomadport.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | NomadPort —— 数字游民作品集 |
| 赛道 | Prompt |
| 作者 | 严学峰 |
| GitHub | [@yanxuefeng](https://github.com/yanxuefeng) |

## 📝 作品介绍

作品简介：NomadPort —— 数字游民作品集

NomadPort 是为独立开发者、设计师、创作者打造的个人IP作品集网站。它融合赛博朋克美学与全栈能力：动态打字机标题、滚动视差、鼠标跟随粒子带来极强视觉冲击；作品网格、博客推荐、订阅计数器与联系表单一应俱全。

技术层面，前端采用 React + Tailwind CSS，后端通过 EdgeOne Pages 边缘函数与 KV 存储实现订阅人数实时统计、博客内容动态管理。作品已部署至腾讯云 EdgeOne 国际站（加速区域选择“全球不含中国大陆”），无需备案，开箱即用。

该方案同时参加 Prompts 与 Skills 双赛道：一条结构化 Prompt 即可复现惊艳视觉；封装为 Skill 后更可一键生成全栈个人站。点击链接即可体验数字游民的专属数字名片。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

 任务目标
你是一名顶尖创意全栈设计师，请构建一个名为“NomadPort”的个人IP/数字游民作品集网站。风格必须为赛博朋克美学或新粗野主义（任选其一），具有极高的视觉冲击力。

 审美约束（先于业务执行）
- 字体系统：使用展示性字体（如 Atyp， Helvetica Now Display， General Sans），标题800字重，正文干净。完全禁用 Inter / Roboto / Arial 常规搭配。
- 色彩主题：深色背景 + 霓虹色点缀（赛博朋克）或 柔和毛玻璃 + 不规则网格（新粗野主义）。纯白背景禁止。
- 动态交互：必须包含滚动视差、鼠标跟随粒子或毛玻璃悬停特效。
- 背景系统：动态噪点纹理、不规则网格或抽象几何图形，禁用纯色或简单渐变。

```
