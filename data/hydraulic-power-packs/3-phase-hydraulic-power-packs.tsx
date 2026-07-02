import React from 'react';
import {
  Activity,
  Thermometer,
  Zap,
  CheckCircle2,
  Settings,
  Cog,
  Droplets,
  Truck
} from 'lucide-react';

import type { FAQItem, PowerPackSpec, PowerPackFeature, PowerPackIndustry } from './types';

export const THREE_PHASE_FAQS: FAQItem[] = [
  {
    question: 'Can I run a 3-phase hydraulic power pack on a single-phase power supply?',
    answer: 'No. A 3-phase motor requires three alternating current legs (415V/440V). To run it on a single-phase grid (220V), you must install a Variable Frequency Drive (VFD) or a phase converter to artificially generate the third phase, though this is generally only recommended for smaller horsepower units.',
  },
  {
    question: 'Why does my current single-phase power pack overheat so quickly?',
    answer: 'Single-phase motors are generally designed for intermittent duty (e.g., running for 5 minutes to lift a car, then resting). They lack the smooth torque delivery of a 3-phase motor and draw massive amperage, generating extreme heat. For continuous automation, you must upgrade to a 3-phase system.',
  },
  {
    question: 'Do you custom-build the reservoirs for your industrial power packs?',
    answer: 'Yes. We do not rely on standard, flimsy plastic tanks. We laser-cut and weld robust steel reservoirs in-house, sizing them specifically to provide adequate heat dissipation and fluid de-aeration for your machine\'s exact duty cycle.',
  },
  {
    question: 'Can you integrate variable displacement pumps into your 3-phase power packs?',
    answer: 'Absolutely. For maximum energy efficiency, we frequently couple our IE3 3-phase motors with variable displacement piston or vane pumps. The pump automatically destrokes (stops pumping fluid) when the system reaches maximum pressure, drastically reducing the motor\'s electrical load.',
  },
];

export const THREE_PHASE_SPECS: PowerPackSpec[] = [
  { parameter: 'Electric Motor Inputs', value: '3-Phase AC (380V / 415V / 440V, 50Hz/60Hz)' },
  { parameter: 'Motor Efficiency Ratings', value: 'IE2, IE3 (Premium Efficiency), IE4 (Super Premium)' },
  { parameter: 'Horsepower Ratings', value: '1 HP to 200+ HP' },
  { parameter: 'Pump Architecture', value: 'Gear Pumps, Vane Pumps, Axial Piston Pumps (Fixed or Variable)' },
  { parameter: 'Maximum Operating Pressure', value: 'Up to 350 Bar (5000+ PSI)' },
  { parameter: 'Reservoir Capacity', value: '20 Liters to 5000+ Liters (Custom Steel or Stainless Steel)' },
  { parameter: 'Cooling Integration', value: 'Integrated Air-Cooled or Water-Cooled heat exchangers' },
  { parameter: 'Control Logic', value: 'Custom CNC Manifold Blocks integrated directly onto power unit' },
];

export const THREE_PHASE_FEATURES: PowerPackFeature[] = [
  {
    icon: <Activity className="w-6 h-6" />,
    title: 'A. Stable Power Delivery',
    description: 'A 3-phase electrical supply provides three alternating currents that peak at sequential times. This means power delivery to the hydraulic pump is constant and smooth, unlike single-phase motors which experience "dead spots" in torque. This smooth torque prevents hydraulic pulsation and ensures stable pressure output to your machine.',
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: 'B. Continuous Operation & Thermal Stability',
    description: 'Because 3-phase motors run much cooler than equivalent single-phase motors, they are capable of a 100% duty cycle. A 3-phase hydraulic power pack can run 24 hours a day, 365 days a year without the motor burning out, making them mandatory for continuous-process industries.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'C. Superior Motor Efficiency',
    description: '3-phase motors do not require failure-prone start capacitors or run capacitors. They draw significantly lower amperage per phase compared to single-phase motors of the same horsepower, resulting in massive long-term reductions in the factory\'s electricity consumption.',
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: 'D. Lower Operating Cost',
    description: 'The initial capital investment in a 3-phase motor is often lower than a massive single-phase motor, and the electrical infrastructure required (smaller wire gauges, smaller breakers) is much cheaper to install. Combined with the energy savings, the Total Cost of Ownership (TCO) is incredibly low.',
  },
];

export const THREE_PHASE_INDUSTRIES: PowerPackIndustry[] = [
  {
    icon: <Settings className="w-6 h-6" />,
    industryName: 'Manufacturing & Heavy Fabrication',
    description: 'Supplying continuous, high-volume flow for heavy steel processing, shearing, and metal bending machinery.',
    href: '#'
  },
  {
    icon: <Cog className="w-6 h-6" />,
    industryName: 'Industrial Automation',
    description: 'Designing highly compact, vibration-free 3-phase units for automated robotic clamping and CNC loading cells.',
    href: '#'
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    industryName: 'Process Industries',
    description: 'Delivering robust, thermally stable power units for continuous chemical mixing and plastic extrusion environments.',
    href: '#'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    industryName: 'Material Handling',
    description: 'Providing fail-safe AC power packs for massive factory gantry cranes and continuous conveyor routing systems.',
    href: '#'
  },
];
