/* eslint-disable */
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { 
  ArrowRight, 
  Factory, 
  Cog, 
  Car, 
  Pill, 
  FlaskConical, 
  Package, 
  Ship, 
  Wrench,
  Settings
} from 'lucide-react';

const industryIconMap: Record<string, React.ElementType> = {
  'plastic-moulding': Factory,
  'plastic': Factory,
  'textile': Settings,
  'auto-parts': Car,
  'pharma': Pill,
  'chemical': FlaskConical,
  'chemicals': FlaskConical,
  'material-handling': Package,
  'ship-breaking': Ship,
  'brass-parts': Wrench,
};

export function IndustriesSection({ data, bg = 'gray' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="industries-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" underline="center" as="h2" id="industries-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate leading-relaxed md:text-center">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((industry: any) => {
            const IconComponent = industryIconMap[industry.id] || Factory;
            
            return (
              <Link key={industry.id} href={industry.href} className="group block h-full">
                <Card variant="interactive" className="h-full flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="p-8 flex flex-col h-full">
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-honeywell-red/10 text-honeywell-red group-hover:bg-honeywell-red group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <Heading variant="card" as="h3" className="mb-4 group-hover:text-honeywell-red transition-colors duration-200">
                      {industry.title}
                    </Heading>
                    <p className="text-brand-darkSlate text-sm leading-relaxed mb-6 flex-grow  text-justify">{industry.description}</p>
                    <div className="flex items-center text-honeywell-navy group-hover:text-honeywell-red font-medium text-sm transition-colors duration-200 mt-auto pt-4 border-t border-slate-200/60">
                      View Industry <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
