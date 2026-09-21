/* ===========================================================================
   app.js — renders the portfolio from data/projects.js
   You should not need to edit this file to add or change content.
   =========================================================================== */
(function () {
  "use strict";

  var DATA = window.PORTFOLIO;
  if (!DATA) {
    document.getElementById("sections").innerHTML =
      '<p class="empty-note">Could not load <code>data/projects.js</code>.</p>';
    return;
  }

  var $  = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Icons ─────────────────────────────────────────────────────────── */
  var ICONS = {
    instagram: '<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none"/></svg>',
    youtube:   '<svg viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="4.5"/><path d="M10.2 9.3l5 2.7-5 2.7z" fill="currentColor" stroke="none"/></svg>',
    linkedin:  '<svg viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="4.5"/><path d="M7 10.5V17M7 7.3v.01M11.3 17v-3.6a2.1 2.1 0 0 1 4.2 0V17"/></svg>',
    behance:   '<svg viewBox="0 0 24 24"><path d="M2.5 6.5h5a2.6 2.6 0 0 1 0 5.2h-5zM2.5 11.7h5.4a2.9 2.9 0 0 1 0 5.8H2.5zM14.5 14.4h7a3.5 3.5 0 1 0-7 0zM15.4 6.8h5.1"/></svg>',
    dribbble:  '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9.3"/><path d="M4.6 7.5c5.6 1 10.6 3.9 13.5 8.3M8.6 3.4c3.6 3.6 6 8.4 6.6 13.9M21 10.8c-6 .4-11.3 2.6-14.7 6.9"/></svg>',
    mail:      '<svg viewBox="0 0 24 24"><rect x="2.5" y="4.5" width="19" height="15" rx="3.2"/><path d="M3.4 7l7.7 5.4a1.6 1.6 0 0 0 1.8 0L20.6 7"/></svg>',
    link:      '<svg viewBox="0 0 24 24"><path d="M10.4 13.6a4 4 0 0 0 5.7 0l2.8-2.9a4 4 0 0 0-5.7-5.6l-1.6 1.6"/><path d="M13.6 10.4a4 4 0 0 0-5.7 0l-2.8 2.9a4 4 0 0 0 5.7 5.6l1.6-1.6"/></svg>',
    star:      '<svg viewBox="0 0 24 24"><path d="M12 2.6l2.9 5.9 6.5.95-4.7 4.6 1.1 6.5L12 17.5l-5.8 3.05 1.1-6.5-4.7-4.6 6.5-.95z"/></svg>',
    play:      '<svg viewBox="0 0 24 24"><path d="M7 4.5l13 7.5-13 7.5z"/></svg>',
    pause:     '<svg viewBox="0 0 24 24"><rect x="6" y="4.5" width="4" height="15" rx="1.2"/><rect x="14" y="4.5" width="4" height="15" rx="1.2"/></svg>',
    volume:    '<svg viewBox="0 0 24 24"><path d="M4 9.5h3.4L12 5.6v12.8L7.4 14.5H4z"/><path d="M16 9.4a3.6 3.6 0 0 1 0 5.2M18.6 6.8a7.2 7.2 0 0 1 0 10.4"/></svg>',
    muted:     '<svg viewBox="0 0 24 24"><path d="M4 9.5h3.4L12 5.6v12.8L7.4 14.5H4z"/><path d="M16.5 10l4 4M20.5 10l-4 4"/></svg>',
    expand:    '<svg viewBox="0 0 24 24"><path d="M9 3.8H4.5v4.4M15 3.8h4.5v4.4M9 20.2H4.5v-4.4M15 20.2h4.5v-4.4"/></svg>',
    caret:     '<svg viewBox="0 0 24 24"><path d="M9.5 5.5l6.5 6.5-6.5 6.5"/></svg>'
  };
  function icon(name) { return ICONS[name] || ICONS.link; }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function slug(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  var root = document.documentElement;

  /* ── Background image (optional, probed so a missing file is harmless) ─ */
  var EXTS = [".jpg", ".png", ".jpeg", ".webp"];
  var bgCache = {};

  function probe(base, done) {
    if (!base) { return done(null); }
    if (bgCache[base] !== undefined) { return done(bgCache[base]); }
    // If the author already gave an extension, use the path as-is.
    var list = /\.(jpe?g|png|webp|avif|gif)$/i.test(base)
      ? [base] : EXTS.map(function (e) { return base + e; });
    var i = 0;
    (function next() {
      if (i >= list.length) { bgCache[base] = null; return done(null); }
      var url = list[i++], img = new Image();
      img.onload  = function () { bgCache[base] = url; done(url); };
      img.onerror = next;
      img.src = url;
    })();
  }

  function applyBackground() {
    var cfg = DATA.background || {};
    var layer = $(".bg-layer");
    if (cfg.enabled === false) {
      root.classList.remove("has-bg");
      layer.style.backgroundImage = "none";
      return;
    }
    root.style.setProperty("--bg-blur", (cfg.blur || 0) + "px");
    probe(cfg[root.getAttribute("data-theme")], function (url) {
      if (url) {
        layer.style.backgroundImage = 'url("' + url + '")';
        root.classList.add("has-bg");
      } else {
        layer.style.backgroundImage = "none";
        root.classList.remove("has-bg");
      }
    });
  }

  /* ── Theme ─────────────────────────────────────────────────────────── */
  var themeBtn = $("#themeBtn");
  var STORE = "portfolio-theme";

  function setTheme(t, persist) {
    root.setAttribute("data-theme", t);
    if (persist) { try { localStorage.setItem(STORE, t); } catch (e) {} }
    var next = t === "dark" ? "light" : "dark";
    themeBtn.setAttribute("aria-label", "Switch to " + next + " mode");
    $(".theme-label", themeBtn).textContent = t === "dark" ? "Dark mode" : "Light mode";
    applyBackground();
  }

  var saved = null;
  try { saved = localStorage.getItem(STORE); } catch (e) {}
  setTheme(saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"), false);
  themeBtn.addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });

  /* ── Hero ──────────────────────────────────────────────────────────── */
  var p = DATA.profile || {};
  $("#heroKicker").textContent  = p.kicker || "";
  $("#heroName").textContent    = p.name || "";
  $("#heroTagline").textContent = p.tagline || "";
  $("#heroBio").innerHTML = (p.bio || []).map(function (t) {
    return "<p>" + esc(t) + "</p>";
  }).join("");
  $("#heroLinks").innerHTML = linkChips(p.links);
  $("#footNote").textContent = DATA.footer || "";
  $(".rail-mark").textContent = p.initials || "AZ";
  if (p.name) { document.title = p.name + " — Design & Editing Portfolio"; }

  var av = $("#heroAvatar");
  av.textContent = p.initials || "";
  if (p.avatar) {
    var probeImg = new Image();
    probeImg.onload = function () {
      av.textContent = "";
      var i = document.createElement("img");
      i.src = p.avatar; i.alt = p.name || "Portrait";
      av.appendChild(i);
    };
    probeImg.src = p.avatar;   // silently keeps initials if the file is absent
  }

  function linkChips(links) {
    if (!links || !links.length) { return ""; }
    return links.map(function (l) {
      return '<a class="chip" href="' + esc(l.url) + '"' +
             (/^(https?:)?\/\//.test(l.url) ? ' target="_blank" rel="noopener noreferrer"' : "") +
             ">" + icon(l.icon) + "<span>" + esc(l.label) + "</span></a>";
    }).join("");
  }

  /* ── Build sections ────────────────────────────────────────────────── */
  var byId = {};
  (DATA.teams || []).forEach(function (t) {
    (t.projects || []).forEach(function (pr) { byId[pr.id] = { project: pr, team: t }; });
  });

  var sectionsEl = $("#sections");
  var html = "";

  // Favorites first
  var fav = DATA.favorites || {};
  var favProjects = (fav.ids || []).map(function (id) { return byId[id]; }).filter(Boolean);
  if (favProjects.length) {
    html += sectionHTML({
      id: "favorites",
      eyebrow: "Start here",
      title: fav.title || "My Personal Favorites",
      desc: fav.description,
      meta: [],
      links: [],
      cards: favProjects.map(function (e) {
        return cardHTML(e.project, e.team, true);
      }).join("")
    });
  }

  (DATA.teams || []).forEach(function (team) {
    var meta = [];
    if (team.role)   { meta.push(esc(team.role)); }
    if (team.period) { meta.push(esc(team.period)); }
    html += sectionHTML({
      id: team.id,
      eyebrow: team.eyebrow || team.period || "",
      title: team.name,
      desc: team.description,
      meta: meta,
      links: team.links,
      cards: (team.projects || []).map(function (pr) { return cardHTML(pr, team, false); }).join("")
        || '<p class="empty-note">No projects added to this team yet.</p>'
    });
  });

  sectionsEl.innerHTML = html;

  function sectionHTML(o) {
    return '' +
      '<section class="section" id="' + esc(o.id) + '">' +
        '<div class="section-head reveal">' +
          (o.eyebrow ? '<span class="section-eyebrow">' + esc(o.eyebrow) + "</span>" : "") +
          '<h2 class="section-title">' + esc(o.title) + "</h2>" +
          (o.meta && o.meta.length
            ? '<p class="section-meta">' + o.meta.join('<span class="dot"></span>') + "</p>" : "") +
          (o.desc ? '<p class="section-desc">' + esc(o.desc) + "</p>" : "") +
          (o.links && o.links.length ? '<div class="section-links">' + linkChips(o.links) + "</div>" : "") +
        "</div>" +
        '<div class="grid">' + o.cards + "</div>" +
      "</section>";
  }

  function cardHTML(pr, team, isFav) {
    var anchor = (isFav ? "fav-" : "") + pr.id;
    return '' +
      '<article class="card reveal' + (pr.wide ? " is-wide" : "") + '" id="' + esc(anchor) + '">' +
        mediaHTML(pr, anchor) +
        '<div class="card-body">' +
          (isFav
            ? '<span class="fav-badge">' + icon("star") + esc(team.name) + "</span>" : "") +
          '<h3 class="card-title">' + esc(pr.title) + "</h3>" +
          (pr.description ? '<p class="card-desc">' + esc(pr.description) + "</p>" : "") +
          (pr.tags && pr.tags.length
            ? '<div class="card-tags">' + pr.tags.map(function (t) {
                return '<span class="tag">' + esc(t) + "</span>";
              }).join("") + "</div>"
            : "") +
          (pr.links && pr.links.length
            ? '<div class="card-links">' + linkChips(pr.links) + "</div>" : "") +
        "</div>" +
      "</article>";
  }

  /* ── Media / carousel markup ───────────────────────────────────────── */
  function aspectFor(pr, m) {
    if (pr.aspect) { return pr.aspect; }
    if (pr.wide)   { return "16/9"; }
    return (m.type === "image") ? "4/3" : "16/9";
  }

  function mediaHTML(pr, anchor) {
    var items = pr.media || [];
    if (!items.length) { return ""; }
    var many = items.length > 1;

    var slides = items.map(function (m, i) {
      var inner;
      if (m.type === "image") {
        inner = '<img src="' + esc(m.src) + '" alt="' + esc(m.alt || pr.title) +
                '" loading="lazy" decoding="async" data-lb="' + esc(anchor) +
                '" tabindex="0" role="button" aria-label="Open ' +
                esc(m.alt || pr.title) + ' full screen">';
      } else if (m.type === "video") {
        inner = videoHTML(m);
      } else if (m.type === "youtube") {
        inner = '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(m.id) +
                '" title="' + esc(pr.title) + '" loading="lazy" allowfullscreen ' +
                'allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"></iframe>';
      } else if (m.type === "vimeo") {
        inner = '<iframe src="https://player.vimeo.com/video/' + esc(m.id) +
                '" title="' + esc(pr.title) + '" loading="lazy" allowfullscreen></iframe>';
      } else {
        inner = "";
      }
      return '<div class="slide" style="--ar:' + esc(aspectFor(pr, m)) +
             '" role="group" aria-label="' + (i + 1) + " of " + items.length + '">' + inner + "</div>";
    }).join("");

    // With no explicit aspect, let the first file decide the frame's shape so
    // portrait posters and vertical reels aren't pillarboxed in a landscape
    // well. A full-row card keeps at least 16/9 — an ultrawide film sheds its
    // bars, but a square or vertical file must not stretch a whole row down
    // the page. See the data-auto-ar pass further down for the clamps.
    var kind = items[0] && (items[0].type === "image" || items[0].type === "video");
    var auto = !pr.aspect && kind;

    return '' +
      '<div class="media"' + (many ? ' data-carousel tabindex="0"' : "") +
        (auto ? ' data-auto-ar="' + (pr.wide ? "wide" : "card") + '"' : "") + ">" +
        '<div class="viewport"><div class="track">' + slides + "</div></div>" +
        (many
          ? '<button class="car-btn car-prev" aria-label="Previous">' + '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>' + "</button>" +
            '<button class="car-btn car-next" aria-label="Next">' + '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>' + "</button>" +
            '<div class="counter"><span class="cur">1</span>/' + items.length + "</div>" +
            '<div class="dots">' + items.map(function (_, i) {
              return '<button class="dot-btn' + (i ? "" : " is-on") +
                     '" aria-label="Go to ' + (i + 1) + '"></button>';
            }).join("") + "</div>"
          : "") +
      "</div>";
  }

  function videoHTML(m) {
    return '' +
      '<div class="vwrap paused muted">' +
        '<video preload="metadata" playsinline muted' +
          (m.poster ? ' poster="' + esc(m.poster) + '"' : "") +
          (m.loop ? " loop" : "") +
          '><source src="' + esc(m.src) + '"></video>' +
        '<div class="vplay"><span>' + icon("play") + "</span></div>" +
        '<div class="vbar">' +
          '<button class="vbtn v-toggle" aria-label="Play or pause">' +
            '<span class="i-play">' + icon("play") + "</span>" +
            '<span class="i-pause">' + icon("pause") + "</span>" +
          "</button>" +
          '<div class="vseek"><div class="vseek-fill"></div></div>' +
          '<span class="vtime">0:00</span>' +
          '<button class="vbtn v-mute" aria-label="Mute or unmute">' +
            '<span class="i-mute">' + icon("volume") + "</span>" +
            '<span class="i-unmute">' + icon("muted") + "</span>" +
          "</button>" +
          '<button class="vbtn v-full" aria-label="Fullscreen">' + icon("expand") + "</button>" +
        "</div>" +
      "</div>";
  }

  /* ── Sidebar navigation ────────────────────────────────────────────── */
  var navHTML = "";
  if (favProjects.length) {
    navHTML += navItem("favorites", fav.title || "My Personal Favorites", icon("star"), []);
    navHTML += '<li class="nav-sep" aria-hidden="true"></li>';
  }
  (DATA.teams || []).forEach(function (team) {
    navHTML += navItem(
      team.id, team.name,
      esc((team.name || "?").trim().charAt(0).toUpperCase()),
      (team.projects || []).map(function (pr) { return { id: pr.id, title: pr.title }; })
    );
  });
  $("#navList").innerHTML = navHTML;

  function navItem(id, label, badge, subs) {
    return '' +
      '<li class="nav-item">' +
        '<a class="nav-link" href="#' + esc(id) + '" data-target="' + esc(id) + '">' +
          '<span class="nav-badge">' + badge + "</span>" +
          '<span class="nav-label">' + esc(label) + "</span>" +
          (subs.length ? '<span class="nav-caret" aria-hidden="true">' + icon("caret") + "</span>" : "") +
        "</a>" +
        (subs.length
          ? '<ul class="nav-sub">' + subs.map(function (s) {
              return '<li><a href="#' + esc(s.id) + '" data-target="' + esc(s.id) + '">' +
                     esc(s.title) + "</a></li>";
            }).join("") + "</ul>"
          : "") +
      "</li>";
  }

  /* ── Frame shape follows the first file ────────────────────────────── */
  $$(".media[data-auto-ar]").forEach(function (media) {
    // A normal card may go as tall as 9:16 (a vertical reel fits exactly);
    // a full-row card may not go below 16/9. Both stop at cinemascope.
    var wide = media.getAttribute("data-auto-ar") === "wide";
    var lo = wide ? 16 / 9 : 0.56;
    var hi = wide ? 2.45 : 2.2;

    function fit(w, h) {
      if (!w || !h) { return; }
      var native = w / h;
      var r = Math.max(lo, Math.min(hi, native));
      $$(".slide", media).forEach(function (s) { s.style.setProperty("--ar", r); });
      // `cover` is only safe once the frame is the same shape as the file, and
      // only on a single-item frame — every slide shares one --ar, so in a
      // mixed carousel the odd one out would get cropped. Anything else keeps
      // `contain` so nothing is cut out of the work.
      media.classList.toggle("is-fitted",
        $$(".slide", media).length === 1 && Math.abs(r - native) < 0.005);
    }

    var img = $(".slide img", media);
    if (img) {
      var fitImg = function () { fit(img.naturalWidth, img.naturalHeight); };
      if (img.complete) { fitImg(); } else { img.addEventListener("load", fitImg); }
      return;
    }

    var vid = $(".slide video", media);
    if (!vid) { return; }
    // The poster resolves well before the video's own metadata, so measure it
    // first; the file itself then corrects the frame if there is no poster.
    var poster = vid.getAttribute("poster");
    if (poster) {
      var pi = new Image();
      pi.onload = function () { fit(pi.naturalWidth, pi.naturalHeight); };
      pi.src = poster;
    }
    var fitVid = function () { fit(vid.videoWidth, vid.videoHeight); };
    if (vid.readyState >= 1) { fitVid(); }
    else { vid.addEventListener("loadedmetadata", fitVid); }
  });

  /* ── Carousels ─────────────────────────────────────────────────────── */
  $$("[data-carousel]").forEach(function (car) {
    var track  = $(".track", car);
    var slides = $$(".slide", car);
    var dots   = $$(".dot-btn", car);
    var cur    = $(".cur", car);
    var prev   = $(".car-prev", car);
    var next   = $(".car-next", car);
    var i = 0;

    function go(n) {
      i = Math.max(0, Math.min(slides.length - 1, n));
      track.style.transform = "translateX(" + (-i * 100) + "%)";
      dots.forEach(function (d, k) { d.classList.toggle("is-on", k === i); });
      if (cur) { cur.textContent = i + 1; }
      prev.disabled = i === 0;
      next.disabled = i === slides.length - 1;
      // Stop any video that just slid out of view.
      $$("video", car).forEach(function (v, k) {
        if (k !== i && !v.paused) { v.pause(); }
      });
    }

    prev.addEventListener("click", function () { go(i - 1); });
    next.addEventListener("click", function () { go(i + 1); });
    dots.forEach(function (d, k) { d.addEventListener("click", function () { go(k); }); });

    car.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft")  { e.preventDefault(); go(i - 1); }
      if (e.key === "ArrowRight") { e.preventDefault(); go(i + 1); }
    });

    // Touch swipe
    var x0 = null, y0 = null;
    car.addEventListener("touchstart", function (e) {
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
    }, { passive: true });
    car.addEventListener("touchend", function (e) {
      if (x0 === null) { return; }
      var dx = e.changedTouches[0].clientX - x0;
      var dy = e.changedTouches[0].clientY - y0;
      if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) { go(dx < 0 ? i + 1 : i - 1); }
      x0 = y0 = null;
    }, { passive: true });

    go(0);
  });

  /* ── Video players ─────────────────────────────────────────────────── */
  function fmt(s) {
    if (!isFinite(s)) { return "0:00"; }
    var m = Math.floor(s / 60), r = Math.floor(s % 60);
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  $$(".vwrap").forEach(function (w) {
    var v    = $("video", w);
    var fill = $(".vseek-fill", w);
    var seek = $(".vseek", w);
    var time = $(".vtime", w);

    // Starts muted so the browser will preload it, then turns sound on for the
    // first deliberate play — the edit's audio is part of the work.
    var firstPlay = true;

    function toggle() {
      if (v.paused) {
        // Only one video plays at a time across the page.
        $$("video").forEach(function (o) { if (o !== v && !o.paused) { o.pause(); } });
        if (firstPlay) {
          firstPlay = false;
          v.muted = false;
          w.classList.remove("muted");
        }
        v.play().catch(function () {});
      } else { v.pause(); }
    }

    $(".vplay", w).addEventListener("click", toggle);
    $(".v-toggle", w).addEventListener("click", toggle);

    $(".v-mute", w).addEventListener("click", function () {
      v.muted = !v.muted;
      w.classList.toggle("muted", v.muted);
    });

    $(".v-full", w).addEventListener("click", function () {
      if (document.fullscreenElement) { document.exitFullscreen(); }
      else if (w.requestFullscreen) { w.requestFullscreen(); }
      else if (v.webkitEnterFullscreen) { v.webkitEnterFullscreen(); }
    });

    v.addEventListener("play",  function () { w.classList.add("playing"); w.classList.remove("paused"); });
    v.addEventListener("pause", function () { w.classList.remove("playing"); w.classList.add("paused"); });
    v.addEventListener("ended", function () { w.classList.remove("playing"); w.classList.add("paused"); });

    v.addEventListener("timeupdate", function () {
      var pct = v.duration ? (v.currentTime / v.duration) * 100 : 0;
      fill.style.width = pct + "%";
      time.textContent = fmt(v.currentTime) + " / " + fmt(v.duration);
    });
    v.addEventListener("loadedmetadata", function () {
      time.textContent = "0:00 / " + fmt(v.duration);
    });

    function scrub(e) {
      var r = seek.getBoundingClientRect();
      var x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
      if (v.duration) { v.currentTime = Math.max(0, Math.min(1, x / r.width)) * v.duration; }
    }
    seek.addEventListener("click", scrub);
    seek.addEventListener("touchstart", scrub, { passive: true });

    // Pause when scrolled out of view.
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (!en.isIntersecting && !v.paused) { v.pause(); } });
      }, { threshold: 0.15 }).observe(w);
    }
  });

  /* ── Missing-file placeholders ─────────────────────────────────────── */
  var WARN = '<svg viewBox="0 0 24 24"><path d="M12 3.6L1.8 20.4h20.4z"/><path d="M12 10v4M12 17.4v.01"/></svg>';

  function missingTile(kind, path) {
    return '<div class="missing">' + WARN +
           "<b>" + esc(kind) + " not found</b><code>" + esc(path) + "</code></div>";
  }

  $$(".slide img").forEach(function (im) {
    function fail() {
      var slide = im.closest(".slide");
      if (slide) { slide.innerHTML = missingTile("Image", im.getAttribute("src")); }
    }
    im.addEventListener("error", fail);
    // Catch images that already failed before this listener was attached.
    if (im.complete && im.naturalWidth === 0) { fail(); }
  });

  $$(".vwrap video").forEach(function (v) {
    v.addEventListener("error", function () {
      var src = (v.querySelector("source") || {}).src || "";
      var slide = v.closest(".slide") || v.closest(".vwrap");
      if (slide) { slide.innerHTML = missingTile("Video", src.replace(location.origin + "/", "")); }
    }, true);
  });

  /* ── Lightbox ──────────────────────────────────────────────────────── */
  var lb = $("#lightbox"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  var gKey = null, gIdx = 0, lastFocus = null;

  // The group is read from the live DOM on every use, so an image that failed
  // to load (and was swapped for a placeholder) never shows up in the viewer.
  function group() {
    return gKey ? $$('.slide img[data-lb="' + gKey + '"]') : [];
  }

  document.addEventListener("click", function (e) {
    var im = e.target.closest && e.target.closest("img[data-lb]");
    if (!im) { return; }
    gKey = im.getAttribute("data-lb");
    open(group().indexOf(im), im);
  });

  function open(i, trigger) {
    gIdx = Math.max(0, i);
    lastFocus = trigger || null;
    render();
    lb.hidden = false;
    document.body.classList.add("no-scroll");
    requestAnimationFrame(function () { lb.classList.add("show"); });
    $("#lbClose").focus();
  }
  function render() {
    var g = group();
    var im = g[gIdx];
    if (!im) { return; }
    lbImg.src = im.currentSrc || im.src;
    lbImg.alt = im.alt || "";
    lbCap.textContent = (g.length > 1 ? (gIdx + 1) + " / " + g.length + "  ·  " : "") + (im.alt || "");
    $("#lbPrev").hidden = g.length < 2;
    $("#lbNext").hidden = g.length < 2;
  }
  function step(d) {
    var g = group();
    if (g.length < 2) { return; }
    gIdx = (gIdx + d + g.length) % g.length;
    render();
  }
  function close() {
    lb.classList.remove("show");
    document.body.classList.remove("no-scroll");
    var done = function () { lb.hidden = true; lbImg.removeAttribute("src"); };
    if (reduceMotion) { done(); } else { setTimeout(done, 320); }
    if (lastFocus) { lastFocus.focus({ preventScroll: true }); }
  }

  $("#lbClose").addEventListener("click", close);
  $("#lbPrev").addEventListener("click", function () { step(-1); });
  $("#lbNext").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) {
    if (e.target === lb || e.target.classList.contains("lb-figure")) { close(); }
  });
  document.addEventListener("keydown", function (e) {
    // Enter / Space on a focused poster opens the viewer.
    if (lb.hidden) {
      if (e.key !== "Enter" && e.key !== " ") { return; }
      var im = document.activeElement;
      if (im && im.matches && im.matches("img[data-lb]")) {
        e.preventDefault();
        gKey = im.getAttribute("data-lb");
        open(group().indexOf(im), im);
      }
      return;
    }
    if (e.key === "Escape")     { close(); }
    if (e.key === "ArrowLeft")  { e.preventDefault(); step(-1); }
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    if (e.key === "Tab")        { e.preventDefault(); $("#lbClose").focus(); }
  });

  /* ── Mobile drawer ─────────────────────────────────────────────────── */
  var sidebar = $("#sidebar"), menuBtn = $("#menuBtn"), scrim = $("#scrim");
  function setDrawer(on) {
    sidebar.classList.toggle("open", on);
    menuBtn.setAttribute("aria-expanded", String(on));
    if (on) {
      scrim.hidden = false;
      requestAnimationFrame(function () { scrim.classList.add("show"); });
    } else {
      scrim.classList.remove("show");
      setTimeout(function () { scrim.hidden = true; }, 320);
    }
  }
  menuBtn.addEventListener("click", function () {
    setDrawer(menuBtn.getAttribute("aria-expanded") !== "true");
  });
  scrim.addEventListener("click", function () { setDrawer(false); });

  /* ── Smooth scroll + scrollspy ─────────────────────────────────────── */
  var navLinks = $$("#navList a");

  navLinks.forEach(function (a) {
    a.addEventListener("click", function (e) {
      var el = document.getElementById(a.getAttribute("data-target"));
      if (!el) { return; }
      e.preventDefault();
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
      history.replaceState(null, "", "#" + a.getAttribute("data-target"));
      if (window.innerWidth <= 900) { setDrawer(false); }
    });
  });

  var spyTargets = navLinks.map(function (a) {
    return { link: a, el: document.getElementById(a.getAttribute("data-target")) };
  }).filter(function (t) { return t.el; });

  var ticking = false;
  function spy() {
    ticking = false;
    var y = window.scrollY + 140, best = null;
    spyTargets.forEach(function (t) {
      if (t.el.offsetTop <= y) { best = t; }
    });
    navLinks.forEach(function (a) { a.classList.remove("is-active"); });
    $$(".nav-item.is-current").forEach(function (el) { el.classList.remove("is-current"); });
    if (best) {
      best.link.classList.add("is-active");
      // Keep the parent team highlighted when a project link is active.
      var parentSub = best.link.closest(".nav-sub");
      if (parentSub) {
        var top = parentSub.parentElement.querySelector(".nav-link");
        if (top) { top.classList.add("is-active"); }
      }
      // The team the page is sitting in, flagged on the <li> itself so the CSS
      // that opens its project list doesn't have to re-run a :has() on every
      // scroll tick.
      var item = best.link.closest(".nav-item");
      if (item) { item.classList.add("is-current"); }
    }
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(spy); }
  }, { passive: true });
  window.addEventListener("resize", spy);
  spy();

  $("#toTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  });

  /* ── Scroll reveal ─────────────────────────────────────────────────── */
  if (reduceMotion || !("IntersectionObserver" in window)) {
    $$(".reveal").forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
    $$(".reveal").forEach(function (el) { io.observe(el); });
    // Safety net: anything still hidden after 2.5s gets shown anyway.
    setTimeout(function () {
      $$(".reveal:not(.in)").forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) { el.classList.add("in"); }
      });
    }, 2500);
  }

  // Honour a #hash in the URL after everything is rendered.
  if (location.hash) {
    var target = document.getElementById(location.hash.slice(1));
    if (target) { setTimeout(function () { target.scrollIntoView(); spy(); }, 60); }
  }
})();
