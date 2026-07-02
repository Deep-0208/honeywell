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

  // Add text-justify to all raw <h2 className="..."> tags
  content = content.replace(/<h2(\s+[^>]*)className="([^"]*)"/g, (match, before, classes) => {
    if (!classes.includes('text-justify')) {
        return `<h2${before}className="${classes} text-justify"`;
    }
    return match;
  });

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Updated', file);
    changedFiles++;
  }
}
console.log('Total files changed:', changedFiles);
