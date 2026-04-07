

## Tend Homepage Flow Analysis

Here is the complete section-by-section breakdown of hellotend.com's homepage, followed by a comparison with your current Smile Avenue homepage and a plan to close the gaps.

---

### Tend's Homepage Flow (10 sections)

```text
1. Trust Ticker        - scrolling brand values ("Soothing studios", "No judgment ever", etc.)
2. Hero                - large headline, sub-copy, two CTAs (Book Now + Phone), flanked by lifestyle photos
3. Services Carousel   - horizontal scroll of service pills (Dental Exams, Emergency, Oral Hygiene...)
4. Photo/Video Looper  - full-width lifestyle video loop of patients and office
5. The Difference      - 2-col: office photo + copy with bullet list of perks + "8,000+ five star reviews" + Book Now CTA
6. Testimonials        - dark-card carousel with quotes, stars, name, location
7. Locations/Studios   - city tabs with map, studio cards, hours, ratings
8. Insurance           - tabbed section: insurance checker form + carrier list + logo carousel
9. Clinical Team       - oval photo + value props (decades of experience, science-based care, outcomes not quotas, safety first) + "Meet Our Clinical Team" CTA + team photo carousel
10. Blog + Press       - blog carousel + press logo ticker (Forbes, NYT, WSJ, etc.)
```

### Your Current Smile Avenue Flow (10 sections)

```text
1. Trust Ticker
2. Hero
3. Credibility Bar
4. Services Grid
5. Smile Avenue Difference
6. Testimonials
7. Doctors
8. Insurance Checker
9. Free Consultation CTA
10. FAQ
11. Blog (desktop only)
```

---

### Gap Analysis

| Area | Tend | Smile Avenue | Gap |
|------|------|-------------|-----|
| **Photo/Video moment** | Full-width lifestyle video loop between services and difference | Video only in desktop hero | Missing a standalone visual "vibe" section |
| **Services format** | Horizontal scrolling pills (minimal, sleek) | Card grid with icons and descriptions | Your grid is more informative but heavier |
| **Locations section** | Interactive map + studio cards with hours/ratings | Not on homepage (separate /locations page) | Missing — big trust builder |
| **Team section** | Oval photo + value props (experience, science, outcomes, safety) | Small circular headshots in a grid | Tend's feels more premium and story-driven |
| **Press/Social proof** | Press logo ticker (Forbes, NYT, WSJ) | Credibility Bar (review counts) | Missing press/media logos |
| **Insurance** | Tabbed: checker + carrier list + logo carousel | Checker form only | Missing carrier logos and tabbed UX |
| **FAQ** | Not on homepage | On homepage (dark section) | You have this; Tend doesn't |
| **Free Consultation CTA** | Not on homepage (built into booking flow) | Dedicated CTA banner | You have this; Tend doesn't |

---

### Recommended Homepage Redesign Plan

**New section order, inspired by Tend but adapted for Smile Avenue's strengths:**

```text
 1. Trust Ticker                    (keep as-is)
 2. Hero                            (keep current — already Tend-inspired)
 3. Credibility Bar                 (keep — your equivalent of Tend's "8,000+ reviews")
 4. Services Carousel               (NEW — replace grid with horizontal scrolling pills)
 5. Full-Width Video/Photo Moment   (NEW — lifestyle video loop or office photo carousel)
 6. Smile Avenue Difference         (keep — matches Tend's "Difference" section)
 7. Testimonials Carousel           (keep — already Tend-style dark cards)
 8. Locations Section               (NEW — 2 studio cards with map, hours, phone, ratings)
 9. Insurance + Carriers            (UPGRADE — add tabbed view with carrier logos)
10. Doctors / Clinical Team         (UPGRADE — oval photo + value props layout instead of grid)
11. Free Consultation CTA           (keep)
12. Blog                            (keep)
13. Press Logo Ticker               (NEW — add if you have any press mentions)
```

**Move FAQ off the homepage** — it slows conversion and Tend doesn't use it here. Keep it accessible via nav/footer.

---

### Implementation Details

**Step 1 — Services Carousel (replace grid)**
- New component: horizontal scroll of rounded pill-style links
- Each pill = service name, links to `/services/{slug}`
- Prev/Next arrows, auto-scroll optional
- Lighter and faster than the current card grid

**Step 2 — Full-Width Video/Photo Section**
- New component between services and difference
- Reuse your `HERO_VIDEO_URL` or `OFFICE_IMAGES` in a full-bleed layout
- Autoplay, muted, looped video or a photo carousel

**Step 3 — Locations Section**
- New component showing Cypress + Katy studio cards side by side
- Each card: address, phone, hours, star rating, "Book Now" + "Call" CTAs
- Optional embedded map or static map image

**Step 4 — Upgrade Insurance Section**
- Add tabs: "Check Your Insurance" (current form) | "Our Carriers" (logo list)
- Add insurance logo carousel below

**Step 5 — Upgrade Doctors Section**
- Replace 6-across headshot grid with a 2-col layout:
  - Left: large oval/rounded photo of lead doctor or team
  - Right: value prop bullets (experience, outcomes, safety, science-based care)
- "Meet Our Clinical Team" CTA below
- Optional team photo carousel strip

**Step 6 — Remove FAQ from homepage**
- Delete FAQ section from `Home.tsx`
- FAQ remains accessible at `/faq` and via footer links

**Step 7 — Add Press Logo Ticker (optional)**
- If you have any press mentions, add a simple logo carousel before the footer
- Similar to Tend's "In the press" section

---

### What stays the same
- Trust Ticker, Navbar, Footer, MobileStickyBar, BookingLocationModal
- Hero section (already updated)
- Credibility Bar
- Smile Avenue Difference section
- Testimonial Carousel (TendStyleCarousel)
- Free Consultation CTA
- Blog section
- All SEO/structured data

