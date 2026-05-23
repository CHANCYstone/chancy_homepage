# Phase 01 — Foundation

**Status**: `completed`
**目标**: Astro 5 初始化 + Tailwind v4 + 像素 design tokens + 全局布局，跑通 `pnpm dev` 看到暗色背景 + 像素字体
**前置**: 无

## 验收判据

- `pnpm dev` 启动成功，浏览器打开看到暗色背景 (#0D0D0D) + Press Start 2P 字体
- 目录结构符合 ARCHITECTURE §8
- Tailwind 能使用 DESIGN.md 中定义的 token（colors / spacing / elevation）
- Base.astro 布局包含：字体加载、全局样式、meta 占位

## Tasks

- [x] 初始化 Astro 5 项目 (package.json, astro.config.mjs, tsconfig.json)
- [x] 安装 Tailwind v4 (astro.config.mjs 已配置 @tailwindcss/vite 插件)
- [x] 创建目录结构 (src/components/{ui,layout,sections}, src/layouts, src/styles, src/content/projects, scripts)
- [x] 配置像素风 design tokens (src/styles/global.css - @theme block with all DESIGN.md colors/spacing/elevation)
- [x] 加载 Press Start 2P 字体 (src/layouts/Base.astro - Google Fonts CDN + font-display: swap + preconnect)
- [x] 创建 Base.astro 全局布局 (src/layouts/Base.astro - 暗色背景, 字体, meta, max-width 960px)
- [x] 创建首页占位验证全链路 (src/pages/index.astro - Hero with ChancyStone + slogan + ENTER DUNGEON button)

## Notes

- Astro v6.3.7 已安装（最新版，向下兼容 Astro 5 API）
- Tailwind v4.3.0 通过 @tailwindcss/vite 插件集成
- global.css 用 `border-radius: 0 !important` 全局禁用圆角
- `image-rendering: pixelated` 全局启用像素渲染
- `prefers-reduced-motion` 已处理
