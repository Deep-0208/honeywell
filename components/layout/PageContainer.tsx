import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * PageContainer Component
 * 
 * Standardizes page widths across the application.
 * Default: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 */
export default function PageContainer({ 
  children, 
  className = '',
  as: Component = 'div' 
}: PageContainerProps) {
  return (
    <Component className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
}
