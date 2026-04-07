
# ServicePageTemplate (Tier 2) Overhaul

## Current Section Order (928 lines)
1. Hero (section-warm)
2. Intro / About (bg-background)
3. Trust Badges (bg-background)
4. Insurance / TabbedInsurance (section-warm)
5. Sub-Services cards (bg-background) — optional
6. Process Steps (section-warm) — optional
7. Meet Your Doctor (bg-background) — single Dr. Vuong card
8. Cost Transparency (bg-background)
9. Watch Video embed (section-warm) — optional
10. Why Choose Us comparison table (bg-background)
11. FAQ split-layout (gradient-cta)
12. Mid-Content CTA (section-warm)
13. Video Carousel (bg-background) — optional
14. Reviews/Testimonials (section-warm)
15. Office Photo Grid (bg-background)
16. Cross-Service Carousel
17. About [Service] in [City] SEO block (section-warm) — optional
18. Location-Specific FAQ (bg-background) — optional
19. Blog (bg-background)
20. Final CTA location card (section-warm)
21. Free Consultation Banner — conditional

**Issues identified:**
- Sections 8–9 are back-to-back bg-background (broken alternation)
- Insurance appears too early (section 4) before patient builds trust
- Meet Your Doctor is hardcoded to Dr. Vuong only — should show location-specific doctors
- Two separate video sections (single embed + carousel) feel redundant
- "Why Choose Us" table is generic/hardcoded — not service-specific
- No "About [Service] in [City]" on most pages (data.aboutInCity rarely populated)
- Blog and Final CTA are adjacent bg sections

---

## Proposed New Section Order (optimized for conversion + local SEO)

1. **Hero** (section-warm) — ✅ keep as-is (already has value props, CTAs, image)
2. **Intro / About** (bg-background) — keep editorial single-column
3. **Trust Badges** — merge INTO the intro section as inline pills below the copy (remove standalone section)
4. **Sub-Services** (section-warm) — move up, optional
5. **Process Steps** (bg-background) — optional
6. **Video Section** (section-warm) — CONSOLIDATE: show carousel if multiple videos, single embed if only videoId, skip if neither
7. **Why Choose Us** (bg-background) — keep comparison table
8. **FAQ** (gradient-cta) — keep split layout
9. **Mid-Content CTA** (section-warm) — booking prompt
10. **Meet Your Doctors** (bg-background) — show ALL doctors for the location, not just Vuong
11. **Reviews** (section-warm) — testimonials + live widget
12. **Cost & Insurance** (bg-background) — MERGE cost transparency + TabbedInsurance into one section
13. **Office Photo Grid** — keep
14. **About [Service] in [City]** (section-warm) — LOCAL SEO BLOCK, auto-generate content if not provided
15. **Location-Specific FAQ** (bg-background) — optional, add geo-targeted FAQs
16. **Blog** (section-warm) — from the blog
17. **Cross-Service Carousel** (bg-background)
18. **Final CTA** (section-warm) — location card

---

## Key Changes

### 1. Hero — Minor Polish
- Add gold star rating to mobile hero (matches desktop)
- Add phone CTA button to mobile hero (currently only Book Now)

### 2. Merge Trust Badges into Intro
- Remove standalone trust badges section (saves vertical space)
- Show as inline pills at the bottom of the intro section

### 3. Consolidate Video Sections
- Remove separate "Watch: [Service] Explained" section
- Use VideoCarousel if SERVICE_VIDEOS exist, fall back to single videoId embed
- Single section, cleaner flow

### 4. Location-Aware Doctor Cards
- Add `doctors` field to ServicePageData (optional, defaults by location)
- Show 2-3 doctors relevant to the location instead of hardcoded Dr. Vuong
- Use horizontal card layout with photo, name, credentials, specialty, and "Meet" link

### 5. Merge Cost + Insurance
- Combine "What Does [Service] Cost?" with TabbedInsurance into one "Pricing & Insurance" section
- Cost copy on top, insurance tabs below, payment option cards at bottom

### 6. Auto-generate About [City] SEO Block
- If `aboutInCity` is not provided, auto-generate a basic block using serviceName + location data
- Ensures every Tier 2 page has a geo-targeted content block for local SEO

### 7. Proper Background Alternation
- Implement dynamic section-background logic (like Tier 1 EducationServiceTemplate)
- Track rendered section index and alternate between section-warm and bg-background

### 8. Mobile Polish
- Add star rating + phone CTA to mobile hero
- Ensure consistent spacing (py-20 for mobile sections instead of py-24)
- Process steps vertical timeline already good

### 9. Enhanced SEO
- Add MedicalWebPage JSON-LD (matching Tier 1)
- Add `sameAs` links to Organization schema
- Ensure LocationSpecific FAQ has its own FAQPage schema
- Add `about` and `mainEntity` to WebPage schema for entity linking
