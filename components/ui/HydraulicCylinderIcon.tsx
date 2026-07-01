import React from 'react';

export function HydraulicCylinderIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="1" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
      {...props}
    >
      {/* Rear mounting pin */}
      <circle cx="3" cy="12" r="1.5" />
      {/* Cylinder barrel */}
      <path d="M4.5 9.5 h 9 v 5 h -9 z" />
      {/* Front gland / cap */}
      <path d="M13.5 10.5 h 1.5 v 3 h -1.5" />
      {/* Rod */}
      <line x1="15" y1="12" x2="20" y2="12" />
      {/* Rod eye */}
      <circle cx="21" cy="12" r="1.5" />
    </svg>
  );
}
