

## Plan: Brand-Global Service Pages + Footer Accordion Redesign

### What we're building

**Two deliverables:**

1. **17 brand-global service pages** at `/services/{slug}` (e.g., `/services/dental-implants`, `/services/emergency-dentist`) — educational authority pages that sit above the geo-targeted pages in the content hierarchy
2. **Footer accordion redesign** — replace the flat service list with categorized expandable groups cross-linking every service to both Cypress and Katy pages

### Part 1 — Brand-Global Service Template

**New file: `src/components/BrandServicePageTemplate.tsx`**

A new template distinct from `ServicePageTemplate` (which is location-specific). This template is designed for non-geo content authority:

- **No single office phone/address/booking** — instead shows a "Two Locations" section with both Cypress and Katy cards (phone, address, booking link for each)
- **Breadcrumb**: Home > Services > {Service Name}
- **Canonical URL**: `/services/{slug}/`
- **Content sections**: Hero (educational tone, no location qualifier), What Is It explainer, Why Choose Smile Avenue, Process Steps, FAQ, Location Cards (Cypress + Katy with CTAs), Related Services
- **SEO**: DentalService schema without location specifics, FAQPage schema, BreadcrumbList schema
- **Internal linking engine**: Each page links down to both `/cypress-tx/{slug}` and `/katy-tx/{slug}` pages, creating the topical cluster hub
- **Reuses existing data**: Pulls FAQ content, process steps, sub-services from a shared data structure to avoid duplicating the geo-page content verbatim (content will be rewritten for brand-global tone)

**Interface**: Similar to `ServicePageData` but with `location` removed and `locationCards` added:
```text
BrandServicePageData {
  serviceSlug, serviceName, metaTitle, metaDescription,
  heroKicker, heroHeading, heroBody, heroImage,
  introKicker, introHeading, introParas,
  subServicesHeading, subServices[],
  processHeading, processSteps[],
  faqHeading, faqs[],
  relatedServices[]
}
```

### Part 2 — 17 Brand-Global Service Pages

**New files** (one per service) in `src/pages/services/`:

| File | Route |
|------|-------|
| `EmergencyDentist.tsx` | `/services/emergency-dentist` |
| `DentalImplants.tsx` | `/services/dental-implants` |
| `CosmeticDentistry.tsx` | `/services/cosmetic-dentistry` |
| `TeethWhitening.tsx` | `/services/teeth-whitening` |
| `DentalCrowns.tsx` | `/services/dental-crowns` |
| `AllOnX.tsx` | `/services/all-on-x-implants` |
| `Invisalign.tsx` | `/services/invisalign` |
| `RootCanal.tsx` | `/services/root-canal` |
| `DentalCleaning.tsx` | `/services/dental-cleaning` |
| `PediatricDentistry.tsx` | `/services/pediatric-dentistry` |
| `Dentures.tsx` | `/services/dentures` |
| `Veneers.tsx` | `/services/veneers` |
| `DentalBridges.tsx` | `/services/dental-bridges` |
| `ToothExtraction.tsx` | `/services/tooth-extraction` |
| `OralSurgery.tsx` | `/services/oral-surgery` |
| `SedationDentistry.tsx` | `/services/sedation-dentistry` |
| `PreventiveDentistry.tsx` | `/services/preventive-dentistry` |

Each page is a data file that feeds `BrandServicePageTemplate`, with:
- Brand-global educational copy (no "in Cypress" or "in Katy" in H1/title)
- Unique FAQs or lightly adapted versions from the geo pages
- Links to both geo pages as "Find This Service Near You" cards at the bottom

### Part 3 — Update `/services` Hub Page

**Edit: `src/pages/Services.tsx`**

- Change all service card `href` values from `/cypress-tx/{slug}` to `/services/{slug}` so the hub links to brand-global pages (which then link down to geo pages)
- This creates the proper hierarchy: `/services` → `/services/{slug}` → `/cypress-tx/{slug}` + `/katy-tx/{slug}`

### Part 4 — Footer Accordion Redesign

**Edit: `src/components/Footer.tsx`**

Replace the Services column with categorized Radix Accordion:

```text
┌─────────────────────────────┐
│ Services                    │
│ All Services →              │
│ ▸ Preventive & General      │
│   ├ Preventive Dentistry    │
│   │  Cypress · Katy         │
│   ├ Dental Cleaning         │
│   │  Cypress · Katy         │
│   ├ Children's Dentistry    │
│   │  Cypress · Katy         │
│   └ Emergency Dentistry     │
│      Cypress · Katy         │
│ ▸ Cosmetic & Aesthetic      │
│ ▸ Restorative & Advanced    │
│ ▸ Surgical & Periodontal    │
└─────────────────────────────┘
```

- 4 accordion categories, multi-expand enabled
- Each service shows its name (linking to `/services/{slug}`) with two indented sub-links: "Cypress" → `/cypress-tx/{slug}`, "Katy" → `/katy-tx/{slug}`
- "All Services" link at top pointing to `/services`
- Uses Radix Accordion (already installed) with dark-themed styling matching the footer

### Part 5 — Routing, Sitemap, SEO Updates

**Edit: `src/App.tsx`**
- Add 17 lazy imports for `src/pages/services/*.tsx`
- Add 17 routes at `/services/{slug}`

**Edit: `src/pages/Sitemap.tsx`**
- Add a "Brand Services" section listing all 17 `/services/{slug}` pages

**Edit: `public/sitemap.xml`**
- Add 17 new URLs

**Edit: `public/llms.txt`**
- Add brand service pages section

### Part 6 — Cross-Linking from Geo Pages

**Edit: `src/components/ServicePageTemplate.tsx`**
- Add a breadcrumb level: Home > Services > {Service Name} > in {Location}, TX
- This passes authority from the brand-global page down to geo pages

### Summary of changes

- **1 new template**: `BrandServicePageTemplate.tsx`
- **17 new pages**: `src/pages/services/*.tsx`
- **5 edited files**: `Footer.tsx`, `Services.tsx`, `App.tsx`, `Sitemap.tsx`, `ServicePageTemplate.tsx`
- **2 edited assets**: `sitemap.xml`, `llms.txt`

This creates a three-tier content architecture that surpasses Tend's two-tier approach by adding the geo-qualified layer they lack.

