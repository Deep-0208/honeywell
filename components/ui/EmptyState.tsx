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
    <div className={`flex flex-col items-center justify-center py-16 px-4 text-center border-2 border-dashed border-[#E2E8F0] rounded-xl bg-[#F8FAFC] ${className}`}>
      <div className="mb-4 bg-white p-4 rounded-full shadow-sm border border-[#E2E8F0]">
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold text-[#0D1B5C] mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-[#64748B] font-body max-w-md mb-6">
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
