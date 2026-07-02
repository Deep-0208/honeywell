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
    <section
      className={`bg-honeywell-navy py-12 md:py-16 lg:py-20 relative overflow-hidden ${className}`}
      aria-labelledby="cta-heading"
    >
      {/* Background Accents — animated diagonal */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-honeywell-red opacity-5 -skew-x-12 translate-x-1/4" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 w-1/3 h-full bg-honeywell-red opacity-[0.03] skew-x-12 -translate-x-1/4" 
        aria-hidden="true" 
      />
      {/* Subtle gradient border accent at top */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-honeywell-red/40 to-transparent" 
        aria-hidden="true" 
      />
      
      <Container className="relative z-10 text-center">
        <Heading variant="section" id="cta-heading" className="text-white mb-4">
          {title}
        </Heading>
        
        {description && (
          <p className="text-brand-borderGray font-body max-w-2xl mx-auto mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed text-justify">
            {description}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
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
              className="bg-transparent border-white text-white hover:bg-white hover:text-honeywell-navy focus-visible:ring-white"
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </Container>
    </section>
  );
}
