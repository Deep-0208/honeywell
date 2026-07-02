import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { textileMachineryData } from '@/data/locations/textile-machinery-cylinders';

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
  title: textileMachineryData.seo.title,
  description: textileMachineryData.seo.description,
  canonical: textileMachineryData.seo.canonical,
  image: textileMachineryData.seo.openGraph.images[0]?.url,
});

export default function TextileMachineryCylindersPage() {
  return (
    <>
      <JsonLd data={textileMachineryData.schema} />

      {/* 01 — Hero */}
      <HeroSection data={textileMachineryData.hero} />

      {/* 02 — Trust Factors */}
      <TrustSection data={textileMachineryData.trustFactors} bg="gray" />

      {/* 03 — Benefits */}
      <BenefitsSection data={textileMachineryData.benefits} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={textileMachineryData.products} bg="gray" />

      {/* 05 — Industries */}
      <IndustriesSection data={textileMachineryData.industries} bg="white" />

      {/* 06 — Case Study */}
      <CaseStudySection data={textileMachineryData.caseStudy} bg="gray" />

      {/* 07 — Service Areas / Coverage */}
      <CoverageSection data={textileMachineryData.serviceAreas} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={textileMachineryData.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={textileMachineryData.cta} />
    </>
  );
}
