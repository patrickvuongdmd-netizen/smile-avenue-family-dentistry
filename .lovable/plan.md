
# ServicePageTemplate SEO & GEO Audit

## ✅ What's Already Done Well
- DentalService JSON-LD with provider, geo, aggregateRating
- MedicalWebPage JSON-LD with SpeakableSpecification
- FAQPage JSON-LD combining general + location FAQs
- BreadcrumbList JSON-LD
- VideoObject JSON-LD for YouTube embeds
- Canonical URLs, OG/Twitter meta, hreflang tags
- robots.txt allowing GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended
- llms.txt with business info and service pages
- Semantic HTML (single H1, proper heading hierarchy, `<main>`, `<nav>`, `<section>`)
- About [Service] in [City] local SEO block
- Location-specific FAQs with geo-targeted content

---

## 🔴 Gaps to Fix (Ranked by Impact)

### 1. Enrich DentalService Schema (HIGH IMPACT)
**Current:** Basic service name + provider address + aggregateRating  
**Missing:**
- `openingHoursSpecification` (structured hours for rich snippets)
- `paymentAccepted` ("Cash", "Credit Card", "Insurance", "CareCredit", "Sunbit")
- `priceRange` ("$$")
- `sameAs` (Google Business, Facebook, Yelp, Instagram links)
- `hasMap` (Google Maps URL)
- `image` (service hero image URL)
- `availableChannel` (online booking link for direct CTA in search)
- `makesOffer` with `Offer` type for the service

### 2. Add Geo Meta Tags (HIGH IMPACT for local)
**Missing entirely.** These are lightweight but powerful for local signal:
```html
<meta name="geo.region" content="US-TX" />
<meta name="geo.placename" content="Cypress, TX" />
<meta name="geo.position" content="29.9691;-95.6972" />
<meta name="ICBM" content="29.9691, -95.6972" />
```

### 3. Enrich MedicalWebPage Schema (MEDIUM-HIGH)
**Missing:**
- `author` → link to founding doctor (Dr. Vuong) with Person schema
- `publisher` → Organization with logo
- `datePublished` / `dateModified` (static dates, not dynamic `new Date()`)
- `inLanguage` ("en" or "es")
- `audience` → `MedicalAudience` (patients)
- `medicalAudience` type specification

### 4. Add `Dentist` Standalone Schema (MEDIUM-HIGH)
Currently the `Dentist` type is nested inside `provider`. For maximum local SEO impact, add a standalone `Dentist` schema with:
- Full practice details
- `sameAs` array (all social/directory links)
- `department` for each location
- `knowsAbout` array of services
- This helps AI engines build a comprehensive entity graph

### 5. Improve Content Structure for AI Readability (MEDIUM - GEO)
**Current issue:** Some content is marketing-heavy. AI engines prefer clear, factual, answer-ready statements.
- Add `itemScope`/`itemProp` microdata to key content sections
- Ensure FAQ answers are complete sentences that can stand alone as AI answers
- Add `aria-label` on sections matching search queries (e.g., `aria-label="Veneers cost in Cypress Texas"`)
- Structure the "About in City" block with entity-rich sentences (landmarks, neighborhoods, doctor names)

### 6. Update llms.txt with Complete Service Coverage (MEDIUM - GEO)
**Current:** Only lists ~8 Cypress geo-targeted pages. Missing all Katy pages and many Cypress services.
**Fix:** Add all 36 location-specific service pages + neighborhood pages

### 7. Add `Review` Schema to Testimonials (LOW-MEDIUM)
**Note:** Google is strict about self-served reviews. Only add if testimonials are from verified Google Reviews (which they are per the data). Add individual `Review` objects linked to the DentalService.

### 8. Add `ItemList` Schema for Sub-Services (LOW)
When sub-services are listed (e.g., "Veneer Options"), wrap them in an `ItemList` schema for potential carousel rich results.

---

## Implementation Plan

**Phase 1 (Template-level, affects all 40 pages):**
1. Enrich DentalService JSON-LD with openingHours, payment, sameAs, hasMap, image, availableChannel
2. Add geo meta tags
3. Enrich MedicalWebPage with author, publisher, datePublished, inLanguage, audience
4. Add standalone Dentist schema
5. Add aria-labels to key sections

**Phase 2 (Content & external):**
6. Update llms.txt with full service coverage
7. Add Review schema for testimonials
8. Add ItemList schema for sub-services

All Phase 1 changes are template-only — one file edit benefits all 40 pages instantly.
