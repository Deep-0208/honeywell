import React from 'react';
import {
  Settings,
  ShieldCheck,
  Zap,
  Wrench,
  Activity,
  CheckCircle2,
  ArrowRight,
  Gauge,
  ZapOff,
  TrendingDown
} from 'lucide-react';
import { FaIndustry, FaCogs, FaCompressArrowsAlt, FaHammer } from 'react-icons/fa';
import type { ProductPageData } from '@/components/product-page/types';

export const highLowPowerPackData: ProductPageData = {
  // ── SEO ──
  seo: {
    title: 'High-Low Hydraulic Power Pack Manufacturer | Dual Stage Efficiency',
    description: 'Expert High-Low Hydraulic Power Pack Manufacturer. We engineer dual-stage, energy-efficient hydraulic systems with automatic unloading valves for industrial presses.',
    url: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/high-low-hydraulic-power-pack.webp',
  },

  // ── Schema ──
  schema: {
    productName: 'High-Low Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Pump Configuration', value: 'Dual-Stage (High Flow + Low Flow)' },
      { name: 'Control Valving', value: 'Automatic Pressure Unloading Valve' },
      { name: 'Energy Efficiency', value: 'Up to 50% Motor Size Reduction' },
      { name: 'Primary Application', value: 'High-Speed Hydraulic Presses' },
    ],
  },

  // ── Hero ──
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs' },
    ],
    currentPage: 'High-Low Units',
    subtitle: 'ENERGY EFFICIENT PRODUCTION',
    h1: 'High-Low Hydraulic Power Pack Manufacturer',
    description: 'Dual-stage pumping. Extreme efficiency. As a highly specialized High-Low Hydraulic Power Pack Manufacturer, Honeywell Hydraulics engineers advanced dual-pump fluid power systems designed exclusively to optimize industrial production cycles. By intelligently combining a high-flow approach stage with a high-pressure working stage, our High-Low units drastically reduce cycle times and cut electrical motor requirements by up to 50%.',
    primaryCta: { label: 'REQUEST HIGH-LOW QUOTE', href: '/request-quote' },
    secondaryCta: { label: 'TECHNICAL SPECS', href: '#technical-specifications' },
    image: {
      src: '/images/products/hydraulic-power-packs/high-low-hydraulic-power-pack.webp',
      alt: 'High-Low Hydraulic Power Pack engineered by Honeywell Hydraulics featuring dual-stage pumping and an automatic unloading valve.',
    },
    keySpecs: [
      { label: 'Efficiency', value: 'Motor Size Cut 50%' },
      { label: 'Pumps', value: 'Dual Stage Tandem' },
      { label: 'Cycle Time', value: 'Drastically Reduced' },
      { label: 'Heat Gen', value: 'Near Zero Unloading' },
    ],
  },

  // ── Overview ──
  overview: {
    heading: 'High-Low Hydraulic Circuit Fundamentals',
    content: (
      <div className="space-y-6">
        <p>
          Before specifying a High-Low power pack for your factory, it is critical to understand the physics of dual-stage pumping and why it is vastly superior to a standard single-pump unit for any machine that features a long approach stroke followed by a short, high-pressure working stroke.
        </p>
        <p>
          A High-Low (or Hi-Lo) circuit utilizes <strong>two separate hydraulic pumps</strong> driven by a single electric motor. A large <strong>High-Flow / Low-Pressure</strong> gear pump provides massive fluid volume to move the cylinder quickly toward the workpiece. A much smaller <strong>Low-Flow / High-Pressure</strong> pump takes over the millisecond the cylinder touches the workpiece and begins pressing.
        </p>
        <p>
          The heart of this system is the <strong>Unloading Valve</strong>. The instant the cylinder touches the metal and pressure spikes, the unloading valve automatically opens. It dumps all the oil from the large high-flow pump effortlessly back into the tank at near-zero pressure. Now, the electric motor only has to drive the tiny high-pressure pump, completely preventing the motor from stalling and drastically reducing heat generation.
        </p>

        {/* Typical System Configuration Flow */}
        <div className="mt-10 bg-brand-lightSurface p-8 rounded-xl border border-slate-200">
          <h3 className="text-xl font-display font-bold text-honeywell-navy mb-6">Typical High-Low Dual-Stage Flow</h3>
          <p className="text-sm text-brand-steelGray mb-6">How an unloading valve dynamically manages two pumps on a single motor shaft:</p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-brand-darkSlate">
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Electric Motor</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            
            <div className="flex flex-col gap-4 mx-4 text-xs font-normal">
              {/* High Flow Path */}
              <div className="flex items-center gap-2">
                <span className="bg-white px-3 py-1 rounded shadow-sm border border-slate-200 text-blue-600">High-Flow Pump</span>
                <ArrowRight className="w-3 h-3 text-honeywell-red" />
                <span className="bg-red-50 px-3 py-1 rounded shadow-sm border border-red-200 font-bold">Unloading Valve</span>
              </div>
              
              {/* Low Flow Path */}
              <div className="flex items-center gap-2">
                <span className="bg-white px-3 py-1 rounded shadow-sm border border-slate-200 text-red-600">Low-Flow Pump</span>
                <ArrowRight className="w-3 h-3 text-honeywell-red" />
                <span className="bg-gray-50 px-3 py-1 rounded shadow-sm border border-gray-200">Check Valve</span>
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200 border-honeywell-navy">Common Manifold</span>
            <ArrowRight className="w-4 h-4 text-honeywell-red" />
            <span className="bg-white px-4 py-2 rounded shadow-sm border border-slate-200">Directional Valve</span>
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
            A High-Low hydraulic circuit must be tuned so the unloading valve switches at the exact appropriate pressure for the application. If the unloading pressure is set too low, the large pump drops offline prematurely, slowing down the approach speed. If set too high, the electric motor will momentarily overload and stall before the valve unloads. Always calibrate the unloading valve under actual production load.
          </p>
        </div>
      </div>
    ),
  },

  // ── Key Features ──
  keyFeatures: {
    heading: 'Core Engineering Advantages',
    description: 'Why do production managers insist on dual-stage pumping? Maximum output with minimum energy waste.',
    showStepNumbers: false,
    items: [
      {
        icon: <TrendingDown className="w-6 h-6" />,
        title: '50% Motor Size Reduction',
        description: 'By isolating the high flow from the high pressure, you can often cut the required electric motor horsepower in half compared to a single-pump design.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Drastic Cycle Time Reduction',
        description: 'The high-flow pump eliminates "dead air" time by rocketing the cylinder toward the workpiece at maximum speed before shifting to pressing force.',
      },
      {
        icon: <ZapOff className="w-6 h-6" />,
        title: 'Zero-Heat Unloading',
        description: 'During the pressing phase, the massive flow of the large pump is dumped directly to tank at zero pressure, meaning it generates absolutely no heat.',
      },
      {
        icon: <Gauge className="w-6 h-6" />,
        title: 'Seamless Pressure Transition',
        description: 'Integrated check valves ensure that when the large pump unloads, the high pressure is instantly maintained by the small pump without a drop in force.',
      },
    ],
  },

  // ── Technical Specs ──
  technicalSpecs: {
    heading: 'High-Low System Parameters',
    description: 'We engineer advanced dual-stage power units designed exclusively for high-speed industrial pressing and forming.',
    primaryCta: { label: 'VIEW HYDRAULIC PRESS PACKS', href: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press' },
    secondaryCta: { label: 'CONTACT ENGINEERING', href: '/contact' },
    tableTitle: 'Dual-Stage Specifications',
    rows: [
      { parameter: 'Pump Configuration', value: 'Tandem Mounted (High-Flow Vane/Gear + Low-Flow Piston)' },
      { parameter: 'Unloading Valve', value: 'Cartridge style, internally piloted, externally adjustable' },
      { parameter: 'High-Flow Stage', value: 'Typically 30 to 150+ LPM @ 20 to 50 Bar (Approach)' },
      { parameter: 'High-Pressure Stage', value: 'Typically 2 to 15 LPM @ 200 to 350+ Bar (Pressing)' },
      { parameter: 'Manifold Integration', value: 'Common central block prevents internal back-feeding' },
      { parameter: 'Electric Motor', value: '3-Phase AC, sized exclusively for the high-pressure phase' },
      { parameter: 'Cooling Requirement', value: 'Massively reduced due to zero-pressure unloading' },
      { parameter: 'Cycle Automation', value: 'Fully compatible with PLC proportional control' },
    ],
  },

  // ── Manufacturing ──
  manufacturing: {
    heading: 'Manufacturing: Advanced Dual-Pump Assembly',
    description: 'Building a High-Low power pack requires precision shaft alignment and flawless manifold engineering.',
    steps: [
      {
        icon: <Settings className="w-6 h-6" />,
        title: 'Dual-Pump Shaft Alignment',
        description: 'We mount both pumps in tandem on a single electric motor shaft using precision bell housings. Absolute axial alignment is mandatory; misalignment destroys bearings due to harmonic vibrations.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Common Manifold CNC Machining',
        description: 'We machine a massive central manifold block where the unloading valve, check valves, and relief valves are integrated as cartridges, completely eliminating messy external hoses and pressure drops.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Cycle Simulation FAT',
        description: 'During Factory Acceptance Testing, we simulate the exact production cycle using a load-simulating valve. We meticulously calibrate the unloading valve to switch at the precise pressure requested.',
      },
      {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Unloading Verification',
        description: 'We verify that when the unloading valve shifts, the high-flow pump is dumping to tank at near-zero pressure, proving maximum energy efficiency without electric motor overloading.',
      },
    ],
    midCta: {
      heading: 'Is Your Press Wasting Energy?',
      description: 'Retrofitting a slow, single-pump press with a High-Low unit is the fastest way to double production speed.',
      primaryCta: { label: 'DISCUSS CYCLE OPTIMIZATION', href: '/request-quote' },
      whatsappLabel: 'WhatsApp Engineering',
    },
  },

  // ── Engineering / How to Choose ──
  engineering: {
    heading: 'Engineering Guide: Selecting a High-Low Power Pack',
    description: 'How to optimize your production machinery by correctly calculating dual-stage parameters.',
    items: [
      {
        label: 'A',
        title: 'Typical Design Inputs (Prerequisites)',
        description: '1. Cylinder bore & stroke 2. Approach distance vs Working distance 3. Required tonnage (Max Pressure) 4. Cycle frequency (Parts per min) 5. Available electrical supply.',
      },
      {
        label: 'B',
        title: 'Calculating Motor Sizing',
        description: 'Calculate motor size twice: 1) Combined Flow × Unloading Pressure. 2) Low Flow × Maximum Pressing Pressure. Select the motor based on whichever yields the higher wattage.',
      },
      {
        label: 'C',
        title: 'Cycle Optimization (Speed)',
        description: 'To minimize cycle times, analyze the "dead air" distance your cylinder travels. We size the high-flow pump exclusively to eliminate this dead time. Faster approach = more parts per hour.',
      },
      {
        label: 'D',
        title: 'Maintenance Snapshot',
        description: 'DAILY: Check for abnormal pump cavitation noise. WEEKLY: Observe unloading valve crispness. MONTHLY: Inspect return filters (dirty filters cause cavitation). QUARTERLY: Recalibrate unloading valve.',
      },
    ],
  },

  // ── Comparisons ──
  comparisons: [
    {
      heading: 'High-Low vs. Standard Power Pack',
      description: 'Why single-pump standard units are completely obsolete for high-speed pressing applications.',
      columns: [{ heading: 'High-Low Power Pack' }, { heading: 'Standard Power Pack (Single)' }],
      rows: [
        { feature: 'Pump Arrangement', values: [{ text: 'Dual Stage (High-Flow & Low-Flow)', highlight: true }, { text: 'Single Stage (One pump for all phases)' }] },
        { feature: 'Flow Rate', values: [{ text: 'Variable (Fast approach, slow press)', highlight: true }, { text: 'Constant (Same speed for approach and press)' }] },
        { feature: 'Pressure Stage', values: [{ text: 'Automatically shifts to high pressure', highlight: true }, { text: 'Must push all flow to high pressure' }] },
        { feature: 'Cycle Speed', values: [{ text: 'Extremely Fast (Optimized for production)', highlight: true }, { text: 'Slower (Unless heavily overpowered)' }] },
        { feature: 'Heat Generation', values: [{ text: 'Very Low (Large pump unloads to tank)', highlight: true }, { text: 'Very High (Dumps massive flow over relief)' }] },
        { feature: 'Motor Size', values: [{ text: 'Highly Optimized (Often 50% smaller)', highlight: true }, { text: 'Massive (Sized for Max Flow + Max Pressure)' }] },
        { feature: 'Energy Efficiency', values: [{ text: 'Excellent (Uses power only when needed)', highlight: true }, { text: 'Poor (Wastes massive energy as heat)' }] },
        { feature: 'Unloading Valve', values: [{ text: 'Mandatory (Heart of the system)', highlight: true }, { text: 'Not required' }] },
        { feature: 'Productivity', values: [{ text: 'Maximum parts per hour', highlight: true }, { text: 'Standard parts per hour' }] },
        { feature: 'Maintenance', values: [{ text: 'Requires valve calibration' }, { text: 'Simple operation', highlight: true }] },
        { feature: 'Initial Cost', values: [{ text: 'Higher (Requires two pumps & smart valving)' }, { text: 'Lower', highlight: true }] },
        { feature: 'Industrial Suitability', values: [{ text: 'Hydraulic Presses, Forging, Molding', highlight: true }, { text: 'Basic lifting, continuous slow pushing' }] },
      ],
    }
  ],

  // ── Common Applications ──
  industries: {
    heading: 'Common Dual-Stage Applications',
    description: 'High-Low circuits are mandatory for any application requiring a long fast stroke followed by a short high-pressure squeeze.',
    items: [
      {
        icon: <FaIndustry className="w-6 h-6" />,
        name: 'Hydraulic Presses',
        description: 'Achieves rapid tooling approach while maintaining immense, energy-efficient high-pressure pressing force.',
        href: '/industries',
      },
      {
        icon: <FaCompressArrowsAlt className="w-6 h-6" />,
        name: 'Compression Molding',
        description: 'Significantly reduces cycle times while cutting electrical energy consumption during the long curing phase.',
        href: '/industries',
      },
      {
        icon: <FaCogs className="w-6 h-6" />,
        name: 'Deep Drawing Machines',
        description: 'Allows for rapid positioning followed by a smooth, highly controlled transition to high-pressure metal forming.',
        href: '/industries',
      },
      {
        icon: <FaHammer className="w-6 h-6" />,
        name: 'Heavy Forging Equipment',
        description: 'Delivers extreme high-tonnage squeezing force without overheating the hydraulic oil during continuous production.',
        href: '/industries',
      },
    ],
  },
  
  // ── Related Products ──
  relatedProducts: {
    description: 'Explore our other specialized hydraulic power units.',
    items: [
      {
        title: 'Power Packs for Presses',
        description: 'Heavy-duty hydraulic power units engineered specifically for industrial metal forming machines.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-for-press.webp',
        href: '/products/hydraulic-power-packs/hydraulic-power-packs-for-press',
        ctaText: 'View Details',
      },
      {
        title: 'Accumulator Power Packs',
        description: 'Nitrogen-charged systems that can be paired with High-Low circuits for ultimate energy savings.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/accumulator-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/accumulator-hydraulic-power-packs',
        ctaText: 'View Details',
      },
      {
        title: 'Customized Power Packs',
        description: 'Bespoke turnkey fluid power systems engineered specifically for complex OEM machinery.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/customized-hydraulic-power-pack.webp',
        href: '/products/hydraulic-power-packs/customized-hydraulic-power-packs',
        ctaText: 'View Details',
      },
    ],
  },

  productName: 'High-Low Units',

  // ── FAQs ──
  faqs: [
    {
      question: 'What is an unloading valve and why is it so important?',
      answer: 'An unloading valve is a pressure-sensing valve. When the system pressure reaches a specific set point (when the cylinder hits the workpiece), the valve opens and dumps all the oil from the large pump directly back into the tank at zero pressure. This instantly relieves the load on the electric motor, allowing the small pump to take over for high-pressure pressing.',
    },
    {
      question: 'Why use two pumps instead of one large one?',
      answer: 'If you use one large pump to get a fast cylinder speed, you need a massive electric motor to drive that large pump when it hits high pressure. By using two pumps, you get the fast speed of a large pump, but the high pressure of a small pump, allowing you to use a much smaller, cheaper, and more energy-efficient electric motor.',
    },
    {
      question: 'Will a High-Low system reduce the heat in my hydraulic oil?',
      answer: 'Drastically. In a standard system, dumping high flow over a high-pressure relief valve creates extreme heat. In a High-Low system, the high-flow oil is dumped to the tank at zero pressure, meaning it generates almost no heat, significantly extending the life of your oil and seals.',
    },
    {
      question: 'Can I upgrade my existing press to a High-Low system?',
      answer: 'Yes. Retrofitting a slow, single-pump press with a customized High-Low power pack is the most cost-effective way to instantly double your machine\'s production speed (cycle time) without having to buy a completely new press.',
    },
  ],

  // ── Final CTA ──
  cta: {
    title: 'Is Your Press Wasting Energy?',
    description: "Stop wasting electrical energy and suffering from slow production cycles. Partner with Honeywell Hydraulics to engineer an advanced High-Low Power Pack that maximizes your machine's output.",
    primaryCtaText: 'REQUEST HIGH-LOW QUOTE',
    primaryCtaHref: '/request-quote',
    secondaryCtaText: 'Call Engineering',
    secondaryCtaHref: 'tel:+919924343873',
  },
};
