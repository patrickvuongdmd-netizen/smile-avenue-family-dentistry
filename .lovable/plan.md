

## Add Preconnect Hints for Third-Party Resources

### What
Add `<link rel="preconnect">` tags in `index.html` for `img.youtube.com` and `www.localmarketingmanager.com` so the browser establishes early connections (DNS + TCP + TLS) before these resources are needed.

### Changes

**File: `index.html`**
- Add two preconnect links after the existing preconnect block (around line 18):
  ```html
  <link rel="preconnect" href="https://img.youtube.com" />
  <link rel="preconnect" href="https://www.localmarketingmanager.com" />
  ```

Single-file, two-line change.

