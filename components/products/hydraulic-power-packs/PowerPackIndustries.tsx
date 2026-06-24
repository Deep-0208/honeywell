import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { FaIndustry, FaHammer, FaTruck, FaCogs, FaTractor } from 'react-icons/fa';

export function PowerPackIndustries() {
  const industries = [
    {
      industryName: "Injection Moulding",
      description: "High-flow hydraulic power packs delivering sustained pressure for rapid mould clamping and injection cycles without overheating.",
      href: "/industries/injection-moulding/",
      icon: <FaIndustry className="w-6 h-6" />
    },
    {
      industryName: "Construction & Earthmoving",
      description: "Compact, high-torque hydraulic power units designed to drive heavy earthmoving attachments and mobile construction equipment.",
      href: "/industries/construction-earthmoving/",
      icon: <FaTractor className="w-6 h-6" />
    },
    {
      industryName: "Manufacturing & Industrial Automation",
      description: "Energy-efficient hydraulic power units with proportional control valves for synchronized, automated manufacturing lines.",
      href: "/industries/manufacturing-automation/",
      icon: <FaCogs className="w-6 h-6" />
    },
    {
      industryName: "Material Handling",
      description: "Reliable AC/DC hydraulic power packs providing smooth, judder-free lifting force for dock levelers and warehouse lifts.",
      href: "/industries/material-handling/",
      icon: <FaTruck className="w-6 h-6" />
    },
    {
      industryName: "Rolling Mill",
      description: "Heavy-duty, continuous-duty hydraulic power systems engineered for the extreme pressures and high temperatures of steel mills.",
      href: "/industries/rolling-mill/",
      icon: <FaHammer className="w-6 h-6" />
    },
    {
      industryName: "Wooden Industries",
      description: "High-capacity hydraulic power packs designed to drive multi-cylinder plywood presses and continuous timber processing machinery.",
      href: "/industries/wooden-industries/",
      icon: <FaIndustry className="w-6 h-6" />
    }
  ];

  return (
    <Section bg="gray" id="industries">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
              Industries Served
            </h2>
            <p className="text-lg text-brand-steelGray font-body">
              Our power packs are the driving force behind India&apos;s core industrial manufacturing sectors.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/request-quote/" className="text-honeywell-red font-bold hover:underline">
              Don&apos;t see your industry? Contact us →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
