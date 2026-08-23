import React from 'react';
import { Zap, PowerOff, Minimize2, ArrowDownCircle, ShieldAlert, Cog, FileCheck, Box } from 'lucide-react';
import { FaCar, FaBuilding, FaTools, FaWarehouse } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const singlePhasePowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Single Phase Hydraulic Power Pack Manufacturer | 220V/240V AC Units',
    description: 'Leading single phase hydraulic power pack manufacturer. We engineer 220V/240V AC power units for commercial lifts, small presses, and light industrial automation.',
    url: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/single-phase-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Single Phase Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Electrical Input', value: '220V / 240V AC (Single Phase, 50Hz/60Hz)' },
      { name: 'Motor Power Ratings', value: '0.5 HP to 5.0 HP (0.37 kW to 3.7 kW)' },
      { name: 'Maximum Operating Pressure', value: 'Up to 250 Bar (3600 PSI)' },
      { name: 'Duty Cycle Limit', value: 'Intermittent (Typically S2-15 min or S3-20%)' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
    ],
    currentPage: 'Single Phase',
    subtitle: 'COMMERCIAL FLUID POWER',
    h1: 'Single Phase Hydraulic Power Pack Manufacturer',
    description: 'Accessible, reliable fluid power for commercial and light-industrial environments. Honeywell Hydraulics is a premier single phase hydraulic power pack manufacturer in Gujarat, engineering high-efficiency 220V/240V AC power units. Designed for facilities lacking industrial 3-phase grid infrastructure, these systems deliver robust hydraulic force for car lifts, scissor lifts, small balers, and intermittent-duty automation using standard commercial electrical supplies.',
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/single-phase-hydraulic-power-pack.webp',
      alt: 'Single Phase Hydraulic Power Pack manufactured by Honeywell Hydraulics for light industrial and commercial hydraulic applications',
    },
    keySpecs: [
      { label: 'Input Power', value: '220V/240V AC' },
      { label: 'Max Pressure', value: 'Up to 250 Bar' },
      { label: 'Motor Power', value: '0.5 HP to 5 HP' },
      { label: 'Duty Cycle', value: 'Intermittent' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'What Is A Single Phase Hydraulic Power Pack?',
    content: (
      <>
        <p>
          When high-pressure fluid power is required in a commercial garage, a retail loading dock, or a small fabrication shop, standard industrial 415V electrical grids are rarely available.
        </p>
        <p>
          A <strong className="text-honeywell-navy">Single Phase Hydraulic Power Pack</strong> is a self-contained fluid generation system designed specifically to operate on standard 220V/240V alternating current (AC). Unlike{' '}
          <a href="/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/" className="text-honeywell-red font-semibold hover:underline">
            3-phase industrial power packs
          </a>{' '}
          used in continuous heavy manufacturing, single-phase units are engineered for intermittent duty cycles in environments where only standard electrical wall power is accessible.
        </p>
        <p>
          As a specialized single phase hydraulic power unit supplier, we construct these systems around specialized AC motors featuring run and start capacitors. These components allow the motor to generate sufficient starting torque to rotate the hydraulic gear pump and force oil through the <a href="/products/manifold-blocks/" className="text-honeywell-navy underline hover:text-honeywell-red">manifold block</a> under load, utilizing only a single electrical phase.
        </p>
      </>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Features & Engineering Benefits',
    description: 'The primary engineering challenge of a single-phase hydraulic power unit is generating high hydraulic pressure from a limited electrical source without causing massive amperage spikes or stalling the motor.',
    showStepNumbers: false,
    items: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'High-Torque Start Capacitors',
        description: 'Ensures the pump can overcome heavy static loads (like a loaded car lift) without stalling or requiring a running start, providing a massive, instantaneous surge of electrical energy.',
      },
      {
        icon: <PowerOff className="w-6 h-6" />,
        title: 'Integrated Unloading Valves',
        description: 'Allows the electric motor to start under zero hydraulic load, drastically reducing the initial amperage spike on the electrical grid and preventing breaker trips.',
      },
      {
        icon: <Minimize2 className="w-6 h-6" />,
        title: 'Compact Vertical Mounting',
        description: 'Saves critical floor space in small commercial garages and tight loading docks. Often mounted directly onto 2-post car lifts or inside tight machine cabinets.',
      },
      {
        icon: <ArrowDownCircle className="w-6 h-6" />,
        title: 'Gravity-Down Valve Logic',
        description: 'Utilizes the weight of the load to retract the cylinder. The electric motor only runs during the lifting phase, effectively cutting energy use in half.',
      },
      {
        icon: <ShieldAlert className="w-6 h-6" />,
        title: 'Thermal Protection & Enclosures',
        description: 'Integrated thermal overload switches prevent motor burnout. NEMA / IP54 Enclosures protect sensitive capacitors from shop dust and mild splashing.',
      },
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Centrifugal Switching',
        description: 'Once the motor reaches 75% speed, a mechanical centrifugal switch disconnects the start capacitor and shifts the load to a run capacitor for continuous rotation.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications Framework',
    description: 'Designed for robust commercial fluid power without the need for 3-phase grid upgrades.',
    primaryCta: { label: 'DOWNLOAD CAD SPECS', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'VIEW 3-PHASE UNITS', href: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/' },
    tableTitle: 'Single Phase Capability Range',
    rows: [
      { parameter: 'Electrical Input', value: '220V / 240V AC (Single Phase, 50Hz/60Hz)' },
      { parameter: 'Motor Power Ratings', value: '0.5 HP to 5.0 HP (0.37 kW to 3.7 kW)' },
      { parameter: 'Pump Architecture', value: 'High-efficiency Aluminum Gear Pumps' },
      { parameter: 'Maximum Operating Pressure', value: 'Up to 250 Bar (3600 PSI)' },
      { parameter: 'Reservoir Capacity', value: '5 Liters to 40 Liters (Steel or High-Density Plastic)' },
      { parameter: 'Mounting Orientation', value: 'Vertical or Horizontal configurations' },
      { parameter: 'Duty Cycle Limit', value: 'Intermittent (Typically S2-15 min or S3-20%)' },
      { parameter: 'Filtration', value: '10 to 25 Micron return line suction strainers' },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Industries Served',
    description: 'Providing reliable, daily-use fluid power for environments lacking industrial infrastructure.',
    items: [
      {
        icon: <FaCar className="w-6 h-6" />,
        name: 'Automotive Service & Repair',
        description: 'Powering 2-post lifts, 4-post lifts, tire changers, and motorcycle lifts for independent mechanic garages.',
        href: '#',
      },
      {
        icon: <FaWarehouse className="w-6 h-6" />,
        name: 'Retail & Supermarkets',
        description: 'Powering the logistical backend of stores, from dock levelers to small balers and waste compactors.',
        href: '#',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Residential & Accessibility',
        description: 'Driving safe, quiet home elevators and ADA-compliant wheelchair accessibility lifts.',
        href: '#',
      },
      {
        icon: <FaTools className="w-6 h-6" />,
        name: 'Light Manufacturing',
        description: 'Serving small fabrication shops operating localized stamping or bearing-pressing machines without 3-phase grid access.',
        href: '#',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: Precision Single Phase Engineering',
    description: 'Building a reliable single-phase power pack requires mitigating the inherent electrical limitations of standard grid power. We do not reuse standard industrial manufacturing flows for these specialized commercial units.',
    steps: [
      {
        icon: <Box className="w-6 h-6" />,
        title: 'Compact Electrical Integration',
        description: 'Single-phase motors require bulky capacitors and centrifugal switches. We integrate these seamlessly into oversized, weather-sealed terminal boxes mounted directly on the motor housing, protecting sensitive electronics while keeping the footprint compact.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Control Panel Wiring & Starters',
        description: 'Single-phase motors draw massive inrush currents (LRA) upon startup. We assemble custom micro-control panels featuring heavy-duty contactors and thermal overload relays specifically calibrated to handle aggressive amperage spikes.',
      },
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Laser Motor Balancing',
        description: 'Because single-phase motors naturally produce more vibration, we laser-align the pump shaft to the motor armature and utilize specialized elastomeric couplings to absorb pulsating torque and prevent seal failure.',
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: 'Pressure & Thermal Validation',
        description: '100% of our units undergo a pressurized run-in test governed by our strict Quality control. We cycle the unit repeatedly to verify thermal limits, checking that the motor windings and pumps can handle extreme pressure spikes without overheating.',
      },
    ],
    midCta: {
      heading: 'Need OEM Volume Manufacturing for Your Equipment?',
      description: 'We supply fully tested, plug-and-play single phase units to manufacturers of car lifts and dock levelers.',
      primaryCta: { label: 'DISCUSS OEM CONTRACTS', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp OEM Team',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: How To Choose',
    description: 'When specifying a power unit, you must accurately match the electrical supply to the hydraulic demand to prevent catastrophic failures.',
    items: [
      {
        label: 'A',
        title: 'When to Choose a Single Phase Unit',
        description: 'Specify single phase when you only have access to standard 220V/240V wall power, the application is strictly intermittent (e.g., lifting a car up, holding it for an hour, lowering it), total hydraulic horsepower required is 5 HP or less, and space is limited.',
      },
      {
        label: 'B',
        title: 'When NOT to Choose Single Phase',
        description: 'Do not use single phase if you need to run the machine continuously for hours (e.g., plastic injection molding), you require massive flow rates exceeding 5 HP, or the application requires perfectly smooth, non-pulsating torque. In these cases, 3-Phase is mandatory.',
      },
      {
        label: 'C',
        title: 'Calculating Starting Torque & Breaker Sizing',
        description: 'Ensure your facility uses "motor-rated" slow-blow breakers. Single-phase hydraulic starts can draw up to 3x to 5x their running amperage for a fraction of a second to break the pump\'s inertia.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Single Phase vs. Three Phase Power Packs',
      description: 'Understand the critical differences to select the correct fluid power architecture for your facility.',
      columns: [{ heading: 'Single Phase (220V)' }, { heading: 'Three Phase (415V)' }],
      rows: [
        { feature: 'Duty Cycle', values: [{ text: 'Intermittent (Requires cooling periods)', highlight: true }, { text: 'Continuous (100% duty cycle capable)' }] },
        { feature: 'Maximum Horsepower', values: [{ text: 'Practically limited to 5 HP (3.7 kW)', highlight: true }, { text: 'Unlimited (Up to 200+ HP)' }] },
        { feature: 'Amperage Draw (FLA)', values: [{ text: 'High (Significant inrush current at startup)' }, { text: 'Low (Distributed across three legs)', highlight: true }] },
        { feature: 'Motor Complexity', values: [{ text: 'High (Requires start/run capacitors & switches)' }, { text: 'Low (Simple induction coils)', highlight: true }] },
        { feature: 'Torque Delivery', values: [{ text: 'Pulsating' }, { text: 'Smooth and constant', highlight: true }] },
        { feature: 'Typical Environment', values: [{ text: 'Commercial garages, retail docks, small shops', highlight: true }, { text: 'Automated factories, heavy industry, GIDCs' }] },
      ],
    }
  ],

  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other hydraulic power pack variants for industrial and mobile applications.',
    items: [
      {
        title: 'Three Phase Hydraulic Power Packs',
        description: 'Continuous duty cycle 415V industrial power units for heavy manufacturing and automated factories.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/three-phase-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs/',
        ctaText: 'View Details',
      },
      {
        title: 'Hydraulic Power Packs for Press',
        description: 'High-tonnage fluid power systems engineered for industrial presses, forging, and metal forming.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-for-press.webp',
        href: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press/',
        ctaText: 'View Details',
      },
      {
        title: 'Custom Hydraulic Power Packs',
        description: 'Bespoke turnkey fluid power systems engineered specifically for complex OEM machinery.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs/',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'Single Phase Power Packs',

  // ── FAQs ──
  faqs: [
    {
      question: 'Can I run a single phase hydraulic power pack continuously?',
      answer: 'No. Single-phase motors generate significant heat and do not have the thermal mass of 3-phase motors. They are rated for intermittent duty (e.g., S2 or S3 ratings). Running them continuously will cause the thermal overloads to trip or the internal windings to melt.',
    },
    {
      question: 'Why does my single phase power pack trip the circuit breaker when starting?',
      answer: 'Single-phase motors require massive inrush current (Locked Rotor Amps) to break inertia, especially if starting under hydraulic pressure. If your breaker trips, the wiring may be too thin, the breaker may not be a "motor-rated" slow-blow type, or you may need an unloading valve installed on the manifold.',
    },
    {
      question: 'What is the maximum pressure a single phase unit can generate?',
      answer: 'The pressure is determined by the pump size and the motor horsepower. A 2 HP single-phase unit can easily generate 3000 PSI (210 Bar), provided the pump displacement (CC/rev) is small enough. It simply pumps a smaller volume of oil at that pressure compared to a larger motor.',
    },
    {
      question: 'Are start capacitors replaceable?',
      answer: 'Yes. The start and run capacitors are the most common wear items on a single-phase power pack. They are housed in external pods on the motor and can be replaced in minutes by a qualified technician.',
    },
    {
      question: 'Can I use a single phase unit for a high-speed baling press?',
      answer: 'Only if the baler operates intermittently and requires less than 5 HP. If the baler requires rapid cycle times and runs constantly all day, a 3-phase system is required to prevent motor failure.',
    },
    {
      question: 'How do I lower the load if the power goes out?',
      answer: 'Our custom manifold blocks can be equipped with a manual override (knurled knob or pull-ring) on the directional solenoid valve, allowing you to safely lower the lift using gravity during a power failure.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Ready to Specify Your Single Phase System?',
    description: "Standardize your commercial equipment with ultra-reliable, plug-and-play 220V hydraulic power packs. Partner with Honeywell Hydraulics to eliminate motor stalls, capacitor failures, and leaky fittings.",
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Call Now',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
