# 炫酷科技风个人主页

> **赛道**：Prompt　**作者**：未迟 · [GitHub @weichiAI](https://github.com/weichiAI)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![炫酷科技风个人主页 demo](../assets/demos/xuan-ku-ke-ji-feng-ge-ren-zhu-ye.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 炫酷科技风个人主页 |
| 赛道 | Prompt |
| 作者 | 未迟 |
| GitHub | [@weichiAI](https://github.com/weichiAI) |

## 📝 作品介绍

一个专为 AI 探索实践者打造的炫酷科技风个人主页，深蓝配色搭配粒子动效与玻璃拟态设计，零代码基础即可通过自然语言描述一键生成。集成 Canvas 粒子系统、3D 翻转作品卡片、滚动 Reveal 动画等视觉特效，并内置基于 EdgeOne KV 的跨设备留言板。适用于个人品牌展示、作品集呈现，让每位创作者都能拥有属于自己的赛博空间。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

请为我生成一个炫酷科技风个人主页，单文件 HTML（内联 CSS 和 JS），整体风格如下：

## 设计风格
- 主色调：深蓝背景（#0A0E27、#1A1A3E），搭配青色（#00D4FF）、紫色（#A78BFA）、粉色（#F472B6）等高饱和度渐变色
- 字体：中文用 Noto Sans SC，英文标题用 JetBrains Mono，手写风格 logo 用 Caveat
- 全局玻璃拟态效果：半透明背景 + backdrop-filter blur
- 所有内容在粒子背景之上，z-index 分层清晰

## 页面结构（从上到下）
1. **导航栏**：固定在顶部，滚动后缩小并添加毛玻璃背景。左侧 logo（手写风格"weichiAI"），中间导航链接（关于我/创作方式/作品展示/联系方式），右侧 GitHub 按钮
2. **Hero 首屏**：全屏居中，大号渐变文字（打字机效果逐字出现"weichiAI"），下方显示城市（📍 江西·南昌），标签云（零代码基础/多领域跨界/AI探索实践者/持续成长），个性签名轮播（"只要开始，就永不为迟"等），社交图标（GitHub/邮箱/小红书），两个 CTA 按钮
3. **关于我**：左侧圆形头像（带浮动动画），右侧个人介绍文字 + 标签云
4. **创作方式**：四列卡片网格（想法→描述→AI生成→迭代上线），hover 时图标旋转+卡片上浮
5. **作品展示**：2x2 网格，每个作品卡片支持 3D 翻转（正面：状态指示灯+类型+名称+简介；背面：详细描述）。移动端禁用翻转，直接展示全部内容
6. **联系方式**：四列卡片（邮箱/小红书/视频号/GitHub），hover 上浮+发光边框
7. **页脚**：访问量统计、最后更新日期、版权信息、留言按钮

## 特效要求
- **全局 Canvas 粒子系统**：150 个彩色粒子（移动端 75 个），鼠标靠近时聚拢，粒子间距离小于 150px 时绘制渐变连线。使用 requestAnimationFrame 动画，position:fixed 全局背景
- **多层浮动光晕**：3 个不同颜色、不同位置的模糊圆形光晕，缓慢漂移动画，position:fixed 全局
- **滚动 Reveal 动画**：内容区域进入视口时从下方淡入上浮
- **入场动画序列**：导航→标题→标签→签名→社交→按钮，依次延迟出现

## 交互功能
- **留言板**：点击页脚"给未迟留言"按钮弹出模态框，支持昵称+留言提交。留言数据通过 EdgeOne KV 存储（跨设备互通），GET 读取历史列表，POST 提交新留言
- **访问量统计**：基于 localStorage 的本地计数
- **导航平滑滚动**：点击导航链接平滑滚动到对应区域

## 响应式要求
- 桌面端：完整特效+多列布局
- 移动端（<768px）：导航链接隐藏、单列布局、3D 翻转禁用、粒子数量减半

## 部署要求
- 单文件 index.html，所有资源内联（包括 CSS 和 JS）
- 头像图片单独存放为 avatar.png
- 使用 edgeone-pages-skills 部署到 EdgeOne Pages
- Edge Functions 路径：/api/messages，支持 GET/POST/OPTIONS，读写 KV 存储留言数据
```
