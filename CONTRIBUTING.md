# Contributing to Awesome Website Prompts & Skills

感谢你对此项目的兴趣！我们欢迎任何形式的贡献——无论是提交新的 Prompt、Skill，还是改进现有内容。

---

## 目录

- [贡献类型](#贡献类型)
- [提交 Prompt](#提交-prompt)
- [提交 Skill](#提交-skill)
- [Pull Request 流程](#pull-request-流程)
- [代码规范](#代码规范)
- [需要帮助？](#需要帮助)

---

## 贡献类型

| 类型 | 说明 |
|------|------|
| **提交 Prompt** | 你写的优秀建站提示词，可直接喂给 AI 编程工具生成网站 |
| **提交 Skill** | 遵循 Anthropic Skills 规范的可复用建站能力包 |
| **改进文档** | README、拼写修正、示例补充 |
| **Bug 修复** | 链接失效、格式错误、过期内容 |

---

## 提交 Prompt

1. 在 `prompts/` 目录下创建一个 Markdown 文件，文件名简洁描述用途（如 `ai-landing-page.md`）
2. 文件头部需包含以下信息：

```markdown
## Prompt 名称

**类型：** 落地页 / 电商 / 工具站 / 博客 / 其他
**技术栈：** React / Vue / Next.js / 原生 HTML / 其他
**作者：** 你的名字
**日期：** YYYY-MM-DD

### 一句话介绍

用一句话说明这个 Prompt 能生成什么。

### 使用方式

复制以下内容到 AI 编程工具中：
```

3. Prompt 内容需完整、可直接使用
4. 更新 `README.md` 中的 Prompts 表格

---

## 提交 Skill

1. 在 `skills/` 目录下创建一个子目录，命名简洁（如 `my-skill-name/`）
2. 遵循 [Anthropic Skills 规范](https://www.anthropic.com/news/claude-skills) 的目录结构：

```
skills/my-skill/
├── README.md                          # Skill 说明（可选但推荐）
└── skills/skill-name/
    ├── SKILL.md                       # Skill 入口（frontmatter + 主流程）
    └── references/                    # 参考文档（按需加载）
        └── *.md
```

3. `SKILL.md` 必须包含有效的 YAML frontmatter：

```yaml
---
name: your-skill-name
description: 一句话描述 Skill 的用途和触发条件
metadata:
  author: 你的名字
  version: "1.0.0"
---
```

4. 更新 `README.md` 中的 Skills 表格
5. 如依赖 EdgeOne Pages 平台能力，请在 description 中注明

---

## Pull Request 流程

1. **Fork** 本仓库到你的 GitHub 账号
2. **创建分支**：`git checkout -b feat/your-feature-name`
3. **提交修改**：按上述规范添加你的内容
4. **更新 README**：在对应表格中增加一行
5. **推送并创建 PR**：
   - PR 标题格式：`类型: 简短描述`（如 `feat: add ai-landing-page prompt`）
   - PR 描述中说明你的作品解决了什么问题
   - 如果是参赛作品，请注明参赛赛道
6. 维护者会在 **7 个工作日内** Review

### PR 检查清单

提交前检查：

- [ ] Prompt / Skill 文件格式正确
- [ ] README.md 已更新
- [ ] 无拼写错误
- [ ] 引用的外部链接有效
- [ ] SKILL.md 包含完整 frontmatter

---

## 代码规范

- **语言**：中文或英文均可，建议在 Prompt 内容中保持一致
- **格式**：Markdown 格式，正确使用标题层级（`##` / `###`）
- **引用**：外部资源请使用 CDN 或稳定链接，不使用本地路径
- **安全**：不包含真实 API Key、Token 等敏感信息

---

## 需要帮助？

- 💬 [Discord 社区](https://discord.gg/3EvPueMt4K)
- 📨 邮箱：edgeonedeveloper@tencent.com
- 📖 [EdgeOne Pages 文档](https://pages.edgeone.ai/)
