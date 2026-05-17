# 云轴 CloudScroll

> **赛道**：Prompt　**作者**：kevin · [GitHub @kevin](https://github.com/kevin)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![云轴 CloudScroll demo](../assets/demos/cloudscroll.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/cloudscroll.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 云轴 CloudScroll |
| 赛道 | Prompt |
| 作者 | kevin |
| GitHub | [@kevin](https://github.com/kevin) |

## 📝 作品介绍

「云轴 CloudScroll」是一款沉浸式文章阅读产品，核心体验是「让文字像电影一样流动」。通过全屏翻页、自动播放、5种电影级转场动效（闪切/推入/爆闪/旋转缩放/粒子消散），重新定义长文阅读方式。同时利用 EdgeOne Pages Edge Functions + KV 实现文章点赞计数，前后端一体化运行在边缘节点。适用于深度阅读场景，帮助知识工作者找回阅读仪式感。零框架依赖，EdgeOne Pages 秒开。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# 云轴 CloudScroll — 沉浸式文章阅读体验

> 参赛赛道：Prompts 赛道
> 作品类型：纯前端展示站 + EdgeOne Pages 全栈增强

---

## 核心指令（必须包含）

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

---

## 一、目标

创建一个名为「云轴 CloudScroll」的沉浸式文章阅读产品落地页。核心体验是**让文字像电影一样流动**——通过全屏翻页、自动播放、电影级转场动效，重新定义长文阅读方式。

目标用户：喜欢深度阅读、追求阅读仪式感的互联网从业者、创作者、知识工作者。

---

## 二、资产

**视觉资产**：
- 封面图：使用 picsum.photos 或 Unsplash 作为示例占位图，实际部署可替换为真实图片
- 字体：Google Fonts CDN（Noto Serif SC / Noto Sans SC）
- 粒子背景：Canvas 2D 实时生成，无外置图片依赖
- 噪点纹理：SVG Data URI 内嵌，无需外部资源

**内容资产**：
- 预置 2 篇示例文章（`articles.js`）：
  - 《赛博养宠随记：让人又喜又气的大龙虾》— AI Agent 思考
  - 《GDC 2026 见闻录》— 游戏开发者大会观察
- 每篇文章按「页」结构化，支持通过 URL 参数 `?id=xxx` 切换

---

## 三、品牌调性

- **风格关键词**：克制、温润、电影感、纸质书质感、东方美学
- **色彩体系**：暖白底（#faf8f5）+ 墨黑字（#1c1c1e）+ 点缀紫灰（#4a3f6b）
- **字体搭配**：Noto Serif SC（标题，衬线体营造书卷气）+ Noto Sans SC（正文，无衬线保证可读性）
- **情绪温度**：安静、专注、有仪式感，像翻开一本精心排版的纸质杂志

---

## 四、技术栈

- HTML5 + CSS3（原生，不依赖框架，保证轻量）
- Google Fonts（Noto Serif SC / Noto Sans SC）
- 原生 JavaScript（无框架依赖）
- **EdgeOne Pages 静态托管** + **EdgeOne Pages Edge Functions** + **KV 存储**
- **EdgeOne Pages 部署**

---

## 五、页面结构

### 页面 1：品牌首页（index.html）

**Hero 区域**：
- 全屏高度，垂直居中
- 大标题「云轴」+ 副标题「CloudScroll — 沉浸式阅读」
- 一句话定位文案：「让文字像电影一样流动。全屏翻页，自动播放，重新定义文章阅读。」
- 底部向下滚动提示（ subtle 的箭头动画）
- 背景：微妙的噪点纹理 + 缓慢漂散的粒子光点（Canvas 实现）

**作品展示区**：
- 2 张文章卡片横向排列（桌面端）/ 纵向堆叠（移动端）
- 每张卡片包含：封面图、文章标题、作者、摘要
- 卡片 hover 时轻微上浮 + 阴影加深

**Footer**：
- 极简版权信息
- 返回顶部按钮

### 页面 2：文章阅读页（article.html?id=xxx）

**核心交互——全屏翻页系统**：
- 整页按屏幕高度切分为多个「幻灯片」区域
- 支持键盘（↑↓方向键）、滚轮、触摸滑动翻页
- 当前页自动高亮，其他页淡入/淡出
- 进度条（顶部细线）+ 页码指示器（右侧圆点）
- 底部控制栏：上一页 / 下一页 / 自动播放开关 / 页码显示 / 点赞按钮

**单页内容结构**（每页）：
- 渐变背景（每页不同暖色调渐变）
- 装饰性大数字页码（极低透明度，作为背景层）
- 内容层：标签（tag）→ 主标题（h1）→ 副标题（h2）→ 正文（body）→ 高亮句（highlight）→ 引用（quote）→ 小字注（sub）

**转场动效**（5 种可选）：
1. flash-cut：白色闪切
2. push-in：缩放推入
3. burst-flash：中心爆闪光
4. zoom-rotate：旋转缩放入场
5. particle-dissolve：粒子消散（Canvas 实现）

**文字入场动效**（4 种可选）：
1. blur-clear：模糊渐显
2. explode-pop：缩放爆裂入场
3. word-fly-in：逐词飞入（标题直接静态显示，避免动画错乱）
4. keyword-zoom：关键词逐字放大

**分享功能**：右上角分享按钮，支持 Web Share API / 剪贴板复制链接

---

## 六、EdgeOne Pages 全栈增强

### Edge Functions + KV 点赞系统

在文章阅读页底部控制台集成「点赞」按钮：
- **GET /api/like?id=xxx**：读取指定文章的当前点赞数（从 KV 查询）
- **POST /api/like?id=xxx**：为指定文章点赞 +1（写入 KV）
- **前端交互**：点击按钮后心形图标闪烁变红，数字实时更新，无需刷新页面

**KV 绑定说明**：部署前需在 EdgeOne Pages 控制台绑定 KV namespace，变量名：`CLOUDSCROLL_KV`。

### 技术优势

- **纯静态 + 边缘计算结合**：前端零框架，后端零服务器，全部运行在 EdgeOne Pages 边缘节点
- **全球低延迟**：点赞 API 响应来自最近的边缘节点，KV 数据全球同步
- **成本极低**：静态托管免费 + Edge Function 按调用计费，适合个人项目

---

## 七、布局约束

- **响应式**：桌面端（>640px）与移动端自适应
- **最大内容宽度**：720px，居中
- **安全边距**：两侧 6vw（移动端 7vw）
- **字体层级**：
  - h1: clamp(2.2rem， 6.5vw， 4.8rem)，font-weight: 900
  - h2: clamp(0.9rem， 2vw， 1.25rem)，font-weight: 300
  - body: clamp(1rem， 1.8vw， 1.15rem)，line-height: 2.1
  - highlight: clamp(1.05rem， 2.2vw， 1.4rem)，font-weight: 700
- **所有动画必须使用 `transform` 和 `opacity`**，避免触发重排，保证 60fps

---

## 八、特殊要求

1. **性能优先**：单 HTML 文件 + 单 JS 数据文件，无构建工具依赖，确保 EdgeOne Pages 秒开
2. **可复现的文章数据**：使用独立 `articles.js` 存储文章数据，格式为 JSON，支持通过 URL 参数 `?id=xxx` 切换文章
3. **预置 2 篇示例文章**：一篇关于 AI Agent 的思考（龙虾隐喻），一篇关于 GDC 大会的观察
4. **自动播放**：默认开启，每 4 秒自动翻页，最后一页停止
5. **进度记忆**：阅读进度实时反映在顶部进度条和右侧页码指示器
6. **标题静态显示**：所有页面的大标题（h1）不使用动画，直接静态显示，保证稳定性和可读性
7. **Edge Function 降级**：若 KV 未绑定或网络异常，点赞按钮静默失败，不影响阅读体验

---

## 九、文件结构

```
/
├── index.html                # 品牌首页
├── article.html              # 文章阅读页（含点赞交互）
├── articles.js               # 文章数据（2篇示例）
├── functions/
│   └── api/
│       └── like.js           # Edge Function：点赞计数（GET/POST）
├── PROMPT.md                 # 本 Prompt 文件
└── README.md                 # 部署与使用说明
```

---

## 十、部署要求

1. 所有文件上传至 EdgeOne Pages
2. 在控制台绑定 KV namespace（变量名：`CLOUDSCROLL_KV`）
3. 获得永久公开访问链接（非临时预览链接）
4. 支持自定义域名绑定（可选）

---

*本作品为原创设计，专注解决「长文阅读体验枯燥」的痛点，通过全屏翻页 + 电影级转场 + 自动播放 + EdgeOne Pages 全栈能力，让深度阅读成为一种享受。*

````
