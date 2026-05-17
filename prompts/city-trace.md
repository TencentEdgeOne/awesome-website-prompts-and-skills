# 城迹 City Trace

> **赛道**：Prompt　**作者**：qinxin · [GitHub @qinxin111](https://github.com/qinxin111)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![城迹 City Trace cover](../assets/demos/city-trace.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/city-trace.gif" alt="城迹 City Trace demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 城迹 City Trace |
| 赛道 | Prompt |
| 作者 | qinxin |
| GitHub | [@qinxin111](https://github.com/qinxin111) |

## 📝 作品介绍

城迹 City Trace
《城迹 City Trace》是一套可复现 Prompt 生成的现代中国城市文化图谱。作品以中国色为视觉系统，结合 7 城摄影、Three.js 动态城市模型、景点/景区/美食/街道/公园/花海资料层，并接入 Edge Functions 与 KV 访问计数，展示 Prompt 从审美规范到可上线网站的完整能力。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

Build and deploy a single-page website called "城迹 (City Trace)" using React + Vite + TypeScript + Tailwind CSS + shadcn/ui + lucide-react + framer-motion + Three.js.

GOAL
Create a premium modern Chinese city exploration website for 7 iconic Chinese cities:
杭州 Hangzhou， 苏州 Suzhou， 徽州 Huizhou， 西安 Xi'an， 成都 Chengdu， 重庆 Chongqing， 深圳 Shenzhen.

The final website should feel like a contemporary Chinese culture atlas:
- calm， editorial， premium
- photography-first
- China-color driven
- interactive and spatial
- modern Chinese， not old-fashioned
- culturally resonant without using cliche traditional motifs
- stable and polished enough to be shared as a public challenge entry

Creative reference:
Apple China New Year campaign x Guanxia x luxury travel editorial x Chinese-color atlas x interactive museum installation.

This is NOT:
- a generic travel booking website
- an ink-wash painting website
- a Chinese restaurant aesthetic
- a loud tourism brochure
- a standard Tailwind template
- a placeholder demo

The website must use EdgeOne Pages product abilities:
- Edge Functions for lightweight APIs
- KV Storage for visit count and city popularity state
- deployment through EdgeOne Pages

CORE EXPERIENCE
The first impression must win in a screenshot.

Design a full-screen opening experience where large modern Chinese typography， pale editorial photography， cinnabar red， muted gold， and generous whitespace create a strong visual memory.

The core interaction is a horizontal city gallery: each city is a full-viewport editorial slide with a live animated city model and a curated cultural dossier. Users can move through cities using:
- city navigation
- click on city cards
- left/right arrow buttons
- keyboard arrow keys
- mouse drag or touch swipe
- bottom dot navigation

The page must work beautifully at 390px， 768px， 1024px， and 1440px.

STYLE CONTROL PRINCIPLE
Do not let the AI randomly choose a generic "Chinese style". Use this exact art direction:
- main style: modern Chinese cultural atlas
- layout voice: museum exhibition map， premium city magazine， interactive spatial model
- color voice: 中国色配色， named and shown in UI
- interaction voice: calm exploration， not gamified tourism
- content voice: specific places and local life， not vague slogans

ASSET STRATEGY
Prefer AI-generated city photography assets. Do not rely on random placeholder services such as picsum or loremflickr in the final result.

Generate or source a coherent set of 14 images:
- 7 hero images， 1920x1080
- 7 thumbnail images， 400x500

Save generated images under:
public/images/city-trace/

Naming:
- hangzhou-hero.jpg， hangzhou-thumb.jpg
- suzhou-hero.jpg， suzhou-thumb.jpg
- huizhou-hero.jpg， huizhou-thumb.jpg
- xian-hero.jpg， xian-thumb.jpg
- chengdu-hero.jpg， chengdu-thumb.jpg
- chongqing-hero.jpg， chongqing-thumb.jpg
- shenzhen-hero.jpg， shenzhen-thumb.jpg

Global image style prompt:
"modern Chinese city photography， low saturation， clean editorial composition， soft natural light， premium travel magazine， no text， no logo， no watermark， realistic architecture and atmosphere， restrained color grading， generous negative space"

City-specific image direction:
- Hangzhou: West Lake， lakeside architecture， misty garden bridge， celadon green tone
- Suzhou: classical garden， water pavilion， canal reflection， jade green tone
- Huizhou: Hongcun style village， white walls and black tiles， stone lane， ink gray tone
- Xi'an: ancient city wall or Giant Wild Goose Pagoda， ochre gold tone， historic scale
- Chengdu: tea house street， relaxed urban life， warm cinnabar accent， no cartoon style
- Chongqing: layered mountain city， night architecture， Hongya Cave or river skyline， warm brown and dark ink tone
- Shenzhen: bay skyline， glass towers， sea and mountain， steel blue tone

If AI image generation is unavailable， use high-quality public city photography with stable URLs and make sure every image is actually relevant to its city. Never ship unrelated random images.

BRAND SYSTEM
Brand Chinese name: 城迹
Brand English name: City Trace
Tagline: 一座城，一个时代，一种气质
English tagline: One city， one era， one spirit
Design philosophy: 东方的骨骼，现代的外衣

Color tokens:
- --background: #FFFCF2
- --foreground: #2B2118
- --primary: #B83B2D
- --primary-dark: #8F2F25
- --accent-gold: #D6A84F
- --accent-ink: #2E2A24
- --accent-teal: #2F6F5E
- --accent-stone: #8C7B63
- --card: #FFFCF2
- --border: rgba(46，42，36，0.10)

Named China colors that must appear in the interface:
- 朱砂 #B83B2D
- 黛青 #3D4543
- 松花绿 #496A4F
- 群青 #1F6F8B
- 赤金 #D6A84F
- 藕荷 #C9A7AA
- 玉色 #D8E7D2

City accent colors:
- 杭州 #2F6F5E
- 苏州 #496A4F
- 徽州 #3D4543
- 西安 #A35D38
- 成都 #B83B2D
- 重庆 #8F3B2F
- 深圳 #1F6F8B

Fonts:
- Prefer local system Chinese fonts for speed and China accessibility:
  Microsoft YaHei UI， PingFang SC， Hiragino Sans GB， system sans
- Use a Chinese serif fallback only for short poetic details:
  SimSun， STSong， serif
- Do not depend on Google Fonts in production

DESIGN LANGUAGE
Use:
- large Chinese title typography
- editorial whitespace
- pale full-bleed photography
- seal-stamp style red badges
- vertical city names
- thin gold dividers
- dot/line/grid decorations inspired by Song Dynasty book layout
- subtle frosted glass panels
- restrained fade-up and slide-in animation

Avoid:
- auspicious cloud patterns
- dragon/phoenix motifs
- antique scrolls
- calligraphy flourishes
- heavy ink-wash backgrounds
- neon cyberpunk except a subtle Chongqing interpretation
- decorative elements that cause layout instability

SITE STRUCTURE
Build exactly these sections in this order.

1. Fixed Navbar
- left: vertical "城迹" logo and red seal badge
- center: city links separated by dots on desktop
- right: "开始探索" CTA
- mobile: hamburger menu
- active city link highlights during the city slide section
- CTA scrolls to city overview

2. Hero
- full viewport height
- auto-rotating pale city photography background every 5-6 seconds
- giant centered title: 城迹
- subtitle: 一座城，一个时代，一种气质
- city spirit microline under CTA， e.g. HANGZHOU / 湖山 · 宋韵
- right-side vertical city names on desktop
- bottom scroll indicator
- no card around the hero text

3. City Overview
- section label: 选择一座城市
- 7 image cards
- desktop: 7 equal columns if width allows
- tablet: 3 columns
- mobile: 2 columns， last item aligned naturally
- each card includes image， city name， English name， spirit badge
- clicking a card jumps to the corresponding horizontal slide

4. City Horizontal Gallery
- full-viewport slide area
- default first slide visible immediately; do not show a blank placeholder state
- smooth horizontal transition
- support drag， touch swipe， keyboard arrows， dot navigation， and visible arrow controls
- each city slide should have a distinctive but consistent editorial layout
- each city slide must include a live Three.js city model
- the model is abstract but city-specific， not a generic rotating cube
- the model must animate slowly and remain nonblank on desktop and mobile

Each city slide must include:
- city name， English name， spirit， poem， tags， description
- city statistics: 古称， 特产， 地标， 人物
- a visible 中国色谱 with 3 named color swatches and usage notes
- a live dynamic city model
- six detailed content sections: 景点， 景区， 美食， 街道， 公园， 花海

Dynamic city model rules:
- use Three.js WebGL
- no external 3D files are required
- generate procedural geometry from data
- use terrain types such as water， garden， mountain， wall， basin， river， bay
- use city-specific elements:
  pagoda， tower， garden， mountain， bridge， street， flower， park， gate， skyscraper
- show route chips like 西湖水线， 平江水巷， 长安轴线， 深圳湾线
- keep the camera wide enough that landmarks are not clipped
- no console errors or deprecation warnings

City slide content:
Hangzhou
- spirit: 湖山 · 宋韵
- poem: 最忆是杭州
- tags: 西湖， 龙井， 丝绸
- description: 西湖边的千年美学。杭州不是一座都市，而是一首被水浸润的诗。从南宋的烟雨到当代的极简，这座城市教会了世界什么叫「留白」。
- layout: left text， right image

Suzhou
- spirit: 园林 · 精致
- poem: 君到姑苏见
- tags: 拙政园， 昆曲， 苏绣
- description: 园林里的当代生活。苏州把「精致」刻进骨子里。一座园林是一部哲学，一针苏绣是一幅山水，古园旁的玻璃幕墙让时间并置。
- layout: image first， text below on desktop variation

Huizhou
- spirit: 黑白 · 沉静
- poem: 一生痴绝处
- tags: 白墙黛瓦， 徽墨， 黄山
- description: 黑白之间的居住哲学。徽州人把审美建在墙上，白墙黛瓦、天井院落，是东方语境里的极简主义。
- layout: left image， right text

Xi'an
- spirit: 大唐 · 气魄
- poem: 春风得意马蹄疾
- tags: 古城， 丝路， 兵马俑
- description: 十三朝古都的厚重，被西安活成一种底气。城墙根下的咖啡、钟楼旁的设计空间，让盛世精神换了件现代外衣。
- layout: left text， right image

Chengdu
- spirit: 烟火 · 松弛
- poem: 晓看红湿处
- tags: 熊猫， 茶， 火锅
- description: 成都是把「安逸」当成城市文化的地方。茶馆、公园、火锅和慢节奏，在这里构成一种极具当代吸引力的生活美学。
- layout: right text， left image

Chongqing
- spirit: 立体 · 热烈
- poem: 曾经沧海难为水
- tags: 山城， 洪崖洞， 赛博
- description: 重庆是一座没有平面的城市。轻轨穿楼而过，灯火沿山势垂落，现实本身就带着东方赛博的戏剧性。
- layout: full image overlay with readable text panel

Shenzhen
- spirit: 先锋 · 未来
- poem: 面朝大海，春暖花开
- tags: 科技， 山海， 创新
- description: 四十年前的小渔村，今天成为中国最年轻的一线城市。深圳相信可能性，山海之间的玻璃之城让未来提前抵达。
- layout: left text， right image

City detail examples:
- Hangzhou 景点: 西湖十景， 雷峰塔; 景区: 灵隐飞来峰， 西溪湿地; 美食: 龙井虾仁， 片儿川; 街道: 南宋御街， 河坊街; 公园: 太子湾公园， 柳浪闻莺; 花海: 太子湾郁金香， 满觉陇桂花
- Suzhou 景点: 拙政园， 虎丘; 景区: 留园， 山塘街; 美食: 松鼠桂鱼， 苏式面; 街道: 平江路， 十全街; 公园: 金鸡湖， 上方山; 花海: 上方山百花节， 阳澄湖莲花岛
- Huizhou 景点: 宏村， 西递; 景区: 黄山， 呈坎; 美食: 臭鳜鱼， 毛豆腐; 街道: 屯溪老街， 黎阳老街; 公园: 新安江滨水， 木坑竹海; 花海: 歙县油菜花， 石潭花海
- Xi'an 景点: 兵马俑， 大雁塔; 景区: 西安城墙， 华清宫; 美食: 羊肉泡馍， 肉夹馍; 街道: 回民街， 大唐不夜城; 公园: 曲江池， 兴庆宫; 花海: 青龙寺樱花， 汉城湖花带
- Chengdu 景点: 熊猫基地， 武侯祠; 景区: 都江堰， 青城山; 美食: 火锅， 钟水饺; 街道: 宽窄巷子， 玉林路; 公园: 人民公园， 麓湖; 花海: 三圣花乡， 漫花庄园
- Chongqing 景点: 洪崖洞， 李子坝轻轨; 景区: 武隆喀斯特， 长江索道; 美食: 重庆火锅， 重庆小面; 街道: 山城步道， 十八梯; 公园: 南山一棵树， 鹅岭公园; 花海: 广阳岛花田， 铁山坪花径
- Shenzhen 景点: 深圳湾公园， 平安金融中心; 景区: 大鹏所城， 梧桐山; 美食: 粤式早茶， 潮汕牛肉火锅; 街道: 华强北， 南头古城; 公园: 莲花山， 人才公园; 花海: 莲花山簕杜鹃， 香蜜公园花境

5. City Data Archive
- dark ink background #2C2C2A
- table or responsive cards comparing all 7 cities
- fields: 古称， 特产， 地标， 名人， 文化影响力指数
- include a minimal horizontal bar visualization
- include visit count: 已有 XXX 人探索
- powered by EdgeOne KV

6. Footer
- brand slogan: 用现代设计，讲东方故事
- city links jump back to city slides
- contact/social placeholders
- copyright: © 2026 城迹 · City Trace
- clean white background with a thin muted gold divider

DATA MODEL
Create a typed city data model:

interface CityData {
  slug: string;
  name: string;
  englishName: string;
  spirit: string;
  poem: string;
  tags: string[];
  description: string;
  accentColor: string;
  gradientFrom: string;
  gradientTo: string;
  heroImage: string;
  thumbnail: string;
  layout: 'left-text' | 'right-text' | 'top-text' | 'full-overlay';
  chinaColors: {
    name: string;
    hex: string;
    usage: string;
  }[];
  model: {
    title: string;
    terrain: 'water' | 'garden' | 'mountain' | 'wall' | 'basin' | 'river' | 'bay';
    accent: string;
    routes: string[];
    elements: {
      kind: 'pagoda' | 'tower' | 'garden' | 'mountain' | 'bridge' | 'street' | 'flower' | 'park' | 'gate' | 'skyscraper';
      label: string;
      x: number;
      z: number;
      height: number;
      color: string;
    }[];
  };
  details: {
    category: '景点' | '景区' | '美食' | '街道' | '公园' | '花海';
    items: { name: string; note: string }[];
  }[];
  stats: {
    ancientName: string;
    specialty: string;
    landmark: string;
    notableFigure: string;
    influenceIndex: number;
  };
}

FRONTEND ARCHITECTURE
Create these files:

src/components/Navbar.tsx
src/components/Hero.tsx
src/components/CityOverview.tsx
src/components/CitySlide.tsx
src/components/CityPage.tsx
src/components/CityModel.tsx
src/components/CityComparison.tsx
src/components/Footer.tsx
src/components/ui/SealBadge.tsx
src/components/ui/FramedImage.tsx
src/components/ui/VerticalDivider.tsx
src/components/ui/SectionLabel.tsx
src/components/ui/GlassCard.tsx
src/components/ui/DotNavigation.tsx
src/data/cities.ts
src/lib/utils.ts

EDGE FUNCTIONS
Create these EdgeOne Pages Edge Functions:

edge-functions/api/cities.js
- GET /api/cities
- returns all city data as JSON

edge-functions/api/cities/[slug].js
- GET /api/cities/:slug
- returns one city
- 404 for unknown slug

edge-functions/api/visits.js
- GET /api/visits returns { "count": number }
- POST /api/visits increments KV key "visit_count" and returns { "count": number， "message": "Visit recorded" }
- if KV is not configured locally， gracefully fallback to a default count

edge-functions/api/health.js
- GET /api/health returns { "ok": true， "timestamp": string }

KV KEYS
- visit_count: total visits
- city_popularity:{slug}: optional per-city click count

API RULES
- frontend fetches /api/visits only in production or handles local 404 quietly
- city data should be available from local fallback if Edge Functions are unavailable
- no visible error state for failed visit counter

ACCESSIBILITY AND QUALITY
- semantic HTML5
- accessible alt text for all city images
- keyboard navigable controls
- visible focus states
- no text overlap
- no horizontal overflow
- no broken image icons
- no random off-topic placeholder images
- no cards inside cards
- stable aspect ratios for cards， slides， controls， and tables
- animations should be restrained; no bounce except a subtle scroll indicator

RESPONSIVE CHECKS
Before deployment， verify:
- 390px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

At every size:
- title fits
- nav works
- city cards are visible
- horizontal slide controls are reachable
- data table scrolls or adapts on mobile
- footer city links work

LOCAL VERIFICATION
Run:
npm install
npm run build
npm run lint
npm run dev

Also verify:
- no console errors
- /api/health responds after EdgeOne deployment
- /api/visits responds after EdgeOne deployment
- hero image fallback works
- click city card -> corresponding city slide
- left/right keyboard arrows change city slide
- dot navigation changes city slide

DEPLOYMENT
After local verification， deploy to EdgeOne Pages using the installed EdgeOne Pages skill.
Before login， ask whether to use China site or Global site if needed.
Return the final public access URL.

FINAL QUALITY BAR
The final website should look like:
- a premium contemporary Chinese brand site
- a city-themed design magazine
- a refined cultural portfolio
- screenshot-worthy in the first viewport
- usable and stable， not just decorative

The Prompt itself should be kept with the project as:
prompts/city-trace-prompts-track-final.md

```
