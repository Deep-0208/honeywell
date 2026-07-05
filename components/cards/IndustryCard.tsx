import React from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";
import { Heading } from "@/components/ui/Heading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export interface IndustryCardProps {
  industryName: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  ctaText?: string;
}
/** * IndustryCard Component * * Showcases specific industries served (e.g. Injection Moulding, Automotive). */ export function IndustryCard({
  industryName,
  description,
  icon,
  href,
  ctaText = "Explore Industry Solutions",
}: IndustryCardProps) {
  return (
    <Card
      variant="interactive"
      className="flex flex-col h-full group relative overflow-hidden transition-all duration-300 ease-premium border border-slate-100 bg-white active:scale-[0.98]"
    >
      {/* Decorative ambient blurred shapes */}
      <div 
        className="absolute top-0 right-0 -mt-16 -mr-16 w-40 h-40 bg-honeywell-navy/5 rounded-full blur-3xl group-hover:bg-honeywell-navy/[0.08] transition-colors duration-500 pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 -mb-16 -ml-16 w-32 h-32 bg-honeywell-red/5 rounded-full blur-3xl group-hover:bg-honeywell-red/10 group-hover:scale-125 transition-all duration-500 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Subtle glassmorphism overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none backdrop-blur-[1px]"
        aria-hidden="true"
      />

      <CardContent className="flex flex-col flex-1 p-8 relative z-10">
        <IconBox
          icon={icon}
          size="lg"
          variant="secondary"
          className="mb-8 relative group-hover:scale-110 group-active:scale-100 group-hover:shadow-glow-navy group-hover:-translate-y-1 transition-all duration-300 ease-premium ring-1 ring-transparent group-hover:ring-honeywell-navy/10 group-hover:bg-brand-lightSurface"
        />

        <Heading variant="card" as="h3" className="mb-4 text-brand-deepNavy group-hover:text-honeywell-navy transition-colors duration-200">
          <Link
            href={href}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm after:absolute after:inset-0"
          >
            {industryName}
          </Link>
        </Heading>

        <p className="text-brand-steelGray font-body text-sm leading-relaxed mb-8 line-clamp-3 flex-1 group-hover:text-brand-darkSlate transition-colors duration-200">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-2 text-honeywell-red font-semibold font-body text-sm">
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
