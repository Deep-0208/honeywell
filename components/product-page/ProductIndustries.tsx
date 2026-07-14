import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IndustryCard } from '@/components/cards/IndustryCard';
import type { IndustriesData } from './types';

/**
 * ProductIndustries — Industries served grid.
 *
 * Section header + 3-column grid using existing IndustryCard component.
 */
export function ProductIndustries({ heading, description, items }: IndustriesData) {
  return (
    <Section aria-labelledby="industries-heading" bg="gray" id="industries">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading
            id="industries-heading"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((ind, idx) => (
            <div key={idx}>
              <IndustryCard
                industryName={ind.name}
                description={ind.description}
                icon={ind.icon}
                href={ind.href}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
