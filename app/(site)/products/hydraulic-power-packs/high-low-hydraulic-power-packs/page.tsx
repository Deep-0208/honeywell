import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { highLowPowerPackData } from '@/data/hydraulic-power-packs/high-low-hydraulic-power-packs';

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

export default function HighLowPowerPacksPage() {
  const schema = buildProductSchema(highLowPowerPackData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={highLowPowerPackData} />
    </>
  );
}
