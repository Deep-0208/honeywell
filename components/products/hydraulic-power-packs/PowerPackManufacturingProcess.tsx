import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IconBox } from '@/components/ui/IconBox';
import { PenTool, Cog, FlaskConical, Truck } from 'lucide-react';

export function PowerPackManufacturingProcess() {
  return (
    <Section bg="white" id="manufacturing-process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            The Honeywell Manufacturing Process
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            What makes us a leading hydraulic power pack manufacturer? Our uncompromising approach to the 4-step manufacturing lifecycle. Every unit is engineered, fabricated, piped, wired, and load-tested at our Ahmedabad facility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-[#E2E8F0] -z-10" />

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-full mb-6">
              <IconBox icon={<PenTool className="w-6 h-6 text-white" />} variant="primary" size="lg" />
            </div>
            <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">1. Custom Design</h3>
            <p className="text-[#64748B] font-body text-sm">
              Our engineers calculate flow rates, pressure drops, and heat dissipation to create a 3D CAD schematic tailored to your exact cycle requirements.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-full mb-6">
              <IconBox icon={<Cog className="w-6 h-6 text-white" />} variant="primary" size="lg" />
            </div>
            <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">2. Precision Assembly</h3>
            <p className="text-[#64748B] font-body text-sm">
              Heavy-duty reservoirs are fabricated and coated, manifolds are CNC machined, and premium IE3 motors and pumps are perfectly aligned.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-full mb-6">
              <IconBox icon={<FlaskConical className="w-6 h-6 text-white" />} variant="primary" size="lg" />
            </div>
            <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">3. Rigorous Testing</h3>
            <p className="text-[#64748B] font-body text-sm">
              Every power pack is hooked to our simulated test bench to verify maximum load capacity, flow rates, pressure relief settings, and leak-free operation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-full mb-6">
              <IconBox icon={<Truck className="w-6 h-6 text-white" />} variant="primary" size="lg" />
            </div>
            <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3">4. Secure Delivery</h3>
            <p className="text-[#64748B] font-body text-sm">
              Power units are thoroughly cleaned, painted, securely crated with all electrical diagrams and BOMs, and dispatched PAN-India.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
