import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { flangeMountedCylinderData } from '@/data/hydraulic-cylinders/flange-mounted-hydraulic-cylinder';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: flangeMountedCylinderData.seo.title,
    description: flangeMountedCylinderData.seo.description,
    canonical: flangeMountedCylinderData.seo.url,
    image: flangeMountedCylinderData.seo.image,
  }),
  title: {
    absolute: flangeMountedCylinderData.seo.title,
  },
};

export default function FlangeMountedCylinderPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(flangeMountedCylinderData)} />
      <ProductPage data={flangeMountedCylinderData} />
    </>
  );
}
