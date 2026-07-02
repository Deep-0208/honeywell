import React from 'react';
import {
  ArrowUpToLine,
  RefreshCw,
  Layers,
  Package,
  Activity,
  ShieldCheck,
  Truck,
  HardHat,
  Trash2,
  Building2,
} from 'lucide-react';

import type { FAQ, CylinderSpec, ProcessStep, CylinderIndustry } from './types';

export const TELESCOPIC_FAQS: FAQ[] = [
  {
    question: 'Why does a telescopic cylinder get faster as it extends?',
    answer: 'This is due to fluid dynamics. The hydraulic pump provides a constant flow of fluid (Liters Per Minute). As each smaller stage engages, it requires less fluid volume to fill. Therefore, the constant fluid flow fills the smaller volume faster, causing the extension speed to increase.',
  },
  {
    question: 'Can you build double-acting telescopic cylinders?',
    answer: 'Yes. While single-acting (gravity return) is standard for dump trucks, we engineer double-acting telescopic cylinders for horizontal applications like refuse packer blades, where hydraulic pressure is required to both extend and retract the stages.',
  },
  {
    question: 'What causes a telescopic cylinder to bend or buckle?',
    answer: 'Buckling is usually caused by extreme side-loading. This occurs if a dump truck attempts to tip its load while parked on uneven ground, or if the load gets stuck in the top of the dump bed. We engineer our cylinders with extended stage overlap to resist these bending forces, but operators must ensure safe tipping practices.',
  },
  {
    question: 'Do you manufacture both front-end and underbody tipper cylinders?',
    answer: 'Yes. We manufacture long-stroke trunnion-mounted cylinders for front-end tipping, as well as highly compact, high-pressure cross-tube mounted cylinders designed specifically for tight underbody chassis spaces.',
  },
];

export const TELESCOPIC_SPECS: CylinderSpec[] = [
  { parameter: 'Number of Stages', value: '2-Stage to 6-Stage Configurations' },
  { parameter: 'Maximum Stroke Length', value: 'Up to 8,000+ mm (Custom long-stroke available)' },
  { parameter: 'Maximum Operating Pressure', value: 'Up to 250 Bar (3600 PSI)' },
  { parameter: 'Action Type', value: 'Single-Acting (Gravity Return), Double-Acting (Powered Return)' },
  { parameter: 'Mounting Options', value: 'Outer Trunnion (Front End), Cross-Tube (Underbody), Clevis' },
  { parameter: 'Stage Material', value: 'ST52 / EN8 Seamless Honed Tube (OD and ID)' },
  { parameter: 'Surface Protection', value: 'Hard Chrome Plated (All Stages)' },
  { parameter: 'Sealing System', value: 'High-pressure V-packing, heavy-duty rod wipers, bronze-filled guide rings' },
];

export const TELESCOPIC_STEPS: ProcessStep[] = [
  {
    icon: <ArrowUpToLine className="w-6 h-6" />,
    title: 'Sequential Extension',
    desc: 'Fluid pressure first acts on the largest diameter sleeve. Once fully extended, pressure forces the next smaller sleeve to extend. This continues until the final plunger is fully extended.',
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: 'Gravity Retraction',
    desc: 'In single-acting tipper applications, the cylinder relies on gravity. Opening the directional valve allows the immense weight of the dump bed to force fluid out and retract the sleeves.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Stroke Multiplication',
    desc: 'Achieves massive extended heights. A 5-stage cylinder with a closed length of just 1 meter can extend to provide a massive 4.5-meter lifting stroke.',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Extreme Space Saving',
    desc: 'A telescopic cylinder collapses into a fraction of its total stroke length (20% to 40%), allowing it to fit vertically under short truck chassis.',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'Optimal Lifting Angles',
    desc: 'Placing a compact cylinder directly at the front of a dump body (trunnion mount) allows the tipper to achieve maximum mechanical leverage and tipping stability.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: 'Specialized Load Handling',
    desc: 'The sequential extension exerts maximum force at the beginning of the stroke (when the dump bed is heaviest) and faster speed at the end of the stroke.',
  },
];

export const TELESCOPIC_INDUSTRIES: CylinderIndustry[] = [
  {
    icon: <Truck className="w-6 h-6" />,
    industryName: 'Transportation & Logistics',
    description: 'Supplying high-volume, multi-stage cylinders for heavy commercial tipper trucks and bulk transport trailers.',
    href: '/industries'
  },
  {
    icon: <HardHat className="w-6 h-6" />,
    industryName: 'Construction',
    description: 'Delivering robust lifting cylinders for massive earth-moving dump trucks and off-highway haulers operating in harsh environments.',
    href: '/industries'
  },
  {
    icon: <Trash2 className="w-6 h-6" />,
    industryName: 'Waste Management',
    description: 'Engineering compact, double-acting telescopic cylinders for refuse collection vehicles and garbage packer blades.',
    href: '/industries'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    industryName: 'Municipal Equipment',
    description: 'Manufacturing highly reliable actuators for municipal road sweepers, snowplows, and specialized utility trucks.',
    href: '/industries'
  },
];
