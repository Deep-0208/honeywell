

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { homepageFAQs } from '@/data/homepage';

/**
 * FAQSection — Section 10
 *
 * FAQPage schema injection via FAQAccordion injectSchema={true}.
 * Captures long-tail question keywords. Builds E-E-A-T.
 *
 * Components: FAQAccordion, Section, Container, Heading
 * @see HOMEPAGE_ARCHITECTURE.md § Section 10
 */
export function FAQSection() {
  return (
    <Section bg="white" aria-labelledby="faq-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" as="h2" id="faq-heading" className="text-honeywell-navy mb-4">
            Common Questions About Our Hydraulic Equipment
          </Heading>
          <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true"></div>
        </div>

        {/* FAQAccordion — schema disabled here because the homepage
            @graph in page.tsx already includes FAQPage schema */}
        <div className="max-w-3xl mx-auto">
          <FAQAccordion faqs={homepageFAQs} injectSchema={false} />
        </div>
      </Container>
    </Section>
  );
}
