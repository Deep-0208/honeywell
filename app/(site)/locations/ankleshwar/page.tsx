import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { ankleshwarData } from '@/data/locations/ankleshwar';

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
  title: ankleshwarData.seo.title,
  description: ankleshwarData.seo.description,
  canonical: ankleshwarData.seo.canonical,
  image: ankleshwarData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={ankleshwarData.schema} />
      <HeroSection data={ankleshwarData.hero} />
      <TrustSection data={ankleshwarData.trustFactors} bg="gray" />
      <BenefitsSection data={ankleshwarData.benefits} bg="white" />
      <ProductsSection data={ankleshwarData.products} bg="gray" />
      <IndustriesSection data={ankleshwarData.industries} bg="white" />
      <CaseStudySection data={ankleshwarData.caseStudy} bg="gray" />
      <CoverageSection data={ankleshwarData.serviceAreas} bg="white" />
      <FAQSection data={ankleshwarData.faqs} bg="gray" />
      <CTASection data={ankleshwarData.cta} />
    </>
  );
}
