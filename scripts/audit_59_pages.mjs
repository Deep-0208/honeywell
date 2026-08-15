import http from 'http';

const pages = [
  // ── Core / Company (5)
  '/',
  '/about-us/',
  '/manufacturing-facility/',
  '/contact-us/',
  '/request-quote/',

  // ── Product Hubs (4)
  '/products/',
  '/products/hydraulic-cylinders/',
  '/products/hydraulic-power-packs/',
  '/products/manifold-blocks/',

  // ── Hydraulic Cylinders (13)
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

  // ── Hydraulic Power Packs (9)
  '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/customized-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/',
  '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/',
  '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/',

  // ── Manifold Blocks (5)
  '/products/manifold-blocks/06-size-manifold-blocks/',
  '/products/manifold-blocks/10-size-manifold-blocks/',
  '/products/manifold-blocks/cetop-manifold-blocks/',
  '/products/manifold-blocks/custom-manifold-blocks/',
  '/products/manifold-blocks/multi-station-manifold-blocks/',

  // ── Location Pages (23)
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

function fetchPage(urlPath) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:3000${urlPath}`, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        resolve({ statusCode: res.statusCode, html: data });
      });
    });
    req.on('error', (err) => {
      resolve({ statusCode: 500, error: err.message, html: '' });
    });
  });
}

function extractTag(html, regex) {
  const match = html.match(regex);
  return match ? match[1].trim() : '';
}

function extractAll(html, regex) {
  const matches = [];
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push(match[1].trim());
  }
  return matches;
}

async function runAudit() {
  console.log(`Auditing ${pages.length} pages...`);
  const results = [];

  for (const pagePath of pages) {
    const { statusCode, html, error } = await fetchPage(pagePath);
    if (error || statusCode !== 200) {
      results.push({
        path: pagePath,
        statusCode,
        error: error || 'Non-200 status',
      });
      continue;
    }

    const title = extractTag(html, /<title[^>]*>([^<]+)<\/title>/i);
    const metaDesc = extractTag(html, /<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i) ||
                     extractTag(html, /<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["'][^>]*>/i);
    const canonical = extractTag(html, /<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
    const robots = extractTag(html, /<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const ogTitle = extractTag(html, /<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const ogUrl = extractTag(html, /<meta[^>]*property=["']og:url["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const ogImage = extractTag(html, /<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["'][^>]*>/i);
    const h1s = extractAll(html, /<h1[^>]*>([\s\S]*?)<\/h1>/gi).map(s => s.replace(/<[^>]+>/g, '').trim());

    // Schemas
    const schemaMatches = extractAll(html, /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
    const schemas = [];
    for (const rawSchema of schemaMatches) {
      try {
        const parsed = JSON.parse(rawSchema);
        if (parsed['@graph']) {
          schemas.push(...parsed['@graph'].map(g => g['@type']));
        } else if (parsed['@type']) {
          schemas.push(parsed['@type']);
        }
      } catch (e) {
        schemas.push('Invalid JSON-LD');
      }
    }

    // Images without alt
    const imgTags = extractAll(html, /(<img[^>]+>)/gi);
    const missingAltCount = imgTags.filter(tag => !tag.includes('alt=') || tag.includes('alt=""')).length;

    // Internal links count
    const links = extractAll(html, /href=["']([^"']+)["']/gi);
    const internalLinks = links.filter(l => l.startsWith('/') && !l.startsWith('/_next') && !l.startsWith('/api'));

    results.push({
      path: pagePath,
      statusCode,
      title,
      metaDesc,
      canonical,
      robots: robots || 'index, follow (default)',
      ogTitle,
      ogUrl,
      ogImage,
      h1Count: h1s.length,
      h1: h1s[0] || 'MISSING',
      h1s,
      schemas: [...new Set(schemas)],
      missingAltCount,
      internalLinksCount: internalLinks.length
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

runAudit();
