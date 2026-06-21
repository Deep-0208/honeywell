import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IconBox } from '@/components/ui/IconBox';
import { ShieldCheck, Zap, Cog, Truck } from 'lucide-react';

export function WhyChooseCylinders() {
  return (
    <Section bg="white" id="why-choose-us">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Why Choose Honeywell&apos;s Hydraulic Cylinders?
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            We don&apos;t just build cylinders; we engineer fluid power solutions that eliminate downtime and increase operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="flex flex-col">
            <IconBox icon={<Cog className="w-6 h-6" />} variant="primary" size="lg" className="mb-6" />
            <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Engineering Expertise</h3>
            <p className="text-brand-steelGray font-body">
              Our engineers analyze your load calculations, cycle rates, and environmental factors to design the perfect custom cylinder for your exact application.
            </p>
          </div>

          <div className="flex flex-col">
            <IconBox icon={<ShieldCheck className="w-6 h-6" />} variant="primary" size="lg" className="mb-6" />
            <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">1.5x Pressure Testing</h3>
            <p className="text-brand-steelGray font-body">
              Every cylinder is hydrostatically pressure-tested at 1.5 times its rated working pressure before dispatch. Out-of-the-box leaks are non-existent.
            </p>
          </div>

          <div className="flex flex-col">
            <IconBox icon={<Zap className="w-6 h-6" />} variant="primary" size="lg" className="mb-6" />
            <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Custom Manufacturing</h3>
            <p className="text-brand-steelGray font-body">
              Drawing-to-delivery service. We can manufacture exactly to your existing CAD drawings or reverse-engineer a replacement for an obsolete part.
            </p>
          </div>

          <div className="flex flex-col">
            <IconBox icon={<Truck className="w-6 h-6" />} variant="primary" size="lg" className="mb-6" />
            <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Fast Delivery</h3>
            <p className="text-brand-steelGray font-body">
              With our streamlined manufacturing processes in Ahmedabad, we offer some of the fastest turnaround times in the industry for custom components.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
}
