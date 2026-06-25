import { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { COMPANY_INFO } from '@/lib/constants';

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers();
  const host = headersList.get('host') || '';

  // Block indexing on any vercel.app domain (staging or production deployment before cutover)
  if (host.includes('vercel.app')) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search', '/search?', '/admin/', '/api/', '/thank-you/', '/*.pdf$'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/*.webp$', '/*.jpg$', '/*.png$'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: '/admin/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot', 'DotBot'],
        disallow: '/',
      },
    ],
    sitemap: [
      `${COMPANY_INFO.websiteUrl}/sitemap.xml`,
      `${COMPANY_INFO.websiteUrl}/sitemap-images.xml`,
    ],
    host: 'https://www.honeywellhydraulics.com',
  };
}
