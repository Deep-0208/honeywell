import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * robots.txt configuration — Honeywell Hydraulics (Production Ready)
 *
 * Search engines (Googlebot, Bingbot) and AI search engines (GPTBot,
 * ClaudeBot, PerplexityBot, Google-Extended) are FULLY ALLOWED.
 * Commercial backlink scrapers remain blocked.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── General search engines & users ──
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/thank-you/'],
      },
      // ── Primary Search Engine Crawlers ──
      {
        userAgent: ['Googlebot', 'Googlebot-Image', 'Bingbot'],
        allow: '/',
      },
      // ── AI Answer & Search Engine Crawlers ──
      {
        userAgent: ['GPTBot', 'OAI-SearchBot', 'Google-Extended', 'ClaudeBot', 'PerplexityBot', 'Applebot-Extended'],
        allow: '/',
      },
      // ── Commercial Scraper Bots — Blocked ──
      {
        userAgent: [
          'AhrefsBot',
          'SemrushBot',
          'MJ12bot',
          'DotBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: [
      `${COMPANY_INFO.websiteUrl}/sitemap.xml`,
    ],
  };
}
