import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { injectionMouldingData } from '@/data/locations/injection-moulding-cylinders';

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
  title: injectionMouldingData.seo.title,
  description: injectionMouldingData.seo.description,
  canonical: injectionMouldingData.seo.canonical,
  image: injectionMouldingData.seo.openGraph.images[0]?.url,
});

export default function InjectionMouldingCylindersPage() {
  return (
    <>
      <JsonLd data={injectionMouldingData.schema} />

      {/* 01 — Hero */}
      <HeroSection data={injectionMouldingData.hero} />

      {/* 02 — Trust Factors */}
      <TrustSection data={injectionMouldingData.trustFactors} bg="gray" />

      {/* 03 — Benefits */}
      <BenefitsSection data={injectionMouldingData.benefits} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={injectionMouldingData.products} bg="gray" />

      {/* 05 — Industries */}
      <IndustriesSection data={injectionMouldingData.industries} bg="white" />

      {/* 06 — Case Study */}
      <CaseStudySection data={injectionMouldingData.caseStudy} bg="gray" />

      {/* 07 — Service Areas / Coverage */}
      <CoverageSection data={injectionMouldingData.serviceAreas} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={injectionMouldingData.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={injectionMouldingData.cta} />
    </>
  );
}
