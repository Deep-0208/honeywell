import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import Image from 'next/image';
import { clientLogos, trustMetrics } from '@/data/homepage';

export function ClientLogosSection() {
  return (
    <Section 
      bg="gray" 
      aria-labelledby="trust-heading" 
      className="py-24 relative overflow-hidden border-t border-slate-200"
    >
      {/* Subtle grid background pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-grid-pattern"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-col gap-12 md:gap-16">
        
        {/* Layer 1 — Trust Headline */}
        <div className="text-center max-w-[700px] mx-auto">
          <Heading variant="section" as="h2" id="trust-heading" className="text-3xl sm:text-4xl text-[#0D1B5C] mb-4">
            Trusted by Manufacturers Across India
          </Heading>
          <p className="text-[#64748B] font-body text-base md:text-lg">
            Supporting OEMs, process industries, infrastructure projects, and industrial automation companies with reliable hydraulic solutions.
          </p>
        </div>

        {/* Layer 2 — Credibility Statistics */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 w-full max-w-7xl mx-auto"
          aria-label="Company credibility statistics"
        >
          {trustMetrics.map((metric) => (
            <div key={metric.label} className="flex flex-col items-center justify-center text-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="font-display text-[32px] sm:text-[40px] leading-tight font-bold text-[#0D1B5C] mb-1">
                {metric.value}
              </div>
              <p className="text-[11px] sm:text-[12px] text-[#E31B23] font-display font-bold uppercase tracking-[0.1em]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Layer 3 — Premium Logo Marquee */}
        <div className="relative flex w-full max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group pt-4">
          
          {/* First set of logos */}
          <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {clientLogos.map((client, index) => (
              <div 
                key={`${client.name}-${index}`} 
                className="flex items-center justify-center shrink-0 pr-6 md:pr-10"
              >
                <div className="relative flex items-center justify-center w-[160px] h-[80px] md:w-[200px] md:h-[100px] bg-white rounded-xl border border-slate-200 shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1 p-4">
                  <Image
                    src={client.imageSrc}
                    alt="" /* Decorative in marquee context */
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 160px, 200px"
                    quality={100}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second set of logos for seamless loop */}
          <div className="flex shrink-0 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none" aria-hidden="true">
            {clientLogos.map((client, index) => (
              <div 
                key={`dup-${client.name}-${index}`} 
                className="flex items-center justify-center shrink-0 pr-6 md:pr-10"
              >
                <div className="relative flex items-center justify-center w-[160px] h-[80px] md:w-[200px] md:h-[100px] bg-white rounded-xl border border-slate-200 shadow-sm transition-transform duration-300 hover:shadow-md hover:-translate-y-1 p-4">
                  <Image
                    src={client.imageSrc}
                    alt="" 
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 160px, 200px"
                    quality={100}
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </Container>
    </Section>
  );
}
