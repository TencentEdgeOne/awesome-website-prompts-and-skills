# ÉCLAT

> **赛道**：Prompt　**作者**：巷陌离 · [GitHub @xxx-web](https://github.com/xxx-web)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![ÉCLAT cover](../assets/demos/clat-saas.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/clat-saas.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | ÉCLAT |
| 赛道 | Prompt |
| 作者 | 巷陌离 |
| GitHub | [@xxx-web](https://github.com/xxx-web) |

## 📝 作品介绍

作品名称： ÉCLAT — 奢侈品电商体验平台

核心价值： 为高端珠宝、香水、手袋品牌提供沉浸式数字购物体验，融合电影感视觉叙事与流畅交互，重新定义奢侈品线上展示标准。

适用场景：

奢侈品品牌官方线上精品店
高端电商网站模板
视觉驱动的产品展示平台
亮点功能：

🎬 电影感 Hero 区 — 全屏视频背景 + 模糊入场动画
🤖 AI 推荐系统 — 基于内容与协同过滤的混合推荐算法
⚡ Edge Functions — 无服务器架构，毫秒级响应
📊 实时浏览计数 — KV Storage 驱动的 product 热度追踪
📱 完美响应式 — 从桌面到移动端的无缝适配
🎨 奢华设计系统 — 黄金配色、玻璃态效果、Playfair Display 字体
技术栈： React 18 + Vite 5 + TypeScript + Tailwind CSS + Framer Motion + EdgeOne Pages

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# ÉCLAT 奢侈品电商网站 - AI 生成 Prompt

## 项目概述

创建一个名为 "ÉCLAT" 的奢侈品电商网站，涵盖珠宝、香水和手袋三大品类。网站需要体现极简主义美学、电影感叙事和高端奢华感。使用 React + Vite + TypeScript + Tailwind CSS 构建，并部署到 EdgeOne Pages（支持 Edge Functions 和 KV Storage）。Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

---

## 1. 设计系统

### 1.1 色彩方案
```css
:root {
  /* 主色调 */
  --color-bg: #0a0a0a;           /* 深夜黑 - 背景 */
  --color-surface: #111111;       /* 碳灰 - 卡片/表面 */
  --color-surface-2: #1a1a1a;   /* 次级表面 */
  
  /* 品牌色 */
  --color-gold: #c9a96e;         /* 奢华金 - 主要强调色 */
  --color-gold-light: #e6c992;   /* 浅金 - hover 状态 */
  --color-gold-dark: #a68842;    /* 深金 - 边框/细节 */
  
  /* 文字颜色 */
  --color-text: #f5f5f0;         /* 象牙白 - 主要文字 */
  --color-text-muted: #a8a8a8;   /* 银灰 - 次要文字 */
  --color-text-dim: #666666;      /* 深银 - 禁用状态 */
  
  /* 功能色 */
  --color-success: #4a9e6d;      /* 翡翠绿 - 成功状态 */
  --color-error: #c25a5a;        /* 酒红 - 错误状态 */
  --color-border: #2a2a2a;       /* 细边框 */
}
```

### 1.2 字体
- **标题字体**: Playfair Display（Google Fonts）- 用于所有标题和品牌名
- **正文字体**: Inter（Google Fonts）- 用于正文和 UI 元素
- **回退字体**: Georgia， serif（标题）；system-ui， sans-serif（正文）

### 1.3 动画与过渡
- **缓动函数**: `cubic-bezier(0.25， 0.46， 0.45， 0.94)`（优雅减速）
- **过渡时长**: 
  - 快速交互: 200ms
  - 标准过渡: 400ms
  - 电影感动画: 800ms
- **模糊效果**: 
  - 玻璃态: `backdrop-filter: blur(20px)`
  - 入场动画: 从 `filter: blur(10px)` 过渡到 `blur(0)`

---

## 2. 核心技术栈

### 2.1 前端框架
- **框架**: React 18+ (TypeScript)
- **构建工具**: Vite 5+
- **样式方案**: Tailwind CSS 3.4+
- **动画库**: Framer Motion 11+
- **图标库**: Lucide React

### 2.2 后端（Edge Functions）
- **运行环境**: EdgeOne Edge Functions（V8 runtime）
- **存储**: EdgeOne KV Storage
- **KV 命名空间**:
  - `USERS_KV` → `users_kv`
  - `SESSIONS_KV` → `sessions_kv`
  - `PRODUCTS_KV` → `products_kv`
  - `ORDERS_KV` → `orders_kv`

### 2.3 部署配置
- **平台**: EdgeOne Pages
- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **Node 版本**: 20
- **配置文件**: `edgeone.json`

---

## 3. 页面结构与组件

### 3.1 导航栏（`NavBar.tsx`）
**功能要求**：
- 固定顶部，半透明玻璃态背景（`.luxury-glass`）
- 桌面端：左侧 Logo（ÉCLAT），中间导航链接，右侧用户/购物车图标
- 移动端：汉堡菜单（点击展开/收起）
- 滚动时背景透明度变化（从透明到半透明黑）
- 用户登录后显示头像/用户名，未登录显示登录按钮

**关键样式**：
```css
.luxury-glass {
  background: rgba(10， 10， 10， 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(201， 169， 110， 0.2);
}
```

---

### 3.2 Hero 区域（`HeroSection.tsx`）
**视觉要求**：
- **背景**: 全屏视频背景（自动播放、静音、循环）
  - 视频内容：宝石/钻石特写镜头，缓慢旋转
  - Fallback: 如果视频加载失败，显示静态高清图片
- **文字叠加**: 
  - 主标题："Timeless Elegance"（Playfair Display，字重 300）
  - 副标题："Discover our exquisite collection of jewelry， perfumes， and handbags."
  - CTA 按钮："Explore Now"（金色边框，hover 时填充金色）
- **动画效果**:
  - 页面加载时：文字从模糊到清晰（Framer Motion `animate`）
  - 标题字母逐个显现（可选）
  - 按钮呼吸动画（柔和脉冲）

**技术要求**：
- 使用 `useLazyVideo` hook 懒加载视频（视口内才加载）
- 视频格式：MP4（H.264），压缩至  90
- [ ] 首次内容绘制（FCP）< 1.5 秒
- [ ] 交互延迟（TTI）< 3.5 秒

---

## 9. 交付物

完成后的项目应包含：

1. **源代码**（GitHub 仓库）
   - `src/` - React 组件
   - `edge-functions/` - Edge Functions
   - `public/` - 静态资源
   - 配置文件（`package.json`、`vite.config.ts`、`tsconfig.json`、`edgeone.json`）

2. **部署链接**
   - EdgeOne Pages 生产环境 URL

3. **文档**
   - README.md（项目说明、安装步骤、API 文档）
   - ARCHITECTURE.md（架构说明）

---

## 10. 参考视觉标准

**奢华感体现**：
- ✅ 大量留白（padding/margin 慷慨）
- ✅ 金色点缀（非滥用，关键元素使用）
- ✅ 缓慢动画（优雅，非急躁）
- ✅ 高质量图片/视频（模糊会破坏奢华感）
- ✅ 字体对比（标题衬线体，正文无衬线体）

**避免**：
- ❌ 鲜艳色彩（保持黑白金配色）
- ❌ 快速闪烁动画
- ❌ 拥挤的布局
- ❌ 低分辨率图片

---

**生成工具**：使用此 prompt 输入到 AI 工具（如 WorkBuddy、GPT-4、Claude），即可生成完整的 ÉCLAT 奢侈品电商网站。

````
