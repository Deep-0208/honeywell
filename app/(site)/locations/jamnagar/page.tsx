import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { jamnagarData } from '@/data/locations/jamnagar';

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
  title: jamnagarData.seo.title,
  description: jamnagarData.seo.description,
  canonical: jamnagarData.seo.canonical,
  image: jamnagarData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={jamnagarData.schema} />
      <HeroSection data={jamnagarData.hero} />
      <TrustSection data={jamnagarData.trustFactors} bg="gray" />
      <BenefitsSection data={jamnagarData.benefits} bg="white" />
      <ProductsSection data={jamnagarData.products} bg="gray" />
      <IndustriesSection data={jamnagarData.industries} bg="white" />
      <CaseStudySection data={jamnagarData.caseStudy} bg="gray" />
      <CoverageSection data={jamnagarData.serviceAreas} bg="white" />
      <FAQSection data={jamnagarData.faqs} bg="gray" />
      <CTASection data={jamnagarData.cta} />
    </>
  );
}
