import http from 'http';
import fs from 'fs';
import path from 'path';

const basePath = 'c:/Users/DELL/Desktop/Honeywell Seo/website';

const pages = [
  // Core & Company (5)
  '/',
  '/about-us/',
  '/manufacturing-facility/',
  '/contact-us/',
  '/request-quote/',

  // Product Hubs (4)
  '/products/',
  '/products/hydraulic-cylinders/',
  '/products/hydraulic-power-packs/',
  '/products/manifold-blocks/',

  // Cylinders (13)
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

  // Power Packs (9)
  '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/customized-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/',
  '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/',

  // Manifold Blocks (5)
  '/products/manifold-blocks/06-size-manifold-blocks/',
  '/products/manifold-blocks/10-size-manifold-blocks/',
  '/products/manifold-blocks/cetop-manifold-blocks/',
  '/products/manifold-blocks/custom-manifold-blocks/',
  '/products/manifold-blocks/multi-station-manifold-blocks/',

  // Location Hub & States/Cities (23)
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

function fetchUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${urlPath}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, html: data }));
    }).on('error', (err) => resolve({ status: 500, error: err.message, html: '' }));
  });
}

function cleanHtmlText(str) {
  return str.replace(/<[^>]+>/g, '').replace(/&apos;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
}

async function run() {
  console.log(`Auditing ${pages.length} pages independently...`);
  const report = [];

  for (let i = 0; i < pages.length; i++) {
    const p = pages[i];
    const { status, html } = await fetchUrl(p);
    
    // Extract metadata
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? cleanHtmlText(titleMatch[1]) : 'MISSING';

    const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                      html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
    const meta = descMatch ? cleanHtmlText(descMatch[1]) : 'MISSING';

    const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
    const h1 = h1Match ? cleanHtmlText(h1Match[1]) : 'MISSING';

    const canMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
    const canonical = canMatch ? canMatch[1] : 'MISSING';

    const robMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const robots = robMatch ? robMatch[1] : 'index, follow (default)';
    const isIndexable = !robots.includes('noindex');

    // Schemas
    const schemaMatches = [];
    const schemaRegex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let sm;
    while ((sm = schemaRegex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(sm[1]);
        if (parsed['@graph']) {
          schemaMatches.push(...parsed['@graph'].map(g => g['@type']));
        } else if (parsed['@type']) {
          schemaMatches.push(parsed['@type']);
        }
      } catch (e) {
        schemaMatches.push('ErrorParse');
      }
    }
    const schemaTypes = [...new Set(schemaMatches)].join(', ') || 'None';

    const expectedCanonical = `https://honeywellhydraulics.in${p}`;
    const canonicalPass = canonical === expectedCanonical;
    const allPass = status === 200 && isIndexable && canonicalPass && title !== 'MISSING' && meta !== 'MISSING' && h1 !== 'MISSING';

    report.push({
      index: i + 1,
      url: p,
      status,
      title,
      meta,
      h1,
      canonical,
      expectedCanonical,
      canonicalPass,
      indexable: isIndexable ? 'Yes' : 'NO (noindex)',
      schema: schemaTypes,
      result: allPass ? 'PASS' : 'FAIL'
    });
  }

  fs.writeFileSync(path.join(basePath, 'scripts/independent_audit_report.json'), JSON.stringify(report, null, 2), 'utf8');
  console.log(`Completed audit of ${report.length} pages. Passed: ${report.filter(r => r.result === 'PASS').length}/${report.length}`);
}

run();
