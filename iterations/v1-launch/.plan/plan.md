# ChancyStone v1-launch：全站像素化个人作品集上线

> 文件位置：`iterations/v1-launch/.plan/plan.md`
> 配套 skill：first-flight-phases
> 本 plan 文档是**稳定航图**，状态跟踪在各 phase 文档（同目录的 `phases/NN-*.md`）里。

## 背景

ChancyStone 的 6 份 spec 文档已完成。现在要把它们落地成一个可访问的网站：Astro 5 静态站 + 泰拉瑞亚像素风 + Obsidian 内容同步 + GitHub Pages 部署。目标受众是 HR/招聘方，需要快速建立"跨领域开发者"的印象。

## 范围

**做：**

- Astro 5 项目初始化 + Tailwind v4 + 像素 design tokens
- 全自定义像素风 UI 组件（PixelButton / PixelCard / PixelBadge / Nav / Footer）
- Obsidian vault 同步脚本 + Content Collections
- 4 个页面（首页 / 关于 / 作品集列表+详情 / 联系）+ 404
- GitHub Pages 部署 + GitHub Actions CI
- 响应式适配 + SEO meta

**不做：**

- 暗色/亮色切换（v1 只有暗色）
- 评论互动 / 多语言 / 复杂动效
- CMS 后台 / 数据分析 dashboard

## 阶段总览

| #  | 阶段 slug          | 一句话目标                                    | 状态        |
|----|--------------------|-----------------------------------------------|-------------|
| 01 | foundation         | Astro 初始化 + Tailwind + 像素 tokens + 全局布局 | completed |
| 02 | pixel-components   | 像素风 UI 组件 + 首页实现                      | completed |
| 03 | content-pipeline   | Obsidian 同步脚本 + Content Collections 配置   | completed |
| 04 | remaining-pages    | 关于 / 作品集（列表+详情）/ 联系 / 404         | completed |
| 05 | deploy             | GitHub Actions + 响应式 + SEO meta + 上线      | completed |

> 状态值：`not started` / `in progress` / `completed` / `blocked` / `skipped`
>
> 详细任务、evidence、blocker 在各 phase 文档（`phases/NN-<slug>.md`）里，**不在本表里展开**。

## 关键决策

- **2026-05-23**：按"先基础设施、再组件+页面、最后部署"的顺序拆，因为每层依赖上一层。组件和首页放同一个 phase，避免组件做完没地方验收。
- **2026-05-23**：内容管道单独一个 phase，因为 Obsidian 语法转换有不确定性，独立验收更安全。

## Open Questions

- [ ] Obsidian vault 中的 `[[双向链接]]` 转换策略——转成标准链接还是纯文本？预期在 phase 03 解决
- [ ] 能力概览区的 4 个领域描述（CONTENT.md 中的 TODO）——用户后续补充

## 关联

- 长期文档：[BRIEF.md](../../../BRIEF.md) / [DESIGN.md](../../../DESIGN.md) / [ARCHITECTURE.md](../../../ARCHITECTURE.md) / [AGENTS.md](../../../AGENTS.md)
- 当前迭代 PRD：[PRD.md](../PRD.md)
- 首版 CONTENT：[CONTENT.md](../CONTENT.md)
