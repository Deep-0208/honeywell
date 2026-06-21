import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import { CTA } from '@/components/ui/CTA';

/* ─── Section Components ─── */
import { HydraulicPowerPackHero } from '@/components/products/hydraulic-power-packs/HydraulicPowerPackHero';
import { PowerPackOverview } from '@/components/products/hydraulic-power-packs/PowerPackOverview';
import { PowerPackTypesGrid } from '@/components/products/hydraulic-power-packs/PowerPackTypesGrid';

import { PowerPackIndustries } from '@/components/products/hydraulic-power-packs/PowerPackIndustries';
import { WhyChoosePowerPacks } from '@/components/products/hydraulic-power-packs/WhyChoosePowerPacks';
import { PowerPackTechnicalSpecs } from '@/components/products/hydraulic-power-packs/PowerPackTechnicalSpecs';
import { PowerPackManufacturingProcess } from '@/components/products/hydraulic-power-packs/PowerPackManufacturingProcess';
import { PowerPackFAQs } from '@/components/products/hydraulic-power-packs/PowerPackFAQs';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const PAGE_TITLE = 'Hydraulic Power Pack Manufacturer in Gujarat, India | Honeywell';
const PAGE_DESCRIPTION = 'Leading hydraulic power pack manufacturer in Ahmedabad, Gujarat. Custom industrial hydraulic power packs and units. ISO certified engineering and manufacturing.';
const PAGE_URL = '/products/hydraulic-power-packs/';
const PAGE_IMAGE = '/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp';

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: [
      'Hydraulic Power Pack Manufacturer in Ahmedabad',
      'Custom Hydraulic Power Packs',
      'Industrial Hydraulic Power Packs',
      'Hydraulic Power Unit Manufacturer',
      'Hydraulic Power Pack Supplier Gujarat',
      'Compact Hydraulic Power Packs'
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
            name: 'Hydraulic Power Packs',
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
            name: 'Do you manufacture custom hydraulic power packs for specific machines?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. While we offer standard industrial units, our primary expertise is custom engineering. We design the reservoir dimensions, motor horsepower, pump displacement, and valve logic specifically to match your machine\'s unique cycle profile.'
            }
          },
          {
            '@type': 'Question',
            name: 'Are you a trading company or a hydraulic power pack manufacturer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We are a direct hydraulic power pack company and manufacturer. Every power pack is engineered, fabricated, piped, wired, and load-tested at our manufacturing facility in Ahmedabad, Gujarat.'
            }
          },
          {
            '@type': 'Question',
            name: 'What is the delivery time for an industrial power pack?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Standard 3-phase hydraulic power packs are typically assembled, tested, and dispatched within 10 to 15 days. Highly complex, custom high-low circuits or massive reservoir systems may require 20 to 30 days depending on the engineering scope.'
            }
          },
          {
            '@type': 'Question',
            name: 'Can you repair my existing hydraulic power pack?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Our Hydraulic System Retrofitting division specializes in overhauling, upgrading, and repairing aging power units, replacing failed pumps and redesigning inefficient valve manifolds.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do you supply power packs outside of Gujarat?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. We are a recognized hydraulic power pack exporter and PAN-India supplier. We securely crate and ship our power units to OEMs and manufacturing plants across Maharashtra, Rajasthan, South India, and international markets.'
            }
          }
        ]
      },
      /* 4. CollectionPage — hasPart will be added in Phase 5 once product detail pages exist */
      {
        '@type': 'CollectionPage',
        '@id': `${siteUrl}${PAGE_URL}#collection`,
        url: `${siteUrl}${PAGE_URL}`,
        name: 'Hydraulic Power Packs Collection',
        description: 'Comprehensive range of industrial hydraulic power packs including standard, compact, industrial, AC, DC, and custom hydraulic power units.',
      }
    ]
  };
}

/* ═══════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════ */

export default function HydraulicPowerPacksHubPage() {
  const schema = buildPageSchema();

  return (
    <>
      <JsonLd data={schema} />

      {/* 01 — Hero */}
      <HydraulicPowerPackHero />

      {/* 02 — Product Overview */}
      <PowerPackOverview />

      {/* 03 — Power Pack Types Grid */}
      <PowerPackTypesGrid />



      {/* 05 — Industries Served */}
      <PowerPackIndustries />

      {/* 06 — Why Choose Honeywell */}
      <WhyChoosePowerPacks />

      {/* 07 — Technical Capabilities */}
      <PowerPackTechnicalSpecs />

      {/* 08 — Manufacturing Process */}
      <PowerPackManufacturingProcess />

      {/* 09 — FAQs */}
      <PowerPackFAQs />

      {/* 10 — CTA Section */}
      <CTA 
        title="Request a Custom Quote Today"
        description="Don't compromise the efficiency of your machinery with an undersized or overheating power pack."
        primaryCtaText="CONTACT US"
        primaryCtaHref="/contact-us/"
        secondaryCtaText="Call Now"
        secondaryCtaHref="tel:+919924343873"
      />
    </>
  );
}
