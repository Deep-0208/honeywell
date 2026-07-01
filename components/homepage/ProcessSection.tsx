'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { FaClipboardList, FaTools, FaShieldAlt } from 'react-icons/fa';
import { GiDrill } from 'react-icons/gi';

import { processSteps } from '@/data/homepage';

/* Icon mapping */
const iconMap: Record<string, React.ReactNode> = {
  ClipboardList: <FaClipboardList className="w-6 h-6" />,
  PenTool: <FaTools className="w-6 h-6" />,
  Drill: <GiDrill className="w-6 h-6" />,
  ShieldCheck: <FaShieldAlt className="w-6 h-6" />,
};

/**
 * ProcessSection — Section 07
 *
 * 4-step manufacturing process. Engineering credibility
 * for B2B buyers who want to understand production.
 *
 * Components: IconBox, Section, Container, Heading
 * @see HOMEPAGE_ARCHITECTURE.md § Section 07
 */
export function ProcessSection() {

  return (
    <Section bg="white" aria-labelledby="process-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="process-heading" className="text-honeywell-navy mb-4">
            From Design to Dispatch
          </Heading>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connector line — desktop: horizontal, mobile: vertical */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 origin-left"
            aria-hidden="true"
          />
          <div
            className="lg:hidden absolute top-0 bottom-0 left-1/2 w-0.5 bg-slate-200 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number */}
                <div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-honeywell-navy text-white font-mono font-bold text-base sm:text-lg flex items-center justify-center mb-4 relative z-10 ring-4 ring-brand-surfaceGray"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <IconBox
                  icon={iconMap[step.iconName] || <FaClipboardList className="w-6 h-6" />}
                  size="md"
                  variant="outline"
                  className="mb-4"
                />

                {/* Content */}
                <Heading variant="card" as="h3" className="mb-2">
                  {step.title}
                </Heading>
                <p className="text-brand-steelGray font-body text-sm leading-relaxed max-w-[240px] text-justify">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12">
          <Button
            href="/request-quote"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Discuss Your Requirements
          </Button>
        </div>
      </Container>
    </Section>
  );
}
