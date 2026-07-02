const fs = require('fs');
const files = [
  'app/(site)/products/hydraulic-power-packs/3-phase-hydraulic-power-packs/page.tsx',
  'app/(site)/products/hydraulic-power-packs/dc-mini-power-packs/page.tsx',
  'app/(site)/products/hydraulic-power-packs/high-low-hydraulic-power-packs/page.tsx'
];

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  let changed = false;

  content = content.replace(/(<Heading[^>]*variant=["']section["'][^>]*)>/g, (match, p1) => {
    if (!p1.includes('underline=')) {
      changed = true;
      return p1 + ' underline="center">';
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(f, content, 'utf8');
    console.log('Fixed headings in', f);
  } else {
    console.log('No headings missing underline in', f);
  }
});
