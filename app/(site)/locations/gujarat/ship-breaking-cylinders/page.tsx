import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { shipBreakingData } from '@/data/locations/ship-breaking-cylinders';

import { HeroSection } from '@/components/templates/location/HeroSection';
import { BenefitsSection } from '@/components/templates/location/BenefitsSection';
import { IndustriesSection } from '@/components/templates/location/IndustriesSection';
import { ProductsSection } from '@/components/templates/location/ProductsSection';
import { CoverageSection } from '@/components/templates/location/CoverageSection';
import { TrustSection } from '@/components/templates/location/TrustSection';
import { FAQSection } from '@/components/templates/location/FAQSection';
import { CTASection } from '@/components/templates/location/CTASection';
import { CaseStudySection } from '@/components/templates/location/CaseStudySection';

export const metadata: Metadata = buildMetadata({
  title: shipBreakingData.seo.title,
  description: shipBreakingData.seo.description,
  canonical: shipBreakingData.seo.canonical,
  image: shipBreakingData.seo.openGraph.images[0]?.url,
});

export default function ShipBreakingCylindersPage() {
  return (
    <>
      <JsonLd data={shipBreakingData.schema} />

      {/* 01 — Hero */}
      <HeroSection data={shipBreakingData.hero} />

      {/* 02 — Trust Factors */}
      <TrustSection data={shipBreakingData.trustFactors} bg="gray" />

      {/* 03 — Benefits */}
      <BenefitsSection data={shipBreakingData.benefits} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={shipBreakingData.products} bg="gray" />

      {/* 05 — Industries */}
      <IndustriesSection data={shipBreakingData.industries} bg="white" />

      {/* 06 — Case Study */}
      <CaseStudySection data={shipBreakingData.caseStudy} bg="gray" />

      {/* 07 — Service Areas / Coverage */}
      <CoverageSection data={shipBreakingData.serviceAreas} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={shipBreakingData.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={shipBreakingData.cta} />
    </>
  );
}
