import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { LocationHeroData } from '@/data/locations/gujarat';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function HeroSection({ data }: { data: LocationHeroData }) {
  return (
    <div className="relative bg-white pt-2 pb-16 md:pt-4 md:pb-24 overflow-hidden border-b border-slate-200" aria-labelledby="hero-heading">
      <div className="absolute inset-0 bg-brand-surfaceGray" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red/5 skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-12 lg:pt-20">
          <div className="order-1">
            <p className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-honeywell-red font-bold tracking-widest text-xs uppercase font-body shadow-sm mb-4">
              {data.overline}
            </p>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6">
              {data.title}
            </h1>
            <p className="text-lg text-brand-darkSlate mb-8 max-w-2xl leading-relaxed ">
              {data.subtitle}
            </p>
            <ul className="flex flex-wrap gap-4 mb-10">
              {data.trustChips.map((chip: string) => (
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
              <Button href={data.ctas.secondary.href} variant="outline" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                {data.ctas.secondary.label}
              </Button>
            </div>
          </div>
          <div className="order-2 relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image src={data.image.src} alt={data.image.alt} fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
        </div>
      </Container>
    </div>
  );
}
