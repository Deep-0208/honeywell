import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { accumulatorPowerPackData } from '@/data/hydraulic-power-packs/accumulator-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: accumulatorPowerPackData.seo.title,
    description: accumulatorPowerPackData.seo.description,
    canonical: accumulatorPowerPackData.seo.url,
    image: accumulatorPowerPackData.seo.image,
  }),
  title: {
    absolute: accumulatorPowerPackData.seo.title,
  },
};

export default function AccumulatorPowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(accumulatorPowerPackData)} />
      <ProductPage data={accumulatorPowerPackData} />
    </>
  );
}
