import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { pressPowerPackData } from '@/data/hydraulic-power-packs/hydraulic-power-packs-for-press';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: pressPowerPackData.seo.title,
    description: pressPowerPackData.seo.description,
    canonical: pressPowerPackData.seo.url,
    image: pressPowerPackData.seo.image,
  }),
  title: {
    absolute: pressPowerPackData.seo.title,
  },
};

export default function PressPowerPackPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(pressPowerPackData)} />
      <ProductPage data={pressPowerPackData} />
    </>
  );
}
