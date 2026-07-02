import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { LocationCard } from '@/components/cards/LocationCard';
import { homepageLocations } from '@/data/homepage';

export interface SiteLocationsSectionProps {
  title?: string;
  description?: string;
}

/**
 * SiteLocationsSection
 * 
 * Standardized site-wide Locations layout featuring a 3-column grid of our primary service regions.
 * Pulls the 6 primary regions from homepageLocations.
 */
export function SiteLocationsSection({
  title = "Serving Manufacturers Across Gujarat & India",
  description = "We provide rapid manufacturing and dispatch services to industries across the state and nationwide.",
}: SiteLocationsSectionProps) {
  return (
    <Section bg="gray" id="local-service-areas" aria-labelledby="local-service-areas-heading">
      <Container>
        <div className="text-center flex flex-col items-center max-w-3xl mx-auto mb-12">
          <Heading variant="section" underline="center" as="h2" id="local-service-areas-heading" className="text-honeywell-navy mb-4">
            {title}
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-justify">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {homepageLocations.map((loc, idx) => (
            <LocationCard
              key={`${loc.city}-${idx}`}
              city={loc.city}
              description={loc.description}
              industries={loc.industries}
              href="/contact-us"
              ctaText="Enquire Now"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
