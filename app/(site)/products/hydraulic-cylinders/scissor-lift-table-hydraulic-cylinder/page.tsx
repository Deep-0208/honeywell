import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { scissorLiftCylinderData } from '@/data/hydraulic-cylinders/scissor-lift-table-hydraulic-cylinder';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: scissorLiftCylinderData.seo.title,
    description: scissorLiftCylinderData.seo.description,
    canonical: scissorLiftCylinderData.seo.url,
    image: scissorLiftCylinderData.seo.image,
  }),
  title: {
    absolute: scissorLiftCylinderData.seo.title,
  },
};

export default function ScissorLiftCylinderPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(scissorLiftCylinderData)} />
      <ProductPage data={scissorLiftCylinderData} />
    </>
  );
}
