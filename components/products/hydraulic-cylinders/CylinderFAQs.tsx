'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FAQAccordion } from '@/components/faq/FAQAccordion';

export function CylinderFAQs() {
  const faqs = [
    {
      question: "Do you manufacture custom hydraulic cylinders?",
      answer: "Yes, custom manufacturing is our primary focus. We design and build hydraulic cylinders to your exact specifications, analyzing cycle rates, environmental exposure, side-loading possibilities, and fluid compatibility to ensure optimal performance."
    },
    {
      question: "What is the maximum bore size and stroke length you can manufacture?",
      answer: "We manufacture custom hydraulic cylinders with bore sizes ranging from 40mm up to 300mm, and stroke lengths reaching up to 3000mm. We can also accommodate special requirements beyond standard dimensions."
    },
    {
      question: "What materials are used in your hydraulic cylinders?",
      answer: "Our cylinders are constructed using premium materials: cold-drawn ST52/E355 grade seamless steel tubes for barrels, EN8/EN19/EN24 high-tensile alloy steel for rods (hard chrome plated to 20-25 microns), and imported polyurethane/PTFE seal kits equivalent to Parker or Hallite."
    },
    {
      question: "Are your cylinders tested before delivery?",
      answer: "Yes, every single industrial hydraulic cylinder we produce undergoes a rigorous quality assurance process, including 100% hydrostatic pressure testing at 1.5x its rated working pressure before dispatch to ensure zero out-of-the-box leaks."
    }
  ];

  return (
    <Section bg="white" id="faqs">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-brand-steelGray font-body mb-6">
              Find answers to common questions about our custom hydraulic cylinder manufacturing process and capabilities.
            </p>
            <div className="bg-brand-surfaceGray p-6 rounded-xl border border-slate-200">
              <h3 className="font-bold text-honeywell-navy mb-2 font-display">Still have questions?</h3>
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
              faqs={faqs} 
              injectSchema={false} 
            />
          </div>

        </div>
      </Container>
    </Section>
  );
}
