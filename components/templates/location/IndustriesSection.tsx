import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function IndustriesSection({ data, bg = 'gray' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="industries-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading as="h2" id="industries-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((industry: any) => (
            <Link key={industry.id} href={industry.href} className="group block h-full">
              <Card variant="interactive" className="h-full flex flex-col">
                <div className="p-8 flex flex-col h-full">
                  <Heading variant="card" as="h3" className="mb-4 group-hover:text-honeywell-red transition-colors duration-200">
                    {industry.title}
                  </Heading>
                  <p className="text-brand-darkSlate text-sm leading-relaxed mb-6 flex-grow">{industry.description}</p>
                  <div className="flex items-center text-honeywell-navy group-hover:text-honeywell-red font-medium text-sm transition-colors duration-200 mt-auto pt-4 border-t border-slate-200/60">
                    View Industry <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
