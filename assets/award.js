/* ============================================================
   ROUND 11 — AWARD STYLE (site-wide)
   Injects the award chrome (slim bar + fullscreen typographic
   menu), the home poster hero, the Business ruled index, the
   catalogue kickers and the inner-page banner kickers.
   The theme header is hidden by CSS (offscreen exile — never
   display:none: theme JS measures element widths in loops
   that hang at width 0). All styling lives in style.css under
   "ROUND 11 — AWARD STYLE". No libraries; transform/opacity
   motion only; prefers-reduced-motion disables the reveals.
   ============================================================ */
(function () {
  "use strict";

  var script = document.currentScript;
  var base = "/";
  if (script && script.src) {
    var path = script.src.replace(/^https?:\/\/[^/]+/i, "");
    var cut = path.indexOf("assets/award.js");
    if (cut >= 0) base = path.slice(0, cut);
  }

  var body = document.body;
  body.classList.add("aws");

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- path / cluster ---------- */
  var rel = window.location.pathname;
  if (rel.indexOf(base) === 0) rel = rel.slice(base.length);
  rel = rel.replace(/^\/+|\/+$/g, "");
  var seg = rel === "" ? "" : rel.split("/")[0];
  var isHome = rel === "";

  /* ---------- chrome: slim bar + fullscreen menu ---------- */
  var LINKS = [
    ["01", "Home", base],
    ["02", "Lots &<br>Categories", base + "service/"],
    ["03", "The House", base + "about-bidhouse/"],
    ["04", "Join Our Team", base + "recruit/"],
    ["05", "News & Results", base + "news/"],
    ["06", "Contact", base + "contact/"]
  ];

  var bar = document.createElement("div");
  bar.className = "aws-bar";
  bar.innerHTML =
    '<a class="aws-logo" href="' + base + '" aria-label="BidHouse home">' +
    '<span class="aws-mark"></span>BIDHOUSE</a>' +
    '<button class="aws-burger" type="button" aria-expanded="false" aria-label="Open menu">' +
    '<span class="aws-burger-label">MENU</span>' +
    '<span class="aws-burger-lines"><span></span><span></span></span>' +
    "</button>";
  body.appendChild(bar);

  var items = "";
  for (var i = 0; i < LINKS.length; i++) {
    items +=
      '<li style="--d:' + i + '"><a href="' + LINKS[i][2] + '">' +
      '<span class="aws-no">№&nbsp;' + LINKS[i][0] + "</span>" +
      '<span class="aws-menu-name">' + LINKS[i][1] + "</span></a></li>";
  }
  var menu = document.createElement("nav");
  menu.className = "aws-menu";
  menu.setAttribute("aria-label", "Site menu");
  menu.innerHTML =
    '<div class="aws-menu-photo" aria-hidden="true"></div>' +
    '<div class="aws-menu-main">' +
    '<ul class="aws-menu-list">' + items + "</ul>" +
    '<div class="aws-menu-foot">' +
    "<span>BIDHOUSE GROUP</span>" +
    "<span>THE AUTUMN SALE — LIVE NOW</span>" +
    "<span>LONDON</span>" +
    "</div></div>";
  body.appendChild(menu);

  var burger = bar.querySelector(".aws-burger");
  var burgerLabel = bar.querySelector(".aws-burger-label");
  function setMenu(open) {
    body.classList.toggle("aws-menu-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    burgerLabel.textContent = open ? "CLOSE" : "MENU";
    body.style.overflow = open ? "hidden" : "";
  }
  burger.addEventListener("click", function () {
    setMenu(!body.classList.contains("aws-menu-open"));
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && body.classList.contains("aws-menu-open")) {
      setMenu(false);
    }
  });

  /* ---------- scroll state (chrome turns ink past the ink hero) ---------- */
  var heroEl = null;
  function onScroll() {
    var limit = heroEl ? heroEl.offsetTop + heroEl.offsetHeight - 90
                       : window.innerHeight - 90;
    body.classList.toggle("aws-scrolled", window.scrollY > limit);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- kicker helper ---------- */
  function kickerHTML(num, label) {
    return '<span class="aws-no">№&nbsp;' + num + '</span>' +
           '<span class="aws-rule"></span>' + label;
  }
  function addKicker(anchor, num, label, cls) {
    if (!anchor || !anchor.parentNode) return;
    var p = document.createElement("p");
    p.className = cls || "aws-kicker-sec";
    p.innerHTML = kickerHTML(num, label);
    anchor.parentNode.insertBefore(p, anchor);
  }

  if (isHome) {
    /* ---------- home: poster hero ---------- */
    var video = document.querySelector(".hero--movie video");
    if (video) { video.pause(); video.removeAttribute("autoplay"); }

    var hero = document.createElement("section");
    hero.className = "aws-hero";
    hero.innerHTML =
      '<div class="aws-hero-inner">' +
      '<p class="aws-kicker">' + kickerHTML("01", "LIVE AUCTIONS — AUTUMN 2026") + "</p>" +
      '<h2 class="aws-hero-title">' +
      '<span class="aws-line"><span>The</span></span>' +
      '<span class="aws-line"><span>Autumn</span></span>' +
      '<span class="aws-line"><span>Sale</span></span>' +
      "</h2>" +
      '<figure class="aws-hero-fig">' +
      '<img src="' + base + 'assets/theme/images/aws-gavel.jpg" alt="The Auctioneer\u2019s Gavel" width="864" height="1080">' +
      "<figcaption>" +
      '<span class="aws-no">№&nbsp;01</span> / THE AUCTIONEER\u2019S GAVEL / ROSEWOOD, BRASS BAND / EST. £40,000 — 60,000' +
      "</figcaption></figure>" +
      '<div class="aws-hero-stats">' +
      '<span class="aws-stat-num">248</span>' +
      '<span class="aws-stat-lbl">LOTS IN THE<br>AUTUMN SALE</span>' +
      '<span class="aws-scroll">SCROLL<i></i></span>' +
      "</div></div>";
    var themeHero = document.querySelector("main .hero");
    if (themeHero && themeHero.parentNode) {
      themeHero.parentNode.insertBefore(hero, themeHero);
    } else {
      var main = document.querySelector("main");
      if (main) main.insertBefore(hero, main.firstChild);
    }
    heroEl = hero;

    /* ---------- home: Business card carousel -> ruled index ---------- */
    var cards = document.querySelectorAll(".home_out_business .business_card");
    var scroller = document.querySelector(".home_out_business .scroll_horizontal");
    if (cards.length && scroller && scroller.parentNode) {
      var rows = "";
      for (var c = 0; c < cards.length; c++) {
        var a = cards[c].querySelector("a");
        if (!a) continue;
        var num = ("0" + (c + 1)).slice(-2);
        rows +=
          '<li><a href="' + a.getAttribute("href") + '">' +
          '<span class="aws-no">№&nbsp;' + num + "</span>" +
          '<span class="aws-index-name">' + a.textContent.trim() + "</span>" +
          '<span class="aws-arrow" aria-hidden="true">→</span></a></li>';
      }
      var ul = document.createElement("ul");
      ul.className = "aws-index";
      ul.innerHTML = rows;
      scroller.parentNode.insertBefore(ul, scroller.nextSibling);
    }

    /* ---------- home: section kickers (page order) ---------- */
    addKicker(document.querySelector(".home_our_commitment--ttl"), "02", "OUR COMMITMENT");
    addKicker(document.querySelector(".home_out_business .ttl-01"), "03", "INDEX OF THE HOUSE");
    addKicker(document.querySelector(".home_out_strengths .ttl"), "04", "OUR STRENGTHS");
    addKicker(document.querySelector(".home_join_us--ttl_wrap"), "05", "JOIN OUR TEAM");
    addKicker(document.querySelector(".home_about_us .ttl-02"), "06", "THE HOUSE");
    addKicker(document.querySelector(".lps_parts--cta h2"), "07", "GET IN TOUCH");
  } else {
    /* ---------- inner pages: banner kicker ---------- */
    var CLUSTERS = {
      "service": ["03", "LIVE AUCTIONS"],
      "product": ["03", "FEATURED LOTS"],
      "technology": ["03", "BIDDING GUIDE"],
      "equipment": ["03", "THE SALEROOM"],
      "solution": ["03", "PRIVATE SALES"],
      "recruit": ["04", "JOIN OUR TEAM"],
      "news": ["05", "NEWS & RESULTS"],
      "contact": ["06", "CONTACT"],
      "privacy": ["06", "PRIVACY"],
      "sitemap": ["01", "SITEMAP"],
      "philosophy-message": ["02", "OUR VISION"]
    };
    var en = document.querySelector(".page_ttl .page_ttl-en");
    if (en) {
      var hit = CLUSTERS[seg];
      if (!hit && seg.indexOf("about-") === 0) {
        hit = ["02", en.textContent.trim().toUpperCase()];
      }
      if (hit) en.innerHTML = kickerHTML(hit[0], hit[1]);
    }
  }

  /* ---------- reveals + layout refresh ---------- */
  onScroll();
  if (!reduced) {
    window.requestAnimationFrame(function () {
      window.setTimeout(function () { body.classList.add("aws-ready"); }, 60);
    });
  } else {
    body.classList.add("aws-ready");
  }
  window.addEventListener("load", function () {
    if (window.ScrollTrigger && window.ScrollTrigger.refresh) {
      window.ScrollTrigger.refresh();
    }
    onScroll();
  });
})();
