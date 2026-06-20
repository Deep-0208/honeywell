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
    <div className={`w-full overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm ${className}`}>
      {title && (
        <div className="bg-[#0D1B5C] px-6 py-4">
          <h3 className="text-lg font-bold font-display text-white tracking-wide">
            {title}
          </h3>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#E2E8F0] bg-[#F8FAFC]">
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#0D1B5C] uppercase tracking-wider font-body w-1/3">
                Parameter
              </th>
              <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#0D1B5C] uppercase tracking-wider font-body">
                Value
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E2E8F0]">
            {rows.map((row, index) => (
              <tr 
                key={index} 
                className="hover:bg-[#F8FAFC]/50 transition-colors"
              >
                <td className="px-6 py-4 text-sm font-semibold text-[#334155] font-body">
                  {row.parameter}
                </td>
                <td className="px-6 py-4 text-sm text-[#0D1B5C] font-mono tracking-tight">
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
