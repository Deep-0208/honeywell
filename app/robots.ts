import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/search',
          '/admin/',
          '/api/',
          '/thank-you/',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
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
      `${COMPANY_INFO.websiteUrl}/sitemap-images.xml`,
    ],
  };
}
