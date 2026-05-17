# 顶奢品牌展示页

> **赛道**：Prompt　**作者**：时间煮魚 · [GitHub @caohanyi358-commits](https://github.com/caohanyi358-commits)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![顶奢品牌展示页 cover](../assets/demos/ding-she-pin-pai-zhan-shi-ye.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 顶奢品牌展示页 |
| 赛道 | Prompt |
| 作者 | 时间煮魚 |
| GitHub | [@caohanyi358-commits](https://github.com/caohanyi358-commits) |

## 📝 作品介绍

打破传统极简模板的枯燥感，通过AI精准调度WebGL与物理动效，零门槛生成兼具现代奢华感与极高转化率的沉浸式网页。适用场景涵盖：顶奢品牌展示（如超跑/公务机）、前沿科技产品发布及高端创意作品集。亮点功能：1. 无滤镜4K大图驱动结合玻璃拟态UI；2. 严密的防重叠CSS Grid负空间排版系统；3. 融合GSAP滚动叙事与自定义光标的丝滑微交互。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
# Role: Awwwards 获奖级资深技术美术 (Technical Art Director) & WebGL 专家

## 任务目标
请为我设计并编写一个兼具**现代奢华感**与**极致交互性能**的独立站页面。整体视觉与交互品质请严格对标 `jeskojets.com`，拒绝刻意做旧的滤镜或廉价的极简风，利用极致清晰的视觉素材和丝滑的物理动效撑起高级感。

## 视觉与排版系统 (Visual & UI Rules)
1. **超清大图驱动**：视觉核心由无滤镜的 4K/8K 超高清精美背景大图（或高质量 3D 渲染图）构成，画面纯净通透。
2. **玻璃拟态 (Glassmorphism)**：UI 容器、侧边栏和浮动卡片采用轻度毛玻璃质感（背景模糊 + 极细微的白边高光），透出底层背景色彩的同时保证前景文字的绝对清晰。
3. **严格的空间纪律 (Crucial)**：构建严密的 CSS Grid/Flexbox 布局，必须保证充足的负空间（Negative Space）。**绝对禁止文本、数据框或操作记录之间发生任何物理重叠或遮挡**。排版必须干净利落，具有极强的呼吸感。

## 核心交互与动效 (Interaction & Animation)
1. **全局平滑滚动**：引入 Locomotive Scroll 或 Lenis 库，实现带有物理阻尼与惯性的丝滑滚动体验。
2. **滚动叙事 (Scroll-driven)**：使用 GSAP (ScrollTrigger)。页面向下滚动时，文字内容按层级采用交错的遮罩揭示（Staggered Mask Reveal）；背景大图带有轻微的视差效果（Parallax），营造强烈的空间深度。
3. **WebGL 图像转场**：背景图之间的切换必须引入基于 WebGL/Three.js 的高级过渡（如：流体置换贴图 Displacement Map、平滑缩放推进或方向性液化扭曲），拒绝普通的 CSS 渐变淡入淡出。
4. **高级微交互**：
   - 启用全局自定义追踪光标（Custom Cursor），默认极简，悬停可交互元素时具有弹性吸附和放大光圈效果。
   - 所有核心 CTA 按钮或卡片需带有磁性吸附（Magnetic Effect）物理牵引感。

## 技术栈与输出要求
1. **核心技术**：React + Tailwind CSS + GSAP + Three.js
2. **输出要求**：
   - 请先简要输出页面的组件结构树与色彩/字体变量设定。
   - 必须提供可运行的核心代码片段（特别是包含 GSAP 滚动控制、毛玻璃 UI 容器防重叠布局，以及 WebGL 图像转场的具体实现）。
   - 代码需具备响应式能力，但在移动端可适当降级 WebGL 动效以保证性能。

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

```
