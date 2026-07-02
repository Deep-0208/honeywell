const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            if (!file.includes('node_modules') && !file.includes('.next')) {
                results = results.concat(walkDir(file));
            }
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walkDir(process.cwd());
let changedFiles = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let original = content;

  content = content.replace(/<Heading\s+([^>]*as="h1"[^>]*)>/g, (match, p1) => {
    let inner = p1;
    
    // Replace variant="hero" with variant="section"
    if (inner.includes('variant="hero"')) {
        inner = inner.replace('variant="hero"', 'variant="section"');
    } else if (!inner.includes('variant="section"')) {
        inner = 'variant="section" ' + inner;
    }

    // Strip text size classes
    inner = inner.replace(/\b(text-\d+xl|sm:text-\d+xl|md:text-\d+xl|lg:text-\d+xl|xl:text-\d+xl|lg:text-\[\d+(\.\d+)?rem\]|xl:text-\[\d+(\.\d+)?rem\]|text-\[\d+(\.\d+)?rem\])\b/g, '');
    
    // Clean up multiple spaces in className
    inner = inner.replace(/\s{2,}/g, ' ');
    // Clean up empty className
    inner = inner.replace(/className="\s*"/, '');

    return `<Heading ${inner}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    changedFiles++;
  }
}
console.log('Total files changed:', changedFiles);
