import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { morbiData } from '@/data/locations/morbi';

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
  title: morbiData.seo.title,
  description: morbiData.seo.description,
  canonical: morbiData.seo.canonical,
  image: morbiData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={morbiData.schema} />
      <HeroSection data={morbiData.hero} />
      <TrustSection data={morbiData.trustFactors} bg="gray" />
      <BenefitsSection data={morbiData.benefits} bg="white" />
      <ProductsSection data={morbiData.products} bg="gray" />
      <IndustriesSection data={morbiData.industries} bg="white" />
      <CaseStudySection data={morbiData.caseStudy} bg="gray" />
      <CoverageSection data={morbiData.serviceAreas} bg="white" />
      <FAQSection data={morbiData.faqs} bg="gray" />
      <CTASection data={morbiData.cta} />
    </>
  );
}
