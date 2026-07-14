import React from 'react';
import {
  Zap,
  Box,
  Thermometer,
  Truck,
  CheckCircle2,
  Activity,
  Cog,
} from 'lucide-react';
import type { ProductPageData } from '@/components/product-page/types';

export const dcMiniPowerPackData: ProductPageData = {
  seo: {
    title: 'DC Hydraulic Power Pack Manufacturer | 12V & 24V Mini Units',
    description: 'Expert DC hydraulic power pack manufacturer. We supply 12V and 24V mini hydraulic power units for tipper trucks, tail lifts, and mobile material handling.',
    url: '/products/hydraulic-power-packs/dc-mini-power-packs',
    image: '/images/products/hydraulic-power-packs/hydraulic-power-pack-with-multiple-solenoid-valve.webp',
  },
  schema: {
    productName: 'DC Mini Power Packs',
    category: 'Hydraulic Power Packs',
    properties: [
      { name: 'Motor Input', value: '12V / 24V DC' },
      { name: 'Max Pressure', value: '250 Bar (3600 PSI)' },
      { name: 'Duty Cycle', value: 'Intermittent (S2/S3)' }
    ]
  },
  hero: {
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products/' },
      { label: 'Hydraulic Power Packs', href: '/products/hydraulic-power-packs/' },
    ],
    currentPage: 'DC Mini Power Packs',
    subtitle: 'DC Mini Power Packs',
    h1: 'DC Hydraulic Power Pack Manufacturer',
    description: 'Extreme hydraulic force for battery-operated machinery. Honeywell Hydraulics is a premier DC hydraulic power pack manufacturer in Gujarat, engineering ultra-compact 12V and 24V mini hydraulic power units for the transportation and material handling sectors. Designed exclusively for intermittent mobile operations, our space-saving DC units deliver massive lifting power directly from standard vehicle batteries, providing the mechanical backbone for tipper trucks, tail lifts, and mobile dock levelers.',
    image: {
      src: '/images/products/dc-hydraulic-power-pack-manufacturer.webp',
      alt: 'DC Hydraulic Power Pack Manufacturer in Ahmedabad - 12V and 24V mini power units by Honeywell Hydraulics',
    },
    primaryCta: { label: 'DOWNLOAD DC SPECS', href: '#' },
    secondaryCta: { label: 'VIEW TECHNICAL SPECS', href: '#technical-specifications' },
    keySpecs: [
      { label: 'Duty Cycle', value: 'Intermittent (S2/S3)' },
      { label: 'Motor Input', value: '12V / 24V DC' },
      { label: 'Max Pressure', value: '250 Bar (3600 PSI)' },
      { label: 'Applications', value: 'Mobile / Trucks' },
    ],
  },
  overview: {
    heading: 'What Is A DC Mini Hydraulic Power Pack?',
    content: (
      <>
        <p>
          When fluid power is required on a highway, inside a delivery truck, or on a remote construction site, standard AC grid electricity is unavailable.
        </p>
        <p>
          A <strong className="text-honeywell-navy">DC Mini Hydraulic Power Pack</strong> is a completely self-contained, micro-fluid-generation system designed to operate exclusively on direct current (DC) battery power. Unlike massive factory power units that weigh hundreds of kilograms, these mini units are engineered for absolute space efficiency.
        </p>
        <p>
          As a leading <strong>compact hydraulic power unit manufacturer</strong>, we design these systems around a central, CNC-machined manifold block. This central block houses the hydraulic pump, the directional logic valves, and the relief valves. The DC electric motor is bolted directly to one side of the block, and a small plastic or steel fluid reservoir is bolted to the other. The resulting unit is often small enough to be carried by hand, yet powerful enough to lift a 10-ton dump truck bed.
        </p>
      </>
    ),
  },
  keyFeatures: {
    heading: 'How DC Hydraulic Power Packs Work',
    description: 'The engineering challenge of a mini DC power pack is generating high pressure from limited electrical amperage and highly constrained physical space.',
    items: [
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'A. Battery Power & DC Motors',
        description: 'The prime mover is a 12V or 24V DC electric motor wired directly to the vehicle\'s battery or alternator system. These motors are designed for high starting torque to immediately force hydraulic fluid through the system under full load. However, because they draw immense amperage from the battery, they are strictly rated for intermittent duty.',
      },
      {
        icon: <Box className="w-6 h-6" />,
        title: 'B. Integrated Central Manifolds',
        description: 'To save space, there are almost no external pipes or hoses. The fluid logic is entirely integrated into a central aluminum or steel block. The pump is submerged inside the tank, pulling fluid and pushing it directly into the manifold\'s internal CNC-drilled galleries, where it is routed to the lifting cylinders by integrated solenoid valves.',
      },
      {
        icon: <Thermometer className="w-6 h-6" />,
        title: 'C. Compact Reservoirs',
        description: 'Because DC units operate intermittently, the hydraulic fluid does not have time to reach boiling temperatures. Therefore, massive steel heat-sink tanks are unnecessary. We utilize highly compact, cylindrical steel or translucent plastic reservoirs (typically 2 to 15 liters), which perfectly fit under truck chassis or inside small control cabinets.',
      },
    ],
  },
  comparisons: [
    {
      heading: '12V vs 24V Hydraulic Power Packs',
      description: "Choosing the correct DC voltage dictates the motor's lifespan and the electrical draw on your vehicle's alternator.",
      columns: [{ heading: 'Feature' }, { heading: '12V Hydraulic Power Packs' }, { heading: '24V Hydraulic Power Packs' }],
      rows: [
        { feature: 'Typical Application', values: [{ text: 'Light commercial vehicles, pickup trucks, small trailers' }, { text: 'Heavy commercial trucks, massive tippers, heavy stackers' }] },
        { feature: 'Amperage Draw', values: [{ text: 'Very High (Requires thick gauge wiring)' }, { text: 'Low (Half the amperage of a 12V system for the same HP)', highlight: true }] },
        { feature: 'Motor Heat Generation', values: [{ text: 'High (Prone to overheating during long duty cycles)' }, { text: 'Lower (Runs cooler, allowing slightly longer duty cycles)' }] },
        { feature: 'Motor Torque', values: [{ text: 'Adequate for standard loads' }, { text: 'Extremely high starting torque' }] },
        { feature: 'Battery Requirement', values: [{ text: 'Standard single automotive battery' }, { text: 'Dual batteries wired in series (or dedicated 24V system)' }] },
      ],
    },
    {
      heading: 'DC vs. 3 Phase Hydraulic Power Packs',
      description: 'It is critical to understand the stark engineering divide between mobile battery power and continuous factory grid power.',
      columns: [{ heading: 'Feature' }, { heading: 'DC Mini Power Packs' }, { heading: '3 Phase AC Power Packs' }],
      rows: [
        { feature: 'Power Source', values: [{ text: 'Vehicle Battery (12V / 24V DC)' }, { text: 'Factory Grid (415V / 440V AC)' }] },
        { feature: 'Duty Cycle', values: [{ text: 'Strictly Intermittent (e.g., 2 minutes on)' }, { text: '100% Continuous (24 hours/day)', highlight: true }] },
        { feature: 'Physical Footprint', values: [{ text: 'Ultra-compact, portable' }, { text: 'Massive, heavy, floor-mounted' }] },
        { feature: 'Reservoir Size', values: [{ text: 'Tiny (2 to 15 Liters)' }, { text: 'Massive (50 to 5000+ Liters)' }] },
        { feature: 'Primary Environment', values: [{ text: 'Highways, remote sites, inside trucks' }, { text: 'Indoor automated factories, GIDCs' }] },
      ],
    }
  ],
  technicalSpecs: {
    heading: 'Technical Specifications Framework',
    description: 'Our mini power packs are highly customizable and designed for space-constrained mobile integration.',
    tableTitle: 'Standard Capabilities',
    primaryCta: { label: 'REQUEST SPECS', href: '#' },
    secondaryCta: { label: 'VIEW MORE', href: '#' },
    rows: [
      { parameter: 'Electric Motor Inputs', value: '12V DC or 24V DC' },
      { parameter: 'Motor Power Ratings', value: '0.5 kW to 3.0 kW (Standard up to 4.5 HP)' },
      { parameter: 'Pump Architecture', value: 'High-efficiency micro gear pumps' },
      { parameter: 'Maximum Operating Pressure', value: 'Up to 250 Bar (3600 PSI)' },
      { parameter: 'Reservoir Capacity', value: '2 Liters to 25 Liters (Cylindrical or Square, Steel or Translucent Plastic)' },
      { parameter: 'Mounting Orientation', value: 'Horizontal or Vertical Mounting' },
      { parameter: 'Control Logic', value: '2/2, 3/2, or 4/3 solenoid directional valves integrated into central block' },
      { parameter: 'Duty Cycle', value: 'Strictly Intermittent (S2 / S3 ratings)' },
    ],
  },
  industries: {
    heading: 'Industries Served',
    description: 'Our custom DC mobile power units are the primary fluid generation engines for the transportation and logistics sectors:',
    items: [
      {
        icon: <Truck className="w-6 h-6" />,
        name: 'Transportation & Commercial Vehicles',
        description: 'Supplying ultra-reliable power units for massive fleets of commercial delivery trucks and heavy haulers.',
        href: '#'
      },
      {
        icon: <Box className="w-6 h-6" />,
        name: 'Material Handling & Logistics',
        description: 'Designing highly compact 24V units for electric pallet jacks, stackers, and mobile elevating work platforms.',
        href: '#'
      },
      {
        icon: <CheckCircle2 className="w-6 h-6" />,
        name: 'Municipal Equipment',
        description: 'Delivering weather-resistant power packs for garbage trucks, street sweepers, and snowplows operating far from grids.',
        href: '#'
      },
      {
        icon: <Activity className="w-6 h-6" />,
        name: 'Mobile Agricultural Machinery',
        description: 'Providing battery-operated actuation for remote farm implements and trailer lifts.',
        href: '#'
      },
    ],
  },
  engineering: {
    heading: 'Engineering Considerations (Specifying DC Systems)',
    description: "Our Custom Hydraulic System Design team analyzes your vehicle's electrical limitations before engineering a DC power pack.",
    items: [
      {
        label: 'A',
        title: 'Battery Draw & Wiring Harnesses',
        description: 'A 12V DC motor generating high pressure can easily draw over 200 Amps. If the wiring harness is too thin, the cables will melt and catch fire. We calculate the exact amp draw required by your load and specify the necessary heavy-gauge wiring and heavy-duty starter solenoids to ensure absolute electrical safety.',
      },
      {
        label: 'B',
        title: 'Intermittent Duty Cycles (S2 / S3 Ratings)',
        description: 'DC motors generate extreme internal heat and do not have internal cooling fans. They are strictly rated for short bursts of operation (e.g., S2 - 2 minutes continuous). We carefully calculate your machine\'s cycle time. If your tipper truck takes 45 seconds to raise, our motor will perform flawlessly. If you attempt to run a DC motor for 15 continuous minutes, it will burn out.',
      },
      {
        label: 'C',
        title: 'Environmental Protection & Packaging',
        description: 'Mobile units operate under truck chassis, exposed to mud, road salt, and heavy rain. We utilize severe-duty weather-sealed DC electric motors (IP65/IP67 rated), install rubberized protective covers over the solenoids, and specify heavy plastic or epoxy-coated steel reservoirs to completely eliminate rust.',
      },
    ],
  },
  manufacturing: {
    heading: 'Manufacturing & Testing Process',
    description: 'We test every DC motor under simulated heavy battery draw conditions to ensure mobile reliability.',
    steps: [
      {
        icon: <Cog className="w-6 h-6" />,
        title: 'Central Manifold Machining',
        description: 'We utilize advanced 5-axis CNC machining centers to drill the complex internal porting of the central manifold block, ensuring absolute zero-leakage between the pump, valves, and tank.',
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: 'Electrical Load Simulation',
        description: 'We test every DC motor under simulated heavy battery draw conditions, verifying that the starter solenoids and motor windings can handle the extreme amperage spikes required to lift maximum payloads.',
      },
      {
        icon: <Activity className="w-6 h-6" />,
        title: 'Pressure & Duty Validation',
        description: '100% of our mini power packs undergo a pressurized run-in test. We cycle the unit repeatedly to verify the thermal limits of the DC motor and the holding integrity of the directional valves.',
      },
    ],
    midCta: {
      heading: 'Need a Custom DC Mini Power Pack?',
      description: 'We can design custom 12V and 24V units for your specific mobile lifting requirements.',
      primaryCta: { label: 'REQUEST A QUOTE', href: '/request-quote/' },
    },
  },
  spotlights: [
    {
      badge: 'PROJECT SPOTLIGHT',
      heading: 'Custom 24V DC Power Pack for Heavy Commercial Tail Lifts',
      subheading: 'Logistics OEM',
      stats: [
        { value: '100%', label: 'Reduction in Motor Burnouts' },
        { value: '50%', label: 'Reduction in Battery Amperage Draw' }
      ],
      phases: [
        {
          number: '01',
          title: 'The Challenge',
          description: "A national logistics fleet utilized 12V tail lifts to load heavy pallets. Used dozens of times per hour, the 12V motors constantly overheated and burned out due to massive amp draw on the delivery trucks' batteries.",
        },
        {
          number: '02',
          title: 'The Solution',
          description: 'We upgraded the fleet to custom 24V DC Hydraulic Power Packs with integrated thermal overload protection. The 24V system effectively halved the amperage draw, running significantly cooler and extending motor life tenfold.',
        },
        {
          number: '03',
          title: 'The Outcome',
          description: 'The fleet eliminated tail lift motor failures entirely, reducing roadside maintenance calls by 100% and significantly speeding up the pallet loading cycle.',
        }
      ]
    }
  ],
  productName: 'DC Mini Power Packs',
  relatedProducts: {
    description: 'Explore our other hydraulic power pack and mobile equipment solutions.',
    items: [
      {
        title: 'High-Low Logic Power Packs',
        description: 'Specialized power units for press machinery.',
        category: 'Hydraulic Power Packs',
        imageSrc: '/images/products/hydraulic-power-packs/high-low-power-pack.webp',
        href: '/products/hydraulic-power-packs/high-low-hydraulic-power-packs/',
        ctaText: 'View Details',
      },
      {
        title: 'Single Acting Hydraulic Cylinders',
        description: 'Gravity-return cylinders perfect for tail lifts and mobile applications.',
        category: 'Hydraulic Cylinders',
        imageSrc: '/images/products/hydraulic-cylinders/single-acting-hydraulic-cylinder-manufacturer.webp',
        href: '/products/hydraulic-cylinders/single-acting-hydraulic-cylinders/',
        ctaText: 'View Details',
      },
      {
        title: 'CETOP Manifold Blocks',
        description: 'Precision ISO 4401 compliant subplates.',
        category: 'Manifold Blocks',
        imageSrc: '/images/products/manifold-blocks/cetop-manifold-block-iso-4401.webp',
        href: '/products/manifold-blocks/cetop-manifold-blocks/',
        ctaText: 'View Details',
      }
    ],
  },
  faqs: [
    {
      question: 'Can a 12V DC power pack lift a heavy dump truck?',
      answer: 'Yes. The hydraulic pressure (which dictates the lifting force) is generated by the pump, not the voltage. A 12V motor can easily spin a small pump to generate 3000 PSI, which is enough to lift a massive load. The 12V system will simply draw more amperage from the battery than a 24V system to do the same work.',
    },
    {
      question: 'Why does my DC power pack motor get so hot?',
      answer: 'DC motors do not have internal cooling fans like AC motors, and they draw massive electrical amperage. They are designed for short bursts of work (intermittent duty). If you run the motor continuously for several minutes, it will overheat and eventually burn out the internal windings.',
    },
    {
      question: 'Can I use a DC power pack for a factory conveyor belt?',
      answer: 'No. A factory conveyor requires continuous, 24/7 rotational power. A DC power pack will burn out within minutes. For continuous indoor factory applications, you must use a 3-Phase Hydraulic Power Pack.',
    },
    {
      question: 'Do you manufacture the central manifolds for the DC units?',
      answer: 'Yes. We CNC-machine the central aluminum logic blocks in-house. This allows us to create ultra-compact units with perfectly integrated directional and relief valving, eliminating external pipes and leaks.',
    },
  ],
  cta: {
    title: 'Need a compact DC mini hydraulic power pack?',
    description: '12V and 24V battery-powered units for mobile equipment, tailgates, and hydraulic lifts. Compact design, maximum reliability.',
    primaryCtaText: 'REQUEST A QUOTE',
    primaryCtaHref: '/request-quote/',
    secondaryCtaText: 'Talk to an Engineer',
    secondaryCtaHref: '/contact-us/',
  },
};
