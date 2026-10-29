# BidHouse Group — Premium Auction House

The BidHouse Group website: a premium auction house selling fine watches,
motor cars, art, jewellery and wine through live and online sales in
New York and Chicago.

**Live site:** https://dineshmerugu06.github.io/auction/

## What's on the site

- **Home** — featured sales, the evening sale film, BidHouse in numbers
- **Live Auctions / Featured Lots** — current and upcoming sales
- **Bidding Guide** — how to register, bid in the room, by phone or online
- **The Saleroom** — about BidHouse Saleroom Co., Ltd.
- **About BidHouse** — about BidHouse Inc., the group in numbers
- **Private Sales, News & Results** — sold prices and sale reports
- **Join Our Team / Register to Bid** — careers and bidder registration
- **Contact** — enquiries for buyers and sellers

## Folder map

Everything in this repo, in plain language:

| Folder / file | What it is |
| --- | --- |
| `index.html` | The home page |
| `about-bidhouse/`, `about-saleroom/`, `about-group/` | The "About" pages (BidHouse Inc., the Saleroom, the Group) |
| `product/`, `service/`, `solution/`, `technology/`, `equipment/` | Lots, services and expertise pages |
| `news/` | News & Results — sale reports, grouped by category (`community/`, `safety/`, `careers/`, `benefits/`, `others/`) and by year (`date/`) |
| `recruit/` | Careers — job listings (`job/`), the application form (`entry/`) |
| `contact/`, `privacy/`, `philosophy-message/`, `sitemap/` | Contact page, privacy policy, message from the house, site map |
| `assets/theme/` | The design: all CSS, JavaScript, icons, logos and the 3D models for the home-page WebGL hero |
| `assets/media/` | Every photo and video used on the site, organised by year/month (`2025/10/`, `2026/02/`, …) |
| `assets/plugins/` | The form scripts (contact-form styling and conditional-field logic) |
| `assets/core/` | Library JavaScript the site loads (jQuery and WordPress core JS) |
| `assets/vendor/` | The Three.js library for the WebGL hero, bundled locally |
| `favicon.ico`, `apple-touch-icon.png` | Browser / home-screen icons |

Page folders at the top level are the site's pages: each folder name is
its URL path (for example `about-bidhouse/` is the About BidHouse page),
and each holds one `index.html`.

## Running it

This is a fully static site (HTML, CSS and JavaScript — no build step and
no server). Open `index.html` in a browser, or serve the folder with any
static file server.

The contact and registration forms are front-end only on this static
host — they render and validate in the browser but do not send mail.

## Notes

- The hero on the home page is a WebGL (Three.js) scene; the Three.js
  library is bundled locally so the page works without a CDN.
- Fonts and analytics load from their public CDNs, as is standard.
