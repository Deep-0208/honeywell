/* eslint-disable */
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
  alternates: {
    canonical: string;
  };
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

export interface ManufacturingData {
  title: string;
  description: string;
  processes: {
    id: string;
    title: string;
    description: string;
  }[];
  image: {
    src: string;
    alt: string;
  };
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

export interface LocationInternalLinks {
  homepage: string;
  productHub: string;
  cylinders: string;
  powerPacks: string;
  industries: string;
  applications: string;
  about: string;
  contact: string;
  resources: string;
  blogs: string;
}

export interface LocationPageData {
  seo: LocationSeoData;
  schema: any;
  hero: LocationHeroData;
  benefits: { title: string; description: string; items: BenefitData[] };
  industries: { title: string; description: string; items: IndustryData[] };
  products: { title: string; description: string; items: ProductData[] };
  serviceAreas: { title: string; description: string; items: ServiceAreaData[] };
  manufacturing: ManufacturingData;
  trustFactors: { title: string; description: string; items: TrustFactorData[] };
  faqs: FAQData[];
  cta: LocationCTAData;
  images: Record<string, string>;
  internalLinks: LocationInternalLinks;
}

export const gujaratFacility: LocationPageData = {
  seo: {
    title: 'Hydraulic Cylinder Manufacturer in Gujarat | Honeywell Hydraulics',
    description: 'Leading hydraulic cylinder manufacturer in Gujarat. Honeywell Hydraulics supplies custom industrial hydraulic cylinders and power packs from our Ahmedabad facility.',
    canonical: 'https://www.honeywellhydraulics.com/locations/gujarat-facility',
    openGraph: {
      title: 'Hydraulic Cylinder Manufacturer in Gujarat | Honeywell Hydraulics',
      description: 'Leading hydraulic cylinder manufacturer in Gujarat. Honeywell Hydraulics supplies custom industrial hydraulic cylinders and power packs from our Ahmedabad facility.',
      url: 'https://www.honeywellhydraulics.com/locations/gujarat-facility',
      images: [
        {
          url: '/images/locations/honeywell-hydraulics-manufacturing-facility-ahmedabad.jpg',
          width: 1200,
          height: 630,
          alt: 'Exterior view of Honeywell Hydraulics manufacturing facility in Kathwada GIDC, Ahmedabad',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Hydraulic Cylinder Manufacturer in Gujarat | Honeywell Hydraulics',
      description: 'Leading hydraulic cylinder manufacturer in Gujarat. Honeywell Hydraulics supplies custom industrial hydraulic cylinders and power packs from our Ahmedabad facility.',
      images: ['/images/locations/honeywell-hydraulics-manufacturing-facility-ahmedabad.jpg'],
    },
    keywords: [
      'hydraulic cylinder manufacturer in Gujarat',
      'hydraulic cylinder supplier Gujarat',
      'custom hydraulic cylinders Gujarat',
      'hydraulic power pack manufacturer Gujarat',
      'industrial hydraulic cylinders Gujarat',
      'hydraulic cylinder manufacturer Ahmedabad',
    ],
    alternates: {
      canonical: 'https://www.honeywellhydraulics.com/locations/gujarat-facility',
    },
  },
  schema: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        name: 'Honeywell Hydraulics',
        image: '/images/locations/honeywell-hydraulics-manufacturing-facility-ahmedabad.jpg',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Kathwada GIDC',
          addressLocality: 'Ahmedabad',
          addressRegion: 'Gujarat',
          addressCountry: 'IN',
        },
        telephone: '+91-98765-43210',
        url: 'https://www.honeywellhydraulics.com/locations/gujarat-facility',
      },
      {
        '@type': 'ManufacturingBusiness',
        name: 'Honeywell Hydraulics',
        description: 'Leading hydraulic cylinder manufacturer and supplier of industrial fluid power solutions in Gujarat, India.',
      },
      {
        '@type': 'WebPage',
        name: 'Hydraulic Cylinder Manufacturer in Gujarat',
        url: 'https://www.honeywellhydraulics.com/locations/gujarat-facility',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://www.honeywellhydraulics.com/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://www.honeywellhydraulics.com/locations',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Gujarat Facility',
            item: 'https://www.honeywellhydraulics.com/locations/gujarat-facility',
          },
        ],
      },
    ],
  },
  hero: {
    overline: 'Hydraulic Cylinder Manufacturer in Gujarat',
    title: 'Precision Hydraulic Solutions Manufactured in Ahmedabad',
    subtitle: 'Honeywell Hydraulics stands as a premier hydraulic cylinder manufacturer in Gujarat, engineering high-performance fluid power solutions for demanding industrial applications.',
    trustChips: ['Custom Engineering', 'Heavy-Duty Applications', 'OEM Manufacturer'],
    image: {
      src: '/images/locations/honeywell-hydraulics-manufacturing-facility-ahmedabad.jpg',
      alt: 'Exterior view of Honeywell Hydraulics manufacturing facility in Kathwada GIDC, Ahmedabad, Gujarat.',
    },
    ctas: {
      primary: { label: 'Request a Quote', href: '/request-quote' },
      secondary: { label: 'Contact Our Engineers', href: '/contact-us' },
    },
  },
  benefits: {
    title: 'Why Choose Honeywell Hydraulics in Gujarat',
    description: 'Selecting the right hydraulic cylinder supplier in Gujarat is critical for maintaining uninterrupted industrial manufacturing. We integrate advanced technology with deep industry knowledge to deliver exceptional hydraulic equipment.',
    items: [
      {
        id: 'manufacturing',
        title: 'Advanced Manufacturing Expertise',
        description: 'Our Kathwada GIDC facility houses modern CNC machining and precision engineering equipment. We maintain strict tolerances and exact specifications for every industrial cylinder manufactured.',
      },
      {
        id: 'engineering',
        title: 'Dedicated Engineering Capabilities',
        description: 'We employ a team of experienced fluid power engineers capable of solving complex hydraulic power transmission challenges, covering custom cylinder design and system optimization.',
      },
      {
        id: 'quality',
        title: 'Rigorous Quality Assurance',
        description: 'Quality assurance is integrated into every stage of our manufacturing process. We utilize high-grade materials and perform comprehensive pressure testing on all hydraulic cylinders.',
      },
      {
        id: 'oem',
        title: 'Specialized OEM Manufacturing',
        description: 'As a trusted OEM manufacturer, we supply precision hydraulic components to machinery builders across Gujarat, offering scalable production and consistent quality.',
      },
      {
        id: 'support',
        title: 'Fast Turnaround and Local Support',
        description: 'Our strategic location in Ahmedabad allows us to provide rapid turnaround times for both new manufacturing and hydraulic cylinder repair in Gujarat.',
      },
    ],
  },
  industries: {
    title: 'Industries We Serve Across Gujarat',
    description: 'Gujarat is a major industrial hub, and our hydraulic systems power machinery across multiple sectors. We manufacture industrial hydraulic cylinders designed to meet specific operational demands.',
    items: [
      {
        id: 'textile',
        title: 'Textile Industry',
        description: 'We supply high-cycle hydraulic cylinders for textile presses, baling machines, and fabric tensioning systems designed for smooth, precise movements.',
        href: '/industries/textile-industry',
      },
      {
        id: 'injection-moulding',
        title: 'Injection Moulding',
        description: 'Our heavy-duty hydraulic cylinders provide the exact pressure and speed required for mould closing, injection, and ejection phases.',
        href: '/industries/injection-moulding',
      },
      {
        id: 'steel',
        title: 'Steel Industry',
        description: 'We manufacture robust industrial hydraulic cylinders for rolling mills, continuous casting machines, and furnace mechanisms with heat-resistant seals.',
        href: '/industries/steel-plants',
      },
      {
        id: 'cement',
        title: 'Cement Plants',
        description: 'Our hydraulic cylinders drive raw mills, rotary kilns, and packaging equipment in cement plants, protected against dust ingress.',
        href: '/industries/cement-industry',
      },
      {
        id: 'packaging',
        title: 'Packaging Industry',
        description: 'We supply responsive hydraulic cylinders and power packs for automated packaging lines, strapping machines, and palletizers.',
        href: '/industries/packaging-machinery',
      },
      {
        id: 'chemical',
        title: 'Chemical Plants',
        description: 'We manufacture custom hydraulic cylinders using specialized stainless steel alloys and chemical-resistant seals for aggressive environments.',
        href: '/industries/chemical-processing',
      },
    ],
  },
  products: {
    title: 'Hydraulic Products Available',
    description: 'Our product portfolio includes standard components and fully customized solutions designed for specific industrial applications across Gujarat.',
    items: [
      {
        id: 'industrial-cylinders',
        title: 'Hydraulic Cylinders',
        description: 'A wide array of industrial hydraulic cylinders designed to deliver consistent linear force in demanding manufacturing environments.',
        href: '/products/hydraulic-cylinders',
      },
      {
        id: 'welded-cylinders',
        title: 'Welded Hydraulic Cylinders',
        description: 'Engineered for heavy-duty applications where space is limited and high strength is required.',
        href: '/products/hydraulic-cylinders/welded',
      },
      {
        id: 'tie-rod-cylinders',
        title: 'Tie Rod Hydraulic Cylinders',
        description: 'Designed to NFPA and ISO standards, these cylinders are easily integrated into existing industrial automation systems.',
        href: '/products/hydraulic-cylinders/tie-rod',
      },
      {
        id: 'double-acting',
        title: 'Double Acting Cylinders',
        description: 'Provide hydraulic force in both extension and retraction strokes for controlled movement in two directions.',
        href: '/products/hydraulic-cylinders/double-acting',
      },
      {
        id: 'hydraulic-power-packs',
        title: 'Hydraulic Power Packs',
        description: 'Custom hydraulic power packs that deliver precise flow and pressure to your hydraulic circuitry.',
        href: '/products/hydraulic-power-packs',
      },
      {
        id: 'custom-solutions',
        title: 'Custom Hydraulic Solutions',
        description: 'Bespoke fluid power systems tailored to your unique specifications and engineering challenges.',
        href: '/applications/custom-hydraulic-solutions',
      },
    ],
  },
  serviceAreas: {
    title: 'Areas We Serve Across Gujarat',
    description: 'Our strategic location enables us to deliver high-quality hydraulic equipment and prompt technical support to industrial hubs throughout Gujarat.',
    items: [
      { id: 'ahmedabad', city: 'Ahmedabad', description: 'Primary manufacturing facility location, providing rapid delivery to local textile, plastic, and heavy engineering industries.' },
      { id: 'gandhinagar', city: 'Gandhinagar', description: 'Supplying precision hydraulic cylinders for electronics manufacturing, packaging, and specialized engineering sectors.' },
      { id: 'sanand', city: 'Sanand', description: 'Partnering with automotive and OEM manufacturers for assembly lines and metal stamping presses.' },
      { id: 'changodar', city: 'Changodar', description: 'Delivering custom hydraulic cylinders for pharmaceutical, chemical, and packaging companies.' },
      { id: 'kathwada', city: 'Kathwada', description: 'Serving neighboring machinery manufacturers with rapid prototyping and OEM cylinder manufacturing directly from our GIDC base.' },
      { id: 'vatva', city: 'Vatva', description: 'Supplying specialized hydraulic solutions that endure the harsh environments of chemical processing plants.' },
      { id: 'surat', city: 'Surat', description: 'Providing high-cycle hydraulic cylinders for the massive textile and diamond processing industries.' },
      { id: 'vadodara', city: 'Vadodara', description: 'Manufacturing heavy-duty hydraulic cylinders for EPC contractors and heavy machinery builders.' },
      { id: 'rajkot', city: 'Rajkot', description: 'Supplying OEM hydraulic components for CNC machine builders, forging plants, and agricultural equipment.' },
      { id: 'jamnagar', city: 'Jamnagar', description: 'Providing corrosion-resistant, heavy-duty hydraulic cylinders for massive refinery operations.' },
    ],
  },
  manufacturing: {
    title: 'Our Manufacturing Facility',
    description: 'Our advanced manufacturing facility in Kathwada GIDC, Ahmedabad, allows us to maintain complete control over the entire manufacturing process, ensuring uncompromised quality.',
    image: {
      src: '/images/locations/cnc-machining-hydraulic-cylinders-gujarat.jpg',
      alt: 'Advanced CNC machining centers producing precision hydraulic cylinder components',
    },
    processes: [
      {
        id: 'design',
        title: 'Engineering Design & Material Selection',
        description: 'Advanced CAD software design and strict sourcing of premium-grade steel, honed tubes, and high-performance seals.',
      },
      {
        id: 'machining',
        title: 'CNC Machining & Precision Welding',
        description: 'State-of-the-art CNC lathes and milling machines guarantee exact tolerances, followed by precision welding assembly.',
      },
      {
        id: 'assembly',
        title: 'Assembly & Pressure Testing',
        description: 'Careful assembly in a clean environment and rigorous pressure testing at dedicated test benches for zero internal leakage.',
      },
      {
        id: 'dispatch',
        title: 'Quality Inspection & Dispatch',
        description: 'Comprehensive dimensional inspection, protective coating application, and secure packaging before dispatch from Gujarat.',
      },
    ],
  },
  trustFactors: {
    title: 'Why Gujarat Industries Trust Honeywell Hydraulics',
    description: 'We have built a reputation based on technical competence, manufacturing reliability, and unwavering customer support.',
    items: [
      { id: 'tf1', title: 'Engineering Expertise', description: 'Decades of combined experience in hydraulic engineering solutions.' },
      { id: 'tf2', title: 'Reliable Delivery', description: 'Optimized manufacturing processes ensure we meet strict deadlines.' },
      { id: 'tf3', title: 'Quality Assurance', description: 'Every cylinder undergoes rigorous pressure testing.' },
      { id: 'tf4', title: 'OEM Experience', description: 'Proven track record of supplying consistent, high-quality components.' },
      { id: 'tf5', title: 'Customization', description: 'Custom cylinders tailored to exact stroke, bore, and pressure.' },
      { id: 'tf6', title: 'Competitive Pricing', description: 'Efficient manufacturing allows us to offer premium components competitively.' },
      { id: 'tf7', title: 'Fast Response', description: 'Local presence ensures rapid responses to inquiries and repairs.' },
      { id: 'tf8', title: 'Local Manufacturing', description: 'Ahmedabad facility utilizes modern CNC machining and testing equipment.' },
      { id: 'tf9', title: 'Skilled Workforce', description: 'Highly trained team from CAD designers to certified welders.' },
      { id: 'tf10', title: 'Long-Term Support', description: 'Continuous after-sales service, troubleshooting, and maintenance.' },
    ],
  },
  faqs: [
    { question: 'Who is the best hydraulic cylinder manufacturer in Gujarat?', answer: 'Honeywell Hydraulics is widely recognized as a premier hydraulic cylinder manufacturer in Gujarat. Operating from Ahmedabad, we combine advanced CNC manufacturing with deep engineering expertise.' },
    { question: 'Do you manufacture custom hydraulic cylinders?', answer: 'Yes. We specialize in designing and manufacturing custom hydraulic cylinders based on specific pressure requirements, mounting styles, and environmental conditions.' },
    { question: 'What industries do you serve?', answer: 'We supply hydraulic equipment to a diverse range of sectors including textile manufacturing, injection moulding, steel plants, cement production, construction equipment, and material handling.' },
    { question: 'Can you manufacture as per drawing?', answer: 'Absolutely. We regularly manufacture hydraulic cylinders based on customer-supplied CAD drawings and technical specifications.' },
    { question: 'Do you supply throughout Gujarat?', answer: 'Yes, we supply and support hydraulic systems across all major industrial hubs in Gujarat including Ahmedabad, Surat, Vadodara, Rajkot, Jamnagar, and Bharuch.' },
    { question: 'What materials do you use?', answer: 'We utilize precision-honed steel tubes, hard chrome-plated high-tensile steel for piston rods, and premium polyurethane or PTFE seals.' },
    { question: 'How long is delivery?', answer: 'Standard tie rod cylinders can be dispatched quickly, while custom hydraulic cylinders require specific design and manufacturing cycles. We provide accurate lead times during the quotation phase.' },
    { question: 'Can you repair hydraulic cylinders?', answer: 'Yes, we provide comprehensive hydraulic cylinder repair in Gujarat, handling complete teardowns, resealing, rod re-chroming, and pressure testing.' },
    { question: 'Do you manufacture hydraulic power packs?', answer: 'Yes, we design and assemble custom hydraulic power packs engineered to deliver precise flow and pressure for specific machinery.' },
    { question: 'How can I request a quotation?', answer: 'You can request a quotation by contacting our technical team directly via our website contact form, email, or phone with your technical specifications.' },
  ],
  cta: {
    title: 'Upgrade Your Fluid Power Systems Today',
    description: 'Ready to improve the reliability and efficiency of your industrial machinery? Partner with the leading hydraulic cylinder company in Gujarat.',
    phone: '+91-98765-43210',
    email: 'sales@honeywellhydraulics.com',
    address: 'Kathwada GIDC, Ahmedabad, Gujarat, India',
    serviceAreas: 'Serving industrial manufacturing hubs across Ahmedabad, Surat, Vadodara, Rajkot, and all of Western India.',
  },
  images: {
    hero: '/images/locations/honeywell-hydraulics-manufacturing-facility-ahmedabad.jpg',
    production: '/images/locations/cnc-machining-hydraulic-cylinders-gujarat.jpg',
    assembly: '/images/locations/heavy-duty-industrial-hydraulic-cylinder-assembly.jpg',
    testing: '/images/locations/hydraulic-cylinder-pressure-testing-facility.jpg',
    map: '/images/locations/gujarat-hydraulic-cylinder-supplier-service-map.jpg',
  },
  internalLinks: {
    homepage: '/',
    productHub: '/products',
    cylinders: '/products/hydraulic-cylinders',
    powerPacks: '/products/hydraulic-power-packs',
    industries: '/industries',
    applications: '/applications',
    about: '/about-us',
    contact: '/contact-us',
    resources: '/resources',
    blogs: '/blog',
  },
};
