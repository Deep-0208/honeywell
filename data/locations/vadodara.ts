import { LocationPageData } from './gujarat';

export const vadodaraData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Vadodara | Honeywell Hydraulics',
    description: 'Leading hydraulic cylinder manufacturer supplying Vadodara, Makarpura & Nandesari. Specialized chemical-resistant cylinders and heavy-duty power packs.',
    canonical: 'https://www.honeywellhydraulics.com/locations/vadodara/',
    openGraph: {
      title: 'Hydraulic Cylinders for Vadodara\'s Chemical & Engineering Hubs',
      description: 'Leading hydraulic cylinder manufacturer supplying Vadodara, Makarpura & Nandesari. Specialized chemical-resistant cylinders and heavy-duty power packs.',
      url: 'https://www.honeywellhydraulics.com/locations/vadodara/',
      images: [
        {
          url: '/images/locations/vadodara-chemical-hydraulics.jpg',
          width: 1200,
          height: 630,
          alt: 'Chemical resistant hydraulic cylinders for Vadodara processing plants',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Vadodara | Honeywell Hydraulics',
      description: 'Leading hydraulic cylinder manufacturer supplying Vadodara, Makarpura & Nandesari. Chemical-resistant cylinders.',
      images: ['/images/locations/vadodara-chemical-hydraulics.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer Vadodara',
      'hydraulic cylinders Makarpura GIDC',
      'chemical resistant hydraulic cylinders',
      'hydraulic power pack vadodara',
      'stainless steel hydraulic cylinders'
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.honeywellhydraulics.com/locations/vadodara/#service',
        serviceType: 'Hydraulic Cylinder Manufacturing & Supply',
        provider: {
          '@type': 'ManufacturingBusiness',
          name: 'Honeywell Hydraulics',
          telephone: '+91-9924343873',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'B-18, Suryam Plaza Estate, Kathwada GIDC',
            addressLocality: 'Ahmedabad',
            addressRegion: 'Gujarat',
            postalCode: '382430',
            addressCountry: 'IN'
          }
        },
        areaServed: {
          '@type': 'City',
          name: 'Vadodara'
        },
        description: 'Corrosion-resistant and heavy-duty hydraulic cylinders engineered for the chemical processing, pharmaceutical, and heavy engineering industries in Vadodara, Makarpura, and Nandesari.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.honeywellhydraulics.com/locations/vadodara/',
        name: 'Hydraulic Cylinder Manufacturer in Vadodara | Honeywell Hydraulics',
        url: 'https://www.honeywellhydraulics.com/locations/vadodara/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.honeywellhydraulics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.honeywellhydraulics.com/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Vadodara', item: 'https://www.honeywellhydraulics.com/locations/vadodara/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you manufacture stainless steel hydraulic cylinders for chemical plants in Nandesari?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we manufacture cylinders with stainless steel 304/316 rods and barrels specifically for corrosive chemical environments. We also utilize Viton or PTFE seals to prevent chemical degradation of the internal components.' } },
          { '@type': 'Question', name: 'Do you supply hydraulic power packs to Makarpura GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We design and assemble custom hydraulic power packs for the heavy engineering and equipment manufacturing firms located in Makarpura GIDC, offering rapid delivery from our Kathwada facility.' } },
          { '@type': 'Question', name: 'How do you protect your standard hydraulic cylinders from rusting in humid, industrial environments?', acceptedAnswer: { '@type': 'Answer', text: 'For non-stainless applications in harsh environments, we apply heavy-duty marine-grade epoxy coatings to the cylinder exterior and utilize extra-thick hard chrome plating on the piston rods to drastically extend their lifespan.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING VADODARA & CENTRAL GUJARAT',
    title: 'Hydraulic Cylinder Manufacturer for Vadodara',
    subtitle: 'Vadodara (Baroda) is Gujarat\'s powerhouse for chemical processing and heavy engineering. Honeywell Hydraulics supplies specialized, corrosion-resistant hydraulic cylinders and custom power packs to plants in Makarpura, Nandesari, and Savli GIDCs, ensuring uninterrupted operation in the harshest environments.',
    trustChips: ['Chemical Resistant Designs', 'Stainless Steel Options', 'Supplying Makarpura & Savli'],
    image: {
      src: '/images/locations/vadodara-chemical-hydraulics.jpg',
      alt: 'Corrosion resistant hydraulic cylinders for Vadodara chemical processing',
    },
    ctas: {
      primary: { label: 'REQUEST A CUSTOM QUOTE', href: '/request-quote/' },
      secondary: { label: 'VIEW CHEMICAL INDUSTRY SOLUTIONS', href: '/industries/chemical-processing/' },
    },
  },
  benefits: {
    title: 'Engineered for Vadodara\'s Processing Hubs',
    description: 'We understand that generic hydraulics fail rapidly in Vadodara\'s chemical and pharmaceutical environments. We engineer for longevity.',
    items: [
      {
        id: 'corrosion-defense',
        title: 'Advanced Corrosion Defense',
        description: 'We utilize stainless steel components, specialized marine-grade epoxy coatings, and heavy hard-chrome plating to protect your cylinders from aggressive fumes and acidic environments.',
      },
      {
        id: 'chemical-seals',
        title: 'Chemical-Resistant Sealing',
        description: 'Standard nitrile seals melt in chemical plants. We employ high-temperature Viton and PTFE composite seals to ensure your cylinders remain leak-free regardless of ambient chemical exposure.',
      },
      {
        id: 'fast-transit',
        title: 'Rapid Deployment to Baroda',
        description: 'Located nearby in Kathwada, we provide much faster delivery and engineering support to Vadodara compared to suppliers based in Maharashtra or South India.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Equipment Supplied to Vadodara',
    description: 'Rugged fluid power components built for chemical processing, pharmaceuticals, and heavy engineering.',
    items: [
      {
        id: 'chemical-cylinders',
        title: 'Chemical-Resistant Cylinders',
        description: 'Custom cylinders featuring SS316 rods, epoxy coatings, and Viton seals for the toughest environments.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'power-packs',
        title: 'Enclosed Power Packs',
        description: 'Hydraulic power units featuring fully sealed reservoirs to prevent atmospheric contamination of the hydraulic fluid.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifolds',
        title: 'Stainless Steel Manifolds',
        description: 'Custom machined manifold blocks designed to consolidate circuits without rusting in washdown environments.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Supporting Vadodara\'s Core Sectors',
    description: 'We provide specialized hydraulic actuation for the unique machinery used throughout Central Gujarat.',
    items: [
      {
        id: 'chemical',
        title: 'Chemical & Petrochemical (Nandesari)',
        description: 'Spark-proof, corrosion-resistant hydraulic systems for valve actuation and processing equipment in hazardous zones.',
        href: '/industries/chemical-processing/',
      },
      {
        id: 'heavy-engineering',
        title: 'Heavy Engineering (Makarpura)',
        description: 'Large-bore, high-tonnage hydraulic cylinders for the heavy equipment manufacturing and fabrication yards.',
        href: '/industries/material-handling/',
      },
      {
        id: 'pharma',
        title: 'Pharmaceuticals (Savli)',
        description: 'Clean, washdown-ready hydraulic components designed for the stringent requirements of pharmaceutical packaging.',
        href: '/industries/special-purpose-machines/',
      },
    ],
  },
  caseStudy: {
    title: 'Valve Actuation Upgrade in Nandesari GIDC',
    challenge: 'A chemical processing plant in Nandesari was replacing the standard hydraulic cylinders on their mixing vats every three months because the acidic ambient fumes were corroding the piston rods, destroying the seals.',
    solution: 'We engineered custom replacement cylinders using Stainless Steel 316 for the piston rods, high-temperature Viton seals, and a heavy-duty chemical-resistant epoxy coating on the barrels.',
    resultStat: '4x',
    resultLabel: 'Increase in cylinder lifespan (now exceeding 12 months)',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage in Vadodara',
    description: 'We rapidly dispatch engineered hydraulic components to all major industrial hubs in the Vadodara region.',
    items: [
      { id: 'makarpura', city: 'Makarpura GIDC', description: 'Supplying heavy-duty cylinders and power packs to one of Gujarat\'s largest engineering estates.' },
      { id: 'nandesari', city: 'Nandesari GIDC', description: 'Delivering specialized, chemical-resistant hydraulic solutions for the chemical and petrochemical sectors.' },
      { id: 'savli', city: 'Savli GIDC', description: 'Supporting the pharmaceutical, engineering, and emerging electric vehicle manufacturing hubs.' },
      { id: 'por', city: 'Por GIDC', description: 'Providing robust hydraulic systems for general manufacturing and automation.' },
    ],
  },
  trustFactors: {
    title: 'Trusted by Vadodara\'s Processing Plants',
    description: '"The acidic environment in our Nandesari plant eats standard hydraulic equipment alive. Honeywell Hydraulics designed stainless steel cylinders with Viton seals that have outlasted our previous supplier\'s cylinders by four times. They understand chemical environments." — Maintenance Head, Chemical Processing Plant, Vadodara.',
    items: [
      { id: 'tf1', title: 'Environmental Engineering', description: 'We don\'t sell generic cylinders to chemical plants; we engineer solutions that survive your specific ambient environment.' },
      { id: 'tf2', title: 'Material Traceability', description: 'We provide EN 10204 Type 3.1 material certificates for all stainless steel and specialized components.' },
      { id: 'tf3', title: 'Reliable Supply Chain', description: 'Located just hours away in Ahmedabad, we ensure your critical replacement parts arrive before production halts.' },
    ],
  },
  faqs: [
    { question: 'Can you manufacture stainless steel hydraulic cylinders for chemical plants in Nandesari?', answer: 'Yes, we manufacture cylinders with stainless steel 304/316 rods and barrels specifically for corrosive chemical environments. We also utilize Viton or PTFE seals to prevent chemical degradation of the internal components.' },
    { question: 'Do you supply hydraulic power packs to Makarpura GIDC?', answer: 'Absolutely. We design and assemble custom hydraulic power packs for the heavy engineering and equipment manufacturing firms located in Makarpura GIDC, offering rapid delivery from our Kathwada facility.' },
    { question: 'How do you protect your standard hydraulic cylinders from rusting in humid, industrial environments?', answer: 'For non-stainless applications in harsh environments, we apply heavy-duty marine-grade epoxy coatings to the cylinder exterior and utilize extra-thick hard chrome plating on the piston rods to drastically extend their lifespan.' }
  ],
  cta: {
    title: 'Upgrade Your Plant\'s Hydraulics Today',
    description: 'Stop replacing corroded cylinders. Partner with Honeywell Hydraulics for custom-engineered solutions that survive Vadodara\'s toughest industrial environments.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Kathwada GIDC, Ahmedabad (Serving Vadodara Region)',
    serviceAreas: 'Serving Makarpura, Nandesari, Savli, Por, and the entire Vadodara industrial region.',
  },
};
