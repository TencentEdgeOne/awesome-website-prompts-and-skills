# Daily Buzz

> **赛道**：Prompt　**作者**：寒木
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Daily Buzz demo](../assets/demos/daily-buzz.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Daily Buzz |
| 赛道 | Prompt |
| 作者 | 寒木 |

## 📝 作品介绍

Daily Buzz
赛博朋克风格科技新闻门户，核心是沉浸式阅读体验，视觉冲击强、轻量化部署。适用于科技博客、公司内网、展会大屏、创意比赛等场景。亮点含赛博朋克 HUD 界面、Canvas 全息机器人动画、流光标题、粒子网络背景、玻璃拟态新闻卡片、底部数据统计模块，零依赖易部署。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# Daily Buzz — 科技新闻门户

> 参赛作品 · EdgeOne Pages × WorkBuddy AI 编程挑战赛
> 赛道：AI 编程 · 炫酷科技风每日新闻门户

---

## 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Daily Buzz（每日科技新闻） |
| 类型 | 科技新闻门户 |
| 技术栈 | 纯 HTML + CSS + JavaScript（Canvas 动画） |
| 部署平台 | EdgeOne Pages |Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.
| 设计风格 | 深色赛博朋克 + 全息科技 HUD |

---

## 作品介绍

Daily Buzz 是一款以"科技新闻 一屏掌握"为核心理念的每日科技新闻门户。

### 设计亮点

1. **全屏沉浸式 Hero 区域**
   - Canvas 粒子网络背景，鼠标交互斥力效果
   - 全息机器人 + 悬浮数据屏幕场景
   - 赛博朋克 HUD 叠加层（四角瞄准框、扫描线、数据面板、透视网格）

2. **渐变流光标题**
   - 大字号科技感标题（4-7.5rem）
   - CSS 渐变背景动画实现流光效果（8-10秒慢速循环）
   - 柔和文字光晕阴影

3. **玻璃拟态卡片**
   - 半透明背景 + 毛玻璃模糊
   - 分类专属渐变色彩（AI紫、芯片青、手机粉、新能源绿）
   - 悬浮上浮 + 边缘发光交互效果

4. **炫酷数据统计模块**
   - 页面底部专业数据展示
   - 扫描线动画 + 渐变边框呼吸效果
   - 数字递增动画

5. **Canvas 神经网络动画**
   - AI 专区背景动态神经网络

---

## 完整 Prompt

```
Build a single-page tech news portal called "Daily Buzz" with a cyberpunk holographic HUD aesthetic.

---

## DESIGN PHILOSOPHY

The site should feel like:
- Cyberpunk / Sci-fi command center
- Holographic display interface
- Dark, immersive, professional
- Glassmorphism cards
- Neon accent glows (cyan #00d4ff + purple #7c3aed)
- Binary/tech data visual elements

---

## COLOR PALETTE

- Background: #000000 (pure black)
- Primary Accent: #00d4ff (neon cyan)
- Secondary Accent: #7c3aed (purple)
- Highlight: #a78bfa (light purple)
- Text: #f5f5f7 (off-white)
- Muted Text: rgba(255,255,255,0.4-0.7)

Category Colors:
- AI: #a78bfa (purple)
- Chip: #00d4ff (cyan)
- Phone: #ff6b9d (pink)
- EV: #30d158 (green)

---

## SITE STRUCTURE

### 1. FIXED NAVBAR
- Fixed top, transparent initially, becomes frosted glass on scroll
- Logo: ⚡ icon + "Daily Buzz" text
- Nav links: AI, 芯片, 手机, 新能源
- Subscribe button (ghost style)
- Border-bottom appears on scroll with purple tint

### 2. HERO SECTION (100vh)
Background layers (z-index order):
1. Canvas particle network (connections + glowing particles, mouse repel effect)
2. Canvas robot silhouette + holographic floating data screens with binary text
3. HUD overlay:
   - 4 corner brackets (cyan glow)
   - Scanning line animation (top to bottom, 4s loop)
   - 2 data panels (SYS_STATUS, NODE_SYNC)
   - Perspective grid floor (2-layer depth effect)

Content (centered):
- Headline: "科技新闻" + "一屏掌握" (large gradient text with slow shine animation)
- Subtitle: "每日精选 AI、芯片、手机、新能源等领域最重要资讯"
- CTA Button: "立即阅读" (glassmorphism with sweep animation on hover)

### 3. CONTENT SECTIONS (4 categories)

Each section:
- AI (id="ai"): Purple accent, neural network canvas background
- Chip (id="chip"): Cyan accent, subtle grid pattern
- Phone (id="phone"): Pink accent
- EV (id="ev"): Green accent, mini stats grid

Section structure:
- Section header with icon, title, subtitle
- "X 条资讯" count badge
- "查看全部 →" link
- News grid (auto-fill, min 320px)
- Featured card (spans 2 columns) + regular cards

News card design:
- Semi-transparent background
- Tag badges (热门/新品/趋势/深度/讨论)
- Title (2-line clamp, hover turns cyan)
- Description (3-line clamp)
- Footer: source + time, engagement (views, comments)
- Hover: lift up, border glow, shadow

### 4. STATS MODULE (bottom of page)
- Dark glassmorphism card
- Horizontal scan line animation (4s loop)
- Gradient border with subtle breathing effect
- 5 data items: 核心板块, 今日资讯, 关注用户, 科技股涨幅, 今日热点
- Number count-up animation on scroll into view
- Hover: item lifts, number glows

### 5. FOOTER
- Simple centered layout
- Brand + tagline
- Copyright

---

## CSS ANIMATIONS REQUIRED

1. **Text Shine Animation** (8-10s cycle, slow and smooth)
   - Gradient background position moves slowly
   - Use cubic-bezier for natural easing
   - Two lines have different timings/delays

2. **Scanning Line** (4s linear, top to bottom)
   - Thin bright line with glow shadow
   - Fades at bottom

3. **Button Sweep Effect**
   - Light band sweeps across on hover

4. **Card Hover Transitions**
   - Smooth lift (translateY)
   - Border color change
   - Shadow expansion

5. **Stats Border Glow** (4s, subtle breathing)
   - Border opacity pulses gently

6. **Neural Network Canvas**
   - Nodes pulse with sine wave
   - Connections fade based on distance

---

## CANVAS IMPLEMENTATIONS

### Hero Canvas (Particle Network)
- Particles: random position, slow velocity, cyan/purple colors
- Connections: draw lines when particles are close (< 140px), opacity based on distance
- Mouse repel: particles push away from cursor
- Neon flow lines: occasional diagonal light streaks

### Robot + Holographic Screen Canvas
- Robot silhouette: bezier curves, semi-transparent fill
- Circuit traces: animated progress lines
- 3 floating data cards with binary text
- Connection line from robot finger to screen
- Touch ripple effect at connection point

### AI Section Neural Network
- Floating nodes with pulse animation
- Connecting lines between nearby nodes
- Subtle glow effect

---

## INTERACTIVE FEATURES

1. **Navbar**: Becomes frosted glass when scrolled
2. **Smooth scroll**: Nav links smooth scroll to sections
3. **Scroll reveal**: Sections fade in when scrolling into view
4. **Count-up numbers**: Stats animate from 0 to target value
5. **Mouse interaction**: Hero particles repel from cursor
6. **Card hover**: Lift + glow + title color change

---

## RESPONSIVE DESIGN

- Mobile: Single column news grid
- Tablet: 2-column grid
- Desktop: Full layout with all effects
- Use clamp() for fluid typography
- Breakpoints: 768px, 1024px

---

## TECHNICAL NOTES

- Single HTML file (index.html)
- Inline CSS in <style> tag
- Inline JavaScript in <script> tag
- Canvas 2D API for all animations
- No external dependencies
- Use IntersectionObserver for scroll effects
- requestAnimationFrame for smooth canvas rendering
- CSS backdrop-filter for glass effects
- CSS animations for UI micro-interactions

---

## DEPLOYMENT

Deploy to EdgeOne Pages. The site should work as a standalone HTML file with no build step required.

---

## QUALITY CHECKLIST

- [ ] Hero section is visually striking on load
- [ ] Title has smooth gradient shine animation (not too fast)
- [ ] HUD elements (corners, scan line, panels) are visible but not distracting
- [ ] Robot/hologram scene renders correctly
- [ ] All 4 content sections display properly
- [ ] News cards have proper hover effects
- [ ] Stats module at bottom with animations
- [ ] Smooth scrolling between sections
- [ ] Responsive on mobile/tablet/desktop
- [ ] No console errors
- [ ] Loads quickly (no external resources except fonts)

---

## FONT RECOMMENDATION

Use system fonts with Chinese support:
```css
font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "PingFang SC", "Microsoft YaHei", sans-serif;
```

---

## CONTENT SECTIONS (Mock Data)

### AI Section (6 articles)
- Anthropic 300亿融资
- OpenAI GPT-5加速
- Kimi 20亿融资
- DeepSeek融资
- 马化腾反思AI投入
- Claude Sonnet 4.5下线

### Chip Section (4 articles)
- 半导体板块涨7.69%
- 台积电1.5万亿预测
- 中芯国际Q2指引
- 浪潮净利润47倍

### Phone Section (5 articles)
- 苹果降价函
- iPhone 17 Pro快充
- 华为折叠屏降价
- Google Magic Pointer
- Meta AI随身设备

### EV Section (4 articles)
- 新能源安全管理政策
- 新能源车涨价潮
- 动力电池回收调研
- 新能源ETF流入

---

## SUCCESS CRITERIA

The final site should:
1. Make visitors feel like they're accessing a futuristic tech command center
2. Have smooth, professional animations (no jarring or too-fast effects)
3. Present information clearly despite the visual effects
4. Load quickly and work without JavaScript errors
5. Look impressive as a single screenshot for competition submission
```

````
