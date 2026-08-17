import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import type { HeroData } from './types';
import { TechnicalBlueprintCard } from '@/components/products/TechnicalBlueprintCard';

/**
 * ProductHero — Gold-standard hero section.
 *
 * Background decorative elements, breadcrumb, H1, description,
 * dual CTAs, product image with hover zoom, and bottom key specs strip.
 */
export function ProductHero({
  breadcrumbs,
  currentPage,
  subtitle,
  h1,
  description,
  primaryCta,
  secondaryCta,
  image,
  keySpecs,
}: HeroData) {
  return (
    <div
      className="relative bg-white pt-6 pb-16 md:pt-8 md:pb-24 overflow-hidden border-b border-slate-200"
      id="hero"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red/5 skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block" />
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm md:text-base font-body text-slate-500 mb-6">
          <ol className="flex items-center gap-2 flex-wrap">
            {breadcrumbs.map((bc, idx) => (
              <li key={idx} className="flex items-center gap-2">
                {idx > 0 && <span aria-hidden="true" className="text-slate-400">&rsaquo;</span>}
                <Link href={bc.href} className="hover:text-honeywell-red transition-colors duration-200 ease-out">
                  {bc.label}
                </Link>
              </li>
            ))}
            <li aria-hidden="true" className="text-slate-400">&rsaquo;</li>
            <li className="text-honeywell-red font-semibold" aria-current="page">
              {currentPage}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">


            <Heading
              variant="section"
              as="h1"
              className=" lg:text-[3.25rem] font-display font-bold text-honeywell-navy leading-[1.1] mb-6"
            >
              {h1}
            </Heading>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed text-justify">
              {description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button
                href={primaryCta.href}
                size="lg"
                variant="primary"
                className="w-full sm:w-auto font-bold tracking-wide"
              >
                {primaryCta.label} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href={secondaryCta.href}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white"
              >
                {secondaryCta.label} <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Technical Specs Blueprint or Image Column */}
          <div className="w-full">
            {image?.src && image.src !== '' ? (
              <div className="relative w-full aspect-[4/3] lg:aspect-[4/3] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
                <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  fetchPriority="high"
                  decoding="sync"
                  quality={85}
                  className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : (
              <TechnicalBlueprintCard
                title={`${currentPage} TECHNICAL DATA`}
                badge="PRECISION ENGINEERED"
              />
            )}
          </div>
        </div>
      </Container>

      {/* Key Specs Strip */}
      {keySpecs.length > 0 && (
        <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-slate-200/50 hidden md:block shadow-[0_-4px_24px_-12px_rgba(0,0,0,0.05)] z-20">
          <Container>
            <div className="flex flex-wrap divide-x divide-slate-200/50 py-4">
              {keySpecs.map((spec, idx) => (
                <div key={idx} className="px-6 flex-1 text-center first:pl-0 last:pr-0 group cursor-default">
                  <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">
                    {spec.label}
                  </span>
                  <span className="block text-sm font-mono text-honeywell-navy font-semibold">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}
