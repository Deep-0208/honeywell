import React from 'react';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { PILLAR_INDUSTRIES } from '@/data/hydraulic-power-packs/pillar';

export function PowerPackIndustries() {

  return (
    <Section bg="white" id="industries" aria-labelledby="industries-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="industries-heading" className="mb-4">
            Industries Served Across India
          </Heading>
          <p className="text-lg text-brand-steelGray font-body mb-6">
            We supply premium fluid power components to over 20 distinct industrial sectors PAN-India.
          </p>
          <Link href="/request-quote" className="text-honeywell-red font-bold hover:underline">
            Don&apos;t see your industry? Contact us →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLAR_INDUSTRIES.map((ind, idx) => (
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
