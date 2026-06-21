import React from 'react';

export type HeadingVariant = 'hero' | 'section' | 'subsection' | 'card';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  variant?: HeadingVariant;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}

/**
 * Heading Component
 * 
 * Consistent typography using Barlow Condensed for all headings.
 */
export function Heading({ 
  variant = 'section', 
  as, 
  className = '', 
  children, 
  ...props 
}: HeadingProps) {
  const baseStyles = 'font-display font-bold text-honeywell-navy';
  
  const variants = {
    hero: 'text-4xl md:text-5xl lg:text-6xl leading-tight',
    section: 'text-3xl md:text-4xl lg:text-5xl leading-tight',
    subsection: 'text-2xl md:text-3xl leading-snug',
    card: 'text-xl md:text-2xl leading-snug',
  };

  const defaultTags = {
    hero: 'h1',
    section: 'h2',
    subsection: 'h3',
    card: 'h4',
  } as const;

  const Component = as || defaultTags[variant];

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
