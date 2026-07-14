import React from 'react';
import {
  Activity,
  Hammer,
  Cog,
  Settings,
  Box,
  TrendingDown,
  CheckCircle2,
} from 'lucide-react';
import type { ProductPageData } from '@/components/product-page/types';

export const highLowPowerPackData: ProductPageData = {
  seo: {
    title: 'High Low Hydraulic Power Pack Manufacturer | Honeywell',
    description: 'Leading high low hydraulic power pack manufacturer. We engineer dual-pump, energy-efficient power units specifically for hydraulic presses and forging machines.',
    url: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs',
    image: '/images/products/hydraulic-power-packs/hydraulic-power-pack-single-phase.webp',
  },
  schema: {
    productName: 'High Low Hydraulic Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Pump Architecture', value: 'Tandem High/Low' },
      { name: 'Max Press Pressure', value: 'Up to 500 Bar' },
      { name: 'Energy Efficiency', value: 'Up to 70% Savings' }
    ]
  },
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
    ],
    currentPage: 'High Low Power Packs',
    subtitle: 'High Low Hydraulic Power Packs',
    h1: 'High Low Hydraulic Power Pack Manufacturer',
    description: 'Maximize cycle speed while slashing electrical consumption. Honeywell Hydraulics is a premier high low hydraulic power pack manufacturer in Gujarat, engineering dual-pump power units specifically for the heavy pressing and forging industries. We design advanced unloading valve logic that provides rapid cylinder approach speeds at low pressure, followed by extreme high-pressure tonnage during the actual pressing phase—drastically reducing your machine\'s motor size, heat generation, and electricity costs.',
    image: {
      src: '/images/products/high-low-hydraulic-power-pack-manufacturer.webp',
      alt: 'High Low Hydraulic Power Pack Manufacturer in Ahmedabad - Dual pump press unit by Honeywell Hydraulics',
    },
    primaryCta: { label: 'DOWNLOAD DUAL-PUMP SPECS', href: '#' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    keySpecs: [
      { label: 'Pump Architecture', value: 'Tandem High/Low' },
      { label: 'Max Press Pressure', value: 'Up to 500 Bar' },
      { label: 'Energy Efficiency', value: 'Up to 70% Savings' },
      { label: 'Primary Application', value: 'Press & Forging' },
    ],
  },
  overview: {
    heading: 'What Is A High Low Hydraulic Power Pack?',
    content: (
      <>
        <p>
          In the vast majority of heavy industrial pressing operations, the machine requires two completely different physical profiles during a single cycle: it needs to close the massive press die extremely fast (requiring high flow), and then it needs to crush the metal with immense force (requiring high pressure).
        </p>
        <p>
          A conventional single-pump power unit is fundamentally inefficient at handling this.
        </p>
        <p>
          A <strong className="text-honeywell-navy">High Low Hydraulic Power Pack</strong> (often called a Dual Pump Power Unit) solves this physics problem. Instead of one large pump, it utilizes a tandem double-pump configuration driven by a single electric motor. As a leading <strong>hydraulic press power pack supplier</strong>, we engineer these systems to automatically sequence a high-volume gear pump and a high-pressure radial piston pump. This mechanical intelligence allows the power pack to deliver exactly what the machine needs, the exact millisecond it needs it, resulting in monumental energy savings.
        </p>
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 text-honeywell-red">
            <TrendingDown className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-display font-bold text-honeywell-navy mb-6">Why Press Machines Demand High-Low Systems</h3>
          <p className="text-lg text-brand-darkSlate font-body mb-6 leading-relaxed text-justify">
            Machine builders who try to build a 500-ton press using a standard single-pump power unit face catastrophic engineering failures. To get the press to close fast, they need a huge pump. To get the press to crush metal, they need huge pressure.
          </p>
          <p className="text-lg text-brand-darkSlate font-body mb-8 leading-relaxed text-justify">
            If they use a single huge pump at huge pressure, they must install a massive 150 HP electric motor. This motor will consume incredible amounts of electricity, generate enough heat to boil the hydraulic oil, and destroy the fluid viscosity in days.
          </p>
          <div className="bg-brand-surfaceGray border-l-4 border-honeywell-red p-6 rounded-r-lg text-left inline-block w-full">
            <p className="text-honeywell-navy font-semibold text-lg text-justify">
              By installing a High-Low Power Pack, that same 500-ton press can operate at the exact same cycle speed using a tiny 30 HP electric motor. The heat generation drops by 70%, electrical bills plummet, and the fluid remains thermally stable for months.
            </p>
          </div>
        </div>
      </>
    ),
  },
  keyFeatures: {
    heading: 'How High-Low Circuits Work',
    description: 'The intelligence of a High-Low power pack relies on a specialized hydraulic component called the Unloading Valve, which dictates the behavior of the two pumps.',
    items: [
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
    ],
  },

  comparisons: [
    {
      heading: 'High-Low vs. Conventional Power Packs',
      description: 'Understanding the mechanical advantage of dual-pump logic is critical for plant profitability.',
      columns: [{ heading: 'Feature' }, { heading: 'High-Low Hydraulic Power Packs' }, { heading: 'Conventional Single-Pump Units' }],
      rows: [
        { feature: 'Pump Architecture', values: [{ text: 'Dual tandem pumps (1 High Flow, 1 High Pressure)', highlight: true }, { text: 'Single Pump (Fixed displacement)' }] },
        { feature: 'Motor Size Required', values: [{ text: 'Extremely Small (Highly energy efficient)' }, { text: 'Massively Oversized (Highly inefficient)' }] },
        { feature: 'Heat Generation', values: [{ text: 'Very Low (Fluid bypasses to tank at low pressure)' }, { text: 'Extremely High (Fluid shears through relief valves)' }] },
        { feature: 'Operating Cycle Speed', values: [{ text: 'Fast approach, controlled slow pressing' }, { text: 'Constant speed throughout the stroke' }] },
        { feature: 'Primary Application', values: [{ text: 'Hydraulic presses, forging, metal stamping' }, { text: 'Constant-load applications' }] },
        { feature: 'Operating Cost', values: [{ text: 'Incredibly Low (Saves massive amounts of electricity)' }, { text: 'Very High' }] },
      ],
    }
  ],
  technicalSpecs: {
    heading: 'Technical Specifications Framework',
    description: 'Our high-low systems are mathematically calibrated to provide exact unloading sequencing for maximum efficiency.',
    tableTitle: 'Standard Capabilities',
    primaryCta: { label: 'REQUEST SPECS', href: '#' },
    secondaryCta: { label: 'VIEW MORE', href: '#' },
    rows: [
      { parameter: 'Pump Architecture', value: 'Tandem (Gear Pump + Radial/Axial Piston Pump)' },
      { parameter: 'High Flow Stage (Low Pressure)', value: 'Up to 300+ LPM @ 30 to 70 Bar' },
      { parameter: 'Low Flow Stage (High Pressure)', value: 'Up to 50 LPM @ 350 to 500 Bar' },
      { parameter: 'Electric Motor Ratings', value: '3 HP to 150+ HP (3-Phase AC)' },
      { parameter: 'Reservoir Capacity', value: '50 Liters to 2000+ Liters (Custom Fabricated)' },
      { parameter: 'Logic Control', value: 'Pilot-operated unloading valves, solenoid override available' },
      { parameter: 'Cooling Integration', value: 'Air-cooled, Water-cooled, or standalone offline cooling circuits' },
    ],
  },
  industries: {
    heading: 'Industries Served',
    description: 'Our custom dual-pump power units are the primary fluid generation engines for heavy fabrication and metal forming:',
    items: [
      {
        icon: <Hammer className="w-6 h-6" />,
        name: 'Heavy Forging',
        description: 'Providing extreme high-pressure/low-flow logic to generate the massive tonnages required to shape red-hot steel.',
        href: '#'
      },
      {
        icon: <Settings className="w-6 h-6" />,
        name: 'Sheet Metal & Stamping',
        description: 'Supplying rapid-approach power packs to decrease machine cycle times and dramatically increase parts-per-hour output.',
        href: '#'
      },
      {
        icon: <Box className="w-6 h-6" />,
        name: 'Steel Industry',
        description: 'Delivering robust, continuous-duty power units for heavy-duty metal shearing and bending operations.',
        href: '#'
      },
      {
        icon: <Cog className="w-6 h-6" />,
        name: 'Industrial Automation',
        description: 'Designing highly compact, energy-efficient power units for automated robotic clamping and pressing cells.',
        href: '#'
      },
    ],
  },
  engineering: {
    heading: 'Engineering Considerations (Specifying High-Low Systems)',
    description: "Our Custom Hydraulic System Design team mathematically guarantees the efficiency of your press machine.",
    items: [
      {
        label: 'A',
        title: 'Pump & Motor Sizing',
        description: 'This is a delicate mathematical balance. We calculate the exact volume required for your desired "fast approach" time to size the low-pressure gear pump. Then, we calculate the exact fluid volume required to maintain the pressing speed at maximum tonnage to size the high-pressure radial piston pump. Finally, we calculate the combined horsepower draw exactly at the unloading point to specify the smallest possible electric motor.',
      },
      {
        label: 'B',
        title: 'Unloading Pressure Management',
        description: 'If the unloading valve is set too low, the large pump will dump to the tank before the press reaches the workpiece, causing the cylinder to crawl slowly. If set too high, the electric motor will stall and trip the breaker. We utilize highly precise, pilot-operated unloading valves integrated into custom Manifold Blocks to ensure exact sequence timing.',
      },
      {
        label: 'C',
        title: 'Heat Generation & Cooling',
        description: 'Because the large pump unloads its fluid directly to the tank at near-zero pressure, the oil does not shear across a high-pressure relief valve. This inherently prevents heat generation. However, for continuous 24/7 pressing operations, we still integrate highly efficient shell-and-tube water coolers or air-blast heat exchangers to guarantee absolute thermal stability.',
      },
    ],
  },
  manufacturing: {
    heading: 'Manufacturing & Quality Process',
    description: 'Precision machining and rigorous testing ensure your unloading logic works perfectly every single cycle.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Precision Valve Assembly',
        description: 'High-Low logic relies entirely on the rapid shifting of the unloading valve. We CNC-machine custom aluminum and steel manifolds to house these cartridge valves, eliminating exterior pipework and preventing pressure drops.',
      },
      {
        icon: <Box className="w-6 h-6" />,
        title: 'Laser Alignment',
        description: 'The electric motor is coupled to the tandem dual-pump bracket using laser alignment tools to ensure absolute concentricity, eliminating vibration and preventing shaft seal blowouts.',
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: 'Simulated Press Testing',
        description: '100% of our High-Low power packs undergo rigorous testing on our simulated press rigs. We verify the exact millisecond the unloading valve triggers, ensuring a seamless transition from high-speed approach to high-pressure pressing.',
      },
    ],
    midCta: {
      heading: 'Need to Retrofit an Old Press Machine?',
      description: 'We can replace your single pump system with a dual-pump high-low system.',
      primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/' },
    }
  },
  spotlights: [
    {
      badge: 'PROJECT SPOTLIGHT',
      heading: 'Energy Efficiency Retrofit for a 400-Ton Deep Drawing Press',
      subheading: 'Automotive Stamping Supplier — Sanand',
      stats: [
        { value: '65%', label: 'Electrical Cost Reduction' },
        { value: '40°C', label: 'Drop in Oil Temp' }
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "An automotive stamping supplier operated a 400-ton press powered by an outdated single-pump system and a massive 80 HP motor. The motor constantly drew peak amperage, the hydraulic oil boiled past 85°C, and massive electricity bills decimated profit margins.",
        },
        {
          number: '02',
          title: 'The Solution',
          description: "Honeywell performed a complete system teardown and designed a custom High-Low Hydraulic Power Pack. By implementing dual-pump unloading logic, we replaced the 80 HP motor with a tiny 25 HP motor, while perfectly maintaining the exact same 6-second cycle time.",
        },
        {
          number: '03',
          title: 'The Outcome',
          description: "Electrical consumption dropped by 65%. Oil temperatures stabilized naturally at 45°C without the use of an industrial chiller, achieving a complete return on investment within 7 months purely from energy savings.",
        },
      ]
    }
  ],
  relatedProducts: {
    description: 'Explore our master category of power packs and complementary industrial components.',
    items: [
      {
        title: '3 Phase AC Power Packs',
        description: 'Standard continuous-duty fluid generation units.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/hydraulic-power-pack-single-phase.webp',
        href: '/products/hydraulic-power-packs/3-phase-hydraulic-power-packs/',
        ctaText: 'View Details',
      },
      {
        title: 'Double Acting Hydraulic Cylinders',
        description: 'High-pressure cylinders for press machines and industrial automation.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/double-acting-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/double-acting-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'Custom Manifold Blocks',
        description: 'Bespoke unloading logic blocks CNC-machined to exact specifications.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/custom-manifold-block-cnc-machined.webp',
        href: '/products/manifold-blocks/custom-manifold-blocks/',
        ctaText: 'View Details',
      }
    ],
  },
  faqs: [
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
  ],
  cta: {
    title: 'Ready to eliminate energy waste with a High-Low hydraulic power pack?',
    description: 'Dual-pump unloading circuits that cut electrical consumption by up to 50% on press machines and injection moulding equipment.',
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/',
    secondaryCtaText: 'Talk to an Engineer',
    secondaryCtaHref: '/contact-us/',
  },
};
