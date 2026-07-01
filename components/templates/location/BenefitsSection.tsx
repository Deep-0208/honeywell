import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { CheckCircle2 } from 'lucide-react';

export function BenefitsSection({ data, bg = 'white' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="benefits-heading">
      <Container>
        <div className="max-w-3xl mb-12">
          <Heading as="h2" id="benefits-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.items.map((item: any) => (
            <Card key={item.id} variant="interactive" className="h-full">
              <div className="p-6 flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-honeywell-red shrink-0 mt-1" />
                <div>
                  <Heading variant="card" as="h3" className="mb-3">{item.title}</Heading>
                  <p className="text-brand-darkSlate text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
