import React from 'react';

export interface PowerPackType {
  title: string;
  description: string;
  href?: string;
  image: string;
}

export interface PowerPackIndustry {
  industryName: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export interface PowerPackSpec {
  parameter: string;
  value: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PowerPackFeature {
  icon: React.ReactElement;
  title: string;
  description: string;
}
