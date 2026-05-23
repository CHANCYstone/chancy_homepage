# ChancyStone · ARCHITECTURE

> 配合 BRIEF.md / PRD.md / DESIGN.md 阅读。本文档定义技术栈、代码组织、部署方式。

## 1. 技术栈总览

| 层 | 选择 | 版本 | 理由 |
|---|---|---|---|
| Framework | Astro | 5.x | SSG 为主，Content Collections 原生支持 Markdown，默认 0 JS，像素风静态站最佳匹配 |
| Language | TypeScript | 5.x | 类型安全，减少 AI 协作时的类型错误 |
| Styling | Tailwind CSS | 4.x | utility 基础 + 自定义像素 token，可从 DESIGN.md 导出 theme |
| UI 库 | 无（全自定义） | — | 像素风需要完全自定义组件（游戏 UI 边框、硬像素阴影），任何预设库都会干扰 |
| 字体 | Press Start 2P | — | Google Fonts 免费像素字体，全站统一 |
| 内容存储 | Astro Content Collections | — | typed Markdown/MDX，从 Obsidian vault 自动同步 |
| 部署 | GitHub Pages | — | 免费，GitHub Actions 自动构建部署 |
| 分析 | Umami（自建）或 Plausible | — | 隐私友好、轻量、无 cookie |

## 2. 内容存储与数据策略

### Obsidian → Astro 同步

写一个 `scripts/sync-obsidian.ts` 脚本：
1. 从 Obsidian vault 源目录读取指定文件夹（Principles / Writing / 量化研究）
2. 转换 Obsidian 特有语法：
   - `[[双向链接]]` → 标准 Markdown 链接或纯文本
   - `> [!callout]` → 标准 blockquote 或自定义组件
   - 嵌入 `![[embed]]` → 内联内容或忽略
3. 补齐 frontmatter（title / date / category / slug）
4. 输出到 `src/content/projects/`

配置 vault 源路径为环境变量 `OBSIDIAN_VAULT_PATH`，避免硬编码。

### Content Collections Schema

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['code', 'principles', 'writing', 'quant']),
    date: z.string(),
    summary: z.string(),
    coverImage: z.string().optional(),
    tags: z.array(z.string()).optional(),
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
```

### 数据获取策略

**纯 SSG**——所有页面在构建时生成静态 HTML。无 SSR、无 ISR、无客户端数据获取。内容更新流程：同步脚本 → git push → GitHub Actions 自动重新构建部署。

## 3. 第三方服务

| 类别 | 选择 | 集成方式 |
|---|---|---|
| 分析 | Umami（自建）或 Plausible Cloud | `<script>` 标签注入，无需 npm 包 |

第一版不接入表单服务——联系页直接展示邮箱和社交链接，不做表单。不接入反垃圾、评论、搜索。后续迭代按需加。

## 4. 部署

### GitHub Pages + GitHub Actions

```yaml
# .github/workflows/deploy.yml
# 触发：push to main
# 步骤：install → build → deploy to gh-pages branch
```

- **构建命令**：`npm run build`（Astro 输出到 `dist/`）
- **部署目标**：`gh-pages` 分支
- **域名**：先用 `{username}.github.io/{repo}` 默认域名，后续可绑自定义域名
- **Astro 配置**：`site` 和 `base` 需要匹配 GitHub Pages 路径

### 环境变量

| Key | 用途 | 存放位置 |
|---|---|---|
| `OBSIDIAN_VAULT_PATH` | 本地同步脚本用 | `.env.local`（不入 git） |
| 分析相关（如 Umami URL） | 分析脚本注入 | GitHub Secrets → Actions 环境变量 |

## 5. 性能预算

| 指标 | 目标 | 理由 |
|---|---|---|
| LCP | < 1.5s | Astro 静态站可轻松达到 |
| CLS | < 0.05 | 像素字体需要显式设置 font-display + 尺寸预留 |
| TTFB | < 500ms | GitHub Pages CDN |
| JS initial bundle | < 20KB | Astro 默认 0 JS，仅像素动效需要少量 JS |
| Lighthouse Performance | ≥ 95 | |

**关键优化点**：
- Press Start 2P 字体用 `font-display: swap` + `<link rel="preload">` 避免 FOIT
- 像素艺术图片用 WebP/AVIF，Astro Image 内建优化
- 动效 JS 用 `<script>` island 按需加载，不全局注入

## 6. 可访问性预算

- WCAG AA（继承 DESIGN.md）
- Lighthouse Accessibility ≥ 95
- 所有交互元素键盘可达 + focus ring
- `prefers-reduced-motion` 关闭所有动画
- 像素字体可读性：body 最小 12px 渲染尺寸，行距 1.8

## 7. 安全

- CSP 头通过 `_headers` 文件配置（GitHub Pages 支持有限，Astro 可在 middleware 处理）
- 环境变量不入 git（`.env.local` + `.gitignore`）
- 无用户输入处理（第一版无表单），安全面最小

## 8. 代码组织

```
chancy_homepage/
├── src/
│   ├── content/
│   │   └── projects/          # Astro Content Collections（从 Obsidian 同步来的 MD）
│   ├── pages/
│   │   ├── index.astro        # 首页
│   │   ├── about.astro        # 关于
│   │   ├── projects/
│   │   │   ├── index.astro    # 作品集列表
│   │   │   └── [slug].astro   # 作品详情
│   │   └── contact.astro      # 联系
│   ├── components/
│   │   ├── ui/                # 像素风基础组件（PixelButton / PixelCard / PixelBadge）
│   │   ├── layout/            # Header / Footer / Nav
│   │   └── sections/          # 页面区块组件（Hero / FeaturedProjects / SkillsOverview）
│   ├── layouts/
│   │   └── Base.astro         # 全局布局（字体加载 / meta / 分析脚本）
│   └── styles/
│       ├── global.css         # 全局重置 + 像素风基础样式
│       └── theme.css          # 从 DESIGN.md export 的 Tailwind v4 theme tokens
├── scripts/
│   └── sync-obsidian.ts       # Obsidian vault → Content Collections 同步脚本
├── public/
│   ├── fonts/                 # Press Start 2P 本地字体文件（可选，也可用 Google Fonts CDN）
│   └── images/                # 像素艺术资源
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 自动部署
├── astro.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── .env.local                 # 环境变量（不入 git）
├── .gitignore
├── BRIEF.md
├── DESIGN.md
├── ARCHITECTURE.md
└── iterations/
    └── v1-launch/
        ├── PRD.md
        └── CONTENT.md
```

## 9. DESIGN Token 导出

DESIGN.md 的 YAML tokens 可直接导出为 Tailwind v4 theme：

```bash
npx @google/design.md export --format css-tailwind DESIGN.md > src/styles/theme.css
```

导出后在 `tailwind.config.js` 中引入，所有像素风 token（colors / spacing / elevation）自动可用为 Tailwind utility。
