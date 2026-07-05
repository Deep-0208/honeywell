import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { ArrowRight } from "lucide-react";

export interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  href?: string;
  ctaText?: string;
}

/**
 * ProductCard Component
 *
 * Used for listing hydraulic cylinders, power packs, and systems.
 */
export function ProductCard({
  title,
  description,
  imageSrc,
  href,
  ctaText = "View Details",
}: ProductCardProps) {
  const isComingSoon = !href;

  return (
    <Card
      variant={isComingSoon ? "default" : "interactive"}
      className={`relative flex flex-col h-full bg-white border border-slate-100 overflow-hidden ${isComingSoon ? "" : "group transition-all duration-300 ease-premium active:scale-[0.98]"}`}
    >
      {/* Decorative ambient blurred shapes */}
      {!isComingSoon && (
        <div 
          className="absolute bottom-0 right-0 -mb-16 -mr-16 w-32 h-32 bg-honeywell-red/5 rounded-full blur-3xl group-hover:bg-honeywell-red/10 group-hover:scale-125 transition-all duration-500 pointer-events-none z-0" 
          aria-hidden="true" 
        />
      )}

      {/* Image Container */}
      <div className="relative w-full aspect-[4/3] bg-brand-lightSurface overflow-hidden border-b border-slate-100 z-10">
        <Image
          src={imageSrc}
          alt={`${title} - Honeywell Hydraulics`}
          fill
          className={`object-cover ${isComingSoon ? "" : "group-hover:scale-105 transition-transform duration-500 ease-premium"}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <CardContent className="flex flex-col flex-1 p-6 relative z-10">
        <Heading variant="card" as="h3" className={`mb-2 line-clamp-1 ${isComingSoon ? "text-brand-deepNavy" : "text-brand-deepNavy group-hover:text-honeywell-navy transition-colors duration-200"}`}>
          {isComingSoon ? (
            title
          ) : (
            <Link
              href={href}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm before:absolute before:inset-0 before:z-10"
            >
              {title}
            </Link>
          )}
        </Heading>

        <p className={`font-body text-sm mb-6 line-clamp-2 flex-1 text-justify ${isComingSoon ? "text-brand-steelGray" : "text-brand-steelGray group-hover:text-brand-darkSlate transition-colors duration-200"}`}>
          {description}
        </p>

        <div
          className={`mt-auto pt-4 border-t border-slate-100 flex items-center justify-between font-body text-sm ${isComingSoon ? "text-slate-400" : "text-honeywell-navy font-medium group-hover:text-honeywell-red transition-colors duration-300"}`}
        >
          {isComingSoon ? (
            <span className="pr-2">Coming Soon</span>
          ) : (
            <>
              <span className="relative inline-block pb-0.5">
                {ctaText}
                <span className="absolute bottom-0 left-0 w-full h-px bg-honeywell-red transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-premium" />
              </span>
              <ArrowRight className="w-4 h-4 shrink-0 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
