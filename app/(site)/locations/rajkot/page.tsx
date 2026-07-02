import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { rajkotData } from '@/data/locations/rajkot';

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
  title: rajkotData.seo.title,
  description: rajkotData.seo.description,
  canonical: rajkotData.seo.canonical,
  image: rajkotData.seo.openGraph.images[0]?.url,
});

export default function RajkotLocationPage() {
  return (
    <>
      <JsonLd data={rajkotData.schema} />

      {/* 01 — Hero */}
      <HeroSection data={rajkotData.hero} />

      {/* 02 — Trust Factors */}
      <TrustSection data={rajkotData.trustFactors} bg="gray" />

      {/* 03 — Benefits */}
      <BenefitsSection data={rajkotData.benefits} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={rajkotData.products} bg="gray" />

      {/* 05 — Industries */}
      <IndustriesSection data={rajkotData.industries} bg="white" />

      {/* 06 — Case Study */}
      <CaseStudySection data={rajkotData.caseStudy} bg="gray" />

      {/* 07 — Service Areas / Coverage */}
      <CoverageSection data={rajkotData.serviceAreas} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={rajkotData.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={rajkotData.cta} />
    </>
  );
}
