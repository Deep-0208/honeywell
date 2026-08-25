import { LocationPageData } from './gujarat';

export const rajkotData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Rajkot | Honeywell Hydraulics',
    description: 'Leading hydraulic cylinder supplier for Rajkot & Saurashtra. Heavy-duty press cylinders & power packs for auto parts and machine tools. ISO 9001 certified.',
    canonical: 'https://honeywellhydraulics.in/locations/rajkot/',
    openGraph: {
      title: 'Hydraulic Cylinder Manufacturer for Rajkot\'s Engineering Hub',
      description: 'Leading hydraulic cylinder supplier for Rajkot & Saurashtra. Heavy-duty press cylinders & power packs for auto parts and machine tools.',
      url: 'https://honeywellhydraulics.in/locations/rajkot/',
      images: [
        {
          url: '/images/locations/rajkot-hydraulic-manufacturing.jpg',
          width: 1200,
          height: 630,
          alt: 'Hydraulic cylinders for Rajkot auto parts manufacturing and forging presses',
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
      'hydraulic cylinder manufacturer in Rajkot',
      'hydraulic cylinder manufacturer Rajkot',
      'hydraulic cylinder supplier Saurashtra',
      'press cylinders Rajkot',
      'forging press hydraulic cylinders Rajkot',
      'machine tool hydraulic cylinders Rajkot',
      'hydraulic power pack manufacturer Rajkot',
      'hydraulic cylinder repair Rajkot',
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://honeywellhydraulics.in/locations/rajkot/#service',
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
          name: 'Rajkot',
          containedInPlace: {
            '@type': 'State',
            name: 'Gujarat'
          }
        },
        description: 'High-pressure custom hydraulic cylinders and power packs engineered for the auto parts forging, CNC machine tool, diesel engine, and SPM manufacturing industries across Rajkot\'s Metoda, Aji, Shapar-Veraval, and Lodhika GIDC estates.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://honeywellhydraulics.in/locations/rajkot/',
        name: 'Hydraulic Cylinder Manufacturer in Rajkot | Honeywell Hydraulics',
        url: 'https://honeywellhydraulics.in/locations/rajkot/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://honeywellhydraulics.in/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://honeywellhydraulics.in/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Rajkot', item: 'https://honeywellhydraulics.in/locations/rajkot/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Can you manufacture hydraulic press cylinders for auto parts forging in Rajkot?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we specialize in high-pressure press cylinders rated up to 350 Bar. We engineer drop-in replacement cylinders or entirely new assemblies using hardened EN19/EN24 alloy steel rods and high-temperature Viton seals to handle the severe shock loads of forging applications.' } },
          { '@type': 'Question', name: 'How quickly can you deliver a custom hydraulic power pack to Metoda GIDC?', acceptedAnswer: { '@type': 'Answer', text: 'A custom-engineered hydraulic power pack typically takes 7 to 15 working days to design, assemble, and pressure test at our facility. Transit time from Ahmedabad to Metoda GIDC is 1-2 days. For emergency breakdowns, we offer expedited manufacturing and same-day dispatch.' } },
          { '@type': 'Question', name: 'Do you provide EN 10204 material certificates for hydraulic cylinders?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we are an ISO 9001:2015 certified manufacturer. We provide EN 10204 Type 3.1 material certificates for all critical components — barrels, rods, and manifold blocks — ensuring complete traceability and compliance with your procurement standards.' } },
          { '@type': 'Question', name: 'Can you supply hydraulic cylinders for CNC machine tools and SPMs in Shapar-Veraval?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We manufacture precision hydraulic cylinders and power packs that integrate seamlessly into CNC lathes, VMCs, and special purpose machines. Our cylinders provide consistent holding force with zero drift, which is critical for machining accuracy.' } },
          { '@type': 'Question', name: 'Do you repair and re-hone hydraulic cylinders for Rajkot industries?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we provide complete cylinder repair services including barrel re-honing to Ra 0.2-0.4 µm finish, rod re-chroming, seal replacement, and full teardown and rebuild. Ship your damaged cylinder to our Kathwada facility and we will return it to factory specifications.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING RAJKOT & SAURASHTRA',
    title: 'Hydraulic Cylinder Manufacturer for Rajkot',
    subtitle: 'Rajkot is Gujarat\'s engineering and automotive components capital. Honeywell Hydraulics supplies extreme-pressure press cylinders, precision machine tool hydraulics, and custom power packs to Metoda, Aji, Shapar-Veraval, and Lodhika GIDCs — factory-direct from our Kathwada GIDC facility, with 1-2 day delivery to Saurashtra.',
    trustChips: ['Factory-Direct to Rajkot', 'ISO 9001:2015 Certified', '350 Bar Press Cylinders'],
    image: {
      src: '/images/locations/rajkot-hydraulic-manufacturing.jpg',
      alt: 'Hydraulic cylinder manufacturer supplying Rajkot GIDC forging and machine tool industries',
    },
    ctas: {
      primary: { label: 'GET A QUOTE — DELIVERED TO RAJKOT', href: '/request-quote/#quote-form' },
      secondary: { label: 'VIEW PRESS CYLINDERS', href: '/products/hydraulic-cylinders/' },
    },
  },
  benefits: {
    title: 'The Honeywell Advantage for Rajkot Industries',
    description: 'Sourcing your hydraulic equipment from Honeywell Hydraulics provides distinct advantages over local traders and out-of-state suppliers.',
    items: [
      {
        id: 'direct-pricing',
        title: 'Factory-Direct Supply to Saurashtra',
        description: 'By sourcing directly from our CNC-equipped manufacturing facility, you eliminate middleman markups and receive premium, pressure-tested components at competitive factory-direct prices.',
      },
      {
        id: 'quality-assurance',
        title: 'Guaranteed Quality with Certificates',
        description: 'Every hydraulic cylinder is 100% hydrostatically tested at 1.5x rated working pressure before dispatch. We provide full EN 10204 Type 3.1 material certificates for complete traceability.',
      },
      {
        id: 'fast-transit',
        title: 'Fast 1-2 Day Delivery to Rajkot',
        description: 'Once your cylinder passes QC at our Kathwada facility, transit time to Metoda, Aji, Shapar-Veraval, or Lodhika GIDC is just 1 to 2 days — keeping your production lines running.',
      },
    ],
  },
  products: {
    title: 'Industrial Hydraulic Solutions Supplied to Rajkot',
    description: 'We deliver a comprehensive range of heavy-duty hydraulic equipment across all Rajkot and Saurashtra GIDC estates. All products manufactured, assembled, and 100% pressure-tested at our facility.',
    items: [
      {
        id: 'press-cylinders',
        title: 'High-Pressure Press Cylinders',
        description: 'Engineered for extreme shock loads and continuous pressing. Rated up to 350 Bar with hardened EN19/EN24 rods for auto parts forging and stamping.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'power-packs',
        title: 'Custom Hydraulic Power Packs',
        description: 'High-low and variable-speed power packs designed for continuous industrial duty in machine tools, presses, and SPM applications.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifolds',
        title: 'Precision Manifold Blocks',
        description: 'CNC-machined CETOP manifold blocks to consolidate complex hydraulic circuits for machine tool builders and SPM manufacturers.',
        href: '/products/manifold-blocks/',
      },
    ],
  },
  industries: {
    title: 'Powering Rajkot\'s Engineering & Auto Parts Hub',
    description: 'Rajkot\'s industrial landscape is built on forging, machining, and automotive component manufacturing. We engineer hydraulic components that match these rigorous, high-cycle production demands.',
    items: [
      {
        id: 'auto-parts',
        title: 'Auto Parts & Forging (Metoda & Aji)',
        description: 'High-pressure press cylinders with hardened EN19/EN24 rods and Viton seals designed to withstand severe mechanical shock loads in closed-die and open-die forging applications.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'machine-tools',
        title: 'CNC Machine Tools & SPM (Shapar-Veraval)',
        description: 'Precision hydraulic cylinders and power packs that integrate seamlessly into CNC lathes, VMCs, and special purpose machines with zero-drift holding force.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'diesel-engines',
        title: 'Diesel Engine Manufacturing (Lodhika)',
        description: 'Hydraulic test benches, press-fit cylinders, and assembly jig actuators for Rajkot\'s established diesel engine and generator set manufacturing sector.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'foundry',
        title: 'Foundry & Casting (Aji & Mavdi)',
        description: 'Heavy-duty welded cylinders for die casting machines, mould clamping systems, and automated pouring equipment in Rajkot\'s extensive foundry cluster.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'agriculture',
        title: 'Agricultural Equipment',
        description: 'Robust tie-rod and welded cylinders for tractor implements, hydraulic trailers, and farm machinery manufactured across the Saurashtra agricultural equipment belt.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'construction',
        title: 'Construction & Earth Moving',
        description: 'Telescopic and large-bore hydraulic cylinders for construction equipment, road rollers, and earth-moving machinery manufactured and serviced in the Rajkot region.',
        href: '/products/hydraulic-cylinders/',
      },
    ],
  },
  caseStudy: {
    title: 'Forging Press Upgrade in Metoda GIDC',
    challenge: 'A tier-1 automotive components manufacturer in Metoda GIDC was experiencing a 15% rejection rate on forged parts due to inconsistent pressing force and frequent seal blowouts on their primary 200-ton press cylinder.',
    solution: 'We engineered a drop-in replacement flange-mounted cylinder with reinforced EN19 barrels and high-temperature Viton seals, paired with a custom high-low hydraulic power pack for rapid approach and slow, extreme-pressure forging stroke.',
    resultStat: '1%',
    resultLabel: 'Drop in rejection rate (down from 15%)',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage in Saurashtra',
    description: 'We supply custom hydraulic cylinders and power packs to every major industrial estate across Rajkot and the Saurashtra region — with 1-2 day delivery from our Kathwada facility.',
    items: [
      { id: 'metoda', city: 'Metoda GIDC (Lodhika)', description: 'High-tonnage press cylinders for Rajkot\'s largest industrial estate — the hub of forging, diesel engines, and heavy engineering.' },
      { id: 'aji', city: 'Aji GIDC', description: 'Precision hydraulic components for one of Rajkot\'s oldest engineering estates, serving foundry, machining, and auto parts manufacturers.' },
      { id: 'shapar', city: 'Shapar-Veraval GIDC', description: 'Reliable fluid power for the massive cluster of CNC machine tool builders, SPM manufacturers, and auto component suppliers.' },
      { id: 'lodhika', city: 'Lodhika GIDC', description: 'Heavy-duty hydraulic solutions for continuous manufacturing, diesel engine assembly, and large-scale engineering operations.' },
      { id: 'mavdi', city: 'Mavdi Industrial Area', description: 'Supplying engineering workshops, auto-part manufacturers, and small-scale machining units with reliable hydraulic equipment.' },
      { id: 'gondal', city: 'Gondal GIDC', description: 'Hydraulic cylinders and power packs for the engineering and food processing machinery sectors in Gondal.' },
      { id: 'kothariya', city: 'Kothariya & Bhaktinagar', description: 'General industrial hydraulic supply for the diverse manufacturing units across Rajkot\'s expanding industrial periphery.' },
    ],
  },
  trustFactors: {
    title: 'Rajkot\'s Trusted Hydraulic Partner',
    description: '"Sourcing from Honeywell Hydraulics has eliminated the quality issues we used to have with local traders. Their cylinders are tested, the material certificates are real, and they understand exactly what kind of pressure a forging press needs to handle." — Plant Manager, Auto Components Ltd, Metoda GIDC.',
    items: [
      { id: 'tf1', title: 'Forging Industry Expertise', description: 'Our technical team understands the specific load dynamics, shock patterns, and cycle requirements of Rajkot\'s forging and press industry.' },
      { id: 'tf2', title: 'Factory-Direct Value', description: 'Premium, CNC-machined components without middleman markups. Every cylinder backed by EN 10204 Type 3.1 material certificates.' },
      { id: 'tf3', title: 'Rapid Deployment to Saurashtra', description: 'Your custom components are dispatched to Rajkot the moment they pass QC — with 1-2 day transit and emergency same-day dispatch available.' },
    ],
  },
  faqs: [
    { question: 'Can you manufacture hydraulic press cylinders for auto parts forging in Rajkot?', answer: 'Yes, we specialize in high-pressure press cylinders rated up to 350 Bar. We engineer drop-in replacement cylinders or entirely new assemblies using hardened EN19/EN24 alloy steel rods and high-temperature Viton seals to handle the severe shock loads of forging applications.' },
    { question: 'How quickly can you deliver a custom hydraulic power pack to Metoda GIDC?', answer: 'A custom-engineered hydraulic power pack typically takes 7 to 15 working days to design, assemble, and pressure test at our facility. Transit time from Ahmedabad to Metoda GIDC is 1-2 days. For emergency breakdowns, we offer expedited manufacturing and same-day dispatch.' },
    { question: 'Do you provide EN 10204 material certificates for hydraulic cylinders?', answer: 'Yes, we are an ISO 9001:2015 certified manufacturer. We provide EN 10204 Type 3.1 material certificates for all critical components — barrels, rods, and manifold blocks — ensuring complete traceability and compliance with your procurement standards.' },
    { question: 'Can you supply hydraulic cylinders for CNC machine tools and SPMs in Shapar-Veraval?', answer: 'Absolutely. We manufacture precision hydraulic cylinders and power packs that integrate seamlessly into CNC lathes, VMCs, and special purpose machines. Our cylinders provide consistent holding force with zero drift, which is critical for machining accuracy.' },
    { question: 'Do you repair and re-hone hydraulic cylinders for Rajkot industries?', answer: 'Yes, we provide complete cylinder repair services including barrel re-honing to Ra 0.2-0.4 µm finish, rod re-chroming, seal replacement, and full teardown and rebuild. Ship your damaged cylinder to our Kathwada facility and we will return it to factory specifications.' },
  ],
  cta: {
    title: 'Upgrade Your Press & Machine Tool Hydraulics',
    description: 'Stop sourcing from traders. Get factory-direct, CNC-machined hydraulic equipment engineered specifically for Rajkot\'s demanding forging and machine tool sectors.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430',
    serviceAreas: 'Serving Metoda, Aji, Shapar-Veraval, Lodhika, Mavdi, Gondal, and the entire Saurashtra region.',
  },
};
