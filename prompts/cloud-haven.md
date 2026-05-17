# 猫岛 Cloud Haven

> **赛道**：Prompt　**作者**：老腊肉大师兄
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![猫岛 Cloud Haven demo](../assets/demos/cloud-haven.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 猫岛 Cloud Haven |
| 赛道 | Prompt |
| 作者 | 老腊肉大师兄 |

## 📝 作品介绍

猫岛 Cloud Haven —— AI全栈公益救助站
猫岛 Cloud Haven 是一个基于 EdgeOne Pages 构建的流浪猫公益救助静态网站。作品全程通过精细化 Prompt 驱动 AI 生成，实现了高保真的 UI 设计，包含沉浸式首页、猫咪档案墙及核心的“善款透明公示台”。

网站采用温暖的橘粉色系与现代化卡片布局，不仅展示了“汤圆”、“红豆”等猫咪的领养信息，更通过模拟数据交互展示了公益收支明细，解决了传统救助信息不透明的痛点。该项目验证了 AI 在公益场景下的落地能力，只需简单的提示词，即可在 EdgeOne 平台上快速部署一个兼具美感与实用价值的全栈级应用。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
# Role: 资深 UI/UX 设计师 & 前端开发工程师
# Goal: 生成一个名为“猫岛 (Cat Island)”的高端流浪猫救助静态网站。

## 1. 视觉风格定义 (UI/UX Design)
*   **主题色**：主色使用温暖的橘色 (#FF8A65) 代表活力与爱心，辅助色使用沉稳的青色 (#4DB6AC) 代表生命与希望。背景使用极浅的暖灰色 (#FFF5F5)。
*   **排版**：使用现代无衬线字体 (Inter/Sans-serif)。标题字重大胆 (font-bold)，正文清晰易读。
*   **质感**：卡片使用轻微的阴影 (shadow-lg) 和圆角 (rounded-xl)，营造“柔软、安全”的氛围。

## 2. 页面结构与内容 (Page Structure)
请生成 **单页应用 (Single Page Application)** 结构，包含以下四个核心板块：

### A. 首页 Hero Section (首屏)
*  
   **背景**：一张高清的、温馨的猫咪大合影（如果网络图片加载失败，请用橘色渐变代替）。
*   **文案**：大标题“猫岛 Cloud Haven”，副标题“给流浪一个家，给爱心一个出口”。
*   **按钮**：两个按钮，分别是“我要领养”和“我要捐助”。

### B. 猫咪档案墙 (Cat Profiles)
*   **布局**：响应式网格布局 (Grid)，桌面端3列，移动端1列。
*   **卡片内容**：
    *   猫咪照片（圆形或圆角矩形）。
    *   名字（例如：汤圆 - 三花加菲，性格温顺）。
    *   状态标签（例如：待领养 / 已助养）。
    *   进度条（模拟领养资金筹集进度）。

### C. 善款公示台 (Transparency Wall)
*   **设计**：简洁的列表或表格。
*   **内容**：模拟展示收支明细（例如：3月1日，收入猫粮款 500元；支出绝育费 300元）。
*   **凭证**：每张条目旁边配一个“查看凭证”的小图标。

### D. 关于我们 (About Us)
*   **内容**：讲述猫岛的故事，放置3个数据指标（如：帮助了 128 只猫，98 位爱心人士）。

## 3. 交互与动效 (Interactivity)
*   **悬停效果**：鼠标移到猫咪卡片上时，卡片轻微上浮 (translateY(-5px)) 并增加阴影。
*   **滚动动画**：页面滚动时，板块内容淡入显示。

## 4. 技术要求 (Technical Constraints)
*   **代码规范**：输出 **单一 HTML 文件**（包含内联 CSS 和 JS），确保直接复制粘贴到 EdgeOne Pages 即可运行。
*   **图片处理**：使用 Unsplash Source 或 Placeholder 图片链接，如果加载失败请使用纯色块代替。
*   **兼容性**：确保代码在移动端和 PC 端都能完美显示。

## 5. 输出要求 (Output)
请直接输出完整的 HTML 代码，并在 CSS/JS 代码块中加入详细的中文注释，解释关键样式的实现逻辑。

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

```
