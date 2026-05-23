# ChancyStone · AGENTS

> 这份文档是 Codex / Claude 进入本项目的入口。拿到项目目录后，请先读完这份文档再开始工作。

## 项目一句话

个人作品集 + 博客混合站，面向招聘方和行业同行，展示多元技术背景与持续学习的深度。

## 文档地图

本项目由 First Flight 生成，文档分两类。**长期文档先读、迭代产物按需读**：

**长期文档（项目根，跨迭代共用）：**

| 文档 | 内容 | 字数 |
|---|---|---|
| [BRIEF.md](./BRIEF.md) | 项目长期纲领（本质、用户、价值、边界） | ~400 |
| [DESIGN.md](./DESIGN.md) | 视觉与 UX 风格（像素化泰拉瑞亚风 + Google DESIGN.md 标准） | ~6000 |
| [ARCHITECTURE.md](./ARCHITECTURE.md) | 技术栈、代码组织、部署 | ~4800 |
| [AGENTS.md](./AGENTS.md) | 本文件——AI 入口 + 协作规则 | — |

**迭代产物（`iterations/v1-launch/`）：**

| 文件 | 内容 |
|---|---|
| [iterations/v1-launch/PRD.md](./iterations/v1-launch/PRD.md) | 首版页面结构、信息架构、目标衡量 |
| [iterations/v1-launch/CONTENT.md](./iterations/v1-launch/CONTENT.md) | 首版每个内容槽的填充（📝直接文案 / 🤖AI生成需求 / 📦数据源） |

## 项目本质边界（来自 BRIEF）

**永远会是的：**
- 个人站、作品展示 + 思考输出、公开知识库

**永远不做的：**
- 电商/支付、社区/用户系统、SaaS 工具产品

⚠️ 任何看似偏离这些边界的请求，请先停下来和用户确认；不要默认接受。

## 技术栈一句话（来自 ARCHITECTURE）

Astro 5 (SSG) + TypeScript + Tailwind v4 + 全自定义像素风组件 + Astro Content Collections (Markdown) + GitHub Pages 部署。

详细决策见 [ARCHITECTURE.md](./ARCHITECTURE.md)。

## 写代码前的准备

如果还没做完这些，先停下来提醒用户：

- [ ] `npm create astro@latest` 初始化 Astro 项目
- [ ] 安装 Tailwind：`npx astro add tailwind`
- [ ] 跑 `npx @google/design.md export --format css-tailwind DESIGN.md > src/styles/theme.css` 把 DESIGN tokens 导成 Tailwind v4 theme
- [ ] 配置 `.env.local` 中的 `OBSIDIAN_VAULT_PATH`
- [ ] 配置 `astro.config.mjs` 的 `site` 和 `base` 匹配 GitHub Pages 路径

## 写代码时的核心规则

### 必须遵循
1. **遵循 DESIGN.md 的 Do's & Don'ts**——尤其 Don'ts：不要渐变背景、不要圆角、不要 stock 照片、不要模糊阴影、不要 serif/humanist 字体、不要 glassmorphism
2. **全站像素化**——字体 Press Start 2P、边框 4px 实线、硬像素阴影 (4px 4px 0)、方角一律 border-radius: 0
3. **CONTENT.md 的三种模式**：
   - 📝 标记的文案——**原样使用**，不要替换或"优化"
   - 🤖 标记的需求——按需求 + DESIGN voice + BRIEF 语气生成
   - 📦 标记的数据源——从 `src/content/projects/` 读取，schema 见 ARCHITECTURE §2
4. **代码组织**——严格按 ARCHITECTURE §8 的目录结构
5. **不要引入未在 ARCHITECTURE 中列出的依赖**——需要新依赖先停下来讨论
6. **复杂开发用 phase 管理**——改动 ≥ 5 步骤 / 跨多文件时，必须建立 `.plan/plan.md` + `phases/`，每个 phase 完成后停下让用户验收

### 编码风格
- TypeScript strict mode
- Astro 组件名 PascalCase（如 `PixelButton.astro`）
- 工具函数 camelCase
- CSS 类名用 Tailwind utility，自定义样式用 CSS custom properties

### Commit 前自检
- [ ] `pnpm lint` 全通过
- [ ] `pnpm build` 构建成功
- [ ] Lighthouse Performance ≥ 95 / Accessibility ≥ 95（如改了关键路径）

### Spec Sync

**核心原则**：spec 是 source of truth，不同文档同步规则不同。

1. **改动影响长期文档** → 更新根目录文件（如调色 → DESIGN; 装新包 → ARCHITECTURE）
2. **改动影响当前迭代** → 更新 `iterations/v1-launch/` 下文件
3. **新需求 / 新功能** → 开新迭代 `iterations/v{N+1}-{slug}/`，不要动 v1-launch 的 PRD

## 工具链常用命令

```bash
# 启动开发
pnpm dev

# 构建
pnpm build

# 同步 Obsidian 内容
npx tsx scripts/sync-obsidian.ts

# 导出 design tokens（每次改 DESIGN.md 后跑）
npx @google/design.md export --format css-tailwind DESIGN.md > src/styles/theme.css

# 校验 DESIGN.md
npx @google/design.md lint DESIGN.md

# 部署（GitHub Actions 自动，或手动）
pnpm build && # push to main triggers deploy
```

## 在哪里找信息

| 问题 | 去哪查 |
|---|---|
| 项目长期要变成什么样？ | BRIEF.md |
| 第一版做哪些页面/功能？ | iterations/v1-launch/PRD.md §页面结构、§信息架构 |
| 按钮/卡片长什么样？ | DESIGN.md §Components、§Shapes |
| 用什么色/字体？ | DESIGN.md YAML front matter |
| 用什么技术栈/库？ | ARCHITECTURE.md §1 |
| 某个区块放什么内容？ | iterations/v1-launch/CONTENT.md（按页面/区块/内容槽查） |
| 怎么部署？ | ARCHITECTURE.md §4 |
| 性能/a11y 目标？ | ARCHITECTURE.md §5-6 + DESIGN.md §Accessibility |

## 协作姿态

- 不确定先问用户，不要默认假设
- 遇到 BRIEF 边界冲突要停下
- 改了实现要同步更新对应的 spec 文件
- 5 份文档是 source of truth，代码是文档的实现
