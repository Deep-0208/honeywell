import type { Metadata } from 'next';
import { buildMetadata, buildHomepageGraphSchema } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { homepageFAQs } from '@/data/homepage';

/* ─── Homepage Section Components ─── */
import { HeroSection } from '@/components/homepage/HeroSection';
import { ClientLogosSection } from '@/components/homepage/ClientLogosSection';
import { ProductsSection } from '@/components/homepage/ProductsSection';
import { WhyChooseUsSection } from '@/components/homepage/WhyChooseUsSection';
import { IndustriesSection } from '@/components/homepage/IndustriesSection';
import { ManufacturingFacilitySection } from '@/components/homepage/ManufacturingFacilitySection';
import { ProcessSection } from '@/components/homepage/ProcessSection';
import { CertificationsSection } from '@/components/homepage/CertificationsSection';
import { TestimonialsSection } from '@/components/homepage/TestimonialsSection';
import { LocationsSection } from '@/components/homepage/LocationsSection';
import { FAQSection } from '@/components/homepage/FAQSection';
import { HomepageCTASection } from '@/components/homepage/HomepageCTASection';

/* ═══════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════ */

const HOMEPAGE_TITLE =
  'Hydraulic Cylinder & Power Pack Manufacturer in Ahmedabad';

const HOMEPAGE_DESCRIPTION =
  'Leading manufacturer of hydraulic cylinders, power packs & custom hydraulic systems in Ahmedabad. ISO 9001:2015 certified. Serving 25+ industries across India.';

const HOMEPAGE_KEYWORDS = [
  'hydraulic cylinder manufacturer',
  'hydraulic power pack manufacturer',
  'hydraulic cylinder manufacturer in Ahmedabad',
  'hydraulic power pack manufacturer in Gujarat',
  'hydraulic manifold block manufacturer',
  'custom hydraulic systems',
  'custom hydraulic cylinders',
  'hydraulic press power pack',
  'hydraulic equipment manufacturer Ahmedabad Gujarat India',
  'Honeywell Hydraulics',
];

export const metadata: Metadata = {
  ...buildMetadata({
    title: HOMEPAGE_TITLE, // used for OG/Twitter fallbacks
    description: HOMEPAGE_DESCRIPTION,
    keywords: HOMEPAGE_KEYWORDS,
    canonical: '/',
    image: '/images/og/default-og.jpg',
  }),
  title: { absolute: "Hydraulic Cylinder & Powerpack Manufacturer | Honeywell" },
};

/* ═══════════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════════

   Approved Section Order:

   01  Hero Section
   02  Product Categories
   03  Client Logos (Trust Strip)
   04  Why Choose Us
   05  Industries Served
   06  Manufacturing Facility
   07  Manufacturing Process
   08  Certifications
   09  Testimonials
   10  Locations Served
   11  FAQ
   12  CTA Banner

   Performance:
   • Server Component — zero client JS for page shell
   • FAQAccordion, HeroSection are the only client islands
   • Hero image loaded with priority for LCP < 1.8s

   SEO:
   • Single H1 in HeroSection
   • 40+ internal links across sections
   • @graph schema with 6 types
   • FAQPage schema auto-injected by FAQAccordion
   ═══════════════════════════════════════════════ */

export default function HomePage() {
  /* Build @graph schema combining all 6 schema types */
  const graphSchema = buildHomepageGraphSchema({
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    faqs: homepageFAQs,
  });

  return (
    <>
      {/* @graph JSON-LD — single block with all schema types */}
      <JsonLd data={graphSchema} />

      {/* 01 — Hero */}
      <HeroSection />

      {/* 02 — Product Categories */}
      <ProductsSection />

      {/* 03 — Client Trust (Logos + Stats) */}
      <ClientLogosSection />

      {/* 04 — Why Choose Us */}
      <WhyChooseUsSection />

      {/* 05 — Industries Served */}
      <IndustriesSection />

      {/* 06 — Manufacturing Facility */}
      <ManufacturingFacilitySection />

      {/* 07 — Manufacturing Process */}
      <ProcessSection />

      {/* 08 — Certifications */}
      <CertificationsSection />

      {/* 09 — Testimonials */}
      <TestimonialsSection />

      {/* 10 — Locations Served */}
      <LocationsSection />

      {/* 11 — FAQ */}
      <FAQSection />

      {/* 12 — CTA Banner (sole bottom conversion) */}
      <HomepageCTASection />
    </>
  );
}

