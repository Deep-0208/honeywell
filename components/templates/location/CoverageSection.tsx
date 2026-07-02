/* eslint-disable */
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
          <Heading variant="section" underline="center" as="h2" id="coverage-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate leading-relaxed md:text-center">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((area: any) => (
            <Card key={area.id} variant="interactive" className="flex flex-col h-full group">
              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="mt-1 p-2 bg-honeywell-red/10 rounded-full text-honeywell-red shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <Heading variant="card" as="h3" className="text-xl font-display font-bold text-honeywell-navy">
                      {area.city}
                    </Heading>
                  </div>
                </div>
                <p className="text-brand-steelGray font-body text-sm leading-relaxed flex-1 text-justify">
                  {area.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
