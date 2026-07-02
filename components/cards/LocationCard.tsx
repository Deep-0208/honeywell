import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { MapPin, ArrowRight } from 'lucide-react';

export interface LocationCardProps {
  city: string;
  description: string;
  industries: string[];
  href: string;
  ctaText?: string;
}

/**
 * LocationCard Component
 * 
 * Designed for programmatic Local SEO pages (e.g. Hydraulic Cylinders in Mumbai).
 */
export function LocationCard({
  city,
  description,
  industries,
  href,
  ctaText = 'View Location Details',
}: LocationCardProps) {
  return (
    <Card variant="interactive" className="flex flex-col h-full group relative">
      <CardContent className="flex flex-col flex-1 p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="mt-1 p-2 bg-honeywell-red/10 rounded-full text-honeywell-red">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-honeywell-navy">
              <a href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm">
                <span className="absolute inset-0" aria-hidden="true" />
                {city}
              </a>
            </h3>
          </div>
        </div>
        
        <p className="text-brand-steelGray font-body text-sm mb-6 line-clamp-3 ">
          {description}
        </p>

        {industries.length > 0 && (
          <div className="mb-6 flex-1">
            <p className="text-xs font-semibold text-honeywell-navy uppercase tracking-wider mb-2">Key Industries</p>
            <div className="flex flex-wrap gap-2">
              {industries.slice(0, 3).map((ind) => (
                <span key={ind} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body uppercase tracking-wider bg-honeywell-navy text-white">
                  {ind}
                </span>
              ))}
              {industries.length > 3 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body uppercase tracking-wider bg-honeywell-navy text-white">
                  +{industries.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="mt-auto pt-4 border-t border-brand-lightSurface flex items-center text-honeywell-navy font-medium font-body text-sm group-hover:text-honeywell-red transition-colors">
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );
}
