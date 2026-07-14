import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { doubleActingCylinderData } from '@/data/hydraulic-cylinders/double-acting-hydraulic-cylinders';

export const metadata: Metadata = {
  ...buildMetadata({
    title: doubleActingCylinderData.seo.title,
    description: doubleActingCylinderData.seo.description,
    canonical: doubleActingCylinderData.seo.url,
    image: doubleActingCylinderData.seo.image,
  }),
  title: {
    absolute: doubleActingCylinderData.seo.title,
  },
};

export default function DoubleActingHydraulicCylindersPage() {
  const schema = buildProductSchema(doubleActingCylinderData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={doubleActingCylinderData} />
    </>
  );
}
