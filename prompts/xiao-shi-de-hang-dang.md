# 消失的行当

> **赛道**：Prompt　**作者**：贺玉涵 · [GitHub @fanhua789](https://github.com/fanhua789)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![消失的行当 demo](../assets/demos/xiao-shi-de-hang-dang.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 消失的行当 |
| 赛道 | Prompt |
| 作者 | 贺玉涵 |
| GitHub | [@fanhua789](https://github.com/fanhua789) |

## 📝 作品介绍

作品名称：消失的行当

作品介绍：

「消失的行当」是一部中国正在消失的传统职业影像志网站。以复古电影质感呈现修钢笔、磨剪刀、弹棉花等12个即将消亡的手艺，核心价值在于用数字技术为消逝中的民间技艺留下影像档案。黑白悬停变彩色的视觉对比传达"看见才有温度"，Web Audio 合成每种行当真实音效唤起听觉记忆，时光滑块拖拽对比今昔变迁。适用于文化传承宣传、非遗教育展示、公益传播等场景。亮点功能包括：12种合成音效、城市手艺人地图、传承报名表单。记录不是为了缅怀，而是为了不让它们真的消失。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
**# 消失的行当 — 中国传统职业影像志**

**## 项目概述**
创建一个「消失的行当」主题精美网页，记录中国正在消失的传统职业。整体复古电影质感，黑白主色调配金色点缀，采用 EdgeOne Pages 部署，使用 Edge Functions + KV Storage 丰富站点功能。Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

**## 视觉风格**

**### 色彩体系**
- 主色调：黑白为主（#0a0a0a 背景, #e8e0d0 前景文字）
- 强调色：金色（#c9a84c 主色, #d4b85c 亮色, #9a7a30 暗色）
- 辅助色：暖灰（#8a8275 次要文字, #6b6560 底层文字, #333333 边框）
- 卡片背景：#151515
- 表面背景：#1a1a1a

**### 字体**
- 主字体：Noto Serif SC（中文宋体，契合传统手艺主题）
- Google Fonts 引入：`https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;500;600;700&display=swap`

**### 特效**
1. ****胶片颗粒质感****：全局 film-grain 动画，用 SVG feTurbulence 滤镜生成噪点纹理，8秒循环 steps(10)
2. ****暗角效果****：radial-gradient 从中心透明到边缘半透明黑色
3. ****金色流光标题****：gold-shimmer 渐变动画，200% background-size 循环平移 6秒
4. ****滚动提示****：scroll-hint 2秒循环的上下浮动动画
5. ****翻页进入动效****：perspective(1200px) rotateY 从-90度到0度

**### 渐变**
- hero*_overlay: `linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.95) 100%)`*
*- gold_*shimmer: `linear-gradient(135deg, #9a7a30 0%, #c9a84c 50%, #d4b85c 100%)`
- card*_overlay: `linear-gradient(to bottom, transparent 0%, rgba(10,10,10,0.85) 100%)`*
*- vignette: `radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)`*

*### 阴影*
*- card: `0 4px 20px rgba(0,0,0,0.5)`*
*- card_*hover: `0 12px 40px rgba(0,0,0,0.7)`
- gold*_glow: `0 0 30px rgba(201,168,76,0.3)`*

*## 图片资源*

*### 图片生成方式*
*所有图片使用 AI 图像生成（如混元文生图），为每个行当单独生成匹配内容的图片。图片尺寸 768x1024（竖版），用于卡片、详情和时光对比。*

*### 图片 Prompt 参考（每个行当对应）*
*1. 修钢笔：`Close-up of an elderly Chinese craftsman repairing fountain pens at a wooden desk, magnifying glass, small metal tools, warm lamplight, vintage documentary photography style, black and white with subtle warm tones, film grain, shallow depth of field, portrait orientation`*
*2. 磨剪刀：`An old Chinese knife sharpener sitting on a long wooden bench, grinding scissors on a whetstone, sparks flying, water pot nearby, traditional Chinese alleyway, vintage documentary photography, black and white with warm highlights, film grain texture`*
*3. 弹棉花：`A Chinese cotton fluffer using a traditional bow to fluff cotton for making quilts, white cotton fibers floating in air, warm indoor light, vintage documentary style, black and white with warm golden highlights, film grain`*
*4. 捏面人：`A Chinese dough figurine artist shaping colorful dough into animal characters, small hands working intricately, surrounded by children watching, traditional Chinese market, vintage documentary photography, warm tones, film grain`*
*5. 配钥匙：`A Chinese key maker operating a manual key cutting machine at a small street stall, rows of blank keys hanging, old neighborhood, vintage documentary photography style, black and white with metallic silver highlights, film grain`*
*6. 修鞋：`An old Chinese cobbler sitting on a small stool mending leather shoes with needle and thread, shoe hammer and tools scattered around, traditional Chinese street corner, vintage documentary photography, warm earthy tones, film grain`*
*7. 爆米花：`A Chinese street vendor with a black iron popcorn machine, children gathered around covering ears expecting the bang, steam rising, traditional Chinese alley, vintage documentary photography, warm golden light, film grain texture`*
*8. 皮影：`A Chinese shadow puppetry master performing behind a lit white screen, intricate leather shadow puppets raised by sticks, warm amber light, traditional theater setting, vintage documentary photography, rich warm tones, film grain`*
*9. 剃头匠：`An old Chinese barber using a straight razor to shave a man's face, steaming towel on the side, small mirror and tools, traditional Chinese street barbershop, vintage documentary photography, silver steel and white steam highlights, film grain`*
*10. 补锅：`A Chinese pot mender hammering a metal patch onto a cast iron wok, small charcoal furnace glowing red, traditional Chinese courtyard, vintage documentary photography, deep black and iron tones with glowing red fire, film grain`*
*11. 刻章：`A Chinese seal engraver carving characters into a stone seal with a small knife, stone dust on the workbench, red seal paste nearby, traditional shop interior, vintage documentary photography, stone gray and red seal ink highlights, film grain`*
*12. 糖画：`A Chinese sugar painting artist pouring golden syrup onto a marble slab creating a dragon shape, children watching eagerly, warm golden caramel light, traditional Chinese festival, vintage documentary photography, golden amber highlights, film grain`*

*### 首屏背景图*
*`A cinematic wide shot of an old Chinese traditional crafts street at dusk, multiple artisans working at their stalls - a barber, a cobbler, a key maker, warm lantern light glowing, cobblestone alley, atmospheric fog, vintage documentary photography style, predominantly dark with warm golden light pools, heavy film grain, dark vignette, 16:9 cinematic composition` (1280x720)*

*### 封面图*
*`A cinematic vintage poster cover image for a Chinese documentary project called 'Vanishing Trades'. The scene shows a dimly lit traditional Chinese workshop with an elderly craftsman's weathered hands working on a traditional craft, surrounded by old tools and warm lantern light. The background fades into darkness with subtle film grain texture. A golden decorative Chinese calligraphy title area at the top. The color palette is predominantly black and white with selective golden warm highlights on the craftsman's hands, tools, and a single lantern. Dark vignette around the edges. The mood is nostalgic, reverent, and documentary-style. Traditional Chinese aesthetic with film photography quality.` (1280x720)*

*### 图片存储结构*
frontend/public/images/ ├── hero/ │ └── background.jpg # 首屏背景 (1280x720) ├── cards/ # 12个行当卡片图 (768x1024) │ ├── xiugangbi.jpg │ ├── modaodao.jpg │ └── ... (共12个) ├── detail/ # 12个行当详情大图 (768x1024) │ ├── xiugangbi.jpg │ └── ... (共12个) ├── timeline/ # 12个行当时光对比图 (768x1024) │ ├── xiugangbi-old.jpg │ ├── xiugangbi-now.jpg │ └── ... (共24个) └── cover.png # 封面图 (1280x720)

### 图片引用方式

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

代码中使用本地路径引用，如：
- 卡片：`/images/cards/${trade.id}.jpg`
- 详情：`/images/detail/${trade.id}.jpg`
- 时光对比：`/images/timeline/${trade.id}-old.jpg` 和 `-now.jpg`
- 首屏：`/images/hero/background.jpg`

## 音效系统

### 实现方式
使用 Web Audio API 合成音效，无需外部音频文件。每个行当有独立的音效生成函数。

### 音效清单（12种）
1. **修钢笔**：金属轻敲 + 细微刮擦声（高频 sine 波 + highpass 滤波噪音）
2. **磨剪刀**：磨石摩擦声（bandpass 滤波噪音，频率递增模拟磨刀节奏）
3. **弹棉花**：弓弦振动声（sawtooth 波从180Hz滑到60Hz + lowpass 滤波）
4. **捏面人**：面团揉捏声（lowpass 滤波噪音，短促脉冲）
5. **配钥匙**：机器转动 + 切割火星声（方波低频马达 + 高频锯齿波火花）
6. **修鞋**：锤钉声 + 皮革吱嘎声（sine 波频率速降模拟锤击 + bandpass 噪音）
7. **爆米花**：转动声 + 砰爆炸声（渐进 sine 波 + 白噪音突然爆发 + lowpass 衰减）
8. **皮影**：锣鼓声（sine 波锣声从600Hz衰减 + 低频鼓点节奏）
9. **剃头匠**：剃刀刮擦声 + 金属轻鸣（highpass 噪音刮擦 + 高频 sine 波余音）
10. **补锅**：铁锤敲击声 + 铁砧回响（triangle 波频率速降 + 长尾 sine 波共振）
11. **刻章**：石刻声（bandpass 高频噪音短促脉冲 + 偶尔 stone tap）
12. **糖画**：糖浆浇注声 + 滋滋声（lowpass 噪音渐入渐出 + 低频 sine 波冒泡声）

### 音效代码结构
```typescript
// hooks/use-trade-sound.ts
const soundGenerators: Record<string, SoundGenerator> = {
  xiugangbi(ctx: AudioContext) { /* 修钢笔音效实现 */ },
  modaodao(ctx: AudioContext) { /* 磨剪刀音效实现 */ },
  // ... 共12个
};

export function playTradeSound(tradeId: string) {
  // 创建或复用 AudioContext，调用对应的 generator
}
**音效触发时机**
- **卡片悬停**：鼠标进入卡片时自动播放一次，鼠标离开后重置（可再次触发）
- **详情弹窗**：点击播放按钮手动触发，按钮显示 3 个竖条动画表示播放中
**页面结构（****7****个区域）**
**1. ****首屏**** Hero**
- 全屏沉浸式背景图（grayscale + contrast + brightness 滤镜处理）
- 视差滚动效果（scrollY * 0.3 的 translateY）
- 大标题"消失的行当"，使用 gold-shimmer 流光效果
- 副标题"有些手艺，再不看就真的没了"
- 统计数据：12个行当 / 28位手艺人 / 15座城市
- 底部 SCROLL 向下滚动提示动画
- 暗角覆盖层
**2. ****行当展示区**
- 标题"正在消失的手艺"，金色流光
- 4列网格布局（移动端2列），12个职业卡片
- 卡片交互：
- 默认：黑白照片（filter: grayscale(1) contrast(1.1)）
- 悬停：渐变彩色（filter: sepia(0.1) saturate(1.3) contrast(1.05)），0.8秒过渡
- 悬停：微放大 scale(1.05)，0.4秒过渡
- 悬停：金色边框出现（rgba(201,168,76,0.6)），金色光晕
- 悬停：展开描述文字（高度动画）
- 悬停：自动播放该行当音效（仅播放一次，离开重置）
- 左上角显示序号（01-12），悬停变金色
- 点击卡片打开详情弹窗
- 底部访问计数器
**3. ****匠人故事详情（弹窗）**
- 翻页动效进入（rotateY 从-90到0度，0.5秒）
- 左右布局：左侧照片（3:4比例），右侧文字
- 左侧照片：sepia(0.3) + 暗角覆盖 + 金色右边线 + 底部副标题标签
- 右侧内容：
- 金色流光大标题（行当名称）
- 拉丁副标题
- 金色分割线
- 200-300字口语化故事文案，两端对齐
- 音效播放按钮（点击播放该行当合成音效 + 显示3竖条波形动画）
- 城市定位标签（MapPin 图标）
- 关闭按钮：X图标，金色边框圆形按钮
- 半透明背景遮罩，点击关闭
**4. ****城市地图区**
- 标题"寻访手艺人"，金色流光
- SVG 简化中国地图轮廓，金色描边（rgba(201,168,76,0.25)）
- 15个城市标注点：
- 金色发光圆点（r=3.5，带径向渐变光晕 r=12）
- 城市名文字标签
- 悬停显示 tooltip（城市名 + 行当 + 手艺人数量）
- 底部三个统计数字：记录城市(15) / 追踪行当(12) / 记录手艺人(28)
**5. ****时光对比区**
- 标题"时光对照"，金色流光
- 左右箭头切换行当（带淡入动画）
- 16:9比例对比容器：
- 底层："现在"照片（sepia(0.2) + 降对比度 + 降亮度）
- 上层："十年前"照片（sepia(0.5) + 高对比度），宽度由滑块控制
- 中间：1px 金色竖线 + 圆形拖拽手柄（金色渐变 + 光晕阴影）
- 标签：左上"十年前"（金色），右上"现在"（灰色）
- 全区域 range input 叠加层（透明，cursor: ew-resize）
- 下方双列描述：十年前 vs 现在的对比文案
**6. ****传承计划区**
- 标题"传承计划"，金色流光
- 深色卡片容器，金色边框，四角装饰
- Heart 图标 + "我想学习这门手艺"标题
- 表单字段：行当下拉选择、姓名、电话、金色渐变提交按钮
- 提交后：金色流光"感谢您的关注"确认信息，3秒后恢复
- 表单 POST 到 /api/heritage Edge Function
**7. ****页脚**
- slogan"记录不是为了缅怀，而是为了不让它们真的消失"（金色流光大标题）
- 金色分割线 + 说明段落
- 12个行当名称标签（灰色小标签横排）
- 底线：项目名 + "Powered by EdgeOne Pages"
**浮动元素**
- 右下角固定"下载素材包"按钮（金色渐变，悬停上浮 + 光晕加深）
**12****个行当数据**

| 序号 | ID | 名称 | 副标题 | 城市 | 坐标 |
| --- | --- | --- | --- | --- | --- |
| 01 | xiugangbi | 修钢笔 | 笔尖上的书写记忆 | 北京 | [116.4, 39.9] |
| 02 | modaodao | 磨剪刀 | 磨刀霍霍的街巷回响 | 天津 | [117.2, 39.1] |
| 03 | tanmianhua | 弹棉花 | 弓弦震出的温暖被褥 | 杭州 | [120.2, 30.3] |
| 04 | niemianren | 捏面人 | 指尖上的百态人生 | 济南 | [117.0, 36.7] |
| 05 | peiyaoshi | 配钥匙 | 齿轮间的小城安全感 | 成都 | [104.1, 30.6] |
| 06 | xiuxie | 修鞋 | 补丁里的节俭哲学 | 武汉 | [114.3, 30.6] |
| 07 | baomihua | 爆米花 | 砰一声的童年期盼 | 沈阳 | [123.4, 41.8] |
| 08 | piying | 皮影 | 光与影的千年剧场 | 西安 | [108.9, 34.3] |
| 09 | titoujiang | 剃头匠 | 一把剃刀的江湖规矩 | 南京 | [118.8, 32.1] |
| 10 | buguo | 补锅 | 叮叮当当的补丁美学 | 长沙 | [112.9, 28.2] |
| 11 | kezhang | 刻章 | 方寸之间的名印天下 | 苏州 | [120.6, 31.3] |
| 12 | tanghua | 糖画 | 一勺糖浆的甜蜜艺术 | 重庆 | [106.5, 29.6] |

每个行当数据字段：id, name, subtitle, description(一句话), story(200-300字口语化故事), soundLabel(音效标签文字), city, cityCoords, imageAlt(英文图片描述), colorHint, decadeOld(十年前描述), decadeNow(现在描述)
**技术栈**
**前端**
- React + TypeScript + Vite
- Tailwind CSS v4（注意 v4 语法差异：grow 替代 flex-grow, shadow-xs 替代 shadow-sm 等）
- Framer Motion 动画库
- lucide-react 图标库
- shadcn/ui 组件库
- Web Audio API（音效合成，无需音频文件）
**动画系统（三层动画，缺一不可）**
- **App ****层**：AnimatedRoutes 包裹 Routes，mode="popLayout" 页面切换动画
- **Route ****层**：PageTransition 包裹每个页面组件
- **页面内层**：MotionPrimitives 的 FadeIn / Stagger / HoverLift
- Hero/标题区域 -> FadeIn
- 列表/网格 -> Stagger + fadeUp variants
- 卡片/交互元素 -> HoverLift
**音效系统**
- Web Audio API 合成音效，零外部依赖
- 每个行当独立 AudioContext + oscillator/filter/gain 节点链
- hooks/use-trade-sound.ts 导出 playTradeSound(tradeId) 函数
- 卡片悬停自动触发（useRef 防重复），详情页按钮手动触发
**EdgeOne Pages**
- **Edge Functions**（V8 运行时，不用 Node.js 内置模块）：
- /api/visit.js - 访问计数器（KV Storage 读写）
- /api/heritage.js - 表单提交处理（POST，KV Storage 写入）
- **KV Storage**：
- 命名空间变量名：vanishing_kv
- KV 是全局变量，NOT context.env
- 用法：await vanishing_kv.get('key'), await vanishing_kv.put('key', value)
- **CORS**：Edge Functions 需手动处理 CORS headers 和 OPTIONS 请求
**项目目录结构**
frontend/src/
├── App.tsx                    # 路由配置
├── index.css                  # Tailwind v4 + 自定义动画 + 设计系统变量
├── main.tsx                   # 入口
├── components/
│   ├── AnimatedRoutes.tsx      # 页面切换动画
│   ├── MotionPrimitives.tsx    # FadeIn / Stagger / HoverLift / variants
│   ├── PageTransition.tsx      # 页面过渡
│   ├── ui/                     # shadcn/ui 组件
│   └── trades/
│       ├── Hero.tsx            # 首屏沉浸式
│       ├── TradeCard.tsx       # 行当卡片（黑白→彩色悬停 + 悬停音效）
│       ├── TradeDetail.tsx     # 匠人故事详情弹窗（播放按钮音效）
│       ├── ChinaMap.tsx        # 城市地图 SVG
│       ├── TimelineCompare.tsx # 时光对比滑块
│       ├── HeritageForm.tsx    # 传承计划表单
│       └── Footer.tsx          # 页脚
├── data/
│   └── trades.ts              # 12个行当完整数据
├── hooks/
│   └── use-trade-sound.ts     # Web Audio API 音效合成
└── pages/
    └── Index.tsx               # 主页面（整合所有组件 + 浮动下载按钮）

frontend/public/
├── images/                     # AI 生成的匹配图片（本地存储）
│   ├── hero/background.jpg
│   ├── cards/{id}.jpg (x12)
│   ├── detail/{id}.jpg (x12)
│   ├── timeline/{id}-old.jpg (x12)
│   ├── timeline/{id}-now.jpg (x12)
│   └── cover.png
├── vanishing-trades-assets.zip # 资源打包下载
└── favicon.svg

edge-functions/api/
├── visit.js                    # 访问计数 Edge Function
└── heritage.js                 # 表单提交 Edge Function

edgeone.json                    # 构建配置
**交互细节**
- **卡片悬停**：filter 从 grayscale(1) 过渡到 sepia(0.1) saturate(1.3)，0.8秒 cubic-bezier；自动播放音效（useRef 防重入）
- **详情进入**：rotateY 从-90度到0度，0.5秒，perspective(1200px)
- **详情退出**：rotateY 到90度 + opacity 0 + scale 0.9
- **音效播放**：点击播放按钮触发 playTradeSound()，3个竖条高度循环动画 0.6秒周期
- **地图**** tooltip**：opacity + y 位移，0.2秒过渡
- **表单提交**：scale 0.9->1 弹入确认信息，3秒后恢复
- **滑块对比**：range input 控制上层图片宽度百分比，手柄跟随
**关键规则**
- 禁止 Unicode Emoji，全部用 lucide-react 图标
- 每个 Route 必须有 data-genie-key 和 data-genie-title 属性
- Header/Footer 在 AnimatedRoutes 外部
- 渐变用 style 属性（非 Tailwind 类）
- Tailwind v4 语法：用 grow 不用 flex-grow，shadow-xs 不用 shadow-sm
- Edge Functions 用 V8 运行时，不用 Node.js 模块，Response.json() 不可用
- KV 是全局变量，不在 context.env 上
- 每个组件不超过200行，复杂状态提取到自定义 Hook
- 图片必须本地存储于 frontend/public/images/，代码用相对路径引用
- 音效用 Web Audio API 合成，不依赖外部音频文件

````
