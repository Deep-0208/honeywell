import React from 'react';

export interface IconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
}

/**
 * IconBox Component
 * 
 * Reusable wrapper for icons with standardized sizing and background colors.
 */
export function IconBox({ 
  icon, 
  size = 'md', 
  variant = 'primary', 
  className = '', 
  ...props 
}: IconBoxProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg shrink-0 transition-all duration-300';
  
  const variants = {
    primary: 'bg-honeywell-red/10 text-honeywell-red',
    secondary: 'bg-honeywell-navy/10 text-honeywell-navy',
    outline: 'bg-white border-2 border-slate-200 text-honeywell-navy shadow-subtle',
  };

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const classes = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={classes} {...props}>
      {icon}
    </div>
  );
}
