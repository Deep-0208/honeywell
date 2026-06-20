'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MessageCircle, ChevronDown, Menu, ArrowRight } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';
import type { SiteNavigation } from '@/types/navigation';

interface HeaderProps {
  navigation: SiteNavigation;
}

/**
 * Header — Honeywell Hydraulics
 *
 * Premium B2B industrial header inspired by Bosch Rexroth, Parker Hannifin,
 * Eaton, and Danfoss. Single-tier navigation with balanced spacing.
 *
 * Layout: Logo (left) | Navigation (center) | Phone + CTA (right)
 * Height: 84px desktop | 64px mobile
 * Background: White with subtle bottom border
 * Sticky with premium shadow on scroll
 * Active page indicators via usePathname
 *
 * Colors: Navy (#0D1B5C) text, Red (#E31B23) hover/active, Red CTA
 */
export default function Header({ navigation }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  /* ── Scroll detection ── */
  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Close menus on outside click ── */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* ── Close menus on route change ── */
  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  /* ── Hover handlers with delay for smooth transitions ── */
  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  }, []);

  const handleCloseMega = useCallback(() => {
    setOpenMenu(null);
  }, []);

  /* ── Keyboard nav: Enter/Space to toggle, Escape to close ── */
  const handleNavKeyDown = useCallback(
    (e: React.KeyboardEvent, label: string, hasMega: boolean) => {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        return;
      }
      if (hasMega && (e.key === 'Enter' || e.key === ' ')) {
        e.preventDefault();
        setOpenMenu((prev) => (prev === label ? null : label));
      }
    },
    []
  );

  /**
   * Determine if a nav item is the "active" page.
   * Matches exact path or any child route under the item's href.
   */
  const isNavActive = useCallback(
    (item: { href: string; megaMenu?: { columns: { links: { href: string }[] }[] } }) => {
      // Exact match
      if (pathname === item.href || pathname === item.href.replace(/\/$/, '')) {
        return true;
      }
      // Check if current path starts with this nav item's base path
      if (item.href !== '/' && pathname.startsWith(item.href.replace(/\/$/, ''))) {
        return true;
      }
      // Check child mega-menu links
      if (item.megaMenu) {
        for (const col of item.megaMenu.columns) {
          for (const link of col.links) {
            if (pathname === link.href || pathname === link.href.replace(/\/$/, '')) {
              return true;
            }
            if (link.href !== '/' && pathname.startsWith(link.href.replace(/\/$/, ''))) {
              return true;
            }
          }
        }
      }
      return false;
    },
    [pathname]
  );

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
          isScrolled
            ? 'shadow-[0_1px_3px_0_rgba(13,27,92,0.06),0_4px_16px_-4px_rgba(13,27,92,0.08)]'
            : 'shadow-[0_1px_0_0_#E2E8F0]'
        }`}
        role="banner"
      >
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16 lg:h-[84px]">

            {/* ═══════════════════════════════
               LEFT — Logo
               ═══════════════════════════════ */}
            <Link
              href="/"
              className="
                shrink-0 flex items-center mr-8 xl:mr-12
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C] focus-visible:ring-offset-2 focus-visible:rounded-sm
              "
              aria-label="Honeywell Hydraulics — Home"
            >
              <Image
                src="/long-size-logohydralics-logo.png"
                alt="Honeywell Hydraulics — Custom Hydraulic Cylinder & Power Pack Manufacturer"
                width={180}
                height={52}
                className="h-10 lg:h-[46px] w-auto"
                priority
              />
            </Link>

            {/* ═══════════════════════════════
               CENTER — Desktop Navigation
               ═══════════════════════════════ */}
            <nav
              className="hidden lg:flex items-center justify-center h-full flex-1"
              aria-label="Main navigation"
            >
              <ul className="flex items-center justify-center h-full gap-1 xl:gap-2">
                {navigation.mainNav.map((item) => {
                  const hasMega = !!item.megaMenu;
                  const isMenuOpen = openMenu === item.label;
                  const isActive = isNavActive(item);

                  return (
                    <li
                      key={item.label}
                      className="relative h-full flex items-center"
                      onMouseEnter={() => hasMega && handleMouseEnter(item.label)}
                      onMouseLeave={() => hasMega && handleMouseLeave()}
                    >
                      {hasMega ? (
                        <button
                          type="button"
                          aria-expanded={isMenuOpen}
                          aria-haspopup="true"
                          aria-controls={`nav-menu-${item.label.toLowerCase()}`}
                          onKeyDown={(e) => handleNavKeyDown(e, item.label, hasMega)}
                          onClick={() => setOpenMenu(isMenuOpen ? null : item.label)}
                          className={`
                            group inline-flex items-center gap-1.5
                            h-[40px] px-4 rounded-md
                            text-[14px] font-semibold tracking-[0.02em] uppercase
                            font-body transition-all duration-200
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0D1B5C]
                            ${isActive || isMenuOpen
                              ? 'text-[#E31B23] bg-red-50/50'
                              : 'text-[#1A2A6C] hover:text-[#E31B23] hover:bg-slate-50'
                            }
                          `}
                        >
                          <span>{item.label}</span>
                          <span className={`flex items-center transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                            <ChevronDown
                              className={`w-4 h-4 transition-colors duration-200 ${
                                isActive || isMenuOpen ? 'text-[#E31B23]' : 'text-[#64748B] group-hover:text-[#E31B23]'
                              }`}
                              strokeWidth={2}
                              aria-hidden="true"
                            />
                          </span>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className={`
                            group inline-flex items-center
                            h-[40px] px-4 rounded-md
                            text-[14px] font-semibold tracking-[0.02em] uppercase
                            font-body transition-all duration-200
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0D1B5C]
                            ${isActive
                              ? 'text-[#E31B23] bg-red-50/50'
                              : 'text-[#1A2A6C] hover:text-[#E31B23] hover:bg-slate-50'
                            }
                          `}
                        >
                          <span>{item.label}</span>
                        </Link>
                      )}

                      {/* Mega/Dropdown Menu */}
                      {hasMega && (
                        <MegaMenu
                          item={item}
                          isOpen={isMenuOpen}
                          onClose={handleCloseMega}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ═══════════════════════════════
               RIGHT — Phone + CTA + Mobile Toggle
               ═══════════════════════════════ */}
            <div className="flex items-center gap-1 sm:gap-2 ml-auto lg:ml-0">

              {/* Phone — Desktop only */}
              <a
                href={`tel:${navigation.phone}`}
                className="
                  hidden xl:inline-flex items-center gap-2.5
                  px-4 py-2.5 rounded-lg
                  text-[#0D1B5C]
                  hover:bg-[#F1F5F9]
                  transition-all duration-200 font-body
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C] focus-visible:ring-offset-2 focus-visible:rounded-lg
                  group
                "
                aria-label={`Call us at ${navigation.phoneDisplay}`}
              >
                <span className="
                  flex items-center justify-center w-8 h-8 rounded-lg
                  bg-[#0D1B5C]/[0.06] group-hover:bg-[#E31B23]/10
                  transition-colors duration-200
                ">
                  <Phone
                    className="w-[15px] h-[15px] text-[#0D1B5C] group-hover:text-[#E31B23] transition-colors duration-200"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
                <span className="text-[14px] font-semibold tracking-[0.01em] font-body text-[#0D1B5C] group-hover:text-[#0D1B5C]">
                  {navigation.phoneDisplay}
                </span>
              </a>

              {/* WhatsApp — Desktop only */}
              <a
                href="https://wa.me/919924343873?text=Hello%2C%20I%20need%20a%20quote%20for%20hydraulic%20equipment."
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hidden xl:inline-flex items-center justify-center
                  w-10 h-10 rounded-lg
                  hover:bg-[#25D366]/10
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:rounded-lg
                  group
                "
                aria-label="Message us on WhatsApp"
              >
                <MessageCircle
                  className="w-[18px] h-[18px] text-[#25D366] group-hover:scale-110 transition-transform duration-200"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>

              {/* Vertical divider */}
              <span className="hidden xl:block w-px h-7 bg-[#E2E8F0] mx-1" aria-hidden="true" />

              {/* Request Quote CTA */}
              <div>
                <Link
                  href={navigation.ctaHref}
                  className="
                    hidden sm:inline-flex items-center gap-2
                    px-5 py-2.5 rounded-lg
                    bg-[#D32F2F] text-white
                    text-[13px] font-bold font-body tracking-[0.02em]
                    hover:bg-[#B71C1C]
                    transition-all duration-250
                    shadow-[0_1px_3px_rgba(211,47,47,0.24)]
                    hover:shadow-[0_4px_12px_-2px_rgba(211,47,47,0.32)]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D32F2F] focus-visible:ring-offset-2
                  "
                >
                  {navigation.ctaLabel}
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} aria-hidden="true" />
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMobileMenuOpen}
                className="
                  lg:hidden p-2.5 rounded-lg
                  text-[#0D1B5C] hover:bg-[#F1F5F9]
                  border border-[#E2E8F0]
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C]
                "
              >
                <Menu className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu Drawer ── */}
      <MobileMenu
        navigation={navigation}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
