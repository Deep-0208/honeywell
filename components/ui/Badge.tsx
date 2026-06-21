import React from 'react';

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
    iso: 'bg-honeywell-navy/10 text-honeywell-navy', // Navy subtle
    years: 'bg-honeywell-red/10 text-[#B91C1C]', // Red subtle with higher contrast text
    clients: 'bg-green-100 text-green-800',
    madeInIndia: 'bg-orange-100 text-orange-800',
    custom: 'bg-purple-100 text-purple-800',
    default: 'bg-gray-100 text-gray-800',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
