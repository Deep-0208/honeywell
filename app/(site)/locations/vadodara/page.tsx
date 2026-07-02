import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { vadodaraData } from '@/data/locations/vadodara';

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
  title: vadodaraData.seo.title,
  description: vadodaraData.seo.description,
  canonical: vadodaraData.seo.canonical,
  image: vadodaraData.seo.openGraph.images[0]?.url,
});

export default function VadodaraLocationPage() {
  return (
    <>
      <JsonLd data={vadodaraData.schema} />

      {/* 01 — Hero */}
      <HeroSection data={vadodaraData.hero} />

      {/* 02 — Trust Factors */}
      <TrustSection data={vadodaraData.trustFactors} bg="gray" />

      {/* 03 — Benefits */}
      <BenefitsSection data={vadodaraData.benefits} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={vadodaraData.products} bg="gray" />

      {/* 05 — Industries */}
      <IndustriesSection data={vadodaraData.industries} bg="white" />

      {/* 06 — Case Study */}
      <CaseStudySection data={vadodaraData.caseStudy} bg="gray" />

      {/* 07 — Service Areas / Coverage */}
      <CoverageSection data={vadodaraData.serviceAreas} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={vadodaraData.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={vadodaraData.cta} />
    </>
  );
}
