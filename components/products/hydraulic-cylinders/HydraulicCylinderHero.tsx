import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export function HydraulicCylinderHero() {
  return (
    <div className="relative bg-white pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden border-b border-[#E2E8F0]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8FAFC] skew-x-[-12deg] translate-x-20 -z-10 hidden lg:block" />
      
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="flex flex-col items-start z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#E31B23] font-bold tracking-widest text-sm uppercase font-body">
                PRODUCTS
              </span>
              <div className="h-4 w-px bg-[#CBD5E1]" />
              <span className="text-[#64748B] text-sm font-medium">Hydraulic Cylinders</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0D1B5C] leading-[1.1] mb-6">
              Hydraulic Cylinder Manufacturer in Ahmedabad
            </h1>

            <p className="text-lg text-[#334155] font-body mb-8 max-w-xl leading-relaxed">
              Engineered for precision and built for endurance. We are a leading manufacturer of custom and industrial hydraulic cylinders, delivering high-performance fluid power solutions to OEMs and heavy industries across India.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button href="/request-quote/" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                REQUEST QUOTE <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="#products" size="lg" variant="outline" className="w-full sm:w-auto">
                VIEW PRODUCTS <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Contact Bar */}
            <div className="flex flex-wrap items-center gap-6 py-4 border-t border-[#E2E8F0] w-full">
              <a href="tel:+919924343873" className="flex items-center text-[#0D1B5C] hover:text-[#E31B23] font-medium transition-colors font-body">
                <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center mr-3">
                  <Phone className="w-5 h-5" />
                </div>
                +91 99243 43873
              </a>
              <a href="https://wa.me/919924343873" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#0D1B5C] hover:text-[#25D366] font-medium transition-colors font-body">
                <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center mr-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                WhatsApp for Quick Quote
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Badge variant="iso" className="bg-white">ISO 9001:2015</Badge>
              <Badge variant="madeInIndia" className="bg-white border border-orange-200">Made in India</Badge>
              <Badge variant="default" className="bg-white border border-gray-200">100% Tested</Badge>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl border border-[#E2E8F0] shadow-sm p-4 overflow-hidden group">
            <div className="absolute inset-0 bg-[#F8FAFC] opacity-50 rounded-xl" />
            <Image
              src="/images/products/hydraulic-cylinders/hydraulic-cylinders-ahmedabad.webp"
              alt="Hydraulic Cylinder Manufacturer in Ahmedabad"
              fill
              priority
              className="object-contain p-8 group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

        </div>
      </Container>

      {/* Key Specs Strip */}
      <div className="absolute bottom-0 left-0 w-full border-t border-[#E2E8F0] bg-white hidden md:block">
        <Container>
          <div className="flex flex-wrap divide-x divide-[#E2E8F0] py-4">
            <div className="px-6 flex-1 text-center first:pl-0 last:pr-0">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Bore</span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">40–300mm</span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Stroke</span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">Up to 3000mm</span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Working Pressure</span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">Up to 350 Bar</span>
            </div>
            <div className="px-6 flex-1 text-center">
              <span className="block text-xs font-bold text-[#64748B] uppercase tracking-wider mb-1">Mounting</span>
              <span className="block text-sm font-mono text-[#0D1B5C] font-semibold">All Types</span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
