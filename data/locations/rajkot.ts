import { LocationPageData } from './gujarat';

export const rajkotData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Rajkot | Honeywell Hydraulics',
    description: 'Leading hydraulic cylinder supplier for Rajkot & Saurashtra. Heavy-duty press cylinders & power packs for auto parts and machine tools. ISO 9001 certified.',
    canonical: 'https://www.honeywellhydraulics.com/locations/rajkot/',
    openGraph: {
      title: 'Hydraulic Cylinder Manufacturer for Rajkot\'s Engineering Hub',
      description: 'Leading hydraulic cylinder supplier for Rajkot & Saurashtra. Heavy-duty press cylinders & power packs for auto parts and machine tools.',
      url: 'https://www.honeywellhydraulics.com/locations/rajkot/',
      images: [
        {
          url: '/images/locations/rajkot-hydraulic-manufacturing.jpg',
          width: 1200,
          height: 630,
          alt: 'Hydraulic cylinders for Rajkot auto parts manufacturing',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Rajkot | Honeywell Hydraulics',
      description: 'Leading hydraulic cylinder supplier for Rajkot & Saurashtra. Heavy-duty press cylinders & power packs.',
      images: ['/images/locations/rajkot-hydraulic-manufacturing.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer Rajkot',
      'hydraulic cylinder supplier Saurashtra',
      'press cylinders Rajkot',
      'auto parts press cylinders rajkot',
      'machine tool hydraulic cylinders rajkot'
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.honeywellhydraulics.com/locations/rajkot/#service',
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
          name: 'Rajkot'
        },
        description: 'High-pressure custom hydraulic cylinders and power packs engineered for the auto parts and machine tool industries in Rajkot, Aji, and Metoda.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.honeywellhydraulics.com/locations/rajkot/',
        name: 'Hydraulic Cylinder Manufacturer in Rajkot | Honeywell Hydraulics',
        url: 'https://www.honeywellhydraulics.com/locations/rajkot/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.honeywellhydraulics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.honeywellhydraulics.com/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Rajkot', item: 'https://www.honeywellhydraulics.com/locations/rajkot/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you manufacture hydraulic press cylinders for our auto parts forging plant in Rajkot?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we specialize in high-pressure press cylinders. We can engineer drop-in replacement cylinders or entirely new assemblies rated up to 350 Bar, using hardened rods and advanced sealing technologies to handle the shock loads of forging applications.' } },
          { '@type': 'Question', name: 'How quickly can you deliver a custom hydraulic power pack to Metoda GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'A custom-engineered hydraulic power pack typically takes 7 to 15 working days to design, assemble, and pressure test. Once dispatched, transit time to Metoda GIDC is generally 1-2 days.' } },
          { '@type': 'Question', name: 'Do you provide material testing certificates for your hydraulic cylinders?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we are an ISO 9001:2015 certified manufacturer. We provide EN 10204 Type 3.1 material certificates for all critical components (barrels, rods, blocks) to ensure complete traceability and compliance with your procurement standards.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING RAJKOT & SAURASHTRA',
    title: 'Hydraulic Cylinder Manufacturer for Rajkot',
    subtitle: 'Rajkot is recognized as the engineering and automotive components capital of Gujarat. To support this massive industrial base, Honeywell Hydraulics serves as a trusted hydraulic cylinder manufacturer supplying Aji, Lodhika, and Metoda GIDCs with extreme-pressure press cylinders and custom power packs.',
    trustChips: ['Factory-Direct to Rajkot', 'ISO 9001:2015 Certified', '350 Bar Press Cylinders'],
    image: {
      src: '/images/locations/rajkot-hydraulic-manufacturing.jpg',
      alt: 'Hydraulic cylinder manufacturer supplying Rajkot GIDC',
    },
    ctas: {
      primary: { label: 'GET A QUOTE — DELIVERED TO RAJKOT', href: '/request-quote/' },
      secondary: { label: 'VIEW PRESS CYLINDERS', href: '/products/hydraulic-cylinders/' },
    },
  },
  benefits: {
    title: 'The Honeywell Advantage for Rajkot Industries',
    description: 'Sourcing your hydraulic equipment from Honeywell Hydraulics provides distinct advantages over local traders in Rajkot.',
    items: [
      {
        id: 'direct-pricing',
        title: 'Factory-Direct Supply to Saurashtra',
        description: 'By eliminating middleman markups, you receive premium, CNC-machined components at competitive factory-direct prices without sacrificing quality.',
      },
      {
        id: 'quality-assurance',
        title: 'Guaranteed Quality Assurance',
        description: 'Every hydraulic cylinder is 100% hydrostatic pressure tested at 1.5x rated working pressure before it leaves our facility. We provide full EN 10204 Type 3.1 material certificates.',
      },
      {
        id: 'fast-transit',
        title: 'Fast Transit to Rajkot',
        description: 'Once manufactured, standard transit time from our factory to Rajkot, Shapar-Veraval, or Metoda is just 1 to 2 days, ensuring your production lines stay operational.',
      },
    ],
  },
  products: {
    title: 'Industrial Hydraulic Solutions Supplied to Rajkot',
    description: 'We deliver a comprehensive range of heavy-duty hydraulic equipment across all Rajkot GIDC estates.',
    items: [
      {
        id: 'press-cylinders',
        title: 'High-Pressure Press Cylinders',
        description: 'Engineered for extreme shock loads and continuous pressing. Rated up to 350 Bar for auto parts forging.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'power-packs',
        title: 'Custom Hydraulic Power Packs',
        description: 'Reliable fluid power generation designed for continuous industrial duty in machine tools.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'systems',
        title: 'Turnkey Hydraulic Systems',
        description: 'Complete hydraulic automation for specialized SPM builders throughout the Saurashtra region.',
        href: '/products/hydraulic-systems/',
      },
    ],
  },
  industries: {
    title: 'Powering Rajkot\'s Machine Tools & Auto Parts',
    description: 'Rajkot\'s industrial landscape relies heavily on continuous, high-force production. We engineer hydraulic components that match these rigorous cycles.',
    items: [
      {
        id: 'auto-parts',
        title: 'Auto Parts & Forging (Metoda & Aji)',
        description: 'High-pressure, heavy-duty press cylinders designed to withstand severe mechanical shock, utilizing high-temperature Viton seals.',
        href: '/industries/automotive/',
      },
      {
        id: 'machine-tools',
        title: 'Machine Tools & SPM (Shapar-Veraval)',
        description: 'Precision hydraulic cylinders and power packs that integrate seamlessly into CNC machines, providing consistent holding force.',
        href: '/industries/special-purpose-machines/',
      },
      {
        id: 'agriculture',
        title: 'Agricultural Equipment',
        description: 'Robust tie-rod and welded cylinders for tractor trailers, implements, and heavy machinery, ensuring long service life.',
        href: '/industries/material-handling/',
      },
    ],
  },
  caseStudy: {
    title: 'Forging Press Upgrade in Metoda GIDC',
    challenge: 'A tier-1 automotive components manufacturer in Metoda was experiencing a 15% rejection rate on forged parts due to inconsistent pressing force and frequent seal blowouts on their primary press cylinder.',
    solution: 'We engineered a drop-in replacement flange-mounted cylinder with reinforced barrels and high-temperature Viton seals, paired with a custom high-low hydraulic power pack for rapid approach and slow, extreme-pressure forging.',
    resultStat: '1%',
    resultLabel: 'Drop in rejection rate (down from 15%)',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage in Saurashtra',
    description: 'We supply custom hydraulic cylinders and power packs to every major industrial estate in the Rajkot region.',
    items: [
      { id: 'aji', city: 'Aji GIDC', description: 'Supplying the engineering backbone of Rajkot with precision hydraulic components.' },
      { id: 'metoda', city: 'Metoda GIDC', description: 'Delivering high-tonnage press cylinders for the automotive and forging sectors.' },
      { id: 'shapar', city: 'Shapar-Veraval', description: 'Supporting machine tool builders and SPM manufacturers with reliable fluid power.' },
      { id: 'lodhika', city: 'Lodhika GIDC', description: 'Providing heavy-duty hydraulic solutions for continuous manufacturing applications.' },
    ],
  },
  trustFactors: {
    title: 'Rajkot\'s Trusted Hydraulic Partner',
    description: '"Sourcing from Honeywell Hydraulics has eliminated the quality issues we used to have with local traders. Their cylinders are tested, the material certificates are real, and they understand exactly what kind of pressure a forging press needs to handle." — Plant Manager, Auto Components Ltd, Rajkot.',
    items: [
      { id: 'tf1', title: 'Engineering Expertise', description: 'Our technical team understands the specific load dynamics of Rajkot\'s forging industry.' },
      { id: 'tf2', title: 'Factory-Direct Value', description: 'Get premium, CNC-machined components without paying the middleman markup.' },
      { id: 'tf3', title: 'Rapid Deployment', description: 'We ensure your custom components are on a truck to Saurashtra the moment they pass QC.' },
    ],
  },
  faqs: [
    { question: 'Can you manufacture hydraulic press cylinders for our auto parts forging plant in Rajkot?', answer: 'Yes, we specialize in high-pressure press cylinders. We can engineer drop-in replacement cylinders or entirely new assemblies rated up to 350 Bar, using hardened rods and advanced sealing technologies to handle the shock loads of forging applications.' },
    { question: 'How quickly can you deliver a custom hydraulic power pack to Metoda GIDC?', answer: 'A custom-engineered hydraulic power pack typically takes 7 to 15 working days to design, assemble, and pressure test. Once dispatched, transit time to Metoda GIDC is generally 1-2 days.' },
    { question: 'Do you provide material testing certificates for your hydraulic cylinders?', answer: 'Yes, we are an ISO 9001:2015 certified manufacturer. We provide EN 10204 Type 3.1 material certificates for all critical components (barrels, rods, blocks) to ensure complete traceability and compliance with your procurement standards.' }
  ],
  cta: {
    title: 'Contact Our Engineering Team Today',
    description: 'Upgrade to factory-direct hydraulic equipment engineered specifically for Rajkot\'s demanding machine tool and auto-parts sectors.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Kathwada GIDC, Ahmedabad (Serving Rajkot Region)',
    serviceAreas: 'Serving Aji, Metoda, Shapar-Veraval, Lodhika, and the entire Saurashtra region.',
  },
};
