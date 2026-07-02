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

  // 1. Revert text-justify on raw <h2> tags
  content = content.replace(/<h2(\s+[^>]*)className="([^"]*)"/g, (match, before, classes) => {
    if (classes.includes('text-justify')) {
        let newClasses = classes.replace(/\s*text-justify\s*/g, ' ').trim();
        return `<h2${before}className="${newClasses}"`;
    }
    return match;
  });

  // 2. Add text-justify to <p> tags
  // We match <p ... className="...">
  content = content.replace(/<p(\s+[^>]*)className="([^"]*)"/g, (match, before, classes) => {
    if (!classes.includes('text-justify') && !classes.includes('text-center') && !classes.includes('text-right')) {
        // Add text-justify, avoiding if it's already aligned another way (optional heuristic, but safe)
        return `<p${before}className="${classes} text-justify"`;
    }
    return match;
  });

  // 3. Fix breadcrumb colors
  // Match: <nav aria-label="Breadcrumb" className="... text-brand-borderGray ...">
  content = content.replace(/(<nav[^>]*aria-label="Breadcrumb"[^>]*className="[^"]*)text-brand-borderGray([^"]*")/g, '$1text-slate-500$2');
  
  // Wait, there might be other breadcrumb variations.
  // We also have Global Breadcrumb component itself. Let's see if we need to change it there.
  // For safety, let's also just replace text-brand-borderGray with text-slate-500 anywhere near "Breadcrumb"
  // The above regex is pretty safe for the pages. Let's also check if the Link has specific colors.
  // We will run this script first.

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    changedFiles++;
  }
}
console.log('Total files changed:', changedFiles);
