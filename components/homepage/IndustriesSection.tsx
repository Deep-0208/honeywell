

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { IndustryCard } from '@/components/cards/IndustryCard';
import {
  Cog,
  Car,
  Factory,
  Construction,
  Package,
  Wrench,
} from 'lucide-react';
import { homepageIndustries } from '@/data/homepage';

/* Icon mapping */
const iconMap: Record<string, React.ReactNode> = {
  Cog: <Cog className="w-6 h-6" />,
  Car: <Car className="w-6 h-6" />,
  Factory: <Factory className="w-6 h-6" />,
  Construction: <Construction className="w-6 h-6" />,
  Package: <Package className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
};

/**
 * IndustriesSection — Section 05
 *
 * SEO internal linking to industry pillar pages.
 * Demonstrates breadth of B2B application.
 *
 * Components: IndustryCard, Section, Container, Heading, Button
 * @see HOMEPAGE_ARCHITECTURE.md § Section 05
 */
export function IndustriesSection() {
  return (
    <Section bg="gray" aria-labelledby="industries-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" as="h2" id="industries-heading" className="text-honeywell-navy mb-4">
            Industries We Serve
          </Heading>
          <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true"></div>
        </div>

        {/* Industry cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homepageIndustries.map((industry) => (
            <div key={industry.href}>
              <IndustryCard
                industryName={industry.industryName}
                description={industry.description}
                icon={iconMap[industry.iconName] || <Cog className="w-6 h-6" />}
                href={industry.href}
              />
            </div>
          ))}
        </div>

        {/* Hub page link */}
        <div className="text-center mt-10">
          <Button href="/industries/" variant="outline" size="lg">
            View All Industries
          </Button>
        </div>
      </Container>
    </Section>
  );
}
