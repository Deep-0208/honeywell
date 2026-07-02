import React from 'react';
import {
  Box,
  Wrench,
  Layers,
  Settings,
  ShieldCheck,
  Zap,
  Factory,
  Package,
} from 'lucide-react';

import type { FAQ, CylinderSpec, ProcessStep, CylinderIndustry } from './types';

export const TIE_ROD_FAQS: FAQ[] = [
  {
    question: 'Why should I choose a tie rod cylinder instead of a welded cylinder?',
    answer: 'If your machine operates indoors and requires rapid maintenance to prevent costly downtime, tie rod cylinders are superior because they can be disassembled and rebuilt on the factory floor with standard wrenches.',
  },
  {
    question: 'Are your tie rod cylinders interchangeable with other NFPA brands?',
    answer: 'Yes. We manufacture our tie rod cylinders to strict NFPA and ISO 6020/2 dimensional standards. The mounting dimensions, port locations, and pin-to-pin lengths will perfectly match major international brands, allowing for easy drop-in replacements.',
  },
  {
    question: 'Can a tie rod cylinder handle high pressures?',
    answer: 'Tie rod cylinders are generally rated for low to medium pressure (up to 210 Bar / 3000 PSI). For extreme high-pressure applications (350+ Bar) where shock loads could cause the tie rods to stretch, we recommend our Welded Hydraulic Cylinders.',
  },
  {
    question: 'Do you offer adjustable cushioning on your tie rod cylinders?',
    answer: 'Yes. We can integrate adjustable internal fluid cushions on both the head and cap ends to safely decelerate the piston at the end of the stroke, preventing mechanical slamming in high-speed automation.',
  },
];

export const TIE_ROD_SPECS: CylinderSpec[] = [
  { parameter: 'Bore Sizes', value: '40mm to 250mm (1.5" to 10" NFPA standard)' },
  { parameter: 'Maximum Operating Pressure', value: 'Up to 210 Bar (3000 PSI)' },
  { parameter: 'Mounting Standards', value: 'NFPA, ISO 6020/2, Custom' },
  { parameter: 'Tie Rod Material', value: 'High-Tensile Alloy Steel' },
  { parameter: 'Barrel Material', value: 'ST52 Seamless Honed Tube (Ra 0.2 µm finish)' },
  { parameter: 'Sealing Options', value: 'Polyurethane (Standard), Viton (High-Temp), PTFE (Low-Friction)' },
  { parameter: 'Cushioning', value: 'Adjustable internal cushioning available on both head and cap ends' },
];

export const TIE_ROD_COMPONENTS: ProcessStep[] = [
  {
    icon: <Box className="w-6 h-6" />,
    title: 'The End Caps',
    desc: 'CNC-machined from solid steel blocks. The head cap and the rear cap feature deep grooves designed to perfectly seat the barrel. These caps house the fluid ports and the crucial rod wiper and gland seals.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'The Tie Rods',
    desc: 'High-yield-strength alloy steel rods. Torqued to exact mathematical specifications to provide massive clamping force, ensuring the O-ring static seals never blow out under pressure.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'The Barrel',
    desc: 'Precision-honed ST52 seamless steel tubing. Honed to a mirror-like Ra 0.2 µm finish. Zero heat-induced distortion maintains perfect internal cylindricity.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'The Piston & Rod',
    desc: 'Internal piston utilizes premium polyurethane U-cups. The hard-chrome plated piston rod transmits mechanical force and resists wear.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Sealing System',
    desc: 'Premium low-friction seals designed specifically to minimize heat generation during rapid, continuous-cycle stroking.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Rapid Serviceability',
    desc: 'Loosen the tie rod nuts, slide the end cap off, replace the seal, and re-bolt the cylinder together using standard hand tools within 30 minutes.',
  },
];

export const TIE_ROD_INDUSTRIES: CylinderIndustry[] = [
  {
    icon: <Factory className="w-6 h-6" />,
    industryName: 'Automotive OEM',
    description: 'Providing high-speed, highly serviceable clamping cylinders for robotic welding stations and assembly lines.',
    href: '/industries'
  },
  {
    icon: <Box className="w-6 h-6" />,
    industryName: 'Plastic Processing',
    description: 'Supplying standardized core-pull and ejector cylinders for injection moulding machines.',
    href: '/industries'
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    industryName: 'Machine Tool Builders',
    description: 'Delivering zero-distortion, low-friction actuation for automated CNC loading and unloading gantries.',
    href: '/industries'
  },
  {
    icon: <Package className="w-6 h-6" />,
    industryName: 'Packaging & Automation',
    description: 'Engineering rapid-cycle cylinders for high-speed corrugated box manufacturing and palletizing robots.',
    href: '/industries'
  },
];
