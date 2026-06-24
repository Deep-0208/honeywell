'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { heroCarouselImages } from '@/data/hero-carousel-images';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   HeroSection — Honeywell Hydraulics Homepage
   ─────────────────────────────────────────────

   A  rchitecture:  HOMEPAGE_ARCHITECTURE.md § Section 01
   Design:        DESIGN.md § Hero Section
   SEO:           SEO_ARCHITECTURE.md § Homepage
   Content:       docs/content/homepage/homepage-copy.md § Section 01

   Layout:
   ┌──────────────────────────────────────────────┐
   │  [White bg — DESIGN.md logo visibility rule] │
   │  ┌──────────────────┬───────────────────────┐│
   │  │  Content Column   │  Image Column         ││
   │  │  ─ Overline       │  Product photo        ││
   │  │  ─ H1 (only one) │  (priority loaded)    ││
   │  │  ─ Subtitle       │                       ││
   │  │  ─ Trust Chips    │                       ││
   │  │  ─ CTA Group      │                       ││
   │  │  ─ Contact Bar    │                       ││
   │  │  ─ Trust Badges   │                       ││
   │  └──────────────────┴───────────────────────┘│
   └──────────────────────────────────────────────┘

   Mobile: Stacked — content first, image second.

   Performance:
   • Hero image loaded with priority + fetchPriority="high"
   • decoding="sync" for first-paint inclusion
   • quality={85} for size/quality balance
   • Target LCP < 1.8s

   Accessibility:
   • WCAG AA — all contrast ratios pass 4.5:1
   • Single H1 per page
   • Semantic aria-labelledby
   • All interactive elements keyboard-focusable
   • Descriptive alt text (no "Image of" prefix)
   ───────────────────────────────────────────── */

/* ─── Trust Chips ─── */
const trustChips = [
  'Custom Engineering',
  'Factory-Direct Pricing',
  '7–15 Day Delivery',
] as const;


/**
 * HeroSection
 *
 * Homepage hero — the primary LCP element and first conversion point.
 * White background with two-column layout on desktop.
 *
 * @see HOMEPAGE_ARCHITECTURE.md § Section 01
 */
export function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [heroCarouselImages.length]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-white overflow-hidden"
    >
      {/* ═══ Subtle background accent — engineering grid feel ═══ */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Diagonal accent stripe */}
        <div className="absolute -top-20 -right-40 w-[800px] h-[800px] rounded-full bg-brand-surfaceGray opacity-70" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center pt-6 pb-8 sm:pt-8 sm:pb-12 md:pt-12 md:pb-16 lg:pt-16 lg:pb-20">

          {/* ═══════════════════════════════════════
              LEFT COLUMN — Content (Staggered entrance)
              ═══════════════════════════════════════ */}
          <div
            className="order-1"
          >

            {/* Overline — primary keyword signal */}
            <p
              className="text-base sm:text-lg md:text-xl font-body text-honeywell-red mb-3 sm:mb-4"
            >
              Hydraulic System Manufacturer in Ahmedabad
            </p>

            {/* H1 — single per page, keyword-optimized */}
            <div>
              <Heading
                variant="section"
                as="h1"
                id="hero-heading"
                className="text-honeywell-navy mb-4 sm:mb-5 leading-[1.1]"
              >
                Hydraulic Cylinder & Hydraulic Powerpack Manufacturer in India Since 2018
              </Heading>
            </div>

            {/* Subtitle & Certification */}
            <div className="flex flex-col gap-5 sm:gap-7 mb-8 sm:mb-10 max-w-2xl">
              <div className="flex items-center gap-3 sm:gap-5">
                <span className="flex shrink-0 items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-honeywell-navy/5 border border-honeywell-navy/10">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-honeywell-navy" strokeWidth={2} />
                </span>
                <p className="text-base sm:text-lg md:text-xl font-display text-honeywell-navy leading-tight">
                  Export Hydraulic Solution to All Over India.
                </p>
              </div>

              <div className="flex items-center">
                <div className="inline-flex items-center gap-3.5 px-6 py-3 rounded-full bg-honeywell-navy shadow-sm">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  <span className="text-xs sm:text-sm md:text-base text-white tracking-wide uppercase">
                    ISO 9001:2015 Certified Company
                  </span>
                </div>
              </div>
            </div>

            {/* ─── Trust Chips ─── */}
            <ul
              className="flex flex-wrap lg:flex-nowrap gap-x-3 sm:gap-x-5 md:gap-x-6 gap-y-3 mb-8 sm:mb-10"
              aria-label="Key advantages"
            >
              {trustChips.map((chip, i) => (
                <li
                  key={chip}
                  className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-[15px] font-medium text-brand-darkSlate font-body whitespace-nowrap"
                >
                  <CheckCircle2
                    className="w-5 h-5 text-honeywell-red shrink-0"
                    aria-hidden="true"
                  />
                  {chip}
                </li>
              ))}
            </ul>

            {/* ─── CTA Group ─── */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8"
            >
              <div
              >
                <Button
                  href="/request-quote/"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Request Quote
                </Button>
              </div>
              <div
              >
                <Button
                  href="/products/"
                  variant="outline"
                  size="lg"
                >
                  Explore Products
                </Button>
              </div>
            </div>


          </div>

          {/* ═══════════════════════════════════════
              RIGHT COLUMN — Product Image
              ═══════════════════════════════════════ */}
          <div
            className="order-2 relative"
          >
            {/* Light surface background for product showcase */}
            <div className="relative aspect-[3/2] sm:aspect-[4/3] lg:aspect-square rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-sm">
              {heroCarouselImages.map((item, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    title={item.title}
                    fill
                    priority={index === 0}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    decoding="sync"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain p-2 pb-[80px] sm:p-4 sm:pb-[96px] lg:p-8 lg:pb-[112px] w-full h-full"
                    unoptimized
                  />

                  {/* Product label overlay */}
                  <div
                    className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md border border-slate-200/60 rounded-xl px-4 py-3 sm:px-5 sm:py-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-honeywell-red font-body">
                        Featured Product
                      </p>
                      <div className="flex gap-1.5">
                        {heroCarouselImages.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`h-1.5 rounded-full transition-all duration-300 ${dotIndex === currentSlide ? 'w-4 bg-honeywell-red' : 'w-1.5 bg-slate-200'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-display font-bold text-honeywell-navy">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative accents — engineering precision feel */}
            <div
              className="hidden lg:block absolute -bottom-5 -right-5 w-28 h-28 border-[1.5px] border-slate-200 rounded-2xl -z-10"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute -top-5 -left-5 w-20 h-20 border-[1.5px] border-honeywell-red/20 rounded-2xl -z-10"
              aria-hidden="true"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
