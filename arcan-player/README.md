# Arcan Player official site

Static, bilingual (English/Spanish) pages for Arcan Player. There is no application server, database, payment integration, or API in this directory.

## Pages

- `/arcan-player/` — Home
- `/arcan-player/privacy/` — Privacy Policy
- `/arcan-player/terms/` — Terms and Conditions
- `/arcan-player/support/` — Support and FAQ

This folder is published from the existing `proyectoja.github.io` GitHub Pages site, so its public base path includes `/arcan-player/`. The legal and support pages use directory index files so refreshing their trailing-slash URLs works on GitHub Pages.

## Before publishing

1. Set `SITE_CONFIG.supportEmail` in `site.js` to the administrator-approved public support address. Until then, the pages show a bilingual configuration notice and no mail link.
2. Set `SITE_CONFIG.rokuStoreUrl` only after the official public Roku Streaming Store listing is available. The site accepts only an HTTPS Roku URL; otherwise it shows “coming soon.”
3. The Roku repository currently provides the original logo and app startup artwork, but no real Roku interface capture. The home page uses the startup artwork and labels it accurately; replace it with a genuine app screenshot if one is supplied.
4. Confirm that the planned USD $2.99 monthly price is the price to publish. Roku Pay displays the final purchase terms to the viewer.

The page language defaults to English. The visible language selector switches all site copy to Spanish and remembers the selection in local browser storage. No third-party fonts or runtime dependencies are used.
