import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { handPumpPowerPackData } from '@/data/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: handPumpPowerPackData.seo.title,
    description: handPumpPowerPackData.seo.description,
    canonical: handPumpPowerPackData.seo.url,
    image: handPumpPowerPackData.seo.image,
  }),
  title: {
    absolute: handPumpPowerPackData.seo.title,
  },
};

export default function HandPumpPowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(handPumpPowerPackData)} />
      <ProductPage data={handPumpPowerPackData} />
    </>
  );
}
