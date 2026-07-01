import React from 'react';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { FAQData } from '@/data/locations/gujarat-facility'; // Or use global FAQ type

export function FAQSection({ data, bg = 'white' }: { data: any; bg?: 'white' | 'gray' }) {
  // We can pass the bg through if we modify SiteFAQSection, or we just let SiteFAQSection handle it (it defaults to white).
  // The user requested to refer to the homepage, which uses SiteFAQSection natively.
  return (
    <SiteFAQSection 
      faqs={data} 
      title="Frequently Asked Questions"
      description="Common questions about our hydraulic equipment manufacturing, customization capabilities, and industrial supply in this region."
      injectSchema={false} // Assuming schema is handled at the page level graph
    />
  );
}
