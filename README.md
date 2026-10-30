# BidHouse Group — Premium Auction House

The BidHouse Group website: a premium auction house selling fine watches,
motor cars, art, jewellery and wine through live and online sales in
New York and Chicago.

**Live site:** https://dineshmerugu06.github.io/auction/

This site was built by mirroring an existing corporate website in full,
then retheming every word, image and video to the BidHouse auction house.
The layout, design system and behaviour are the original site's; the
content is 100% BidHouse.

## Features added

- **Full static mirror** — 45 pages captured and rebuilt as plain static
  HTML, hosted on GitHub Pages under `/auction/` (no build step, no server).
- **Auction retheme** — 334 text strings rewritten to the auction house
  (Live Auctions, Featured Lots, Bidding Guide, The Saleroom, Private
  Sales, News & Results) and 254 images swapped in place at their exact
  original dimensions, plus a new hero film (gavel + paddle clips,
  `assets/media/2025/10/movie.mp4`, 1920×1080).
- **WebGL hero models, vendored locally** — Three.js and the OBJ/MTL
  models are bundled in this repo, so the 3D hero works fully offline,
  with no CDN dependency.
- **Brand-trace cleanup** — every leftover trace of the previous identity
  removed: page slugs, file names, CSS class names, form ids,
  percent-encoded links and metadata were all renamed to BidHouse.
- **Folder reorganization** — the old `wp/` tree was replaced with a
  plain `assets/` layout (see the codebase map below) without changing
  any page URL.
- **Outlined-text SVG fix** — the homepage commitment graphic carried its
  headline as invisible vector outlines; it is now real text
  ("BIDHOUSE GROUP — Your end-to-end auction partner") inside the blue
  circle.
- **Warm-paper background restyle** — the old black stage behind every
  section was replaced with one flat warm-paper ground (`#F7F7F4`), one
  ink (`#202A36`) and one accent blue (`#116ABC`), flat colour only, no
  gradients. Implemented as one clearly commented override block at the
  end of `assets/theme/css/style.css` (search for `BidHouse paper
  restyle`), so it can be reverted by deleting that block.
- **Forms** — the Contact Form 7 forms render and validate in the
  browser. On a static host they cannot send mail (known limit, below).

## Codebase map

Page folders at the top level **are the URLs**: each folder name is its
path on the site and holds one `index.html`.

| Path | What it is |
| --- | --- |
| `index.html` | The home page |
| `about-bidhouse/`, `about-saleroom/`, `about-group/` | About pages: BidHouse Inc., the Saleroom, the Group |
| `product/`, `service/`, `solution/`, `technology/`, `equipment/` | Lots, services and expertise pages |
| `news/` | News & Results — by category (`community/`, `safety/`, `careers/`, `benefits/`, `others/`) and by year (`date/`) |
| `recruit/` | Careers — job listings (`job/`), application form (`entry/`) |
| `contact/`, `privacy/`, `philosophy-message/`, `sitemap/` | Contact, privacy policy, message from the house, site map |
| `assets/theme/` | The design system: all CSS, JS, images, logos, 3D models |
| `assets/theme/css/style.css` | The one stylesheet for the whole site (11,000+ lines, prettified). Colour variables live in `:root` at the top; the **paper-restyle override block** is at the very end |
| `assets/theme/css/print.css`, `style-c.css` | Print styles; an empty stylesheet kept because pages still link it |
| `assets/theme/dist/js/` | Page scripts (minified build output): `common.min.js` (every page), `home.min.js` (home only), `contact.min.js`, `not-home.min.js`, `not-contact.min.js`, `single-archive.min.js` |
| `assets/theme/js/plugins/` | Animation libraries: GSAP, ScrollTrigger, Splide (sliders) |
| `assets/theme/images/` | Theme images and logos (`logo-bidhouse-row.svg`, `logo-saleroom-row.svg`, section photos) |
| `assets/theme/models/model-bidhouse/`, `model-saleroom/` | The WebGL hero models (`model.obj` + `model.mtl` + `texture.png`) |
| `assets/theme/style.css` | Theme header/description file (legacy theme metadata, not the site's styles) |
| `assets/media/YYYY/MM/` | Every photo and video used in page content, by year/month. Hero film: `assets/media/2025/10/movie.mp4` |
| `assets/plugins/` | Form scripts: `contact-form-7`, `cf7-conditional-fields`, `akismet` |
| `assets/core/` | Library JavaScript the pages load: jQuery + core dist JS |
| `assets/vendor/` | Three.js for the WebGL hero: `three.mjs`, `OBJLoader.mjs`, `MTLLoader.mjs` |
| `favicon.ico`, `apple-touch-icon.png` | Browser / home-screen icons |
| `.nojekyll` | Tells GitHub Pages to serve the files exactly as-is (no Jekyll processing) |
| `.gitignore` | Keeps `node_modules` out of the repo |

## How it works

- **Static HTML per page.** Every page is a complete HTML file with the
  shared header/footer markup written into it — there is no templating
  or build step. Editing one page never affects another.
- **One fixed background stage.** Behind the content sits a fixed,
  full-screen stage (`.parallax_box--bg`) that all transparent sections
  show through: a flat blue field at the top of the page that crossfades
  to the paper ground as you scroll. The restyle override block in
  `style.css` controls its colours.
- **Animation.** GSAP + ScrollTrigger drive the scroll animations
  (headline reveals, the commitment circle animation, parallax);
  Splide runs the sliders. All wired in `assets/theme/dist/js/`.
- **WebGL hero.** `home.min.js` loads Three.js from `assets/vendor/`
  and the OBJ/MTL models from `assets/theme/models/`, all local files.
- **Forms are front-end only.** They render and validate in the
  browser, but GitHub Pages cannot receive submissions or send mail.

## How to edit

- **Change text** — open the page's `index.html` and edit the HTML.
- **Swap an image** — replace the file in `assets/media/` (or
  `assets/theme/images/`) keeping the same file name and dimensions.
- **Change colours** — edit the CSS variables in `:root` at the top of
  `assets/theme/css/style.css`. For the background restyle, edit (or
  delete, to revert) the `BidHouse paper restyle` block at the file's
  end.
- **Change the hero video** — replace `assets/media/2025/10/movie.mp4`.
- **Run locally** — `python3 -m http.server` in this folder, then open
  `http://localhost:8000/` (serve it, don't open the file directly —
  the WebGL models need http).
- **Deploy** — push to `main`. GitHub Pages publishes automatically;
  allow a few minutes, then hard-refresh (Pages caches aggressively).

## Verification notes

- Every internal reference in the site was machine-checked after the
  mirror, cleanup and reorganization (9,399 references, 0 unresolved).
- The restyle was verified with browser screenshots of the home page
  (full scroll, desktop + phone width) and the about, product, contact,
  recruit and news pages before and after.
- The prettified stylesheet was proven token-identical to the minified
  original (whitespace-stripped comparison) and renders pixel-identical.
- Live deploys are verified by comparing the live files' MD5 hashes
  against the local copies.
