import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { weldedCylinderData } from '@/data/hydraulic-cylinders/welded-hydraulic-cylinders';

export const metadata: Metadata = {
  ...buildMetadata({
    title: weldedCylinderData.seo.title,
    description: weldedCylinderData.seo.description,
    canonical: weldedCylinderData.seo.url,
    image: weldedCylinderData.seo.image,
  }),
  title: {
    absolute: weldedCylinderData.seo.title,
  },
};

export default function WeldedHydraulicCylindersPage() {
  const schema = buildProductSchema(weldedCylinderData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={weldedCylinderData} />
    </>
  );
}
