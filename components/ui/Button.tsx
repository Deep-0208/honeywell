import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isFullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  asExternal?: boolean;
}

/**
 * Button Component
 * 
 * Reusable enterprise-grade button for Honeywell Hydraulics.
 * Supports multiple variants, sizes, icons, and loading states.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      isLoading = false,
      isFullWidth = false,
      leftIcon,
      rightIcon,
      href,
      asExternal,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-body font-medium transition-all duration-200 ease-premium rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.97]';
    
    const variants = {
      primary: 'bg-honeywell-red text-white hover:bg-[#C41220] focus-visible:ring-honeywell-red shadow-[0_2px_8px_-2px_rgba(227,27,35,0.3)] hover:shadow-[0_6px_20px_-4px_rgba(227,27,35,0.4)]',
      secondary: 'bg-honeywell-navy text-white hover:bg-[#0a154a] focus-visible:ring-honeywell-navy shadow-subtle hover:shadow-elevated',
      outline: 'bg-transparent border-2 border-honeywell-navy text-honeywell-navy hover:bg-honeywell-navy hover:text-white focus-visible:ring-honeywell-navy',
      ghost: 'bg-transparent text-honeywell-navy hover:bg-brand-lightSurface focus-visible:ring-honeywell-navy',
      link: 'bg-transparent text-honeywell-red hover:underline underline-offset-4 focus-visible:ring-honeywell-red px-0 py-0',
    };

    const sizes = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-5 py-2.5',
      lg: 'text-base px-6 py-3',
    };

    const classes = `
      ${baseStyles}
      ${variants[variant]}
      ${variant !== 'link' ? sizes[size] : ''}
      ${isFullWidth ? 'w-full' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    const innerContent = (
      <>
        {isLoading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2 shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="ml-2 shrink-0">{rightIcon}</span>}
      </>
    );

    if (href) {
      if (asExternal) {
        return (
          <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
            {innerContent}
          </a>
        );
      }
      return (
        <Link href={href} className={classes}>
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

Button.displayName = 'Button';
