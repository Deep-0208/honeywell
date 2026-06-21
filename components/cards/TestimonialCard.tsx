import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { Quote } from 'lucide-react';

export interface TestimonialCardProps {
  name: string;
  company: string;
  role: string;
  quote: string;
  imageSrc?: string;
}

/**
 * TestimonialCard Component
 * 
 * Showcases client testimonials with an enterprise aesthetic.
 */
export function TestimonialCard({
  name,
  company,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <Card className="h-full relative overflow-hidden bg-white border border-slate-200 group hover:shadow-elevated transition-all duration-350 ease-premium">
      {/* Subtle top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-honeywell-red to-honeywell-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-premium origin-left" aria-hidden="true" />
      
      <CardContent className="p-8 flex flex-col h-full">
        <Quote className="w-10 h-10 text-slate-200 group-hover:text-honeywell-red/20 transition-colors duration-300 mb-6 shrink-0" aria-hidden="true" />
        
        <blockquote className="flex-1">
          <p className="text-brand-darkSlate font-body text-base leading-relaxed italic mb-8">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
        
        <div className="flex items-center gap-4 mt-auto">
          {/* Company initial avatar — no placeholder photos */}
          <div className="w-12 h-12 rounded-full bg-honeywell-navy/10 flex items-center justify-center shrink-0 border border-honeywell-navy/20 ring-2 ring-transparent group-hover:ring-honeywell-red/10 transition-all duration-300">
            <span className="text-honeywell-navy font-display font-bold text-lg uppercase">
              {company.charAt(0)}
            </span>
          </div>
          
          <div>
            <p className="font-bold text-honeywell-navy font-display leading-tight">{name}</p>
            <p className="text-sm text-brand-steelGray font-body">
              {role}, <span className="font-medium text-brand-darkSlate">{company}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
