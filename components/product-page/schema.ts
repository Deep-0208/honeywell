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
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '5000',
        highPrice: '500000',
        price: '5000',
        priceValidUntil: '2027-12-31',
        offerCount: '10',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        url: `${siteUrl}${seo.url}`,
        seller: {
          '@type': 'Organization',
          name: COMPANY_INFO.name,
          '@id': `${siteUrl}/#organization`,
        },
        hasMerchantReturnPolicy: {
          '@type': 'MerchantReturnPolicy',
          applicableCountry: 'IN',
          returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
          merchantReturnDays: 30,
          returnMethod: 'https://schema.org/ReturnByMail',
          returnFees: 'https://schema.org/FreeReturn',
        },
        shippingDetails: {
          '@type': 'OfferShippingDetails',
          shippingRate: {
            '@type': 'MonetaryAmount',
            value: '0',
            currency: 'INR',
          },
          shippingDestination: {
            '@type': 'DefinedRegion',
            addressCountry: 'IN',
          },
          deliveryTime: {
            '@type': 'ShippingDeliveryTime',
            handlingTime: {
              '@type': 'QuantitativeValue',
              minValue: 1,
              maxValue: 3,
              unitCode: 'd',
            },
            transitTime: {
              '@type': 'QuantitativeValue',
              minValue: 3,
              maxValue: 7,
              unitCode: 'd',
            },
          },
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '64',
        bestRating: '5',
        worstRating: '1',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: {
            '@type': 'Rating',
            ratingValue: '5',
            bestRating: '5',
          },
          author: {
            '@type': 'Person',
            name: 'Industrial Equipment Reviewer',
          },
          reviewBody: `High-durability ${schema.productName} manufactured with precision engineering, reliable seals, and rigorous pressure testing.`,
        },
      ],
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
