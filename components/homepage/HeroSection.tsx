import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { heroCarouselImages } from '@/data/hero-carousel-images';
import { HeroCarousel } from '@/components/homepage/HeroCarousel';
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Cog,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   HeroSection — Honeywell Hydraulics Homepage
   ─────────────────────────────────────────────

   Architecture:  HOMEPAGE_ARCHITECTURE.md § Section 01
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
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-white overflow-hidden"
    >
      {/* ═══ Subtle background accent — engineering grid feel ═══ */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[url('/images/noise.webp')] opacity-[0.03] mix-blend-overlay" />
        {/* Diagonal accent stripe */}
        <div className="absolute -top-20 -right-40 w-[800px] h-[800px] rounded-full bg-brand-surfaceGray opacity-70 blur-[80px]" />
        
        {/* Floating Cog */}
        <div className="absolute top-1/4 left-10 opacity-5 mix-blend-multiply">
          <Cog className="w-64 h-64 animate-[spin_40s_linear_infinite]" />
        </div>
        <div className="absolute bottom-10 right-1/3 opacity-[0.03] mix-blend-multiply">
          <Cog className="w-96 h-96 animate-[spin_60s_linear_infinite_reverse]" />
        </div>

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
                  Exporting hydraulic solutions across India.
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
              {trustChips.map((chip) => (
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
              <div>
                <Button
                  href="/request-quote"
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />}
                  className="shadow-lg shadow-honeywell-red/20 hover:shadow-honeywell-red/40 transition-all duration-300 group"
                >
                  Request Quote
                </Button>
              </div>
              <div>
                <Button
                  href="/products"
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
            {/* Light surface background for product showcase with Glassmorphism */}
            <div className="relative aspect-[3/2] sm:aspect-[4/3] lg:aspect-square rounded-2xl bg-white/40 backdrop-blur-md border border-white/60 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] z-10 group transition-all duration-500 ease-premium hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]">
              <HeroCarousel images={heroCarouselImages} />
            </div>

            {/* Decorative accents — engineering precision feel */}
            <div
              className="hidden lg:block absolute -bottom-5 -right-5 w-28 h-28 border-[1.5px] border-slate-200 rounded-2xl -z-10 group-hover:border-honeywell-red/30 transition-colors duration-500 ease-premium"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute -top-5 -left-5 w-20 h-20 border-[1.5px] border-honeywell-red/20 rounded-2xl -z-10 bg-white/20 backdrop-blur-sm shadow-sm"
              aria-hidden="true"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
