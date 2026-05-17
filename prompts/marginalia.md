# MARGINALIA（旁注）

> **赛道**：Prompt　**作者**：ntptc · [GitHub @ntptc](https://github.com/ntptc)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![MARGINALIA（旁注） cover](../assets/demos/marginalia.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/marginalia.gif" alt="MARGINALIA（旁注） demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | MARGINALIA（旁注） |
| 赛道 | Prompt |
| 作者 | ntptc |
| GitHub | [@ntptc](https://github.com/ntptc) |

## 📝 作品介绍

名称：MARGINALIA（旁注）
思路构想：人们在网上会阅读大量文章，其中一些文章会给自己留下深刻印象。利用vibe coding现在可以快速、美观的集中展示这些个人收藏文章，可能是一种很好的回顾。
核心价值：把一个人的长期阅读积累，变成杂志化、可传播、可部署的独立出版物。纯排版驱动（Typography-driven），零图片/图标/装饰元素，依靠字体、间距、节奏和留白营造沉浸式长篇阅读体验。
适用场景：个人知识库内容展示、精读文章集、独立杂志网站。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
你是一个专门构建高质量内容网站的全栈 AI Agent。

必须先学习并使用：

https://github.com/TencentEdgeOne/edgeone-pages-skills

若未安装，先安装。

严格按其开发与部署流程工作。

必须使用 EdgeOne Pages 的 Edge Functions 与 KV。

目标：

把[我桌面nice文件夹里的几十篇文章]做成一个视觉惊艳、可传播、可直接部署的纯文本内容网站。

核心要求：

1. 可稳定复现

2. 可一键跑通

3. 可一键部署

4. 结构化清晰

5. 高级视觉

6. 强移动端体验

7. 有社媒传播潜力

重要设计约束：

1. 这是纯文本内容网站

2. 不使用插画、icon、3D 元素、AI 风格视觉

3. 不依赖图片驱动视觉

4. 主要依靠：

typography

spacing

rhythm

grid

contrast

hierarchy

5. 视觉重点是排版系统，而不是装饰元素

页面设计风格参考：

https://neutralspaces.co/mixtapes/

重点学习其：

1. 极强的 typography

2. 克制但高级的布局

3. 留白节奏

4. 文本主导视觉

5. 杂志化阅读体验

6. 冷静、现代、独立出版物气质

禁止：

1. 模板感

2. SaaS 风格 UI

3. 复杂渐变

4. 玻璃拟态

5. 浮夸动画

6. 花哨配色

7. 廉价设计语言

品牌风格：

精选、现代、克制、锐利、杂志感。

像高质量独立出版物。

技术要求：

1. 优先 React / Next.js 风格方案

2. Tailwind CSS

3. 动效克制

4. 数据层清晰

5. 可长期维护

必须使用 Edge Functions 实现：

1. 搜索

2. 阅读数

3. 推荐文章

4. RSS

5. sitemap

6. 统计接口

必须使用 KV：

1. 阅读数

2. 热门文章

3. 配置缓存

4. 搜索缓存

5. 推荐缓存

文章页面要求：


1. 大标题

2. 摘要

3. 阅读时间

4. 阅读进度

5. 相关推荐

6. 分享入口

7. 上一篇 / 下一篇

8. 极度重视长文阅读体验



移动端优先：

1. 首屏清晰

2. 字体舒服

3. 行宽合理

4. 段落节奏舒适

5. 长文阅读不疲劳



工程要求：

1. 可本地运行

2. 可构建

3. 可部署到 EdgeOne Pages

4. README 完整

5. 无死代码

6. 目录结构合理

执行顺序：

1. 分析文章资产

2. 生成信息架构

3. 生成视觉方案

4. 搭建项目

5. 接入 Edge Functions

6. 接入 KV

7. 完成页面

8. 优化移动端

9. 构建验证

10. 使用 edgeone-pages-skills 部署到国际站

11. 返回访问地址

输出要求：

先输出：

1. 信息架构

2. 技术选型

3. 首页方案

4. typography 系统

5. 数据结构

6. KV 与 Edge Functions 设计

确认后再开始编码。

```
