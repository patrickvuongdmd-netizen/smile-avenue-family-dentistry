
# Hero Image Refinement — EducationServiceTemplate

## Problem
Currently both flanking images use the same `SERVICE_IMAGES[slug]` photo — one is just horizontally mirrored. This looks repetitive and unnatural.

## Solution
Use two different images:
- **Left flanking**: The service-specific image (`SERVICE_IMAGES[slug]`) — clinical/procedure photo
- **Right flanking**: A warm office/lifestyle photo from `OFFICE_IMAGES` — shows the practice environment

This creates visual variety: clinical authority on one side, warm hospitality on the other — matching the brand's "hospitality-driven" identity.

## Implementation
1. Import `OFFICE_IMAGES` (already imported via `images.ts`)
2. Create a small array of office lifestyle photos to rotate through (using a hash of the service slug for consistency)
3. Replace the mirrored right image with a different office photo
4. Remove the `scaleX(-1)` mirror transform

## Office photos to use (rotating per service):
- `waitingRoom` — stylish lounge
- `treatmentRoom` — modern operatory  
- `hallway` — clean, modern hallway
- `coffeeStation` — hospitality touch
- `teamPhoto` — team warmth
- `patientCare` — patient interaction

## Files
- `src/components/EducationServiceTemplate.tsx` — hero section only (~5 lines changed)
