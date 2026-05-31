/* ============================================================
   APP LOGIC — "Blueprint" Portfolio
   ============================================================ */
(function () {
  "use strict";
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const pad2 = n => String(n).padStart(2, "0");

  let lang = localStorage.getItem("cdpa-lang") || "fr";
  let theme = localStorage.getItem("cdpa-theme") || "dark";
  let activeFilter = "all";

  /* ---------- THEME ---------- */
  function applyTheme(t) {
    theme = t;
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("cdpa-theme", t);
  }
  applyTheme(theme);

  /* ---------- I18N ---------- */
  function t(key) { return (I18N[lang] && I18N[lang][key]) || (I18N.fr[key] || key); }
  function applyI18n() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    $$(".lang-switch button").forEach(b => b.classList.toggle("active", b.dataset.lang === lang));
    localStorage.setItem("cdpa-lang", lang);
    renderSkills(); renderExperience(); renderEducation(); renderFilters(); renderProjects();
  }
  function setLang(l) { lang = l; applyI18n(); }

  /* ---------- SKILLS (BOM TABLE) ---------- */
  function renderSkills() {
    const body = $("#bomBody"); if (!body) return;
    body.innerHTML = SKILLS.map((s, i) => `
      <tr>
        <td class="bom-no">${pad2(i + 1)}</td>
        <td class="bom-cat">${s.ico} ${s.title[lang]}</td>
        <td class="bom-items">${s.items.join("  ·  ")}</td>
      </tr>`).join("");
  }

  /* ---------- EXPERIENCE ---------- */
  const ORG_LOGO = `<svg class="org-logo" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 2.4l8.4 4.85v9.5L12 21.6 3.6 16.75v-9.5z" fill="none" stroke="currentColor" stroke-width="1.3" opacity=".45"/><path d="M8.5 16.2V7.8l7 8.4V7.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  function renderExperience() {
    const wrap = $("#timeline"); if (!wrap) return;
    wrap.innerHTML = EXPERIENCE.map(x => `
      <div class="tl-item reveal">
        <div class="tl-when">${x.when[lang]}</div>
        <div class="tl-role">${x.role[lang]}</div>
        <div class="tl-org">${x.brand ? ORG_LOGO : ""}<b>${x.org[lang]}</b> · ${x.place}${x.web ? `<span class="tl-web">${x.web} ↗</span>` : ""}</div>
        <ul class="tl-desc">${x.points[lang].map(p => `<li>${p}</li>`).join("")}</ul>
      </div>`).join("");
    observeReveals(wrap);
  }

  /* ---------- EDUCATION ---------- */
  function renderEducation() {
    const wrap = $("#eduGrid"); if (!wrap) return;
    wrap.innerHTML = EDUCATION.map(e => `
      <article class="edu-card reveal">
        <div class="ec-when">${e.when[lang]}</div>
        <h4>${e.title[lang]}</h4>
        <p>${e.org}</p>
      </article>`).join("");
    observeReveals(wrap);
  }

  /* ---------- FILTERS ---------- */
  function renderFilters() {
    const wrap = $("#filters"); if (!wrap) return;
    wrap.innerHTML = CATEGORIES.map(c =>
      `<button data-cat="${c.key}" class="${c.key === activeFilter ? "active" : ""}">${c.label[lang]}</button>`).join("");
    $$("#filters button").forEach(b => b.addEventListener("click", () => {
      activeFilter = b.dataset.cat;
      $$("#filters button").forEach(x => x.classList.toggle("active", x === b));
      renderProjects();
    }));
  }

  /* ---------- PROJECTS (SHEETS) ---------- */
  function renderProjects() {
    const wrap = $("#workGrid"); if (!wrap) return;
    const list = PROJECTS.filter(p => activeFilter === "all" || p.cat === activeFilter);
    wrap.innerHTML = list.map((p, i) => {
      const id = "P-" + pad2(i + 1);
      const cat = (p.catLabel && p.catLabel[lang]) || p.cat;
      return `
      <article class="sheet reveal" data-cat="${p.cat}">
        <div class="sheet-img">
          <span class="sheet-tag mono">${id}</span>
          <img class="proj-shot" src="assets/img/${p.id}.png" alt="${p.name}" loading="eager" fetchpriority="high" decoding="async"
               onerror="this.dataset.i=(+this.dataset.i||0)+1;var e=['jpg','jpeg','webp'];if(this.dataset.i<=e.length){this.src='assets/img/${p.id}.'+e[this.dataset.i-1]}else{this.closest('.sheet-img').remove()}">
        </div>
        <div class="sheet-body">
          <div class="sheet-id mono"><span>${id}</span>/<span class="cat">${cat}</span></div>
          <h3>${p.name}</h3>
          <div class="stype">${p.type[lang]}</div>
          <p>${p.desc[lang]}</p>
        </div>
        <div class="sheet-specs"><b>STACK</b> &nbsp;${p.tags.join("  ·  ")}</div>
      </article>`;
    }).join("");
    observeReveals(wrap);
  }

  /* ---------- REVEAL OBSERVER ---------- */
  let io;
  function observeReveals(scope) {
    if (!io) {
      io = new IntersectionObserver(entries => {
        entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.1, rootMargin: "0px 0px -8% 0px" });
    }
    $$(".reveal:not(.in)", scope).forEach((el, i) => {
      el.style.transitionDelay = `${Math.min(i * 55, 330)}ms`;
      io.observe(el);
    });
  }

  /* ---------- COUNTERS ---------- */
  function animateCounters() {
    $$(".num[data-count]").forEach(el => {
      const target = +el.dataset.count, dur = 1200, t0 = performance.now();
      (function step(now) {
        const k = Math.min((now - t0) / dur, 1);
        el.textContent = Math.round((1 - Math.pow(1 - k, 3)) * target);
        if (k < 1) requestAnimationFrame(step);
      })(t0);
    });
  }
  const statObs = new IntersectionObserver((e, o) => {
    if (e[0].isIntersecting) { animateCounters(); o.disconnect(); }
  }, { threshold: 0.4 });

  /* ---------- NAV ---------- */
  function initNav() {
    const nav = $("#nav");
    window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 24), { passive: true });
    const menuBtn = $("#menuBtn"), navLinks = $("#navLinks");
    menuBtn.addEventListener("click", () => { menuBtn.classList.toggle("open"); navLinks.classList.toggle("open"); });
    $$("#navLinks a").forEach(a => a.addEventListener("click", () => { menuBtn.classList.remove("open"); navLinks.classList.remove("open"); }));
    const spy = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          const id = en.target.id;
          $$("#navLinks a").forEach(a => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    $$("main section[id]").forEach(s => spy.observe(s));
  }

  /* ---------- CROSSHAIR CURSOR ---------- */
  function initCrosshair() {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const xh = $("#xhair"), v = $(".xh-v", xh), h = $(".xh-h", xh); let raf;
    window.addEventListener("pointermove", e => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        v.style.left = e.clientX + "px"; h.style.top = e.clientY + "px";
        xh.style.opacity = "1"; raf = null;
      });
    });
    document.addEventListener("pointerleave", () => xh.style.opacity = "0");
  }

  /* ---------- SPLASH (PLOTTER) ---------- */
  function initSplash() {
    const splash = $("#splash"), pct = $("#splashPct"), fill = $("#splashFill"), skip = $("#splashSkip");
    document.body.classList.add("lock");
    let killed = false;
    function done() {
      if (killed) return; killed = true;
      pct.textContent = "100"; fill.style.width = "100%";
      splash.classList.add("done");
      document.body.classList.remove("lock");
      setTimeout(() => splash.remove(), 700);
      observeReveals(document);
      $$(".stats").forEach(s => statObs.observe(s));
    }
    const dur = 1900, t0 = performance.now();
    (function step(now) {
      if (killed) return;
      const k = Math.min((now - t0) / dur, 1), v = Math.round(k * 100);
      pct.textContent = String(v).padStart(3, "0");
      fill.style.width = v + "%";
      if (k < 1) requestAnimationFrame(step); else setTimeout(done, 280);
    })(t0);
    skip.addEventListener("click", done);
    document.addEventListener("keydown", e => { if (e.key === "Escape") done(); });
    setTimeout(done, 4400);
  }

  /* ---------- INIT ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    $("#year").textContent = new Date().getFullYear();
    $("#themeToggle").addEventListener("click", () => applyTheme(theme === "dark" ? "light" : "dark"));
    $$(".lang-switch button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
    applyI18n();
    initNav();
    initCrosshair();
    initSplash();
  });
})();
