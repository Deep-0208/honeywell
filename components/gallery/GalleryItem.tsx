'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import type { GalleryItem as GalleryItemType } from '@/data/gallery';

interface GalleryItemProps {
  item: GalleryItemType;
  index: number;
  onOpenLightbox: (index: number) => void;
}

export default function GalleryItem({ item, index, onOpenLightbox }: GalleryItemProps) {
  const isFacility = item.category === 'facility';

  return (
    <article
      className="group relative flex flex-col bg-white rounded-xl border border-slate-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 overflow-hidden outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:ring-offset-2"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenLightbox(index);
        }
      }}
    >
      {/* ── Image Container ── */}
      <div
        onClick={() => onOpenLightbox(index)}
        className="relative w-full aspect-[4/3] bg-gradient-to-b from-slate-50 to-white cursor-pointer overflow-hidden flex items-center justify-center p-3"
      >

        {/* Zoom / Lightbox Prompt Icon */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenLightbox(index);
          }}
          aria-label={`View enlarged ${item.title}`}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-honeywell-navy/80 hover:bg-honeywell-red text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md transform group-hover:scale-105"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* The Image */}
        <div className="relative w-full h-full">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            loading={index < 6 ? 'eager' : 'lazy'}
            priority={index < 4}
            className={`transition-transform duration-500 ease-out group-hover:scale-[1.03] ${
              isFacility ? 'object-cover rounded-lg' : 'object-contain'
            }`}
          />
        </div>
      </div>

      {/* ── Card Content ── */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-white border-t border-slate-100">
        <div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-honeywell-red">
            {item.categoryLabel}
          </span>
          <h3
            onClick={() => onOpenLightbox(index)}
            className="text-base sm:text-lg font-bold text-honeywell-navy mt-1 leading-snug group-hover:text-honeywell-red transition-colors cursor-pointer"
          >
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-brand-darkSlate/85 mt-2 line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* ── Action Footer ── */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
          <button
            type="button"
            onClick={() => onOpenLightbox(index)}
            className="text-brand-steelGray hover:text-honeywell-navy font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5 text-honeywell-red" />
            <span>Enlarge Photo</span>
          </button>

          {item.href ? (
            <Link
              href={item.href}
              className="inline-flex items-center gap-1 text-honeywell-navy hover:text-honeywell-red font-semibold transition-colors"
            >
              <span>{isFacility ? 'View Facility' : 'Specifications'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
