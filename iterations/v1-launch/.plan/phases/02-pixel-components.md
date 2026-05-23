# Phase 02 — Pixel Components + 首页

**Status**: `completed`
**目标**: 构建马里奥风像素 UI 组件 + 完整首页（Hero / 精选作品 / 能力概览 / Footer）
**前置**: Phase 01 foundation

## 验收判据

- 首页 4 个区块全部渲染：Hero / 精选作品（占位数据）/ 能力概览 / Footer
- PixelButton / PixelCard / PixelBadge 组件可复用
- Header 导航可点击跳转到各页面
- 响应式：桌面 2-3 列卡片，移动端单列

## Tasks

- [x] 创建 PixelButton 组件 (src/components/ui/PixelButton.astro - primary/secondary variants + hover)
- [x] 创建 PixelCard 组件 (src/components/ui/PixelCard.astro - hover border red + shadow enlarge)
- [x] 创建 PixelBadge 组件 (src/components/ui/PixelBadge.astro - blue/red/green/yellow colors)
- [x] 创建 Header 导航组件 (src/components/layout/Header.astro - pixel nav with active state)
- [x] 创建 Footer 组件 (src/components/layout/Footer.astro - email + GitHub links)
- [x] 创建 Hero section (src/components/sections/Hero.astro - ChancyStone + slogan + ENTER DUNGEON)
- [x] 创建 FeaturedProjects section (src/components/sections/FeaturedProjects.astro - 4 placeholder cards)
- [x] 创建 SkillsOverview section (src/components/sections/SkillsOverview.astro - 量化/AI/写作/开发)
- [x] 组装完整首页 (src/pages/index.astro - Base + Header + Hero + Featured + Skills + Footer)

## Notes

- 设计从泰拉瑞亚暗色风改为马里奥亮色风（用户要求），DESIGN.md 已同步更新
- FeaturedProjects 目前用硬编码占位数据，Phase 03 接入 Content Collections 后替换
- SkillsOverview 的一句话描述还是 TODO（CONTENT.md 中标注），目前只展示领域名
