'use client';

import React from 'react';
import { GALLERY_CATEGORIES, GalleryCategory } from '@/data/gallery';

interface GalleryFiltersProps {
  activeCategory: GalleryCategory;
  onSelectCategory: (category: GalleryCategory) => void;
  counts: Record<GalleryCategory, number>;
}

export default function GalleryFilters({
  activeCategory,
  onSelectCategory,
  counts,
}: GalleryFiltersProps) {
  return (
    <nav
      aria-label="Gallery category filters"
      className="w-full mb-6"
    >
      {/* Filter Tabs Container */}
      <div className="flex items-center justify-start overflow-x-auto pb-2 scrollbar-none gap-2 sm:gap-2.5">
        {GALLERY_CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = counts[cat.countKey] || 0;

          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="gallery-grid"
              onClick={() => onSelectCategory(cat.id)}
              className={`group relative whitespace-nowrap px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 cursor-pointer outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:ring-offset-2 ${
                isActive
                  ? 'bg-honeywell-navy text-white shadow-sm border border-honeywell-navy'
                  : 'bg-white text-brand-darkSlate hover:text-honeywell-navy hover:bg-slate-50 border border-slate-200/90 shadow-xs'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-full transition-colors ${
                  isActive
                    ? 'bg-honeywell-red text-white'
                    : 'bg-slate-100 text-brand-steelGray group-hover:bg-slate-200'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
