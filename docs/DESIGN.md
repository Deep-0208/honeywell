# Honeywell Hydraulics Design System (Phase 1.2)

## 🎯 Primary Objective
The website design is strictly built around making the **Honeywell Hydraulics logo** look premium and highly visible.
- **Vibe:** Modern engineering, technical capability, trust, precision manufacturing.
- **Inspirations:** Siemens, ABB, Festo, Schneider Electric, Emerson.
- **DO NOT USE:** Dark themes, red-heavy layouts, or generic industrial styling (e.g. Caterpillar/JCB vibes).

---

## 🛡️ Logo Visibility Rule (CRITICAL)
- **Backgrounds:** The logo MUST always be displayed on **White** or **Very Light Gray** backgrounds.
- **Never use on:** Black, Navy, Dark Gray, or Red backgrounds.
- **Header:** Must remain white.

---

## 🎨 Color System

### Primary Colors
- **Honeywell Navy:** `#0D1B5C`
- **Honeywell Red:** `#E31B23`
- **White:** `#FFFFFF`

### Supporting Colors
- **Deep Navy:** `#08133F`
- **Technical Blue:** `#1D3563`
- **Dark Slate:** `#334155`
- **Steel Gray:** `#64748B`
- **Border Gray:** `#CBD5E1`
- **Surface Gray:** `#F8FAFC`
- **Light Surface:** `#F1F5F9`
- **Text Dark:** `#111827`

### Color Distribution
- **White (70%):** Primary backgrounds, breathing room.
- **Light Gray (20%):** Alternate section backgrounds.
- **Navy (8%):** Headings, Navigation, Diagrams, Icons, Footer strip.
- **Red (2%):** CTA Buttons, Hover States, Key highlights. Never large red sections.

---

## 🔤 Typography
- **Primary Font (Headings + Body):** Poppins (Weights: 400, 500, 600, 700)
- **Technical Data:** System monospace `ui-monospace` (For data tables, metrics, specs)
- **Note:** globals.css enforces Poppins on all headings and body via `!important` rules.

---

## 🧱 Component Rules

### Header
- **Background:** White
- **Logo:** Original full-color
- **Navigation:** Navy text, Red on hover
- **Sticky:** Yes
- **Quote Button:** Red background, White text
- **Border:** Subtle `#E2E8F0` bottom border

### Hero Section
- **Background:** Manufacturing/Hydraulic image
- **Overlay:** Navy `rgba(13,27,92,0.75)`
- **Content:** White text
- **CTAs:** Primary (Red), Secondary (White outline)

### Alternating Sections
To create depth without hurting logo visibility:
1. `bg-white`
2. `bg-brand-surfaceGray` (#F8FAFC)
3. `bg-white`
4. `bg-brand-lightSurface` (#F1F5F9)

### Cards
- **Background:** White
- **Border:** `#E2E8F0` / `border-brand-borderGray`
- **Hover State:** Small elevation shadow, subtle upward shift (`-translate-y-1`), thin red top border. No aggressive scale animations.

### Buttons
- **Primary:** Background `#E31B23`, Text White, Hover `#C41220`
- **Secondary:** Transparent, Border/Text `#0D1B5C`, Hover Background `#0D1B5C` / Text White
- **Ghost:** Text `#0D1B5C`, Hover `#E31B23`

### Footer
- **Main BG:** `#F8FAFC`
- **Top Border:** `#E2E8F0`
- **Headings:** `#0D1B5C`
- **Links:** `#475569` (Hover: `#E31B23`)
- **Bottom Strip:** `#0D1B5C` background, White text.

---

## ♿ Accessibility
- Minimum contrast ratio 4.5:1.
- All CTA buttons pass WCAG AA.
- Legible scaling on mobile devices.
