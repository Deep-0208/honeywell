

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { FaCogs, FaShieldAlt, FaRegClock, FaRupeeSign } from 'react-icons/fa';
import { usps } from '@/data/homepage';

/* Icon mapping — avoids storing JSX in data file */
const iconMap: Record<string, React.ReactNode> = {
  Settings2: <FaCogs className="w-6 h-6" />,
  ShieldCheck: <FaShieldAlt className="w-6 h-6" />,
  Timer: <FaRegClock className="w-6 h-6" />,
  IndianRupee: <FaRupeeSign className="w-6 h-6" />,
};

/**
 * WhyChooseUsSection — Section 04
 *
 * B2B trust signals addressing objections from
 * Plant Engineers and Procurement teams.
 *
 * Components: IconBox, Section, Container, Heading, Button
 * @see HOMEPAGE_ARCHITECTURE.md § Section 04
 */
export function WhyChooseUsSection() {
  return (
    <Section bg="gray" aria-labelledby="why-heading" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[url('/images/noise.webp')] opacity-[0.02] mix-blend-overlay" />
      </div>
      <Container className="relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="why-heading" className="text-honeywell-navy mb-4 ">
            Why Top Manufacturers Trust Us
            
          </Heading>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {usps.map((usp) => (
            <div key={usp.title}>
              <div className="text-center group bg-white p-8 rounded-2xl shadow-sm border border-slate-200/50 hover:shadow-xl hover:border-honeywell-red/20 hover:-translate-y-1 transition-all duration-300 ease-premium h-full flex flex-col items-center">
                <IconBox
                  icon={iconMap[usp.iconName] || <FaCogs className="w-6 h-6" />}
                  size="lg"
                  variant="primary"
                  className="mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-300 ease-premium"
                />
                <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">
                  {usp.title}
                </Heading>
                <p className="text-brand-steelGray font-body text-sm leading-relaxed text-justify">
                  {usp.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 md:mt-12">
          <Button
            href="/contact-us"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Contact Us
          </Button>
          <Button
            href="/contact-us"
            variant="ghost"
            size="lg"
          >
            Get In Touch
          </Button>
        </div>
      </Container>
    </Section>
  );
}
