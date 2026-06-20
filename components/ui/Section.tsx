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
    gray: 'bg-[#F8FAFC]', // Slate 50
    navy: 'bg-[#0D1B5C] text-white',
  };

  const classes = `
    py-16 md:py-24
    ${bgStyles[bg]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <section className={classes} {...props}>
      {children}
    </section>
  );
}
