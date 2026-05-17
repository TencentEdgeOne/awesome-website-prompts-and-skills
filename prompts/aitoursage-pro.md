# AITourSage Pro

> **赛道**：Prompt　**作者**：90后的00鉌枝铢
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![AITourSage Pro cover](../assets/demos/aitoursage-pro.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | AITourSage Pro |
| 赛道 | Prompt |
| 作者 | 90后的00鉌枝铢 |

## 📝 作品介绍

AITourSage Pro 景区 AI 管理系统介绍
AITourSage Pro 是专为旅游景区打造的 AI 智能盈利管理系统，操作简单易上手。系统可一键导入整理景区经营与客流数据，自动完成经营状况诊断，出具完整运营规划方案。无需专业设计人员，就能智能生成宣传海报与短视频，还能快速对接各类合作供应商。
核心具备客流预判与门票智能调价功能，精准把控人流量、合理调整票价提升收益，支持多家景区组队联合营销增收。全程自动跟进业绩目标并及时预警，后台可自动更新行业资讯与运营模型。支持飞书便捷办公操作，可本地服务器私有化安装。依托成熟技术搭建网页管理后台，部署简单，全方位助力景区精简运营、提升客流、增加营收。

---

## 🚀 完整 Prompt（直接复制以下内容喂给 AI 编程工具）

```
/@scene:16 我是一个小白你把下面的内容翻译给我听一下，她到底是要做什么？请基于以下规格实现“AITourSage Pro”文旅景区AI收益管理系统后端完整代码（FastAPI + Celery + PostgreSQL + TimescaleDB + LangGraph），并包含前端基础页面（React + TypeScript）。

【项目目标】
为景区提供从初始化分析、全年策略、物料生成、供应商对接到复盘优化的全链路AI助手，并额外实现客流预测、动态定价、区域联盟增收功能。

【技术栈要求】
- 后端：Python 3.10+， FastAPI， SQLAlchemy 2.0， Alembic， Celery， Redis， LangGraph， pandas， prophet， scikit-learn
- 数据库：PostgreSQL 14 + TimescaleDB 2.x + pgvector
- AI模型：支持OpenAI API 或 自托管Qwen-72B；Stable Diffusion XL 自托管（通过HTTP调用）
- 前端：React 18， TypeScript， TailwindCSS， ECharts， WebSocket
- 部署：Docker Compose（含所有服务）

【必须实现的核心模块细节】

1. 数据库模型（SQLAlchemy ORM）
   - Tenant， ScenicSpot， MetricsHistory， BenchmarkData， AnnualKpiTarget， KpiActual， ConvSession， AllianceGroup， AllianceMember， MaterialAsset， PredictionTask

2. API端点清单（RESTful）
   - 租户/景区管理：注册、登录、创建景区、上传logo/品牌色
   - 数据导入：POST /api/scenic/{spot_id}/import_metrics（支持Excel/CSV，自动映射列名）
   - 诊断报告：GET /api/scenic/{spot_id}/diagnosis（返回雷达图base64+SWOT+差距表）
   - 对话工作流：WebSocket /api/ws/chat/{session_id}，支持流式响应与打断
   - 物料生成：POST /api/generate/poster（参数：prompt， style， logo_url， brand_colors）；POST /api/generate/video（上传素材列表+脚本模板）
   - 供应商：GET /api/suppliers?tags=灯光，夜游；POST /api/suppliers/contact（发送询价）
   - 市场公告：GET /api/news/hot（最近7天摘要）
   - KPI：POST /api/kpi/target；GET /api/kpi/tracking（含预警列表）
   - 客流预测：GET /api/scenic/{spot_id}@command:predict?days=30（返回每日预测值+图）
   - 动态定价：GET /api/scenic/{spot_id}/dynamic_pricing（返回每日推荐票价+期望增收）
   - 联盟：POST /api/alliance/create；POST /api/alliance/{id}/joint_promotion（生成联票方案）

3. LangGraph工作流设计
   - 定义状态 WorkflowState（stage， context， interrupts， material_ids）
   - 节点：init_node， strategy_node， creative_node， material_node， outsource_node， review_node
   - 条件边：检测用户输入中的修改关键词（“改一下”“换成”“不要”），回退到相应节点
   - 集成物料生成接口作为工具调用

4. 客流预测实现细节
   - 从metrics_history获取过去3年每日客流（若无每日数据，用月数据插值）
   - 增加特征：星期几、节假日（来自公开API）、天气（调用和风天气）、区域竞品活动密度（从爬虫获取）
   - 使用Prophet模型训练，输出未来30天预测值与置信区间
   - 若预测值低于历史同期20%，自动调用promotion_generator生成促销活动方案（通过大模型）

5. 动态定价算法
   - 从历史数据中拟合价格弹性系数（线性回归，因变量：客流变化，自变量：价格变化）
   - 基于预测客流，求解使期望收益最大化的价格： price* = argmax( predicted_demand(price) * price )
   - 输出建议价格及相比当前票价的期望增收额

6. 异步任务（Celery）
   - train_prediction_model(scenic_spot_id) 每月重训
   - generate_diagnosis_report(scenic_spot_id) 数据更新后触发
   - crawl_news() 每日执行
   - render_video(assets， script) 调用FFmpeg合成

7. 前端核心页面
   - 登录/景区选择
   - 数据导入向导（拖拽上传，字段映射）
   - 诊断报告仪表盘（雷达图、SWOT卡片）
   - 对话界面（聊天记录，支持语音录音按钮，物料预览卡片）
   - KPI看板（进度条，落后预警红点）
   - 联盟管理（邀请景区，查看联合方案）

8. 飞书集成
   - 接收飞书事件回调（URL: /api/feishu/event），验证签名
   - 解析消息中的景区ID（从飞书用户与租户绑定表查询）
   - 调用对话工作流，异步回复结果至飞书群

9. 私有化部署支持
   - 提供docker-compose.yml，包含所有服务（数据库、Redis、MinIO、Qwen推理容器、SD容器）
   - 环境变量配置（API密钥、数据库连接、自托管模型地址）

【输出要求】
生成完整的项目代码，包括：
- backend/ 目录：main.py， models.py， schemas.py， api/ (各模块路由)， workflows/ (langgraph)， tasks/ (celery)， ml/ (预测模型)， utils/ (文件处理)
- frontend/ 目录：React组件（App.tsx， Chat.tsx， Dashboard.tsx， ImportWizard.tsx等），Vite配置
- docker-compose.yml， Dockerfile， requirements.txt， .env.example
- README.md：包含安装步骤、API文档、演示数据示例
Install this skill: https://github.com/TencentEdgeOne/edgeone-pages-skills， then deploy to EdgeOne Pages.

```
