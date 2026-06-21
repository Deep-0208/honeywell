import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { ArrowRight } from 'lucide-react';

export interface IndustryCardProps {
  industryName: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  ctaText?: string;
}

/**
 * IndustryCard Component
 * 
 * Showcases specific industries served (e.g. Injection Moulding, Automotive).
 */
export function IndustryCard({
  industryName,
  description,
  icon,
  href,
  ctaText = 'Explore Industry Solutions',
}: IndustryCardProps) {
  return (
    <Card variant="interactive" className="flex flex-col h-full group relative overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-honeywell-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true" />
      
      <CardContent className="flex flex-col flex-1 p-8 relative">
        <IconBox 
          icon={icon} 
          size="lg" 
          variant="primary" 
          className="mb-6 group-hover:scale-110 group-hover:shadow-glow/20 transition-all duration-350 ease-premium"
        />
        
        <h3 className="text-xl font-display font-bold text-honeywell-navy mb-3 group-hover:text-honeywell-red transition-colors duration-200">
          <a href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm">
            <span className="absolute inset-0" aria-hidden="true" />
            {industryName}
          </a>
        </h3>
        
        <p className="text-brand-steelGray font-body text-sm mb-8 line-clamp-3 flex-1">
          {description}
        </p>

        <div className="mt-auto flex items-center text-honeywell-red font-medium font-body text-sm">
          {ctaText}
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300 ease-premium" />
        </div>
      </CardContent>
    </Card>
  );
}
