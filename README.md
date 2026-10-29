# BidHouse — Auction (mirror + retheme of cki-group.jp)

A 100% mirror of https://www.cki-group.jp/ (WordPress corporate site), rethemed to a premium
auction house ("BidHouse") by changing **content only** — text, images and video.
UI, layout, CSS, classes, HTML structure, JS logic, colours, fonts and spacing are the
original site's, unchanged.

- Source: https://www.cki-group.jp/ (captured 2026-10-29, browser-UA route — plain curl is
  blocked by NinjaFirewall/Cloudflare; a real-browser User-Agent returns 200)
- Live: https://dineshmerugu06.github.io/auction/
- All root-absolute paths rewritten to the `/auction` subpath; the three.js module the
  homepage imports from esm.sh is vendored locally under `vendor/` (with its OBJ/MTL
  loaders) so the WebGL company models under
  `wp/wp-content/themes/standard_sass/models/` load offline.
- See `RETHEME.md` for the full original → auction content mapping.
- Known static-mirror limits: the contact/recruit forms are Contact Form 7 (WordPress
  backend) and cannot submit on GitHub Pages; Google Tag Manager, Google Fonts, TypeSquare
  and jsDelivr (yakuhanjp) remain external CDN dependencies, as on the original site.
  Pages may cache for ~10 minutes — hard-refresh or open a fresh tab after updates.
