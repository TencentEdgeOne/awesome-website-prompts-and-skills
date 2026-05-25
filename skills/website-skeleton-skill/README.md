# Website Skeleton Skill

基于 EdgeOne Pages 的全栈网站生成 Skill。用户说一句话（如「帮我建一个电商站」），AI 自动组合 Auth、Cart、Payment、AI Chat、Admin 五大模块，生成完整前后端代码并部署到 EdgeOne Pages 全球 CDN。

**版本：** v3.0 · Phase 4A（多租户隔离）+ Phase 4B（npm 包化）已全部完成

**Demo：** https://geek-mall-demo-4qaxvmeh.edgeone.cool

---

## 快速开始

```bash
npm install -g edgeone
edgeone login --site china
edgeone pages deploy -n my-site
```

按交互提示选择场景模板、填写配置、执行数据库迁移。

## 场景模板

| 模板 | 适用场景 | 包含模块 |
|------|---------|---------|
| 🛒 **电商** | 独立电商、品牌官网 | Auth + Cart + Payment (微信/支付宝) + Orders + Admin |
| 🤖 **AI 助手** | AI 客服、AI 工具站 | Auth + AI Chat (SSE流式) + Admin |
| 📊 **SaaS 管理后台** | B2B SaaS、管理后台 | Auth + RBAC + Stats + Subscription |

## 核心技术

- **EdgeOne Pages 双运行时**：Edge Functions (KV) + Cloud Functions (MySQL)
- **支付幂等原子锁**：Edge `putIfNotExists` 24h TTL（小于微信 72h 重试窗口）
- **RT 并发安全**：KV version 乐观锁
- **订单原子性**：MySQL `SELECT FOR UPDATE` + 乐观锁 + CHECK 约束
- **多租户隔离**：JWT tenant + KV 动态前缀 + MySQL tenant_id + RBAC
- **npm 包化**：`@website-skeleton/payment`、`@website-skeleton/admin`

## 目录结构

```
website-skeleton-skill/
├── SKILL.md                    # 核心 Skill 指令
├── README.md                   # 本文件
├── templates/                  # 场景模板（3 个）
├── sharing/                    # 跨运行时共享代码（JWT/KV/常量/i18n）
├── edge-functions/             # Edge Functions (V8+KV)
├── cloud-functions/            # Cloud Functions (Node.js+MySQL)
├── packages/                   # npm 包源码
├── db/                         # 数据库迁移
├── client/                     # 前端 SPA
├── references/                 # 参考文档
└── scripts/                    # 构建工具
```

## 评审历程

8 轮评审：WorkBuddy + QClaw + Hermes + IMA（两轮）+ 独立安全/架构/平台专家（三轮）

| 专家 | 评分 | 结论 |
|------|------|------|
| 安全 | 7.0/10 | 有条件通过 |
| 架构 | 7.2/10 | 有条件通过 |
| 平台 | 7.5/10 | 有条件通过 |

## License

MIT No Attribution
