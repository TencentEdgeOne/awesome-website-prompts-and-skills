# 粒子流体交响曲

> **赛道**：Prompt　**作者**：于鸿伟 · [GitHub @hongwei-2026](https://github.com/hongwei-2026)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![粒子流体交响曲 cover](../assets/demos/li-zi-liu-ti-jiao-xiang-qu.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 粒子流体交响曲 |
| 赛道 | Prompt |
| 作者 | 于鸿伟 |
| GitHub | [@hongwei-2026](https://github.com/hongwei-2026) |

## 📝 作品介绍

作品名称
《粒子流体交响曲》 （Ballpit & Plasma: 粒子与流体的交响）

作品介绍
这是一部融合物理模拟与流体光波的 WebGL 交互作品。作品集成 Ballpit 与 PlasmaWave 两个高性能视觉引擎：前者通过 three.js 实现 200 个球体的实时物理碰撞与鼠标引力交互；后者基于光线步进着色器生成双波叠加的流体光波。两者分层叠加，构建出沉浸式的视觉体验。

技术亮点：实例化 GPU 渲染、次表面散射材质、GLSL 光线步进、动态色彩系统。用户可通过控制栏实时切换 8 种主题配色，探索不同的视觉风格。作品展示了现代 WebGL 技术在创意编程与交互设计中的无限可能。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# Ballpit & PlasmaWave 网页项目 — 复现提示词

## 项目概述

创建一个单文件 HTML 网页，融合两个 WebGL 组件：
1. **Ballpit**：基于 three.js 的 3D 球体物理模拟（200+ 球体，实例化渲染，物理碰撞）
2. **PlasmaWave**：基于 ogl 的 2D 流体光波效果（Ray Marching 着色器）

设计风格：**极简白底磨砂玻璃风（Apple/Linear 风格）**，分层式架构（Ballpit 全屏 + PlasmaWave 底部光带 + 独立控制栏）

---

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| **three.js** | 0.169.0 | Ballpit 3D 渲染（InstancedMesh、PMREMGenerator、次表面散射） |
| **ogl** | 1.0.11 | PlasmaWave 轻量级 WebGL 渲染 |
| **GLSL** | ES 3.0 | PlasmaWave 光线步进着色器 |

**CDN 引入方式（importmap）**：
```html

{
  "imports": {
    "three": "https://cdn.jsdelivr.net/npm/three@0.169.0/build/three.module.js"，
   
   "three/examples/jsm/environments/RoomEnvironment.js": "https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/environments/RoomEnvironment.js"，
    "ogl": "https://cdn.jsdelivr.net/npm/ogl@1.0.11/src/index.js"
  }
}

```

---

## 页面结构（HTML）

### 1. 固定导航栏（顶部）
- 位置：fixed， top:0， z-index:200
- 背景：rgba(245，244，240，0.82) + backdrop-filter: blur(20px)
- 内容：品牌名 "React Bits" + 徽章 "Demo" + 导航链接 + CTA 按钮

### 2. Hero 区域（全屏）
- 高度：100vh
- 分层结构：
  - **#ballpit-hero**：全屏 Ballpit（position:absolute， inset:0， background:#fff）
  - **#plasma-hero**：底部 220px 高 PlasmaWave 光带（position:absolute， bottom:0， pointer-events:none）
  - **.hero-content**：居中文字叠加层（z-index:10， pointer-events:none）
    - 
   eyebrow 标签（小圆点 + 文字，背景半透明白色）
    - 大标题："Ballpit& Plasma"（font-size: clamp(52px，9vw，112px)， font-weight:800）
    - 副标题："移动鼠标，感受粒子引力。"
    - 两个按钮：".btn-dark"（黑底白字）+ ".btn-outline"（白底灰边）

### 3. 统计数据行
- 4 列网格：200 粒子 / 60fps / WebGL / 2KB
- 分隔线样式

### 4. 特性展示区（#features）
- 6 个卡片（3×2 网格）
- 卡片内容：实例化 GPU 渲染 / 光线步进着色器 / 鼠标引力场 / 动态色彩系统 / 零侵入集成 / 全平台适配

### 5. PlasmaWave 全屏展示区（#plasma）
- 高度：420px
- 全屏 PlasmaWave 背景（#plasma-full）
- 居中文字："PlasmaWave" + 描述

### 6. Plasma 控制栏
- 4 个配色按钮：紫青 / 橙红 / 薄荷 / 金铜
- 1 个方向反转按钮

### 7. CTA 区域
- 标题 + 描述 + 两个按钮

### 8. 底部控制栏（固定底部）
- Ballpit 主题切换：暖橙 / 冷蓝 / 糖果 / 黑白
- 暂停按钮

### 9. Footer
- 版权信息 + 技术栈说明

---

## 核心功能实现

### A. Ballpit 引擎（three.js）

#### A.1 物理系统（Physics 类）
- **属性**：
  - `pos`：Float32Array(3 * count) — 球体位置
  - `vel`：Float32Array(3 * count) — 球体速度
  - `sz`：Float32Array(count) — 球体大小
  - `center`：Vector3 — 鼠标引力中心

- **初始化**：
  - 第 0 个球体位置在 (0，0，0)
  - 其余球体随机分布：x/y ∈ [-maxX， maxX]， z ∈ [-maxZ， maxZ]

- **更新逻辑（每帧）**：
  1. 应用重力：`vel.y -= delta * gravity * size[i]`
  2. 应用摩擦力：`vel *= friction`
  3. 速度钳制：`vel.clampLength(0， maxVelocity)`
  4. 更新位置：`pos += vel`
  5. 球体碰撞检测（双重循环）：
     - 计算两个球体距离 `dist`
     - 如果 `dist < r1 + r2`，计算穿透深度 `ov = sum - dist`
     - 两个球体各移动 `ov/2`，速度也相应调整
  6. 鼠标引力（如果 ctrl0=true）：
     - 第 0 个球体向 center 插值（lerp 0.1）
     - 第 0 个球体速度置零
     - 检测第 0 个球体与其他球体的碰撞
  7. 边界碰撞：
     - x 轴：±maxX
     - y 轴：-maxY（地面）
     - z 轴：±maxZ
     - 反弹系数：wallBounce

#### A.2 次表面散射材质（SubMat 类）
- 继承 `MeshPhysicalMaterial`
- 自定义 uniform：
  - `thicknessDistortion`: 0.1
  - `thicknessAmbient`: 0
  - `thicknessAttenuation`: 0.1
  - `thicknessPower`: 2
  - `thicknessScale`: 10
- `onBeforeCompile` 注入自定义 ShaderChunk：
  - 定义 `RE_Direct_Scattering` 函数（次表面散射光照）
  - 在 `lights_fragment_begin` 中调用

#### A.3 BpMesh 类（继承 InstancedMesh）
- **构造函数参数**：
  - `renderer`：WebGLRenderer
  - `opts`：配置对象（合并 D_CFG 默认值）
- **默认配置（D_CFG）**：
  ```javascript
  {
    count: 200，
    colors: [0xff5c35， 0xff9a3c， 0xffd166]，
    ambientColor: 0xffffff，
    ambientIntensity: 1.2，
    lightIntensity: 180，
    materialParams: {
      metalness: 0.3，
      roughness: 0.4，
      clearcoat: 1，
      clearcoatRoughness: 0.1
    }，
    minSize: 0.4，
    maxSize: 1，
    size0: 1.3，
    gravity: 0.5，
    friction: 0.9975，
    wallBounce: 0.95，
    maxVelocity: 0.15，
    maxX: 5，
    maxY: 5，
    maxZ: 2，
    ctrl0: false，
    followCursor: true
  }
  ```
- **灯光**：
  - AmbientLight（环境光）
  - PointLight（点光源，颜色取 colors[0]）
- **颜色插值（setColors）**：
  - 输入：颜色数组（如 [0xff5c35， 0xff9a3c， 0xffd166]）
  - 为每个球体计算插值：`t = i / count`
  - 使用线性插值生成渐变颜色
  - 更新 instanceColor

#### A.4 ThreeApp 类
- **功能**：管理 three.js 渲染循环、相机、场景
- **构造函数**：
  - 创建 canvas
  - 创建 WebGLRenderer（antialias， alpha， powerPreference:'high-performance'）
  - 设置 outputColorSpace: SRGBColorSpace
  - 设置 toneMapping: ACESFilmicToneMapping
  - 创建 PerspectiveCamera（position.z=20）
  - 监听 ResizeObserver、IntersectionObserver、visibilitychange
- **自适应相机**：
  - 根据容器宽高调整 renderer 尺寸和像素比
  - 根据宽高比调整 fov（保持球体可见范围）
  - 更新 maxX 和 maxY（根据相机视野计算）
- **渲染循环**：
  - 使用 Clock 计算 delta time
  - 如果未暂停，调用 `mesh.update(time)`
  - 渲染场景

#### A.5 鼠标交互（makePtrInteraction）
- 使用 Raycaster 将鼠标位置投射到 3D 平面
- 鼠标移动时，更新 `mesh.physics.center`
- 鼠标离开时，设置 `ctrl0 = false`（停止引力）

---

### B. PlasmaWave 引擎（ogl）

#### B.1 GLSL 着色器

**顶点着色器（VERT_PLASMA）**：
```glsl
attribute vec2 position;
void main() {
  gl_Position = vec4(position， 0.0， 1.0);
}
```

**片段着色器（FRAG_PLASMA）**：
- **Uniforms**：
  - `iTime`：时间（秒）
  - `iResolution`：画布分辨率
  - `uOffset`：偏移量（用于鼠标交互，本项目中未使用）
  - `uRotation`：旋转角度（弧度）
  - `uFocalLength`：焦距（默认 0.8）
  - `uSpeed1` / `uSpeed2`：两个波的速度
  - `uDir2`：第二个波的方向（1 或 -1）
  - `uBend1` / `uBend2`：两个波的弯曲强度
  - `uColor1` / `uColor2`：两个波的颜色（RGB）

- **光线步进（Ray Marching）**：
  1. 相机位置 `o = vec3(0， 0， -7)`
  2. 射线方向 `u = normalize(vec3((U - 0.5*R) / R.y， uFocalLength))`
  3. 应用旋转矩阵（根据 `uRotation`）
  4. 步进循环（MAX_STEPS=14）：
     - 计算当前点 `p = o + u * d`
     - 计算两个波的 YZ 坐标：
       - `so = sin(vec2(px， px+π/2) + t1) * w1`
       - `co = cos(vec2(px， px+π/2) + t2) * w2`
     - 计算到波的距离：
       - `curX = max(0， length(yz - so) - lt)`（lt=0.3，管线半径）
       - `curY = max(0， length(yz - co) - lt)`
     - 更新 `k.x` 和 `k.y`（记录最近距离）
     - 更新 `s = min(s， cur)`（整体最近距离）
     - 步进距离：`d += s * 0.7`
  5. 计算颜色：
     - `raw = max(cos(d*2π) - s*sqrt(d) - vec3(k，0)， 0)`
     - 添加绿色通道偏移：`raw.gb += 0.1`
     - 丢弃暗部：`if(mx < 0.15) discard`
     - 颜色混合：`raw * 0.4 + raw.brg * 0.6 + raw * raw`
     - 计算亮度：`lm = dot(raw， vec3(0.299， 0.587， 0.114))`
     - 计算权重：`w1 = max(0， 1 - k.x*2)`， `w2 = max(0， 1 - k.y*2)`
     - 最终颜色：`c = (uColor1*w1 + uColor2*w2) / (w1+w2) * lm * 3.5`

#### B.2 makePlasma 函数
- **参数**：
  - `container`：DOM 容器
  - `cfg`：配置对象
    - `colors`：颜色数组（如 ['#A855F7'， '#06B6D4']）
    - `speed1` / `speed2`：波速度（默认 0.05）
    - `dir2`：方向（默认 1）
    - `bend1` / `bend2`：弯曲强度（默认 1 和 0.5）
- **返回值**：
  - `setColors(c1， c2)`：更新颜色
  - `setDir(d)`：更新方向
  - `dispose()`：清理资源

---

### C. 主题配置

#### C.1 Ballpit 主题（BP_THEMES）
```javascript
const BP_THEMES = {
  warm:  { colors: [0xff5c35， 0xff9a3c， 0xffd166]， bg: '#fff8f5' }，
  cool:  { colors: [0x0070f3， 0x00c9c9， 0x7c3aed]， bg: '#f5f8ff' }，
  candy: { colors: [0xff6fd8， 0xa78bfa， 0x34d399]， bg: '#fdf5ff' }，
  mono:  { colors: [0x111111， 0x555555， 0xcccccc]， bg: '#f9f9f9' }
};
```

#### C.2 PlasmaWave 主题（PLASMA_THEMES）
```javascript
const PLASMA_THEMES = {
  violet: { c1: '#A855F7'， c2: '#06B6D4' }，
  sunset: { c1: '#ff4e00'， c2: '#ff9a3c' }，
  mint:   { c1: '#00c96e'， c2: '#00e5ff' }，
  gold:   { c1: '#f5a623'， c2: '#e85d04' }
};
```

---

### D. 初始化逻辑

#### D.1 Hero 区域
1. 创建 ThreeApp 实例（绑定到 #ballpit-hero）
2. 创建 Ballpit 球体网格（默认主题：warm）
3. 设置鼠标交互（makePtrInteraction）
4. 创建 PlasmaWave 实例（绑定到 #plasma-hero，配色：暖橙）

#### D.2 Plasma 全屏区域
1. 创建 PlasmaWave 实例（绑定到 #plasma-full，配色：紫青）

#### D.3 控制栏事件
- **Ballpit 控制栏**：
  - 点击主题按钮 → 调用 `setBallpit(theme， btn)`
  - 点击暂停按钮 → 调用 `doPause(btn)`
- **Plasma 控制栏**：
  - 点击配色按钮 → 调用 `setPlasma(key， btn)`
  - 点击反转方向按钮 → 调用 `togglePlasmaDir(btn)`

---

## 设计细节

### 色彩系统
- **主色**：--accent: #ff5c35（暖橙）
- **辅色**：--accent2: #ff9a3c（亮橙）
- **背景**：--bg: #f5f4f0（暖白）
- **文字**：--text: #111， --text-2: #555， --text-3: #999

### 磨砂玻璃效果
- `backdrop-filter: blur(20px) saturate(180%)`
- 背景透明度：rgba(255，255，255，0.72) ~ 0.92

### 按钮样式
- **.ctrl-pill**：圆角胶囊按钮（border-radius:12px）
  - 默认：透明背景 + 灰色文字
  - hover：浅灰背景
  - .on：黑色背景 + 白色文字
- **.btn-dark**：黑色背景 + 白色文字（border-radius:10px）
- **.btn-outline**：白色背景 + 灰色边框（border-radius:10px）

### 动画
- **滚动提示箭头**：bounce 动画（上下跳动）
- **eyebrow 圆点**：blink 动画（ opacity 闪烁）

---

## 性能优化

1. **IntersectionObserver**：页面外暂停渲染
2. **visibilitychange**：标签页切换时暂停渲染
3. **InstancedMesh**：200 个球体合并为单次 Draw Call
4. **ogl**：比 three.js 更轻量的 WebGL 库（PlasmaWave 使用）
5. **像素比限制**：`Math.min(window.devicePixelRatio， 2)`（three.js）/ `1.5`（ogl）

---

## 完整提示词（直接复制版）

```
创建一个单文件 HTML 网页，融合两个 WebGL 组件：Ballpit（基于 three.js 0.169.0 的 3D 球体物理模拟）和 PlasmaWave（基于 ogl 1.0.11 的 2D 流体光波）。

设计风格：极简白底磨砂玻璃风（Apple/Linear 风格）。

【页面结构】
1. 固定导航栏（顶部，磨砂玻璃效果）
2. Hero 区域（全屏）：
   - 底层：全屏 Ballpit（白色背景）
   - 顶层：底部 220px 高 PlasmaWave 光带（pointer-events:none）
   - 叠加层：标题 "Ballpit & Plasma" + 副标题 + 两个按钮
3. 统计数据行（4 列）
4. 特性展示区（6 个卡片，3×2 网格）
5. PlasmaWave 全屏展示区（420px 高）
6. Plasma 控制栏（4 个配色按钮 + 方向反转按钮）
7. CTA 区域
8. 底部固定控制栏（Ballpit 4 个主题按钮 + 暂停按钮）
9. Footer

【Ballpit 功能】
- 200 个球体，InstancedMesh 渲染
- 物理碰撞系统（重力、摩擦力、边界反弹）
- 鼠标引力场（Raycaster 投射到 3D 平面）
- 次表面散射材质（自定义 MeshPhysicalMaterial）
- 4 种主题：暖橙（#ff5c35，#ff9a3c，#ffd166）/ 冷蓝（#0070f3，#00c9c9，#7c3aed）/ 糖果（#ff6fd8，#a78bfa，#34d399）/ 黑白（#111，#555，#ccc）
- 暂停功能

【PlasmaWave 功能】
- GLSL 光线步进着色器（14 步）
- 双波叠加（sin 波 + cos 波）
- 次表面散射效果
- 4 种配色：紫青（#A855F7，#06B6D4）/ 橙红（#ff4e00，#ff9a3c）/ 薄荷（#00c96e，#00e5ff）/ 金铜（#f5a623，#e85d04）
- 方向反转功能

【技术要求】
- 使用 importmap 引入 CDN：three.js 0.169.0 + ogl 1.0.11
- 响应式布局（ResizeObserver）
- 性能优化：IntersectionObserver 暂停 + visibilitychange 暂停
- 字体：系统字体栈（-apple-system， BlinkMacSystemFont， 'SF Pro Display'， 'Segoe UI'， 'PingFang SC'， sans-serif）

【输出】
完整的单文件 HTML，包含所有 CSS 和 JavaScript，可直接在浏览器中打开运行。
```

---

## 使用说明

1. 将上面的**完整提示词（直接复制版）**复制到任何 AI 对话框（Claude、GPT、Gemini、WorkBuddy 等）
2. AI 会生成一个完整的 `ballpit-demo.html` 文件
3. 保存为 `.html` 文件，用浏览器打开即可

---

**注意**：由于不同 AI 的能力差异，生成结果可能需要小幅调整。如果遇到问题，可以提供具体的错误信息，让 AI 进行调试。

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

````
