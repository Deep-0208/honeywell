'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { GalleryItem, GalleryCategory } from '@/data/gallery';
import GalleryFilters from './GalleryFilters';
import GalleryGrid from './GalleryGrid';
import GalleryLightbox from './GalleryLightbox';

interface GalleryProps {
  items: GalleryItem[];
}

export default function Gallery({ items }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validCategories: GalleryCategory[] = ['facility', 'cylinders', 'power-packs', 'manifold-blocks'];
      if (validCategories.includes(hash as GalleryCategory)) {
        return hash as GalleryCategory;
      }
    }
    return 'all';
  });
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  /* ── Deep-linking support via URL Hash change ── */
  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const validCategories: GalleryCategory[] = ['facility', 'cylinders', 'power-packs', 'manifold-blocks'];
      if (validCategories.includes(hash as GalleryCategory)) {
        setActiveCategory(hash as GalleryCategory);
      }
    }
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleSelectCategory = useCallback((category: GalleryCategory) => {
    setActiveCategory(category);
    if (typeof window !== 'undefined') {
      const newUrl = category === 'all' ? window.location.pathname : `${window.location.pathname}#${category}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, []);

  /* ── Compute counts per category ── */
  const counts = useMemo(() => {
    const countsMap: Record<GalleryCategory, number> = {
      all: items.length,
      facility: 0,
      cylinders: 0,
      'power-packs': 0,
      'manifold-blocks': 0,
    };

    items.forEach((item) => {
      if (countsMap[item.category] !== undefined) {
        countsMap[item.category] += 1;
      }
    });

    return countsMap;
  }, [items]);

  /* ── Filter items based on activeCategory ── */
  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <div className="w-full">
      {/* ── Category Filters ── */}
      <GalleryFilters
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
        counts={counts}
      />

      {/* ── Gallery Grid ── */}
      <GalleryGrid
        items={filteredItems}
        onOpenLightbox={(index) => setLightboxIndex(index)}
      />

      {/* ── Lightbox Modal ── */}
      <GalleryLightbox
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(index) => setLightboxIndex(index)}
      />
    </div>
  );
}
