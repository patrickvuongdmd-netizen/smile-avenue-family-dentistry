

## Remove mobile header divider line

The thin divider line beneath the mobile header comes from `border-b border-border/60` on the `<nav>` element in `src/components/Navbar.tsx` (line 144).

**Change**: Remove `border-b border-border/60` from the nav's className, keeping the subtle shadow for depth. This removes the visible line on both mobile and desktop — the shadow alone provides enough separation.

**File**: `src/components/Navbar.tsx`, line 144
- Remove: `border-b border-border/60`
- Keep: `shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]`

