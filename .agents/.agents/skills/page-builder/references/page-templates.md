# Page Templates Reference

Complete code templates for each of the 6 page types. These are the exact patterns to follow when generating pages.

---

## 1. Product Page Template

```tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';
import { CTA } from '@/components/ui/CTA';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { SpecTable } from '@/components/tables/SpecTable';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo';
import {
  ArrowRight, CheckCircle2, Settings, Shield, Wrench,
  Factory, Zap, Phone
} from 'lucide-react';

// Import page data from data file
import {
  PRODUCT_FEATURES,
  PRODUCT_SPECS,
  PRODUCT_APPLICATIONS,
  PRODUCT_INDUSTRIES,
  PRODUCT_ADVANTAGES,
  PRODUCT_FAQS,
} from '@/data/<product-slug>';

// ─────────────────────────────────────────────────────────────────────────────
// SEO Metadata
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_TITLE = '<Product Name> Manufacturer in Ahmedabad | Honeywell Hydraulics';
const PAGE_DESCRIPTION = '<150-160 char description with primary keyword, location, and CTA>';
const PAGE_KEYWORDS = [
  '<primary keyword>',
  '<secondary keyword 1>',
  '<secondary keyword 2>',
  '<long-tail keyword 1>',
  '<location keyword>',
];

export const metadata: Metadata = {
  ...buildMetadata({
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    keywords: PAGE_KEYWORDS,
    canonical: '/products/<category>/<slug>/',
    image: '/images/products/<slug>.webp',
  }),
};

// ─────────────────────────────────────────────────────────────────────────────
// JSON-LD Schemas
// ─────────────────────────────────────────────────────────────────────────────
export default function ProductPage() {
  const siteUrl = COMPANY_INFO.websiteUrl;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: '<Category>', item: `${siteUrl}/products/<category>/` },
      { '@type': 'ListItem', position: 3, name: '<Product Name>', item: `${siteUrl}/products/<category>/<slug>/` },
    ],
  };

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: PAGE_TITLE,
    url: `${siteUrl}/products/<category>/<slug>/`,
    description: PAGE_DESCRIPTION,
    isPartOf: { '@id': `${siteUrl}/#website` },
    inLanguage: 'en-IN',
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '<Product Name>',
    description: PAGE_DESCRIPTION,
    brand: { '@type': 'Brand', name: COMPANY_INFO.name },
    manufacturer: { '@type': 'Organization', name: COMPANY_INFO.name },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: PRODUCT_FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={webPageSchema} />
      <JsonLd data={productSchema} />
      <JsonLd data={faqSchema} />

      {/* 01 — Hero */}
      <section className="bg-honeywell-navy text-white pt-8 md:pt-12 pb-12 md:pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" aria-hidden="true" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm font-body text-brand-borderGray mb-6">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li><Link href="/products/" className="hover:text-white transition-colors">Products</Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li><Link href="/products/<category>/" className="hover:text-white transition-colors"><Category Name></Link></li>
              <li aria-hidden="true">&rsaquo;</li>
              <li className="text-white font-semibold" aria-current="page"><Product Name></li>
            </ol>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <Heading variant="hero" as="h1" className="text-white mb-6">
                <Product Name> Manufacturer in Ahmedabad
              </Heading>
              <p className="text-brand-borderGray text-base sm:text-lg font-body leading-relaxed max-w-xl mb-8">
                <Product intro paragraph — include primary keyword naturally>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/request-quote/" variant="primary" size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Request Quote
                </Button>
                <Button href="/contact-us/" variant="outline" size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-honeywell-navy">
                  Contact Engineering
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* IMAGE REQUIREMENT: /images/products/<slug>.webp
                  Alt: <Product Name> Manufacturer in Ahmedabad - Honeywell Hydraulics
                  Priority: High */}
              <div className="aspect-square bg-white/10 rounded-sm flex items-center justify-center">
                <Settings className="w-16 h-16 text-white/40" aria-hidden="true" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Product Overview */}
      <Section bg="white">
        <Container>
          {/* Section content — see section-library.md for ProductOverview pattern */}
        </Container>
      </Section>

      {/* 03 — Key Features */}
      <Section bg="gray">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading variant="section" as="h2" className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
              Key Features
            </Heading>

          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
            {PRODUCT_FEATURES.map((feature) => (
              <li key={feature.title} className="bg-white border border-slate-200 rounded-sm p-6 hover:border-honeywell-red transition-colors">
                <IconBox icon={feature.icon} variant="primary" className="mb-4" />
                <h3 className="text-lg font-display font-bold text-honeywell-navy mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed">{feature.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* 04 — Technical Specifications */}
      <Section bg="white">
        <Container>
          {/* SpecTable component with PRODUCT_SPECS data */}
        </Container>
      </Section>

      {/* 05 — Applications */}
      <Section bg="gray">
        <Container>
          {/* Application cards with links to /applications/ pages */}
        </Container>
      </Section>

      {/* 06 — Industries Served */}
      <Section bg="white">
        <Container>
          {/* Industry cards with links to /industries/ pages */}
        </Container>
      </Section>

      {/* 07 — Advantages */}
      <Section bg="gray">
        <Container>
          {/* Why choose this product — differentiation points */}
        </Container>
      </Section>

      {/* 08 — FAQ */}
      <Section bg="white">
        <Container>
          <div className="text-center mb-12 flex flex-col items-center">
            <Heading variant="section" as="h2" className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
              Frequently Asked Questions
            </Heading>

          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={PRODUCT_FAQS} />
          </div>
        </Container>
      </Section>

      {/* 09 — CTA Banner */}
      <CTA
        title="Need a Custom <Product Name>?"
        description="Our engineering team designs and manufactures to your exact specifications. Get a detailed quote within 24 hours."
        primaryCtaText="Request Quote"
        primaryCtaHref="/request-quote/"
        secondaryCtaText="Call Us"
        secondaryCtaHref={`tel:${COMPANY_INFO.phone}`}
      />
    </>
  );
}
```

### Product Data File Template

```typescript
// data/<product-slug>.ts

import React from 'react';
import {
  Settings, Shield, Zap, Wrench, Factory,
  CheckCircle2, Gauge, Thermometer
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
export interface ProductFeature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface ProductSpec {
  parameter: string;
  value: string;
  unit?: string;
}

export interface ProductApplication {
  name: string;
  description: string;
  href?: string;
}

export interface ProductIndustry {
  name: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Features
// ─────────────────────────────────────────────────────────────────────────────
export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Feature Title',
    description: 'Feature description — technical and specific.',
  },
  // ... 5-6 features
];

// ─────────────────────────────────────────────────────────────────────────────
// Technical Specifications
// ─────────────────────────────────────────────────────────────────────────────
export const PRODUCT_SPECS: ProductSpec[] = [
  { parameter: 'Bore Size Range', value: '25mm – 500mm' },
  { parameter: 'Stroke Length', value: 'Up to 6000mm' },
  { parameter: 'Working Pressure', value: '160 – 350 Bar' },
  // ... all relevant specs
];

// ─────────────────────────────────────────────────────────────────────────────
// Applications
// ─────────────────────────────────────────────────────────────────────────────
export const PRODUCT_APPLICATIONS: ProductApplication[] = [
  { name: 'Hydraulic Press', description: '...', href: '/applications/hydraulic-press/' },
  // ...
];

// ─────────────────────────────────────────────────────────────────────────────
// Industries
// ─────────────────────────────────────────────────────────────────────────────
export const PRODUCT_INDUSTRIES: ProductIndustry[] = [
  { name: 'Injection Moulding', href: '/industries/injection-moulding/' },
  { name: 'Automotive', href: '/industries/automotive/' },
  // ...
];

// ─────────────────────────────────────────────────────────────────────────────
// Advantages
// ─────────────────────────────────────────────────────────────────────────────
export const PRODUCT_ADVANTAGES: string[] = [
  'Advantage 1 — specific, measurable',
  'Advantage 2',
  // ...
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────────────────────
export const PRODUCT_FAQS: FAQ[] = [
  {
    question: 'What is <product name>?',
    answer: 'Answer with technical detail...',
  },
  // ... 5-8 FAQs
];
```

---

## 2. Industry Page Template

```tsx
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';
import { CTA } from '@/components/ui/CTA';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import JsonLd from '@/components/seo/JsonLd';
import { COMPANY_INFO } from '@/lib/constants';
import { ArrowRight, CheckCircle2, Factory, Settings } from 'lucide-react';

import {
  INDUSTRY_OVERVIEW,
  INDUSTRY_PRODUCTS,
  INDUSTRY_REQUIREMENTS,
  INDUSTRY_CASE_STUDY,
  INDUSTRY_WHY_CHOOSE,
  INDUSTRY_FAQS,
} from '@/data/<industry-slug>';

const PAGE_TITLE = 'Hydraulic Solutions for <Industry> | Honeywell Hydraulics';
const PAGE_DESCRIPTION = '<150-160 char — hydraulic solutions for <industry>, manufacturer in Ahmedabad>';

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: '/industries/<slug>/' },
  keywords: '<industry> hydraulic solutions, hydraulic cylinders for <industry>, ...',
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: '/industries/<slug>/',
    siteName: COMPANY_INFO.name,
    locale: 'en_IN',
    type: 'website',
  },
};

export default function IndustryPage() {
  const siteUrl = COMPANY_INFO.websiteUrl;

  // Schemas: BreadcrumbList, WebPage, FAQPage
  // ... (same pattern as product page)

  return (
    <>
      {/* Schema blocks */}

      {/* 01 — Hero */}
      <section className="bg-honeywell-navy text-white pt-8 md:pt-12 pb-12 md:pb-16 relative overflow-hidden">
        {/* Breadcrumb: Home > Industries > <Industry> */}
        {/* H1: Hydraulic Solutions for <Industry> */}
        {/* Hero stat: e.g., "500+ Cylinders Supplied" */}
        {/* CTA: Request Quote + View Products */}
      </section>

      {/* 02 — Industry Overview (challenges + solutions) */}
      <Section bg="white">{/* ... */}</Section>

      {/* 03 — Products for This Industry */}
      <Section bg="gray">{/* Linked product cards */}</Section>

      {/* 04 — Technical Requirements */}
      <Section bg="white">{/* Industry-specific specs table */}</Section>

      {/* 05 — Case Study / Application Example */}
      <Section bg="gray">{/* Real-world example */}</Section>

      {/* 06 — Why Choose Us for This Industry */}
      <Section bg="white">{/* Differentiators */}</Section>

      {/* 07 — FAQ */}
      <Section bg="gray">{/* FAQAccordion */}</Section>

      {/* 08 — CTA */}
      <CTA title="Need Hydraulic Solutions for <Industry>?" ... />
    </>
  );
}
```

---

## 3. Application Page Template

Same structural pattern. Key differences:
- Route: `/applications/<slug>/`
- Focus on the problem → solution narrative
- "How It Works" section (numbered process steps)
- Products Used section (linked cards)
- 7 sections total

---

## 4. Location Page Template

Key differences:
- Route: `/locations/<slug>/`
- LocalBusiness schema with geo coordinates
- "Local Industries" section
- "Service Areas" with coverage map placeholder
- "Location Advantages" (proximity, logistics, local support)
- CTA includes local phone number and address
- 8 sections total

---

## 5. Service Page Template

Key differences:
- Route: `/services/<slug>/`
- Service schema
- "Service Process" with numbered steps
- "Products Covered" section
- 7 sections total

---

## 6. Resource Page Template

Key differences:
- Route: `/resources/<slug>/`
- Article schema with datePublished / dateModified
- Long-form content body (1500+ words)
- Table of contents
- "Related Products" sidebar
- 6 sections total
