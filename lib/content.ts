/**
 * MDX Content Parsing and File System Utilities
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXDocument, PageFrontmatter } from '@/types';

const CONTENT_ROOT = path.join(process.cwd(), 'content');

/**
 * Get the full filesystem path for a specific content type
 */
function getDirectoryPath(contentType: string) {
  return path.join(CONTENT_ROOT, contentType);
}

/**
 * Recursively find all MDX files in a directory
 */
function findMdxFiles(dir: string, fileList: string[] = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findMdxFiles(filePath, fileList);
    } else if (filePath.endsWith('.mdx') || filePath.endsWith('.md')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

/**
 * Read and parse all MDX files from a specific content directory
 */
export function getAllPages<T = PageFrontmatter>(contentType: string): MDXDocument<T>[] {
  const dirPath = getDirectoryPath(contentType);
  const files = findMdxFiles(dirPath);
  
  return files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Fallback slug to filename if not provided in frontmatter
    const slug = data.slug || path.basename(filePath).replace(/\.mdx?$/, '').replace(/\.md$/, '');
    
    return {
      frontmatter: { ...data, slug } as T,
      content,
      slug,
    };
  });
}

/**
 * Load a single MDX file by slug
 */
export function getPage<T = PageFrontmatter>(contentType: string, slug: string): MDXDocument<T> | null {
  const pages = getAllPages<T>(contentType);
  return pages.find((page) => page.slug === slug) || null;
}

/**
 * Get all slugs for static path generation
 */
export function getAllSlugs(contentType: string): string[] {
  const pages = getAllPages(contentType);
  return pages.map((page) => page.slug);
}

/**
 * Find related pages based on a specific field mapping (e.g., relatedProducts)
 */
export function getRelatedPages<T = PageFrontmatter>(
  contentType: string, 
  relatedSlugs?: string[]
): MDXDocument<T>[] {
  if (!relatedSlugs || relatedSlugs.length === 0) return [];
  
  const allPages = getAllPages<T>(contentType);
  return allPages.filter((page) => relatedSlugs.includes(page.slug));
}

/**
 * Get a subset of pages marked as featured or top priority.
 * Used for homepage featured content.
 */
export function getFeaturedPages<T = PageFrontmatter>(
  contentType: string, 
  limit: number = 4
): MDXDocument<T>[] {
  const allPages = getAllPages<T>(contentType);
  // Optional: Add logic here to filter by frontmatter.featured if available.
  // For now, we simply take the top N.
  return allPages.slice(0, limit);
}
