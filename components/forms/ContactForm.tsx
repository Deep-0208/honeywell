'use client';

import React, { useState } from 'react';
import { ArrowRight, AlertCircle, Loader2, CheckCircle } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types — future-proof for CRM / email / WhatsApp integration
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
// Styles
// ─────────────────────────────────────────────────────────────────────────────
const fieldBase =
  'w-full bg-white border border-brand-borderGray rounded-sm px-4 py-3 text-sm font-body text-honeywell-navy placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-honeywell-red focus:border-honeywell-red transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

const labelBase = 'block text-sm font-semibold font-body text-honeywell-navy mb-1.5';

// ─────────────────────────────────────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────────────────────────────────────
function validate(d: ContactFormPayload): Errors {
  const e: Errors = {};
  if (!d.fullName.trim()) e.fullName = 'Full name is required.';
  if (!d.email.trim()) {
    e.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) {
    e.email = 'Please enter a valid email address.';
  }
  if (!d.phone.trim()) {
    e.phone = 'Phone number is required.';
  } else if (!/^[+\d\s\-()]{7,}$/.test(d.phone)) {
    e.phone = 'Please enter a valid phone number.';
  }
  if (!d.message.trim() || d.message.trim().length < 10) {
    e.message = 'Please enter a message (at least 10 characters).';
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
      /**
       * INTEGRATION POINT
       * ──────────────────────────────────────────────────────────────
       * Replace this block with your submission handler:
       *
       * Option A — Email (Resend / Nodemailer / SendGrid):
       *   await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
       *
       * Option B — CRM (HubSpot / Zoho / Salesforce):
       *   await submitToCRM({ ...form, source: 'contact-page' });
       *
       * Option C — WhatsApp notification (Twilio / Meta Cloud API):
       *   await sendWhatsAppAlert({ phone: form.phone, message: form.message });
       *
       * The `form` payload matches a generic CRM contact schema.
       * ──────────────────────────────────────────────────────────────
       */
      await new Promise((r) => setTimeout(r, 1400)); // remove in production
      setStatus('success');
      setForm(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-14 px-6 bg-white rounded-sm border border-slate-200 shadow-sm">
        <CheckCircle className="w-14 h-14 text-green-500 mb-5" aria-hidden="true" />
        <h2 className="text-2xl font-display font-bold text-honeywell-navy mb-3">Message Sent</h2>
        <p className="text-brand-steelGray font-body max-w-sm mb-6">
          Thank you. We have received your inquiry and will respond as soon as possible.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-brand-steelGray font-body underline underline-offset-4 hover:text-honeywell-navy"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact inquiry form"
      className="space-y-5"
    >
      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-sm text-sm font-body">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>Something went wrong. Please try again or call us directly at +91 9924343873.</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className={labelBase}>
            Full Name <span className="text-honeywell-red" aria-hidden="true">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Rajesh Kumar"
            value={form.fullName}
            onChange={(e) => update('fullName', e.target.value)}
            className={fieldBase}
            aria-required="true"
            aria-invalid={!!errors.fullName}
            disabled={status === 'submitting'}
          />
          {errors.fullName && (
            <p role="alert" className="mt-1 text-xs text-honeywell-red font-body flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />{errors.fullName}
            </p>
          )}
        </div>

        {/* Company */}
        <div>
          <label htmlFor="contactCompany" className={labelBase}>Company Name</label>
          <input
            id="contactCompany"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="ABC Manufacturing Pvt Ltd"
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
            <p role="alert" className="mt-1 text-xs text-honeywell-red font-body flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />{errors.phone}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contactEmail" className={labelBase}>
            Email Address <span className="text-honeywell-red" aria-hidden="true">*</span>
          </label>
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
            <p role="alert" className="mt-1 text-xs text-honeywell-red font-body flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />{errors.email}
            </p>
          )}
        </div>
      </div>



      {/* Message */}
      <div>
        <label htmlFor="contactMessage" className={labelBase}>
          Message <span className="text-honeywell-red" aria-hidden="true">*</span>
        </label>
        <textarea
          id="contactMessage"
          name="message"
          rows={5}
          placeholder="Describe your inquiry, requirement, or question…"
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${fieldBase} resize-y min-h-[120px]`}
          aria-required="true"
          aria-invalid={!!errors.message}
          disabled={status === 'submitting'}
        />
        {errors.message && (
          <p role="alert" className="mt-1 text-xs text-honeywell-red font-body flex items-center gap-1">
            <AlertCircle className="w-3 h-3" />{errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-3 bg-honeywell-red hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold font-body text-base px-6 py-4 rounded-full transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red focus-visible:ring-offset-2"
        aria-busy={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <><Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" /> Sending Message…</>
        ) : (
          <>Send Message <ArrowRight className="w-5 h-5" aria-hidden="true" /></>
        )}
      </button>
    </form>
  );
}
