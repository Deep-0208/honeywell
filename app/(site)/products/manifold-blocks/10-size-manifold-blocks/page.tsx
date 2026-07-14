import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { ng16ManifoldBlocksData } from '@/data/manifold-blocks/10-size-manifold-blocks';

export const metadata: Metadata = {
  ...buildMetadata({
    title: ng16ManifoldBlocksData.seo.title,
    description: ng16ManifoldBlocksData.seo.description,
    canonical: ng16ManifoldBlocksData.seo.url,
    image: ng16ManifoldBlocksData.seo.image,
  }),
  title: {
    absolute: ng16ManifoldBlocksData.seo.title,
  },
};

export default function NG16ManifoldBlocksPage() {
  const schema = buildProductSchema(ng16ManifoldBlocksData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={ng16ManifoldBlocksData} />
    </>
  );
}
