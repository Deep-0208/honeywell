import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { FaTools, FaCogs, FaVial, FaTruck } from 'react-icons/fa';

export function PowerPackManufacturingProcess() {
  return (
    <Section bg="gray" id="manufacturing-process" aria-labelledby="manufacturing-process-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" underline="center" as="h2" id="manufacturing-process-heading" className="mb-4">
            The Honeywell Manufacturing Process
          </Heading>
          <p className="text-lg text-brand-steelGray font-body">
            What makes us a leading hydraulic power pack manufacturer? Our uncompromising approach to the 4-step manufacturing lifecycle. Every unit is engineered, fabricated, piped, wired, and load-tested at our Ahmedabad facility.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[32px] left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" aria-hidden="true" />

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<FaTools className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">1. Custom Design</Heading>
            <p className="text-brand-steelGray font-body text-sm">
              Our engineers calculate flow rates, pressure drops, and heat dissipation to create a 3D CAD schematic tailored to your exact cycle requirements.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<FaCogs className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">2. Precision Assembly</Heading>
            <p className="text-brand-steelGray font-body text-sm">
              Heavy-duty reservoirs are fabricated and coated, manifolds are CNC machined, and premium IE3 motors and pumps are perfectly aligned.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<FaVial className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">3. Rigorous Testing</Heading>
            <p className="text-brand-steelGray font-body text-sm">
              Every power pack is hooked to our simulated test bench to verify maximum load capacity, flow rates, pressure relief settings, and leak-free operation.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group cursor-default">
            <div className="bg-white rounded-lg mb-6 relative z-10 transition-transform duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-110">
              <IconBox icon={<FaTruck className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <Heading variant="card" as="h3" className="mb-3">4. Secure Delivery</Heading>
            <p className="text-brand-steelGray font-body text-sm">
              Power units are thoroughly cleaned, painted, securely crated with all electrical diagrams and BOMs, and dispatched PAN-India.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
