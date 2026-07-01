import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { ahmedabadData } from '@/data/locations/ahmedabad';

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
  title: ahmedabadData.seo.title,
  description: ahmedabadData.seo.description,
  canonical: ahmedabadData.seo.canonical,
  image: ahmedabadData.seo.openGraph.images[0]?.url,
});

export default function AhmedabadLocationPage() {
  return (
    <>
      <JsonLd data={ahmedabadData.schema} />

      {/* 01 — Hero */}
      <HeroSection data={ahmedabadData.hero} />

      {/* 02 — Trust Factors */}
      <TrustSection data={ahmedabadData.trustFactors} bg="gray" />

      {/* 03 — Benefits */}
      <BenefitsSection data={ahmedabadData.benefits} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={ahmedabadData.products} bg="gray" />

      {/* 05 — Industries */}
      <IndustriesSection data={ahmedabadData.industries} bg="white" />

      {/* 06 — Case Study */}
      <CaseStudySection data={ahmedabadData.caseStudy} bg="gray" />

      {/* 07 — Service Areas / Coverage */}
      <CoverageSection data={ahmedabadData.serviceAreas} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={ahmedabadData.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={ahmedabadData.cta} />
    </>
  );
}
