import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * robots.txt configuration — Honeywell Hydraulics (Production Ready)
 *
 * Clean production crawler policy:
 * - General crawlers & AI discovery engines: Allowed with private route exclusions
 * - Commercial scrapers (AhrefsBot, SemrushBot, MJ12bot, DotBot): Disallowed
 * - Private routes disallowed: /api/, /admin/, /thank-you/
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/thank-you/'],
      },
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],
    sitemap: `${COMPANY_INFO.websiteUrl}/sitemap.xml`,
  };
}

