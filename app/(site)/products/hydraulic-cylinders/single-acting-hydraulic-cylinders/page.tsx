import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { singleActingCylinderData } from '@/data/hydraulic-cylinders/single-acting-hydraulic-cylinders';

export const metadata: Metadata = {
  ...buildMetadata({
    title: singleActingCylinderData.seo.title,
    description: singleActingCylinderData.seo.description,
    canonical: singleActingCylinderData.seo.url,
    image: singleActingCylinderData.seo.image,
  }),
  title: {
    absolute: singleActingCylinderData.seo.title,
  },
};

export default function SingleActingHydraulicCylindersPage() {
  const schema = buildProductSchema(singleActingCylinderData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={singleActingCylinderData} />
    </>
  );
}
