import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { SpecTable } from '@/components/tables/SpecTable';
import { powerPackSpecs } from '@/data/hydraulic-power-packs';

export function PowerPackTechnicalSpecs() {
  return (
    <Section bg="white" id="specifications" aria-labelledby="specifications-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <Heading variant="section" underline="center" as="h2" id="specifications-heading" className="mb-6">
              Technical Specifications
            </Heading>
            <p className="text-lg text-brand-darkSlate font-body mb-6">
              While custom engineering is our specialty, our power packs generally fall within high-performance parameters to meet the exact demands of your industry. Our engineering team designs the reservoir dimensions, motor horsepower, pump displacement, and valve logic specifically to match your machine&apos;s unique cycle profile.
            </p>
            
          </div>

          <div className="lg:col-span-7">
            <SpecTable rows={powerPackSpecs} title="Standard Specification Range" />
          </div>

        </div>
      </Container>
    </Section>
  );
}
