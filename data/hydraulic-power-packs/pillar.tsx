import React from 'react';
import { FaIndustry, FaTractor, FaCogs, FaTruck, FaHammer, FaShieldAlt, FaTools, FaBolt } from 'react-icons/fa';

import { PowerPackType, PowerPackIndustry, PowerPackSpec, FAQItem, PowerPackFeature } from './types';

export const PILLAR_FEATURES: PowerPackFeature[] = [
  {
    icon: <FaTools className="w-5 h-5" />,
    title: 'Custom Design',
    description: 'Engineered using advanced CAD software for exact fluid dynamic calculation, heat load analysis, and 3D spatial integration perfectly matched to your machine cycle.',
  },
  {
    icon: <FaCogs className="w-5 h-5" />,
    title: 'Engineering Expertise',
    description: 'All custom valve blocks and manifolds are CNC-machined in-house to ensure absolute zero-leak internal galleries and precise control logic.',
  },
  {
    icon: <FaShieldAlt className="w-5 h-5" />,
    title: 'Rigorous Testing',
    description: 'Every power pack is run on our test bench under simulated maximum load to verify flow rates, pressure relief settings, and thermal stability.',
  },
  {
    icon: <FaBolt className="w-5 h-5" />,
    title: 'Proven Reliability',
    description: 'Engineered with integrated thermal management to prevent fluid overheating. Our power units are built for continuous 24/7 manufacturing without thermal degradation.',
  }
];

export const PILLAR_BLOCK_TYPES: PowerPackType[] = [
  {
    title: "3 Phase Industrial Power Packs",
    description: "Heavy-duty power units with high-efficiency 3-phase motors and large reservoir capacities for 24/7 continuous factory operation.",
    href: "/products/hydraulic-power-packs/3-phase-hydraulic-power-packs/",
    image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-3-phase.webp"
  },
  {
    title: "High-Low Power Packs",
    description: "Dual-pump systems engineered for press machines, utilizing a high-volume/low-pressure and low-volume/high-pressure circuit for massive energy savings.",
    href: "/products/hydraulic-power-packs/high-low-hydraulic-power-packs/",
    image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-single-phase.webp"
  },
  {
    title: "Compact & Micro Power Packs",
    description: "Miniature AC and DC power units providing significant force in a compact vertical footprint, ideal for CNC clamping and small scissor lifts.",
    href: "/products/hydraulic-power-packs/dc-mini-power-packs/",
    image: "/images/products/hydraulic-power-packs/hand-lever-operated-power-pack.webp"
  },
  {
    title: "Mobile & DC Power Packs",
    description: "12V and 24V DC motor-driven power packs engineered to withstand severe vibration and shock loads for vehicular and material handling integration.",
    image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-with-multiple-solenoid-valve.webp"
  },
  {
    title: "Custom Turnkey Power Packs",
    description: "Bespoke fluid power generation built from the ground up for Special Purpose Machines (SPMs) with full PLC integration and custom manifold logic.",
    image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-with-accumulator.webp"
  }
];

export const PILLAR_INDUSTRIES: PowerPackIndustry[] = [
  {
    industryName: "Injection Moulding",
    description: "High-flow hydraulic power packs delivering sustained pressure for rapid mould clamping and injection cycles without overheating.",
    href: "#",
    icon: <FaIndustry className="w-6 h-6" />
  },
  {
    industryName: "Construction & Earthmoving",
    description: "Compact, high-torque hydraulic power units designed to drive heavy earthmoving attachments and mobile construction equipment.",
    href: "#",
    icon: <FaTractor className="w-6 h-6" />
  },
  {
    industryName: "Manufacturing & Industrial Automation",
    description: "Energy-efficient hydraulic power units with proportional control valves for synchronized, automated manufacturing lines.",
    href: "#",
    icon: <FaCogs className="w-6 h-6" />
  },
  {
    industryName: "Material Handling",
    description: "Reliable AC/DC hydraulic power packs providing smooth, judder-free lifting force for dock levelers and warehouse lifts.",
    href: "#",
    icon: <FaTruck className="w-6 h-6" />
  },
  {
    industryName: "Rolling Mill",
    description: "Heavy-duty, continuous-duty hydraulic power systems engineered for the extreme pressures and high temperatures of steel mills.",
    href: "#",
    icon: <FaHammer className="w-6 h-6" />
  },
  {
    industryName: "Wooden Industries",
    description: "High-capacity hydraulic power packs designed to drive multi-cylinder plywood presses and continuous timber processing machinery.",
    href: "#",
    icon: <FaIndustry className="w-6 h-6" />
  }
];

export const PILLAR_SPECS: PowerPackSpec[] = [
  { parameter: "Electric Motor Power", value: "0.5 HP to 150+ HP (IE2 / IE3 High Efficiency)" },
  { parameter: "Pump Flow Rate (Displacement)", value: "1 LPM to 300+ LPM" },
  { parameter: "Operating Pressure", value: "Standard: 160 Bar / 210 Bar. Heavy-Duty: Up to 350+ Bar" },
  { parameter: "Reservoir Capacity", value: "10 Liters to 2000+ Liters (Custom fabrication available)" },
  { parameter: "Pump Types", value: "Gear, Vane, Radial Piston, Axial Piston" },
  { parameter: "Valve Architecture", value: "CETOP 3 (NG6), CETOP 5 (NG10), Proportional, Cartridge Logic" },
  { parameter: "Cooling Options", value: "Air-Blast Oil Coolers, Shell & Tube Heat Exchangers" }
];

export const PILLAR_FAQS: FAQItem[] = [
  {
    question: "Do you manufacture custom hydraulic power packs for specific machines?",
    answer: "Yes. While we offer standard industrial units, our primary expertise is custom engineering. We design the reservoir dimensions, motor horsepower, pump displacement, and valve logic specifically to match your machine's unique cycle profile."
  },
  {
    question: "Are you a trading company or a hydraulic power pack manufacturer?",
    answer: "We are a direct hydraulic power pack company and manufacturer. Every power pack is engineered, fabricated, piped, wired, and load-tested at our manufacturing facility in Ahmedabad, Gujarat."
  },
  {
    question: "What is the delivery time for an industrial power pack?",
    answer: "Standard 3-phase hydraulic power packs are typically assembled, tested, and dispatched within 10 to 15 days. Highly complex, custom high-low circuits or massive reservoir systems may require 20 to 30 days depending on the engineering scope."
  },
  {
    question: "Can you repair my existing hydraulic power pack?",
    answer: "Yes. Our Hydraulic System Retrofitting division specializes in overhauling, upgrading, and repairing aging power units, replacing failed pumps and redesigning inefficient valve manifolds."
  },
  {
    question: "Do you supply power packs outside of Gujarat?",
    answer: "Yes. We are a recognized hydraulic power pack exporter and PAN-India supplier. We securely crate and ship our power units to OEMs and manufacturing plants across Maharashtra, Rajasthan, South India, and international markets."
  }
];
