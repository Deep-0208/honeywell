'use client';

import React from 'react';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import {
  ArrowRight,
  CheckCircle2,
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

/* ─── Trust Badges (verified values only) ─── */
const trustBadges: { label: string; variant: 'iso' | 'madeInIndia' | 'years' | 'clients' }[] = [
  { label: 'ISO 9001:2015', variant: 'iso' },
  { label: 'Made In India', variant: 'madeInIndia' },
  { label: 'Since 2018', variant: 'years' },
  { label: '25+ Industries', variant: 'clients' },
];

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
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Diagonal accent stripe */}
        <div className="absolute -top-20 -right-40 w-[800px] h-[800px] rounded-full bg-[#F8FAFC] opacity-70" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#E2E8F0] to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 md:py-16 lg:py-20">

          {/* ═══════════════════════════════════════
              LEFT COLUMN — Content (Staggered entrance)
              ═══════════════════════════════════════ */}
          <div
            className="order-1"
          >

            {/* Overline — primary keyword signal */}
            <p
              className="text-xs sm:text-sm font-bold font-body uppercase tracking-[0.15em] text-[#E31B23] mb-4"
            >
              Hydraulic Equipment Manufacturer in Gujarat
            </p>

            {/* H1 — single per page, keyword-optimized */}
            <div>
              <Heading
                variant="hero"
                as="h1"
                id="hero-heading"
                className="text-[#0D1B5C] mb-5 leading-[1.1]"
              >
                Hydraulic Cylinder{' '}
                <span className="text-[#E31B23]">&amp;</span> Power Pack
                Manufacturer in Ahmedabad
              </Heading>
            </div>

            {/* Subtitle — from homepage-copy.md */}
            <p
              className="text-base sm:text-lg text-[#64748B] font-body leading-relaxed mb-6 max-w-xl"
            >
              Custom hydraulic cylinders, power packs, and complete hydraulic
              systems. Precision-engineered for 25+ industries across India
              since 2018.
            </p>

            {/* ─── Trust Chips ─── */}
            <ul
              className="flex flex-wrap gap-x-5 gap-y-2 mb-8"
              aria-label="Key advantages"
            >
              {trustChips.map((chip, i) => (
                <li
                  key={chip}
                  className="flex items-center gap-1.5 text-sm font-medium text-[#334155] font-body"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[#E31B23] shrink-0"
                    aria-hidden="true"
                  />
                  {chip}
                </li>
              ))}
            </ul>

            {/* ─── CTA Group ─── */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6"
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

            {/* ─── Trust Badges (verified values) ─── */}
            <div
              className="flex flex-wrap gap-2"
              aria-label="Company credentials"
            >
              {trustBadges.map((badge, i) => (
                <span
                  key={badge.label}
                >
                  <Badge variant={badge.variant}>
                    {badge.label}
                  </Badge>
                </span>
              ))}
            </div>
          </div>

          {/* ═══════════════════════════════════════
              RIGHT COLUMN — Product Image
              ═══════════════════════════════════════ */}
          <div
            className="order-2 relative"
          >
            {/* Light surface background for product showcase */}
            <div className="relative aspect-[4/3] lg:aspect-square rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden shadow-elevated">
              <Image
                src="/images/hero/honeywell-hydraulic-cylinder-hero.webp"
                alt="Double acting hydraulic cylinder manufactured by Honeywell Hydraulics, Ahmedabad"
                fill
                priority
                fetchPriority="high"
                decoding="sync"
                quality={85}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-contain p-4"
                unoptimized
              />

              {/* Product label overlay */}
              <div
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm border border-[#E2E8F0] rounded-sm px-4 py-3"
              >
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#E31B23] font-body mb-0.5">
                  Featured Product
                </p>
                <p className="text-sm font-display font-bold text-[#0D1B5C]">
                  Double Acting Hydraulic Cylinder
                </p>
                <p className="text-xs text-[#64748B] font-body">
                  Custom bore: 40mm – 300mm · Pressure tested · Factory-direct
                </p>
              </div>
            </div>

            {/* Decorative accents — engineering precision feel */}
            <div
              className="hidden lg:block absolute -bottom-4 -right-4 w-24 h-24 border-2 border-[#E2E8F0] rounded-lg -z-10"
              aria-hidden="true"
            />
            <div
              className="hidden lg:block absolute -top-4 -left-4 w-16 h-16 border-2 border-[#E31B23]/15 rounded-lg -z-10"
              aria-hidden="true"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
