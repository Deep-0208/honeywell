import { ReactNode } from 'react';

/* ═══════════════════════════════════════════════
   GENERIC PRIMITIVES
   ═══════════════════════════════════════════════ */

export interface SpecificationRow {
  parameter: string;
  value: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface CtaConfig {
  label: string;
  href: string;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface KeySpec {
  label: string;
  value: string;
}

export interface ImageConfig {
  src: string;
  alt: string;
}

/* ═══════════════════════════════════════════════
   SECTION DATA SHAPES
   ═══════════════════════════════════════════════ */

/* ─── Hero ─── */
export interface HeroData {
  breadcrumbs: BreadcrumbItem[];
  currentPage: string;
  subtitle: string;
  h1: string;
  description: string;
  primaryCta: CtaConfig;
  secondaryCta: CtaConfig;
  image: ImageConfig;
  keySpecs: KeySpec[];
}

/* ─── Overview ─── */
export interface OverviewData {
  heading: string;
  content: ReactNode;
}

/* ─── Key Features ─── */
export interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface KeyFeaturesData {
  heading: string;
  description: string;
  items: FeatureItem[];
  showStepNumbers?: boolean;
}

/* ─── Technical Specs ─── */
export interface TechnicalSpecsData {
  heading?: string;
  description: string;
  primaryCta: CtaConfig;
  secondaryCta: CtaConfig;
  tableTitle: string;
  rows: SpecificationRow[];
}

/* ─── Variants ─── */
export interface VariantItem {
  icon: ReactNode;
  title: string;
  description: string;
  highlights: string[];
}

export interface VariantsData {
  heading: string;
  description: string;
  items: VariantItem[];
}

/* ─── Comparison ─── */
export interface ComparisonColumn {
  heading: string;
  href?: string;
}

export interface ComparisonCellValue {
  text: string;
  highlight?: boolean;
}

export interface ComparisonRow {
  feature: string;
  values: ComparisonCellValue[];
}

export interface ComparisonData {
  heading: string;
  description: string;
  columns: ComparisonColumn[];
  rows: ComparisonRow[];
  footnote?: ReactNode;
}

/* ─── Industries ─── */
export interface IndustryItem {
  icon: ReactNode;
  name: string;
  description: string;
  href: string;
}

export interface IndustriesData {
  heading: string;
  description: string;
  items: IndustryItem[];
}

/* ─── Engineering Considerations ─── */
export interface EngineeringItem {
  label: string;
  title: string;
  description: string;
}

export interface EngineeringData {
  heading: string;
  description?: ReactNode;
  items: EngineeringItem[];
}

/* ─── Manufacturing ─── */
export interface ManufacturingStep {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ManufacturingMidCta {
  heading: string;
  description: string;
  primaryCta: CtaConfig;
  whatsappLabel?: string;
}

export interface ManufacturingData {
  heading: string;
  description: string;
  steps: ManufacturingStep[];
  midCta: ManufacturingMidCta;
}

/* ─── Spotlight / Case Study ─── */
export interface SpotlightStat {
  value: string;
  label: string;
}

export interface SpotlightPhase {
  number: string;
  title: string;
  description: ReactNode;
  variant?: 'default' | 'dark';
  cta?: CtaConfig;
}

export interface SpotlightData {
  badge?: string;
  heading: string;
  subheading: string;
  stats: SpotlightStat[];
  phases: SpotlightPhase[];
}

/* ─── Related Products ─── */
export interface RelatedProductItem {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  href: string;
  ctaText: string;
}

export interface RelatedProductsData {
  heading?: string;
  description: string;
  browseAllHref?: string;
  items: RelatedProductItem[];
}

/* ─── Services / Engineering Advantage ─── */
export interface ServiceItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ServicesData {
  heading?: string;
  description: string;
  items: ServiceItem[];
  cta: CtaConfig;
}

/* ─── Final CTA ─── */
export interface FinalCtaData {
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

/* ─── Schema Helpers ─── */
export interface SchemaProperty {
  name: string;
  value: string;
}

export interface SeoData {
  title: string;
  description: string;
  url: string;
  image: string;
}

/* ═══════════════════════════════════════════════
   UNIFIED PRODUCT PAGE DATA
   ═══════════════════════════════════════════════ */

export interface ProductPageData {
  /* ── Required ── */
  seo: SeoData;
  hero: HeroData;

  /* ── Schema ── */
  schema: {
    productName: string;
    category: string;
    properties: SchemaProperty[];
  };

  /* ── Optional Sections ── */
  overview?: OverviewData;
  keyFeatures?: KeyFeaturesData;
  technicalSpecs?: TechnicalSpecsData;
  variants?: VariantsData;
  comparisons?: ComparisonData[];        // repeatable
  industries?: IndustriesData;
  engineering?: EngineeringData;
  manufacturing?: ManufacturingData;
  spotlights?: SpotlightData[];          // repeatable
  relatedProducts?: RelatedProductsData;

  /* ── Shared Sections ── */
  productName?: string;
  faqs?: FAQ[];
  cta?: FinalCtaData;
}
  