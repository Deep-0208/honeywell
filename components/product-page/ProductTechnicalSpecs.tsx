import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { SpecTable } from '@/components/tables/SpecTable';
import { ArrowRight } from 'lucide-react';
import type { TechnicalSpecsData } from './types';

/**
 * ProductTechnicalSpecs — Two-column specs layout.
 *
 * Left: heading, description, and dual CTAs.
 * Right: SpecTable component.
 */
export function ProductTechnicalSpecs({ heading = 'Technical Specifications',
  description,
  primaryCta,
  secondaryCta,
  tableTitle,
  rows,
  bg = 'white' }: TechnicalSpecsData & { bg?: 'white' | 'gray' }) {
  return (
    <Section aria-labelledby="technical-specifications-heading" bg={bg} id="technical-specifications">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <Heading
              id="technical-specifications-heading"
              variant="section"
              as="h2"
              underline="left"
              className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4"
            >
              {heading}
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-8 text-justify">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href={primaryCta.href}
                variant="primary"
                size="md"
                className="font-bold"
              >
                {primaryCta.label} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                href={secondaryCta.href}
                variant="outline"
                size="md"
              >
                {secondaryCta.label}
              </Button>
            </div>
          </div>
          <SpecTable
            title={tableTitle}
            rows={rows}
          />
        </div>
      </Container>
    </Section>
  );
}
