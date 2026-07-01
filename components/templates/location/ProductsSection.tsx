/* eslint-disable */
import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ProductsSection({ data, bg = 'white' }: { data: any; bg?: 'white' | 'gray' }) {
  return (
    <Section bg={bg} aria-labelledby="products-heading">
      <Container>
        <div className="max-w-3xl mb-12">
          <Heading as="h2" id="products-heading" className="mb-6">{data.title}</Heading>
          <p className="text-lg text-brand-darkSlate">{data.description}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.items.map((product: any) => (
            <Link key={product.id} href={product.href} className="block h-full group">
              <Card variant="interactive" className="h-full flex flex-col">
                <div className="p-6 flex flex-col h-full">
                  <Heading variant="card" as="h3" className="mb-3 text-honeywell-navy">
                    {product.title}
                  </Heading>
                  <p className="text-brand-darkSlate text-sm leading-relaxed mb-6 flex-grow">{product.description}</p>
                  
                  <div className="flex items-center justify-between text-honeywell-navy group-hover:text-honeywell-red font-medium text-sm transition-colors duration-200 mt-auto pt-4 border-t border-slate-200/60">
                    <span>View Product</span>
                    <ArrowRight className="w-4 h-4 shrink-0 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
