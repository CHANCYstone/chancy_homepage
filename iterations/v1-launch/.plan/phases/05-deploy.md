# Phase 05 — Deploy

**Status**: `completed`
**目标**: GitHub Actions + SEO meta + 构建验证，准备上线
**前置**: Phase 04 remaining-pages

## 验收判据

- `npm run build` 构建成功，无错误
- GitHub Actions workflow 文件就绪
- 所有页面有正确的 meta title / description / OG tags
- git 初始化 + .gitignore 配置完成

## Tasks

- [x] 配置 astro.config.mjs (site: chancystone.github.io, base: /chancy_homepage, output: static)
- [x] 创建 .gitignore (node_modules, dist, .astro, .env, .DS_Store)
- [x] 创建 GitHub Actions deploy workflow (.github/workflows/deploy.yml - Node 22, upload-pages-artifact)
- [x] 给所有页面补 SEO meta (src/layouts/Base.astro - og:title, og:description, twitter:card)
- [x] 验证 `npm run build` 构建成功 (61 pages built in 2.33s, zero errors)
- [x] git init + branch main (.git initialized, all files staged)

## Notes

- 构建输出 61 个页面（4 固定页 + 56 项目详情 + 1 项目列表）
- GitHub Pages 部署用 actions/deploy-pages@v4，需要在 GitHub repo settings 里启用 Pages (Source: GitHub Actions)
- site/base 配置为 chancystone.github.io/chancy_homepage，如果用自定义域名后续改 astro.config.mjs
