import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { ng10ManifoldBlocksData } from '@/data/manifold-blocks/06-size-manifold-blocks';

export const metadata: Metadata = {
  ...buildMetadata({
    title: ng10ManifoldBlocksData.seo.title,
    description: ng10ManifoldBlocksData.seo.description,
    canonical: ng10ManifoldBlocksData.seo.url,
    image: ng10ManifoldBlocksData.seo.image,
  }),
  title: {
    absolute: ng10ManifoldBlocksData.seo.title,
  },
};

export default function NG10ManifoldBlocksPage() {
  const schema = buildProductSchema(ng10ManifoldBlocksData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={ng10ManifoldBlocksData} />
    </>
  );
}
