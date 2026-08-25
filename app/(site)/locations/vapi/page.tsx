import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { vapiData } from '@/data/locations/vapi';

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
  title: vapiData.seo.title,
  description: vapiData.seo.description,
  canonical: vapiData.seo.canonical,
  image: vapiData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={vapiData.schema} />
      <HeroSection data={vapiData.hero} />
      <TrustSection data={vapiData.trustFactors} bg="gray" />
      <BenefitsSection data={vapiData.benefits} bg="white" />
      <ProductsSection data={vapiData.products} bg="gray" />
      <IndustriesSection data={vapiData.industries} bg="white" />
      <CaseStudySection data={vapiData.caseStudy} bg="gray" />
      <CoverageSection data={vapiData.serviceAreas} bg="white" />
      <FAQSection data={vapiData.faqs} bg="gray" />
      <CTASection data={vapiData.cta} />
    </>
  );
}
