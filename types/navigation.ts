/**
 * Navigation Type Definitions — Honeywell Hydraulics
 * Supports mega menus, dropdowns, and mobile accordion navigation
 */

/** A single link item within a navigation menu */
export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  subcategories?: NavLink[];
}

/** A column/group within a mega menu panel */
export interface NavMenuColumn {
  heading?: string;
  links: NavLink[];
}

/** Configuration for a top-level navigation item */
export interface NavItem {
  label: string;
  href: string;
  /** If present, this nav item opens a dropdown/mega menu */
  megaMenu?: {
    columns: NavMenuColumn[];
    /** Optional featured/CTA section on the right */
    featured?: {
      title: string;
      description: string;
      ctaLabel: string;
      ctaHref: string;
    };
  };
}

/** Complete site navigation structure */
export interface SiteNavigation {
  mainNav: NavItem[];
  phone: string;
  phoneDisplay: string;
  ctaLabel: string;
  ctaHref: string;
}
