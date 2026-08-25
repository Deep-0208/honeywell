import { LocationPageData } from './gujarat';

export const ankleshwarData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Ankleshwar | Chemical Resistant',
    description: 'Leading hydraulic cylinder manufacturer for Ankleshwar & Panoli GIDC. Chemical-resistant SS316 cylinders for pharma, dye, and chemical processing plants.',
    canonical: 'https://honeywellhydraulics.in/locations/ankleshwar/',
    openGraph: {
      title: 'Chemical-Resistant Hydraulic Cylinders for Ankleshwar & Panoli',
      description: 'Leading hydraulic cylinder manufacturer for Ankleshwar & Panoli GIDC. Chemical-resistant SS316 cylinders for pharma, dye, and chemical processing plants.',
      url: 'https://honeywellhydraulics.in/locations/ankleshwar/',
      images: [
        {
          url: '/images/locations/ankleshwar-chemical-hydraulics.jpg',
          width: 1200,
          height: 630,
          alt: 'Chemical resistant hydraulic cylinders for Ankleshwar GIDC pharma and chemical plants',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Ankleshwar | Chemical Resistant',
      description: 'Chemical-resistant SS316 hydraulic cylinders for Ankleshwar & Panoli GIDC. Pharma & chemical processing.',
      images: ['/images/locations/ankleshwar-chemical-hydraulics.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer in Ankleshwar',
      'hydraulic cylinder manufacturer Ankleshwar',
      'hydraulic cylinder Ankleshwar GIDC',
      'hydraulic cylinder Panoli GIDC',
      'chemical resistant hydraulic cylinders Ankleshwar',
      'hydraulic power pack manufacturer Ankleshwar',
      'pharma hydraulic cylinders Gujarat',
      'hydraulic cylinder supplier Bharuch',
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://honeywellhydraulics.in/locations/ankleshwar/#service',
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
          name: 'Ankleshwar',
          containedInPlace: {
            '@type': 'State',
            name: 'Gujarat'
          }
        },
        description: 'Chemical-resistant hydraulic cylinders and power packs engineered for the pharmaceutical, chemical processing, dye manufacturing, and agrochemical industries across Ankleshwar, Panoli, and Jhagadia GIDC estates.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://honeywellhydraulics.in/locations/ankleshwar/',
        name: 'Hydraulic Cylinder Manufacturer in Ankleshwar | Honeywell Hydraulics',
        url: 'https://honeywellhydraulics.in/locations/ankleshwar/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://honeywellhydraulics.in/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://honeywellhydraulics.in/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Ankleshwar', item: 'https://honeywellhydraulics.in/locations/ankleshwar/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you manufacture SS316 hydraulic cylinders for chemical plants in Ankleshwar?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we specialize in manufacturing hydraulic cylinders with stainless steel 304/316 rods and barrels for corrosive chemical environments. We pair these with Viton seals rated to 200°C and PTFE composite backup rings to ensure long-term reliability in Ankleshwar\'s aggressive chemical processing environments.' } },
          { '@type': 'Question', name: 'Do you supply hydraulic equipment to Panoli GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We serve both Ankleshwar and Panoli GIDC estates. Our Kathwada GIDC facility in Ahmedabad is approximately 3 hours from Ankleshwar via the NH-48, enabling rapid delivery of custom-engineered hydraulic cylinders and power packs.' } },
          { '@type': 'Question', name: 'Can your cylinders be used in hazardous zones inside chemical plants?', acceptedAnswer: { '@type': 'Answer', text: 'Our hydraulic cylinders use non-sparking materials and can be paired with explosion-proof hydraulic power packs for use in classified hazardous areas. We engineer the complete system — cylinder, manifold, and power pack — to minimize ignition risk in volatile chemical environments.' } },
          { '@type': 'Question', name: 'Do you manufacture clean hydraulic components for pharmaceutical equipment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we supply hydraulic cylinders and power packs for GMP-compliant pharmaceutical manufacturing equipment, including tableting presses, filling lines, and packaging machinery. We use food-grade hydraulic fluids, stainless steel wetted parts, and washdown-ready external finishes.' } },
          { '@type': 'Question', name: 'How quickly can you deliver replacement cylinders to Ankleshwar GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'Standard transit from our Kathwada facility to Ankleshwar is 1 day via express transport. For critical breakdowns, we offer emergency same-day dispatch. We also keep your custom drawings on file for rapid re-manufacturing of replacement cylinders.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING ANKLESHWAR, PANOLI & BHARUCH',
    title: 'Hydraulic Cylinder Manufacturer for Ankleshwar',
    subtitle: 'Ankleshwar and Panoli form India\'s largest chemical and pharmaceutical manufacturing corridor. Honeywell Hydraulics engineers chemical-resistant hydraulic cylinders and power packs with SS316 components, Viton seals, and corrosion-proof coatings — purpose-built for the aggressive environments of Ankleshwar\'s chemical reactors, pharma equipment, and dye processing plants.',
    trustChips: ['SS316 Chemical Resistance', 'Pharma-Grade Clean Systems', 'Next-Day Ankleshwar Delivery'],
    image: {
      src: '/images/locations/ankleshwar-chemical-hydraulics.jpg',
      alt: 'Chemical resistant hydraulic cylinders for Ankleshwar GIDC pharmaceutical and chemical plants',
    },
    ctas: {
      primary: { label: 'GET A QUOTE FOR CHEMICAL HYDRAULICS', href: '/request-quote/#quote-form' },
      secondary: { label: 'VIEW CHEMICAL-RESISTANT CYLINDERS', href: '/products/hydraulic-cylinders/' },
    },
  },
  benefits: {
    title: 'Built for India\'s Chemical Capital',
    description: 'Standard hydraulic equipment corrodes within months in Ankleshwar\'s chemical environments. We engineer every component to survive acidic fumes, corrosive chemicals, and high-temperature processing.',
    items: [
      {
        id: 'chemical-grade',
        title: 'Chemical-Grade Materials',
        description: 'We manufacture cylinders with SS304/316 rods, stainless steel barrels, and Viton seals rated to 200°C. Marine-grade epoxy coatings protect external surfaces from acidic fumes and chemical splash.',
      },
      {
        id: 'pharma-clean',
        title: 'Pharma-Compatible Design',
        description: 'For GMP environments, we supply cylinders with food-grade hydraulic fluid compatibility, stainless steel wetted parts, and smooth, washdown-ready external finishes that meet pharmaceutical hygiene standards.',
      },
      {
        id: 'rapid-delivery',
        title: 'Next-Day Delivery to Bharuch District',
        description: 'Our Kathwada GIDC facility is approximately 3 hours from Ankleshwar. Standard delivery is next-day, with emergency same-day dispatch available for critical production breakdowns.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Solutions for Chemical & Pharma Industries',
    description: 'Specialized fluid power components engineered to survive the most aggressive chemical and pharmaceutical environments. All manufactured and 100% pressure-tested at our facility.',
    items: [
      {
        id: 'chemical-cylinders',
        title: 'Chemical-Resistant Cylinders',
        description: 'SS316 rods, Viton seals, and epoxy-coated barrels for reactor valve actuation, chemical dosing, and mixing equipment in hazardous environments.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'clean-power-packs',
        title: 'Enclosed Clean Power Packs',
        description: 'Sealed hydraulic power units with multi-stage filtration and food-grade fluid compatibility for pharmaceutical and cleanroom-adjacent applications.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifolds',
        title: 'Stainless Steel Manifold Blocks',
        description: 'Custom CNC-machined SS304 manifold blocks for chemical processing lines where standard carbon steel would corrode within weeks.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Powering Ankleshwar\'s Chemical & Pharma Corridor',
    description: 'Ankleshwar-Panoli is home to thousands of chemical and pharmaceutical manufacturing units. We engineer hydraulic solutions for each sector\'s specific corrosive and operational challenges.',
    items: [
      {
        id: 'pharma',
        title: 'Pharmaceutical & API Manufacturing',
        description: 'Clean, GMP-compatible hydraulic cylinders and power packs for tableting presses, filling lines, blister packaging, and API processing equipment across Ankleshwar\'s pharma cluster.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'chemical',
        title: 'Chemical Processing (Ankleshwar GIDC)',
        description: 'Corrosion-resistant hydraulic systems for reactor mixing, valve actuation, filter presses, and dosing equipment in Ankleshwar\'s specialty chemical manufacturing units.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'dyes',
        title: 'Dye & Pigment Manufacturing',
        description: 'Chemical-resistant hydraulic cylinders and power packs for dye reactors, filter presses, and drying equipment in Ankleshwar\'s globally significant dye manufacturing sector.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'agrochemical',
        title: 'Agrochemical Production (Panoli)',
        description: 'Heavy-duty hydraulic systems for pesticide formulation, herbicide processing, and agrochemical packaging equipment in the Panoli GIDC agrochemical cluster.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'petrochemical',
        title: 'Petrochemical & Refinery Auxiliaries',
        description: 'High-pressure hydraulic cylinders for valve actuators, pipeline equipment, and auxiliary systems serving the petrochemical operations in the Bharuch-Ankleshwar corridor.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'engineering',
        title: 'General Engineering & Fabrication',
        description: 'Robust hydraulic presses, bending equipment, and material handling systems for the engineering and fabrication units supporting Ankleshwar\'s chemical infrastructure.',
        href: '/products/hydraulic-power-packs/',
      },
    ],
  },
  caseStudy: {
    title: 'Reactor Valve Actuation in Ankleshwar GIDC',
    challenge: 'A specialty chemical manufacturer in Ankleshwar GIDC was replacing their standard carbon steel hydraulic cylinders on reactor valve actuators every 8-10 weeks. The concentrated acid fumes in the plant were rapidly corroding the piston rods and destroying conventional nitrile seals.',
    solution: 'We engineered replacement cylinders using SS316 piston rods, PTFE composite seals with Viton backup rings, and marine-grade epoxy-coated barrels. We also designed a sealed breathing system to prevent corrosive moisture from entering the cylinder during thermal cycling.',
    resultStat: '5x',
    resultLabel: 'Increase in cylinder lifespan (from 10 weeks to over 12 months)',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage in Bharuch District',
    description: 'We supply chemical-resistant hydraulic components from our Kathwada GIDC facility to all major chemical and pharma estates across the Ankleshwar-Bharuch industrial corridor.',
    items: [
      { id: 'ankleshwar', city: 'Ankleshwar GIDC', description: 'India\'s largest chemical GIDC — SS316 cylinders and chemical-resistant power packs for pharma, chemicals, and dye manufacturing.' },
      { id: 'panoli', city: 'Panoli GIDC', description: 'Corrosion-proof hydraulic systems for synthetic organic chemicals, pharma intermediates, and agrochemical processing.' },
      { id: 'jhagadia', city: 'Jhagadia GIDC', description: 'Chemical-resistant hydraulic components for the emerging chemical and engineering industries in Jhagadia.' },
      { id: 'bharuch', city: 'Bharuch City', description: 'General industrial hydraulic supply for manufacturing and processing units in the Bharuch district.' },
      { id: 'dahej', city: 'Dahej SEZ & PCPIR', description: 'Heavy-duty hydraulic equipment for the Dahej Petroleum, Chemical & Petrochemical Investment Region and Special Economic Zone.' },
      { id: 'jambusar', city: 'Jambusar & Amod', description: 'Hydraulic components for the engineering and small-scale manufacturing sectors in the wider Bharuch district.' },
      { id: 'hansot', city: 'Hansot & Vagra', description: 'Supporting the industrial and agricultural equipment sectors in the coastal Bharuch belt.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Ankleshwar\'s Chemical Industry',
    description: '"In our plant, standard hydraulic equipment is destroyed within weeks by acid fumes. Honeywell Hydraulics engineered SS316 cylinders with Viton seals that have now been running for over a year without any corrosion or seal failure. They truly understand chemical environments." — Plant Engineer, Specialty Chemicals, Ankleshwar GIDC.',
    items: [
      { id: 'tf1', title: 'Chemical Environment Expertise', description: 'We engineer every cylinder for your specific chemical exposure — temperature, acid concentration, humidity, and cycle rate.' },
      { id: 'tf2', title: 'Material Traceability', description: 'EN 10204 Type 3.1 material certificates for all SS304/316 components. Full traceability from raw material to finished cylinder.' },
      { id: 'tf3', title: 'Rapid Bharuch Corridor Delivery', description: 'Next-day delivery to Ankleshwar, Panoli, Jhagadia, and Dahej. Emergency same-day dispatch for critical breakdowns.' },
    ],
  },
  faqs: [
    { question: 'Can you manufacture SS316 hydraulic cylinders for chemical plants in Ankleshwar?', answer: 'Yes, we specialize in manufacturing hydraulic cylinders with stainless steel 304/316 rods and barrels for corrosive chemical environments. We pair these with Viton seals rated to 200°C and PTFE composite backup rings to ensure long-term reliability in Ankleshwar\'s aggressive chemical processing environments.' },
    { question: 'Do you supply hydraulic equipment to Panoli GIDC?', answer: 'Absolutely. We serve both Ankleshwar and Panoli GIDC estates. Our Kathwada GIDC facility in Ahmedabad is approximately 3 hours from Ankleshwar via the NH-48, enabling rapid delivery of custom-engineered hydraulic cylinders and power packs.' },
    { question: 'Can your cylinders be used in hazardous zones inside chemical plants?', answer: 'Our hydraulic cylinders use non-sparking materials and can be paired with explosion-proof hydraulic power packs for use in classified hazardous areas. We engineer the complete system — cylinder, manifold, and power pack — to minimize ignition risk in volatile chemical environments.' },
    { question: 'Do you manufacture clean hydraulic components for pharmaceutical equipment?', answer: 'Yes, we supply hydraulic cylinders and power packs for GMP-compliant pharmaceutical manufacturing equipment, including tableting presses, filling lines, and packaging machinery. We use food-grade hydraulic fluids, stainless steel wetted parts, and washdown-ready external finishes.' },
    { question: 'How quickly can you deliver replacement cylinders to Ankleshwar GIDC?', answer: 'Standard transit from our Kathwada facility to Ankleshwar is 1 day via express transport. For critical breakdowns, we offer emergency same-day dispatch. We also keep your custom drawings on file for rapid re-manufacturing of replacement cylinders.' },
  ],
  cta: {
    title: 'Stop Replacing Corroded Cylinders Every Quarter',
    description: 'Upgrade to chemical-grade SS316 hydraulic equipment from Honeywell Hydraulics. Engineered specifically for Ankleshwar\'s aggressive chemical and pharmaceutical environments.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430',
    serviceAreas: 'Serving Ankleshwar, Panoli, Jhagadia, Dahej SEZ, Bharuch, and the entire Bharuch-Ankleshwar chemical corridor.',
  },
};
