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
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${COMPANY_INFO.websiteUrl}/sitemap.xml`,
  };
}
