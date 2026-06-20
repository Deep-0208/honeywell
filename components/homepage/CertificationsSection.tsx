import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { IconBox } from '@/components/ui/IconBox';
import { Award, Building2, FileCheck2, Factory } from 'lucide-react';
import { certifications } from '@/data/homepage';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-8 h-8" />,
  Building2: <Building2 className="w-8 h-8" />,
  FileCheck2: <FileCheck2 className="w-8 h-8" />,
  Factory: <Factory className="w-8 h-8" />,
};

export function CertificationsSection() {
  return (
    <Section bg="white" aria-labelledby="certifications-heading">
      <Container>
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold font-body uppercase tracking-[0.15em] text-[#E31B23] mb-3">
            Standards & Compliance
          </p>
          <Heading variant="section" as="h2" id="certifications-heading">
            Quality Certifications & Compliance
          </Heading>
          <p className="text-[#64748B] font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
            Our manufacturing processes adhere to the highest international quality standards,
            ensuring precision, reliability, and safety in every hydraulic system we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.title} className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-6 text-center hover:shadow-elevated transition-shadow duration-300">
              <IconBox
                icon={iconMap[cert.iconName] || <Award className="w-8 h-8" />}
                size="lg"
                variant="primary"
                className="mx-auto mb-4"
              />
              <h3 className="font-display font-bold text-[#0D1B5C] text-lg mb-2">
                {cert.title}
              </h3>
              <p className="text-[#64748B] font-body text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
