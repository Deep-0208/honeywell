import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

export function ManufacturingSection({ data, bg = 'white' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="manufacturing-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Heading as="h2" id="manufacturing-heading" className="mb-6">{data.title}</Heading>
            <p className="text-lg text-brand-darkSlate mb-10">{data.description}</p>
            
            <div className="space-y-8">
              {data.processes.map((process: any, idx: number) => (
                <div key={process.id} className="flex gap-6">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-honeywell-navy text-white flex items-center justify-center font-bold text-lg font-display">
                    {idx + 1}
                  </div>
                  <div>
                    <Heading variant="subsection" as="h3" className="mb-2 text-xl">{process.title}</Heading>
                    <p className="text-brand-darkSlate">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative aspect-[4/5] lg:aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image src={data.image.src} alt={data.image.alt} fill className="object-cover" />
          </div>
        </div>
      </Container>
    </Section>
  );
}
