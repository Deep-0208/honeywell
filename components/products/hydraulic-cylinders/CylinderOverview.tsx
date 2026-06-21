import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';

export function CylinderOverview() {
  return (
    <Section bg="white" id="overview">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-6">
            Introduction to Industrial Hydraulic Cylinders
          </h2>
          
          <div className="prose prose-lg prose-slate max-w-none font-body">
            <p className="text-brand-darkSlate mb-6">
              As a premier <strong>hydraulic cylinder manufacturer in Ahmedabad, Gujarat</strong>, Honeywell Hydraulics specializes in the design, engineering, and fabrication of heavy-duty industrial hydraulic cylinders. A hydraulic cylinder is the critical mechanical actuator that converts the hydrostatic energy of pressurized hydraulic fluid into linear force and motion. In demanding industrial environments, the reliability of your machinery depends entirely on the precision and durability of these cylinders. Whether you are lifting multi-ton loads in a steel mill or applying precise pressure in a plastic injection moulding machine, our cylinders are engineered to perform flawlessly under the most extreme conditions.
            </p>
            
            <p className="text-brand-darkSlate mb-6">
              Unlike off-the-shelf components, custom hydraulic cylinders require a deep understanding of fluid dynamics, load bearing capabilities, and operational metallurgy. We manufacture cylinders that are specifically tailored to your exact operational parameters. Our engineers analyze your requirements—factoring in cycle rates, environmental exposure, side-loading possibilities, and fluid compatibility—to design a cylinder that will maximize your machine&apos;s uptime. Our state-of-the-art facility serves as the manufacturing hub where raw ST52 steel tubes are transformed into high-precision actuators.
            </p>
            
            <p className="text-brand-darkSlate">
              Every industrial hydraulic cylinder we produce goes through a rigorous quality assurance process. We understand that in the B2B manufacturing sector, equipment failure is not an option. That is why we use only premium imported polyurethane seals, meticulously hone our barrels to a mirror finish, and grind our hard-chrome plated piston rods to exact h8 tolerances.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
