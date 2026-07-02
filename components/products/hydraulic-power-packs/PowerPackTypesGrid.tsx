import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ProductCard } from '@/components/cards/ProductCard';
import { PILLAR_BLOCK_TYPES } from '@/data/hydraulic-power-packs/pillar';

export function PowerPackTypesGrid() {
  return (
    <Section bg="gray" id="types" aria-labelledby="power-pack-types-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" underline="center" as="h2" id="power-pack-types-heading" className="mb-4">
            Industrial Hydraulic Power Packs
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            From miniature DC units to massive 3-phase plant installations, we engineer power packs for every industrial application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLAR_BLOCK_TYPES.map((product, idx) => (
            <ProductCard 
              key={idx}
              title={product.title}
              description={product.description}
              href={product.href}
              imageSrc={product.image}
              category="Power Pack"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
