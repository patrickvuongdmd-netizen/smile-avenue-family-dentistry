
# Comparison Table Upgrade — EducationServiceTemplate

## Current State
Every service has a generic "Smile Avenue vs Typical Office" 3-column table with `feature`, `smileAvenue`, `typical` fields. This is more of a practice differentiator than a service-specific educational comparison.

## Tend's Approach
Tend uses **service-specific comparisons** — e.g., "Braces vs Clear Aligners" on the Invisalign page — that educate the patient on treatment options, not just practice quality.

## Proposed Upgrade
Add an **optional** `serviceComparison` field to `EducationServiceData` with a flexible structure:

```ts
serviceComparison?: {
  titleA: string;        // e.g., "Clear Aligners"
  titleB: string;        // e.g., "Traditional Braces"
  rows: { feature: string; optionA: string; optionB: string }[];
};
```

When `serviceComparison` is present, render it **above** the existing Smile Avenue vs Typical comparison (or replace it). This gives a two-tier approach:
1. **Service-specific comparison** (educational) — "Which treatment is right for me?"
2. **Practice comparison** (existing) — "Why choose Smile Avenue?"

For services where a comparison doesn't make sense (e.g., dental cleaning), omit `serviceComparison` and keep only the existing table.

## Example service comparisons:
- **Invisalign**: Clear Aligners vs Traditional Braces
- **Dental Implants**: Implants vs Bridges vs Dentures
- **Veneers**: Veneers vs Crowns vs Bonding
- **Teeth Whitening**: Professional vs Over-the-Counter
- **Crowns**: Crowns vs Veneers
- **Dentures**: Dentures vs Implants

## Template Change
In `EducationServiceTemplate.tsx`, section 5 (comparison):
- If `data.serviceComparison` exists, render it first with a clean 2-column table
- Keep existing "Smile Avenue vs Typical" below as a secondary differentiator
- Both use the same card/table styling for consistency

## Files to modify
1. `src/lib/education-service-data.ts` — add `serviceComparison` type + data for Invisalign as first example
2. `src/components/EducationServiceTemplate.tsx` — render new comparison above existing one
