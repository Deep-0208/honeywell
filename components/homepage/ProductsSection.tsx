

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
        <div className="text-center mb-8 md:mb-12 flex flex-col items-center">
          <Heading variant="section" as="h2" id="products-heading" className="text-honeywell-navy mb-4">
            Our Products
          </Heading>
          <div className="w-16 h-1 bg-honeywell-red rounded-full" aria-hidden="true"></div>
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
            href="/products/"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            View All Products
          </Button>
        </div>
      </Container>
    </Section>
  );
}
