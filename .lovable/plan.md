
## Full Landing Page Optimization — LandingPageTemplate

### 🚀 Phase 1: Performance

1. **Lazy load below-fold sections** — Wrap Doctors, Testimonials, Videos, Objections, Office Photos, Maps, and FAQ in `LazySection` (200px margin) to defer rendering
2. **Defer Google Maps iframe** — Replace eager iframe with an IntersectionObserver-triggered load (currently loads immediately even when far below fold)
3. **Hero image optimization** — Add `fetchPriority="high"` and `loading="eager"` to hero background; convert from CSS `background-image` to a proper `<img>` tag for browser preloading
4. **Reduce icon imports** — The template imports 9 Lucide icons; consolidate where possible

### 📈 Phase 2: Conversion Rate (CRO)

5. **Add countdown/urgency element** — Add a "Limited same-day slots remaining" urgency indicator near hero CTA
6. **Sticky CTA on scroll** — Add a desktop floating CTA that appears after scrolling past the hero (mobile already has sticky bar)
7. **Mid-page CTA upgrades** — Transform plain text CTAs into visually distinct "card" CTAs with social proof reinforcement (star rating + review count)
8. **Add a "final push" CTA section** — The `finalCtaHeadline` and `finalCtaBody` data fields exist but aren't rendered! Add a cinematic full-width final CTA section before the footer
9. **Social proof enhancement** — Add Google "G" icon to testimonial cards for authenticity (matching site-wide pattern)

### 🎨 Phase 3: Visual Design Refresh

10. **Hero upgrade** — Switch from background-image to a proper `<img>` with a cinematic gradient overlay; increase min-height for desktop; upgrade typography to text-5xl/6xl
11. **Section rhythm** — Alternate `.section-warm` / `bg-background` backgrounds (matching hellotend.com pattern) instead of current inconsistent alternation
12. **Gold accent standardization** — Replace inline `bg-[#D4A853]` dividers with `bg-gold` token; standardize all gold accents
13. **Card design upgrade** — Apply `.card-soft` class to testimonial and objection cards for hover lift consistency
14. **Footer polish** — Add subtle gradient background and more breathing room
15. **Mobile sticky bar refinement** — Upgrade with gold gradient on Book Now side matching CTA system

### Files Changed
- `src/components/LandingPageTemplate.tsx` — All changes in one file (template-level optimization)
