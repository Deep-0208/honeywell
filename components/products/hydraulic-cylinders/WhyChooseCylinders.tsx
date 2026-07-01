import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { FaShieldAlt, FaBolt, FaCogs, FaTruck } from 'react-icons/fa';

export function WhyChooseCylinders() {
  return (
    <Section bg="gray" id="why-choose-us" aria-labelledby="why-choose-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/images/noise.webp')] opacity-[0.02] mix-blend-overlay" />
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="why-choose-heading" className="text-honeywell-navy mb-4 ">
            Why Choose Honeywell&apos;s Hydraulic Cylinders?
                      </Heading>
          <p className="text-lg text-brand-steelGray font-body max-w-3xl mx-auto mt-4">
            We don&apos;t just build cylinders; we engineer fluid power solutions that eliminate downtime and increase operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          
          <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
            <IconBox 
              icon={<FaCogs className="w-6 h-6" />} 
              size="lg" 
              variant="primary" 
              className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
            />
            <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">Engineering Expertise</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed">
              Our engineers analyze your load calculations, cycle rates, and environmental factors to design the perfect custom cylinder for your exact application.
            </p>
          </div>

          <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
            <IconBox 
              icon={<FaShieldAlt className="w-6 h-6" />} 
              size="lg" 
              variant="primary" 
              className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
            />
            <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">1.5x Pressure Testing</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed">
              Every cylinder is hydrostatically pressure-tested at 1.5 times its rated working pressure before dispatch. Out-of-the-box leaks are non-existent.
            </p>
          </div>

          <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
            <IconBox 
              icon={<FaBolt className="w-6 h-6" />} 
              size="lg" 
              variant="primary" 
              className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
            />
            <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">Custom Manufacturing</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed">
              Drawing-to-delivery service. We can manufacture exactly to your existing CAD drawings or reverse-engineer a replacement for an obsolete part.
            </p>
          </div>

          <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
            <IconBox 
              icon={<FaTruck className="w-6 h-6" />} 
              size="lg" 
              variant="primary" 
              className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium" 
            />
            <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">Fast Delivery</Heading>
            <p className="text-brand-steelGray font-body text-sm leading-relaxed">
              With our streamlined manufacturing processes in Ahmedabad, we offer some of the fastest turnaround times in the industry for custom components.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}
