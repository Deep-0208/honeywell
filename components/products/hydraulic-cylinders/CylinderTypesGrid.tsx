import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { ProductCard } from '@/components/cards/ProductCard';

export function CylinderTypesGrid() {
  const cylinders = [
    {
      title: "Double Acting Hydraulic Cylinders",
      description: "Utilize hydraulic pressure to provide force in both extend and retract strokes. The backbone of modern industrial automation.",
      category: "Hydraulic Cylinders",
      imageSrc: "/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinder-manufacturer.webp",
      href: "/products/hydraulic-cylinders/double-acting/"
    },
    {
      title: "Single Acting Hydraulic Cylinders",
      description: "Apply hydraulic force in one direction, relying on external force, gravity, or an internal spring for return.",
      category: "Hydraulic Cylinders",
      imageSrc: "/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder-manufacturer.webp",
      href: "/products/hydraulic-cylinders/single-acting/"
    },
    {
      title: "Tie Rod Hydraulic Cylinders",
      description: "Standard in industrial manufacturing, utilizing high-strength threaded steel rods to hold end caps securely.",
      category: "Hydraulic Cylinders",
      imageSrc: "/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp",
      href: "/products/hydraulic-cylinders/tie-rod/"
    },
    {
      title: "Welded Hydraulic Cylinders",
      description: "Heavy-duty construction with end caps welded directly to the barrel. Ideal for high-pressure applications.",
      category: "Hydraulic Cylinders",
      imageSrc: "/images/products/welded-cylinder.webp",
      href: "/products/hydraulic-cylinders/welded/"
    },
    {
      title: "Telescopic Hydraulic Cylinders",
      description: "Provide exceptionally long stroke from a highly compact retracted length. Perfect for space-constrained applications.",
      category: "Hydraulic Cylinders",
      imageSrc: "/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp",
      href: "/products/hydraulic-cylinders/telescopic/"
    },
    {
      title: "Custom Hydraulic Cylinders",
      description: "Engineered-to-order cylinders tailored to your exact bore, stroke, pressure, and mounting specifications.",
      category: "Hydraulic Cylinders",
      imageSrc: "/images/products/custom-cylinder.webp",
      href: "/products/hydraulic-cylinders/custom/"
    }
  ];

  return (
    <Section bg="gray" id="products">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0D1B5C] mb-4">
            Types of Hydraulic Cylinders
          </h2>
          <p className="text-lg text-[#64748B] font-body">
            We manufacture a comprehensive range of hydraulic cylinder types, each engineered for specific industrial applications and mounting requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cylinders.map((cyl, idx) => (
            <ProductCard 
              key={idx}
              title={cyl.title}
              description={cyl.description}
              category={cyl.category}
              imageSrc={cyl.imageSrc}
              href={cyl.href}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
