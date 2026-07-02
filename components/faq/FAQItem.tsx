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
    <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3>
        <button
          type="button"
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={onToggle}
          className="flex w-full items-center justify-between px-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm group"
        >
          <span className={`text-lg font-bold font-display pr-6 transition-colors duration-200 ${isOpen ? 'text-honeywell-red' : 'text-honeywell-navy group-hover:text-honeywell-red'}`}>
            {question}
          </span>
          <span className={`ml-6 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${isOpen ? 'border-honeywell-red bg-honeywell-red/5' : 'border-slate-200 bg-brand-surfaceGray group-hover:border-honeywell-red'}`}>
            <span
              className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
            >
              <ChevronDown
                className={`h-4 w-4 transition-colors duration-200 ${isOpen ? 'text-honeywell-red' : 'text-brand-steelGray group-hover:text-honeywell-red'}`}
                aria-hidden="true"
              />
            </span>
          </span>
        </button>
      </h3>
      
        <div
          id={contentId}
          role="region"
          aria-labelledby={headerId}
          className={`grid transition-all duration-300 ease-premium ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="text-base text-brand-steelGray font-body px-6 pr-12 whitespace-pre-wrap pb-6 leading-relaxed ">
              {answer}
            </div>
          </div>
        </div>
    </div>
  );
}
