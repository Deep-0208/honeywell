import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { FaIndustry, FaTruck, FaCogs, FaHammer, FaTractor } from 'react-icons/fa';

export function CylinderIndustries() {
  const industries = [
    {
      industryName: "Injection Moulding",
      description: "High-speed, high-cycle cylinders designed to withstand rapid heat generation and continuous operation.",
      href: "/industries/injection-moulding/",
      icon: <FaIndustry className="w-6 h-6" />
    },
    {
      industryName: "Automotive OEM",
      description: "Precision actuators for assembly lines, testing equipment, and automated manufacturing systems.",
      href: "/industries/automotive/",
      icon: <FaTruck className="w-6 h-6" />
    },
    {
      industryName: "Steel & Metallurgy",
      description: "Heavy-duty cylinders built for extreme temperatures, high loads, and abrasive environments.",
      href: "/industries/steel-metallurgy/",
      icon: <FaHammer className="w-6 h-6" />
    },
    {
      industryName: "Agricultural Equipment",
      description: "Reliable hydraulic solutions for tractors, harvesters, and heavy farm machinery.",
      href: "/industries/agricultural-equipment/",
      icon: <FaTractor className="w-6 h-6" />
    },
    {
      industryName: "Fly Ash Brick Machinery",
      description: "High-pressure compaction cylinders ensuring uniform brick density and rapid production cycles.",
      href: "/industries/fly-ash-brick/",
      icon: <FaCogs className="w-6 h-6" />
    }
  ];

  return (
    <Section bg="gray" id="industries">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Industries Served Across India
            </h2>
            <p className="text-lg text-brand-steelGray font-body">
              We supply premium fluid power components to over 20 distinct industrial sectors PAN-India.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/request-quote/" className="text-honeywell-red font-bold hover:underline">
              Don&apos;t see your industry? Contact us →
            </Link>
          </div>
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
