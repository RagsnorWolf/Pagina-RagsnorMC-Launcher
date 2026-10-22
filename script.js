/* ============================================================
   RAGSMC LAUNCHER — script.js
   Loader, GSAP/Lenis/SplitText, partículas, reveal, sonidos,
   tema, copia al portapapel, menú móvil, carrusel, FAQ, toast.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Sonidos WebAudio ---------- */
  const ACtx = window.AudioContext || window.webkitAudioContext;
  const ctx = ACtx ? new ACtx() : null;
  function synth(name) {
    if (!ctx) return;
    const t = ctx.currentTime;
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    if (name === "click") { o.type = "square"; o.frequency.setValueAtTime(880, t); o.frequency.exponentialRampToValueAtTime(1100, t + 0.08); g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.12); o.start(t); o.stop(t + 0.12); }
    else if (name === "pop") { o.type = "sine"; o.frequency.setValueAtTime(600, t); o.frequency.exponentialRampToValueAtTime(1200, t + 0.1); g.gain.setValueAtTime(0.15, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.18); o.start(t); o.stop(t + 0.18); }
    else if (name === "dl") { o.type = "sawtooth"; o.frequency.setValueAtTime(220, t); o.frequency.linearRampToValueAtTime(440, t + 0.15); g.gain.setValueAtTime(0.1, t); g.gain.linearRampToValueAtTime(0.001, t + 0.3); o.start(t); o.stop(t + 0.3); }
    else { o.type = "sine"; o.frequency.setValueAtTime(440, t); g.gain.setValueAtTime(0.1, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.1); o.start(t); o.stop(t + 0.1); }
  }
  function playSfx(n) {
    const f = { click: "./assets/sfx/click.mp3", pop: "./assets/sfx/pop.mp3", dl: "./assets/sfx/dl.mp3" }[n];
    if (f && ctx) { fetch(f).then(r => r.arrayBuffer()).then(b => ctx.decodeAudioData(b)).then(bd => { const s = ctx.createBufferSource(); s.buffer = bd; s.connect(ctx.destination); s.start(0); }).catch(() => synth(n)); }
    else synth(n);
  }
  document.addEventListener("click", e => { const el = e.target.closest("[data-sfx]"); if (el) playSfx(el.dataset.sfx); });

  /* ---------- Música ---------- */
  const musicBtn = document.getElementById("musicBtn");
  const music = new Audio("./assets/audio/c418.mp3");
  music.loop = true;
  music.volume = 0.3;
  let started = false;
  if (musicBtn) musicBtn.addEventListener("click", () => {
    if (!started) { music.play().catch(() => {}); started = true; }
    if (music.paused) music.play(); else music.pause();
    playSfx("pop");
  });
  document.body.addEventListener("click", () => { if (!started) { music.play().catch(() => {}); started = true; } }, { once: true });

  /* ---------- Tema ---------- */
  const themeBtn = document.getElementById("themeBtn");
  const sun = document.getElementById("themeSun");
  const moon = document.getElementById("themeMoon");
  const dark = localStorage.getItem("ragsmc-theme") !== "light";
  function setTheme(d) {
    document.documentElement.setAttribute("data-theme", d ? "dark" : "light");
    localStorage.setItem("ragsmc-theme", d ? "dark" : "light");
    if (sun) sun.classList.toggle("hidden", d);
    if (moon) moon.classList.toggle("hidden", !d);
  }
  setTheme(dark);
  if (themeBtn) themeBtn.addEventListener("click", () => { setTheme(document.documentElement.getAttribute("data-theme") !== "dark"); playSfx("pop"); });

  /* ---------- Año ---------- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Loader ---------- */
  const loader = document.getElementById("loaderBox");
  const fill = document.getElementById("loaderFill");
  const pct = document.getElementById("loaderPct");
  let prog = 0;
  const li = setInterval(() => {
    prog += Math.random() * 13;
    if (prog >= 100) { prog = 100; clearInterval(li); }
    if (fill) fill.style.width = prog + "%";
    if (pct) pct.textContent = Math.floor(prog);
    if (prog >= 100) {
      setTimeout(() => {
        if (loader) loader.classList.add("done");
        initAnimations();
      }, 350);
    }
  }, 100);
  setTimeout(() => { if (loader && !loader.classList.contains("done")) { loader.classList.add("done"); initAnimations(); } }, 5000);

  /* ---------- GSAP / Lenis / SplitText ---------- */
  function initAnimations() {
    try { if (typeof gsap !== "undefined") gsap.registerPlugin(ScrollTrigger, SplitText); } catch (e) { console.warn("GSAP plugins", e); }
    let lenis;
    try {
      lenis = new Lenis({ duration: 1.2, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smooth: true, touchMultiplier: 1.35 });
      function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
      requestAnimationFrame(raf);
      lenis.on("scroll", () => { const s = window.pageYOffset || document.documentElement.scrollTop; const h = document.documentElement.scrollHeight - window.innerHeight; const pf = document.getElementById("progressFill"); if (pf) pf.style.width = (s / h * 100) + "%"; updateNavbar(); });
    } catch (e) { console.warn("Lenis", e); window.addEventListener("scroll", () => { updateNavbar(); }); }

    // SplitText hero
    try {
      if (typeof SplitText !== "undefined" && typeof gsap !== "undefined") {
        const split = new SplitText(".split-target", { type: "chars, words", charsClass: "char" });
        gsap.from(split.chars, { opacity: 0, y: 40, rotateX: -40, duration: 0.7, stagger: 0.035, ease: "back.out(1.7)", delay: 0.4 });
      }
    } catch (e) { console.warn("SplitText", e); }

    // Reveal secciones
    try {
      if (typeof gsap !== "undefined") {
        gsap.utils.toArray(".reveal").forEach(el => {
          const d = el.dataset.delay ? parseInt(el.dataset.delay) / 1000 : 0;
          ScrollTrigger.create({ trigger: el, start: "top 82%", once: true, onEnter: () => { el.classList.add("visible"); gsap.to(el, { opacity: 1, y: 0, filter: "blur(0)", duration: 0.7, delay: d, ease: "power2.out" }); } });
        });
      }
    } catch (e) { console.warn("Reveal", e); }

    // Hero coords animadas
    setInterval(() => {
      const cx = document.getElementById("cX"); const cy = document.getElementById("cY"); const cz = document.getElementById("cZ");
      if (cx) cx.textContent = "X: " + (Math.floor(Math.random() * 2000) - 1000);
      if (cy) cy.textContent = "Y: " + (64 + Math.floor(Math.random() * 4) - 2);
      if (cz) cz.textContent = "Z: " + (Math.floor(Math.random() * 2000) - 1000);
    }, 1500);

    // Partículas hero canvas
    const canvas = document.getElementById("heroParticles");
    if (canvas) {
      const c = canvas.getContext("2d"); let w, h, pts = [];
      function rs() { w = canvas.width = canvas.parentElement.clientWidth; h = canvas.height = canvas.parentElement.clientHeight; }
      window.addEventListener("resize", rs); rs();
      for (let i = 0; i < 30; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 2 + 1, a: Math.random() * 0.5 + 0.1 });
      function draw() {
        c.clearRect(0, 0, w, h);
        c.fillStyle = "#22c55e";
        for (const p of pts) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          c.globalAlpha = p.a;
          c.beginPath(); c.arc(p.x, p.y, p.r, 0, Math.PI * 2); c.fill();
        }
        requestAnimationFrame(draw);
      }
      draw();
    }
  }

  /* ---------- Navbar ---------- */
  const navbar = document.getElementById("navbar");
  function updateNavbar() {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    if (y > 40) navbar.classList.add("py-2", "h-16"); else navbar.classList.remove("py-2", "h-16");
  }
  window.addEventListener("scroll", updateNavbar);

  /* ---------- Menú móvil ---------- */
  const burger = document.getElementById("burger");
  const mm = document.getElementById("mobileMenu");
  if (burger && mm) {
    burger.addEventListener("click", () => { mm.classList.toggle("hidden"); burger.setAttribute("aria-expanded", mm.classList.contains("hidden") ? "false" : "true"); });
    mm.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { mm.classList.add("hidden"); burger.setAttribute("aria-expanded", "false"); }));
  }

  /* ---------- Scroll suave anclas ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth" }); }
    });
  });

  /* ---------- Volver arriba ---------- */
  const tt = document.createElement("button");
  tt.className = "fixed right-6 bottom-6 w-10 h-10 rounded-full glass flex items-center justify-center text-[#64748B] hover:text-[#E85D4C] opacity-0 invisible transition-all duration-300 z-40";
  tt.innerHTML = '<i class="lucide lucide-arrow-up w-5 h-5"></i>';
  tt.setAttribute("aria-label", "Volver arriba");
  document.body.appendChild(tt);
  window.addEventListener("scroll", () => { tt.classList.toggle("opacity-0", window.pageYOffset < 400); tt.classList.toggle("invisible", window.pageYOffset < 400); });
  tt.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Copiar IP / SHA ---------- */
  document.querySelectorAll("[data-clipboard]").forEach(btn => {
    btn.addEventListener("click", async () => {
      const val = btn.dataset.clipboard;
      try { await navigator.clipboard.writeText(val); const orig = btn.textContent; btn.textContent = "✓"; setTimeout(() => btn.textContent = orig, 1400); } catch (e) { console.warn("copy", e); }
      playSfx("click");
      showToast("Copiado al portapapeles");
    });
  });
  function showToast(m) {
    const t = document.getElementById("toast"); const mEl = document.getElementById("toastMsg");
    if (!t) return;
    if (mEl) mEl.textContent = m;
    t.classList.remove("toast-hidden"); t.classList.add("show");
    setTimeout(() => { t.classList.remove("show"); t.classList.add("toast-hidden"); }, 3000);
  }

  /* ---------- Carrusel galería ---------- */
  const track = document.getElementById("galleryTrack");
  const dots = document.getElementById("galleryDots");
  const slides = [
    { img: "./assets/images/launcher-avance-1.png", alt: "Pantalla Jugar" },
    { img: "./assets/images/launcher-avance-2.png", alt: "Selector 1.21.10" },
    { img: "./assets/images/launcher-avance-3.png", alt: "Launcher RagsMc" }
  ];
  let cur = 0;
  function renderGallery() {
    if (!track) return;
    track.innerHTML = slides.map((s, i) => `<button class="w-full h-full flex-shrink-0 [background-image:url('${s.img}')] [background-size:cover] [background-position:center] rounded-[32px] border border-white/10 opacity-0 transition-opacity duration-500 ${i === cur ? 'opacity-100' : ''}" aria-label="${s.alt}" style="aspect-ratio:16/9;"></button>`).join("");
    if (dots) dots.innerHTML = slides.map((_, i) => `<button class="w-2 h-2 rounded-full ${i === cur ? 'bg-[#E85D4C]' : 'bg-white/30'} transition-colors" aria-label="Slide ${i + 1}"></button>`).join("");
  }
  function next() { cur = (cur + 1) % slides.length; renderGallery(); }
  function prev() { cur = (cur - 1 + slides.length) % slides.length; renderGallery(); }
  document.querySelectorAll("button[aria-label='Anterior']").forEach(b => b.addEventListener("click", prev));
  document.querySelectorAll("button[aria-label='Siguiente']").forEach(b => b.addEventListener("click", next));
  setInterval(next, 4000);
  renderGallery();

  /* ---------- FAQ ---------- */
  document.querySelectorAll("details.faq-item summary").forEach(s => {
    s.addEventListener("click", () => {
      document.querySelectorAll("details.faq-item[open]").forEach(d => { if (d !== s.parentElement) d.removeAttribute("open"); });
    });
  });

  /* ---------- Form notify ---------- */
  const nf = document.getElementById("notifyForm");
  if (nf) {
    nf.addEventListener("submit", e => {
      e.preventDefault();
      const em = nf.elements.email.value.trim();
      if (!em) return;
      const list = JSON.parse(localStorage.getItem("ragsmc-notify") || "[]");
      if (!list.includes(em)) { list.push(em); localStorage.setItem("ragsmc-notify", JSON.stringify(list)); }
      showToast("Te avisaremos cuando haya novedades.");
      nf.reset();
      playSfx("dl");
    });
  }

  /* ---------- Lucide icons ---------- */
  if (typeof lucide !== "undefined") lucide.createIcons();

  window.RagsMc = { playSfx, showToast, setTheme };
})();
