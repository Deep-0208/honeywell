import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { clevisMountedCylinderData } from '@/data/hydraulic-cylinders/clevis-mounted-hydraulic-cylinder';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: clevisMountedCylinderData.seo.title,
    description: clevisMountedCylinderData.seo.description,
    canonical: clevisMountedCylinderData.seo.url,
    image: clevisMountedCylinderData.seo.image,
  }),
  title: {
    absolute: clevisMountedCylinderData.seo.title,
  },
};

export default function ClevisMountedCylinderPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(clevisMountedCylinderData)} />
      <ProductPage data={clevisMountedCylinderData} />
    </>
  );
}
