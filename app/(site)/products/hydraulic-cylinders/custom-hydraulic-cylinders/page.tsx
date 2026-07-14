import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { customCylinderData } from '@/data/hydraulic-cylinders/custom-hydraulic-cylinders';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: customCylinderData.seo.title,
    description: customCylinderData.seo.description,
    canonical: customCylinderData.seo.url,
    image: customCylinderData.seo.image,
  }),
  title: {
    absolute: customCylinderData.seo.title,
  },
};

export default function CustomHydraulicCylindersPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(customCylinderData)} />
      <ProductPage data={customCylinderData} />
    </>
  );
}
