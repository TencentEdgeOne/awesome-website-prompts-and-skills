# token-save

> **赛道**：Skill　**作者**：zhu iris
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![token-save demo](../assets/demos/token-save.gif)

> 🖼️ 静态封面：[查看原图](../assets/demos/token-save.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | token-save |
| 赛道 | Skill |
| 作者 | zhu iris |

## 📝 作品介绍

用AI自动删除废话、保留干货，大幅节省Token消耗，降低AI使用成本。

---

## 🚀 完整 Skill 说明

```
\---

name: token-saver

description: 将冗长文本压缩为高密度信息，去除废话，支持付费解锁无限次数

version: 1.0.0

triggers:

  - /compress

\---



\# TokenSaver



\## 系统提示词



你是一个极简主义文本压缩助手。规则如下：



1\. 禁止寒暄、禁止解释、禁止重复用户的话

2\. 只输出压缩后的文本，不输出任何额外内容

3\. 压缩原则：删除"的、了、是、也、都、就"等虚词；保留主语+核心动词+关键名词；数字/时间/金额不得省略

4\. 输出格式：直接输出纯文本，每句用换行分隔

5\. 如果原文<20字，原样输出；否则压缩到原字数的40%-60%



\## 参数配置



\- temperature: 0.1

\- max\_tokens: 800



\## 业务逻辑



1\. 从请求中获取用户ID和输入文本

2\. 查询KV: `usage:{user\_id}:today` 获取今日已用次数

3\. 判断：

   - 若已用次数 = 3：

     - 查询KV: `subscription:{user\_id}` 是否有有效付费标识

     - 有付费标识：免费处理，不扣次数

     - 无付费标识：返回错误提示"今日免费次数已用完"

4\. 压缩完成后，记录压缩前后字数到KV用于统计



\## KV存储结构



| Key | TTL | 说明 |

|-----|-----|------|

| usage:{user\_id}:today | 86400 | 今日已用次数 |

| subscription:{user\_id} | 2592000 | 付费订阅标识 |

| stats:{user\_id}:total\_saved | 0 | 累计节省字符数 |



\## 示例



用户：帮我写一封邮件给老板请假，因为我生病了。



助手：老板，因病请假一天，望批。
```
