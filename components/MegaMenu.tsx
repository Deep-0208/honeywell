'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Layers, Building2, ShieldCheck, Factory, MapPin } from 'lucide-react';

import type { NavItem, NavLink } from '@/types/navigation';

const ICON_MAP: Record<string, React.ElementType> = {
  building: Building2,
  shield: ShieldCheck,
  factory: Factory,
  mappin: MapPin,
};

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
      const firstWithSub = item.megaMenu.columns.flatMap(c => c.links).find(l => l.subcategories?.length) || item.megaMenu.columns.flatMap(c => c.links)[0];

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
            max-h-[min(85vh,calc(100vh-4.5rem))] overflow-hidden flex flex-col
            ${isLargeMega ? 'w-[660px] xl:w-[820px] max-w-[calc(100vw-2rem)] right-0 lg:right-[-1rem] xl:right-auto xl:left-1/2 xl:-translate-x-1/2' : 'w-[320px] xl:w-[380px] left-0'}
          `}
        >
          {/* Top accent line */}
          <div
            className="h-[2px] bg-gradient-to-r from-honeywell-red via-honeywell-navy to-honeywell-red rounded-t-lg shrink-0"
          />

          <div className={`p-4 xl:p-5 overflow-hidden flex-1 ${isLargeMega ? 'flex gap-4 xl:gap-6' : ''}`}>
            {/* ── Link columns ── */}
            <div
              className={`
                ${isLargeMega ? 'flex-1' : ''}
                overflow-y-auto max-h-[min(460px,calc(100vh-10rem))] pr-2
              `}
            >
              {item.megaMenu.columns.map((column, colIdx) => (
                <div key={colIdx}>
                  {column.heading && (
                    <div className="mb-3">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded text-[10px] font-bold tracking-[0.2em] text-brand-steelGray bg-slate-100 uppercase font-body">
                        {column.heading}
                      </span>
                    </div>
                  )}
                  <ul className="space-y-1.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={onClose}
                          onMouseEnter={() => setActiveLink(link)}
                          className={`
                            group relative flex items-start gap-3 p-2.5 rounded-xl
                            transition-all duration-300 ease-premium border border-transparent
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy
                            ${activeLink?.label === link.label
                              ? 'bg-white shadow-[0_8px_24px_-6px_rgba(13,27,92,0.08)] border-slate-100'
                              : 'hover:bg-white hover:shadow-[0_8px_24px_-6px_rgba(13,27,92,0.08)] hover:border-slate-100'}
                          `}
                        >
                          {/* Left subtle red accent bar on hover/active */}
                          <div className={`
                            absolute left-0 top-1/2 -translate-y-1/2 w-1 bg-honeywell-red rounded-r-full transition-all duration-300 ease-premium
                            ${activeLink?.label === link.label ? 'h-3/5 opacity-100' : 'h-0 opacity-0 group-hover:h-3/5 group-hover:opacity-100'}
                          `} aria-hidden="true" />

                          <div className={`
                            flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors duration-300
                            ${activeLink?.label === link.label ? 'bg-red-50 text-honeywell-red' : 'bg-slate-100 text-brand-steelGray group-hover:bg-red-50 group-hover:text-honeywell-red'}
                          `}>
                            {(() => {
                              const IconComp = link.icon && ICON_MAP[link.icon] ? ICON_MAP[link.icon] : Layers;
                              return <IconComp className="w-4 h-4" aria-hidden="true" />;
                            })()}
                          </div>

                          <div className="min-w-0 flex-1">
                            <span className={`
                              block text-sm font-semibold font-display leading-tight transition-colors duration-300
                              ${activeLink?.label === link.label ? 'text-brand-deepNavy' : 'text-honeywell-navy group-hover:text-brand-deepNavy'}
                            `}>
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="block text-[12px] text-brand-steelGray mt-0.5 leading-snug line-clamp-2 font-body">
                                {link.description}
                              </span>
                            )}
                          </div>

                          <ArrowRight className={`
                            w-4 h-4 mt-0.5 shrink-0 transition-all duration-300 ease-premium
                            ${activeLink?.label === link.label ? 'opacity-100 translate-x-0 text-honeywell-red' : 'opacity-0 -translate-x-3 text-brand-borderGray group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-honeywell-red'}
                          `} aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── Dynamic Subcategories or Featured CTA (Products & Areas We Serve) ── */}
            {isLargeMega && (
              <div
                className="w-[300px] xl:w-[340px] shrink-0 bg-brand-surfaceGray/60 rounded-xl p-4 xl:p-5 border border-slate-100 flex flex-col justify-between relative overflow-hidden max-h-[min(460px,calc(100vh-10rem))]"
              >
                {/* Subtle radial gradient background effect for premium feel */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/40 blur-2xl rounded-full -z-10 pointer-events-none" aria-hidden="true" />

                {activeLink?.subcategories && activeLink.subcategories.length > 0 ? (
                  <div className="w-full flex flex-col h-full relative z-10">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="inline-flex items-center justify-center px-2.5 py-1 rounded text-[10px] font-bold tracking-[0.2em] text-honeywell-red bg-red-50 uppercase font-body">
                        {activeLink.label}
                      </span>
                      {item.label === 'Areas We Serve' && (
                        <span className="text-[10px] font-semibold text-brand-steelGray font-body uppercase tracking-wider">
                          Supply Coverage
                        </span>
                      )}
                    </div>

                    <ul className="space-y-1.5 mb-3 flex-1 overflow-y-auto max-h-[min(280px,calc(100vh-18rem))] pr-1.5">
                      {activeLink.subcategories.map((sub, idx) => {
                        const IconComp = sub.icon && ICON_MAP[sub.icon] 
                          ? ICON_MAP[sub.icon] 
                          : (item.label === 'Areas We Serve' ? MapPin : Layers);
                        const targetHref = sub.href || activeLink.href;

                        return (
                          <li key={idx}>
                            <Link
                              href={targetHref}
                              onClick={onClose}
                              className="
                                group relative flex items-center gap-2.5 p-2 rounded-xl
                                transition-all duration-300 ease-premium
                                hover:bg-white hover:shadow-[0_4px_16px_-4px_rgba(13,27,92,0.08)] border border-transparent hover:border-slate-100
                                overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy
                              "
                            >
                              {/* Left subtle red accent bar on hover */}
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-honeywell-red rounded-r-full opacity-0 group-hover:h-3/5 group-hover:opacity-100 transition-all duration-300 ease-premium" aria-hidden="true" />

                              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-brand-steelGray group-hover:bg-red-50 group-hover:text-honeywell-red transition-colors duration-300 shrink-0">
                                <IconComp className="w-3.5 h-3.5" aria-hidden="true" />
                              </div>

                              <span className="text-[13px] font-semibold text-honeywell-navy font-display flex-1 group-hover:text-brand-deepNavy transition-colors truncate">
                                {sub.label}
                              </span>

                              <ArrowRight className="w-3.5 h-3.5 text-brand-borderGray opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-honeywell-red transition-all duration-300 ease-premium shrink-0" aria-hidden="true" />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>

                    <Link
                      href={item.label === 'Areas We Serve' ? activeLink.href : `${activeLink.href}#types`}
                      onClick={onClose}
                      className="
                        group relative flex items-center justify-center w-full py-2.5 rounded-lg overflow-hidden
                        bg-white border border-slate-200 shadow-sm
                        hover:border-transparent
                        transition-all duration-300 ease-premium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy shrink-0
                      "
                    >
                      <div className="absolute inset-0 bg-honeywell-navy translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-premium z-0" aria-hidden="true" />
                      <span className="relative z-10 flex items-center gap-2 text-[13px] font-semibold text-honeywell-navy font-body group-hover:text-white transition-colors duration-300">
                        {item.label === 'Areas We Serve' ? `Explore ${activeLink.label} Hub` : 'Explore All Models'} <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
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
