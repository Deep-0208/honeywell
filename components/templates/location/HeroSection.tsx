import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { LocationHeroData } from '@/data/locations/gujarat-facility';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function HeroSection({ data }: { data: LocationHeroData }) {
  return (
    <section className="relative bg-white overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-40 w-[800px] h-[800px] rounded-full bg-brand-surfaceGray opacity-70" />
      </div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="order-1">
            <p className="text-base md:text-xl font-body text-honeywell-red mb-4">
              {data.overline}
            </p>
            <Heading variant="section" underline="center" as="h1" id="hero-heading" className="text-honeywell-navy mb-4 sm:mb-5 leading-[1.1]">
              {data.title}
            </Heading>
            <p className="text-lg text-brand-darkSlate mb-8 max-w-2xl">
              {data.subtitle}
            </p>
            <ul className="flex flex-wrap gap-4 mb-10">
              {data.trustChips.map((chip) => (
                <li key={chip} className="flex items-center gap-2 text-[15px] font-medium text-brand-darkSlate font-body">
                  <CheckCircle2 className="w-5 h-5 text-honeywell-red shrink-0" aria-hidden="true" />
                  {chip}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href={data.ctas.primary.href} variant="primary" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                {data.ctas.primary.label}
              </Button>
              <Button href={data.ctas.secondary.href} variant="outline" size="lg">
                {data.ctas.secondary.label}
              </Button>
            </div>
          </div>
          <div className="order-2 relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-200/80">
            <Image src={data.image.src} alt={data.image.alt} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </Container>
    </section>
  );
}
