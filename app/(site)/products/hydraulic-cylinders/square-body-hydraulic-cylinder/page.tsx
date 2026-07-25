import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { squareBodyCylinderData } from '@/data/hydraulic-cylinders/square-body-hydraulic-cylinder';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: squareBodyCylinderData.seo.title,
    description: squareBodyCylinderData.seo.description,
    canonical: squareBodyCylinderData.seo.url,
    image: squareBodyCylinderData.seo.image,
  }),
  title: {
    absolute: squareBodyCylinderData.seo.title,
  },
};

export default function SquareBodyCylinderPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(squareBodyCylinderData)} />
      <ProductPage data={squareBodyCylinderData} />
    </>
  );
}
