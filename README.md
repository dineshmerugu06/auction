# BidHouse Group — Premium Auction House

The BidHouse Group website: a premium auction house selling fine watches,
motor cars, art, jewellery and wine through live and online sales.

**Live site:** https://dineshmerugu06.github.io/auction/

A fully static website — plain HTML, CSS and JavaScript with no build step
and no server-side code — designed and built as a ten-page site and hosted
on GitHub Pages under `/auction/`.

## The design

An award-style editorial design system built around three colours and one
typeface family pairing:

- **Warm ivory** `#FAF7F0` — the paper ground every page sits on
- **Ink** `#202A36` — text, the hero field and the fullscreen menu
- **Bordeaux** `#701E2C` — accent only: kickers, rules, underlines, the
  commitment circle
- **Fraunces** (serif) for display type, a clean sans for body text

Signature pieces:

- **Poster hero** — a near-invisible top bar, a numbered kicker
  (№ 01 — Live Auctions), the season line set at poster size in Fraunces
  with masked line-by-line reveals, one lit photograph (the auctioneer's
  gavel) offset inside a hairline frame, a catalogue-style lot label, and a
  stat row (248 lots).
- **Fullscreen menu** — the slim bar's MENU button opens a full-screen ink
  overlay: six oversized Fraunces links with bordeaux numbers, a
  duotone photograph strip, and a caps micro-label footer row.
- **Chapter-opener banners** — every inner page opens the same way:
  numbered bordeaux kicker, a huge ink Fraunces title, a 1px bordeaux
  rule, quiet breadcrumbs, then the photograph full-bleed.
- **Ruled index** — the Business section is a hairline-ruled index list
  (number, name, arrow) instead of a card grid.
- **Catalogue numbering** — sections are numbered like lots (№ 01–07 on
  the home page, cluster numbers on inner pages) with estimates and lot
  data set as large Fraunces numerals.
- **Motion discipline** — one motion system site-wide (masked reveals and
  slow image un-crops, transform/opacity only), with a
  `prefers-reduced-motion` path that turns it off.

## Features

- Ten pages, all hand-finished in the same design system (see map below)
- GSAP + ScrollTrigger scroll animations and Splide sliders throughout
- Hero film (gavel and paddle clips, `assets/media/2025/10/movie.mp4`)
- Contact and entry forms with conditional fields (rendered statically;
  form submission needs a form backend, so on static hosting the forms
  are for display)
- Fully responsive — the design is checked phone-first at 390px

## Tech stack

- Static HTML / CSS / JavaScript — no framework, no build step
- GSAP 3 + ScrollTrigger (scroll choreography), Splide (sliders)
- jQuery + Contact Form 7 front-end scripts for the forms
- Fonts: Fraunces + the body sans, loaded from Google Fonts
- Hosting: GitHub Pages

## Repository map

Pages (10):

| Path | Page |
|---|---|
| `index.html` | Home — poster hero, commitment, business index, strengths, join us, about, news |
| `about-bidhouse/` | The House — company profile and access |
| `service/` | Live Auctions (business cluster index) |
| `product/` | Featured Lots |
| `solution/` | Private Sales |
| `news/` | News & Results |
| `recruit/` | Join Our Team — careers |
| `recruit/entry/` | Application entry form |
| `contact/` | Contact form |
| `privacy/` | Privacy policy |

Assets:

| Path | What it is |
|---|---|
| `assets/theme/css/style.css` | The one stylesheet for the whole site. Colour variables live in `:root` at the top; restyle blocks are appended at the end in clearly commented sections |
| `assets/award.js` | The award-style layer: injects the slim bar, the fullscreen menu, the home poster hero, the ruled index and the section kickers on every page. It derives its base path from its own script URL, so the same file works under any prefix |
| `assets/theme/js/`, `assets/theme/dist/js/` | Theme behaviour (scroll stage, sliders, page scripts) |
| `assets/theme/images/` | Theme imagery (hero stills, section photography) |
| `assets/media/` | Page photography and the hero film, organised by year/month |
| `assets/plugins/` | Form plug-in front-end assets (Contact Form 7, conditional fields) |
| `assets/core/` | Core libraries (jQuery and support scripts) |
| `favicon.ico`, `apple-touch-icon.png` | Site icons |

## Run locally

No build step. Serve the folder with any static server, keeping the
`/auction/` prefix so absolute paths resolve:

```sh
mkdir -p /tmp/webroot && ln -sfn "$PWD" /tmp/webroot/auction
python3 -m http.server 8901 --directory /tmp/webroot
# open http://localhost:8901/auction/
```

## How to edit

- **Colours and type:** change the `:root` variables at the top of
  `assets/theme/css/style.css` — the whole site follows the tokens.
- **Design-system rules:** the restyle sections are appended at the very
  end of `style.css` in commented blocks (paper ground, bordeaux identity,
  award style). Add new rules in a new block at the end; do not rewrite
  the base theme rules above them.
- **Bar, menu, hero, kickers:** edit `assets/award.js` — one file drives
  the chrome on all ten pages, so a change there lands everywhere.
- **Cache stamp (important):** pages load the stylesheet as
  `style.css?v=paper8`. Phones cache the old CSS hard — **bump the stamp
  on every stylesheet change** (`paper9`, `paper10`, …) in every page, or
  returning visitors keep the old design.
- **Photography:** page images live in `assets/media/`; swap a file
  in place (same name and dimensions) to replace a photo site-wide.
