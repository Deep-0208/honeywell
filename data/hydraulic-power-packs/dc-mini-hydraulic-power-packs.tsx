import React from 'react';
import {
  Settings,
  ShieldCheck,
  Zap,
  Wrench,
  Activity,
  CheckCircle2,
  ArrowRight,
  Battery,
  Maximize,
  Gauge
} from 'lucide-react';
import { FaTruck, FaIndustry, FaTractor, FaTools } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const dcMiniPowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'DC Mini Hydraulic Power Pack Manufacturer | 12V & 24V Systems',
    description: 'Top DC Mini Hydraulic Power Pack Manufacturer in India. We engineer 12V and 24V battery-operated, compact hydraulic power units for mobile equipment.',
    url: '/products/hydraulic-power-packs/dc-mini-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/dc-mini-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'DC Mini Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Power Source', value: '12V or 24V DC Battery' },
      { name: 'Duty Cycle', value: 'Intermittent (S2 / S3)' },
      { name: 'Motor Integration', value: 'High-Amperage Brushed DC Motor' },
      { name: 'Primary Benefit', value: 'Ultra-Compact Mobile Hydraulic Power' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs' },
    ],
    currentPage: 'DC Mini Units',
    subtitle: 'MOBILE POWER GENERATION',
    h1: 'DC Mini Hydraulic Power Pack Manufacturer',
    description: 'Compact design. Battery-powered reliability. As a premier DC Mini Hydraulic Power Pack Manufacturer, Honeywell Hydraulics engineers ultra-compact 12V and 24V fluid power systems. Designed specifically for vehicle-mounted equipment, tail lifts, and dump trailers, our DC Mini packs deliver explosive hydraulic force directly from standard vehicle batteries.',
    primaryCta: { label: 'REQUEST DC MINI QUOTE', href: '/request-quote' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/dc-mini-hydraulic-power-pack.webp',
      alt: 'DC Mini Hydraulic Power Pack engineered by Honeywell Hydraulics featuring a 12V DC motor, compact reservoir, and integrated manifold block.',
    },
    keySpecs: [
      { label: 'Voltage', value: '12V / 24V DC' },
      { label: 'Duty Cycle', value: 'Intermittent (Burst)' },
      { label: 'Amperage', value: 'High Peak Draw' },
      { label: 'Mounting', value: 'Ultra-Compact' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'DC Hydraulic System Fundamentals',
    content: (
      <div className="space-y-6">
        <p>
          Before designing a mobile hydraulic circuit, we must understand how DC (Direct Current) power completely changes the engineering constraints compared to standard AC factory hydraulics. A DC Mini Hydraulic Power Pack is a completely self-contained fluid power system that runs on low-voltage direct current (typically 12V or 24V) drawn from a vehicle battery. 
        </p>
        <p>
          Because they are mounted on vehicles, these units prioritize extreme compactness, utilizing small, integrated aluminum manifold blocks and lightweight translucent reservoirs rather than the massive welded steel tanks found in factory systems.
        </p>
        <p>
          Unlike 3-phase factory motors that run continuously, <strong>DC Mini Power Packs are strictly designed for Intermittent Duty (typically S2 or S3 duty cycles).</strong> Because they lack cooling fans, running a DC motor continuously for more than a few minutes will cause the copper windings to overheat and melt. They are engineered for "burst" operations: lift a dump trailer (15 seconds), lower the trailer, and rest.
        </p>

        {/* Typical System Configuration Flow */}
        <div className="mt-10 bg-brand-lightSurface p-8 rounded-xl border border-slate-200">
          <h3 className="text-xl font-display font-bold text-honeywell-navy mb-6">Typical DC Power Flow Configuration</h3>
          <p className="text-sm text-brand-steelGray mb-6">How electrical energy stored in a battery is converted into massive hydraulic power:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-darkSlate">
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">12V/24V Battery</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">DC Contactor / Solenoid</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 text-honeywell-navy border-honeywell-navy">DC Motor</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 bg-red-50 border-red-200">Hydraulic Gear Pump</span>
            
            <div className="flex flex-col gap-2 mx-4 text-xs font-normal">
              <div className="flex items-center gap-2 bg-blue-50 px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span> Central Manifold
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-2 py-1 rounded">
                <span className="w-2 h-2 rounded-full bg-gray-500"></span> Relief Valve
              </div>
            </div>

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
            Long DC cable runs significantly increase voltage drop, which drastically reduces DC motor RPM and torque, causing the hydraulic pump to stall under heavy loads. Always position the DC power pack as close to the battery as practical, or exponentially increase the copper gauge (thickness) of the battery cables to handle the massive 200+ Amp current draw.
          </p>
        </div>
      </div>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Engineering Advantages',
    description: 'Why do OEM vehicle manufacturers rely on DC Mini packs? Extreme compactness and battery-powered torque.',
    showStepNumbers: false,
    items: [
      {
        icon: <Battery className="w-6 h-6" />,
        title: 'Vehicle Battery Integration',
        description: 'Operates directly from standard 12V or 24V vehicle batteries, completely eliminating the need for expensive engine-driven PTOs.',
      },
      {
        icon: <Maximize className="w-6 h-6" />,
        title: 'Ultra-Compact Manifolds',
        description: 'All hydraulic valving is CNC-machined into a single central aluminum block, eliminating external plumbing and saving massive space under truck chassis.',
      },
      {
        icon: <Gauge className="w-6 h-6" />,
        title: 'High Starting Torque',
        description: 'Brushed DC motors provide explosive starting torque, instantly driving the gear pump to lift heavy loads like dump trailers.',
      },
      {
        icon: <Wrench className="w-6 h-6" />,
        title: 'Lightweight Thermoplastics',
        description: 'Utilizes translucent thermoplastic reservoirs that are corrosion-proof, shatter-resistant, and allow instant visual oil level checks.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'DC Mini System Parameters',
    description: 'We engineer robust mobile power units designed to survive relentless road vibration and weather exposure.',
    primaryCta: { label: 'VIEW ALL POWER PACKS', href: '/products/hydraulic-power-packs' },
    secondaryCta: { label: 'CONTACT ENGINEERING', href: '/contact' },
    tableTitle: 'DC Motor & Pump Specifications',
    rows: [
      { parameter: 'Voltage Options', value: '12V DC or 24V DC' },
      { parameter: 'Motor Wattage', value: '800W to 3.0 kW (Typical)' },
      { parameter: 'Duty Cycle Rating', value: 'Intermittent (S2 or S3 rated, e.g., 3-5 minutes continuous)' },
      { parameter: 'Current Draw (Amps)', value: '150A to 300A+ Peak (Requires heavy-gauge battery cables)' },
      { parameter: 'Manifold Construction', value: 'Centralized aerospace-grade Aluminum block' },
      { parameter: 'Reservoir Material', value: 'Translucent Thermoplastic or Welded Steel' },
      { parameter: 'Reservoir Capacity', value: '1 Liter to 15 Liters (Typical)' },
      { parameter: 'Environmental Rating', value: 'High vibration resistance; Weather-resistant covers available' },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: DC Mini Assembly',
    description: 'Building a reliable DC Mini pack requires fusing high-amperage electrical assembly with precision hydraulics.',
    steps: [
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Compact Manifold Integration',
        description: 'The entire "heart" of the system is a central aluminum block. We CNC machine all valve cavities and ports directly into this block, creating a perfectly sealed, ultra-compact footprint.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'DC Electrical Harness Assembly',
        description: 'We integrate heavy-duty starter contactors wired using premium high-strand copper cables to minimize voltage drop. All sensitive connections use marine-grade heat shrink to protect against road salt.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Vehicle Vibration Testing',
        description: 'Because these units endure constant road vibration, we utilize specialized thread-locking compounds and mount motors using anti-vibration damping pads to prevent internals from shattering.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Current Draw & Heat FAT',
        description: 'During FAT, we run the unit under full hydraulic load while monitoring DC amperage draw and motor casing temperature to guarantee it will not instantly overheat a vehicle\'s electrical system.',
      },
    ],
    midCta: {
      heading: 'Designing a New Mobile Lift?',
      description: 'We manufacture OEM DC Mini Power Packs tailored exactly to your vehicle\'s 12V or 24V electrical architecture.',
      primaryCta: { label: 'DISCUSS OEM ORDERS', href: '/request-quote' },
      whatsappLabel: 'WhatsApp Engineering',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: Selecting a DC Mini Pack',
    description: 'How to correctly size a battery-powered hydraulic system without burning out the motor.',
    items: [
      {
        label: 'A',
        title: 'Typical Design Inputs (Prerequisites)',
        description: '1. Available battery voltage (12V/24V) 2. CCA capacity 3. Required flow/lift speed 4. Operating pressure (tonnage) 5. Installation space & mounting orientation.',
      },
      {
        label: 'B',
        title: 'Battery & Voltage Selection',
        description: 'Never under-size the battery. A hydraulic DC motor under load acts nearly like a dead short. If the battery is weak, voltage drops drastically, causing amperage to spike and melting the motor brushes.',
      },
      {
        label: 'C',
        title: 'Duty Cycle Limitations',
        description: 'An S2 rating (e.g., S2 = 3 minutes) means the motor can run continuously under full load for exactly 3 minutes before it requires a full cool-down period. Running it continuously destroys the motor.',
      },
      {
        label: 'D',
        title: 'Maintenance Snapshot',
        description: 'DAILY: Check battery charge, check oil level. WEEKLY: Inspect heavy-gauge cable terminals for corrosion. MONTHLY: Inspect motor brushes, check mounting bolts. QUARTERLY: Perform battery load test.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'DC Mini vs. AC Hydraulic Power Pack',
      description: 'The strict engineering trade-offs between vehicle mobility and continuous factory power.',
      columns: [{ heading: 'DC Mini Power Pack' }, { heading: 'AC Hydraulic Power Pack' }],
      rows: [
        { feature: 'Power Source', values: [{ text: 'DC Battery (12V or 24V)', highlight: true }, { text: 'AC Grid (1 Phase or 3 Phase)' }] },
        { feature: 'Mobility', values: [{ text: '100% Mobile (Vehicle mounted)', highlight: true }, { text: 'Stationary (Tethered to a factory wall)' }] },
        { feature: 'Motor Type', values: [{ text: 'Brushed DC Motor (High starting torque)' }, { text: 'AC Induction Motor (Smooth running)', highlight: true }] },
        { feature: 'Duty Cycle', values: [{ text: 'Strictly Intermittent (Burst operation)' }, { text: 'Continuous (100% duty cycle capable)', highlight: true }] },
        { feature: 'Installation Space', values: [{ text: 'Ultra-Compact (Fits under vehicle chassis)', highlight: true }, { text: 'Large (Requires significant floor space)' }] },
        { feature: 'Current Draw', values: [{ text: 'Massive (150+ Amps requires thick cables)' }, { text: 'Low to Moderate Amperage', highlight: true }] },
        { feature: 'Heat Management', values: [{ text: 'Poor (No cooling fans, relies on casing)' }, { text: 'Excellent (Integrated cooling fans)', highlight: true }] },
        { feature: 'Reservoir Size', values: [{ text: 'Very Small (1 to 15 Liters typical)', highlight: true }, { text: 'Large (20 to 200+ Liters)' }] },
        { feature: 'Maintenance', values: [{ text: 'Higher (Motor brushes, battery health)' }, { text: 'Very Low (Maintenance-free motors)', highlight: true }] },
        { feature: 'Noise Level', values: [{ text: 'Loud (High RPM DC brush noise)' }, { text: 'Quiet (Smooth AC induction)', highlight: true }] },
        { feature: 'Energy Source', values: [{ text: 'Limited by battery capacity & alternator' }, { text: 'Unlimited grid power', highlight: true }] },
        { feature: 'Typical Applications', values: [{ text: 'Dump trucks, Tail lifts, Scissor lifts', highlight: true }, { text: 'CNC machines, Hydraulic presses' }] },
      ],
    }
  ],

  // ── Common Applications ──
  industries: {
    heading: 'Common Mobile Applications',
    description: 'DC Mini systems are the absolute standard for vehicle-mounted lifting equipment.',
    items: [
      {
        icon: <FaTruck className="w-6 h-6" />,
        name: 'Dump Trailers & Tipper Trucks',
        description: 'Provides massive, battery-powered lifting force without requiring an expensive engine-driven PTO.',
        href: '/industries',
      },
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Tail Lifts / Liftgates',
        description: 'Ultra-compact hydraulic package fits seamlessly under commercial truck chassis for rapid loading operations.',
        href: '/industries',
      },
      {
        icon: <FaTractor className="w-6 h-6" />,
        name: 'Mobile Agricultural Equipment',
        description: 'Reliable hydraulic operation in remote locations, integrating seamlessly into 12V tractor electrical systems.',
        href: '/industries',
      },
      {
        icon: <FaTools className="w-6 h-6" />,
        name: 'Scissor Lifts & Aerial Platforms',
        description: 'Independent, portable lifting systems that operate quietly indoors or outdoors on deep-cycle batteries.',
        href: '/industries',
      },
    ],
  },
  
  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other specialized hydraulic power units.',
    items: [
      {
        title: 'Single Phase Power Packs',
        description: 'Compact hydraulic power units designed to operate entirely on standard 220V household electricity.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/single-phase-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/single-phase-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Three Phase Power Packs',
        description: 'Heavy-duty industrial hydraulic power units engineered for 415V continuous factory operation.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/three-phase-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/three-phase-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Hand Pump Power Packs',
        description: 'Fully portable, purely mechanical fluid power systems for emergency and field service.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/hand-pump-operated-hydraulic-power-packs',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'DC Mini Units',

  // ── FAQs ──
  faqs: [
    {
      question: 'What is the difference between a 12V and 24V DC Mini Power Pack?',
      answer: 'A 24V system is significantly more efficient for heavy loads. By doubling the voltage, you cut the required amperage in half to produce the same hydraulic power. This means the 24V motor runs cooler, the electrical contactors last longer, and you can use thinner, less expensive battery cables.',
    },
    {
      question: 'Can I run a DC Mini Power Pack continuously?',
      answer: 'No. DC Mini packs use extremely compact motors without internal cooling fans. They are designed strictly for intermittent duty (usually running for a few seconds to a few minutes at a time). Running them continuously will overheat the copper windings and permanently destroy the motor.',
    },
    {
      question: 'Why does my DC motor stall when trying to lift a heavy load?',
      answer: 'This is almost always caused by a "Voltage Drop." If your battery is weak, or if your battery cables are too thin or too long, the motor will not receive the full 12 Volts under load. The voltage can drop to 9V or 8V, completely robbing the motor of its torque and causing the hydraulic pump to stall against the load.',
    },
    {
      question: 'Are the reservoirs on DC Mini packs made of plastic or steel?',
      answer: 'We offer both. Translucent thermoplastic reservoirs are the most popular because they are lightweight, corrosion-proof, and allow the operator to instantly see the oil level. However, for severe-duty applications (like rock dump trailers), we upgrade to welded steel tanks to prevent impact shattering.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Designing a Mobile Hydraulic System?',
    description: "Partner with Honeywell Hydraulics to engineer an ultra-compact, high-torque DC Mini Power Pack perfectly matched to your vehicle's 12V or 24V electrical architecture.",
    primaryCtaText: 'REQUEST DC MINI QUOTE',
    primaryCtaHref: '/request-quote',
    secondaryCtaText: 'Call Engineering',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
