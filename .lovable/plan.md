
# Cross-Linking & Related Services Upgrade

## Current State
Section 12 renders `relatedSlugs` as plain pill-shaped `<Link>` elements with just the service name — no description, no visual hierarchy, no location links.

## Proposed Upgrade

### 1. Add `relatedDescription` map
Add a short one-liner description for each service slug in `education-service-data.ts` (or derive from `heroSubtitle`). We can dynamically pull `heroSubtitle` from `EDUCATION_SERVICES` for each related slug — no new data needed.

### 2. Upgrade Section 12 in `EducationServiceTemplate.tsx`
Replace the plain pills with **rich cards** that include:
- Service name (h3)
- Short description (pulled from the related service's `heroSubtitle`)
- Two small links: "In Cypress →" and "In Katy →" pointing to localized pages
- A primary link to the education page `/services/[slug]`
- Card styling using `card-soft` for consistency

### 3. Layout
- Desktop: 2×2 grid (max 4 related services)
- Mobile: stacked cards

### Files to modify
1. `src/components/EducationServiceTemplate.tsx` — Section 12 only
