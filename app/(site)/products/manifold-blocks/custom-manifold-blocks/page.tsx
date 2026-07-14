import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { customManifoldBlocksData } from '@/data/manifold-blocks/custom-manifold-blocks';

export const metadata: Metadata = {
  ...buildMetadata({
    title: customManifoldBlocksData.seo.title,
    description: customManifoldBlocksData.seo.description,
    canonical: customManifoldBlocksData.seo.url,
    image: customManifoldBlocksData.seo.image,
  }),
  title: {
    absolute: customManifoldBlocksData.seo.title,
  },
};

export default function CustomManifoldBlocksPage() {
  const schema = buildProductSchema(customManifoldBlocksData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={customManifoldBlocksData} />
    </>
  );
}
