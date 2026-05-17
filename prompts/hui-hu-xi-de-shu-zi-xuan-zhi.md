# 会呼吸的"数字宣纸"

> **赛道**：Prompt　**作者**：lukas
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![会呼吸的"数字宣纸" demo](../assets/demos/hui-hu-xi-de-shu-zi-xuan-zhi.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/hui-hu-xi-de-shu-zi-xuan-zhi.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 会呼吸的"数字宣纸" |
| 赛道 | Prompt |
| 作者 | lukas |

## 📝 作品介绍

一张会呼吸的"数字宣纸"，鼠标划过留下水墨涟漪，底层有电路板纹理在缓慢脉动。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

【目标】
构建一个名为 "Silk & Circuit" 的单页全屏交互式网站。首屏必须在 0.5 秒内建立视觉霸权：深色背景上，2000 条模拟丝绸纤维的粒子细线在鼠标交互下产生水墨晕染般的扩散涟漪，底层若隐若现的电路纹理以呼吸节律脉动。整体美学必须是"新中式赛博"——北宋山水画的留白意境与数字电路的精密冷光在同一时空碰撞。拒绝任何 Bootstrap 感、拒绝卡片式布局、拒绝纯白背景、拒绝滚动条。

【品牌与视觉资产】
- 色彩系统：
  - 背景：#050505（极深墨色，非纯黑，带一点暖调）
  - 丝绸粒子默认色：rgba(180， 180， 180， 0.3)（烟墨色）
  - 激活色（鼠标附近）：#00FFD1（电光青，赛博感）
  - 传统色点缀：#FF3D00（朱砂红）、#E6A817（缃叶黄）、#2E59A7（石青）——用于色名文字和辉光爆发
  - 电路纹理：rgba(0， 255， 209， 0.08)（极淡的电光青）
- 字体：
  - 中文：Noto Serif SC（思源宋体，Google Fonts），用于色名和诗签
  - 英文/数字：Space Grotesk（Google Fonts），用于标题和技术标签
- 动效原则：
  - 所有运动必须使用指数缓出（ease-out-expo），禁止线性动画
  - 粒子扩散后必须有弹性回弹，回弹系数 0.6
  - 电路纹理脉动周期 4 秒，正弦波，透明度在 0.05 到 0.12 之间变化
  - 颜色主题切换时，全局色温过渡持续 2 秒，使用 CSS 变量驱动
- 视觉禁忌：
  - 不允许使用任何圆角大于 4px 的 UI 元素（保持锐利感）
  - 不允许使用阴影模糊的卡片
  - 不允许使用 emoji 作为图标
  - 不允许出现滚动条（全屏锁定，overflow: hidden）

【技术栈】
- 前端：
  - 单 HTML 文件（index.html），所有 CSS 和 JS 内联，零外部构建工具
  - Canvas 2D 粒子系统（2000 个粒子，性能优先，使用 requestAnimationFrame）
  - 电路背景层使用 CSS 渐变 + SVG 噪点纹理（base64 内联），通过 CSS animation 实现脉动
  - 状态管理：纯原生 JS，无框架
- 后端/Edge：
  - Edge Functions（functions/api/palette.js）：返回随机传统色板
  - KV（functions/api/favorite.js）：存储用户收藏
- 部署约束：
  - 单页应用，无路由刷新
  - 所有资源必须内联或走可靠 CDN（Google Fonts）
  - 首屏总资源体积（不含字体）< 300KB

【布局与交互约束】
- 首屏：
  - 100vw × 100vh Canvas 全屏覆盖，z-index: 1
  - 电路纹理背景层：position: fixed，z-index: 0
  - 左上角：竖排色名展示区（writing-mode: vertical-rl），48px 思源宋体，初始显示"墨色"，随鼠标激活粒子时随机切换为其他传统色名，切换时有 0.3 秒的模糊渐入效果（filter: blur(4px) → blur(0px)）
  - 右下角：直径 56px 的圆形按钮，1px 边框 rgba(255，255，255，0.2)，背景 rgba(255，255，255，0.05)，backdrop-filter: blur(10px)，内嵌一个 20px 的刷新图标（SVG path）。悬停时边框颜色变为电光青，图标旋转 180 度（0.6s 弹性缓动）
  - 左下角：12px 的 Space Grotesk 文字，显示当前 FPS 和"EdgeOne Pages · 节点在线"，颜色 rgba(255，255，255，0.4)
- 鼠标交互：
  - 鼠标移动产生半径 150px 的引力场，场内粒子向鼠标方向偏移，偏移量随距离衰减（衰减函数使用 ease-out-cubic）
  - 粒子偏移轨迹使用二次贝塞尔曲线模拟丝绸的柔软感，避免直线运动的僵硬感
  - 鼠标按下（mousedown）时，引力场半径扩大到 300px，激活色变为朱砂红，持续 1 秒后恢复电光青
- 键盘交互：
  - 按 S 键：触发截图生成。在 DOM 中动态创建一个 1200×630 的 canvas，绘制当前画面快照（居中，带 16px 圆角和深色背景），上方以 Space Grotesk 24px 书写 "SILK & CIRCUIT"，下方以思源宋体 32px 书写随机诗签（从预设数组中选取："电路深处有山河"、"像素之间见天地"、"硅基之上生水墨"、"数据如丝绕指柔"、"一屏山水一屏诗"），底部右侧以小字标注 "Powered by EdgeOne Pages · 2025"。生成后自动触发 PNG 下载，文件名为 "silk-circuit-[timestamp].png"

【Edge 功能增强】
- /api/palette（GET）：
  - 返回 JSON：{ "palette": [ {"name":"朱砂红"，"hex":"#FF3D00"，"poem":"一点朱砂，万山红遍"}， {"name":"石青"，"hex":"#2E59A7"，"poem":"青出于蓝，而胜于蓝"}， {"name":"缃叶"，"hex":"#E6A817"，"poem":"缃叶为书，秋意满纸"}， {"name":"霁红"，"hex":"#F0371A"，"poem":"雨过天青，霁红初现"}， {"name":"墨色"，"hex":"#050505"，"poem":"墨分五色，大道至简"} ] }
  - 每次请求随机打乱顺序返回前 3 条
  - 响应头添加 Cache-Control: public， max-age=60
- /api/favorite（POST/GET）：
  - POST：接收 JSON body { "palette": [...] }，存入 KV，键为 fav_[timestamp]，值为 JSON 字符串。返回 { "success": true， "id": "fav_xxx" }
  - GET：返回最近存储的 5 条收藏记录，从 KV 中扫描键名前缀 fav_，按时间倒序
  - 如果 KV 未配置，优雅降级为返回空数组，不影响前端运行

【代码实现要求】
- 生成的项目必须包含以下文件结构：
  - index.html（主入口，包含内联 CSS 和 JS）
  - functions/api/palette.js（Edge Function）
  - functions/api/favorite.js（Edge Function）
- index.html 中的 JavaScript 必须模块化组织（使用原生 ES Module 或立即执行函数），注释清晰，变量名有意义
- Canvas 粒子系统必须做性能保护：如果 FPS 连续 3 秒低于 30，自动将粒子数量减半并提示"已进入节能模式"
- 所有颜色值必须提取为 CSS 变量（:root），方便通过 JS 批量切换主题
- 部署后首页标题必须为 "Silk & Circuit | 新中式赛博交互画布"，meta description 包含"新中式、赛博、交互艺术、EdgeOne Pages"

【社媒传播预埋】
- 页面 head 中必须包含 Open Graph 标签：
  - og:title: "Silk & Circuit | 在电路板上绣一幅山水"
  - og:description: "当北宋水墨遇见硅基脉动，一次在浏览器里的东方赛博冥想。"
  - og:image: 使用一个内联的 1200×630 SVG 作为默认分享图（SVG 数据 URI 可自适应任何域名）
- 确保截图功能生成的 PNG 在推特、小红书、即刻上作为图片发布时，文字清晰可读，视觉占比超过 60%
```
