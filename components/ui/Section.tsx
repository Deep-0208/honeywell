import React from 'react';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  bg?: 'white' | 'gray' | 'navy';
}

/**
 * Section Component
 * 
 * Provides consistent vertical spacing for page sections.
 * Defaults: py-16 md:py-24
 */
export function Section({ children, bg = 'white', className = '', ...props }: SectionProps) {
  const bgStyles = {
    white: 'bg-white',
    gray: 'bg-brand-surfaceGray', // Slate 50
    navy: 'bg-gradient-to-r from-honeywell-navy to-[#0f172a] text-white shadow-inner',
  };

  const classes = `
    py-12 md:py-16 lg:py-24
    ${bgStyles[bg]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}
