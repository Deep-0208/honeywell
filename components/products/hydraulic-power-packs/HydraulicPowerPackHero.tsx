import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export function HydraulicPowerPackHero() {
  return (
    <section className="relative bg-white pt-6 pb-16 md:pt-8 md:pb-24 overflow-hidden border-b border-slate-200">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-honeywell-navy/5 skew-x-[12deg] -translate-x-20 -z-10 hidden lg:block" />
      <div className="absolute inset-0 bg-[url('/images/shared/industrial-texture-background.webp')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />
      
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
              <Link href="/products/" className="hover:text-honeywell-red transition-colors duration-200 ease-out">
                Products
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-400">&rsaquo;</li>
            <li className="text-honeywell-red font-semibold" aria-current="page">
              Hydraulic Power Packs
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="flex flex-col items-start z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-honeywell-navy leading-tight mb-6">
              Hydraulic Power Pack Manufacturer in Gujarat, India
            </h1>
            
            <p className="text-lg md:text-xl text-brand-steelGray font-body mb-8 max-w-xl leading-relaxed text-justify">
              Generating reliable, continuous fluid power for heavy industry. Custom-engineered hydraulic power units delivering precise flow rates and exact operating pressures to drive automated machinery and commercial lifting equipment without fluctuation or heat degradation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button href="/request-quote/#quote-form" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                REQUEST QUOTE <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="#specifications" size="lg" variant="outline" className="w-full sm:w-auto">
                VIEW SPECIFICATIONS <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>




          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image 
              src="/images/products/hydraulic-power-packs/hydraulic-power-pack.webp"
              alt="Industrial Hydraulic Power Pack Manufacturer in Ahmedabad"
              fill
              priority fetchPriority="high" decoding="sync" quality={85}
              className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </Container>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-honeywell-red/5 to-honeywell-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  );
}
