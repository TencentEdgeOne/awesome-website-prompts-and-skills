# OpsVision

> **赛道**：Prompt　**作者**：wuyafeiya
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![OpsVision demo](../assets/demos/opsvision.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | OpsVision |
| 赛道 | Prompt |
| 作者 | wuyafeiya |

## 📝 作品介绍

① 作品名称

OpsVision — 3D 运维监控中心

② 核心价值（3句话）

将枯燥的数据表格变成沉浸式的 3D 机房指挥台。运维人员不再面对单调的监控面板，而是"走进"真实的数据中心，用第一人称视角巡视每一台服务器的呼吸。

③ 适用场景（4个）

大型数据中心监控墙（1920px+）
IDC 运维巡检
DevOps 演示汇报
SRE 仪表盘
④ 亮点功能（4个，带编号说明）

三级导航穿透（总览→机柜→服务器详情，GSAP 摄像机动画跟进）
3D 机柜实时渲染（LED 三灯系统、机柜门透视）
状态驱动的视觉语言（颜色+闪烁频率表达健康状态）
真实感数据模拟（正弦波+噪声，自然波动）

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
> 由参赛者创作 · WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| **作品名称** | OpsVision — 3D 运维监控中心 |
| **类型** | 运维监控网站（单页应用） |
| **赛道** | Prompt 参赛作品 |

---

## 📝 作品介绍

OpsVision 是一款**沉浸式 3D 数据中心运维监控大屏**。核心视觉是一片黑暗的"数据荒原"——整齐排列的机柜在微光中静默运行，每一台服务器都是一颗呼吸的脉搏。用 Three.js 渲染真实的 3D 机柜场景，用 GSAP 驱动所有视角切换和数据流动画，让运维人员仿佛置身于真实的机房指挥中心。
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

---

## 🚀 完整 Prompt 正文

### GOAL — 基础目标

构建一个**英语版 3D 运维监控大屏单页应用**，名称为 **OpsVision**。

**设计语言：数据中心指挥台（Datacenter Command Center）**

- 黑暗沉浸（immersive dark）
- 霓虹脉搏（neon-pulsing data）
- 可交互的 3D 空间（interactive 3D space）
- 每个数字都随真实数据呼吸（living data）

---

### TECH STACK

```
HTML + CSS + Vanilla JavaScript（单文件即可）
Three.js (r128 via CDN)           ← 3D 机柜场景
GSAP 3.x (via CDN)                 ← 摄像机动画 + UI 动画
Google Fonts: Share Tech Mono + Inter
```

> 禁止使用 React/Vue 等框架，保持单文件轻量实现。

---

### BRAND — 品牌规范

**色彩体系（必须严格遵循）：**

```css
--bg-void:        #020408   /* 主背景：近乎纯黑 */
--bg-panel:       #050d14   /* 面板背景 */
--bg-card:        #071220   /* 卡片背景 */
--neon-cyan:      #00f5ff   /* 主高亮 / 正常状态 */
--neon-cyan-dim:  #00c8d4
--neon-green:     #39ff14   /* 健康指示 */
--neon-amber:     #ffb800   /* 警告状态 */
--neon-red:       #ff3b30   /* 严重告警 */
--text-primary:   #e8f4f8
--text-secondary: #7ba7bc
--text-dim:       #3d6070
```

**字体：** `Share Tech Mono`（数字/标题，等宽科技感）+ `Inter`（正文）

**禁止元素：** 白色背景、圆角卡片（>4px）、彩色渐变、扁平卡通风格

---

### LAYOUT — 布局结构

```
┌──────────────────────────────────────────────────────────┐
│  TOP BAR (56px): Logo / 标题 / 时间 / 告警数 / 系统状态  │
├──────────┬──────────────────────────┬───────────────────┤
│  LEFT    │                          │   RIGHT           │
│  (280px) │   CENTER 3D DATACENTER   │  
   (320px)         │
│          │                          │                   │
│ 服务健康  │  [机柜排列的3D场景]       │ 
   KPI指标卡         │
│ 系统仪表  │  点击机柜→放大聚焦        │ 
   请求速率折线图     │
│ 告警列表  │  点击服务器→右侧详情浮层   │ 
   地区流量条        │
│          │                          │  事件时间线       
   │
├──────────┴──────────────────────────┴───────────────────┤
│  BOTTOM (180px): CPU历史 / 内存趋势 / 网络I/O  三图并排  │
└──────────────────────────────────────────────────────────┘
```

---

### CENTER — 3D 数据中心场景（核心）

**场景描述：**
一片黑暗的地面，8 个机柜整齐排列（4×2 网格），每个机柜 1.5×4×0.8 单位。机柜门为半透明深色，内置服务器插槽，服务器正面有 3 颗 LED 指示灯（电源/状态/网络）。

**服务器数据模型：**
```javascript
{
  id: "SRV01"， slot: 3，          // 第3个槽位
  status: "healthy"，             // healthy | warning | critical
  role: "web-server"，            // web-server | db-master | cache | app
  ip: "10.0.1.12"，
  cpu: 67，                       // 0-100
  mem: 43，                       // 0-100
  temp: 52，                      // 摄氏度
  netIn: 847， netOut: 312，       // MB/s
  uptime: "47d 12h"
}
```

**三级交互导航：**

1. **OVERVIEW（总览）** — 摄像机俯视所有机柜，显示总数统计
2. **RACK（机柜视角）** — 点击某个机柜，摄像机 GSAP 推进到该机柜正前方，显示该机柜内所有服务器
3. **SERVER（服务器视角）** — 点击某台服务器，右侧滑入详情面板，显示该服务器完整信息

**摄像机控制：**
- 鼠标左键拖拽：球坐标旋转
- 鼠标滚轮：缩放（radius 2~45）
- 鼠标右键拖拽：平移
- 所有摄像机移动使用 GSAP 动画，ease: 'power3.inOut'，duration: 1.4s

**3D 渲染要点：**
- 机柜材质：深色 MeshStandardMaterial，metalness: 0.8，roughness: 0.3
- 服务器：较浅的深色材质，每个服务器内置 3 个 SphereGeometry LED 灯珠
- LED 颜色：绿色=健康，琥珀色=警告，红色闪烁=严重
- 机柜门：半透明，可透视内部服务器
- Hover：鼠标悬停时光晕强度 emissiveIntensity + 1.2
- 地面：极暗的反光平面，有微弱的网格线

**服务器详情面板（点击服务器后）：**
```
┌─────────────────────────┐
│ SRV-05  ·  web-server  
   │
│ ─────────────────────── │
│ IP        10.0.1.12     │
│ STATUS    ● HEALTHY    │
│ UPTIME    47d 12h       │
│ ─────────────────────── │
│ CPU  ████████░░░  67% 
   │
│ MEM  ████░░░░░░  43%  
   │
│ TEMP █████░░░░░  52°C  │
│ NET  ↗847  ↙312 MB/s 
   │
└─────────────────────────┘
```
面板从右侧滑入（GSAP x:20→0， opacity:0→1， duration:0.35s）

---

### TOP BAR — 顶部状态栏

```
[>_ OpsVision] [DATACENTER OPERATIONS CENTER] [11:09:52 UTC] [ALERTS 3] [OPERATIONAL]
```

- Logo：`_> OpsVision`，Share Tech Mono，青色辉光
- 时间：实时 UTC，绿色辉光，每秒更新
- 告警数：红色徽章
- 系统状态：OPERATIONAL 绿色呼吸灯 / DEGRADED 琥珀 / OUTAGE 红色

---

### LEFT PANEL — 左侧面板

**SERVICE HEALTH（8项）：**
API Gateway / Auth Service / Database / Cache / Message Queue / CDN / Storage / Search
每项右侧有状态点（绿/黄/红闪烁）和状态文字。

**SYSTEM LOAD（3个 SVG 环形仪表）：**
CPU / Memory / Disk I/O，带 GSAP 进度动画。

**RECENT ALERTS（最多6条）：**
⚠/✗/✓ 图标 + 时间戳 + 消息，critical 告警红色闪烁。

---

### RIGHT PANEL — 右侧面板

**KPI CARDS（4张）：**
- P99 Latency：142ms（绿）
- Error Rate：0.03%（绿）
- Throughput：12，847 req/s（青）
- Active Nodes：127/128（琥珀，1异常）

**REQUEST RATE SPARKLINE：**
Canvas 2D 绘制最近 60 秒折线，青色线条+半透明填充，每 2 秒刷新。

**REGION TRAFFIC：**
US-EAST / EU-WEST / AP-EAST / AP-SE / Others，水平进度条，GSAP 填充动画。

**EVENT TIMELINE：**
● 时间 + 事件描述，最新在上。

---

### BOTTOM BAR — 底部图表栏

三图并排，均使用 Canvas 2D：

| 图表 | 类型 | 颜色 |
|---|---|---|
| CPU History (60min) | 折线 | `var(--neon-cyan)` |
| Memory Trend (60min) | 面积图 | `rgba(57，255，20，0.3)` |
| Network I/O (60min) | 双线 In/Out | 青 + 橙 |

时间轴刻度：`-60m · -45m · -30m · -15m · NOW`

---

### ANIMATION — 动画规范

| 动画 | 参数 |
|---|---|
| 摄像机移动 | GSAP， ease:'power3.inOut'， duration:1.4s |
| 服务器详情面板滑入 | x:20→0， opacity:0→1， duration:0.35s， ease:'power2.out' |
| 告警闪烁 | opacity:1→0.2， repeat:-1， yoyo:true， critical:0.8s / warning:1.5s |
| 状态点闪烁 | CSS animation step-end infinite |
| 仪表盘进度 | GSAP stroke-dashoffset， duration:1.5s， ease:'power2.out' |
| 进度条填充 | width:0→value%， stagger:0.1s |
| 页面入场 | topbar/left/right panel 依次 stagger 入场 |

---

### DATA — 数据生成

所有数据在页面加载时随机生成（页面刷新数据变化）：

```javascript
// 8 个服务
const services = [
  { name: 'API Gateway'，     status: 'healthy'  }，
  { name: 'Auth Service'，    status: 'healthy'  }，
  { name: 'Database'，        status: 'warning'  }，
  { name: 'Cache (Redis)'，   status: 'healthy'  }，
  { name: 'Message Queue'，  status: 'healthy'  }，
  { name: 'CDN Edge'，        status: 'healthy'  }，
  { name: 'Object Storage'， status: 'warning'  }，
  { name: 'Search Engine'，   status: 'healthy'  }，
];

// 8 个机柜，每柜 12-18 台服务器
const rackServerData = {
  'RACK-A01': [ /* 14台服务器 */ ]，
  'RACK-A02': [ /* 16台服务器 */ ]，
  // ... 共8个机柜
};

// 告警列表
const alerts = [
  { severity: 'warning'，  ts: Date.now()-90000，  msg: 'DB latency spike > 200ms'  }，
  { severity: 'critical'， ts: Date.now()-300000， msg: 'Storage IOPS limit reached' }，
  { severity: 'info'，    ts: Date.now()-420000， msg: 'Auto-scaled: +2 instances'  }，
];

// 底部图表数据（60个时间点，每2秒一个）
// CPU/Memory/Network 数组，每项 { t: timestamp， v: 0-100 }
```

服务器状态随机分布：70% healthy，20% warning，10% critical。
CPU/Memory 数值用正弦波+随机噪声生成，有真实波动感。

---

### RESPONSIVE — 响应式

| 断点 | 布局 |
|---|---|
| 1920px+ | 三栏标准布局 |
| 1440px | 地球仪缩小至 60vh |
| 1280px | 三栏紧凑排列 |

---

> **验收标准**：页面加载后可见完整的 3D 机柜场景，可旋转/缩放，点击机柜摄像机推进，点击服务器右侧出现详情面板，所有动画流畅，数据真实感强，无报错。

````
