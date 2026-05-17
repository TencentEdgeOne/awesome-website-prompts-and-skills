# 粒子宇宙

> **赛道**：Prompt　**作者**：陈萌 · [GitHub @23400166@qq.com](https://github.com/23400166@qq.com)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![粒子宇宙 demo](../assets/demos/li-zi-yu-zhou.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/li-zi-yu-zhou.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 粒子宇宙 |
| 赛道 | Prompt |
| 作者 | 陈萌 |
| GitHub | [@23400166@qq.com](https://github.com/23400166@qq.com) |

## 📝 作品介绍

粒子宇宙 — 与宇宙互动的沉浸式粒子体验。基于 HTML5 Canvas + Web Audio API + EdgeOne Pages 全栈部署。8000+ 粒子实时渲染六种宇宙形态（漩涡星系、弥漫星云、DNA 螺旋、环面、波浪、混沌），配色参考哈勃/韦伯望远镜真实星云色彩。鼠标引力交互让粒子自然回应，每种形态配备独立程序化宇宙音乐，切换时视听同步过渡。双 Canvas 分层架构 + trail 拖尾算法，保证视觉品质与性能兼顾。Edge Functions + KV 边缘存储实现访问计数、宇宙留言墙、参数预设云端同步。适用于天文科普、数字艺术展示、冥想放松、前端教学、品牌互动等场景。一个 HTML 文件，即可触达宇宙。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
Phase 1: 初始构建
Prompt 1 — 核心粒子系统
创建一个单文件 HTML 网页，名为“粒子宇宙”（Particle Cosmos）。

核心要求：
1. 使用 HTML5 Canvas 渲染 8000+ 粒子，2D 高性能绘制
2. 粒子具有以下属性：位置(x，y，z)、速度(vx，vy，vz)、目标位置(tx，ty，tz)、角度、半径、缩放、生命值、颜色
3. 实现 6 种宇宙形态，每种形态有独立的粒子目标位置计算算法：
- 漩涡星系(galaxy)：4条螺旋臂，粒子沿对数螺旋线分布，z方向有盘面厚度
- 球体(sphere)：均匀球面分布，使用球坐标
- DNA螺旋(helix)：双螺旋结构，碱基对横向连接
- 环面(torus)：圆环面参数方程
- 波浪(wave)：3D正弦波面
- 混沌(chaos)：随机空间分布+布朗运动
4. 形态切换时粒子平滑过渡：更新目标位置，粒子通过缓动函数移向新目标
5. 鼠标引力交互：鼠标位置产生引力场，附近粒子被吸引偏移
6. 右侧参数面板：粒子数量、速度、引力、拖尾长度滑块
7. 底部形态切换按钮 + 键盘1-6快捷键
8. 空格键全屏模式
9. 全部代码写在一个 index.html 文件中，零外部依赖
Phase 2: 视觉升级
Prompt 2 — 天文摄影级配色
当前粒子配色太俗气。请升级为天文摄影级配色方案：

1. 参考哈勃太空望远镜和詹姆斯·韦伯太空望远镜的真实星云照片色彩
2. 每种形态对应一组低饱和度天文色系：
- 漩涡星系：深空蓝+淡金（参考旋涡星系NGC 1300）
- 星云：玄红+青蓝（参考船底座星云）
- DNA螺旋：翡翠绿+冰蓝（参考猎户座星云氧III发射线）
- 环面：暖橙+深紫（参考蟹状星云）
- 波浪：靖蓝+青白（参考海王星大气）
- 混沌：多色混合（参考深场照片）
3. 粒子颜色带 alpha 通道，大粒子更亮，小粒子更暗更透明
4. 粒子绘制使用径向渐变，中心亮边缘暗，模拟真实星点辉光
5. 去掉所有高饱和度纯色，全部改为低饱和偏灰的天文色调
Prompt 3 — 深空背景 + 程序化音乐
页面背景太单调。请做以下升级：

1. 深空背景：不要纯黑！用离屏Canvas预渲染多层星云背景：
- 多个大范围低透明度径向渐变，模拟星云雾气（深蓝/深紫/暗红色调）
- 三层远景星尘：大量微小白色点，不同透明度模拟远近
- 少量亮星带十字衔射纹效果（4条细线交叉）

2. 右下角添加音乐按钮，使用 Web Audio API 程序化生成宇宙氛围音乐：
- 低频 Drone：正弦波 55Hz，极低音持续铺底
- 中频 Pad 和声：3个振荡器叠加（C3/E3/G3大三和弦），用三角波
- 高频星星闪烁：随机短促高频音，模拟星星闪烁声
- 极低频宇宙脉冲：间隔2-3秒的低频“心跳”
- 加混响效果（ConvolverNode），营造空间感
- 整体音量适中，不刺耳

3. 加一个全屏欢迎遮罩层：
- 深色半透明背景
- 标题“粒子宇宙”和副标题
- “进入宇宙”按钮
- 点击后遮罩消失，自动启动音乐和动画
Phase 3: 架构重构
Prompt 4 — 双Canvas分层 + 拖尾修复
当前画面有问题：使用 globalAlpha 半透明覆盖做拖尾，但叠加了完整星云背景后亮度累积导致画面越来越亮至泛白。

请重构为双Canvas分层架构：

1. 底层 bgCanvas（id="bg"）：只画一次星云背景，永久可见，不参与动画循环
2. 上层粒子Canvas（id="c"）：每帧 clearRect 完全清空，重绘所有粒子
3. 粒子拖尾改用 trail 数组：每个粒子保存最近N帧历史位置，只给大粒子画拖尾线条
4. 拖尾线条从当前位置到历史位置，颜色渐变（近亮远暗），alpha从0.3到0递减
5. 不再使用 globalAlpha 半透明覆盖法
6. 背景始终是预渲染的星云图，不会因为拖尾累积变亮
Prompt 5 — 形态联动音乐系统
当前音乐在形态切换时没有变化。请重写音乐系统为6套独立Preset：

1. 每种形态有独立的音乐参数：
- galaxy：低频Drone 55Hz，Pad和声C3/E3/G3，中等闪烁密度
- nebula：Drone 73Hz，Pad和声Eb3/G3/Bb3（小三和弦），闪烁缓慢
- helix：Drone 65Hz，Pad和声D3/F#3/A3，闪烁密集
- torus：Drone 82Hz，Pad和声F3/A3/C4，脉冲明显
- wave：Drone 98Hz，Pad和声G3/B3/D4，闪烁如波浪起伏
- chaos：Drone 随机跳变，Pad不和谐音程，闪烁随机

2. 形态切换时平滑过渡（2.5秒）：
- 断DRone淡出，新Drone淡入
- 断DPad和声淡出，新Pad和声淡入
- 闪烁和脉冲参数线性插值到新值

3. 过渡期间不能有爆音或突变
4. 切换时显示当前形态名称的标签动画
Phase 4: 全栈能力
Prompt 6 — EdgeOne Pages 全栈功能
将项目改造为 EdgeOne Pages 全栈项目，使用 Edge Functions + KV 存储：

1. 创建 edge-functions/api/ 目录结构：
- /api/visit/index.js — 访问计数器
GET: 从KV读取visit_count，自增1，写回KV，返回{count}
- /api/messages/index.js — 宇宙留言墙
GET: 遍历KV中msg_前缀的key，返回按时间倒序的留言列表
POST: 接收{text， author， mode}，生成ID，存入KV，返回成功
- /api/presets/index.js — 参数预设管理
GET: 遍历preset_前缀，返回预设列表
POST: 接收{name， mode， count， speed， gravity， trail， author}，存入KV
DELETE: 按id删除预设

2. 所有API使用 context.env.COSMOS_KV 访问KV存储
3. 所有响应包含 CORS 头（Access-Control-Allow-Origin: *）
4. 包含 OPTIONS 方法处理 preflight 请求

5. 前端 index.html 添加：
- 右上角访问计数显示：“宇宙旅人: N”
- 左侧功能面板：留言墙按钮、预设按钮、快速保存按钮
- 留言浮动面板：输入框+发射按钮+留言列表
- 预设浮动面板：名称输入+保存按钮+预设列表（点击加载）
- UI风格与宇宙主题一致：深色半透明毛玻璃，低饱和蓝色调

6. 创建 edgeone.json 配置文件
7. 创建 README.md 包含部署说明

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

```
