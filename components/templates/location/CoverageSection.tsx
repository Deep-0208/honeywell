import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function CoverageSection({ data, bg = 'gray' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="coverage-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading as="h2" id="coverage-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {data.items.map((area: any) => (
            <Card key={area.id} variant="default" className="flex gap-4 p-6 hover:shadow-md transition-shadow">
              <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-honeywell-red">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <Heading variant="card" as="h3" className="mb-2">{area.city}</Heading>
                <p className="text-brand-darkSlate leading-relaxed">{area.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
