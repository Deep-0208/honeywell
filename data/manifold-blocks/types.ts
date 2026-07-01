import React from 'react';

export interface ManifoldSpec {
  parameter: string;
  value: string;
}

export interface ManifoldFeature {
  icon: React.ReactElement;
  title: string;
  description: string;
}

export interface ManifoldBlockType {
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface ManifoldIndustry {
  icon: React.ReactElement;
  name: string;
  description: string;
}

export interface ComparisonRow {
  feature: string;
  columns: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}
