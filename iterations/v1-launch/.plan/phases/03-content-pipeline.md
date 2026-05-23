# Phase 03 — Content Pipeline

**Status**: `completed`
**目标**: Obsidian vault 同步脚本 + Astro Content Collections 配置，让 Markdown 内容能被网站消费
**前置**: Phase 02 pixel-components

## 验收判据

- `npx tsx scripts/sync-obsidian.ts` 成功运行，从 vault 同步文件到 `src/content/projects/`
- 同步后的 .md 文件有合法的 frontmatter（title / category / date / summary）
- Obsidian 特殊语法（`[[]]` / `> [!callout]`）被正确转换
- Content Collections schema 校验通过

## Tasks

- [x] 查看 Obsidian vault 内容结构 (5 folders: 001-Principles, 000_Writing, 002_Writing, 股票研究, 炒股)
- [x] 创建 Content Collections schema (src/content.config.ts - title/category/date/summary/tags/featured)
- [x] 编写 sync-obsidian.ts 同步脚本 (scripts/sync-obsidian.ts - 读取→转换语法→补frontmatter→写入)
- [x] 运行同步脚本，验证产出文件 (56 files synced successfully)
- [x] 验证同步文件 frontmatter 格式正确 (贵州茅台.md, 系统1-做事儿的系统.md 等已验证)

## Notes

- 同步 5 个 vault 目录：001-Principles(7) + 000_Writing(38) + 002_Writing(1) + 股票研究(9) + 炒股(1) = 56 files
- Obsidian 语法转换：[[wikilinks]]→纯文本, ![[embeds]]→移除, > [!callout]→blockquote
- 已有 frontmatter 的文件会被剥离旧 frontmatter 重新生成
- Principles 和 Quant 标记为 featured: true
