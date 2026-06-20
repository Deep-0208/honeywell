# Graphify Project Setup

This document serves as the developer guide for interacting with Graphify in the Honeywell Hydraulics Next.js application.

## How to Rebuild the Graph
To update the graph after code or content changes, run the extraction command from the project root:
```bash
# Rebuild the full graph
graphify extract website/

# Update only changed files incrementally
graphify extract website/ --update
```

## How to Query the Graph
Graphify exposes a CLI query engine. Use natural language to traverse the knowledge graph:
```bash
# General query
graphify query "How does the SEO metadata inheritance work in this project?"

# Trace shortest path between components
graphify path "HeaderComponent" "ProductSchema"
```

## How to Analyze Routes
To understand route relationships, layout inheritance, and server/client boundaries:
```bash
graphify query "Trace the layout hierarchy and route dependencies for the /products/[slug] route"
```

## How to Analyze Components
To find duplicate code, circular dependencies, or unused components:
```bash
graphify query "List all React components and their dependencies. Identify any unused or orphaned components."
```

## How to Analyze SEO Relationships
To evaluate EEAT signals, local SEO maps, and schema structures:
```bash
graphify query "Map the relationship between the Product Hub Pages and their corresponding Organization and ManufacturingBusiness schemas."
```

## Architecture and Exclusions
The Graphify configuration (`graphify.config.json`) is designed to exclude raw build artifacts and external packages (e.g., `node_modules`, `.next`) while strictly indexing the Next.js `app/` router, components, semantic content, and metadata schemas.
