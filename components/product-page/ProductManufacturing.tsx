import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';
import { ArrowRight, MessageCircle } from 'lucide-react';
import type { ManufacturingData } from './types';

/**
 * ProductManufacturing — Manufacturing & Quality Process.
 *
 * 4-column process timeline with connecting line (desktop),
 * icon hover scale animation, and mid-page navy CTA banner
 * with skewed red accent.
 */
export function ProductManufacturing({ heading,
  description,
  steps,
  midCta,
  bg = 'white' }: ManufacturingData & { bg?: 'white' | 'gray' }) {
  const gridColsClass =
    steps.length === 2
      ? 'lg:grid-cols-2'
      : steps.length === 3
      ? 'lg:grid-cols-3'
      : 'lg:grid-cols-4';

  const lineOffset =
    steps.length === 2
      ? '25%'
      : steps.length === 3
      ? '16.6%'
      : '12.5%';

  return (
    <Section aria-labelledby="manufacturing-process-heading" bg={bg} id="manufacturing-process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading
            id="manufacturing-process-heading"
            variant="section"
            as="h2"
            underline="center"
            className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4"
          >
            {heading}
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-center">
            {description}
          </p>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 ${gridColsClass} gap-4 sm:gap-6 lg:gap-8 relative mb-16 w-full`}>
          {/* Connecting line for desktop */}
          <div
            className="hidden lg:block absolute top-[32px] h-0.5 bg-slate-200 z-0"
            style={{ left: lineOffset, right: lineOffset }}
            aria-hidden="true"
          />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
                <IconBox icon={step.icon} variant="primary" size="lg" />
              </div>
              <Heading variant="card" as="h3" className="mb-3">
                {step.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm text-justify">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="bg-honeywell-navy rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4"
            aria-hidden="true"
          />
          <Heading
            variant="subsection"
            as="h3"
            className="text-2xl md:text-3xl font-display font-bold text-white mb-4 relative z-10"
          >
            {midCta.heading}
          </Heading>
          <p className="text-brand-borderGray font-body max-w-2xl mx-auto mb-6 relative z-10 text-justify">
            {midCta.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Button
              href={midCta.primaryCta.href}
              variant="primary"
              size="lg"
              className="font-bold"
            >
              {midCta.primaryCta.label} <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            {midCta.whatsappLabel && (
              <a
                href="https://wa.me/919924343873"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-medium hover:text-[#25D366] transition-colors font-body"
                aria-label="WhatsApp for inquiry"
              >
                <MessageCircle className="w-5 h-5" /> {midCta.whatsappLabel}
              </a>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
