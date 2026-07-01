import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { CTA } from '@/components/ui/CTA';
import { ProductCard } from '@/components/cards/ProductCard';
import { SiteFAQSection } from '@/components/faq/SiteFAQSection';
import { SpecTable } from '@/components/tables/SpecTable';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { Card, CardContent } from '@/components/ui/Card';
import JsonLd from '@/components/seo/JsonLd';
import { ArrowRight, Activity, Shield, CheckCircle, Cpu, Layers, Wrench, Factory, Users, Award, Truck, Zap, Cog } from 'lucide-react';
import { IconBox } from '@/components/ui/IconBox';
import { COMPANY_INFO } from '@/lib/constants';
import { buildMetadata } from '@/lib/seo';
// ── C3: Full metadata with canonical, OG, Twitter ────────────────────────────
export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Hydraulic Products Manufacturer | Honeywell',
    description:
      'Leading hydraulic products manufacturer in India. Explore precision-engineered hydraulic cylinders, power packs, manifold blocks, and turnkey systems.',
    canonical: '/products',
  }),
};
export default function ProductsHubPage() {
  const siteUrl = COMPANY_INFO.websiteUrl;
  // C4: No ContactPage schema — this is a product hub, not a contact page.
  // C5: No CollectionPage hasPart — product detail pages do not exist yet (Phase 5).
  //     hasPart will be re-added in Phase 5 once product detail pages are built.
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${siteUrl}/products#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteUrl}/products`,
      },
    ],
  };
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${siteUrl}/products#webpage`,
    url: `${siteUrl}/products`,
    name: 'Industrial Hydraulic Products Manufacturer | Honeywell Hydraulics',
    description: 'Leading hydraulic products manufacturer in India. Explore our precision-engineered hydraulic cylinders and power packs.',
    isPartOf: { '@id': `${siteUrl}/#website` },
    inLanguage: 'en-IN',
  };
  const productListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}/products#itemlist`,
    name: 'Honeywell Hydraulics Product Categories',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Hydraulic Cylinders', url: `${siteUrl}/products/hydraulic-cylinders` },
      { '@type': 'ListItem', position: 2, name: 'Hydraulic Power Packs', url: `${siteUrl}/products/hydraulic-power-packs` },
    ],
  };
  const faqs = [
    {
      question: 'Are your hydraulic products manufactured in-house?',
      answer: 'Yes. We are a direct manufacturer, not a trading house. All hydraulic cylinders and power packs are CNC-machined, assembled, and pressure-tested at our Ahmedabad, Gujarat manufacturing facility.',
    },
    {
      question: 'Do you offer custom industrial hydraulic equipment?',
      answer: 'Custom manufacturing is our primary focus. While we offer standard sizing, the majority of our hydraulic products are built specifically to our clients\' unique load, speed, and spatial requirements.',
    },
    {
      question: 'What is the standard lead time for custom hydraulic products?',
      answer: 'Standard custom cylinders are typically dispatched within 7 to 15 days. Custom power packs require 10 to 20 days depending on the complexity of the valve logic and tank size.',
    },
    {
      question: 'Do you supply OEM quantities?',
      answer: 'Absolutely. We act as the dedicated fluid power partner for dozens of OEMs across India, providing scheduled monthly deliveries of identical, high-tolerance hydraulic cylinders and power packs for their assembly lines.',
    },
  ];
  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={productListSchema} />
      {/* Hero Section */}
      <section className="relative bg-honeywell-navy text-white pt-6 md:pt-8 lg:pt-10 pb-16 lg:pb-24 overflow-hidden border-b border-honeywell-navy">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-honeywell-red/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-honeywell-red/5 to-transparent skew-x-12 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" aria-hidden="true" />

        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="text-sm font-body text-brand-borderGray mb-8">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
              </li>
              <li aria-hidden="true" className="text-brand-borderGray/50">/</li>
              <li className="text-white font-semibold tracking-wide" aria-current="page">Products</li>
            </ol>
          </nav>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block py-1.5 px-4 rounded-full bg-honeywell-red/20 text-honeywell-red border border-honeywell-red/30 text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm shadow-sm">
                PRODUCTS HUB
              </span>
              <Heading variant="hero" as="h1" className="text-white mb-6 leading-tight text-4xl md:text-5xl lg:text-6xl drop-shadow-sm">
                Industrial Hydraulic Products Manufacturer
              </Heading>
              <p className="text-brand-borderGray text-lg sm:text-xl font-body mb-8 leading-relaxed max-w-2xl font-light">
                Precision-engineered fluid power solutions for heavy industry. As a leading hydraulic products manufacturer, we design, machine, and test highly reliable hydraulic cylinders and power packs. Built for continuous operation in the most demanding manufacturing environments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" href="/request-quote" rightIcon={<ArrowRight className="w-5 h-5" />} className="shadow-lg shadow-honeywell-red/20">
                  REQUEST A CUSTOM QUOTE
                </Button>
                <Button variant="outline" size="lg" href="/contact-us" className="border-white/30 text-white hover:bg-white hover:text-honeywell-navy backdrop-blur-sm">
                  CONTACT ENGINEERING TEAM
                </Button>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative hidden lg:block">
              {/* Abstract fluid power graphic or engineered layout */}
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-honeywell-red/20 to-transparent rounded-full animate-pulse-slow blur-2xl" />
                <div className="absolute inset-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden flex items-center justify-center p-8 shadow-2xl">
                   <div className="grid grid-cols-2 gap-4 w-full h-full">
                      <div className="bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                        <Image src="/images/products/hero/hydraulic-cylinders-ahmedabad.webp" alt="Hydraulic Cylinders" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                      <div className="bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                        <Image src="/images/products/hero/hydraulic-power-pack.webp" alt="Hydraulic Power Packs" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                      <div className="bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                        <Image src="/images/products/hero/hydraulic-manifold-blocks-manufacturer.webp" alt="Hydraulic Manifold Blocks" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                      <div className="bg-white/5 rounded-xl border border-white/10 relative overflow-hidden group">
                        <Image src="/images/products/hero/custom-hydraulic-systems-ahmedabad.webp" alt="Custom Hydraulic Systems" fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 50vw" />
                      </div>
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-honeywell-navy rounded-full p-6 shadow-xl border border-white/10">
                        <Cog className="w-12 h-12 text-honeywell-red animate-[spin_10s_linear_infinite]" />
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* M6: EEAT Reviewer Block hidden — reviewer data not yet documented.
           Re-enable with real name, role, image when data is available.
           Tracked in REQUIRED_IMAGES_MASTER.md */}
      {/* The Honeywell Fluid Power Ecosystem */}
      <Section bg="white" id="ecosystem" aria-labelledby="ecosystem-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-3xl">
              <Heading variant="section" as="h2" id="ecosystem-heading" className="mb-4">
                The Honeywell Fluid Power Ecosystem
              </Heading>
              <p className="text-lg text-brand-steelGray font-body">
                Industrial automation requires more than just individual components; it requires a synchronized fluid power ecosystem. At Honeywell Hydraulics, we manufacture every critical node of that ecosystem under one roof, ensuring absolute compatibility, minimal pressure drops, and maximum mechanical efficiency.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card variant="interactive" className="flex flex-col h-full group relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-premium overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-honeywell-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
              <CardContent className="flex flex-col flex-1 p-6 z-10">
                <IconBox icon={<Activity className="w-6 h-6" />} variant="primary" className="mb-4 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-350 ease-premium" />
                <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Heart: Power Packs</h3>
                <p className="text-sm text-brand-steelGray font-body mb-6 flex-1">Converting electrical energy into pressurized hydrostatic energy.</p>
                <Link href="/products/hydraulic-power-packs" className="text-honeywell-red font-medium font-body text-sm flex items-center group-hover:gap-2 transition-all before:absolute before:inset-0 before:z-0">
                  <span className="relative z-10 flex items-center">
                  Explore <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" /></span>
                </Link>
              </CardContent>
            </Card>
            
            <Card variant="interactive" className="flex flex-col h-full group relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-premium overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-honeywell-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
              <CardContent className="flex flex-col flex-1 p-6 z-10">
                <IconBox icon={<Cpu className="w-6 h-6" />} variant="primary" className="mb-4 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-350 ease-premium" />
                <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Muscle: Hydraulic Cylinders</h3>
                <p className="text-sm text-brand-steelGray font-body mb-6 flex-1">Transforming fluid pressure into precise linear mechanical force.</p>
                <Link href="/products/hydraulic-cylinders" className="text-honeywell-red font-medium font-body text-sm flex items-center group-hover:gap-2 transition-all before:absolute before:inset-0 before:z-0">
                  <span className="relative z-10 flex items-center">
                  Explore <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" /></span>
                </Link>
              </CardContent>
            </Card>
            
            <Card variant="interactive" className="flex flex-col h-full group relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-premium overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-honeywell-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
              <CardContent className="flex flex-col flex-1 p-6 z-10">
                <IconBox icon={<Layers className="w-6 h-6" />} variant="primary" className="mb-4 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-350 ease-premium" />
                <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Brain: Manifold Blocks</h3>
                <p className="text-sm text-brand-steelGray font-body mb-6 flex-1">Directing fluid logic with zero-leak cartridge valve integration.</p>
                <Link href="/products/manifold-blocks" className="text-honeywell-red font-medium font-body text-sm flex items-center group-hover:gap-2 transition-all before:absolute before:inset-0 before:z-0">
                  <span className="relative z-10 flex items-center">
                  Explore <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" /></span>
                </Link>
              </CardContent>
            </Card>
            
            <Card variant="interactive" className="flex flex-col h-full group relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-premium overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-honeywell-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
              <CardContent className="flex flex-col flex-1 p-6 z-10">
                <IconBox icon={<Wrench className="w-6 h-6" />} variant="primary" className="mb-4 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-350 ease-premium" />
                <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Nervous System: Turnkey Systems</h3>
                <p className="text-sm text-brand-steelGray font-body mb-6 flex-1">Integrated PLC-controlled hydraulic power units with remote monitoring.</p>
                <Link href="/products/turnkey-systems" className="text-honeywell-red font-medium font-body text-sm flex items-center group-hover:gap-2 transition-all before:absolute before:inset-0 before:z-0">
                  <span className="relative z-10 flex items-center">
                  Explore <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" /></span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
      {/* Product Categories Grid */}
      <Section bg="gray" id="categories" aria-labelledby="categories-heading">
        <Container>
          <div className="max-w-3xl mb-12">
            <Heading variant="section" as="h2" id="categories-heading" className="mb-6">
              Product Categories
            </Heading>
            <p className="text-lg text-brand-steelGray font-body">
              We manufacture two core families of industrial hydraulic equipment. Select a category below to explore technical specifications, mounting configurations, and variant options.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
             <ProductCard 
                title="Hydraulic Cylinders"
                description="Heavy-duty linear actuators available in custom bore sizes from 40mm to 300mm. Variants: Double Acting, Single Acting, Flange Mounting, Clevis Mounting, Tie-Rod, Telescopic."
                category="Actuators"
                imageSrc="/images/products/hydraulic-cylinders/hydraulic-cylinders-ahmedabad.webp"
                href="/products/hydraulic-cylinders"
                ctaText="EXPLORE HYDRAULIC CYLINDERS"
             />
             <ProductCard 
                title="Hydraulic Power Packs"
                description="Pre-assembled, piped, and tested fluid power generation units. Variants: 3-Phase Industrial Units, Single-Phase Units, Dedicated Press Machine High-Low Circuits."
                category="Power Generation"
                imageSrc="/images/products/hydraulic-power-packs/hydraulic-power-pack-manufacturer.webp"
                href="/products/hydraulic-power-packs"
                ctaText="EXPLORE HYDRAULIC POWER PACKS"
             />
          </div>
        </Container>
      </Section>
      {/* Product Selection Guide */}
      <Section bg="white" id="selection-guide" aria-labelledby="selection-heading">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <Heading variant="section" as="h2" id="selection-heading" className="mb-4">
                  Product Selection Guide
                </Heading>
                <p className="text-lg text-brand-steelGray font-body">
                  Not sure which hydraulic product you need? Follow this quick decision framework to identify the right solution for your application.
                </p>
              </div>
            </div>
            
            <div className="space-y-8">
              <Card variant="interactive" className="group flex flex-col relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-premium overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-honeywell-red/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
                <CardContent className="flex flex-col md:flex-row gap-6 p-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-honeywell-red/10 flex items-center justify-center group-hover:bg-honeywell-red group-hover:text-white transition-all duration-350 ease-premium">
                    <span className="text-2xl md:text-3xl font-display font-bold text-honeywell-red group-hover:text-white transition-colors">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Do you need to generate physical motion or force?</h3>
                    <p className="text-brand-steelGray font-body mb-3">If you need linear push/pull force to move, clamp, lift, or press — you need a <strong>Hydraulic Cylinder</strong>.</p>
                    <p className="text-sm text-brand-darkSlate font-body bg-brand-lightSurface p-4 rounded-xl border-l-4 border-honeywell-red">
                      <em>Key consideration:</em> Determine your required tonnage (Force = Pressure × Piston Area) to select the correct bore size.
                    </p>
                  </div>
                  <div className="flex items-center md:items-end">
                    <Link href="/products/hydraulic-cylinders" className="text-honeywell-red font-medium font-body text-sm flex items-center group-hover:gap-2 transition-all before:absolute before:inset-0 before:z-0">
                  <span className="relative z-10 flex items-center">
                      View Cylinders <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" /></span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="interactive" className="group flex flex-col relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-premium overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-honeywell-navy/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
                <CardContent className="flex flex-col md:flex-row gap-6 p-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-honeywell-navy/10 flex items-center justify-center group-hover:bg-honeywell-navy group-hover:text-white transition-all duration-350 ease-premium">
                    <span className="text-2xl md:text-3xl font-display font-bold text-honeywell-navy group-hover:text-white transition-colors">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Do you need to generate pressurized fluid flow?</h3>
                    <p className="text-brand-steelGray font-body mb-3">If you are building a new machine or replacing a failing pump system, you need a <strong>Hydraulic Power Pack</strong>.</p>
                    <p className="text-sm text-brand-darkSlate font-body bg-brand-lightSurface p-4 rounded-xl border-l-4 border-honeywell-red">
                      <em>Key consideration:</em> Determine your required cycle speed (Flow Rate/LPM) and system pressure (Bar) to size the motor and pump correctly.
                    </p>
                  </div>
                  <div className="flex items-center md:items-end">
                    <Link href="/products/hydraulic-power-packs" className="text-honeywell-red font-medium font-body text-sm flex items-center group-hover:gap-2 transition-all before:absolute before:inset-0 before:z-0">
                  <span className="relative z-10 flex items-center">
                      View Power Packs <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" /></span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
              
              <Card variant="interactive" className="group flex flex-col relative hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-premium overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-honeywell-red/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
                <CardContent className="flex flex-col md:flex-row gap-6 p-6 items-center">
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-xl bg-honeywell-red/10 flex items-center justify-center group-hover:bg-honeywell-red group-hover:text-white transition-all duration-350 ease-premium">
                    <span className="text-2xl md:text-3xl font-display font-bold text-honeywell-red group-hover:text-white transition-colors">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">Do you need both + control logic integrated?</h3>
                    <p className="text-brand-steelGray font-body mb-3">For complex machines requiring synchronized motion, proportional control, and PLC integration — you need a <strong>Turnkey Hydraulic System</strong>.</p>
                    <p className="text-sm text-brand-darkSlate font-body bg-brand-lightSurface p-4 rounded-xl border-l-4 border-honeywell-red">
                      <em>Key consideration:</em> Share your machine cycle diagram and we'll engineer the complete fluid power package: cylinders, power pack, manifold, and controls.
                    </p>
                  </div>
                  <div className="flex items-center md:items-end">
                    <Link href="/products/turnkey-systems" className="text-honeywell-red font-medium font-body text-sm flex items-center group-hover:gap-2 transition-all before:absolute before:inset-0 before:z-0">
                  <span className="relative z-10 flex items-center">
                      View Systems <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" /></span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
{/* Industries Overview */}
      <Section bg="gray" id="industries" aria-labelledby="industries-heading">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-2xl">
              <Heading variant="section" as="h2" id="industries-heading" className="mb-4">
                Industries Served Across India
              </Heading>
              <p className="text-lg text-brand-steelGray font-body">
                We supply premium fluid power components to over 20 distinct industrial sectors PAN-India.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link href="/request-quote" className="text-honeywell-red font-bold hover:underline flex items-center gap-1">
                Don&apos;t see your industry? Contact us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard
              industryName="Injection Moulding"
              description="High-speed, high-cycle tie-rod hydraulic cylinders designed for rapid core-pulling and mould clamping."
              href="/industries/injection-moulding"
              icon={<Activity className="w-6 h-6" />}
            />
            <IndustryCard
              industryName="Automotive OEM"
              description="Highly repeatable hydraulic systems for robotic assembly, welding lines, and press automation."
              href="/industries/automotive-oem"
              icon={<Shield className="w-6 h-6" />}
            />
            <IndustryCard
              industryName="Steel & Metallurgy"
              description="Rugged mill-type hydraulic cylinders built with high-temperature Viton seals to withstand extreme foundry environments."
              href="/industries/steel-metallurgy"
              icon={<Activity className="w-6 h-6" />}
            />
            <IndustryCard
              industryName="Construction & Earthmoving"
              description="Heavy-duty boom, stick, and bucket hydraulic cylinders engineered for shock resistance in excavators and earthmovers."
              href="/industries/construction-earthmoving"
              icon={<Shield className="w-6 h-6" />}
            />
            <IndustryCard
              industryName="Material Handling"
              description="Reliable, leak-free telescopic and double-acting cylinders for forklifts, scissor lifts, and AGVs."
              href="/industries/material-handling"
              icon={<Activity className="w-6 h-6" />}
            />
            <IndustryCard
              industryName="Rolling Mill"
              description="High-force hydraulic cylinders with precision-ground rods for continuous rolling mill operations."
              href="/industries/rolling-mill"
              icon={<Shield className="w-6 h-6" />}
            />
            <IndustryCard
              industryName="Wooden Industries"
              description="High-tonnage hydraulic press cylinders optimized for plywood pressing, veneer peeling, and timber cutting."
              href="/industries/wooden-industries"
              icon={<Activity className="w-6 h-6" />}
            />
            <IndustryCard
              industryName="Power Generation"
              description="Custom hydraulic actuators for turbine control, valve actuation, and dam gate operations."
              href="/industries/power-generation"
              icon={<Shield className="w-6 h-6" />}
            />
            <IndustryCard
              industryName="Defence & Aerospace"
              description="Military-grade hydraulic cylinders meeting stringent defence specifications for launch systems and ground support."
              href="/industries/defence-aerospace"
              icon={<Activity className="w-6 h-6" />}
            />
          </div>
        </Container>
      </Section>
      {/* Engineering & Manufacturing Capabilities */}
      <Section bg="white" id="capabilities" aria-labelledby="capabilities-heading">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <Heading variant="section" as="h2" id="capabilities-heading" className="mb-4 text-center md:text-left">
                  Engineering & Manufacturing Capabilities
                </Heading>
                <p className="text-lg text-brand-steelGray font-body text-center md:text-left">
                  As an end-to-end hydraulic products manufacturer, we do not outsource our core competencies. By controlling the entire manufacturing lifecycle, we guarantee the structural integrity and performance of every product.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card variant="interactive" className="group h-full">
                <CardContent className="flex flex-col flex-1 p-8 relative">
                  <IconBox icon={<Shield className="w-6 h-6" />} variant="primary" size="lg" className="mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-350 ease-premium" />
                  <h4 className="text-xl font-display font-bold text-honeywell-navy mb-6 flex items-center gap-3">
                    Facility Technology Stack
                  </h4>
                  <ul className="space-y-4 font-body text-brand-darkSlate">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-honeywell-red shrink-0 mt-0.5" />
                      <strong>Design & Simulation:</strong> 3D Modeling for fluid dynamic and stress analysis.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-honeywell-red shrink-0 mt-0.5" />
                      <strong>Precision Machining:</strong> CNC Turning Centers ensuring h8 tolerances on all piston rods.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-honeywell-red shrink-0 mt-0.5" />
                      <strong>Validation & Testing:</strong> PLC-driven hydrostatic test benches. Every unit is tested at 1.5x working pressure before dispatch.
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card variant="interactive" className="group h-full">
                <CardContent className="flex flex-col flex-1 p-8 relative">
                  <IconBox icon={<Award className="w-6 h-6" />} variant="primary" size="lg" className="mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-350 ease-premium" />
                  <h4 className="text-xl font-display font-bold text-honeywell-navy mb-6 flex items-center gap-3">
                    The Honeywell Guarantee
                  </h4>
                  <p className="text-brand-darkSlate font-body leading-relaxed mb-4 flex-1">
                    Every hydraulic product we manufacture is backed by our strict Defect Warranty. In the event of an operational anomaly, our emergency engineering team dispatches replacement components or seal kits to minimize your production downtime.
                  </p>
                  <div className="mt-auto flex items-center text-honeywell-red font-medium font-body text-sm">
                    <Link href="/warranty" className="flex items-center group-hover:gap-2 transition-all">
                      View Warranty Details <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden group">
              <div className="bg-honeywell-navy px-8 py-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.03] mix-blend-overlay" aria-hidden="true" />
                <h3 className="text-xl font-bold font-display text-white tracking-wide relative z-10 flex items-center gap-3">
                  <Activity className="w-5 h-5 text-honeywell-red" /> Product Comparison Matrix
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-50">
                      <th scope="col" className="px-8 py-5 text-xs font-bold text-brand-steelGray uppercase tracking-widest font-body w-1/4">
                        Parameter
                      </th>
                      <th scope="col" className="px-8 py-5 text-sm font-bold text-honeywell-navy uppercase tracking-wider font-display">
                        Hydraulic Cylinder
                      </th>
                      <th scope="col" className="px-8 py-5 text-sm font-bold text-honeywell-navy uppercase tracking-wider font-display border-l border-slate-200">
                        Power Pack
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-slate-50/80 transition-colors duration-200">
                      <td className="px-8 py-5 text-sm font-semibold text-brand-darkSlate font-body bg-slate-50/50">Primary Function</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed">Converts fluid pressure into <span className="font-semibold text-honeywell-navy">linear force</span></td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed border-l border-slate-100">Converts electrical power to <span className="font-semibold text-honeywell-navy">fluid pressure</span></td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors duration-200">
                      <td className="px-8 py-5 text-sm font-semibold text-brand-darkSlate font-body bg-slate-50/50">Maintenance Level</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed">Medium (Seals, tolerances)</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed border-l border-slate-100">High (Motor, pump, reservoir)</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors duration-200">
                      <td className="px-8 py-5 text-sm font-semibold text-brand-darkSlate font-body bg-slate-50/50">Customization</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed">High Customization</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed border-l border-slate-100">High Customization</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors duration-200">
                      <td className="px-8 py-5 text-sm font-semibold text-brand-darkSlate font-body bg-slate-50/50">Standard Lead Time</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed">7-15 Days</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed border-l border-slate-100">10-20 Days</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors duration-200">
                      <td className="px-8 py-5 text-sm font-semibold text-brand-darkSlate font-body bg-slate-50/50">Typical Applications</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed">Pressing, lifting, clamping, pushing</td>
                      <td className="px-8 py-5 text-sm text-brand-darkSlate font-body leading-relaxed border-l border-slate-100">Power source for cylinders & actuators</td>
                    </tr>
                    <tr className="hover:bg-slate-50/80 transition-colors duration-200">
                      <td className="px-8 py-5 text-sm font-semibold text-brand-darkSlate font-body bg-slate-50/50">Key Selection Factor</td>
                      <td className="px-8 py-5 text-sm text-honeywell-navy font-mono tracking-tight font-semibold bg-honeywell-red/5">Bore size × pressure = tonnage</td>
                      <td className="px-8 py-5 text-sm text-honeywell-navy font-mono tracking-tight font-semibold border-l border-slate-100 bg-honeywell-navy/5">Flow (LPM) × pressure = motor HP</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      {/* Trust Stats Strip */}
      <Section bg="white" className="py-8 md:py-12" aria-hidden="true">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-honeywell-red mb-2">500+</div>
              <div className="text-brand-steelGray font-body text-sm">Projects Completed</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-honeywell-red mb-2">6+</div>
              <div className="text-brand-steelGray font-body text-sm">Years of Experience</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-honeywell-red mb-2">ISO 9001:2015</div>
              <div className="text-brand-steelGray font-body text-sm">Certified Quality Management</div>
            </div>
            <div className="p-4">
              <div className="text-3xl md:text-4xl font-display font-bold text-honeywell-red mb-2">25+</div>
              <div className="text-brand-steelGray font-body text-sm">Industries Served</div>
            </div>
          </div>
        </Container>
      </Section>
      {/* FAQ Section */}
      <SiteFAQSection
        faqs={faqs}
        title="Frequently Asked Questions"
        description="Find answers to common questions about our hydraulic products, manufacturing capabilities, and custom engineering services."
      />
      {/* Conversion CTA — M2: replaced dead # href */}
      <CTA 
        title="Ready to discuss your exact requirements?"
        description="Whether you are in the initial design phase of a new machine or require an urgent breakdown replacement, Honeywell Hydraulics has the engineering capability to deliver."
        primaryCtaText="REQUEST A CUSTOM ENGINEERING QUOTE"
        primaryCtaHref="/request-quote"
        secondaryCtaText="Contact Engineering Team"
        secondaryCtaHref="/contact-us/"
      />
    </>
  );
}
