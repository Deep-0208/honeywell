'use client';

import React from 'react';
import type { GalleryItem as GalleryItemType } from '@/data/gallery';
import GalleryItem from './GalleryItem';

interface GalleryGridProps {
  items: GalleryItemType[];
  onOpenLightbox: (index: number) => void;
}

export default function GalleryGrid({ items, onOpenLightbox }: GalleryGridProps) {
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
        <p className="text-base text-brand-steelGray font-medium">
          No gallery items available in this category.
        </p>
      </div>
    );
  }

  return (
    <div
      id="gallery-grid"
      role="tabpanel"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7"
    >
      {items.map((item, index) => (
        <GalleryItem
          key={item.id}
          item={item}
          index={index}
          onOpenLightbox={onOpenLightbox}
        />
      ))}
    </div>
  );
}
