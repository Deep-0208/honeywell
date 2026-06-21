import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  ctaText?: string;
}

/**
 * ServiceCard Component
 * 
 * Used for service offerings like Repair, Retrofitting, and Custom Design.
 */
export function ServiceCard({
  title,
  description,
  href,
  ctaText = 'View Service',
}: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full group relative overflow-hidden border-0 bg-brand-surfaceGray hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-honeywell-navy to-honeywell-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardContent className="flex flex-col flex-1 p-6 md:p-8">
        <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3">
          <a href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm">
            <span className="absolute inset-0" aria-hidden="true" />
            {title}
          </a>
        </h3>
        
        <p className="text-brand-steelGray font-body text-sm mb-6 line-clamp-3 flex-1 relative z-10">
          {description}
        </p>

        <div className="mt-auto flex items-center text-honeywell-red font-medium font-body text-sm relative z-10">
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </CardContent>
    </Card>
  );
}
