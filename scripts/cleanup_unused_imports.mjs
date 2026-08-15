import fs from 'fs';
import path from 'path';

const filesToClean = [
  'components/templates/location/CTASection.tsx',
  'data/hydraulic-cylinders/car-parking-hydraulic-cylinders.tsx',
  'data/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder.tsx',
  'data/hydraulic-cylinders/goods-lift-hydraulic-cylinders.tsx',
  'data/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder.tsx',
  'data/hydraulic-cylinders/square-body-hydraulic-cylinder.tsx',
  'data/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder.tsx',
  'data/hydraulic-power-packs/accumulator-hydraulic-power-packs.tsx',
  'data/hydraulic-power-packs/customized-hydraulic-power-packs.tsx',
  'data/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs.tsx',
  'data/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs.tsx',
  'data/hydraulic-power-packs/high-low-hydraulic-power-packs.tsx',
  'data/hydraulic-power-packs/hydraulic-power-packs-for-press.tsx',
  'data/hydraulic-power-packs/multistation-hydraulic-power-packs.tsx',
  'data/hydraulic-power-packs/single-phase-hydraulic-power-packs.tsx',
  'data/hydraulic-power-packs/three-phase-hydraulic-power-packs.tsx',
  'data/manifold-blocks/06-size-manifold-blocks.tsx',
  'data/manifold-blocks/10-size-manifold-blocks.tsx',
  'data/manifold-blocks/cetop-manifold-blocks.tsx',
  'data/manifold-blocks/multi-station-manifold-blocks.tsx',
  'lib/navigation.ts'
];

const basePath = 'c:/Users/DELL/Desktop/Honeywell Seo/website';

for (const relPath of filesToClean) {
  const fullPath = path.join(basePath, relPath);
  if (!fs.existsSync(fullPath)) continue;

  let content = fs.readFileSync(fullPath, 'utf8');

  // Find all import statements
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]([^'"]+)['"];?/g;
  let match;
  let updatedContent = content;

  while ((match = importRegex.exec(content)) !== null) {
    const [fullImport, importedSymbols, fromPath] = match;
    const symbols = importedSymbols.split(',').map(s => s.trim()).filter(Boolean);
    
    // Check which symbols are actually used in the file outside the import
    const usedSymbols = symbols.filter(sym => {
      // Find occurrences of sym outside import
      const restOfContent = content.replace(fullImport, '');
      const symbolRegex = new RegExp(`\\b${sym}\\b`);
      return symbolRegex.test(restOfContent);
    });

    if (usedSymbols.length === 0) {
      updatedContent = updatedContent.replace(fullImport, '');
    } else if (usedSymbols.length < symbols.length) {
      const newImport = `import { ${usedSymbols.join(', ')} } from '${fromPath}';`;
      updatedContent = updatedContent.replace(fullImport, newImport);
    }
  }

  if (updatedContent !== content) {
    fs.writeFileSync(fullPath, updatedContent, 'utf8');
    console.log(`Cleaned unused imports in ${relPath}`);
  }
}
console.log('All unused imports cleaned.');
