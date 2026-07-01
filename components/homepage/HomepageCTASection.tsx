

import React from 'react';
import { CTA } from '@/components/ui/CTA';

/**
 * HomepageCTASection — Section 11
 *
 * Final conversion opportunity. Uses existing CTA component
 * with zero customization needed.
 *
 * Components: CTA
 * @see HOMEPAGE_ARCHITECTURE.md § Section 11
 */
export function HomepageCTASection() {
  return (
    <div>
      <CTA
        title="Ready to Discuss Your Hydraulic Requirements?"
        description="Our engineering team in Ahmedabad is ready to review your specifications. Factory-direct pricing. 7–15 day delivery across India."
        primaryCtaText="Request a Quote"
        primaryCtaHref="/request-quote"
        secondaryCtaText="Call +91 99243 43873"
        secondaryCtaHref="tel:+91-9924343873"
      />
    </div>
  );
}
