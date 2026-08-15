import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { westBengalData } from '@/data/locations/west-bengal';

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
  title: westBengalData.seo.title,
  description: westBengalData.seo.description,
  canonical: westBengalData.seo.canonical,
  image: westBengalData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={westBengalData.schema} />
      <HeroSection data={westBengalData.hero} />
      <TrustSection data={westBengalData.trustFactors} bg="gray" />
      <BenefitsSection data={westBengalData.benefits} bg="white" />
      <ProductsSection data={westBengalData.products} bg="gray" />
      <IndustriesSection data={westBengalData.industries} bg="white" />
      <CaseStudySection data={westBengalData.caseStudy} bg="gray" />
      <CoverageSection data={westBengalData.serviceAreas} bg="white" />
      <FAQSection data={westBengalData.faqs} bg="gray" />
      <CTASection data={westBengalData.cta} />
    </>
  );
}
