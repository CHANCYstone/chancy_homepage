import * as fs from 'node:fs';
import * as path from 'node:path';

const VAULT_PATH = process.env.OBSIDIAN_VAULT_PATH || '/Users/chancy/Documents/Obsidian Vault';
const OUTPUT_DIR = path.resolve(import.meta.dirname, '..', 'src', 'content', 'projects');

interface FolderMapping {
  vaultPath: string;
  category: 'principles' | 'writing' | 'quant' | 'code';
  featured?: boolean;
}

const FOLDERS: FolderMapping[] = [
  { vaultPath: '001-Principles', category: 'principles', featured: true },
  { vaultPath: '000_Writing', category: 'writing' },
  { vaultPath: '002_Writing', category: 'writing' },
  { vaultPath: '股票研究', category: 'quant', featured: true },
  { vaultPath: '炒股', category: 'quant' },
];

function slugify(name: string): string {
  return name
    .replace(/\.md$/, '')
    .replace(/[^\w一-鿿-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}

function convertObsidianSyntax(content: string): string {
  // [[wikilinks]] → plain text
  let result = content.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '$2');
  result = result.replace(/\[\[([^\]]+)\]\]/g, '$1');

  // ![[embeds]] → remove
  result = result.replace(/!\[\[([^\]]+)\]\]/g, '');

  // > [!NOTE] / > [!TIP] / etc. → blockquote
  result = result.replace(/^>\s*\[!(\w+)\]\s*$/gm, '> **$1:**');

  return result;
}

function extractTitle(content: string, filename: string): string {
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (h1Match) return h1Match[1].replace(/[🎯✍️📊🤖⚡📝]/g, '').trim();
  return filename.replace(/\.md$/, '');
}

function extractSummary(content: string): string {
  const lines = content.split('\n').filter(l => {
    const trimmed = l.trim();
    return trimmed.length > 0
      && !trimmed.startsWith('#')
      && !trimmed.startsWith('---')
      && !trimmed.startsWith('>')
      && !trimmed.startsWith('![');
  });

  const first = lines[0] || '';
  return first.length > 100 ? first.slice(0, 97) + '...' : first || '内容详见正文';
}

function getFileDate(filePath: string): string {
  const stat = fs.statSync(filePath);
  return stat.mtime.toISOString().split('T')[0];
}

function hasExistingFrontmatter(content: string): boolean {
  return content.startsWith('---');
}

function stripExistingFrontmatter(content: string): string {
  if (!hasExistingFrontmatter(content)) return content;
  const end = content.indexOf('---', 3);
  if (end === -1) return content;
  return content.slice(end + 3).trim();
}

function processFile(filePath: string, mapping: FolderMapping): void {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const filename = path.basename(filePath);
  const body = stripExistingFrontmatter(raw);
  const converted = convertObsidianSyntax(body);
  const title = extractTitle(converted, filename);
  const summary = extractSummary(converted);
  const date = getFileDate(filePath);
  const slug = slugify(filename);

  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `category: ${mapping.category}`,
    `date: "${date}"`,
    `summary: "${summary.replace(/"/g, '\\"')}"`,
    `featured: ${mapping.featured ? 'true' : 'false'}`,
    '---',
  ].join('\n');

  const output = `${frontmatter}\n\n${converted}\n`;
  const outputPath = path.join(OUTPUT_DIR, `${slug}.md`);

  fs.writeFileSync(outputPath, output, 'utf-8');
  console.log(`  ✓ ${filename} → ${slug}.md (${mapping.category})`);
}

function collectFiles(dir: string): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectFiles(fullPath));
    } else if (entry.name.endsWith('.md') && !entry.name.startsWith('.')) {
      results.push(fullPath);
    }
  }
  return results;
}

function main() {
  console.log(`Syncing from: ${VAULT_PATH}`);
  console.log(`Output to:    ${OUTPUT_DIR}\n`);

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  let total = 0;
  for (const mapping of FOLDERS) {
    const dir = path.join(VAULT_PATH, mapping.vaultPath);
    if (!fs.existsSync(dir)) {
      console.log(`⚠ Skipping ${mapping.vaultPath} (not found)`);
      continue;
    }

    console.log(`📁 ${mapping.vaultPath} → ${mapping.category}`);
    const files = collectFiles(dir);
    for (const file of files) {
      processFile(file, mapping);
      total++;
    }
  }

  console.log(`\n✅ Synced ${total} files`);
}

main();
