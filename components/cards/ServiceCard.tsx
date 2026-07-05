import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";
export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  ctaText?: string;
} /** * ServiceCard Component * * Used for service offerings like Repair, Retrofitting, and Custom Design. */
export function ServiceCard({
  title,
  description,
  href,
  ctaText = "View Service",
}: ServiceCardProps) {
  return (
    <Card className="flex flex-col h-full group relative overflow-hidden border border-slate-100 bg-brand-surfaceGray hover:bg-white transition-all duration-300 ease-premium hover:shadow-md hover:-translate-y-1 active:scale-[0.98]">
      {/* Decorative ambient blurred shapes */}
      <div 
        className="absolute bottom-0 right-0 -mb-16 -mr-16 w-32 h-32 bg-honeywell-navy/5 rounded-full blur-3xl group-hover:bg-honeywell-navy/10 transition-colors duration-500 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-honeywell-navy to-honeywell-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardContent className="flex flex-col flex-1 p-6 md:p-8 relative z-10">
        <h3 className="text-xl font-display font-bold text-brand-deepNavy group-hover:text-honeywell-navy transition-colors duration-200 mb-3">
          <a
            href={href}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm after:absolute after:inset-0"
          >
            {title}
          </a>
        </h3>
        
        <p className="text-brand-steelGray font-body text-sm mb-6 line-clamp-3 flex-1 group-hover:text-brand-darkSlate transition-colors duration-200 relative z-10">
          {description}
        </p>
        
        <div className="mt-auto flex items-center gap-2 text-honeywell-red font-medium font-body text-sm relative z-10">
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
