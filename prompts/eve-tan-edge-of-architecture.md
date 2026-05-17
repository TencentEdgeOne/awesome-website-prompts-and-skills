# Eve Tan: Edge of Architecture

> **赛道**：Prompt　**作者**：谭彦文
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Eve Tan: Edge of Architecture cover](../assets/demos/eve-tan-edge-of-architecture.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/eve-tan-edge-of-architecture.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Eve Tan: Edge of Architecture |
| 赛道 | Prompt |
| 作者 | 谭彦文 |

## 📝 作品介绍

这是一个建筑设计师作品集《Eve Tan: Edge of Architecture》
它以冷色调科幻视觉为基底，六件虚构的先锋建筑作品通过滚轮切换的沉浸式卡片呈现；每个作品旁的“收藏”按钮背后，是 EdgeOne Pages 边缘函数与 KV 存储驱动的实时互动，每一次点击都在全球边缘节点完成读写。首页的访问计数器、Live from the Edge 模块的动态数据，直观展示了边缘计算如何让静态站点拥有动态灵魂。全屏翻页、自定义光标、暗色模式与一键分享功能，进一步放大了社媒传播潜力。本项目既是建筑理念的数字宣言，也是一次“无服务器全栈”的技术实践：用极简成本，构建出有记忆、有反馈、有传播力的作品集网站。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
# **角色设定**

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

你是一名资深的全栈开发工程师 + 创意网页设计师，精通 HTML5/CSS3/JavaScript、React 18 以及 EdgeOne Pages 生态。你的设计审美趋向 2026 年网页设计潮流——极简主义 2.0、微光玻璃拟态、空间感强烈的全屏滚动布局。
你需要为建筑师 **Eve Tan** 打造一个具有电影级全屏翻页效果的个人作品集网站，整个网站采用 scroll-snap-type 全屏分页，每次滚动切换一整屏。在 **Featured Projects** 区块内，滚动滚轮不是滚动页面，而是切换建筑项目（类似轮播），并附带平滑动效。

# **技术约束（必须严格遵守）**
## **React 版本与挂载**
- 使用 **React 18.2.0** 和 **ReactDOM 18.2.0** 的 UMD CDN，禁止使用 React 19。
<script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js"></script>
由于 Babel Standalone 异步解析 ，必须去掉 DOMContentLoaded 事件监听，直接将 <script type="text/babel"> 放在 body 末尾，定义组件后立即调用 ReactDOM.createRoot(root).render(<App />)。</p> <p style="line-height:1.3;">图片路径<br> 图片位于当前工作区根目录下的 asset/ 文件夹：zhuye.png、dp.png、live.png。</p> <p style="line-height:1.3;">直接引用 ./asset/zhuye.png 等，无需复制或重命名。</p> <p style="line-height:1.3;">使用 position: absolute; opacity: 0; 预加载图片，禁止 display: none。</p> <p style="line-height:1.3;">Babel Standalone CDN<br> html</p> <script src="https://unpkg.com/@babel/standalone/babel.min.js">
自定义鼠标
全局 cursor: none（PC），自定义圆形光标跟随，悬停可点击元素放大。蒙层透明度
区块 背景图 遮罩
Hero ./asset/zhuye.png rgba(0,0,0,0.35)
Design Philosophy ./asset/dp.png rgba(0,0,0,0.2)
Live from the Edge ./asset/live.png rgba(0,0,0,0.6)
布局与交互要求
导航栏
页面右上角固定（fixed），包含五个链接：Works、Philosophy、Awards、Live、Contact。点击平滑滚动到对应区块（scrollIntoView({ behavior: ‘smooth’ })）。
样式：透明背景，白色文字，悬停变金色 #C8A65C，z-index 高。
所有区块（section）设置 scroll-margin-top: 80px，防止被导航栏遮挡。
首页 Hero 区
文案（居中或左下角）：text
Architecture Studio
Eve Tan
Designing the Future of Space
下方圆形/线框按钮，文字 EXPLORE WORKS，点击滚动到第二屏（Featured Projects）。全屏翻页滚动
根容器 scroll-snap-type: y mandatory，每个区块 height: 100vh; scroll-snap-align: start。第二屏：Featured Projects（核心交互）
展示内容
6 个建筑项目（自拟名称、地点、类型、简短描述）。每次只显示一个项目的大卡片，包含：
大图（必须为建筑类图片，使用以下 Unsplash 链接之一，每个项目选取不同）：
https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800（现代建筑）
https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=800（建筑室内）
https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800（图书馆）
https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800（混凝土建筑）
https://images.unsplash.com/photo-1460574283810-2aab119d8511?w=800（博物馆）
https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?w=800（教堂现代）
标题、地点、年份、简短描述。
“❤️ 收藏”按钮（与 KV 联动，点击 /api/favorite 实时更新数字）。
切换机制（滚轮局部拦截 + 动效）
滚轮切换：鼠标悬浮在该区块内时，滚轮用于切换项目。边界条件：若当前为最后一个项目且向下滚动，或第一个项目且向上滚动，则不拦截滚轮，允许页面滚动到上一屏/下一屏。
实现：监听 wheel，检查边界后决定是否 preventDefault。
备用控件：左右箭头按钮、底部小圆点指示器。
切换动效（必须实现）：
每次切换（滚轮、箭头、圆点）均需平滑视觉动效，不得生硬替换。
动效方案任选其一或组合：淡入+轻微上浮/平移、3D 翻转、缩放过渡（0.95→1）。
动效时长 300-500ms，使用 ease-out 或 cubic-bezier。
切换期间需防抖，避免动画冲突。
使用 CSS transition 或 Web Animations API。
第三屏：Design Philosophy
背景图 ./asset/dp.png + 遮罩，文字白色。布局：
上方小字 OUR APPROACH，大标题 Design Philosophy
副标题 Context · Honesty · Time
正文（用户提供）：
We believe architecture is not imposed upon a site — it emerges from it. Our design philosophy rests on three pillars: Contextual Intelligence, where every form responds to its environment; Material Honesty, where structure reveals itself without disguise; and Temporal Beauty, where buildings age with grace rather than decay. Our team of 24 architects, engineers, and researchers operates from studios in Shanghai and Zurich, creating works that are simultaneously local and universal. We don’t design buildings. We design conversations between people and space.
底部统计数据：24 Architects 2 Studios 7 Countries（卡片或分隔线）。
字体：标题 Space Grotesk 粗体，正文 Inter light。
第四屏：Honors & Awards
背景深色（#111）或半透明。大标题 RECOGNITION + Awards & Honors
奖项列表（垂直时间轴或网格）：
Pritzker Prize Nominee, Pritzker Architecture Prize, 2025
RIBA International Prize, Royal Institute of British Architects, 2024
AIA Gold Medal, American Institute of Architects, 2023
Dezeen Award — Building of the Year, 2022
第五屏：Live from the Edge
背景图 ./asset/live.png + 遮罩（0.6），文字亮色。确保 scroll-margin-top: 80px 防止被导航栏遮挡。
动态数据展示：总访问量、今日访问量（从 /api/stats 获取），各项目收藏数排行榜（或最受欢迎项目）。强调边缘计算+KV。
第六屏：Contact & Share
联系表单（name, email, message），提交到 /api/contact（可选）。社交链接图标 + 一键复制网站链接分享。
暗黑/亮色模式切换开关（影响整个网站）。
边缘函数与 KV
/api/stats：GET，带 ?incr=true 递增计数，返回 { totalVisitors, todayVisits }。/api/favorite：POST，body { projectId }，递增项目收藏数，返回 { projectId, likes }。
KV 绑定：edgeone.json 中绑定命名空间 visitorStats（存储总访问量、今日访问量、上次日期）以及 likes_proj_0 ~ likes_proj_5。
自动化部署（AI 必须全自动完成，无需用户额外输入）
第一步：安装 EdgeOne Pages Deploy Skill
AI 主动告知用户：“正在安装 EdgeOne Pages Deploy Skill”。AI 自动调用自然语言安装机制：加载 https://github.com/edgeone-pages/edgeone-pages-skills。
安装完成后确认：✅ EdgeOne Pages Deploy Skill 安装成功。
第二步：生成项目代码
index.html（包含完整 React 组件、样式、交互、动效）functions/api/stats.js
functions/api/favorite.js
edgeone.json
第三步：一键部署（自动执行）
AI 自动调用 Skill 部署指令，执行：环境检查：安装 EdgeOne CLI（如未安装）
登录认证：引导选择站点（China/Global）或自动使用 API Token
项目构建：静态 HTML 无需构建
上传部署：将 index.html、functions/、edgeone.json 部署到 EdgeOne Pages
解析返回的公网 URL（例如 https://xxxx.edgeone.app）
降级方案：若无法完成登录认证，自动切换至匿名快速部署（通过 curl -X POST https://mcp-on-edge.edgeone.app/mcp-server 一键部署），无需账户，几秒内获得链接。
第四步：验证并输出结果
使用 curl 验证 URL 可访问（HTTP 200）。最终输出：
text
✅ 部署成功！
🔗 访问链接：https://xxxx.edgeone.app
⚙️ EdgeOne Pages 控制台管理地址：（如有）
代码输出格式
首先输出：✅ 已配置图片路径：./asset/zhuye.png, ./asset/dp.png, ./asset/live.png然后依次输出以下文件的完整代码块：
index.html
functions/api/stats.js
functions/api/favorite.js
edgeone.json
最后自动执行部署并输出访问链接。
禁止事项
❌ React 19❌ DOMContentLoaded 包裹挂载
❌ display: none 预加载图片
❌ 缺失导航栏
❌ 第二屏无滚轮切换项目功能或边界处理错误
❌ 第二屏切换项目无动效
❌ 第二屏图片非建筑类
❌ Live from the Edge 被导航栏遮挡
❌ Hero / Design Philosophy 蒙层过黑
❌ 部署失败未提示或未尝试匿名部署

```
