import React from 'react';
import {
  Activity,
  Hammer,
  Cog,
  Settings,
  Box
} from 'lucide-react';

import type { FAQ, PowerPackSpec, PowerPackFeature, PowerPackIndustry } from './types';

export const HIGH_LOW_FAQS: FAQ[] = [
  {
    question: 'Can I upgrade my existing press machine to a High-Low power pack?',
    answer: 'Yes. This is one of our most popular services. We will remove your inefficient single-pump system and replace it with a dual-pump unit, drastically reducing your factory\'s electrical consumption.',
  },
  {
    question: 'Why does a single-pump system overheat a press machine?',
    answer: 'In a single-pump system, the pump must be large enough to provide high speed, and capable of high pressure. When the press crushes the metal, that massive volume of fluid has nowhere to go, so it violently bypasses over a relief valve at high pressure, instantly converting electrical horsepower into severe heat. High-Low systems prevent this by unloading the volume before the pressure spikes.',
  },
  {
    question: 'Are High-Low power packs more expensive?',
    answer: 'The upfront capital cost is slightly higher because it requires two pumps and a specialized manifold block. However, the ROI is usually achieved within 6 to 8 months solely through massive reductions in your monthly electricity bill.',
  },
  {
    question: 'Do you manufacture the custom manifold blocks for the unloading logic in-house?',
    answer: 'Absolutely. We CNC-machine all of our logic manifolds from solid aluminum or steel blocks in our Gujarat facility, ensuring absolute control over the sequencing valve tolerances.',
  },
];

export const HIGH_LOW_SPECS: PowerPackSpec[] = [
  { parameter: 'Pump Architecture', value: 'Tandem (Gear Pump + Radial/Axial Piston Pump)' },
  { parameter: 'High Flow Stage (Low Pressure)', value: 'Up to 300+ LPM @ 30 to 70 Bar' },
  { parameter: 'Low Flow Stage (High Pressure)', value: 'Up to 50 LPM @ 350 to 500 Bar' },
  { parameter: 'Electric Motor Ratings', value: '3 HP to 150+ HP (3-Phase AC)' },
  { parameter: 'Reservoir Capacity', value: '50 Liters to 2000+ Liters (Custom Fabricated)' },
  { parameter: 'Logic Control', value: 'Pilot-operated unloading valves, solenoid override available' },
  { parameter: 'Cooling Integration', value: 'Air-cooled, Water-cooled, or standalone offline cooling circuits' },
];

export const HIGH_LOW_FEATURES: PowerPackFeature[] = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'A. High Flow Stage (Rapid Approach)',
    description: 'When the operator triggers the press to close, the cylinder needs to travel a long distance very quickly. During this "approach phase," the required pressure is very low, but the required fluid volume is massive. Both the large high-flow pump and the small high-pressure pump send fluid to the cylinder simultaneously, moving the ram downward at maximum speed.',
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: 'B. Low Flow Stage (The Press Cycle)',
    description: 'The moment the press ram contacts the metal workpiece, resistance spikes. The fluid pressure inside the system immediately rises, triggering the transition to the crushing phase of the cycle.',
  },
  {
    icon: <Cog className="w-6 h-6" />,
    title: 'C. Unloading Valve Logic',
    description: 'When pressure reaches a set-point, the Unloading Valve automatically triggers. It "unloads" the large high-flow pump, dumping its volume back to the tank at near-zero pressure. Now, only the small high-pressure pump is driving the cylinder, generating 350+ Bar to crush the metal using minimal electrical horsepower.',
  },
];

export const HIGH_LOW_INDUSTRIES: PowerPackIndustry[] = [
  {
    icon: <Hammer className="w-6 h-6" />,
    industryName: 'Heavy Forging',
    description: 'Providing extreme high-pressure/low-flow logic to generate the massive tonnages required to shape red-hot steel.',
    href: '#'
  },
  {
    icon: <Settings className="w-6 h-6" />,
    industryName: 'Sheet Metal & Stamping',
    description: 'Supplying rapid-approach power packs to decrease machine cycle times and dramatically increase parts-per-hour output.',
    href: '#'
  },
  {
    icon: <Box className="w-6 h-6" />,
    industryName: 'Steel Industry',
    description: 'Delivering robust, continuous-duty power units for heavy-duty metal shearing and bending operations.',
    href: '#'
  },
  {
    icon: <Cog className="w-6 h-6" />,
    industryName: 'Industrial Automation',
    description: 'Designing highly compact, energy-efficient power units for automated robotic clamping and pressing cells.',
    href: '#'
  },
];
