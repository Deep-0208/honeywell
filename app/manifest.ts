import { MetadataRoute } from 'next';
import { COMPANY_INFO } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_INFO.name,
    short_name: 'Honeywell Hydraulics',
    description: 'Premier Hydraulic Cylinder & Powerpack Manufacturer in India',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: COMPANY_INFO.themeColor,
    icons: [
      {
        src: '/favicon-48x48.png',
        sizes: '48x48',
        type: 'image/png',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
