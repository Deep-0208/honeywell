import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { madhyaPradeshData } from '@/data/locations/madhya-pradesh';

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
  title: madhyaPradeshData.seo.title,
  description: madhyaPradeshData.seo.description,
  canonical: madhyaPradeshData.seo.canonical,
  image: madhyaPradeshData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={madhyaPradeshData.schema} />
      <HeroSection data={madhyaPradeshData.hero} />
      <TrustSection data={madhyaPradeshData.trustFactors} bg="gray" />
      <BenefitsSection data={madhyaPradeshData.benefits} bg="white" />
      <ProductsSection data={madhyaPradeshData.products} bg="gray" />
      <IndustriesSection data={madhyaPradeshData.industries} bg="white" />
      <CaseStudySection data={madhyaPradeshData.caseStudy} bg="gray" />
      <CoverageSection data={madhyaPradeshData.serviceAreas} bg="white" />
      <FAQSection data={madhyaPradeshData.faqs} bg="gray" />
      <CTASection data={madhyaPradeshData.cta} />
    </>
  );
}
