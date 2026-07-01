import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { FaShieldAlt, FaCogs, FaTools, FaBolt } from 'react-icons/fa';

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
          <p className="text-lg text-brand-steelGray font-body max-w-3xl mx-auto mt-4">
            We are a primary hydraulic power pack manufacturer, not an assembler. By machining and testing in-house, we guarantee the reliability of every unit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
            <IconBox 
              icon={<FaTools className="w-6 h-6" />} 
              size="lg" 
              variant="primary" 
              className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
            />
            <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">Custom Design</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed">
              Engineered using advanced CAD software for exact fluid dynamic calculation, heat load analysis, and 3D spatial integration perfectly matched to your machine cycle.
            </p>
          </div>

          <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
            <IconBox 
              icon={<FaCogs className="w-6 h-6" />} 
              size="lg" 
              variant="primary" 
              className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
            />
            <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">Engineering Expertise</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed">
              All custom valve blocks and manifolds are CNC-machined in-house to ensure absolute zero-leak internal galleries and precise control logic.
            </p>
          </div>

          <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
            <IconBox 
              icon={<FaShieldAlt className="w-6 h-6" />} 
              size="lg" 
              variant="primary" 
              className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
            />
            <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">Rigorous Testing</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed">
              Every power pack is run on our test bench under simulated maximum load to verify flow rates, pressure relief settings, and thermal stability.
            </p>
          </div>

          <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
            <IconBox 
              icon={<FaBolt className="w-6 h-6" />} 
              size="lg" 
              variant="primary" 
              className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
            />
            <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">Proven Reliability</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed">
              Engineered with integrated thermal management to prevent fluid overheating. Our power units are built for continuous 24/7 manufacturing without thermal degradation.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}
