/* ==========================================================================
   ANWCL — Ambient network field
   --------------------------------------------------------------------------
   A sparse field of nodes that draw a link when they come within range of
   each other: an ad hoc network topology, which is what the lab studies.

   How it stays inside the white sections only:
   the canvas is position:fixed at z-index 0, behind the whole page. Every
   band sits at z-index 1. Tinted and dark bands have opaque backgrounds and
   therefore hide it; .band--plain and .hero are transparent and let it show.
   No clipping maths, no per-section canvases — the existing backgrounds do
   the masking. Add a white section and it inherits the effect for free.

   The field is anchored to the DOCUMENT, not the viewport, and is offset by
   scrollY x PARALLAX, so it drifts as you scroll.
   ========================================================================== */

(function () {
  "use strict";

  /* Tuning note. Nodes are spread over the whole document but only those near
     the viewport are drawn, so the count you actually see is

         on-screen nodes = viewport width x viewport height / density

     — page length cancels out. At 1400x900 a density of 11000 puts about 115
     nodes on screen, roughly 115px apart. `maxNodes` caps the TOTAL across the
     document, so it must stay well clear of vw x docHeight / density or it
     silently thins the field: at 190 it was allowing only ~19 on screen. */
  const CONFIG = {
    density:   11000, // px² of viewport per visible node — higher is sparser
    minNodes:  60,
    maxNodes:  2600,  // total across the document; keep generous
    linkRange: 150,   // px at which two nodes connect
    parallax:  0.42,  // 0 = pinned to page, 1 = pinned to viewport
    drift:     0.09,  // ambient px per frame
    nodeAlpha: 0.55,
    linkAlpha: 0.32,
    nodeSize:  [1.0, 2.4]
  };

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

  let canvas, ctx, dpr = 1;
  let vw = 0, vh = 0, docH = 0;
  let nodes = [];
  let rgb = "14, 80, 202";
  let running = false;
  let frame = 0;

  /* Read the accent straight off the design tokens so re-theming the site
     re-themes the field too. */
  function readAccent() {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent").trim();
    const hex = raw.match(/^#([0-9a-f]{6})$/i);
    if (!hex) return;
    const n = parseInt(hex[1], 16);
    rgb = [(n >> 16) & 255, (n >> 8) & 255, n & 255].join(", ");
  }

  function documentHeight() {
    const b = document.body, e = document.documentElement;
    return Math.max(b.scrollHeight, b.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight);
  }

  function build() {
    vw = window.innerWidth;
    vh = window.innerHeight;
    docH = documentHeight();
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width  = Math.floor(vw * dpr);
    canvas.height = Math.floor(vh * dpr);
    canvas.style.width  = vw + "px";
    canvas.style.height = vh + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(
      CONFIG.minNodes,
      Math.min(CONFIG.maxNodes, Math.round((vw * docH) / CONFIG.density))
    );

    nodes = new Array(count);
    for (let i = 0; i < count; i++) {
      nodes[i] = {
        x: Math.random() * vw,
        y: Math.random() * docH,
        vx: (Math.random() - 0.5) * CONFIG.drift * 2,
        vy: (Math.random() - 0.5) * CONFIG.drift * 2,
        r: CONFIG.nodeSize[0] + Math.random() * (CONFIG.nodeSize[1] - CONFIG.nodeSize[0])
      };
    }
  }

  function draw() {
    const shift = window.scrollY * CONFIG.parallax;
    ctx.clearRect(0, 0, vw, vh);

    /* Only nodes near the viewport are worth linking or drawing. */
    const near = [];
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const sy = n.y - shift;
      if (sy > -60 && sy < vh + 60) near.push({ x: n.x, y: sy, r: n.r });
    }

    ctx.lineWidth = 1;
    for (let i = 0; i < near.length; i++) {
      const a = near[i];
      for (let j = i + 1; j < near.length; j++) {
        const b = near[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 > CONFIG.linkRange * CONFIG.linkRange) continue;
        const t = 1 - Math.sqrt(d2) / CONFIG.linkRange;
        ctx.strokeStyle = "rgba(" + rgb + ", " + (t * CONFIG.linkAlpha).toFixed(3) + ")";
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    ctx.fillStyle = "rgba(" + rgb + ", " + CONFIG.nodeAlpha + ")";
    for (let i = 0; i < near.length; i++) {
      const n = near[i];
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function step() {
    if (!running) return;
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < -20) n.x = vw + 20; else if (n.x > vw + 20) n.x = -20;
      if (n.y < -20) n.y = docH + 20; else if (n.y > docH + 20) n.y = -20;
    }
    draw();
    frame = requestAnimationFrame(step);
  }

  function start() { if (!running) { running = true; frame = requestAnimationFrame(step); } }
  function stop()  { running = false; cancelAnimationFrame(frame); }

  function debounce(fn, wait) {
    let t;
    return function () { clearTimeout(t); t = setTimeout(fn, wait); };
  }

  function init() {
    canvas = document.createElement("canvas");
    canvas.className = "network-field";
    canvas.setAttribute("aria-hidden", "true");
    ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    document.body.prepend(canvas);

    readAccent();
    build();

    if (reduce.matches) {
      draw();               // one static frame, no motion
    } else {
      start();
    }

    /* Pause when the tab is hidden — no point burning frames off-screen. */
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) stop();
      else if (!reduce.matches) start();
    });

    /* Scroll only needs a redraw when the loop is paused. */
    window.addEventListener("scroll", function () {
      if (!running) draw();
    }, { passive: true });

    const rebuild = debounce(function () { build(); draw(); }, 200);
    window.addEventListener("resize", rebuild, { passive: true });

    /* The document grows once the JS-rendered sections appear. */
    if ("ResizeObserver" in window) {
      new ResizeObserver(debounce(function () {
        const h = documentHeight();
        if (Math.abs(h - docH) > 200) build();
      }, 250)).observe(document.body);
    }

    reduce.addEventListener("change", function (e) {
      if (e.matches) { stop(); draw(); } else { start(); }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
