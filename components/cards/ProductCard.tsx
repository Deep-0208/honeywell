import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Heading } from '@/components/ui/Heading';
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
  imageSrc,
  href,
  ctaText = 'View Details',
}: ProductCardProps) {
  const isComingSoon = !href;

  return (
    <Card 
      variant={isComingSoon ? 'default' : 'interactive'} 
      className={`relative flex flex-col h-full ${isComingSoon ? '' : 'group hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-premium'}`}
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
        <Heading variant="card" as="h3" className="mb-2 line-clamp-1">
          {isComingSoon ? (
            title
          ) : (
            <Link href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm before:absolute before:inset-0 before:z-10">
              {title}
            </Link>
          )}
        </Heading>
        
        <p className="text-brand-steelGray font-body text-sm mb-6 line-clamp-2 flex-1">
          {description}
        </p>

        <div className={`mt-auto pt-4 border-t border-brand-lightSurface flex items-center justify-between font-body text-sm ${isComingSoon ? 'text-slate-400' : 'text-honeywell-navy font-medium group-hover:text-honeywell-red transition-colors duration-200'}`}>
          <span className="pr-2">{isComingSoon ? 'Coming Soon' : ctaText}</span>
          {!isComingSoon && <ArrowRight className="w-4 h-4 shrink-0 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />}
        </div>
      </CardContent>
    </Card>
  );
}
