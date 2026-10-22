/* ============================================================
   RAGSMC LAUNCHER — script.js
   Loader, GSAP/Lenis/SplitText, partículas, reveal, sonidos,
   tema/i18n, copia al portapapel, menú móvil, carrusel, FAQ,
   formularios.  ============================================================ */
(function () {
  "use strict";

  /* ---------- i18n ---------- */
  const i18n = {
    es: {
      nav: { home: "Inicio", acerca: "Acerca", features: "Características", servidor: "Servidor", galeria: "Galería", roadmap: "Hoja de ruta", descarga: "Descarga", comunidad: "Comunidad" },
      theme: { toggle: "Cambiar tema" },
      hero: { badge: "Proyecto independiente · v1.0.4", sub: "Rápido, simple y con identidad propia. Hecho por jugadores, para jugadores.", cta1: "Descargar para Windows", cta2: "Ver capturas", note: "Gratis · Sin registro · Windows 10/11" },
      about: { kicker: "Sobre el proyecto", title: "Un launcher con identidad propia", p1: "RagsMc Launcher es un proyecto independiente creado para ofrecer una experiencia moderna, rápida y personalizada para jugar Minecraft desde un solo lugar. Sin telemetría, sin registro obligatorio y con el control en tus manos.", p2: "Cada pantalla, sistema y decisión está siendo diseñado para construir una base sólida, estable y preparada para crecer junto a la comunidad." },
      feat: { kicker: "El núcleo", title: "Diseñado para jugar, no para configurar", desc: "Una base enfocada en lo importante, preparada para evolucionar junto al proyecto sin complejidades innecesarias.", "1t": "Inicio ultra-rápido", "1d": "Arranque veloz y sin complicaciones para que pases menos tiempo esperando y más tiempo jugando.", "2t": "Gestor de mods integrado", "2d": "Instala, activa y desactiva mods desde una interfaz integrada sin salir del launcher.", "3t": "Múltiples versiones", "3d": "Selector de versiones de Minecraft, incluyendo 1.21.1 Forge y otras configuraciones.", "4t": "Personalización total", "4d": "Temas, apariencia y opciones de personalización para que el launcher sea tuyo.", "5t": "Actualizaciones automáticas", "5d": "El launcher se mantiene al día con las últimas versiones y parches de forma automática.", "6t": "Diseño propio", "6d": "Estética premium inspirada en Minecraft pero con acabado de producto profesional moderno." },
      server: { kicker: "El servidor", title: "Juega en RagsMc", desc: "Conéctate a la comunidad con una dirección estable y sin complicaciones." },
      gal: { kicker: "Galería", title: "Así va el launcher", desc: "Capturas reales del desarrollo. Sin renders ni promesas vacías." },
      road: { kicker: "Hoja de ruta", title: "Creciendo con la comunidad", desc: "Sin promesas vacías. Cada fase avanza cuando está lista.", phase: "Fase", "p1t": "Concepto", "p1d": "Diseño y concepto inicial del launcher con identidad propia.", "p2t": "Desarrollo", "p2d": "Construcción del launcher base con gestor de mods y selector de versiones.", "p3t": "Testing", "p3d": "Pruebas, correcciones y estabilidad antes del primer release.", "p4t": "Release", "p4d": "Primera versión pública estable para Windows.", "p5t": "Actualizaciones", "p5d": "Mejoras y nuevas funciones según feedback de la comunidad.", done: "Completado", now: "Actual", next: "Pendiente" },
      dl: { kicker: "Descarga", title: "Consigue RagsMc Launcher", sub: "v1.0.4 · Windows 10/11 · 11.0 MB · Gratis y sin registro", cta: "Descargar para Windows", sha: "SHA-256:", alt: "Descarga alternativa", zip: "ZIP portable", linux: "Linux", linuxSoon: "Próximamente", src: "Código fuente en", av: "¿Tu antivirus lo marca? Lee esto", notify: "Avísame de novedades y nuevas versiones", btn: "Avisarme", ph: "tu@correo.com", privacy: "Tu correo se guarda solo en este dispositivo. Sin spam." },
      soc: { kicker: "Comunidad", title: "Síguenos", desc: "Contenido, avances y directos del proyecto.", twitch: "Twitch de RagsMc", tiktok: "TikTok de RagsMc", youtube: "YouTube de RagsMc", wa: "WhatsApp de RagsMc" },
      faq: { kicker: "Preguntas frecuentes", title: "¿Tenés dudas?", q1: "¿Qué es RagsMc Launcher?", a1: "RagsMc Launcher es un lanzador de Minecraft independiente, diseñado para ser rápido, simple y con identidad propia. Hecho por jugadores, para jugadores.", q2: "¿Es gratis?", a2: "Sí, RagsMc Launcher es completamente gratuito. No hay costos ocultos ni suscripciones obligatorias.", q3: "¿Qué sistemas son compatibles?", a3: "Por ahora para Windows 10/11. Linux llegará próximamente.", q4: "¿El launcher recopila mis datos?", a4: "No. No recopilamos ni compartemos tus datos personales.", q5: "¿Cómo me uno al servidor?", a5: "Usá la dirección ragsmc.dpdns.org con la versión 1.21.1 Forge desde el launcher." },
      misc: { top: "Volver arriba", copy: "Copiado al portapapeles" },
      lb: { close: "Cerrar" }
    },
    en: {
      nav: { home: "Home", acerca: "About", features: "Features", servidor: "Server", galeria: "Gallery", roadmap: "Roadmap", descarga: "Download", comunidad: "Community" },
      theme: { toggle: "Change theme" },
      hero: { badge: "Independent project · v1.0.4", sub: "Fast, simple and with its own identity. Made by players, for players.", cta1: "Download for Windows", cta2: "See captures", note: "Free · No registration · Windows 10/11" },
      about: { kicker: "About the project", title: "A launcher with its own identity", p1: "RagsMc Launcher is an independent project created to offer a modern, fast and personalized experience to play Minecraft from a single place. No telemetry, no mandatory registration and control in your hands.", p2: "Each screen, system and decision is being designed to build a solid, stable base ready to grow with the community." },
      feat: { kicker: "The core", title: "Designed to play, not to configure", desc: "A base focused on what matters, ready to evolve with the project without unnecessary complexity.", "1t": "Ultra-fast start", "1d": "Quick and uncomplicated launch so you spend less time waiting and more time playing.", "2t": "Integrated mods manager", "2d": "Install, activate and deactivate mods from an integrated interface without leaving the launcher.", "3t": "Multiple versions", "3d": "Minecraft version selector, including 1.21.1 Forge and other configurations.", "4t": "Total customization", "4d": "Themes, appearance and customization options so the launcher is yours.", "5t": "Automatic updates", "5d": "The launcher stays up to date with the latest versions and patches automatically.", "6t": "Own design", "6d": "Premium aesthetic inspired by Minecraft but with a professional product finish." },
      server: { kicker: "The server", title: "Play on RagsMc", desc: "Connect to the community with a stable address and no complications." },
      gal: { kicker: "Gallery", title: "How the launcher is going", desc: "Real development captures. No renders or empty promises." },
      road: { kicker: "Roadmap", title: "Growing with the community", desc: "No empty promises. Each phase advances when it's ready.", phase: "Phase", "p1t": "Concept", "p1d": "Design and initial concept of the launcher with its own identity.", "p2t": "Development", "p2d": "Building the base launcher with mods manager and version selector.", "p3t": "Testing", "p3d": "Tests, fixes and stability before the first release.", "p4t": "Release", "p4d": "First stable public version for Windows.", "p5t": "Updates", "p5d": "Improvements and new features according to community feedback.", done: "Completed", now: "Current", next: "Pending" },
      dl: { kicker: "Download", title: "Get RagsMc Launcher", sub: "v1.0.4 · Windows 10/11 · 11.0 MB · Free and no registration", cta: "Download for Windows", sha: "SHA-256:", alt: "Alternative download", zip: "ZIP portable", linux: "Linux", linuxSoon: "Coming soon", src: "Source code on", av: "Antivirus flagged it? Read this", notify: "Notify me about news and new versions", btn: "Notify me", ph: "your@email.com", privacy: "Your email is stored only on this device. No spam." },
      soc: { kicker: "Community", title: "Follow us", desc: "Content, news and live streams of the project.", twitch: "RagsMc Twitch", tiktok: "RagsMc TikTok", youtube: "RagsMc YouTube", wa: "RagsMc WhatsApp" },
      faq: { kicker: "Frequently asked questions", title: "Got questions?", q1: "What is RagsMc Launcher?", a1: "RagsMc Launcher is an independent Minecraft launcher, designed to be fast, simple and with its own identity. Made by players, for players.", q2: "Is it free?", a2: "Yes, RagsMc Launcher is completely free. No hidden costs or mandatory subscriptions.", q3: "What systems are compatible?", a3: "For now Windows 10/11. Linux will be coming soon.", q4: "Does the launcher collect my data?", a4: "No. We do not collect or share your personal data.", q5: "How do I join the server?", a5: "Use the address ragsmc.dpdns.org with version 1.21.1 Forge from the launcher." },
      misc: { top: "Back to top", copy: "Copied to clipboard" },
      lb: { close: "Close" }
    }
  };
  let lang = localStorage.getItem("ragsmc-lang") || "es";
  function t(k) {
    const p = k.split(".");
    let o = i18n[lang];
    for (const x of p) { if (!o || !(x in o)) return k; o = o[x]; }
    return typeof o === "string" ? o : k;
  }
  function applyLang() {
    document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
    document.querySelectorAll("[data-i18n-ph]").forEach(el => el.placeholder = t(el.dataset.i18nPh));
    document.querySelectorAll("[data-i18n-aria]").forEach(el => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.documentElement.lang = lang;
  }
  document.querySelectorAll(".lang-btn").forEach(b => b.addEventListener("click", () => { lang = b.dataset.lang; localStorage.setItem("ragsmc-lang", lang); applyLang(); playSfx("click"); }));

  /* ---------- Tema ---------- */
  const themeBtn = document.getElementById("themeBtn");
  const sun = document.getElementById("themeSun");
  const moon = document.getElementById("themeMoon");
  const dark = localStorage.getItem("ragsmc-theme") !== "light";
  function setTheme(d) {
    document.documentElement.setAttribute("data-theme", d ? "dark" : "light");
    localStorage.setItem("ragsmc-theme", d ? "dark" : "light");
    if (sun) { sun.classList.toggle("hidden", d); }
    if (moon) { moon.classList.toggle("hidden", !d); }
  }
  setTheme(dark);
  if (themeBtn) themeBtn.addEventListener("click", () => { setTheme(document.documentElement.getAttribute("data-theme") !== "dark"); playSfx("pop"); });

  /* ---------- Año ---------- */
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

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
    if (music.paused) { music.play(); } else { music.pause(); }
    playSfx("portal");
  });
  document.body.addEventListener("click", () => { if (!started) { music.play().catch(() => {}); started = true; } }, { once: true });

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
      lenis.on("scroll", () => { const s = window.pageYOffset || document.documentElement.scrollTop; const h = document.documentElement.scrollHeight - window.innerHeight; document.getElementById("progressFill") && (document.getElementById("progressFill").style.width = (s / h * 100) + "%"); updateNavbar(); });
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
      const ctx2 = canvas.getContext("2d"); let w, h, pts = [];
      function rs() { w = canvas.width = canvas.parentElement.clientWidth; h = canvas.height = canvas.parentElement.clientHeight; }
      window.addEventListener("resize", rs); rs();
      for (let i = 0; i < 30; i++) pts.push({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 2 + 1, a: Math.random() * 0.5 + 0.1 });
      function draw() {
        ctx2.clearRect(0, 0, w, h);
        ctx2.fillStyle = "#22c55e";
        for (const p of pts) {
          p.x += p.vx; p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          ctx2.globalAlpha = p.a;
          ctx2.beginPath(); ctx2.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx2.fill();
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
  tt.className = "fixed right-6 bottom-6 w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-accent-red opacity-0 invisible transition-all duration-300 z-40";
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
      showToast(t("misc.copy"));
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
    track.innerHTML = slides.map((s, i) => `<button class="w-full h-full flex-shrink-0 [background-image:url('${s.img}')] [background-size:cover] [background-position:center] rounded-3xl border border-white/10 opacity-0 transition-opacity duration-500 ${i === cur ? 'opacity-100' : ''}" aria-label="${s.alt}" style="aspect-ratio:16/9;"></button>`).join("");
    if (dots) {
      dots.innerHTML = slides.map((_, i) => `<button class="w-2 h-2 rounded-full ${i === cur ? 'bg-accent-red' : 'bg-white/30'} transition-colors" aria-label="Slide ${i + 1}"></button>`).join("");
    }
  }
  function next() { cur = (cur + 1) % slides.length; renderGallery(); }
  function prev() { cur = (cur - 1 + slides.length) % slides.length; renderGallery(); }
  document.querySelectorAll(".gal-item").forEach(() => {});
  const la = document.querySelector(".gal-item:first-child ~ .gal-item:first-child");
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
      showToast(t("dl.notify"));
      nf.reset();
      playSfx("dl");
    });
  }

  /* ---------- Aplicar idioma ---------- */
  applyLang();
  window.RagsMc = { t, lang, setTheme, playSfx };
})();
