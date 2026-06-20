import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { trustMetrics, trustBadges } from '@/data/homepage';

/**
 * TrustStrip — Section 02
 *
 * Establishes credibility immediately below the hero with
 * factual metrics and verified trust badges.
 *
 * Components: Badge, Section, Container
 * @see HOMEPAGE_ARCHITECTURE.md § Section 02
 */
export function TrustStrip() {
  return (
    <Section bg="white" className="py-16 md:py-20 lg:py-24 border-y border-[#E2E8F0]">
      <Container>
        {/* Metrics row */}
        <div 
          className="flex flex-wrap items-center justify-center gap-x-12 sm:gap-x-16 lg:gap-x-24 gap-y-12"
          aria-label="Company performance metrics"
        >
          {trustMetrics.map((metric) => (
            <div key={metric.label} className="text-center group">
              <div className="font-display text-[40px] sm:text-[52px] leading-none font-semibold text-[#0D1B5C] mb-2 sm:mb-3 group-hover:scale-[1.02] transition-transform duration-300">
                {metric.value}
              </div>
              <p className="text-[11px] sm:text-[13px] text-[#E31B23] font-display font-bold uppercase tracking-[0.1em]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
