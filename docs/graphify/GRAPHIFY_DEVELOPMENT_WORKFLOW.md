# Graphify Development Workflow

This document defines the mandatory Graphify checks and workflow standards that must be adhered to during the development of the Honeywell Hydraulics Next.js application.

## Mandatory Graphify Checks
Before undertaking any of the following tasks, you MUST query the Graphify knowledge base:

1. **Creating new pages**: Query existing route structures and ensure the new page logically fits into the hierarchy.
2. **Modifying routes**: Check the route dependency graph to avoid breaking child routes or layouts.
3. **Refactoring components**: Verify parent/child component dependencies and check for shared import usages.
4. **Updating metadata**: Query metadata inheritance (e.g., from `layout.tsx`) to avoid duplicating or overwriting global tags.
5. **Adding schemas**: Check existing EEAT signals (Organization, ManufacturingBusiness) to ensure structured data is nested correctly.
6. **Creating content silos**: Query the current silo map to establish appropriate Hub-and-Spoke relationships.
7. **Updating internal links**: Assess the internal link network to ensure no orphan pages are created or hub authority is diluted.

## SEO Workflow Integration
Before implementing any SEO tasks, run the following queries to assess the landscape and generate recommendations:
1. **Existing Route Relationships**: `graphify query "List the route hierarchy and layout inheritance for [Target]"`
2. **Content Relationships**: `graphify query "Map the topical cluster around [Target Topic]"`
3. **Schema Relationships**: `graphify query "Analyze the EEAT schema structure across the domain"`
4. **Internal Linking Structure**: `graphify query "Trace the internal linking pathways to and from [Target URL]"`
5. **Location Page Relationships**: `graphify query "Map the Local SEO relationships for [Target City/Region]"`

## Component Workflow Integration
Prevent accidental breakages by validating component changes:
1. **Parent Dependencies**: `graphify query "What components import [Component Name]?"`
2. **Child Dependencies**: `graphify query "What components does [Component Name] rely on?"`
3. **Shared Components**: `graphify query "List all shared dependencies utilized by [Component Name]"`
4. **Import Graph**: `graphify path "[Component Name]" "[Root Layout/Page]"`
5. **Route Impact**: `graphify query "Which routes will be affected by a change to [Component Name]?"`

## Custom Honeywell Queries (Reusable)

### Route Analysis
- **Product Hubs**: `graphify query "Analyze the /products hub routing and its child dependencies"`
- **Product Pages**: `graphify query "Trace layout and metadata inheritance for /products/[slug]"`
- **Industry Pages**: `graphify query "Map the routing structure for /industries"`
- **Application Pages**: `graphify query "Analyze the /applications route inheritance"`
- **Service Pages**: `graphify query "Trace the route impact of /services pages"`
- **Resource Pages**: `graphify query "Map the /resources routing and related content silos"`

### SEO Analysis
- **Missing Metadata**: `graphify query "Identify any routes missing explicit <title> or <meta name='description'> tags"`
- **Missing Schema**: `graphify query "List pages that are missing core EEAT schema like Organization or LocalBusiness"`
- **Weak Internal Linking**: `graphify query "Find pages with fewer than 2 inbound internal links"`
- **Orphan Pages**: `graphify query "Identify all orphan routes with zero inbound internal links"`
- **Canonical Relationships**: `graphify query "Trace the canonical URL structure across all active routes"`

### Content Analysis
- **Hydraulic Cylinders**: `graphify query "Map the content silo and all internal links related to Hydraulic Cylinders"`
- **Hydraulic Power Packs**: `graphify query "Analyze the topic cluster for Hydraulic Power Packs"`
- **Hydraulic Systems**: `graphify query "Trace relationships between Hydraulic Systems content and engineering resources"`
- **Manifold Blocks**: `graphify query "Map the hub-to-silo relationship for Manifold Blocks"`
- **Ahmedabad SEO**: `graphify query "Analyze the Local SEO signals, schema, and routing for the Ahmedabad location"`
