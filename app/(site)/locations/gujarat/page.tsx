import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { gujaratData } from '@/data/locations/gujarat';

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
  title: gujaratData.seo.title,
  description: gujaratData.seo.description,
  canonical: gujaratData.seo.canonical,
  image: gujaratData.seo.openGraph.images[0]?.url,
});

export default function GujaratLocationPage() {
  return (
    <>
      <JsonLd data={gujaratData.schema} />

      {/* 01 — Hero */}
      <HeroSection data={gujaratData.hero} />

      {/* 02 — Trust Factors */}
      <TrustSection data={gujaratData.trustFactors} bg="gray" />

      {/* 03 — Benefits */}
      <BenefitsSection data={gujaratData.benefits} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={gujaratData.products} bg="gray" />

      {/* 05 — Industries */}
      <IndustriesSection data={gujaratData.industries} bg="white" />

      {/* 06 — Case Study */}
      <CaseStudySection data={gujaratData.caseStudy} bg="gray" />

      {/* 07 — Service Areas / Coverage */}
      <CoverageSection data={gujaratData.serviceAreas} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={gujaratData.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={gujaratData.cta} />
    </>
  );
}
