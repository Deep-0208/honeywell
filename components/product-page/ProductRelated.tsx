import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { ProductCard } from '@/components/cards/ProductCard';
import type { RelatedProductsData } from './types';

/**
 * ProductRelated — Related products grid.
 *
 * Section header with "Browse all products" link and 3-column grid
 * using existing ProductCard component.
 */
export function ProductRelated({
  heading = 'Related Products',
  description,
  browseAllHref = '/products',
  items,
}: RelatedProductsData) {
  return (
    <Section aria-labelledby="related-products-heading" bg="gray" id="related-products">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Heading
            id="related-products-heading"
            variant="section"
            as="h2"
            underline="center"
            className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4"
          >
            {heading}
          </Heading>
          <p className="text-lg text-brand-steelGray font-body mb-6">
            {description}
          </p>
          <Link
            href={browseAllHref}
            className="text-honeywell-red font-bold hover:underline font-body inline-block"
          >
            Browse all products →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              description={product.description}
              category={product.category}
              imageSrc={product.imageSrc}
              href={product.href}
              ctaText={product.ctaText}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
