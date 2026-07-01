'use client';

import React, { useState, useRef } from 'react';
import { ArrowRight, Upload, CheckCircle, AlertCircle, Loader2, ChevronDown, ChevronUp } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────────────────
export interface QuoteFormPayload {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  productInterest: string;
  industry: string;
  application: string;
  requirementDescription: string;
  pressure?: string;
  boreSize?: string;
  strokeLength?: string;
  flowRate?: string;
  quantity?: string;
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
// Shared field styles — using universal rounded-sm (2px) corner shape
// ─────────────────────────────────────────────────────────────────────────────
const fieldBase =
  'w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm font-body text-honeywell-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-honeywell-red/40 focus:border-honeywell-red focus:bg-white transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed';

const labelBase = 'block text-sm font-semibold font-body text-honeywell-navy mb-1.5';

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs text-honeywell-red font-body flex items-center gap-1" role="alert" aria-live="polite">
      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
      {message}
    </p>
  );
}

interface LabelledFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}

function LabelledField({ id, label, required, error, hint, children }: LabelledFieldProps) {
  return (
    <div>
      <label htmlFor={id} className={labelBase}>
        {label}
        {required && <span className="text-honeywell-red ml-0.5" aria-hidden="true">*</span>}
      </label>
      {hint && <p className="text-xs text-slate-400 font-body mb-1.5">{hint}</p>}
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
  if (!data.fullName.trim()) errors.fullName = 'Please enter your name.';
  if (!data.email.trim()) {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'That email doesn\'t look right — please check it.';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!/^[+\d\s\-()]{7,}$/.test(data.phone)) {
    errors.phone = 'Please enter a valid phone number.';
  }
  if (!data.productInterest) errors.productInterest = 'Please select what you\'re looking for.';
  if (!data.requirementDescription.trim()) {
    errors.requirementDescription = 'Please describe what you need — even a few words help.';
  } else if (data.requirementDescription.trim().length < 10) {
    errors.requirementDescription = 'Please add a bit more detail (at least 10 characters).';
  }
  return errors;
}

// ─────────────────────────────────────────────────────────────────────────────
// Product options — user-friendly labels
// ─────────────────────────────────────────────────────────────────────────────
const PRODUCT_OPTIONS = [
  { value: 'hydraulic-cylinders', label: 'Hydraulic Cylinders' },
  { value: 'hydraulic-power-packs', label: 'Hydraulic Power Packs' },
  { value: 'hydraulic-accessories', label: 'Hydraulic Accessories (valves, fittings, hoses)' },
  { value: 'custom-solution', label: 'Custom / Special Design' },
  { value: 'not-sure', label: 'I\'m Not Sure — Need Advice' },
];

const INDUSTRY_OPTIONS = [
  { value: 'injection-moulding', label: 'Injection Moulding' },
  { value: 'construction-earthmoving', label: 'Construction & Earthmoving' },
  { value: 'manufacturing-automation', label: 'Manufacturing & Automation' },
  { value: 'material-handling', label: 'Material Handling & Lifting' },
  { value: 'rolling-mill', label: 'Rolling Mill & Steel' },
  { value: 'wooden-industries', label: 'Woodworking / Furniture' },
  { value: 'agriculture', label: 'Agriculture & Farm Equipment' },
  { value: 'other', label: 'Other Industry' },
];

// ─────────────────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────────────────
export function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormPayload>(INITIAL_STATE);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<FormStatus>('idle');
  const [showTechnical, setShowTechnical] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const update = (field: keyof QuoteFormPayload, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) update('attachmentName', file.name);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorKey = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorKey)?.focus();
      return;
    }
    setStatus('submitting');
    setErrors({});
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus('success');
      setFormData(INITIAL_STATE);
      if (fileRef.current) fileRef.current.value = '';
    } catch {
      setStatus('error');
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-white rounded-sm border border-slate-200">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-display font-bold text-honeywell-navy mb-3">
          Request Sent! 🎉
        </h2>
        <p className="text-brand-steelGray font-body max-w-sm mb-2 leading-relaxed">
          Thank you! Our team will review your request and get back to you shortly.
        </p>
        <p className="text-sm text-slate-400 font-body mb-8">
          For urgent requirements, call us directly.
        </p>
        <a
          href="tel:+919924343873"
          className="inline-flex items-center gap-2 bg-honeywell-red text-white font-semibold font-body px-6 py-3 rounded-full hover:bg-red-700 transition-colors mb-4"
        >
          📞 +91 9924343873
        </a>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm text-slate-400 font-body hover:text-honeywell-navy transition-colors"
        >
          Submit another request
        </button>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────
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
          className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-sm text-sm font-body"
        >
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>Something went wrong. Please try again or call us directly at +91 9924343873.</span>
        </div>
      )}

      {/* ── Your Details ──────────────────────────────────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-7 rounded-full bg-honeywell-red text-white text-xs font-bold flex items-center justify-center font-body shrink-0">1</div>
          <h3 className="text-base font-display font-bold text-honeywell-navy">Your Details</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LabelledField id="fullName" label="Your Name" required error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Rajesh Kumar"
              value={formData.fullName}
              onChange={(e) => update('fullName', e.target.value)}
              className={fieldBase}
              aria-required="true"
              aria-invalid={!!errors.fullName}
              disabled={status === 'submitting'}
            />
          </LabelledField>

          <LabelledField id="company" label="Company / Business Name" error={errors.company}>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="e.g. ABC Manufacturing"
              value={formData.company}
              onChange={(e) => update('company', e.target.value)}
              className={fieldBase}
              disabled={status === 'submitting'}
            />
          </LabelledField>

          <LabelledField id="phone" label="Phone / WhatsApp" required error={errors.phone} hint="We'll call or WhatsApp you at this number.">
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

          <LabelledField id="email" label="Email Address" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) => update('email', e.target.value)}
              className={fieldBase}
              aria-required="true"
              aria-invalid={!!errors.email}
              disabled={status === 'submitting'}
            />
          </LabelledField>

          <LabelledField id="city" label="Your City" error={errors.city}>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              placeholder="e.g. Ahmedabad, Surat…"
              value={formData.city}
              onChange={(e) => update('city', e.target.value)}
              className={fieldBase}
              disabled={status === 'submitting'}
            />
          </LabelledField>
        </div>
      </div>

      {/* ── Your Requirement ─────────────────────────────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-7 h-7 rounded-full bg-honeywell-red text-white text-xs font-bold flex items-center justify-center font-body shrink-0">2</div>
          <h3 className="text-base font-display font-bold text-honeywell-navy">What Do You Need?</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LabelledField id="productInterest" label="Product You're Looking For" required error={errors.productInterest}>
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
              <option value="" disabled>Choose a product…</option>
              {PRODUCT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </LabelledField>

          <LabelledField id="industry" label="Your Industry" error={errors.industry}>
            <select
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={(e) => update('industry', e.target.value)}
              className={fieldBase}
              disabled={status === 'submitting'}
            >
              <option value="" disabled>Select your industry…</option>
              {INDUSTRY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </LabelledField>

          <div className="sm:col-span-2">
            <LabelledField
              id="application"
              label="What's it used for? (Optional)"
              error={errors.application}
              hint="e.g. 'press machine', 'tractor lift arm', 'conveyor system'"
            >
              <input
                id="application"
                name="application"
                type="text"
                placeholder="Describe the machine or use case…"
                value={formData.application}
                onChange={(e) => update('application', e.target.value)}
                className={fieldBase}
                disabled={status === 'submitting'}
              />
            </LabelledField>
          </div>

          <div className="sm:col-span-2">
            <LabelledField
              id="requirementDescription"
              label="Describe Your Requirement"
              required
              error={errors.requirementDescription}
              hint="Even a rough idea helps. You can also mention quantity, size, pressure, or any specific concern."
            >
              <textarea
                id="requirementDescription"
                name="requirementDescription"
                rows={5}
                placeholder="e.g. 'I need a hydraulic cylinder for my press machine. The stroke should be around 400mm and it should handle heavy loads. Currently using a 10-year-old cylinder that keeps leaking…'"
                value={formData.requirementDescription}
                onChange={(e) => update('requirementDescription', e.target.value)}
                className={`${fieldBase} resize-y min-h-[130px]`}
                aria-required="true"
                aria-invalid={!!errors.requirementDescription}
                disabled={status === 'submitting'}
              />
            </LabelledField>
          </div>
        </div>
      </div>

      {/* ── Optional Technical Details ────────────────────────────────────── */}
      <div>
        <button
          type="button"
          aria-expanded={showTechnical}
          aria-controls="technical-details-panel"
          onClick={() => setShowTechnical((v) => !v)}
          className="flex items-center justify-between w-full bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-sm px-5 py-3.5 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 text-xs font-bold flex items-center justify-center font-body shrink-0 group-hover:bg-honeywell-red/10 group-hover:text-honeywell-red transition-colors">3</div>
            <span className="text-sm font-display font-bold text-honeywell-navy">Technical Specifications</span>
            <span className="text-xs bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full font-body">Optional</span>
          </div>
          {showTechnical
            ? <ChevronUp className="w-4 h-4 text-slate-400" />
            : <ChevronDown className="w-4 h-4 text-slate-400" />
          }
        </button>
        <p className="text-xs text-slate-400 font-body mt-2 px-1">
          Know the specs? Add them here. If not, skip this — our engineers will ask.
        </p>

        {showTechnical && (
          <div id="technical-details-panel" className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-5 bg-slate-50 border border-slate-200 rounded-sm">
            <LabelledField id="pressure" label="Operating Pressure (Bar)" hint="e.g. 200 Bar">
              <input id="pressure" name="pressure" type="text" placeholder="e.g. 200 Bar"
                value={formData.pressure} onChange={(e) => update('pressure', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>

            <LabelledField id="boreSize" label="Bore / Cylinder Size (mm)" hint="e.g. 80 mm">
              <input id="boreSize" name="boreSize" type="text" placeholder="e.g. 80 mm"
                value={formData.boreSize} onChange={(e) => update('boreSize', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>

            <LabelledField id="strokeLength" label="Stroke Length (mm)" hint="e.g. 400 mm">
              <input id="strokeLength" name="strokeLength" type="text" placeholder="e.g. 400 mm"
                value={formData.strokeLength} onChange={(e) => update('strokeLength', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>

            <LabelledField id="flowRate" label="Flow Rate (LPM)" hint="e.g. 25 LPM">
              <input id="flowRate" name="flowRate" type="text" placeholder="e.g. 25 LPM"
                value={formData.flowRate} onChange={(e) => update('flowRate', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>

            <LabelledField id="quantity" label="How Many Units?" hint="e.g. 5 pieces">
              <input id="quantity" name="quantity" type="text" placeholder="e.g. 5 pieces"
                value={formData.quantity} onChange={(e) => update('quantity', e.target.value)}
                className={fieldBase} disabled={status === 'submitting'} />
            </LabelledField>
          </div>
        )}
      </div>

      {/* ── File Upload ──────────────────────────────────────────────────── */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-500 text-xs font-bold flex items-center justify-center font-body shrink-0">4</div>
          <h3 className="text-sm font-display font-bold text-honeywell-navy">
            Attach a Drawing or Photo <span className="text-xs font-body text-slate-400 font-normal ml-1">(Optional)</span>
          </h3>
        </div>
        <label
          htmlFor="fileUpload"
          className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-200 rounded-sm py-8 px-4 cursor-pointer hover:border-honeywell-red hover:bg-red-50/30 transition-all group bg-slate-50"
        >
          <div className="w-12 h-12 rounded-sm bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:border-honeywell-red/20 transition-colors">
            <Upload className="w-5 h-5 text-slate-400 group-hover:text-honeywell-red transition-colors" aria-hidden="true" />
          </div>
          <span className="text-sm font-body text-slate-500 text-center">
            {formData.attachmentName
              ? <span className="text-honeywell-navy font-semibold">📎 {formData.attachmentName}</span>
              : <>Drag & drop, or <span className="text-honeywell-red font-semibold">click to browse</span></>
            }
          </span>
          <span className="text-xs text-slate-400 font-body">PDF, Photo, STEP, DXF — max 10 MB</span>
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
        <p className="mt-2 text-xs text-slate-400 font-body text-center">
          A photo of your existing part or a rough sketch helps us understand faster.
        </p>
      </div>

      {/* ── Submit ─────────────────────────────────────────────────────────── */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full inline-flex items-center justify-center gap-3 bg-honeywell-red hover:bg-red-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold font-body text-base px-6 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-honeywell-red/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honeywell-red focus-visible:ring-offset-2"
          aria-busy={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
              Sending Your Request…
            </>
          ) : (
            <>
              Send My Quote Request
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </>
          )}
        </button>
        <p className="mt-3 text-xs text-slate-400 font-body text-center">
          By submitting, you agree to be contacted by our team. We never share your data.
        </p>
      </div>
    </form>
  );
}
