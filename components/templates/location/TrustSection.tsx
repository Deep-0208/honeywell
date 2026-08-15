import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { IconBox } from '@/components/ui/IconBox';
import { ShieldCheck, Award, Wrench, CheckCircle } from 'lucide-react';

const trustIcons = [Award, Wrench, ShieldCheck, CheckCircle];

export function TrustSection({ data, bg = 'gray' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="trust-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/images/shared/industrial-texture-background.webp')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <Container className="relative z-10">
        {/* Section header centered — Homepage style */}
        <div className="text-center max-w-3xl mx-auto mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="trust-heading" className="text-honeywell-navy mb-4">
            {data.title}
          </Heading>
          
          <p className="text-lg text-brand-darkSlate leading-relaxed max-w-2xl mx-auto text-center">
            {data.description}
          </p>
        </div>

        {/* Card Grid — Homepage WhyChooseUs style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {data.items.map((item: any, idx: number) => {
            const IconComp = trustIcons[idx % trustIcons.length];
            return (
              <div key={item.id}>
                <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
                  <IconBox
                    icon={<IconComp className="w-6 h-6" />}
                    size="lg"
                    variant="primary"
                    className="mx-auto mb-6 group-hover:scale-110 transition-all duration-300 ease-premium"
                  />
                  <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy font-bold text-center">
                    {item.title}
                  </Heading>
                  <p className="text-brand-steelGray font-body text-sm leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
