'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { FAQAccordion } from '@/components/faq/FAQAccordion';

export function PowerPackFAQs() {
  const faqs = [
    {
      question: "Do you manufacture custom hydraulic power packs for specific machines?",
      answer: "Yes. While we offer standard industrial units, our primary expertise is custom engineering. We design the reservoir dimensions, motor horsepower, pump displacement, and valve logic specifically to match your machine's unique cycle profile."
    },
    {
      question: "Are you a trading company or a hydraulic power pack manufacturer?",
      answer: "We are a direct hydraulic power pack company and manufacturer. Every power pack is engineered, fabricated, piped, wired, and load-tested at our manufacturing facility in Ahmedabad, Gujarat."
    },
    {
      question: "What is the delivery time for an industrial power pack?",
      answer: "Standard 3-phase hydraulic power packs are typically assembled, tested, and dispatched within 10 to 15 days. Highly complex, custom high-low circuits or massive reservoir systems may require 20 to 30 days depending on the engineering scope."
    },
    {
      question: "Can you repair my existing hydraulic power pack?",
      answer: "Yes. Our Hydraulic System Retrofitting division specializes in overhauling, upgrading, and repairing aging power units, replacing failed pumps and redesigning inefficient valve manifolds."
    },
    {
      question: "Do you supply power packs outside of Gujarat?",
      answer: "Yes. We are a recognized hydraulic power pack exporter and PAN-India supplier. We securely crate and ship our power units to OEMs and manufacturing plants across Maharashtra, Rajasthan, South India, and international markets."
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
              Find answers to common questions about our custom hydraulic power pack manufacturing process and capabilities.
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
