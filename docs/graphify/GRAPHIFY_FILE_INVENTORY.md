# Graphify File Inventory

This document provides a high-level inventory of the file extensions and counts found in the `website/` directory prior to Graphify indexing. Note that this raw count includes `node_modules` and `.next` which are excluded in the `graphify.config.json`.

## File Statistics Overview

- **.js**: ~12,262 files
- **.map**: ~6,376 files
- **.ts**: ~3,954 files
- **.mjs**: ~2,612 files
- **.json**: ~1,265 files
- **.md**: ~1,178 files
- **.cts**: ~151 files
- **.rsc**: ~124 files
- **.yml**: ~119 files
- **.woff2**: ~94 files
- **.mts**: ~81 files
- **.tsx**: ~74 files
- **.editorconfig**: ~45 files
- **.mdx**: ~38 files
- **.flow**: ~37 files
- **.txt**: ~34 files
- **.cmd**: ~31 files
- **.ps1**: ~31 files
- **.css**: ~29 files
- **.jst**: ~25 files
- **.html**: ~24 files
- **.avif**: ~14 files

*Other minor file types (such as config files, binary assets like `.dll`, `.node`, and images `.png`, `.svg`) are also present in small quantities.*

These files will be aggressively filtered by the `graphify.config.json` rules before the knowledge graph is built, ensuring that only relevant application code, components, SEO schemas, and content are indexed.
