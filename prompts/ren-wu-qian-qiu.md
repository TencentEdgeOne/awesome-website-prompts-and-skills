# 人物千秋

> **赛道**：Prompt　**作者**：振一 · [GitHub @lzymmmm-droid](https://github.com/lzymmmm-droid)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![人物千秋 cover](../assets/demos/ren-wu-qian-qiu.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/ren-wu-qian-qiu.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 人物千秋 |
| 赛道 | Prompt |
| 作者 | 振一 |
| GitHub | [@lzymmmm-droid](https://github.com/lzymmmm-droid) |

## 📝 作品介绍

人物千秋——沉浸式 AI 历史名人生成器。融合博物馆级暗色美学与 AI 生成概念，打造穿越五千年文明的数字人文体验。核心亮点：①首屏 AI 搜索式交互，六位历史人物一键探索；②七大板块叙事结构，从人物志到时代长廊层层深入；③ EdgeOne Pages 原生能力，8 个 Edge Functions API 提供数据服务。适用于文化机构数字展陈、教育场景历史教学、个人用户文化探索。填补 EdgeOne 案例库历史人文类空白，以青铜绿、天青、琥珀金构建独特视觉识别。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# 人物千秋 — AI名人生成器沉浸式展示站

## 参赛信息
- **赛道**: Prompts赛道
- **作品名称**: 人物千秋 (Renwu Qianqiu)
- **主题**: AI历史名人生成器沉浸式展示站
- **差异化定位**: 博物馆级暗色叙事 + AI生成概念演示，非电商/非SaaS的纯文化展示体验

---

## STEP 0: 前置依赖

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

---

## STEP 1: GOAL — 目标定义

Create a premium historical figure digital showcase called **人物千秋 (Renwu Qianqiu)** — an AI-powered Historical Figure Generator concept demo.

**情感氛围锚点** (6个关键词):
- 幽远 (secluded) · 庄重 (solemn) · 温润 (warm-lustrous) · 苍古 (ancient) · 气韵 (spirit-rhyme) · 静思 (contemplation)

**否定边界** (明确排除):
- ❌ generic landing page
- ❌ SaaS product demo
- ❌ fashion campaign collage
- ❌ modern minimalist white background
- ❌ bright colorful tech aesthetic
- ❌ Wikipedia clone

**核心理念**:
> 把一座历史人物博物馆搬到网页上——李白飘逸的诗仙气质、苏轼豁达的东坡风骨、诸葛亮鞠躬尽瘁的忠义、王阳明心学的深邃思辨，通过电影级视觉叙事呈现。输入名字，AI即刻生成。这不是百科，不是模板，你是在与千年前的灵魂对话。

---

## STEP 2: BRAND RULES — 品牌规范

| 维度 | 内容 |
|------|------|
| **品牌名** | 人物千秋 (Renwu Qianqiu) |
| **副标题** | AI名人生成器 |
| **Slogan** | 穿越时空，对话先贤 |

### 色彩体系 (CSS Variables)

```css
:root {
  /* 背景层 - 博物馆级幽暗 */
  --background: 220 25% 8%;           /* #0F1419 深青黑 */
  --background-secondary: 200 20% 12%; /* #182025 次级背景 */
  
  /* 文字层 - 温润象牙 */
  --foreground: 40 20% 94%;          /* #F0EDE8 暖象牙白 */
  --foreground-muted: 40 15% 70%;     /* #B5A99A 柔光灰 */
  
  /* 主题色 - 历史人物专属色系 */
  --bronze-green: 75 25% 35%;         /* #5B6B4D 青铜古韵 */
  --ru-blue: 195 45% 55%;              /* #5BA3C4 青瓷天青 */
  --dunhuang-gold: 42 60% 55%;         /* #C9A04E 琥珀流金 */
  --cinnabar: 8 55% 45%;               /* #A85A4D 朱砂印痕 */
  --jade-white: 90 15% 88%;            /* #DCE3D8 玉白 */
  
  /* 交互色 */
  --primary: 195 45% 55%;              /* 天青为主色 */
  --primary-foreground: 220 25% 8%;
  --accent: 42 60% 55%;                /* 琥珀金为点缀 */
}
```

### 字体系统

| 用途 | 字体 | 说明 |
|------|------|------|
| **中文标题** | Noto Serif SC (思源宋体) | 700 weight， 历史厚重感 |
| **中文正文** | Noto Sans SC (思源黑体) | 300-400 weight， 温润阅读 |
| **英文标题** | Cormorant Garamond | serif， italic， 优雅古典 |
| **英文正文** | Inter | 300-400 weight， 现代清晰 |
| **装饰字体** | ZCOOL XiaoWei | 书法感标签、印章效果 |

Tailwind配置:
```javascript
fontFamily: {
  'heading-zh': ['Noto Serif SC'， 'serif']，
  'body-zh': ['Noto Sans SC'， 'sans-serif']，
  'heading-en': ['Cormorant Garamond'， 'serif']，
  'body-en': ['Inter'， 'sans-serif']，
  'calligraphy': ['ZCOOL XiaoWei'， 'cursive']，
}
```

---

## STEP 3: TECH STACK — 技术栈

```
React + Vite + TypeScript + Tailwind CSS (v3) + shadcn/ui
+ framer-motion (克制动画)
+ lucide-react (图标：Search， Sparkles， Feather， Quote， Globe， Clock)
+ EdgeOne Pages Edge Functions (后端API)
```

**必须使用的EdgeOne能力**:
- Edge Functions (后端数据)
- KV Storage (轻量缓存)

---

## STEP 4: GLASS COMPONENTS — 玻璃态组件

### 组件1: 玻璃卡片 (artifact-glass)
```css
.artifact-glass {
  background: rgba(255， 255， 255， 0.03);
  backdrop-filter: blur(12px) saturate(110%);
  border: 1px solid rgba(255， 255， 255， 0.06);
  box-shadow:
    inset 0 1px 0 rgba(255， 255， 255， 0.05)，
    0 20px 50px rgba(0， 0， 0， 0.4);
  border-radius: 4px;
}
```

### 组件2: 强玻璃态 (artifact-glass-strong)
```css
.artifact-glass-strong {
  background: rgba(255， 255， 255， 0.06);
  backdrop-filter: blur(16px) saturate(120%);
  border: 1px solid rgba(255， 255， 255， 0.12);
  box-shadow:
    inset 0 1px 0 rgba(255， 255， 255， 0.08)，
    0 25px 60px rgba(0， 0， 0， 0.5);
}
```

### 组件3: 印章效果 (seal-mark)
```css
.seal-mark {
  font-family: 'ZCOOL XiaoWei'， cursive;
  color: var(--cinnabar);
  border: 2px solid var(--cinnabar);
  border-radius: 2px;
  padding: 0.5rem 1rem;
  transform: rotate(-5deg);
  opacity: 0.85;
}
```

---

## STEP 5: NON-NEGOTIABLE LAYOUT RULES — 不可协商的布局规则

### 禁止项 (8条)
1. ❌ overlapping collage layouts
2. ❌ floating image clusters
3. ❌ negative margins for decorative offset
4. ❌ staggered text/image misalignment
5. ❌ sticky split editorial panels
6. ❌ freeform magazine-style composition
7. ❌ text drifting outside wrapper
8. ❌ cards breaking grid alignment

### 布局参数表

| 参数 | 值 | 说明 |
|------|-----|------|
| max-width | 1440px | 大屏展示 |
| section padding | py-24 → md:py-32 | 呼吸感 |
| horizontal padding | px-6 → md:px-12 | 响应式 |
| centering | mx-auto | 居中 |

### 网格规则

| 区域 | mobile | tablet | desktop |
|------|--------|--------|---------|
| 人物卡片 | 1 col | 2 col | 4 col |
| 时代长廊 | 1 col | — | 7 col |
| AI功能 | 1 col | 2 col | 2 col |
| 统计数据 | 2 col | — | 4 col |
| 千古绝响 | 1 col | 2 col | 3 col |

### 比例规则
- 人物卡片: 3:4 (竖向突出人物气质)
- AI生成预览: 自由适配

### 响应式断点
- 390px (mobile)
- 768px (tablet)
- 1024px (desktop)
- 1440px (large)

**终极优先级**:
> **If artistic direction conflicts with layout stability， choose layout stability.**

---

## STEP 6: SITE STRUCTURE — 6大板块结构

### Section 1: FIXED NAVBAR (固定导航)

**结构**:
- 左: 品牌标识 "人物千秋" + HISTORY FIGURES 副标题
- 中: 导航 pill — 首页 / 人物志 / AI生成 / 关于
- 右: CTA "随机一位"

**交互**:
- 透明顶部 → 滚动后 artifact-glass-strong 模糊效果

### Section 2: HERO (首屏) — AI搜索体验

**视觉**:
- min-h-screen 全屏
- 背景: 深色渐变 + 3个浮动光晕（琥珀金/天青/朱砂），30s缓动呼吸动画
- 遮罩: vignette暗角

**内容**:
- Badge: "AI名人生成器" (seal-mark)
- Headline: "穿越时空，对话先贤" + 英文副标
- **搜索输入框**: 居中，透明玻璃态，icon为Sparkles，placeholder="输入历史人物名称..."
- **快速按钮**: 6个预置人物（李白、苏轼、诸葛亮、王阳明、武则天、杜甫），胶囊按钮

**动画序列**:
1. 背景fade-in (1s)
2. Badge从上方滑入 (0.6s， delay 0.3s)
3. Headline逐字淡入 (0.8s， delay 0.5s)
4. Subtext fade-up (0.6s， delay 0.7s)
5. 搜索框fade-up (0.5s， delay 0.9s)
6. 快速按钮stagger入场 (0.4s each， delay 1.2s)

**动效参数**:
- Easing: [0.22， 1， 0.36， 1] (cubic-bezier，克制优雅)
- No bounce， no elastic

### Section 3: FEATURED FIGURES (人物志)

**4位代表历史人物** (每张卡片含):
- 高清图片 (3:4比例， Unsplash)
- 时代标签 (如"盛唐") + 称号标签 (如"诗仙")
- 人物名 + 一句话评价
- 标签云 (如：诗人·浪漫主义·盛唐气象)
- "查看详情" 箭头按钮

**具体人物数据**:
1. **李白** (盛唐)
   - 称号: 诗仙
   - 描述: "笔落惊风雨，诗成泣鬼神。一生放浪不羁，留下千首绝唱。"
   - 标签: 诗人/浪漫主义/盛唐气象
   
2. **苏轼** (北宋)
   - 称号: 东坡居士
   - 描述: "大江东去，浪淘尽千古风流人物。诗词书画，无一不精。"
   - 标签: 文人/词人/美食家/书画家
   
3. **诸葛亮** (三国)
   - 称号: 卧龙先生
   - 描述: "鞠躬尽瘁，死而后已。三分天下的智谋，千古传颂的忠诚。"
   - 标签: 谋士/政治家/军事家
   
4. **王阳明** (明代)
   - 称号: 阳明先生
   - 描述: "知行合一，致良知。心学集大成者，立德立功立言三不朽。"
   - 标签: 哲学家/教育家/军事家

**交互**:
- 卡片hover: 上浮 (translateY -8px) + 阴影加深
- 图片hover: 微zoom (scale 1.05)
- 点击打开详情

### Section 4: TIMELINE OF GREATS (时代长廊)

**布局**: 水平时间线 (desktop) / 垂直堆叠 (mobile)

**7个时代节点**:
| 时代 | 时期 | 代表人物 | 代表色 |
|------|------|----------|--------|
| 先秦 | 前770-前221 | 老子、孔子、屈原 | bronze-green |
| 秦汉 | 前221-220 | 秦始皇、司马迁、张衡 | cinnabar |
| 魏晋 | 220-420 | 曹操、陶渊明、王羲之 | jade-white |
| 隋唐 | 581-907 | 李白、杜甫、武则天 | dunhuang-gold |
| 宋代 | 960-1279 | 苏轼、李清照、岳飞 | ru-blue |
| 元代 | 1271-1368 | 关汉卿、赵孟頫 | bronze-green |
| 明清 | 1368-1912 | 王阳明、郑成功、曹雪芹 | cinnabar |

### Section 5: AI GENERATION SHOWCASE (AI生成展示)

**布局**: 左右分栏 (左文右图)

**左侧**:
- Badge: "AI-Powered Generation"
- Headline: "AI生成人物档案" ("AI"有渐变效果)
- 描述: 4行说明AI名人生成器的能力
- 4个功能卡片 (2×2网格):
  - 生平叙事 (Feather图标): AI自动梳理人物生平
  - 名句摘录 (Quote图标): 提取核心著作与经典名句
  - 历史评价 (Globe图标): 整合后世评价与当代研究
  - 时代关联 (Clock图标): 关联同时代人物与事件

**右侧 (AI输出预览)**:
- 顶部: AI生成示例标签 + "输入「李白」的完整输出" + "← 尝试其他人物"
- 主体: 李白的AI生成内容预览
  - 姓名 + 生卒年
  - 字号 + 简介
  - 两个数据卡片: 传世诗篇(1000+) / 生平岁月(61年)
- 整体风格: artifact-glass-strong

### Section 6: STATS — 数据统计

**4项统计**:
| 数字 | 标签 | 说明 |
|------|------|------|
| 5000+ | 位历史人物 | 从先秦到近代 |
| 200+ | 个历史朝代 | 跨越五千年文明 |
| 10000+ | 条经典名句 | 含背景解读 |
| 50万+ | 次AI生成 | 累计生成量 |

### Section 7: QUOTES — 千古绝响

**3条千古名句**:
1. "天生我材必有用，千金散尽还复来。" — 李白《将进酒》
2. "人生到处知何似，应似飞鸿踏雪泥。" — 苏轼《和子由渑池怀旧》
3. "知行合一，致良知。心即理也。" — 王阳明《传习录》

### Section 8: CLOSING CTA + FOOTER

**CTA区**:
- 背景: 山水画局部 + 强遮罩
- Headline: "开启你的历史之旅"
- Subtext: "输入一个名字，了解一段历史"
- 双CTA: "浏览全部人物" / "随机探索一位"

**Footer**:
- 左: 品牌名 + 版权 "© 2026 人物千秋"
- 中: 快速链接 (关于我们 / 人物库 / 隐私政策 / 使用条款)
- 右: 社交图标 (BookOpen / Search / MapPin)

---

## STEP 7: EDGE FUNCTIONS — 后端API

### API端点清单

| 端点 | 方法 | 功能 |
|------|------|------|
| `/api/figures` | GET | 获取人物列表 (支持filter: dynasty， category) |
| `/api/figures/:id` | GET | 获取单个人物详情 |
| `/api/dynasties` | GET | 获取朝代列表 |
| `/api/figures/random` | GET | 获取随机人物 |
| `/api/stats` | GET | 获取统计数据 |
| `/api/quotes` | GET | 获取名句列表 |
| `/api/search` | GET | AI智能搜索人物 (query参数) |
| `/api/health` | GET | 健康检查 |

### 数据格式示例

**Figure (人物)**

```json
{
  "id": "li-bai"，
  "name": "李白"，
  "nameEn": "Li Bai"，
  "era": "盛唐"，
  "eraEn": "High Tang"，
  "birthYear": 701，
  "deathYear": 762，
  "title": "诗仙"，
  "description": "唐代伟大的浪漫主义诗人..."，
  "biography": "字太白，号青莲居士..."，
  "image": "..."，
  "tags": ["诗人"， "浪漫主义"]，
  "achievements": ["存世诗文千余篇"， "开创唐诗巅峰"]，
  "quotes": ["天生我材必有用..."]，
  "relatedFigures": ["杜甫"， "孟浩然"]
}
```

---

## STEP 8: ANIMATION SPECIFICATIONS — 动画规范

### 入场动画

| 元素 | 动画 | 参数 |
|------|------|------|
| 背景 | fade-in | duration: 1s， ease: ease-out |
| Badge | slideDown + fade | y: -20→0， duration: 0.6s， delay: 0.3s |
| Headline | fade-up | y: 40→0， duration: 0.8s， delay: 0.5s |
| Subtext | fade-up | y: 30→0， duration: 0.6s， delay: 0.7s |
| 搜索框 | fade-up | y: 20→0， duration: 0.5s， delay: 1s |
| 快速按钮 | stagger | y: 20→0， duration: 0.4s， stagger: 0.08s |
| 卡片 | stagger fade-up | y: 60→0， duration: 0.5s， stagger: 0.1s |

### Hover动画

| 元素 | 效果 | 参数 |
|------|------|------|
| 卡片 | 上浮 + 阴影加深 | translateY: -8px， duration: 0.3s |
| 按钮 | 发光 + 缩放 | scale: 1.02， duration: 0.2s |
| 图片 | 微zoom | scale: 1.05， duration: 0.4s |
| 快速按钮 | 边框发光 | hover: bg-artifact-ru-blue/10 + border-color change |

### Easing

```javascript
const easing = {
  smooth: [0.22， 1， 0.36， 1]，
  snappy: [0.4， 0， 0.2， 1]，
  gentle: [0.25， 0.1， 0.25， 1]，
}
```

**禁止**: bounce， elastic， 任何过度夸张的动画

---

## STEP 9: IMPLEMENTATION NOTES — 实现说明

### 必须使用

1. **EdgeOne Pages Skill**: 部署前必须引用 https://github.com/TencentEdgeOne/edgeone-pages-skills
2. **中文字体**: 必须加载 Noto Serif SC 和 Noto Sans SC
3. **响应式**: 必须在390/768/1024/1440四个断点测试
4. **无障碍**: 必须支持 prefers-reduced-motion
5. **搜索输入**: 搜索框必须带Sparkles图标，表示AI能力
6. **预置人物**: 必须包含6个快速按钮（李白/苏轼/诸葛亮/王阳明/武则天/杜甫）

### 部署前检查清单

- [ ] 所有图片有fallback处理
- [ ] 响应式布局在四个断点正常
- [ ] 动画支持prefers-reduced-motion
- [ ] Edge Functions正常工作
- [ ] 字体正确加载
- [ ] 无控制台错误
- [ ] 搜索输入框状态管理正常
- [ ] 快速按钮点击触发生成体验

---

## STEP 10: FINAL QUALITY BAR — 最终质量标准

### 禁止成为

- ❌ generic biography website
- ❌ Wikipedia clone
- ❌ bright e-commerce catalog
- ❌ modern tech startup aesthetic
- ❌ museum website generic template

### 应该成为

- ✅ AI-powered historical figure showcase
- ✅ immersive museum-grade experience
- ✅ dark · solemn · lustrous · contemplative
- ✅ structurally stable across screen sizes
- ✅ culturally authentic and visually stunning
- ✅ a digital sanctuary for the greats of history

---

## 作品差异化说明

### 为什么这是独特的?

官方案例库中**零个历史人文类作品**——全部是电商、SaaS、AI工具、旅行等商业场景。

**人物千秋**填补了这个空白:
- 不是百科，是沉浸式文化体验
- 不是工具，是精神空间
- 不是现代明亮，是博物馆级幽暗
- 不是通用香槟金，是青铜绿、天青、琥珀金
- **核心创新**: 以AI名人生成器为概念，将Prompt的生成能力可视化

**视觉参考**:
- 故宫博物院数字文物库
- 大英博物馆官网
- 卢浮宫线上展厅
- 博物馆级暗色调叙事

**技术亮点**:
- AI搜索式首屏体验 (搜索框 + 快速预置人物)
- 玻璃态UI系统
- 中文书法字体系统
- 人物专属色彩体系
- 时代长廊交互时间线
- AI生成内容预览面板

---

## DELIVERABLES — 交付物

1. **完整React项目代码** (TypeScript) — `/renwu-qianqiu/`
2. **部署到EdgeOne Pages的公开链接**
3. **Prompt文本** (本文件) — `/renwu-qianqiu-prompt.md`
4. **作品说明** (README.md)

---

*Created for EdgeOne × WorkBuddy Prompts & Skills Challenge*
*参赛赛道: Prompts赛道*
*作品名称: 人物千秋 (Renwu Qianqiu)*

````
