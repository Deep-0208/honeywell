import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { FAQAccordion, type FAQ } from '@/components/faq/FAQAccordion';
import { Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export interface SiteFAQSectionProps {
  faqs: FAQ[];
  title?: string;
  description?: string;
  injectSchema?: boolean;
}

/**
 * SiteFAQSection Component
 * 
 * Standardized site-wide FAQ layout featuring a two-column design:
 * Left column: Heading, description, and contact card.
 * Right column: The FAQ Accordion.
 */
export function SiteFAQSection({
  faqs,
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about our custom hydraulic cylinder manufacturing process and capabilities.",
  injectSchema = true,
}: SiteFAQSectionProps) {
  return (
    <Section bg="white" id="faqs" aria-labelledby="faqs-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <Heading variant="section" as="h2" id="faqs-heading" className="text-honeywell-navy mb-4">
              {title}
            </Heading>
            <p className="text-brand-steelGray font-body text-lg mb-8 leading-relaxed ">
              {description}
            </p>
            
            <div className="bg-brand-surfaceGray rounded-xl border border-slate-200 p-6">
              <h3 className="text-xl font-display font-bold text-honeywell-navy mb-2">Still have questions?</h3>
              <p className="text-sm text-brand-steelGray font-body mb-6 ">
                Our engineering team is ready to discuss your specific hydraulic requirements.
              </p>
              <div className="space-y-4">
                <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center text-honeywell-red font-semibold font-body text-sm hover:text-honeywell-navy transition-colors">
                  <Phone className="w-5 h-5 mr-3 shrink-0" aria-hidden="true" />
                  {COMPANY_INFO.phone.replace(/-/g, ' ')}
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center text-honeywell-navy font-semibold font-body text-sm hover:text-honeywell-red transition-colors">
                  <Mail className="w-5 h-5 mr-3 shrink-0" aria-hidden="true" />
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:col-span-8">
            <FAQAccordion faqs={faqs} injectSchema={injectSchema} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
