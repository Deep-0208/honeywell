import React from 'react';
import JsonLd from './JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import {
  buildWebSiteJsonLd,
  buildWebPageJsonLd,
  buildProductJsonLd,
  buildBreadcrumbJsonLd,
  buildFAQJsonLd,
  buildArticleJsonLd,
} from '@/lib/seo';
import type { Product, FAQ } from '@/types';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  product?: Product;
  faqs?: FAQ[];
  breadcrumbs?: { name: string; item: string }[];
  article?: {
    title: string;
    description: string;
    image?: string;
    publishedAt?: string;
    updatedAt?: string;
    url: string;
  };
}

/**
 * SEO Component
 * Generates a comprehensive @graph JSON-LD payload for any page type.
 */
export function SEO({
  title,
  description,
  url,
  product,
  faqs,
  breadcrumbs,
  article,
}: SEOProps) {
  const siteUrl = COMPANY_INFO.websiteUrl;

  const graph: Array<Record<string, unknown>> = [
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: COMPANY_INFO.name,
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        '@id': `${siteUrl}/#logo`,
        url: `${siteUrl}/images/shared/logos/honeywell-hydraulics-logo-full.png`,
        contentUrl: `${siteUrl}/images/shared/logos/honeywell-hydraulics-logo-full.png`,
        caption: COMPANY_INFO.name,
      },
      image: { '@id': `${siteUrl}/#logo` },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: COMPANY_INFO.phone,
        contactType: 'customer service',
        areaServed: 'IN',
        availableLanguage: ['en', 'hi', 'gu'],
      },
      sameAs: Object.values(COMPANY_INFO.socialUrls),
      foundingDate: COMPANY_INFO.foundingYear,
    },
    {
      '@type': 'ManufacturingBusiness',
      '@id': `${siteUrl}/#localbusiness`,
      name: COMPANY_INFO.name,
      url: siteUrl,
      telephone: COMPANY_INFO.phone,
      email: COMPANY_INFO.email,
      priceRange: '₹₹',
      image: `${siteUrl}/images/home/hydraulic-cylinder-manufacturing-ahmedabad.webp`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address.streetAddress,
        addressLocality: COMPANY_INFO.address.addressLocality,
        addressRegion: COMPANY_INFO.address.addressRegion,
        postalCode: COMPANY_INFO.address.postalCode,
        addressCountry: COMPANY_INFO.address.addressCountry,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: COMPANY_INFO.geo.latitude,
        longitude: COMPANY_INFO.geo.longitude,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: COMPANY_INFO.openingHours.opens,
        closes: COMPANY_INFO.openingHours.closes,
      },
      parentOrganization: {
        '@id': `${siteUrl}/#organization`,
      },
    },
    buildWebSiteJsonLd() as Record<string, unknown>,
    buildWebPageJsonLd(title, description, url) as Record<string, unknown>,
  ];

  if (product) {
    const productSchema: Record<string, unknown> = {
      ...buildProductJsonLd(product),
      '@id': `${siteUrl}${url}#product`,
    };
    graph.push(productSchema);
  }

  if (faqs && faqs.length > 0) {
    const faqSchemaData = buildFAQJsonLd(faqs);
    if (faqSchemaData) {
      const faqSchema: Record<string, unknown> = {
        ...faqSchemaData,
        '@id': `${siteUrl}${url}#faq`,
      };
      graph.push(faqSchema);
    }
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    const breadcrumbSchema: Record<string, unknown> = {
      ...buildBreadcrumbJsonLd(breadcrumbs),
      '@id': `${siteUrl}${url}#breadcrumb`,
    };
    graph.push(breadcrumbSchema);
  }

  if (article) {
    const articleSchema: Record<string, unknown> = {
      ...buildArticleJsonLd(article),
      '@id': `${siteUrl}${url}#article`,
    };
    graph.push(articleSchema);
  }

  return <JsonLd data={{ '@graph': graph }} />;
}


