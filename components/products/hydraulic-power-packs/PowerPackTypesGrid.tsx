import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/cards/ProductCard';

export function PowerPackTypesGrid() {
  const products = [
    {
      title: "3 Phase Industrial Power Packs",
      description: "Heavy-duty power units with high-efficiency 3-phase motors and large reservoir capacities for 24/7 continuous factory operation.",
      href: "/products/hydraulic-power-packs/3-phase/",
      image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-3-phase.webp"
    },
    {
      title: "High-Low Power Packs",
      description: "Dual-pump systems engineered for press machines, utilizing a high-volume/low-pressure and low-volume/high-pressure circuit for massive energy savings.",
      href: "/products/hydraulic-power-packs/high-low/",
      image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-single-phase.webp"
    },
    {
      title: "Compact & Micro Power Packs",
      description: "Miniature AC and DC power units providing significant force in a compact vertical footprint, ideal for CNC clamping and small scissor lifts.",
      href: "/products/hydraulic-power-packs/compact/",
      image: "/images/products/hydraulic-power-packs/hand-lever-operated-power-pack.webp"
    },
    {
      title: "Mobile & DC Power Packs",
      description: "12V and 24V DC motor-driven power packs engineered to withstand severe vibration and shock loads for vehicular and material handling integration.",
      href: "/products/hydraulic-power-packs/mobile/",
      image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-with-multiple-solenoid-valve.webp"
    },
    {
      title: "Custom Turnkey Power Packs",
      description: "Bespoke fluid power generation built from the ground up for Special Purpose Machines (SPMs) with full PLC integration and custom manifold logic.",
      href: "/products/hydraulic-power-packs/custom/",
      image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-with-accumulator.webp"
    }
  ];

  return (
    <Section bg="gray" id="products">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4">
            Types of Hydraulic Power Packs We Manufacture
          </h2>
          <p className="text-lg text-brand-steelGray font-body">
            As a dedicated hydraulic power pack solutions provider, we build distinct architectures based on your required duty cycle, footprint, and operating environment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <ProductCard 
              key={idx}
              title={product.title}
              description={product.description}
              href={product.href}
              imageSrc={product.image}
              category="Power Pack"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
