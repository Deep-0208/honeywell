import fs from 'fs';
import path from 'path';

const basePath = 'c:/Users/DELL/Desktop/Honeywell Seo/website';

// We have 59 pages:
const pageDefinitions = [
  // Core / Company
  { path: '/', file: 'app/(site)/page.tsx', type: 'Core' },
  { path: '/about-us/', file: 'app/(site)/about-us/page.tsx', type: 'Company' },
  { path: '/manufacturing-facility/', file: 'app/(site)/manufacturing-facility/page.tsx', type: 'Company' },
  { path: '/contact-us/', file: 'app/(site)/contact-us/page.tsx', type: 'Company' },
  { path: '/request-quote/', file: 'app/(site)/request-quote/page.tsx', type: 'Conversion' },

  // Product Hubs
  { path: '/products/', file: 'app/(site)/products/page.tsx', type: 'Product Hub' },
  { path: '/products/hydraulic-cylinders/', file: 'app/(site)/products/hydraulic-cylinders/page.tsx', type: 'Product Hub' },
  { path: '/products/hydraulic-power-packs/', file: 'app/(site)/products/hydraulic-power-packs/page.tsx', type: 'Product Hub' },
  { path: '/products/manifold-blocks/', file: 'app/(site)/products/manifold-blocks/page.tsx', type: 'Product Hub' },

  // Cylinders
  { path: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/', file: 'data/hydraulic-cylinders/custom-hydraulic-cylinders.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/', file: 'data/hydraulic-cylinders/double-acting-hydraulic-cylinders.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/', file: 'data/hydraulic-cylinders/single-acting-hydraulic-cylinders.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/', file: 'data/hydraulic-cylinders/tie-rod-hydraulic-cylinders.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/', file: 'data/hydraulic-cylinders/welded-hydraulic-cylinders.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/', file: 'data/hydraulic-cylinders/telescopic-hydraulic-cylinders.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/', file: 'data/hydraulic-cylinders/goods-lift-hydraulic-cylinders.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/', file: 'data/hydraulic-cylinders/car-parking-hydraulic-cylinders.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/', file: 'data/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/', file: 'data/hydraulic-cylinders/flange-mounted-hydraulic-cylinder.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/', file: 'data/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/', file: 'data/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder.tsx', type: 'Product' },
  { path: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/', file: 'data/hydraulic-cylinders/square-body-hydraulic-cylinder.tsx', type: 'Product' },

  // Power Packs
  { path: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/', file: 'data/hydraulic-power-packs/single-phase-hydraulic-power-packs.tsx', type: 'Product' },
  { path: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/', file: 'data/hydraulic-power-packs/three-phase-hydraulic-power-packs.tsx', type: 'Product' },
  { path: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/', file: 'data/hydraulic-power-packs/customized-hydraulic-power-packs.tsx', type: 'Product' },
  { path: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/', file: 'data/hydraulic-power-packs/hydraulic-power-packs-for-press.tsx', type: 'Product' },
  { path: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/', file: 'data/hydraulic-power-packs/multistation-hydraulic-power-packs.tsx', type: 'Product' },
  { path: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/', file: 'data/hydraulic-power-packs/accumulator-hydraulic-power-packs.tsx', type: 'Product' },
  { path: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/', file: 'data/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs.tsx', type: 'Product' },
  { path: '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/', file: 'data/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs.tsx', type: 'Product' },
  { path: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/', file: 'data/hydraulic-power-packs/high-low-hydraulic-power-packs.tsx', type: 'Product' },

  // Manifold Blocks
  { path: '/products/manifold-blocks/06-size-manifold-blocks/', file: 'data/manifold-blocks/06-size-manifold-blocks.tsx', type: 'Product' },
  { path: '/products/manifold-blocks/10-size-manifold-blocks/', file: 'data/manifold-blocks/10-size-manifold-blocks.tsx', type: 'Product' },
  { path: '/products/manifold-blocks/cetop-manifold-blocks/', file: 'data/manifold-blocks/cetop-manifold-blocks.tsx', type: 'Product' },
  { path: '/products/manifold-blocks/custom-manifold-blocks/', file: 'data/manifold-blocks/custom-manifold-blocks.tsx', type: 'Product' },
  { path: '/products/manifold-blocks/multi-station-manifold-blocks/', file: 'data/manifold-blocks/multi-station-manifold-blocks.tsx', type: 'Product' },

  // Location Hub & State Pages
  { path: '/locations/', file: 'app/(site)/locations/page.tsx', type: 'Location Hub' },
  { path: '/locations/gujarat/', file: 'data/locations/gujarat.ts', type: 'Location State' },
  { path: '/locations/ahmedabad/', file: 'data/locations/ahmedabad.ts', type: 'Location City' },
  { path: '/locations/surat/', file: 'data/locations/surat.ts', type: 'Location City' },
  { path: '/locations/vadodara/', file: 'data/locations/vadodara.ts', type: 'Location City' },
  { path: '/locations/rajkot/', file: 'data/locations/rajkot.ts', type: 'Location City' },
  { path: '/locations/bhavnagar/', file: 'data/locations/bhavnagar.ts', type: 'Location City' },
  { path: '/locations/jamnagar/', file: 'data/locations/jamnagar.ts', type: 'Location City' },
  { path: '/locations/gandhinagar/', file: 'data/locations/gandhinagar.ts', type: 'Location City' },
  { path: '/locations/kutch/', file: 'data/locations/kutch.ts', type: 'Location City' },
  { path: '/locations/morbi/', file: 'data/locations/morbi.ts', type: 'Location City' },
  { path: '/locations/vapi/', file: 'data/locations/vapi.ts', type: 'Location City' },
  { path: '/locations/ankleshwar/', file: 'data/locations/ankleshwar.ts', type: 'Location City' },
  { path: '/locations/halol/', file: 'data/locations/halol.ts', type: 'Location City' },

  // Gujarat Clusters
  { path: '/locations/gujarat/injection-moulding-cylinders/', file: 'data/locations/injection-moulding-cylinders.ts', type: 'Location Spoke' },
  { path: '/locations/gujarat/ship-breaking-cylinders/', file: 'data/locations/ship-breaking-cylinders.ts', type: 'Location Spoke' },
  { path: '/locations/gujarat/textile-machinery-cylinders/', file: 'data/locations/textile-machinery-cylinders.ts', type: 'Location Spoke' },

  // National State Hubs
  { path: '/locations/maharashtra/', file: 'data/locations/maharashtra.ts', type: 'Location State' },
  { path: '/locations/madhya-pradesh/', file: 'data/locations/madhya-pradesh.ts', type: 'Location State' },
  { path: '/locations/rajasthan/', file: 'data/locations/rajasthan.ts', type: 'Location State' },
  { path: '/locations/karnataka/', file: 'data/locations/karnataka.ts', type: 'Location State' },
  { path: '/locations/tamil-nadu/', file: 'data/locations/tamil-nadu.ts', type: 'Location State' },
  { path: '/locations/west-bengal/', file: 'data/locations/west-bengal.ts', type: 'Location State' },
];

function extractMeta(content) {
  let title = '';
  let metaDesc = '';
  let h1 = '';
  let canonical = '';

  const titleMatch = content.match(/title:\s*['"`]([^'"`]+)['"`]/i);
  if (titleMatch) title = titleMatch[1];

  const descMatch = content.match(/description:\s*['"`]([^'"`]+)['"`]/i);
  if (descMatch) metaDesc = descMatch[1];

  const h1Match = content.match(/h1:\s*['"`]([^'"`]+)['"`]/i) || content.match(/hero:\s*\{[\s\S]*?title:\s*['"`]([^'"`]+)['"`]/i);
  if (h1Match) h1 = h1Match[1];

  const canMatch = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/i);
  if (canMatch) canonical = canMatch[1];

  return { title, metaDesc, h1: h1 || title, canonical };
}

const auditList = [];
for (const p of pageDefinitions) {
  const fullPath = path.join(basePath, p.file);
  if (!fs.existsSync(fullPath)) {
    auditList.push({ path: p.path, error: `File not found: ${p.file}` });
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const meta = extractMeta(content);
  auditList.push({
    path: p.path,
    type: p.type,
    file: p.file,
    ...meta
  });
}

fs.writeFileSync(path.join(basePath, 'scripts/fast_audit.json'), JSON.stringify(auditList, null, 2));
console.log(`Successfully audited ${auditList.length} pages.`);
