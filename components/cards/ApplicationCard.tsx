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
        <h3 className="text-xl font-display font-bold text-[#0D1B5C] mb-3 group-hover:text-[#E31B23] transition-colors pr-8">
          <a href={href} className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C] focus-visible:rounded-sm">
            <span className="absolute inset-0" aria-hidden="true" />
            {applicationName}
          </a>
        </h3>
        
        <p className="text-[#64748B] font-body text-sm mb-6 line-clamp-3 flex-1">
          {description}
        </p>

        <div className="mt-auto flex items-center text-[#0D1B5C] font-medium font-body text-sm group-hover:text-[#E31B23] transition-colors">
          {ctaText}
          <div className="ml-3 w-8 h-8 rounded-full bg-[#F1F5F9] flex items-center justify-center group-hover:bg-[#E31B23] group-hover:text-white transition-colors">
            <ArrowRight className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
