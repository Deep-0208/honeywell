import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { IconBox } from '@/components/ui/IconBox';
import { ArrowRight } from 'lucide-react';
import type { ServicesData } from './types';

/**
 * ProductServices — Engineering Advantage / Related Services.
 *
 * Section header, 2-column grid of horizontal service cards
 * (icon + title + description), and bottom centered CTA button.
 */
export function ProductServices({
  heading = 'The Engineering Advantage',
  description,
  items,
  cta,
}: ServicesData) {
  return (
    <Section aria-labelledby="engineering-advantage-heading" bg="white" id="engineering-advantage">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading
            id="engineering-advantage-heading"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((service, idx) => (
            <div
              key={idx}
              className="flex gap-5 bg-brand-surfaceGray rounded-xl border border-slate-200 p-7 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red"
            >
              <IconBox
                icon={service.icon}
                variant="primary"
                size="md"
                className="shrink-0 mt-1"
              />
              <div>
                <Heading
                  variant="subsection"
                  as="h3"
                  className="text-lg font-display font-bold text-honeywell-navy mb-2"
                >
                  {service.title}
                </Heading>
                <p className="text-sm text-brand-steelGray font-body leading-relaxed text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            href={cta.href}
            variant="secondary"
            size="lg"
            className="font-bold"
          >
            {cta.label} <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
