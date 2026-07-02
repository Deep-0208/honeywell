import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ProductCard } from '@/components/cards/ProductCard';
import { PILLAR_BLOCK_TYPES } from '@/data/hydraulic-cylinders/pillar';

export function CylinderTypesGrid() {

  return (
    <Section bg="gray" id="products" aria-labelledby="cylinder-types-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" underline="center" as="h2" id="cylinder-types-heading" className="mb-4">
            Types of Hydraulic Cylinders
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            We manufacture a comprehensive range of hydraulic cylinder types, each engineered for specific industrial applications and mounting requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLAR_BLOCK_TYPES.map((cyl, idx) => (
            <ProductCard 
              key={idx}
              title={cyl.title}
              description={cyl.description}
              category={cyl.category}
              imageSrc={cyl.imageSrc}
              href={cyl.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
