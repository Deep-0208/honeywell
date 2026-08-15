import React from 'react';
import { Card, CardContent } from '@/components/ui/Card';
import { IconBox } from '@/components/ui/IconBox';
import { Heading } from '@/components/ui/Heading';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface IndustryCardProps {
  industryName: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
  ctaText?: string;
}

/**
 * IndustryCard Component
 * 
 * Showcases specific industries served (e.g. Injection Moulding, Automotive).
 * When a valid link is provided, it operates as an interactive link card.
 * When no valid link is provided, it cleanly renders as an informational feature card.
 */
export function IndustryCard({
  industryName,
  description,
  icon,
  href,
  ctaText = 'Explore Solutions',
}: IndustryCardProps) {
  const hasValidLink = Boolean(href && href !== '#' && !href.startsWith('/industries'));

  return (
    <Card
      variant={hasValidLink ? 'interactive' : 'default'}
      className={`flex flex-col h-full group relative overflow-hidden transition-all duration-300 ease-premium ${
        hasValidLink ? 'hover:-translate-y-1 hover:shadow-xl' : 'hover:shadow-md'
      }`}
    >
      {/* Subtle gradient overlay on hover */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-honeywell-navy/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        aria-hidden="true"
      />
      <CardContent className="flex flex-col flex-1 p-8 relative">
        <IconBox
          icon={icon}
          size="lg"
          variant="outline"
          className="mb-6 group-hover:scale-110 transition-all duration-350 ease-premium"
        />

        <Heading
          variant="card"
          as="h3"
          className={`mb-3 transition-colors duration-300 ${
            hasValidLink ? 'group-hover:text-honeywell-red' : 'text-honeywell-navy'
          }`}
        >
          {hasValidLink && href ? (
            <Link
              href={href}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm"
            >
              <span className="absolute inset-0" aria-hidden="true" />
              {industryName}
            </Link>
          ) : (
            <span>{industryName}</span>
          )}
        </Heading>

        <p className="text-brand-steelGray font-body text-sm mb-4 line-clamp-3 flex-1">
          {description}
        </p>

        {hasValidLink && (
          <div className="mt-auto pt-4 border-t border-brand-lightSurface flex items-center justify-between text-honeywell-navy font-medium font-body text-sm group-hover:text-honeywell-red transition-colors duration-200">
            <span className="pr-2">{ctaText}</span>
            <ArrowRight className="w-4 h-4 shrink-0 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-premium" />
          </div>
        )}
      </CardContent>
    </Card>
  );
}