/* eslint-disable */
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { 
  FaCogs, 
  FaCar, 
  FaIndustry, 
  FaPills, 
  FaFlask, 
  FaBox, 
  FaWrench,
  FaShip
} from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  'plastic-moulding': <FaCogs className="w-6 h-6" />,
  'plastic': <FaCogs className="w-6 h-6" />,
  'textile': <FaIndustry className="w-6 h-6" />,
  'auto-parts': <FaCar className="w-6 h-6" />,
  'pharma': <FaPills className="w-6 h-6" />,
  'chemical': <FaFlask className="w-6 h-6" />,
  'chemicals': <FaFlask className="w-6 h-6" />,
  'material-handling': <FaBox className="w-6 h-6" />,
  'ship-breaking': <FaShip className="w-6 h-6" />,
  'brass-parts': <FaWrench className="w-6 h-6" />,
};

export function IndustriesSection({ data, bg = 'gray' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="industries-heading">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading variant="section" underline="center" as="h2" id="industries-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate leading-relaxed md:text-center">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.items.map((industry: any) => (
            <IndustryCard
              key={industry.id}
              industryName={industry.title}
              description={industry.description}
              icon={iconMap[industry.id] || <FaIndustry className="w-6 h-6" />}
              href={industry.href}
              ctaText="View Industry"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
