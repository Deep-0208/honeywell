import { LocationPageData } from './gujarat';

export const ahmedabadData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Ahmedabad | Honeywell',
    description: 'Top hydraulic cylinder manufacturer in Ahmedabad. Supplying Kathwada, Odhav, Sanand & Vatva GIDC at factory-direct pricing. Get a free quote today.',
    canonical: 'https://www.honeywellhydraulics.com/locations/ahmedabad/',
    openGraph: {
      title: 'Hydraulic Cylinder Manufacturer Ahmedabad | Honeywell',
      description: 'Top hydraulic cylinder manufacturer in Ahmedabad. Supplying Kathwada, Odhav, Sanand & Vatva GIDC at factory-direct pricing. Get a free quote today.',
      url: 'https://www.honeywellhydraulics.com/locations/ahmedabad/',
      images: [
        {
          url: '/images/locations/ahmedabad-hero.webp',
          width: 1200,
          height: 630,
          alt: 'Honeywell Hydraulics manufacturing facility serving Ahmedabad GIDC estates',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Ahmedabad | Honeywell',
      description: 'Top hydraulic cylinder manufacturer in Ahmedabad. Supplying Kathwada, Odhav, Sanand & Vatva GIDC at factory-direct pricing. Get a free quote today.',
      images: ['/images/locations/ahmedabad-hero.webp'],
    },
    keywords: [
      'hydraulic cylinder manufacturer in Ahmedabad',
      'hydraulic cylinder manufacturer in ahmedabad india',
      'hydraulic cylinder supplier Ahmedabad',
      'custom hydraulic cylinders Kathwada GIDC',
      'hydraulic power pack manufacturer Ahmedabad',
      'industrial hydraulic cylinders Ahmedabad',
      'hydraulic cylinder manufacturer Odhav',
      'hydraulic cylinder repair Ahmedabad'
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.honeywellhydraulics.com/locations/ahmedabad/#service',
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
          name: 'Ahmedabad',
          containedInPlace: {
            '@type': 'State',
            name: 'Gujarat'
          }
        },
        description: 'Custom hydraulic cylinder and power pack manufacturing directly from our Kathwada GIDC facility in Ahmedabad. Same-day delivery for local industrial estates including Odhav, Vatva, Naroda, and Sanand.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.honeywellhydraulics.com/locations/ahmedabad/',
        name: 'Hydraulic Cylinder Manufacturer in Ahmedabad | Honeywell Hydraulics',
        url: 'https://www.honeywellhydraulics.com/locations/ahmedabad/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.honeywellhydraulics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.honeywellhydraulics.com/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Ahmedabad', item: 'https://www.honeywellhydraulics.com/locations/ahmedabad/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Where in Ahmedabad is your manufacturing facility located?', acceptedAnswer: { '@type': 'Answer', text: 'Our state-of-the-art hydraulic manufacturing facility is located at B-18, Suryam Plaza Estate, Road no. 15, Kathwada GIDC, Ahmedabad. You are welcome to visit our factory to inspect our CNC machining capabilities and testing rigs.' } },
          { '@type': 'Question', name: 'Do you offer same-day delivery within Ahmedabad?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, for standard stock components, seals, and emergency replacement parts, we offer same-day dispatch and delivery to any GIDC within the Ahmedabad region, including Odhav, Vatva, Naroda, and Changodar.' } },
          { '@type': 'Question', name: 'Can you repair damaged hydraulic cylinders in Ahmedabad?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We provide complete hydraulic cylinder repair and refurbishment services at our Kathwada facility. Bring in your damaged cylinders for teardown, seal replacement, barrel re-honing, or rod re-chroming to minimize your production downtime.' } },
          { '@type': 'Question', name: 'Do you supply hydraulic equipment to the Sanand auto hub?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we supply highly engineered hydraulic cylinders and specialized power packs to automotive manufacturers and Tier-1 auto component suppliers located in Sanand GIDC.' } },
          { '@type': 'Question', name: 'What industries in Ahmedabad do you primarily serve?', acceptedAnswer: { '@type': 'Answer', text: 'We serve a wide spectrum of Ahmedabad\'s industries, including plastic injection moulding in Odhav, chemical processing in Vatva, pharmaceutical and packaging machinery in Changodar, and textile processing in Narol.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING AHMEDABAD GIDC ESTATES',
    title: 'Hydraulic Cylinder Manufacturer in Ahmedabad',
    subtitle: 'Ahmedabad\'s premier manufacturer of custom hydraulic cylinders and power packs. Located in Kathwada GIDC, we engineer and supply high-tonnage fluid power solutions directly to local industries across Odhav, Vatva, Naroda, Sanand, and Changodar. Eliminate transit delays with our factory-direct, same-day local support.',
    trustChips: ['Located in Kathwada GIDC', 'Same-Day Local Delivery', '100% Pressure Tested'],
    image: {
      src: '/images/locations/ahmedabad-hero.webp',
      alt: 'Honeywell Hydraulics manufacturing facility serving Ahmedabad GIDC estates',
    },
    ctas: {
      primary: { label: 'GET A QUOTE — LOCAL DELIVERY', href: '/request-quote/' },
      secondary: { label: 'VISIT OUR FACTORY', href: '/contact-us/' },
    },
  },
  benefits: {
    title: 'Why Ahmedabad Industries Choose Honeywell Hydraulics',
    description: 'When your manufacturing plant is based in Ahmedabad, your hydraulic supplier should be too. We provide unmatched local advantages for city-based OEMs and production plants.',
    items: [
      {
        id: 'local-manufacturing',
        title: 'Manufactured Right Here in Kathwada',
        description: 'No dealing with out-of-state suppliers. You can physically visit our Kathwada facility, audit our CNC machining centers, and discuss engineering drawings directly with our design team face-to-face.',
      },
      {
        id: 'zero-transit',
        title: 'Zero Logistical Delays',
        description: 'Waiting weeks for hydraulic components halts production. Because we are based in Ahmedabad, custom cylinders are delivered the day they pass testing, and standard parts are available for immediate pickup.',
      },
      {
        id: 'emergency-support',
        title: 'Emergency Breakdown Support',
        description: 'If a press cylinder blows a seal in Odhav or Sanand, you can have it at our repair facility within the hour. We offer expedited repair and remachining services exclusively for local Ahmedabad clients.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Products Manufactured in Ahmedabad',
    description: 'Engineered, machined, assembled, and pressure-tested at our Kathwada facility. We supply a complete range of heavy-duty hydraulic equipment to local industries.',
    items: [
      {
        id: 'cylinders',
        title: 'Hydraulic Cylinders',
        description: 'Custom-built single-acting, double-acting, and telescopic cylinders capable of handling up to 350 Bar. Featuring Ra 0.2 to 0.4 µm honed barrels.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'power-packs',
        title: 'Hydraulic Power Packs',
        description: 'From compact DC mini units for material handling to massive high-low power packs for automated injection moulding machines.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifold-blocks',
        title: 'Custom Manifold Blocks',
        description: 'Precision CNC-machined CETOP manifolds to consolidate complex hydraulic circuitry and eliminate leak points.',
        href: '/products/manifold-blocks/',
      },
      {
        id: 'systems',
        title: 'Turnkey Hydraulic Systems',
        description: 'Complete hydraulic automation solutions for SPM builders and OEMs across Ahmedabad\'s engineering zones.',
        href: '/products/hydraulic-systems/',
      },
    ],
  },
  industries: {
    title: 'Local Industries We Serve in Ahmedabad',
    description: 'Ahmedabad is a diverse industrial hub. We have deep engineering experience providing fluid power solutions tailored to the city\'s specific manufacturing sectors.',
    items: [
      {
        id: 'plastic-moulding',
        title: 'Plastic & Injection Moulding (Odhav & Kathwada)',
        description: 'We supply high-speed core pull cylinders and high-low power units for rapid approach and high-pressure clamping in local plastic processing plants.',
        href: '/industries/injection-moulding/',
      },
      {
        id: 'textile',
        title: 'Textile Machinery (Narol & Vatva)',
        description: 'Ahmedabad is the Manchester of the East. We build synchronized, judder-free hydraulic components for modern textile processing and fabric folding machinery.',
        href: '/industries/special-purpose-machines/',
      },
      {
        id: 'auto-parts',
        title: 'Automotive & Stamping (Sanand)',
        description: 'We supply high-cycle press cylinders with specialized rod coatings to tier-1 auto component manufacturers in the Sanand automotive belt.',
        href: '/industries/automotive/',
      },
      {
        id: 'pharma',
        title: 'Pharmaceuticals & Packaging (Changodar & Bavla)',
        description: 'Clean, reliable hydraulic actuation systems designed for the precise requirements of pharmaceutical packaging and tableting machines.',
        href: '/industries/special-purpose-machines/',
      },
      {
        id: 'chemical',
        title: 'Chemical Processing (Vatva & Naroda)',
        description: 'Hydraulic systems built with specialized corrosion-resistant epoxies and stainless steel components to survive harsh chemical atmospheres.',
        href: '/industries/chemical-processing/',
      },
      {
        id: 'material-handling',
        title: 'Material Handling (Aslali & Sarkhej)',
        description: 'Heavy-duty lifting cylinders and compact DC power packs for dock levelers, scissor lifts, and logistics automation.',
        href: '/industries/material-handling/',
      },
    ],
  },
  caseStudy: {
    title: 'Injection Moulding Cycle Time Reduction in Odhav',
    challenge: 'A prominent plastic manufacturer in Odhav GIDC was experiencing slow clamp-up times and inconsistent holding pressure on their 200-ton injection moulding machine, limiting their daily production output.',
    solution: 'Our Kathwada engineering team retrofitted the machine with a custom high-low hydraulic power pack utilizing a regenerative circuit and high-flow proportional valves. We also replaced the aging clamp cylinder with a custom-engineered unit featuring low-friction seals.',
    resultStat: '18%',
    resultLabel: 'Reduction in overall cycle time',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage in Ahmedabad',
    description: 'Operating out of Kathwada, we provide rapid supply and immediate technical support to every major industrial estate within the Ahmedabad metropolitan region.',
    items: [
      { id: 'kathwada', city: 'Kathwada GIDC', description: 'Our home base. Immediate local support, factory visits, and ultra-fast deployment for all engineering firms in Kathwada.' },
      { id: 'odhav', city: 'Odhav GIDC', description: 'Just minutes away. We serve as the primary hydraulic supplier for Odhav\'s vast plastic processing and general engineering sectors.' },
      { id: 'vatva', city: 'Vatva GIDC (Ph 1 to 4)', description: 'Rapid delivery of corrosion-resistant hydraulic systems and heavy cylinders for Vatva\'s chemical and textile industries.' },
      { id: 'naroda', city: 'Naroda GIDC', description: 'Supplying precision fluid power components for pharmaceutical, chemical, and specialized machinery builders in Naroda.' },
      { id: 'changodar', city: 'Changodar & Bavla', description: 'We provide highly reliable, clean hydraulic actuation for the pharmaceutical, packaging, and printing sectors along the Sarkhej-Bavla highway.' },
      { id: 'sanand', city: 'Sanand GIDC', description: 'Engineering specialized, high-cycle hydraulic press components for tier-1 and tier-2 automotive suppliers in the Sanand hub.' },
      { id: 'narol', city: 'Narol & Piplaj', description: 'Delivering robust hydraulic cylinders for textile processing, dyeing, and heavy fabric machinery across the Narol-Piplaj industrial belt.' },
    ],
  },
  trustFactors: {
    title: 'The Advantage of a Local Ahmedabad Partner',
    description: '"When our main hydraulic press went down at 10 AM, we took the cylinder straight to Honeywell\'s factory in Kathwada. They repacked the seals and honed the barrel by 4 PM. We were back online for the night shift. You simply cannot get that level of service from an out-of-state supplier." — Production Head, Auto Components Manufacturer, Sanand.',
    items: [
      { id: 'tf1', title: 'ISO 9001:2015 Certified Engineering', description: 'Discuss complex circuits face-to-face at our facility. All cylinders undergo 1.5x hydrostatic testing, and we provide EN 10204 Type 3.1 material certificates.' },
      { id: 'tf2', title: 'Immediate Spares Availability', description: 'We stock a wide range of standard seals, hydraulic valves, and manifold accessories for immediate local pickup.' },
      { id: 'tf3', title: 'Local Accountability', description: 'We stand by our work. If there is ever an issue on your shop floor, our technicians are just a short drive away.' },
    ],
  },
  faqs: [
    { question: 'Where in Ahmedabad is your manufacturing facility located?', answer: 'Our state-of-the-art hydraulic manufacturing facility is located at B-18, Suryam Plaza Estate, Road no. 15, Kathwada GIDC, Ahmedabad. You are welcome to visit our factory to inspect our CNC machining capabilities and testing rigs.' },
    { question: 'Do you offer same-day delivery within Ahmedabad?', answer: 'Yes, for standard stock components, seals, and emergency replacement parts, we offer same-day dispatch and delivery to any GIDC within the Ahmedabad region, including Odhav, Vatva, Naroda, and Changodar.' },
    { question: 'Can you repair damaged hydraulic cylinders in Ahmedabad?', answer: 'Absolutely. We provide complete hydraulic cylinder repair and refurbishment services at our Kathwada facility. Bring in your damaged cylinders for teardown, seal replacement, barrel re-honing, or rod re-chroming to minimize your production downtime.' },
    { question: 'Do you supply hydraulic equipment to the Sanand auto hub?', answer: 'Yes, we supply highly engineered hydraulic cylinders and specialized power packs to automotive manufacturers and Tier-1 auto component suppliers located in Sanand GIDC.' },
    { question: 'What industries in Ahmedabad do you primarily serve?', answer: 'We serve a wide spectrum of Ahmedabad\'s industries, including plastic injection moulding in Odhav, chemical processing in Vatva, pharmaceutical and packaging machinery in Changodar, and textile processing in Narol.' }
  ],
  cta: {
    title: 'Partner with Ahmedabad\'s Leading Hydraulic Manufacturer',
    description: 'Don\'t let out-of-state shipping delays dictate your production schedule. Upgrade to precision-engineered hydraulic cylinders and power packs manufactured right here in Kathwada GIDC.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430',
    serviceAreas: 'Serving Kathwada, Odhav, Vatva, Naroda, Changodar, Sanand, and the entire Ahmedabad industrial region.',
  },
};
