# 汇联易费用报销

> **赛道**：Skill　**作者**：阿臻 · [GitHub @chengazhen](https://github.com/chengazhen)
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![汇联易费用报销 cover](../assets/demos/hui-lian-yi-fei-yong-bao-xiao.png)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | 汇联易费用报销 |
| 赛道 | Skill |
| 作者 | 阿臻 |
| GitHub | [@chengazhen](https://github.com/chengazhen) |

## 📝 作品介绍

汇联易费用报销的 Skill 库。提供稳定的输入/输出契约、默认规则与兜底策略，便于被 Agent 或自动化系统直接调用。

---

## 🚀 完整 Skill 说明

````
---
name: hly-expense-ops
description: High-level HuiLianYi expense ops wrapper. Use whenever the user asks to view or operate HLY expense reports, approvals, or org data by business code, or mentions actions like detail, reports, create, audit-pass, audit-reject, companies, employee-create, or departments. Prefer this instead of raw MCP tool calls for any HLY expense read/write workflow.
---

# HLY Expense Ops

Use this skill when working with HuiLianYi expense APIs through a simple local CLI wrapper instead of raw MCP tool calls.

## What It Does

- Query a single expense report detail with live-first and cache fallback
- Query expense reports v2
- Create an expense report
- Audit-pass or audit-reject an expense report
- Generic approvals pass (requires approver in approval chain)
- Generic approvals reject (requires approver in approval chain)
- Query tenant companies
- Create an employee with the v2 API
- Query departments by time range

## Prerequisites

Approval rule:
- Default approval action uses `approvals-pass` (generic approvals).
- Use `audit-pass` only when the user explicitly says it is an expense report approval and provides `companyOID`/`companyCode`.
- For rejection, default to `approvals-reject` unless the user explicitly asks for invoice rejection (`invoice-reject`) or expense report rejection (`audit-reject`).

- Before using this skill, check whether Bun is installed. If Bun is missing, guide the user to install Bun first.

- Set these environment variables before use:
  - `HLY_BASE_URL`
  - `HLY_APP_ID`
  - `HLY_APP_SECRET`

## Usage

> ⚠️ For any write action, first echo the payload and ask the user to confirm before executing.

### Read-only

```bash
bun index.js --action detail --business-code BX20250401001
bun index.js --action reports --payload '{"statusList":[1001],"lastModifyStartDate":"2025-01-01 00:00:00","lastModifyEndDate":"2025-01-31 23:59:59"}'
bun index.js --action companies
bun index.js --action departments --payload '{"startDate":"2025-01-01 00:00:00","endDate":"2025-01-31 23:59:59"}'
```

### Write (confirm before run)

```bash
bun index.js --action create --payload '{"employeeId":"E001","formCode":"FORM01"}'

bun index.js --action audit-pass --payload '{"businessCode":"BX20250401001","companyOID":"your-company-oid","companyCode":"your-company-code","approvalTxt":"approved","operator":"system"}'

bun index.js --action approvals-pass --payload '{"businessCode":"BX20250401001","entityType":1002,"operator":"RH9999","approver":"RH9999","approvalTxt":"OK"}'

bun index.js --action approvals-reject --payload '{"businessCode":"BX20250401001","entityType":1002,"operator":"RH9999","approver":"RH9999","approvalTxt":"Reject reason","rejectType":1}'
```

## Action Map

- `detail`: query one expense report detail
- `reports`: query expense reports v2
- `create`: create an expense report
- `audit-pass`: approve an expense report
- `audit-reject`: reject an expense report
- `approvals-pass`: generic approvals pass (requires `approver`)
- `approvals-reject`: generic approvals reject (requires `approver`, `approvalTxt`)
- `companies`: query tenant companies
- `employee-create`: create employee v2
- `departments`: select departments by date range

## Behavioral Boundaries

- `detail`: read-only. Live API first, falls back to cached detail if live call fails and cache is still fresh.
- `reports` / `companies` / `departments`: read-only live API calls.
- `create` / `audit-pass` / `audit-reject` / `employee-create`: write operations. Use intentionally and double-check payloads, as they will mutate remote state.

## Notes

- Prefer `--payload '<json>'` for complex actions
- The wrapper returns stable JSON for every action
- Errors are normalized into `{ code, error, msg, tip }`
- For approvals actions (`approvals-pass`, `approvals-reject`), `errorCode` is mapped to a human-friendly `errorHint` when available.
- If `errorCode` is `121935`, the response includes `errorDetail` with the business exception message.
- When `errorCode` is `121935`, analyze `errorDetail` and summarize the likely business cause and the exact field/parameter to fix in plain language.
- When `errorCode` is `121935`, analyze `errorDetail` and summarize the specific business exception for the user in plain language.
- See [references/action-payloads.md](references/action-payloads.md) for ready-to-use payload examples
- The bundled runtime in `dist/hly-expense-ops.bundle.cjs` is the recommended artifact for copying into `.agents/skills`
````
