import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * Dynamic Sitemap Generation
 *
 * Auto-generates sitemap.xml from the page registry below.
 * When you add a new page to app/(site)/, add its entry here too.
 *
 * Priority tiers:
 *   1.0 — Homepage
 *   0.9 — Product pillars, Request Quote, Key locations
 *   0.8 — Individual product pages, Company pages, Industry pages
 *   0.7 — Blog articles, Other location pages
 *   0.6 — Resources, Case studies
 *   0.2 — Legal pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = COMPANY_INFO.websiteUrl;
  const now = new Date().toISOString();

  // ── Page Registry ──
  // Add new pages here as they are built
  const pages: {
    path: string;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
  }[] = [
    // ── Homepage ──
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },

    // ── Product Hubs (Pillar Pages) ──
    { path: '/products/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/products/hydraulic-cylinders/', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/products/hydraulic-power-packs/', changeFrequency: 'weekly', priority: 0.9 },

    // ── Hydraulic Cylinder Product Pages ──
    { path: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/welded-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/', changeFrequency: 'monthly', priority: 0.8 },

    // ── Hydraulic Power Pack Product Pages ──
    { path: '/products/hydraulic-power-packs/3-phase-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/dc-mini-power-packs/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/', changeFrequency: 'monthly', priority: 0.8 },

    // ── Company Pages ──
    { path: '/about-us/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/contact-us/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/quality/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/infrastructure/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/manufacturing-facility/', changeFrequency: 'monthly', priority: 0.8 },

    // ── Conversion Pages ──
    { path: '/request-quote/', changeFrequency: 'monthly', priority: 0.9 },

    // ── Location Pages ──
    { path: '/locations/gujarat-facility/', changeFrequency: 'monthly', priority: 0.9 },

    // ── Future pages — uncomment as they are built ──
    // { path: '/locations/ahmedabad/', changeFrequency: 'monthly', priority: 0.9 },
    // { path: '/locations/india/', changeFrequency: 'monthly', priority: 0.9 },
    // { path: '/locations/gujarat/', changeFrequency: 'monthly', priority: 0.9 },
    // { path: '/locations/surat/', changeFrequency: 'monthly', priority: 0.7 },
    // { path: '/locations/vadodara/', changeFrequency: 'monthly', priority: 0.7 },
    // { path: '/locations/rajkot/', changeFrequency: 'monthly', priority: 0.7 },
    // { path: '/industries/injection-moulding/', changeFrequency: 'monthly', priority: 0.8 },
    // { path: '/industries/press-metal-forming/', changeFrequency: 'monthly', priority: 0.8 },
    // { path: '/industries/fly-ash-brick/', changeFrequency: 'monthly', priority: 0.8 },
    // { path: '/industries/automotive/', changeFrequency: 'monthly', priority: 0.8 },
    // { path: '/blog/', changeFrequency: 'weekly', priority: 0.8 },
  ];

  return pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
