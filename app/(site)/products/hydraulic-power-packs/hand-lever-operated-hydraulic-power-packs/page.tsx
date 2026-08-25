import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { handLeverPowerPackData } from '@/data/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: handLeverPowerPackData.seo.title,
    description: handLeverPowerPackData.seo.description,
    canonical: handLeverPowerPackData.seo.url,
    image: handLeverPowerPackData.seo.image,
  }),
  title: {
    absolute: handLeverPowerPackData.seo.title,
  },
};

export default function HandLeverPowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(handLeverPowerPackData)} />
      <ProductPage data={handLeverPowerPackData} />
    </>
  );
}
