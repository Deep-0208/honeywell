import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { bhavnagarData } from '@/data/locations/bhavnagar';

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
  title: bhavnagarData.seo.title,
  description: bhavnagarData.seo.description,
  canonical: bhavnagarData.seo.canonical,
  image: bhavnagarData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={bhavnagarData.schema} />
      <HeroSection data={bhavnagarData.hero} />
      <TrustSection data={bhavnagarData.trustFactors} bg="gray" />
      <BenefitsSection data={bhavnagarData.benefits} bg="white" />
      <ProductsSection data={bhavnagarData.products} bg="gray" />
      <IndustriesSection data={bhavnagarData.industries} bg="white" />
      <CaseStudySection data={bhavnagarData.caseStudy} bg="gray" />
      <CoverageSection data={bhavnagarData.serviceAreas} bg="white" />
      <FAQSection data={bhavnagarData.faqs} bg="gray" />
      <CTASection data={bhavnagarData.cta} />
    </>
  );
}
