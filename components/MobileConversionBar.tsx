'use client';

import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';

/**
 * MobileConversionBar
 *
 * Sticky bottom bar for mobile devices (< 1024px).
 * Provides quick access to Call, WhatsApp, and Request Quote
 * which were removed from the Hero section to reduce CTA clutter.
 *
 * Requirements:
 * - Fixed bottom positioning
 * - Safe-area support for notched devices
 * - Large 48px touch targets
 * - Industrial styling (navy background)
 * - Hidden on desktop (lg:hidden)
 */
export function MobileConversionBar() {
  return (
    <div
      className="
        fixed bottom-0 left-0 right-0 z-50
        lg:hidden
        bg-honeywell-navy border-t border-[#1A2A6C]
        shadow-[0_-4px_12px_-2px_rgba(0,0,0,0.2)]
      "
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      role="navigation"
      aria-label="Quick contact actions"
    >
      <div className="grid grid-cols-3 divide-x divide-[#1A2A6C]">
        {/* Call Now */}
        <a
          href="tel:+91-9924343873"
          className="
            flex flex-col items-center justify-center gap-1
            py-3 min-h-[56px]
            text-white hover:bg-[#1A2A6C] active:bg-[#1A2A6C]
            transition-colors duration-150
          "
          aria-label="Call Honeywell Hydraulics"
        >
          <Phone className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
          <span className="text-[10px] font-bold font-body uppercase tracking-wider">
            Call Now
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919924343873?text=Hello%2C%20I%20need%20a%20quote%20for%20hydraulic%20equipment."
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex flex-col items-center justify-center gap-1
            py-3 min-h-[56px]
            text-white hover:bg-[#1A2A6C] active:bg-[#1A2A6C]
            transition-colors duration-150
          "
          aria-label="Message us on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 text-[#25D366]" strokeWidth={2} aria-hidden="true" />
          <span className="text-[10px] font-bold font-body uppercase tracking-wider">
            WhatsApp
          </span>
        </a>

        {/* Request Quote */}
        <a
          href="/request-quote"
          className="
            flex flex-col items-center justify-center gap-1
            py-3 min-h-[56px]
            text-white bg-honeywell-red hover:bg-red-700 active:bg-red-700
            transition-colors duration-150
          "
          aria-label="Request a quote"
        >
          <FileText className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
          <span className="text-[10px] font-bold font-body uppercase tracking-wider">
            Get Quote
          </span>
        </a>
      </div>
    </div>
  );
}
