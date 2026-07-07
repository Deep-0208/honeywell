import React from 'react';
import { SiteLocationsSection } from '@/components/locations/SiteLocationsSection';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { CTA } from '@/components/ui/CTA';

// Shared Components
import { ProductHero } from './ProductHero';
import { ProductOverview } from './ProductOverview';
import { ProductKeyFeatures } from './ProductKeyFeatures';
import { ProductTechnicalSpecs } from './ProductTechnicalSpecs';
import { ProductVariants } from './ProductVariants';
import { ProductComparison } from './ProductComparison';
import { ProductIndustries } from './ProductIndustries';
import { ProductEngineering } from './ProductEngineering';
import { ProductManufacturing } from './ProductManufacturing';
import { ProductSpotlight } from './ProductSpotlight';
import { ProductRelated } from './ProductRelated';

import type { ProductPageData } from './types';

export interface ProductPageProps {
  data: ProductPageData;
}

/**
 * ProductPage Renderer
 *
 * Centralized layout engine for all product detail pages.
 * Handles the fixed ordering of sections and conditional rendering based on data presence.
 * Expects the caller (the page wrapper) to render the `<JsonLd>` separately for flexibility,
 * but can also render its own if needed.
 */
export function ProductPage({ data }: ProductPageProps) {
  return (
    <>
      {/* 01 — Hero (Mandatory) */}
      <ProductHero {...data.hero} />

      {/* 02 — Overview */}
      {data.overview && <ProductOverview {...data.overview} />}

      {/* 03 — Key Features */}
      {data.keyFeatures && <ProductKeyFeatures {...data.keyFeatures} />}

      {/* 04 — Technical Specs */}
      {data.technicalSpecs && <ProductTechnicalSpecs {...data.technicalSpecs} />}

      {/* 05 — Variants */}
      {data.variants && <ProductVariants {...data.variants} />}

      {/* 06 — Comparisons (Repeatable) */}
      {data.comparisons && data.comparisons.map((comparison, idx) => (
        <ProductComparison key={`comparison-${idx}`} {...comparison} />
      ))}

      {/* 07 — Industries */}
      {data.industries && <ProductIndustries {...data.industries} />}

      {/* 08 — Engineering Considerations */}
      {data.engineering && <ProductEngineering {...data.engineering} />}

      {/* 09 — Manufacturing */}
      {data.manufacturing && <ProductManufacturing {...data.manufacturing} />}

      {/* 10 — Spotlights / Case Studies (Repeatable) */}
      {data.spotlights && data.spotlights.map((spotlight, idx) => (
        <ProductSpotlight key={`spotlight-${idx}`} {...spotlight} />
      ))}

      {/* 11 — Related Products */}
      {data.relatedProducts && <ProductRelated {...data.relatedProducts} />}

      {/* 12 — Local Service Areas */}
      {data.productName && <SiteLocationsSection productName={data.productName} />}

      {/* 14 — FAQs */}
      {/* 
        Note: SiteFAQSection typically injects its own FAQPage schema. 
        If buildProductSchema already builds it, you might want to disable it here,
        but for now, we'll keep the standard behavior.
      */}
      {data.faqs && <SiteFAQSection faqs={data.faqs} />}

      {/* 15 — Final CTA */}
      {data.cta && (
        <CTA
          title={data.cta.title}
          description={data.cta.description}
          primaryCtaText={data.cta.primaryCtaText}
          primaryCtaHref={data.cta.primaryCtaHref}
          secondaryCtaText={data.cta.secondaryCtaText}
          secondaryCtaHref={data.cta.secondaryCtaHref}
        />
      )}
    </>
  );
}
