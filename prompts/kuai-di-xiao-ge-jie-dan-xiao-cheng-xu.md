# 快递小哥接单小程序

> **赛道**：Prompt　**作者**：周明
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![快递小哥接单小程序 demo](../assets/demos/kuai-di-xiao-ge-jie-dan-xiao-cheng-xu.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/kuai-di-xiao-ge-jie-dan-xiao-cheng-xu.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 快递小哥接单小程序 |
| 赛道 | Prompt |
| 作者 | 周明 |

## 📝 作品介绍

快递小哥接单小程序，试用外卖和快递的单子，可以和c端商铺合作，小哥获得接单后直接运到客户，小哥和商铺之间直接链接，减少平台端的中间派单过程。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

````
下面是这个小程序（**骑手助手**）所生成的完整提示词：

---

## 骑手助手小程序 — 生成提示词

```
请帮我开发一个微信小程序，名称为「骑手助手」，面向外卖配送骑手使用。

---

## 产品定位
一款供外卖骑手使用的微信小程序，提供接单大厅、订单管理、实时导航、收益统计等核心功能，主色调为橙色（#FF6B35）。

---

## 页面结构（底部 TabBar）

### TabBar 三个入口：
1. 接单大厅（pages/index）
2. 收益（pages/income）
3. 我的（pages/profile）

### 完整页面列表：
- pages/login/login — 登录页
- pages/index/index — 接单大厅
- pages/order-detail/order-detail — 订单详情
- pages/map-navigation/map-navigation — 地图导航
- pages/income/income — 收益统计
- pages/profile/profile — 个人中心

---

## 功能模块

### 1. 登录模块
- 微信一键登录（wx.login 获取 code）
- 支持获取 encryptedData + iv 解密用户信息
- 登录后返回 JWT Token，有效期 7200 秒
- 返回骑手基本信息：ID、姓名、手机、头像、等级、评分、总接单数

### 2. 接单大厅
- 获取当前骑手附近待抢订单列表
- 支持按距离/奖励排序
- 展示每单信息：商家名、距离、配送费、预计时间、商品清单
- 支持加急标签（isUrgent）和高价值标签（highValue）
- 30 秒倒计时抢单机制（ws 推送 new_order）
- 一键抢单，返回成功/冲突状态

### 3. 订单详情与配送流程
订单状态流转：
待接单 → 已接单 → 取餐中 → 配送中 → 已完成 / 已取消

操作节点：
- 确认取餐（支持拍照+取餐码验证）
- 一键导航（跳转到地图导航页）
- 确认送达（拍照上传，填写备注）
- 上报异常（支持8种类型：商家未准备好/已打烊/地址有误/客户不接电话/拒收/交通事故/车辆故障/其他）

订单时间线展示（timeline 组件）

### 4. 地图导航页
- 基于微信原生地图组件
- 使用 startLocationUpdate 持续定位，每 30 秒上报位置
- 显示骑手位置、商家位置、客户位置
- 支持后台持续定位（requiredBackgroundModes: location）
- 展示剩余距离、预计到达时间

### 5. 收益统计
- 今日收入 / 本周收入 / 本月收入
- 历史订单列表（按日期筛选）
- 账户余额展示
- 申请提现（支持微信/支付宝/银行卡，最低10元，最高500元，无手续费）
- 提现记录查询

### 6. 个人中心
- 头像、姓名、等级徽章展示
- 骑手等级体系：青铜(0单) → 白银(100单) → 黄金(500单+评分4.8) → 钻石(2000单+评分4.9)
- 在线/离线状态切换
- 成就展示（如：闪电侠⚡、零差评⭐）
- 实名认证入口（身份证/驾驶证/健康证）
- 消息通知中心

---

## 实时通信
WebSocket 连接地址：wss://your-api-server.com/ws/rider?token=xxx&riderId=xxx

推送事件：
- new_order — 新订单（含30秒抢单倒计时）
- order_status_changed — 订单状态变更（如被取消）
- system_notice — 系统公告/奖励活动通知

---

## 后端 API
基础路径：https://your-api-server.com/api/v1
认证方式：Bearer JWT Token

主要接口：
- POST /rider/login — 微信登录
- GET /rider/profile — 获取骑手资料
- POST /rider/status — 上报在线状态
- POST /rider/location — 上报实时位置
- GET /orders/available — 获取可抢订单
- POST /orders/{id}/accept — 抢单
- GET /orders/{id} — 订单详情
- POST /orders/{id}/pickup — 确认取餐
- POST /orders/{id}/complete — 确认送达
- POST /orders/{id}/exception — 上报异常
- GET /orders/history — 历史订单
- POST /rider/withdraw — 申请提现
- POST /upload/image — 上传图片

---

## 数据库设计（MySQL）
主要数据表：
- riders（骑手信息）
- rider_auths（实名认证）
- orders（订单主表，含商家/客户/配送信息）
- order_timeline（订单状态变更记录）
- rider_locations（位置轨迹，按年分区）
- delivery_routes（路线规划记录）
- rider_incomes（收益明细）
- withdrawals（提现记录）
- order_exceptions（异常记录）
- notifications（消息通知）
- rider_achievements（成就记录）
- system_configs（系统配置：费率规则、等级规则等）

---

## 技术要求
- 框架：微信小程序原生开发
- 导航背景色：#FF6B35（橙色）
- 导航文字：白色
- 需申请权限：scope.userLocation（前台）、scope.userLocationBackground（后台）
- 需声明：requiredBackgroundModes: ["location"]
- 需声明：requiredPrivateInfos: ["getLocation"， "startLocationUpdate"， "chooseLocation"]
- 图片上传：multipart/form-data，支持 pickup/delivery/exception 三种类型
- 懒加载：lazyCodeLoading: "requiredComponents"
```

---

以上即为该项目的完整生成提示词，涵盖产品定位、页面结构、六大功能模块、实时通信、API 接口及数据库设计全部核心内容。

Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills, then deploy to EdgeOne Pages.

````
