# SaaS Landing Page Generator

> **赛道**：Skill　**作者**：林小侠
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![SaaS Landing Page Generator cover](../assets/demos/saas-landing-page-generator.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | SaaS Landing Page Generator |
| 赛道 | Skill |
| 作者 | 林小侠 |

## 📝 作品介绍

作品名称：SaaS Landing Page Generator
基于 Anthropic Skill 规范的 SaaS 落地页生成 Skill。输入产品名称、卖点、定价，自动生成完整可运行的 React+Vite+Tailwind CSS 项目并引导部署至 EdgeOne Pages。

含完整 SKILL.md（触发词、工作流、代码模板）+ 6 个生产级组件。代码构建通过（vite build ✓）。

适用：Indie Hacker 发官网、SaaS 产品 MVP、无代码生成 Landing Page。

---

## 🚀 完整 Skill 说明

````
# 挑战赛提交内容

## 作品名称
SaaS Landing Page Generator Skill

## 作品类型
Skill（技能包）

## 作者昵称
（填你提交问卷时用的昵称，需与群昵称一致）

## 作品简介
一个完整的 SaaS 落地页生成 Skill，基于 Anthropic Skill 规范，集成 EdgeOne Pages 一键部署能力。用户输入产品名称、卖点、定价等信息，Skill 自动生成完整的 React + Vite + Tailwind CSS 项目骨架，并引导部署至 EdgeOne Pages。Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

## 适用场景
- Indie Hacker 快速发布产品官网
- 企业 SaaS 产品落地页 MVP
- 营销团队无需代码生成 Landing Page
- 开发者学习 EdgeOne Pages 全栈部署流程

## 技术栈
- Frontend: React 18 + Vite + Tailwind CSS
- Deployment: EdgeOne Pages（CLI + Git 两种模式）
- Optional: Edge Functions（表单处理）

## Skill 包含内容
- `SKILL.md`：完整触发词、工作流说明、代码模板
- 6 个完整 React 组件（Navbar / Hero / Features / Pricing / Testimonials / CTA / Footer）
- 开箱即用的 `package.json`、`vite.config.js`、`tailwind.config.js`
- EdgeOne Pages 部署指南（CLI + Git 两种方式）

## 使用方法
在 WorkBuddy 中安装本 Skill 后，输入：
```
用 saas-landing-gen skill，帮我做一个 AI 写作工具的落地页
产品名：WordAI Pro
卖点：AI 写作、多语言、SEO 优化
定价：免费 / Pro $19 / 企业版联系我们
主色调：紫色
部署到 EdgeOne Pages
```

Skill 会自动生成完整项目代码，并引导完成 EdgeOne Pages 部署。

## Demo 代码说明
附带的 demo-saas-landing/ 目录包含完整可运行代码，可直接 `npm install && npm run dev` 启动，或连接 EdgeOne Pages 一键部署。

## EdgeOne Pages 部署步骤
1. 将生成的项目代码推送到 GitHub
2. 登录 EdgeOne Pages 控制台
3. 连接 Git 仓库，选择 demo-saas-landing 目录
4. 点击部署，获得永久访问链接

或通过 CLI：
```bash
npm install -g edgeone-pages-cli
edgeone-pages deploy . --name saas-landing-demo
```

## 作品亮点
- 严格遵循 Anthropic Skill 规范，含完整 frontmatter 元数据
- 代码模板生产可用，非伪代码
- 集成 EdgeOne Pages 部署，符合挑战赛技术要求
- 组件化设计，易于扩展和定制
- 中文注释，适合国内开发者使用

## 提交文件清单
- `saas-landing-gen-skill.zip`：Skill 包（含 SKILL.md）
- `demo-saas-landing/`：完整可运行 Demo 代码
- 本说明文件

````
