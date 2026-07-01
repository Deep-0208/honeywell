'use client';

import React from 'react';
import { FileText } from 'lucide-react';

interface WhatsAppFloatingCTAProps {
  href: string;
}

export function WhatsAppFloatingCTA({}: WhatsAppFloatingCTAProps) {

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start gap-3">
      {/* Request Quote Button */}
      <a
        href="/request-quote"
        className="
          flex items-center gap-2 px-6 py-4 rounded-full
          bg-honeywell-red text-white font-bold text-[15px] tracking-wide
          shadow-[0_4px_24px_-4px_rgba(227,27,35,0.6)]
          hover:shadow-[0_6px_32px_-4px_rgba(227,27,35,0.8)]
          hover:-translate-y-1 transition-all duration-300
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red focus-visible:ring-offset-2
          animate-pulse-ring-red
        "
        aria-label="Request a quote"
      >
        <FileText className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
        Request Quote
      </a>
    </div>
  );
}
