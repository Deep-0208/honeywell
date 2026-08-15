import React from 'react';
import { ShieldCheck, Cpu, Gauge, Zap, CheckCircle2 } from 'lucide-react';

interface MetricItem {
  label: string;
  value: string;
  unit?: string;
  description?: string;
}

interface TechnicalBlueprintCardProps {
  title?: string;
  badge?: string;
  metrics?: MetricItem[];
  locationName?: string;
  className?: string;
}

export function TechnicalBlueprintCard({
  title = "HEAVY-DUTY HYDRAULIC SPECIFICATIONS",
  badge = "ENGINEERING EXCELLENCE",
  locationName,
  metrics = [
    { label: "Max Working Pressure", value: "350", unit: "BAR", description: "Heavy Duty Industrial Standard" },
    { label: "Bore Diameter Range", value: "40 – 500", unit: "MM", description: "Precision Honed Barrel" },
    { label: "Max Stroke Capability", value: "6,000", unit: "MM", description: "Hard Chrome Plated Rod" },
    { label: "Hydrostatic Test Rating", value: "100%", unit: "TESTED", description: "1.5x Working Pressure Verified" },
  ],
  className = "",
}: TechnicalBlueprintCardProps) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-gradient-to-br from-honeywell-navy via-slate-900 to-slate-950 p-6 md:p-8 text-white shadow-2xl border border-slate-800 overflow-hidden group transition-all duration-500 hover:border-honeywell-red/40 ${className}`}
    >
      {/* CAD Blueprint Background Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Red Ambient Glow Spotlight */}
      <div
        className="absolute -top-24 -right-24 w-72 h-72 bg-honeywell-red/15 rounded-full blur-3xl pointer-events-none group-hover:bg-honeywell-red/25 transition-all duration-700"
        aria-hidden="true"
      />

      {/* Card Header & Badge */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-honeywell-red/20 border border-honeywell-red/40 text-honeywell-red font-mono text-xs font-bold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            {badge}
          </span>
          {locationName && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 font-mono text-xs font-semibold">
              {locationName} GIDC
            </span>
          )}
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-1" />
          ISO 9001:2015 CERTIFIED
        </div>
      </div>

      {/* Blueprint Title */}
      <div className="relative z-10 mb-6">
        <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
          {title}
        </h3>
        <p className="text-slate-400 text-sm font-body mt-1">
          Precision-machined at Kathwada GIDC facility with EN 10204 3.1 material traceability.
        </p>
      </div>

      {/* CAD Vector Schematic Artwork */}
      <div className="relative z-10 my-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 shadow-inner">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
          <span>DWG NO: HW-HYD-2026-A1</span>
          <span>SCALE: NTS</span>
          <span>UNITS: MM</span>
        </div>
        <svg
          className="w-full h-32 md:h-36 text-honeywell-red/70 group-hover:text-honeywell-red transition-colors duration-500"
          viewBox="0 0 500 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Cylinder Outer Barrel */}
          <rect x="100" y="30" width="280" height="60" rx="4" stroke="currentColor" strokeWidth="2.5" fill="rgba(15, 23, 42, 0.6)" />
          {/* Cylinder Rod */}
          <rect x="380" y="45" width="100" height="30" rx="2" fill="url(#rodGradient)" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Clevis End Mount */}
          <circle cx="60" cy="60" r="24" stroke="currentColor" strokeWidth="2.5" fill="rgba(30, 41, 59, 0.8)" />
          <circle cx="60" cy="60" r="10" fill="#0F172A" stroke="currentColor" strokeWidth="2" />
          {/* Rod Eye Clevis */}
          <circle cx="460" cy="60" r="14" stroke="#94A3B8" strokeWidth="2" fill="rgba(30, 41, 59, 0.8)" />
          <circle cx="460" cy="60" r="6" fill="#0F172A" stroke="#94A3B8" strokeWidth="1.5" />
          {/* Ports */}
          <rect x="130" y="14" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="#1E293B" />
          <rect x="320" y="14" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="#1E293B" />
          {/* Dimension Lines */}
          <line x1="100" y1="102" x2="380" y2="102" stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" />
          <polygon points="100,102 108,99 108,105" fill="#64748B" />
          <polygon points="380,102 372,99 372,105" fill="#64748B" />
          <text x="240" y="115" fill="#94A3B8" fontSize="10" fontFamily="monospace" textAnchor="middle">BORE DIA (40-500 MM)</text>
          
          <defs>
            <linearGradient id="rodGradient" x1="380" y1="45" x2="480" y2="75" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E2E8F0" />
              <stop offset="0.5" stopColor="#94A3B8" />
              <stop offset="1" stopColor="#475569" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Key Metric Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-3 md:gap-4 mb-6">
        {metrics.map((m, idx) => (
          <div
            key={idx}
            className="p-3.5 md:p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors duration-300"
          >
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 flex items-center justify-between">
              <span>{m.label}</span>
              <Gauge className="w-3.5 h-3.5 text-honeywell-red opacity-80" />
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-white tracking-tight">
                {m.value}
              </span>
              {m.unit && (
                <span className="text-xs font-mono font-bold text-honeywell-red">
                  {m.unit}
                </span>
              )}
            </div>
            {m.description && (
              <p className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                {m.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer Trust Features */}
      <div className="relative z-10 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-300 font-body">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Zero-Leak Guarantee</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Zap className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Same-Day GIDC Delivery</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-honeywell-red shrink-0" />
          <span>Direct Manufacturer Pricing</span>
        </div>
      </div>
    </div>
  );
}
