/**
 * Typed Navigation and Mega Menu configurations
 */

import { NavigationItem } from '@/types';
import { siteNavigation } from '@/data/navigation';
import type { SiteNavigation } from '@/types/navigation';

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'Company',
    href: '/about-us/',
    children: [
      { label: 'About Us', href: '/about-us/' },
      { label: 'Manufacturing Facility', href: '/manufacturing-facility/' },
    ],
  },
  {
    label: 'Products',
    href: '/products/',
    children: [
      {
        label: 'Hydraulic Cylinders',
        href: '/products/hydraulic-cylinders/',
        description: 'Double acting, single acting, tie rod, and more.',
      },
      {
        label: 'Hydraulic Power Packs',
        href: '/products/hydraulic-power-packs/',
        description: '3 Phase, Single Phase, Custom systems.',
      },
      {
        label: 'Manifold Blocks',
        href: '/products/manifold-blocks/',
        description: 'CETOP, custom, and multi-station blocks.',
      },
    ],
  },
  {
    label: 'Areas We Serve',
    href: '/locations/',
    children: [
      { label: 'Gujarat', href: '/locations/gujarat/' },
      { label: 'Maharashtra', href: '/locations/maharashtra/' },
      { label: 'National Hub', href: '/locations/' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact-us/',
  },
];

export function getDynamicNavigation(): SiteNavigation {
  const nav: SiteNavigation = JSON.parse(JSON.stringify(siteNavigation));
  return nav;
}
