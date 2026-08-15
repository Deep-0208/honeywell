import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { rajasthanData } from '@/data/locations/rajasthan';

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
  title: rajasthanData.seo.title,
  description: rajasthanData.seo.description,
  canonical: rajasthanData.seo.canonical,
  image: rajasthanData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={rajasthanData.schema} />
      <HeroSection data={rajasthanData.hero} />
      <TrustSection data={rajasthanData.trustFactors} bg="gray" />
      <BenefitsSection data={rajasthanData.benefits} bg="white" />
      <ProductsSection data={rajasthanData.products} bg="gray" />
      <IndustriesSection data={rajasthanData.industries} bg="white" />
      <CaseStudySection data={rajasthanData.caseStudy} bg="gray" />
      <CoverageSection data={rajasthanData.serviceAreas} bg="white" />
      <FAQSection data={rajasthanData.faqs} bg="gray" />
      <CTASection data={rajasthanData.cta} />
    </>
  );
}
