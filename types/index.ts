/**
 * Core Typings for Honeywell Hydraulics Data Layer
 */

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  description?: string;
  children?: NavigationItem[];
}

export interface PageFrontmatter {
  title: string;
  description: string;
  keywords?: string[];
  slug: string;
  image?: string;
  schema?: string;
  publishedAt?: string;
  updatedAt?: string;
}

export interface Product extends PageFrontmatter {
  category: string;
  specifications?: Record<string, string>;
  applications?: string[];
  industries?: string[];
  relatedProducts?: string[];
  faq?: FAQ[];
}

export interface Service extends PageFrontmatter {
  benefits?: string[];
  relatedProducts?: string[];
  relatedIndustries?: string[];
}

export interface Industry extends PageFrontmatter {
  challenges?: string[];
  solutions?: string[];
  relatedProducts?: string[];
}

export interface Application extends PageFrontmatter {
  recommendedProducts?: string[];
  industries?: string[];
}

export interface Location extends PageFrontmatter {
  city: string;
  state: string;
  industries?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Testimonial {
  name: string;
  company: string;
  designation: string;
  city: string;
  quote: string;
  image?: string;
}

export interface MDXDocument<T = PageFrontmatter> {
  frontmatter: T;
  content: string;
  slug: string;
}
