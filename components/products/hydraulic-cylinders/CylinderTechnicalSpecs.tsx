import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { SpecTable } from '@/components/tables/SpecTable';
import { Button } from '@/components/ui/Button';
import { Download } from 'lucide-react';

export function CylinderTechnicalSpecs() {
  const specs = [
    { parameter: "Bore Diameter", value: "40mm to 300mm (Custom sizes available)" },
    { parameter: "Rod Diameter", value: "20mm to 200mm" },
    { parameter: "Stroke Length", value: "Up to 3000mm" },
    { parameter: "Working Pressure", value: "160 Bar / 210 Bar / up to 350 Bar" },
    { parameter: "Test Pressure", value: "1.5x Working Pressure" },
    { parameter: "Barrel Material", value: "ST52 / E355 grade cold-drawn seamless" },
    { parameter: "Barrel Finish", value: "Internal micro-honed to Ra 0.2 - 0.4 µm" },
    { parameter: "Rod Material", value: "EN8 / EN19 / EN24 alloy steel" },
    { parameter: "Rod Finish", value: "Hard Chrome Plated (20-25 microns), h8" },
    { parameter: "Seal Kits", value: "Parker / Hallite equivalent PU/PTFE" },
    { parameter: "Mounting Options", value: "Flange, Clevis, Trunnion, Foot, Tie-Rod" },
    { parameter: "Operating Temp", value: "-20°C to +80°C (High-temp available)" },
    { parameter: "Testing Standard", value: "100% hydrostatically tested" },
    { parameter: "Custom Sizes", value: "Fully available on request" }
  ];

  return (
    <Section bg="gray" id="specifications">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-6">
              Technical Specifications & Capabilities
            </h2>
            <p className="text-lg text-[#334155] font-body mb-6">
              As a leading hydraulic cylinder manufacturer, we offer a vast range of technical specifications to meet the exact demands of your industry. Our engineering team can work with your existing CAD drawings or design a completely new cylinder based on your load calculations.
            </p>
            
            <div className="bg-white p-6 rounded-xl border border-[#E2E8F0] shadow-sm mb-8">
              <h3 className="font-bold text-[#0D1B5C] mb-2 font-display">Need a custom dimension?</h3>
              <p className="text-sm text-[#64748B] mb-4">
                We specialize in drawing-to-delivery services for non-standard requirements.
              </p>
              <Button href="/request-quote/" variant="primary">
                REQUEST CUSTOM QUOTE
              </Button>
            </div>
            
            <Button href="/resources/downloads/" variant="outline" className="w-full justify-center">
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD COMPLETE SPEC SHEET (PDF)
            </Button>
          </div>

          <div className="lg:col-span-7">
            <SpecTable rows={specs} title="Standard Specification Range" />
          </div>

        </div>
      </Container>
    </Section>
  );
}
