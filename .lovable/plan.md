

## Sitemap Layout Reorganization

The current sitemap dumps all 8 sections into a flat 3-column grid, making it hard to scan. The two large "Services" sections (17 links each) dominate and create uneven columns.

### Layout Strategy

Group sections into logical rows with visual separators, and use a structured layout that pairs related content side-by-side:

**Row 1 — General (3 columns):** Main Pages | Locations | Team & Doctors

**Row 2 — Cypress (3 columns):** Neighborhoods — Cypress | Services — Cypress (split into 2 columns using a nested 2-col grid since it has 17 items)

**Row 3 — Katy (3 columns):** Neighborhoods — Katy | Services — Katy (split into 2 columns, same treatment)

**Row 4 — Resources (full width):** Patient Resources (displayed as a horizontal multi-column list)

Each row gets a subtle top border separator and a light section label ("General", "Cypress", "Katy", "Resources") for quick scanning.

### Technical Details

- **File:** `src/pages/Sitemap.tsx`
- Restructure data from flat `sections` array into grouped rows
- Replace the single `grid` with multiple row containers separated by `border-t` dividers
- Services sections use a nested 2-column sub-grid so the 17 links split ~9/8 across two columns
- Patient Resources row uses `sm:grid-cols-3 lg:grid-cols-4` to spread links horizontally
- Add row labels as small uppercase tracking-wide text above each group
- Keep all existing links, hrefs, and styling patterns intact

