

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { homepageTestimonials } from '@/data/homepage';

/**
 * TestimonialsSection — Section 08
 *
 * Social proof. Placeholder-safe — card content renders
 * correctly with role-based names until real testimonials
 * are provided.
 *
 * Components: TestimonialCard, Section, Container, Heading
 * @see HOMEPAGE_ARCHITECTURE.md § Section 08
 */
export function TestimonialsSection() {
  return (
    <Section bg="white" aria-labelledby="testimonials-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" underline="center" as="h2" id="testimonials-heading" className="text-honeywell-navy mb-4">
            Trusted by Manufacturers Across Gujarat
          </Heading>

        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {homepageTestimonials.map((testimonial, i) => (
            <div key={i}>
              <TestimonialCard
                name={testimonial.name}
                company={testimonial.company}
                role={(testimonial as any).role}
                quote={testimonial.quote}
                imageSrc={testimonial.imageSrc}
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
