
# SEO & Performance Improvement Plan — Phase 3

## 🔴 Critical: Core Web Vitals

### A. Image Optimization (LCP Impact)
**Finding:** Doctor photos are 1MB+ PNGs (patrick-vuong.png = 1,268KB, peter-kim.png = 1,053KB). These load on every Tier 2 service page in the "Meet Your Doctors" section.
- **Fix:** Convert all doctor/team PNGs to WebP (typically 70-80% smaller)
- **Impact:** 3-4MB → ~800KB total image payload, directly improves LCP

### B. Route-Level Code Splitting (FCP Impact)
**Finding:** 0 lazy-loaded routes in App.tsx — the entire 122-route app bundles together.
- **Fix:** Wrap all page imports with `React.lazy()` + `Suspense`
- **Impact:** Initial JS bundle drops significantly, improving FCP from 7s to ~2-3s

### C. blog-data.ts (127KB) Loaded on Every Page
**Finding:** Blog data file is 127KB and takes 1.3s to load. It's imported by templates that show "Related Blog Posts" on every service page.
- **Fix:** Lazy-import blog data only when the blog section scrolls into view, or split into per-category chunks
- **Impact:** Reduces initial parse/execute time

### D. Review Widget iframe (3.4s)
**Finding:** External review widget iframe from localmarketingmanager.com takes 3.4s
- **Fix:** Already lazy-loaded, but consider intersection observer delay or placeholder skeleton
- **Impact:** Minor — doesn't block LCP but affects perceived load

---

## 🟡 Medium: Content & SEO Gaps

### E. Standalone Pages Missing JSON-LD (6 pages)
**Finding:** Contact, Insurance, Specials, MembershipPlan, NewPatientHub, DentalLab — all missing JSON-LD structured data.
- **Fix:** Add appropriate schemas:
  - Contact → `ContactPage` + `Dentist`
  - Insurance → `WebPage` + `Dentist`
  - Specials → `WebPage` + `Offer` objects
  - MembershipPlan → `WebPage` + `Offer`
  - NewPatientHub → `WebPage`
  - DentalLab → `WebPage` + `DentalService`

### F. PatientTestimonials Missing H1
**Finding:** The testimonials page has no `<h1>` tag — critical for SEO heading hierarchy.
- **Fix:** Add proper H1

### G. LandingPageTemplate Has 0 Internal Links
**Finding:** Google Ads landing pages have no internal links back to the main site.
- **Fix:** Add footer links or a "Learn More" link to the parent service page (balance conversion vs. SEO)

---

## 🟢 Nice-to-Have: Performance & Linking

### H. Preconnect/Prefetch Optimization
**Current:** 5 preconnects, 0 prefetches, 2 preloads
- **Fix:** Add `prefetch` for the most common next-page navigations (e.g., booking URL, top service pages)
- Add `preconnect` to `img.youtube.com` and `localmarketingmanager.com`

### I. lucide-react (157KB)
**Finding:** Full icon library loaded (157KB). Only ~10 icons are used per page.
- **Fix:** Tree-shaking should handle this in production build. Verify production bundle size.

### J. DOM Complexity
**Current:** 2,046 nodes, depth 14 — within acceptable range (Google recommends <1,500 but <3,000 is fine)
- **Status:** No action needed

### K. CLS Score
**Current:** 0.0044 — excellent (threshold is 0.1)
- **Status:** No action needed ✅

---

## Recommended Priority Order

1. **Route code splitting** (B) — biggest FCP win, template-level change
2. **Doctor image WebP conversion** (A) — biggest LCP win
3. **Standalone page JSON-LD** (E+F) — quick SEO wins
4. **Blog data lazy loading** (C) — reduces parse time
5. **Internal linking improvements** (G) — minor SEO signal
6. **Prefetch optimization** (H) — minor performance gain

Shall I start implementing? I'd recommend tackling #1 (code splitting) and #2 (WebP images) first as they have the highest performance impact.
