# AI灵感阁

> **赛道**：Prompt　**作者**：ACoding · [GitHub @sunshellwang](https://github.com/sunshellwang)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![AI灵感阁 cover](../assets/demos/ai-bao-mu.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/ai-bao-mu.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | AI灵感阁 |
| 赛道 | Prompt |
| 作者 | ACoding |
| GitHub | [@sunshellwang](https://github.com/sunshellwang) |

## 📝 作品介绍

AI灵感阁是一个展示AI绘画的灵感社区。我们汇聚来自世界各地的AI艺术作品， 从赛博朋克的霓虹闪烁到水墨丹青的意境悠远，从科幻的浩瀚星海到奇幻的魔幻秘境， 每一幅作品都是AI与人类创意的完美融合。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
我需要一个名为"AI灵感阁"的AI艺术灵感展示平台。整体视觉采用赛博朋克琉璃风格，以深紫和青色为主色调。

【页面与功能】
1. 首页：
   - 全屏粒子动画背景，粒子汇聚形成"AI灵感阁"大标题。
   - 每日精选画作自动轮播，每张图片入场使用淡入和轻微放大动画。
   - 下方展示"最新作品 / 热门作品 / 分类"三个选项卡。

2. 画廊页（瀑布流布局）：
   - 展示以下12张AI绘画作品，鼠标悬停时卡片平滑上浮并出现阴影：
   - 每张卡片底部显示作品名和风格标签。
   - 顶部有搜索框和风格筛选下拉菜单（赛博朋克、水墨、油画等）。
   - 搜索和筛选时，卡片内容用淡入淡出过渡。

3. 作品详情（点击卡片弹出全屏Modal）：
   - 左侧展示高清大图，右侧显示：
     - 作品名
     - 完整Prompt内容（普通文字，但需用字体区分）
     - 作者名（AI生成）
   - 底部有两个按钮：
     - "复制Prompt"（点击复制并提示"已复制"）
     - "分享到Twitter"（预填好文案和链接）

4. 关于页面：
   - 简介"AI灵感阁是一个展示AI绘画的灵感社区"
   - 底部注明"由EdgeOne Pages + AI 自动生成"

【技术要求】
- 前端使用Next.js、Tailwind CSS和Framer Motion动画库。
- 搜索和筛选功能在前端静态实现，无需后端。
- 使用EdgeOne Pages的图片渲染API，为每张作品自动生成包含作品名和作者的Open Graph分享图。
- 确保响应式设计，在手机端瀑布流自动切换为两列。

【交付要求】
- 完整的Next.js项目代码，可直接部署到EdgeOne Pages。

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

```
