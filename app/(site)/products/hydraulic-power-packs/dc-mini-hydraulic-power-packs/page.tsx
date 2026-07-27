import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { dcMiniPowerPackData } from '@/data/hydraulic-power-packs/dc-mini-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: dcMiniPowerPackData.seo.title,
    description: dcMiniPowerPackData.seo.description,
    canonical: dcMiniPowerPackData.seo.url,
    image: dcMiniPowerPackData.seo.image,
  }),
  title: {
    absolute: dcMiniPowerPackData.seo.title,
  },
};

export default function DCMiniPowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(dcMiniPowerPackData)} />
      <ProductPage data={dcMiniPowerPackData} />
    </>
  );
}
