import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { MapPin, ArrowRight } from "lucide-react";
export interface LocationCardProps {
  city: string;
  description: string;
  industries: string[];
  href: string;
  ctaText?: string;
}
export function LocationCard({
  city,
  description,
  industries,
  href,
  ctaText = "View Location Details",
}: LocationCardProps) {
  return (
    <Card 
      variant="interactive" 
      className="flex flex-col h-full group relative overflow-hidden transition-all duration-300 ease-premium border border-slate-100 bg-white active:scale-[0.98]"
    >
      {/* Decorative ambient blurred shapes */}
      <div 
        className="absolute top-0 right-0 -mt-16 -mr-16 w-32 h-32 bg-honeywell-red/5 rounded-full blur-3xl group-hover:bg-honeywell-red/10 transition-colors duration-500 pointer-events-none" 
        aria-hidden="true" 
      />

      <CardContent className="flex flex-col flex-1 p-6 relative z-10">
        <div className="flex items-start gap-3 mb-4">
          <div className="mt-1 p-2 bg-honeywell-red/10 rounded-full text-honeywell-red group-hover:bg-honeywell-red group-hover:text-white transition-colors duration-300">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-display font-bold text-brand-deepNavy group-hover:text-honeywell-navy transition-colors duration-200">
              <a
                href={href}
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm after:absolute after:inset-0"
              >
                {city}
              </a>
            </h3>
          </div>
        </div>
        
        <p className="text-brand-steelGray font-body text-sm mb-6 line-clamp-3 group-hover:text-brand-darkSlate transition-colors duration-200">
          {description}
        </p>
        
        {industries.length > 0 && (
          <div className="mb-6 flex-1">
            <p className="text-xs font-semibold text-honeywell-navy uppercase tracking-wider mb-2">
              Key Industries
            </p>
            <div className="flex flex-wrap gap-2">
              {industries.slice(0, 3).map((ind) => (
                <span
                  key={ind}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body uppercase tracking-wider bg-honeywell-navy text-white shadow-sm group-hover:bg-brand-deepNavy transition-colors duration-300"
                >
                  {ind}
                </span>
              ))}
              {industries.length > 3 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body uppercase tracking-wider bg-slate-100 text-brand-darkSlate">
                  +{industries.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-brand-lightSurface flex items-center gap-2 text-honeywell-navy font-medium font-body text-sm group-hover:text-honeywell-red transition-colors duration-300">
          <span className="relative inline-block pb-0.5">
            {ctaText}
            <span className="absolute bottom-0 left-0 w-full h-px bg-honeywell-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-premium" />
          </span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ease-premium" />
        </div>
      </CardContent>
    </Card>
  );
}
