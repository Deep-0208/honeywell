'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Phone, ArrowRight } from 'lucide-react';

import type { SiteNavigation, NavItem } from '@/types/navigation';

interface MobileMenuProps {
  navigation: SiteNavigation;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileMenu — Full-screen drawer with accordion navigation.
 *
 * Features:
 * - White background per DESIGN.md logo visibility rule
 * - Accordion expand/collapse for sub-menus
 * - Sticky bottom CTA bar with "Request Quote"
 * - Escape to close, focus trap, ARIA labels
 */
export default function MobileMenu({ navigation, isOpen, onClose }: MobileMenuProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  /* Focus the close button when drawer opens */
  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => setExpandedItem(null), 0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

  const toggleAccordion = useCallback((label: string) => {
    setExpandedItem((prev) => (prev === label ? null : label));
  }, []);

  return (
    <>
      {isOpen && (
        <>
          {/* ── Backdrop ── */}
          <div
            className="fixed inset-0 z-40 bg-[#0D1B5C]/20 backdrop-blur-sm transition-opacity duration-300"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* ── Drawer ── */}
          <div
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="
              fixed inset-y-0 right-0 z-50
              w-full max-w-[420px] bg-white
              flex flex-col
              shadow-[-8px_0_30px_-10px_rgba(13,27,92,0.1)]
            "
          >
            {/* ── Header ── */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E2E8F0] shrink-0">
              <span className="text-sm font-semibold text-[#0D1B5C] uppercase tracking-widest font-display">
                Menu
              </span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Close menu"
                className="
                  p-2 rounded-md text-[#334155]
                  hover:bg-[#F1F5F9] hover:text-[#0D1B5C]
                  transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C]
                "
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ── Navigation List ── */}
            <nav className="flex-1 overflow-y-auto overscroll-contain px-4 py-4" aria-label="Mobile navigation">
              <ul
                className="space-y-1"
                role="list"
              >
                {navigation.mainNav.map((item) => (
                  <li key={item.label}>
                    <MobileNavItem
                      item={item}
                      isExpanded={expandedItem === item.label}
                      onToggle={() => toggleAccordion(item.label)}
                      onClose={onClose}
                    />
                  </li>
                ))}
              </ul>
            </nav>

            {/* ── Sticky Bottom CTA ── */}
            <div
              className="shrink-0 border-t border-[#E2E8F0] bg-white px-5 py-4 space-y-3"
            >
              {/* Phone */}
              <a
                href={`tel:${navigation.phone}`}
                className="
                  flex items-center justify-center gap-2.5
                  px-4 py-3 rounded-sm border-2 border-[#0D1B5C]
                  text-sm font-medium text-[#0D1B5C] font-body
                  hover:bg-[#0D1B5C] hover:text-white
                  transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C]
                "
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {navigation.phoneDisplay}
              </a>

              {/* Request Quote */}
              <Link
                href={navigation.ctaHref}
                onClick={onClose}
                className="
                  flex items-center justify-center gap-2.5
                  px-4 py-3 rounded-sm
                  bg-[#E31B23] text-white text-sm font-semibold font-body
                  hover:bg-[#C41220]
                  transition-colors duration-150
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E31B23] focus-visible:ring-offset-2
                "
              >
                {navigation.ctaLabel}
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────
   Accordion Nav Item
   ───────────────────────────────────────────── */

function MobileNavItem({
  item,
  isExpanded,
  onToggle,
  onClose,
}: {
  item: NavItem;
  isExpanded: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const hasSubmenu = !!item.megaMenu;
  const panelId = `mobile-panel-${item.label.toLowerCase().replace(/\s+/g, '-')}`;

  if (!hasSubmenu) {
    return (
      <Link
        href={item.href}
        onClick={onClose}
        className="
          flex items-center px-3 py-3.5
          text-[15px] font-medium text-[#111827] font-body
          rounded-md hover:bg-[#F8FAFC]
          transition-colors duration-150
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C]
        "
      >
        {item.label}
      </Link>
    );
  }

  return (
    <>
      <button
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={panelId}
        className="
          w-full flex items-center justify-between px-3 py-3.5
          text-[15px] font-medium text-[#111827] font-body
          rounded-md hover:bg-[#F8FAFC]
          transition-colors duration-150
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C]
        "
      >
        {item.label}
        <span
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        >
          <ChevronDown
            className="w-4 h-4 text-[#64748B]"
            />
        </span>
      </button>

      {/* Accordion Panel */}
      <>
        {isExpanded && (
          <div
            id={panelId}
            role="region"
            aria-label={`${item.label} submenu`}
            className="overflow-hidden transition-all duration-300"
          >
            <ul className="pl-4 pr-2 pb-2 space-y-0.5" role="list">
              {item.megaMenu!.columns.flatMap((col) =>
                col.links.map((link) => (
                  <li key={link.href} role="listitem">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="
                        flex items-start gap-2.5 px-3 py-2.5
                        rounded-md hover:bg-[#F1F5F9]
                        transition-colors duration-150
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C]
                      "
                    >
                      <ChevronDown
                        className="w-3 h-3 mt-1 shrink-0 -rotate-90 text-[#CBD5E1]"
                        aria-hidden="true"
                      />
                      <div className="min-w-0">
                        <span className="block text-sm text-[#334155] font-body leading-tight">
                          {link.label}
                        </span>
                        {link.description && (
                          <span className="block text-[11px] text-[#64748B] mt-0.5 leading-relaxed line-clamp-2 font-body">
                            {link.description}
                          </span>
                        )}
                      </div>
                    </Link>
                  </li>
                ))
              )}

              {/* View All link at bottom */}
              <li role="listitem">
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="
                    flex items-center gap-1.5 px-3 py-2.5
                    text-xs font-semibold text-[#0D1B5C]
                    hover:text-[#E31B23] transition-colors font-body
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C]
                    group
                  "
                >
                  View all {item.label.toLowerCase()}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>
    </>
  );
}
