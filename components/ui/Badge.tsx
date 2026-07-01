import React from 'react';
import { cn } from '@/lib/utils';

export type BadgeVariant = 'iso' | 'years' | 'clients' | 'madeInIndia' | 'custom' | 'default';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

/**
 * Badge Component
 * 
 * Reusable badge for highlighting key Honeywell metrics and certifications.
 */
export function Badge({ variant = 'default', className = '', children, ...props }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-body uppercase tracking-wider';
  
  const variants = {
    iso: 'bg-honeywell-navy text-white',
    years: 'bg-honeywell-navy text-white',
    clients: 'bg-honeywell-red text-white',
    madeInIndia: 'bg-honeywell-red text-white',
    custom: 'bg-honeywell-navy text-white',
    default: 'bg-honeywell-navy text-white',
  };

  return (
    <span 
      className={cn(baseStyles, variants[variant], className)} 
      {...props}
    >
      {children}
    </span>
  );
}
