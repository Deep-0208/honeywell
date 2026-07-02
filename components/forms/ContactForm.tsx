'use client';

import React, { useState } from 'react';
import { ArrowRight, AlertCircle, Loader2, CheckCircle } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
export interface ContactFormPayload {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL: ContactFormPayload = {
  fullName: '',
  company: '',
  phone: '',
  email: '',
  message: '',
};

type Errors = Partial<Record<keyof ContactFormPayload, string>>;

// ─────────────────────────────────────────────────────────────────────────────
// Styles — using universal rounded-sm (2px) corner shape
// ─────────────────────────────────────────────────────────────────────────────
const fieldBase =
  'w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm font-body text-honeywell-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-honeywell-red/40 focus:border-honeywell-red focus:bg-white transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

const labelBase = 'block text-sm font-semibold font-body text-honeywell-navy mb-1.5';

// ─────────────────────────────────────────────────────────────────────────────
// Validation — friendly messages
// ─────────────────────────────────────────────────────────────────────────────
function validate(d: ContactFormPayload): Errors {
  const e: Errors = {};
  if (!d.fullName.trim()) e.fullName = 'Please enter your name.';
  if (!d.email.trim()) {
    e.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    e.email = 'That email doesn\'t look right — please double-check it.';
  }
  if (!d.phone.trim()) {
    e.phone = 'Please enter your phone number.';
  } else if (!/^[+\d\s\-()]{7,}$/.test(d.phone)) {
    e.phone = 'Please enter a valid phone number.';
  }
  if (!d.message.trim() || d.message.trim().length < 10) {
    e.message = 'Please say a little more — at least a sentence or two.';
  }
  return e;
}

// ─────────────────────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────────────────────
export function ContactForm() {
  const [form, setForm] = useState<ContactFormPayload>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const update = (field: keyof ContactFormPayload, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstKey = Object.keys(validationErrors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }
    setStatus('submitting');
    setErrors({});
    try {
      await new Promise((r) => setTimeout(r, 1400));
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-14 px-6 bg-white rounded-sm border border-slate-200">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
          <CheckCircle className="w-10 h-10 text-green-500" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-display font-bold text-honeywell-navy mb-3">Message Sent! 👍</h2>
        <p className="text-brand-steelGray font-body max-w-sm mb-6 leading-relaxed text-justify">
          Thank you for reaching out. We will get back to you as soon as possible — usually within the same business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-slate-400 font-body hover:text-honeywell-navy transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact inquiry form"
      className="space-y-5"
    >
      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm font-body">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>Something went wrong. Please try again or call us directly at <strong>+91 9924343873</strong>.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelBase}>
            Your Name <span className="text-honeywell-red" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="e.g. Rajesh Kumar"
            value={form.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            className={fieldBase}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            disabled={status === 'submitting'}
          />
          {errors.fullName && (
            <p role="alert" className="mt-1.5 text-xs text-honeywell-red font-body flex items-center gap-1 text-justify">
              <AlertCircle className="w-3.5 h-3.5" />{errors.fullName}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="contactCompany" className={labelBase}>
            Company Name <span className="text-xs text-slate-400 font-normal">(optional)</span>
          </label>
          <input
            id="contactCompany"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="e.g. ABC Manufacturing"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            className={fieldBase}
            disabled={status === 'submitting'}
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contactPhone" className={labelBase}>
            Phone / WhatsApp <span className="text-honeywell-red" aria-hidden="true">*</span>
          </label>
          <p className="text-xs text-slate-400 font-body mb-1.5 text-justify">We&apos;ll reply on this number.</p>
          <input
            id="contactPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 99243 43873"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={fieldBase}
            aria-required="true"
            aria-invalid={!!errors.phone}
            disabled={status === 'submitting'}
          />
          {errors.phone && (
            <p role="alert" className="mt-1.5 text-xs text-honeywell-red font-body flex items-center gap-1 text-justify">
              <AlertCircle className="w-3.5 h-3.5" />{errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contactEmail" className={labelBase}>
            Email Address <span className="text-honeywell-red" aria-hidden="true">*</span>
          </label>
          <p className="text-xs text-slate-400 font-body mb-1.5 text-justify">We&apos;ll send your quote here.</p>
          <input
            id="contactEmail"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={fieldBase}
            aria-required="true"
            aria-invalid={!!errors.email}
            disabled={status === 'submitting'}
          />
          {errors.email && (
            <p role="alert" className="mt-1.5 text-xs text-honeywell-red font-body flex items-center gap-1 text-justify">
              <AlertCircle className="w-3.5 h-3.5" />{errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contactMessage" className={labelBase}>
          Your Message <span className="text-honeywell-red" aria-hidden="true">*</span>
        </label>
        <p className="text-xs text-slate-400 font-body mb-1.5 text-justify">
          Tell us what you&apos;re looking for — any detail helps, even a rough idea.
        </p>
        <textarea
          id="contactMessage"
          name="message"
          rows={5}
          placeholder="e.g. 'I need a hydraulic cylinder for my press machine. It's currently broken and I need a replacement urgently…'"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${fieldBase} resize-y min-h-[130px]`}
          aria-required="true"
          aria-invalid={!!errors.message}
          disabled={status === 'submitting'}
        />
        {errors.message && (
          <p role="alert" className="mt-1.5 text-xs text-honeywell-red font-body flex items-center gap-1 text-justify">
            <AlertCircle className="w-3.5 h-3.5" />{errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-3 bg-honeywell-red hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold font-body text-base px-6 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-honeywell-red/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red focus-visible:ring-offset-2"
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> Sending Your Message…</>
        ) : (
          <>Send Message <ArrowRight className="w-5 h-5" aria-hidden="true" /></>
        )}
      </button>

      <p className="text-xs text-slate-400 font-body text-center">
        We respect your privacy. Your details are never shared.
      </p>
    </form>
  );
}
