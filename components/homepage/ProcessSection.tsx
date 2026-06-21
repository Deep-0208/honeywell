'use client';

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import {
  ClipboardList,
  PenTool,
  Drill,
  ShieldCheck,
} from 'lucide-react';

import { processSteps } from '@/data/homepage';

/* Icon mapping */
const iconMap: Record<string, React.ReactNode> = {
  ClipboardList: <ClipboardList className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  Drill: <Drill className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
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
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold font-body uppercase tracking-[0.15em] text-honeywell-red mb-3">
            Our Process
          </p>
          <Heading variant="section" as="h2" id="process-heading">
            From Design to Dispatch
          </Heading>
          <p className="text-brand-steelGray font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Engineering precision at every step of the manufacturing process.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-slate-200 origin-left"
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
                  className="w-12 h-12 rounded-full bg-honeywell-navy text-white font-mono font-bold text-lg flex items-center justify-center mb-4 relative z-10 ring-4 ring-brand-surfaceGray"
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <IconBox
                  icon={iconMap[step.iconName] || <ClipboardList className="w-6 h-6" />}
                  size="md"
                  variant="outline"
                  className="mb-4"
                />

                {/* Content */}
                <h3 className="font-display font-bold text-honeywell-navy text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-steelGray font-body text-sm leading-relaxed max-w-[240px]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
