# SEO Full Audit Report — BOY NETTOYAGE PRO
**URL:** https://boy-nettoyage.vercel.app/
**Production domain (intended):** https://boynettoyagepro.ma
**Audit date:** 2026-03-30
**Framework:** Next.js 16 (App Router) — Vercel
**Business type:** Local Service Business — Cleaning & Hygiene (SAB hybrid), Casablanca, Morocco
**Language:** French (fr_MA)

---

## Overall SEO Health Score: 33 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 36/100 | 7.9 |
| Content Quality | 23% | 48/100 | 11.0 |
| On-Page SEO | 20% | 34/100 | 6.8 |
| Schema / Structured Data | 10% | 4/100 | 0.4 |
| Performance (CWV) | 10% | 48/100 | 4.8 |
| AI Search Readiness (GEO) | 10% | 28/100 | 2.8 |
| Images | 5% | 20/100 | 1.0 |
| **TOTAL** | **100%** | — | **34.7 / 100** |

---

## Executive Summary

BOY NETTOYAGE PRO has a well-designed, professional-looking website with solid branding, consistent NAP data, 25 service pages, and a clear value proposition. However, the site has fundamental technical and structural SEO problems that are actively preventing it from ranking locally and being discoverable by AI search systems.

### Top 5 Critical Issues

1. **Wrong brand name on 25 service pages** — Every service detail page title contains "Eden Plaza Nettoyage" instead of "BOY NETTOYAGE PRO" (left over from a previous project). Google is indexing a competitor's name across your best content pages.
2. **No robots.txt and no sitemap.xml** — Both return 404. Google has no crawl guidance and cannot discover service pages via sitemap submission.
3. **Zero structured data (schema markup)** — No LocalBusiness, no Service, no BreadcrumbList, no Reviews schema anywhere on the site. Score: 0/100 before remediation.
4. **No canonical tags** — With OG URL pointing to `boynettoyagepro.ma` and site live on Vercel, there is a canonical split that will cause duplicate content issues when the production domain goes live.
5. **Nearly all content is client-side rendered** — 25+ components use `"use client"`. AI crawlers and Googlebot's standard crawler see mostly empty HTML. Most of the site's content is invisible until JavaScript executes.

### Top 5 Quick Wins

1. Fix "Eden Plaza Nettoyage" → "BOY NETTOYAGE PRO" in `app/services/[slug]/page.tsx` — 15 minutes, massive impact.
2. Add `app/robots.ts` and `app/sitemap.ts` — 2 hours, immediate crawlability improvement.
3. Add `LocalBusiness` JSON-LD schema to `app/layout.tsx` — 2 hours, enables local pack eligibility.
4. Fix `metadataBase` + `alternates.canonical` in `app/layout.tsx` — 30 minutes, resolves canonical split.
5. Fix years-of-experience inconsistency (`"8+"` in `utils.ts` vs `"10+"` hardcoded in `KeyFigures.tsx`) — 5 minutes.

---

## 1. Technical SEO — 36/100

### Critical

| ID | Issue | File | Impact |
|----|-------|------|--------|
| C-1 | `robots.txt` missing (404) | `app/robots.ts` (create) | Crawlers have no guidance; sitemap undiscoverable; AI scrapers unmanaged |
| C-2 | `sitemap.xml` missing (404) | `app/sitemap.ts` (create) | 28 pages undiscoverable via sitemap; service slugs may never be indexed |
| C-3 | OG `url` points to `boynettoyagepro.ma` — site lives on Vercel | `app/layout.tsx:44` | Canonical split; social shares break; PageRank will split when both domains are live |
| C-4 | **"Eden Plaza Nettoyage"** in all 25 service page titles | `app/services/[slug]/page.tsx:20` + `lib/services-detail-data.ts` (25 intro fields) | Google indexes wrong brand name across your entire services section |

### High Priority

| ID | Issue | File | Impact |
|----|-------|------|--------|
| H-1 | No canonical tags on any page | `app/layout.tsx`, all page files | Vercel preview URLs, UTM variants all become separate crawlable pages |
| H-2 | No `metadataBase` in root layout | `app/layout.tsx` | Relative canonical paths will fail to resolve once added |
| H-3 | Twitter card type `"summary"` instead of `"summary_large_image"` | `app/layout.tsx` | Social shares render as tiny thumbnails instead of full-width image cards |
| H-4 | No `og:image` defined anywhere | `app/layout.tsx` | All social shares (WhatsApp, Facebook, LinkedIn) show no image preview |
| H-5 | 25+ components marked `"use client"` unnecessarily | Multiple component files | Googlebot standard crawler and AI bots see near-empty HTML |
| H-6 | Admin routes (`/admin`) publicly crawlable | `app/admin/` | Should be `Disallow`ed in robots.txt and tagged `noindex` |

### Medium Priority

| ID | Issue | File | Impact |
|----|-------|------|--------|
| M-1 | Footer service links point to `/#services` anchor, not individual service pages | `components/Footer.tsx:73-85` | Missed internal linking to 25 service pages; no PageRank flow to them from footer |
| M-2 | Service page titles lack city-level modifier | `app/services/[slug]/page.tsx` | Missing high-intent local queries like "nettoyage chantier Casablanca" |
| M-3 | H1 on homepage is inside a `"use client"` component | `components/HeroSection.tsx` | May not be in initial HTML response to Googlebot standard crawler |
| M-4 | `ScrollReveal` wraps LCP hero image at `opacity-0` | `components/ScrollReveal.tsx` + `components/HeroSection.tsx` | CLS risk: image loads invisible, then transitions — can register as layout shift |
| M-5 | Hero image served from Unsplash CDN (external URL) | `components/HeroSection.tsx:113` | External DNS lookup delays LCP; URL can change/expire; no brand identity |
| M-6 | `tel:` href format inconsistent | `components/Footer.tsx`, `B2BContactSection.tsx` | Use E.164 format: `tel:+212661408577` everywhere |

### Low Priority

| ID | Issue | Notes |
|----|-------|-------|
| L-1 | No security headers (`X-Frame-Options`, `X-Content-Type-Options`, etc.) | Add via `next.config.ts` `headers()` |
| L-2 | No `apple-touch-icon`, no `manifest.json` | Affects home screen bookmarks on mobile |
| L-3 | No IndexNow protocol | Easy win for instant Bing/Yandex indexing on content change |
| L-4 | Ghost secondary email `info@boynettoyagepro.ma` defined but never rendered | Remove from `lib/utils.ts` or use it |

### Positive Findings
- HTTPS fully handled by Vercel — no mixed content issues
- `lang="fr"` correctly set on `<html>`
- Viewport meta correct via `Viewport` export
- `<Image priority>` used for above-the-fold images
- Clean, semantic URL structure (`/services/nettoyage-de-chantier`)
- Responsive design throughout with Tailwind breakpoints
- Breadcrumb navigation rendered in service detail pages
- Internal cross-linking at depth 2 from homepage to service pages

**Fix to get to 70/100:** C-1 through C-4, H-1 through H-4.

---

## 2. Content Quality — 48/100

### E-E-A-T Assessment

| Signal | Status | Notes |
|--------|--------|-------|
| Experience | Partial | Claims "8+ / 10+ years" and "20,000+ clients" but figure is inconsistent across pages |
| Expertise | Partial | Services are detailed and categorized; no certifications, no team bios |
| Authoritativeness | Weak | No third-party mentions, no linked awards, no press coverage |
| Trustworthiness | Partial | Real physical address, 3 phone numbers, email; but no verification platforms |

### Content Issues

**Years inconsistency (High):** `utils.ts` defines `YEARS_EXPERIENCE = "8+"` but `components/about/KeyFigures.tsx` hardcodes `"10+"`. The homepage performance stats block shows "10+ Années d'expérience" while the hero section says "8+". Founded 2016 → 2026 = 10 years. Fix: set `YEARS_EXPERIENCE = "10+"` in `utils.ts` and remove all hardcoded overrides.

**Short content passages (Medium):** Service descriptions in `services-data.ts` are 1–2 sentences (~20–30 words). Individual service detail pages have richer content via `services-detail-data.ts` but still below the 134-word optimal passage length for AI citation. No paragraph on the site is a complete, self-contained answer to a user question.

**No blog / editorial content:** Zero articles, how-to guides, or informational content. This eliminates the entire informational search funnel and all AI-cited content opportunities.

**No FAQ page:** Despite having 75 FAQ Q&A pairs across 25 service detail pages, there is no standalone `/faq` route. These are the highest-density citable assets on the site and are underexposed.

**Social proof credibility gap:** "Note moyenne 5/5 — Basée sur +20 000 clients" with only 3 named testimonials and no linked review platform (Google, Trustpilot, etc.) reads as an unverifiable claim to both users and algorithms.

### What Is Working
- Service pages have unique `prestations`, `intro`, `faq`, `whyUs`, `clients` fields — differentiated, not doorway pages
- Real NAP data throughout (not just in footer)
- B2B section shows industry-specific targeting (hôtels, syndics, entreprises)
- Before/after imagery demonstrates real results

---

## 3. On-Page SEO — 34/100

### Page-by-Page Title & Meta Analysis

| Page | Title | Meta Description | H1 | Issues |
|------|-------|------------------|----|--------|
| `/` | "BOY NETTOYAGE PRO \| Nettoyage & Hygiène Professionnelle à Casablanca" ✓ | 155 chars, includes services + location ✓ | "Propreté & Hygiène Professionnelle" — **no city term** | H1 missing "Casablanca"; duplicate H1 detected |
| `/services` | "Nos Services \| BOY NETTOYAGE PRO - Nettoyage Professionnel à Casablanca" ✓ | Adequate ✓ | "Nos Services" — generic | No keyword depth |
| `/qui-sommes-nous` | "Qui sommes nous ? \| BOY NETTOYAGE PRO - Expert Nettoyage à Casablanca" ✓ | Adequate ✓ | "À Propos de BOY NETTOYAGE PRO" ✓ | — |
| `/services/[slug]` | "**[service] \| Eden Plaza Nettoyage** — Nettoyage Professionnel au Maroc" ✗ | Adequate ✓ | Correct ✓ | **Wrong brand name in title — critical** |

### Internal Linking Gaps
- Footer "Nos Services" column: all 6 links point to `/#services` (homepage anchor) instead of individual `/services/[slug]` pages
- No internal cross-links from homepage sections to service detail pages
- Service detail pages link to each other via "Nos autres services" sidebar ✓

---

## 4. Schema / Structured Data — 4/100

**Verdict: Zero structured data on the entire site.**

No JSON-LD, no Microdata, no RDFa detected anywhere. The score of 4/100 is awarded only for valid `<title>`, `<meta description>`, and Open Graph tags.

### Missing Schema (Priority Order)

| Priority | Type | Pages | Effort | SEO Impact |
|----------|------|-------|--------|------------|
| P1 | `CleaningService` / `LocalBusiness` | Homepage | Low | **Critical** — local pack, knowledge panel |
| P1 | `WebSite` + `SearchAction` | Root layout | Very Low | Medium — branded SERP |
| P2 | `Service` | 25 service pages | Medium (template) | High — service rich results |
| P2 | `BreadcrumbList` | 25 service pages + `/services` | Low (template) | High — breadcrumbs in SERPs |
| P3 | `AggregateRating` (nested in LocalBusiness) | Homepage | Very Low | High — review stars in map pack |
| P3 | `Organization` | Root layout | Low | Medium — brand entity disambiguation |
| P4 | `FAQPage` | 25 service pages | Low (data exists) | Low for Google, medium for AI/GEO |

**Key data is already in code** — all required fields exist in `lib/utils.ts` (`COMPANY_NAME`, `ADDRESS`, `PHONE_MAIN`, `EMAIL_PRIMARY`, `OPERATING_HOURS`) and `lib/services-detail-data.ts` (25 service slugs, titles, descriptions, FAQ arrays). Zero content creation needed to implement P1–P3.

**Projected score after implementation: 81/100.**

---

## 5. Performance (Core Web Vitals) — 48/100

### Image Analysis

| Asset | Format | Size | Assessment |
|-------|--------|------|------------|
| Most service images (×24) | PNG | 2.1–3.5 MB each | **Critical** — ~55 MB total raw |
| Before/after images (×6) | JPEG | 159–515 KB | Acceptable |
| `logo.png` | PNG | 61 KB | Should be SVG or WebP |
| `Cristallisation du Parquet.webp` | WebP | 47 KB | ✓ WebP equivalent (vs 2.2 MB PNG = 97.9% smaller) |

**`next/image` IS being used** across all image-rendering components — this provides automatic WebP conversion and lazy loading on-demand. However:
- Source images at 2–3 MB each create server-side processing overhead on first request
- No images are pre-optimized before hitting the Next.js optimizer
- Pre-converting to WebP before deployment would eliminate processing delay entirely

### LCP Risk
- Hero image is an **external Unsplash URL** (`images.unsplash.com`) — external DNS resolution + CDN hop increases LCP
- `priority` flag IS set on the hero image ✓ — adds `fetchpriority="high"` preload hint
- But: hero image is inside `"use client"` `HeroSection` component — image fetch may not begin until after JS hydration
- `ScrollReveal` wraps the hero image at `opacity-0 translate-y-8` — even after loading, visible render is delayed by animation

### CLS Risk
- Multiple `ScrollReveal` animations on page-load content
- Content sections start invisible and shift into position — this pattern accumulates CLS
- Especially risky for the hero H1 and the services grid

### Bundle Size Concerns
- **Framer Motion**: ~50KB gzipped — used for animations throughout
- **Supabase JS** (`@supabase/supabase-js`): ~200KB gzipped — heavy if loaded on every page
- **Lucide React**: Tree-shaken per icon ✓

### Positive Performance Signals
- Hosted on Vercel edge network — low TTFB globally ✓
- `next/font` for Plus Jakarta Sans — no render-blocking font requests ✓
- `next/image` used consistently — automatic WebP, lazy loading ✓
- No third-party analytics or tracking scripts detected ✓

---

## 6. AI Search Readiness (GEO) — 28/100

| Platform | Score | Primary Barrier |
|----------|-------|----------------|
| Google AI Overviews | 20/100 | No schema, no FAQ, CSR content invisible |
| ChatGPT | 22/100 | No llms.txt, no off-site brand mentions, passages too short |
| Perplexity | 30/100 | Some static content reachable; no authoritative passages to cite |
| Bing Copilot | 25/100 | Same barriers as Google AIO |

### Key GEO Issues
1. **CSR content invisible to non-JS crawlers** — HeroSection, TestimonialsSection, KeyFigures, AboutTimeline are all `"use client"`. AI crawlers without JS execution see empty body content.
2. **No llms.txt** — No structured machine-readable manifest for AI systems
3. **Content passages too short** — All service descriptions are 1–2 sentences. Optimal AI citation length is 134–167 words per passage.
4. **No self-contained answer blocks** — No passage on the site completely answers a specific user question without surrounding context.
5. **No FAQ page** — Despite having 75 Q&A pairs in the codebase, none are on a discoverable FAQ route.
6. **No social/off-site brand presence** — YouTube presence correlates 0.737 with AI citations. No YouTube, no Facebook, no Instagram linked.
7. **No source attribution** — "20,000+ clients" and "5/5 rating" have no linked platform; AI systems deprioritize unsourced self-reported statistics.

---

## 7. Images — 20/100

| Issue | Count | Severity |
|-------|-------|----------|
| Unoptimized PNG service images (2–3 MB) | 24 | High |
| Hero image sourced from Unsplash (external) | 1 | High |
| JPEG before/after images (159–515 KB) | 6 | Medium |
| No `og:image` defined | Site-wide | High |
| No WebP pre-conversion (except 1 file) | 23 | Medium |
| Oversized logo (61 KB PNG vs ~5 KB SVG equivalent) | 1 | Low |

**`next/image` mitigates most issues at runtime** but pre-optimization is recommended.

---

## 8. Local SEO — 34/100

### NAP Consistency: PASS (internal)
NAP is consistent across all internal touchpoints via `lib/utils.ts` constants. No internal inconsistencies.

### NAP Issues (external)
- OG URL references `boynettoyagepro.ma` — canonical mismatch
- `tel:` hrefs use short format (e.g. `0661408577`) instead of E.164 (`+212661408577`)
- Secondary email `info@boynettoyagepro.ma` defined but never rendered

### Critical Local SEO Gaps

| Gap | Impact |
|-----|--------|
| No Google Business Profile signals on site | Carries 25% of local score weight — blocks local pack |
| No Google Maps embed or "Get Directions" link | Users can't navigate; local pack credibility reduced |
| No local schema (`LocalBusiness`, `areaServed`) | No machine-readable geographic targeting |
| No dedicated location pages | Top-ranked local organic factor (Whitespark 2026) |
| No third-party review platform | "5/5 from 20,000 clients" unverifiable |
| No Facebook Business Page link | Dominant trust signal in Morocco market |
| Zero Tier 1 citations (Pages Jaunes MA, GBP, Facebook) | Citation authority = 0 |

---

## Action Plan

### CRITICAL — Fix This Week

| # | Task | File(s) | Time |
|---|------|---------|------|
| 1 | Replace "Eden Plaza Nettoyage" with "BOY NETTOYAGE PRO" in all 25 service page titles and intro paragraphs | `app/services/[slug]/page.tsx:20` + `lib/services-detail-data.ts` (25 entries) | 30 min |
| 2 | Create `app/robots.ts` with sitemap pointer, allow AI search bots, disallow `/admin` and training scrapers | `app/robots.ts` (new) | 30 min |
| 3 | Create `app/sitemap.ts` covering all 28 URLs (home, /services, /qui-sommes-nous, 25 service slugs) | `app/sitemap.ts` (new) | 1 hr |
| 4 | Add `metadataBase` and per-page `alternates.canonical` to fix canonical split | `app/layout.tsx` + all page metadata | 1 hr |
| 5 | Fix years-of-experience inconsistency: set `YEARS_EXPERIENCE = "10+"` in `utils.ts`, remove hardcoded "10+" in `KeyFigures.tsx` | `lib/utils.ts`, `components/about/KeyFigures.tsx` | 10 min |

### HIGH — Fix Within 1 Week

| # | Task | File(s) | Time |
|---|------|---------|------|
| 6 | Add `CleaningService` / `LocalBusiness` JSON-LD schema to root layout | `app/layout.tsx` | 2 hr |
| 7 | Add `Service` + `BreadcrumbList` JSON-LD to all 25 service pages using `getServiceBySlug()` | `app/services/[slug]/page.tsx` | 2 hr |
| 8 | Set `twitter.card: 'summary_large_image'` and define `og:image` | `app/layout.tsx` | 30 min |
| 9 | Fix Footer service links to point to individual `/services/[slug]` instead of `/#services` | `components/Footer.tsx:73-85` | 30 min |
| 10 | Fix `tel:` hrefs to E.164 format throughout | `components/Footer.tsx`, `B2BContactSection.tsx` | 20 min |
| 11 | Create/verify Google Business Profile and add Google Maps iframe to contact section | GBP dashboard + `B2BContactSection.tsx` | 2 hr |

### MEDIUM — Fix Within 1 Month

| # | Task | File(s) | Time |
|---|------|---------|------|
| 12 | Convert presentational components from `"use client"` to server components | `HeroSection.tsx`, `TestimonialsSection.tsx`, `KeyFigures.tsx`, `AboutTimeline.tsx`, `CTASection.tsx` | 4–8 hr |
| 13 | Refactor `ScrollReveal` to wrap server-rendered content (thin client wrapper) instead of making parent components `"use client"` | `components/ScrollReveal.tsx` | 2 hr |
| 14 | Add city modifier to service page title template ("Casablanca" or service's primary coverage city) | `app/services/[slug]/page.tsx` | 1 hr |
| 15 | Pre-optimize service images: convert all 24 PNG files to WebP (target <100KB each) | `public/services/` | 2 hr |
| 16 | Replace Unsplash hero image with a local branded image in `public/images/` | `components/HeroSection.tsx:113` | 1 hr |
| 17 | Add security headers via `next.config.ts` | `next.config.ts` | 1 hr |
| 18 | Create `public/llms.txt` with structured site description for AI systems | `public/llms.txt` (new) | 1 hr |
| 19 | Expand service descriptions to 134+ words per page for AI citability | `lib/services-detail-data.ts` | 4 hr |

### LOW — Backlog

| # | Task |
|---|------|
| 20 | Create `/faq` page with 10–15 Q&A pairs + `FAQPage` JSON-LD |
| 21 | Build pilot location page `/nettoyage-casablanca` with neighborhood targeting |
| 22 | Add Facebook Business Page and link from footer + `sameAs` in schema |
| 23 | Add IndexNow protocol for instant Bing/Yandex submission on deploy |
| 24 | Add `apple-touch-icon`, `manifest.json`, `theme-color` meta |
| 25 | Add `AggregateRating` schema tied to a linked review platform |

---

## Projected Score After Remediation

| Phase | Tasks | Projected Score |
|-------|-------|----------------|
| Current | — | **34/100** |
| After Critical fixes (tasks 1–5) | Brand fix, robots, sitemap, canonicals | **48/100** |
| After High priority (tasks 6–11) | Schema, social cards, GBP, internal links | **65/100** |
| After Medium priority (tasks 12–19) | SSR migration, images, performance, GEO | **78/100** |
| After Low priority (tasks 20–25) | FAQ, location pages, citations | **88/100** |

---

*Report generated: 2026-03-30 | boy-nettoyage.vercel.app*
