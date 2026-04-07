
# Section Ordering & Flow Optimization — EducationServiceTemplate

## Current Flow (14 sections)
```
1.  HERO (center-aligned, CTAs)
2.  FIND NEAR YOU (location cards)
3.  WHAT IS [SERVICE]? (educational copy)
4.  VIDEO TESTIMONIAL (patient story, optional)
5.  VIDEO CAROUSEL (curated videos)
6.  WHO NEEDS [SERVICE]? (checklist)
7.  PROCESS STEPS (4-step timeline)
8.  INSURANCE (tabbed)
9.  COMPARISON TABLE (Smile Ave vs Typical)
10. FAQ (dark gradient)
11. PAYMENT OPTIONS (3-column)
12. RELATED BLOG POSTS
13. RELATED SERVICES
14. FINAL CTA
```

## Problems with Current Flow
- **Two video sections back-to-back** (4 + 5) — feels repetitive, breaks narrative momentum
- **Insurance and Payment Options are separated** by FAQ — should be consolidated since they serve the same "affordability" intent
- **Comparison table is buried** at section 9 — this is a key differentiator that should come earlier while the user is still evaluating
- **"Who Needs" comes after videos** — should be earlier when the user is still in "is this for me?" mindset
- **FAQ at section 10** is quite late — per your memory, it should act as a "visual anchor" in the middle-to-upper third

## Proposed Optimized Flow
```
1.  HERO (center-aligned, CTAs)
2.  FIND NEAR YOU (location cards) — immediate action
3.  WHAT IS [SERVICE]? (educational copy) — establish authority
4.  WHO NEEDS [SERVICE]? (checklist) — "is this for me?" 
5.  COMPARISON TABLE (Smile Ave vs Typical) — convince while evaluating
6.  VIDEO CAROUSEL (curated videos) — visual proof mid-page
7.  PROCESS STEPS (4-step timeline) — "what happens next"
8.  FAQ (dark gradient) — visual anchor, upper-mid page
9.  VIDEO TESTIMONIAL (patient story) — social proof after FAQ
10. INSURANCE + PAYMENT (consolidated) — affordability section
11. RELATED BLOG POSTS — deeper learning
12. RELATED SERVICES — cross-linking
13. FINAL CTA
```

## Key Changes
- **Moved "Who Needs" up** to right after "What Is" — keeps the educational narrative flowing (What → Who → Why Us)
- **Moved Comparison Table up** to section 5 — key persuasion while user is still evaluating
- **Consolidated Insurance + Payment** into one section — reduces scroll fatigue
- **Moved FAQ higher** to section 8 — acts as visual anchor in upper-mid page per design memory
- **Video Testimonial after FAQ** — social proof reinforcement after addressing objections
- **Eliminated back-to-back video sections** — carousel at 6, testimonial at 9
- **Dropped from 14 sections to 13** by merging Insurance + Payment

## Files to modify
- `src/components/EducationServiceTemplate.tsx` — reorder sections only, no content changes
