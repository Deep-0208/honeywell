import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { multistationPowerPackData } from '@/data/hydraulic-power-packs/multistation-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: multistationPowerPackData.seo.title,
    description: multistationPowerPackData.seo.description,
    canonical: multistationPowerPackData.seo.url,
    image: multistationPowerPackData.seo.image,
  }),
  title: {
    absolute: multistationPowerPackData.seo.title,
  },
};

export default function MultistationPowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(multistationPowerPackData)} />
      <ProductPage data={multistationPowerPackData} />
    </>
  );
}
