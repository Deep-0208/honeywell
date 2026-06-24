import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  href?: string;
  ctaText?: string;
}

/**
 * ProductCard Component
 * 
 * Used for listing hydraulic cylinders, power packs, and systems.
 */
export function ProductCard({
  title,
  description,
  category,
  imageSrc,
  href,
  ctaText = 'View Details',
}: ProductCardProps) {
  const isComingSoon = !href;

  return (
    <Card 
      variant={isComingSoon ? 'default' : 'interactive'} 
      className={`flex flex-col h-full ${isComingSoon ? '' : 'group'}`}
    >
      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-brand-lightSurface overflow-hidden border-b border-slate-200">
        <Image
          src={imageSrc}
          alt={`${title} - Honeywell Hydraulics`}
          fill
          className={`object-cover ${isComingSoon ? '' : 'group-hover:scale-105 transition-transform duration-700 ease-premium'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

      </div>

      <CardContent className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-display font-bold text-honeywell-navy mb-2 line-clamp-1">
          {isComingSoon ? (
            title
          ) : (
            <a href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm">
              {/* Extended click target removed to prevent blocking image */}
              {title}
            </a>
          )}
        </h3>
        
        <p className="text-brand-steelGray font-body text-sm mb-6 line-clamp-2 flex-1">
          {description}
        </p>

        <div className={`mt-auto pt-4 border-t border-brand-lightSurface flex items-center justify-between font-body text-sm ${isComingSoon ? 'text-[#94A3B8]' : 'text-honeywell-navy font-medium group-hover:text-honeywell-red transition-colors duration-200'}`}>
          {isComingSoon ? 'Coming Soon' : ctaText}
          {!isComingSoon && <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />}
        </div>
      </CardContent>
    </Card>
  );
}
