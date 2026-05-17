# Maison Table

> **赛道**：Prompt　**作者**：社君
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Maison Table cover](../assets/demos/maison-table.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Maison Table |
| 赛道 | Prompt |
| 作者 | 社君 |

## 📝 作品介绍

**"东方克制美学"**：
- 墨炭黑底 + 琥珀金主色 + 朱砂红点缀
- 宣纸质感背景、手写虚线、方正小圆角
- 零霓虹、零渐变色块、零现代 SaaS 风格
- 每一屏只传递 1~2 个核心信息——仪式感优先于信息密度

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
# Maison Table — 沉浸式私厨预约餐厅网站

## 🎯 项目定位

构建一个名为 **Maison Table** 的虚构高端私厨预约餐厅单页网站（中文 + 英文双语），
风格灵感来源于「烛光、老木、手写菜单」的东方现代私房菜美学：
- 深墨色调、质感纸纹、克制奢华、仪式感极强
- 既能在线预约座位，又展示主厨故事与当季菜单

**技术栈**：React + Vite + TypeScript + Tailwind CSS + shadcn/ui  
**后端**：EdgeOne Pages Edge Functions（轻量 API）+ KV Storage（座位状态缓存）+ Cloud Functions Node.js（预约持久化）  
**实时**：WebSocket（候位实时通知）  
**安全**：Middleware（管理员认证守卫）

---

## 🎨 品牌规则

- **品牌名**：Maison Table（繁体中文副名：**留席**）
- **主理人**：Chef Lin（林主厨）——深耕 15 年的私厨料理人
- **标语**：*"每一桌，都是只为你的舞台。"*  
  English tagline: *"Every table， a stage set only for you."*

### 色彩系统

```css
--background: 24 15% 7%        /* 墨炭黑 */
--foreground: 35 22% 91%       /* 宣纸白 */
--primary: 28 55% 52%          /* 琥珀金 */
--primary-foreground: 24 15% 7%
--accent: 355 35% 42%          /* 朱砂红 */
--muted: 24 10% 14%            /* 碳灰 */
--muted-foreground: 35 12% 60%
--border: 35 20% 80% / 0.12
--card: 24 12% 11%
--radius: 2px                  /* 极小圆角，方正克制 */
```

### 字体

- **中文标题**：Noto Serif SC（400 / 700）
- **英文标题**：Cormorant Garamond（400 / 500 italic）
- **正文**：Noto Sans SC（300 / 400）

### 纹理与质感规则

- 背景使用 `noise` SVG filter 制造纸纹颗粒感（opacity 0.04）
- 分割线使用 `border-dashed` + `opacity-30`，模拟手写菜单虚线
- 卡片不用投影，改用 `ring-1 ring-white/10` 内边框表达层次
- 禁止：霓虹色 / 渐变色块 / 圆角过大 / 现代 SaaS 风设计语言

---

## ⚠️ 不可违背的布局规则

**禁止项**：
- 全屏弹出 Modal（使用 Drawer/Sheet 替代）
- 居中对齐大段落文字（超过 3 行改为左对齐）
- 白色背景卡片群（全站维持深色调）
- 多余的 Loading Spinner（骨架屏替代）

**全局布局规则**：
- 内容最大宽度 `1200px`，内边距 `px-5 md:px-10 lg:px-20`
- 节区间距 `py-20 md:py-28`
- 背景媒体 `absolute inset-0 object-cover`，内容层 `relative z-10`
- 响应式检查断点：`390px / 768px / 1024px / 1440px`
- **仪式感优先于信息密度**：每屏最多传递 1~2 个核心信息

---

## 📐 9 大页面区块

### 1. 固定导航栏（Navbar）

```
布局：毛玻璃横条，左侧「留席 · Maison Table」logo，右侧「预约」CTA 按钮
滚动行为：向下滚动 80px 后背景从透明切换到 bg-background/90 backdrop-blur-md
CTA 样式：outline 按钮，hover 时填充 primary 色
```

### 2. Hero 区块

```
布局：min-h-screen，全屏视频/图片背景
背景：深色调厨房操作台特写（动态感）
叠加层：gradient-to-b from-transparent via-background/30 to-background
内容：
  - 上方：小号大写字母 "PRIVATE DINING · SHANGHAI"
  - 主标题（两行）：「留席」/ "Every table， a stage set only for you."
  - 副标题：每周仅开放 14 席 · 需提前 3 天预约
  - 双 CTA：[立即预约] [查看本季菜单]
  - 底部滚动箭头动画
```

### 3. 数字信任带（Stats Bar）

```
4 列横排数据：
  - 15年  私厨经验
  - 14席  每周限额
  - 98%   回头率
  - 0     固定菜单（全部当季定制）
样式：数字用 primary 色，说明文字用 muted-foreground
```

### 4. 主厨故事（Chef Story）

```
布局：左图右文 (md:grid-cols-2)，移动端图片置顶
图片：主厨黑白侧脸照，aspect-ratio: 3/4，带 ring 边框
文字：
  - 标签：「主理人」
  - 姓名：林 · Chef Lin
  - 段落1：15年的私厨生涯，从广州走到上海，他从未写过固定菜单。
  - 段落2：每一桌的食材，在开席前 6 小时才最终确定。
  - 段落3：他说，料理是与食客的对话，而非表演。
  - 底部：小字签名体 "Lin" 作为装饰
```

### 5. 本季菜单预览（Seasonal Menu）

```
布局：竖向时间轴形式，3 道菜（前菜 / 主菜 / 甜品）
每项包含：
  - 菜名（中英双语）
  - 主要食材 tag（小圆角 badge）
  - 一句诗意描述
  - "本季限定" 标记

菜单数据（通过 /api/menu 获取，Edge Function 返回）：
  前菜：碳烤时蔬配手制白松露酱
    EN: Charred Seasonal Vegetables with White Truffle Cream
    标签：[时蔬] [白松露] [炭烤]
    描述："大地的苦，被奶油轻轻驯服。"

  主菜：和牛短肋配发酵黑蒜汁
    EN: Wagyu Short Rib with Fermented Black Garlic Jus
    标签：[和牛] [黑蒜] [慢煮]
    描述："72 小时的等待，换来入口即化的一刻。"

  甜品：山楂玫瑰冻配手工米麻薯
    EN: Hawthorn Rose Jelly with Handmade Mochi
    标签：[山楂] [玫瑰] [无麸质可选]
    描述："记忆里外婆院子里的酸甜。"
```

### 6. 预约系统（Reservation）—— 核心功能区

```
布局：左侧信息 + 右侧表单（md:grid-cols-5，左2右3）
左侧：
  - 标题："预约一桌属于你的晚餐"
  - 开放时间：周四至周日，18:30 / 21:00 两场
  - 重要提示（用 accent 色小圆点标注）：
    · 每桌最多 8 位
    · 需支付 ¥200/位定金（到店抵扣）
    · 取消请提前 48 小时

右侧表单字段：
  - 姓名（必填）
  - 手机号（必填，格式验证）
  - 用餐日期（日历选择器，禁选周一至周三及已满座日期）
  - 场次（18:30 / 21:00 单选，通过 /api/availability 实时查询剩余席位）
  - 用餐人数（1-8 人步进器）
  - 特殊需求（文本域，placeholder: "如过敏原、纪念日布置等"）
  - [确认预约] 按钮 → POST /api/reservations

提交后：
  - 成功：展示预约确认卡（含预约码、日期、场次、二维码占位）
  - 候位：若当场已满，提示"已加入候位队列，实时位置: 第 N 位"
    → 开启 WebSocket 连接 ws://... 监听候位状态推送
```

### 7. 用餐环境（Ambiance Gallery）

```
布局：Masonry 瀑布流（3列，移动端2列）
图片数量：6 张（环境 / 餐桌布置 / 食材特写 / 主厨操作）
每张图片：
  - 悬停时出现半透明遮罩 + 描述文字淡入
  - 支持点击放大（lightbox 效果）
```

### 8. 真实评价（Testimonials）

```
布局：横向滚动卡片轨道（overflow-x-auto snap-x snap-mandatory）
4 条评价，每条包含：
  - 评价内容（引号样式）
  - 用餐者姓名（脱敏：张女士 / 李先生）
  - 用餐日期
  - 星级（5星实心）
数据来源：/api/testimonials（Edge Function）
```

### 9. 结尾 CTA + 页脚（Footer CTA）

```
CTA 区：
  - 背景：极简暗色，无媒体
  - 文字：「还有 2 席空缺 · 本周五」（通过 /api/availability 动态更新）
  - 按钮：[立即抢座]

页脚：
  - Logo + 品牌口号
  - 三列链接：菜单 / 预约 / 关于
  - 地址：上海市黄浦区（虚构）
  - 备案号占位
  - © 2025 Maison Table
```

---

## 🔌 Edge Functions & Cloud Functions API 端点

所有前端数据必须通过 API 获取，禁止在组件中硬编码动态内容。

### Edge Functions（`edge-functions/api/`）

| 端点 | 方法 | 功能 | KV 用法 |
|------|------|------|---------|
| `/api/menu` | GET | 返回本季菜单（3 道菜完整数据） | 读 KV `menu:current` |
| `/api/availability` | GET | 查询指定日期+场次剩余席位 | 读 KV `seats:{date}:{session}` |
| `/api/testimonials` | GET | 返回 4 条评价 | 读 KV `testimonials` |
| `/api/health` | GET | 返回 `{ "ok": true， "ts": timestamp }` | 无 |

**GEO 功能**：`/api/availability` 附带返回 `context.request.eo.geo.country`，
前端据此切换"大陆预约提示 / 海外访客提示"文案。

### Cloud Functions Node.js（`cloud-functions/api/`）

| 端点 | 方法 | 功能 |
|------|------|------|
| `/api/reservations` | POST | 接收预约表单，生成预约码，写入数据库或 JSON 文件，返回确认对象 |
| `/api/reservations/:code` | GET | 查询预约详情（管理员用） |
| `/api/waitlist` | POST | 加入候位队列，返回队列位置 |
| `/api/admin/seats` | PUT | 管理员更新席位状态（需 Middleware 鉴权） |

**POST /api/reservations 请求体**：
```json
{
  "name": "张女士"，
  "phone": "138****8888"，
  "date": "2025-05-09"，
  "session": "18:30"，
  "guests": 2，
  "notes": "结婚纪念日，请准备一支小蜡烛"
}
```
**返回**：
```json
{
  "code": "MT-20250509-001"，
  "status": "confirmed"，
  "date": "2025-05-09"，
  "session": "18:30"，
  "guests": 2，
  "depositAmount": 400
}
```

### WebSocket（Cloud Functions Node.js）

| 端点 | 协议 | 功能 |
|------|------|------|
| `/api/waitlist/ws` | WS | 候位实时推送，服务端每 30s 广播队列状态 |

**推送消息格式**：
```json
{
  "type": "waitlist_update"，
  "code": "MT-20250509-W003"，
  "position": 2，
  "estimatedWait": "约 45 分钟"
}
```

---

## 🔐 Middleware 规则（`_middleware.js`）

```
路径匹配：/api/admin/*
鉴权方式：检查 Authorization: Bearer  Header
环境变量：ADMIN_TOKEN（在 EdgeOne Pages 控制台配置）
未授权：返回 401 JSON { "error": "Unauthorized" }
```

---

## 🧩 推荐组件清单

```
Navbar
HeroSection
StatsBar
ChefStorySection
SeasonalMenuSection
ReservationSection
  ├── DatePicker（禁选逻辑 + 席位实时查询）
  ├── SessionSelector（剩余席位角标）
  ├── GuestStepper
  └── ConfirmationCard（含候位 WebSocket hook）
AmbianceGallery（Lightbox）
TestimonialsCarousel
FooterCTA
Footer
```

---

## ✅ 最终质量标准

**不能像**：美团外卖页面 / 连锁餐厅官网 / SaaS 落地页 / 现代扁平设计 / 过度动效展示

**必须像**：上海高端私房菜预约站 / 具有仪式感和克制美学 / 读完一段文字会想订位 / 跨屏布局稳定不崩

---

## 📦 交付要求

1. 本地 `npm run dev` 正常运行，`edgeone pages dev` 验证 API 可访问
2. 验证预约表单完整提交流程（含候位降级）
3. 验证席位实时查询（至少 2 个日期 + 2 个场次）
4. 验证 Middleware 对 `/api/admin/*` 的鉴权拦截
5. 验证 WebSocket 候位推送（可用 `wscat` 或浏览器 DevTools 测试）
6. 验证 GEO 信息返回（可在 `/api/availability` 响应中检查 `geo.country`）
7. 按 EdgeOne Pages 规则部署（**先询问用户选择中国站还是全球站**）
8. 部署成功后完整输出预览 URL（含查询参数，不可截断）

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

````
