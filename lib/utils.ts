/**
 * Utility functions for formatting and transformations
 */

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind classes conditionally
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a string into a URL-friendly slug
 */
export function slugify(text: string): string {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w-]+/g, '')    // Remove all non-word chars
    .replace(/--+/g, '-');      // Replace multiple - with single -
}

/**
 * Truncates text to a specific length and adds ellipsis
 */
export function truncate(text: string, length: number): string {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

/**
 * Formats a date string to a human-readable format (e.g. "June 5, 2026")
 */
export function formatDate(dateString: string): string {
  if (!dateString) return '';
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Generates breadcrumb segments from a path string
 */
export function generateBreadcrumbs(path: string) {
  const segments = path.split('/').filter(Boolean);
  return segments.map((segment, index) => {
    const url = '/' + segments.slice(0, index + 1).join('/');
    const label = segment
      .split('-')
      .map(capitalize)
      .join(' ');
    
    return { label, url };
  });
}

/**
 * Calculates estimated reading time for a block of text
 */
export function readingTime(text: string): string {
  if (!text) return '1 min read';
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
}
