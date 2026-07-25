import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { goodsLiftCylinderData } from '@/data/hydraulic-cylinders/goods-lift-hydraulic-cylinders';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: goodsLiftCylinderData.seo.title,
    description: goodsLiftCylinderData.seo.description,
    canonical: goodsLiftCylinderData.seo.url,
    image: goodsLiftCylinderData.seo.image,
  }),
  title: {
    absolute: goodsLiftCylinderData.seo.title,
  },
};

export default function GoodsLiftHydraulicCylindersPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(goodsLiftCylinderData)} />
      <ProductPage data={goodsLiftCylinderData} />
    </>
  );
}
