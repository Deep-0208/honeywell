import fs from 'fs';
import path from 'path';

const basePath = 'c:/Users/DELL/Desktop/Honeywell Seo/website';

const pages = [
  '/',
  '/about-us/',
  '/manufacturing-facility/',
  '/contact-us/',
  '/request-quote/',
  '/products/',
  '/products/hydraulic-cylinders/',
  '/products/hydraulic-power-packs/',
  '/products/manifold-blocks/',
  '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
  '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/',
  '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/',
  '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
  '/products/hydraulic-cylinders/welded-hydraulic-cylinders/',
  '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/',
  '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/',
  '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/',
  '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/',
  '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/',
  '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/',
  '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/',
  '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/',
  '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/customized-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/',
  '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/',
  '/products/manifold-blocks/06-size-manifold-blocks/',
  '/products/manifold-blocks/10-size-manifold-blocks/',
  '/products/manifold-blocks/cetop-manifold-blocks/',
  '/products/manifold-blocks/custom-manifold-blocks/',
  '/products/manifold-blocks/multi-station-manifold-blocks/',
  '/locations/',
  '/locations/gujarat/',
  '/locations/ahmedabad/',
  '/locations/surat/',
  '/locations/vadodara/',
  '/locations/rajkot/',
  '/locations/bhavnagar/',
  '/locations/jamnagar/',
  '/locations/gandhinagar/',
  '/locations/kutch/',
  '/locations/morbi/',
  '/locations/vapi/',
  '/locations/ankleshwar/',
  '/locations/halol/',
  '/locations/gujarat/injection-moulding-cylinders/',
  '/locations/gujarat/ship-breaking-cylinders/',
  '/locations/gujarat/textile-machinery-cylinders/',
  '/locations/maharashtra/',
  '/locations/madhya-pradesh/',
  '/locations/rajasthan/',
  '/locations/karnataka/',
  '/locations/tamil-nadu/',
  '/locations/west-bengal/'
];

function scanDirectory(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (!['node_modules', '.next', '.git'].includes(file)) {
        scanDirectory(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.css')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const files = scanDirectory(path.join(basePath, 'components'))
  .concat(scanDirectory(path.join(basePath, 'app')));

console.log(`Auditing ${files.length} UI files across the project...`);

const issues = [];

for (const filePath of files) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relPath = path.relative(basePath, filePath).replace(/\\/g, '/');

  // Check for dangerous hardcoded widths (> 320px) without max-w-full or responsive prefixes
  const fixedWidthMatches = content.match(/w-\[(\d+)px\]/g);
  if (fixedWidthMatches) {
    for (const match of fixedWidthMatches) {
      const px = parseInt(match.replace(/\D/g, ''), 10);
      if (px > 320) {
        const lines = content.split('\n');
        lines.forEach((line, lineIdx) => {
          if (
            line.includes(match) &&
            !line.includes('absolute') &&
            !line.includes('pointer-events-none') &&
            !line.includes('hidden') &&
            !line.includes('max-w-') &&
            !line.includes('w-[calc(')
          ) {
            issues.push({
              file: relPath,
              line: lineIdx + 1,
              issue: `Fixed width ${match} exceeds 320px mobile viewport without max-w constraint`,
              snippet: line.trim()
            });
          }
        });
      }
    }
  }

  // Check for min-w without overflow wrapper
  const minWidthMatches = content.match(/min-w-\[(\d+)px\]/g);
  if (minWidthMatches) {
    for (const match of minWidthMatches) {
      const px = parseInt(match.replace(/\D/g, ''), 10);
      if (px > 320) {
        const lines = content.split('\n');
        lines.forEach((line, lineIdx) => {
          if (
            line.includes(match) &&
            !content.includes('overflow-x-auto') &&
            !content.includes('overflow-hidden')
          ) {
            issues.push({
              file: relPath,
              line: lineIdx + 1,
              issue: `min-width ${match} used without overflow-x-auto container`,
              snippet: line.trim()
            });
          }
        });
      }
    }
  }

  // Check for tables without overflow-x-auto
  if (content.includes('<table') && !content.includes('overflow-x-auto')) {
    issues.push({
      file: relPath,
      line: 1,
      issue: 'Table element found without surrounding overflow-x-auto wrapper',
      snippet: '<table ...'
    });
  }
}

console.log(`Scan completed. Found ${issues.length} potential responsive code issues.`);
if (issues.length > 0) {
  console.log(JSON.stringify(issues, null, 2));
} else {
  console.log('✅ ALL components pass static responsive architecture checks.');
}
