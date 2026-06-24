import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

export interface ApplicationCardProps {
  applicationName: string;
  description: string;
  href: string;
  ctaText?: string;
}

/**
 * ApplicationCard Component
 * 
 * Showcases application areas like Press Machines, Goods Lifts, etc.
 */
export function ApplicationCard({
  applicationName,
  description,
  href,
  ctaText = 'Learn More',
}: ApplicationCardProps) {
  return (
    <Card variant="interactive" className="flex flex-col h-full group relative">
      <CardContent className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3 pr-8">
          <a href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm">
            <span className="absolute inset-0" aria-hidden="true" />
            {applicationName}
          </a>
        </h3>
        
        <p className="text-brand-steelGray font-body text-sm mb-6 line-clamp-3 flex-1">
          {description}
        </p>

        <div className="mt-auto flex items-center text-honeywell-navy font-medium font-body text-sm group-hover:text-honeywell-red transition-colors">
          {ctaText}
          <div className="ml-3 w-8 h-8 rounded-full bg-brand-lightSurface flex items-center justify-center group-hover:bg-honeywell-red group-hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
