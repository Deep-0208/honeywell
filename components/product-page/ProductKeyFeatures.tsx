import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import type { KeyFeaturesData } from './types';

/**
 * ProductKeyFeatures — Feature cards grid.
 *
 * 3-column grid with IconBox, optional step numbers, title + description.
 * Hover effects: shadow-float, -translate-y-1.5, red top-border.
 */
export function ProductKeyFeatures({
  heading,
  description,
  items,
  showStepNumbers = false,
}: KeyFeaturesData) {
  return (
    <Section aria-labelledby="key-features-heading" bg="gray" id="key-features">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading
            id="key-features-heading"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 md:p-8 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red group"
            >
              <div className="flex items-center gap-4 mb-5">
                <IconBox icon={item.icon} variant="primary" size="md" />
                {showStepNumbers && (
                  <span className="text-sm font-mono font-bold text-honeywell-red">
                    Step {String(idx + 1).padStart(2, '0')}
                  </span>
                )}
              </div>
              <Heading
                variant="subsection"
                as="h3"
                className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors"
              >
                {item.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
