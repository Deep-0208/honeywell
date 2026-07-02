const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if(file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const productDirs = [
  path.join(__dirname, 'app/(site)/products'),
  path.join(__dirname, 'components/products')
];

let files = [];
productDirs.forEach(dir => {
  if (fs.existsSync(dir)) files = files.concat(walk(dir));
});

let updatedCount = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  // Find <Image ... priority ...> tags
  const newContent = content.replace(/<Image[^>]+priority[^>]*>/g, (match) => {
    // If it already has fetchPriority, skip
    if (match.includes('fetchPriority=')) return match;
    changed = true;
    
    // Replace priority or priority={true} with the optimized attributes
    return match.replace(/priority(={true})?/, 'priority fetchPriority="high" decoding="sync" quality={85}');
  });

  if (changed) {
    fs.writeFileSync(f, newContent, 'utf8');
    console.log('Fixed Image in', f);
    updatedCount++;
  }
});

console.log(`Total files updated: ${updatedCount}`);
