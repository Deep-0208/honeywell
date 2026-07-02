const fs = require('fs');
const path = require('path');

function walkDir(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walkDir(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const componentsDir = path.join(process.cwd(), 'components');
const files = walkDir(componentsDir);

for (const file of files) {
  // Only target components/cards and components/homepage
  if (file.includes(path.join('components', 'cards')) || file.includes(path.join('components', 'homepage'))) {
      let content = fs.readFileSync(file, 'utf-8');
      let original = content;

      content = content.replace(/text-justify/g, '');

      if (content !== original) {
        fs.writeFileSync(file, content.replace(/\s{2,}/g, ' '));
        console.log('Fixed', file);
      }
  }
}
