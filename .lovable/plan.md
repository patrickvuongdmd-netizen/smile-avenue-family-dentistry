
## Current Homepage Flow (9 sections)
1. Hero (with location pills, geo-kicker, location-dependent service links)
2. Credibility Bar
3. Services Grid (links to location-specific service pages)
4. Smile Avenue Difference
5. FAQ
6. Testimonials
7. Doctors
8. Free Consultation CTA
9. Blog

## Problem Areas — Too Location-Specific for a Brand Homepage
- **Hero kicker**: "FAMILY DENTIST IN CYPRESS & KATY, TX" — pure SEO, not emotional
- **Location pills** in hero: toggle between Cypress/Katy changes phone, booking URL, and service links — useful but makes the hero feel like a location page
- **Service links**: point to `/{location}-tx/{slug}` — geo-targeted, should point to brand-global `/services/{slug}` pages instead
- **H1**: Good emotional hook ✅ — keep it
- **No tagline/brand moment**: Missing a "Care at Smile Avenue isn't just gentle, it's genuine" moment (TaglineBanner exists but isn't used)

## Proposed Changes

### 1. Hero — Brand-First, Location-Neutral
- **Change kicker** from "FAMILY DENTIST IN CYPRESS & KATY, TX" → something emotional like "5,000+ FAMILIES TRUST US" or "EMPOWERING. EDUCATING. ELEVATING."
- **Remove location pills** from hero — the booking modal already handles location selection
- **Simplify phone**: show a single primary number or remove from hero (sticky bar handles it)
- **Keep** H1, body copy, CTAs, video, star rating

### 2. Services Grid — Link to Brand-Global Pages
- Change service card links from `/{location}-tx/{slug}` → `/services/{slug}`
- Remove `heroLoc` dependency from service links

### 3. Add Tagline Banner
- Insert `TaglineBanner` between Smile Avenue Difference and FAQ for an emotional brand moment

### 4. Add Free Consultation Banner Higher
- Move or duplicate the free consultation CTA earlier (between services and difference, or use FreeConsultationBanner component)

### 5. Reorder for Better Conversion Flow
Proposed new order:
1. Hero (brand-emotional)
2. Credibility Bar
3. Services Grid (brand-global links)
4. Tagline Banner (emotional pause)
5. Smile Avenue Difference
6. Testimonials (move up — social proof before FAQ)
7. Doctors
8. Free Consultation CTA
9. FAQ (move down — objection handling)
10. Blog

### 6. Meta Tags — Keep Geo Keywords
- Title and meta description can still mention "Cypress & Katy" for organic search — that's fine. The *content* just shouldn't feel location-page-ish.

### What We're NOT Changing
- Navbar, Footer, MobileStickyBar, BookingLocationModal (these already handle location logic)
- JSON-LD structured data (keep for SEO)
- Blog section (already brand-global)
