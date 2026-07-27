import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { customizedPowerPackData } from '@/data/hydraulic-power-packs/customized-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: customizedPowerPackData.seo.title,
    description: customizedPowerPackData.seo.description,
    canonical: customizedPowerPackData.seo.url,
    image: customizedPowerPackData.seo.image,
  }),
  title: {
    absolute: customizedPowerPackData.seo.title,
  },
};

export default function CustomizedPowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(customizedPowerPackData)} />
      <ProductPage data={customizedPowerPackData} />
    </>
  );
}
