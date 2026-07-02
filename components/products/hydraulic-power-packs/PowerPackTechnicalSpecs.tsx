import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { SpecTable } from '@/components/tables/SpecTable';
import { PILLAR_SPECS } from '@/data/hydraulic-power-packs/pillar';

export function PowerPackTechnicalSpecs() {
  return (
    <Section bg="white" id="technical-specifications" aria-labelledby="tech-specs-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <Heading variant="section" underline="left" as="h2" id="tech-specs-heading" className="mb-4">
              Technical Capabilities
            </Heading>
            <p className="text-lg text-brand-steelGray font-body mb-6 text-justify">
              As a full-capability hydraulic power pack manufacturer, we can engineer systems ranging from 0.5 HP micro units to massive 150+ HP centralized factory installations.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start text-brand-steelGray font-body">
                <span className="text-honeywell-red mr-3 mt-1">✓</span>
                <span>Pressures up to 350+ Bar</span>
              </li>
              <li className="flex items-start text-brand-steelGray font-body">
                <span className="text-honeywell-red mr-3 mt-1">✓</span>
                <span>Flow rates up to 300+ LPM</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <SpecTable rows={PILLAR_SPECS} title="Standard Specification Range" />
          </div>

        </div>
      </Container>
    </Section>
  );
}
