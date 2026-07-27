import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { highLowPowerPackData } from '@/data/hydraulic-power-packs/high-low-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: highLowPowerPackData.seo.title,
    description: highLowPowerPackData.seo.description,
    canonical: highLowPowerPackData.seo.url,
    image: highLowPowerPackData.seo.image,
  }),
  title: {
    absolute: highLowPowerPackData.seo.title,
  },
};

export default function HighLowPowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(highLowPowerPackData)} />
      <ProductPage data={highLowPowerPackData} />
    </>
  );
}
