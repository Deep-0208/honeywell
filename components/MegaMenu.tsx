'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';

import type { NavItem, NavLink } from '@/types/navigation';

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MegaMenu — Renders the dropdown/mega menu panel for a navigation item.
 *
 * Products gets a full-width mega menu with featured CTA.
 * Other items get a compact dropdown with single-column links.
 */
export default function MegaMenu({ item, isOpen, onClose }: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = `nav-menu-${item.label.toLowerCase()}`;

  /* Close on Escape */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const isLargeMega = item.label === 'Products' || item.label === 'Areas We Serve';
  const [activeLink, setActiveLink] = useState<NavLink | null>(null);

  useEffect(() => {
    if (isOpen && isLargeMega && item.megaMenu) {
      const firstWithSub = item.megaMenu.columns.flatMap(c => c.links).find(l => l.subcategories?.length);

      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (firstWithSub) setActiveLink(firstWithSub);
    } else {

      setActiveLink(null);
    }
  }, [isOpen, isLargeMega, item]);

  if (!item.megaMenu) return null;

  return (
    <>
      {isOpen && (
        <div
          ref={panelRef}
          id={panelId}
          role="navigation"
          aria-label={`${item.label} submenu`}
          className={`
            absolute top-full z-50
            bg-white border border-slate-200 rounded-b-lg
            shadow-[0_20px_60px_-15px_rgba(13,27,92,0.12)]
            ${isLargeMega ? 'w-[700px] xl:w-[820px] right-0 lg:right-[-2rem] xl:right-auto xl:left-1/2 xl:-translate-x-1/2' : 'w-[320px] xl:w-[380px] left-0'}
          `}
        >
          {/* Top accent line */}
          <div
            className="h-[2px] bg-gradient-to-r from-honeywell-red via-honeywell-navy to-honeywell-red rounded-t-lg"
          />

          <div className={`p-5 xl:p-6 ${isLargeMega ? 'flex gap-5 xl:gap-8' : ''}`}>
            {/* ── Link columns ── */}
            <div
              className={isLargeMega ? 'flex-1' : ''}
            >
              {item.megaMenu.columns.map((column, colIdx) => (
                <div key={colIdx}>
                  {column.heading && (
                    <div className="mb-5">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded text-[10px] font-bold tracking-[0.2em] text-brand-steelGray bg-slate-100 uppercase font-body">
                        {column.heading}
                      </span>
                    </div>
                  )}
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          onMouseEnter={() => link.subcategories && setActiveLink(link)}
                          className={`
                            group relative flex items-start gap-3 p-3 rounded-xl
                            transition-all duration-300 ease-premium border border-transparent
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy
                            ${activeLink === link
                              ? 'bg-white shadow-[0_8px_24px_-6px_rgba(13,27,92,0.08)] border-slate-100'
                              : 'hover:bg-white hover:shadow-[0_8px_24px_-6px_rgba(13,27,92,0.08)] hover:border-slate-100'}
                          `}
                        >
                          {/* Left subtle red accent bar on hover/active */}
                          <div className={`
                            absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-honeywell-red rounded-r-full transition-all duration-300 ease-premium
                            ${activeLink === link ? 'h-3/5 opacity-100' : 'h-0 opacity-0 group-hover:h-3/5 group-hover:opacity-100'}
                          `} aria-hidden="true" />

                          <div className={`
                            flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors duration-300
                            ${activeLink === link ? 'bg-red-50 text-honeywell-red' : 'bg-slate-100 text-brand-steelGray group-hover:bg-red-50 group-hover:text-honeywell-red'}
                          `}>
                            <Layers className="w-5 h-5" aria-hidden="true" />
                          </div>

                          <div className="min-w-0 flex-1">
                            <span className={`
                              block text-sm font-semibold font-display leading-tight transition-colors duration-300
                              ${activeLink === link ? 'text-brand-deepNavy' : 'text-honeywell-navy group-hover:text-brand-deepNavy'}
                            `}>
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="block text-[13px] text-brand-steelGray mt-1 leading-relaxed line-clamp-2 font-body">
                                {link.description}
                              </span>
                            )}
                          </div>

                          <ArrowRight className={`
                            w-4 h-4 mt-0.5 shrink-0 transition-all duration-300 ease-premium
                            ${activeLink === link ? 'opacity-100 translate-x-0 text-honeywell-red' : 'opacity-0 -translate-x-3 text-brand-borderGray group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-honeywell-red'}
                          `} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── Dynamic Subcategories or Featured CTA (Products only) ── */}
            {isLargeMega && (
              <div
                className="w-[300px] xl:w-[340px] shrink-0 bg-brand-surfaceGray/60 rounded-xl p-5 xl:p-6 border border-slate-100 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle radial gradient background effect for premium feel */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/40 blur-2xl rounded-full -z-10 pointer-events-none" aria-hidden="true" />

                {activeLink?.subcategories ? (
                  <div className="w-full flex flex-col h-full relative z-10">
                    <div className="mb-5">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded text-[10px] font-bold tracking-[0.2em] text-honeywell-red bg-red-50 uppercase font-body">
                        {activeLink.label}
                      </span>
                    </div>

                    <ul className="space-y-2 mb-6 flex-1">
                      {activeLink.subcategories.map((sub, idx) => (
                        <li key={idx}>
                          <Link
                            href={sub.href}
                            onClick={onClose}
                            className="
                              group relative flex items-center gap-3 p-2.5 rounded-xl
                              transition-all duration-300 ease-premium
                              hover:bg-white hover:shadow-[0_8px_24px_-6px_rgba(13,27,92,0.08)] border border-transparent hover:border-slate-100
                              overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy
                            "
                          >
                            {/* Left subtle red accent bar on hover */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-honeywell-red rounded-r-full opacity-0 group-hover:h-3/5 group-hover:opacity-100 transition-all duration-300 ease-premium" aria-hidden="true" />

                            <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-slate-100 text-brand-steelGray group-hover:bg-red-50 group-hover:text-honeywell-red transition-colors duration-300 shrink-0">
                              <Layers className="w-4 h-4" aria-hidden="true" />
                            </div>

                            <span className="text-[13px] font-semibold text-honeywell-navy font-display flex-1 group-hover:text-brand-deepNavy transition-colors">
                              {sub.label}
                            </span>

                            <ArrowRight className="w-4 h-4 text-brand-borderGray opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-honeywell-red transition-all duration-300 ease-premium shrink-0" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={activeLink.href}
                      onClick={onClose}
                      className="
                        group relative flex items-center justify-center w-full py-3 rounded-lg overflow-hidden
                        bg-white border border-slate-200 shadow-sm
                        hover:border-transparent
                        transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy
                      "
                    >
                      <div className="absolute inset-0 bg-honeywell-navy translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-premium z-0" aria-hidden="true" />
                      <span className="relative z-10 flex items-center gap-2 text-[13px] font-semibold text-honeywell-navy font-body group-hover:text-white transition-colors duration-300">
                        Explore All Models <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                ) : item.megaMenu.featured ? (
                  <div className="relative z-10 flex flex-col h-full">
                    <div>
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded text-[10px] font-bold tracking-[0.2em] text-honeywell-navy bg-slate-100 uppercase font-body mb-4">
                        Featured
                      </span>
                      <p className="text-base font-bold text-honeywell-navy font-display leading-snug text-justify">
                        {item.megaMenu.featured.title}
                      </p>
                      <p className="text-[13px] text-brand-steelGray mt-3 leading-relaxed font-body text-justify">
                        {item.megaMenu.featured.description}
                      </p>
                    </div>
                    <Link
                      href={item.megaMenu.featured.ctaHref}
                      onClick={onClose}
                      className="
                        group relative flex items-center justify-center w-full py-3 mt-6 rounded-lg overflow-hidden
                        bg-honeywell-red shadow-glow
                        hover:shadow-[0_8px_24px_-4px_rgba(227,27,35,0.4)] transition-shadow duration-300
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red focus-visible:ring-offset-2
                      "
                    >
                      <div className="absolute inset-0 bg-[#C41220] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-premium z-0" aria-hidden="true" />
                      <span className="relative z-10 flex items-center gap-2 text-white text-[13px] font-semibold font-body">
                        {item.megaMenu.featured.ctaLabel}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                      </span>
                    </Link>
                  </div>
                ) : null}
              </div>
            )}
          </div>

          {/* Bottom section — "View All" link */}
          <div className="border-t border-slate-200 px-6 py-3 bg-slate-50">
            <Link
              href={item.href}
              onClick={onClose}
              className="
                inline-flex items-center gap-1.5 text-xs font-medium text-honeywell-navy
                hover:text-honeywell-red transition-colors duration-150 font-body
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy
                group
              "
            >
              View all {item.label.toLowerCase()}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-150" aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
