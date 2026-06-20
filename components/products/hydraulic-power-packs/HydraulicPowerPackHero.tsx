import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Container } from '@/components/ui/Container';
import { Phone, MessageCircle, ArrowRight } from 'lucide-react';

export function HydraulicPowerPackHero() {
  return (
    <section className="relative bg-[#F8FAFC] pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-6">
              <span className="text-[#E31B23] font-display font-bold tracking-widest text-sm uppercase">
                INDUSTRIAL FLUID POWER
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#0D1B5C] leading-tight mb-6">
              Hydraulic Power Pack Manufacturer in Gujarat, India
            </h1>
            
            <p className="text-lg md:text-xl text-[#64748B] font-body mb-8 max-w-xl leading-relaxed">
              Generating reliable, continuous fluid power for heavy industry. Custom-engineered hydraulic power units delivering precise flow rates and exact operating pressures to drive automated machinery and commercial lifting equipment without fluctuation or heat degradation.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Button href="/request-quote/" size="lg" variant="primary" className="w-full sm:w-auto font-bold tracking-wide">
                REQUEST QUOTE <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button href="tel:+919924343873" size="lg" variant="outline" className="w-full sm:w-auto bg-white hover:bg-[#F8FAFC]">
                <Phone className="w-5 h-5 mr-2" /> CALL NOW
              </Button>
              <Button href="https://wa.me/919924343873" size="lg" variant="ghost" className="w-full sm:w-auto text-green-600 hover:bg-green-50 hover:text-green-700">
                <MessageCircle className="w-5 h-5 mr-2" /> WHATSAPP
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Badge variant="iso" className="bg-white">ISO 9001:2015</Badge>
              <Badge variant="madeInIndia" className="bg-white border border-orange-200">Made in India</Badge>
              <Badge variant="default" className="bg-white border border-gray-200">100% Load Tested</Badge>
            </div>
          </div>

          {/* Image */}
          <div className="relative z-10">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <Image 
                src="/images/products/hydraulic-power-pack-manufacturer.webp"
                alt="Industrial Hydraulic Power Pack Manufacturer in Ahmedabad"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B5C]/80 to-transparent flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-1.5 h-12 bg-[#E31B23]"></div>
                  <div>
                    <div className="text-2xl font-bold font-display">0.5 HP to 150+ HP</div>
                    <div className="text-sm font-body text-gray-200 uppercase tracking-wider">Heavy-Duty Continuous Operation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-gradient-to-br from-[#E31B23]/5 to-[#0D1B5C]/5 rounded-full blur-3xl pointer-events-none -z-10" />
    </section>
  );
}
