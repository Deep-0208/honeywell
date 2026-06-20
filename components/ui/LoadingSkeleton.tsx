import React from 'react';

/**
 * Loading Skeleton System
 * 
 * Accessible, animated skeleton loaders for progressive rendering.
 */

export function Skeleton({ className = '' }: { className?: string }) {
  return (
    <div 
      className={`animate-pulse bg-[#E2E8F0] rounded-sm ${className}`} 
      aria-hidden="true" 
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-[#E2E8F0] p-6 w-full">
      <Skeleton className="h-48 w-full mb-6 rounded-md" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-6" />
      <Skeleton className="h-10 w-32" />
    </div>
  );
}

export function PageSkeleton() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Skeleton className="h-12 w-1/2 mb-6" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-12" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="w-full border border-[#E2E8F0] rounded-sm overflow-hidden">
      <div className="bg-[#F8FAFC] p-4 border-b border-[#E2E8F0]">
        <Skeleton className="h-5 w-1/4" />
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex p-4 border-b border-[#E2E8F0] last:border-0">
          <Skeleton className="h-4 w-1/3 mr-4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
}
