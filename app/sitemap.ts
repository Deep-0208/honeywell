import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * Dynamic Sitemap Generation
 *
 * Auto-generates sitemap.xml from the page registry below.
 * When you add a new page to app/(site)/, add its entry here too.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = COMPANY_INFO.websiteUrl;
  const now = new Date().toISOString();

  // ── Page Registry ──
  const pages: {
    path: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }[] = [
    // ── Homepage ──
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },

    // ── Company Pages ──
    { path: '/about-us/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact-us/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/manufacturing-facility/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/gallery/', changeFrequency: 'weekly', priority: 0.8 },
    
    // ── Conversion Pages ──
    { path: '/request-quote/', changeFrequency: 'monthly', priority: 0.9 },

    // ── Product Hubs (Pillar Pages) ──
    { path: '/products/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/products/hydraulic-cylinders/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/products/hydraulic-power-packs/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/products/manifold-blocks/', changeFrequency: 'weekly', priority: 0.9 },

    // ── Hydraulic Cylinder Product Pages ──
    { path: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/', changeFrequency: 'monthly', priority: 0.8 },

    // ── Hydraulic Power Pack Product Pages ──
    { path: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },

    // ── Hydraulic Manifold Blocks Product Pages ──
    { path: '/products/manifold-blocks/06-size-manifold-blocks/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/manifold-blocks/10-size-manifold-blocks/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/manifold-blocks/cetop-manifold-blocks/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/manifold-blocks/custom-manifold-blocks/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/manifold-blocks/multi-station-manifold-blocks/', changeFrequency: 'monthly', priority: 0.8 },

    // ── Location Hub ──
    { path: '/locations/', changeFrequency: 'monthly', priority: 0.9 },

    // ── Gujarat State Hub ──
    { path: '/locations/gujarat/', changeFrequency: 'monthly', priority: 0.9 },

    // ── Gujarat Cities ──
    { path: '/locations/ahmedabad/', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/locations/surat/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/locations/vadodara/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/locations/rajkot/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/locations/bhavnagar/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/jamnagar/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/kutch/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/gandhinagar/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/morbi/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/vapi/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/ankleshwar/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/halol/', changeFrequency: 'monthly', priority: 0.7 },

    // ── Gujarat Industrial Spokes ──
    { path: '/locations/gujarat/injection-moulding-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/locations/gujarat/ship-breaking-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/locations/gujarat/textile-machinery-cylinders/', changeFrequency: 'monthly', priority: 0.8 },

    // ── National State Hubs ──
    { path: '/locations/maharashtra/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/locations/madhya-pradesh/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/rajasthan/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/karnataka/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/tamil-nadu/', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/locations/west-bengal/', changeFrequency: 'monthly', priority: 0.7 },
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
