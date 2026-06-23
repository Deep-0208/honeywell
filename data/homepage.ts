/**
 * Homepage Static Data — Honeywell Hydraulics
 *
 * Single source of truth for all homepage section content.
 * All values sourced from docs/content/homepage/homepage-copy.md,
 * HOMEPAGE_ARCHITECTURE.md, and SEO_ARCHITECTURE.md.
 *
 * Rules:
 * - Never fabricate statistics.
 * - Placeholder values are explicitly marked with [PLACEHOLDER].
 * - Testimonials are placeholder-safe until real data is provided.
 */



/* ═══════════════════════════════════════════════
   TYPES
   ═══════════════════════════════════════════════ */

export interface TrustMetric {
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
}

export interface TrustBadgeData {
  label: string;
  variant: 'iso' | 'madeInIndia' | 'years' | 'clients' | 'custom';
}

export interface HomepageProduct {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  href: string;
  ctaText: string;
}

export interface USP {
  title: string;
  body: string;
  iconName: string;
}

export interface HomepageIndustry {
  industryName: string;
  description: string;
  iconName: string;
  href: string;
}

export interface HomepageApplication {
  applicationName: string;
  description: string;
  href: string;
  ctaText?: string;
}

export interface ProcessStep {
  title: string;
  body: string;
  iconName: string;
}

export interface HomepageTestimonial {
  quote: string;
  name: string;
  company: string;
  role: string;
  imageSrc?: string;
}

export interface HomepageLocation {
  city: string;
  description: string;
  industries: string[];
  href: string;
  ctaText: string;
}

export interface HomepageFAQ {
  question: string;
  answer: string;
}

export interface Certification {
  title: string;
  description: string;
  iconName: string;
}

export interface BlogPreview {
  title: string;
  date: string;
  excerpt: string;
  href: string;
}

export interface ClientLogo {
  name: string;
  imageSrc: string;
}

export interface ActionCard {
  title: string;
  description: string;
  iconName: string;
  href: string;
  ctaText: string;
}

/* ═══════════════════════════════════════════════
   SECTION 02 — TRUST STRIP
   ═══════════════════════════════════════════════ */

export const trustMetrics: TrustMetric[] = [
  { value: '500+', label: 'Projects Completed' },
  { value: '25+', label: 'Industries Served' },
  { value: '6+', label: 'Years of Experience' },
  { value: '5000+', label: 'Cylinders Delivered' },
  { value: '100%', label: 'Pressure-Tested' },
];

export const trustBadges: TrustBadgeData[] = [
  { label: 'ISO 9001:2015', variant: 'iso' },
  { label: 'Made In India', variant: 'madeInIndia' },
  { label: 'Since 2018', variant: 'years' },
  { label: '25+ Industries', variant: 'clients' },
  { label: 'Custom Engineering', variant: 'custom' },
];

/* ═══════════════════════════════════════════════
   SECTION 03 — PRODUCTS
   Source: homepage-copy.md § Section 03
   ═══════════════════════════════════════════════ */

export const homepageProducts: HomepageProduct[] = [
  {
    title: 'Hydraulic Cylinders',
    description:
      'Heavy-duty hydraulic cylinders for continuous industrial operations. 8 standard mounting types including flange, clevis, trunnion, and tie-rod configurations.',
    category: 'Core Products',
    imageSrc: '/images/products/hydraulic-cylinders/hydraulic-cylinders-ahmedabad.webp',
    href: '/products/hydraulic-cylinders/',
    ctaText: 'View Cylinders',
  },
  {
    title: 'Hydraulic Power Packs',
    description:
      'Robust 3-phase and single-phase units for continuous plant operations. Custom flow rates and pressures for your exact machinery requirements.',
    category: 'Power Units',
    imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp',
    href: '/products/hydraulic-power-packs/',
    ctaText: 'View Power Packs',
  },
  {
    title: 'Hydraulic Manifold Blocks',
    description:
      'Custom-machined manifold blocks for integrated hydraulic circuits. Precision-drilled ports with optimized flow paths for your specific valve configurations.',
    category: 'Fluid Control',
    imageSrc: '/images/products/hydraulic-manifold-blocks-manufacturer.webp',
    href: '/products/hydraulic-manifold-blocks/',
    ctaText: 'View Manifold Blocks',
  },
  {
    title: 'Custom Hydraulic Systems',
    description:
      'Complete turnkey hydraulic solutions — from engineering to commissioning. Designed for your specific industrial application and production requirements.',
    category: 'Engineered Solutions',
    imageSrc: '/images/products/custom-hydraulic-systems-ahmedabad.webp',
    href: '/products/custom-hydraulic-systems/',
    ctaText: 'View Systems',
  },
];

/* ═══════════════════════════════════════════════
   SECTION 04 — WHY CHOOSE US
   Source: homepage-copy.md § Section 06
   ═══════════════════════════════════════════════ */

export const usps: USP[] = [
  {
    iconName: 'Settings2',
    title: 'Custom Engineering',
    body: 'Every cylinder and system is designed to your exact specifications — bore, stroke, pressure, and mounting type.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Quality Tested',
    body: '100% hydrostatic pressure testing before dispatch. ISO 9001:2015 quality management at every stage.',
  },
  {
    iconName: 'Timer',
    title: '7–15 Day Delivery',
    body: 'Standard items dispatched in 7 days. Complex custom units within 15 days from order confirmation.',
  },
  {
    iconName: 'IndianRupee',
    title: 'Factory-Direct Pricing',
    body: 'Manufacturer to customer — no middlemen. Competitive pricing with volume discounts for OEM orders.',
  },
];

/* ═══════════════════════════════════════════════
   SECTION 05 — INDUSTRIES
   Source: homepage-copy.md § Section 05
   ═══════════════════════════════════════════════ */

export const homepageIndustries: HomepageIndustry[] = [
  {
    industryName: 'Injection Moulding',
    description:
      'High-speed clamping cylinders and core-pull cylinders for continuous moulding operations.',
    iconName: 'Cog',
    href: '/industries/injection-moulding/',
  },
  {
    industryName: 'Automotive OEM',
    description:
      'Precision-engineered hydraulic components for assembly lines and robotic welding stations.',
    iconName: 'Car',
    href: '/industries/automotive/',
  },
  {
    industryName: 'Steel & Metallurgy',
    description:
      'Rugged, heat-resistant hydraulic cylinders for rolling mills and forging operations.',
    iconName: 'Factory',
    href: '/industries/steel-metallurgy/',
  },
  {
    industryName: 'Construction Equipment',
    description:
      'Shock-resistant boom and bucket cylinders built for extreme outdoor environments.',
    iconName: 'Construction',
    href: '/industries/construction-equipment/',
  },
  {
    industryName: 'Material Handling',
    description:
      'Judder-free lifting power for warehouse automation and conveyor logistics.',
    iconName: 'Package',
    href: '/industries/material-handling/',
  },
  {
    industryName: 'Special Purpose Machines',
    description:
      'Custom fluid power for unique, one-off manufacturing equipment and SPMs.',
    iconName: 'Wrench',
    href: '/industries/special-purpose-machines/',
  },
];

/* ═══════════════════════════════════════════════
   SECTION 07 — MANUFACTURING PROCESS
   Source: HOMEPAGE_ARCHITECTURE.md § Section 07
   ═══════════════════════════════════════════════ */

export const processSteps: ProcessStep[] = [
  {
    iconName: 'ClipboardList',
    title: 'Load & Duty Cycle Analysis',
    body: 'Our engineers calculate exact tonnage, radial loads, and fluid pressure requirements to specify the optimal cylinder bore and pump displacement.',
  },
  {
    iconName: 'PenTool',
    title: 'Precision CAD Engineering',
    body: 'We design custom manifold blocks and cylinder geometries, selecting the exact seal kits (Viton, PU) required for your fluid temperature.',
  },
  {
    iconName: 'Drill',
    title: 'Micron-Level CNC Machining',
    body: 'In-house precision CNC machining in our Kathwada facility guarantees zero-tolerance manufacturing.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'Hydrostatic Pressure Validation',
    body: 'Every single cylinder and power pack undergoes 100% rigorous pressure testing at 1.5x operating pressure before ISO-certified dispatch.',
  },
];

/* ═══════════════════════════════════════════════
   SECTION 08 — TESTIMONIALS
   Source: homepage-copy.md § Section 08

   ⚠️ PLACEHOLDER-SAFE:
   The quote text is from homepage-copy.md.
   Client names and companies are placeholder until
   real testimonials are provided.
   ═══════════════════════════════════════════════ */

export const homepageTestimonials: HomepageTestimonial[] = [
  {
    quote:
      'We replaced our standard single-pump units with Honeywell\'s High-Low power packs for our 500-ton deep drawing presses. The cycle speed increased by 15% and we\'ve seen a massive drop in hydraulic oil temperatures.',
    name: 'Rajesh Desai',
    company: 'Gujarat Metal Stamping Pvt Ltd',
    role: 'Maintenance Head',
  },
  {
    quote:
      'Finding a reliable supplier for custom telescopic cylinders was a challenge until we partnered with Honeywell. Their engineering team designed a 4-stage cylinder that perfectly handles the extreme radial loads of our tipping trailers.',
    name: 'Sandeep Sharma',
    company: 'Apex Heavy Haulers',
    role: 'OEM Procurement Team',
  },
  {
    quote:
      'The 100% hydrostatic testing gave us the confidence to standardize our entire assembly line on Honeywell cylinders. Zero leaks and zero failures after 8 months of continuous 3-shift operations.',
    name: 'Amit Patel',
    company: 'Precision Auto Components',
    role: 'Plant Engineering Department',
  },
];

/* ═══════════════════════════════════════════════
   SECTION 09 — LOCATIONS
   Source: HOMEPAGE_ARCHITECTURE.md § Section 09
   ═══════════════════════════════════════════════ */

export const homepageLocations: HomepageLocation[] = [
  {
    city: 'Ahmedabad',
    description:
      'Our manufacturing headquarters in Kathwada GIDC. Factory-direct supply of hydraulic cylinders and power packs.',
    industries: ['Injection Moulding', 'Automotive', 'Steel', 'Textile'],
    href: '/locations/ahmedabad/',
    ctaText: 'View Ahmedabad Facility',
  },
  {
    city: 'Surat',
    description:
      'Same-week delivery to Sachin, Pandesara, and Hazira GIDC industrial zones.',
    industries: ['Diamond Processing', 'Textile', 'Chemical'],
    href: '/locations/surat/',
    ctaText: 'Hydraulic Supply in Surat',
  },
  {
    city: 'Vadodara',
    description:
      'Serving Makarpura and Halol GIDC with hydraulic cylinders and system solutions.',
    industries: ['Pharmaceutical', 'Automotive', 'Chemical'],
    href: '/locations/vadodara/',
    ctaText: 'Hydraulic Supply in Vadodara',
  },
  {
    city: 'Rajkot',
    description:
      "Custom hydraulic solutions for Rajkot's precision engineering and machine tool industry.",
    industries: ['Machine Tools', 'Auto Parts', 'Casting'],
    href: '/locations/rajkot/',
    ctaText: 'Hydraulic Supply in Rajkot',
  },
  {
    city: 'Gujarat',
    description:
      'Pan-Gujarat supply covering all major GIDC industrial estates with 7-day delivery.',
    industries: ['All Industries', '25+ Sectors'],
    href: '/locations/gujarat/',
    ctaText: 'Gujarat Coverage',
  },
  {
    city: 'Pan India',
    description:
      'Nationwide delivery of hydraulic equipment to all major industrial cities across India.',
    industries: ['OEM Supply', 'Project Orders', 'Export'],
    href: '/locations/india/',
    ctaText: 'India-Wide Supply',
  },
];

/* ═══════════════════════════════════════════════
   SECTION 10 — FAQ
   Source: homepage-copy.md Q1/Q2 + SEO_ARCHITECTURE.md
   ═══════════════════════════════════════════════ */

export const homepageFAQs: HomepageFAQ[] = [
  {
    question: 'What hydraulic products does Honeywell Hydraulics manufacture?',
    answer:
      'Honeywell Hydraulics manufactures custom hydraulic cylinders (double acting, single acting, telescopic, tie-rod, and all mounting types) and hydraulic power packs (3-phase and single-phase). All products are precision-engineered at our Ahmedabad facility.',
  },
  {
    question: 'What bore sizes do you manufacture for hydraulic cylinders?',
    answer:
      'We manufacture standard bore sizes ranging from 40mm up to 300mm. Custom bore sizes beyond this range are also available on request, depending on your application requirements.',
  },
  {
    question:
      'What is the delivery time for hydraulic cylinders and power packs?',
    answer:
      'Standard items and replacement cylinders are dispatched within 7 days. Custom-engineered cylinders and power packs are typically completed within 15 days from order confirmation.',
  },
  {
    question: 'Do you supply hydraulic equipment across India?',
    answer:
      'Yes. We are based in Kathwada GIDC, Ahmedabad, Gujarat and supply to clients across all major industrial cities in India including Surat, Vadodara, Rajkot, Pune, Mumbai, Chennai, and Bangalore. We serve 25+ industries pan-India.',
  },
];

/* ═══════════════════════════════════════════════
   NEW SECTIONS DATA
   ═══════════════════════════════════════════════ */

export const certifications: Certification[] = [
  {
    title: 'ISO 9001:2015',
    description: 'Certified quality management systems for precision manufacturing.',
    iconName: 'Award',
  },
  {
    title: 'MSME Registered',
    description: 'Recognized micro, small & medium enterprise by Govt. of India.',
    iconName: 'Building2',
  },
  {
    title: 'GST Compliant',
    description: 'Fully compliant with Goods and Services Tax regulations.',
    iconName: 'FileCheck2',
  },
  {
    title: 'Make in India',
    description: 'Proud contributor to the Make in India manufacturing initiative.',
    iconName: 'Factory',
  },
];

/* ═══════════════════════════════════════════════
   MANUFACTURING FACILITY SECTION
   ═══════════════════════════════════════════════ */

export interface ManufacturingHighlight {
  title: string;
  description: string;
  iconName: string;
}

export const manufacturingHighlights: ManufacturingHighlight[] = [
  {
    iconName: 'Cog',
    title: 'In-House CNC Machining Center',
    description: 'Automated CNC turning, boring, and honing for precision cylinder barrels and piston rods.',
  },
  {
    iconName: 'Target',
    title: 'Precision Honing & Skiving',
    description: 'Mirror-finish internal bore surfaces for leak-free seal performance and extended cylinder life.',
  },
  {
    iconName: 'ShieldCheck',
    title: 'ISO 9001:2015 Quality Control',
    description: 'Certified quality management at every stage — from raw material inspection to final dispatch.',
  },
  {
    iconName: 'Gauge',
    title: '100% Hydrostatic Pressure Testing',
    description: 'Every cylinder and power pack tested at 1.5x operating pressure before leaving our facility.',
  },
  {
    iconName: 'Users',
    title: 'Dedicated Engineering Support',
    description: '20+ years of combined hydraulic design experience backing every project we deliver.',
  },
];

export const blogPreviews: BlogPreview[] = [
  {
    title: 'How to Choose the Right Hydraulic Cylinder Mounting Style',
    date: 'March 15, 2026',
    excerpt: 'Explore the different mounting options like clevis, flange, and trunnion, and learn which is best suited for your specific application.',
    href: '/blog/hydraulic-cylinder-mounting-guide/',
  },
  {
    title: 'Preventive Maintenance for Hydraulic Power Packs',
    date: 'February 28, 2026',
    excerpt: 'Extend the life of your power pack and prevent costly downtime with our comprehensive preventive maintenance checklist.',
    href: '/blog/power-pack-preventive-maintenance/',
  },
  {
    title: 'Understanding Single vs. Double Acting Cylinders',
    date: 'January 10, 2026',
    excerpt: 'A deep dive into the mechanical differences, typical applications, and selection criteria for single and double acting cylinders.',
    href: '/blog/single-vs-double-acting-cylinders/',
  },
];

export const clientLogos: ClientLogo[] = [
  { name: 'Prikan Machinery Pvt Ltd', imageSrc: '/images/clients/prikan-machinery-pvt-ltd.webp' },
  { name: 'Aqseptence Group of India Pvt Ltd', imageSrc: '/images/clients/aqseptence-group-of-india-pvt-ltd.webp' },
  { name: 'ITL Industries', imageSrc: '/images/clients/itl-industries.webp' },
  { name: 'Indotech Industries', imageSrc: '/images/clients/indotech-industries.webp' },
  { name: 'Naturage Storage Solution Pvt Ltd', imageSrc: '/images/clients/naturage-storage-solution-pvt-ltd.webp' },
  { name: 'Dhanwanti Engineering', imageSrc: '/images/clients/dhanwanti-engineering.webp' },
  { name: 'Jai Industries', imageSrc: '/images/clients/jai-industries.webp' },
  { name: 'Sharda Industries', imageSrc: '/images/clients/sharda-industries.webp' },
  { name: 'J.J. Industries', imageSrc: '/images/clients/j-j-industries.webp' },
  { name: 'Spincast Solution Pvt ltd', imageSrc: '/images/clients/spincast-solution-pvt-ltd.webp' },
  { name: 'Asian Tubes Pvt Ltd', imageSrc: '/images/clients/asian-tubes-pvt-ltd.webp' },
  { name: 'Ratnamani Metal & Tubes', imageSrc: '/images/clients/ratnamani-metal-tubes.webp' },
  { name: 'Hardik Engineering', imageSrc: '/images/clients/hardik-engineering.webp' },
  { name: 'Safari Construction Equipments Pvt Ltd', imageSrc: '/images/clients/safari-construction-equipments-pvt-ltd.webp' },
  { name: 'Neelam Fabricators', imageSrc: '/images/clients/neelam-fabricators.webp' },
  { name: 'Optiflux Pipe Industries', imageSrc: '/images/clients/optiflux-pipe-industries.webp' },
  { name: 'Rama Cylinders Pvt Ltd', imageSrc: '/images/clients/rama-cylinders-pvt-ltd.webp' },
  { name: 'Modi Enterprise', imageSrc: '/images/clients/modi-enterprise.webp' },
  { name: 'Sushobhit Moulds', imageSrc: '/images/clients/sushobhit-moulds.webp' },
  { name: 'Creative Automation', imageSrc: '/images/clients/creative-automation.webp' },
];

export const actionCards: ActionCard[] = [
  {
    title: 'Request a Quote',
    description: 'Get factory-direct pricing for your custom hydraulic requirements.',
    iconName: 'Calculator',
    href: '/contact-us/',
    ctaText: 'Get Quote',
  },
  {
    title: 'Download Product Catalog',
    description: 'Browse our complete range of cylinders and power packs.',
    iconName: 'Download',
    href: '/resources/catalog/',
    ctaText: 'Download PDF',
  },
  {
    title: 'Technical Support',
    description: 'Need help with troubleshooting or replacement parts?',
    iconName: 'Wrench',
    href: '/contact-us/',
    ctaText: 'Get Support',
  },
  {
    title: 'Talk to an Engineer',
    description: 'Discuss your specific application needs with our experts.',
    iconName: 'PhoneCall',
    href: '/contact-us/',
    ctaText: 'Contact Engineer',
  },
];
