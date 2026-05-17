# 饰品独立网站

> **赛道**：Prompt　**作者**：winna · [GitHub @winna1813](https://github.com/winna1813)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![饰品独立网站 cover](../assets/demos/shi-pin-du-li-wang-zhan.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/shi-pin-du-li-wang-zhan.gif" alt="饰品独立网站 demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 饰品独立网站 |
| 赛道 | Prompt |
| 作者 | winna |
| GitHub | [@winna1813](https://github.com/winna1813) |

## 📝 作品介绍

饰品独立网站，有比较完整的电商销售管理货品前后端系统

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
# CrystalGlow 水晶首饰展示网站

## 🎯 项目定位
创建 CrystalGlow 法式水晶首饰品牌展示网站，融合法式浪漫美学与现代电商体验，温暖精致、令人难忘。

## 🎨 视觉规范

### 配色（CSS变量）
--color-cream: #FAF5EF（暖米色主背景）
--color-cream-dark: #F0E8DF（次级背景）
--color-rose-pink: #E8B4B8（玫瑰粉点缀）
--color-gold: #C9A96E（香槟金强调）
--color-dark: #2C2420（深棕文字）
--color-text: #4A3F35（正文）

### 字体
标题：Playfair Display（Google Fonts）
中文正文：Noto Serif SC（Google Fonts）
英文正文：Lora（Google Fonts）

### 玻璃效果
背景 rgba(255，255，255，0.7) + backdrop-filter:blur(12px) + 白色0.5透明边框
hover时：背景rgba(255，255，255，0.9) + 上移4px + 阴影加深，transition 0.4s

### 禁止风格
❌ 科技感/赛博朋克 ❌ 廉价促销风 ❌ 刺眼纯白背景 ❌ 花哨动效

## 📐 技术栈
HTML5 + Vanilla JavaScript + CSS3，无构建工具依赖

### 文件结构
/ index.html 主站SPA
/ assets/css/main.css 全站样式
/ assets/js/app.js 主程序
/ assets/js/products.js 产品数据
/ assets/images/products/ 产品图片（4:5比例）

## 🏗 网站结构（7大版块）

S1 固定导航栏：透明→滚动后白色+阴影，Logo+导航项（首页/产品系列/品牌故事/材质工艺/联系我们），移动端汉堡菜单全屏展开

S2 全屏Hero（100vh）：暖米色渐变+浮动水晶光斑粒子（CSS animation），顶部"CrystalGlow · Since 2018"，主标题Playfair Display，副标题「每一颗水晶，都承载着一段独一无二的故事」，CTA「探索系列 →」（玫瑰金色，hover呼吸发光），底部滚动箭头上下浮动。页面加载文字依次淡入，间隔150ms

S3 品牌宣言：居中文字，"Our Story"小标题，3-4句中文品牌故事，底部金色细线装饰。滚动进入时淡入

S4 产品系列（3列网格）：Millando系列¥4，280-8，600（星光手链/月光项链/晶语耳饰/晨曦戒指/柔光胸针）；Vintage Crystal系列¥6，800-15，200（巴洛克皇冠/水晶吊灯耳坠/宫廷戒指/蕾丝手链/珍珠王冠/紫水晶项链）；精选单品¥1，680-3，800。图片4:5比例，hover放大1.05x

S5 品牌特色（6项图标）：天然材质/手工工艺/精选水晶/礼盒包装/全球配送/鉴定证书，中英文标签

S6 材质与工艺：左图右文布局，左侧大尺寸产品细节图，右侧Craftsmanship标题+工艺说明+3-4步流程+CTA「预约到店体验」

S7 页脚：深色背景#2C2420，Logo+品牌标语，快速链接（关于我们/配送说明/保养指南/联系我们），社交（微信/小红书/Instagram），版权声明

## ✨ 交互动效
页面加载：Hero文字staggered淡入800ms + 粒子漂浮循环 + CTA呼吸发光2s循环
滚动进入：Section淡入+上移600ms
悬停：产品卡片放大+阴影300ms / 导航下划线展开200ms / 特色图标上移+金色加深200ms

## 📐 响应式
移动端<768px 1列 | 平板768px+ 2列 | 桌面1024px+ 3-4列
最大宽度1280px，内边距：移动24px/桌面48px

## ✅ 质量验收
功能性：多端正常显示✅ 导航滚动切换✅ 产品卡片动效✅ 汉堡菜单✅ 图片加载✅ 中文无乱码✅
视觉性：首屏"哇"感✅ 暖米+玫瑰粉+香槟金色调✅ 字体层级清晰✅ 留白充足✅ 动效克制✅
性能：首屏<3秒✅ 无报错✅ 动画流畅✅

## 🚀 部署
根目录index.html + assets/ → 压缩ZIP → EdgeOne Pages直接上传 → 获得预览链接

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

```
