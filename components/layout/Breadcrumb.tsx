import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { buildBreadcrumbJsonLd } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Component
 * 
 * Accessible, SEO-friendly breadcrumb navigation.
 * Automatically injects BreadcrumbList JSON-LD schema.
 * Server Component.
 */
export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // Map to the format expected by the seo utility
  const schemaItems = items.map(item => ({
    name: item.name,
    item: item.href,
  }));

  const schema = buildBreadcrumbJsonLd(schemaItems);

  return (
    <>
      {/* Inject Breadcrumb Schema */}
      <JsonLd data={schema} />

      <nav aria-label="Breadcrumb" className={`py-4 ${className}`}>
        <ol className="flex flex-wrap items-center gap-y-1 gap-x-1.5 text-xs sm:text-sm md:text-base font-body text-brand-steelGray">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {isLast ? (
                  <span
                    className="text-honeywell-navy font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className="hover:text-honeywell-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm"
                    >
                      {item.name}
                    </Link>
                    <ChevronRight
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-borderGray shrink-0"
                      aria-hidden="true"
                    />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
