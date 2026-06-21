'use client';

import React, { useState, useRef } from 'react';
import { ArrowRight, Upload, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types — future-proof payload for CRM / email / WhatsApp integration
// ─────────────────────────────────────────────────────────────────────────────
export interface QuoteFormPayload {
  // Contact Information
  fullName: string;
  company: string;
  email: string;
  phone: string;
  city: string;

  // Project Information
  productInterest: string;
  industry: string;
  application: string;
  requirementDescription: string;

  // Optional Technical Details
  pressure?: string;
  boreSize?: string;
  strokeLength?: string;
  flowRate?: string;
  quantity?: string;

  // File Upload (placeholder — replace with S3 / Uploadthing in production)
  attachmentName?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_STATE: QuoteFormPayload = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  city: '',
  productInterest: '',
  industry: '',
  application: '',
  requirementDescription: '',
  pressure: '',
  boreSize: '',
  strokeLength: '',
  flowRate: '',
  quantity: '',
  attachmentName: '',
};

// ─────────────────────────────────────────────────────────────────────────────
// Shared field styles
// ─────────────────────────────────────────────────────────────────────────────
const fieldBase =
  'w-full bg-white border border-brand-borderGray rounded-sm px-4 py-3 text-sm font-body text-honeywell-navy placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-honeywell-red focus:border-honeywell-red transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

const labelBase = 'block text-sm font-semibold font-body text-honeywell-navy mb-1.5';
const errorBase = 'mt-1 text-xs text-honeywell-red font-body flex items-center gap-1';

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className={errorBase} role="alert" aria-live="polite">
      <AlertCircle className="w-3 h-3 shrink-0" />
      {message}
    </p>
  );
}

interface LabelledFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function LabelledField({ id, label, required, error, children }: LabelledFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelBase}>
        {label}
        {required && <span className="text-honeywell-red ml-0.5" aria-hidden="true">*</span>}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────────────────────────────────────
type Errors = Partial<Record<keyof QuoteFormPayload, string>>;

function validate(data: QuoteFormPayload): Errors {
  const errors: Errors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.company.trim()) errors.company = 'Company name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[+\d\s\-()]{7,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.productInterest) errors.productInterest = 'Please select a product category.';
  if (!data.requirementDescription.trim()) {
    errors.requirementDescription = 'Please describe your requirement.';
  } else if (data.requirementDescription.trim().length < 20) {
    errors.requirementDescription = 'Please provide at least 20 characters.';
  }
  return errors;
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormPayload>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [showTechnical, setShowTechnical] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const firstErrorRef = useRef<HTMLElement | null>(null);

  const update = (field: keyof QuoteFormPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear inline error on change
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      update('attachmentName', file.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first field with error for accessibility
      const firstErrorKey = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) el.focus();
      firstErrorRef.current = el;
      return;
    }

    setStatus('submitting');
    setErrors({});

    try {
      /**
       * INTEGRATION POINT
       * ─────────────────
       * Replace this block with your actual submission handler:
       *
       * Option A — Email (e.g., Resend / Nodemailer):
       *   await fetch('/api/quote', { method: 'POST', body: JSON.stringify(formData) });
       *
       * Option B — CRM (e.g., HubSpot, Zoho, Salesforce):
       *   await submitToCRM(formData);
       *
       * Option C — WhatsApp (e.g., Twilio / Meta Cloud API):
       *   await sendWhatsAppNotification(formData);
       *
       * The `formData` object is intentionally structured to match a generic
       * CRM contact schema and can be mapped to any provider's field names.
       */

      // Simulate async submission (remove in production)
      await new Promise((res) => setTimeout(res, 1500));

      setStatus('success');
      setFormData(INITIAL_STATE);
      if (fileRef.current) fileRef.current.value = '';
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white rounded-sm border border-slate-200 shadow-sm">
        <CheckCircle className="w-16 h-16 text-green-500 mb-6" aria-hidden="true" />
        <h2 className="text-2xl font-display font-bold text-honeywell-navy mb-4">
          Quote Request Submitted
        </h2>
        <p className="text-brand-steelGray font-body max-w-md mb-8">
          Thank you. Our engineering team will review your requirements and respond as soon as possible. For urgent requirements, call us directly.
        </p>
        <a
          href="tel:+919924343873"
          className="inline-flex items-center gap-2 text-honeywell-red font-semibold font-body hover:underline underline-offset-4"
        >
          📞 +91 9924343873
        </a>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm text-brand-steelGray font-body underline underline-offset-4 hover:text-honeywell-navy"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Hydraulic Quote Request Form"
      className="space-y-8"
    >
      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-sm text-sm font-body"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>There was an error submitting your request. Please try again or contact us directly.</span>
        </div>
      )}

      {/* ── Section 1: Contact Information ────────────────────────────────── */}
      <fieldset className="space-y-5">
        <legend className="text-base font-display font-bold text-honeywell-navy uppercase tracking-wide pb-3 border-b border-slate-200 w-full mb-2">
          1. Contact Information
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <LabelledField id="fullName" label="Full Name" required error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="Rajesh Kumar"
              value={formData.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              className={fieldBase}
              aria-required="true"
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
              disabled={status === 'submitting'}
            />
          </LabelledField>

          <LabelledField id="company" label="Company Name" required error={errors.company}>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="ABC Manufacturing Pvt Ltd"
              value={formData.company}
              onChange={(e) => update('company', e.target.value)}
              className={fieldBase}
              aria-required="true"
              aria-invalid={!!errors.company}
              disabled={status === 'submitting'}
            />
          </LabelledField>

          <LabelledField id="email" label="Email Address" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="rajesh@abcmfg.com"
              value={formData.email}
              onChange={(e) => update('email', e.target.value)}
              className={fieldBase}
              aria-required="true"
              aria-invalid={!!errors.email}
              disabled={status === 'submitting'}
            />
          </LabelledField>

          <LabelledField id="phone" label="Phone / WhatsApp" required error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 99243 43873"
              value={formData.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={fieldBase}
              aria-required="true"
              aria-invalid={!!errors.phone}
              disabled={status === 'submitting'}
            />
          </LabelledField>

          <LabelledField id="city" label="City / Location" error={errors.city}>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="Ahmedabad, Gujarat"
              value={formData.city}
              onChange={(e) => update('city', e.target.value)}
              className={fieldBase}
              disabled={status === 'submitting'}
            />
          </LabelledField>
        </div>
      </fieldset>

      {/* ── Section 2: Project Information ───────────────────────────────── */}
      <fieldset className="space-y-5">
        <legend className="text-base font-display font-bold text-honeywell-navy uppercase tracking-wide pb-3 border-b border-slate-200 w-full mb-2">
          2. Project Information
        </legend>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <LabelledField id="productInterest" label="Product Interest" required error={errors.productInterest}>
            <select
              id="productInterest"
              name="productInterest"
              value={formData.productInterest}
              onChange={(e) => update('productInterest', e.target.value)}
              className={fieldBase}
              aria-required="true"
              aria-invalid={!!errors.productInterest}
              disabled={status === 'submitting'}
            >
              <option value="" disabled>Select product category…</option>
              <option value="hydraulic-cylinders">Hydraulic Cylinders</option>
              <option value="hydraulic-power-packs">Hydraulic Power Packs</option>
              <option value="hydraulic-accessories">Hydraulic Accessories</option>
              <option value="custom-solution">Custom Solution</option>
            </select>
          </LabelledField>

          <LabelledField id="industry" label="Industry" error={errors.industry}>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={(e) => update('industry', e.target.value)}
              className={fieldBase}
              disabled={status === 'submitting'}
            >
              <option value="" disabled>Select your industry…</option>
              <option value="automotive">Automotive OEM</option>
              <option value="injection-moulding">Injection Moulding</option>
              <option value="steel-metallurgy">Steel &amp; Metallurgy</option>
              <option value="press-machine">Press Machine Manufacturing</option>
              <option value="goods-lifts">Goods Lifts &amp; Elevators</option>
              <option value="car-parking">Car Parking Systems</option>
              <option value="other">Other</option>
            </select>
          </LabelledField>

          <LabelledField id="application" label="Application" error={errors.application} >
            <input
              id="application"
              name="application"
              type="text"
              placeholder="e.g. Deep draw press, Robotic welding jig…"
              value={formData.application}
              onChange={(e) => update('application', e.target.value)}
              className={fieldBase}
              disabled={status === 'submitting'}
            />
          </LabelledField>
        </div>

        <LabelledField id="requirementDescription" label="Requirement Description" required error={errors.requirementDescription}>
          <textarea
            id="requirementDescription"
            name="requirementDescription"
            rows={5}
            placeholder="Describe your project requirements in detail — existing machine setup, operating conditions, problem you are solving, or any other relevant information…"
            value={formData.requirementDescription}
            onChange={(e) => update('requirementDescription', e.target.value)}
            className={`${fieldBase} resize-y min-h-[120px]`}
            aria-required="true"
            aria-invalid={!!errors.requirementDescription}
            disabled={status === 'submitting'}
          />
        </LabelledField>
      </fieldset>

      {/* ── Section 3: Optional Technical Details ────────────────────────── */}
      <fieldset className="space-y-5">
        <button
          type="button"
          aria-expanded={showTechnical}
          aria-controls="technical-details"
          onClick={() => setShowTechnical((v) => !v)}
          className="flex items-center gap-2 text-base font-display font-bold text-honeywell-navy uppercase tracking-wide pb-3 border-b border-slate-200 w-full text-left hover:text-honeywell-red transition-colors"
        >
          <span>3. Technical Details</span>
          <span className="ml-auto text-xs text-brand-steelGray font-body normal-case tracking-normal">
            {showTechnical ? 'Hide optional fields ▲' : 'Add technical specs (optional) ▼'}
          </span>
        </button>

        {showTechnical && (
          <div id="technical-details" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <LabelledField id="pressure" label="Operating Pressure (Bar)">
              <input id="pressure" name="pressure" type="text" placeholder="e.g. 210 Bar"
                value={formData.pressure} onChange={(e) => update('pressure', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>

            <LabelledField id="boreSize" label="Bore Size (mm)">
              <input id="boreSize" name="boreSize" type="text" placeholder="e.g. 100 mm"
                value={formData.boreSize} onChange={(e) => update('boreSize', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>

            <LabelledField id="strokeLength" label="Stroke Length (mm)">
              <input id="strokeLength" name="strokeLength" type="text" placeholder="e.g. 500 mm"
                value={formData.strokeLength} onChange={(e) => update('strokeLength', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>

            <LabelledField id="flowRate" label="Flow Rate (LPM)">
              <input id="flowRate" name="flowRate" type="text" placeholder="e.g. 25 LPM"
                value={formData.flowRate} onChange={(e) => update('flowRate', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>

            <LabelledField id="quantity" label="Quantity Required">
              <input id="quantity" name="quantity" type="text" placeholder="e.g. 10 units"
                value={formData.quantity} onChange={(e) => update('quantity', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>
          </div>
        )}
      </fieldset>

      {/* ── Section 4: File Upload ────────────────────────────────────────── */}
      <div>
        <p className={labelBase}>4. Attach Technical Drawing (Optional)</p>
        <label
          htmlFor="fileUpload"
          className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-brand-borderGray rounded-sm py-8 px-4 cursor-pointer hover:border-honeywell-red hover:bg-red-50/30 transition-colors group"
        >
          <Upload className="w-8 h-8 text-[#94A3B8] group-hover:text-honeywell-red transition-colors" aria-hidden="true" />
          <span className="text-sm font-body text-brand-steelGray text-center">
            {formData.attachmentName
              ? <span className="text-honeywell-navy font-semibold">📎 {formData.attachmentName}</span>
              : <>Drag & drop or <span className="text-honeywell-red font-semibold underline">browse file</span></>
            }
          </span>
          <span className="text-xs text-[#94A3B8] font-body">PDF, JPG, PNG, STEP, DXF — max 10 MB</span>
          <input
            id="fileUpload"
            ref={fileRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png,.step,.stp,.dxf,.igs,.iges"
            onChange={handleFile}
            className="sr-only"
            disabled={status === 'submitting'}
          />
        </label>
        <p className="mt-2 text-xs text-[#94A3B8] font-body">
          File uploads are stored securely. CAD files help our engineers understand your exact requirements faster.
        </p>
      </div>

      {/* ── Submit ────────────────────────────────────────────────────────── */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-3 bg-honeywell-red hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold font-body text-base px-6 py-4 rounded-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red focus-visible:ring-offset-2"
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Submitting Request…
            </>
          ) : (
            <>
              Submit Quote Request
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-[#94A3B8] font-body text-center">
          By submitting, you agree to be contacted by our engineering team regarding your requirements.
        </p>
      </div>
    </form>
  );
}
