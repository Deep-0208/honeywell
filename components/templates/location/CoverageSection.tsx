import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { MapPin, ArrowRight } from 'lucide-react';

interface ServiceAreaItem {
  id: string;
  city: string;
  description: string;
}

interface CoverageData {
  title: string;
  description: string;
  items: ServiceAreaItem[];
}

/* Industry keywords mapped per area ID */
const areaIndustriesMap: Record<string, string[]> = {
  kathwada: ['Manufacturing', 'OEM Supply', 'Hydraulics'],
  odhav: ['Injection Moulding', 'Plastics', 'Engineering'],
  vatva: ['Chemicals', 'Textiles', 'Processing'],
  naroda: ['Pharma', 'Machinery', 'Chemicals'],
  changodar: ['Pharma', 'Packaging', 'Printing'],
  sanand: ['Automotive', 'Stamping', 'Tier-1 Auto'],
  narol: ['Textile Processing', 'Dyeing', 'Fabric'],
};

export function CoverageSection({ data, bg = 'gray' }: { data: CoverageData; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="coverage-heading">
      <Container>
        {/* Section header — same style as About Us */}
        <div className="text-center mb-12 flex flex-col items-center">
          <Heading
            variant="section"
            underline="center"
            as="h2"
            id="coverage-heading"
            className="mb-3 text-honeywell-navy"
          >
            {data.title}
          </Heading>
          <p className="text-lg text-brand-steelGray font-body max-w-2xl mx-auto text-center">
            {data.description}
          </p>
        </div>

        {/* Full-width 3-column grid — matches About Us card style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((area) => {
            const industries = areaIndustriesMap[area.id] || [];
            return (
              <a
                key={area.id}
                href="/request-quote/#quote-form"
                className="block bg-white border border-slate-200 rounded-sm p-6
                  transition-all duration-350 ease-premium
                  hover:shadow-float hover:-translate-y-1.5
                  border-t-2 border-t-transparent hover:border-t-honeywell-red
                  group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy"
              >
                {/* Icon + Title */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-honeywell-navy flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-honeywell-navy group-hover:text-honeywell-red transition-colors duration-200">
                      {area.city}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-brand-steelGray font-body leading-relaxed mb-4 text-justify">
                  {area.description}
                </p>

                {/* Industry tags */}
                {industries.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {industries.slice(0, 3).map((ind) => (
                      <span
                        key={ind}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body uppercase tracking-wider bg-honeywell-navy text-white shadow-sm group-hover:bg-brand-deepNavy transition-colors duration-300"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-honeywell-red font-body">
                  Express Supply <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
