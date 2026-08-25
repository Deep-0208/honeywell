import React from 'react';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Phone, Mail, MapPin, ArrowRight, Cpu } from 'lucide-react';

export function CTASection({ data }: { data: any }) {
  return (
    <Section bg="navy" className="py-20 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background Gradient Accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-honeywell-navy via-slate-900 to-slate-950" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-honeywell-red/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-honeywell-red/20 border border-honeywell-red/40 text-honeywell-red font-mono text-xs font-bold uppercase tracking-wider mb-6">
            <Cpu className="w-3.5 h-3.5" />
            DIRECT FACTORY PARTNER IN KATHWADA GIDC
          </div>

          <Heading variant="section" underline="center" as="h2" id="cta-heading" className="text-white mb-6 leading-tight">
            {data.title}
          </Heading>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto text-justify md:text-center font-body">
            {data.description}
          </p>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <Button
              href="/request-quote/#quote-form"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-bold tracking-wide shadow-lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              GET AN INSTANT QUOTE
            </Button>
            
            <a
              href={`tel:${data.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-slate-700 bg-slate-900/80 text-white font-bold text-base hover:bg-slate-800 hover:border-slate-600 hover:shadow-[0_0_20px_rgba(227,27,35,0.15)] transition-all duration-300 shadow-md"
            >
              <Phone className="w-5 h-5 text-honeywell-red" />
              CALL ENGINEERS: {data.phone}
            </a>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-slate-800/80 text-slate-300 text-sm font-body">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Phone className="w-5 h-5 text-honeywell-red shrink-0" />
              <div className="text-left">
                <span className="block text-xs text-slate-400 font-mono">PHONE & WHATSAPP</span>
                <span className="font-semibold text-white">{data.phone}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <Mail className="w-5 h-5 text-honeywell-red shrink-0" />
              <div className="text-left">
                <span className="block text-xs text-slate-400 font-mono">EMAIL INQUIRIES</span>
                <span className="font-semibold text-white">{data.email}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <MapPin className="w-5 h-5 text-honeywell-red shrink-0" />
              <div className="text-left">
                <span className="block text-xs text-slate-400 font-mono">PLANT LOCATION</span>
                <span className="font-semibold text-white">Kathwada GIDC, Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

