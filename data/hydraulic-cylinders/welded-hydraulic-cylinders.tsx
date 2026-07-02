import React from 'react';
import {
  ShieldAlert,
  Minimize2,
  CloudRain,
  Settings,
  Flame,
  Hammer,
  HardHat,
  Anchor,
  Box,
  Wrench,
  Cog,
  Zap,
} from 'lucide-react';

import type { FAQ, CylinderSpec, ProcessStep, CylinderFeature, CylinderIndustry } from './types';

export const WELDED_FAQS: FAQ[] = [
  {
    question: 'Can a welded cylinder be repaired if the seals fail?',
    answer: 'Yes, but it requires machining. The welded cylinder must be placed on a lathe to cut the weld, allowing access to the internal seals. After replacing the seals, the end cap must be re-welded and hydrostatically tested. Our Hydraulic Cylinder Repair division handles this completely in-house.',
  },
  {
    question: 'Why are welded cylinders better for outdoor construction equipment?',
    answer: 'Tie rod cylinders have external threads and nuts that catch dirt, mud, and water, leading to rapid corrosion. Welded cylinders have a smooth, sleek exterior profile that is inherently weatherproof and easier to protect with marine-grade paints.',
  },
  {
    question: 'Can you customize the mounting options on a welded cylinder?',
    answer: 'Absolutely. Because there are no external tie rods obstructing the barrel, we can weld custom trunnions, cross-tubes, or heavy flanges directly to the cylinder barrel at any orientation required by your machine design.',
  },
  {
    question: 'Do you manufacture high-pressure cylinders for heavy forging presses?',
    answer: 'Yes. Forging and deep drawing presses are our primary applications for welded cylinders. We engineer these actuators using ultra-thick ST52 seamless tubes designed to withstand constant, brutal 350+ Bar pressures.',
  },
];

export const WELDED_SPECS: CylinderSpec[] = [
  { parameter: 'Bore Sizes', value: '40mm to 400+ mm (Custom large-bore available)' },
  { parameter: 'Maximum Operating Pressure', value: 'Up to 350+ Bar (5000+ PSI)' },
  { parameter: 'Mounting Options', value: 'Cross-Tube, Clevis, Trunnion, Flange (Welded directly to barrel)' },
  { parameter: 'Barrel Material', value: 'ST52 / EN8 Seamless Honed Tube' },
  { parameter: 'Piston Rod Options', value: 'Hard Chrome Plated, Stainless Steel, Induction Hardened' },
  { parameter: 'Sealing System', value: 'Heavy-duty 5-piece piston seals, double-lip rod wipers, PTFE wear bands' },
  { parameter: 'Exterior Protection', value: 'Standard Polyurethane, Marine-Grade Epoxy, Zinc Plating' },
];

export const WELDED_COMPONENTS: ProcessStep[] = [
  {
    icon: <Box className="w-6 h-6" />,
    title: 'A. The Welded Barrel',
    desc: 'We utilize heavy-walled ST52 seamless steel tubing. The internal surface is skived and roller-burnished to an Ra 0.2 µm finish. The barrel wall thickness is calculated mathematically to resist bulging or deformation under extreme high-pressure transients.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'B. The End Caps (Base and Head)',
    desc: 'The rear base cap is permanently welded to the barrel using advanced rotary friction or sub-arc welding techniques, creating a solid, leak-proof containment vessel. The front head cap (gland) is either welded or threaded securely into the barrel to house the rod seals.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'C. Mounting Interfaces',
    desc: 'Because there are no external tie rods obstructing the barrel, welded cylinders allow for incredibly versatile, heavy-duty mounting options. Trunnions, cross-tubes, and clevis mounts are welded directly to the barrel itself, creating a unified structure capable of absorbing massive shear forces.',
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'D. The Rod Assembly',
    desc: 'The hard-chrome plated piston rod transmits the mechanical force to the heavy load. For severe environments like marine engineering or mining, we upgrade the rod material to hardened stainless steel with specialized anti-corrosive epoxy coatings.',
  },
  {
    icon: <ShieldAlert className="w-6 h-6" />,
    title: 'E. The Sealing System',
    desc: 'Welded cylinders must survive extreme shock loads. We utilize heavy-duty, 5-piece piston seals, bronze-filled PTFE wear rings, and double-lip rod wipers designed to prevent dust, mud, and metallic rust from contaminating the high-pressure fluid.',
  },
];

export const WELDED_ADVANTAGES: CylinderFeature[] = [
  {
    icon: <ShieldAlert className="w-7 h-7" />,
    title: 'Extreme Pressure Tolerance',
    description: 'A properly welded cylinder can safely operate at constant pressures of 350 Bar (5000+ PSI) and survive massive instantaneous pressure spikes that would stretch and destroy a tie-rod cylinder.',
  },
  {
    icon: <Minimize2 className="w-7 h-7" />,
    title: 'Compact Footprint',
    description: 'Eliminating the four bulky external tie rods creates a sleek, narrow profile. This is crucial for integrating actuators into tight machine frames, tractor chassis, and boom arms.',
  },
  {
    icon: <CloudRain className="w-7 h-7" />,
    title: 'Harsh Environment Survival',
    description: 'Without external rods and nuts to catch dirt, mud, or corrosive salt spray, a welded cylinder is inherently more weather-resistant and easier to protect in outdoor environments.',
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: 'Absolute Customizability',
    description: 'Welded construction allows for absolute freedom in port location and mounting configurations. Ports can be welded directly onto the barrel at any angle required by the machine design.',
  },
];

export const WELDED_INDUSTRIES: CylinderIndustry[] = [
  {
    icon: <Flame className="w-6 h-6" />,
    industryName: 'Steel & Metallurgy',
    description: 'Supplying extreme-pressure, heat-resistant cylinders for rolling mills and automatic gauge control (AGC).',
    href: '/industries'
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    industryName: 'Heavy Forging',
    description: 'Delivering massive, thick-walled pressing cylinders designed to survive brutal metal-stamping shock loads.',
    href: '/industries'
  },
  {
    icon: <HardHat className="w-6 h-6" />,
    industryName: 'Construction Equipment',
    description: 'Engineering rugged, weather-resistant boom, stick, and bucket cylinders for excavators and loaders.',
    href: '/industries'
  },
  {
    icon: <Anchor className="w-6 h-6" />,
    industryName: 'Marine Engineering',
    description: 'Manufacturing corrosion-resistant, high-tensile cylinders for ship-breaking shears and marine winches.',
    href: '/industries'
  },
  {
    icon: <Box className="w-6 h-6" />,
    industryName: 'Material Handling',
    description: 'Providing fail-safe, heavy-duty lifting cylinders for multi-ton gantry cranes and goods elevators.',
    href: '/industries'
  },
];
