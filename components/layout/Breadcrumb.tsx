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

      <nav aria-label="Breadcrumb" className={`text-sm md:text-base font-body text-slate-500 mb-6 ${className}`}>
        <ol className="flex items-center gap-2 flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <React.Fragment key={item.href || index}>
                {index > 0 && <li aria-hidden="true" className="text-slate-400">&rsaquo;</li>}
                {isLast ? (
                  <li
                    className="text-honeywell-red font-semibold"
                    aria-current="page"
                  >
                    {item.name}
                  </li>
                ) : (
                  <li>
                    <Link
                      href={item.href}
                      className="hover:text-honeywell-red transition-colors duration-200 ease-out"
                    >
                      {item.name}
                    </Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
