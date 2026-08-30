/* ==========================================================================
   ANWCL — Site behaviour
   Renders sections from data/lab.js and data/members.js, then wires up
   navigation and motion. No dependencies.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------- helpers */

  const $  = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /** Inline SVG for an icon key from js/icons.js. */
  function icon(type) {
    const def = (typeof ICONS !== "undefined") && ICONS[type];
    if (!def) return "";
    return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + def.path + '"/></svg>';
  }

  function iconLink(link) {
    const def = (typeof ICONS !== "undefined") && ICONS[link.type];
    const label = def ? def.label : link.type;
    return '<a href="' + esc(link.url) + '" target="_blank" rel="noopener noreferrer" title="' +
           esc(label) + '"><span class="visually-hidden">' + esc(label) + '</span>' + icon(link.type) + "</a>";
  }

  function todo(text) {
    return '<span class="todo">TODO · ' + esc(text) + "</span>";
  }

  /** Portrait with a graceful fallback when the photo file is missing. */
  function portrait(person) {
    if (!person.photo) {
      return '<div class="person__portrait"><img alt="" src="data:image/svg+xml,' +
        encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"><rect width="4" height="5" fill="%23F2F5F8"/></svg>') +
        '"></div>';
    }
    return '<div class="person__portrait"><img src="' + esc(person.photo) + '" alt="' +
      esc(person.name) + '" loading="lazy" decoding="async"></div>';
  }

  /* ------------------------------------------------- signature: frame rule
     <span class="frame-rule" data-slot="3" data-slots="9"></span>
     Expands into segments with one lit slot. Without JS it stays a hairline. */

  function buildFrameRules() {
    $$(".frame-rule").forEach(function (el) {
      const slots = parseInt(el.dataset.slots || "9", 10);
      const on    = parseInt(el.dataset.slot  || "1", 10);
      let html = "";
      for (let i = 1; i <= slots; i++) html += '<i' + (i === on ? ' class="is-on"' : "") + "></i>";
      el.innerHTML = html;
      el.classList.add("is-built");
    });
  }

  /* ------------------------------------------------------------ facts strip */

  function renderFacts() {
    const host = $("#facts");
    if (!host) return;
    const researchers = LAB_MEMBERS.filter(m => m.group !== "alumni").length;
    const ongoing     = PROJECTS.filter(p => p.status === "ongoing").length;
    const items = [
      { n: ongoing,                  l: "Ongoing projects" },
      { n: researchers,              l: "Researchers" },
      { n: RESEARCH_AREAS.length,    l: "Research areas" },
      { n: PUBLICATIONS.length,      l: "Publications listed" }
    ];
    host.innerHTML = items.map(i =>
      '<div><span class="facts__n">' + i.n + '</span><span class="facts__l label">' + esc(i.l) + "</span></div>"
    ).join("");
  }

  /* -------------------------------------------------------- research areas */

  function renderResearch() {
    const host = $("#research-areas");
    if (!host) return;
    host.innerHTML = RESEARCH_AREAS.map(function (area) {
      const tags = (area.tags || []).map(t => '<li class="tag">' + esc(t) + "</li>").join("");
      const related = (area.projects || [])
        .map(id => PROJECTS.find(p => p.id === id))
        .filter(Boolean);
      const links = related.length
        ? '<p class="meta" style="margin-top:var(--s-4)">Related: ' +
          related.map(p => p.page
            ? '<a href="project.html?id=' + esc(p.id) + '">' + esc(p.funder) + "</a>"
            : esc(p.funder)).join(" · ") + "</p>"
        : "";
      return '<article class="area reveal">' +
        "<h3>" + esc(area.title) + "</h3>" +
        '<div class="area__body"><p>' + esc(area.body) + "</p>" +
        (tags ? '<ul class="tags">' + tags + "</ul>" : "") + links +
        "</div></article>";
    }).join("");
  }

  /* ---------------------------------------------------------------- projects */

  function renderProjects() {
    const featuredHost = $("#projects-featured");
    const listHost     = $("#projects-list");

    if (featuredHost) {
      featuredHost.innerHTML = PROJECTS.filter(p => p.featured).map(function (p) {
        const img = p.images && p.images.hero
          ? '<img src="' + esc(p.images.hero) + '" alt="" loading="lazy" decoding="async">' : "";
        return '<a class="featured__item reveal" href="project.html?id=' + esc(p.id) + '">' + img +
          '<div class="featured__body">' +
            '<span class="label">' + esc(p.funder) + " · " + esc(p.years) + "</span>" +
            "<h3>" + esc(p.title) + "</h3>" +
            "<p>" + esc(p.summary) + "</p>" +
            '<span class="featured__more">Project details →</span>' +
          "</div></a>";
      }).join("");
    }

    if (listHost) {
      const rest = PROJECTS.filter(p => !p.featured);
      listHost.innerHTML = rest.map(function (p) {
        const statusClass = p.status === "ongoing" ? "status status--ongoing" : "status";
        const statusText  = p.status === "ongoing" ? "Ongoing" : "Completed";
        return '<article class="project reveal">' +
          '<div class="project__funder">' + esc(p.funder) +
            '<span class="project__years">' + esc(p.years) + "</span></div>" +
          "<div><h3>" + esc(p.title) + "</h3>" +
            (p.summary ? "<p>" + esc(p.summary) + "</p>" : "") + "</div>" +
          '<div class="' + statusClass + '">' + statusText + "</div>" +
        "</article>";
      }).join("");
    }
  }

  /* ------------------------------------------------------------ publications */

  /** Bold the lab's own authors so contribution is scannable. */
  function markAuthors(authors) {
    let out = esc(authors);
    (typeof LAB_AUTHOR_KEYS !== "undefined" ? LAB_AUTHOR_KEYS : []).forEach(function (key) {
      out = out.split(esc(key)).join('<span class="self">' + esc(key) + "</span>");
    });
    return out;
  }

  function renderPublications() {
    const host = $("#publications-list");
    if (!host) return;
    const sorted = PUBLICATIONS.slice().sort((a, b) => b.year - a.year);
    host.innerHTML = sorted.map(function (pub) {
      const doi = pub.doi
        ? ' · <a href="https://doi.org/' + esc(pub.doi) + '" target="_blank" rel="noopener noreferrer">doi:' + esc(pub.doi) + "</a>"
        : "";
      return '<article class="pub reveal">' +
        '<div class="pub__year">' + esc(pub.year) + "</div>" +
        '<div><h3 class="pub__title">' + esc(pub.title) + "</h3>" +
          '<p class="pub__authors">' + markAuthors(pub.authors) + "</p>" +
          '<p class="pub__venue">' + esc(pub.venue) + doi + "</p>" +
        "</div></article>";
    }).join("");
  }

  /* ------------------------------------------------------------------ people */

  function personCard(person, layout) {
    const links = (person.links || []).length
      ? '<div class="person__links">' + person.links.map(iconLink).join("") + "</div>"
      : "";
    const name = (person.title ? person.title + " " : "") + person.name;
    const lead = layout === "lead";
    const tagline = lead && person.tagline
      ? '<p class="person__tagline">' + esc(person.tagline) + "</p>" : "";
    const bio = lead && person.bio && person.bio.length
      ? '<p class="person__bio">' + esc(person.bio[0]) + "</p>"
      : "";
    const flag = person.needsBio ? " " + todo("bio needed") : "";

    return '<div class="person reveal">' +
      '<a href="member.html?id=' + esc(person.id) + '" aria-label="Profile of ' + esc(person.name) + '">' +
        portrait(person) + "</a>" +
      "<div><a href=\"member.html?id=" + esc(person.id) + '" class="person__name">' +
        esc(name) + "</a>" +
        '<span class="person__role label">' + esc(person.role) + "</span>" + flag +
        tagline + bio + links +
      "</div></div>";
  }

  function renderPeople() {
    const host = $("#people");
    if (!host) return;
    host.innerHTML = PEOPLE_GROUPS.map(function (group) {
      const people = LAB_MEMBERS.filter(m => m.group === group.key);
      if (!people.length) return "";
      const gridClass = group.layout === "lead" ? "people-grid people-grid--lead" : "people-grid";
      return '<section class="people-group">' +
        '<header class="people-group__head"><h3>' + esc(group.label) + "</h3>" +
          '<span class="people-group__count">' + people.length + "</span></header>" +
        '<div class="' + gridClass + '">' +
          people.map(p => personCard(p, group.layout)).join("") +
        "</div></section>";
    }).join("");
  }

  /* ------------------------------------------------------- director message */

  function renderDirector() {
    const host = $("#director-message");
    if (!host || typeof DIRECTOR_MESSAGE === "undefined") return;
    const person = LAB_MEMBERS.find(m => m.id === DIRECTOR_MESSAGE.memberId);
    if (!person) return;

    const paras = DIRECTOR_MESSAGE.paragraphs.map(function (p) {
      const flag = p.flagCounts ? " " + todo("project and student counts need updating") : "";
      return '<p class="' + (p.extra ? "director__extra" : "") + '">' + esc(p.text) + flag + "</p>";
    }).join("");

    host.innerHTML =
      '<div class="director__aside">' +
        '<img src="' + esc(person.photo) + '" alt="' + esc(person.name) + '" loading="lazy" decoding="async">' +
        '<p class="director__name">' + esc((person.title || "") + " " + person.name) + "</p>" +
        '<p class="meta">' + esc(DIRECTOR_MESSAGE.standing) + "</p>" +
        '<p style="margin-top:var(--s-4)"><a href="member.html?id=' + esc(person.id) + '">Full biography →</a></p>' +
      "</div>" +
      '<div class="director__body prose" data-collapsed="true">' + paras +
        '<p class="director__more"><button class="btn btn--quiet" type="button" data-expand>Read the full message</button></p>' +
      "</div>";

    const body = $(".director__body", host);
    const btn  = $("[data-expand]", host);
    btn.addEventListener("click", function () {
      const collapsed = body.dataset.collapsed === "true";
      body.dataset.collapsed = collapsed ? "false" : "true";
      btn.textContent = collapsed ? "Show less" : "Read the full message";
    });
  }

  /* -------------------------------------------------------------------- news */

  function renderNews() {
    const videoHost = $("#news-videos");
    const noteHost  = $("#news-notes");

    if (videoHost && typeof VIDEOS !== "undefined") {
      videoHost.innerHTML = VIDEOS.map(function (v) {
        return '<article class="video reveal">' +
          '<div class="video__frame"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(v.youtube) +
            '" title="' + esc(v.title) + '" loading="lazy" allowfullscreen ' +
            'allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe></div>' +
          '<div class="video__body"><h3>' + esc(v.title) + "</h3>" +
            (v.needsTitle ? todo("real title and date needed") : '<p class="meta">' + esc(v.caption || "") + "</p>") +
          "</div></article>";
      }).join("");
    }

    if (noteHost && typeof NEWS !== "undefined") {
      noteHost.innerHTML = NEWS.map(function (n) {
        return '<article class="note reveal">' +
          '<div class="note__date">' + esc(n.date) + (n.needsDate ? " " + todo("exact date") : "") + "</div>" +
          "<div><h3>" + esc(n.title) + "</h3><p>" + esc(n.body) + "</p></div>" +
        "</article>";
      }).join("");
    }
  }

  /* ----------------------------------------------------------------- contact */

  function renderContact() {
    const host = $("#contact-details");
    if (!host || typeof CONTACT === "undefined") return;

    const emailBlock = CONTACT.email
      ? '<p><a href="mailto:' + esc(CONTACT.email) + '">' + esc(CONTACT.email) + "</a></p>"
      : "<p>" + todo("laboratory email address") + "</p>";

    const placeBlock = CONTACT.building
      ? "<p>" + esc(CONTACT.building) + "</p>"
      : "<p>" + todo("building and room number") + "</p>";

    host.innerHTML =
      '<div class="contact-block"><h3>Email</h3>' + emailBlock +
        (CONTACT.phone ? "<p>" + esc(CONTACT.phone) + "</p>" : "") + "</div>" +
      '<div class="contact-block"><h3>Address</h3>' + placeBlock +
        "<address>" + CONTACT.address.map(esc).join("<br>") + "</address></div>" +
      '<div class="contact-block"><h3>Follow the lab</h3><div class="socials">' +
        CONTACT.socials.map(iconLink).join("") + "</div></div>";

    const footerSocials = $("#footer-socials");
    if (footerSocials) footerSocials.innerHTML = CONTACT.socials.map(iconLink).join("");
  }

  /* ----------------------------------------------------------------- gallery
     Native scroll-snap does the work. JS adds buttons, dots, a caption and a
     slow autoplay that stops the moment anyone interacts with it. */

  function renderGallery() {
    const track = $("#gallery-track");
    if (!track || typeof GALLERY === "undefined" || !GALLERY.length) return;

    const dotsHost   = $("#gallery-dots");
    const captionEl  = $("#gallery-caption");
    const prevBtn    = $('[data-gallery="prev"]');
    const nextBtn    = $('[data-gallery="next"]');
    const reduce     = window.matchMedia("(prefers-reduced-motion: reduce)");

    track.innerHTML = GALLERY.map(function (slide, i) {
      /* The blurred backdrop reuses the same file, so it costs no extra
         request — the browser serves it from cache. */
      const fill = slide.fit === "cover" ? "" :
        '<div class="gallery__fill" style="background-image:url(&quot;' +
        esc(slide.src) + '&quot;)" aria-hidden="true"></div>';
      return '<figure class="gallery__slide"' +
        (slide.fit ? ' data-fit="' + esc(slide.fit) + '"' : "") + ">" + fill +
        '<img src="' + esc(slide.src) + '" alt="' + esc(slide.alt || "") + '"' +
        (slide.focus ? ' style="object-position:' + esc(slide.focus) + '"' : "") +
        (i === 0 ? ' fetchpriority="high"' : ' loading="lazy"') +
        ' decoding="async">' +
      "</figure>";
    }).join("");

    if (dotsHost) {
      dotsHost.innerHTML = GALLERY.map(function (slide, i) {
        return '<button class="gallery__dot" type="button"' +
          (i === 0 ? ' aria-current="true"' : "") +
          ' aria-label="Photograph ' + (i + 1) + ' of ' + GALLERY.length + '"></button>';
      }).join("");
    }

    const slides = $$(".gallery__slide", track);
    const dots   = dotsHost ? $$(".gallery__dot", dotsHost) : [];
    let index = 0;
    let autoplay = null;

    function setCaption(i) {
      if (!captionEl) return;
      const slide = GALLERY[i] || {};
      captionEl.innerHTML = slide.caption
        ? esc(slide.caption)
        : (slide.needsCaption ? todo("caption for photo " + (i + 1)) : "");
    }

    function sync(i) {
      index = i;
      dots.forEach(function (d, n) {
        if (n === i) d.setAttribute("aria-current", "true");
        else d.removeAttribute("aria-current");
      });
      if (prevBtn) prevBtn.disabled = (i === 0);
      if (nextBtn) nextBtn.disabled = (i === slides.length - 1);
      setCaption(i);
    }

    function goTo(i, smooth) {
      const clamped = Math.max(0, Math.min(slides.length - 1, i));
      track.scrollTo({
        left: slides[clamped].offsetLeft - track.offsetLeft,
        behavior: (smooth && !reduce.matches) ? "smooth" : "auto"
      });
      sync(clamped);
    }

    /* Keep dots in step when the user scrolls the track directly. */
    let ticking = false;
    track.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        const i = Math.round(track.scrollLeft / track.clientWidth);
        if (i !== index) sync(Math.max(0, Math.min(slides.length - 1, i)));
        ticking = false;
      });
    }, { passive: true });

    if (prevBtn) prevBtn.addEventListener("click", function () { stopAuto(); goTo(index - 1, true); });
    if (nextBtn) nextBtn.addEventListener("click", function () { stopAuto(); goTo(index + 1, true); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { stopAuto(); goTo(i, true); });
    });

    track.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { e.preventDefault(); stopAuto(); goTo(index + 1, true); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); stopAuto(); goTo(index - 1, true); }
    });

    function startAuto() {
      if (autoplay || reduce.matches || slides.length < 2) return;
      autoplay = setInterval(function () {
        goTo(index >= slides.length - 1 ? 0 : index + 1, true);
      }, 7000);
    }
    function stopAuto() { clearInterval(autoplay); autoplay = null; }

    const gallery = track.closest(".gallery");
    ["pointerenter", "focusin", "pointerdown"].forEach(ev => gallery.addEventListener(ev, stopAuto));
    gallery.addEventListener("pointerleave", startAuto);
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stopAuto(); else startAuto();
    });

    sync(0);
    startAuto();
  }

  /* ------------------------------------------------------- nav, motion, misc */

  function wireNav() {
    const toggle = $(".nav-toggle");
    const nav    = $("#primary-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        const open = nav.dataset.open === "true";
        nav.dataset.open = open ? "false" : "true";
        toggle.setAttribute("aria-expanded", String(!open));
      });
      nav.addEventListener("click", function (e) {
        if (e.target.tagName === "A" && window.innerWidth <= 900) {
          nav.dataset.open = "false";
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    /* Highlight the section currently in view. */
    const links = $$('#primary-nav a[href^="#"]');
    const map = {};
    links.forEach(function (a) {
      const el = document.getElementById(a.getAttribute("href").slice(1));
      if (el) map[el.id] = a;
    });
    const targets = Object.keys(map).map(id => document.getElementById(id));
    if (!targets.length || !("IntersectionObserver" in window)) return;

    const seen = new Set();
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(e => e.isIntersecting ? seen.add(e.target.id) : seen.delete(e.target.id));
      links.forEach(a => a.removeAttribute("aria-current"));
      const first = targets.find(t => seen.has(t.id));
      if (first) map[first.id].setAttribute("aria-current", "true");
    }, { rootMargin: "-45% 0px -50% 0px" });
    targets.forEach(t => obs.observe(t));
  }

  function wireReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach(el => el.classList.add("is-in"));
      return;
    }
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("is-in"); obs.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    els.forEach(el => obs.observe(el));
  }

  function fillYear() {
    $$("[data-year]").forEach(el => { el.textContent = String(new Date().getFullYear()); });
  }

  /* -------------------------------------------------------------------- init */

  document.addEventListener("DOMContentLoaded", function () {
    renderGallery();
    renderFacts();
    renderResearch();
    renderProjects();
    renderPublications();
    renderPeople();
    renderDirector();
    renderNews();
    renderContact();
    buildFrameRules();
    wireNav();
    wireReveal();
    fillYear();
  });
})();
