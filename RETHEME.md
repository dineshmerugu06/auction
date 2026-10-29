# RETHEME — original (CKI-fTk) → auction (BidHouse)

Rule applied throughout: **only content changed** — visible text, meta/OG text, images,
video, logo artwork and the favicon. No CSS rule, class, layout element, or JS logic was
changed. Mirror plumbing (not content): root-absolute URLs rewritten to `/auction`,
oembed/api.w.org link tags removed (dead on a static host), esm.sh three.js vendored to
`vendor/`, root `wp-json/` + `cdn-cgi/` crawl artifacts dropped.

## Brand
| Original | Auction |
|---|---|
| CKI-fTk Group / CKI-fTkグループ | BidHouse Group |
| CKI (株式会社シイ・ケイ・アイ, sales/proposals arm) | BidHouse Inc. (client & bidding arm) |
| fTk (東京ファブリック化工株式会社, manufacturing arm) | BidHouse Saleroom Co., Ltd. (saleroom & specialists) |
| Hero line "Creating new value with the 'power to respond'" / rubber solution partner | same layout, "power to win" / "One trusted house for every auction" |
| Hero marquee lettering (inline SVG paths "CKI-fTk GROUP") | same-viewBox SVG text "BIDHOUSE GROUP" (solid + outline layers kept) |
| Logo SVGs (logo-*, logotype-*, logomark-*, logo-default_*) | BIDHOUSE wordmark SVGs, same viewBox/dimensions |
| favicon.ico / apple-touch-icon.png | gold "B" on near-black, same sizes/formats |
| Addresses: Nakano, Tokyo / Gero, Gifu | 100 Auction Plaza, New York, NY 10019 / 48 Gallery Row, Chicago, IL |
| Phones 03-5380-2243 / 0576-52-1305 etc. | +1 212-555-0147 / +1 212-555-0148 |

## Sections / navigation
| Original | Auction |
|---|---|
| 製品・技術 (Products & Technology) | Lots & Categories |
| 事業案内 (Business) | Live Auctions |
| 製品情報 (Products) | Featured Lots |
| 技術情報 (Technology) | Bidding Guide |
| 設備情報 (Equipment) | The Saleroom |
| ソリューション (Solutions) | Private Sales |
| 会社案内 (Company) | The House |
| グループ指針・代表挨拶 | Vision & Director's Message |
| 数字で見るCKI-fTkグループ | BidHouse in Numbers |
| 採用情報 / 募集要項 / 採用エントリー (Recruit) | Join Our Team / Open Positions / Register to Bid |
| 新着情報 (News) | News & Results |
| News categories (地域活動/安全衛生/福利厚生/採用活動) | Community / House News / Benefits / Careers News |
| News headlines (evacuation drills, donations…) | Sale results, charity auction, gallery opening, saleroom stories |
| Job fields (duties, salary, benefits…) | Same field structure, auction-house roles (Lot Specialist, Saleroom Operations…) |

Body copy: 334 strings hand-mapped (all navigation, headings, hero, section copy, labels,
addresses — see the build map). Long-tail single-occurrence copy (news/job/company body
text) was replaced with length-matched auction copy chosen deterministically per string,
so line lengths and layout are preserved and no Japanese remains (verified: 0 Japanese
characters outside URL paths, which keep their original folder names).

## Media (all swapped in place — same path, format and exact pixel dimensions)
- **Photos**: 19 verified Unsplash sources (gavel, luxury watches ×4, classic cars ×3,
  fine art, diamond ring, wine, porcelain vases, handbag, auction/event halls ×2, NYC,
  handshake, sneakers, vintage camera, perfume, specialist portraits ×2) centre-cropped
  to each slot's exact original size — 254 media files in total, including every
  WordPress size variant, page-title banners and `ogp.png`.
- **Baked-text graphics**: `recruit-ttl.png` (transparent blue-gradient Japanese title art)
  regenerated in the same style/size with "READY TO BID" lettering;
  `technology-list.png` (rubber spec table) replaced with a fine-art photo at 1280×908.
- **Video**: `wp/wp-content/uploads/2025/10/movie.mp4` (was factory footage, 1920×1080)
  replaced with Pexels clips — gavel strike (video 5636977, 10s) + bidding paddle
  (video 7646277, 4s) — concatenated, 1920×1080, silent, 14s, same path.
- **Kept as UI (not content)**: icon SVGs/PNGs, noise/lattice background textures, the
  WebGL model files + textures, and the inline noise-texture data-URI.

## Verification
- Local Chromium network trace over 12 routes with scrolling: 166 same-origin requests,
  **0 failed responses**; only remaining console error is Google reCAPTCHA on the contact
  page (external service, form backend is WordPress-only).
- Screenshots of the rethemed homepage confirm identical layout with auction content.
