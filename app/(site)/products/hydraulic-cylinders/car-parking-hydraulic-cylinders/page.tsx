import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { ProductPage, buildProductSchema } from '@/components/product-page';
import { carParkingCylinderData } from '@/data/hydraulic-cylinders/car-parking-hydraulic-cylinders';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  ...buildMetadata({
    title: carParkingCylinderData.seo.title,
    description: carParkingCylinderData.seo.description,
    canonical: carParkingCylinderData.seo.url,
    image: carParkingCylinderData.seo.image,
  }),
  title: {
    absolute: carParkingCylinderData.seo.title,
  },
};

export default function CarParkingCylinderPage() {
  return (
    <>
      <JsonLd data={buildProductSchema(carParkingCylinderData)} />
      <ProductPage data={carParkingCylinderData} />
    </>
  );
}
