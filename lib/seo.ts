/**
 * JSON-LD Schema Generators and Metadata Builders
 */

import { Metadata } from 'next';
import { COMPANY_INFO, SEO_DEFAULTS } from './constants';
import type { FAQ, Product } from '@/types';

/**
 * Builds Next.js Metadata object for any page
 */
export function buildMetadata({
  title = SEO_DEFAULTS.title,
  description = SEO_DEFAULTS.description,
  keywords = [],
  canonical,
  image = SEO_DEFAULTS.ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: `${COMPANY_INFO.websiteUrl}${canonical}`,
    },
    openGraph: {
      title,
      description,
      url: `${COMPANY_INFO.websiteUrl}${canonical}`,
      siteName: COMPANY_INFO.name,
      images: [
        {
          url: `${COMPANY_INFO.websiteUrl}${image}`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${COMPANY_INFO.websiteUrl}${image}`],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    url: COMPANY_INFO.websiteUrl,
    logo: `${COMPANY_INFO.websiteUrl}/long-size-logohydralics-logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: COMPANY_INFO.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi', 'gu'],
    },
    sameAs: Object.values(COMPANY_INFO.socialUrls),
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ManufacturingBusiness',
    name: COMPANY_INFO.name,
    image: `${COMPANY_INFO.websiteUrl}/images/factory/honeywell-hydraulics-factory.jpg`,
    '@id': COMPANY_INFO.websiteUrl,
    url: COMPANY_INFO.websiteUrl,
    telephone: COMPANY_INFO.phone,
    email: COMPANY_INFO.email,
    priceRange: '₹₹',
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
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: COMPANY_INFO.openingHours.opens,
      closes: COMPANY_INFO.openingHours.closes,
    },
  };
}

export function buildProductJsonLd(product: Product) {
  return {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    name: product.title,
    image: product.image ? [`${COMPANY_INFO.websiteUrl}${product.image}`] : undefined,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: COMPANY_INFO.name,
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: COMPANY_INFO.name,
      },
    },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${COMPANY_INFO.websiteUrl}${item.item}`,
    })),
  };
}

export function buildFAQJsonLd(faqs?: FAQ[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildWebPageJsonLd(title: string, description: string, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${COMPANY_INFO.websiteUrl}${url}`,
    publisher: buildOrganizationJsonLd(),
  };
}

export function buildArticleJsonLd(article: {
  title: string;
  description: string;
  image?: string;
  publishedAt?: string;
  updatedAt?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? [`${COMPANY_INFO.websiteUrl}${article.image}`] : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Organization',
      name: COMPANY_INFO.name,
      url: COMPANY_INFO.websiteUrl,
    },
    publisher: buildOrganizationJsonLd(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${COMPANY_INFO.websiteUrl}${article.url}`,
    },
  };
}

/**
 * WebSite schema with SearchAction for sitelinks search box
 */
export function buildWebSiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${COMPANY_INFO.websiteUrl}/#website`,
    url: COMPANY_INFO.websiteUrl,
    name: COMPANY_INFO.name,
    description: SEO_DEFAULTS.description,
    publisher: {
      '@id': `${COMPANY_INFO.websiteUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${COMPANY_INFO.websiteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'en-IN',
  };
}

/**
 * Homepage @graph schema — combines all structured data into a single
 * JSON-LD block per Google's recommended pattern.
 *
 * Schemas included:
 * 1. Organization
 * 2. ManufacturingBusiness
 * 3. WebSite (with SearchAction)
 * 4. WebPage
 * 5. FAQPage
 * 6. BreadcrumbList
 *
 * @see SEO_ARCHITECTURE.md § Schema Architecture
 */
export function buildHomepageGraphSchema({
  title,
  description,
  faqs,
}: {
  title: string;
  description: string;
  faqs: FAQ[];
}) {
  const siteUrl = COMPANY_INFO.websiteUrl;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      /* ── 1. Organization ── */
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: COMPANY_INFO.name,
        url: siteUrl,
        logo: {
          '@type': 'ImageObject',
          '@id': `${siteUrl}/#logo`,
          url: `${siteUrl}/long-size-logohydralics-logo.png`,
          contentUrl: `${siteUrl}/long-size-logohydralics-logo.png`,
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

      /* ── 2. ManufacturingBusiness ── */
      {
        '@type': 'ManufacturingBusiness',
        '@id': `${siteUrl}/#localbusiness`,
        name: COMPANY_INFO.name,
        url: siteUrl,
        telephone: COMPANY_INFO.phone,
        email: COMPANY_INFO.email,
        priceRange: '₹₹',
        image: `${siteUrl}/images/hero/hydraulic-cylinder-manufacturing-ahmedabad.png`,
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

      /* ── 3. WebSite (with SearchAction) ── */
      buildWebSiteJsonLd(),

      /* ── 4. WebPage ── */
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: title,
        description,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}/images/hero/hydraulic-cylinder-manufacturing-ahmedabad.png`,
        },
        inLanguage: 'en-IN',
      },

      /* ── 5. FAQPage ── */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },

      /* ── 6. BreadcrumbList ── */
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
        ],
      },
    ],
  };
}
