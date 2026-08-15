import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { maharashtraData } from '@/data/locations/maharashtra';

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
  title: maharashtraData.seo.title,
  description: maharashtraData.seo.description,
  canonical: maharashtraData.seo.canonical,
  image: maharashtraData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={maharashtraData.schema} />
      <HeroSection data={maharashtraData.hero} />
      <TrustSection data={maharashtraData.trustFactors} bg="gray" />
      <BenefitsSection data={maharashtraData.benefits} bg="white" />
      <ProductsSection data={maharashtraData.products} bg="gray" />
      <IndustriesSection data={maharashtraData.industries} bg="white" />
      <CaseStudySection data={maharashtraData.caseStudy} bg="gray" />
      <CoverageSection data={maharashtraData.serviceAreas} bg="white" />
      <FAQSection data={maharashtraData.faqs} bg="gray" />
      <CTASection data={maharashtraData.cta} />
    </>
  );
}
