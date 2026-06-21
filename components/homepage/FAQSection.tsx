

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
    <Section bg="gray" aria-labelledby="faq-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold font-body uppercase tracking-[0.15em] text-honeywell-red mb-3">
            Frequently Asked Questions
          </p>
          <Heading variant="section" as="h2" id="faq-heading">
            Common Questions About Our Hydraulic Equipment
          </Heading>
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
