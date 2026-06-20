

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import {
  Settings2,
  ShieldCheck,
  Timer,
  IndianRupee,
  ArrowRight,
} from 'lucide-react';
import { usps } from '@/data/homepage';

/* Icon mapping — avoids storing JSX in data file */
const iconMap: Record<string, React.ReactNode> = {
  Settings2: <Settings2 className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Timer: <Timer className="w-6 h-6" />,
  IndianRupee: <IndianRupee className="w-6 h-6" />,
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
    <Section bg="white" aria-labelledby="why-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold font-body uppercase tracking-[0.15em] text-[#E31B23] mb-3">
            Why Honeywell Hydraulics
          </p>
          <Heading variant="section" as="h2" id="why-heading">
            Why Top Manufacturers Trust Us
          </Heading>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp) => (
            <div key={usp.title}>
              <div className="text-center group">
                <IconBox
                  icon={iconMap[usp.iconName] || <Settings2 className="w-6 h-6" />}
                  size="lg"
                  variant="primary"
                  className="mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-display font-bold text-[#0D1B5C] text-xl mb-2">
                  {usp.title}
                </h3>
                <p className="text-[#64748B] font-body text-sm leading-relaxed">
                  {usp.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Button
            href="/contact-us/"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Contact Us
          </Button>
          <Button
            href="/resources/case-studies/"
            variant="ghost"
            size="lg"
          >
            View Case Studies
          </Button>
        </div>
      </Container>
    </Section>
  );
}
