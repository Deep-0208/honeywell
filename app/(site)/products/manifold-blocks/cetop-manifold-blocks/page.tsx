import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/seo/JsonLd';
import { buildProductSchema } from '@/components/product-page/schema';
import { ProductPage } from '@/components/product-page/ProductPage';
import { cetopManifoldBlocksData } from '@/data/manifold-blocks/cetop-manifold-blocks';

export const metadata: Metadata = {
  ...buildMetadata({
    title: cetopManifoldBlocksData.seo.title,
    description: cetopManifoldBlocksData.seo.description,
    canonical: cetopManifoldBlocksData.seo.url,
    image: cetopManifoldBlocksData.seo.image,
  }),
  title: {
    absolute: cetopManifoldBlocksData.seo.title,
  },
};

export default function CetopManifoldBlocksPage() {
  const schema = buildProductSchema(cetopManifoldBlocksData);

  return (
    <>
      <JsonLd data={schema} />
      <ProductPage data={cetopManifoldBlocksData} />
    </>
  );
}
