import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Calendar } from 'lucide-react';
import { blogPreviews } from '@/data/homepage';
import Link from 'next/link';

export function BlogPreviewSection() {
  return (
    <Section bg="gray" aria-labelledby="blog-heading">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-bold font-body uppercase tracking-[0.15em] text-honeywell-red mb-3">
              Knowledge Hub
            </p>
            <Heading variant="section" as="h2" id="blog-heading" className="mb-0">
              Latest Insights from Honeywell Hydraulics
            </Heading>
          </div>
          <div className="shrink-0">
            <Button href="/blog/" variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Articles
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPreviews.map((post) => (
            <article 
              key={post.href}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-elevated transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex items-center gap-2 text-xs text-brand-steelGray font-body mb-4">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
                </div>
                <h3 className="font-display font-bold text-honeywell-navy text-xl mb-3 line-clamp-2">
                  <Link href={post.href} className="hover:text-honeywell-red transition-colors focus-visible:outline-none focus-visible:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-brand-steelGray font-body text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-200/50">
                  <Link 
                    href={post.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-honeywell-red hover:text-honeywell-navy transition-colors group"
                  >
                    Read Article 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
