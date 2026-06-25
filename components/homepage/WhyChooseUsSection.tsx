

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
    <Section bg="gray" aria-labelledby="why-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" as="h2" id="why-heading" className="text-honeywell-navy mb-4">
            Why Top Manufacturers Trust Us
          </Heading>
          <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true"></div>
        </div>

        {/* USP grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {usps.map((usp) => (
            <div key={usp.title}>
              <div className="text-center group">
                <IconBox
                  icon={iconMap[usp.iconName] || <FaCogs className="w-6 h-6" />}
                  size="lg"
                  variant="primary"
                  className="mx-auto mb-5 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-display font-bold text-honeywell-navy text-xl mb-2">
                  {usp.title}
                </h3>
                <p className="text-brand-steelGray font-body text-sm leading-relaxed">
                  {usp.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA group */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 md:mt-12">
          <Button
            href="/contact-us/"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Contact Us
          </Button>
          <Button
            href="/contact-us/"
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
