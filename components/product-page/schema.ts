import { COMPANY_INFO } from '@/lib/constants';
import type { ProductPageData } from './types';

/**
 * Builds the JSON-LD @graph schema from product page data.
 * Generates Product, WebPage, BreadcrumbList, and FAQPage schemas.
 */
export function buildProductSchema(data: ProductPageData) {
  const siteUrl = COMPANY_INFO.websiteUrl;
  const { seo, schema, hero, faqs } = data;

  const graph: Record<string, unknown>[] = [
    /* 1. Product */
    {
      '@type': 'Product',
      '@id': `${siteUrl}${seo.url}#product`,
      name: schema.productName,
      description: seo.description,
      image: [`${siteUrl}${seo.image}`],
      brand: {
        '@type': 'Brand',
        name: COMPANY_INFO.name,
      },
      manufacturer: {
        '@id': `${siteUrl}/#organization`,
      },
      category: schema.category,
      additionalProperty: schema.properties.map((p) => ({
        '@type': 'PropertyValue',
        name: p.name,
        value: p.value,
      })),
    },
    /* 2. WebPage */
    {
      '@type': 'WebPage',
      '@id': `${siteUrl}${seo.url}#webpage`,
      url: `${siteUrl}${seo.url}`,
      name: seo.title,
      description: seo.description,
      isPartOf: { '@id': `${siteUrl}/#website` },
      about: { '@id': `${siteUrl}${seo.url}#product` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${siteUrl}${seo.image}`,
      },
      breadcrumb: { '@id': `${siteUrl}${seo.url}#breadcrumb` },
      inLanguage: 'en-IN',
    },
    /* 3. BreadcrumbList */
    {
      '@type': 'BreadcrumbList',
      '@id': `${siteUrl}${seo.url}#breadcrumb`,
      itemListElement: [
        ...hero.breadcrumbs.map((bc, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: bc.label,
          item: bc.href.startsWith('http') ? bc.href : `${siteUrl}${bc.href}`,
        })),
        {
          '@type': 'ListItem',
          position: hero.breadcrumbs.length + 1,
          name: hero.currentPage,
          item: `${siteUrl}${seo.url}`,
        },
      ],
    },
  ];

  /* 4. FAQPage (only if faqs present) */
  if (faqs && faqs.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${siteUrl}${seo.url}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
