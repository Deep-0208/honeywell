import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { SpecTable } from '@/components/tables/SpecTable';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';
import { PILLAR_SPECS } from '@/data/hydraulic-cylinders/pillar';
export function CylinderTechnicalSpecs() {

  return (
    <Section bg="white" id="specifications" aria-labelledby="specs-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <Heading variant="section" underline="center" as="h2" id="specs-heading" className="mb-6">
              Technical Specifications & Capabilities
            </Heading>
            <p className="text-lg text-brand-darkSlate font-body mb-6">
              As a leading hydraulic cylinder manufacturer, we offer a vast range of technical specifications to meet the exact demands of your industry. Our engineering team can work with your existing CAD drawings or design a completely new cylinder based on your load calculations.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-8">
              <Heading variant="card" as="h3" className="mb-2">Need a custom dimension?</Heading>
              <p className="text-sm text-brand-steelGray mb-4">
                We specialize in drawing-to-delivery services for non-standard requirements.
              </p>
              <Button href="/request-quote" variant="primary">
                REQUEST CUSTOM QUOTE
              </Button>
            </div>
            
          </div>

          <div className="lg:col-span-7">
            <SpecTable rows={PILLAR_SPECS} title="Standard Specification Range" />
          </div>

        </div>
      </Container>
    </Section>
  );
}
