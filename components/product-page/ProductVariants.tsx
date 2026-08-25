import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { CheckCircle2 } from 'lucide-react';
import type { VariantsData } from './types';

/**
 * ProductVariants — Variant cards grid.
 *
 * 3-column grid with IconBox, title, description, and checklist highlights.
 * Hover effects: shadow-float, -translate-y-1.5, red top-border.
 */
export function ProductVariants({ heading, description, items , bg = 'gray' }: VariantsData & { bg?: 'white' | 'gray' }) {
  return (
    <Section aria-labelledby="product-variants-heading" bg={bg} id="product-variants">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading
            id="product-variants-heading"
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((variant, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 md:p-8 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red flex flex-col"
            >
              <div className="mb-6">
                <IconBox icon={variant.icon} variant="secondary" size="lg" />
              </div>
              <Heading
                variant="subsection"
                as="h3"
                className="text-xl font-display font-bold text-honeywell-navy mb-3"
              >
                {variant.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed mb-6 flex-grow text-justify">
                {variant.description}
              </p>
              <ul className="space-y-2.5 border-t border-slate-200 pt-5">
                {variant.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
                    className="flex items-start gap-2.5 text-sm text-brand-darkSlate font-body"
                  >
                    <CheckCircle2 className="w-4 h-4 text-honeywell-red mt-0.5 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
