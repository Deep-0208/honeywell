/**
 * Navigation System
 * Single source of truth is @/data/navigation
 */

import { siteNavigation } from '@/data/navigation';
import type { SiteNavigation } from '@/types/navigation';

export { siteNavigation };

export function getDynamicNavigation(): SiteNavigation {
  return siteNavigation;
}
