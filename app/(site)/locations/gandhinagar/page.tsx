import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { gandhinagarData } from '@/data/locations/gandhinagar';

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
  title: gandhinagarData.seo.title,
  description: gandhinagarData.seo.description,
  canonical: gandhinagarData.seo.canonical,
  image: gandhinagarData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={gandhinagarData.schema} />
      <HeroSection data={gandhinagarData.hero} />
      <TrustSection data={gandhinagarData.trustFactors} bg="gray" />
      <BenefitsSection data={gandhinagarData.benefits} bg="white" />
      <ProductsSection data={gandhinagarData.products} bg="gray" />
      <IndustriesSection data={gandhinagarData.industries} bg="white" />
      <CaseStudySection data={gandhinagarData.caseStudy} bg="gray" />
      <CoverageSection data={gandhinagarData.serviceAreas} bg="white" />
      <FAQSection data={gandhinagarData.faqs} bg="gray" />
      <CTASection data={gandhinagarData.cta} />
    </>
  );
}
