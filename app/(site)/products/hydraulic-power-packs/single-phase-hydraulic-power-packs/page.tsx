import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { singlePhasePowerPackData } from '@/data/hydraulic-power-packs/single-phase-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: singlePhasePowerPackData.seo.title,
    description: singlePhasePowerPackData.seo.description,
    canonical: singlePhasePowerPackData.seo.url,
    image: singlePhasePowerPackData.seo.image,
  }),
  title: {
    absolute: singlePhasePowerPackData.seo.title,
  },
};

export default function SinglePhasePowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(singlePhasePowerPackData)} />
      <ProductPage data={singlePhasePowerPackData} />
    </>
  );
}
