# 鲤上元

> **赛道**：Prompt　**作者**：杨舒恒
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![鲤上元 demo](../assets/demos/li-shang-yuan.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/li-shang-yuan.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 鲤上元 |
| 赛道 | Prompt |
| 作者 | 杨舒恒 |

## 📝 作品介绍

《鲤上元》— 上元灯节数字互动体验

本作品以中国元宵节为创作主题，构建了一个沉浸式的数字互动网页，融合六大主题场景——鱼龙灯会、庙会夜市、花灯祈福、非遗展陈、百变花灯、巡游盛况——将传统节日的璀璨与热闹浓缩于方寸屏幕之中。

核心技术亮点包括：开场全屏动态视频加载页，营造身临其境的第一印象；背景音乐跨页面无缝衔接，点击场景图标即可沉浸探索；响应式设计适配手机与桌面端，流畅呈现古典水墨与现代极简交融的视觉风格；本地存储音乐播放状态，确保页面跳转不中断沉浸体验。

适用于文化遗产数字化展示、传统节日主题宣传及互动型线上展览场景。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
鲤上元 - 元宵节专题网页项目
项目概述
鲤上元是一个展示泉州元宵节文化特色的专题网页，包含6个章节，讲述宋元泉州的繁华盛景。

参考地址: https://lynnhou.github.io/lishangyuan/

技术栈
HTML5 + CSS3 + 原生 JavaScript（ES6+），无框架依赖。使用 HTML5 video/audio 标签，localStorage 实现音乐播放状态跨页面持久化。

项目结构
鲤上元/
├── index.html          # 首页（加载页 + 入口）
├── pages/
│   ├── bazaar.html     # 卷一：市井十洲人
│   ├── yuanxiao.html   # 卷二：滚元宵
│   ├── heritage.html   # 卷三：非遗表演
│   ├── lantern.html    # 卷四：鳌山灯
│   ├── parade.html     # 卷五：踩街
│   └── blessing.html   # 卷六：米龟祈福
├── css/
└── js/
设计规范
css
复制
:root {
  --ink-1: #0A0908;        /* 深黑背景 */
  --ink-2: #141210;        /* 次级背景 */
  --paper: #E8E2DA;        /* 米白文字 */
  --gold: #C9A96E;         /* 金色强调 */
  --gold-dim: rgba(201, 169, 110, 0.6);
}
字体：标题用 Noto Serif SC，英文用 Playfair Display，正文用 Noto Sans SC
风格：深色古典质感，金色点缀，大量留白
页面交互逻辑
加载页 → 首页（index.html 内完成）
index.html 包含两部分：

加载区（Loading）：全屏视频背景 + Logo + 进度条动画（9秒），进度完成后淡出加载区
首页主内容区：章节选择卡片（6个章节入口），加载完成后自动滚动/显示此区域
即：加载页和首页是同一个 HTML 页面的两个状态，不是两个独立页面。

各章节页面（pages/*.html）
每个章节为独立 HTML 页面，结构统一：

Hero 区：全屏视频自动循环播放（静音）
正文区：标题 + 文案描述 + 配图/视频穿插
底部导航：「上一篇」「下一篇」按钮
背景音乐
背景音乐文件：{BASE}/final_footage/qingyuan_yuanxi.mp3（青玉案·元夕朗诵/配乐）
从首页开始播放，跨所有章节页面连续不断
localStorage 保存播放状态和播放位置
右上角圆形音乐控制按钮（播放/暂停）
点击"返回首页"时重置音乐
其他交互
图片模态框：点击配图放大查看，ESC 键或点击遮罩关闭
响应式：移动端适配，视频在移动端改为封面图
视觉资源（CDN）
所有资源基础路径（BASE）：

https://cdnstatic.tencentcs.com/edgeone/pages/product-activities/li_shangyuan
引用方式：{BASE}/路径/文件名

首页
资源路径
Logofinal_footage/logo.jpg
封面图final_footage/cover.jpg
背景视频（加载页）final_footage/homepage_bg_video.mp4
Hero 背景assets/hero_bg.jpg
背景音乐final_footage/qingyuan_yuanxi.mp3
章节导航图标（assets_icons/）
icon_bazaar.jpg · icon_yuanxiao.jpg · icon_heritage.jpg · icon_lantern.jpg · icon_parade.jpg · icon_blessing.jpg

卷一：市井十洲人（bazaar.html）
主题：宋元泉州港口的繁华商贸与市井夜市生活

文案要点：

泉州古称"刺桐城"，宋元时期为东方第一大港
"市井十洲人"典出宋代泉州盛景：来自十个国家的商人聚集于此
展示港口贸易、商贾往来、夜市繁华的场景
配文风格：古典叙事，营造穿越千年的沉浸感
Hero 视频： chapter_materials/market_life/market_life_homepage_video.mp4

素材图片/视频（chapter_materials/market_life/）：

merchant1.jpg, merchant2.jpg
night_market1.jpg ~ night_market6.jpg
night_market3.mp4, night_market4.mp4
harbor1.jpg, harbor2.jpg, harbor1.mp4
通用配图（assets/）： bazaar_01.jpg ~ bazaar_06.jpg

卷二：滚元宵（yuanxiao.html）
主题：泉州元宵节传统美食"滚元宵"的制作与文化

文案要点：

泉州元宵与北方汤圆不同，用"滚"法制作——馅料在糯米粉中反复翻滚成型
代表团圆美满的节日寓意
展示手工制作过程与节日氛围
配文风格：温暖亲切，唤起味觉记忆
Hero 视频： chapter_materials/rolling_yuanxiao/rolling_yuanxiao_homepage_video.mp4

素材图片（chapter_materials/rolling_yuanxiao/）：

li_shangyuan_material_30.jpg, li_shangyuan_material_33.jpg
通用配图（assets/）： yuanxiao_01.jpg ~ yuanxiao_03.jpg

卷三：非遗表演（heritage.html）
Hero 视频： chapter_materials/intangible_heritage/liyuan_opera/intangible_heritage_homepage_video1.mp4

素材图片（chapter_materials/intangible_heritage/）：

南音：nanyin/li_shangyuan_material_22.jpg
提线木偶：marionette/li_shangyuan_material_23.jpg
梨园戏：liyuan_opera/li_shangyuan_material_24.jpg
通用配图（assets/）： heritage_01.jpg, heritage_02.jpg

卷四：鳌山灯（lantern.html）
Hero 视频： chapter_materials/aoshan_lantern/aoshan_lantern_homepage_video.mp4

素材图片：

鳌山灯（chapter_materials/aoshan_lantern/）：li_shangyuan_material_19.jpg ~ _21.jpg
鲤鱼灯（chapter_materials/carp_lantern/）：li_shangyuan_material_26.jpg, _29.jpg, _32.jpg
通用配图（assets/）： lantern_01.jpg ~ lantern_03.jpg

卷五：踩街（parade.html）
Hero 视频： chapter_materials/street_parade/street_parade_homepage_video.mp4

素材图片/视频（chapter_materials/street_parade/）：

刣狮：lion_taming/lion_taming.jpg
拍胸舞：chest_slapping_dance/chest_slapping_dance.jpg
游街：street_march/street_parade_photo1.jpg, li_shangyuan_material_02.jpg, li_shangyuan_material_08.jpg, street_parade_video2.mp4
通用配图（assets/）： parade_01.jpg ~ parade_03.jpg

卷六：米龟祈福（blessing.html）
Hero 视频： chapter_materials/rice_turtle/rice_turtle_homepage_video.mp4

素材图片（chapter_materials/rice_turtle/）： li_shangyuan_material_31.jpg

通用配图（assets/）： blessing_01.jpg ~ blessing_03.jpg

开发提示
页面跳转：子页面返回首页用 ../index.html，首页进子页面用 pages/xxx.html，章节间用同级 xxx.html
音乐 key：zayton_music_playing / zayton_music_position，返回首页时清除
响应式断点：768px（移动）/ 1024px（小屏）
部署
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

联系方式
项目作者：Lynn Hou
技术支持：WorkBuddy Code + EdgeOne Pages

```
