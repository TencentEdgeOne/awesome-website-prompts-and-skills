# NomadPort

> **赛道**：Skill　**作者**：严学峰 · [GitHub @yanxuefeng](https://github.com/yanxuefeng)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![NomadPort demo](../assets/demos/nomadport-122.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/nomadport-122.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | NomadPort |
| 赛道 | Skill |
| 作者 | 严学峰 |
| GitHub | [@yanxuefeng](https://github.com/yanxuefeng) |

## 📝 作品介绍

NomadPort 是一款为数字游民打造的全栈作品集 Skill。用户只需说“帮我做一个个人IP网站”，AI 即可自动生成赛博朋克风格作品集，包含动态博客、邮件订阅计数器及联系表单。

技术层面，Skill 封装了完整的 React + Tailwind CSS 前端模板，并通过 EdgeOne Pages 边缘函数（Edge Functions）处理 `/api/subscribe`、`/api/contact` 等请求，利用 KV 存储持久化订阅邮箱和博客数据。加速区域选择“全球（不含中国大陆）”，无需备案，开箱即用。

该 Skill 实现了生成→构建→部署的全自动化闭环，作品兼具视觉冲击力与全栈能力，可一键复现并独立部署上线。

---

## 🚀 完整 Skill 说明

````
封装一个 **`nomad-portfolio-skill`**，用户只需说 **“帮我做一个数字游民作品集网站”**，AI 自动：
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.
- 检测 EdgeOne CLI 环境并登录
- 创建项目骨架（包含前端 + Edge Functions + KV 模板）
- 安装依赖
- 指导用户绑定 KV（或自动创建）
- 生成代码并部署

### 3.2 Skill 目录结构

```
skill-nomad-portfolio/
├── SKILL.md
├── references/
│   └── kv-setup.md
└── templates/
    └── full-stack/
        ├── package.json
        ├── src/
        │   ├── App.jsx
        │   ├── index.jsx
        │   └── styles.css
        ├── edge-functions/api/
        │   ├── posts.js
        │   ├── subscribe.js
        │   └── contact.js
        └── README.md

````
