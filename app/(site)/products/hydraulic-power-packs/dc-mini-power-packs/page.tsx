import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { dcMiniPowerPackData } from '@/data/hydraulic-power-packs/dc-mini-power-packs';

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

export default function DcMiniPowerPacksPage() {
  const schema = buildProductSchema(dcMiniPowerPackData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={dcMiniPowerPackData} />
    </>
  );
}
