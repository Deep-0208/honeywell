import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { Factory, Hammer, Truck, Cog } from 'lucide-react';

export function PowerPackIndustries() {
  const industries = [
    {
      industryName: "Plastic Injection Moulding",
      description: "Providing the rapid flow required for high-speed core pulls and the sustained high pressure required for mould clamping without overheating.",
      href: "/industries/injection-moulding/",
      icon: <Factory className="w-6 h-6" />
    },
    {
      industryName: "Steel & Metallurgy",
      description: "Delivering extreme-pressure fluid power to rolling mills while resisting the ambient radiant heat of the foundry environment.",
      href: "/industries/steel-metallurgy/",
      icon: <Hammer className="w-6 h-6" />
    },
    {
      industryName: "Material Handling",
      description: "Supplying judder-free, highly reliable lifting power for automated warehouse logistics, scissor lifts, and dock levelers.",
      href: "/industries/material-handling/",
      icon: <Truck className="w-6 h-6" />
    },
    {
      industryName: "Automotive OEM",
      description: "Driving synchronized robotic welding and assembly stations with 0.01mm repeatability and zero-leak reliability.",
      href: "/industries/automotive/",
      icon: <Cog className="w-6 h-6" />
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
