import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { threePhasePowerPackData } from '@/data/hydraulic-power-packs/3-phase-hydraulic-power-packs';

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

export default function ThreePhasePowerPacksPage() {
  const schema = buildProductSchema(threePhasePowerPackData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={threePhasePowerPackData} />
    </>
  );
}
