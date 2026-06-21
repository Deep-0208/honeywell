import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IconBox } from '@/components/ui/IconBox';
import { ShieldCheck, Settings, PenTool, Zap } from 'lucide-react';

export function WhyChoosePowerPacks() {
  return (
    <Section bg="white" id="why-choose-us">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Why Choose Honeywell&apos;s Power Packs?
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            We are a primary hydraulic power pack manufacturer, not an assembler. By machining and testing in-house, we guarantee the reliability of every unit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col">
            <IconBox icon={<PenTool className="w-6 h-6" />} variant="primary" size="lg" className="mb-6" />
            <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">Custom Design</h3>
            <p className="text-[#64748B] font-body">
              Engineered using advanced CAD software for exact fluid dynamic calculation, heat load analysis, and 3D spatial integration perfectly matched to your machine cycle.
            </p>
          </div>

          <div className="flex flex-col">
            <IconBox icon={<Settings className="w-6 h-6" />} variant="primary" size="lg" className="mb-6" />
            <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">Engineering Expertise</h3>
            <p className="text-[#64748B] font-body">
              All custom valve blocks and manifolds are CNC-machined in-house to ensure absolute zero-leak internal galleries and precise control logic.
            </p>
          </div>

          <div className="flex flex-col">
            <IconBox icon={<ShieldCheck className="w-6 h-6" />} variant="primary" size="lg" className="mb-6" />
            <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">Rigorous Testing</h3>
            <p className="text-[#64748B] font-body">
              Every power pack is run on our test bench under simulated maximum load to verify flow rates, pressure relief settings, and thermal stability.
            </p>
          </div>

          <div className="flex flex-col">
            <IconBox icon={<Zap className="w-6 h-6" />} variant="primary" size="lg" className="mb-6" />
            <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">Proven Reliability</h3>
            <p className="text-[#64748B] font-body">
              Engineered with integrated thermal management to prevent fluid overheating. Our power units are built for continuous 24/7 manufacturing without thermal degradation.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}
