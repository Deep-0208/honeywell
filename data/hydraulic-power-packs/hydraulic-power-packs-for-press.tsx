import React from 'react';
import {
  Settings,
  ShieldCheck,
  Zap,
  Activity,
  Wrench,
  PenTool,
  ThermometerSnowflake,
  ClipboardList,
  CheckCircle2,
  Lock,
  ArrowRight
} from 'lucide-react';
import { FaIndustry, FaCogs, FaTools, FaCheckDouble } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const pressPowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Hydraulic Power Pack for Press Manufacturer | High Pressure',
    description: 'Leading Hydraulic Power Pack Manufacturer in India for press machines. We engineer high-pressure power units for deep drawing, metal stamping, and forging presses.',
    url: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press',
    image: '/images/products/hydraulic-power-packs/hydraulic-power-pack-for-press.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Hydraulic Power Packs for Press',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Operating Pressure', value: '200 to 350+ Bar' },
      { name: 'Duty Cycle', value: 'Violent Cyclic (High Shock Loads)' },
      { name: 'Holding Integrity', value: 'Pilot-Operated Zero Leakage' },
      { name: 'Cooling Requirement', value: 'Mandatory Active Heat Exchangers' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs' },
    ],
    currentPage: 'Press Units',
    subtitle: 'HIGH-PRESSURE PRESS POWER UNITS',
    h1: 'Hydraulic Power Pack for Press Manufacturer',
    description: 'Extreme force generation for industrial forming. As India\'s premier Hydraulic Power Pack Manufacturer for press applications, Honeywell Hydraulics engineers heavy-duty power units designed exclusively for metal stamping, deep drawing, compression molding, and forging presses. We deliver uncompromising pressure stability, ultra-fast cycle times, and robust heat dissipation for cyclic production environments.',
    primaryCta: { label: 'REQUEST PRESS QUOTE', href: '/request-quote' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/hydraulic-power-pack-for-press.webp',
      alt: 'Hydraulic Power Pack engineered for industrial presses by Honeywell Hydraulics featuring high-pressure manifold and cyclic duty cooling system.',
    },
    keySpecs: [
      { label: 'Max Pressure', value: '350+ Bar' },
      { label: 'Duty Cycle', value: 'Cyclic / Shock' },
      { label: 'Holding', value: 'Zero-Leak PO Logic' },
      { label: 'Cooling', value: 'Active Dissipation' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'What is a Hydraulic Power Pack for Press?',
    content: (
      <div className="space-y-6">
        <p>
          A <strong className="text-honeywell-navy">Hydraulic Power Pack for Press</strong> is a highly specialized fluid power system designed to drive the massive <a href="/products/hydraulic-cylinders" className="text-honeywell-red font-semibold hover:underline">Hydraulic Cylinders</a> found on industrial press machines.
        </p>
        <p>
          Unlike standard power units designed for simple lifting or continuous spinning, press power packs must endure extreme, violent cyclic loading. A typical press cycle involves rapid approach (high flow/low pressure), sudden impact and forming (low flow/extreme pressure), pressure holding (zero flow/max pressure), and rapid retraction.
        </p>
        <p>
          To achieve this without destroying the pump or overheating the fluid, we engineer these units with advanced high-low tandem pumps, pilot-operated check valves for leak-free holding, and specialized heavy-duty <a href="/products/manifold-blocks" className="text-honeywell-navy underline hover:text-honeywell-red">Hydraulic Manifold Blocks</a> built to withstand continuous hydraulic shock.
        </p>

        {/* Typical System Configuration Flow */}
        <div className="mt-10 bg-brand-lightSurface p-8 rounded-xl border border-slate-200">
          <h3 className="text-xl font-display font-bold text-honeywell-navy mb-6">Typical Press Configuration Flow</h3>
          <p className="text-sm text-brand-steelGray mb-6">Press systems require unique logic to manage shock and holding pressure. The fluid flow follows:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-darkSlate">
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Electric Motor</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Tandem Pump</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Relief Valve</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 text-honeywell-red">High-Pressure Manifold</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">PO Check / Pre-Fill</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Press Cylinder</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Reservoir</span>
          </div>
        </div>

        {/* Engineering Tip */}
        <div className="mt-8 bg-honeywell-navy text-white p-6 rounded-lg border-l-4 border-honeywell-red shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-honeywell-red" />
            <h4 className="text-lg font-bold">Engineering Tip</h4>
          </div>
          <p className="text-slate-200 italic leading-relaxed">
            Press applications with high cycle frequency often benefit immensely from properly sized cooling systems and correctly adjusted proportional relief valves. Dumping excess oil over a standard relief valve at high pressure generates massive heat, rapidly degrading oil viscosity and destroying pump seals. Always utilize a high-low pump circuit or unloading valve!
          </p>
        </div>
      </div>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Engineering Advantages',
    description: 'Press systems fail catastrophically if built with standard commercial components. Our systems are fortified for industrial shock loads.',
    showStepNumbers: false,
    items: [
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Tandem High-Low Pump Circuits',
        description: 'Utilizes a large pump for rapid approach and a small pump for pressing. Unloads the large pump during the curing phase to save massive energy and prevent oil boiling.',
      },
      {
        icon: <Lock className="w-6 h-6" />,
        title: 'Zero-Leak Holding Integrity',
        description: 'Standard valves leak internally. We integrate Pilot-Operated (PO) check valves to mechanically lock the fluid, guaranteeing the press tonnage will not drift during holding.',
      },
      {
        icon: <ThermometerSnowflake className="w-6 h-6" />,
        title: 'Mandatory Thermal Dissipation',
        description: 'Rapid cyclic duty forces massive friction heat. We integrate oversized shell-and-tube heat exchangers or forced-air chillers to maintain oil viscosity below 60°C.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Safety Interlock Integration',
        description: 'Dual-monitored safety valves integrated directly into the manifold, allowing instant pressure dumping if a machine light-curtain is breached.',
      },
    ],
  },

  // ── Technical Specs (Re-purposed for Press) ──
  technicalSpecs: {
    heading: 'Press Capability Parameters',
    description: 'We engineer absolute tonnage stability across all press variants.',
    primaryCta: { label: 'VIEW CYLINDERS', href: '/products/hydraulic-cylinders' },
    secondaryCta: { label: 'CONTACT ENGINEERING', href: '/contact' },
    tableTitle: 'Industrial Forming Specifications',
    rows: [
      { parameter: 'Target Applications', value: 'Deep Drawing, Compression Molding, Forging, Stamping' },
      { parameter: 'Operating Pressure', value: '200 to 350+ Bar' },
      { parameter: 'Pump Architecture', value: 'High-Low Tandem Gear or Variable Displacement Piston' },
      { parameter: 'Holding Valve Logic', value: 'Pilot-Operated (PO) Check Valves / Pre-Fill Valves' },
      { parameter: 'Manifold Material', value: 'Solid forged steel or high-tensile ductile iron' },
      { parameter: 'Cooling Requirement', value: 'Mandatory (Water or Air-Blast depending on cycle rate)' },
      { parameter: 'Reservoir Baffling', value: 'Heavy-duty anti-turbulence baffles for shock-return' },
      { parameter: 'Safety Protocol', value: 'Light-curtain compatible dual-dump safety valves' },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: High-Pressure Expertise',
    description: 'Building a hydraulic power pack for a press requires a standard far above a simple lifting unit. Hydraulic shock generated during a press cycle can literally blow standard fittings apart.',
    steps: [
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Heavy-Duty Reservoir Fabrication',
        description: 'The sudden return of oil from a massive cylinder creates violent turbulence. We weld extra-thick carbon steel reservoirs with heavy internal baffles to break fluid velocity, release air, and dissipate heat.',
      },
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Precision Manifold Machining',
        description: 'We completely eliminate standard threaded plumbing wherever possible, utilizing CNC-machined solid steel manifold blocks and SAE flange connections to reduce leak points to zero under 350+ Bar cyclic shock.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Press Simulation FAT',
        description: 'Our Factory Acceptance Testing (FAT) is brutal. We do not just run the pump; we simulate the exact cyclic load of your press machine, dead-heading the system to max pressure for the specified curing duration.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'High-Pressure Leak Testing',
        description: 'During the simulated holding phase, we use digital transducers to check for micro-leaks or pressure decay over extended periods, guaranteeing absolute tonnage holding integrity before dispatch.',
      },
    ],
    midCta: {
      heading: 'Building a New Deep Drawing Press?',
      description: 'We supply fully tested, high-low tandem pump systems specifically built for rapid approach and extreme holding pressure.',
      primaryCta: { label: 'REQUEST OEM CONTRACTS', href: '/request-quote' },
      whatsappLabel: 'WhatsApp Engineering',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: Selecting a Press Unit',
    description: 'Selecting the right unit prevents overheating and ensures maximum production speed.',
    items: [
      {
        label: 'A',
        title: 'Typical Design Inputs (Prerequisites)',
        description: 'Before we design, we require: 1. Press Tonnage (e.g., 200 Ton) 2. Cylinder Dimensions 3. Cycle Frequency (presses per minute) 4. Working Fluid (VG 46 or Fire-Resistant) 5. Ambient Temperature 6. Available Voltage 7. Safety integration needs.',
      },
      {
        label: 'B',
        title: 'Selection Checklist',
        description: 'Ensure you have accounted for: Maximum pressing force, required flow (for cycle time), holding pressure duration, return speed requirements (regenerative needs?), cooling requirements (water vs air), and physical installation constraints.',
      },
      {
        label: 'C',
        title: 'Tonnage and Pressure Calculations',
        description: 'Calculate the area of your cylinder\'s piston (cm²). Divide the required force (kg) by the area to find required system pressure (Bar). We engineer systems between 200 to 350 Bar to keep cylinder sizes manageable.',
      },
      {
        label: 'D',
        title: 'Maintenance Snapshot',
        description: 'DAILY: Check oil level, inspect for manifold leaks, ensure gauge drops to zero when idle. WEEKLY: Inspect high-pressure hoses for abrasion, tighten pump bolts. MONTHLY: Visually inspect oil for water (cloudiness). QUARTERLY: Calibrate transducers, inspect main relief for scoring, clean coolers.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Press Power Pack vs. Standard Power Pack',
      description: 'Why deploying a standard power pack on a press machine results in rapid catastrophic failure.',
      columns: [{ heading: 'Power Pack for Press' }, { heading: 'Standard Power Pack' }],
      rows: [
        { feature: 'Operating Pressure', values: [{ text: 'Extreme (200 to 350+ Bar)', highlight: true }, { text: 'Moderate (100 to 200 Bar)' }] },
        { feature: 'Duty Cycle', values: [{ text: 'Violent Cyclic (Rapid shock loads)', highlight: true }, { text: 'Steady or Intermittent' }] },
        { feature: 'Heat Generation', values: [{ text: 'Extremely High (Requires cooling)', highlight: true }, { text: 'Low to Moderate' }] },
        { feature: 'Cooling System', values: [{ text: 'Integrated Air-Blast or Water Heat Exchangers', highlight: true }, { text: 'Often uncooled (ambient radiation)' }] },
        { feature: 'Reservoir Baffling', values: [{ text: 'Heavy-duty baffles for shock-return turbulence', highlight: true }, { text: 'Basic baffling' }] },
        { feature: 'Pump Sizing Strategy', values: [{ text: 'Tandem High-Low pumps or Variable Piston', highlight: true }, { text: 'Single fixed displacement gear pump' }] },
        { feature: 'Cycle Speed', values: [{ text: 'Optimized for rapid approach & slow press', highlight: true }, { text: 'Uniform speed' }] },
        { feature: 'Pressure Holding', values: [{ text: 'Zero-leak pilot-operated logic for curing', highlight: true }, { text: 'Standard spool valves (allows minor drift)' }] },
        { feature: 'Energy Consumption', values: [{ text: 'Optimized via unloading valves during pressing', highlight: true }, { text: 'High (dumps full flow over relief)' }] },
        { feature: 'Service Life', values: [{ text: 'Engineered for continuous hydraulic shock', highlight: true }, { text: 'Will fail quickly if placed on a press' }] },
        { feature: 'Maintenance', values: [{ text: 'Rigorous quarterly transducer calibration', highlight: true }, { text: 'Standard visual checks' }] },
        { feature: 'Industrial Suitability', values: [{ text: 'Forging, Deep Drawing, Compression Molding', highlight: true }, { text: 'Scissor lifts, dock levelers, simple pushers' }] },
      ],
    }
  ],

  // ── Industries ──
  industries: {
    heading: 'Press Machinery Utilizing Our Units',
    description: 'Our high-pressure units power India\'s most demanding industrial forming equipment.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Deep Drawing Presses',
        description: 'Requiring massive holding forces and cushion circuits for precise metal forming.',
        href: '/industries',
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Compression Molding',
        description: 'Used for rubber and composites, requiring long pressure-holding durations without pump burnout.',
        href: '/industries',
      },
      {
        icon: <FaTools className="w-6 h-6" />,
        name: 'Metal Stamping & Forging',
        description: 'Operating in extreme heat environments requiring rapid cycle times and massive shock resistance.',
        href: '/industries',
      },
    ],
  },
  
  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other fluid power units designed for specific industrial applications.',
    items: [
      {
        title: 'Customized Power Packs',
        description: 'Bespoke turnkey fluid power systems engineered specifically for complex OEM machinery.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Three Phase Power Packs',
        description: 'Heavy-duty 415V continuous duty power units for standard industrial manufacturing.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/three-phase-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Hydraulic Cylinders',
        description: 'Heavy-duty bespoke hydraulic actuators designed to handle extreme pressing tonnage.',
        category: 'Hydraulic Components',
        imageSrc: '/images/products/hydraulic-cylinders/custom-hydraulic-cylinder.webp',
        href: '/products/hydraulic-cylinders',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'Press Power Packs',

  // ── FAQs ──
  faqs: [
    {
      question: 'Why does my press power pack overheat after an hour of use?',
      answer: 'Overheating in press circuits usually stems from incorrect pump sizing (dumping high flow over the relief valve at high pressure) or a fouled cooling system. Upgrading to a High-Low pump circuit with an unloading valve eliminates 80% of press heating issues.',
    },
    {
      question: 'How do you guarantee the press cylinder won\'t lose pressure during holding?',
      answer: 'Standard directional spool valves have internal clearances that leak microscopic amounts of oil, causing pressure drops. For presses requiring long holding times (like compression molding), we integrate Pilot-Operated (PO) Check Valves into the manifold block, physically locking the fluid with zero leakage.',
    },
    {
      question: 'What is a pre-fill valve on a hydraulic press?',
      answer: 'On massive deep drawing presses with large cylinders, the pump cannot fill the cylinder fast enough for rapid approach. A pre-fill valve opens to allow oil to suck directly from a raised reservoir via gravity during the fast down-stroke, dramatically increasing cycle speed without requiring a massive, expensive pump.',
    },
    {
      question: 'Can you integrate the power pack with our press\'s PLC safety light curtains?',
      answer: 'Yes. We integrate dual-monitored safety valves and electrical feedback loops into the control panel, ensuring the press circuit instantly dumps pressure and halts if a light curtain is breached, complying with industrial safety standards.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Ready to Upgrade Your Press Tonnage?',
    description: "Do not risk your press's tonnage accuracy or factory safety on an under-engineered power unit. Partner with Honeywell Hydraulics to design a cyclic, high-pressure system that delivers relentless forming power.",
    primaryCtaText: 'REQUEST PRESS QUOTE',
    primaryCtaHref: '/request-quote',
    secondaryCtaText: 'Call Engineering',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
