import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ProductCard } from '@/components/cards/ProductCard';
import { powerPackTypes } from '@/data/hydraulic-power-packs';

export function PowerPackTypesGrid() {
  return (
    <Section bg="gray" id="products" aria-labelledby="products-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" underline="center" as="h2" id="products-heading" className="mb-4">
            Types of Hydraulic Power Packs
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            As a dedicated hydraulic power pack solutions provider, we build distinct architectures based on your required duty cycle, footprint, and operating environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {powerPackTypes.map((product, idx) => (
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
