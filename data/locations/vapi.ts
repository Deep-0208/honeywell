import { LocationPageData } from './gujarat';

export const vapiData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Vapi | Paper & Packaging',
    description: 'Leading hydraulic cylinder manufacturer supplying Vapi, Sarigam & Umbergaon. Specialized cylinders for paper mills, packaging machinery & chemical processing.',
    canonical: 'https://honeywellhydraulics.in/locations/vapi/',
    openGraph: {
      title: 'Hydraulic Cylinders for Vapi\'s Paper, Packaging & Chemical Industries',
      description: 'Leading hydraulic cylinder manufacturer supplying Vapi, Sarigam & Umbergaon. Specialized cylinders for paper mills, packaging machinery & chemical processing.',
      url: 'https://honeywellhydraulics.in/locations/vapi/',
      images: [
        {
          url: '/images/locations/vapi-paper-packaging-hydraulics.jpg',
          width: 1200,
          height: 630,
          alt: 'Hydraulic cylinders for paper mills and packaging machinery in Vapi GIDC Gujarat',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Vapi | Paper & Packaging',
      description: 'Supplying Vapi, Sarigam & Umbergaon GIDC with hydraulic cylinders for paper mills and packaging.',
      images: ['/images/locations/vapi-paper-packaging-hydraulics.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer in Vapi',
      'hydraulic cylinder manufacturer Vapi',
      'hydraulic cylinder Vapi GIDC',
      'hydraulic power pack manufacturer Vapi',
      'paper mill hydraulic cylinders Vapi',
      'hydraulic cylinder Sarigam GIDC',
      'hydraulic cylinder supplier South Gujarat',
      'hydraulic cylinder repair Vapi',
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://honeywellhydraulics.in/locations/vapi/#service',
        serviceType: 'Hydraulic Cylinder Manufacturing & Supply',
        provider: {
          '@type': 'ManufacturingBusiness',
          name: 'Honeywell Hydraulics',
          telephone: '+91-9924343873',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC',
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            postalCode: '382430',
            addressCountry: 'IN'
          }
        },
        areaServed: {
          '@type': 'City',
          name: 'Vapi',
          containedInPlace: {
            '@type': 'State',
            name: 'Gujarat'
          }
        },
        description: 'Custom hydraulic cylinders and power packs engineered for paper mills, packaging machinery, chemical processing, and plastics manufacturing across Vapi, Sarigam, and Umbergaon GIDC estates in South Gujarat.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://honeywellhydraulics.in/locations/vapi/',
        name: 'Hydraulic Cylinder Manufacturer in Vapi | Honeywell Hydraulics',
        url: 'https://honeywellhydraulics.in/locations/vapi/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://honeywellhydraulics.in/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://honeywellhydraulics.in/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Vapi', item: 'https://honeywellhydraulics.in/locations/vapi/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you supply hydraulic cylinders for paper baling presses in Vapi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we manufacture heavy-duty welded hydraulic cylinders rated up to 350 Bar specifically for paper baling presses. Our cylinders feature hardened EN19 rods and high-temperature seals to handle the continuous, high-force compression cycles typical of paper mill baling operations.' } },
          { '@type': 'Question', name: 'Do you deliver hydraulic equipment to Sarigam and Umbergaon GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We dispatch from our Kathwada GIDC facility in Ahmedabad directly to Vapi, Sarigam, and Umbergaon GIDC estates. Standard transit time is 1-2 days via express transport along the NH-48 corridor.' } },
          { '@type': 'Question', name: 'Can your cylinders resist chemical corrosion in Vapi\'s chemical processing plants?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. For chemical environments, we manufacture cylinders with stainless steel 304/316 rods, Viton and PTFE composite seals, and marine-grade epoxy barrel coatings. This combination prevents corrosion from acidic fumes and aggressive chemicals.' } },
          { '@type': 'Question', name: 'Do you manufacture hydraulic cylinders for packaging and lamination machinery?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we supply precision hydraulic cylinders for carton forming presses, lamination machines, corrugated box manufacturing equipment, and flexible packaging lines. Our cylinders provide consistent pressing force with zero drift for uniform product quality.' } },
          { '@type': 'Question', name: 'Can you repair and refurbish hydraulic cylinders for industries in Vapi?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we offer complete cylinder repair services — seal replacement, barrel re-honing, rod re-chroming, and full teardown and rebuild. Ship your damaged cylinder to our Kathwada facility and we return it to factory specifications with a fresh test certificate.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING VAPI & SOUTH GUJARAT',
    title: 'Hydraulic Cylinder Manufacturer for Vapi',
    subtitle: 'Vapi is South Gujarat\'s industrial powerhouse — home to India\'s largest concentration of paper mills, packaging manufacturers, and chemical processing plants. Honeywell Hydraulics supplies custom-engineered hydraulic cylinders and power packs to Vapi, Sarigam, and Umbergaon GIDC estates, keeping your paper baling presses, packaging lines, and chemical equipment running at peak performance.',
    trustChips: ['Paper Mill Expertise', 'Chemical Resistant Options', 'Express South Gujarat Delivery'],
    image: {
      src: '/images/locations/vapi-paper-packaging-hydraulics.jpg',
      alt: 'Hydraulic cylinders for paper mills and packaging machinery in Vapi GIDC',
    },
    ctas: {
      primary: { label: 'GET A QUOTE FOR VAPI INDUSTRIES', href: '/request-quote/#quote-form' },
      secondary: { label: 'VIEW CYLINDER RANGE', href: '/products/hydraulic-cylinders/' },
    },
  },
  benefits: {
    title: 'Engineered for Vapi\'s Paper & Packaging Belt',
    description: 'Vapi\'s industries demand heavy-duty, corrosion-resistant hydraulic equipment that can withstand continuous production cycles in paper, packaging, and chemical environments.',
    items: [
      {
        id: 'paper-press',
        title: 'Paper Mill Press Expertise',
        description: 'We engineer heavy-duty welded cylinders with hardened EN19 rods and reinforced barrels specifically for the extreme compression forces in paper baling, roll handling, and cutting operations.',
      },
      {
        id: 'corrosion-proof',
        title: 'Chemical & Moisture Resistance',
        description: 'For Vapi\'s chemical corridor, we offer stainless steel rods, Viton seals rated to 200°C, and marine-grade epoxy coatings that resist degradation from acidic fumes, chemicals, and high-humidity environments.',
      },
      {
        id: 'express-delivery',
        title: 'Express Delivery to South Gujarat',
        description: 'Our Kathwada GIDC facility dispatches directly to Vapi, Sarigam, and Umbergaon via the NH-48 corridor. Standard transit: 1-2 days. Emergency same-day dispatch available for critical breakdowns.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Solutions for Vapi\'s Industries',
    description: 'Heavy-duty fluid power components engineered for the demanding paper, packaging, chemical, and plastics sectors of South Gujarat. All manufactured and 100% pressure-tested.',
    items: [
      {
        id: 'press-cylinders',
        title: 'Heavy-Duty Press Cylinders',
        description: 'Welded and tie-rod cylinders rated up to 350 Bar for paper baling presses, packaging machinery, and chemical processing equipment.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'power-packs',
        title: 'Industrial Power Packs',
        description: 'Enclosed hydraulic power units with multi-stage filtration, designed for dusty paper mill and packaging environments.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifolds',
        title: 'Custom Manifold Blocks',
        description: 'CNC-machined CETOP manifold blocks that consolidate complex circuits, reducing leak points on multi-actuator packaging and paper processing lines.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Supporting Vapi\'s Core Manufacturing Sectors',
    description: 'The Vapi-Sarigam-Umbergaon industrial corridor spans paper, packaging, chemicals, plastics, and pharma. We provide specialized hydraulic solutions for each sector.',
    items: [
      {
        id: 'paper',
        title: 'Paper Mills & Pulp Processing',
        description: 'Heavy-duty hydraulic cylinders for baling presses, roll handling equipment, paper cutting machines, and pulp processing systems across Vapi\'s extensive paper mill cluster.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'packaging',
        title: 'Packaging & Corrugation',
        description: 'Precision cylinders for carton forming presses, lamination machines, corrugated box manufacturing equipment, and flexible packaging lines serving Vapi\'s packaging sector.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'chemical',
        title: 'Chemical Processing (Vapi & Sarigam)',
        description: 'Corrosion-resistant hydraulic systems with SS316 rods and Viton seals for reactor mixing, valve actuation, and processing equipment in Vapi\'s chemical manufacturing corridor.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'plastics',
        title: 'Plastics & Rubber Processing',
        description: 'High-cycle hydraulic cylinders for injection moulding machines, blow moulding equipment, extrusion lines, and rubber component manufacturing in Sarigam GIDC.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'pharma',
        title: 'Pharmaceutical Manufacturing (Umbergaon)',
        description: 'Clean, washdown-ready hydraulic components for pharmaceutical packaging, tableting, and filling machinery meeting GMP hygiene requirements.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'engineering',
        title: 'General Engineering & Fabrication',
        description: 'Robust hydraulic presses, bending equipment, and material handling cylinders for the general engineering and fabrication units across the Vapi industrial belt.',
        href: '/products/hydraulic-power-packs/',
      },
    ],
  },
  caseStudy: {
    title: 'Paper Baling Press Upgrade in Vapi GIDC',
    challenge: 'A major paper mill in Vapi GIDC was experiencing frequent seal failures on their baling press cylinders due to the extreme compression forces and continuous 24/7 operation. Downtime for cylinder replacement was costing them significant daily production losses.',
    solution: 'We engineered custom welded cylinders with reinforced EN19 alloy steel barrels, hardened and chrome-plated rods, and high-temperature Viton seals designed for the specific pressure and cycle profile of their baling press. We also supplied a high-low power pack for rapid approach and slow, high-force compression.',
    resultStat: '3x',
    resultLabel: 'Increase in cylinder service life between seal changes',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage in South Gujarat',
    description: 'We supply engineered hydraulic components from our Kathwada GIDC facility to all major industrial estates across the Vapi-Valsad industrial corridor — 1-2 day transit via NH-48.',
    items: [
      { id: 'vapi', city: 'Vapi GIDC', description: 'South Gujarat\'s largest industrial estate — heavy-duty cylinders for paper mills, chemicals, engineering, and packaging manufacturers.' },
      { id: 'sarigam', city: 'Sarigam GIDC', description: 'Chemical-resistant hydraulic solutions for Sarigam\'s plastics, chemicals, and industrial machinery manufacturers.' },
      { id: 'umbergaon', city: 'Umbergaon GIDC', description: 'Precision cylinders for pharmaceutical, paper product, and heavy machinery industries in Umbergaon.' },
      { id: 'daman', city: 'Daman & Silvassa', description: 'Supplying hydraulic equipment to the engineering, plastics, and food processing sectors in the adjoining Daman and Silvassa industrial zones.' },
      { id: 'valsad', city: 'Valsad & Dharampur', description: 'General industrial hydraulic supply for the manufacturing units across the wider Valsad district.' },
      { id: 'bilimora', city: 'Bilimora & Navsari', description: 'Hydraulic components for food processing, agricultural equipment, and small-scale engineering in the Navsari belt.' },
      { id: 'pardi', city: 'Pardi GIDC', description: 'Supporting the chemical, engineering, and packaging manufacturers in Pardi\'s growing industrial estate.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Vapi\'s Paper & Packaging Industry',
    description: '"Our baling presses run 24/7 and the previous supplier\'s cylinders barely lasted six months. Honeywell Hydraulics engineered custom cylinders that have now exceeded 18 months of continuous operation. Their understanding of paper mill pressure demands is exceptional." — Production Head, Paper Mill, Vapi GIDC.',
    items: [
      { id: 'tf1', title: 'Industry-Specific Engineering', description: 'We don\'t sell generic cylinders. We engineer solutions based on your specific machine\'s pressure profile, cycle rate, and operating environment.' },
      { id: 'tf2', title: '100% Pressure Tested', description: 'Every cylinder is hydrostatically tested at 1.5x rated working pressure. Full EN 10204 Type 3.1 material certificates provided on request.' },
      { id: 'tf3', title: 'Rapid South Gujarat Logistics', description: 'Express delivery to Vapi, Sarigam, and Umbergaon in 1-2 days. Emergency same-day dispatch available for critical production breakdowns.' },
    ],
  },
  faqs: [
    { question: 'Can you supply hydraulic cylinders for paper baling presses in Vapi?', answer: 'Yes, we manufacture heavy-duty welded hydraulic cylinders rated up to 350 Bar specifically for paper baling presses. Our cylinders feature hardened EN19 rods and high-temperature seals to handle the continuous, high-force compression cycles typical of paper mill baling operations.' },
    { question: 'Do you deliver hydraulic equipment to Sarigam and Umbergaon GIDC?', answer: 'Absolutely. We dispatch from our Kathwada GIDC facility in Ahmedabad directly to Vapi, Sarigam, and Umbergaon GIDC estates. Standard transit time is 1-2 days via express transport along the NH-48 corridor.' },
    { question: 'Can your cylinders resist chemical corrosion in Vapi\'s chemical processing plants?', answer: 'Yes. For chemical environments, we manufacture cylinders with stainless steel 304/316 rods, Viton and PTFE composite seals, and marine-grade epoxy barrel coatings. This combination prevents corrosion from acidic fumes and aggressive chemicals.' },
    { question: 'Do you manufacture hydraulic cylinders for packaging and lamination machinery?', answer: 'Yes, we supply precision hydraulic cylinders for carton forming presses, lamination machines, corrugated box manufacturing equipment, and flexible packaging lines. Our cylinders provide consistent pressing force with zero drift for uniform product quality.' },
    { question: 'Can you repair and refurbish hydraulic cylinders for industries in Vapi?', answer: 'Yes, we offer complete cylinder repair services — seal replacement, barrel re-honing, rod re-chroming, and full teardown and rebuild. Ship your damaged cylinder to our Kathwada facility and we return it to factory specifications with a fresh test certificate.' },
  ],
  cta: {
    title: 'Upgrade Your Paper & Packaging Hydraulics',
    description: 'Stop losing production to hydraulic failures. Partner with Honeywell Hydraulics for factory-direct, pressure-tested cylinders engineered for Vapi\'s demanding paper, packaging, and chemical industries.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430',
    serviceAreas: 'Serving Vapi, Sarigam, Umbergaon, Daman, Silvassa, Valsad, and the entire South Gujarat industrial corridor.',
  },
};
