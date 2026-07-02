import React from 'react';
import {
  ShieldAlert,
  Minimize2,
  CloudRain,
  Settings,
  Hammer,
  HardHat,
  Box,
  Zap,
} from 'lucide-react';

import type { FAQ, CylinderSpec, ProcessStep, CylinderFeature, CylinderIndustry } from './types';

export const SINGLE_ACTING_FAQS: FAQ[] = [
  {
    question: 'How does a single acting hydraulic cylinder retract?',
    answer: 'A single acting hydraulic cylinder must rely on an external force to expunge the fluid inside and retract. This can be left to gravity if there is no immediate need to retract the piston, but a second piston or mechanical load can also be used to forcefully push the piston back into the cylinder. Strong internal springs can also be utilized for retraction.',
  },
  {
    question: 'What is the main advantage of a single acting cylinder?',
    answer: 'Single acting cylinders are simpler in design and often more cost-effective because they require only one hydraulic line. They are highly reliable in applications where the return stroke can be accomplished by gravity, mechanical weight, or a spring.',
  },
  {
    question: 'Can single acting cylinders be used in horizontal applications?',
    answer: 'Yes, they can be used horizontally, provided there is an external force (like a spring mechanism or opposing load) to retract the rod. If relying purely on gravity, they are typically mounted vertically.',
  },
  {
    question: 'Do you manufacture custom single acting cylinders?',
    answer: 'Yes. We engineer custom single acting cylinders with bore sizes up to 250mm and stroke lengths up to 6000mm. We can customize mounting options, port locations, and material specifications according to your exact requirements.',
  },
];

export const SINGLE_ACTING_SPECS: CylinderSpec[] = [
  { parameter: 'Bore Size', value: '40 to 250 mm (Custom sizes available)' },
  { parameter: 'Rod Dia', value: '16 to 200 mm' },
  { parameter: 'Stroke Length', value: 'Up to 6000 mm' },
  { parameter: 'Working Pressure', value: 'Up to 450 Bar' },
  { parameter: 'Honed Tube Material', value: 'ST 52.3 (Tolerance H8, H9)' },
  { parameter: 'Piston Rod Material', value: 'EN 8 / EN 9 / EN 19 / EN 31 (Tolerance f7)' },
  { parameter: 'Piston and Gland', value: 'EN 8' },
];

export const SINGLE_ACTING_COMPONENTS: ProcessStep[] = [
  {
    icon: <Box className="w-6 h-6" />,
    title: 'A. Single Port Operation',
    desc: 'Fluid enters through a single port to extend the cylinder. The simplicity of a single hydraulic line reduces plumbing complexity, potential leak points, and overall system cost.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'B. Piston and Rod Assembly',
    desc: 'The hard-chrome plated piston rod (EN 8 / EN 9 / EN 19) transmits the mechanical force to the heavy load. Precision honing of the ST 52.3 tube ensures extremely low friction during extension and retraction.',
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'C. Retraction Mechanism',
    desc: 'Unlike double acting cylinders, single acting variants rely on gravity, weight of the load, or internal springs for the return stroke. This makes them perfect for lifting applications like scissor lifts or jacks.',
  },
];

export const SINGLE_ACTING_ADVANTAGES: CylinderFeature[] = [
  {
    icon: <Minimize2 className="w-7 h-7" />,
    title: 'Cost-Effective Design',
    description: 'With only one hydraulic port and line, single acting cylinders reduce the complexity of the hydraulic circuit, saving on hoses, fittings, and valving.',
  },
  {
    icon: <ShieldAlert className="w-7 h-7" />,
    title: 'High Reliability',
    description: 'Fewer moving parts and a simpler sealing mechanism mean fewer points of potential failure, leading to a highly reliable actuator with lower maintenance needs.',
  },
  {
    icon: <CloudRain className="w-7 h-7" />,
    title: 'Reduced Fluid Requirement',
    description: 'Because fluid is only used for the extension stroke, single acting systems require smaller reservoirs and smaller pumps compared to double acting setups.',
  },
  {
    icon: <Settings className="w-7 h-7" />,
    title: 'Fail-Safe Retraction',
    description: 'In gravity-return applications, the cylinder will safely retract if hydraulic power is lost, providing an inherent fail-safe mechanism for lifting equipment.',
  },
];

export const SINGLE_ACTING_INDUSTRIES: CylinderIndustry[] = [
  {
    icon: <HardHat className="w-6 h-6" />,
    industryName: 'Material Handling',
    description: 'Used extensively in scissor lifts, goods elevators, and platform lifts where gravity handles the return stroke.',
    href: '/industries'
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    industryName: 'Heavy Forging & Presses',
    description: 'Ideal for hydraulic presses where massive unidirectional downward force is required to stamp or bend metal.',
    href: '/industries'
  },
  {
    icon: <Box className="w-6 h-6" />,
    industryName: 'Automotive & Parking',
    description: 'Reliable actuators for car parking systems and hydraulic jacks.',
    href: '/industries'
  },
];
