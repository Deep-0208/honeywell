import React from 'react';
import { Container } from './Container';
import { Heading } from './Heading';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export interface CTAProps {
  title: string;
  description?: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  className?: string;
}

/**
 * CTA Component
 * 
 * Reusable call-to-action banner.
 * Engineering-focused design with primary/secondary actions.
 */
export function CTA({
  title,
  description,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
  className = '',
}: CTAProps) {
  return (
    <div className={`bg-[#0D1B5C] py-16 md:py-20 relative overflow-hidden ${className}`}>
      {/* Background Accents — animated diagonal */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-[#E31B23] opacity-5 -skew-x-12 translate-x-1/4" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-1/3 h-full bg-[#E31B23] opacity-[0.03] skew-x-12 -translate-x-1/4" 
        aria-hidden="true" 
      />
      {/* Subtle gradient border accent at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E31B23]/40 to-transparent" 
        aria-hidden="true" 
      />
      
      <Container className="relative z-10 text-center">
        <Heading variant="section" className="text-white mb-4">
          {title}
        </Heading>
        
        {description && (
          <p className="text-[#CBD5E1] font-body max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            href={primaryCtaHref} 
            variant="primary" 
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            {primaryCtaText}
          </Button>
          
          {secondaryCtaText && secondaryCtaHref && (
            <Button 
              href={secondaryCtaHref} 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-[#0D1B5C] focus-visible:ring-white"
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}
