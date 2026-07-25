import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { trunnionMountedCylinderData } from '@/data/hydraulic-cylinders/trunnion-mounted-hydraulic-cylinder';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: trunnionMountedCylinderData.seo.title,
    description: trunnionMountedCylinderData.seo.description,
    canonical: trunnionMountedCylinderData.seo.url,
    image: trunnionMountedCylinderData.seo.image,
  }),
  title: {
    absolute: trunnionMountedCylinderData.seo.title,
  },
};

export default function TrunnionMountedCylinderPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(trunnionMountedCylinderData)} />
      <ProductPage data={trunnionMountedCylinderData} />
    </>
  );
}
