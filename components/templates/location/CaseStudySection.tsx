import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Award, CheckCircle2, TrendingUp } from 'lucide-react';

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
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honeywell-red/10 border border-honeywell-red/20 text-honeywell-red font-mono text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              LOCAL AHMEDABAD CASE STUDY
            </span>
            <Heading variant="section" underline="center" as="h2" id="case-study-heading">
              {data.title}
            </Heading>
          </div>

          {/* Main Case Study Card — dark navy with red top border */}
          <div className="rounded-2xl bg-gradient-to-br from-honeywell-navy via-slate-900 to-slate-950 p-8 md:p-12 text-white shadow-2xl border border-slate-800 relative overflow-hidden border-t-4 border-t-honeywell-red">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" aria-hidden="true" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Challenge & Solution */}
              <div className="lg:col-span-8 space-y-5">
                <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="inline-block text-xs font-mono font-bold text-honeywell-red uppercase tracking-wider mb-2">
                    THE CHALLENGE
                  </span>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {data.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="inline-block text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-2">
                    OUR KATHWADA ENGINEERING SOLUTION
                  </span>
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                    {data.solution}
                  </p>
                </div>
              </div>

              {/* Result Stat — with pulse animation */}
              <div className="lg:col-span-4 h-full flex flex-col justify-center items-center text-center p-8 rounded-xl bg-gradient-to-b from-honeywell-red/15 to-transparent border border-honeywell-red/20">
                <div className="p-3.5 rounded-full bg-honeywell-red/20 mb-4 animate-pulse">
                  <TrendingUp className="w-7 h-7 text-white" />
                </div>
                <span className="text-5xl md:text-6xl font-mono font-bold text-white tracking-tight mb-2">
                  {data.resultStat}
                </span>
                <span className="text-sm font-body font-semibold text-slate-300 uppercase tracking-wider leading-snug">
                  {data.resultLabel}
                </span>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  VERIFIED — ODHAV GIDC
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
