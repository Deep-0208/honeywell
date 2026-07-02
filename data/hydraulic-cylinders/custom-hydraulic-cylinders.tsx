import React from 'react';
import {
  PenTool,
  Calculator,
  Box,
  Layers,
  Wrench,
  FlaskConical,
  Cog,
  Shield,
  Thermometer,
  RefreshCw,
  Anchor,
  Building2,
  Settings,
} from 'lucide-react';

import type { FAQ, CylinderSpec, ProcessStep, ProductVariant, CylinderIndustry } from './types';

export const CUSTOM_CYLINDER_FAQS: FAQ[] = [
  {
    question: 'Can you manufacture a replacement for a broken imported cylinder without a part number?',
    answer: 'Yes. This is our primary reverse-engineering service. Send us the damaged cylinder; our engineers will dismantle it, measure all internal and external tolerances, and manufacture an exact, fully compatible replacement.',
  },
  {
    question: 'What is the largest bore size you can manufacture?',
    answer: 'We have the heavy machining capabilities to manufacture custom large-bore cylinders exceeding 400mm (16+ inches), specifically designed for heavy forging presses and infrastructure projects.',
  },
  {
    question: 'Can you help design the cylinder if we only have the machine\'s payload requirements?',
    answer: 'Absolutely. Our engineering team will perform the mechanical load calculations, determine the required system pressure, and engineer the cylinder from scratch to safely lift your payload.',
  },
  {
    question: 'Do you offer specialized corrosion-resistant cylinders for the chemical industry?',
    answer: 'Yes. We can manufacture entirely custom cylinders from 304 or 316 Stainless Steel, and utilize specialized Viton or Kalrez seals designed specifically to survive severe chemical processing environments.',
  },
];

export const CUSTOM_CYLINDER_SPECS: CylinderSpec[] = [
  { parameter: 'Bore Sizes', value: 'Micro-bores up to Large Bores (400mm+)' },
  { parameter: 'Stroke Length', value: 'Micro-strokes up to Extreme Long Strokes (8,000+ mm)' },
  { parameter: 'Operating Pressures', value: 'Low pressure up to Extreme High Pressure (500+ Bar / 7000+ PSI)' },
  { parameter: 'Mounting Configurations', value: 'Standard, Offset, Asymmetrical, Custom Machined Interfaces' },
  { parameter: 'Barrel Materials', value: 'ST52, EN8, SS304, SS316, Custom High-Strength Alloys' },
  { parameter: 'Rod Surface Protection', value: 'Heavy Hard Chrome, Nickel-Chrome, Ceramic Coating, Induction Hardening' },
  { parameter: 'Integrated Logic', value: 'Manifold blocks and load-holding valves welded directly to the cylinder' },
];

export const CUSTOM_CYLINDER_STEPS: ProcessStep[] = [
  {
    icon: <Calculator className="w-6 h-6" />,
    title: 'Requirement Analysis',
    desc: 'Our engineers consult directly with your machine builders. We analyze the required operational tonnage, available physical space envelope, system pressure, stroke velocity, environmental temperatures, and potential side-loading threats.',
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: 'Load Calculations & Material Yield Analysis',
    desc: 'We perform rigorous column buckling calculations and hoop stress analyses to determine the exact required wall thickness of the cylinder barrel. For extremely long strokes, we calculate the required rod diameter to prevent deflection.',
  },
  {
    icon: <Box className="w-6 h-6" />,
    title: '3D CAD Design',
    desc: 'Our drafting team utilizes advanced SolidWorks and AutoCAD software to construct 3D models of the custom cylinder. These models are shared directly with your engineering team for digital interference checking.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Material Selection',
    desc: 'We specify the precise metallurgy required for the environment—from standard ST52 seamless carbon steel for heavy applications to specialized Monel or Duplex Stainless Steel for extreme corrosive resistance.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Prototype Development',
    desc: 'For OEM clients ordering in volume, we machine a fully functional prototype for installation and physical field testing before moving to mass production.',
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: 'Validation Testing',
    desc: 'Every custom cylinder undergoes 1.5x working pressure hydrostatic testing. We document the pressure holding capabilities and provide a comprehensive test certificate.',
  },
];

export const CUSTOM_CYLINDER_VARIANTS: ProductVariant[] = [
  {
    icon: <RefreshCw className="w-7 h-7" />,
    title: 'Reverse Engineering Services',
    description: 'We take existing imported German, Japanese, or American cylinders, completely dismantle them, measure internal tolerances, and manufacture identical, fully interchangeable replacement units. If the original manufacturer has gone out of business, we reverse-engineer the required actuator from your remaining broken parts.',
    highlights: [
      'Imported cylinder replacement',
      'Obsolete equipment support',
      'Damaged cylinder redesign with flaw correction',
    ],
  },
  {
    icon: <Cog className="w-7 h-7" />,
    title: 'Large Bore & Extreme Duty Cylinders',
    description: 'We possess the heavy machining capabilities to hone massive barrels (400mm+ bores) and machine heavy-tonnage pistons. These massive actuators are utilized in the steel industry for heavy forging presses, and in infrastructure projects for massive bridge lifting or dam-gate actuation.',
    highlights: [
      '400mm+ bore capacity',
      'Heavy forging press cylinders',
      'Infrastructure & dam-gate actuators',
    ],
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Special Material Cylinders',
    description: 'Standard ST52 steel and hard-chrome plating will quickly degrade in severe caustic or saline environments. Our custom capabilities extend to specialized metallurgy for extreme operating conditions.',
    highlights: [
      'SS304 / SS316 Stainless Steel for pharmaceutical & food processing',
      'Marine-grade alloys with epoxy coating for offshore applications',
      'High-temperature alloys with Viton / Kalrez seals for foundries',
    ],
  },
];

export const CUSTOM_CYLINDER_INDUSTRIES: CylinderIndustry[] = [
  {
    icon: <Thermometer className="w-6 h-6" />,
    industryName: 'Steel Plants & Foundries',
    description: 'Large bore pressing cylinders and extreme high-temperature actuators for ladle tilting.',
    href: '/industries'
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    industryName: 'Marine & Offshore',
    description: 'Corrosion-resistant, heavy-duty lifting cylinders for winches, ship-cranes, and port material handling.',
    href: '/industries'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    industryName: 'Infrastructure Projects',
    description: 'Massive bespoke cylinders for dam spillway radial gates and heavy civil engineering projects.',
    href: '/industries'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    industryName: 'Special Purpose Machinery',
    description: 'Non-standard actuators with complex logic-valve blocks welded directly to the cylinder barrel for smart factory automation.',
    href: '/industries'
  },
];
