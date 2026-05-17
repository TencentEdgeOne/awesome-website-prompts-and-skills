# Global Vehicle Mall

> **赛道**：Prompt　**作者**：不吃小鱼干
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![Global Vehicle Mall cover](../assets/demos/global-vehicle-mall.png)

<details>
<summary>🎞️ 点击展开查看 demo 动图</summary>

<img src="../assets/demos/global-vehicle-mall.gif" alt="Global Vehicle Mall demo" />

</details>

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | Global Vehicle Mall |
| 赛道 | Prompt |
| 作者 | 不吃小鱼干 |

## 📝 作品介绍

由此prompt生成的Global Vehicle Mall 是一款面向全球市场的 B2B+B2C 跨境电商独立站解决方案，以汽车出口为核心场景，同时具备极强的行业通用性。核心价值：为中国外贸企业提供「零代码上线」的国际化销售平台，覆盖从商品展示、多语言触达、询盘获客到订单管理的完整链路，帮助企业低成本打开海外市场。
适用场景：除汽车出口外，该架构可直接适配机械设备、电子消费品、建材家居、医疗器械等任何需要跨境B2B/B2C销售的品类——只需替换商品数据与图片，页面结构、购物车、订单系统、多语言（中/英/西/阿/俄）全部开箱即用。
亮点功能：
5语言实时切换，覆盖全球80%+主要市场
完整交易闭环：注册→寻车→加购→下单→订单追踪
全端响应式，PC/平板/移动端自适应
EdgeOne Pages 全球CDN加速部署，毫秒级全球访问
企业级视觉体验：毛玻璃导航、轮廓光斑动效、三栏联动筛选

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
# Global Vehicle Mall — AI 开发 Prompt（完整版）

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

***项目****: 汽车外贸出口商城网站（B2B+B2C）*
***框架****: Vue 3 + TypeScript + Vite + Tailwind CSS + Element Plus + Pinia*
***运行地址****: 前台 http://localhost:3002/*
***参赛****: WorkBuddy × Tencent EdgeOne AI Prompts & Skills 挑战赛*

## 一、项目概述
面向海外市场的全球汽车出口商城，支持 5 种语言（中/英/西/阿/俄），涵盖 **13 个页面路由**、完整注册登录链路、购物车与下单流程。
### 核心栏目（全部已完成）

| 栏目 | 路由路径 | 页面文件 | 状态 | 说明 |
| --- | --- | --- | --- | --- |
| 首页 | / | HomePage.vue (65KB) | ✅ 完成 | 三栏布局+Hero Banner+动画系统+轮廓光斑 |
| 寻车列表 | /vehicles | FindVehiclesPage.vue (8.5KB) | ✅ 完成 | 列表筛选搜索 |
| 车辆详情 | /vehicles/:id | VehicleDetailPage.vue (11KB) | ✅ 完成 | 详情+相似推荐 |
| 新闻列表 | /news | NewsPage.vue (6KB) | ✅ 完成 | 6篇行业资讯 |
| 新闻详情 | /news/:id | ArticleDetailPage.vue (12.5KB) | ✅ 详情 | 社交分享按钮 |
| 关于我们 | /about | AboutPage.vue (29.5KB) | ✅ 完成 | 10大区块(故事/团队/里程碑等) |
| 支持中心 | /support | SupportPage.vue (36.8KB) | ✅ 完成 | FAQ+物流+支付+保修+联系表单 |
| 登录 | /login | LoginPage.vue | ✅ 完成 | Demo账号快捷入口+GVM Logo装饰 |
| 注册 | /register | RegisterPage.vue (15KB) | ✅ 完成 | 个人/企业双Tab精简表单 |
| 购物车 | /cart | CartPage.vue (5.7KB) | ✅ 完成 | 购物车列表 |
| 结算 | /checkout | CheckoutPage.vue (10KB) | ✅ 完成 | 下单确认页 |
| 我的订单 | /orders | OrdersPage.vue (8.9KB) | ✅ 完成 | 订单列表 |
| 账户中心（仪表盘） | /account | AccountPage.vue + 7子组件 | ✅ 完成 | 左侧导航+右侧内容区(见下文详述) |

### 核心功能完成度

| 功能模块 | 状态 | 说明 |
| --- | --- | --- |
| 多语言切换 | ✅ | 5语言下拉选择器(zh/en/es/ar/ru)，默认显示当前语言 |
| 导航系统 | ✅ | 固定导航栏68px毛玻璃+路由高亮+汉堡菜单+auth守卫 |
| 首页交互 | ✅ | 三栏联动筛选+品牌pill+能源Tab+动画系统+轮廓光斑 |
| 用户注册 | ✅ | Personal(4字段)+Enterprise/B2B(6字段)双模式 |
| 用户登录 | ✅ | Demo账号(demo@globalvehicle.com/Demo123456)+Token守卫+路由保护 |
| 用户仪表盘 | ✅ | 左侧导航栏(sticky) + 7个子页面Tab切换(Orders/Vehicles/Info/Payments/Addresses/Favorites/Settings) + AppHeader头像下拉菜单(含登出) |
| 购物车 | ✅ | Pinia store(cart.ts)+添加/删除/数量调整 |
| 下单流程 | ✅ | Checkout结算页→Orders订单列表 |
| 新闻系统 | ✅ | 列表+详情+真实配图(n1~n6.jpg) |
| 企业展示 | ✅ | About Us 10大区块+Support Center 8大模块 |
| 响应式 | ✅ | 1024px汉堡菜单 / 640px纯图标 / 各页面独立适配 |

## 二、用户系统架构（完整版）
### 2.1 登录与认证
**默认 Demo 账号（评审/测试用）**：
- Email: demo@globalvehicle.com
- Password: Demo123456
- 登录名: Alex Chen
- 类型: Personal Account
- 点击「Use Demo Account」按钮一键填充
**认证流程**：
LoginPage → handleLogin() → 验证Demo账号 → userStore.login() 
→ 存储token(gvm_token) + 用户数据(gvm_user)到localStorage 
→ 跳转 /account (或 redirect参数指定页面)
**路由守卫**：requiresAuth → 未登录跳 /login?redirect=当前路径；requiresGuest → 已登录跳 /
### 2.2 用户仪表盘（AccountPage）— 布局结构
┌─────────────────────────────────────────────────────────────┐
│  Hero Banner: "My Account" / 👤 用户名 / Member since日期   │
├──────────┬──────────────────────────────────────────────────┤
│ LEFT     │  RIGHT (内容区, tab切换)                          │
│ Sidebar  │                                                  │
│ ~240px   │  ┌────────────────────────────────────────────┐ │
│ sticky   │  │  [根据activeTab显示对应子组件]                │ │
│          │  │                                            │ │
│ ┌──────┐ │  │  orders    → AccountOrders.vue            │ │
│ │ 头像  │ │  │  vehicles  → AccountVehicles.vue         │ │
│ │ 名字  │ │  │  profile   → AccountPersonalInfo.vue     │ │
│ │ Email │ │  │  payments  → AccountPayments.vue         │ │
│ ├──────┤ │  │  addresses → AccountAddresses.vue         │ │
│ │ACCOUNT│ │  │  favorites → AccountFavorites.vue        │ │
│ │📦Orders│ │  │  settings  → AccountSettings.vue        │ │
│ │🚗Vehic.│ │  │                                            │ │
│ │👤Info │ │  └────────────────────────────────────────────┘ │
│ │💳Paymt.│ │                                                  │
│ │SHOPPING│ │                                                  │
│ │📍Addr. │ │                                                  │
│ │❤️Fav.  │ │                                                  │
│ │SYSTEM  │ │                                                  │
│ │⚙️Sett. │ │                                                  │
│ │────────│ │                                                  │
│ │🚪Logout│ │                                                  │
│ └──────┘ │                                                  │
└──────────┴──────────────────────────────────────────────────┘
### 2.3 左侧导航菜单分组

| 分组 | 图标+标签 | Tab值 | 子组件 |
| --- | --- | --- | --- |
| ACCOUNT | 📦 My Orders | orders | AccountOrders.vue |
|  | 🚗 My Vehicles | vehicles | AccountVehicles.vue |
|  | 👤 Personal Info | profile | AccountPersonalInfo.vue |
|  | 💳 Payment Methods | payments | AccountPayments.vue |
| SHOPPING | 📍 Addresses | addresses | AccountAddresses.vue |
|  | ❤️ Favorites | favorites | AccountFavorites.vue |
| SYSTEM | ⚙️ Settings | settings | AccountSettings.vue |
| _(分隔线)_ | — | — | — |
|  | 🚪 Log Out | — | 弹窗确认后清除token+user，跳/login |

### 2.4 各子页面功能说明
**AccountOrders.vue（My Orders）**
- 顶部筛选栏：All / Pending / Processing / Shipped / Completed
- 订单卡片：车辆缩略图(v001~v005.jpg) + 订单号 + 车型名称 + 年份颜色 + 价格(红色¥格式) + 状态徽章(彩色圆角) + 日期 + View Details链接
- Mock数据：5条订单（含截图中的 Toyota Camry ¥245,800 和 多车组合单 ¥1,281,500）
**AccountVehicles.vue（My Vehicles）**
- Tab切换：Inquired (3辆) / Purchased (2辆)
- Inquired卡片：图片+名称+年份燃料+价格+状态标签+Message/View Details按钮
- Purchased卡片：图片+名称+VIN码+已付金额+购买时间
**AccountPersonalInfo.vue（Personal Info）**
- 头像区：圆形渐变背景(首字母)+编辑悬停提示
- 表单：Full Name / Email(禁用)/ Phone / Country下拉 / Company / Language偏好
- Save Changes / Cancel 按钮
**AccountPayments.vue（Payment Methods）**
- 信用卡可视化卡片（渐变背景+卡号掩码+有效期）：Visa ****4829(默认) + MasterCard ****7612
- 操作：Edit / Set Default / Remove
- Add Payment Method 按钮（虚线边框）
- Bank Transfer 信息区（银行/账号/SWIFT）
**AccountAddresses.vue（Addresses）**
- 地址卡片网格（1~2列）：类型标签(SHIPPING/BILLING) + 默认标记 + 姓名/电话/详细地址
- 3条Mock地址：深圳办公室(默认Shipping) / 深圳Billing / 迪拜仓库
**AccountFavorites.vue（Favorites）**
- 6辆车卡片网格（1~3列响应式）
- 图片悬停放大效果 + 价格渐变遮罩层 + Remove按钮(hover显示)
- 车辆信息：名称/年份/燃料/颜色 + 库存状态 + 收藏时间 + View Details按钮
**AccountSettings.vue（Settings）**
- Notification Preferences：4个开关(Order Updates/Price Alerts/Promotions/Newsletters)
- Security：Password修改/2FA/Session管理
- Preferences：Currency选择(CNY/USD/EUR/SAR) + Email订阅
- Danger Zone：Delete Account（红色警告样式）
### 2.5 AppHeader 登录态变化

| 状态 | 右侧显示 |
| --- | --- |
| 未登录 | 语言选择 ▼ \ |
| 已登录 | 语言选择 ▼ \ |

**头像下拉菜单内容**：
┌─────────────────┐
│  [A]  Alex Chen │  ← 头像+名字+Email
│       demo@...  │
├─────────────────┤
│ 📦 My Orders    │  → /account?tab=orders
│ ❤️ Favorites    │  → /account?tab=favorites
│ ⚙️ Settings     │  → /account
├─────────────────┤
│ 🚪 Log Out      │  → 清除token+跳首页
└─────────────────┘
### 2.6 数据持久化

| Key | 存储位置 | 内容 | 说明 |
| --- | --- | --- | --- |
| gvm_token | localStorage | 认证Token | 用于路由守卫判断登录状态 |
| gvm_user | localStorage | JSON字符串(UserProfile) | 刷新页面保留用户信息(姓名/Email/Phone/Country等) |
| gvm_cart | localStorage | JSON字符串 | 购物车数据(登出不清除) |

### 2.7 User Store 接口定义
interface UserProfile {
  id: string           // 'U100001'
  name: string         // 'Alex Chen'
  email: string        // 'demo@globalvehicle.com'
  phone: string        // '+86 138 0000 8888'
  country: string      // 'CN' | 'US' | ...
  userType: 'personal' | 'enterprise'
  avatar: string       // ''
  joinDate: string     // '2026-03-15'
}
Store方法：login() / logout() / setUser() / updateUser() / isLoggedIn(computed)

## 三、首页布局规范（详细）
┌──────────────────────────────────────────────────────────────┐
│  导航栏 AppHeader (fixed, h=68px, 毛玻璃 backdrop-blur)      │
│  [Logo扫光] [Home✓] [Vehicles] [News] [About] [Support]     │
│                              [🌐EN▼语言] [🛒0红标] [Login渐变] │
├──────────────────────────────────────────────────────────────┤
│                    HERO SECTION (全宽)                        │
│  ┌──────────────────┬─────────────────────────────────┐      │
│  │  LEFT: 文字内容    │   RIGHT: 汽车图片               │      │
│  │  Badge徽章        │   hero-car.jpg                 │      │
│  │  H1大标题(shimmer)│   ┌──────────────────┐         │      │
│  │  副标题           │   │ mask-image裁剪    │         │      │
│  │  搜索框(glow)     │   │ ┌sweep-body腰线┐ │         │      │
│  │  统计数字(计数器)  │   │ ├sweep-roof车顶┤ │         │      │
│  │  滚动指示器       │   │ └sweep-lower下沿┘ │         │      │
│  │                  │   │ +edge-glow边缘光  │         │      │
│  │                  │   └──────────────────┘         │      │
│  │                  │   浮动元素fe1~fe5+sparkle       │      │
│  └──────────────────┴─────────────────────────────────┘      │
│                    Canvas粒子背景(30粒+连线)                   │
├────────────┬──────────────────────────┬──────────────────────┤
│  左侧边栏   │       中间主区域          │     右侧边栏          │
│  ~260px     │       flex-1             │     ~280px           │
│            │                          │                      │
│ 🚗 Vehicle │ 🏷️ Popular Brands        │ ⚡ Energy Types      │
│ Categories │ [Toyota][BMW][Tesla]...  │ [🔋BEV][🔌PHEV][⛽ICE]│
│            │                          │                      │
│ ▸ SUV  8   │ Active Filter Tags:      │ ┌mini vehicle list─┐ │
│ ▸ Sedan 5  │ [SUV ×] [Tesla ×]       │ │img+name+price → │ │
│ ▸ MPV  2   │ [🔥Hot ×]              │ │img+name+price → │ │
│ ▸ Sports 2 │ [Clear All]             │ │img+name+price → │ │
│ ▸ Pickup 2 │                          │ │...max 6 items   │ │
│ ▸ Wagon 1  │ ⭐ Featured Vehicles    │ └────────────────┘ │
│            │ Showing X of 20          │                      │
│ ⚡ Filters  │ ┌────┐┌────┐┌────┐     │ [📋Get Quote]       │
│ ☑ Hot Sell │ │card││card││card│     │ [📥Download Cat]    │
│ ☑ New Arriv│ │    ││    ││    │     │ [💬Contact Sales→]  │
│ ☑ In Stock │ └────┘└────┘└────┘     │                      │
├────────────┴──────────────────────────┴──────────────────────┤
│              Why Choose Us (6特色卡片 staggered reveal)       │
│  💰Best Price 🔍Quality Check 🚢Logistics ⏱Warranty          │
│  🎨Customization 💳Payment Flex                             │
├──────────────────────────────────────────────────────────────┤
│              Latest News (新闻动态, 4列 grid)                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐       │
│  │ n1.jpg   │ │ n2.jpg   │ │ n3.jpg   │ │ n4.jpg   │       │
│  │ badge+title│ │ badge+title│ │ badge+title│ │ badge+title│    │
│  │ date     │ │ date     │ │ date     │ │ date     │       │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘       │
└──────────────────────────────────────────────────────────────┘
                                    [↑ Back to Top 按钮]
### 布局参数

| 参数 | 值 | 说明 |
| --- | --- | --- |
| 导航栏高度 | 68px | padding-top: 68px 全站统一 |
| 侧边栏 sticky top | 84px | 导航栏+间距 |
| 三栏断点 | 1280px | ≤1280px 隐藏右侧栏 |
| 汉堡菜单断点 | 1024px | ≤1024px 隐藏左侧栏 |
| 移动端断点 | 640px | ≤640px 纯图标+隐藏汽车图 |

## 四、首页动画系统规范
### 3.1 Hero 区域入场动画（Staggered Reveal）
**触发机制**: heroVisible = ref(false) → onMounted 150ms 后设为 true → 绑定到 .hero-section 的 :class="{ 'animate-in': heroVisible }"
时间轴:
0ms     → animate-in class added to .hero-section
50ms    → Badge slide-down (badge-reveal)
200ms   → H1 Title fade-up (title-reveal) + shimmer underline expand
350ms   → Subtitle fade-up (subtitle-reveal)
500ms   → Search bar glow-in (search-reveal)
650ms   → Stats counter start (stats-reveal) + AnimatedNumber RAF counting
400ms   → Car photo fade-up (car-reveal) ← 注意：animate-in在父元素section上才能匹配兄弟.car-reveal
**关键CSS规则**:
/* Base state: invisible */
.badge-reveal, .title-reveal, .subtitle-reveal,
.search-reveal, .stats-reveal, .car-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}
/* Revealed state */
.animate-in .car-reveal { transition-delay: 0.4s; opacity: 1; transform: translateY(0); }
/* ... 其他类似 */
**⚠️ 踩坑**: animate-in 类必须绑定到包含所有子元素的**最近公共父元素**(.hero-section)，不能只绑在 .hero-content 上，否则同级的 .hero-car-stage > .car-reveal 选择器永远匹配不到。
### 3.2 轮廓追踪光斑系统（Contour Light Sweeps）
**核心技术**: mask-image: url(/vehicles/hero-car.jpg) 将整个光斑容器裁剪到汽车轮廓内
.car-photo-wrap 结构:
┌────────────────────────────────┐
│  <img class="car-photo">       │  底层：汽车原图
│  <div class="car-overlay-left">│  左侧渐变融合
│  <div class="car-overlay-bottom">│ 底部渐变融合
│  <div class="contour-light-wrap">│ ★ 光斑容器(mask-image=car)
│    <div class="contour-sweep    │
│      sweep-body">               │  腰线主光 (7s周期)
│    <div class="contour-sweep    │
│      sweep-roof">               │  车顶线光 (9s周期, delay 1.5s)
│    <div class="contour-sweep    │
│      sweep-lower">              │  下沿线光 (8s周期, delay 3s)
│  </div>
│  <div class="car-edge-glow">    │  边缘呼吸描边(inset shadow)
│  <div class="corner-shine ..."> │  角落微光
└────────────────────────────────┘
**三层光斑轨迹参数**:

| 层 | CSS类 | 轨迹描述 | 周期 | 延迟 | 视觉特征 |
| --- | --- | --- | --- | --- | --- |
| Body | sweep-body | 前翼子板(44%top)→车门腰线(34%)→后翼子板弧降(50%) | 7s | 0s | 暖白 conic-gradient, blur 6px, color-dodge |
| Roof | sweep-roof | 挡风玻璃(18%)→车顶峰值(10%)→后窗下滑(22%) | 9s | 1.5s | 冷蓝 linear-gradient, blur 5px |
| Lower | sweep-lower | 前保(16%bottom)→侧裙底(10%)→后保(20%) | 8s | 3s | 柔和蓝白, blur 10px |

每层 @keyframes 包含: left位置变化 + top/bottom弧线 + opacity淡入淡出 + scaleX缩放 + rotate旋转 + skewX倾斜
### 3.3 Canvas 粒子系统
- **数量**: 30个粒子
- **行为**: 缓慢漂浮 + 相邻粒子(<120px)自动连线
- **生命周期**: onMounted initParticles() → onBeforeUnmount cleanup()
- **颜色**: rgba(99,125,200,0.3~0.6) 半透明靛蓝
### 3.4 Scroll Reveal 系统（IntersectionObserver）
**Observer 配置**:

| 目标区域 | 选择器列表 | threshold | rootMargin |
| --- | --- | --- | --- |
| main-layout | .card-float-in, .card-float-in-right, .brand-reveal, .grid-header-reveal, .filter-tags-reveal, .vehicle-card-stagger, .cat-stagger | 0.08 | 0px 0px -40px 0px |
| news-section | Vue ref绑定 newsRevealed.value=true | 0.1 | 0px 0px -60px 0px |
| why-section | Vue ref绑定 whyRevealed.value=true | 0.12 | 0px 0px -40px 0px |

**⚠️ 踩坑**: Observer 必须同时 querySelector .card-float-in 和 .card-float-in-right，漏掉任何一个都会导致该侧栏永远 opacity: 0。
### 3.5 其他动画细节

| 元素 | 动画效果 | 实现方式 |
| --- | --- | --- |
| 数字统计 | 从0跳动到目标值 | AnimatedNumber defineComponent + RAF ease-out 1800ms |
| 标题下划线 | 金色shimmer从左展开60px | .animate-in .hero-title::after width 0→60px |
| 搜索框聚焦 | 蓝色ring+box-shadow光晕 | :focus + .focused 类 |
| 按钮hover | radial-gradient涟漪光环 | ::before 伪元素扩散 |
| 滚动指示器 | 鼠标滚轮滚动动画 | scroll>400px v-show隐藏 |
| 回到顶部 | 右下角固定 | scroll>600px显示, fade-up过渡 |
| 品牌选中 | pillPop弹跳缩放 | scale 0.95→1.05→1 |
| 能源Tab切换 | crossfade上下滑动 | <transition mode="out-in"> |
| 分类项滑入 | 左侧staggered | 每60ms延迟 translateX(-12px→0) |
| 车辆卡片 | scroll-reveal staggered | 每80ms延迟 |
| 新闻卡片 | 交错100ms + 图片zoom(1.08) | hover状态 |
| Why卡片 | 图标rotate+iconBounce弹跳 | hover状态 |

## 五、全局组件与布局
### 4.1 AppHeader.vue（15.5KB）— 导航栏
结构: fixed定位, z-index 999, h=68px
├─ Logo (文字 "Global Vehicle Mall" + logoShine 扫光动画)
├─ 导航链接 (Home/Vehicles/News/About/Support)
│   ├─ SVG图标 + 文字 + 当前页isActive高亮(深蓝+下划线)
│   └─ click → navigateTo(path)
├─ 右侧操作区
│   ├─ 语言选择器 LanguageBar (下拉: 国旗+名称+选中✓动画)
│   ├─ Cart 购物车 (红色数字徽标 .cart-badge)
│   └─ Login 按钮 (浅紫→深蓝渐变 hover)
└─ 移动端: Hamburger按钮 → 全屏覆盖菜单
**关键实现**:
- useRoute() + useRouter() 动态计算 active 状态（非硬编码）
- backdrop-filter: blur(20px) 毛玻璃背景
- scrollY > 10 加深阴影
- @scroll 监听器（onMounted挂载，onBeforeUnmount移除）
### 4.2 AppFooter.vue（4.6KB）— 页脚
- 三栏布局：公司信息 / 快速链接 / 联系方式
- 版权信息 + 社交媒体链接
- App.vue 中全局包裹（无需每个页面单独引入）
### 4.3 LanguageBar.vue（1.6KB）— 语言选择器
- 下拉式，默认显示当前语言（国旗emoji+名称）
- 5种语言：zh🇨🇳 / en🇺🇸 / es🇪🇸 / ar🇸🇦 / ru🇷🇺
- 本地状态管理（非Pinia store）
### 4.4 VehicleCard.vue（7.4KB）— 车辆卡片
┌────────────────────┐
│  <img> 真实汽车照片  │  object-fit: cover
│  ┌EnergyBadge─────┐│  BEV绿/PHEV蓝/ICE橙
│  │ BEV/PHEV/ICE   ││
│  └────────────────┘│
│                     │
│  Brand Model        │  字体加粗
│  ¥xxx,xxx           │  PriceDisplay组件
│  ─────────────────  │
│  [View Details →]   │  hover遮罩层出现
└────────────────────┘
- hover: 图片 scale(1.03) + "View Details"半透明遮罩从底部滑入
- 使用本地 /vehicles/vXXX.jpg 图片
### 4.5 PageContainer.vue — 页面包装器
- 统一 padding-top: 68px
- 所有子页面通过 App.vue 全局包裹，**禁止重复引入** AppHeader/AppFooter

## 六、各页面详细说明
### 5.1 HomePage.vue（65KB）— 首页（最复杂页面）
见第二、三节完整规范。
### 5.2 FindVehiclesPage.vue（8.5KB）— 寻车页
- 统一深蓝 Hero Banner（from #1a237e to #303f9f + 网格纹理）
- 筛选面板：分类/品牌/能源类型/价格范围
- 车辆网格列表
- 使用 VehicleCard 组件
### 5.3 VehicleDetailPage.vue（11KB）— 车辆详情
- Hero Banner + 面包屑导航
- 大图展示 + 轮播
- 详细规格表格（specs）
- 价格信息（国内指导价¥ + 出口报价$）
- Similar Vehicles 推荐区（lg:grid-cols-3，修复过重叠问题）
- Add to Cart 按钮
### 5.4 NewsPage.vue（6KB）— 新闻列表
- Hero Banner
- 6篇新闻卡片 grid 布局（n1~n6.jpg 真实配图）
- 分类标签（Industry/Company/Product）
### 5.5 ArticleDetailPage.vue（12.5KB）— 新闻详情
- Hero Banner + 面包屑
- 文章正文内容
- **Share 分享区域**（4按钮）:
- LinkedIn (#0077B5) + 官方SVG图标
- Twitter/X (黑色)
- Facebook (#1877F2)
- Copy Link (灰色，点击复制URL，2秒后恢复)
### 5.6 AboutPage.vue（29.5KB）— 关于我们
**10大区块**:
- Hero Banner (h=300/360px, 双CTA)
- 数据统计条（负margin悬浮, 7年+/80国/10K车/2K客户, 4px彩色圆角卡片）
- Mission/Vision/Values（3列卡片）
- Our Story（左文右4亮点卡）
- Why Choose Us（6特性卡, 品牌色图标背景）
- 里程碑时间轴（8节点, 2018→Now, 交替左右排列）
- Global Presence（6区域数据卡+4办公室详情）
- Leadership Team（4人头像首字母卡+社交图标）
- Brand Partnerships & Certifications（12品牌标签+6认证卡）
- CSR/Sustainability（深蓝底+4承诺+4绿色指标卡+CTA）
**紧凑化处理**: 所有section间距缩减30-40%，卡片padding缩小，字号降低一级
### 5.7 SupportPage.vue（36.8KB）— 支持中心
**8大模块**:
- Hero Banner（深蓝渐变+搜索框+装饰圆）
- 快捷入口卡片区（FAQ/Shipping/Payment/Contact 4卡, hover上浮）
- **FAQ手风琴**（18条, 6分类Tab筛选: All/Order/Shipping/Payment/Vehicle/After-Sales + 关键词搜索）
- 物流信息（运输对比表+4步流程图+6区域时效卡）
- 支付方式（4种卡片+5步流程）
- 退换货&保修（Return Policy 5条+Warranty Coverage 5条, 双栏）
- 订单追踪指南（垂直时间轴8阶段）
- **联系表单**（6字段: Name/Email/Phone/Company/Subject下拉/Message + 隐私协议 + 右侧联系方式卡+4办公室地址）
**侧边栏**: 锚点导航(6个) + 系统状态横幅(~42min响应) + 资源链接
**紧凑化**: 全面间距缩减（Hero py-12→py-7, sections mb-14→mb-9, cards p-6→p-5）
### 5.8 RegisterPage.vue（15KB）— 注册页
**双Tab设计**:

| Tab | 字段数 | 字段清单 |
| --- | --- | --- |
| Personal (4) | Country/Region*(Select搜索下拉) | Full Name* |
| Enterprise/B2B (6) | Company Type*(批发🏭/零售🏪可视化选卡) | Company Name* |

- 统一 Hero Banner
- 输入框 emoji 前缀图标
- 底部信任标识条（SSL/GDPR/Free/No Credit Card）
- 已移除：密码确认、营业执照上传、年采购量等冗余字段
### 5.9 LoginPage.vue（3KB）— 登录页
- 简洁表单（Email + Password）
- Register 链接
- Demo 模式简化
### 5.10 CartPage.vue（5.7KB）— 购物车
- 商品列表（图片+名称+价格+数量调整+删除）
- 总价计算
- Checkout 按钮
- **注意**: 已修复 t() 未导入问题（添加 useI18n）
### 5.11 CheckoutPage.vue（10KB）— 结算页
- 收货地址表单
- 订单摘要
- 支付方式选择
- 确认下单按钮
### 5.12 OrdersPage.vue（8.9KB）— 订单列表
- 订单卡片列表
- 状态标签（pending/processing/shipped/delivered）
- **注意**: 已修复 t() 未导入问题
### 5.13 AccountPage.vue（4.5KB）— 账户中心
- 个人信息展示/编辑
- **注意**: 已修复 t() 未导入问题

## 七、技术栈与代码规范
### 技术栈
{
  "framework": "Vue 3 (Composition API + <script setup lang='ts'>)",
  "language": "TypeScript (strict mode)",
  "build": "Vite 5.x",
  "styling": "Tailwind CSS 3.x + scoped CSS (优先级: Tailwind > scoped > global)",
  "ui-library": "Element Plus (el-input, el-icon, el-message 等)",
  "i18n": "vue-i18n",
  "router": "vue-router 4 (createWebHistory)",
  "state": "Pinia (stores/cart.ts, user.ts, vehicle.ts)"
}
### 代码规范

| 规范项 | 要求 |
| --- | --- |
| 组件命名 | PascalCase，如 VehicleCard.vue |
| 样式优先级 | Tailwind 工具类 > scoped CSS > 全局 CSS |
| 图片资源 | 统一放 public/ 目录，引用以 / 开头 |
| 注释语法 | <template> 用 <!-- -->；<style> 用 /* */ |
| UI 语言 | 英文为主（界面文字），中文为辅（代码注释+文档） |
| 动画缓动 | 主力曲线 cubic-bezier(0.22, 1, 0.36, 1) |
| 响应式 | mobile-first，核心断点 640/1024/1280px |

## 八、设计风格指南
### 配色体系

| 角色 | 色值 | 用途 |
| --- | --- | --- |
| 主色 Primary | #4F46E5 Indigo | 按钮、链接、主要强调 |
| 辅助色 Secondary | #8B5CF6 Violet | 渐变辅助、标签、装饰 |
| 成功 Success | #10B981 Emerald | 可用状态、涨(中国股市红) |
| 警告 Warning | #F59E0B Amber | 待处理状态 |
| 危险 Danger | #EF4444 Red | 错误、删除、购物车徽标 |
| 信息 Info | #3B82F6 Blue | 链接、信息提示 |
| 页面背景 | #F9FAFB Gray-50 | 整体底色 |
| 卡片背景 | #FFFFFF White | 内容容器 |
| 主文字 | #111827 Gray-900 | 标题、重要文本 |
| 次要文字 | #6B7280 Gray-500 | 描述、辅助信息 |
| Hero深蓝渐变 | #1a237e → #303f9f | Banner/Hero区域 |

### 设计原则
- **简洁大气** — 留白充足（section间 py-10~py-16），避免拥挤
- **圆角统一** — 卡片 rounded-xl(12px) / 按钮 rounded-lg(8px) / 头像 rounded-full
- **阴影层次** — 默认 shadow-sm → hover shadow-lg → 弹窗 shadow-2xl
- **静态优于动画** — Banner用静态图，微交互动画点缀（不使用整屏滚动视差）
- **毛玻璃浮层** — 导航栏等fixed元素使用 backdrop-filter: blur
- **Hover必有反馈** — 所有可交互元素必须有 :hover 状态变化
- **统一Banner风格** — 所有子页面使用相同深蓝渐变Hero（from-[#1a237e] to-[#303f9f]+网格纹理装饰）
- **紧凑化趋势** — 近期改动趋向减少间距、缩小字号，提升信息密度
### 全局特性
- **WhatsApp浮动按钮**: 右下角固定，绿色圆形(w-12/h-12/text-xl)
- **平滑滚动**: scroll-behavior: smooth 全局生效
- **彩色竖线装饰**: 各section标题左侧带不同颜色的竖线分隔符
- **回到顶部**: 右下角固定按钮(>600px显示), fade-up过渡

## 九、数据结构
### Vehicle 接口 (`src/data/vehicles.ts`)
interface Vehicle {
  id: string                    // "v001" ~ "v020"
  name: string                  // 车型全称
  brand: string                 // Toyota/BMW/Tesla/...
  category: string              // SUV | Sedan | MPV | Sports | Pickup | Wagon | Van
  energyType: 'BEV' | 'PHEV' | 'ICE'
  domesticGuidePrice: { min: number; max: number }  // 国内指导价 ¥ (新字段名!)
  exportPrice: { min: number; max: number }         // 出口报价 $ (新字段名!)
  images: string[]              // ['vehicles/v001.jpg']
  specs: Record<string, string> // { engine: "...", power: "..." }
  features: string[]            // 特色功能列表
  available: boolean            // 是否有货
}
***注意****: 旧版字段名 **price: { cn; usd }** 已重命名为 **domesticGuidePrice** + **exportPrice*
### 车型数据规模: **20辆车**, 7个品牌, 7种分类, 3种能源类型
### 多语言配置

| 语言 | code | 文件 | 状态 |
| --- | --- | --- | --- |
| 中文 | zh | public/locales/zh.json | ✅ |
| English | en | public/locales/en.json | ✅ |
| Español | es | public/locales/es.json | ✅ |
| العربية | ar | public/locales/ar.json | ✅ |
| Русский | ru | public/locales/ru.json | ✅ |

## 十、资源文件清单
### 图片资源

| 目录 | 文件 | 数量 | 说明 |
| --- | --- | --- | --- |
| public/vehicles/ | hero-car.jpg, v001.jpg ~ v020.jpg | 21张 | Unsplash CC0免费商用汽车实拍图 |
| public/news/ | n1.jpg ~ n6.jpg | 6张 | 新闻配图(物流/政策/展会等) |
| public/ | favicon.svg | 1 | 站点图标 |

### Pinia Stores

| Store | 文件 | 用途 |
| --- | --- | --- |
| cart | stores/cart.ts | 购物车状态管理 |
| user | stores/user.ts | 用户登录状态/token |
| vehicle | stores/vehicle.ts | 车辆筛选/数据 |

## 十一、路由与权限守卫
// 路由守卫逻辑 (router/index.ts beforeEach)
// 1. 自动设置 document.title
// 2. requiresAuth + 无token → 重定向到 /login?redirect=当前路径
// 3. requiresGuest + 有token → 重定向到 Home

// 权限分类:
//   requiresGuest: Login, Register（已登录用户不可访问）
//   requiresAuth: Checkout, Orders, Account（需要登录）
//   其余: 公开页面

## 十二、待开发 / 可优化项
### P0 — 高优先（核心链路完善）
- [ ] **后端API对接**: 当前为纯前端Demo，需接入EdgeOne Cloud Functions/Edge Functions
- [ ] **注册登录真实验证**: 表单提交→后端校验→JWT Token签发
- [ ] **购物车持久化**: LocalStorage/IndexedDB 或服务端同步
- [ ] **支付集成**: 支付网关对接（Stripe/PayPal等）
- [ ] **多语言完善**: 部分硬编码文本迁移到 i18n JSON
### P1 — 中优先（体验增强）
- [ ] **车辆对比功能**: 选2-3车横向对比参数
- [ ] **收藏夹/Wishlist**: 关注车辆列表
- [ ] **订单追踪实时状态**: 对接物流API
- [ ] **在线客服聊天**: 第三方客服组件嵌入
- [ ] **寻车页增强**: 更多筛选项(年份/里程/颜色)、排序、分页
### P2 — 低优先（锦上添花）
- [ ] 暗黑模式(Dark Mode)
- [ ] PWA离线支持
- [ ] 图片懒加载优化(LQIP/BlurHash)
- [ ] SEO Meta标签完善
- [ ] 性能监控与分析

## 十三、部署上线流程（EdgeOne Pages）
### 前置要求
- **EdgeOne 账号**: 腾讯云账号，需已登录
- **CLI 工具**: npm install -g @edgeone/cli
- **Zone 激活**: EdgeOne 主控制台（https://console.cloud.tencent.com/edgeone/sites）需有至少一个已激活的 Zone
### 部署命令
**Step 1 — 切换到中国站点（重要！）**
edgeone switch --site china
**Step 2 — 确认登录状态**
edgeone whoami
**Step 3 — 构建项目**
cd global-vehicle-mall
npm run build
**Step 4 — 部署到 EdgeOne Pages**
# 全量部署（自动选择区域）
edgeone pages deploy

# 或指定区域+项目名
edgeone pages deploy -n global-vehicle-mall -a overseas
***⚠️ 常见错误 `Zone is not active`****：说明账号没有激活 EdgeOne Zone。需先到 https://console.cloud.tencent.com/edgeone/sites 添加站点激活 Zone 后再部署。*
**Step 5 — 查看部署结果**
CLI 输出包含 deployment URL，即为线上访问地址。
### 踩坑说明

| 错误信息 | 原因 | 解决方案 |
| --- | --- | --- |
| Zone is not active | 账号无激活的 EdgeOne Zone | 在 EdgeOne 主控台添加站点激活 Zone |
| Project doesn't exist, creating new | 新建 Pages 项目，自动创建 | 无需处理，正常继续 |
| 浏览器登录失败 | 需开启弹窗权限 | 允许当前站点弹出窗口 |

## 十四、踩坑经验库（持续更新）

| # | 场景 | 经验要点 | 发现日期 |
| --- | --- | --- | --- |
| 1 | template注释 | <template> 中必须用 <!-- -->，禁止 /* */（浏览器当纯文本渲染） | 04-27 |
| 2 | PowerShell下载 | 正斜杠路径，分批执行，避免长命令链失败 | 04-27 |
| 3 | Unsplash图片 | 部分Photo ID会404，需验证后使用；最终改为本地化存储 | 04-27 |
| 4 | 导航栏高度变化 | 连锁调整全站 padding-top(68px) 和侧边栏 sticky-top(84px) | 04-27 |
| 5 | CSS变量作用域 | Vue scoped CSS中变量需写在:root或全局样式，scoped内无效 | 04-27 |
| 6 | t()未导入 | 任何使用t('...')的.vue文件必须显式import { useI18n } + const { t } = useI18n()，Vite不会自动注入。漏掉会导致 ReferenceError → 整页白屏 | 04-28 |
| 7 | 全局组件重复渲染 | App.vue已全局包裹AppHeader+AppFooter，子页面禁止再次import，否则出现双导航双Footer | 04-28 |
| 8 | animate-in作用域 | Staggered reveal的父级类(如animate-in)必须绑定到包含所有目标元素的最近公共祖先上。如果子元素是兄弟关系而非父子，绑在任一子元素上都无法通过后代选择器匹配另一个兄弟 | 04-28 |
| 9 | Observer选择器遗漏 | IntersectionObserver回调中的querySelectorAll必须列出所有带初始opacity:0的类名。漏掉任何一类会导致该元素永远不会被添加revealed类，永远不可见 | 04-28 |
| 10 | replace_in_file重复标签 | 用replace_in_file替换大块代码时，若old_str未完全匹配原始结尾，可能导致残留旧代码（如两个连续</style>），造成SFC解析失败 | 04-28 |
| 11 | mask-image轮廓光斑 | 使用mask-image: url(汽车图片)可实现任意形状的光斑裁剪，光斑自动贴合被遮罩物体的轮廓。适合产品展示场景的聚光灯效果 | 04-28 |

## 十五、项目文件结构速查
global-vehicle-mall/
├── public/
│   ├── vehicles/              # 21张汽车图片 (hero-car.jpg + v001~v020.jpg)
│   ├── news/                  # 6张新闻配图 (n1~n6.jpg)
│   ├── locales/               # i18n翻译JSON (zh/en/es/ar/ru)
│   ├── favicon.svg
│   └── hero-car.jpg           # (实际在vehicles/内，此为备用引用)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue      # 15.5KB — 固定导航栏(毛玻璃+语言选择+路由高亮)
│   │   │   ├── AppFooter.vue      # 4.6KB  — 全局页脚
│   │   │   ├── LanguageBar.vue    # 1.6KB  — 下拉语言选择器
│   │   │   └── PageContainer.vue  # 223B   — 统一pt-68px包装器
│   │   └── vehicle/
│   │       ├── VehicleCard.vue    # 7.4KB  — 车辆卡片(img+价格+hover遮罩)
│   │       ├── EnergyBadge.vue    # 891B   — 能源类型标签(BEV/PHEV/ICE)
│   │       └── PriceDisplay.vue   # 811B   — 价格展示组件
│   ├── views/                    # 13个页面 (全部已完成)
│   │   ├── HomePage.vue           # 65KB   — 首页(最复杂:三栏+动画+光斑+粒子)
│   │   ├── FindVehiclesPage.vue   # 8.5KB  — 寻车列表
│   │   ├── VehicleDetailPage.vue  # 11KB   — 车辆详情
│   │   ├── NewsPage.vue           # 6KB    — 新闻列表
│   │   ├── ArticleDetailPage.vue  # 12.5KB — 新闻详情+分享
│   │   ├── AboutPage.vue          # 29.5KB — 关于我们(10大区块)
│   │   ├── SupportPage.vue        # 36.8KB — 支持中心(8大模块)
│   │   ├── RegisterPage.vue       # 15KB   — 注册(个人/企业双Tab)
│   │   ├── LoginPage.vue          # 3KB    — 登录
│   │   ├── CartPage.vue           # 5.7KB  — 购物车
│   │   ├── CheckoutPage.vue       # 10KB   — 结算
│   │   ├── OrdersPage.vue         # 8.9KB  — 订单列表
│   │   └── AccountPage.vue        # 4.5KB  — 账户中心
│   ├── data/
│   │   └── vehicles.ts            # 20个车型完整数据(Vehicle接口)
│   ├── stores/
│   │   ├── cart.ts                # 购物车Store
│   │   ├── user.ts                # 用户Store
│   │   └── vehicle.ts             # 车辆Store
│   ├── i18n/
│   │   └── index.ts               # vue-i18n配置实例
│   ├── router/
│   │   └── index.ts               # 13条路由+权限守卫
│   ├── App.vue                    # 根组件(全局Header/Footer包裹)
│   └── main.ts                    # 入口文件
├── edge-functions/                # EdgeOne 边缘函数(待开发)
├── cloud-functions/               # 云函数(待开发)
├── AI-PROMPT.md                   # ← 本文件
└── package.json

*最后更新: 2026-04-29 10:18 | 基于 WorkBuddy 全量对话历史整理*
*覆盖范围: 04-27 至 04-29 所有已完成改动 + 架构决策 + 踩坑经验 + EdgeOne Pages 部署流程 + 用户系统(登录/仪表盘/7子页面)完整实现*
```
