# Graphify Best Practices: Official Operating Guide

This is the official guide for interacting with Graphify on the Honeywell Hydraulics Next.js platform.

## 1. Query Before You Code
Graphify is your co-pilot. Never blindly modify a component or route. Always query its dependencies, parent layouts, and SEO implications first to understand the blast radius of your changes.

## 2. Leverage the Skill Agent
Use the `/graphify` command natively inside the AI assistant to instantly fetch context before asking coding questions. This ensures the assistant possesses an exact map of the Honeywell repository.

## 3. Prioritize Semantic Connections
When creating documentation or code comments, use explicit references. Graphify's semantic engine picks up on precise terminology (e.g., "See `HydraulicCylinder` schema in `lib/seo`") and builds stronger INFERRED edges.

## 4. Run Audits Incrementally
Don't wait for the monthly audit to catch SEO regressions. When pushing a large PR, run the specific Graphify queries related to your changes (e.g., Schema checks if you touched `seo/`, or Component impact if you touched `Header.tsx`).

## 5. Trust the Route Map
Next.js App Router relies heavily on folder structure. Use Graphify to visualize how `layout.tsx`, `page.tsx`, and `loading.tsx` interact. If a path feels overly nested, query Graphify to see if the layout hierarchy has become unnecessarily deep.

## 6. Maintain the Integrity of the Graph
Ensure the `graphify.config.json` is always respected. Do not attempt to bypass exclusions (like `.next` or `node_modules`). Graphify is designed to index *your* logic, not external dependencies.

## 7. The Roadmap is the Source of Truth
Review the `GRAPHIFY_IMPLEMENTATION_ROADMAP.md` before starting new feature sprints. Always address **Critical** and **High** priority SEO and Architecture issues mapped by Graphify before taking on technical debt.
