import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
export interface ApplicationCardProps {
  applicationName: string;
  description: string;
  href: string;
  ctaText?: string;
} /** * ApplicationCard Component * * Showcases application areas like Press Machines, Goods Lifts, etc. */
export function ApplicationCard({
  applicationName,
  description,
  href,
  ctaText = "Learn More",
}: ApplicationCardProps) {
  return (
    <Card 
      variant="interactive" 
      className="flex flex-col h-full group relative overflow-hidden transition-all duration-300 ease-premium border border-slate-100 bg-white active:scale-[0.98]"
    >
      {/* Decorative ambient blurred shapes */}
      <div 
        className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-brand-technicalBlue/5 rounded-full blur-3xl group-hover:bg-brand-technicalBlue/10 transition-colors duration-500 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 -mb-16 -ml-16 w-40 h-40 bg-honeywell-red/5 rounded-full blur-3xl group-hover:bg-honeywell-red/10 group-hover:scale-125 transition-all duration-500 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle glassmorphism overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-[1px]"
        aria-hidden="true"
      />

      <CardContent className="flex flex-col flex-1 p-6 md:p-8 relative z-10">
        <h3 className="text-xl font-display font-bold text-brand-deepNavy group-hover:text-honeywell-navy transition-colors duration-200 mb-3 pr-8">
          <a
            href={href}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm after:absolute after:inset-0"
          >
            {applicationName}
          </a>
        </h3>
        
        <p className="text-brand-steelGray font-body text-sm mb-6 line-clamp-3 flex-1 group-hover:text-brand-darkSlate transition-colors duration-200">
          {description}
        </p>
        
        <div className="mt-auto flex items-center text-honeywell-navy font-medium font-body text-sm group-hover:text-honeywell-red transition-colors duration-300">
          <span className="relative inline-block pb-0.5">
            {ctaText}
            <span className="absolute bottom-0 left-0 w-full h-px bg-honeywell-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-premium" />
          </span>
          <div className="ml-3 w-8 h-8 rounded-full bg-brand-lightSurface flex items-center justify-center group-hover:bg-honeywell-red group-hover:text-white transition-colors duration-300">
            <ArrowRight className="w-4 h-4 transform group-hover:-rotate-45 transition-transform duration-300 ease-premium" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
