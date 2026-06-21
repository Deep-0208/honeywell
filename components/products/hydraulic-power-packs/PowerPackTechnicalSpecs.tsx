import React from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SpecTable } from '@/components/tables/SpecTable';
import { Download } from 'lucide-react';

export function PowerPackTechnicalSpecs() {
  const specs = [
    { parameter: "Electric Motor Power", value: "0.5 HP to 150+ HP (IE2 / IE3 High Efficiency)" },
    { parameter: "Pump Flow Rate (Displacement)", value: "1 LPM to 300+ LPM" },
    { parameter: "Operating Pressure", value: "Standard: 160 Bar / 210 Bar. Heavy-Duty: Up to 350+ Bar" },
    { parameter: "Reservoir Capacity", value: "10 Liters to 2000+ Liters (Custom fabrication available)" },
    { parameter: "Pump Types", value: "Gear, Vane, Radial Piston, Axial Piston" },
    { parameter: "Valve Architecture", value: "CETOP 3 (NG6), CETOP 5 (NG10), Proportional, Cartridge Logic" },
    { parameter: "Cooling Options", value: "Air-Blast Oil Coolers, Shell & Tube Heat Exchangers" }
  ];

  return (
    <Section bg="gray" id="specifications">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
              Technical Specifications
            </h2>
            <p className="text-lg text-brand-darkSlate font-body mb-6">
              While custom engineering is our specialty, our power packs generally fall within high-performance parameters to meet the exact demands of your industry. Our engineering team designs the reservoir dimensions, motor horsepower, pump displacement, and valve logic specifically to match your machine&apos;s unique cycle profile.
            </p>
            
          </div>

          <div className="lg:col-span-7">
            <SpecTable rows={specs} title="Standard Specification Range" />
          </div>

        </div>
      </Container>
    </Section>
  );
}
