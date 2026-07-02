// data/double-acting-hydraulic-cylinders.ts
// ─────────────────────────────────────────────────────────────────────────────
// Static data for the Double Acting Hydraulic Cylinder product page
// ─────────────────────────────────────────────────────────────────────────────

import React from 'react';
import {
  ArrowLeftRight,
  Gauge,
  Settings,
  Shield,
  Droplets,
  CheckCircle2,
  Thermometer,
  Factory,
  Building2,
  Cog,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────

export interface ProductFeature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface ProductSpec {
  parameter: string;
  value: string;
}

export interface MountingType {
  title: string;
  description: string;
  applications: string[];
}

export interface ProductApplication {
  name: string;
  description: string;
  href?: string;
}

export interface ProductIndustry {
  icon: React.ReactElement;
  name: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// Key Features
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT_FEATURES: ProductFeature[] = [
  {
    icon: React.createElement(ArrowLeftRight, { className: 'w-5 h-5' }),
    title: 'Bi-Directional Force Generation',
    description:
      'Generates full hydraulic force in both extend and retract strokes, providing complete motion control for precision applications where gravity-return is insufficient.',
  },
  {
    icon: React.createElement(Gauge, { className: 'w-5 h-5' }),
    title: 'High Working Pressure — Up to 450 Bar',
    description:
      'Engineered to operate at working pressures up to 450 bar, suitable for heavy-duty pressing, forging, and high-tonnage industrial applications.',
  },
  {
    icon: React.createElement(Settings, { className: 'w-5 h-5' }),
    title: 'Custom Bore Sizes — 40mm to 500mm',
    description:
      'Manufactured in bore sizes from 40mm for compact machinery up to 500mm for heavy industrial presses. Every bore is CNC-honed to H8/H9 tolerance.',
  },
  {
    icon: React.createElement(Shield, { className: 'w-5 h-5' }),
    title: 'Hard Chrome Plated Piston Rods',
    description:
      'Piston rods machined from EN 8, EN 9, EN 19, or EN 31 grade steel with precision f7 tolerance and heavy hard chrome plating for corrosion resistance and longevity.',
  },
  {
    icon: React.createElement(Droplets, { className: 'w-5 h-5' }),
    title: 'Imported Hallite / Parker Seals',
    description:
      'Fitted with premium imported Hallite and Parker sealing systems designed for zero internal leakage, extended service life, and reliable operation in harsh environments.',
  },
  {
    icon: React.createElement(CheckCircle2, { className: 'w-5 h-5' }),
    title: '100% Pressure Tested Before Dispatch',
    description:
      'Every cylinder undergoes rigorous hydrostatic testing at 1.5× working pressure. A detailed pressure test certificate is provided with each unit shipped.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Technical Specifications (from legacy page + architecture docs)
// ─────────────────────────────────────────────────────────────────────────────

export const TECHNICAL_SPECS: ProductSpec[] = [
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
];

// ─────────────────────────────────────────────────────────────────────────────
// Material Specifications (from legacy page)
// ─────────────────────────────────────────────────────────────────────────────

export const MATERIAL_SPECS: ProductSpec[] = [
  { parameter: 'Honed Tube', value: 'ST 52.3 (Tolerance H8, H9)' },
  { parameter: 'Piston Rod', value: 'EN 8 / EN 9 / EN 19 / EN 31 (Tolerance f7)' },
  { parameter: 'Piston and Gland', value: 'EN 8' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Mounting Types
// ─────────────────────────────────────────────────────────────────────────────

export const MOUNTING_TYPES: MountingType[] = [
  {
    title: 'Flange Mounting',
    description:
      'Bolt-on flange mounting for rigid, permanent installations. Ideal when the cylinder must remain perfectly aligned with the machine frame.',
    applications: ['Press machines', 'Injection moulding machines', 'Fixed production equipment'],
  },
  {
    title: 'Clevis Mounting',
    description:
      'Pin-and-clevis mounting allows angular movement during stroke. Used where the load path changes angle during cylinder extension.',
    applications: ['Dump trucks', 'Tipping trailers', 'Articulated mechanisms'],
  },
  {
    title: 'Trunnion Mounting',
    description:
      'Mid-barrel trunnion pins allow the entire cylinder to pivot. Best for applications requiring large angular displacement during the stroke cycle.',
    applications: ['Mobile cranes', 'Excavator arms', 'Heavy lifting equipment'],
  },
  {
    title: 'Foot Mounting',
    description:
      'Bottom foot brackets for simple horizontal or vertical installations. Cost-effective solution where angular movement is not required.',
    applications: ['Conveyor systems', 'Goods lifts', 'Simple pressing operations'],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Applications
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT_APPLICATIONS: ProductApplication[] = [
  {
    name: 'Hydraulic Press Machines',
    description:
      'Powering the main pressing action in hydraulic presses from 10 to 2,000 tons for metal forming, deep drawing, and forging operations.',
  },
  {
    name: 'Injection Moulding Machines',
    description:
      'Driving clamping and injection units in plastic injection moulding machines where precise bi-directional force control is essential.',
  },
  {
    name: 'Goods Lifts & Material Handling',
    description:
      'Lifting platforms, scissor lifts, and freight elevators requiring controlled ascent and descent with predictable retraction.',
  },
  {
    name: 'Construction Equipment',
    description:
      'Boom, arm, and bucket cylinders for excavators, backhoes, and JCB machines requiring full force in both push and pull strokes.',
  },
  {
    name: 'Agricultural Machinery',
    description:
      'Tractor attachments, tillers, and harvester arms where double acting power enables reliable operation in harsh field conditions.',
  },
  {
    name: 'Machine Tool Industry',
    description:
      'CNC machine tool clamping, workholding, and automation systems requiring precise, repeatable hydraulic actuation.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Industries
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT_INDUSTRIES: ProductIndustry[] = [
  {
    icon: React.createElement(Factory, { className: 'w-6 h-6' }),
    name: 'Automotive & Auto Component Manufacturing',
    description:
      'Double acting cylinders for stamping presses, body panel forming, and automated assembly lines in automotive plants across Gujarat.',
  },
  {
    icon: React.createElement(Cog, { className: 'w-6 h-6' }),
    name: 'Injection Moulding & Plastics',
    description:
      'Clamping cylinders and injection unit actuators for plastic moulding machines requiring precise, controllable bi-directional force.',
  },
  {
    icon: React.createElement(Building2, { className: 'w-6 h-6' }),
    name: 'Construction & Infrastructure',
    description:
      'Heavy-duty double acting cylinders for concrete batching plants, pile driving rigs, and bridge construction hydraulic systems.',
  },
  {
    icon: React.createElement(Thermometer, { className: 'w-6 h-6' }),
    name: 'Steel & Metal Fabrication',
    description:
      'Forging press cylinders, metal shearing machines, and plate bending equipment in steel plants and heavy fabrication workshops.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT_FAQS: FAQ[] = [
  {
    question: 'What is a double acting hydraulic cylinder?',
    answer:
      'A double acting hydraulic cylinder has two ports — one at each end of the barrel. Hydraulic fluid is pumped into the bottom port to extend the piston and through the top port to retract it. This provides full hydraulic force in both directions, unlike single acting cylinders that rely on gravity or springs for return.',
  },
  {
    question: 'What bore sizes are available for double acting cylinders?',
    answer:
      'We manufacture double acting cylinders with bore sizes from 40mm to 500mm. Every bore is CNC-honed from ST 52.3 seamless steel tube to H8/H9 tolerance. Custom bore sizes outside this range can be engineered on request.',
  },
  {
    question: 'What is the maximum working pressure for your double acting cylinders?',
    answer:
      'Our standard double acting cylinders are rated for working pressures up to 450 bar. Every cylinder is hydrostatically tested at 1.5× the rated working pressure before dispatch, with a detailed test certificate provided.',
  },
  {
    question: 'What is the delivery time for a custom double acting cylinder?',
    answer:
      'Standard double acting cylinders in common bore sizes ship within 7 working days. Custom configurations — non-standard bore sizes, special materials, or unique mounting arrangements — typically require 10–15 working days depending on complexity.',
  },
  {
    question: 'What mounting options are available for double acting cylinders?',
    answer:
      'We offer four standard mounting configurations: flange mounting, clevis mounting, trunnion mounting, and foot mounting. Custom mounting brackets and interfaces can be designed and machined to integrate with your specific machine frame.',
  },
  {
    question: 'What seal brands do you use in your double acting cylinders?',
    answer:
      'We exclusively use imported Hallite and Parker sealing systems. These premium seals ensure zero internal leakage, extended service life, and reliable operation even in harsh industrial environments with temperature extremes and contaminated hydraulic fluids.',
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// Advantages / Why Choose
// ─────────────────────────────────────────────────────────────────────────────

export const PRODUCT_ADVANTAGES: string[] = [
  'In-house CNC honing, machining, and assembly — zero outsourcing of critical operations',
  'ISO 9001:2015 certified manufacturing facility in Ahmedabad GIDC',
  '100% hydrostatic pressure testing at 1.5× working pressure with test certificates',
  'Premium imported Hallite / Parker seals for zero-leakage performance',
  'Hard chrome plated piston rods from EN 8/EN 9/EN 19/EN 31 grade steel',
  '7-day dispatch on standard bore sizes — fastest in Gujarat',
  'Custom bore, stroke, and mounting configurations at no additional lead time premium',
  'Direct factory pricing — we are the manufacturer, not a trader or reseller',
];
