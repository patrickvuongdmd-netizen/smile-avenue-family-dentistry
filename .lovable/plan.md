## Streamline Homepage

### Remove these sections:
1. **Service Pill Carousel** — redundant with the Services Card Grid below it. Keep the card grid (it's more visual and informative).
2. **Technology Trust** — merge key points into the Smile Avenue Difference section instead.
3. **Office Photo Grid** — move to the About page (it's better suited there).
4. **Video Testimonials** — remove from homepage (the redesigned testimonial carousel is sufficient). Keep the video content accessible from the Patient Testimonials page.

### Final homepage order (~8 sections):
1. Hero (unchanged)
2. Credibility Bar (unchanged)
3. Services Card Grid (unchanged)
4. Smile Avenue Difference (absorb Technology Trust highlights)
5. FAQ (unchanged)
6. Testimonial Carousel (unchanged)
7. Doctors (unchanged)
8. Free Consultation CTA (unchanged)
9. Blog (unchanged)

### Files changed:
- `src/pages/Home.tsx` — remove 4 sections, reorder remaining
- `src/components/SmileAveneDifference.tsx` — add technology/trust points if not already there
- `src/pages/About.tsx` — add Office Photo Grid here
