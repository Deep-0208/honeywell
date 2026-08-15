import fs from 'fs';
import path from 'path';

const projectRoot = 'c:/Users/DELL/Desktop/Honeywell Seo/website';

const targetDirs = [
  path.join(projectRoot, 'data'),
  path.join(projectRoot, 'components'),
  path.join(projectRoot, 'app/(site)'),
];

function walk(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, fileList);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

let modifiedCount = 0;

for (const dir of targetDirs) {
  const allFiles = walk(dir);
  for (const file of allFiles) {
    // Skip sitemap and canonical definitions
    if (file.endsWith('sitemap.ts') || file.endsWith('seo.ts')) continue;

    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    // 1. Replace ctaHref: '/request-quote/' or '/request-quote'
    if (content.includes("ctaHref: '/request-quote/'") || content.includes("ctaHref: '/request-quote'")) {
      content = content.replace(/ctaHref:\s*['"]\/request-quote\/?['"]/g, "ctaHref: '/request-quote/#quote-form'");
      changed = true;
    }

    // 2. Replace primaryCtaHref: '/request-quote/' or '/request-quote'
    if (content.includes("primaryCtaHref: '/request-quote/'") || content.includes("primaryCtaHref: '/request-quote'") ||
        content.includes('primaryCtaHref="/request-quote/"') || content.includes('primaryCtaHref="/request-quote"')) {
      content = content.replace(/primaryCtaHref=['"]\/request-quote\/?['"]/g, 'primaryCtaHref="/request-quote/#quote-form"');
      content = content.replace(/primaryCtaHref:\s*['"]\/request-quote\/?['"]/g, "primaryCtaHref: '/request-quote/#quote-form'");
      changed = true;
    }

    // 3. Replace href: '/request-quote' in CTA objects
    if (content.includes("href: '/request-quote/'") || content.includes("href: '/request-quote'")) {
      content = content.replace(/href:\s*['"]\/request-quote\/?['"]/g, "href: '/request-quote/#quote-form'");
      changed = true;
    }

    // 4. Replace href="/request-quote/" or href="/request-quote" in JSX buttons/links
    // Avoid changing breadcrumb or internal nav if it refers to the page itself as a plain link, but change CTA buttons
    const regexHref = /href=["']\/request-quote\/?["']/g;
    if (regexHref.test(content)) {
      // Don't replace if it's canonical or breadcrumb schema
      content = content.replace(/(<(?:Button|a|Link)[^>]*?)href=["']\/request-quote\/?["']/g, '$1href="/request-quote/#quote-form"');
      changed = true;
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      modifiedCount++;
      console.log(`Updated: ${path.relative(projectRoot, file)}`);
    }
  }
}

console.log(`\nSuccessfully updated ${modifiedCount} files to link directly to /request-quote/#quote-form.`);
