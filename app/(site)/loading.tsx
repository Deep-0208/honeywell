import { PageSkeleton } from '@/components/ui/LoadingSkeleton';

/**
 * Loading UI for the (site) route group.
 *
 * Shown automatically by Next.js App Router during page transitions
 * and data fetching. Uses the pre-built PageSkeleton component.
 */
export default function Loading() {
  return (
    <div className="flex-1 w-full" aria-busy="true" aria-label="Loading page content...">
      <PageSkeleton />
    </div>
  );
}
