import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin } from 'lucide-react';

export function CTASection({ data }: { data: any }) {
  return (
    <Section bg="navy" className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Heading as="h2" className="text-white mb-6 leading-tight">
            {data.title}
          </Heading>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            {data.description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <Button href="/request-quote" variant="primary" size="lg" className="w-full sm:w-auto">
              Request a Quote
            </Button>
            <Button href="/contact-us" variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-honeywell-navy">
              Speak with Engineers
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10 text-slate-300 text-sm">
            <div className="flex flex-col items-center gap-3">
              <Phone className="w-6 h-6 text-honeywell-red" />
              <span>{data.phone}</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Mail className="w-6 h-6 text-honeywell-red" />
              <span>{data.email}</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <MapPin className="w-6 h-6 text-honeywell-red" />
              <span>{data.address}</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
