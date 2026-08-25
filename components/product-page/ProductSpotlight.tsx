import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import type { SpotlightData } from './types';

/**
 * ProductSpotlight — Case study / project spotlight.
 *
 * CASE STUDY badge, heading, stats strip (3-column),
 * 3-column timeline cards with numbered badges.
 * Last card supports dark variant (navy background).
 */
export function ProductSpotlight({ badge = 'CASE STUDY',
  heading,
  subheading,
  stats,
  phases,
  bg = 'white' }: SpotlightData & { bg?: 'white' | 'gray' }) {
  return (
    <Section aria-labelledby="project-spotlight-heading" bg={bg} id="project-spotlight">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <Badge variant="years">{badge}</Badge>
            <Heading
              id="project-spotlight-heading"
              variant="section"
              as="h2"
              underline="center"
              className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mt-4 mb-3"
            >
              {heading}
            </Heading>
            <p className="text-brand-steelGray font-body text-lg text-center">
              {subheading}
            </p>
          </div>

          {/* Stats Strip */}
          {stats.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="bg-brand-surfaceGray rounded-xl p-4 sm:p-5 text-center border border-slate-200">
                  <span className="block text-2xl md:text-3xl font-display font-bold text-honeywell-red">
                    {stat.value}
                  </span>
                  <span className="text-xs font-body text-brand-steelGray uppercase tracking-wider mt-1 block">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Timeline Cards */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-200"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {phases.map((phase, idx) => {
                const isDark = phase.variant === 'dark';
                return (
                  <div
                    key={idx}
                    className={`relative rounded-xl p-7 transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-honeywell-red ${
                      isDark
                        ? 'bg-honeywell-navy'
                        : 'bg-white border border-slate-200'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mb-5 relative z-10 ${
                        idx === 0 || isDark
                          ? 'bg-honeywell-red text-white'
                          : 'bg-honeywell-navy text-white'
                      }`}
                    >
                      {phase.number}
                    </div>
                    <Heading
                      variant="subsection"
                      as="h3"
                      className={`text-lg font-display font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-honeywell-navy'
                      }`}
                    >
                      {phase.title}
                    </Heading>
                    <div
                      className={`text-sm font-body leading-relaxed text-justify ${
                        isDark ? 'text-brand-borderGray mb-6' : 'text-brand-steelGray'
                      }`}
                    >
                      {phase.description}
                    </div>
                    {phase.cta && isDark && (
                      <Button
                        href={phase.cta.href}
                        variant="primary"
                        size="md"
                        className="font-bold w-full text-center justify-center"
                      >
                        {phase.cta.label} <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
