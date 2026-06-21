import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import { CTA } from '@/components/ui/CTA';

/* ─── Section Components ─── */
import { HydraulicCylinderHero } from '@/components/products/hydraulic-cylinders/HydraulicCylinderHero';
import { CylinderOverview } from '@/components/products/hydraulic-cylinders/CylinderOverview';
import { CylinderTypesGrid } from '@/components/products/hydraulic-cylinders/CylinderTypesGrid';

import { CylinderIndustries } from '@/components/products/hydraulic-cylinders/CylinderIndustries';
import { WhyChooseCylinders } from '@/components/products/hydraulic-cylinders/WhyChooseCylinders';
import { CylinderTechnicalSpecs } from '@/components/products/hydraulic-cylinders/CylinderTechnicalSpecs';
import { CylinderManufacturingProcess } from '@/components/products/hydraulic-cylinders/CylinderManufacturingProcess';
import { CylinderFAQs } from '@/components/products/hydraulic-cylinders/CylinderFAQs';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE = 'Custom Industrial Hydraulic Cylinders Manufacturer in India | Honeywell';
const PAGE_DESCRIPTION = 'Leading custom industrial hydraulic cylinders manufacturer in India. Engineering high-pressure cylinders from 40-300mm bore. Factory-direct pricing and 7-15 day delivery.';
const PAGE_URL = '/products/hydraulic-cylinders/';
const PAGE_IMAGE = '/images/products/hydraulic-cylinders/hydraulic-cylinders-ahmedabad.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'Hydraulic Cylinder Manufacturer in Ahmedabad',
      'Custom Hydraulic Cylinders',
      'Industrial Hydraulic Cylinders',
      'Hydraulic Cylinder Supplier Gujarat',
      'Double Acting Hydraulic Cylinders',
      'Tie Rod Hydraulic Cylinders'
    ],
    canonical: PAGE_URL,
    image: PAGE_IMAGE,
  }),
  title: {
    absolute: PAGE_TITLE,
  },
};

/* ═══════════════════════════════════════════════
   SCHEMA GENERATION
   ═══════════════════════════════════════════════ */

function buildPageSchema() {
  const siteUrl = COMPANY_INFO.websiteUrl;
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      /* 1. WebPage */
      {
        '@type': 'WebPage',
        '@id': `${siteUrl}${PAGE_URL}#webpage`,
        url: `${siteUrl}${PAGE_URL}`,
        name: PAGE_TITLE,
        description: PAGE_DESCRIPTION,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#organization` },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${siteUrl}${PAGE_IMAGE}`,
        },
        inLanguage: 'en-IN',
      },
      /* 2. BreadcrumbList */
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}${PAGE_URL}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Products',
            item: `${siteUrl}/products/`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Hydraulic Cylinders',
            item: `${siteUrl}${PAGE_URL}`,
          },
        ],
      },
      /* 3. FAQPage */
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}${PAGE_URL}#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Do you manufacture custom hydraulic cylinders?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, custom manufacturing is our primary focus. We design and build hydraulic cylinders to your exact specifications, analyzing cycle rates, environmental exposure, side-loading possibilities, and fluid compatibility to ensure optimal performance.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the maximum bore size and stroke length you can manufacture?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We manufacture custom hydraulic cylinders with bore sizes ranging from 40mm up to 300mm, and stroke lengths reaching up to 3000mm. We can also accommodate special requirements beyond standard dimensions.'
            }
          },
          {
            '@type': 'Question',
            name: 'What materials are used in your hydraulic cylinders?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our cylinders are constructed using premium materials: cold-drawn ST52/E355 grade seamless steel tubes for barrels, EN8/EN19/EN24 high-tensile alloy steel for rods (hard chrome plated to 20-25 microns), and imported polyurethane/PTFE seal kits equivalent to Parker or Hallite.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are your cylinders tested before delivery?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, every single industrial hydraulic cylinder we produce undergoes a rigorous quality assurance process, including 100% hydrostatic pressure testing at 1.5x its rated working pressure before dispatch to ensure zero out-of-the-box leaks.'
            }
          }
        ]
      },
      /* 4. CollectionPage — hasPart will be added in Phase 5 once product detail pages exist */
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}${PAGE_URL}#collection`,
        url: `${siteUrl}${PAGE_URL}`,
        name: 'Hydraulic Cylinders Collection',
        description: 'Comprehensive range of industrial hydraulic cylinders including double acting, single acting, tie rod, welded, telescopic, and custom cylinders.',
      }
    ]
  };
}

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function HydraulicCylindersHubPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* 01 — Hero */}
      <HydraulicCylinderHero />

      {/* 02 — Product Overview */}
      <CylinderOverview />

      {/* 03 — Cylinder Types Grid */}
      <CylinderTypesGrid />



      {/* 05 — Industries Served */}
      <CylinderIndustries />

      {/* 06 — Why Choose Honeywell */}
      <WhyChooseCylinders />

      {/* 07 — Technical Capabilities */}
      <CylinderTechnicalSpecs />

      {/* 08 — Manufacturing Process */}
      <CylinderManufacturingProcess />

      {/* 09 — FAQs */}
      <CylinderFAQs />

      {/* 10 — CTA Section */}
      <CTA 
        title="Request a Custom Quote Today"
        description="Don't compromise the efficiency of your machinery with subpar hydraulic components."
        primaryCtaText="CONTACT US"
        primaryCtaHref="/contact-us/"
        secondaryCtaText="Call Now"
        secondaryCtaHref="tel:+919924343873"
      />
    </>
  );
}
