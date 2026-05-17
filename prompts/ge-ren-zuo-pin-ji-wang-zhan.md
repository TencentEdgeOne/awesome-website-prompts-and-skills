# 个人作品集网站

> **赛道**：Prompt　**作者**：xcsoft · [GitHub @soxft](https://github.com/soxft)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![个人作品集网站 cover](../assets/demos/ge-ren-zuo-pin-ji-wang-zhan.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/ge-ren-zuo-pin-ji-wang-zhan.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 个人作品集网站 |
| 赛道 | Prompt |
| 作者 | xcsoft |
| GitHub | [@soxft](https://github.com/soxft) |

## 📝 作品介绍

作品基于 EdgeOne Pages 打造轻量全栈作品集，支持暗黑模式，使用类苹果磨砂玻璃质感，灵动岛样式的 tab栏
支持通过Edgeone Functions 获取 Github api数据，实时渲染仓库到 页面中，支持渲染 Readme。
支持按仓库评论

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# 个人作品集网站 · 优化版规格书

> **使用方式**：将本文档完整复制给 Claude / ChatGPT / Cursor 等 LLM，即可生成完整的个人作品集网站代码。实现前请先替换附录中的「占位符清单」为你的真实信息。

---

## 第 1 章 · 技术栈与全局配置

### 1.1 技术选型

| 分类   | 选型                                                         |
| ------ | ------------------------------------------------------------ |
| 框架   | Next.js 14 App Router，TypeScript 严格模式                   |
| 样式   | Tailwind CSS v3                                              |
| 动画   | Framer Motion（处理所有动效，不使用 CSS transition 做入场/出场动画） |
| 主题   | next-themes（管理暗黑/白天主题切换）                         |
| 包管理 | pnpm                                                         |

### 1.2 全局字体

JetBrains Mono（Google Fonts），作为唯一字体族：

- 标题：`weight 700`
- 正文：`weight 400`
- 辅助文字：`weight 300`
- 开启连字特性：`font-feature-settings: "liga" "calt"`

### 1.3 tailwind.config.ts 扩展

```ts
// tailwind.config.ts
{
  theme: {
    extend: {
      fontFamily: {
        mono: ['JetBrains Mono'， 'monospace']，
      }，

      colors: {
        accent: {
          start:  '#6366f1'，  // indigo
          mid:    '#a855f7'，  // purple
          mid2:   '#ec4899'，  // pink
          end:    '#f97316'，  // orange
          green:  '#22c55e'，
          cyan:   '#06b6d4'，
        }，
        glass: {
          light:        'rgba(255，255，255，0.04)'，
          'border-light': 'rgba(255，255，255，0.10)'，
          dark:         'rgba(0，0，0，0.04)'，
          'border-dark': 'rgba(0，0，0，0.08)'，
        }，
        surface: {
          dark:  '#000000'，
          light: '#fafafa'，
        }，
      }，

      backdropBlur: {
        glass:        '40px'，
        'glass-heavy': '80px'，
        'glass-light': '16px'，
      }，

      borderRadius: {
        pill:             '9999px'，
        'dynamic-island': '28px'，
      }，
    }，
  }，
}
```

---

## 第 2 章 · 暗黑/白天双模主题

使用 next-themes 的 `ThemeProvider` 包裹根布局 `app/layout.tsx`。

### 2.1 暗黑模式（默认）

| 层级     | 样式                                                         |
| -------- | ------------------------------------------------------------ |
| 背景     | `#000000`                                                    |
| 主文字   | `#f5f5f7`                                                    |
| 次文字   | `#98989d`                                                    |
| 辅文字   | `#6e6e73`                                                    |
| 玻璃面板 | `bg-white/[0.03]` + `border-white/[0.08]` + `backdrop-blur-[40px]` |
| 强调色   | accent 渐变系（见第 1 章 colors.accent）                     |

### 2.2 白天模式

| 层级     | 样式                                                         |
| -------- | ------------------------------------------------------------ |
| 背景     | `#fafafa`                                                    |
| 主文字   | `#1a1a1a`                                                    |
| 次文字   | `#6b6b6b`                                                    |
| 辅文字   | `#9b9b9b`                                                    |
| 玻璃面板 | `bg-white/[0.70]` + `border-black/[0.06]` + `backdrop-blur-[40px]` |
| 强调色   | 与暗黑模式同一组渐变，饱和度提升 20%                         |
| 面板阴影 | `0 1px 3px rgba(0，0，0，0.06)， 0 0 0 0.5px rgba(0，0，0，0.04)`   |

### 2.3 主题切换按钮

- **位置**：Dynamic Island 导航栏最右侧
- **图标**：暗黑模式显示 ☀️，白天模式显示 🌙
- **交互**：点击切换主题，图标旋转 180deg 并弹性缩放
- **动画**：`spring`，duration 300ms

### 2.4 全局过渡

主题切换时所有元素平滑过渡颜色：

```css
* {
  transition:
    background-color 0.4s ease，
    color            0.4s ease，
    border-color     0.4s ease;
}
```

---

## 第 3 章 · Dynamic Island 导航栏

仿 iPhone Dynamic Island 的浮动胶囊导航，置于页面顶部中央。

### 3.1 基础样式

```css
/* Dynamic Island 容器 */
position: fixed;
top: 16px;
left: 50%;
transform: translateX(-50%);
z-index: 50;
height: 48px;
border-radius: 28px; /* 对应 borderRadius.dynamic-island */

/* 暗黑模式 */
background: rgba(0， 0， 0， 0.6);
border: 1px solid rgba(255， 255， 255， 0.12);

/* 白天模式 */
background: rgba(255， 255， 255， 0.7);
border: 1px solid rgba(0， 0， 0， 0.06);

/* 阴影 */
box-shadow:
  0 8px 32px rgba(0， 0， 0， 0.12)，
  0 0 0 0.5px rgba(0， 0， 0， 0.08);

/* 毛玻璃 */
backdrop-filter: blur(80px); /* backdropBlur.glass-heavy */
```

### 3.2 三态交互

使用 Framer Motion 的 `animate`（width） + `layout` prop 实现平滑宽度过渡。

#### 状态 1 · Collapsed（默认 / 鼠标离开）

- **宽度**：`56px`（高度 48px → 接近圆形）
- **内容**：仅显示 ⌘ 图标或首字母 logo
- **过渡**：`width` 使用 `spring(stiffness: 200， damping: 24)`，duration 0.5s

#### 状态 2 · Expanded（鼠标悬停）

- **宽度**：`auto`，`min-width: 420px`，`max-width: 560px`
- **高度**：悬停时胶囊高度略微增加（约 4~6px），动画流畅自然
- **内容布局**（从左到右）：⌘ logo → 导航链接 → 分隔线 → ThemeToggle
- **内边距**：`12px 24px`
- **当前路由高亮**：使用 GradientText 组件渲染当前页链接文字
- **过渡**：`width` 使用 `spring`，duration 0.5s；`padding` 使用 `ease`，duration 0.4s；高度变化使用 `spring`，与宽度动画同步

#### 状态 3 · Scroll Context（折叠态滚动提示）

- **触发条件**：Collapsed 状态下，页面滚动到不同 section
- **表现**：⌘ 图标旁短暂显示当前 section 名称（如 "Works"、"About"）
- **行为**：显示 2 秒后自动淡出，回到纯 ⌘ 图标

### 3.3 移动端适配

手机端（viewport  **核心理念**：终端元素是氛围装饰，不是视觉主题。像 VS Code 一样冷静克制，而非 80 年代绿色荧光屏。

### 4.1 分行式代码注释

Section 副标题 / 描述文字前加 `//` 前缀。

- **样式**：`font-mono text-xs`，文字颜色 `text-tertiary/50`（半透明），`tracking-wider`（拉开字距）
- **与标题间距**：8px
- **示例**：`// featured works`

### 4.2 左对齐微缩提示符

- **位置**：名字正上方
- **内容**：微缩 `$` 符号，作为页面唯一提示符装饰
- **样式**：`text-xs`（14px），`weight 300`，颜色 `text-tertiary/40`，静态，无动画
- **视觉原则**：不闪烁、不绿色、不抢眼 —— 像一个真实的终端 prompt，视觉权重极低

同时可使用类终端命令作为提示信息，例如：

- `$ cat ~/me.md`
- `$ scroll down`

### 4.3 macOS 窗口圆点

所有玻璃卡片左上角添加装饰性三圆点：

| 圆点 | 颜色      |
| ---- | --------- |
| 红   | `#ff5f57` |
| 黄   | `#febc2e` |
| 绿   | `#28c840` |

- **直径**：8px（比标准 macOS 缩小一圈）
- **间距**：圆点之间间距 6px
- **位置**：距卡片左上角 14px
- **内容偏移**：圆点下方正文区域从距顶部 44px 处开始

### 4.4 行号装饰

About 区域文字段落左侧添加行号：

- **内容**：垂直排列 `1` `2` `3` ...
- **样式**：颜色 `text-tertiary/30`，字号 11px，右对齐
- **宽度**：28px
- **距正文间距**：20px

### 4.5 括号 / 标签装饰

- **名字包裹**：用 `` 包裹，括号颜色 `accent-mid/60`（降低饱和度）
- **标签格式**：用 `#` 前缀（如 `#react`、`#golang`）

### 4.6 背景代码水印

- **位置**：Hero 区域背景
- **内容**：随机字符
- **样式**：`font-mono`，倾斜 12deg，透明度 0.025（暗黑模式可降至 0.02）
- **动画**：极度缓慢滚动（约 60 秒一个循环周期）
- **显示条件**：仅桌面端

---

## 第 5 章 · 路由架构

多页路由（仅供参考，可按需调整）：

| 路径           | 页面     | 内容                    |
| -------------- | -------- | ----------------------- |
| `/`            | 首页     | Hero + 精选作品         |
| `/works`       | 作品列表 | 终端风格筛选 + 作品网格 |
| `/work/[slug]` | 作品详情 | README 风格展示         |
| `/about`       | 关于     | 极客简历 + 技能         |

所有页面共享根布局 `layout.tsx`，包含以下全局组件：

```
ThemeProvider + BackgroundBlobs + NoiseOverlay + CustomCursor + DynamicIsland + PageTransition
```

---

## 第 6 章 · 核心组件

### 6.1 组件清单

| 组件                | 用途                  | 关键规格                                                     |
| ------------------- | --------------------- | ------------------------------------------------------------ |
| **TerminalWindow**  | 通用卡片容器          | macOS 三圆点 + title + 内容区；`backdrop-blur-glass` + `border border-glass-border` + `rounded-2xl` |
| **GradientText**    | 渐变文字              | 文字填充 accent 渐变色（start → mid → mid2 → end），无额外前缀或装饰，纯净渲染 |
| **GlassPill**       | 小标签（技能 / 筛选） | 字体 JetBrains Mono，默认 `#` 前缀，毛玻璃胶囊样式           |
| **DynamicIsland**   | 顶部浮动导航          | 见第 3 章完整规格                                            |
| **CustomCursor**    | 自定义光标            | 暗黑模式：白色圆环；白天模式：黑色圆环；移动端隐藏           |
| **ProjectCard**     | 作品卡片              | TerminalWindow 包裹；含 Canvas 生成艺术预览、标题、描述、标签 |
| **BackgroundBlobs** | 背景光斑              | 暗黑：3 个彩色光斑；白天：3 个暖灰色光斑；`blur-[120px]`；带视差滚动 |
| **ThemeToggle**     | 主题切换按钮          | 基于 next-themes `useTheme`；见第 2 章 2.3 节                |
| **ScrollReveal**    | 入场动画              | stagger 效果；文字字体使用 JetBrains Mono                    |

### 6.2 GradientText 详细规格

```tsx
// GradientText 实现参考
// 使用 CSS background-clip: text 实现渐变文字填充
// 渐变方向：左到右，覆盖 accent.start → accent.mid → accent.mid2 → accent.end
// 回退方案：纯色文字（不支持 background-clip 的浏览器）
```

- **渐变顺序**：`accent.start` → `accent.mid` → `accent.mid2` → `accent.end`
- **渲染方式**：`background-clip: text` + `text-fill-color: transparent`
- **无装饰**：不添加星号、括号、下划线等额外元素
- **适用场景**：名字、章节标题、当前路由高亮、重要强调文字

### 6.3 GlassPill 详细规格

- **形状**：`rounded-pill`（`border-radius: 9999px`）
- **背景**：毛玻璃效果，暗黑 `bg-white/[0.06]`，白天 `bg-black/[0.04]`
- **边框**：暗黑 `border-white/[0.08]`，白天 `border-black/[0.06]`
- **内边距**：`px-3 py-1`（水平 12px，垂直 4px）
- **字体**：JetBrains Mono，`text-xs`
- **前缀**：默认显示 `#`（技能标签、筛选按钮等场景）

---

## 第 7 章 · 各 Section 要点

### 7.1 Hero

- **对齐**：内容左对齐
- **元素排列**（从上到下）：
  1. 微缩 `$` 符号（`text-xs text-tertiary/40`，静态，无动画）
  2. 名字（GradientText 渲染）
  3. 身份标签（GradientText 渲染）
  4. 一句话描述（`//` 前缀，`text-xs text-tertiary/50`）
  5. GlassPill 技能标签（水平排列）
- **底部**：淡色向下指示箭头（`text-tertiary/20`，无文字，暗示可滚动）

### 7.2 精选作品

- **标题**："Featured Works"（GradientText 渲染）
- **副标题**：`// featured projects`
- **布局**：大小交错 —— 大卡片（66% 宽）与小卡片（34% 宽）交替排列
- **内容**：n 张 ProjectCard
- **底部**：淡色「查看更多」链接
- 从 Github API  获取 Star 最多的 4个作品

### 7.3 作品列表 / 筛选

- **标题**："Works"
- **筛选栏**：GlassPill 按钮组 —— `#all` `#design` `#dev` `#other`
- **网格布局**：瀑布流 / 响应式网格
- **入场动画**：每张卡片 stagger 渐入
- **防空洞规则**：网格排列时禁止出现单侧空白列；如左侧内容过多导致右侧悬空，直接换行填充

使用 Github API 获取作品列表，包含基本 Description，语言，star count 与 fork count。

使用 Edgeone Function 服务端代理访问。

### 7.4 作品详情

- **返回链接**：纯文字 GlassPill（文字 `↩ Back`），无 `$` 前缀
- **内容容器**：TerminalWindow 包裹，仿 GitHub README 排版风格
- **底部导航**：`← Prev` 和 `Next →`，指向前后项目

需要支持渲染 README ，需要支持常见 Markdown 能力：

- 标题
- 段落
- 列表
- 表格
- 引用
- 链接
- 图片
- 行内代码
- 代码块

代码块要符合终端玻璃风格。  
图片要自适应宽度，不要撑破布局。  
外链应新窗口打开，并带安全属性

需要展示：

- 仓库名称
- 仓库描述
- GitHub 外链
- stars
- forks
- language
- license
- 更新时间
- README Markdown 内容

### 7.5 关于

- **标题**："About"
- **正文区**：TerminalWindow 内，带行号装饰的段落文字（见 4.4 行号规格）
- **技能区**：
  - 标题："Skills"
  - 布局：3 列 TerminalWindow
  - 内容排版：代码高亮风格（类似 IDE 中的语法高亮）

在 最下方添加一个留言板

留言板包含：

- 留言列表
- 昵称输入框
- 内容输入框
- 可选联系方式输入框
- 提交按钮
- 空状态
- loading 状态
- 错误提示

留言板是轻量功能，不要做成复杂社区系统。

### 7.6 评论系统

每个作品详情页底部都要有独立评论区。

标题示例：

```txt
Comments
// project discussion
```

评论系统包含：

- 评论列表
- 昵称输入
- 评论内容输入
- 提交按钮
- 空状态
- loading 状态
- 错误状态

要求：

- 评论绑定到当前作品
- 不需要登录
- 不做楼中楼
- 不做点赞
- 不做富文本
- 只做简洁可用的评论能力

### 7.7 全局 footer

- 全站访问量（page view） 使用 Edgeone KV
- 社交链接
- 版权信息
- 简短终端风格文案

示例：

```txt
// 访问量: 1024  苏ICP备xxx
```

## 

## 第 8 章 · 自定义 Hook

### 8.1 useGenerativeArt

```ts
function useGenerativeArt(
  canvasRef: React.RefObject，
  artType: 1 | 2 | 3 | 4 | 5 | 6
): void
```

- **渲染**：`requestAnimationFrame`，帧率 30fps
- **算法**：6 种不同生成艺术算法（由 `artType` 参数选择）
- **性能**：`IntersectionObserver` 检测离开视口时暂停绘制；`ResizeObserver` 响应画布尺寸变化

### 8.2 useDynamicIsland

```ts
function useDynamicIsland(): {
  isExpanded: boolean;
  // ... 其他返回值
}
```

- **展开触发**：鼠标进入导航区域
- **折叠触发**：鼠标离开导航区域，延迟 300ms 后折叠（防止误触）

---

## 第 9 章 · 响应式三档

| 断点           | 桌面（≥1024px）     | 平板（768px ~ 1023px）                         | 手机（ **重要**：实现前请将以下占位符替换为你的真实信息。确保全部替换完成后再执行构建。

| 占位符         | 含义             | 示例值                                   |
| -------------- | ---------------- | ---------------------------------------- |
| `{名字}`       | 你的名字 / ID    | xcsoft                                   |
| `{身份标签}`   | 你的身份描述     | 独立开发者 / 全栈开发者                  |
| `{一句话描述}` | Hero 区个人简介  | 干就完了                                 |
| `{核心技能}`   | 主要技能关键词   | Golang， Next.js                          |
| `{地点}`       | 所在地区         | 江苏                                     |
|                |                  |                                          |
| `{技能列表}`   | About 页技能清单 | Golang， Python， Next.js， 小程序， Flutter |
| `{社交链接}`   | 社交 / 联系方式  | github.com/soxft， email@xcsoft.top       |

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

````
