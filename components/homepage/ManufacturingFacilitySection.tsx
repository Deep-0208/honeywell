import React from 'react';
import Image from 'next/image';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Cog,
  Target,
  ShieldCheck,
  Gauge,
  Users,
} from 'lucide-react';
import { manufacturingHighlights } from '@/data/homepage';

/* Icon mapping */
const iconMap: Record<string, React.ReactNode> = {
  Cog: <Cog className="w-5 h-5" />,
  Target: <Target className="w-5 h-5" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
  Users: <Users className="w-5 h-5" />,
};

/**
 * ManufacturingFacilitySection
 *
 * Demonstrates real manufacturing capability to B2B buyers.
 * Two-column layout: facility image (left) + capability highlights (right).
 *
 * This section addresses the audit finding that the homepage looks
 * like a distributor rather than a manufacturer.
 *
 * Image uses placeholder per IMAGE MANAGEMENT RULE.
 * Final image: honeywell-manufacturing-facility-kathwada.webp
 * Alt: Honeywell Hydraulics manufacturing facility at Kathwada GIDC, Ahmedabad
 * Priority: Critical
 */
export function ManufacturingFacilitySection() {
  return (
    <Section bg="white" aria-labelledby="facility-heading">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ─── Left Column — Facility Image ─── */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-lg bg-[#F1F5F9] border border-[#E2E8F0] overflow-hidden shadow-elevated">
              <Image
                src="/images/facility/honeywell-manufacturing-facility-kathwada.webp"
                alt="Honeywell Hydraulics manufacturing facility at Kathwada GIDC, Ahmedabad — CNC machining and hydraulic cylinder assembly"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />

              {/* Location label overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-[#E2E8F0] rounded-sm px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#E31B23] font-body mb-0.5">
                  Manufacturing Headquarters
                </p>
                <p className="text-sm font-display font-bold text-[#0D1B5C]">
                  Kathwada GIDC, Ahmedabad, Gujarat
                </p>
              </div>
            </div>

            {/* Decorative accent — engineering precision feel */}
            <div
              className="hidden lg:block absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#E2E8F0] rounded-lg -z-10"
              aria-hidden="true"
            />
          </div>

          {/* ─── Right Column — Manufacturing Capabilities ─── */}
          <div className="order-1 lg:order-2">
            <p className="text-xs sm:text-sm font-bold font-body uppercase tracking-[0.15em] text-[#E31B23] mb-3">
              Kathwada GIDC, Ahmedabad
            </p>
            <Heading variant="section" as="h2" id="facility-heading" className="mb-4">
              Our Manufacturing Facility
            </Heading>
            <p className="text-[#64748B] font-body text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Every hydraulic cylinder and power pack is engineered and manufactured
              in-house at our Kathwada facility. Factory-direct production ensures
              quality control at every stage — from raw material to final dispatch.
            </p>

            {/* Capability highlights */}
            <div className="space-y-5 mb-8">
              {manufacturingHighlights.map((highlight) => (
                <div key={highlight.title} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-lg bg-[#0D1B5C]/[0.06] flex items-center justify-center shrink-0 group-hover:bg-[#E31B23]/10 transition-colors duration-200">
                    <span className="text-[#0D1B5C] group-hover:text-[#E31B23] transition-colors duration-200">
                      {iconMap[highlight.iconName] || <Cog className="w-5 h-5" />}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-[#0D1B5C] text-base mb-0.5">
                      {highlight.title}
                    </h3>
                    <p className="text-[#64748B] font-body text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button
              href="/manufacturing-facility/"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              View Manufacturing Capabilities
            </Button>
          </div>

        </div>
      </Container>
    </Section>
  );
}
