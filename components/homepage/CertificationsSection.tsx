import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { FaAward, FaBuilding, FaFileContract, FaIndustry } from 'react-icons/fa';
import { certifications } from '@/data/homepage';

const iconMap: Record<string, React.ReactNode> = {
  Award: <FaAward className="w-8 h-8" />,
  Building2: <FaBuilding className="w-8 h-8" />,
  FileCheck2: <FaFileContract className="w-8 h-8" />,
  Factory: <FaIndustry className="w-8 h-8" />,
};

export function CertificationsSection() {
  return (
    <Section bg="gray" aria-labelledby="certifications-heading">
      <Container>
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="certifications-heading" className="text-honeywell-navy mb-4">
            Quality Certifications & Compliance
          </Heading>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-brand-surfaceGray border border-slate-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-elevated transition-shadow duration-300">
              <IconBox
                icon={iconMap[cert.iconName] || <FaAward className="w-8 h-8" />}
                size="lg"
                variant="primary"
                className="mx-auto mb-4"
              />
              <Heading variant="card" as="h3" className="mb-2">
                {cert.title}
              </Heading>
              <p className="text-brand-steelGray font-body text-sm leading-relaxed ">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
