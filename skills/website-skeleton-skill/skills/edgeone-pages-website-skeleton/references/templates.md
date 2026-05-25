# 场景模板规格

三大开箱即用模板，组合即可生成完整网站骨架。

---

## 🛒 电商模板（e-commerce.json）

**适用场景：** 独立电商、垂直电商、品牌官网

**模块组合：**
```
Auth + Cart + Payment (WeChat V3 + Alipay) + Orders + Admin
```

**功能清单：**
- 商品浏览与分类筛选（KV 缓存 + MySQL 回源）
- 用户注册（bcrypt cost=12）+ 登录（JWT 15min + RT 7d + KV 会话）
- 购物车（未登录 localStorage / 登录 KV 同步）
- 微信支付 V3 预下单 + 回调幂等处理
- 支付宝预下单 + 回调幂等处理
- 订单创建（`SELECT FOR UPDATE` 原子性）
- 订单状态机（Pending → Paid → Shipped → Completed）
- 管理员：商品 CRUD、订单管理、用户管理、运营统计

**环境变量：**
```
JWT_SECRET, WX_APPID, WX_MCHID, WX_API_KEY, WX_CERT_PATH,
ALI_APP_ID, ALI_PRIVATE_KEY, DATABASE_URL, EDGE_BASE
```

**页面清单：**
```
/ (首页) → /login → /register
/cart → /checkout → /payment/success
/orders
/admin/products → /admin/orders → /admin/users → /admin/stats
```

---

## 🤖 AI 助手模板（ai-assistant.json）

**适用场景：** AI 对话助手、AI 客服、AI 工具站

**模块组合：**
```
Auth + AI Chat (SSE Streaming) + Admin (对话管理)
```

**功能清单：**
- 用户注册/登录（JWT + RT + KV 会话）
- AI 对话（SSE 流式输出，Cloud Functions 实现）
- AI 历史上下文（KV 存储，单用户读写）
- 访客未登录体验（可选降级）
- 管理端：对话记录查看、AI 使用统计

**环境变量：**
```
JWT_SECRET, AI_API_KEY (OpenAI / 火山引擎 / 其他), DATABASE_URL
```

**页面清单：**
```
/ (首页) → /login → /register
/chat (AI 对话主界面)
/admin/chat-history → /admin/ai-stats
```

**SSE 实现要点：**
```
Cloud Functions（Node.js）← 唯一可实现 SSE 的运行时
Edge Functions → 仅做 KV 历史读取
前端 → EventSource 接收流式输出
```

---

## 📊 SaaS 管理后台模板（saas-admin.json）

**适用场景：** B2B SaaS、管理后台、数据平台

**模块组合：**
```
Auth + Admin RBAC + Stats + Subscription Payments
```

**功能清单：**
- 用户注册/登录（JWT + RT + KV 会话）
- RBAC 权限体系（role: user | admin，数据列级权限）
- 数据看板（MySQL 聚合统计）
- 订阅计费（Payment 模块，支持 Stripe / 支付宝订阅）
- 审计日志（admin_logs 表）
- 多租户支持（KV key 租户前缀，Phase 2 实现）

**环境变量：**
```
JWT_SECRET, DATABASE_URL, STRIPE_KEY (可选), ALI_APP_ID (可选)
```

**页面清单：**
```
/ (首页) → /login → /register
/dashboard
/admin/users → /admin/roles → /admin/permissions
/admin/subscriptions → /admin/billing
/admin/audit-logs
```

---

## 模块依赖矩阵

| 模块 | 依赖 | 存储 | 密钥 |
|------|------|------|------|
| Auth（Core） | 无 | KV（会话） | 无 |
| Cart | Auth | KV（登录态）+ localStorage（访客） | 无 |
| Payment | Auth + Cart | MySQL（订单） | WX + ALI 密钥 |
| AI Chat | Auth | KV（历史）+ HTTP（LLM） | AI_API_KEY |
| Admin | Auth | MySQL | 无（RBAC 权限控制） |

---

## 自定义模块组合

如果用户选择"自定义"，按以下矩阵确认各模块：

| 模块 | 必选 | 说明 |
|------|------|------|
| Auth | ✅ 始终启用 | 登录注册是所有场景的基础 |
| Cart | 电商必选 | 需要购物车时启用 |
| Payment | 电商/订阅必选 | 需要支付时启用 |
| AI Chat | AI 助手必选 | 需要 AI 对话时启用 |
| Admin | 管理场景推荐 | RBAC 权限控制 |

确认模块后，生成对应目录结构，跳过未选模块的文件生成。
