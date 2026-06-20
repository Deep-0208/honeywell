# Graphify Project Structure

This document outlines the core project structure of the Honeywell Hydraulics website that Graphify will index and analyze.

## Core Directories

- **`app/`**: Next.js App Router structure containing the pages, layouts, and routing logic.
- **`components/`**: Reusable React components utilized across the application.
- **`content/`**: Markdown/MDX content for pages, articles, and documentation.
- **`data/`**: Static data definitions, potentially holding SEO parameters and JSON configurations.
- **`docs/`**: Project documentation, including the `graphify/` subfolder for these reports.
- **`hooks/`**: Custom React hooks.
- **`lib/`**: Utility functions and shared library code.
- **`public/`**: Static assets, including images referenced in the content audits.
- **`scripts/`**: Miscellaneous development and build scripts.
- **`seo/`**: Specific SEO-related logic and schema configurations.
- **`styles/`**: Global styles and Tailwind CSS configurations.
- **`types/`**: TypeScript type definitions and interfaces.

## Ignored Directories
The following directories exist but are actively excluded from the Graphify indexing process via the `graphify.config.json` rules:
- **`.next/`**: Next.js build artifacts.
- **`node_modules/`**: External dependencies.
- **`.agents/`**: Agent rules and workflows.
- **`graphify-out/`**: Output directory for Graphify generated data and HTML.

This project structure informs the `graphify.config.json` boundaries, ensuring clean and relevant knowledge graph generation.
