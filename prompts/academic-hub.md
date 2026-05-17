# Academic Hub

> **赛道**：Prompt　**作者**：榆鸑 · [GitHub @zixilee666-svg](https://github.com/zixilee666-svg)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Academic Hub cover](../assets/demos/academic-hub.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/academic-hub.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Academic Hub |
| 赛道 | Prompt |
| 作者 | 榆鸑 |
| GitHub | [@zixilee666-svg](https://github.com/zixilee666-svg) |

## 📝 作品介绍

Academic Hub v3.0 是一个面向科研人员的轻量学术工作台，以 React 19 + Vite 8 构建，零后端依赖、一键部署至 EdgeOne CDN。
核心功能涵盖四大模块：📚 文献库（论文搜索、详情、BibTeX/IEEE/GB-T 三格式引用导出）、💬 贞德 AI 助手（学术人格多轮对话、Markdown 渲染）、🔬 研究目标追踪（OKR 式项目与进度管理）、📊 Dashboard 阅读热力图。
最大亮点是将「读 → 理 → 问 → 追」全流程收束于单一界面，配合 Joan 金色主题、深色模式与 Framer Motion 流畅动画，打造沉浸式科研体验。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# Academic Hub v3.0 — 部署指南与 WorkBuddy Agent 使用手册

> **版本**：v3.0 · 2026-04-25
> **技术栈**：React 19 + TypeScript 6 + Vite 8 + Tailwind CSS + shadcn/ui + Framer Motion

---

## 📋 目录

1. [项目简介](#1-项目简介)
2. [WorkBuddy Agent 一键部署 Prompt（直接复制使用）](#2-workbuddy-agent-一键部署-prompt直接复制使用)
3. [部署后操作](#3-部署后操作)
4. [本地开发指南](#4-本地开发指南)
5. [项目结构](#5-项目结构)
6. [功能清单](#6-功能清单)
7. [自定义配置](#7-自定义配置)

---

## 1. 项目简介

Academic Hub 是一个面向科研人员的学术论文管理与 AI 助手平台，支持：

| 模块 | 功能 |
|------|------|
| 📊 **仪表盘** | 文献阅读热力图、统计卡片、研究目标追踪 |
| 📚 **文献库** | 论文详情、引用格式导出（BibTeX/IEEE/GB/T 7714）、标签筛选 |
| 📂 **我的文献库** | 文献库文件夹增删改、论文拖拽分配 |
| 📄 **个人资料** | PDF/Markdown/笔记/链接上传、7 大分类、标签管理 |
| 💬 **AI 对话** | 贞德人格 AI 学术助手、多轮对话、Markdown 渲染 |
| 🔬 **我的研究** | 研究项目创建与目标追踪 |
| ⚙️ **设置** | 深色/浅色模式、个人资料编辑 |

**默认登录**：`admin` / `123456`

---

## 2. WorkBuddy Agent 一键部署 Prompt（直接复制使用）

> ⚠️ **使用说明**：将以下 Prompt 完整复制粘贴到 WorkBuddy 对话窗口中，Agent 将自动完成所有部署步骤。

---

```markdown
## 任务：部署 Academic Hub 学术中心到 EdgeOne Pages

### 项目位置
`D:\Users\Lenovo\Desktop\test01-use\input\academic-hub-v3`

### 部署目标
- 平台：腾讯云 EdgeOne Pages
- 站点名称：academic-hub（可自定义）
- 构建命令：`npm install && npm run build`
- 构建产物目录：`dist`
- 构建后自动部署到 CDN

### 执行步骤（按顺序执行）

#### 步骤 1：检查项目环境
1. 读取 `package.json` 确认依赖和构建脚本
2. 确认 Node.js ≥ 18.0.0
3. 确认 EdgeOne CLI 已安装（运行 `npx edgeone --version`）

#### 步骤 2：安装依赖
```bash
cd "D:\Users\Lenovo\Desktop\test01-use\input\academic-hub-v3"
npm install
```
> 目标：生成完整的 `node_modules/` 目录

#### 步骤 3：构建项目
```bash
npm run build
```
> 目标：生成 `dist/` 目录（包含 index.html 和静态资源）

#### 步骤 4：部署到 EdgeOne Pages
```bash
npx edgeone pages deploy \
  -n academic-hub \
  --site-name academic-hub \
  --description "Academic Hub - 学术论文管理与 AI 助手平台" \
  --dist dist
```
> 部署成功后将返回线上 URL，例如：
> `https://academic-hub-xxxx.edgeone.cool`

#### 步骤 5：验证部署
1. 在浏览器中打开返回的 URL
2. 确认页面正常加载，无 404 资源
3. 确认控制台无 JavaScript 错误
4. 确认登录页正常显示

### 预期结果
- ✅ `node_modules/` 已安装
- ✅ `dist/` 构建产物已生成
- ✅ EdgeOne Pages 部署成功，线上可访问
- ✅ 登录页正常渲染，静态资源全部加载

### 如遇问题
| 问题 | 解决方案 |
|------|---------|
| EdgeOne CLI 未安装 | `npm install -g @edgeone/edgeone` |
| 构建失败 | 检查 TypeScript 错误，运行 `npm run build 2>&1` 获取详细错误 |
| 部署失败 | 确认 EdgeOne 账号已登录，运行 `npx edgeone login` |
| 部署后页面空白 | 检查 `dist/index.html` 是否存在，确认 HashRouter 路由模式 |
```

---

## 3. 部署后操作

### 3.1 修改站点名称（可选）
如果需要自定义部署名称，修改 `-n` 参数：
```bash
npx edgeone pages deploy -n your-site-name --dist dist
```

### 3.2 自定义登录凭据（可选）
修改 `src/lib/api.ts` 中的 `MOCK_USERS`：
```typescript
const MOCK_USERS: User[] = [
  {
    id: 'u-admin'，
    username: 'your-username'，  // ← 修改这里
    password: 'your-password'，  // ← 修改这里
    // ...
  }，
];
```

### 3.3 自定义 Seed 数据（可选）
修改 `src/lib/api.ts` 中的以下 Mock 数据：
- `mockPapers`：论文数据（搜索 GNN/HGNN/欺诈检测相关论文）
- `mockProjects`：研究项目数据
- `mockLibraries`：文献库初始数据
- `mockMaterials`：个人资料初始数据
- `mockConversations`：AI 对话历史

### 3.4 添加 EdgeOne KV 持久化（可选）
如需持久化存储，参考 `DEPLOY.md` 中的 Cloud Functions + KV 配置。

---

## 4. 本地开发指南

### 4.1 安装与启动
```bash
cd academic-hub-v3
npm install
npm run dev      # 开发模式，http://localhost:5173
npm run build    # 生产构建
npm run preview # 预览构建产物
```

### 4.2 添加新页面
1. 在 `src/pages/` 中创建 `NewPage.tsx`
2. 在 `src/App.tsx` 中添加路由：
```tsx
import NewPage from '@/pages/NewPage';
<Route path="/new-page" element={} />
```
3. 在 `src/components/layout/AppLayout.tsx` 的 `navItems` 数组中添加导航项

### 4.3 添加 UI 组件
使用 shadcn/ui CLI：
```bash
npx shadcn@latest add button
```

### 4.4 添加新的 API 接口
1. 在 `src/lib/api.ts` 的 `handleMockRequest` 函数中添加 Mock 处理
2. 在 `ApiClient` 类中添加对应的方法
3. 如需真实后端，修改 `VITE_API_BASE_URL` 环境变量

---

## 5. 项目结构

```
academic-hub-v3/
├── src/
│   ├── components/
│   │   ├── layout/         # AppLayout（侧边栏+顶部栏）
│   │   ├── shared/         # 共享组件（SearchBar， DatePicker）
│   │   └── ui/             # shadcn/ui 基础组件（17个）
│   ├── context/
│   │   ├── AuthContext.tsx # 认证状态管理
│   │   └── ThemeContext.tsx
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── api.ts          # Mock API + API Client
│   │   ├── constants.ts     # 常量定义
│   │   └── utils.ts        # 工具函数
│   ├── pages/              # 页面组件（9个）
│   │   ├── DashboardPage.tsx
│   │   ├── LibraryPage.tsx
│   │   ├── MyLibraryPage.tsx    # ← 新增 v3.0
│   │   ├── MaterialsPage.tsx     # ← 新增 v3.0
│   │   ├── AIChatPage.tsx        # ← 新增 v3.0
│   │   ├── PaperDetailPage.tsx
│   │   ├── ResearchPage.tsx
│   │   ├── SettingsPage.tsx
│   │   ├── AdminPage.tsx
│   │   └── ImportExportPage.tsx
│   ├── types/
│   │   └── index.ts        # 全局 TypeScript 类型
│   ├── App.tsx             # 路由配置
│   ├── main.tsx            # 入口文件
│   └── index.css           # 全局样式 + Joan 配色
├── public/
│   └── favicon.ico
├── docs/                   # 文档
├── scripts/                # 辅助脚本
├── DEPLOY.md              # 详细部署文档
├── README.md              # 项目说明
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 6. 功能清单

### 6.1 已完成功能
- [x] HashRouter（兼容静态托管，无需服务端路由）
- [x] 深色/浅色模式（自动跟随系统 + 手动切换）
- [x] JWT 认证（Mock 实现）
- [x] 响应式布局（桌面端固定侧栏，移动端可折叠）
- [x] Framer Motion 页面过渡动画
- [x] 论文搜索（标题/作者/关键词）
- [x] 论文详情页（摘要、引用格式导出、标签笔记）
- [x] 文献库管理（增删改文件夹、论文分配）
- [x] 个人资料上传（PDF/Markdown/笔记/链接，拖拽上传）
- [x] AI 学术对话（贞德人格、多轮对话、Markdown 渲染）
- [x] 研究项目与目标追踪
- [x] 论文批量导入/导出（BibTeX 格式）
- [x] 管理员面板
- [x] 阅读热力图（基于 mock 数据）
- [x] EdgeOne Pages 部署配置

### 6.2 待集成功能（可选）
- [ ] 接入真实 LLM API（当前为 Mock 响应）
- [ ] EdgeOne KV 持久化存储
- [ ] Cloud Functions 后端（多用户支持）
- [ ] arXiv / Semantic Scholar 真实搜索 API
- [ ] PDF 文件预览
- [ ] 邮件通知

---

## 7. 自定义配置

### 7.1 环境变量
创建 `.env` 文件：
```env
VITE_API_BASE_URL=https://your-api.com/api
VITE_APP_TITLE=Academic Hub
VITE_DEFAULT_USERNAME=admin
VITE_DEFAULT_PASSWORD=123456
```

### 7.2 主题配色
修改 `src/index.css` 中的 CSS 变量：
```css
:root {
  --color-primary: #C9A96E;       /* 主色（金色） */
  --color-primary-dark: #B8935A; /* 深金 */
  --color-secondary: #3D5A80;    /* 辅助色（深蓝） */
  --color-accent: #2D8A4E;       /* 强调色（绿色） */
  --color-danger: #B91C1C;       /* 危险/删除（红色） */
}
```

### 7.3 部署到其他平台
| 平台 | 命令 |
|------|------|
| Vercel | `vercel --prod` |
| Netlify | `netlify deploy --prod` |
| GitHub Pages | 使用 GitHub Actions |

> ⚠️ **重要**：由于使用 HashRouter，请确保部署平台配置为将所有路径重定向到 `index.html`。
> Vercel/Netlify/GitHub Pages 部署请在项目根目录添加 `_redirects` 或 `vercel.json` 配置文件。

---

*Academic Hub v3.0 — 贞德・达尔克裁定者形态 · 学术本心，真理之灯。*

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

````
