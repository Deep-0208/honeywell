import React from 'react';
import { FaIndustry, FaTractor, FaCogs, FaTruck, FaHammer, FaShieldAlt, FaTools, FaBolt } from 'react-icons/fa';



export const PILLAR_FEATURES = [
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

export const PILLAR_BLOCK_TYPES = [
  {
    title: "Single Phase Hydraulic Power Packs",
    description: "Compact 220V power units designed for seamless integration into residential workshops and small commercial facilities.",
    href: "/products/hydraulic-power-packs/single-phase-hydraulic-power-packs",
    image: "/images/products/hydraulic-power-packs/single-phase-hydraulic-power-pack.webp"
  },
  {
    title: "Three Phase Hydraulic Power Packs",
    description: "Heavy-duty 415V industrial power units engineered for continuous 24/7 factory automation and extreme-duty cycles.",
    href: "/products/hydraulic-power-packs/three-phase-hydraulic-power-packs",
    image: "/images/products/hydraulic-power-packs/three-phase-hydraulic-power-pack.webp"
  },
  {
    title: "Hydraulic Power Packs for Press",
    description: "Massive high-tonnage fluid power systems built to drive industrial stamping, forging, and deep drawing machines.",
    href: "/products/hydraulic-power-packs/hydraulic-power-packs-for-press",
    image: "/images/products/hydraulic-power-packs/hydraulic-power-pack-for-press.webp"
  },
  {
    title: "High-Low Hydraulic Power Packs",
    description: "Advanced dual-pump circuits featuring automatic unloading valves to drastically cut cycle times and energy waste.",
    href: "/products/hydraulic-power-packs/high-low-hydraulic-power-packs",
    image: "/images/products/hydraulic-power-packs/high-low-hydraulic-power-pack.webp"
  },
  {
    title: "Accumulator Hydraulic Power Packs",
    description: "Nitrogen-charged systems that store hydrostatic energy to assist during extreme peak flow demands without motor stall.",
    href: "/products/hydraulic-power-packs/accumulator-hydraulic-power-packs",
    image: "/images/products/hydraulic-power-packs/accumulator-hydraulic-power-pack.webp"
  },
  {
    title: "Multistation Hydraulic Power Packs",
    description: "Centralized power units engineered to independently drive multiple hydraulic circuits from a single massive reservoir.",
    href: "/products/hydraulic-power-packs/multistation-hydraulic-power-packs",
    image: "/images/products/hydraulic-power-packs/multistation-hydraulic-power-pack.webp"
  },
  {
    title: "Customized Hydraulic Power Packs",
    description: "Turnkey bespoke fluid power solutions tailored to exact dimensional, thermal, and PLC-controlled parameters.",
    href: "/products/hydraulic-power-packs/customized-hydraulic-power-packs",
    image: "/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp"
  },
  {
    title: "Hand Pump Hydraulic Power Packs",
    description: "Purely mechanical manual fluid power generation for emergency overrides, field service, and extreme environments.",
    href: "/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs",
    image: "/images/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-pack.webp"
  },
  {
    title: "Hand Lever Hydraulic Power Packs",
    description: "Motorized power units integrated with manual directional spool valves for precise operator-controlled lifting.",
    href: "/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs",
    image: "/images/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-pack.webp"
  }
];

export const PILLAR_INDUSTRIES = [
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

export const PILLAR_SPECS = [
  { parameter: "Electric Motor Power", value: "0.5 HP to 150+ HP (IE2 / IE3 High Efficiency)" },
  { parameter: "Pump Flow Rate (Displacement)", value: "1 LPM to 300+ LPM" },
  { parameter: "Operating Pressure", value: "Standard: 160 Bar / 210 Bar. Heavy-Duty: Up to 350+ Bar" },
  { parameter: "Reservoir Capacity", value: "10 Liters to 2000+ Liters (Custom fabrication available)" },
  { parameter: "Pump Types", value: "Gear, Vane, Radial Piston, Axial Piston" },
  { parameter: "Valve Architecture", value: "CETOP 3 (NG6), CETOP 5 (NG10), Proportional, Cartridge Logic" },
  { parameter: "Cooling Options", value: "Air-Blast Oil Coolers, Shell & Tube Heat Exchangers" }
];

export const PILLAR_FAQS = [
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
