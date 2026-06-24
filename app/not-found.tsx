import Link from 'next/link';
import Image from 'next/image';
import PageContainer from '@/components/layout/PageContainer';
import { ArrowRight, Search, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Page Not Found | Honeywell Hydraulics',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <PageContainer className="py-24 md:py-32 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <Image
        src="/long-size-logohydralics-logo.png"
        alt="Honeywell Hydraulics Logo"
        width={280}
        height={68}
        className="mb-12 h-16 md:h-20 w-auto"
        priority
      />
      
      <h1 className="text-6xl md:text-8xl font-display font-bold text-honeywell-navy mb-4">
        404
      </h1>
      
      <h2 className="text-2xl md:text-3xl font-display font-semibold text-brand-darkSlate mb-6">
        Page Not Found
      </h2>
      
      <p className="text-brand-steelGray font-body max-w-lg mx-auto mb-10 text-lg">
        The industrial hydraulic component or resource you are looking for has been moved, removed, or never existed. Let&apos;s get you back on track.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-12">
        <Link 
          href="/"
          className="flex items-center justify-center gap-2 p-4 border border-brand-borderGray rounded-sm hover:border-honeywell-navy hover:shadow-card transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy"
        >
          <Search className="w-5 h-5 text-brand-steelGray group-hover:text-honeywell-navy" />
          <span className="font-medium text-honeywell-navy font-body">Return to Homepage</span>
        </Link>
        
        <Link 
          href="/products"
          className="flex items-center justify-center gap-2 p-4 border border-brand-borderGray rounded-sm hover:border-honeywell-navy hover:shadow-card transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy"
        >
          <ArrowRight className="w-5 h-5 text-brand-steelGray group-hover:text-honeywell-navy" />
          <span className="font-medium text-honeywell-navy font-body">View All Products</span>
        </Link>
        
        <Link 
          href="/request-quote"
          className="flex items-center justify-center gap-2 p-4 border border-brand-borderGray rounded-sm hover:border-honeywell-red hover:shadow-card transition-all group sm:col-span-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red"
        >
          <span className="font-medium text-honeywell-red font-body">Request a Custom Quote</span>
          <ArrowRight className="w-5 h-5 text-honeywell-red" />
        </Link>
      </div>

      <div className="pt-8 border-t border-brand-borderGray w-full max-w-2xl">
        <p className="text-brand-steelGray font-body text-sm flex items-center justify-center gap-2 flex-wrap">
          Need immediate assistance? 
          <a 
            href={`tel:${COMPANY_INFO.phone}`} 
            className="text-honeywell-navy font-medium hover:text-honeywell-red inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-navy focus-visible:rounded-sm"
          >
            <Phone className="w-3.5 h-3.5" />
            {COMPANY_INFO.phone}
          </a>
        </p>
      </div>
    </PageContainer>
  );
}
