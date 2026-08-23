import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type { EngineeringData } from './types';

/**
 * ProductEngineering — Engineering considerations section.
 *
 * Optional section positioned between Industries and Manufacturing.
 * Stacked cards with letter labels (A, B, C...) for engineering guidance,
 * selection criteria, design recommendations, and installation notes.
 */
export function ProductEngineering({ heading, description, items }: EngineeringData) {
  return (
    <Section aria-labelledby="engineering-considerations-heading" bg="white" id="engineering-considerations">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading
            id="engineering-considerations-heading"
            variant="section"
            as="h2"
            underline="center"
            className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6"
          >
            {heading}
          </Heading>
          {description && (
            <div className="text-brand-darkSlate font-body text-lg mb-8 text-justify">
              {description}
            </div>
          )}

          <div className="space-y-6 sm:space-y-8">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="bg-brand-surfaceGray p-5 sm:p-8 rounded-xl border border-slate-200"
              >
                <Heading
                  variant="subsection"
                  as="h3"
                  className="text-lg sm:text-xl font-bold text-honeywell-navy mb-3 flex items-center gap-3"
                >
                  <span className="inline-flex items-center justify-center min-w-[2rem] h-8 px-2.5 rounded-lg bg-honeywell-navy text-white text-xs font-bold uppercase tracking-wide whitespace-nowrap shrink-0 shadow-xs">
                    {item.label}
                  </span>
                  <span>{item.title}</span>
                </Heading>
                <p className="text-brand-darkSlate text-sm leading-relaxed mt-2 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
