import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

/**
 * robots.txt configuration
 *
 * ⚠️ MAINTENANCE MODE — ALL bots are currently BLOCKED.
 * The site is under active development. When the site is declared
 * "production-ready" by the owner, UNBLOCK the following:
 *   - Googlebot → allow: '/'
 *   - Googlebot-Image → allow: '/'
 *   - Bingbot → allow: '/'
 *   - GPTBot → allow: '/'
 *   - Google-Extended → allow: '/'
 *   - ClaudeBot → allow: '/'
 *   - PerplexityBot → allow: '/'
 *   - Remove the wildcard disallow
 *
 * Keep blocked permanently: AhrefsBot, SemrushBot, MJ12bot, DotBot
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── MAINTENANCE MODE: Block all crawlers ──
      {
        userAgent: '*',
        disallow: '/',
      },
      // ── Search engine crawlers — BLOCKED until production ──
      {
        userAgent: 'Googlebot',
        disallow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        disallow: '/',
      },
      {
        userAgent: 'Bingbot',
        disallow: '/',
      },
      // ── AI crawlers — BLOCKED until production ──
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        disallow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        disallow: '/',
      },
      // ── Scraper bots — ALWAYS blocked ──
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
