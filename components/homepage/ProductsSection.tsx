

import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { ProductCard } from '@/components/cards/ProductCard';
import { ArrowRight } from 'lucide-react';
import { homepageProducts } from '@/data/homepage';

/**
 * ProductsSection — Section 03
 *
 * SEO authority distribution to 4 product pillar pages.
 * First conversion opportunity after trust strip.
 *
 * Components: ProductCard, Section, Container, Heading, Button
 * @see HOMEPAGE_ARCHITECTURE.md § Section 03
 */
export function ProductsSection() {
  return (
    <Section bg="gray" aria-labelledby="products-heading">
      <Container>
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-xs sm:text-sm font-bold font-body uppercase tracking-[0.15em] text-honeywell-red mb-3">
            Our Products
          </p>
          <Heading variant="section" as="h2" id="products-heading">
            Precision-Engineered Hydraulic Equipment
          </Heading>
          <p className="text-brand-steelGray font-body text-base sm:text-lg max-w-2xl mx-auto mt-4">
            From individual replacement cylinders to complete turnkey hydraulic
            systems. Built to your exact specifications in our Ahmedabad
            manufacturing facility.
          </p>
        </div>

        {/* Product cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {homepageProducts.map((product) => (
            <div key={product.href}>
              <ProductCard
                title={product.title}
                description={product.description}
                category={product.category}
                imageSrc={product.imageSrc}
                href={product.href}
                ctaText={product.ctaText}
              />
            </div>
          ))}
        </div>

        {/* Section CTA */}
        <div className="text-center mt-10">
          <Button
            href="/contact-us/"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Contact Us
          </Button>
        </div>
      </Container>
    </Section>
  );
}
