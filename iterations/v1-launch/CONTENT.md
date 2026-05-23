# ChancyStone · CONTENT · v1-launch

> 文件位置：`iterations/v1-launch/CONTENT.md`（仅首次产出）
> 配合 [PRD.md](./PRD.md) + [DESIGN.md](../../DESIGN.md) + [ARCHITECTURE.md](../../ARCHITECTURE.md) 阅读。

## 模式说明
- 📝 直接文案（COPY）
- 🤖 AI 生成需求（PROMPT）
- 📦 数据源（DATA）

## 全局内容资源

- **网站标题** 📝 `ChancyStone`
- **SEO meta title 模板** 📝 `{页面名} | ChancyStone`
- **默认 meta description** 🤖
  - 生成需求：1 句话，50-80 字，包含"跨领域开发者 / 量化 / AI / 写作"关键词，像素游戏语气但不过分，给搜索引擎看
- **OG image** 🤖
  - 生成需求：像素艺术风格的社交分享预览图，暗色背景 + 绿色像素文字 "ChancyStone"，1200×630px
- **favicon** 🤖
  - 生成需求：像素风格小图标，字母 "C" 或像素宝剑/工具图案，绿色(#4ADE80)为主色
- **404 页文案** 📝
  > YOU DIED. This page doesn't exist. [RESPAWN →](/)

---

## 首页 `/`

### Hero 区
- **名字** 📝 `ChancyStone`
- **一句话定位** 📝 `做对的事情 把事情做对`
- **主 CTA 按钮** 📝 `ENTER DUNGEON` → 链接到 `/projects`

### 精选作品区
- **作品卡片 × 3-4** 📦
  - 数据源：`src/content/projects/` 下所有 `featured: true` 的项目，按 `date` 倒序取前 4 个
  - schema：见 ARCHITECTURE.md §2 Content Collections Schema
  - 每张卡片展示：标题 / 一句话描述 / 类别标签 / 封面图（可选）

### 能力概览区
- **领域关键词 × 4** 📝
  - 量化 — {{TODO: 一句话描述，用户后续填}}
  - AI — {{TODO: 一句话描述}}
  - 写作 — {{TODO: 一句话描述}}
  - 开发 — {{TODO: 一句话描述}}

### Footer
- **邮箱** 📝 `supperduang@163.com`
- **GitHub** 📝 `github.com/chancystone`

---

## 关于页 `/about`

### 个人介绍区
- **个人背景描述**（2-3 段）📝
  > {{TODO: 用户自己写个人介绍，包含背景故事和职业路径}}
- **头像** 🤖
  - 生成需求：像素艺术风格头像，暗色背景，与网站整体风格一致

### 技能栈区
- **技能分类 + 明细** 🤖
  - 生成需求：按"语言 / 框架 / 工具 / 方法论"4 个类别组织，基于用户的领域方向（量化交易 / AI 应用 / 写作体系 / 全栈开发）推断合理的技能清单
  - 关键词方向：Python / JS-TS / 量化策略 / LLM / Obsidian / Git
  - 展示为像素风格的属性面板（RPG 风格）

### 学习体系区
- **学习方法论概述** 🤖
  - 生成需求：1 段话，80-120 字，基于用户 Obsidian 里 Principles 目录的内容方向（系统化学习 / 原则驱动 / 做事体系），像素游戏语气
- **在学方向** 🤖
  - 生成需求：2-3 个当前学习方向，基于 Obsidian vault 的 Writing / 量化研究内容推断

### 经历时间线区
- **关键节点** 🤖
  - 生成需求：3-5 个关键经历节点（时间 / 事件 / 简述），基于用户背景推断合理的里程碑，像素游戏"成就解锁"风格展示
  - 注意：用户需要在 AI 生成后核实并修正实际时间和事件

---

## 作品集列表 `/projects`

### 筛选/分类区
- **类别标签** 📝 `Code` / `Principles` / `Writing` / `Quant`

### 项目网格区
- **所有项目卡片** 📦
  - 数据源：`src/content/projects/` 全部文件
  - 按 `category` 字段分类筛选，按 `date` 倒序排列
  - 每张卡片：标题 / 一句话描述 / 类别标签 / 日期

---

## 作品详情 `/projects/[slug]`

### 内容区
- **完整内容** 📦
  - 数据源：`src/content/projects/{slug}.md`，从 Obsidian vault 自动同步
  - frontmatter 提供：标题 / 日期 / 类别 / 摘要 / 外部链接
  - body 由 Astro 渲染 Markdown

### 导航区
- **上一篇/下一篇** 📦 按 `date` 排序自动生成
- **返回列表** 📝 `← BACK TO DUNGEON` → 链接到 `/projects`

---

## 联系页 `/contact`

### 联系信息区
- **邮箱** 📝 `supperduang@163.com`
- **GitHub** 📝 `github.com/chancystone`

### 引导文案
- **一句话引导** 🤖
  - 生成需求：1-2 句，像素游戏风格，说明什么情况下欢迎联系（合作 / 招聘 / 交流），语气友好但不啰嗦
  - 示例方向："想组队？发一封信过来。" / "有任务要接？邮件是最快的传送门。"
