'use client';

import React, { useState } from 'react';
import { FAQItem } from './FAQItem';
import JsonLd from '@/components/seo/JsonLd';

export interface FAQ {
  question: string;
  answer: string;
}

export interface FAQAccordionProps {
  faqs: FAQ[];
  className?: string;
  injectSchema?: boolean;
}

/**
 * FAQAccordion Component
 * 
 * Accessible accordion for FAQs. 
 * Can optionally inject FAQPage schema automatically.
 * Client component to handle state.
 */
export function FAQAccordion({ faqs, className = '', injectSchema = true }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // Generate FAQPage schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {injectSchema && <JsonLd data={schema} />}
      
      <div className={`w-full divide-y divide-slate-200 border-y border-slate-200 ${className}`}>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
            id={`faq-${index}`}
          />
        ))}
      </div>
    </>
  );
}
