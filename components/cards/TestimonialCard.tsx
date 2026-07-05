import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";
export interface TestimonialCardProps {
  name: string;
  company: string;
  role?: string;
  quote: string;
  imageSrc?: string;
}
export function TestimonialCard({
  name,
  company,
  role,
  quote,
}: TestimonialCardProps) {
  return (
    <Card className="h-full relative overflow-hidden bg-white border border-slate-100 group hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 ease-premium">
      {/* Decorative ambient blurred shapes */}
      <div 
        className="absolute top-0 left-0 -mt-16 -ml-16 w-32 h-32 bg-brand-technicalBlue/5 rounded-full blur-3xl group-hover:bg-brand-technicalBlue/10 transition-colors duration-500 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle top accent on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-honeywell-red to-honeywell-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-premium origin-left z-10"
        aria-hidden="true"
      />
      
      <CardContent className="p-4 sm:p-6 md:p-8 flex flex-col h-full relative z-10">
        <Quote
          className="w-6 h-6 sm:w-10 sm:h-10 text-slate-100 group-hover:text-honeywell-red/20 group-hover:scale-110 transition-all duration-300 ease-premium mb-4 sm:mb-6 shrink-0"
          aria-hidden="true"
        />
        
        <blockquote className="flex-1">
          <p className="text-brand-darkSlate font-body text-sm sm:text-base leading-relaxed italic mb-6 sm:mb-8 transition-colors duration-200">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>
        
        <div className="flex items-center gap-4 mt-auto">
          {/* Company initial avatar — no placeholder photos */}
          <div className="w-12 h-12 rounded-full bg-honeywell-navy/5 flex items-center justify-center shrink-0 border border-honeywell-navy/10 ring-2 ring-transparent group-hover:ring-honeywell-red/10 group-hover:bg-honeywell-navy/10 transition-all duration-300 ease-premium">
            <span className="text-honeywell-navy font-display font-bold text-lg uppercase">
              {company.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-bold text-brand-deepNavy font-display leading-tight group-hover:text-honeywell-navy transition-colors duration-200">
              {name}
            </p>
            <p className="text-sm text-brand-steelGray font-body">
              {role && `${role}, `}
              <span className="font-medium text-brand-darkSlate">
                {company}
              </span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
