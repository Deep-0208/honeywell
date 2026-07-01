import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { gujaratFacility } from '@/data/locations/gujarat-facility';

import { HeroSection } from '@/components/templates/location/HeroSection';
import { BenefitsSection } from '@/components/templates/location/BenefitsSection';
import { IndustriesSection } from '@/components/templates/location/IndustriesSection';
import { ProductsSection } from '@/components/templates/location/ProductsSection';
import { CoverageSection } from '@/components/templates/location/CoverageSection';
import { ManufacturingSection } from '@/components/templates/location/ManufacturingSection';
import { TrustSection } from '@/components/templates/location/TrustSection';
import { FAQSection } from '@/components/templates/location/FAQSection';
import { CTASection } from '@/components/templates/location/CTASection';

export const metadata: Metadata = buildMetadata({
  title: gujaratFacility.seo.title,
  description: gujaratFacility.seo.description,
  canonical: '/locations/gujarat-facility',
  image: gujaratFacility.images.hero,
});

export default function GujaratLocationPage() {
  return (
    <>
      <JsonLd data={gujaratFacility.schema} />

      {/* 01 — Hero */}
      <HeroSection data={gujaratFacility.hero} />

      {/* 02 — Benefits */}
      <BenefitsSection data={gujaratFacility.benefits} bg="gray" />

      {/* 03 — Industries */}
      <IndustriesSection data={gujaratFacility.industries} bg="white" />

      {/* 04 — Products */}
      <ProductsSection data={gujaratFacility.products} bg="gray" />

      {/* 05 — Service Areas / Coverage */}
      <CoverageSection data={gujaratFacility.serviceAreas} bg="white" />

      {/* 06 — Manufacturing Facility */}
      <ManufacturingSection data={gujaratFacility.manufacturing} bg="gray" />

      {/* 07 — Trust Factors */}
      <TrustSection data={gujaratFacility.trustFactors} bg="white" />

      {/* 08 — FAQ */}
      <FAQSection data={gujaratFacility.faqs} bg="gray" />

      {/* 09 — CTA */}
      <CTASection data={gujaratFacility.cta} />
    </>
  );
}
