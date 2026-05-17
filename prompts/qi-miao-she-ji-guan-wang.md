# 奇妙设计官网

> **赛道**：Prompt　**作者**：邹钰明 · [GitHub @zouyuming](https://github.com/zouyuming)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![奇妙设计官网 demo](../assets/demos/qi-miao-she-ji-guan-wang.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 奇妙设计官网 |
| 赛道 | Prompt |
| 作者 | 邹钰明 |
| GitHub | [@zouyuming](https://github.com/zouyuming) |

## 📝 作品介绍

作品名称
奇妙设计官网 — 高端设计服务品牌展示网站

作品介绍
核心价值： 为上海高端设计工作室打造的精品官网，以深蓝金色为主色调，传递奢华专业品牌形象。

适用场景： 适用于设计工作室、广告公司、品牌策划机构等创意类企业的线上品牌展示与业务获客。

亮点功能：

🎨 品牌视觉系统：深蓝+金色配色方案，统一的CSS设计token体系
✨ 沉浸式动效：Hero区浮动金色粒子、滚动淡入动画、数字滚动计数
📱 响应式设计：适配桌面、平板、手机全端设备
⚡ 单文件架构：纯HTML实现，便于AI生成与部署
🔧 现代化技术栈：CSS Grid/Flexbox布局、Intersection Observer动画、requestAnimationFrame性能优化

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

# 奇妙设计官网 - 高端印刷设计服务商

## Target（核心功能与目标）

生成一个单文件HTML网站，展示高端印刷设计与创意制作服务商"奇妙设计"的品牌形象。网站需要体现奢华、专业的品牌调性，同时具备出色的视觉冲击力和流畅的动效体验。

**核心目标**：

- 展示六大核心业务（包装定制、画册印刷、宣传物料、商务办公、文创礼品、影像装帧）
- 建立高端品牌形象（服务奢侈品牌客户）
- 引导用户进行咨询转化

---

## Brand（品牌调性与风格要求）

### 品牌定位

- **行业**：高端印刷设计与创意制作
- **客户**：奢侈品、腕表、美妆、酒类等高端品牌
- **调性**：奢华、专业、匠心、可靠

### 色彩规范

```css
:root {
  --primary: #1a1a2e;        /* 深靛蓝 - 主背景 */
  --secondary: #16213e;      /* 深蓝 - 次级背景 */
  --accent: #c9a96e;        /* 香槟金 - 主强调色 */
  --accent-light: #e8c98a;   /* 浅金色 - hover状态 */
  --accent-dark: #b8944f;    /* 深金色 - 边框 */
  --text-dark: #1a1a2e;     /* 深色文字 */
  --text-mid: #4a4a6a;       /* 中灰文字 */
  --text-light: #8a8aaa;     /* 浅灰文字 */
  --text-inverse: #ffffff;   /* 反色文字 */
  --bg-light: #f8f7f4;      /* 浅暖白 */
  --bg-warm: #f2ede6;       /* 暖米色 */
  --bg-white: #ffffff;        /* 纯白 */
  --bg-dark: #0d0d1e;       /* 深黑背景 */
  --border: rgba(201，169，110，0.25);
}
```

### 字体规范

- **中文字体**：Noto Serif SC（标题）、Noto Sans SC（正文）
- **西文字体**：Inter（数字/品牌名）、Cinzel（Logo）
- **引入方式**：Google Fonts CDN

---

## Tech Stack（技术实现要求）

### 必须实现

- **单文件HTML**：所有CSS和JS内联，无外部依赖（除字体和图片）
- **纯CSS动画**：使用CSS `@keyframes`实现所有动效，无JS动画库
- **Intersection Observer**：实现滚动触发的淡入动画
- **CSS Grid + Flexbox**：现代化响应式布局
- **CSS变量**：统一管理所有设计token

### 性能要求

- **首屏加载**：< 3秒（3G网络）
- **动画性能**：使用`transform`和`opacity`，避免重排重绘
- **图片优化**：所有图片使用`object-fit: cover`适配

---

## Layout Constraints（页面布局与交互规则）

### 1. 导航栏（Navigation）

- **定位**：`position: fixed`，滚动时固定顶部
- **毛玻璃效果**：`backdrop-filter: blur(20px)`
- **滚动变化**：添加`.scrolled`类时，调整`padding`和`background`
- **Logo**：左侧金色"M"图标 + "奇妙设计"文字
- **导航链接**：首页、关于我们、服务范围、核心优势、合作案例、合作流程、联系我们
- **CTA按钮**：右侧"立即咨询"胶囊按钮（金色背景）
- **移动端**：汉堡菜单，全屏覆盖式移动菜单

### 2. Hero 首屏区域

**整体布局**：双栏网格（`grid-template-columns: 1fr 1fr`）

**左侧（Hero Left）**：

- **Eyebrow标签**：小字号，金色背景胶囊，`高端设计制作 · 全流程专业服务`
- **主标题**：68px，行高1.25
  - "创意"使用金色渐变（`gradient-text`类）
  - "触手可及"使用纯金色高亮（`highlight`类）
  - 金色下划线动画（`underlineGlow`）
- **副标题**：17px，行高1.9，最大宽度520px
- **CTA按钮**：两个按钮（主按钮渐变金色，次按钮描边透明）
- **动画**：`fadeInUp 0.8s ease`

**右侧（Hero Right）**：

- **4个数据卡片**（2x2网格）：
  - 10+ 年团队经验
  - 50+ 高端项目
  - 85% 客户复购率
  - 99% 成品合格率
  - 数字使用CountUp动画（2秒，三次缓出）
  - Hover效果：上浮6px + 放大1.02倍 + 光效扫过
- **服务品牌区块**（8个品牌，2行4列）：
  - 标题"服务品牌"
  - 第一行：HR 赫莲娜、ZENITH 真力时、Breguet 宝玑、Martell 马爹利
  - 第二行：D&G、Tiffany、修丽可、雅诗兰黛
  - 每个品牌标签等宽（`flex: 1`），hover时金色高亮

**背景效果**：

- 深色渐变背景（`#0a0a1a → #1a1a3e`）
- 网格线装饰（80px间隔，淡金色，径向渐变遮罩）
- 10个浮动金色粒子（从底部飘到顶部，不同延迟和时长）
- 顶部径向光晕（金色，8秒循环动画）

### 3. 关于我们（About Section）

**布局**：左图文右（1:1），移动端单栏

**右侧内容**：

- 小标题 + 主标题（`以细节匠心，诠释高端设计的每一分价值`）
- 品牌介绍文字（突出"最后一公里"价值主张）
- 引用框（左侧金色边框，`关于"最后一公里"的引用`）
- CTA链接（`告诉我们您的难题`）

**左侧配图**：

- 展示高端印刷工艺细节（金色烫印、模切图案）

- 图片需要AI生成，提示词：

  ```
  Macro photography of premium print materials， extreme close-up of gold foil stamping on textured dark paper， intricate die-cut patterns with perfect edges， layered paper construction showing depth and craftsmanship， subtle light reflections on metallic surfaces， shallow depth of field， rich color palette of deep navy， champagne gold and warm ivory， luxury packaging aesthetic， professional commercial photography， 8K ultra detailed
  ```

**底部数据条**：3个核心数据（10+年、50+品牌客户、99.5%合格率），flex布局

**特性卡片**（3个，网格布局）：

- 01 攻克复杂工艺
- 02 快速精准响应
- 03 奢侈品级别标准

### 4. 服务范围（Services Section）

**标题区**：

- Eyebrow：`服务范围`
- 主标题：`六大核心业务`
- 副标题：`从创意设计到批量印制，全流程专业服务，精准传达每一个品牌故事。`

**6个服务卡片**（3x2网格）：

1. **包装定制设计** - 礼盒包装、产品包装、包装盒/纸箱、酒店餐饮包装
2. **画册书刊印刷** - 样本/画册、说明书、单页/折页、书刊、报纸
3. **商业宣传物料** - 海报、活动会务宣传品、酒店餐饮海报、台卡
4. **商务办公物料** - 信封信纸、邀请函、联单
5. **文创礼品定制** - 笔记本、台历、帆布包
6. **影像艺术装帧** - 相册、画框装裱、艺术书籍

**卡片样式**：

- 顶部配图（200px高度），`overflow: hidden`
- 渐变遮罩（底部，`linear-gradient to top`）
- 标签展示（底部，`border-radius: 100px`药丸形状）
- Hover时图片放大1.08倍，整卡上浮8px

**配图生成提示词模板**（每个服务一项）：

```
Professional commercial photography of [具体服务场景]， premium quality， clean composition， luxury aesthetic， warm lighting， 8K ultra detailed
```

### 5. 核心优势（Advantages Section）

**布局**：深色背景（`#1a1a2e → #16213e`渐变），4列卡片网格

**4个优势卡片**：

1. **定制化创意能力** - 拒绝模板化设计，量身打造专属创意
   - 图标：图层图标（SVG stroke）
2. **高精度印刷工艺** - 进口海德堡印刷机，色彩还原98%+
   - 图标：时钟图标
3. **奢侈品行业经验** - 与ZENITH、Tiffany等品牌深度合作
   - 图标：星星图标
4. **严格品控管理** - 12道质检流程，合格率99.5%+
   - 图标：对勾图标

**卡片样式**：

- 半透明背景（`rgba(255，255，255，0.05)`）
- 金色边框（`rgba(201，169，110，0.2)`）
- Hover时背景变亮，边框高亮，上浮效果

### 6. 精选项目展示（Cases Section）

**布局**：白色背景，品牌墙 + 案例卡片

**品牌墙**（8个合作品牌，居中显示）：

- Flex布局，`justify-content: center`
- 每个品牌项固定宽度（`calc(25% - 12px)`）
- 品牌列表：
  - ZENITH 真力时
  - BREGUET 宝玑
  - TIFFANY 蒂芙尼
  - ESTÉE LAUDER 雅诗兰黛
  - HELENA RUBINSTEIN 赫莲娜
  - SKINCEUTICALS 修丽可
  - MARTELL 马爹利
  - DOLCE&GABBANA 杜嘉班纳
- 默认灰度100% + 透明度60%
- Hover时还原彩色，放大1.02倍

**案例卡片**（2x2网格）：

1. **叠川烈酒包装设计** - 包装设计
2. **雅诗兰黛小棕瓶发布会物料** - 宣传物料
3. **ZENITH×Tiffany腕表包装** - 奢侈品包装
4. **Martell马爹利品牌物料** - 品牌物料

**卡片元素**：

- 配图（280px高度）
- 类别标签（左上角，黑色半透明胶囊）
- "长按保存"提示（右下角，hover时显示）
- 标题 + 描述 + 浏览量

### 7. 合作流程（Process Section）

**布局**：暖色背景（`#f2ede6`），4步骤横向流程

**4个步骤**：

1. **需求沟通** - 深入了解项目需求与品牌调性
2. **方案设计** - 专业团队输出定制化设计方案
3. **打样确认** - 高精度打样，确认最终效果
4. **批量生产** - 严格品控，准时交付

**连接线**：步骤间有金色渐变连接线（`::before`伪元素）

**步骤编号**：88x88px圆形，金色边框，内部数字

### 8. 联系我们（Contact Section）

**布局**：左信息右表单（1:1）

**左侧**：

- Eyebrow + 标题（`开启您的创意之旅`） + 副标题
- 联系信息（电话、邮箱、地址），使用SVG图标
- 右侧装饰卡片（"开启创意之旅"视觉区）

**右侧表单**：

- 姓名 / 电话（第一行，2列）
- 需求类型 / 预算区间（第二行，2列下拉框）
- 留言（文本域）
- 提交按钮（金色，全宽）

**表单样式**：

- 半透明背景（`rgba(255，255，255，0.05)`）
- 金色边框，focus时高亮
- 下拉框自定义箭头（SVG Data URI）

### 9. 页脚（Footer）

- 深色背景（`#0d0d1e`）
- Logo + 导航链接 + 版权信息

---

## Assets（所需视觉与功能资源）

### 图片资源清单

所有图片放置在与HTML同级的目录中，文件名如下：

| 用途          | 文件名                          | 规格要求              |
| ------------- | ------------------------------- | --------------------- |
| 服务-包装定制 | `service-gift-box.png`         
   | 800x600，金色礼盒     |
| 服务-画册印刷 | `service-printed-book.png`     
   | 800x600，精美画册     |
| 服务-宣传物料 | `service-business-cards.png`   
   | 800x600，海报设计     |
| 服务-办公物料 | `service-desk-office.png`      
   | 800x600，信封信纸     |
| 服务-文创礼品 | `service-creative-notebook.png` | 800x600，笔记本帆布包 |
| 服务-影像装帧 | `service-photo-album.png`      
   | 800x600，相册画框     |
| 案例-烈酒包装 | `case-whiskey-bottle.png`      
   | 800x600，高端酒瓶     |
| 案例-美妆物料 | `case-cosmetic-product.png`    
   | 800x600，美妆产品     |
| 案例-腕表包装 | `case-watch-luxury.png`        
   | 800x600，奢华腕表     |
| 案例-干邑物料 | `case-brandy-bottle.png`       
   | 800x600，干邑酒瓶     |
| 关于-印刷工艺 | `about-premium-print.png`      
   | 1024x1024，AI生成     |

### 如果图片不存在

使用`generate_images.py`脚本生成占位图片，或者提示用户使用AI生图工具生成。

### 交互功能

- **导航滚动效果**：监听`scroll`事件，添加/移除`.scrolled`类
- **移动菜单切换**：点击汉堡图标，切换`.mobile-menu.active`
- **滚动淡入动画**：Intersection Observer + `.reveal`类
- **数字CountUp**：Intersection Observer + `requestAnimationFrame`
- **表单提交**：模拟提交成功，显示成功提示

---

## Animation Specifications（动效规范）

### 1. 页面加载动画

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(32px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 2. 滚动触发动画

- 初始状态：`.reveal { opacity: 0; transform: translateY(32px); }`
- 可见状态：`.reveal.visible { opacity: 1; transform: translateY(0); }`
- 延迟类：`.reveal-delay-1`到`.reveal-delay-6`（0.1s到0.6s）

### 3. 悬浮交互

- **卡片Hover**：`transform: translateY(-8px); box-shadow: 0 12px 40px ...`
- **图片Hover**：`transform: scale(1.05);`（案例）或`scale(1.08)`（服务）
- **按钮Hover**：`transform: translateY(-3px);`，光效扫过（`::before`伪元素，left -100% → 100%）
- **品牌墙Hover**：`filter: grayscale(0%); opacity: 1;`

### 4. 粒子动画

```css
@keyframes floatParticle {
  0% { transform: translateY(100vh) scale(0.5); opacity: 0; }
  5% { opacity: 0.8; }
  50% { opacity: 0.6; }
  95% { opacity: 0.8; }
  100% { transform: translateY(-15vh) scale(1.2); opacity: 0; }
}
```

- 10个粒子，不同`left`位置、`animation-delay`和`animation-duration`

### 5. 数字滚动动画

```javascript
function animateCount(el， target) {
  const duration = 2000;
  const startTime = performance.now();
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration， 1);
    const easeOut = 1 - Math.pow(1 - progress， 3);
    const current = Math.floor(start + (target - start) * easeOut);
    el.textContent = current;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}
```

---

## Responsive Breakpoints（响应式断点）

### 1024px 及以下

- Hero区域单栏（`grid-template-columns: 1fr`）
- Hero右侧移到左侧（`order: -1`）
- 关于我们单栏
- 服务卡片2列
- 优势卡片2列
- 案例卡片单栏
- 流程步骤2列

### 768px 及以下

- 导航链接隐藏，显示汉堡菜单
- Hero标题56px
- Section标题36px
- 服务卡片单栏
- 关于数据条换行

### 480px 及以下

- Hero标题36px
- 数据卡片单栏
- 流程步骤单栏
- 联系表单单栏
- 品牌墙2列

---

## Content Template（内容文案模板）

### Hero

- **Eyebrow**：`高端设计制作 · 全流程专业服务`
- **标题**：`让创意真正触手可及`
- **副标题**：`专注包装定制、画册印刷、宣传物料、商务办公、文创礼品与影像装帧六大业务领域。用卓越工艺与创意，为品牌注入持久视觉价值，助力您在市场竞争中脱颖而出。`

### About

- **标题**：`以细节匠心，诠释高端设计的每一分价值`
- **引用**：`"很多设计稿到了制作环节就变形了——奇妙设计的价值，正是打通从创意到实物的最后一公里，确保每一个细节都与设计稿高度还原。"`

### Advantages

- **标题**：`为何选择奇妙设计`

### Cases

- **标题**：`精选项目展示`

### Process

- **标题**：`标准化流程确保每个环节高效协同`

---

## Quality Checklist（质量检查清单）

### 视觉检查

- [ ] 导航栏毛玻璃效果正常
- [ ] Hero区域渐变背景和粒子动画正常
- [ ] 标题渐变色和下划线动画正常
- [ ] 数据卡片悬浮效果正常
- [ ] 服务品牌两行四列对齐
- [ ] 品牌墙居中显示
- [ ] 所有图片正确加载
- [ ] 响应式布局在各个断点正常

### 动效检查

- [ ] 滚动触发淡入动画正常
- [ ] 卡片悬浮上浮效果正常
- [ ] 按钮光效扫过动画正常
- [ ] 品牌墙灰度切换正常
- [ ] 数字CountUp动画正常

### 内容检查

- [ ] 所有文字内容完整
- [ ] CTA链接跳转正确
- [ ] 表单元素可交互
- [ ] 手机端导航菜单正常

---

## Deployment Notes（部署说明）

1. 生成单文件HTML后，使用EdgeOne Pages Skills进行部署
2. 确保所有图片资源正确引用（相对路径）
3. 部署后检查线上版本的所有功能
4. 确保Google Fonts在线上环境可访问

````
