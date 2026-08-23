'use client'; 
import React from 'react';
import Image from 'next/image';

interface HeroCarouselProps {
  images: Array<{ src: string; alt: string; title: string }>;
}

export function HeroCarousel({ images }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      {images.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            title={item.title}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? 'high' : 'low'}
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding={index === 0 ? 'sync' : 'async'}
            quality={85}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-contain w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* Product label overlay */}
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-xl px-4 py-3 shadow-md">
            <div className="flex items-center justify-between mb-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-honeywell-red font-body">
                FEATURED PRODUCT
              </p>
              <div className="flex gap-1.5">
                {images.map((_, dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      dotIndex === currentSlide ? 'w-4 bg-honeywell-red' : 'w-1.5 bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm sm:text-base font-display font-bold text-honeywell-navy">
              {item.title}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

