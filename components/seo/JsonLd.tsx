import React from 'react';

type SchemaValue = string | number | boolean | null | undefined | SchemaObject | SchemaValue[];
type SchemaObject = { [key: string]: SchemaValue };

interface JsonLdProps {
  data: SchemaObject | SchemaObject[];
}

/**
 * JsonLd Component
 * 
 * Safely renders JSON-LD schema objects into the <head> of the document.
 * Server Component - no client-side execution.
 */
export default function JsonLd({ data }: JsonLdProps) {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return null;
  }

  // Ensure @context is present if it's a single object without it
  const schema = Array.isArray(data) 
    ? data 
    : {
        '@context': 'https://schema.org',
        ...data,
      };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
