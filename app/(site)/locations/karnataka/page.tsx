import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { karnatakaData } from '@/data/locations/karnataka';

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
  title: karnatakaData.seo.title,
  description: karnatakaData.seo.description,
  canonical: karnatakaData.seo.canonical,
  image: karnatakaData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={karnatakaData.schema} />
      <HeroSection data={karnatakaData.hero} />
      <TrustSection data={karnatakaData.trustFactors} bg="gray" />
      <BenefitsSection data={karnatakaData.benefits} bg="white" />
      <ProductsSection data={karnatakaData.products} bg="gray" />
      <IndustriesSection data={karnatakaData.industries} bg="white" />
      <CaseStudySection data={karnatakaData.caseStudy} bg="gray" />
      <CoverageSection data={karnatakaData.serviceAreas} bg="white" />
      <FAQSection data={karnatakaData.faqs} bg="gray" />
      <CTASection data={karnatakaData.cta} />
    </>
  );
}
