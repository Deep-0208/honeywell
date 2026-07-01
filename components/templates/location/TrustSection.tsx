/* eslint-disable */
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { ShieldCheck } from 'lucide-react';

export function TrustSection({ data, bg = 'gray' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="trust-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading as="h2" id="trust-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8">
          {data.items.map((item: any) => (
            <div key={item.id} className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-honeywell-navy shrink-0 mt-1" />
              <div>
                <Heading variant="card" as="h3" className="mb-2 font-bold">{item.title}</Heading>
                <p className="text-brand-darkSlate leading-snug">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
