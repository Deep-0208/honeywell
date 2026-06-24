<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:mobile-responsive-rules -->
# Mobile-First Responsive Design Rules

All pages and components MUST be mobile-friendly. Google uses mobile-first indexing.

## Mandatory Design System Usage
- **Headings**: Always use `<Heading>` component from `@/components/ui/Heading`. Never use raw `<h1>`–`<h6>` with inline font sizes. The component has built-in mobile-first size ramps:
  - `hero`: text-3xl → sm:text-4xl → md:text-5xl → lg:text-6xl
  - `section`: text-2xl → sm:text-3xl → md:text-4xl → lg:text-5xl
  - `subsection`: text-xl → sm:text-2xl → md:text-3xl
  - `card`: text-lg → sm:text-xl → md:text-2xl
- **Sections**: Always use `<Section>` component. Built-in padding: py-12 → md:py-16 → lg:py-24
- **Containers**: Always use `<Container>` component. Built-in padding: px-4 → sm:px-6 → lg:px-8
- **Buttons**: Always use `<Button>` component from `@/components/ui/Button`

## Mobile Sizing Rules
- Do NOT override Heading sizes inline with `className="text-3xl sm:text-4xl"`. Let the variant handle it.
- Section header spacing: Use `mb-8 md:mb-12` (not `mb-12` which wastes mobile space)
- Card padding: Use responsive padding `p-4 sm:p-5 md:p-6` (not fixed `p-6` or `p-8`)
- CTA buttons on mobile: Use `w-full sm:w-auto` for full-width tap targets
- Grid gaps: Use responsive gaps `gap-4 sm:gap-6 md:gap-8` (not fixed `gap-8`)
- Text scaling: Always include a mobile size `text-sm sm:text-base md:text-lg`

## Touch Targets
- All interactive elements must be minimum 48×48px on mobile (WCAG / Google requirement)
- Use `min-h-[48px]` on buttons and links for mobile

## Breakpoints (Tailwind defaults)
- `sm`: 640px (large phones / small tablets)
- `md`: 768px (tablets)
- `lg`: 1024px (desktop)
- `xl`: 1280px (wide desktop)

## Testing Checklist for New Pages
- No horizontal scroll at 320px viewport width
- All text readable without zooming
- All CTA touch targets ≥ 48px
- Content above fold is meaningful (not wasted on whitespace)
<!-- END:mobile-responsive-rules -->
