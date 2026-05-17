# LandscapeFlow AI

> **赛道**：Prompt　**作者**：李博 · [GitHub @xixi241225-crypto](https://github.com/xixi241225-crypto)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![LandscapeFlow AI cover](../assets/demos/landscapeflow-ai.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/landscapeflow-ai.gif" alt="LandscapeFlow AI demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | LandscapeFlow AI |
| 赛道 | Prompt |
| 作者 | 李博 |
| GitHub | [@xixi241225-crypto](https://github.com/xixi241225-crypto) |

## 📝 作品介绍

LandscapeFlow AI —— 让设计师，回到设计本身
面向景观设计师的全流程 AI 工作台。把从踏勘记录到汇报 PPT 传统需要一周的流程，通过 6 个专职 AI Agent 压缩到 30 分钟内。核心叙事是设计师的三次生产力革命：手绘时代时间在画笔上，CAD 时代时间在快捷键上，AI 时代时间终于回到土地上、回到人身上。技术上使用 Edge Functions + KV Storage 实现 AI 生成项目说明与动态模板库，纯静态部署，开箱即用。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.
任务
请你创建并部署一个名为 LandscapeFlow AI 的产品官网，部署到 EdgeOne Pages，最终返回公开访问链接。
LandscapeFlow AI 是面向独立景观设计师的 AI 工作流产品，主张「让设计师回到设计本身」—— 把传统需要一周的景观方案汇报流程（踏勘记录 → 概念生成 → 方案选择 → 空间推演 → 视觉表达 → 汇报输出）通过 6 个专职 AI Agent 压缩到 30 分钟内。
构建过程中遇到部署、Edge Functions、KV 等问题，直接调用 edgeone-pages-skills 中的 edgeone-pages-deploy 和 edgeone-pages-dev 解决。

一、技术栈与项目结构

框架：纯静态 HTML + CSS + 原生 JavaScript（不使用 React/Vue，确保最快部署）
目录结构：

  landscapeflow/
  ├── index.html
  ├── workbench.html
  ├── functions/
  │  
   ├── api/
  │  
   │   ├── brief.js          # Edge Function: AI 生成项目说明
  │  
   │   └── cases.js          # Edge Function: KV 读取案例库
  │  
   └── _middleware.js        # 中间件: CORS + 访问日志
  ├── assets/
  │  
   └── (景观图片素材)
  └── README.md

部署：edgeone-pages-deploy 部署到 EdgeOne Pages 生产环境，部署后输出公开访问 URL
KV 绑定：在 EdgeOne 控制台手动绑定 KV 命名空间，变量名 LANDSCAPE_CASES


二、视觉设计系统
2.1 色彩
css--bg: #0A0A0A;                      
   /* 深黑底 */
--green: #22C55E;                   
   /* 景观生命绿 */
--green-glow: rgba(34，197，94，0.4);
--white: #FFFFFF;
--white-60: rgba(255，255，255，0.60);
--white-30: rgba(255，255，255，0.30);
--border: rgba(255，255，255，0.10);
--card-bg: rgba(255，255，255，0.06);
2.2 字体
通过 Google Fonts 引入：
html

标题：'Playfair Display'， Georgia， serif（italic 强调用绿色）
正文与 UI：'DM Sans'， system-ui， sans-serif
英文 eyebrow：DM Sans，全大写，letter-spacing 0.18em，绿色

2.3 视觉风格
高级、克制、深夜美术馆感、克制中带生命力。所有 Hero 大图覆盖深色渐变蒙版，主体用绿色光晕点缀。

三、首页 index.html 结构（7 个区块）
区块 1：固定顶部导航

高度 68px，背景 rgba(10，10，10，0.75) + backdrop-filter: blur(20px)
左：🌿 LandscapeFlow AI（Playfair Display 18px，绿叶图标带绿色 drop-shadow）
中：4 个链接 - 设计革命 / 工作流程 / 模板库 / AI 试用（必须严格 4 个，不要多加）
右：登录（ghost）+ 免费试用（绿色渐变胶囊）
滚动 > 40px 时背景加深为 rgba(10，10，10，0.95)

区块 2：Hero #hero

全屏 height: 100vh; min-height: 680px;
6 张本地景观大图轮播（每 5 秒切换，淡入淡出 + 缓慢 zoom 1.06→1）
全屏深色蒙版 linear-gradient(rgba(10，10，10，0.64) 0%， rgba(10，10，10，0.28) 32%， rgba(10，10，10，0.30) 58%， rgba(10，10，10，0.86) 100%)
文字区块定位：使用 position: absolute; bottom: 38%; left: 50%; transform: translateX(-50%); 从底部向上定位，文字组视觉重心落在画面 45%～50% 区域（约画面中部偏上），有充足呼吸空间。禁止使用 top: 73% 或类似从顶部下推的写法，否则内容高度叠加后会挤到底部。也禁止把 bottom 设为 22% 或更小，会导致文字过低与底部 CTA、轮播指示点挤在一起。

css  .hero-content {
    position: absolute;
    bottom: 38%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    width: 100%;
    max-width: 860px;
    padding: 0 24px;
  }
内容顺序：

eyebrow：🌿 LandscapeFlow AI（Playfair Display 22px）
主标题（Playfair Display， 700， line-height 1.02）：

让设计师，回到设计本身

主标题字号与换行规则（必须严格实现）：

css    .hero-title {
      font-size: clamp(36px， 4vw， 64px); /* 宽屏最大64px，确保一行放得下 */
      white-space: nowrap;               /* 宽屏强制一行，不换行 */
    }
    @media (max-width: 600px) {
      .hero-title {
        white-space: normal;             /* 窄屏允许自然换行 */
        font-size: clamp(32px， 8vw， 48px);
      }
    }
效果要求：宽屏（>600px）"让设计师，回到设计本身"必须在同一行；窄屏（≤600px）自然换为两行："让设计师，" / "回到设计本身"。

副标题（DM Sans 16px， white-60， max-width 620px，margin: 0 auto）：

从踏勘记录到汇报 PPT，景观设计师的全流程 AI 工作台。三次生产力革命之后，时间终于回到观察土地、思考人居、想象未来。


主 CTA：进入工作台 →（链接到 workbench.html）
底部居中显示 6 个轮播指示点（position: absolute; bottom: 32px;）

区块 3：设计师的三次生产力革命 #revolution

黑底
eyebrow：THE THIRD REVOLUTION
大标题：设计师的三次生产力革命
副标题：每一次，时间都被还给了设计本身
三栏卡片（hover 时绿色光晕上浮）：

第一次革命（手绘）第二次革命（CAD）第三次革命（AI）时代手绘时代CAD 时代AI 时代时间花在在纸上磨手艺在记软件命令用自然语言对话设计师是工匠是制图员回到设计本身卡片底注时间在画笔上时间在快捷键上时间在土地上、在人身上
第三张卡底注用绿色 + italic Playfair Display 装饰。
区块 4：六步工作流 #workflow

eyebrow：WORKFLOW
大标题：从一句话到一份完整方案
副标题：六个 AI Agent，把一周压缩到 30 分钟
6 张卡片，三列两行：

#步骤描述标签01项目定义用关键条件建立项目前提：场地、人群、尺度、目标任务书解读 / 用户画像 / 边界识别02概念生成从气候、人群、矛盾、案例四角度建立设计依据SWOT / 案例匹配 / 设计推导03方案选择三个差异化概念方向，每个都是决策节点而非结果多方案对比 / 决策建议 / 风险标注04空间推演平面布局、流线组织、竖向、植物结构总平面 / 功能分区 / 种植策略05视觉表达节点透视、鸟瞰、效果图、材料板文生图 / 风格控制 / 多视角06输出成果设计说明文本、汇报 PPT、打印版本一键导出PPT 生成 / 文本润色 / 格式适配
每张卡片左上大数字 01-06（Playfair Display 56px 半透明绿）。
区块 5：模板库 #templates

eyebrow：TEMPLATES
大标题：专业模板，覆盖核心场景
副标题：6 类景观项目模板，开箱即用
数据必须通过 fetch('/api/cases') 从 Edge Function 动态加载（KV 驱动）
卡片渲染时直接使用 c.img 字段，不要加 startsWith('http') 判断兜底，避免本地路径被误判为非法

模板内容由 cases.js 返回：

滨海景观公园（热门，12 张幻灯片 · 含平面图 · 含效果图）
儿童友好乐园（精选，10 张幻灯片 · 含色彩方案 · 含设施清单）
城市口袋公园（14 张幻灯片 · 含功能分析 · 含植物配置）
商业街区景观（新品，16 张幻灯片 · 含夜景方案 · 含铺装细节）
社区居住景观（12 张幻灯片 · 含四季变化 · 含灌溉系统）
生态湿地修复（精选，18 张幻灯片 · 含生态分析 · 含水文设计）

区块 6：AI 在线试一下 #try

eyebrow：TRY IT NOW
大标题：输入项目信息，AI 立即生成项目说明
左右两栏：

左：表单（项目名称 / 类型 select 6项 / 用地面积 / 设计风格 select 4项 / 核心目标 textarea / 生成按钮）
右：结果区，点击按钮调用 POST /api/brief，loading 状态展示打字机效果



区块 7：CTA + Footer

CTA 黑底中间径向绿色光晕，eyebrow：START NOW，大标题：现在开始你的设计
副标题：无需下载，打开浏览器即可工作。免费计划包含 5 次完整方案生成。
大胶囊绿色按钮：免费开始生成
Footer：logo + 链接 + 版权


四、工作台 workbench.html
简化版工作台：顶部导航 + 6 步 tab 切换器（项目定义→输出成果），每个 tab 对应输入/结果区域。
特别注意 Step 5 视觉表达 使用本地图片（不要 Unsplash 占位）：
javascriptconst visualizations = [
  { src: '/assets/viz-aerial.jpg'，     title: '社区公园鸟瞰效果图'， tag: '鸟瞰' }，
  { src: '/assets/viz-plan.jpg'，       title: '总平面图 · 含功能分区'， tag: '平面' }，
  { src: '/assets/viz-night.jpg'，      title: '夜景灯光效果图'，     tag: '夜景' }，
  { src: '/assets/viz-playground.jpg'， title: '儿童游乐区节点透视'， tag: '节点' }，
  { src: '/assets/viz-lawn.jpg'，       title: '共享草坪节点透视'，   tag: '节点' }
];
3 列网格布局，绝对不要保留"+生成更多"占位框。

五、Edge Functions
5.1 functions/api/brief.js
javascriptexport async function onRequest({ request }) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' })， {
      status: 405， headers: { 'Content-Type': 'application/json' }
    });
  }
  const body = await request.json();
  const { projectName， projectType， area， style， goal } = body;
  
  const brief = `
【项目概况】
${projectName}定位为${projectType}项目，规划用地约 ${area} ㎡，整体设计语言遵循"${style}"美学逻辑。

【设计目标】
本项目核心目标为：${goal || '打造高品质城市公共空间'}。围绕这一目标，方案在功能策划、空间序列、植物配置、材料选型四个维度展开系统性设计。

【设计策略】
其一，以人群行为为驱动重组功能分区。其二，引入微气候调节策略，通过乔木阵列、水体降温、铺装透水提升场地全年舒适度。其三，植物配置遵循季相主题原则。其四，材料选型立足耐久性与本土性。

【创新点】
本方案在传统${projectType}设计逻辑基础上，叠加 AI 全流程辅助决策机制，通过 LandscapeFlow AI 工作台完成从踏勘解读到汇报成果的闭环输出。

—— 由 LandscapeFlow AI 自动生成
`.trim();

  return new Response(JSON.stringify({ success: true， brief， timestamp: Date.now() })， {
    headers: { 'Content-Type': 'application/json; charset=utf-8' }
  });
}
5.2 functions/api/cases.js（KV 驱动）
javascriptconst DEFAULT_CASES = [
  { id: 'coast'， name: '滨海景观公园'， tag: '热门'， meta: '12 张幻灯片 · 含平面图 · 含效果图'， img: '/assets/tmpl-coast.jpg' }，
  { id: 'playground'， name: '儿童友好乐园'， tag: '精选'， meta: '10 张幻灯片 · 含色彩方案 · 含设施清单'， img: '/assets/tmpl-playground.jpg' }，
  { id: 'pocket'， name: '城市口袋公园'， tag: null， meta: '14 张幻灯片 · 含功能分析 · 含植物配置'， img: '/assets/tmpl-pocket.jpg' }，
  { id: 'commercial'， name: '商业街区景观'， tag: '新品'， meta: '16 张幻灯片 · 含夜景方案 · 含铺装细节'， img: '/assets/tmpl-commercial.jpg' }，
  { id: 'community'， name: '社区居住景观'， tag: null， meta: '12 张幻灯片 · 含四季变化 · 含灌溉系统'， img: '/assets/tmpl-community.jpg' }，
  { id: 'wetland'， name: '生态湿地修复'， tag: '精选'， meta: '18 张幻灯片 · 含生态分析 · 含水文设计'， img: '/assets/tmpl-wetland.jpg' }
];

export async function onRequest({ request }) {
  // 关键：KV 绑定的变量名是全局变量，不是 env.LANDSCAPE_CASES
  let cases = DEFAULT_CASES;
  let source = 'default';
  
  try {
    if (typeof LANDSCAPE_CASES !== 'undefined') {
      // 强制刷新 KV 为最新数据
      await LANDSCAPE_CASES.put('cases'， JSON.stringify(DEFAULT_CASES));
      const stored = await LANDSCAPE_CASES.get('cases'， 'json');
      if (stored && Array.isArray(stored) && stored.length > 0) {
        cases = stored;
        source = 'kv';
      }
    }
  } catch (e) {
    source = 'fallback';
  }
  
  return new Response(JSON.stringify({ success: true， cases， source， count: cases.length })， {
    status: 200，
    headers: {
      'Content-Type': 'application/json; charset=utf-8'，
      'Access-Control-Allow-Origin': '*'，
      'Cache-Control': 'public， max-age=60'
    }
  });
}
5.3 functions/_middleware.js（CORS + 日志）
javascriptexport async function onRequest({ request， next }) {
  const url = new URL(request.url);
  if (request.method === 'OPTIONS') {
    return new Response(null， {
      headers: {
       
   'Access-Control-Allow-Origin': '*'，
        'Access-Control-Allow-Methods': 'GET， POST， OPTIONS'，
       
   'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  }
  const response = await next();
  if (url.pathname.startsWith('/api')) {
   
   response.headers.set('Access-Control-Allow-Origin'， '*');
   
   response.headers.set('X-Powered-By'， 'LandscapeFlow AI');
  }
  return response;
}

六、视觉素材
请用 AI 文生图工具生成以下 11 张景观图（或用现成的专业景观渲染图），放到 assets/：
Hero + 模板库共用 6 张（1920×1080）：

tmpl-coast.jpg / tmpl-playground.jpg / tmpl-pocket.jpg / tmpl-commercial.jpg / tmpl-community.jpg / tmpl-wetland.jpg

工作台视觉表达 5 张（1920×1080）：

viz-aerial.jpg / viz-plan.jpg / viz-night.jpg / viz-playground.jpg / viz-lawn.jpg


七、前端关键 JS 行为

Hero 轮播：纯 JS 实现 6 张图淡入淡出 + 缓慢 zoom，每 5 秒切换，鼠标 hover 暂停
滚动渐入：所有 .reveal 元素 IntersectionObserver 上浮渐入
导航栏滚动变化：> 40px 时背景 alpha 加深
模板库动态加载：fetch('/api/cases') 后渲染，直接用 c.img 不要加 startsWith 兜底判断
AI 试一下：表单提交时 disable 按钮 + loading + 打字机效果（每 25ms 一字符）


八、KV 绑定（关键步骤）
部署完成后，必须在 EdgeOne Pages 控制台手动完成 KV 绑定：

进入项目 → KV 存储 → 绑定命名空间
变量名：LANDSCAPE_CASES（必须一字不差，对应代码中的全局变量）
命名空间：新建一个，名字随意（如 LANDSCAPE_CASES）
绑定完成后重新部署一次让绑定生效

重要技术点：EdgeOne Pages 的 KV 绑定变量是全局变量，不是 env 对象的属性。代码里访问方式：

✅ typeof LANDSCAPE_CASES !== 'undefined' + LANDSCAPE_CASES.get()
❌ env.LANDSCAPE_CASES.get()（错误，env 里没有这个 key）


九、最终交付
完成所有上述工作后输出：

✅ index.html 7 个区块
✅ workbench.html 6 步 tab（Step 5 视觉表达用本地 viz-* 图）
✅ functions/api/brief.js 能返回项目说明
✅ functions/api/cases.js 能返回 6 条案例（source: kv）
✅ functions/_middleware.js 生效
✅ 11 张景观图就位
✅ 通过 edgeone-pages-skills 部署到 EdgeOne Pages 生产环境
✅ KV 命名空间已在控制台绑定（LANDSCAPE_CASES）
✅ 返回最终公开访问 URL
✅ 浏览器验证：Hero 轮播 / 模板库 6 张景观图 / AI 试用 三个核心交互全部跑通


请现在开始执行。全程不要问问题，遇到技术细节直接调用 edgeone-pages-skills 解决。

```
