# 图书管理系统

> **赛道**：Prompt　**作者**：六月的雨在Tencent
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![图书管理系统 cover](../assets/demos/tu-shu-guan-li-xi-tong.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/tu-shu-guan-li-xi-tong.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 图书管理系统 |
| 赛道 | Prompt |
| 作者 | 六月的雨在Tencent |

## 📝 作品介绍

作品：图书管理系统
核心价值：
1.托管在 EdgeOne Pages，Edge Functions + KV Storage 全托管，不用管服务器
2.Token 鉴权 + 用户维度数据存储，每个账号数据完全独立
3.注册、登录、图书 CRUD、借阅管理、统计，覆盖完整业务闭环
4.已部署在 https://library-system-yccnwo43.edgeone.run，随时可用
适用场景：
1.个人藏书管理 — 记录自己的书单、借出记录、评分
2.小型办公室图书角 — 多人注册，各自管理，互不干扰
3.学习项目参考 — EdgeOne Pages Edge Functions 全栈开发范例
亮点功能：
1.双视图切换--网格卡片 + 列表表格，可随时切换
2.多维度搜索筛选--书名/作者/ISBN 搜索 + 分类/状态/排序
3.借阅 + 逾期预警--归还日期追踪，逾期自动红色标注
4.统计总览--馆藏量、在馆/借出/丢失、按分类汇总
5.多账号系统--注册/登录/退出，数据按用户隔离
6.图书颜色/评分--自定义封面色、五星评分，卡片视觉丰富

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
帮我做一个图书管理系统
图书列表书的封面展示书名全名
借阅记录借阅人头像默认显示全名
初次进入页面，借阅记录展示数字不对
增加注册用户，登录用户页面，登录成功后跳转到首页
新增借阅时应该可以选择所有未借出的图书
在借阅记录归还图书后，图书列表的借出状态应该更新
添加图书时，图书分类可选项太少，增加新的图书分类
图书列表编辑图书时不能修改图书状态为借出
添加图书时不能选择状态为借出
帮我安装这个Skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， 并将项目部署在EdgeOne Pages上
使用了EdgeOne Pages 的什么功能，列举出来
使用 EdgeOne Pages 的 Edge Functions + KV Storage 来替代 localStorage
library-system 绑定 KV Storage 命名空间
```
