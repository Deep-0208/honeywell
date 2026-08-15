import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { tamilNaduData } from '@/data/locations/tamil-nadu';

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
  title: tamilNaduData.seo.title,
  description: tamilNaduData.seo.description,
  canonical: tamilNaduData.seo.canonical,
  image: tamilNaduData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={tamilNaduData.schema} />
      <HeroSection data={tamilNaduData.hero} />
      <TrustSection data={tamilNaduData.trustFactors} bg="gray" />
      <BenefitsSection data={tamilNaduData.benefits} bg="white" />
      <ProductsSection data={tamilNaduData.products} bg="gray" />
      <IndustriesSection data={tamilNaduData.industries} bg="white" />
      <CaseStudySection data={tamilNaduData.caseStudy} bg="gray" />
      <CoverageSection data={tamilNaduData.serviceAreas} bg="white" />
      <FAQSection data={tamilNaduData.faqs} bg="gray" />
      <CTASection data={tamilNaduData.cta} />
    </>
  );
}
