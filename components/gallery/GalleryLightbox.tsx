'use client';

import React, { useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import type { GalleryItem } from '@/data/gallery';

interface GalleryLightboxProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export default function GalleryLightbox({
  items,
  currentIndex,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  const isOpen = currentIndex !== null && currentIndex >= 0 && currentIndex < items.length;
  const currentItem = isOpen ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(nextIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(nextIndex);
  }, [currentIndex, items.length, onNavigate]);

  /* ── Keyboard navigation & Body scroll lock ── */
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handlePrev, handleNext, onClose]);

  if (!isOpen || !currentItem) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${currentItem.title} Image Viewer`}
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 select-none animate-fade-in p-3 sm:p-6"
      onClick={onClose}
    >
      {/* ── Top Bar ── */}
      <div
        className="w-full max-w-6xl mx-auto flex items-center justify-between z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 text-white text-xs">
          <span className="font-mono font-bold text-honeywell-red">
            {(currentIndex ?? 0) + 1} / {items.length}
          </span>
          <span className="text-white/40">|</span>
          <span className="font-semibold text-white/90">
            {currentItem.categoryLabel}
          </span>
          {currentItem.badge && (
            <>
              <span className="text-white/40">|</span>
              <span className="text-white/70 font-mono text-[11px]">
                {currentItem.badge}
              </span>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer (Press Escape)"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-honeywell-red text-white flex items-center justify-center transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* ── Center Media Viewport ── */}
      <div
        className="relative flex-grow flex items-center justify-center my-2 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image (Left arrow)"
            className="absolute left-2 sm:left-6 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-honeywell-red text-white flex items-center justify-center transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white backdrop-blur-md border border-white/10 hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Main Product / Facility Image */}
        <div className="relative w-full h-full max-w-5xl max-h-[68vh] flex items-center justify-center">
          <Image
            src={currentItem.src}
            alt={currentItem.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 1200px"
            priority
            className="object-contain"
          />
        </div>

        {/* Next Button */}
        {items.length > 1 && (
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image (Right arrow)"
            className="absolute right-2 sm:right-6 z-30 w-12 h-12 rounded-full bg-white/10 hover:bg-honeywell-red text-white flex items-center justify-center transition-all duration-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white backdrop-blur-md border border-white/10 hover:scale-105"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* ── Bottom Information Card ── */}
      <div
        className="w-full max-w-5xl mx-auto bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl px-5 py-4 text-white z-20 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-4">
            <h2 className="text-base sm:text-lg font-bold text-white leading-tight">
              {currentItem.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200/90 mt-1 leading-relaxed max-w-3xl font-light">
              {currentItem.description}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end pt-2 md:pt-0 border-t md:border-t-0 border-white/10">
            {currentItem.href && (
              <Link
                href={currentItem.href}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold transition-colors border border-white/20"
              >
                <span>View Full Specs</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            )}

            <Link
              href="/request-quote/#quote-form"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-honeywell-red hover:bg-red-700 text-white text-xs sm:text-sm font-bold transition-all shadow-glow hover:shadow-lg"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Get Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
