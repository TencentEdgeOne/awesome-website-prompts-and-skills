# NOC排班管理系统

> **赛道**：Skill　**作者**：搏击长空
>
> WorkBuddy × Tencent EdgeOne AI Prompts × Skills 挑战赛 参赛作品

## 🎬 Demo

![NOC排班管理系统 cover](../assets/demos/noc-events.png)

> 🎞️ 想看动效？[点击查看 demo 动图（GIF）](../assets/demos/noc-events.gif)

## 📌 作品信息

| 字段 | 内容 |
|---|---|
| 作品名称 | NOC排班管理系统 |
| 赛道 | Skill |
| 作者 | 搏击长空 |

## 📝 作品介绍

这个系统是自动排版管理系统，日常排班管理的核心场景：

排班表管理 — 查看/修改班次（白班/夜班），记录替班安排
倒休/调休申请 — 员工提交申请，管理员审批/拒绝，支持换班
年休假管理 — 配置每人年假额度，追踪使用情况
例会管理 — 记录每次例会的参会人员、时长，自动折算工时补偿
加班记录 — 按人员记录加班工时和原因
替班工程师库 — 维护可调用的外部替班人员名单
管理后台 — 用户管理、配置管理、数据导入导出（全量备份/恢复）
授权控制 — 基于机器码的 License 机制，限制使用期限
保证员工权益符合劳动法，每月合理倒休，控制全年工时合法，可视化视图，给出超出工时的合理倒休建议，自动记录每月每年的工时。并且具有后台数据导入导出，系统备份功能

---

## 🚀 完整 Skill 说明

````
/---
name: noc-scheduler
description: Reference codebase for Scheduler Standalone. Use this skill when you need to understand the structure， implementation patterns， or code details of the Scheduler Standalone project.
---

# Scheduler Standalone Codebase Reference

51 files | 11932 lines | 148319 tokens

## Overview

Use this skill when you need to:
- Understand project structure and file organization
- Find where specific functionality is implemented
- Read source code for any file
- Search for code patterns or keywords

## Files

| File | Contents |
|------|----------|
| `references/summary.md` | **Start here** - Purpose， format explanation， and statistics |
| `references/project-structure.md` | Directory tree with line counts per file |
| `references/files.md` | All file contents (search with `## File: `) |

## How to Use

### 1. Find file locations

Check `project-structure.md` for the directory tree:

```
src/
  index.ts (42 lines)
  utils/
    helpers.ts (128 lines)
```

### 2. Read file contents

Grep in `files.md` for the file path:

```
## File: src/utils/helpers.ts
```

### 3. Search for code

Grep in `files.md` for keywords:

```
function calculateTotal
```

## Common Use Cases

**Understand a feature:**
1. Search `project-structure.md` for related file names
2. Read the main implementation file in `files.md`
3. Search for imports/references to trace dependencies

**Debug an error:**
1. Grep the error message or class name in `files.md`
2. Check line counts in `project-structure.md` to find large files

**Find all usages:**
1. Grep function or variable name in `files.md`

## Tips

- Use line counts in `project-structure.md` to estimate file complexity
- Search `## File:` pattern to jump between files
- Check `summary.md` for excluded files， format details， and file statistics

---
````
