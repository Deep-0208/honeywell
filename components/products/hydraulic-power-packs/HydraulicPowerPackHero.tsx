import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export function HydraulicPowerPackHero() {
  return (
    <section className="relative bg-white pt-6 pb-16 md:pt-8 md:pb-24 overflow-hidden border-b border-slate-200">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-brand-surfaceGray" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="absolute top-0 left-0 w-1/2 h-full bg-honeywell-navy/5 skew-x-[12deg] -translate-x-20 -z-10 hidden lg:block" />
      <div className="absolute inset-0 bg-[url('/images/shared/industrial-texture-background.webp')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-honeywell-red font-bold tracking-widest text-xs uppercase font-body shadow-sm">
                PRODUCTS
              </span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-brand-steelGray text-sm font-medium">Hydraulic Power Packs</span>
            </div>
            
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

          {/* Image */}
          <div className="relative z-10 w-full group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-2xl" />
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group-hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] transition-shadow duration-700">
              <Image 
                src="/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp"
                alt="Industrial Hydraulic Power Pack Manufacturer in Ahmedabad"
                fill
                priority fetchPriority="high" decoding="sync" quality={85}
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </Container>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-honeywell-red/5 to-honeywell-navy/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  );
}
