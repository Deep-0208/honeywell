import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';

export function CylinderOverview() {
  return (
    <Section bg="white" id="overview" aria-labelledby="overview-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Heading variant="section" underline="center" as="h2" id="overview-heading" className="mb-6">
            Introduction to Industrial Hydraulic Cylinders
          </Heading>
          
          <div className="prose prose-lg prose-slate max-w-none font-body">
            {/* AI-extractable definition block — 40-60 words, self-contained */}
            <p className="text-brand-darkSlate mb-6 text-lg font-medium text-justify">
              A hydraulic cylinder is a mechanical actuator that converts the hydrostatic energy of pressurized hydraulic fluid into linear force and motion. Honeywell Hydraulics is a premier hydraulic cylinder manufacturer in Ahmedabad, Gujarat, specializing in custom-engineered cylinders with bore sizes from 40mm to 300mm for heavy-duty industrial applications.
            </p>
            
            <p className="text-brand-darkSlate mb-6 text-justify">
              In demanding industrial environments, the reliability of your machinery depends entirely on the precision and durability of these cylinders. Whether you are lifting multi-ton loads in a <Link href="#" className="text-honeywell-red hover:underline font-semibold">steel mill</Link> or applying precise pressure in a <Link href="#" className="text-honeywell-red hover:underline font-semibold">plastic injection moulding</Link> machine, our cylinders are engineered to perform flawlessly under the most extreme conditions. Unlike off-the-shelf components, custom hydraulic cylinders require a deep understanding of fluid dynamics, load bearing capabilities, and operational metallurgy.
            </p>
            
            <p className="text-brand-darkSlate mb-6 text-justify">
              We manufacture cylinders that are specifically tailored to your exact operational parameters. Our engineers analyze your requirements—factoring in cycle rates, environmental exposure, side-loading possibilities, and fluid compatibility—to design a cylinder that will maximize your machine&apos;s uptime. Our state-of-the-art facility serves as the manufacturing hub where raw ST52 steel tubes are transformed into high-precision actuators.
            </p>
            
            <p className="text-brand-darkSlate text-justify">
              Every industrial hydraulic cylinder we produce goes through a rigorous quality assurance process. We understand that in the B2B manufacturing sector, equipment failure is not an option. That is why we use only premium imported polyurethane seals, meticulously hone our barrels to a mirror finish, and grind our hard-chrome plated piston rods to exact h8 tolerances.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
