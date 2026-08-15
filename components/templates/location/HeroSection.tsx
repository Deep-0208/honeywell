import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading } from '@/components/ui/Heading';
import { LocationHeroData } from '@/data/locations/gujarat';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function HeroSection({ data }: { data: LocationHeroData }) {
  return (
    <section className="bg-white pt-12 md:pt-20 pb-10 md:pb-16 relative overflow-hidden border-b border-slate-200" aria-labelledby="hero-heading">
      {/* Subtle engineering grid background — matching /about-us/ */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_10%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        aria-hidden="true" 
      />

      <Container className="relative z-10">
        {/* Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="text-sm md:text-base font-body text-slate-500 mb-6">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-honeywell-red transition-colors duration-200 ease-out">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">&rsaquo;</li>
            <li>
              <Link href="/locations/" className="hover:text-honeywell-red transition-colors duration-200 ease-out">
                Locations
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">&rsaquo;</li>
            <li className="text-honeywell-red font-semibold" aria-current="page">
              {data.title}
            </li>
          </ol>
        </nav>

        {/* Full-width Hero Content */}
        <div className="w-full">
          {/* Location Badge */}
          {data.overline && (
            <div className="inline-flex items-center gap-2 py-1 px-3.5 rounded-full bg-slate-100 border border-slate-200 text-honeywell-red font-bold tracking-wider text-xs uppercase font-body mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{data.overline}</span>
            </div>
          )}

          {/* Full-width H1 */}
          <Heading 
            variant="section" 
            as="h1" 
            id="hero-heading"
            className="font-display font-extrabold tracking-tight text-honeywell-navy text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-6"
          >
            {data.title}
          </Heading>

          {/* Full-width Subtitle */}
          <p className="text-brand-steelGray text-lg md:text-xl font-body leading-relaxed mb-8 w-full text-justify">
            {data.subtitle}
          </p>

          {/* Trust Chips */}
          {data.trustChips && data.trustChips.length > 0 && (
            <ul className="flex flex-wrap gap-2.5 sm:gap-3 mb-8" role="list">
              {data.trustChips.map((chip: string) => (
                <li 
                  key={chip} 
                  className="flex items-center gap-2 py-1.5 px-3.5 rounded-sm bg-brand-surfaceGray border border-slate-200 text-xs sm:text-sm font-medium text-honeywell-navy font-body shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" aria-hidden="true" />
                  <span>{chip}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Action CTAs */}
          {data.ctas && (
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {data.ctas.primary && (
                <Button 
                  href={data.ctas.primary.href} 
                  variant="primary" 
                  size="lg" 
                  className="font-bold tracking-wide shadow-md hover:shadow-lg transition-all group" 
                  rightIcon={<ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />}
                >
                  {data.ctas.primary.label}
                </Button>
              )}
              {data.ctas.secondary && (
                <Button 
                  href={data.ctas.secondary.href} 
                  variant="outline" 
                  size="lg" 
                  className="bg-white hover:bg-slate-50"
                >
                  {data.ctas.secondary.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
