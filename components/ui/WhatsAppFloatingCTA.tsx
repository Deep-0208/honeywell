'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatingCTAProps {
  href: string;
}

export function WhatsAppFloatingCTA({ href }: WhatsAppFloatingCTAProps) {

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
        fixed bottom-8 right-8 z-50
        w-16 h-16 rounded-full
        bg-[#25D366] text-white
        flex items-center justify-center
        shadow-[0_4px_24px_-4px_rgba(37,211,102,0.6)]
        hover:shadow-[0_6px_32px_-4px_rgba(37,211,102,0.7)]
        transition-shadow duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2
        animate-pulse-ring
      "
    >
      <MessageCircle className="w-7 h-7" fill="white" strokeWidth={0} aria-hidden="true" />
    </a>
  );
}
