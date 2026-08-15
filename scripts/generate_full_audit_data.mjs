import fs from 'fs';
import path from 'path';

const basePath = 'c:/Users/DELL/Desktop/Honeywell Seo/website';

// 59 pages mapping
const pages = [
  // Core & Company (5)
  { url: '/', file: 'app/(site)/page.tsx', category: 'Core' },
  { url: '/about-us/', file: 'app/(site)/about-us/page.tsx', category: 'Company' },
  { url: '/manufacturing-facility/', file: 'app/(site)/manufacturing-facility/page.tsx', category: 'Company' },
  { url: '/contact-us/', file: 'app/(site)/contact-us/page.tsx', category: 'Company' },
  { url: '/request-quote/', file: 'app/(site)/request-quote/page.tsx', category: 'Conversion' },

  // Product Hubs (4)
  { url: '/products/', file: 'app/(site)/products/page.tsx', category: 'Product Hub' },
  { url: '/products/hydraulic-cylinders/', file: 'app/(site)/products/hydraulic-cylinders/page.tsx', category: 'Product Hub' },
  { url: '/products/hydraulic-power-packs/', file: 'app/(site)/products/hydraulic-power-packs/page.tsx', category: 'Product Hub' },
  { url: '/products/manifold-blocks/', file: 'app/(site)/products/manifold-blocks/page.tsx', category: 'Product Hub' },

  // Cylinders (13)
  { url: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/', dataFile: 'data/hydraulic-cylinders/custom-hydraulic-cylinders.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/', dataFile: 'data/hydraulic-cylinders/double-acting-hydraulic-cylinders.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/', dataFile: 'data/hydraulic-cylinders/single-acting-hydraulic-cylinders.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/', dataFile: 'data/hydraulic-cylinders/tie-rod-hydraulic-cylinders.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/', dataFile: 'data/hydraulic-cylinders/welded-hydraulic-cylinders.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/', dataFile: 'data/hydraulic-cylinders/telescopic-hydraulic-cylinders.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/', dataFile: 'data/hydraulic-cylinders/goods-lift-hydraulic-cylinders.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/', dataFile: 'data/hydraulic-cylinders/car-parking-hydraulic-cylinders.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/', dataFile: 'data/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/', dataFile: 'data/hydraulic-cylinders/flange-mounted-hydraulic-cylinder.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/', dataFile: 'data/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/', dataFile: 'data/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder.tsx', category: 'Product (Cylinder)' },
  { url: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/', dataFile: 'data/hydraulic-cylinders/square-body-hydraulic-cylinder.tsx', category: 'Product (Cylinder)' },

  // Power Packs (9)
  { url: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/', dataFile: 'data/hydraulic-power-packs/single-phase-hydraulic-power-packs.tsx', category: 'Product (Power Pack)' },
  { url: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/', dataFile: 'data/hydraulic-power-packs/three-phase-hydraulic-power-packs.tsx', category: 'Product (Power Pack)' },
  { url: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/', dataFile: 'data/hydraulic-power-packs/customized-hydraulic-power-packs.tsx', category: 'Product (Power Pack)' },
  { url: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/', dataFile: 'data/hydraulic-power-packs/hydraulic-power-packs-for-press.tsx', category: 'Product (Power Pack)' },
  { url: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/', dataFile: 'data/hydraulic-power-packs/multistation-hydraulic-power-packs.tsx', category: 'Product (Power Pack)' },
  { url: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/', dataFile: 'data/hydraulic-power-packs/accumulator-hydraulic-power-packs.tsx', category: 'Product (Power Pack)' },
  { url: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/', dataFile: 'data/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs.tsx', category: 'Product (Power Pack)' },
  { url: '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/', dataFile: 'data/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs.tsx', category: 'Product (Power Pack)' },
  { url: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/', dataFile: 'data/hydraulic-power-packs/high-low-hydraulic-power-packs.tsx', category: 'Product (Power Pack)' },

  // Manifold Blocks (5)
  { url: '/products/manifold-blocks/06-size-manifold-blocks/', dataFile: 'data/manifold-blocks/06-size-manifold-blocks.tsx', category: 'Product (Manifold Block)' },
  { url: '/products/manifold-blocks/10-size-manifold-blocks/', dataFile: 'data/manifold-blocks/10-size-manifold-blocks.tsx', category: 'Product (Manifold Block)' },
  { url: '/products/manifold-blocks/cetop-manifold-blocks/', dataFile: 'data/manifold-blocks/cetop-manifold-blocks.tsx', category: 'Product (Manifold Block)' },
  { url: '/products/manifold-blocks/custom-manifold-blocks/', dataFile: 'data/manifold-blocks/custom-manifold-blocks.tsx', category: 'Product (Manifold Block)' },
  { url: '/products/manifold-blocks/multi-station-manifold-blocks/', dataFile: 'data/manifold-blocks/multi-station-manifold-blocks.tsx', category: 'Product (Manifold Block)' },

  // Location Hub & States/Cities (23)
  { url: '/locations/', file: 'app/(site)/locations/page.tsx', category: 'Location Hub' },
  { url: '/locations/gujarat/', dataFile: 'data/locations/gujarat.ts', category: 'Location State Hub' },
  { url: '/locations/ahmedabad/', dataFile: 'data/locations/ahmedabad.ts', category: 'Location City' },
  { url: '/locations/surat/', dataFile: 'data/locations/surat.ts', category: 'Location City' },
  { url: '/locations/vadodara/', dataFile: 'data/locations/vadodara.ts', category: 'Location City' },
  { url: '/locations/rajkot/', dataFile: 'data/locations/rajkot.ts', category: 'Location City' },
  { url: '/locations/bhavnagar/', dataFile: 'data/locations/bhavnagar.ts', category: 'Location City' },
  { url: '/locations/jamnagar/', dataFile: 'data/locations/jamnagar.ts', category: 'Location City' },
  { url: '/locations/gandhinagar/', dataFile: 'data/locations/gandhinagar.ts', category: 'Location City' },
  { url: '/locations/kutch/', dataFile: 'data/locations/kutch.ts', category: 'Location City' },
  { url: '/locations/morbi/', dataFile: 'data/locations/morbi.ts', category: 'Location City' },
  { url: '/locations/vapi/', dataFile: 'data/locations/vapi.ts', category: 'Location City' },
  { url: '/locations/ankleshwar/', dataFile: 'data/locations/ankleshwar.ts', category: 'Location City' },
  { url: '/locations/halol/', dataFile: 'data/locations/halol.ts', category: 'Location City' },
  { url: '/locations/gujarat/injection-moulding-cylinders/', dataFile: 'data/locations/injection-moulding-cylinders.ts', category: 'Location Cluster' },
  { url: '/locations/gujarat/ship-breaking-cylinders/', dataFile: 'data/locations/ship-breaking-cylinders.ts', category: 'Location Cluster' },
  { url: '/locations/gujarat/textile-machinery-cylinders/', dataFile: 'data/locations/textile-machinery-cylinders.ts', category: 'Location Cluster' },
  { url: '/locations/maharashtra/', dataFile: 'data/locations/maharashtra.ts', category: 'Location National State' },
  { url: '/locations/madhya-pradesh/', dataFile: 'data/locations/madhya-pradesh.ts', category: 'Location National State' },
  { url: '/locations/rajasthan/', dataFile: 'data/locations/rajasthan.ts', category: 'Location National State' },
  { url: '/locations/karnataka/', dataFile: 'data/locations/karnataka.ts', category: 'Location National State' },
  { url: '/locations/tamil-nadu/', dataFile: 'data/locations/tamil-nadu.ts', category: 'Location National State' },
  { url: '/locations/west-bengal/', dataFile: 'data/locations/west-bengal.ts', category: 'Location National State' },
];

function extractDetails(page) {
  let title = '';
  let metaDesc = '';
  let h1 = '';
  let canonical = '';

  const filePath = page.file ? path.join(basePath, page.file) : path.join(basePath, page.dataFile);
  if (!fs.existsSync(filePath)) {
    return { ...page, error: `File not found: ${filePath}` };
  }
  const content = fs.readFileSync(filePath, 'utf8');

  // Regex extractions based on file type
  if (page.category.startsWith('Product (')) {
    const titleM = content.match(/title:\s*['"`]([^'"`]+)['"`]/i);
    const descM = content.match(/description:\s*['"`]([^'"`]+)['"`]/i);
    const h1M = content.match(/hero:\s*\{[\s\S]*?title:\s*['"`]([^'"`]+)['"`]/i) || content.match(/h1:\s*['"`]([^'"`]+)['"`]/i);
    const canM = content.match(/url:\s*['"`]([^'"`]+)['"`]/i);
    title = titleM ? titleM[1] : '';
    metaDesc = descM ? descM[1] : '';
    h1 = h1M ? h1M[1] : title;
    canonical = canM ? canM[1] : page.url;
  } else if (page.category.startsWith('Location') && page.dataFile) {
    const titleM = content.match(/seo:\s*\{[\s\S]*?title:\s*['"`]([^'"`]+)['"`]/i) || content.match(/title:\s*['"`]([^'"`]+)['"`]/i);
    const descM = content.match(/seo:\s*\{[\s\S]*?description:\s*['"`]([^'"`]+)['"`]/i) || content.match(/description:\s*['"`]([^'"`]+)['"`]/i);
    const h1M = content.match(/hero:\s*\{[\s\S]*?title:\s*['"`]([^'"`]+)['"`]/i) || content.match(/h1:\s*['"`]([^'"`]+)['"`]/i);
    const canM = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/i);
    title = titleM ? titleM[1] : '';
    metaDesc = descM ? descM[1] : '';
    h1 = h1M ? h1M[1] : title;
    canonical = canM ? canM[1] : page.url;
  } else {
    const titleM = content.match(/PAGE_TITLE\s*=\s*['"`]([^'"`]+)['"`]/i) || content.match(/title:\s*\{[\s\S]*?absolute:\s*['"`]([^'"`]+)['"`]/i) || content.match(/title:\s*['"`]([^'"`]+)['"`]/i);
    const descM = content.match(/PAGE_DESCRIPTION\s*=\s*['"`]([^'"`]+)['"`]/i) || content.match(/description:\s*['"`]([^'"`]+)['"`]/i);
    const h1M = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || content.match(/Heading[^>]*as=["']h1["'][^>]*>([\s\S]*?)<\/Heading>/i) || content.match(/h1:\s*['"`]([^'"`]+)['"`]/i);
    const canM = content.match(/canonical:\s*['"`]([^'"`]+)['"`]/i) || content.match(/PAGE_URL\s*=\s*['"`]([^'"`]+)['"`]/i);
    title = titleM ? titleM[1] : '';
    metaDesc = descM ? descM[1] : '';
    h1 = h1M ? h1M[1].replace(/<[^>]+>/g, '').trim() : title;
    canonical = canM ? canM[1] : page.url;
  }

  return {
    url: page.url,
    category: page.category,
    title: title.trim(),
    metaDesc: metaDesc.trim(),
    h1: h1.trim(),
    canonical: canonical.trim(),
    titleLength: title.length,
    descLength: metaDesc.length
  };
}

const auditOutput = pages.map(extractDetails);
fs.writeFileSync(path.join(basePath, 'scripts/full_audit_data.json'), JSON.stringify(auditOutput, null, 2), 'utf8');
console.log(`Audited ${auditOutput.length} pages. Wrote to scripts/full_audit_data.json`);
