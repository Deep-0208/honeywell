import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { threePhasePowerPackData } from '@/data/hydraulic-power-packs/three-phase-hydraulic-power-packs';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: threePhasePowerPackData.seo.title,
    description: threePhasePowerPackData.seo.description,
    canonical: threePhasePowerPackData.seo.url,
    image: threePhasePowerPackData.seo.image,
  }),
  title: {
    absolute: threePhasePowerPackData.seo.title,
  },
};

export default function ThreePhasePowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(threePhasePowerPackData)} />
      <ProductPage data={threePhasePowerPackData} />
    </>
  );
}
