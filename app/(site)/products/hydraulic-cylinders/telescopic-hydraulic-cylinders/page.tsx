import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { telescopicCylinderData } from '@/data/hydraulic-cylinders/telescopic-hydraulic-cylinders';

export const metadata: Metadata = {
  ...buildMetadata({
    title: telescopicCylinderData.seo.title,
    description: telescopicCylinderData.seo.description,
    canonical: telescopicCylinderData.seo.url,
    image: telescopicCylinderData.seo.image,
  }),
  title: {
    absolute: telescopicCylinderData.seo.title,
  },
};

export default function TelescopicHydraulicCylindersPage() {
  const schema = buildProductSchema(telescopicCylinderData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={telescopicCylinderData} />
    </>
  );
}
