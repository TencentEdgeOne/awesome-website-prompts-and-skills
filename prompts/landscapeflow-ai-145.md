# LandscapeFlow AI

> **赛道**：Prompt　**作者**：李博 · [GitHub @xixi241225-crypto](https://github.com/xixi241225-crypto)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![LandscapeFlow AI demo](../assets/demos/landscapeflow-ai-145.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | LandscapeFlow AI |
| 赛道 | Prompt |
| 作者 | 李博 |
| GitHub | [@xixi241225-crypto](https://github.com/xixi241225-crypto) |

## 📝 作品介绍

LandscapeFlow AI——让设计师，回到设计本身
针对景观设计师的全流程AI工作台。把从踏勘记录到汇报PPT传统需要一周的流程，通过6个专职AI代理压缩到30分钟内。核心叙述是设计师的三次生产力革命：响应时间时间在画笔上，CAD时代时间在桌面上，AI时代时间终于土地上、人回到上面。技术上利用边缘功能+KV存储实现AI生成项目说明与动态模板库，纯静态部署，开箱即用。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
LandscapeFlow AI 产品官网 Prompt
安装此技能：https://github.com/TencentEdgeOne/edgeone-pages-skills

任务
请您创建并部署一个名为LandscapeFlow AI的产品官网，部署到EdgeOne Pages，最终返回公开访问链接。

LandscapeFlow AI是面向独立景观设计师的AI工作流产品，旨在「让设计师回归设计本身」——把传统需要一周的景观方案汇报流程（踏勘记录→概念生成→方案选择→空间推演→表达视觉→汇报输出）通过6个专职AI Agent压缩到30分钟内。

构建流程中遇到部署、Edge Functions、KV等问题，直接调用edgeone-pages-skills中的edgeone-pages-deploy和edgeone-pages-dev解决。

一、技术栈与项目结构
框架：纯静态 HTML + CSS + 原生 JavaScript（不使用 React/Vue，确保最快部署）

目录结构：

landscapeflow/
├── index.html
├── workbench.html
├── functions/
│   ├── api/
│   │   ├── brief.js          # Edge Function: AI 生成项目说明
│   │   └── cases.js          # Edge Function: KV 读取案例库
│   └── _middleware.js        # 中间件: CORS + 访问日志
├── assets/
│   └── (景观图片素材)
└── README.md
部署：edgeone-pages-deploy 部署到EdgeOne Pages生产环境，部署后输出公开访问URL

KV 绑定：在 EdgeOne 控制台手动绑定 KV 命名空间，变量名 LANDSCAPE_CASES

二、景观设计系统
2.1 色彩
css
复制
--bg: #0A0A0A;                       /* 深黑底 */
--green: #22C55E;                    /* 景观生命绿 */
--green-glow: rgba(34, 197, 94, 0.4);
--white: #FFFFFF;
--white-60: rgba(255, 255, 255, 0.60);
--white-30: rgba(255, 255, 255, 0.30);
--border: rgba(255, 255, 255, 0.10);
--card-bg: rgba(255, 255, 255, 0.06);
2.2 字体
通过Google Fonts引入：

标题：'Playfair Display', Georgia, serif（斜体强调用绿色）
正文与用户界面：'DM Sans', system-ui, sans-serif
中文眉：DM Sans，全大写，字间距0.18em，绿色
2.3 景观风格
高级、克制、深夜美术馆感、克制中带生命力。所有英雄大图覆盖重构蒙版，主体用绿色光晕扩展。

三、视觉资源（CDN）
所有景观图片素材已上传至 CDN，基础路径（BASE）：

https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow
代码中引用方式：直接使用完整 CDN URL

Hero 轮播 + 模板库图片（6张，1920×1080）
文件名完整 CDN 地址
tmpl_coast.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_coast.jpg
tmpl_playground.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_playground.jpg
tmpl_pocket.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_pocket.jpg
tmpl_commercial.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_commercial.jpg
tmpl_community.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_community.jpg
tmpl_wetland.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_wetland.jpg
工作台视觉表达图片（5张，1920×1080）
文件名完整 CDN 地址
viz_aerial.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_aerial.jpg
viz_plan.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_plan.jpg
viz_night.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_night.jpg
viz_playground.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_playground.jpg
viz_lawn.jpghttps://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_lawn.jpg
注意：所有图片直接从 CDN 加载，不需要在项目 assets/ 目录中放置图片文件。代码中所有 img src 使用上述完整 CDN URL。

四、首页 index.html 结构（7个区块）
区块1：固定顶部导航
高度68px，背景 rgba(10, 10, 10, 0.75) + backdrop-filter: blur(20px)
左：🌿 LandscapeFlow AI（Playfair Display 18px，绿叶图标带绿色阴影）
中：4个链接 - 设计革命 / 工作流程 / 模板库 / AI 试用（必须严格4个，不要多加）
右：登录（ghost）+ 免费试用（绿色渐变胶囊）
滚动 > 40px 时背景变为 rgba(10, 10, 10, 0.95)
区块2：英雄 #hero
全屏 height: 100vh; min-height: 680px;
6张 CDN 景观大图轮播（每5秒切换，淡入淡出 + 缓慢缩放 1.06→1）
轮播图片数组：
javascript
复制
const heroImages = [
  'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_coast.jpg',
  'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_playground.jpg',
  'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_pocket.jpg',
  'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_commercial.jpg',
  'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_community.jpg',
  'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/tmpl_wetland.jpg'
];
全屏蒙版 linear-gradient(rgba(10, 10, 10, 0.64) 0%, rgba(10, 10, 10, 0.28) 32%, rgba(10, 10, 10, 0.30) 58%, rgba(10, 10, 10, 0.86) 100%)
文字区块定位：使用 position: absolute; bottom: 22%; left: 50%; transform: translateX(-50%); 从底部向上定位，文字组视觉重心占据画面55%～60%区域，有充足的呼吸空间。禁止使用 top: 73% 或从顶部下推的写法，否则内容高度增加后会挤到底部。
css
复制
.hero-content {
  position: absolute;
  bottom: 22%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  max-width: 860px;
  padding: 0 24px;
}
内容顺序：

眉毛：🌿 LandscapeFlow AI（Playfair Display 22px）
主标题（Playfair Display, 700, 行高1.02）：让设计师，回到设计本身
主标题字号与换行规则（必须严格实现）：
css
复制
.hero-title {
  font-size: clamp(36px, 4vw, 64px);
  white-space: nowrap;
}
@media (max-width: 600px) {
  .hero-title {
    white-space: normal;
    font-size: clamp(32px, 8vw, 48px);
  }
}
效果要求：宽屏（>600px）"让设计师，回到设计本身"必须在同一行；窄屏（≤600px）自然换为两行。

副标题（DM Sans 16px，white-60，最大宽度620px，margin: 0 auto）：
从踏勘记录到完整的汇报PPT，景观设计师的流程AI工作台。生产力革命之后，时间终于回到观察土地、思考人居、想象未来。

主CTA：进入工作台→（链接到workbench.html）
底部居中显示6个轮播指示点（position: absolute; bottom: 32px;）
区块3：设计师的三次生产力革命 #revolution
黑底
眉毛：第三次革命
大标题：设计师的三次生产力革命
副标题：每一次，时间都还给了设计本身
三栏卡片（hover时绿色光晕上浮）：
第一次革命第二次革命第三次革命
时代手绘时代CAD时代AI时代
时间花在在纸上磨手艺记软件命令用自然语言对话
设计师是工匠制图员回到设计本身
底注时间在画笔上时间在键盘上时间在土地上、在人身上
第三张卡底注用绿色 + 斜体 Playfair Display 装饰。

区块4：六步工作流程 #workflow
眉毛：工作流程
大标题：从一句话到一份完整方案
副标题：六个AI Agent，把一周压缩到30分钟
6张卡片，三列两行：
#步骤描述标签
01项目定义利用关键条件建立项目前提：场地、画面、尺度、目标任务书解读 / 用户画像 / 边界识别
02概念生成从气候、人群、矛盾、案例四个角度建立设计依据SWOT / 案例匹配 / 设计推导
03方案选择三个差异化概念方向，每个都是决策节点多方案对比 / 决策建议 / 风险标注
04空间推演平面布局、流线组织、竖向、植物结构总平面 / 功能分区 / 种植策略
05视觉表达节点透视、鸟瞰图、效果图、材料板文生图 / 风格控制 / 多视角
06产出成果设计说明文本、报告PPT、打印版本一键导出PPT 生成 / 文本润色 / 格式适配
每张卡片左上大数字01-06（Playfair Display 56px 半透明绿）。

区块5：模板库 #templates
眉毛：模板
大标题：专业模板，覆盖核心场景
副标题：6类景观项目模板，开箱即用
数据必须通过 fetch('/api/cases') 从 Edge Function 动态加载（KV 驱动）
渲染时直接使用 c.img 字段，不要加 startsWith('http') 判断兜底，避免路径被误判
区块6：AI 在线试一下 #try
眉毛：立即尝试
大标题：输入项目信息，AI立即生成项目说明
左右两栏：
左：表单（项目名称 / 类型选择6项 / 用地面积 / 设计风格选择4项 / 核心目标文本区域 / 生成按钮）
右：结果区，点击按钮调用 POST /api/brief，加载状态展示打字机效果
区块7：CTA + 页脚
CTA黑底中间过渡绿色光晕
眉毛：START NOW
大标题：现在开始你的设计
副标题：无需下载，打开浏览器即可工作。免费计划包含5次完整方案生成。
大胶囊绿色按钮：免费开始生成
页脚：标志 + 链接 + 版权
五、工作台 workbench.html
简化版工作台：顶部导航 + 6步选项卡切换器（项目定义→输出结果），每个选项卡对应输入/结果区域。

特别注意 Step 5 视觉表达使用 CDN 图片：

javascript
复制
const visualizations = [
  { src: 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_aerial.jpg', title: '社区公园鸟瞰效果图', tag: '鸟瞰' },
  { src: 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_plan.jpg', title: '总平面图 · 含功能分区', tag: '平面' },
  { src: 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_night.jpg', title: '夜景灯光效果图', tag: '夜景' },
  { src: 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_playground.jpg', title: '儿童游乐区节点透视', tag: '节点' },
  { src: 'https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/landscapeflow/viz_lawn.jpg', title: '共享草坪节点透视', tag: '节点' }
];
3列网格布局，绝对不要保留"+生成更多"占位框。

六、Edge Functions
6.1 functions/api/brief.js
javascript
复制
6.2 functions/api/cases.js（KV驱动）
javascript
复制
6.3 functions/_middleware.js（CORS + 日志）
javascript
复制
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }
  const response = await next();
  if (url.pathname.startsWith('/api')) {
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('X-Powered-By', 'LandscapeFlow AI');
  }
  return response;
}
七、前端关键JS行为
Hero轮播：纯JS实现6张CDN图淡入淡出 + 缓慢缩放，每5秒切换，鼠标悬停暂停
滚动渐进：所有 .reveal 元素 IntersectionObserver 上浮渐入
导航栏滚动变化：> 40px 时背景 alpha 加深
模板库动态加载：fetch('/api/cases') 后渲染，直接用 c.img 不要加 startsWith 兜底判断
AI试一下：表单提交时禁用按钮 + 加载 + 打字机效果（每25ms一个字符）
八、KV绑定（关键步骤）
配置完成后，必须在 EdgeOne Pages 控制台手动完成 KV 绑定：

进入项目 → KV 存储 → 绑定命名空间
变量名：LANDSCAPE_CASES（必须一字不差，对应代码中的全局变量）
命名空间：新建一个，名称随意（如 landscape_cases）
绑定完成后重新部署一次让绑定生效
重要技术点：EdgeOne Pages 的 KV 绑定变量是全局变量，而不是 env 对象的属性：

✅ typeof LANDSCAPE_CASES !== 'undefined' + LANDSCAPE_CASES.get()
❌ env.LANDSCAPE_CASES.get()（错误）
九、最终交付
完成上述所有工作后输出：

✅ index.html 7个区块
✅ workbench.html 6步选项卡（Step 5 视觉表达用CDN viz_* 图）
✅ functions/api/brief.js 能返回项目说明
✅ functions/api/cases.js 能返回6条案例（图片使用CDN地址）
✅ functions/_middleware.js 生效
✅ 所有11张景观图从CDN加载（无需本地图片文件）
✅ 通过 edgeone-pages-skills 部署到 EdgeOne Pages 生产环境
✅ KV 命名空间已在控制台绑定（LANDSCAPE_CASES）
✅ 返回最终公开访问 URL
✅ 浏览器验证：Hero轮播 / 模板库6张景观图 / AI试验三个交互核心全部跑通
请现在开始执行。全程不要问问题，遇到技术细节直接调用edgeone-pages-skills解决。

```
