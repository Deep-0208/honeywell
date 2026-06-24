

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { LocationCard } from '@/components/cards/LocationCard';
import { homepageLocations } from '@/data/homepage';

/**
 * LocationsSection — Section 09
 *
 * Local SEO: distributes authority to location pillar pages.
 * Includes NAP block with PostalAddress schema markup.
 *
 * Components: LocationCard, Section, Container, Heading
 * @see HOMEPAGE_ARCHITECTURE.md § Section 09
 */
export function LocationsSection() {
  return (
    <Section bg="white" aria-labelledby="locations-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" as="h2" id="locations-heading" className="text-honeywell-navy mb-4">
            Serving Manufacturers Across Gujarat &amp; India
          </Heading>
          <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true"></div>
        </div>

        {/* Location cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {homepageLocations.map((loc, index) => (
            <div key={`${loc.city}-${index}`}>
              <LocationCard
                city={loc.city}
                description={loc.description}
                industries={loc.industries}
                href={loc.href}
                ctaText={loc.ctaText}
              />
            </div>
          ))}
        </div>

        {/* NAP block — Local SEO critical */}
        <div>
          <address
            className="not-italic text-center text-sm text-brand-steelGray font-body pt-8 border-t border-slate-200"
            itemScope
            itemType="https://schema.org/PostalAddress"
          >
            <strong className="text-honeywell-navy font-display text-base">
              Honeywell Hydraulics
            </strong>
            <br />
            <span itemProp="streetAddress">
              B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road No. 15,
              Kathwada GIDC
            </span>
            <br />
            <span itemProp="addressLocality">Ahmedabad</span>,{' '}
            <span itemProp="addressRegion">Gujarat</span>{' '}
            <span itemProp="postalCode">382430</span>
            <br />
            <a
              href="tel:+91-9924343873"
              className="text-honeywell-navy hover:text-honeywell-red transition-colors font-mono text-base sm:text-[13px] tracking-wide mt-1 inline-block min-h-[48px] flex items-center justify-center"
            >
              +91 99243 43873
            </a>
          </address>
        </div>
      </Container>
    </Section>
  );
}
