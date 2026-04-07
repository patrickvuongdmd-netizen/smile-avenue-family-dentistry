

# Add Video Carousel to EducationServiceTemplate

## Current State
- **ServicePageTemplate** (Tier 2 location pages) has a `VideoCarousel` using `SERVICE_VIDEOS[data.serviceSlug]` — showing 2-3 curated YouTube videos per service
- **EducationServiceTemplate** (Tier 1 education pages) only has two single video embeds: `testimonialVideoId` (patient story) and `videoId` (educational) — no carousel

The `SERVICE_VIDEOS` map in `src/lib/images.ts` already has curated videos for all 18 services, so no new data is needed.

## Recommended Placement

Replace the current single educational video embed (section 5, "Watch: Understanding [Service]") with the full `VideoCarousel`. This consolidates the video content into one richer section while keeping the optional `testimonialVideoId` as a separate patient story section above it.

```text
Current flow:
  4. Video Testimonial (patient story, optional)
  5. Single Video Embed (educational, optional)  ← REPLACE THIS

Proposed flow:
  4. Video Testimonial (patient story, optional)  — stays as-is
  5. Video Carousel (2-3 curated videos)          — replaces single embed
```

This mirrors Tend's approach of rich video content mid-page, and keeps the patient testimonial separate since it serves a different trust-building purpose.

## Technical Changes

**File: `src/components/EducationServiceTemplate.tsx`**
1. Import `VideoCarousel` and `SERVICE_VIDEOS` from existing modules
2. Replace section 5 (single `LazyYouTube` with `videoId`) with `VideoCarousel` using `SERVICE_VIDEOS[data.serviceSlug]`
3. Keep section 4 (testimonial video) unchanged
4. The `videoId` field on `EducationServiceData` becomes unused by this template (can be cleaned up later)

The carousel auto-falls back to a single video display when only one video exists, so no conditional logic is needed.

