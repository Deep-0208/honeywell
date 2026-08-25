import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import { Heading } from '@/components/ui/Heading';
import type { ComparisonData } from './types';

/**
 * ProductComparison — Full-width comparison table.
 *
 * Styled header row with optional column links.
 * Highlight-able cells for competitive advantages.
 * Optional footnote below table.
 */
export function ProductComparison({ heading,
  description,
  columns,
  rows,
  footnote,
  bg = 'gray' }: ComparisonData & { bg?: 'white' | 'gray' }) {
  const hasLeadingFeatureCol = rows.length > 0 && columns.length === rows[0].values.length + 1;
  const firstColHeader = hasLeadingFeatureCol ? columns[0] : { heading: 'Feature' };
  const valueColumns = hasLeadingFeatureCol ? columns.slice(1) : columns;

  return (
    <Section aria-labelledby="comparison-heading" bg={bg} id="comparison">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Heading
            id="comparison-heading"
            variant="section"
            as="h2"
            underline="center"
            className="text-3xl md:text-4xl font-display font-bold text-honeywell-navy mb-4"
          >
            {heading}
          </Heading>
          <p className="text-lg text-brand-steelGray font-body text-center">
            {description}
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-slate-200 bg-honeywell-navy text-white">
                <th className="px-6 py-4 font-display font-bold text-lg w-1/4">
                  {firstColHeader.href ? (
                    <Link
                      href={firstColHeader.href}
                      className="hover:text-red-200 transition-colors underline decoration-white/30 underline-offset-4"
                    >
                      {firstColHeader.heading}
                    </Link>
                  ) : (
                    firstColHeader.heading
                  )}
                </th>
                {valueColumns.map((col, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-4 font-display font-bold text-lg border-l border-white/20"
                  >
                    {col.href ? (
                      <Link
                        href={col.href}
                        className="hover:text-red-200 transition-colors underline decoration-white/30 underline-offset-4"
                      >
                        {col.heading}
                      </Link>
                    ) : (
                      col.heading
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {rows.map((row, rIdx) => (
                <tr key={rIdx} className={`hover:bg-brand-surfaceGray/50 ${rIdx % 2 === 1 ? 'bg-brand-surfaceGray/30' : ''}`}>
                  <td className="px-6 py-4 font-semibold text-brand-darkSlate">
                    {row.feature}
                  </td>
                  {row.values.map((val, vIdx) => (
                    <td
                      key={vIdx}
                      className={`px-6 py-4 border-l border-slate-200 ${
                        val.highlight
                          ? 'text-honeywell-red font-bold'
                          : 'text-brand-darkSlate'
                      }`}
                    >
                      {val.text}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {footnote && (
          <div className="max-w-4xl mx-auto mt-8 bg-brand-lightSurface p-6 rounded-lg border-l-4 border-honeywell-navy">
            <div className="text-brand-darkSlate font-body italic text-justify">
              {footnote}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
