import React from 'react';
import { Zap, Activity, Waves, Cog, FileCheck, Box, ThermometerSnowflake, RefreshCw, CheckCircle2 } from 'lucide-react';
import { FaIndustry, FaCogs, FaBuilding, FaShip } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const threePhasePowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Three Phase Hydraulic Power Pack Manufacturer | 415V',
    description: 'Leading Three Phase Hydraulic Power Pack Manufacturer in India. We engineer heavy-duty 415V AC industrial hydraulic power units for continuous-duty manufacturing and high-flow machinery.',
    url: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/three-phase-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Three Phase Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Electrical Input', value: '415V / 440V AC (Three Phase, 50Hz/60Hz)' },
      { name: 'Motor Power Ratings', value: '5.0 HP to 200.0+ HP (3.7 kW to 150+ kW)' },
      { name: 'Maximum Operating Pressure', value: 'Up to 350 Bar (5000+ PSI)' },
      { name: 'Duty Cycle Limit', value: 'S1 Continuous (100% Duty Cycle)' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs' },
    ],
    currentPage: 'Three Phase',
    subtitle: 'INDUSTRIAL CONTINUOUS FLUID POWER',
    h1: 'Three Phase Hydraulic Power Pack Manufacturer',
    description: 'Unrelenting hydraulic force for continuous production environments. As a premier Three Phase Hydraulic Power Pack Manufacturer in India, Honeywell Hydraulics engineers heavy-duty 415V/440V industrial hydraulic power units designed for 100% duty cycles. When large-scale automated machinery, massive forging presses, and high-flow manufacturing systems demand flawless reliability, our three-phase systems deliver smooth, high-efficiency, non-pulsating torque 24/7.',
    primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/#quote-form' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/three-phase-hydraulic-power-pack.webp',
      alt: 'Three Phase Hydraulic Power Pack manufactured by Honeywell Hydraulics for heavy duty industrial hydraulic systems and continuous production machinery.',
    },
    keySpecs: [
      { label: 'Input Power', value: '415V/440V AC' },
      { label: 'Max Pressure', value: 'Up to 350 Bar' },
      { label: 'Motor Power', value: '5 HP to 200+ HP' },
      { label: 'Duty Cycle', value: 'S1 Continuous' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'What Is A Three Phase Hydraulic Power Pack?',
    content: (
      <>
        <p>
          A <strong className="text-honeywell-navy">Three Phase Hydraulic Power Pack</strong> (also referred to as an AC Hydraulic Power Pack or heavy-duty industrial hydraulic power unit) is a centralized fluid generation system engineered to operate exclusively on a robust 415V or 440V three-phase electrical grid.
        </p>
        <p>
          Unlike{' '}
          <a href="/products/hydraulic-power-packs/single-phase-hydraulic-power-packs" className="text-honeywell-red font-semibold hover:underline">
            Single Phase Hydraulic Power Packs
          </a>{' '}
          which are limited to intermittent duty and low horsepower, a three-phase system distributes its electrical load across three alternating currents. This architecture allows the electric motor to run continuously (100% duty cycle) without overheating, driving massive hydraulic pumps to generate immense flow rates (LPM) and extreme pressures simultaneously.
        </p>
        <p>
          As a tier-one hydraulic power unit supplier, we engineer these systems as the heart of heavy industrial machinery. They provide the unrelenting mechanical power required to actuate massive <a href="/products/hydraulic-cylinders" className="text-honeywell-navy underline hover:text-honeywell-red">hydraulic cylinders</a> in steel mills, injection molding plants, and automated assembly lines.
        </p>
      </>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Features & Engineering Advantages',
    description: 'The primary advantage of a three-phase system lies in its electrical efficiency and smooth mechanical power delivery for unrelenting 24/7 industrial manufacturing.',
    showStepNumbers: false,
    items: [
      {
        icon: <Activity className="w-6 h-6" />,
        title: '100% Continuous Duty Cycle',
        description: 'Operates 24 hours a day, 7 days a week, 365 days a year without motor burnout or thermal failure typical of smaller units.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Unlimited Horsepower Capacity',
        description: 'While single-phase tops out around 5 HP, our three-phase units scale from 5 HP up to 200+ HP for extreme heavy-industry applications.',
      },
      {
        icon: <Waves className="w-6 h-6" />,
        title: 'Non-Pulsating Torque Delivery',
        description: 'Because three-phase power supplies alternating currents that overlap perfectly, the electric motor never experiences a drop in voltage. This delivers completely smooth torque directly to the hydraulic pump.',
      },
      {
        icon: <RefreshCw className="w-6 h-6" />,
        title: 'VFD Compatibility',
        description: 'Fully compatible with Variable Frequency Drives (VFDs) for advanced energy-saving pump speed modulation, drastically reducing energy consumption during idle phases.',
      },
      {
        icon: <ThermometerSnowflake className="w-6 h-6" />,
        title: 'Continuous Thermal Dissipation',
        description: 'Integrates massive steel reservoirs, high-capacity shell-and-tube water coolers, or ambient air-blast oil coolers to maintain the hydraulic fluid below critical degradation temperatures.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Zero Capacitors Required',
        description: 'Three-phase induction motors are inherently self-starting. They require no bulky, failure-prone start or run capacitors, making them infinitely more reliable.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Technical Specifications Framework',
    description: 'As an expert heavy duty hydraulic power pack manufacturer, we customize every parameter to your industrial machinery\'s precise demands.',
    primaryCta: { label: 'DOWNLOAD CAD SPECS', href: '/resources/downloads' },
    secondaryCta: { label: 'VIEW CUSTOM UNITS', href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs' },
    tableTitle: 'Three Phase Industrial Capability Range',
    rows: [
      { parameter: 'Electrical Input', value: '415V / 440V AC (Three Phase, 50Hz/60Hz)' },
      { parameter: 'Motor Power Ratings', value: '5.0 HP to 200.0+ HP (3.7 kW to 150+ kW)' },
      { parameter: 'Maximum Operating Pressure', value: 'Up to 350 Bar (5000+ PSI) / Ultra-high options available' },
      { parameter: 'Pump Architecture', value: 'Gear, Vane, Axial Piston, or Tandem Multistage Pumps' },
      { parameter: 'Reservoir Capacity', value: '40 Liters to 2000+ Liters (Heavy-gauge welded steel)' },
      { parameter: 'Thermal Management', value: 'Integrated Shell/Tube Heat Exchangers or Air Blast Coolers' },
      { parameter: 'Duty Cycle Limit', value: 'S1 Continuous (100% Duty Cycle capable)' },
      { parameter: 'Valve Interface', value: 'CETOP 3, 5, 7, 8 or massive integrated proportional logic' },
    ],
  },

  // ── Industries ──
  industries: {
    heading: 'Industries Served',
    description: 'Our 415V hydraulic power packs provide the critical driving force for India\'s heavy manufacturing infrastructure.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Steel & Metallurgy',
        description: 'Powering ladle tilters, continuous casters, and heavy forging presses in extreme high-temperature environments.',
        href: '/industries',
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Automotive Manufacturing',
        description: 'Operating the massive stamping presses that form car chassis components and continuous factory conveyor systems.',
        href: '/industries',
      },
      {
        icon: <FaBuilding className="w-6 h-6" />,
        name: 'Infrastructure & Civil',
        description: 'Driving radial spillway gates on hydroelectric dams and operating heavy tunnel boring machinery.',
        href: '/industries',
      },
      {
        icon: <FaShip className="w-6 h-6" />,
        name: 'Marine & Offshore',
        description: 'Powering heavy-duty marine winches, offshore drilling rigs, and massive scrap baling facilities.',
        href: '/industries',
      },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: Heavy-Duty Industrial Engineering',
    description: 'Building an industrial-grade three-phase power pack requires entirely different engineering paradigms compared to commercial units. At our specialized manufacturing facility, we focus on rugged longevity, vibration elimination, and massive fluid management.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Heavy-Duty Pump Coupling',
        description: 'At 50+ horsepower, the rotational torque transferred is immense. We utilize heavy-cast bell housings and specialized jaw-type elastomeric couplings (e.g., Lovejoy or Rotex), laser-aligned to absorb shock-loads and protect both motor and pump from catastrophic shearing.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Industrial Control Panel Assembly',
        description: 'We build bespoke electrical panels featuring Star-Delta starters to prevent grid-crashing inrush currents on massive motors. We also integrate PLC compatibility, phase reversal relays, and VFDs for ultimate energy efficiency.',
      },
      {
        icon: <Box className="w-6 h-6" />,
        title: 'Massive Fluid Reservoir Construction',
        description: 'For continuous duty, heat is the enemy. We weld massive reservoirs from thick-gauge carbon steel featuring internal baffle plates. These baffles force hot return oil to travel a long circuitous route, shedding heat and air bubbles before returning to the pump.',
      },
      {
        icon: <FileCheck className="w-6 h-6" />,
        title: 'FAT & Continuous-Duty Load Testing',
        description: 'During our Factory Acceptance Test (FAT), we run the power pack against a restricted load for hours at a time. This thermal-saturation test verifies that the integrated oil coolers can successfully maintain fluid below 60°C under maximum continuous horsepower.',
      },
    ],
    midCta: {
      heading: 'Need Bespoke Logic for an Automated Production Line?',
      description: 'We supply fully tested, multi-pump 415V systems with proportional valve logic specifically for automated OEM machinery.',
      primaryCta: { label: 'DISCUSS OEM CONTRACTS', href: '/request-quote/#quote-form' },
      whatsappLabel: 'WhatsApp Engineering Team',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: How To Choose',
    description: 'Specifying a large-scale industrial hydraulic power unit requires precise calculations to prevent energy waste and overheating.',
    items: [
      {
        label: 'A',
        title: 'Power & Flow Requirements',
        description: 'Unlike intermittent systems, continuous systems cannot "cheat" by using an accumulator for primary flow. Your pump must generate the exact Liters Per Minute (LPM) required by your actuators at maximum speed. Calculate horsepower: HP = (LPM × Pressure in Bar) ÷ 440.',
      },
      {
        label: 'B',
        title: 'Continuous vs. Intermittent Flow',
        description: 'If your machine requires high flow for rapid approach but low flow for pressing, specify a High-Low Tandem Pump or a Variable Displacement Piston Pump. Using a massive fixed-displacement gear pump for this scenario will dump hundreds of liters of pressurized oil over the relief valve continuously, boiling the oil and wasting electricity.',
      },
      {
        label: 'C',
        title: 'Heat Generation & Cooling',
        description: 'In a 100% duty cycle environment, approximately 20% of your input electrical energy is converted directly into heat due to fluid friction. You MUST plan for a cooling system. If you have chilled plant water available, specify a shell-and-tube heat exchanger. If not, specify an ambient air-blast cooler.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Three Phase vs. Single Phase Power Packs',
      description: 'Understand the critical differences to select the correct fluid power architecture for your facility.',
      columns: [{ heading: 'Three Phase (415V)' }, { heading: 'Single Phase (220V)' }],
      rows: [
        { feature: 'Primary Use Case', values: [{ text: 'Continuous automated industrial manufacturing', highlight: true }, { text: 'Intermittent commercial lifting & light shop use' }] },
        { feature: 'Motor Starting Mechanism', values: [{ text: 'Inherent rotational field (No capacitors needed)', highlight: true }, { text: 'Requires high-failure start/run capacitors' }] },
        { feature: 'Maximum Power', values: [{ text: 'Unlimited (Up to 200+ HP)', highlight: true }, { text: 'Practically limited to 5 HP (3.7 kW)' }] },
        { feature: 'Torque Delivery', values: [{ text: 'Extremely smooth, non-pulsating rotation', highlight: true }, { text: 'Pulsating, vibration-heavy rotation' }] },
        { feature: 'Energy Efficiency', values: [{ text: 'Extremely high (especially with VFD integration)', highlight: true }, { text: 'Lower' }] },
        { feature: 'Cooling Requirements', values: [{ text: 'Requires large reservoirs & active oil coolers' }, { text: 'Air-cooled via intermittent resting periods' }] },
        { feature: 'Installation', values: [{ text: 'Requires dedicated industrial 415V grid wiring' }, { text: 'Plugs into standard commercial 220V wall grids', highlight: true }] },
      ],
    }
  ],
  
  // ── Preventive Maintenance & Troubleshooting ──
  // Reusing the engineering section styling for Maintenance & Troubleshooting to keep it compatible with existing components.
  // We'll append this to the engineering guide array since there is no native 'maintenance' component in the schema. Wait! ProductPage component only has:
  // hero, overview, keyFeatures, technicalSpecs, spotlights(opt), manufacturing(opt), engineering(opt), comparisons(opt), industries(opt), relatedProducts(opt), faqs(opt).
  // The best way to include Troubleshooting & Maintenance is to add it as FAQs or as an extra Engineering section. Let's combine them into FAQs for SEO and structure.

  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other fluid power units and complementary components for heavy industry.',
    items: [
      {
        title: 'Single Phase Hydraulic Power Packs',
        description: '220V intermittent duty cycle power units for commercial garages and light industrial shops.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/single-phase-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Custom Hydraulic Power Packs',
        description: 'Bespoke turnkey fluid power systems engineered specifically for complex OEM machinery.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/custom-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'High-Low Hydraulic Power Packs',
        description: 'Dual-stage pumping units with automatic unloading valves for high-speed press cycles and low energy consumption.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/high-low-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'Three Phase Power Packs',

  // ── FAQs & Troubleshooting ──
  faqs: [
    {
      question: 'Why should I choose a three-phase power pack over a single-phase unit?',
      answer: 'If your machine runs continuously, requires more than 5 HP, or demands perfectly smooth hydraulic flow without voltage spikes, a three-phase unit is mandatory. Single-phase motors will overheat and burn out under industrial continuous-duty cycles.',
    },
    {
      question: 'Can you integrate a VFD (Variable Frequency Drive) into the power pack?',
      answer: 'Yes. For modern energy-efficient factories, we heavily recommend VFD integration. A VFD slows the three-phase electric motor down during idle periods of your machine cycle, drastically cutting electricity costs and reducing fluid heating, while instantly ramping up RPM when flow is required.',
    },
    {
      question: 'How large should the oil reservoir be for a three-phase system?',
      answer: 'As a rule of thumb for continuous duty, the reservoir volume should be at least 3 to 5 times the pump\'s Liters Per Minute (LPM) output. This dwell time allows the oil to shed heat and release trapped air bubbles before being sucked back into the pump.',
    },
    {
      question: 'What is the required preventive maintenance schedule?',
      answer: 'Daily: Check fluid levels and ensure temperature stays below 60°C. Monthly: Inspect elastomeric pump couplings for spider-gear wear and clean air-blast cooler fins. Biannually: Replace the 10-micron return line filter elements. Annually: Drain reservoir, clean magnetic strainers and internal baffles, and replace the ISO VG 46/68 oil.',
    },
    {
      question: 'Troubleshooting: Why is the hydraulic system overheating?',
      answer: 'Overheating is typically caused by three things: 1. Cooling Failure (clogged air cooler or stopped water flow in heat exchanger). 2. Relief Valve Dumping (valve set too low, causing continuous fluid bypass). 3. Internal Cylinder Leakage (destroyed piston seals allowing fluid to bypass internally at high velocity).',
    },
    {
      question: 'Do you manufacture custom power packs for specific machinery?',
      answer: 'Yes. While we offer standard three-phase layouts, our primary expertise is acting as a Customized Hydraulic Power Pack manufacturer, building bespoke multi-pump systems with integrated proportional valve logic for specific OEM machinery.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Ready to Specify Your Heavy Duty System?',
    description: "Do not risk your continuous production line on underspecified power units. Partner with Honeywell Hydraulics to engineer a heavy-duty, thermally stable, three-phase system that powers your factory flawlessly.",
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/#quote-form',
    secondaryCtaText: 'Call Engineering',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
