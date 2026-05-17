# AI Avatar Pro

> **赛道**：Prompt　**作者**：庞通 · [GitHub @pangtongya](https://github.com/pangtongya)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![AI Avatar Pro cover](../assets/demos/ai-avatar-pro.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/ai-avatar-pro.gif" alt="AI Avatar Pro demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | AI Avatar Pro |
| 赛道 | Prompt |
| 作者 | 庞通 |
| GitHub | [@pangtongya](https://github.com/pangtongya) |

## 📝 作品介绍

作品名称
AI Avatar Pro - 商业级AI头像生成器营销落地页

文字介绍
AI Avatar Pro是一个基于EdgeOne Pages构建的商业级AI头像生成器营销落地页，完整展示了EdgeOne Pages的全栈能力：

前端：React 18 + Vite + TypeScript + Tailwind CSS，实现惊艳的视觉效果，包括渐变蓝紫色调、玻璃拟态设计、Framer Motion流畅动画、Three.js 3D头像实时展示，以及完美的响应式布局和暗黑模式支持。

后端（EdgeOne Pages）：

Edge Functions：高性能边缘计算API，处理访客计数、邮箱订阅、AI生成演示等请求
KV Storage：全球分布式键值存储，持久化存储访客数据和订阅用户信息
Middleware：CORS和缓存控制中间件，统一处理请求
全球CDN加速：边缘节点分发，确保全球访问极速体验
本作品参加 WorkBuddy×EdgeOne Pages AI挑战赛。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

# 严格遵循以下要求生成作品，所有技术栈和能力必须来自EdgeOne Pages官方技能
# 参考官方示例仓库：https://github.com/TencentEdgeOne/awesome-website-prompts-and-skills
# 参考官方开发规范：https://github.com/TencentEdgeOne/edgeone-pages-skills/blob/main/skills/edgeone-pages-dev/references/recipes.md

---

## 🎯 目标
生成一个商业级AI头像生成器营销落地页，用于展示产品功能、获取用户订阅和演示EdgeOne Pages的全栈能力。作品必须达到官方示例的水准，且有独特的差异化亮点。

## 🎨 视觉风格（UI/UX 45%权重，拿满43分+）
- 主色调：渐变蓝紫色（#6366f1 → #8b5cf6），辅助色：#10b981（成功）、#ef4444（错误）
- 中性色：严格使用Tailwind CSS默认灰度色系（slate-50到slate-900）
- 整体风格：现代极简、科技感、高级感，大量使用玻璃拟态和柔和阴影
- 动画要求：**必须使用Framer Motion实现所有动画**，所有过渡时长0.3秒，使用ease-out曲线
- 响应式：完美适配320px到1920px所有屏幕尺寸，移动端优先

## 🛠️ 技术栈要求（必须严格遵守，否则直接扣分）
- 前端：React 18 + Vite + TypeScript + Tailwind CSS v3 + shadcn/ui + Framer Motion
- 后端能力：**必须使用EdgeOne Pages官方技能实现**
  - Edge Functions：实现访客计数、邮箱订阅API、简单的AI头像生成演示API
  - KV Storage：存储访客数和订阅邮箱
  - Middleware：实现API路由保护和缓存控制
- 项目结构：严格遵循官方recipes.md规范，使用文件系统路由
- 所有图标：**只能使用shadcn/ui自带的Lucide图标**，禁止使用任何外部图标库
- 所有图片：使用picsum.photos的稳定ID链接，禁止使用随机图片

## 📄 页面结构（从上到下，每个板块都要有动画）
1. **导航栏**
   - 左侧：logo "AI Avatar Pro"，点击滚动到顶部
   - 右侧：功能、价格、关于、立即使用按钮
   - 交互：滚动时变为半透明玻璃拟态背景，添加阴影
   - 额外功能：**暗黑/浅色模式切换按钮**，使用shadcn/ui的ThemeProvider实现

2. **首屏Hero区（胜负手，必须惊艳）**
   - 大标题："10秒生成你的专属AI头像"，使用渐变文字效果
   - 副标题："上传一张照片，AI帮你生成100种风格的专业头像"
   - 中间：**实时3D头像展示区**，使用Three.js实现一个旋转的3D头像模型
   - 下方：醒目的"上传照片生成"主按钮，hover时有缩放和发光效果
   - 背景：轻微的粒子浮动动画，使用Canvas实现

3. **功能介绍区**
   - 标题："为什么选择AI Avatar Pro"
   - 4个玻璃拟态卡片，每个卡片包含：Lucide图标、标题、简短描述
   - 功能：100+风格可选、高清无水印、批量生成、商业使用授权
   - 动画：卡片进入视口时从下方淡入，hover时上移5px并加深阴影

4. **风格展示区**
   - 标题："支持100+种风格"
   - 3×4网格布局展示12张不同风格的AI头像
   - 交互：hover时头像放大1.1倍，显示风格名称标签
   - 点击任意头像，弹出模态框展示高清大图和风格介绍

5. **价格套餐区**
   - 标题："选择适合你的套餐"
   - 3个套餐卡片：免费版、基础版（最受欢迎）、专业版
   - 每个卡片包含：价格、功能列表、立即购买按钮
   - 交互：点击套餐卡片会有选中效果，价格数字有计数动画

6. **用户评价区**
   - 标题："用户怎么说"
   - 自动轮播的用户评价卡片，每条评价包含头像、姓名、职业、评价内容
   - 支持手动切换和指示器导航

7. **订阅区**
   - 标题："订阅获取最新功能和优惠"
   - 邮箱输入框和订阅按钮，使用shadcn/ui的Form组件
   - 提交后通过Edge KV存储邮箱，显示成功提示
   - 加入邮箱格式验证和错误处理

8. **技术栈说明区（评委专属加分项）**
   - 标题："本作品基于EdgeOne Pages构建"
   - 列出使用的所有EdgeOne能力：Edge Functions、KV Storage、Middleware、全球加速
   - 加入"一键复制Prompt"按钮，点击后复制完整参赛Prompt到剪贴板

9. **页脚**
   - 版权信息、隐私政策链接、联系方式
   - 显示"本站已有X位访客"（通过Edge Functions实现）
   - 加入："本作品参加WorkBuddy×EdgeOne Pages AI挑战赛，欢迎Star官方仓库支持我：https://github.com/TencentEdgeOne/awesome-website-prompts-and-skills"

## ⚡ 交互效果（必须全部实现）
- 所有按钮：hover时上移3px，加深阴影，点击时有缩放反馈
- 所有卡片：hover时上移5px，添加阴影
- 页面滚动：每个板块进入视口时，元素从下方淡入（使用Framer Motion的whileInView）
- 模态框：弹出和关闭时有缩放和淡入淡出动画
- 表单：输入框聚焦时有边框高亮效果，提交时有加载状态
- 暗黑模式：切换时有平滑的颜色过渡动画

## 🚀 部署要求（必须严格遵守）
- 自动生成完整的package.json和vite.config.ts
- 自动生成edgeone.json配置文件，配置缓存规则和边缘函数
- 自动安装所有依赖
- 自动构建并部署到EdgeOne Pages
- 生成永久访问链接
- **代码必须100%可复现**：任何人复制此Prompt，都能得到完全相同的效果

## ✅ 额外要求
- 加入完整的错误边界处理，避免页面崩溃
- 加入骨架屏加载状态，提升用户体验
- 所有API请求都要有加载状态和错误处理
- 代码注释清晰，关键功能有说明
- 生成README.md文件，包含作品介绍、技术栈、部署说明和完整Prompt

```
