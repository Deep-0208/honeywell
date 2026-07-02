import React from 'react';
import { Button } from './Button';
import { AlertCircle } from 'lucide-react';

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actionText?: string;
  actionHref?: string;
  className?: string;
}

/**
 * EmptyState Component
 * 
 * Used for "No Products", "No Results", or internal 404 block states.
 */
export function EmptyState({
  title,
  description,
  icon = <AlertCircle className="w-12 h-12 text-[#94A3B8]" />,
  actionText,
  actionHref,
  className = '',
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center border-2 border-dashed border-slate-200 rounded-xl bg-brand-surfaceGray ${className}`}>
      <div className="mb-4 bg-white p-4 rounded-full shadow-sm border border-slate-200">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-honeywell-navy mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-brand-steelGray font-body max-w-md mb-6 text-justify">
          {description}
        </p>
      )}
      {actionText && actionHref && (
        <Button href={actionHref} variant="outline">
          {actionText}
        </Button>
      )}
    </div>
  );
}
