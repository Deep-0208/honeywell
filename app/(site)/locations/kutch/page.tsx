import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { kutchData } from '@/data/locations/kutch';

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
  title: kutchData.seo.title,
  description: kutchData.seo.description,
  canonical: kutchData.seo.canonical,
  image: kutchData.seo.openGraph.images[0]?.url,
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={kutchData.schema} />
      <HeroSection data={kutchData.hero} />
      <TrustSection data={kutchData.trustFactors} bg="gray" />
      <BenefitsSection data={kutchData.benefits} bg="white" />
      <ProductsSection data={kutchData.products} bg="gray" />
      <IndustriesSection data={kutchData.industries} bg="white" />
      <CaseStudySection data={kutchData.caseStudy} bg="gray" />
      <CoverageSection data={kutchData.serviceAreas} bg="white" />
      <FAQSection data={kutchData.faqs} bg="gray" />
      <CTASection data={kutchData.cta} />
    </>
  );
}
