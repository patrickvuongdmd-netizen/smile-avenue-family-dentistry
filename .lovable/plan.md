
# Hero Redesign — EducationServiceTemplate

## Tend's Hero Pattern (from screenshot)
- **Center-aligned** text (not left-aligned 2-col grid)
- **Flanking lifestyle photos** on left and right, partially bleeding off screen edges — creates a cinematic, immersive feel
- Breadcrumb centered above H1
- Large serif H1 centered
- 3 value props with checkmarks, centered
- Star rating bar centered
- Two side-by-side CTAs: "Book Now" (filled) + Phone number (outlined)

## Current State
- 2-column grid: text left, single image right
- Left-aligned text with right hero image
- Dual location booking buttons (Book in Cypress / Book in Katy)

## Proposed Changes

**Layout**: Switch from 2-col grid to **center-aligned hero with flanking photos**
- Center column: breadcrumb → H1 → value props → rating → CTAs
- Left photo: partially visible, positioned absolute, bleeding off left edge
- Right photo: partially visible, positioned absolute, bleeding off right edge
- Photos hidden on mobile (clean centered text-only hero on mobile)

**CTAs**: Keep dual-location "Book in Cypress" / "Book in Katy" buttons (our differentiator vs Tend's single "Book Now"), plus add a phone CTA link below

**Typography**: Use text-4xl md:text-5xl lg:text-6xl for the H1 (bigger, more cinematic)

**Mobile**: Centered text, value props, CTAs stacked — no flanking photos (too narrow). Show hero image below text as a single rounded image.

## Files to modify
- `src/components/EducationServiceTemplate.tsx` — hero section only (lines 117-177)
