import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function PowerPackOverview() {
  return (
    <Section bg="white" id="overview">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            What is a Hydraulic Power Pack?
          </h2>
          
          <div className="prose prose-lg prose-slate max-w-none font-body">
            <p className="text-brand-darkSlate mb-6">
              A hydraulic power pack (also known as a hydraulic power unit or HPU) is the self-contained heartbeat of any hydraulic automation system. It is a fully integrated fluid power generation unit designed to convert primary electrical or mechanical energy into hydrostatic energy (pressurized fluid).
            </p>
            
            <p className="text-brand-darkSlate mb-6">
              In industrial manufacturing, hydraulic power packs serve as the primary prime movers. When your machinery requires a hydraulic cylinder to lift a 5-ton elevator, or when a press machine needs to exert 500 tons of clamping force, the power pack is responsible for delivering the necessary volume of hydraulic fluid at the exact required pressure to achieve that mechanical work.
            </p>
            
            <p className="text-brand-darkSlate">
              As a leading <strong>hydraulic power pack manufacturer in India</strong>, Honeywell Hydraulics does not simply assemble generic parts. We custom-engineer industrial hydraulic power packs optimized for your specific factory environment. Whether your facility operates continuous 24/7 shifts requiring massive fluid reservoirs for heat dissipation, or you need highly compact units for specialized automation cells, our engineering team designs solutions that maximize uptime and eliminate catastrophic pump failures.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
