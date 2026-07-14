import React from 'react';
import {
  ArrowLeftRight,
  Gauge,
  Settings,
  Shield,
  Droplets,
  CheckCircle2,
  Cog,
  Package,
} from 'lucide-react';
import { FaIndustry, FaCogs, FaBuilding, FaTemperatureHigh } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const doubleActingCylinderData: ProductPageData = {
  // 1. SEO & Metadata
  seo: {
    title: 'Double Acting Hydraulic Cylinder Manufacturer | Honeywell',
    description: 'Leading double acting hydraulic cylinder manufacturer in Ahmedabad. Bore 40–500mm, stroke up to 6000mm, 450 bar pressure. ISO certified. Get quote.',
    url: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/',
    image: '/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinders-manufacturer.webp',
  },

  // 2. Schema Data
  schema: {
    productName: 'Double Acting Hydraulic Cylinder',
    category: 'Hydraulic Cylinders',
    properties: [
      { name: 'Bore Size Range', value: '40mm – 500mm' },
      { name: 'Rod Diameter Range', value: '16mm – 350mm' },
      { name: 'Stroke Length', value: 'Up to 6,000mm' },
      { name: 'Working Pressure', value: 'Up to 450 Bar' },
      { name: 'Honed Tube Material', value: 'ST 52.3 (Tolerance H8, H9)' },
      { name: 'Piston Rod Material', value: 'EN 8 / EN 9 / EN 19 / EN 31 (f7)' },
    ],
  },

  // 4. Hero Section
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Cylinders', href: '/products/hydraulic-cylinders/' },
    ],
    currentPage: 'Double Acting Hydraulic Cylinders',
    subtitle: 'DOUBLE ACTING HYDRAULIC CYLINDERS',
    h1: 'Double Acting Hydraulic Cylinder Manufacturer',
    description: 'Full bi-directional hydraulic force for precision industrial applications. Manufactured in-house at our Ahmedabad facility with bore sizes from 40mm to 500mm, stroke lengths up to 6,000mm, and working pressures up to 450 bar.',
    image: {
      src: '/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinders-manufacturer.webp',
      alt: 'Double acting hydraulic cylinder manufacturer in Ahmedabad — Honeywell Hydraulics',
    },
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    keySpecs: [
      { label: 'Bore', value: '40 – 500 mm' },
      { label: 'Stroke', value: 'Up to 6,000 mm' },
      { label: 'Pressure', value: 'Up to 450 Bar' },
      { label: 'Mounting', value: '4 Options' },
    ],
  },

  // 5. Overview Section
  overview: {
    heading: 'What Is a Double Acting Hydraulic Cylinder?',
    content: (
      <>
        <p>A <strong>double acting hydraulic cylinder</strong> generates force in both the extend and retract strokes, making it the most versatile and widely used cylinder type in industrial applications. Unlike single acting cylinders that rely on gravity or springs for return, double acting cylinders provide full hydraulic control in both directions — critical for press machines, injection moulding, goods lifts, and material handling systems.</p>
        <p>The cylinder operates through two ports, typically located at the bottom and top of the barrel. Hydraulic fluid is pumped into the bottom port to extend the piston, and through the top port to push the piston back. This bi-directional fluid power provides faster, more predictable retraction compared to spring-return designs, making double acting cylinders the better choice for projects needing repeatable accuracy and controlled motion profiles.</p>
        <p>At Honeywell Hydraulics, we manufacture double acting hydraulic cylinders in custom bore sizes from 40mm to 500mm and stroke lengths up to 6,000mm at our Ahmedabad manufacturing facility. Every cylinder is CNC-machined from solid ST 52.3 seamless steel, fitted with imported Hallite / Parker seals, and pressure-tested at 1.5× working pressure before dispatch.</p>
      </>
    ),
  },

  // 6. Key Features
  keyFeatures: {
    heading: 'Key Features',
    description: 'Every double acting cylinder we manufacture is engineered for durability, precision, and zero-leakage performance.',
    items: [
      {
        icon: <ArrowLeftRight className="w-5 h-5" />,
        title: 'Bi-Directional Force Generation',
        description: 'Generates full hydraulic force in both extend and retract strokes, providing complete motion control for precision applications where gravity-return is insufficient.',
      },
      {
        icon: <Gauge className="w-5 h-5" />,
        title: 'High Working Pressure — Up to 450 Bar',
        description: 'Engineered to operate at working pressures up to 450 bar, suitable for heavy-duty pressing, forging, and high-tonnage industrial applications.',
      },
      {
        icon: <Settings className="w-5 h-5" />,
        title: 'Custom Bore Sizes — 40mm to 500mm',
        description: 'Manufactured in bore sizes from 40mm for compact machinery up to 500mm for heavy industrial presses. Every bore is CNC-honed to H8/H9 tolerance.',
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: 'Hard Chrome Plated Piston Rods',
        description: 'Piston rods machined from EN 8, EN 9, EN 19, or EN 31 grade steel with precision f7 tolerance and heavy hard chrome plating for corrosion resistance and longevity.',
      },
      {
        icon: <Droplets className="w-5 h-5" />,
        title: 'Imported Hallite / Parker Seals',
        description: 'Fitted with premium imported Hallite and Parker sealing systems designed for zero internal leakage, extended service life, and reliable operation in harsh environments.',
      },
      {
        icon: <CheckCircle2 className="w-5 h-5" />,
        title: '100% Pressure Tested Before Dispatch',
        description: 'Every cylinder undergoes rigorous hydrostatic testing at 1.5× working pressure. A detailed pressure test certificate is provided with each unit shipped.',
      },
    ],
  },

  // 7. Technical Specs
  technicalSpecs: {
    heading: 'Technical Specifications',
    description: 'Our double acting cylinders are manufactured with precision-grade materials and machined to exacting tolerances. Every specification listed below can be customized to your exact requirements.',
    tableTitle: 'Double Acting Cylinder Specifications',
    rows: [
      { parameter: 'Bore Size Range', value: '40 mm – 500 mm' },
      { parameter: 'Rod Diameter Range', value: '16 mm – 350 mm' },
      { parameter: 'Stroke Length', value: 'Up to 6,000 mm' },
      { parameter: 'Working Pressure', value: 'Up to 450 Bar' },
      { parameter: 'Honed Tube Material', value: 'ST 52.3 (Tolerance H8, H9)' },
      { parameter: 'Piston Rod Material', value: 'EN 8 / EN 9 / EN 19 / EN 31 (Tolerance f7)' },
      { parameter: 'Piston & Gland Material', value: 'EN 8' },
      { parameter: 'Rod Surface Finish', value: 'Heavy Hard Chrome Plated' },
      { parameter: 'Seal Type', value: 'Hallite / Parker (Imported)' },
      { parameter: 'Mounting Options', value: 'Flange, Clevis, Trunnion, Foot' },
      { parameter: 'Ports', value: 'Two ports — bottom (extend) and top (retract)' },
      { parameter: 'Testing', value: 'Hydrostatic testing at 1.5× working pressure' },
    ],
    primaryCta: { label: 'DISCUSS YOUR SPECS', href: '/request-quote/' },
    secondaryCta: { label: 'VIEW ALL CYLINDER TYPES', href: '/products/hydraulic-cylinders/' },
  },

  engineering: {
    heading: 'Available Mounting Configurations',
    description: 'Choose from four standard mounting types, or request a custom mounting interface designed to integrate with your specific machine frame.',
    items: [
      {
        label: 'A',
        title: 'Flange Mounting',
        description: 'Bolt-on flange mounting for rigid, permanent installations. Ideal when the cylinder must remain perfectly aligned with the machine frame. (Used in press machines, injection moulding machines)',
      },
      {
        label: 'B',
        title: 'Clevis Mounting',
        description: 'Pin-and-clevis mounting allows angular movement during stroke. Used where the load path changes angle during cylinder extension. (Used in dump trucks, tipping trailers)',
      },
      {
        label: 'C',
        title: 'Trunnion Mounting',
        description: 'Mid-barrel trunnion pins allow the entire cylinder to pivot. Best for applications requiring large angular displacement during the stroke cycle. (Used in mobile cranes, excavator arms)',
      },
      {
        label: 'D',
        title: 'Foot Mounting',
        description: 'Bottom foot brackets for simple horizontal or vertical installations. Cost-effective solution where angular movement is not required. (Used in conveyor systems, goods lifts)',
      },
    ],
  },



  // 10. Industries
  industries: {
    heading: 'Industries We Serve',
    description: 'Our double acting hydraulic cylinders power critical machinery across India\'s most demanding industrial sectors.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Automotive & Auto Component Manufacturing',
        description: 'Double acting cylinders for stamping presses, body panel forming, and automated assembly lines in automotive plants across Gujarat.',
        href: '/industries'
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Injection Moulding & Plastics',
        description: 'Clamping cylinders and injection unit actuators for plastic moulding machines requiring precise, controllable bi-directional force.',
        href: '/industries'
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Construction & Infrastructure',
        description: 'Heavy-duty double acting cylinders for concrete batching plants, pile driving rigs, and bridge construction hydraulic systems.',
        href: '/industries'
      },
      {
        icon: <FaTemperatureHigh className="w-6 h-6" />,
        name: 'Steel & Metal Fabrication',
        description: 'Forging press cylinders, metal shearing machines, and plate bending equipment in steel plants and heavy fabrication workshops.',
        href: '/industries'
      },
    ],
  },

  // 11. Manufacturing
  manufacturing: {
    heading: 'Manufacturing & Quality Process',
    description: 'Every double acting cylinder is manufactured in-house at our Ahmedabad GIDC facility. Zero outsourcing of critical machining operations ensures complete quality control.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'CNC Honing & Machining',
        description: 'ST 52.3 seamless steel tubes are CNC-honed in-house to H8/H9 tolerance. Piston rods are precision-ground and hard chrome plated from EN 8/EN 9/EN 19/EN 31 grade steel.',
      },
      {
        icon: <Package className="w-6 h-6" />,
        title: 'Imported Sealing Systems',
        description: 'We exclusively use Hallite and Parker imported seals. These premium sealing compounds ensure zero internal leakage and are rated for extended service life in harsh industrial environments.',
      },
      {
        icon: <Shield className="w-6 h-6" />,
        title: 'Pressure Validation',
        description: '100% of our double acting cylinders undergo rigorous hydrostatic testing at 1.5× working pressure. A detailed test certificate is provided with every cylinder dispatched.',
      },
    ],
    midCta: {
      heading: 'Why Choose Honeywell for Double Acting Cylinders?',
      description: 'In-house CNC honing, machining, and assembly — zero outsourcing of critical operations. ISO 9001:2015 certified manufacturing facility.',
      primaryCta: { label: 'VIEW CERTIFICATIONS', href: '/contact-us/' },
    },
  },

  spotlights: [
    {
      badge: 'CASE STUDY',
      heading: '24 Double Acting Cylinders for a 500-Ton Press Line',
      subheading: 'Automotive Component Manufacturer — GIDC, Ahmedabad',
      stats: [],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "The client's existing imported cylinders across their 500-ton press line were failing prematurely due to seal degradation. The OEM's lead time was 12+ weeks, and every day of press downtime was costing significant production revenue. They needed a local manufacturer capable of matching the original bore tolerances and delivering fast.",
        },
        {
          number: '02',
          title: 'The Solution',
          description: "We measured the existing cylinders, matched bore, rod, and port dimensions exactly, and upgraded the sealing system from the OEM's outdated rubber O-rings to premium Parker polyurethane V-packing sets. The new cylinders were CNC-machined from ST 52.3 tube with H8 bore tolerance and hard chrome plated EN 19 rods.",
        },
        {
          number: '03',
          title: 'The Outcome',
          description: "All 24 double acting cylinders manufactured, tested at 1.5× working pressure, and delivered within 10 working days. The upgraded seal design extended service life by an estimated 40% over the original imported units. The client has since standardized on Honeywell for all press cylinder requirements.",
        },
      ]
    }
  ],

  relatedProducts: {
    description: 'Explore our full range of heavy-duty hydraulic cylinders.',
    items: [
      {
        title: 'Custom Hydraulic Cylinders',
        description: 'Bespoke actuators engineered for extreme environments and unique mounting requirements.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/custom-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Tie Rod Hydraulic Cylinders',
        description: 'Standard NFPA tie rod cylinders for heavy-duty industrial applications.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/tie-rod-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/tie-rod-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Telescopic Hydraulic Cylinders',
        description: 'Multi-stage cylinders providing exceptional stroke length from a compact retracted footprint.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/telescopic-hydraulic-cylinders-manufacturer.webp',
        href: '/products/hydraulic-cylinders/telescopic-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
    ],
  },

  // 13. FAQs
  faqs: [
    {
      question: 'What is a double acting hydraulic cylinder?',
      answer: 'A double acting hydraulic cylinder has two ports — one at each end of the barrel. Hydraulic fluid is pumped into the bottom port to extend the piston and through the top port to retract it. This provides full hydraulic force in both directions, unlike single acting cylinders that rely on gravity or springs for return.',
    },
    {
      question: 'What bore sizes are available for double acting cylinders?',
      answer: 'We manufacture double acting cylinders with bore sizes from 40mm to 500mm. Every bore is CNC-honed from ST 52.3 seamless steel tube to H8/H9 tolerance. Custom bore sizes outside this range can be engineered on request.',
    },
    {
      question: 'What is the maximum working pressure for your double acting cylinders?',
      answer: 'Our standard double acting cylinders are rated for working pressures up to 450 bar. Every cylinder is hydrostatically tested at 1.5× the rated working pressure before dispatch, with a detailed test certificate provided.',
    },
    {
      question: 'What is the delivery time for a custom double acting cylinder?',
      answer: 'Standard double acting cylinders in common bore sizes ship within 7 working days. Custom configurations — non-standard bore sizes, special materials, or unique mounting arrangements — typically require 10–15 working days depending on complexity.',
    },
    {
      question: 'What mounting options are available for double acting cylinders?',
      answer: 'We offer four standard mounting configurations: flange mounting, clevis mounting, trunnion mounting, and foot mounting. Custom mounting brackets and interfaces can be designed and machined to integrate with your specific machine frame.',
    },
    {
      question: 'What seal brands do you use in your double acting cylinders?',
      answer: 'We exclusively use imported Hallite and Parker sealing systems. These premium seals ensure zero internal leakage, extended service life, and reliable operation even in harsh industrial environments with temperature extremes and contaminated hydraulic fluids.',
    },
  ],
  cta: {
    title: 'Need a double acting hydraulic cylinder engineered to your exact specifications?',
    description: 'From standard bore sizes to fully custom configurations — get a precision-engineered double acting cylinder backed by 100% hydrostatic pressure testing and ISO 9001:2015 certified manufacturing.',
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/',
    secondaryCtaText: 'Talk to an Engineer',
    secondaryCtaHref: '/contact-us/',
  },
};
