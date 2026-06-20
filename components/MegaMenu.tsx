'use client';

import { useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

import type { NavItem } from '@/types/navigation';

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

  if (!item.megaMenu) return null;

  const isProductsMega = item.label === 'Products';

  return (
    <>
      {isOpen && (
        <div
          ref={panelRef}
          id={panelId}
          role="navigation"
          aria-label={`${item.label} submenu`}
          className={`
            absolute top-full left-0 z-50
            bg-white border border-[#E2E8F0] rounded-b-lg
            shadow-[0_20px_60px_-15px_rgba(13,27,92,0.12)]
            ${isProductsMega ? 'w-[820px]' : 'w-[380px]'}
          `}
          style={isProductsMega ? { left: 'max(-25%, calc(100vw - 850px) * -1)' } : undefined}
        >
          {/* Top accent line */}
          <div
            className="h-[2px] bg-gradient-to-r from-[#E31B23] via-[#0D1B5C] to-[#E31B23] rounded-t-lg"
          />

          <div className={`p-6 ${isProductsMega ? 'flex gap-8' : ''}`}>
            {/* ── Link columns ── */}
            <div
              className={isProductsMega ? 'flex-1' : ''}
            >
              {item.megaMenu.columns.map((column, colIdx) => (
                <div key={colIdx}>
                  {column.heading && (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B] mb-4 font-body">
                      {column.heading}
                    </p>
                  )}
                  <ul className="space-y-1">
                    {column.links.map((link) => (
                      <li
                        key={link.href}
                      >
                        <Link
                          href={link.href}
                          onClick={onClose}
                          className="
                            group flex items-start gap-3 px-3 py-3 rounded-md
                            transition-all duration-150
                            hover:bg-[#F8FAFC]
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C] focus-visible:ring-offset-1
                          "
                        >
                          <ChevronRight
                            className="
                              w-4 h-4 mt-0.5 shrink-0
                              text-[#CBD5E1] group-hover:text-[#E31B23]
                              group-hover:translate-x-0.5
                              transition-all duration-150
                            "
                            aria-hidden="true"
                          />
                          <div className="min-w-0">
                            <span className="block text-sm font-medium text-[#111827] group-hover:text-[#0D1B5C] font-body leading-tight">
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="block text-xs text-[#64748B] mt-0.5 leading-relaxed line-clamp-2 font-body">
                                {link.description}
                              </span>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* ── Featured / CTA panel (Products only) ── */}
            {isProductsMega && item.megaMenu.featured && (
              <div
                className="w-[260px] shrink-0 bg-[#F8FAFC] rounded-lg p-5 border border-[#E2E8F0] flex flex-col justify-between"
              >
                <div>
                  <p className="text-sm font-semibold text-[#0D1B5C] font-display leading-snug">
                    {item.megaMenu.featured.title}
                  </p>
                  <p className="text-xs text-[#64748B] mt-2 leading-relaxed font-body">
                    {item.megaMenu.featured.description}
                  </p>
                </div>
                <Link
                  href={item.megaMenu.featured.ctaHref}
                  onClick={onClose}
                  className="
                    inline-flex items-center justify-center gap-2
                    mt-5 px-4 py-2.5 rounded-sm
                    bg-[#E31B23] text-white text-sm font-medium font-body
                    hover:bg-[#C41220] transition-colors duration-150
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23] focus-visible:ring-offset-2
                  "
                >
                  {item.megaMenu.featured.ctaLabel}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            )}
          </div>

          {/* Bottom section — "View All" link */}
          <div className="border-t border-[#E2E8F0] px-6 py-3 bg-[#FAFBFC]">
            <Link
              href={item.href}
              onClick={onClose}
              className="
                inline-flex items-center gap-1.5 text-xs font-medium text-[#0D1B5C]
                hover:text-[#E31B23] transition-colors duration-150 font-body
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C]
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
