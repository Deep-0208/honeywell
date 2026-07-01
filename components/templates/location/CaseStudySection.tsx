import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';

export interface CaseStudyData {
  title: string;
  challenge: string;
  solution: string;
  resultStat: string;
  resultLabel: string;
}

export function CaseStudySection({ data, bg = 'white' }: { data: CaseStudyData; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="case-study-heading">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.12em] text-honeywell-red font-body font-semibold mb-2">
              Case Study
            </span>
            <Heading variant="section" as="h2" id="case-study-heading"
              className="text-3xl sm:text-4xl text-honeywell-navy mb-4">
              {data.title}
            </Heading>
            <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6 text-center">
              <p className="text-xs uppercase tracking-wider text-brand-steelGray font-body mb-2">Challenge</p>
              <p className="text-sm text-brand-darkSlate font-body leading-relaxed">{data.challenge}</p>
            </div>
            <div className="bg-brand-surfaceGray border border-slate-200 rounded-sm p-6 text-center">
              <p className="text-xs uppercase tracking-wider text-brand-steelGray font-body mb-2">Solution</p>
              <p className="text-sm text-brand-darkSlate font-body leading-relaxed">{data.solution}</p>
            </div>
            <div className="bg-honeywell-navy rounded-sm p-6 text-center text-white flex flex-col items-center justify-center">
              <p className="text-xs uppercase tracking-wider text-brand-borderGray font-body mb-2">Result</p>
              <p className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{data.resultStat}</p>
              <p className="text-sm text-brand-borderGray font-body">{data.resultLabel}</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
