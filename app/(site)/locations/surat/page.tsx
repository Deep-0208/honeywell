import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { suratData } from '@/data/locations/surat';

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
  title: suratData.seo.title,
  description: suratData.seo.description,
  canonical: suratData.seo.canonical,
  image: suratData.seo.openGraph.images[0]?.url,
});

export default function SuratLocationPage() {
  return (
    <>
      <JsonLd data={suratData.schema} />

      {/* 01 — Hero */}
      <HeroSection data={suratData.hero} />

      {/* 02 — Trust Factors */}
      <TrustSection data={suratData.trustFactors} bg="gray" />

      {/* 03 — Benefits */}
      <BenefitsSection data={suratData.benefits} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={suratData.products} bg="gray" />

      {/* 05 — Industries */}
      <IndustriesSection data={suratData.industries} bg="white" />

      {/* 06 — Case Study */}
      <CaseStudySection data={suratData.caseStudy} bg="gray" />

      {/* 07 — Service Areas / Coverage */}
      <CoverageSection data={suratData.serviceAreas} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={suratData.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={suratData.cta} />
    </>
  );
}
