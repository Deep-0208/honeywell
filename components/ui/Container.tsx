import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

/**
 * Container Component
 * 
 * Standardizes page and section content widths across the application.
 * Defaults: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 */
export function Container({ 
  children, 
  className = '', 
  as: Component = 'div',
  ...props 
}: ContainerProps) {
  const classes = `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim().replace(/\s+/g, ' ');
  
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
