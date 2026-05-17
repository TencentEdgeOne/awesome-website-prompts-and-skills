# 高定女装官网

> **赛道**：Prompt　**作者**：吴昊 · [GitHub @dysonai](https://github.com/dysonai)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![高定女装官网 demo](../assets/demos/gao-ding-nv-zhuang-guan-wang.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 高定女装官网 |
| 赛道 | Prompt |
| 作者 | 吴昊 |
| GitHub | [@dysonai](https://github.com/dysonai) |

## 📝 作品介绍

由Prompt生成整的高定女装官网，涵盖 React + Vite + TypeScript + Tailwind CSS + shadcn/ui 前端与 EdgeOne Cloud Functions + KV Storage 后端。网站以"深夜墨色 + 香槟金 + 象牙白"品牌色系为基础，融合 Playfair Display 衬线字体与玻璃拟态组件，构建具有东方气韵高定视觉体系。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# Maison Atelier — 高端定制女装品牌官网

> **一段提示词，一个讲述手艺的网站。**
> 主题：高端定制女装 | 技术栈：React + Vite + TypeScript + Tailwind CSS + shadcn/ui + EdgeOne Pages
> 目标：通过真实案例与设计师专业介绍建立客户信心，实现品牌展示与预约咨询的完整转化闭环。
> 为「WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛」参赛作品。

---

## 🎯 一、目标

用一句话说清楚这个网站是做什么的：

**Maison Atelier（梅森·阿特里耶）是一家创立于成都的高端定制女装品牌，十五年手艺传承。网站的核心目标是——让每一位访客在浏览完真实客户案例和设计师故事后，产生"我也想被认真对待一次"的冲动，并通过预约表单完成转化。**

这不是一个卖衣服的网站，是一个**建立信任、传递情感、完成预约**的品牌体验站。

---

## 🧭 二、执行前的第一步（必须执行）

**在开始写任何代码之前，AI 必须执行以下两步：**

### Step 1：加载 EdgeOne Pages Skills

本项目需要调用 EdgeOne Pages 的开发与部署能力。请在开始前加载以下两个 Skill：

```bash
# 加载 EdgeOne Pages 开发 Skill（提供 Edge Functions、KV Storage、Middleware 的完整参考文档）
skill load edgeone-pages-dev

# 加载 EdgeOne Pages 部署 Skill（提供 CLI 命令、登录、Token 管理的完整流程）
skill load edgeone-pages-deploy
```

加载后，**当遇到以下任务时必须查阅对应参考文档**：
- 创建 Edge Function API → 查阅 `edgeone-pages-dev/references/edge-functions.md`
- 写入/读取持久化数据 → 查阅 `edgeone-pages-dev/references/kv-storage.md`
- 部署网站 → 查阅 `edgeone-pages-deploy/SKILL.md`

### Step 2：初始化 EdgeOne Pages 项目

```bash
# 在你当前的工作目录初始化 EdgeOne Pages 项目
edgeone pages init

# 启动本地开发服务器（端口 8088，所有改动实时生效）
edgeone pages dev
```

---

## 🎨 三、品牌定位

**品牌名称**：Maison Atelier（梅森·阿特里耶）

**品牌调性**：
- 不是快时尚，不是流量网红，是**有故事的手艺**
- 每件衣服背后都有一位真实的设计师和一段真实的制作历程
- 客户不是在购物，是在参与一件艺术品的诞生

**品牌调性关键词**：奶油、丝绒、羊毛毡质感 / 柔光 / 有温度的奢华 / 法式克制 / 不动声色的贵气

**禁止风格**：
- ❌ 电商大促横幅风格（"限时折扣"、"秒杀"等）
- ❌ 科技感/极简黑白工业风
- ❌ 网红/博主推荐模板风格
- ❌ 快时尚品牌的拼贴杂志感
- ❌ 堆砌图片的 Pinterest 风格墙

---

## 🛠️ 四、技术规格

### 技术栈（必须严格遵守）

| 技术 | 版本/说明 |
|------|-----------|
| React | 18+ |
| Vite | 5+ |
| TypeScript | 5+ |
| Tailwind CSS | 3+ |
| shadcn/ui | 最新版 |
| lucide-react | 图标库（禁止使用 emoji 作为图标） |
| framer-motion | 动画（柔和进场，禁止炫技式跳动） |
| tailwindcss-animate | 辅助动画 |

### 字体（通过 Google Fonts CDN 引入）

| 用途 | 字体 | 字重 |
|------|------|------|
| 大标题/品牌名 | Cormorant Garamond | 300, 400, 500, italic |
| 副标题/导航 | Jost | 300, 400, 500 |
| 正文/说明文字 | Inter | 300, 400 |
| 中文内容 | Noto Serif SC | 300, 400 |

```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&family=Inter:wght@300;400&family=Noto+Serif+SC:wght@300;400&display=swap" rel="stylesheet">
```

---

## 🎨 五、设计系统

### 色彩变量（在 `src/index.css` 中定义）

```css
:root {
  /* 主背景：温暖的米白/象牙色 */
  --background: 40 30% 97%;
  --foreground: 30 15% 15%;

  /* 主品牌色：哑光玫瑰金 */
  --primary: 12 28% 68%;
  --primary-foreground: 40 30% 97%;

  /* 辅助色：烟褐/摩卡 */
  --secondary: 25 18% 45%;
  --secondary-foreground: 40 30% 97%;

  /* 强调色：深酒红（用于重要 CTA） */
  --accent: 345 35% 28%;
  --accent-foreground: 40 30% 97%;

  /* 柔化边框 */
  --border: 30 20% 85%;
  --muted: 35 15% 94%;
  --muted-foreground: 30 10% 55%;

  /* 卡片背景：略深于背景 */
  --card: 38 25% 94%;
  --card-foreground: 30 15% 15%;

  /* 圆角：偏向柔和，非完全圆形 */
  --radius: 0.375rem;
}
```

### 质感组件类

```css
/* 丝绒质感卡片 */
.velvet-card {
  background: linear-gradient(135deg, hsl(38 25% 96%) 0%, hsl(35 20% 92%) 100%);
  border: 1px solid hsl(30 20% 88%);
  box-shadow:
    0 1px 3px rgba(80, 50, 30, 0.06),
    0 8px 32px rgba(80, 50, 30, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
}

/* 玻璃浮层（用于导航、覆盖层） */
.atelier-glass {
  background: rgba(253, 250, 245, 0.82);
  backdrop-filter: blur(12px) saturate(140%);
  border-bottom: 1px solid rgba(180, 150, 120, 0.15);
}

/* 文字描边按钮（主 CTA 风格） */
.cta-primary {
  background: hsl(345 35% 28%);
  color: hsl(40 30% 97%);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  padding: 0.875rem 2.5rem;
  border: none;
  transition: background 0.3s ease, transform 0.2s ease;
}

.cta-primary:hover {
  background: hsl(345 35% 22%);
  transform: translateY(-1px);
}

/* 幽灵按钮（次要 CTA） */
.cta-ghost {
  background: transparent;
  border: 1px solid hsl(30 15% 15%);
  color: hsl(30 15% 15%);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-family: 'Jost', sans-serif;
  font-weight: 400;
  padding: 0.875rem 2.5rem;
  transition: all 0.3s ease;
}

.cta-ghost:hover {
  background: hsl(30 15% 15%);
  color: hsl(40 30% 97%);
}
```

---

## 📐 六、布局规则

### 全局容器

```
最大宽度: 1200px（非 1280px，更收束优雅）
水平内边距: px-6 md:px-10 lg:px-20
垂直节奏: py-20 md:py-28 lg:py-36
居中: mx-auto
```

### 网格系统

| 内容区域 | 移动端 | 平板 | 桌面 |
|----------|--------|------|------|
| 精选案例 | 1 列 | 2 列 | 3 列 |
| 服装产品卡片 | 1 列 | 2 列 | 4 列 |
| 设计师介绍 | 1 列 | 1 列 | 2 列（图文各半）|
| 客户证言 | 1 列 | 2 列 | 3 列 |
| 工艺数字 | 2 列 | 4 列 | 4 列 |

### 图片比例规范

| 场景 | 比例 | 说明 |
|------|------|------|
| Hero 全屏背景 | 16:9 → 铺满 | object-cover，暗色叠加 |
| 服装展示卡片 | 2:3（竖版） | 模特着装，保持纵向张力 |
| 设计师写真 | 3:4 | 写实、工作状态优先 |
| 案例细节图 | 4:3 | 横向，展示面料/工艺细节 |
| 品牌故事区 | 全宽背景 | 高饱和度柔光影棚风 |

### 禁止的布局

- ❌ 浮动拼贴、文字叠图（除 Hero 外）
- ❌ 错位卡片阵列
- ❌ 分屏滚动粘性布局
- ❌ 满屏弹窗（使用底部抽屉替代）
- ❌ 移动端横向滚动区（除精选案例轮播外）

---

## 🖼️ 七、图片资源规范

所有图片使用 Unsplash 真实高质量图片（按以下 URL 参数获取，无需登录）：

### Hero 区域
```
背景图（模特 + 工作室）：
https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=85&fit=crop
```

### 设计师照片（3 位）
```
首席设计师 陈薇薇：
https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80&fit=crop&crop=face

资深设计师 林安雅：
https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&fit=crop&crop=face

版型师 苏明珊：
https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop&crop=face
```

### 服装系列图（6 件单品）
```
定制礼服「月下」：
https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80&fit=crop

真丝衬衫「清晨」：
https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80&fit=crop

羊绒大衣「初雪」：
https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80&fit=crop

手工刺绣旗袍「东方」：
https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&q=80&fit=crop

婚纱「白鹭」：
https://images.unsplash.com/photo-1519657831978-78d89879c755?w=600&q=80&fit=crop

日常定制套装「松弛」：
https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80&fit=crop
```

### 工艺/细节图（品牌故事区）
```
手工缝制特写：
https://images.unsplash.com/photo-1558171813-a1cf72cfc7e0?w=1200&q=85&fit=crop

面料选样：
https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85&fit=crop

工作室全景：
https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=85&fit=crop
```

---

## 📑 八、网站结构

### Section 1：固定导航栏

**结构：**
- 左：品牌 LOGO「Maison Atelier」（Cormorant Garamond italic，字号 1.35rem）
- 中：导航项（定制系列 / 设计师 / 工艺故事 / 真实案例 / 预约咨询）
- 右：主 CTA「预约定制」按钮（`.cta-primary` 样式，紧凑版）

**行为：**
- 初始：透明背景（背景由 Hero 图透出）
- 滚动 > 80px：切换为 `.atelier-glass` 毛玻璃效果，平滑过渡 400ms
- 移动端：汉堡菜单，点击展开全屏抽屉导航（背景从下往上滑入）

**组件名**：`<Navbar />`

---

### Section 2：Hero 首屏

**布局**：全屏高度（min-h-screen），背景图铺满

**背景处理**：
```css
background-image: url('...');
background-size: cover;
background-position: center top;
/* 渐变叠加：底部渐变为品牌背景色 */
&::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(253, 250, 245, 0.15) 0%,
    rgba(253, 250, 245, 0.05) 40%,
    rgba(253, 250, 245, 0.85) 85%,
    rgba(253, 250, 245, 1) 100%
  );
}
```

**内容（居中偏左对齐）：**
```
微标签（Badge）：「2009 年创立于成都 · 十五年手艺传承」

主标题（Cormorant Garamond italic，字号 clamp(2.8rem, 6vw, 5rem)）：
"每一件定制，
都是你独一无二的故事"

副文本（Jost 300，字号 1rem，最大宽度 440px，行高 1.8）：
「Maison Atelier 坚信：真正的美，不在于趋势，而在于你穿上它时，
眼睛里出现的那一点光。」

双 CTA：
[预约定制咨询]  [浏览设计师作品]

荣誉标注行（Jost 300，字号 0.7rem，字间距 0.18em，大写）：
VOGUE CHINA · HARPER'S BAZAAR · ELLE · 成都十大设计师品牌
```

**动画**：framer-motion，内容区域 `y: 20 → 0, opacity: 0 → 1`，延迟 0.3s，缓动 `easeOut`

**组件名**：`<HeroSection />`

---

### Section 3：品牌信任条（Prestige Bar）

**布局**：全宽，水平居中，`py-6`，`border-y border-border/60`

**内容**：
```
左侧（Jost 400, 0.7rem，大写字间距）：AS SEEN IN

右侧（flex gap-8，半透明灰色，hover 变深）：
VOGUE CHINA  ·  HARPER'S BAZAAR  ·  ELLE  ·  芭莎珠宝  ·  时装 L'OFFICIEL
```

**视觉处理**：文字使用 `text-muted-foreground opacity-60`，hover `opacity-100`，`transition-opacity 0.3s`

**组件名**：`<PrestigeBar />`

---

### Section 4：真实案例展示（Case Gallery）

**定位**：这是建立客户信心的核心区域。每个案例必须包含：
- 真实顾客姓名（首字 + 姓）
- 定制场景（婚礼 / 商务 / 晚宴 / 日常）
- 服装成品图（竖版 2:3）
- 顾客原话短评（20-40 字，中文，真实感强，避免广告腔）

**布局**：桌面 3 列，平板 2 列，移动 1 列，间距 `gap-6`

**卡片数据（硬编码，6 个案例）**：

```typescript
const cases = [
  {
    id: 1,
    client: "张 M. 女士",
    scene: "婚礼礼服",
    city: "成都",
    year: "2024",
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80&fit=crop",
    quote: "第一次试穿时我哭了。那不是我买的一件衣服，是我被人认真对待过的证明。",
    designer: "陈薇薇"
  },
  {
    id: 2,
    client: "李 J. 女士",
    scene: "品牌发布会晚宴",
    city: "上海",
    year: "2024",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80&fit=crop",
    quote: "整个晚宴有人问了我三次：这件衣服哪里买的？我说：买不到，是做的。",
    designer: "林安雅"
  },
  {
    id: 3,
    client: "王 X. 女士",
    scene: "商务签约晚宴",
    city: "北京",
    year: "2023",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80&fit=crop",
    quote: "我需要的不是权力感，而是从容感。这套定制给了我后者。",
    designer: "苏明珊"
  },
  {
    id: 4,
    client: "陈 Y. 女士",
    scene: "手工刺绣旗袍定制",
    city: "成都",
    year: "2024",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=600&q=80&fit=crop",
    quote: "绣了两个月的旗袍，每一针都能感觉到。我不打算给任何人，留给自己。",
    designer: "陈薇薇"
  },
  {
    id: 5,
    client: "刘 S. 女士",
    scene: "婚纱礼服",
    city: "杭州",
    year: "2023",
    image: "https://images.unsplash.com/photo-1519657831978-78d89879c755?w=600&q=80&fit=crop",
    quote: "我告诉她我怕胖、怕显矮、怕出戏。她说：我只需要你告诉我你最美的那一刻是什么感觉。",
    designer: "林安雅"
  },
  {
    id: 6,
    client: "赵 L. 女士",
    scene: "羊绒大衣定制",
    city: "北京",
    year: "2024",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=600&q=80&fit=crop",
    quote: "穿了三年，越穿越好看。这就是定制和买衣服最大的区别。",
    designer: "苏明珊"
  }
];
```

**卡片组件结构**：
```tsx
<div className="velvet-card rounded-sm overflow-hidden group cursor-pointer">
  {/* 图片容器：2:3 比例 */}
  <div className="aspect-[2/3] overflow-hidden">
    <img
      src={c.image}
      alt={c.scene}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  </div>
  {/* 卡片内容 */}
  <div className="p-5">
    <div className="flex justify-between items-start mb-3">
      <div>
        <span className="text-xs font-jost tracking-widest uppercase text-muted-foreground">{c.scene}</span>
        <p className="text-sm font-medium mt-0.5">{c.client} · {c.city}</p>
      </div>
      <span className="text-xs text-muted-foreground">{c.year}</span>
    </div>
    <blockquote className="text-sm leading-relaxed text-foreground/80 font-noto-serif border-l-2 border-primary/40 pl-3">
      "{c.quote}"
    </blockquote>
    <p className="text-xs text-muted-foreground mt-3 font-jost tracking-wide">
      设计师：{c.designer}
    </p>
  </div>
</div>
```

**区域标题**：
```
微标签：「真实客户 · 真实作品」
主标题：「她们穿过的故事」
副标题：六位客户，六段与众不同的缘分
```

**组件名**：`<CaseGallery />`

---

### Section 5：设计师团队介绍（Designer Profiles）

**定位**：通过具体设计师的专业背景和理念建立专业信任。

**布局**：桌面端每行一位设计师，图文各半（左图右文 / 左文右图交替）

**设计师数据（3 位）**：

```typescript
const designers = [
  {
    id: 1,
    name: "陈薇薇",
    title: "首席设计师 · 创始人",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=800&q=80&fit=crop&crop=face",
    experience: "15 年",
    education: "巴黎 ESMOD 服装设计学院",
    specialty: "礼服 · 旗袍 · 婚纱",
    philosophy: "好的设计不是加法，是减法——把所有不是你的东西去掉，留下的才是你。",
    stats: [
      { label: "完成定制", value: "800+件" },
      { label: "满意复购率", value: "91%" },
      { label: "从业年限", value: "15年" }
    ]
  },
  {
    id: 2,
    name: "林安雅",
    title: "资深设计师",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&fit=crop&crop=face",
    experience: "9 年",
    education: "中央美术学院 服装设计系",
    specialty: "商务着装 · 日常高定 · 晚礼服",
    philosophy: "女人最好看的时刻，是她完全忘记了自己在穿衣服的时候。",
    stats: [
      { label: "完成定制", value: "400+件" },
      { label: "满意复购率", value: "87%" },
      { label: "从业年限", value: "9年" }
    ]
  },
  {
    id: 3,
    name: "苏明珊",
    title: "版型师 · 定制顾问",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&fit=crop&crop=face",
    experience: "12 年",
    education: "上海东华大学 服装工程",
    specialty: "版型优化 · 体型修饰 · 面料选配",
    philosophy: "没有不好看的身材，只有没有找到自己版型的人。",
    stats: [
      { label: "完成定制", value: "600+件" },
      { label: "满意复购率", value: "89%" },
      { label: "从业年限", value: "12年" }
    ]
  }
];
```

**单个设计师卡片布局（左图右文，奇偶交替）**：
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-16 border-b border-border/50">
  {/* 图片侧 */}
  <div className="aspect-[3/4] overflow-hidden rounded-sm">
    <img src={d.photo} className="w-full h-full object-cover" />
  </div>
  {/* 文字侧 */}
  <div className="space-y-6">
    <div>
      <span className="text-xs font-jost tracking-widest uppercase text-muted-foreground">{d.title}</span>
      <h3 className="font-cormorant text-4xl mt-1">{d.name}</h3>
    </div>
    <div className="space-y-2 text-sm text-muted-foreground">
      <p>毕业于 {d.education}</p>
      <p>从业 {d.experience} · 擅长 {d.specialty}</p>
    </div>
    {/* 三个数据指标 */}
    <div className="grid grid-cols-3 gap-4 py-4 border-y border-border/40">
      {d.stats.map(s => (
        <div>
          <p className="font-cormorant text-2xl">{s.value}</p>
          <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
        </div>
      ))}
    </div>
    {/* 设计理念引言 */}
    <blockquote className="font-noto-serif text-base leading-loose text-foreground/75 italic">
      「{d.philosophy}」
    </blockquote>
    <button className="cta-ghost text-sm">预约与 {d.name} 咨询</button>
  </div>
</div>
```

**区域标题**：
```
微标签：「认识我们的设计师」
主标题：「每一件作品背后，都有一双手」
副标题：她们不是在制作衣服，是在理解你这个人
```

**组件名**：`<DesignerProfiles />`

---

### Section 6：工艺与品质（Craftsmanship）

**布局**：全宽背景图 + 居中内容叠加

**背景图**：手工缝制特写图，暗色叠加（`rgba(30,20,15,0.65)`）

**居中面板**（`.velvet-card` 变体，深色版）：
```
4 个工艺指标，2×2 网格：

手工缝制  ·  每件 60-120 小时
真实面料  ·  仅用一线、二等级以上原料
丈量精度  ·  全身 32 个量体数据点
终身服务  ·  提供终身版型档案保存
```

**文字内容**（面板下方，居中）：
```
微标签：「我们的承诺」
主标题（Cormorant Garamond italic）：
"速度是快时尚的语言
我们说的是另一种语言"
副文本：
从第一次量体到成品交付，最短 21 天，最长 6 个月。
因为有些事情，急不得。
```

**组件名**：`<CraftsmanshipSection />`

---

### Section 7：客户证言（Testimonials）

**布局**：3 列网格（桌面），卡片等高

**证言数据（5 条）**：

```typescript
const testimonials = [
  {
    content: "我问她：你们可以做我想要的样子吗？她说：我们只做你自己的样子。就这一句话，我决定了。",
    name: "周 M. 女士",
    scene: "婚礼礼服客户",
    city: "成都",
    rating: 5
  },
  {
    content: "穿着这件大衣去签了一笔很重要的合同。我不迷信，但我觉得它给了我气场。",
    name: "黄 S. 女士",
    scene: "商务定制客户",
    city: "北京",
    rating: 5
  },
  {
    content: "第四次来了。每次人生有什么重要时刻，我都回到这里。",
    name: "吴 Y. 女士",
    scene: "复购老客户",
    city: "上海",
    rating: 5
  },
  {
    content: "设计师花了两个小时只是在听我说话。后来我才明白那两个小时有多值钱。",
    name: "郑 L. 女士",
    scene: "高定礼服客户",
    city: "杭州",
    rating: 5
  },
  {
    content: "衣服寄到的时候，还附了一封手写信。信上写着我提过的一句话，她记住了。",
    name: "林 X. 女士",
    scene: "异地定制客户",
    city: "深圳",
    rating: 5
  }
];
```

**卡片结构**：
```tsx
<div className="velvet-card rounded-sm p-6 flex flex-col gap-4">
  {/* 五星 */}
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3 h-3 fill-primary text-primary" />
    ))}
  </div>
  {/* 证言内容 */}
  <blockquote className="font-noto-serif text-sm leading-loose flex-1">
    「{t.content}」
  </blockquote>
  {/* 署名 */}
  <div className="border-t border-border/40 pt-3">
    <p className="text-sm font-medium">{t.name}</p>
    <p className="text-xs text-muted-foreground mt-0.5">{t.scene} · {t.city}</p>
  </div>
</div>
```

**区域标题**：
```
微标签：「她们说」
主标题：「比我们说什么都重要」
```

**组件名**：`<Testimonials />`

---

### Section 8：预约 CTA + 页脚

**CTA 区域**：

背景：工作室全景图，同 Section 6 叠加方式，但更浅（`rgba(253,250,245,0.88)`）

```
主标题（Cormorant Garamond italic，居中）：
"准备好了吗？
让我们认识你。"

副文本：
第一次咨询完全免费。
陈薇薇或我们的设计师将亲自接待你——
不是 AI，不是销售，是真正懂衣服的人。

主 CTA：[立即预约免费咨询]
次 CTA：[查看所有设计师作品]
```

**页脚**：
```
左：品牌名 + 一句话（「成都 · 手艺 · 十五年」）
中：链接（定制流程 / 常见问题 / 面料说明 / 联系我们）
右：微信二维码占位图 + 小红书图标 + Instagram 图标

底部版权行：
© 2026 Maison Atelier. 成都梅森阿特里耶服装设计有限公司
```

**预约表单（弹出抽屉，从底部滑入）**：

点击「立即预约免费咨询」后触发，表单字段：
```
1. 您的姓名（必填）
2. 联系方式（手机/微信，必填）
3. 定制需求（礼服/商务/婚纱/日常/其他，单选）
4. 预计穿着场合（文本，选填）
5. 希望联系时间（早/午/晚，多选）
6. 补充说明（textarea，选填）

提交按钮：[提交预约申请]
提交后：显示确认信息「我们将在 24 小时内联系您」
```

**表单数据通过 Edge Function 处理（见 API 规范）**

**组件名**：`<ClosingCTA />`, `<Footer />`, `<AppointmentDrawer />`

---

## 🔌 九、API 端点规范

所有接口通过 **Edge Functions** 实现（`edge-functions/api/` 目录）

| 端点 | 方法 | 功能 | 优先级 |
|------|------|------|--------|
| `/api/health` | GET | 健康检查 | 必须 |
| `/api/site-content` | GET | 返回品牌信息、导航、页脚配置 | 必须 |
| `/api/cases` | GET | 返回案例列表（支持 `?limit=6`） | 必须 |
| `/api/designers` | GET | 返回设计师列表 | 必须 |
| `/api/appointment` | POST | 提交预约表单 | 必须 |
| `/api/testimonials` | GET | 返回证言列表 | 建议 |

### POST /api/appointment

**请求体：**
```json
{
  "name": "string（必填，2-20字）",
  "contact": "string（必填，手机或微信）",
  "need": "dress | business | wedding | daily | other",
  "occasion": "string（选填）",
  "preferredTime": ["morning", "afternoon", "evening"],
  "message": "string（选填，最大500字）"
}
```

**成功响应（201）：**
```json
{
  "success": true,
  "appointmentId": "APT-20240424-XXXX",
  "message": "预约申请已收到，我们将在24小时内与您联系。",
  "nextStep": "请保持手机畅通，设计师将亲自致电。"
}
```

**实现要求**：
- 请求数据写入 KV Storage（`key: appointment:${appointmentId}`）
- 同时写入列表索引（`key: appointments:list`，JSON 数组追加）
- 对 `name` 和 `contact` 做基础校验，非法输入返回 400
- 设置响应头 `Content-Type: application/json`

**Edge Function 实现模板（`edge-functions/api/appointment.js`）：**
```javascript
export async function onRequestPost({ request }) {
  try {
    const body = await request.json();
    const { name, contact, need, occasion, preferredTime, message } = body;

    // 基础校验
    if (!name || name.length < 2 || name.length > 20) {
      return Response.json({ error: '姓名格式不正确' }, { status: 400 });
    }
    if (!contact) {
      return Response.json({ error: '联系方式为必填项' }, { status: 400 });
    }

    // 生成预约ID
    const id = `APT-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${Math.random().toString(36).slice(2,6).toUpperCase()}`;
    const record = { id, name, contact, need, occasion, preferredTime, message, createdAt: new Date().toISOString() };

    // 写入 KV Storage（需在控制台绑定命名空间，变量名 appointments_kv）
    await appointments_kv.put(`appointment:${id}`, JSON.stringify(record));

    // 维护列表索引
    const listRaw = await appointments_kv.get('appointments:list');
    const list = listRaw ? JSON.parse(listRaw) : [];
    list.unshift({ id, name, need, createdAt: record.createdAt });
    if (list.length > 200) list.splice(200);
    await appointments_kv.put('appointments:list', JSON.stringify(list));

    return Response.json({
      success: true,
      appointmentId: id,
      message: '预约申请已收到，我们将在24小时内与您联系。',
      nextStep: '请保持手机畅通，设计师将亲自致电。'
    }, { status: 201 });

  } catch (e) {
    return Response.json({ error: '服务器错误，请稍后重试' }, { status: 500 });
  }
}
```

---

## 🧩 十、组件清单与文件结构

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── PrestigeBar.tsx
│   │   ├── CaseGallery.tsx
│   │   ├── DesignerProfiles.tsx
│   │   ├── CraftsmanshipSection.tsx
│   │   ├── Testimonials.tsx
│   │   └── ClosingCTA.tsx
│   ├── ui/
│   │   ├── SectionBadge.tsx        # 区域小标签徽章
│   │   ├── AppointmentDrawer.tsx   # 预约表单抽屉
│   │   └── BackgroundImage.tsx     # 背景图 + 叠加层封装
│   └── shared/
│       └── StarRating.tsx
├── data/
│   ├── cases.ts        # 案例数据
│   ├── designers.ts    # 设计师数据
│   └── testimonials.ts # 证言数据
├── hooks/
│   └── useScrollNavbar.ts   # 导航栏滚动状态
├── lib/
│   └── api.ts          # API 请求封装
├── types/
│   └── index.ts
├── App.tsx
└── index.css           # CSS 变量 + 全局样式

edge-functions/
└── api/
    ├── health.js
    ├── site-content.js
    ├── cases.js
    ├── designers.js
    ├── appointment.js
    └── testimonials.js
```

---

## ✅ 十一、质量验收标准

### 视觉标准

- ✅ 整体色调统一，无突兀的高饱和色彩
- ✅ 字体使用严格遵循规范（标题 Cormorant，导航 Jost，正文 Inter/Noto Serif）
- ✅ 图片比例一致，同一行卡片高度对齐
- ✅ 所有交互均有 hover/focus 状态（transition 不少于 0.2s）
- ✅ 导航栏滚动状态切换平滑（无闪烁）

### 功能标准

- ✅ 预约表单提交后给出明确确认反馈
- ✅ 所有 API 端点在 DevTools Network 中返回正确状态码
- ✅ 移动端 ≤ 390px 宽度下无横向溢出
- ✅ 图片加载失败时有 fallback（alt + 背景色）
- ✅ 表单校验有错误提示（非 alert，inline 错误文字）

### 性能标准

- ✅ 图片全部使用 `loading="lazy"`（Hero 图除外）
- ✅ 首屏白屏时间 < 2s（Lighthouse，模拟 4G 网络）

### 禁止事项（交付前必须自查）

- ❌ 不得出现 console.error 或未处理的 Promise rejection
- ❌ 不得出现硬编码 `localhost` URL
- ❌ 不得使用 emoji 作为 UI 图标
- ❌ 不得有任何 TypeScript any 类型（除非有注释说明）

---

## 💬 十二、社媒传播增强（加分项）

**一句话说明为什么需要这个**：Maison Atelier 的客户喜欢分享"被认真对待"的体验，因此每个页面都需要让人忍不住截图、发小红书或朋友圈的内容设计。

### 12.1 Open Graph 标签（SEO + 微信分享卡片）

在 `index.html` 的 `<head>` 中添加以下标签（所有 `{{占位符}}` 替换为实际值）：

```html
<!-- 微信/QQ 分享卡片 -->
<meta property="og:type" content="website" />
<meta property="og:title" content="Maison Atelier | 高端定制女装" />
<meta property="og:description" content="{{随机展示一句案例引言，如：'整个晚宴有人问了我三次：这件衣服哪里买的？我说：买不到，是做的。'}}" />
<meta property="og:image" content="{{填入一张最具视觉冲击力的服装图 URL}}" />
<meta property="og:url" content="{{填入实际域名}}" />
<meta property="og:site_name" content="Maison Atelier 梅森·阿特里耶" />

<!-- Twitter / 小红书卡片 -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Maison Atelier | 高端定制女装" />
<meta name="twitter:description" content="{{同上案例引言}}" />
<meta name="twitter:image" content="{{同上图片 URL}}" />
```

> **提示**：可以使用 `Math.random()` 在构建时从案例引言数组中随机选一条写入 description，让每次分享都有新鲜感。

### 12.2 小红书风格分享文案区

在预约 CTA 区域下方（`ClosingCTA` 组件内），添加一个**可一键复制的分享文案块**：

```tsx
{/* 可折叠的分享文案 */}
<div className="mt-8 text-center">
  <button
    onClick={() => setShowShareTip(v => !v)}
    className="text-xs font-jost tracking-widest uppercase text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors"
  >
    分享 Maison Atelier
  </button>

  {showShareTip && (
    <div className="mt-4 p-5 bg-white/60 border border-border/40 rounded-sm max-w-lg mx-auto text-left">
      <p className="font-noto-serif text-sm leading-loose text-foreground/80">
        刚在 Maison Atelier 预约了一次定制咨询。
        她们说：好的设计不是加法，是减法。
        十五年了，我还是第一次遇到认真听我说话的设计师。
      </p>
      <div className="mt-3 flex gap-3">
        <button
          onClick={() => navigator.clipboard.writeText(document.querySelector('blockquote')?.textContent || '')}
          className="text-xs font-jost tracking-wide text-muted-foreground hover:text-foreground transition-colors"
        >
          [ 复制文案 ]
        </button>
        <span className="text-xs text-muted-foreground/50">|</span>
        <span className="text-xs text-muted-foreground/50">截图分享效果最佳</span>
      </div>
    </div>
  )}
</div>
```

### 12.3 案例页面截图友好设计

以下设计细节让案例卡和设计师介绍**天然适合截图传播**：

- 每个案例卡片的客户引言使用 `border-l-2 border-primary/40`，形成视觉锚点
- 设计师姓名使用 `font-cormorant text-4xl`，字号大到截图后仍然清晰可读
- 工艺数字区域使用 `font-cormorant text-2xl`，冲击力强
- **禁止**：在图片上叠加半透明黑色文字层——截图后文字不可读

### 12.4 微信分享图（静态 OG 图片）

在 `public/` 目录下放置一张 `share-card.jpg`（建议尺寸 1200×630px），作为微信分享的 fallback 图：

```
public/
└── share-card.jpg   # 视觉设计：品牌 LOGO + 一句引言 + 品牌网址
```

> 如果没有真实图片，可以使用 `picsum.photos/1200/630?random=fashion` 作为占位图。

---

## 🚀 十三、部署规范

完成开发后，调用 `edgeone-pages-deploy` Skill 进行部署。流程如下：

```bash
# 1. 构建项目
npm run build

# 2. 安装/更新 EdgeOne CLI（需 >= 1.2.30）
npm install -g edgeone@latest

# 3. 询问用户选择站点（中国站 or 国际站），然后登录
edgeone login --site china    # 或 --site global

# 4. 部署
edgeone pages deploy -n maison-atelier

# 5. 输出完整的 EDGEONE_DEPLOY_URL（包含完整查询字符串，不得截断）
```

**部署前在 EdgeOne 控制台完成：**
1. 进入「KV Storage」→ 申请开通 → 创建命名空间「maison-atelier-appointments」
2. 绑定到项目，变量名设置为 `appointments_kv`
3. 部署后通过 `GET /api/health` 验证服务正常

---

*Maison Atelier · 一段提示词，一个讲述手艺的网站*
*为「WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛」参赛作品*

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

````
