import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { tieRodCylinderData } from '@/data/hydraulic-cylinders/tie-rod-hydraulic-cylinders';

export const metadata: Metadata = {
  ...buildMetadata({
    title: tieRodCylinderData.seo.title,
    description: tieRodCylinderData.seo.description,
    canonical: tieRodCylinderData.seo.url,
    image: tieRodCylinderData.seo.image,
  }),
  title: {
    absolute: tieRodCylinderData.seo.title,
  },
};

export default function TieRodHydraulicCylindersPage() {
  const schema = buildProductSchema(tieRodCylinderData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={tieRodCylinderData} />
    </>
  );
}
