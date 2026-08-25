import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';

export function BenefitsSection({ data, bg = 'white' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="benefits-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="benefits-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate leading-relaxed text-center">{data.description}</p>
        </div>

        {/* Clean numbered layout — no cards, just whitespace and typography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {data.items.map((item: any, idx: number) => (
            <div key={item.id} className="relative">
              {/* Large number badge */}
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-honeywell-navy text-white font-mono font-bold text-xl mb-5">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">{item.title}</Heading>
              <p className="text-brand-darkSlate text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
