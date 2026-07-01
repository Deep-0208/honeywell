import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Heading } from '@/components/ui/Heading';

export function HydraulicCylinderHero() {
  return (
    <div className="relative bg-white pt-2 pb-16 md:pt-4 md:pb-24 overflow-hidden border-b border-slate-200">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-brand-surfaceGray" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-l from-white to-transparent" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red/5 skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block" aria-hidden="true" />
      <div className="absolute inset-0 bg-[url('/images/noise.webp')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Content Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-honeywell-red font-bold tracking-widest text-xs uppercase font-body shadow-sm">
                PRODUCTS
              </span>
              <div className="h-4 w-px bg-slate-300" />
              <span className="text-brand-steelGray text-sm font-medium">Hydraulic Cylinders</span>
            </div>

            <Heading variant="hero" as="h1" className="text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] mb-6">
              Hydraulic Cylinder Manufacturer in Ahmedabad
            </Heading>

            <p className="text-lg text-brand-darkSlate font-body mb-8 max-w-xl leading-relaxed">
              Engineered for precision and built for endurance. We are a leading manufacturer of custom and industrial hydraulic cylinders, delivering high-performance fluid power solutions to OEMs and heavy industries across India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button href="/request-quote" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                REQUEST QUOTE <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="#products" size="lg" variant="outline" className="w-full sm:w-auto">
                VIEW PRODUCTS <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>



            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Badge variant="iso" className="bg-white text-honeywell-navy border border-slate-200">ISO 9001:2015</Badge>
              <Badge variant="madeInIndia" className="bg-white text-orange-600 border border-orange-200">Made in India</Badge>
              <Badge variant="default" className="bg-white text-brand-darkSlate border border-gray-200">100% Tested</Badge>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden group">
            <div className="absolute inset-0 bg-brand-surfaceGray opacity-50 rounded-xl" />
            <Image
              src="/images/products/hydraulic-cylinders/hydraulic-cylinders-ahmedabad.webp"
              alt="Hydraulic Cylinder Manufacturer in Ahmedabad"
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </Container>

      {/* Key Specs Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md border-t border-slate-200/50 hidden md:block shadow-[0_-4px_24px_-12px_rgba(0,0,0,0.05)] z-20">
        <Container>
          <div className="flex flex-wrap divide-x divide-slate-200/50 py-4">
            <div className="px-6 flex-1 text-center first:pl-0 last:pr-0 group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">Bore</span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">40–300mm</span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">Stroke</span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">Up to 3000mm</span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">Working Pressure</span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">Up to 350 Bar</span>
            </div>
            <div className="px-6 flex-1 text-center group cursor-default">
              <span className="block text-xs font-bold text-brand-steelGray uppercase tracking-wider mb-1 group-hover:text-honeywell-red transition-colors duration-300">Mounting</span>
              <span className="block text-sm font-mono text-honeywell-navy font-semibold">All Types</span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
