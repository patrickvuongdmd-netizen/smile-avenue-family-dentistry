

# Tend Page Template Analysis & Adaptation Plan

## How Tend Structures Their Two Page Types

### Page Type 1: Service Education Page (`/services/clear-aligners-invisalign`)
**Purpose**: Brand-wide authority, patient education, conversion to any location.

```text
Section Flow:
┌─────────────────────────────────────────────┐
│ 1. HERO                                     │
│    - Breadcrumb (Services / Service Name)    │
│    - H1: "[Service] at Tend"                │
│    - 3 value props with checkmarks           │
│    - Star rating bar ("Over 8,000 reviews")  │
│    - Book Now + Phone CTA                    │
│    - Flanking lifestyle photos (left+right)  │
├─────────────────────────────────────────────┤
│ 2. LOCATIONS NEAR YOU                       │
│    - Horizontal scrolling location cards     │
│    - Each card: studio name, distance, addr  │
│    - Service-specific booking links          │
├─────────────────────────────────────────────┤
│ 3. PATIENT PHOTO CAROUSEL                   │
│    - Horizontal auto-scroll lifestyle photos │
├─────────────────────────────────────────────┤
│ 4. WHY CHOOSE [SERVICE] AT TEND             │
│    - Paragraph body text                     │
│    - Anchor link to comparison table         │
│    - 4 icon+label feature cards              │
│    (Personalized plan, Invisible, Results,   │
│     No food restrictions)                    │
├─────────────────────────────────────────────┤
│ 5. VIDEO TESTIMONIAL                        │
│    - Embedded Vimeo patient story            │
├─────────────────────────────────────────────┤
│ 6. BEFORE & AFTER CAROUSEL                  │
│    - Slider-based B&A comparison images      │
│    - "Transformed 10,000+ smiles"            │
├─────────────────────────────────────────────┤
│ 7. INSURANCE SECTION (tabbed)               │
│    - "Up to $3,000 covered by insurance"     │
│    - Tab 1: Insurance checker form           │
│    - Tab 2: Carrier list                     │
│    - Logo ticker carousel                    │
├─────────────────────────────────────────────┤
│ 8. COMPARISON TABLE                         │
│    - Braces vs Clear Aligners (6-row table)  │
│    - Side-by-side with lifestyle photo       │
├─────────────────────────────────────────────┤
│ 9. FAQ ACCORDION                            │
│    - 20+ questions, extensive depth          │
│    - Covers cost, process, retainers, care   │
├─────────────────────────────────────────────┤
│ 10. REVIEWS CAROUSEL                        │
│    - 10+ real reviews with name + location   │
├─────────────────────────────────────────────┤
│ 11. PAYMENT OPTIONS                         │
│    - 3-column: Insurance, Pre-tax, Financing │
├─────────────────────────────────────────────┤
│ 12. RELATED BLOG POSTS                      │
│    - Horizontal carousel of 8-10 articles    │
├─────────────────────────────────────────────┤
│ 13. BACK LINK ("Go Back" to services hub)   │
└─────────────────────────────────────────────┘
```

**Key differences from your EducationServiceTemplate**:
- Tend has a **Locations Near You** card strip right after the hero
- Tend includes a **Before & After** carousel (you don't have this)
- Tend has a **tabbed Insurance section** with checker form + carrier list
- Tend uses a **comparison table** (Braces vs Aligners) rather than "Smile Avenue vs Typical Office"
- Tend has a **Payment Options** section (3-column: insurance, HSA/FSA, financing)
- Tend's FAQ section is much deeper (20+ questions vs your 6-8)
- Tend puts **video testimonials** mid-page, not just explainer videos

---

### Page Type 2: Location-Specific SEO Page (`/dentist-studios/new-york-city/invisalign`)
**Purpose**: Maximum local SEO, geo-targeted conversion.

```text
Section Flow:
┌─────────────────────────────────────────────┐
│ 1. HERO (location-specific)                 │
│    - Breadcrumb (Locations / City)           │
│    - H1: "[Service] in **[City]**" (bold)    │
│    - Geo-specific intro paragraph            │
│    - "Read More" expandable text             │
│    - 4 value props with checkmarks           │
│    - Star rating bar                         │
│    - Book Now CTA (anchors to locations)     │
│    - Photo carousel (service + city images)  │
├─────────────────────────────────────────────┤
│ 2. DENTAL STUDIOS IN [CITY]                 │
│    - "View All Locations" link               │
│    - "Open Now" filter toggle                │
│    - Full location cards with:               │
│      · Hours for every day                   │
│      · Rating + review count                 │
│      · Address, phone, Book Now              │
│    - Interactive map with pins               │
├─────────────────────────────────────────────┤
│ 3. INSURANCE SECTION (tabbed)               │
│    - Same as education page                  │
│    - Insurance checker + carrier list        │
│    - Logo ticker                             │
├─────────────────────────────────────────────┤
│ 4. DENTAL SERVICES IN [CITY]                │
│    - Horizontal carousel of all services     │
│    - Each card: title, description, Book CTA │
│    - Cross-links to other services           │
├─────────────────────────────────────────────┤
│ 5. BRAND/PARTNER LOGOS                      │
│    - Invisalign, Simply Clear, Zocdoc, etc.  │
├─────────────────────────────────────────────┤
│ 6. REVIEWS CAROUSEL                         │
│    - Location-specific reviews               │
│    - 20+ reviews with studio attribution     │
├─────────────────────────────────────────────┤
│ 7. ABOUT [SERVICE] IN [CITY] (SEO copy)     │
│    - 3 paragraphs of geo-targeted content    │
│    - Mentions neighborhoods/boroughs         │
│    - Internal links to education page        │
├─────────────────────────────────────────────┤
│ 8. LOCATION-SPECIFIC FAQ                    │
│    - "How much does Invisalign cost in NYC?" │
│    - "Where can I find Invisalign in NYC?"   │
│    - Pricing ranges specific to market       │
│    - Internal links within answers           │
│    - Payment options FAQ                     │
│    - Late cancel/no-show policy              │
└─────────────────────────────────────────────┘
```

**Key differences from your ServicePageTemplate**:
- Tend's location page has a **rich "About [Service] in [City]" SEO copy block** near the bottom with 3+ paragraphs of geo-targeted content and internal links -- this is a major SEO asset you're missing
- Tend's location FAQ is **entirely different from the education FAQ** -- questions are geo-specific ("How much does Invisalign cost in NYC?", "Where can I find an Invisalign dentist in New York?")
- Tend includes a **full services carousel** cross-linking all other services in that city
- Tend does NOT include: process steps, sub-services cards, comparison table, or "Meet Your Doctor" on location pages -- those live on the education page
- Tend's location page focuses on **logistics + trust**: studios, insurance, reviews, SEO copy, geo-FAQ

---

## Recommended Adaptation Plan

### Step 1: Restructure EducationServiceTemplate (Tier 1)

Add these sections (in order) to match Tend's education flow:
- **A. "Find [Service] Near You" location cards** -- move from bottom to right after hero (2 cards: Cypress + Katy with address, phone, book link)
- **B. Before & After section** -- add optional `beforeAfter` data field for services that have B&A images (Invisalign, veneers, whitening, implants)
- **C. Video Testimonial** -- add optional `testimonialVideoId` field for patient story videos (separate from explainer video)
- **D. Tabbed Insurance section** -- replace current cost section with a tabbed "Check your insurance" / "View carriers" layout + insurance logo ticker
- **E. Payment Options 3-column** -- Insurance coverage, HSA/FSA, Financing
- **F. Expand FAQ depth** -- increase to 12-20 questions per service

Remove/restructure:
- Move "Smile Avenue vs Typical Office" comparison table to a more contextual position or keep as differentiator (Tend uses service-specific comparisons like "Braces vs Aligners" instead)

### Step 2: Restructure ServicePageTemplate (Tier 2)

Reorder and modify to match Tend's location page focus:
- **A. Add "About [Service] in [City]" SEO copy block** -- new data field `aboutInCity` with 2-3 paragraphs of geo-targeted content mentioning local neighborhoods, with internal links to education page
- **B. Replace generic FAQ with location-specific FAQ** -- new data field `locationFaqs` with questions like "How much does [service] cost in [City]?", "Where can I find [service] in [City]?"
- **C. Add cross-service carousel** -- "Other Services in [City]" horizontal carousel linking to all other services at that location
- **D. Remove process steps and sub-services** -- these belong on the education page, not the location page (reduces duplication, focuses location pages on local authority)
- **E. Keep Meet Your Doctor card** -- Tend doesn't have this but it's a strong differentiator for a 2-location practice vs a chain

### Step 3: Update Data Files

- Add new fields to `EducationServiceData` type for `beforeAfter`, `testimonialVideoId`, expanded FAQs
- Add new fields to `ServicePageData` type for `aboutInCity`, `locationFaqs`, remove `subServices` and `processSteps` (or make optional)
- Update all 18 service data entries with geo-specific copy and location FAQs

---

## Technical Details

**Files to modify:**
- `src/components/EducationServiceTemplate.tsx` -- add location cards after hero, B&A carousel, video testimonial, tabbed insurance, payment options
- `src/components/ServicePageTemplate.tsx` -- reorder sections, add SEO copy block, location FAQ, cross-service carousel, remove duplicated education content
- `src/lib/education-service-data.ts` -- extend type with new optional fields
- All 34 location service page data files (`src/pages/cypress/*.tsx`, `src/pages/katy/*.tsx`) -- add `aboutInCity` and `locationFaqs` data
- Potentially create new components: `BeforeAfterCarousel`, `TabbedInsurance`, `ServicesCrossLink`

**Estimated scope:** This is a large refactor touching 40+ files. Recommend implementing in phases:
1. Phase 1: Restructure EducationServiceTemplate sections
2. Phase 2: Restructure ServicePageTemplate sections  
3. Phase 3: Populate new data fields across all services

