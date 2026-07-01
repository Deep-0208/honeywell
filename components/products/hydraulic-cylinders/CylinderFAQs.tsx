'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { FAQAccordion } from '@/components/faq/FAQAccordion';
import { PILLAR_FAQS } from '@/data/hydraulic-cylinders/pillar';

export function CylinderFAQs() {

  return (
    <Section bg="white" id="faqs" aria-labelledby="faqs-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <Heading variant="section" underline="center" as="h2" id="faqs-heading" className="mb-4">
              Frequently Asked Questions
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-6">
              Find answers to common questions about our custom hydraulic cylinder manufacturing process and capabilities.
            </p>
            <div className="bg-brand-surfaceGray p-6 rounded-xl border border-slate-200">
              <Heading variant="card" as="h3" className="mb-2">Still have questions?</Heading>
              <p className="text-sm text-brand-steelGray mb-4">
                Our engineering team is ready to discuss your specific hydraulic requirements.
              </p>
              <a href="tel:+919924343873" className="block text-honeywell-red font-bold hover:underline mb-2">
                📞 +91 99243 43873
              </a>
              <a href="mailto:sales@honeywellhydraulics.com" className="block text-honeywell-navy font-bold hover:underline">
                ✉️ sales@honeywellhydraulics.com
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <FAQAccordion 
              faqs={PILLAR_FAQS} 
              injectSchema={false} 
            />
          </div>

        </div>
      </Container>
    </Section>
  );
}
