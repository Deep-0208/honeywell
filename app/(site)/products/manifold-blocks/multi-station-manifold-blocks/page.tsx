import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { multiStationManifoldBlocksData } from '@/data/manifold-blocks/multi-station-manifold-blocks';

export const metadata: Metadata = {
  ...buildMetadata({
    title: multiStationManifoldBlocksData.seo.title,
    description: multiStationManifoldBlocksData.seo.description,
    canonical: multiStationManifoldBlocksData.seo.url,
    image: multiStationManifoldBlocksData.seo.image,
  }),
  title: {
    absolute: multiStationManifoldBlocksData.seo.title,
  },
};

export default function MultiStationManifoldBlocksPage() {
  const schema = buildProductSchema(multiStationManifoldBlocksData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={multiStationManifoldBlocksData} />
    </>
  );
}
