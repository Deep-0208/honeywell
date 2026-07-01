

import React from 'react';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { homepageFAQs } from '@/data/homepage';

/**
 * FAQSection — Section 10
 *
 * FAQPage schema injection via FAQAccordion injectSchema={true}.
 * Captures long-tail question keywords. Builds E-E-A-T.
 *
 * Components: SiteFAQSection
 * @see HOMEPAGE_ARCHITECTURE.md § Section 10
 */
export function FAQSection() {
  return (
    <SiteFAQSection 
      faqs={homepageFAQs} 
      title="Frequently Asked Questions" 
      description="Common questions about our hydraulic equipment, custom manufacturing, and ordering process."
      injectSchema={false} 
    />
  );
}
