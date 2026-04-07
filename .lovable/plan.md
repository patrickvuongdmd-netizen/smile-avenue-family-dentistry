

## Convert logo-mark.png Preload to WebP

### What
The `logo-mark.webp` file already exists in `public/`. The only remaining reference to the PNG version is the preload hint in `index.html`. Switching it to WebP saves ~30-40KB on page load.

### Changes

**File: `index.html`** (1 line)
- Change the preload from `logo-mark.png` (type `image/png`) to `logo-mark.webp` (type `image/webp`):
  ```html
  <link rel="preload" as="image" href="/logo-mark.webp" type="image/webp" />
  ```

No other files reference `logo-mark.png`. The PNG can optionally be deleted from `public/` later.

