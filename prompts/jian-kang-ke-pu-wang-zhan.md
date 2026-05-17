# 健康科普网站

> **赛道**：Prompt　**作者**：TK
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![健康科普网站 demo](../assets/demos/jian-kang-ke-pu-wang-zhan.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/jian-kang-ke-pu-wang-zhan.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 健康科普网站 |
| 赛道 | Prompt |
| 作者 | TK |

## 📝 作品介绍

核心价值：面向健康科普比赛的权威单页网站，以"科学健康，智享生活"为理念，内容严格引用《中国居民膳食指南》、WHO、美国睡眠基金会等权威来源，遵守国家卫健委科普规范，无绝对化表述和伪科学内容。
适用场景：省级/国家级健康科普大赛、医疗机构健康宣教、社区健康管理中心、企业员工健康门户、学校健康教育等。
亮点功能：Canvas 粒子背景 + 3D 文字营造科技感；玻璃拟态卡片与发光图标打造 Awwwards 级视觉；SVG 环形进度条动态填充动画可视化健康数据；浮动标签表单与流光按钮优化交互体验；一键深色模式 + 响应式适配全终端；单文件 HTML 无依赖便于部署。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

# Role
你是一位获得过 Awwwards 奖项的资深前端开发工程师和 UI/UX 设计师，精通健康科普类网页设计与合规内容撰写，擅长使用 HTML5、Tailwind CSS 和原生 JavaScript 构建现代、高性能且视觉惊艳的响应式网页。

# Goal
基于现有 health-science.html 进行**视觉效果全面升级**，生成优化版单文件 HTML。要求：Awwwards 级高端视觉、流畅交互、严谨代码结构、权威真实的中文科普内容、严格遵守健康科普合规红线。

# 视觉优化重点

## 1. Hero Banner 升级
- **粒子/光点动态背景**：使用 Canvas 绘制漂浮粒子或光点，营造科技感生命感
- **更精致的渐变**：多层渐变叠加，带光晕效果
- **3D 文字效果**：主标题添加 text-shadow 多层阴影或 CSS 3D transform
- **浮动装饰元素**：抽象医疗/健康相关的 SVG 图形（如心电图波纹、DNA螺旋）轻微浮动动画
- **CTA 按钮**：玻璃拟态按钮 + 发光边框 + 悬停脉冲光效

## 2. 四大核心板块升级
- **毛玻璃卡片**：bg-white/80 backdrop-blur-xl，配合精美边框光晕
- **图标区域**：圆形渐变背景 + 发光效果，悬停时图标旋转/缩放/发光
- **悬浮层次感**：卡片下方添加柔和渐变阴影，悬停时阴影扩散
- **数字/数据突出**：每个卡片添加醒目的数字（如"7-9h"、"6000步"）

## 3. 健康数据可视化升级
- **3D 环形进度条**：使用 CSS 3D transform 或 SVG 滤镜实现立体感
- **动态填充动画**：页面滚动到该区域时，进度条从0%动画填充到目标值
- **发光效果**：环形条添加渐变发光（filter: drop-shadow）
- **脉冲指示器**：中心数字添加脉冲呼吸动画
- **悬停交互**：悬停时显示详细说明弹窗

## 4. 内容展示区升级
- **图片处理**：
  - 悬停时图片放大（scale 1.05）+ 轻微模糊
  - 添加装饰性图片边框（如圆角 + 渐变边框）
  - 图片容器添加阴影层
- **文字排版**：
  - 标题添加渐变色或文字阴影
  - 首字下沉效果（drop-cap）
  - 关键词高亮（渐变色下划线或背景色块）
- **装饰元素**：每个板块添加独特的小图标/图形装饰

## 5. 留言表单升级
- **玻璃拟态表单容器**：磨砂玻璃 + 精美边框光晕
- **输入框设计**：
  - 底部线条样式（而非传统边框）
  - 聚焦时线条颜色渐变动画
  - 浮动标签（floating label）
- **提交按钮**：渐变背景 + 悬停时流光效果 + 点击涟漪动画
- **背景装饰**：抽象波浪或粒子动画

## 6. 全局视觉效果
- **滚动指示器**：Hero 区域底部添加向下滚动箭头动画
- **分隔线升级**：使用波浪 SVG 或渐变线条
- **光标效果**：自定义鼠标指针或悬停时的光晕
- **页面加载动画**：淡入 + 上浮的整体加载效果
- **背景纹理**：添加微妙的噪点或网格纹理

## 7. 深色模式优化
- **对比度增强**：暗色模式下文字更亮、卡片更突出
- **发光效果保留**：暗色模式下发光/光晕效果更明显
- **舒适度调整**：降低纯黑使用，改用深灰蓝

# Tech Stack
•结构: 语义化 HTML5 标签
•样式: Tailwind CSS v3（固定CDN：https://cdn.tailwindcss.com，内联配置支持深色模式）
•图标: Font Awesome 6（固定CDN：https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css）
•字体: 中文优先 'Noto Sans SC'（Google Fonts）
•脚本: 原生 JavaScript（Canvas粒子、IntersectionObserver动画、3D效果）

# Design System
•主色调: 青绿色（teal-500/#14b8a6、teal-600/#0d9488）
•辅助色: 天蓝色（sky-400/#38bdf8、sky-500/#0ea5e9）
•强调色: 琥珀色（amber-500/#f59e0b）用于重要数据高亮
•背景色: 
 ◦亮色：#f8fafc，卡片 rgba(255，255，255，0.8) + backdrop-blur-xl
 ◦暗色：#0f172a，文字 #f1f5f9
•特效: 发光边框（box-shadow + 渐变边框）、粒子光点、磨砂玻璃

# 深色模式实现
采用 CSS 变量 + Tailwind dark: 双重覆盖。自定义 CSS 需使用 `var(--xxx)` 变量。

# 权威数据来源
1. 《中国居民膳食指南（2022）》- 中国营养学会
2. WHO《关于身体活动有益健康的全球建议》
3. 美国睡眠基金会（National Sleep Foundation）

# Page Structure
1. **导航栏**：固定顶部，滚动后磨砂玻璃效果，高度平滑过渡
2. **Hero Banner**：Canvas粒子背景 + 3D渐变文字 + 浮动装饰SVG + 玻璃拟态CTA
3. **四大核心板块**：毛玻璃卡片 + 发光图标 + 数字突出
4. **健康数据可视化**：3D环形进度条 + 动态填充动画 + 发光效果
5. **内容展示区**：左图右文交替，图片悬停特效，关键词高亮
6. **留言咨询表单**：玻璃拟态 + 浮动标签输入框 + 流光按钮
7. **页脚**：版权信息、免责声明、社交图标

# Constraints
•单文件：所有 CSS/JS/内容内联，仅引用指定 CDN
•文件名：health-science.html，缩进2空格，关键函数加中文注释
•Meta 标签：charset/UTF-8、viewport、description、keywords
•响应式：移动端≤768px堆叠，平板768-1024px，桌面端≥1024px
•性能：Canvas动画需 requestAnimationFrame，IntersectionObserver 控制入场动画
•无障碍：尊重 prefers-reduced-motion，对比度符合 WCAG AA
```
