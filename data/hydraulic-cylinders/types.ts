import React from 'react';

export interface CylinderSpec {
  parameter: string;
  value: string;
}

export interface CylinderFeature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface CylinderBlockType {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface CylinderIndustry {
  icon: React.ReactElement;
  industryName: string;
  description: string;
  href: string;
}

export interface ComparisonRow {
  feature: string;
  columns: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}
