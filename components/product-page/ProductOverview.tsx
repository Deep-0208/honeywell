import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type { OverviewData } from './types';

/**
 * ProductOverview — "What Are X?" section.
 *
 * Centered max-w-4xl text section with H2 + underline.
 * Content is rich JSX (ReactNode) allowing internal links, bold text, etc.
 */
export function ProductOverview({ heading, content , bg = 'white' }: OverviewData & { bg?: 'white' | 'gray' }) {
  return (
    <Section aria-labelledby="overview-heading" bg={bg} id="overview">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading
            id="overview-heading"
            variant="section"
            as="h2"
            underline="center"
            className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6 text-center"
          >
            {heading}
          </Heading>
          <div className="space-y-5 text-brand-darkSlate font-body text-lg leading-relaxed">
            {content}
          </div>
        </div>
      </Container>
    </Section>
  );
}
