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
      <div className="relative w-full aspect-[4/3] bg-[#F1F5F9] overflow-hidden border-b border-[#E2E8F0]">
        <Image
          src={imageSrc}
          alt={`${title} - Honeywell Hydraulics`}
          fill
          className={`object-cover ${isComingSoon ? '' : 'group-hover:scale-105 transition-transform duration-700 ease-premium'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-sm text-xs font-semibold text-[#0D1B5C] tracking-wide uppercase font-body border border-[#E2E8F0] flex items-center">
          {category}
          {isComingSoon && (
            <span className="ml-2 px-1.5 py-0.5 text-[10px] bg-[#E31B23] text-white rounded-sm font-bold tracking-wider">
              COMING SOON
            </span>
          )}
        </div>
      </div>

      <CardContent className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-2 line-clamp-1">
          {isComingSoon ? (
            title
          ) : (
            <a href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C] focus-visible:rounded-sm">
              {/* Extended click target removed to prevent blocking image */}
              {title}
            </a>
          )}
        </h3>
        
        <p className="text-[#64748B] font-body text-sm mb-6 line-clamp-2 flex-1">
          {description}
        </p>

        <div className={`mt-auto pt-4 border-t border-[#F1F5F9] flex items-center justify-between font-body text-sm ${isComingSoon ? 'text-[#94A3B8]' : 'text-[#0D1B5C] font-medium group-hover:text-[#E31B23] transition-colors duration-200'}`}>
          {isComingSoon ? 'Coming Soon' : ctaText}
          {!isComingSoon && <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />}
        </div>
      </CardContent>
    </Card>
  );
}
