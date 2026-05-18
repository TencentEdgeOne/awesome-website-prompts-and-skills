# Echo

> **赛道**：Prompt　**作者**：FKL · [GitHub @fklgit123](https://github.com/fklgit123)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Echo demo](../assets/demos/echo-app.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Echo |
| 赛道 | Prompt |
| 作者 | FKL |
| GitHub | [@fklgit123](https://github.com/fklgit123) |

## 📝 作品介绍

Echo 是一个沉浸式 3D 情绪留言互动站。用户在真实 HDR 星空中留下匿名话语，每句话化作满天繁星中的一颗。平时留言星与真实星辰无法区分，悬停时彩色光晕亮起，点击即可阅读他人心声。采用 Three.js 渲染照片级银河背景，叠加 50，000 颗 GPU 实例化星辰营造深邃太空感。适用于情感倾诉、陌生人社交、品牌互动营销等场景。核心亮点：电影级 3D 视觉体验、留言即星辰的沉浸式交互、全栈 EdgeOne Pages 部署。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# Echo — 回音壁

以中文为主要语言，构建一个沉浸式单页互动情感网站 **Echo（回音壁）**，使用 React + Vite + TypeScript + Tailwind CSS + shadcn/ui + Three.js（@react-three/fiber），最终部署到 **EdgeOne Pages** 并输出可公开访问的线上 URL。

> Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

---

## GOAL

创建一个名为 **Echo（回音壁）** 的匿名情绪留言互动空间。用户可以在 3D 真实星空中留下匿名话语，它们会变成满天繁星中的一颗。点击任意星辰可以阅读他人的留言。

**最终交付物是一个部署在 EdgeOne Pages 上的线上网站，附带可公开访问的 URL。本地开发服务器不是最终交付物。**

这个网站应当让人感觉像：
- 在美术馆里走进了一个黑暗的房间，房间里悬浮着发光的星星
- 每颗星星都是一句陌生人的话
- 安静、有诗意、让人想停留

**这不是：**
- ❌ 品牌官网或品牌落地页
- ❌ 电商网站
- ❌ 个人作品集
- ❌ SaaS 工具站
- ❌ 社交媒体平台

这是一个情感互动装置，不是一个实用工具。它更接近艺术装置，而非网页应用。

网站必须使用 **EdgeOne Pages Edge Functions + KV Storage** 作为后端支撑。

---

## EdgeOne Pages 平台说明

由于 EdgeOne Pages 的路由和 KV 访问方式与通用 Serverless 平台存在差异，以下平台特性必须在实现时严格遵守：

### 文件系统路由

EdgeOne Pages 的函数路由基于 **文件路径**，而不是代码内的正则匹配。每个文件对应一个 URL 路径：

| 文件路径 | 对应的 URL |
|----------|-----------|
| `edge-functions/api/echoes.js` | `GET/POST /api/echoes` |
| `edge-functions/api/echoes/[id].js` | `GET /api/echoes/:id` |
| `edge-functions/api/echoes/count.js` | `GET /api/echoes/count` |
| `edge-functions/api/health.js` | `GET /api/health` |

`[id].js` 是动态路由语法，通过 `context.params.id` 获取参数。

### KV Storage 访问方式

在 EdgeOne Pages 的 V8 运行时中，KV 命名空间是 **全局变量**，不是 `context.env` 上的属性：

```javascript
// ❌ 不可用
await context.env.echoes_kv.get('key')

// ✅ 正确用法（全局变量，变量名在控制台绑定时设置）
await echoes_kv.get('key')
await echoes_kv.put('key', value)
await echoes_kv.delete('key')
```

### CLI 环境变量

每次执行 `edgeone` CLI 命令前，必须设置以下环境变量：

```bash
export PAGES_SOURCE=skills
```

告知平台该命令由 AI Skill 上下文触发。

---

## VISUAL IDENTITY

### 设计语言

- **氛围**：黑暗、静谧、深邃、诗意、治愈
- **风格**：极简博物馆级，每颗星辰像展厅中精心陈列的艺术品
- **情感**：孤独而温暖，像有人在宇宙的另一端等待倾听

### 配色系统（CSS Variables）

在 `src/index.css` 中定义：

```css
:root {
  --background: 255 3% 3%;           /* 近乎纯黑的深空 */
  --foreground: 260 20% 95%;         /* 柔白 */
  --primary: 260 80% 70%;            /* 星云紫 — 主色调 */
  --primary-foreground: 260 10% 10%;
  --accent: 192 100% 72%;            /* 冰蓝 — 点缀色 */
  --accent-foreground: 192 10% 10%;
  --muted: 260 8% 12%;
  --muted-foreground: 260 10% 65%;
  --border: 260 20% 90% / 0.08;
  --card: 260 12% 6%;
  --radius: 12px;
}
```

### Star Color Palette

8 种留言星光晕颜色，从以下色板随机分配。每种颜色是 RGB 数组，在生成 Sprite 光晕纹理时转换为 CSS rgba：

```typescript
const STAR_COLORS = [
  [200, 180, 255], // 淡紫
  [180, 200, 255], // 冰蓝
  [255, 200, 180], // 暖橙
  [255, 220, 200], // 淡粉
  [210, 210, 255], // 蓝紫
  [255, 210, 230], // 粉红
  [200, 230, 255], // 天蓝
  [230, 200, 255], // 紫罗兰
];
```

### 字体（Fonts）

使用 Google Fonts：

- **标题 / 品牌文字**：`"Cormorant Garamond"`（衬线，italic 500/600/700）— 优雅、诗意、有艺术气质
- **正文 / UI 元素**：`"Manrope"`（无衬线，300/400/500/600）— 干净、现代、不抢戏
- **中文内容**：`"Noto Sans SC"` 作为备用中文字体

Tailwind 字体族：

```css
font-heading: ["Cormorant Garamond", "serif"]
font-body: ["Manrope", "Noto Sans SC", "sans-serif"]
```

### 玻璃态组件（Glass Components）

创建两个可复用的 `@layer components`：

```css
.void-glass {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(16px) saturate(120%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06), 0 8px 32px rgba(0, 0, 0, 0.4);
}

.void-glass-strong {
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.10);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.10), 0 12px 48px rgba(0, 0, 0, 0.5);
}
```

---

## NON-NEGOTIABLE LAYOUT & PERFORMANCE RULES

### 布局铁律

1. **3D 视口始终全屏** — Three.js Canvas 必须是 `absolute inset-0`，占据整个视口
2. **UI 覆盖层保持极简** — 所有 UI 元素作为浮层叠加在 3D 场景之上，使用 `relative z-10`
3. **不要**在 3D 场景上叠加大块不透明 UI 面板 — 最多使用毛玻璃半透明面板
4. **单页滚动架构** — 不需要多页面路由，所有交互在单页内完成
5. **不要**使用滚动驱动的 3D 叙事 — 这里的核心交互是点击，不是滚动

### 性能铁律

1. **必须保持 60fps** — 帧率卡顿被视为质量缺陷
2. **移动端自适应** — 检测 GPU 能力，在低端设备上降低 Points 星层数量（Layer 1→5000, Layer 2→2000, Layer 3→500）、关闭后处理效果
3. **留言星数量上限**：最多同时渲染 **50 颗**留言 Sprite（不是前景星星，前景星星是 Points 不限制）。这是使用中的自然上限，不需要额外限制

### 交互铁律

1. **每颗留言星必须可点击** — 悬停时亮起光晕，点击显示消息内容
2. **所有过渡动画必须平滑** — 使用 `motion` 或 GSAP，不要使用 CSS transition 做 3D 交互
3. **提交留言时必须展示"星辰诞生"动画** — 新星从暗到亮"点亮"，然后融入星海

---

## TECH STACK

```
Core:
- React 18+
- Vite 5+
- TypeScript (严格模式)
- Tailwind CSS v3+ (+ tailwindcss-animate)
- shadcn/ui (仅 Dialog, Button, Input, Toast 组件)
- lucide-react (图标)

3D:
- three (核心 3D 引擎)
- @react-three/fiber (React 集成层)
- @react-three/drei (R3F 工具集: OrbitControls, Float, Text, Environment, PresentationControls)
- @react-three/postprocessing (后处理特效: Bloom)
- three/examples/jsm/loaders/RGBELoader (加载 HDR 环境贴图)

动画:
- motion / framer-motion (UI 动画)
- @react-spring/three (可选，3D 对象弹簧动画)

后端:
- EdgeOne Pages Edge Functions (API 层)
- EdgeOne Pages KV Storage (数据持久化)
```

---

## 3D SCENE SPECIFICATION

### 背景系统 — HDR 真实星空（首选）+ 程序化回落

整个体验发生在一片**真实的宇宙星空**中。背景使用高动态范围（HDR）等距柱状投影贴图，提供照片级的银河全景。

**首选方案：加载远程 HDR 贴图**

使用 `RGBELoader` 加载以下免费可商用 HDR 资源（来自 spacespheremaps.com，CC0 协议，无需登录）：

```javascript
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';

const loader = new RGBELoader();
loader.load(
  'https://www.spacespheremaps.com/wp-content/uploads/HDR_galactic_plane_3.hdr',
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture; // 提供环境反射光照
  }
);
```

HDR 贴图同时用作 `scene.background` 和 `scene.environment`，让 3D 元素获得真实的环境反射。

**回落方案：程序化生成高清星空**

如果 HDR 加载失败或网络不可用，使用 Canvas 2D 生成 4096×2048 的星空等距柱状投影图，通过 `TextureLoader` 加载为 `scene.background`。生成逻辑：

- 深空底色：`#040206`（近乎纯黑，带极微弱紫色调）
- 星云云层：25 个随机位置、大小、颜色的半透明径向渐变色块（紫/蓝/粉/青）
- 银河带：8 条弧形星云密集带，沿银河平面分布
- 恒星层：
  - 80,000 颗极细小的暗星（1px 点，透明度 0.02~0.1）
  - 40,000 颗可见星（径向渐变，0.2~1.2px，8 种色温）
  - 3,000 颗亮星（径向渐变，1~4px，高透明度 0.6~1.0）
  - 50 颗十字星芒亮星（4 条交叉线，用于最亮的星）
- 颜色分布：65% 冷白/蓝白、25% 暖白/淡黄、8% 淡紫/淡红、2% 特殊色

### 前景星层（Points 系统）

在 HDR 背景之上，叠加 **3 层 GPU 实例化星星**（`THREE.Points`），提供"满天繁星"的立体景深感：

```
Layer 1 — 远层暗星（30,000 颗）
├─ 分布半径：15-30 units（散落在场景各处）
├─ Points 大小：0.06
├─ 透明度：0.6
├─ 颜色：vertexColors（从 5 种色温中随机分配）
├─ 渲染：AdditiveBlending + sizeAttenuation
└─ 作用：填充背景与前景之间的深度空间

Layer 2 — 中层星（15,000 颗）
├─ 分布半径：6-15 units
├─ Points 大小：0.10
├─ 透明度：0.8
├─ 颜色：vertexColors，冷暖混搭
└─ 作用：主要的视觉星星层

Layer 3 — 近层亮星（5,000 颗）
├─ 分布半径：3-6 units
├─ Points 大小：0.18
├─ 透明度：1.0
├─ 颜色：vertexColors，暖色偏多
└─ 作用：最近最亮的星星，提供"触手可及"的立体感
```

所有星层使用圆形径向渐变纹理（32×32，从中心白到边缘透明），采用 `AdditiveBlending` 加法混合，通过 `vertexColors` 实现每颗星独立颜色。

**Points 材质配置**：
```javascript
const pointMat = new THREE.PointsMaterial({
  map: starTexture,       // 圆形渐变纹理
  size: 0.06,             // 根据层不同设置为 0.06/0.10/0.18
  transparent: true,
  opacity: 0.6,           // 根据层不同设置为 0.6/0.8/1.0
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  vertexColors: true,      // 启用顶点颜色
  sizeAttenuation: true,   // 距离越远越小
});
```

**性能降级**：
- low-end 移动端：仅 Layer 2（5000 颗）+ Layer 3（1000 颗），size 减半
- mid-end：Layer 1（15000）+ Layer 2（8000）+ Layer 3（2000）
- high-end：全量效果

### 星辰留言系统（Message Stars）

留言不再以"浮动球体"形式出现，而是**嵌入在星空中的星辰**——每一条留言对应一颗 Sprite 星星，从视觉上和其他恒星无法区分。

**每颗留言星的结构：**

```
Layer 1 — 核心星点（Sprite）
├─ 纹理：48×48 径向渐变（中心白→边缘透明）
├─ 大小：0.03~0.08（和真实星星一致）
├─ 透明度：0.6~1.0（随机初始值）
├─ 混合：AdditiveBlending
└─ 位置：分布在半径 2.5~7.5 的球面上，Y 轴压缩 0.5

Layer 2 — 彩色光晕（Sprite）
├─ 纹理：96×96 彩色径向渐变（从特定颜色到透明）
├─ 颜色：从 8 色调色盘中随机分配（淡紫/冰蓝/暖橙/淡粉等）
├─ 大小：0.25（平时极淡，几乎不可见）
├─ 透明度：0.08（平时隐约可见）
└─ 作用：只有悬停时才亮起的"秘密签名"
```

**交互方式**：
1. **平时**：留言星的外观和真实恒星完全一致，蓝色光晕极淡不可见
2. **鼠标悬停**：光晕透明度上升到 0.5，大小扩展到 0.6，核心星点放大 2x
3. **点击**：弹出 Message Detail Card 显示留言内容
4. **闪烁动画**：每颗星独立闪烁（正弦波，频率 0.3~0.8，振幅 0.3）

**调色盘**：
```typescript
const STAR_COLORS = [
  [200,180,255], // 淡紫
  [180,200,255], // 冰蓝
  [255,200,180], // 暖橙
  [255,220,200], // 淡粉
  [210,210,255], // 蓝紫
  [255,210,230], // 粉红
  [200,230,255], // 天蓝
  [230,200,255], // 紫罗兰
];
```

### 光照

- **环境光**：极弱（intensity 0.1），色温偏紫，仅用于避免全黑面
- **场景主照明**：来自 HDR 贴图自身的 `scene.environment`
- **无额外点光源或方向光**——太空场景不需要，HDR 提供所有环境反射

### 指数雾（Exponential Fog）

```
FogExp2:
  color: 0x050510
  density: 0.015（很淡，仅用于融合远处星层）
```

作用：
- 极远处的星星微微融入背景，不是"贴在屏幕上的贴纸"
- 在 HDR 背景下几乎不可见，仅作为 3D 空间的深度暗示

### 相机

- **初始位置**: [0, 0.3, 4.5]
- **自由浏览**: OrbitControls，带 damping（dampingFactor: 0.06）
- **自动旋转**: 启用 autoRotate，速度 0.35（约 20 秒转一圈，舒缓的太空漫游感）
- **限制**: minDistance 2, maxDistance 10
- **点击留言星时**：禁用 autoRotate，镜头平滑拉近
- **镜头过渡**：使用 @react-spring/three 弹簧动画（mass: 1.2, tension: 180, friction: 28）

### 渲染器与色调映射

- **渲染器**：WebGLRenderer，开启 antialias，pixelRatio 限制为 min(devicePixelRatio, 2)
- **色调映射**：ACESFilmicToneMapping（电影级色调），exposure 1.8
- **颜色空间**：sRGB

### 后处理（Postprocessing）

以下后处理效果在 high-end 设备上启用：

1. **Bloom**（泛光）：
   - 强度：0.2（极克制——不要洗白星空）
   - threshold：0.8（只对最亮的高光生效）
   - 只增强留言星悬停时的发光感
   - 不对整个星空做泛光

2. **性能降级**：
   - low-end：无后处理
   - mid-end：仅 Bloom（强度 0.15）
   - high-end：Bloom + 微弱的 ToneMapping 调整

---

## UI COMPONENT SPECIFICATION

所有 UI 组件覆盖在 3D 场景之上，使用 `pointer-events-none` 容器 + 各组件自行控制 `pointer-events-auto`。

### 1. FIXED NAVBAR

```
结构：
┌────────────────────────────────────────────┐
│  ✦ Echo (logo)        [计数]    [留下回音]  │
└────────────────────────────────────────────┘
```

- **位置**：fixed top-0 w-full z-50
- **外层容器**：`pointer-events-auto`
- **样式**：初始透明 → 鼠标移入/滚动有微弱玻璃态（void-glass）
- **左**：品牌文字 "✦ Echo"（Cormorant Garamond italic，字重 600）
- **中**：实时计数 "{count} 条回音"（Manrope 300，极小字，muted 色）
- **右**：CTA 按钮 "留下回音"（void-glass-strong 样式，冰蓝色边框）

行为：
- 透明状态在深色背景下几乎不可见，保持场景纯净
- 鼠标移入 navbar 区域时，出现微弱玻璃背景
- "留下回音" 按钮 hover 时发光增强

### 2. HERO / ENTRY OVERLAY

这是网站首次加载时的初始画面，覆盖整个视口。几秒后自动淡出，或用户点击"走进回音壁"按钮进入主体验。

- **外层容器**：fixed inset-0 z-30，flex 居中布局，深色半透明背景（bg-black/60），`pointer-events-auto`
- **内容布局**：居中垂直堆叠（flex flex-col items-center justify-center gap-6）

```
          ┌─────────────────────────┐
          │                         │
          │      ✦ Echo             │  ← 超大标题，Cormorant 斜体
          │     回 音 壁            │  ← 中文副标题
          │                         │
          │  在宇宙尽头，            │
          │  每句话都有一颗星        │  ← poetic tagline
          │                         │
          │   [ 走进回音壁 → ]       │  ← CTA 按钮
          │                         │
          │  已有 {n} 条回音在漂浮  │  ← 淡入的小字计数
          │                         │
          └─────────────────────────┘
```

**动画序列**（使用 motion/framer-motion）：
1. 场景加载 → 3D 场景先渲染（星辰在背后若隐若现）
2. 延迟 0.5s → 标题 fade-up + blur-to-clear（持续 1.5s，ease-out）
3. 延迟 1.2s → tagline 淡入
4. 延迟 2.0s → CTA 按钮淡入
5. 延迟 2.5s → 计数文字淡入

**点击"走进回音壁"** → 使用 `<AnimatePresence onExitComplete={onEnter}>` 确保退出动画完整播放后进入主体验。不可用裸 `setTimeout` 控制，因 `setTimeout` 不依赖动画完成回调，可能导致 `exit` 动画被截断。

**如果`/api/echoes` 返回为空**，显示一条特殊消息：
> "你是第一个回声。说点什么吧。"

### 3. 3D VIEWPORT（核心体验区）

- 全屏（top-0 left-0 w-screen h-screen）
- 渲染 @react-three/fiber 的 Canvas
- 所有 3D 场景内容在此
- `pointer-events-auto`（覆盖父容器的 `pointer-events-none`）
- 当 overlay 显示时，3D 场景在背后正常运行

### 4. MESSAGE INPUT PANEL

点击"留下回音"按钮时，从底部滑出。

```
┌──────────────────────────────────────────┐
│  ✦ 在虚空中留下一句话                    │
│                                          │
│  ┌──────────────────────────────────┐    │
│  │ 在这里写下你想说的...             │    │
│  └──────────────────────────────────┘    │
│                                          │
│  📝 匿名的 / 最多 200 字                │
│                                          │
│        [取消]    [✨ 发送回音]           │
└──────────────────────────────────────────┘
```

- **位置**：fixed bottom-0 w-full z-40
- **容器**：void-glass-strong，顶部圆角，`pointer-events-auto`
- **输入框**：shadcn/ui Textarea 风格，自动聚焦，最大 200 字
- **计数**：实时显示 "0/200"
- **发送**：点击或用 Ctrl+Enter 快捷键
- **动画**：motion 从 bottom-[300px] → bottom-0，spring 动画

**发送后**：
1. 显示 Toast "✨ 你的回音已化作星辰"（shadcn Toast）
2. 3D 场景中：一颗新星辰从视口中央"点亮" → 渐亮后融入星海
3. 计数器 +1
4. 面板优雅滑下关闭

### 5. MESSAGE DETAIL CARD

点击 3D 场景中的星辰时弹出。

```
┌──────────────────────────────────────┐
│                                      │
│   "有时我觉得，                        │
│    宇宙的寂静和                      │
│    我内心的寂静                       │
│    是同一个东西。"                    │
│                                      │
│  ──────────────────────────────────  │
│                                      │
│  2026.05.11  13:02          #3B82F6  │
│                                      │
│        [关闭]                        │
└──────────────────────────────────────┘
```

- **位置**：absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20
- **容器**：void-glass-strong，max-w-md（max-width: 440px），内边距 32px 40px，`pointer-events-auto`
- **文字**：Georgia/Cormorant Garamond italic，18px，line-height 1.7，白色 0.9 透明度，字母间距 0.3px
- **时间戳**：system-ui 字体，11px，透明度 0.2，字母间距 1px
- **关闭按钮**：12px，内边距 8px 26px，圆角 20px
- **色点**：显示该星辰的颜色小圆点
- **关闭**：点击外部区域或关闭按钮
- **动画**：motion scale(0.8 → 1.0) + fade (opacity 0 → 1)，spring

### 6. FOOTER

极简单行，固定在底部。

```
                 © 2026 Echo · 每句话都有一颗星
```

- **位置**：fixed bottom-4 left-0 w-full text-center z-10
- **样式**：text-xs opacity-30 hover:opacity-60
- **颜色**：white
- **字体**：Manrope 300

### 7. TOAST COMPONENT

使用 shadcn/ui Toast（或 Sonner），用于：
- 发送成功：`"✨ 你的回音已化作星辰"`
- 加载失败：`"🌌 星空暂时静默，请稍后再试"`
- 内容过长：`"回音不能超过 200 字"`

---

## EDGE FUNCTIONS API

使用 EdgeOne Pages Edge Functions。路由基于文件系统路径（见"平台说明"章节），每个端点一个独立文件。

### `edge-functions/api/echoes.js`

匹配 `GET /api/echoes` 和 `POST /api/echoes`。

**GET /api/echoes**

返回最近的留言列表。

```javascript
// Query params: ?limit=50&offset=0
// Response:
{
  echoes: [
    {
      id: "echo_abc123",
      text: "宇宙的寂静和我内心的寂静是同一个东西",
      color: "#7C3AED",
      position: [1.2, -0.5, 3.8],
      size: 0.6,
      createdAt: "2026-05-11T13:02:00.000Z"
    }
  ],
  total: 142,
  hasMore: true
}
```

**POST /api/echoes**

创建一条新留言。

```json
// Request Body:
{
  "text": "你的留言内容（不超过200字）",
  "color": "#7C3AED",
  "position": [1.2, -0.5, 3.8],
  "size": 0.6
}

// Response (201):
{
  "id": "echo_abc123",
  "text": "你的留言内容（不超过200字）",
  "color": "#7C3AED",
  "position": [1.2, -0.5, 3.8],
  "size": 0.6,
  "createdAt": "2026-05-11T13:02:00.000Z",
  "success": true
}
```

**验证规则：**
- `text` 不能为空，最多 200 字
- `color` 必须在 STAR_COLORS 列表中（服务端也做验证）
- `position` 必须是有效的 3D 坐标数组
- 返回 400 及错误消息如果验证失败

### `edge-functions/api/echoes/[id].js`

匹配 `GET /api/echoes/:id`。动态路由参数通过 `context.params.id` 获取。

```javascript
// Response:
{
  "id": "echo_abc123",
  "text": "宇宙的寂静和我内心的寂静是同一个东西",
  "color": "#7C3AED",
  "position": [1.2, -0.5, 3.8],
  "size": 0.6,
  "createdAt": "2026-05-11T13:02:00.000Z"
}

// 404 if not found:
{ "error": "这条回音已经消失在宇宙中了", "code": "NOT_FOUND" }
```

### `edge-functions/api/echoes/count.js`

匹配 `GET /api/echoes/count`。不可尝试在 `echoes.js` 中用正则匹配 `/count`——文件系统路由中 `/api/echoes` 不会匹配 `/api/echoes/count`。

```javascript
// Response:
{ "count": 142 }
```

### `edge-functions/api/health.js`

**GET /api/health**

```javascript
// Response:
{ "ok": true, "echoes": "Echo is listening", "version": "1.0.0" }
```

---

## KV STORAGE SCHEMA

### Namespace 绑定

- 控制台创建 KV 命名空间，名称：`echo_kv_store`
- 绑定到项目 → 变量名：`echoes_kv`
- ⚠️ 访问方式：`echoes_kv` 是 **全局变量**，直接使用 `await echoes_kv.get('key')`，不可通过 `context.env.echoes_kv` 访问

### 数据结构

```
Key: echo:{id}           → 单条留言详情（JSON string）
Key: echo:all            → 有序留言 ID 列表（JSON string array）
Key: echo:count          → 留言总数（string number）
```

**单条留言（echo:{id}）：**
```json
{
  "id": "echo_abc123",
  "text": "你的留言内容",
  "color": "#7C3AED",
  "position": [1.2, -0.5, 3.8],
  "size": 0.6,
  "createdAt": "2026-05-11T13:02:00.000Z"
}
```

**留言列表（echo:all）：**
```json
["echo_abc123", "echo_def456", ...]
```

### TTL 策略

留言默认**永久存储**（无 TTL）。但要实现"旧消息自动淡出视野"的前端逻辑：超过 200 条时前端只渲染最新的 200 条。

---

## FRONTEND DATA FLOW

### 初始化

1. 页面加载 → 立即请求 `GET /api/echoes?limit=200`
2. 成功 → 渲染所有留言星到 3D 场景
3. 空数组 → 显示"你是第一个回声"提示
4. 失败 → 显示 "🌌 星空暂时静默" 提示，5 秒后重试

### 发布流程

1. 用户填写留言 → 点击发送
2. 前端即时生成**临时星辰**（optimistic update，一颗半透明的新星出现在视口中央）
3. 请求 `POST /api/echoes` 
4. 成功 → 临时星辰"点亮"（透明度从 0.3 变为 1.0，加入闪烁动画），正式加入星海
5. 失败 → 移除临时星辰，显示错误提示

### 轮询

- 每 30 秒轮询 `GET /api/echoes` 检查新留言
- 新留言 → 淡入新的留言星（不要重新渲染所有星星）
- 使用 lastSeen 时间戳做增量更新

---

## ANIMATION SPECIFICATION

### 入口动画（Page Load）

1. 3D 场景立即渲染（HDR 背景 + 前景星层）
2. 留言星逐个从暗到亮"点亮"（stagger，每个间隔 80ms）
3. Hero overlay 动画（见 UI 组件章节）
4. 进入主体验后，场景开始缓慢自转

### 留言星交互动画

| 事件 | 动画 | 时长 | 缓动 |
|------|------|------|------|
| 悬停 | 光晕 opacity 0.08→0.5，光晕 scale 0.25→0.6，核心星 scale 1→2 | 300ms | ease-out |
| 离开悬停 | 光晕 opacity 0.5→0.08，光晕 scale 0.6→0.25，核心星 scale 2→1 | 300ms | ease-out |
| 点击星辰 | camera 拉近到星辰前方 | 800ms | spring (damping: 15) |
| 关闭详情 | camera 恢复原位 | 500ms | spring |
| 新星辰诞生 | 从暗到亮渐变出现，透明度 0→1 | 1.5s | spring |

### UI 过渡动画

所有 UI 元素使用 `motion`：

| 元素 | 进入 | 离开 |
|------|------|------|
| Hero Overlay | opacity 0→1, y 20→0 | opacity 1→0 |
| Message Input | y 300→0 (spring) | y 0→300 |
| Detail Card | scale 0.8→1, opacity 0→1 | scale 1→0.8, opacity 1→0 |
| Toast | y 20→0, opacity 0→1 | y 0→-20, opacity 1→0 |
| 计数数字 | scale 1→1.2→1 (keyframes) | — |

---

## RECOMMENDED COMPONENT TREE

```
src/
├── App.tsx                      // 主入口，控制 overlay/3D 切换
├── main.tsx                     // 标准 Vite 入口
├── index.css                    // Tailwind + CSS 变量 + 玻璃态组件
│
├── components/
│   ├── Navbar.tsx               // 透明导航 + 计数 + CTA 按钮
│   ├── HeroOverlay.tsx          // 初始进入画面（循环动画文字）
│   ├── EchoScene.tsx            // 3D 场景容器（Canvas + 场景配置）
│   ├── EchoInput.tsx            // 底部滑出的留言输入面板
│   ├── EchoCard.tsx             // 点击星辰后显示的留言详情卡
│   ├── EchoFooter.tsx           // 极简 footer
│   └── Toast.tsx                // Sonner 或 shadcn Toast 配置
│
├── components/3d/
│   ├── MessageStar.tsx           // 单颗留言星辰（Sprite + glow + 交互）
│   ├── StarField.tsx             // 前景 Points 星层（3 层：远/中/近）
│   ├── Skybox.tsx                // HDR 背景加载 + 回落星空
│   └── SceneLighting.tsx         // 光照配置
│
├── hooks/
│   ├── useEchoes.ts             // 数据获取 + 轮询 + 乐观更新
│   ├── useStarAnimation.ts       // 留言星闪烁动画逻辑
│   ├── useDeviceCapability.ts   // 设备性能检测（低/中/高）
│   └── useCameraTransition.ts   // 镜头平滑过渡
│
├── lib/
│   ├── api.ts                   // Edge Functions API 调用封装
│   ├── star-colors.ts            // STAR_COLORS 常量 + 随机分配
│   ├── types.ts                 // TypeScript 类型定义
│   └── utils.ts                 // 工具函数
│
└── edge-functions/
    └── api/
        ├── echoes.js            // GET/POST /api/echoes
        ├── echoes/
        │   ├── [id].js          // GET /api/echoes/:id
        │   └── count.js         // GET /api/echoes/count
        └── health.js            // GET /api/health
```

---

## APPLICATION FLOW

```
页面加载
  │
  ├─ 渲染 3D Canvas（空场景 + 恒星粒子）
  │
  ├─ 请求 GET /api/echoes?limit=200
  │   │
  │   ├─ 成功且有数据 → 渲染留言星 → Hero Overlay 淡入
  │   ├─ 成功但空数据 → 渲染空场景 → Hero 显示"你是第一个回声"
  │   └─ 失败 → 5秒后重试
  │
  ├─ 用户点击"走进回音壁"
  │   │
  │   └─ Hero Overlay 淡出 → 进入主体验
  │
  ├─ 主体验循环：
  │   │
  │   ├─ 点击"留下回音" → EchoInput 滑入
  │   │   ├─ 填写 → 发送 → optimistic update → POST API → 成功
  │   │   └─ 取消 → 滑出
  │   │
  │   ├─ 点击星辰 → camera zoom → EchoCard 弹出 → 阅读 → 关闭
  │   │
  │   ├─ 每30秒轮询 → 增量更新留言星
  │   │
  │   └─ 鼠标拖拽查看星空（OrbitControls）
```

---

## IMPLEMENTATION NOTES

### 本地开发

```bash
# 1. 创建项目（使用 --save-exact 避免自动升级到不兼容的版本）
npm create vite@latest echo-app -- --template react-ts
cd echo-app
npm install

# 2. 安装核心依赖
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing
npm install tailwindcss @tailwindcss/vite tailwindcss-animate
npm install motion lucide-react
npm install sonner  # Toast 库

# 3. 初始化 shadcn/ui
npx shadcn@latest init
npx shadcn@latest add button input

# 4. 初始化 EdgeOne Pages
npx edgeone pages init
```

### motion 导入

```typescript
import { motion, AnimatePresence } from 'motion/react';
// 注意：motion 包可直接从 'motion/react' 导入，无需 framer-motion
```

### Tailwind 配置

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', '"Noto Sans SC"', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
```

### Google Fonts 加载

在 `index.html` 的 `<head>` 中添加：

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Manrope:wght@300;400;500;600&family=Noto+Sans+SC:wght@300;400;500&display=swap" rel="stylesheet" />
```

### 设备性能检测

```typescript
// hooks/useDeviceCapability.ts
export type DeviceTier = 'low' | 'medium' | 'high';

export function useDeviceCapability(): DeviceTier {
  // 检测 GPU 信息、内存、设备类型
  // high: 桌面 + 高端移动 → 全效果（全部星层 + 留言星 Sprite + HDR）
  // medium: 中端移动 → 星层减半 + 无 Bloom
  // low: 低端设备 → 基础星层 + 无 HDR + 无后处理
}
```
---

## FINAL QUALITY BAR

### 应该像

- ✅ 一个真正的互动艺术装置，可以在美术馆展出
- ✅ 暗色、安静、有诗意的情感空间
- ✅ 每颗星辰都是精心融入星空的一部分
- ✅ 交互流畅、自然、令人沉浸
- ✅ 中英双语都有质感，不显得翻译腔
- ✅ 在任何屏幕上都完整可用

### 不应该像

- ❌ 一个用 Three.js 做的技术 demo
- ❌ 一个普通的留言板套了 3D 外壳
- ❌ 一个社交媒体平台
- ❌ 一个加载缓慢、帧率卡顿的页面
- ❌ 一个需要登录注册才能使用的应用
- ❌ 一个信息密度很高的传统网站

### 最终感觉

打开 Echo 的那一刻，用户应当感受到两件事：
1. **安静** — 这不像一个网站，更像走进了宇宙深处
2. **好奇** — "这些星星里藏着什么？"

---

## DELIVERY REQUIREMENT

项目在本地验证完成后，部署到 **EdgeOne Pages** 并输出可公开访问的 URL。这是该项目的交付标准，不是可选项。

部署分为两部分：CLI 自动化流程 + 控制台配置项，两者都需要完成。

**CLI 自动化部署（deploy skill 接管）：**

1. **CLI 检查**：确认 `edgeone` CLI ≥ 1.2.30（`npm install -g edgeone@latest`）
2. **站点选择**：询问用户选择 China 站或 Global 站
3. **登录**：浏览器登录或 token 登录
4. **首次部署**：`edgeone pages deploy -n echo-app`（自动创建项目 + 生成 `edgeone.json`）
5. **输出 URL**：从部署输出中提取 `EDGEONE_DEPLOY_URL`（包含完整鉴权参数）

**控制台配置（部署后必须完成）：**

KV Storage 是 EdgeOne Pages 的边缘存储服务，需要在控制台创建命名空间并绑定到项目后才能使用：

1. 登录 EdgeOne Pages 控制台 → **KV Storage** → 创建 Namespace（名称：`echo_kv_store`，不支持短横线）
2. 回到项目详情 → **KV Storage** 菜单 → 绑定该 Namespace，变量名设为 `echoes_kv`
3. 绑定完成后重新部署一次让配置生效：`edgeone pages deploy`

> ⚠️ 预览链接约 3 小时过期。如需永久访问，建议绑定自定义域名。

---

## SUBMISSION CHECKLIST

上线发布前逐项确认：

**功能验证**
- [ ] 3D 场景全屏渲染，HDR 背景 + 前景 Points 星层正常显示
- [ ] 50,000 颗前景星星呈现满天繁星效果
- [ ] 留言星嵌入星空，悬停时彩色光晕亮起
- [ ] `POST /api/echoes` 创建留言成功
- [ ] `GET /api/echoes` 返回留言列表
- [ ] 点击星辰弹出详情卡片，镜头过渡平滑
- [ ] "留下回音"面板滑入/滑出流畅
- [ ] Hero overlay 动画正常

**部署验证**
- [ ] 项目通过 EdgeOne Pages 部署上线
- [ ] 输出完整的 `EDGEONE_DEPLOY_URL`（含鉴权参数）
- [ ] 线上 URL 可公开访问，功能正常
- [ ] KV Storage 绑定正确，数据刷新后持续存在

**兼容性验证**
- [ ] 移动端布局正确，无溢出
- [ ] 移动端 3D 性能流畅（60fps）
- [ ] 低端设备降级生效（粒子减少，后处理关闭）
- [ ] 空状态（无留言时）显示提示
- [ ] 错误状态显示友好提示

````
