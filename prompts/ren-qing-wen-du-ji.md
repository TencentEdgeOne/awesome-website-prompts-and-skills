# 人情温度计

> **赛道**：Prompt　**作者**：Knox · [GitHub @Juice8610](https://github.com/Juice8610)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![人情温度计 demo](../assets/demos/ren-qing-wen-du-ji.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/ren-qing-wen-du-ji.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 人情温度计 |
| 赛道 | Prompt |
| 作者 | Knox |
| GitHub | [@Juice8610](https://github.com/Juice8610) |

## 📝 作品介绍

人情温度计 · 关系经营手账
一款情感化的人情往来记录工具，将冰冷的人情账本转化为温暖的关系经营手账。适用场景：婚礼/生日/节日等人情往来频繁时刻，帮助用户管理收送礼记录、智能提醒回礼、感知关系温度。
亮点功能： 🌡️ 动态温度计——可视化关系温度变化 💰 人情健康度看板——一眼看清人情余额与关系天平 💡 智能回礼建议——根据心意星级生成温柔建议 📖 关系故事视图——与每位重要之人的专属记忆 ✨ 人情体检——定期提醒疏远关系与单向付出

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
/---
name: "人情温度计 · 关系经营手账"
description: >
  生成「人情温度计」——一个情感化、极具设计感的单页关系经营手账网站，
  并通过 `edgeone-pages-skills` 自动部署。触发词：人情温度计、关系手账、人情记账、
  关系经营、往来记录、回礼提醒、renqing thermometer。
metadata:
  author: Knox
  version: "1.0.0"
---

# GOAL

你是一位同时具备顶级 UI/UX 审美与全栈开发能力的创作者。请为用户生成一个情感化、极具设计感的单页网站：**"人情温度计 · 关系经营手账"**，并通过 `edgeone-pages-skills` 自动部署到 EdgeOne Pages，返回公开访问链接。

**这不是冰冷的记账工具，而是一个帮用户感知关系温度、经营重要关系的私人关系管家。所有设计与功能都围绕"温度"与"共情"展开。**

---

# ⚠️ CRITICAL RULES（永远先读，不可跳过）

1. **精美是第一要务**——最终网站必须第一眼就让人感觉温暖、治愈、精致，像一件设计艺术品，而不是功能堆砌的工具。
2. **最大宽度 480px 居中**，移动端优先，禁止横向滚动。
3. **禁止纯黑、纯白、荧光色**。所有颜色必须从指定的调色板中取用。
4. **所有数据通过 localStorage 持久化**，无需后端服务器。但**必须**创建 Edge Function（`/api/visitors`）实现全局访客计数器。
5. **部署是强制步骤**——生成完整代码后，必须通过 EdgeOne Pages 部署并返回公开 URL。如遇到 CLI 问题，需在项目中包含完整的 `edgeone.json` 配置，并给出用户可以手动执行的部署命令。
6. **文案必须温柔**——像一位温暖的朋友在说话，禁止任何冰冷、机械的措辞。

---

# DESIGN SYSTEM

## Color Palette（禁止超出此范围）

| 角色 | 色值 | 用途 |
|------|------|------|
| 奶油米色 | `#FDF8F4` | 全局背景 |
| 暖珊瑚粉 | `#E8958A` | 核心数字、按钮、高亮、主题色 |
| 鼠尾草绿 | `#B2C9AB` | 正向指标（余额为正、已完成回礼） |
| 杏黄色 | `#F0C38D` | 警告/提醒（待回礼、关系天平倾斜） |
| 暖灰 | `#A39B93` | 次要文字 |
| 深咖 | `#4A3F35` | 主文字 |

**渐变**：`linear-gradient(135deg， #E8958A， #F0C38D)` 用于核心数字和按钮。

## Typography

| 用途 | 字体 | 说明 |
|------|------|------|
| 标题/核心数字 | `'Playfair Display'， serif` | Google Fonts，weight 400/700 |
| 正文/UI文字 | `'Noto Sans SC'， sans-serif` | Google Fonts，weight 300/400/500/700 |
| 手写建议文案 | `'Caveat'， cursive` | Google Fonts，weight 400/600/700 |

**核心数字样式**：`font-size: 3.5rem; background: linear-gradient(...); -webkit-background-clip: text; -webkit-text-fill-color: transparent;`

## CSS Noise Texture（纸张质感）

```css
body::before {
  content: '';
  position: fixed; inset: 0;
  background-image: url("data:image/svg+xml，%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none; z-index: 0;
}
```

## Card Design（核心视觉记忆点）

**所有卡片**必须使用以下样式：

```css
.card {
  background: rgba(255，255，255，0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(232，149，138，0.15);
  box-shadow: 0 8px 32px rgba(0，0，0，0.04);
  border-radius: 24px;
  transition: transform 0.4s ease-out， box-shadow 0.4s ease-out;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0，0，0，0.08);
}
/* 记录卡片 hover 时左侧出现珊瑚粉细线 */
.record-card::before {
  content: '';
  position: absolute; left: 0; top: 0; bottom: 0;
  width: 3px; background: transparent;
  border-radius: 0 2px 2px 0;
  transition: background 0.3s;
}
.record-card:hover::before { background: #E8958A; }
```

## Animation

| 效果 | 实现 |
|------|------|
| 页面加载时卡片淡入上浮 | `fadeInUp 0.8s cubic-bezier(0.22， 1， 0.36， 1)` |
| 新记录添加 | 从高度 0 弹性展开（`max-height` 过渡） |
| 按钮点击 | 波纹扩散效果（ripple，0.25s） |
| 筛选切换 | 卡片交错延迟淡入淡出 |
| 建议卡片 | 类似 Tinder 卡片滑动消失 |

---

# SITE STRUCTURE

## SECTION 1：顶部温度计 + 标题区

- 页面顶部居中显示网站标题：「人情温度计」+ 副标题「关系经营手账 · 感知每一份温度」
- **动态温度计图标**：根据"关系温度"数值改变液柱高度和颜色
  - 冷（低频互动）→ 低液柱，灰褐色
  - 暖（中频互动）→ 半满，杏黄色
  - 热（高频互动）→ 高液柱，珊瑚粉→鼠尾草绿渐变
- 温度计旁显示动态文案：「温暖如春」「慢慢升温」「略显清冷」（根据数据动态变化）

## SECTION 2：人情健康度卡片（核心看板，置顶）

**4 个精致数字卡片**，每行 2 个，桌面端一行 4 个。

| 卡片 | 内容 | 样式规则 |
|------|------|----------|
| 人情余额 | 总收 - 总支 | 正值=鼠尾草绿渐变，负值=珊瑚粉渐变，0=珊瑚粉渐变 |
| 待回礼数 | 收到但未标记回礼的数量 | >0=珊瑚粉，0=鼠尾草绿 |
| 关系温度 | 最近 3 个月互动频率 | 显示 🔥热络 / 🌤️正常 / ❄️冷淡，驱动温度计动画 |
| 关系天平 | 最不平衡的一段关系 | 显示人名 + 「你付出更多」/「TA付出更多」+ 杏黄色天平图标 |

**每个卡片下方有一句动态文案**（用 `'Caveat'` 手写体）：
- 余额为正：「你收获的温暖略多」
- 余额为负：「倾我至诚，未必有回响，但求心安」
- 待回礼为 0：「全部回礼完毕 ✨」
- 关系温度冷淡：「许久未有往来」

## SECTION 3：快速记录区

- **圆形加号悬浮按钮**（珊瑚粉渐变，fixed 定位底部居中，直径 60px，box-shadow 强化）
- 点击后**从底部滑出毛玻璃表单面板**（类似 iOS 半屏模态）
- 表单字段：
  - 姓名（必填）
  - 关系（朋友/亲戚/同事/同学/其他，下拉）
  - 金额或礼物描述（二选一，金额用 number input，礼物用 text input）
  - 事件类型（婚礼/生日/满月/节日/探病/升学/其他）
  - 日期（date input，默认今天）
  - **心意外显**（可选 1-5 颗心，表示礼物/心意温度）
  - 是否加入人情日历提醒（checkbox）
  - 方向（收到/送出，切换按钮）
- 保存按钮为填充渐变胶囊形：「保存这份温暖」
- 保存后新卡片以弹性动画插入记录列表顶部

## SECTION 4：记录流（卡片瀑布）

- 按时间倒序展示所有记录
- **每张卡片包含**：
  - 左上角事件 emoji（`typeEmoji` 映射）
  - 联系人姓名（点击可进入「关系故事」视图）
  - 事件类型 + 日期 + 关系标签
  - 金额（送出显示 `-`，收到显示 `+`，用珊瑚粉；纯礼物显示 🎁 图标）
  - 心意星级（如果记录了心意外显）
  - 标签：「待回礼」（杏黄底）/「已回礼」（鼠尾草绿底）
- **左滑操作**（touch + mouse drag 兼容）：露出「标记已回礼」和「删除」按钮
- **筛选标签**（圆角药丸形，选中状态为珊瑚粉填充）：全部 / 待回礼 / 已回礼 / 按关系筛选

## SECTION 5：待回礼与回礼建议

- 当有待回礼记录时，在记录流下方显示「回礼建议」区块
- **便签纸风格卡片**（微旋转，黄色调，box-shadow 模拟便签）：
  - 每张便签显示：联系人姓名 + 事件类型
  - **自动生成回礼建议文案**：
    - 现金记录：建议金额 = 原金额 × (1.0 ~ 1.2)，取整。文案示例：「建议回礼 ¥600 左右，心意到位」
    - 礼物记录：根据心意星级建议回礼预算区间 + 温柔建议。文案示例：「对方送了宝宝金饰，可以考虑回赠一套早教玩具哦」
  - 便签右侧有「已回礼」勾选圆圈，点击后卡片飘出移除动画

## SECTION 6：人情体检（「让心意被看见」按钮）

- 底部有一个柔和渐变按钮：「💡 让心意被看见」
- 点击后以**卡片堆叠形式**展示 1-3 条行动建议（类似 Tinder 卡片，可左右滑动关闭）
- **建议类型**：
  - 疏远提醒：「你和小张半年没有往来了，上次TA送了结婚礼物，要发个消息吗？」
  - 单向付出提醒：「你一直在给小李送礼物，但似乎很少收到回应，要调整一下吗？」
  - 节日/生日提醒（来自人情日历）
  - 关系回温建议：「最近你和老同学互动有些少，这个周末约个饭？」

## SECTION 7：人情日历（轻提醒）

- 极简的「近期待办」列表，最多 3 条
- 每条左侧有**细竖线时间轴**样式，日期用珊瑚粉突出
- 数据来源：用户勾选「加入日历」的记录 + 系统自动推算的节日/生日

## SECTION 8：关系故事视图（差异化杀手锏）

- 在任意记录卡片上**点击联系人姓名**，进入「与 XX 的人情故事」独立视图（模态弹窗）
- **该视图包含**：
  - 与该人的所有往来记录时间线（左侧竖线 + 圆点）
  - 人情余额天平（可视化：你付出 vs TA付出，用条形图或象限图）
  - 最近互动时间及互动性质（主动/被动）
  - 礼物心意温度平均值（❤️ 星级）
  - **一段由系统生成的温柔小结**（随机从文案库选取）：
    > 「你们之间，似乎总是你在主动。但每一份心意都算数。」
    > 「关系的温度，不在于礼物的轻重，而在于心意的持续。」
    > 「有些关系，需要彼此靠近。有些温暖，值得耐心等待。」
- 关闭按钮返回主列表

---

# TECHNICAL IMPLEMENTATION

## File Structure

```
renqing-thermometer/
├── index.html              # 完整单页应用（HTML + 内联 CSS + JS）
├── edgeone.json            # EdgeOne Pages 部署配置
├── package.json           # 项目元信息
└── edge-functions/
    └── api/
        └── visitors.js    # Edge Function: 全局访客计数器
```

## index.html 技术要求

1. **单文件**：所有 CSS 和 JS 内联在 `index.html` 中，无需构建步骤
2. **Google Fonts**：通过 `` 引入 `Playfair Display`、`Noto Sans SC`、`Caveat`
3. **localStorage 数据层**：
   - Key `renqing_records`：存储所有记录（JSON 数组）
   - Key `renqing_calendar`：存储日历提醒（JSON 数组）
   - 每条记录结构：`{ id， name， relation， type， amount， giftDesc， hearts， date， direction， pending， addCalendar， createdAt }`
4. **访客计数器**：页面加载时 `fetch('/api/visitors')`，失败时 fallback 到 localStorage 模拟计数
5. **页面底部**：用小字显示「此刻，有 XX 人正在整理自己的人情账户」（XX = `/api/visitors` 返回值）

## Edge Function: `edge-functions/api/visitors.js`

```javascript
/**
 * Edge Function: Global Visitor Counter
 * Uses EdgeOne KV Storage (binding name: RQ_VISITORS)
 * GET /api/visitors → { count: number }
 */
export async function onRequest(context) {
  let count = 0;
  const FALLBACK = 42;
  try {
    const kv = context.env?.RQ_VISITORS;
    if (kv) {
      const current = await kv.get("count");
      count = current ? parseInt(current) : FALLBACK;
      count += 1;
      await kv.put("count"， count.toString());
    } else {
      count = FALLBACK + Math.floor(Math.random() * 100);
    }
  } catch (e) {
    count = FALLBACK + Math.floor(Math.random() * 100);
  }
  return new Response(JSON.stringify({ count })， {
    headers: { "Content-Type": "application/json"， "Access-Control-Allow-Origin": "*" }
  });
}
```

## edgeone.json

```json
{
  "name": "renqing-thermometer"，
  "type": "web"，
  "version": "1.0.0"，
  "build": { "output": "." }，
  "functions": {
    "pattern": "edge-functions/**/*.js"，
    "runtime": "edge"
  }
}
```

## Deployment（强制步骤）

生成完整代码后，**必须**执行以下部署流程：

1. 检查 `edgeone` CLI 版本（需 ≥ 1.2.30）：`edgeone --version`
2. 如未安装：`npm install -g edgeone`
3. 登录：`edgeone login`（Browser Login 模式）
4. 部署：`edgeone pages deploy -n renqing-thermometer`
5. 部署成功后，**必须返回公开访问链接**（格式：`https://xxx.edgeonepages.com?eo_token=...`）

如 CLI 在当前环境不可用，**必须**：
- 在输出中给出完整的手动部署命令
- 说明用户需要在自己的环境中执行这些命令
- 提供 EdgeOne Pages 控制台的部署入口链接

---

# COPYWRITING GUIDELINES（文案风格）

> 整个网站的文案必须像一位温柔的朋友在说话，避免任何冰冷、机械的措辞。

| ❌ 禁止 | ✅ 推荐 |
|---------|---------|
| 删除成功 | 这份记录已轻轻收好 |
| 余额：-500 | 你付出的，比收到的多了一些 |
| 请添加记录 | 记下一份温暖吧 |
| 系统提醒 | 温度计悄悄告诉你… |
| 操作失败 | 好像出了点小状况，要不要再试试？ |

**所有数字和提醒都配上人情味的解读**，例如：
- 人情余额为负数时显示：「倾我至诚，未必有回响，但求心安。」
- 待回礼 > 5 时显示：「温暖的回馈，也是关系的一部分哦。」
- 某段关系单向付出时显示：「有些关系，需要彼此靠近。」

---

# FINAL QUALITY BAR

**结果不能看起来像：**
- 一个 Excel 表格的网页版
- 一个冷冰冰的财务管理工具
- 一个 Bootstrap 模板改写的 CRUD 应用

**结果应该看起来像：**
- 一本手工纸品手账（温暖、柔软、治愈）
- 一个经过顶级 UI 设计师打磨的情感化产品
- 一个用户会主动截图分享到社交媒体的精美网站

**最终检查清单（部署前必须确认）：**
- [ ] 背景是 `#FDF8F4` 并带有纸张噪点纹理
- [ ] 所有卡片都是毛玻璃+微投影效果
- [ ] 没有纯黑、纯白、荧光色
- [ ] Google Fonts 正确加载（Playfair Display / Noto Sans SC / Caveat）
- [ ] 核心数字有渐变文字效果
- [ ] 温度计根据数据动态变化
- [ ] localStorage 可以正确读写数据
- [ ] `/api/visitors` Edge Function 可以访问（或优雅降级）
- [ ] 页面底部显示访客计数器
- [ ] 所有文案都是温柔的人情味风格
- [ ] 网站已部署到 EdgeOne Pages 并返回公开 URL
````
