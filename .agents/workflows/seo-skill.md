---
name: seo-aeo-audit
description: Run a comprehensive SEO + AEO/GEO audit — keyword research, on-page analysis, content gaps, technical checks, competitor benchmarking, AND AI visibility optimization for ChatGPT, Claude, Gemini, and Perplexity. Use when assessing a site's search and AI citation health, finding content gaps, or generating a prioritized action plan where most quick wins can be executed directly by Claude.
argument-hint: "<url or topic> [audit type]"
---

# /seo-aeo-audit

Audit a website's SEO health AND AI citation visibility across ChatGPT, Claude, Gemini, and Perplexity. Produces a prioritized action plan split into Claude-executable tasks (Claude does it now) and owner tasks (the user executes).

> **Why both layers?** Traditional SEO drives Google rankings. AEO/GEO (Answer Engine Optimization / Generative Engine Optimization) determines whether AI models cite you when users ask questions — an increasingly separate and high-value discovery channel. The Princeton/Georgia Tech GEO study (KDD 2024) found that specific content restructuring boosts AI citation probability by 30–41%. This audit covers both.

---

## Trigger

User runs `/seo-aeo-audit` or asks for an SEO audit, AEO audit, AI visibility check, LLM citation optimization, GEO audit, or any combination of search and AI search health.

---

## Inputs

Gather the following. If not provided, ask before proceeding:

1. **URL or domain** — the site to audit
2. **Audit type** — choose one or more:
   - **Full audit** — all SEO + AEO/GEO sections (default)
   - **SEO only** — classic search engine audit
   - **AEO/GEO only** — AI citation visibility audit
   - **Content rewrite** — Claude rewrites existing content for AI citability
   - **Competitor AI benchmarking** — who is AI citing instead of you, and why
3. **Target keywords or topics** (optional)
4. **Competitors** (optional) — if not provided, Claude identifies 2–3 via web search
5. **Key pages to prioritize** (optional) — homepage, top landing pages, specific blog posts

---

## Process

### PART 1 — CLASSIC SEO AUDIT

#### 1. Keyword Research

Research keywords related to the user's domain, topic, or target keywords.

**If SEO tools are connected:** Pull keyword data, search volume, difficulty scores, and ranking positions automatically.

**If not connected:** Use web search to research the keyword landscape. Note: "For precise volume/difficulty data, connect Ahrefs or Semrush via MCP."

Assess each keyword opportunity for:
- **Primary keywords** — high-intent terms tied directly to the product or service
- **Secondary keywords** — supporting terms and variations
- **Search volume signals** — relative demand (high, medium, low)
- **Keyword difficulty** — easy, moderate, hard
- **Long-tail opportunities** — specific, lower-competition phrases
- **Question-based keywords** — "how to", "what is", "why does" queries
- **Intent classification** — informational, navigational, commercial, transactional

#### 2. On-Page SEO Audit

For each key page (homepage, top landing pages, recent blog posts), evaluate:

- **Title tags** — present, unique, 50–60 characters, includes target keyword
- **Meta descriptions** — present, compelling, 150–160 characters, includes CTA
- **H1 tags** — exactly one per page, includes primary keyword
- **H2/H3 structure** — logical hierarchy, secondary keywords used naturally
- **Keyword usage** — primary keyword in first 100 words, no stuffing
- **Internal linking** — related pages linked, no orphan pages, descriptive anchor text
- **Image alt text** — descriptive attributes, keywords where relevant
- **URL structure** — clean, readable, keyword-inclusive, no excessive depth

#### 3. Content Gap Analysis

Identify what is missing from the content strategy:

- **Competitor topic coverage** — topics competitors rank for that the site does not cover
- **Content freshness** — pages not updated in 12+ months (AI models also deprioritize stale content)
- **Thin content** — pages under 300 words for informational
