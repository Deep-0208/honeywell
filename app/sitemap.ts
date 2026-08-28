import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * Dynamic Sitemap Generation
 *
 * Auto-generates sitemap.xml for all canonical, indexable public routes.
 * Uses accurate, stable modification dates derived from page & content update history.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = COMPANY_INFO.websiteUrl;

  // ── Page Registry with accurate modification dates ──
  const pages: {
    path: string;
    lastModified: string;
  }[] = [
    // ── Homepage ──
    { path: '/', lastModified: '2026-08-26' },

    // ── Company Pages ──
    { path: '/about-us/', lastModified: '2026-08-26' },
    { path: '/contact-us/', lastModified: '2026-08-26' },
    { path: '/manufacturing-facility/', lastModified: '2026-08-26' },
    { path: '/gallery/', lastModified: '2026-08-26' },

    // ── Conversion Pages ──
    { path: '/request-quote/', lastModified: '2026-08-26' },

    // ── Product Hubs (Pillar Pages) ──
    { path: '/products/', lastModified: '2026-08-26' },
    { path: '/products/hydraulic-cylinders/', lastModified: '2026-08-26' },
    { path: '/products/hydraulic-power-packs/', lastModified: '2026-08-17' },
    { path: '/products/manifold-blocks/', lastModified: '2026-08-23' },

    // ── Hydraulic Cylinder Product Pages ──
    { path: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/goods-lift-hydraulic-cylinders/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/car-parking-hydraulic-cylinders/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/flange-mounted-hydraulic-cylinder/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-cylinders/square-body-hydraulic-cylinder/', lastModified: '2026-08-18' },

    // ── Hydraulic Power Pack Product Pages ──
    { path: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs/', lastModified: '2026-08-23' },
    { path: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/', lastModified: '2026-08-26' },
    { path: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/', lastModified: '2026-08-23' },
    { path: '/products/hydraulic-power-packs/multistation-hydraulic-power-packs/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs/', lastModified: '2026-08-23' },
    { path: '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs/', lastModified: '2026-08-18' },
    { path: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/', lastModified: '2026-08-18' },

    // ── Hydraulic Manifold Blocks Product Pages ──
    { path: '/products/manifold-blocks/06-size-manifold-blocks/', lastModified: '2026-08-18' },
    { path: '/products/manifold-blocks/10-size-manifold-blocks/', lastModified: '2026-08-18' },
    { path: '/products/manifold-blocks/cetop-manifold-blocks/', lastModified: '2026-08-18' },
    { path: '/products/manifold-blocks/custom-manifold-blocks/', lastModified: '2026-08-18' },
    { path: '/products/manifold-blocks/multi-station-manifold-blocks/', lastModified: '2026-08-18' },

    // ── Location Hub ──
    { path: '/locations/', lastModified: '2026-08-26' },

    // ── Gujarat State Hub ──
    { path: '/locations/gujarat/', lastModified: '2026-08-18' },

    // ── Gujarat Cities ──
    { path: '/locations/ahmedabad/', lastModified: '2026-08-15' },
    { path: '/locations/surat/', lastModified: '2026-08-15' },
    { path: '/locations/vadodara/', lastModified: '2026-08-15' },
    { path: '/locations/rajkot/', lastModified: '2026-08-15' },
    { path: '/locations/bhavnagar/', lastModified: '2026-08-15' },
    { path: '/locations/jamnagar/', lastModified: '2026-08-15' },
    { path: '/locations/kutch/', lastModified: '2026-08-15' },
    { path: '/locations/gandhinagar/', lastModified: '2026-08-15' },
    { path: '/locations/morbi/', lastModified: '2026-08-15' },
    { path: '/locations/vapi/', lastModified: '2026-08-15' },
    { path: '/locations/ankleshwar/', lastModified: '2026-08-15' },
    { path: '/locations/halol/', lastModified: '2026-08-15' },

    // ── Gujarat Industrial Spokes ──
    { path: '/locations/gujarat/injection-moulding-cylinders/', lastModified: '2026-08-15' },
    { path: '/locations/gujarat/ship-breaking-cylinders/', lastModified: '2026-08-15' },
    { path: '/locations/gujarat/textile-machinery-cylinders/', lastModified: '2026-08-15' },

    // ── National State Hubs ──
    { path: '/locations/maharashtra/', lastModified: '2026-08-15' },
    { path: '/locations/madhya-pradesh/', lastModified: '2026-08-15' },
    { path: '/locations/rajasthan/', lastModified: '2026-08-15' },
    { path: '/locations/karnataka/', lastModified: '2026-08-15' },
    { path: '/locations/tamil-nadu/', lastModified: '2026-08-15' },
    { path: '/locations/west-bengal/', lastModified: '2026-08-15' },

    // ── Legal Pages ──
    { path: '/privacy-policy/', lastModified: '2026-08-26' },
    { path: '/terms/', lastModified: '2026-08-26' },
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: page.lastModified,
  }));
}

