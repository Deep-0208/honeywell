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
  let bgToggle = true; // true = white, false = gray
  const getNextBg = (): 'white' | 'gray' => {
    const bg = bgToggle ? 'white' : 'gray';
    bgToggle = !bgToggle;
    return bg;
  };

  return (
    <>
      {/* 01 — Hero (Mandatory, always white, so next is gray) */}
      <ProductHero {...data.hero} />
      {(() => { bgToggle = false; return null; })()}

      {/* 02 — Overview */}
      {data.overview && <ProductOverview {...data.overview} bg={getNextBg()} />}

      {/* 03 — Key Features */}
      {data.keyFeatures && <ProductKeyFeatures {...data.keyFeatures} bg={getNextBg()} />}

      {/* 04 — Technical Specs */}
      {data.technicalSpecs && <ProductTechnicalSpecs {...data.technicalSpecs} bg={getNextBg()} />}

      {/* 05 — Variants */}
      {data.variants && <ProductVariants {...data.variants} bg={getNextBg()} />}

      {/* 06 — Comparisons (Repeatable) */}
      {data.comparisons && data.comparisons.map((comparison, idx) => (
        <ProductComparison key={`comparison-${idx}`} {...comparison} bg={getNextBg()} />
      ))}

      {/* 07 — Industries */}
      {data.industries && <ProductIndustries {...data.industries} bg={getNextBg()} />}

      {/* 08 — Engineering Considerations */}
      {data.engineering && <ProductEngineering {...data.engineering} bg={getNextBg()} />}

      {/* 09 — Manufacturing */}
      {data.manufacturing && <ProductManufacturing {...data.manufacturing} bg={getNextBg()} />}

      {/* 10 — Spotlights / Case Studies (Repeatable) */}
      {data.spotlights && data.spotlights.map((spotlight, idx) => (
        <ProductSpotlight key={`spotlight-${idx}`} {...spotlight} bg={getNextBg()} />
      ))}

      {/* 11 — Related Products */}
      {data.relatedProducts && <ProductRelated {...data.relatedProducts} bg={getNextBg()} />}

      {/* 12 — Local Service Areas (Always gray by definition? Actually, it's injected, let's skip it since it manages its own bg) */}
      {data.productName && <SiteLocationsSection productName={data.productName} />}

      {/* 14 — FAQs (Schema handled by buildProductSchema at page level) */}
      {data.faqs && <SiteFAQSection faqs={data.faqs} injectSchema={false} />}

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
