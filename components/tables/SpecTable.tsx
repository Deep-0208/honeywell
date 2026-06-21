import React from 'react';

export interface SpecRow {
  parameter: string;
  value: string;
}

export interface SpecTableProps {
  title?: string;
  rows: SpecRow[];
  className?: string;
}

/**
 * SpecTable Component
 * 
 * Engineering-focused technical specifications table.
 * Uses JetBrains Mono for values to maintain a technical aesthetic.
 */
export function SpecTable({ title, rows, className = '' }: SpecTableProps) {
  if (!rows || rows.length === 0) return null;

  return (
    <div className={`w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm ${className}`}>
      {title && (
        <div className="bg-honeywell-navy px-6 py-4">
          <h3 className="text-lg font-bold font-display text-white tracking-wide">
            {title}
          </h3>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-brand-surfaceGray">
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-honeywell-navy uppercase tracking-wider font-body w-1/3">
                Parameter
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-honeywell-navy uppercase tracking-wider font-body">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row, index) => (
              <tr 
                key={index} 
                className="hover:bg-brand-surfaceGray/50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-semibold text-brand-darkSlate font-body">
                  {row.parameter}
                </td>
                <td className="px-6 py-4 text-sm text-honeywell-navy font-mono tracking-tight">
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
