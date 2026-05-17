# 山海经异兽档案馆

> **赛道**：Prompt　**作者**：深夜程序员
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![山海经异兽档案馆 demo](../assets/demos/shan-hai-jing-yi-shou-dang-an-guan.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 山海经异兽档案馆 |
| 赛道 | Prompt |
| 作者 | 深夜程序员 |

## 📝 作品介绍

《山海经异兽档案馆》是一座沉浸式数字神话展馆。作品以黑漆博物馆、青铜展签、异兽档案墙、山海地图和今日观展签为核心，把《山海经》异兽转译成可浏览、可比较、可截图传播的在线展陈，适合文化创意、数字展览和社媒传播场景。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# Master Prompt V2

This prompt is reverse-engineered from the current `山海经异兽档案馆` implementation. It is intended for the WorkBuddy x EdgeOne Prompts track.

## Core Answer

Prompt can reproduce this type of website if it is written as a production brief， not as a short creative sentence. It can reliably reproduce:

- Site structure and section order.
- Visual system: black lacquer， oxidized bronze， aged jade， bone ivory， cinnabar.
- Archive card data model and interactions.
- Responsive layout rules.
- Edge Functions and KV API shape.
- Fallback behavior when assets or KV are unavailable.

Prompt alone cannot guarantee the same high-quality beast images unless the prompt also asks the builder to create or import consistent assets. Therefore， the generated website should support two modes:

- Use provided assets from `/assets`.
- Fall back to CSS/SVG specimen cards when assets are missing.

## Copyable Prompt

```text
Build a production-ready single-page website named 《山海经异兽档案馆》 / Archive of Shanhai Beasts.

Install and use:
https://github.com/TencentEdgeOne/edgeone-pages-skills

Deploy the final project to EdgeOne Pages and output the public URL.

Project intent:
Create a dark， immersive digital mythology museum for the WorkBuddy x EdgeOne Prompts & Skills challenge. The site must feel like a curated exhibition， not a SaaS landing page， not a fantasy game page， and not a random AI image collage.

Visual direction:
- Black lacquer museum space.
- Oxidized bronze borders and labels.
- Aged jade highlights.
- Bone ivory typography.
- Small cinnabar seal accents.
- Restrained fog， atlas lines， archival grids， and specimen-card framing.
- Use Chinese serif display typography for titles and clean sans-serif for body copy.
- Avoid purple/blue AI gradients， cheap fantasy fire， excessive gold glow， fake calligraphy， unreadable ancient text， and broken AI text inside images.

Technical stack:
- Vite or static HTML if dependency installation is unstable.
- TypeScript/JavaScript.
- CSS with strong responsive rules.
- EdgeOne Pages Edge Functions.
- EdgeOne Pages KV Storage with graceful fallback.

Required sections:
1. Sticky museum navbar with logo， nav links， and daily visitor-ticket CTA.
2. Hero: large title 《山海经异兽档案馆》， dark museum background， Zhulong-style beast presence， two CTAs.
3. Data strip: 09 beasts， 05 regions， 03 interactive visitor tickets， visitor count.
4. Curator intro: `古籍入柜，异兽归档`， with cards for 古籍采样 / 标本秩序 / 观展印记.
5. Beast archive wall with exactly 9 cards.
6. Featured specimen section with switcher for 烛龙 / 帝江 / 九尾狐.
7. Mythic atlas section with five regions and filtering.
8. Daily seal ticket with visitor-facing labels such as 今日异兽 / 盖章投票 / 在线印记. Do not show endpoint names， KV names， fallback labels， or debug wording on the visible page.
9. Restoration lab showing the production method as exhibition language: 古籍采样 / 标本建模 / 观展盖章 / 出馆归档. Keep technical implementation details in README or dev notes， not in the visitor-facing cards.
10. Poster wall with three concrete share-card compositions， not placeholders.

Beast data:
Use exactly these nine entries with id， name， archiveNo， epithet， domain， riskLevel， element， shortDescription， curatorNote， visualMotif， region， seal:

1. zhulong / 烛龙 / S-001 / 昼夜之眼 / 极北幽境 / 极高 / 时间 / 光 / 以目启昼，以息召夜，像一枚悬在古老地平线上的时间之眼。 / 它不是单纯的巨兽，而是一种关于昼夜秩序的古老想象。展签以环形日月纹、赤色眼光和低频呼吸表现时间的开合。 / 巨眼、赤色微光、环形日月纹 / 北山经 / 昼
2. dijiang / 帝江 / S-002 / 混沌之音 / 西荒深处 / 未定 / 声音 / 空间 / 无面而能歌，像一团仍未被命名的原初回声。 / 帝江的档案避免具象面孔，转而使用鼓膜状轮廓和环形声波，让未知成为它的主要形态。 / 六足、无面、鼓膜状轮廓 / 西山经 / 混
3. jiuweihu / 九尾狐 / S-003 / 九重回声 / 青丘 / 高 / 预兆 / 魅影 / 九尾如九条未完成的道路，每一次回望都像命运的分岔。 / 这里的九尾狐不走媚俗叙事，而以冷白眼光、玉色尾影和分岔路径表现预兆感。 / 九尾、冷白眼光、玉色尾焰 / 东山经 / 青
4. bifang / 毕方 / S-004 / 单足火兆 / 南方燥林 / 高 / 火 / 灾兆 / 单足而立，火意随羽纹蔓延，是灾变前最安静的信号。 / 毕方的火不是大面积火焰，而是藏在羽纹和足迹里的微弱朱砂线索。 / 单足鸟形、克制火纹、朱砂足迹 / 南山经 / 火
5. yingzhao / 英招 / S-005 / 翼影巡官 / 昆仑边界 / 中 / 守护 / 风 / 介于兽、马与鸟之间，像一名巡视边界的古老守卫。 / 它的展陈强调边界感：翼、马身、青铜护甲和巡线构成一套守护秩序。 / 翼、马身、青铜护甲感 / 中山经 / 巡
6. chenghuang / 乘黄 / S-006 / 风之坐骑 / 东方旷野 / 低 / 风 / 远行 / 它的出现像一段通往远方的路，被古人写进速度与寿命的想象。 / 乘黄被处理成更轻的标本，风纹、长尾和低饱和古玉光形成移动感。 / 长尾、风纹、柔和古玉光 / 东山经 / 行
7. xuangui / 旋龟 / S-007 / 水下回响 / 黑水之滨 / 中 / 水 / 声 / 甲纹如古老河道，低鸣时像木石相击的回声。 / 旋龟适合以甲纹和水文线表现，保持安静、低频、沉入展柜底部的气质。 / 龟甲、河流等高线、低频声波 / 北山经 / 水
8. qiongqi / 穷奇 / S-008 / 逆德之兽 / 西北荒原 / 极高 / 逆行 / 警示 / 它不是单纯的凶兽，而是一枚关于秩序崩坏的警告标本。 / 穷奇的视觉需要尖锐但不浮夸，警示红只作为标本风险标签出现。 / 兽形、锐角、警示红点 / 西山经 / 逆
9. qitu / 鵸鵌 / S-009 / 三首不祥 / 山阴密林 / 中高 / 鸟兆 / 预警 / 三首各望一方，像同时监听过去、现在与将来的暗哨。 / 三首结构容易失控，展陈应以简化剪影和细线预警标记控制复杂度。 / 三首鸟形、暗羽、细线预警标记 / 南山经 / 兆

Asset behavior:
- Prefer these paths when available:
  - /assets/hero/zhulong-hero.png
  - /assets/beasts/zhulong.png
  - /assets/beasts/zhulong-card.png
  - /assets/beasts/dijiang.png
  - /assets/beasts/jiuweihu.png
  - /assets/beasts/jiuweihu-card-v4.png
  - /assets/beasts/bifang.png
  - /assets/beasts/yingzhao.png
  - /assets/beasts/chenghuang.png
  - /assets/beasts/xuangui.png
  - /assets/beasts/xuangui-card-v4.png
  - /assets/beasts/qiongqi.png
  - /assets/beasts/qitu.png
- Archive cards may use card-specific square crops.
- Drawer and featured views should use full specimen images.
- Never let a missing image break layout; use CSS/SVG specimen fallback.

Interactions:
- Smooth anchor navigation.
- Mobile menu closes after clicking a link and must not cover page titles.
- Archive cards open a centered detail drawer with close button and Escape support.
- Card opening should feel like the selected specimen expands into the drawer.
- Featured specimen switcher updates art and copy.
- Atlas buttons filter beasts by region.
- Daily ticket fetches `/api/daily-beast` and vote button posts to `/api/beast-vote`.
- Visible page copy must stay curatorial. Avoid user-facing text such as `Edge live`， `Fallback mode`， `daily-beast`， `beast-vote`， `edge-functions/api`， `KV`， or deployment/debug messages.

Edge Functions:
- GET /api/health returns ok status.
- GET /api/daily-beast returns date， beast， visitorSeal， visitorCount， message， fallback.
- POST /api/beast-vote accepts `{ "beastId": "zhulong" }`， validates id， increments KV count， and returns votes.
- KV binding should be named `SHANHAI_KV`.
- If KV is unavailable， return safe fallback data and keep the page usable.

Responsive acceptance:
- 390px: no horizontal scroll; mobile menu does not cover Hero; archive cards become compact list cards; drawer fits viewport.
- 768px: two-column grids where useful.
- 1024px+: three-column archive wall.
- 1440px: content remains inside max-width containers.

Final quality bar:
- No placeholder stars or lorem ipsum.
- No broken images.
- No console-critical errors.
- Build passes.
- Local API works.
- EdgeOne deployment URL is returned.
- Include a short verification summary.
```

````
