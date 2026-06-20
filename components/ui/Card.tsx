import React from 'react';

export type CardVariant = 'default' | 'interactive' | 'featured';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: React.ReactNode;
}

/**
 * Card Component
 * 
 * Reusable enterprise-grade card for Honeywell Hydraulics.
 * Default: White background, subtle border, xl radius.
 * Interactive: Adds hover elevation and red top border.
 */
export function Card({ 
  variant = 'default', 
  className = '', 
  children, 
  ...props 
}: CardProps) {
  const baseStyles = 'bg-white rounded-xl border border-[#E2E8F0] overflow-hidden';
  
  const variants = {
    default: 'transition-shadow duration-300',
    interactive: 'transition-all duration-350 ease-premium hover:shadow-float hover:-translate-y-1.5 border-t-2 border-t-transparent hover:border-t-[#E31B23]',
    featured: 'border-l-4 border-l-[#0D1B5C] shadow-elevated',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 py-5 border-b border-[#E2E8F0] ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 py-5 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-6 py-4 border-t border-[#E2E8F0] bg-[#F8FAFC] ${className}`} {...props}>
      {children}
    </div>
  );
}
