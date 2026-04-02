
## Service Template Design Overhaul — Tend-Inspired Consistency

### Design Principles (applied to all 4 templates)
1. **More generous spacing** — increase section padding, card padding, element gaps
2. **Softer section transitions** — replace harsh `section-alt` backgrounds with subtle warm tints; use whitespace instead of borders where possible
3. **Larger editorial typography** — bigger intro text, more line height, serif display headings with more breathing room
4. **Organic visual elements** — softer rounded corners (3xl), subtle shadows, warm accent backgrounds
5. **Flowing content** — less boxy grid layouts for text-heavy sections; more single-column editorial flow
6. **Consistent CTA styling** — unified button treatment across all templates

### Template 1: ServicePageTemplate (geo-targeted, 34 pages)
- **Hero**: Keep split layout but increase spacing, make kicker more editorial (lighter weight), add subtle warm background tint behind image
- **Intro section**: Wider max-width, larger body text (text-lg), remove side photo on mobile — use editorial single-column flow
- **Trust badges**: Soften — remove circular bg, use inline pill style
- **Sub-services grid**: Softer cards — larger padding, remove icon bg circles, use subtle left-border accent instead
- **Process steps**: Number treatment → large serif numbers instead of "STEP 1" labels
- **FAQ**: Keep gradient background but soften the transition into/out of it
- **Location info card**: More generous padding, softer border

### Template 2: BrandServicePageTemplate (authority pages, 17 pages)
- **Hero**: Match ServicePage hero styling for consistency
- **"Why Choose Us" cards**: Softer treatment — less boxy, more whitespace
- **Process steps**: Match the serif-number treatment from ServicePage
- **Location cards**: Warm subtle background tint instead of plain `bg-card`

### Template 3: CategoryPageTemplate (category hubs, 4 pages)
- **Hero**: Add a warm background tint, increase heading size
- **Service cards grid**: Larger cards with more padding, softer hover effect (scale + shadow instead of border change)
- **CTA section**: Replace bare button links with proper location cards matching BrandServicePage style

### Template 4: ComparisonPageTemplate (vs guides, 6 pages)
- **Comparison table**: Softer alternating row colors, rounder corners, warmer header tint
- **Mobile cards**: Match the soft card styling from other templates
- **Verdict section**: Make it more editorial — larger quote-like heading, wider max-width

### Shared Changes
- Add a `section-warm` CSS class for warm tint backgrounds (slightly warmer than `section-alt`)
- Unify kicker styling across all templates (same size, weight, tracking)
- Add `.step-number` class for large serif step numbers
