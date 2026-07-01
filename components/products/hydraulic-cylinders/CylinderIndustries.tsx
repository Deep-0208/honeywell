import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { FaIndustry, FaTruck, FaCogs, FaHammer, FaTractor } from 'react-icons/fa';

export function CylinderIndustries() {
  const industries = [
    {
      industryName: "Injection Moulding",
      description: "High-speed, high-cycle tie-rod hydraulic cylinders designed for rapid core-pulling and mould clamping.",
      href: "#",
      icon: <FaIndustry className="w-6 h-6" />
    },
    {
      industryName: "Construction & Earthmoving",
      description: "Heavy-duty boom, stick, and bucket hydraulic cylinders engineered for shock resistance in excavators and earthmovers.",
      href: "#",
      icon: <FaTractor className="w-6 h-6" />
    },
    {
      industryName: "Manufacturing & Industrial Automation",
      description: "Precision hydraulic actuators with micron-level accuracy for robotic welding, assembly lines, and testing jigs.",
      href: "#",
      icon: <FaCogs className="w-6 h-6" />
    },
    {
      industryName: "Material Handling",
      description: "Reliable, leak-free telescopic and double-acting cylinders for forklifts, scissor lifts, and automated guided vehicles (AGVs).",
      href: "#",
      icon: <FaTruck className="w-6 h-6" />
    },
    {
      industryName: "Rolling Mill",
      description: "Rugged mill-type hydraulic cylinders built with high-temperature Viton seals to withstand extreme foundry environments.",
      href: "#",
      icon: <FaHammer className="w-6 h-6" />
    },
    {
      industryName: "Wooden Industries",
      description: "High-tonnage hydraulic press cylinders optimized for plywood pressing, veneer peeling, and heavy timber cutting machines.",
      href: "#",
      icon: <FaIndustry className="w-6 h-6" />
    }
  ];

  return (
    <Section bg="white" id="industries" aria-labelledby="industries-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="industries-heading" className="mb-4">
            Industries Served Across India
          </Heading>
          <p className="text-lg text-brand-steelGray font-body mb-6">
            We supply premium fluid power components to over 20 distinct industrial sectors PAN-India.
          </p>
          <Link href="/request-quote" className="text-honeywell-red font-bold hover:underline">
            Don&apos;t see your industry? Contact us →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <IndustryCard 
              key={idx}
              industryName={ind.industryName}
              description={ind.description}
              href={ind.href}
              icon={ind.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
