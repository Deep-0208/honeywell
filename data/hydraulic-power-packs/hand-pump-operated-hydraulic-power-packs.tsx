import React from 'react';
import {
  Settings,
  ShieldCheck,
  Zap,
  Wrench,
  Activity,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Anchor,
  Battery
} from 'lucide-react';
import { FaIndustry, FaWrench, FaAmbulance, FaTools } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const handPumpPowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'Hand Pump Operated Hydraulic Power Pack Manufacturer | Portable',
    description: 'Leading Hand Pump Operated Hydraulic Power Pack Manufacturer in India. We engineer ultra-reliable, portable manual hydraulic units for field service.',
    url: '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'Hand Pump Operated Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Power Source', value: 'Manual Human Mechanical Effort' },
      { name: 'Pressure Generation', value: 'High Pressure Precision Piston' },
      { name: 'Valving', value: 'Dual Check Valves (Inlet & Outlet)' },
      { name: 'Primary Benefit', value: '100% Independence from Electrical Grids' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs' },
    ],
    currentPage: 'Hand Pump Units',
    subtitle: 'PORTABLE PRESSURE GENERATION',
    h1: 'Hand Pump Operated Hydraulic Power Pack Manufacturer',
    description: 'Extreme high pressure. Zero electricity. As a specialized Hand Pump Operated Hydraulic Power Pack Manufacturer, Honeywell Hydraulics engineers fully portable, purely mechanical fluid power systems. Designed for remote field service, emergency rescue operations, and hazardous environments where electrical power is unavailable or strictly prohibited.',
    primaryCta: { label: 'REQUEST HAND PUMP QUOTE', href: '/request-quote' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-pack.webp',
      alt: 'Hand Pump Operated Hydraulic Power Pack engineered by Honeywell Hydraulics featuring a high-pressure manual piston pump and steel reservoir.',
    },
    keySpecs: [
      { label: 'Power', value: '100% Manual' },
      { label: 'Pressure', value: 'Up to 1000+ Bar' },
      { label: 'Portability', value: 'Hand Carry / Mobile' },
      { label: 'Holding', value: 'Zero Pressure Drop' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'Manual Hydraulic Pump Fundamentals',
    content: (
      <div className="space-y-6">
        <p>
          Unlike standard units that utilize an electric motor spinning a gear pump, a hand pump unit generates flow and pressure strictly through the physical movement of a steel lever (the pump handle). Because the operator acts as both the "motor" and the "pump," these units operate completely independently of any electrical or diesel power source.
        </p>
        <p>
          At the core of the unit is a precision-machined steel cylinder (the pump body) and a moving plunger (the piston). On the <strong>upstroke</strong>, the piston creates a vacuum, opening the Inlet Check Valve and pulling oil from the reservoir. On the <strong>downstroke</strong>, the Inlet Valve snaps shut, the Outlet Check Valve opens, and pressurized oil is driven into the <a href="/products/hydraulic-cylinders" className="text-honeywell-red font-semibold hover:underline">Hydraulic Cylinder</a>.
        </p>
        <p>
          By utilizing a very small diameter pump piston and a long mechanical handle, an operator exerting only 30 kg of physical force can easily generate over 700 Bar (10,000 PSI) of hydraulic pressure. 
        </p>

        {/* Typical System Configuration Flow */}
        <div className="mt-10 bg-brand-lightSurface p-8 rounded-xl border border-slate-200">
          <h3 className="text-xl font-display font-bold text-honeywell-navy mb-6">Typical Hand Pumping Configuration Flow</h3>
          <p className="text-sm text-brand-steelGray mb-6">How repeated mechanical strokes build massive hydraulic pressure:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-darkSlate">
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Pump Handle</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Pump Piston</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 text-honeywell-navy border-honeywell-navy">Inlet Check</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 bg-red-50 border-red-200">Pressure Chamber</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 text-honeywell-navy border-honeywell-navy">Outlet Check</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Hydraulic Cylinder</span>
          </div>
        </div>

        {/* Engineering Tip */}
        <div className="mt-8 bg-honeywell-navy text-white p-6 rounded-lg border-l-4 border-honeywell-red shadow-md">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-honeywell-red" />
            <h4 className="text-lg font-bold">Engineering Tip</h4>
          </div>
          <p className="text-slate-200 italic leading-relaxed">
            Excessively large pump displacement reduces the number of handle strokes required but significantly increases the physical force needed at the handle as pressure rises. Always select a displacement that carefully balances operator effort with productivity, or opt for a "two-stage" pump design.
          </p>
        </div>
      </div>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Engineering Advantages',
    description: 'Why do technicians choose a manual pump over an electric one? Unfailing reliability and absolute portability.',
    showStepNumbers: false,
    items: [
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Zero Electrical Dependency',
        description: 'No batteries to charge, no extension cords to run, and no three-phase drops required. Functions perfectly in the middle of a remote field.',
      },
      {
        icon: <Anchor className="w-6 h-6" />,
        title: 'Infinite Pressure Holding',
        description: 'Perfectly seated check valves allow the pump to hold a cylinder at maximum pressure for days or weeks without generating heat.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Extreme Pressure Generation',
        description: 'Through hydraulic leverage, a single human can generate over 700 to 1500 Bar (10,000 - 20,000 PSI) for bolt tensioning or heavy jacking.',
      },
      {
        icon: <RefreshCw className="w-6 h-6" />,
        title: 'Two-Stage Efficiency Options',
        description: 'Available with two-stage pistons that automatically shift from high-flow (fast extension) to high-pressure (heavy lifting) to reduce fatigue.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'Hand Pump System Parameters',
    description: 'We engineer precision-machined mechanical pumps built to survive drop-shocks and extreme environments.',
    primaryCta: { label: 'VIEW HAND LEVER UNITS', href: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs' },
    secondaryCta: { label: 'CONTACT ENGINEERING', href: '/contact' },
    tableTitle: 'Pump & Cylinder Specifications',
    rows: [
      { parameter: 'Pump Action', value: 'Single-Acting (Downstroke only) or Double-Acting' },
      { parameter: 'Pressure Stages', value: 'Single-Stage or Automatic Two-Stage' },
      { parameter: 'Max Operating Pressure', value: 'Up to 700 Bar / 10,000 PSI (Custom 1500 Bar available)' },
      { parameter: 'Check Valve Seating', value: 'Hardened steel ball, mechanically coined for zero leakage' },
      { parameter: 'Reservoir Material', value: 'Heavy-duty Aluminum or Welded Steel' },
      { parameter: 'Release Mechanism', value: 'Fine-thread needle valve for slow, controlled lowering' },
      { parameter: 'Safety Overload', value: 'Internal factory-set pressure relief valve' },
      { parameter: 'Portability', value: 'Integrated carrying handles, lightweight footprint' },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: Precision Pump Assembly',
    description: 'Building a manual pump that holds 10,000 PSI without leaking requires extreme machining tolerances.',
    steps: [
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Precision Piston Machining',
        description: 'The core is a steel or high-strength aluminum body. We CNC machine the internal piston bore to micron-level tolerances. If the gap is too large, high-pressure oil simply bypasses the seal during the downstroke.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Check Valve Coining',
        description: 'A hand pump relies entirely on two tiny steel balls. We mechanically "coin" (impact) the hardened steel balls into their seats, creating a perfect metal-to-metal seal with zero leakage.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Handle Mechanism Fitting',
        description: 'The handle linkage endures massive mechanical stress. We utilize hardened steel pivot pins and heavy-duty linkages to prevent the holes from ovalizing over thousands of pumping cycles.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Dead-Head Pressure FAT',
        description: 'During FAT, we pump the unit to its maximum rated pressure against a blocked port ("dead-heading") and leave it. It must hold pressure for a specified duration without the gauge needle dropping.',
      },
    ],
    midCta: {
      heading: 'Need Portable High Pressure?',
      description: 'We manufacture hand pumps for OEM heavy lifting, bolt tensioning, and emergency rescue equipment.',
      primaryCta: { label: 'DISCUSS OEM ORDERS', href: '/request-quote' },
      whatsappLabel: 'WhatsApp Engineering',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: Selecting a Hand Pump Unit',
    description: 'How to correctly balance operator fatigue with reservoir capacity.',
    items: [
      {
        label: 'A',
        title: 'Typical Design Inputs (Prerequisites)',
        description: '1. Cylinder bore & stroke 2. Required tonnage/pressure 3. Operating frequency 4. Portable vs fixed mounting 5. Ambient environment (corrosion risk).',
      },
      {
        label: 'B',
        title: 'Selection Checklist',
        description: 'Verify: Oil displacement per stroke (cc), required physical operator effort (kg force on handle), total reservoir capacity vs cylinder volume, and safety requirements.',
      },
      {
        label: 'C',
        title: 'Usable Oil Capacity',
        description: 'The reservoir must hold enough oil to fully extend the cylinder PLUS a safety margin. If you operate a large bore cylinder, a tiny 1-liter portable hand pump will run dry before it extends halfway.',
      },
      {
        label: 'D',
        title: 'Maintenance Snapshot',
        description: 'DAILY: Check oil level, check handle binding. WEEKLY: Grease pivot pins. MONTHLY: Inspect inlet/outlet check balls for debris. QUARTERLY: Dead-head test to verify holding pressure.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'Hand Pump vs. Electric Power Pack',
      description: 'Why sacrificing speed for total electrical independence is often required in the field.',
      columns: [{ heading: 'Hand Pump Power Pack' }, { heading: 'Electric Power Pack' }],
      rows: [
        { feature: 'Power Source', values: [{ text: 'Human Mechanical Effort', highlight: true }, { text: 'Electrical (1 Phase or 3 Phase)' }] },
        { feature: 'Pressure Generation', values: [{ text: 'Extremely High (Easily 700 - 1000 Bar)', highlight: true }, { text: 'Typically limited to 250 - 350 Bar' }] },
        { feature: 'Flow Rate', values: [{ text: 'Very Low (Depends on operator speed)' }, { text: 'High (Continuous liters per minute)', highlight: true }] },
        { feature: 'Portability', values: [{ text: 'Extreme (Can be carried in one hand)', highlight: true }, { text: 'Low to Moderate (Requires forklift)' }] },
        { feature: 'Operating Effort', values: [{ text: 'High Physical Fatigue' }, { text: 'Zero Physical Fatigue', highlight: true }] },
        { feature: 'Installation', values: [{ text: 'Zero (Connect hose and pump)', highlight: true }, { text: 'Requires wiring and heavy panels' }] },
        { feature: 'Maintenance', values: [{ text: 'Minimal (Seals and check valves)', highlight: true }, { text: 'Moderate (Motor bearings, filters)' }] },
        { feature: 'Emergency Operation', values: [{ text: '100% Reliable without factory power', highlight: true }, { text: 'Fails instantly on power loss' }] },
        { feature: 'Initial Cost', values: [{ text: 'Extremely Cost-Effective', highlight: true }, { text: 'Higher capital investment' }] },
        { feature: 'Energy Consumption', values: [{ text: 'Zero Electricity Required', highlight: true }, { text: 'Draws continuous amperage' }] },
        { feature: 'Duty Cycle', values: [{ text: 'Intermittent (Limited by human endurance)' }, { text: 'Continuous (100% duty cycle available)', highlight: true }] },
        { feature: 'Industrial Suitability', values: [{ text: 'Field repair, bolt tensioning, rescue', highlight: true }, { text: 'Automated assembly lines, pressing' }] },
      ],
    }
  ],

  // ── Common Applications ──
  industries: {
    heading: 'Common Manual Pump Applications',
    description: 'Hand pumps are the undisputed choice for ultra-high pressure applications in remote environments.',
    items: [
      {
        icon: <FaWrench className="w-6 h-6" />,
        name: 'Hydraulic Bolt Tensioning',
        description: 'Generates ultra-high pressure (up to 1500 Bar) in confined spaces with pinpoint manual accuracy.',
        href: '/industries',
      },
      {
        icon: <FaTools className="w-6 h-6" />,
        name: 'Hydraulic Jacks (Heavy Lifting)',
        description: 'Requires absolutely no electrical power; perfect for remote bridge lifting or construction sites.',
        href: '/industries',
      },
      {
        icon: <FaAmbulance className="w-6 h-6" />,
        name: 'Rescue Equipment (Jaws of Life)',
        description: 'Guaranteed emergency operation in remote locations where generators or batteries fail.',
        href: '/industries',
      },
    ],
  },
  
  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other fluid power units designed for specific operational environments.',
    items: [
      {
        title: 'Hand Lever Power Packs',
        description: 'Electric pump units featuring rugged mechanical spool valves for reliable operator control.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/hand-lever-operated-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Accumulator Power Packs',
        description: 'Nitrogen-charged systems that allow small electric pumps to deliver massive peak flow.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/accumulator-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Single Phase Power Packs',
        description: 'Compact hydraulic power units designed to operate entirely on standard 220V household electricity.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/single-phase-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'Hand Pump Units',

  // ── FAQs ──
  faqs: [
    {
      question: 'Why does my hand pump handle spring back up on the downstroke?',
      answer: 'This is the classic symptom of a failing Outlet Check Valve. When you release the handle, the outlet check valve is supposed to slam shut to trap high-pressure oil. If the valve leaks, the high-pressure oil rushes back into the pump chamber, violently forcing the handle back up.',
    },
    {
      question: 'Can a hand pump hold pressure indefinitely?',
      answer: 'Yes. A high-quality hand pump with perfectly seated, zero-leak check valves can hold a cylinder at maximum pressure for days or weeks, whereas an electric gear pump would overheat and destroy itself attempting to hold pressure continuously.',
    },
    {
      question: 'Is it safe to put a longer pipe on the pump handle for more leverage?',
      answer: 'No. This is highly dangerous. The pump is engineered so that normal human effort on the factory-supplied handle generates the maximum safe pressure. Extending the handle gives you excessive leverage, allowing you to easily generate pressure that will blow out the pump body or burst hoses.',
    },
    {
      question: 'What happens if I pump the cylinder all the way to the end of its stroke?',
      answer: 'Once the cylinder bottoms out, the pressure will instantly spike on your next pump stroke. The internal pressure relief valve will open, safely routing your pumped oil back into the reservoir and protecting the system from bursting.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Require Portable High-Pressure?',
    description: "Stop relying on heavy, tethered electrical equipment for field service. Partner with Honeywell Hydraulics to deploy ultra-reliable, high-pressure manual pump systems.",
    primaryCtaText: 'REQUEST HAND PUMP QUOTE',
    primaryCtaHref: '/request-quote',
    secondaryCtaText: 'Call Engineering',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
