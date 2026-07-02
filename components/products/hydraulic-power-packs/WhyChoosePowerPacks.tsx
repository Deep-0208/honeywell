import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { PILLAR_FEATURES } from '@/data/hydraulic-power-packs/pillar';

export function WhyChoosePowerPacks() {
  return (
    <Section bg="gray" id="why-choose-us" aria-labelledby="why-choose-us-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/images/noise.webp')] opacity-[0.02] mix-blend-overlay" />
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="why-choose-us-heading" className="text-honeywell-navy mb-4 ">
            Why Choose Honeywell&apos;s Power Packs?
          </Heading>
          <p className="text-lg text-brand-steelGray font-body max-w-3xl mx-auto mt-4 text-justify">
            We are a primary hydraulic power pack manufacturer, not an assembler. By machining and testing in-house, we guarantee the reliability of every unit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          {PILLAR_FEATURES.map((feature, idx) => (
            <div key={idx} className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
              <IconBox 
                icon={feature.icon} 
                size="lg" 
                variant="primary" 
                className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
              />
              <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">{feature.title}</Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed text-justify">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
