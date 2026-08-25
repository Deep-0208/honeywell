import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { halolData } from '@/data/locations/halol';

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
  title: halolData.seo.title,
  description: halolData.seo.description,
  canonical: halolData.seo.canonical,
  image: halolData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={halolData.schema} />
      <HeroSection data={halolData.hero} />
      <TrustSection data={halolData.trustFactors} bg="gray" />
      <BenefitsSection data={halolData.benefits} bg="white" />
      <ProductsSection data={halolData.products} bg="gray" />
      <IndustriesSection data={halolData.industries} bg="white" />
      <CaseStudySection data={halolData.caseStudy} bg="gray" />
      <CoverageSection data={halolData.serviceAreas} bg="white" />
      <FAQSection data={halolData.faqs} bg="gray" />
      <CTASection data={halolData.cta} />
    </>
  );
}
