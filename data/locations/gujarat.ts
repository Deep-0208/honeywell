export interface LocationSeoData {
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    images: { url: string; width: number; height: number; alt: string }[];
  };
  twitter: {
    card: string;
    title: string;
    description: string;
    images: string[];
  };
  keywords: string[];
}

export interface LocationHeroData {
  overline: string;
  title: string;
  subtitle: string;
  trustChips: string[];
  image: {
    src: string;
    alt: string;
  };
  ctas: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
}

export interface BenefitData {
  id: string;
  title: string;
  description: string;
}

export interface IndustryData {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface ProductData {
  id: string;
  title: string;
  description: string;
  href: string;
}

export interface ServiceAreaData {
  id: string;
  city: string;
  description: string;
}

export interface CaseStudyData {
  title: string;
  challenge: string;
  solution: string;
  resultStat: string;
  resultLabel: string;
}

export interface TrustFactorData {
  id: string;
  title: string;
  description: string;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface LocationCTAData {
  title: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  serviceAreas: string;
}

export interface LocationPageData {
  seo: LocationSeoData;
  schema: Record<string, unknown>;
  hero: LocationHeroData;
  benefits: { title: string; description: string; items: BenefitData[] };
  products: { title: string; description: string; items: ProductData[] };
  industries: { title: string; description: string; items: IndustryData[] };
  caseStudy: CaseStudyData;
  serviceAreas: { title: string; description: string; items: ServiceAreaData[] };
  trustFactors: { title: string; description: string; items: TrustFactorData[] };
  faqs: FAQData[];
  cta: LocationCTAData;
}

export const gujaratData: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer Gujarat | Honeywell',
    description: 'Leading hydraulic cylinder & power pack manufacturer in Gujarat. Supplying Ahmedabad, Surat & Rajkot at factory-direct pricing. Get a free quote today.',
    canonical: 'https://www.honeywellhydraulics.com/locations/gujarat/',
    openGraph: {
      title: 'Hydraulic Cylinder Manufacturer Gujarat | Honeywell',
      description: 'Leading hydraulic cylinder & power pack manufacturer in Gujarat. Supplying Ahmedabad, Surat & Rajkot at factory-direct pricing. Get a free quote today.',
      url: 'https://www.honeywellhydraulics.com/locations/gujarat/',
      images: [
        {
          url: '/images/locations/honeywell-hydraulics-manufacturing-facility-ahmedabad.jpg',
          width: 1200,
          height: 630,
          alt: 'Honeywell Hydraulics manufacturing facility in Gujarat',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer Gujarat | Honeywell',
      description: 'Leading hydraulic cylinder & power pack manufacturer in Gujarat. Supplying Ahmedabad, Surat & Rajkot at factory-direct pricing. Get a free quote today.',
      images: ['/images/locations/honeywell-hydraulics-manufacturing-facility-ahmedabad.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer in Gujarat',
      'hydraulic cylinder supplier Gujarat',
      'custom hydraulic cylinders Gujarat',
      'hydraulic power pack manufacturer Gujarat',
      'industrial hydraulic cylinders Gujarat',
      'hydraulic cylinder manufacturer Ahmedabad',
      'top hydraulic cylinder manufacturers in gujarat',
      'list of hydraulic cylinder manufacturers in gujarat',
      'hydraulic cylinder manufacturers in rajkot',
      'top 10 hydraulic cylinder manufacturers in gujarat',
      'small hydraulic cylinder manufacturers in gujarat',
      'hydraulic cylinder manufacturers in gujarat ahmedabad',
    ],
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': 'https://www.honeywellhydraulics.com/locations/gujarat/#service',
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
          '@type': 'State',
          name: 'Gujarat',
          containedInPlace: {
            '@type': 'Country',
            name: 'India'
          }
        },
        description: 'Custom hydraulic cylinder, power pack, and system manufacturing and supply across all Gujarat GIDC estates. Same-day delivery in Ahmedabad, 1-2 day delivery statewide.'
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.honeywellhydraulics.com/locations/gujarat/',
        name: 'Hydraulic Cylinder Manufacturer in Gujarat | Honeywell Hydraulics',
        url: 'https://www.honeywellhydraulics.com/locations/gujarat/'
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.honeywellhydraulics.com/' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.honeywellhydraulics.com/locations/' },
          { '@type': 'ListItem', position: 3, name: 'Gujarat', item: 'https://www.honeywellhydraulics.com/locations/gujarat/' }
        ]
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'Do you deliver hydraulic cylinders to all GIDC estates in Gujarat?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, we supply our hydraulic equipment to every single recognized GIDC and private industrial estate across Gujarat — including Kathwada, Odhav, Vatva, Naroda, Changodar, Sanand, and Bavla in Ahmedabad; Makarpura, Waghodia, and Savli in Vadodara; Sachin, Pandesara, and Hazira in Surat; Aji, Lodhika, and Metoda in Rajkot; and all other GIDC zones statewide.' } },
          { '@type': 'Question', name: 'Can I visit your factory in Ahmedabad before placing a large order?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. We highly encourage factory visits, especially for OEMs and bulk buyers. You can audit our CNC machining centres, inspect our hydrostatic testing rigs, and meet the engineers who will design your equipment. Our facility is at B-18, Suryam Plaza Estate, Kathwada GIDC, Ahmedabad. Call +91 9924343873 to schedule a visit.' } },
          { '@type': 'Question', name: 'How fast can you deliver a custom hydraulic cylinder to Surat or Rajkot?', acceptedAnswer: { '@type': 'Answer', text: 'Once manufactured, standard transit time to Surat, Rajkot, or Vadodara is just 1 to 2 days. Within Ahmedabad, we offer same-day delivery for stock items and emergency components. Custom-manufactured cylinders are produced in 7–15 working days at our Kathwada facility.' } },
          { '@type': 'Question', name: 'What certifications does Honeywell Hydraulics hold?', acceptedAnswer: { '@type': 'Answer', text: 'We are ISO 9001:2015 certified. All hydraulic cylinders are 100% hydrostatic pressure tested at 1.5x rated working pressure before dispatch. We also provide EN 10204 Type 3.1 material certificates for all critical components, which is essential for procurement compliance in steel plants and government projects.' } },
          { '@type': 'Question', name: 'Do you offer emergency hydraulic cylinder repair in Gujarat?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. If you experience a hydraulic cylinder failure in any Gujarat GIDC, you can bring the unit to our Kathwada facility for immediate assessment. Our Hydraulic Cylinder Repair team performs teardown, re-boring, re-sealing, or complete re-machining to get you back online with minimal downtime.' } },
          { '@type': 'Question', name: 'How does your pricing compare to other Gujarat hydraulic manufacturers?', acceptedAnswer: { '@type': 'Answer', text: 'As a direct manufacturer (not a trader or dealer), we offer factory-direct pricing without intermediary markups. Our integrated manufacturing facility — where we machine, assemble, and test everything under one roof — gives us a significant cost advantage over companies that outsource individual processes. We welcome competitive quote comparisons.' } },
          { '@type': 'Question', name: 'Can you manufacture hydraulic cylinders for extreme-pressure applications?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We manufacture heavy-duty cylinders rated for working pressures up to 350 Bar (5,000 PSI). These are used in steel plant rolling mills, heavy forging presses, and deep-draw forming operations across Gujarat. Our engineering team can size cylinders for your specific load and pressure requirements.' } },
          { '@type': 'Question', name: 'Do you supply complete hydraulic systems, or only individual components?', acceptedAnswer: { '@type': 'Answer', text: 'We supply both. In addition to individual hydraulic cylinders, power packs, and manifold blocks, we design and deliver complete turnkey hydraulic systems — including circuit design, component selection, manifold machining, piping, wiring, and factory acceptance testing. This makes us a single-source hydraulic partner for Gujarat\'s OEMs and SPM builders.' } }
        ]
      }
    ]
  },
  hero: {
    overline: 'SERVING GUJARAT STATE',
    title: 'Hydraulic Cylinder & Power Pack Manufacturer in Gujarat',
    subtitle: 'Gujarat\'s trusted hydraulic equipment manufacturer. From our state-of-the-art facility in Kathwada GIDC, Ahmedabad, we engineer and supply high-performance hydraulic cylinders and custom power packs to every major industrial zone across the state. Whether you operate a press shop in Rajkot or a chemical plant in Vapi, we deliver industrial-grade fluid power solutions directly to your factory floor.',
    trustChips: ['200+ Clients in Gujarat', '1–3 Days Delivery', '25+ GIDC Zones Covered'],
    image: {
      src: '/images/locations/honeywell-hydraulics-manufacturing-facility-ahmedabad.jpg',
      alt: 'Honeywell Hydraulics manufacturing facility in Gujarat',
    },
    ctas: {
      primary: { label: 'GET A QUOTE — GUJARAT DELIVERY', href: '/request-quote/' },
      secondary: { label: 'DOWNLOAD PRODUCT BROCHURE', href: '/resources/downloads/' },
    },
  },
  benefits: {
    title: 'Why Gujarat Industries Choose Honeywell Hydraulics',
    description: 'Gujarat is the industrial powerhouse of India. Manufacturers across the state choose Honeywell Hydraulics because we mirror these same industrial values.',
    items: [
      {
        id: 'local-eng',
        title: 'Local Engineering, Global Standards',
        description: 'As a Gujarat-based hydraulic manufacturer, we understand the rigorous demands of local production cycles. Our CNC-machined hydraulic components meet international quality benchmarks—featuring Ra 0.2 to 0.4 µm honed barrels and hard-chrome plated rods ground to h8 tolerances.',
      },
      {
        id: 'make-in-guj',
        title: 'The "Make in Gujarat" Advantage',
        description: 'Buying from a supplier located in your state eliminates massive logistical delays. Our proximity means your production line never stalls waiting for critical actuators.',
      },
      {
        id: 'factory-direct',
        title: 'Factory-Direct Commercials',
        description: 'We do not operate through a network of regional dealers. When you order from us, you deal directly with the engineering facility in Ahmedabad.',
      },
    ],
  },
  products: {
    title: 'Hydraulic Products Supplied Across Gujarat',
    description: 'We manufacture and deliver a comprehensive catalog of heavy-duty hydraulic equipment across all Gujarat GIDC estates.',
    items: [
      {
        id: 'cylinders',
        title: 'Hydraulic Cylinders',
        description: 'Engineered for endurance. We manufacture custom hydraulic cylinders ranging from 40mm to 300mm in bore size, capable of handling working pressures up to 350 Bar.',
        href: '/products/hydraulic-cylinders/',
      },
      {
        id: 'power-packs',
        title: 'Hydraulic Power Packs',
        description: 'Reliable fluid power generation designed for continuous industrial duty. Our power packs are fully assembled, piped, and pressure-tested before dispatch.',
        href: '/products/hydraulic-power-packs/',
      },
      {
        id: 'manifold-blocks',
        title: 'Manifold Blocks',
        description: 'Precision CNC-machined aluminum and steel manifold blocks to consolidate your hydraulic circuitry.',
        href: '/products/manifold-blocks/',
      },
      {
        id: 'systems',
        title: 'Complete Hydraulic Systems',
        description: 'Beyond individual components, we provide turnkey hydraulic automation for specialized machinery.',
        href: '/products/hydraulic-systems/',
      },
    ],
  },
  industries: {
    title: 'Industries Served in Gujarat',
    description: 'Gujarat\'s industrial landscape is incredibly diverse. We supply specialized solutions to the state\'s most prominent manufacturing sectors.',
    items: [
      {
        id: 'plastic',
        title: 'Plastic & Injection Moulding (Ahmedabad & Halol)',
        description: 'We supply high-low power packs for rapid approach and high-pressure clamping, core-pull cylinders, and manifold blocks for modern moulding machines.',
        href: '/industries/injection-moulding/',
      },
      {
        id: 'textile',
        title: 'Textiles & Diamond Processing (Surat & Navsari)',
        description: 'Surat\'s massive textile mills rely on precise automation. We manufacture compact, highly accurate components for processing machinery.',
        href: '/industries/special-purpose-machines/',
      },
      {
        id: 'auto-parts',
        title: 'Auto Parts & Machine Tools (Rajkot)',
        description: 'Rajkot is the engineering heart of Gujarat. We supply heavy-duty cylinders matching strict requirements for dimensional accuracy.',
        href: '/industries/automotive/',
      },
      {
        id: 'chemicals',
        title: 'Chemicals & Pharmaceuticals (Vadodara & Vapi)',
        description: 'We engineer custom cylinders utilizing specialized corrosion-resistant coatings to withstand the harsh atmospheres of Vadodara and Vapi.',
        href: '/industries/chemical-processing/',
      },
      {
        id: 'ship-breaking',
        title: 'Ship Breaking & Heavy Industry (Bhavnagar)',
        description: 'Alang\'s ship-breaking yards require massive force generation. We build oversized, extreme-pressure cylinders designed specifically to survive extreme mechanical shock.',
        href: '/industries/material-handling/',
      },
      {
        id: 'brass-parts',
        title: 'Brass Parts & Hardware (Jamnagar)',
        description: 'Our dedicated press cylinders deliver rapid approach speeds and high-tonnage pressing required for brass component production.',
        href: '/industries/special-purpose-machines/',
      },
    ],
  },
  caseStudy: {
    title: 'Automated Press Line Upgrade in Rajkot',
    challenge: 'The client\'s aging press machinery was suffering from severe hydraulic fluid leaks and inconsistent pressing force, leading to a 15% rejection rate on forged auto components. They needed a robust, high-pressure upgrade without rebuilding the entire press frame.',
    solution: 'Our Ahmedabad engineering team designed drop-in replacement flange-mounted cylinders with reinforced barrels and high-temperature Viton seals. We paired these with a custom high-low hydraulic power pack optimized for rapid approach and slow, extreme-pressure forging.',
    resultStat: '1%',
    resultLabel: 'Drop in rejection rate (down from 15%)',
  },
  serviceAreas: {
    title: 'Service Areas & GIDC Coverage Across Gujarat',
    description: 'We supply custom hydraulic cylinders and power packs to every major industrial city and GIDC estate in the state.',
    items: [
      { id: 'ahmedabad', city: 'Ahmedabad Region', description: 'Same-day delivery to Kathwada, Naroda, Vatva, Odhav, Narol, Changodar, Sanand, and Bavla. We serve as the primary hydraulic supplier for the city\'s vast engineering sectors.' },
      { id: 'vadodara', city: 'Vadodara (Central Gujarat)', description: 'Just 110 km from our factory, we deliver rapidly to Makarpura, Waghodia, Savli, Halol, Padra, and Karjan.' },
      { id: 'surat', city: 'Surat (South Gujarat)', description: 'We serve South Gujarat\'s textile and chemical hubs with regular shipments to Sachin, Pandesara, Hazira, Ichhapore, and Kadodara.' },
      { id: 'rajkot', city: 'Rajkot & Saurashtra', description: 'We supply Rajkot\'s demanding engineering sector, delivering precision cylinders to Aji, Lodhika, Metoda, and Shapar-Veraval.' },
      { id: 'vapi', city: 'Vapi & Valsad', description: 'For the chemical and paper industries in deep South Gujarat, we deliver reliably to Vapi GIDC, Sarigam, Valsad, Umbergaon, and neighboring Daman.' },
      { id: 'bhavnagar', city: 'Bhavnagar & Jamnagar', description: 'We supply heavy-duty equipment to the ship-breaking industries in Bhavnagar GIDC, as well as specialized press cylinders for the brass manufacturing clusters in Jamnagar.' },
      { id: 'gandhinagar', city: 'Gandhinagar & North Gujarat', description: 'Located adjacent to our headquarters, we offer rapid supply to Gandhinagar GIDC, Kalol, Kadi, and Mehsana.' },
    ],
  },
  trustFactors: {
    title: 'Why Work With a Gujarat-Based Manufacturer?',
    description: '"Sourcing our hydraulic cylinders from Honeywell in Ahmedabad has transformed our maintenance schedule. If we need an urgent replacement or a custom seal kit, it\'s on a truck to Vadodara the same afternoon. You can\'t get that from out-of-state suppliers." — Maintenance Manager, Chemicals Ltd.',
    items: [
      { id: 'tf1', title: 'Zero Transit Delays', description: 'No interstate border crossings, no long-haul shipping delays.' },
      { id: 'tf2', title: 'Factory Inspections', description: 'You can physically visit our Kathwada facility to inspect material quality.' },
      { id: 'tf3', title: 'Local Language Support', description: 'Our teams speak Gujarati and Hindi, ensuring flawless technical communication.' },
    ],
  },
  faqs: [
    { question: 'Do you deliver hydraulic cylinders to all GIDC estates in Gujarat?', answer: 'Yes, we supply our hydraulic equipment to every single recognized GIDC and private industrial estate across Gujarat — including Kathwada, Odhav, Vatva, Naroda, Changodar, Sanand, and Bavla in Ahmedabad; Makarpura, Waghodia, and Savli in Vadodara; Sachin, Pandesara, and Hazira in Surat; Aji, Lodhika, and Metoda in Rajkot; and all other GIDC zones statewide.' },
    { question: 'Can I visit your factory in Ahmedabad before placing a large order?', answer: 'Absolutely. We highly encourage factory visits, especially for OEMs and bulk buyers. You can audit our CNC machining centres, inspect our hydrostatic testing rigs, and meet the engineers who will design your equipment. Our facility is at B-18, Suryam Plaza Estate, Kathwada GIDC, Ahmedabad. Call +91 9924343873 to schedule a visit.' },
    { question: 'How fast can you deliver a custom hydraulic cylinder to Surat or Rajkot?', answer: 'Once manufactured, standard transit time to Surat, Rajkot, or Vadodara is just 1 to 2 days. Within Ahmedabad, we offer same-day delivery for stock items and emergency components. Custom-manufactured cylinders are produced in 7–15 working days at our Kathwada facility.' },
    { question: 'What certifications does Honeywell Hydraulics hold?', answer: 'We are ISO 9001:2015 certified. All hydraulic cylinders are 100% hydrostatic pressure tested at 1.5x rated working pressure before dispatch. We also provide EN 10204 Type 3.1 material certificates for all critical components, which is essential for procurement compliance in steel plants and government projects.' },
    { question: 'Do you offer emergency hydraulic cylinder repair in Gujarat?', answer: 'Yes. If you experience a hydraulic cylinder failure in any Gujarat GIDC, you can bring the unit to our Kathwada facility for immediate assessment. Our Hydraulic Cylinder Repair team performs teardown, re-boring, re-sealing, or complete re-machining to get you back online with minimal downtime.' },
    { question: 'How does your pricing compare to other Gujarat hydraulic manufacturers?', answer: 'As a direct manufacturer (not a trader or dealer), we offer factory-direct pricing without intermediary markups. Our integrated manufacturing facility — where we machine, assemble, and test everything under one roof — gives us a significant cost advantage over companies that outsource individual processes. We welcome competitive quote comparisons.' },
    { question: 'Can you manufacture hydraulic cylinders for extreme-pressure applications?', answer: 'Yes. We manufacture heavy-duty cylinders rated for working pressures up to 350 Bar (5,000 PSI). These are used in steel plant rolling mills, heavy forging presses, and deep-draw forming operations across Gujarat. Our engineering team can size cylinders for your specific load and pressure requirements.' },
    { question: 'Do you supply complete hydraulic systems, or only individual components?', answer: 'We supply both. In addition to individual hydraulic cylinders, power packs, and manifold blocks, we design and deliver complete turnkey hydraulic systems — including circuit design, component selection, manifold machining, piping, wiring, and factory acceptance testing. This makes us a single-source hydraulic partner for Gujarat\'s OEMs and SPM builders.' },
  ],
  cta: {
    title: 'Request a Quote — Delivered to Your Gujarat Facility',
    description: 'Stop relying on generic trading houses for your critical machinery. Upgrade to precision-engineered hydraulic equipment manufactured right here in Gujarat — with same-day availability in Ahmedabad and 1–2 day delivery across the state.',
    phone: '+91 9924343873',
    email: 'sales@honeywellhydraulics.com',
    address: 'B-18, Suryam Plaza Estate, Near Nilkanth Estate, Road no. 15, Kathwada GIDC, Ahmedabad, Gujarat 382430',
    serviceAreas: 'Serving industrial manufacturing hubs across Ahmedabad, Surat, Vadodara, Rajkot, and all of Western India.',
  },
};
