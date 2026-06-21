import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { IconBox } from '@/components/ui/IconBox';
import { Calculator, Download, Wrench, PhoneCall, ArrowRight } from 'lucide-react';
import { actionCards } from '@/data/homepage';
import Link from 'next/link';

const iconMap: Record<string, React.ReactNode> = {
  Calculator: <Calculator className="w-6 h-6" />,
  Download: <Download className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  PhoneCall: <PhoneCall className="w-6 h-6" />,
};

export function ActionCardsSection() {
  return (
    <Section bg="white" aria-labelledby="action-cards-heading">
      <Container>
        <div className="sr-only" id="action-cards-heading">
          <h2>Quick Actions</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 relative z-20">
          {actionCards.map((card) => (
            <Link 
              key={card.title} 
              href={card.href}
              className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 flex flex-col items-center text-center group hover:border-honeywell-navy hover:shadow-elevated transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy"
            >
              <IconBox
                icon={iconMap[card.iconName] || <ArrowRight className="w-6 h-6" />}
                size="md"
                variant="outline"
                className="mb-4 group-hover:bg-honeywell-navy group-hover:text-white group-hover:border-honeywell-navy transition-colors duration-300"
              />
              <h3 className="font-display font-bold text-honeywell-navy text-lg mb-2">
                {card.title}
              </h3>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed mb-4 flex-grow">
                {card.description}
              </p>
              <div className="text-sm font-bold text-honeywell-red flex items-center gap-2 group-hover:text-honeywell-navy transition-colors mt-auto">
                {card.ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
