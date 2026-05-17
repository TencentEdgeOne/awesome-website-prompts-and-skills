# 数字柚子

> **赛道**：Prompt　**作者**：小柚子 · [GitHub @YouzSpace](https://github.com/YouzSpace)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![数字柚子 cover](../assets/demos/shu-zi-you-zi.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/shu-zi-you-zi.gif" alt="数字柚子 demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 数字柚子 |
| 赛道 | Prompt |
| 作者 | 小柚子 |
| GitHub | [@YouzSpace](https://github.com/YouzSpace) |

## 📝 作品介绍

数字柚子是一个展示创意与技术能力的个人作品集网站，采用苹果 HIG 极简设计风格，以黑白灰为主色调。网站包含首页、About、Skills、Projects、Blog、Contact 六大模块，通过 Framer Motion 实现流畅的 3D 动画效果。后端部署于 EdgeOne Pages Edge Functions，提供联系表单 API 与访客计数 KV 存储功能。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# 数字柚子作品集 - 提示词优化参考

> 基于 EdgeOne Prompts 赛道，数字柚子全栈开发工程师个人作品集
> 技术栈：React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion

---

## 1. 整体风格定位

### 视觉风格
- **苹果 HIG 极简风格**，黑白灰配色，无深色模式
- 背景：`#fafafa` + 流动渐变色块（无圆点网格）
- 主色：`#18181b`（文字）、`#52525b`（次要）、`#a1a1aa`（辅助）、`#e4e4e7`（边框）

### 字体
```
-apple-system， "SF Pro Display"， BlinkMacSystemFont， "Segoe UI"， sans-serif
```

### 核心理念
- **代码即设计**：好的产品从第一眼就不一样
- 动效服务于体验，不是炫技
- 内容扎实 > 视觉花哨

---

## 2. Hero 区域提示词

### 结构要求
```
[毛玻璃徽章行] - 顶部，带图标
[逐字 3D 翻转标题] - 核心视觉爆点
[副标题 + 分隔线]
[Blur Text 简介区]
[发光胶囊按钮 CTA]
[技术栈 Marquee 滚动]
[状态徽章] - 右上角 "Open to work"
```

### 动画时序
```
0.0s  → 徽章依次淡入
0.3s  → 标题逐字翻转（每个字间隔 0.05s）
0.8s  → 副标题淡入
1.0s  → 分隔线渐入
1.2s  → 简介文字模糊渐入
1.5s  → 按钮淡入
1.8s  → Marquee 出现
2.0s  → 滚动指示器出现
```

### 关键代码片段

**逐字 3D 翻转动画**
```tsx

  {text.split("").map((char， index) => (
    
      {char}
    
  ))}

```

**发光胶囊按钮**
```tsx

  
    
  

```

---

## 3. Projects 项目展示提示词

### 内容结构
```
[项目截图区] - 左侧，渐变色块 + 图标 + UI 模拟
[项目信息] - 右侧
  ├── 序号 + 名称 + 状态标签
  ├── 角色 + 成果数据（带主题色高亮）
  ├── 详细描述
  └── 技术栈标签
```

### 设计要点
- 每个项目有**独立主题色**（深灰/蓝/琥珀/绿）
- 截图区模拟浏览器/应用 UI（顶部按钮 + 底部导航）
- 悬浮时图标上浮 + 闪光效果
- 布局：移动端单列，桌面端左右分栏

### 数据展示公式
```
角色 + 分隔点 + 成果数据 = 专业感
例：「全栈独立开发 · 日活 1.2k+」
```

---

## 4. About 区域提示词

### 结构
```
[标题 + 简介文字]
[数据统计卡片] - 4列网格，年经验/项目数/提交数/认证数
[工作经历卡片] - 毛玻璃风格，含职位/公司/时间/描述/亮点
[成长时间线] - 垂直连接线 + 脉冲节点
[教育背景卡片]
```

### 数据统计公式
```
数字 + 后缀 + 标签 = 可量化成果
例：「3+ 年开发经验」「12+ 完成项目」「28+ GitHub 提交」
```

---

## 5. Skills 技能展示提示词

### 结构
```
[标题 + 技能总数 Badge]
[技能分组] - 带图标（Code2/Server/Smartphone/Wrench）
  └── 技能网格 - 每个技能含名称 + 百分比 + 进度条动画
[认证证书卡片] - 3列网格
[Marquee 无限滚动]
```

### 进度条动画
```tsx

  

```

---

## 6. 动效设计原则

### 动画类型优先级
1. **叙事性动画** - 帮助用户理解内容（标题翻转、Blur Text）
2. **交互动画** - 响应用户操作（按钮悬停、卡片倾斜）
3. **氛围动画** - 提升视觉质感（渐变流动、脉冲效果）

### 缓动函数
```tsx
// 自然的减速效果（推荐）
ease: [0.215， 0.61， 0.355， 1]

// 弹性效果（用于数字跳动）
ease: "easeOut"

// 循环动画（装饰元素）
repeat: Infinity， ease: "easeInOut"
```

### 性能注意
- 使用 `will-change` 优化动画性能
- 避免同时触发过多动画
- `once: true` 用于视口内动画，避免重复计算

---

## 7. 组件架构

```
src/
├── App.tsx                    # 主布局 + 背景效果
├── components/
│   ├── Navbar.tsx            # 胶囊导航 + 智能显隐
│   ├── Hero.tsx              # 主标题区
│   ├── About.tsx             # 关于 + 履历
│   ├── Projects.tsx          # 项目展示
│   ├── Skills.tsx            # 技能可视化
│   ├── Blog.tsx              # 技术博客
│   ├── Contact.tsx           # 联系表单
│   ├── Footer.tsx            # 页脚
│   ├── PageLoader.tsx        # Buildspace 风格加载
│   ├── ScrollProgress.tsx    # 顶部进度条
│   ├── AnimatedGradientBg.tsx # 流动渐变背景
│   ├── DecorativeElements.tsx # 装饰几何元素
│   ├── BlurText.tsx          # 模糊文字动画
│   ├── CountUp.tsx           # 数字弹跳动画
│   ├── Marquee.tsx           # 无限滚动
│   └── VisitorCounter.tsx    # 访客计数
```

---

## 8. 设计检查清单

### 视觉检查
- [ ] 背景无圆点网格，纯色 + 渐变
- [ ] 文字渐变使用 `background-clip: text`
- [ ] 毛玻璃使用 `backdrop-filter: blur()`
- [ ] 按钮有发光/光晕效果
- [ ] 项目卡片有截图预览区

### 动效检查
- [ ] Hero 标题有逐字翻转动画
- [ ] 卡片悬浮有 3D 倾斜效果
- [ ] 技能进度条有渐入动画
- [ ] 页面有滚动进度条
- [ ] 加载动画平滑无突兀

### 内容检查
- [ ] 每个项目有角色/数据/技术栈
- [ ] 工作经历有公司/职位/描述
- [ ] 技能有熟练度可视化
- [ ] Blog 有阅读量/时间元数据

---

## 9. 快速开始模板

```tsx
// 1. 基础布局

  
  
  

  // 2. 内容区域
  
  
  
  
  
  
  

  // 3. 页面加载器
  

```

---

## 10. 部署说明

### EdgeOne Pages
```bash
npm run build  # 产物在 dist/
# 连接 GitHub 自动部署
```

### 关键环境变量
```
# 如需 API 功能
VITE_API_ENDPOINT=https://api.example.com
```

---

> 最后更新：2026-04-28 | 版本：v1.0

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

````
