# Phase 04 — Remaining Pages

**Status**: `completed`
**目标**: 关于 / 作品集（列表+详情）/ 联系 / 404 页面，用 Content Collections 真实数据
**前置**: Phase 03 content-pipeline

## 验收判据

- `/projects` 列表页显示所有 56 个项目，可按类别筛选
- `/projects/[slug]` 详情页正确渲染 Markdown 内容 + 导航
- `/about` 页面有占位介绍 + 技能区
- `/contact` 页面展示邮箱和 GitHub
- `/404` 页面显示 "YOU DIED" 像素文案
- 首页 FeaturedProjects 改为从 Content Collections 读取 featured 项目

## Tasks

- [x] 作品集列表页 /projects (src/pages/projects/index.astro - 56 projects with category filter)
- [x] 作品详情页 /projects/[slug] (src/pages/projects/[slug].astro - Markdown render + prev/next nav)
- [x] 首页 FeaturedProjects 改为真实数据 (src/components/sections/FeaturedProjects.astro - getCollection)
- [x] 关于页 /about (src/pages/about.astro - player profile + skill tree RPG panel)
- [x] 联系页 /contact (src/pages/contact.astro - email + GitHub + guidance text)
- [x] 404 页面 (src/pages/404.astro - "YOU DIED" + RESPAWN button)

## Notes

- Content Collections 在 Astro 6 需要用 glob loader (content.config.ts 已更新)
- 详情页 Markdown 用 Tailwind 子选择器做内联样式（无 @tailwindcss/typography 插件）
- 筛选功能用客户端 JS 实现，不需要额外 island
