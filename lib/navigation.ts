/**
 * Typed Navigation and Mega Menu configurations
 */

import { NavigationItem } from '@/types';
import { siteNavigation } from '@/data/navigation';
import { getAllPages } from '@/lib/content';
import type { Product, Industry } from '@/types';
import type { SiteNavigation } from '@/types/navigation';

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'Products',
    href: '/products',
    children: [
      {
        label: 'Hydraulic Cylinders',
        href: '/products/hydraulic-cylinders',
        description: 'Double acting, single acting, tie rod, and more.',
      },
      {
        label: 'Hydraulic Power Packs',
        href: '/products/hydraulic-power-packs',
        description: '3 Phase, Single Phase, Custom systems.',
      },
    ],
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      { label: 'Injection Moulding', href: '#' },
      { label: 'Automotive', href: '#' },
      { label: 'Steel & Metallurgy', href: '#' },
    ]
  },
  {
    label: 'Company',
    href: '/about',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Clients', href: '/clients' },
      { label: 'Certifications', href: '/certifications' },
    ]
  },
  {
    label: 'Contact',
    href: '/contact-us/',
  },
];

export function getDynamicNavigation(): SiteNavigation {
  const nav: SiteNavigation = JSON.parse(JSON.stringify(siteNavigation));
  
  const products = getAllPages<Product>('products');
  const industries = getAllPages<Industry>('industries');

  // Map products
  const productNav = nav.mainNav.find((n) => n.label === 'Products');
  const originalProductNav = siteNavigation.mainNav.find((n) => n.label === 'Products');
  if (productNav && productNav.megaMenu && products.length > 0) {
    productNav.megaMenu.columns[0].links = products.map((p) => {
      const originalLink = originalProductNav?.megaMenu?.columns[0].links.find(l => l.href.includes(p.slug));
      return {
        label: p.frontmatter.title,
        href: `/products/${p.slug}/`,
        description: p.frontmatter.description,
        subcategories: originalLink?.subcategories,
      };
    });
  }

  // Map industries
  const industryNav = nav.mainNav.find((n) => n.label === 'Industries');
  if (industryNav && industryNav.megaMenu && industries.length > 0) {
    industryNav.megaMenu.columns[0].links = industries.map((p) => ({
      label: p.frontmatter.title,
      href: `/industries/${p.slug}`,
      description: p.frontmatter.description,
    }));
  }
  
  return nav;
}
