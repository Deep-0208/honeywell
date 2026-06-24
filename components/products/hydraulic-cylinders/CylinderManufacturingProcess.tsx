import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IconBox } from '@/components/ui/IconBox';
import { FaTools, FaCogs, FaVial, FaTruck } from 'react-icons/fa';

export function CylinderManufacturingProcess() {
  return (
    <Section bg="white" id="manufacturing-process">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            The Honeywell Manufacturing Process
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            What makes us a leading hydraulic cylinder manufacturer? Our uncompromising approach to the 4-step manufacturing lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 -z-10" />

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-full mb-6">
              <IconBox icon={<FaTools className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">1. Custom Design</h3>
            <p className="text-brand-steelGray font-body text-sm">
              Our engineers analyze your load calculations, working pressure, and mounting needs to create a tailored CAD blueprint.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-full mb-6">
              <IconBox icon={<FaCogs className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">2. Precision Manufacture</h3>
            <p className="text-brand-steelGray font-body text-sm">
              CNC machining, micro-honing barrels to a mirror finish, and hard-chrome plating rods to exact h8 tolerances.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-full mb-6">
              <IconBox icon={<FaVial className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">3. Rigorous Testing</h3>
            <p className="text-brand-steelGray font-body text-sm">
              Every fully assembled cylinder is subjected to 100% hydrostatic pressure testing at 1.5x its rated working capacity.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-white p-2 rounded-full mb-6">
              <IconBox icon={<FaTruck className="w-6 h-6" />} variant="primary" size="lg" />
            </div>
            <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">4. Secure Delivery</h3>
            <p className="text-brand-steelGray font-body text-sm">
              Cylinders are thoroughly cleaned, painted, safely packaged, and dispatched to your facility PAN-India.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
