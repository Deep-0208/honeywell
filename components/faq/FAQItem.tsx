'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';


export interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}

/**
 * FAQItem Component
 * 
 * Individual FAQ accordion item. Accessible via keyboard.
 * Smooth height animation with Motion.
 */
export function FAQItem({ question, answer, isOpen, onToggle, id }: FAQItemProps) {
  const contentId = `${id}-content`;
  const headerId = `${id}-header`;

  return (
    <div className="bg-white">
      <h3>
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full items-center justify-between py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0D1B5C] focus-visible:rounded-sm group"
        >
          <span className={`text-lg font-bold font-display pr-6 transition-colors duration-200 ${isOpen ? 'text-[#E31B23]' : 'text-[#0D1B5C] group-hover:text-[#E31B23]'}`}>
            {question}
          </span>
          <span className={`ml-6 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${isOpen ? 'border-[#E31B23] bg-[#E31B23]/5' : 'border-[#E2E8F0] bg-[#F8FAFC] group-hover:border-[#E31B23]'}`}>
            <span
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
              <ChevronDown
                className={`h-4 w-4 transition-colors duration-200 ${isOpen ? 'text-[#E31B23]' : 'text-[#64748B] group-hover:text-[#E31B23]'}`}
                aria-hidden="true"
              />
            </span>
          </span>
        </button>
      </h3>
      
      <>
        {isOpen && (
          <div
            id={contentId}
            role="region"
            aria-labelledby={headerId}
            className="overflow-hidden transition-all duration-300"
          >
            <div className="text-base text-[#64748B] font-body pr-12 whitespace-pre-wrap pb-6 leading-relaxed">
              {answer}
            </div>
          </div>
        )}
      </>
    </div>
  );
}
