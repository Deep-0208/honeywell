'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, ChevronDown, Menu } from 'lucide-react';
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
 * Sticky with premium shadow on scroll
 * Active page indicators via usePathname
 *
 * Colors: Navy (#0D1B5C) text, Red (#E31B23) hover/active, Red CTA
 *
 * SCROLL ANIMATION:
 * Single header element. Content floats down via translateY when at top,
 * then slides up to lock at top on scroll. A white background + shadow
 * fades in behind. Pill shadows fade out as they merge into the bar.
 * All animated properties are GPU-composited (transform, opacity, box-shadow).
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
    let ticking = false;

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setIsScrolled((prev) => {
            if (!prev && currentScrollY > 50) return true;
            if (prev && currentScrollY < 10) return false;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
   */
  const isNavActive = useCallback(
    (item: { href: string; megaMenu?: { columns: { links: { href: string }[] }[] } }) => {
      if (pathname === item.href || pathname === item.href.replace(/\/$/, '')) {
        return true;
      }
      if (item.href !== '/' && pathname.startsWith(item.href.replace(/\/$/, ''))) {
        return true;
      }
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

  /* ── Shared transition timing ── */
  const smoothTransition = 'all 500ms cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <>
      {/* ─── Placeholder to prevent content overlap with Hero sections ─── */}
      <div className="w-full h-[80px] lg:h-[96px]" aria-hidden="true" />

      <header
        ref={headerRef}
        className="fixed top-0 left-0 z-50 w-full"
        role="banner"
      >
        {/* ─── Background Layer ───
            White bg + shadow that fades in on scroll.
            Separate div so we only animate opacity (GPU-composited). */}
        <div
          className="absolute inset-0 rounded-b-3xl will-change-[opacity] bg-white/95 backdrop-blur-md"
          style={{
            opacity: isScrolled ? 1 : 0,
            boxShadow: '0 4px 20px -4px rgb(0 0 0 / 0.10), 0 2px 6px -2px rgb(0 0 0 / 0.06)',
            transition: `opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
          }}
          aria-hidden="true"
        />

        {/* ─── Content Layer ───
            Slides up via translateY on scroll (GPU-composited).
            Layout never changes — only position shifts. */}
        <div
          className="relative z-10 w-full flex justify-center will-change-transform"
          style={{
            transform: isScrolled ? 'translateY(0px)' : 'translateY(16px)',
            transition: `transform 500ms cubic-bezier(0.16, 1, 0.3, 1)`,
            padding: isScrolled ? '0 16px' : '0 16px',
          }}
        >
          <div className="w-full max-w-[1360px] flex items-center justify-between h-16 lg:h-20 gap-2 lg:gap-4 xl:gap-8">

            {/* ═══════════════════════════════
               LEFT — Logo (Pill)
               ═══════════════════════════════ */}
            <Link
              href="/"
              className="shrink-0 flex items-center justify-center h-14 lg:h-[72px] px-3 sm:px-4 lg:px-5 xl:px-6 bg-white rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:ring-offset-2"
              style={{
                boxShadow: isScrolled ? 'none' : '0 4px 20px rgb(0 0 0 / 0.06)',
                transition: smoothTransition,
              }}
              aria-label="Honeywell Hydraulics — Home"
            >
              <Image
                src="/images/logos/long-size-logohydralics-logo.png"
                alt="Honeywell Hydraulics — Custom Hydraulic Cylinder & Power Pack Manufacturer"
                width={350}
                height={100}
                className="w-auto h-12 lg:h-[50px] xl:h-[60px]"
                priority
              />
            </Link>

            {/* ═══════════════════════════════
               RIGHT — Nav + Contact (Pill)
               ═══════════════════════════════ */}
            <div
              className="flex items-center justify-end h-14 lg:h-[72px] px-3 sm:px-4 lg:px-4 xl:px-8 bg-white rounded-full"
              style={{
                boxShadow: isScrolled ? 'none' : '0 4px 20px rgb(0 0 0 / 0.06)',
                transition: smoothTransition,
              }}
            >

              {/* ─── Desktop Navigation ─── */}
              <nav
                className="hidden lg:flex items-center justify-end h-full"
                aria-label="Main navigation"
              >
                <ul className="flex items-center justify-end h-full pr-3 xl:pr-4">
                  {navigation.mainNav.map((item, index) => {
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
                          <Link
                            href={item.href}
                            aria-expanded={isMenuOpen}
                            aria-haspopup="true"
                            aria-controls={`nav-menu-${item.label.toLowerCase()}`}
                            onKeyDown={(e) => handleNavKeyDown(e, item.label, hasMega)}
                            className={`
                              group inline-flex items-center gap-1 xl:gap-1.5
                              h-[36px] xl:h-[40px] px-1 xl:px-2 rounded-full cursor-pointer
                              text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium tracking-wide whitespace-nowrap
                              font-body transition-colors duration-200
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-honeywell-navy
                              ${isActive || isMenuOpen
                                ? 'text-honeywell-navy bg-slate-100'
                                : 'text-honeywell-navy hover:text-honeywell-red hover:bg-slate-50'
                              }
                            `}
                          >
                            <span>{item.label}</span>
                            <span className={`flex items-center transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}>
                              <ChevronDown
                                className={`w-4 h-4 transition-colors duration-200 ${isActive || isMenuOpen ? 'text-honeywell-navy' : 'text-slate-400 group-hover:text-honeywell-navy'
                                  }`}
                                strokeWidth={2}
                                aria-hidden="true"
                              />
                            </span>
                          </Link>
                        ) : (
                          <Link
                            href={item.href}
                            className={`
                              group inline-flex items-center
                              h-[36px] xl:h-[40px] px-1 xl:px-2 rounded-full cursor-pointer
                              text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium tracking-wide whitespace-nowrap
                              font-body transition-colors duration-200
                              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-honeywell-navy
                              ${isActive
                                ? 'text-honeywell-navy bg-slate-100'
                                : 'text-honeywell-navy hover:text-honeywell-red hover:bg-slate-50'
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

                        {/* Separator Line */}
                        {index < navigation.mainNav.length - 1 && (
                          <div className="hidden lg:block w-[1px] h-4 xl:h-5 bg-gray-200 mx-0.5 shrink-0" aria-hidden="true" />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>

              {/* ─── Phone + Mobile Toggle ─── */}
              <div className="flex items-center gap-1 sm:gap-2 lg:gap-1 xl:gap-2 ml-auto lg:ml-0 shrink-0">

                {/* Phone — Desktop only */}
                <a
                  href={`tel:${navigation.phone}`}
                  className="
                    hidden xl:inline-flex items-center gap-2
                    px-3 xl:px-4 py-2 rounded-full cursor-pointer
                    text-honeywell-navy
                    hover:bg-slate-50
                    transition-colors duration-200 font-body
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:ring-offset-2 focus-visible:rounded-full
                    group
                  "
                  aria-label={`Call us at ${navigation.phoneDisplay}`}
                >
                  <span className="
                    flex items-center justify-center w-8 h-8 rounded-full
                    bg-honeywell-navy/[0.06] group-hover:bg-honeywell-red/10
                    transition-colors duration-200
                  ">
                    <Phone
                      className="w-[15px] h-[15px] text-honeywell-navy group-hover:text-honeywell-red transition-colors duration-200"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="text-[14px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] font-medium tracking-[0.01em] font-body text-honeywell-navy group-hover:text-honeywell-navy">
                    {navigation.phoneDisplay}
                  </span>
                </a>

                {/* Removed Request Quote CTA from header */}

                {/* Mobile Menu Toggle */}
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open navigation menu"
                  aria-expanded={isMobileMenuOpen}
                  className="
                    lg:hidden p-2.5 rounded-full cursor-pointer
                    text-honeywell-navy hover:bg-slate-100
                    border border-slate-200
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-full
                  "
                >
                  <Menu className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </button>
              </div>
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
