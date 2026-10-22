/* ============================================================
   RAGSMC LAUNCHER — script.js
   i18n, tema, música, loader, GSAP/Lenis/SplitText, partículas,
   reveal al scroll, sonidos Minecraft, formularios, utilidades.
   ============================================================ */
(function () {
  "use strict";

  /* ---------- i18n ---------- */
  const i18n = {
    es: {
      skip: "Saltar al contenido",
      nav: {
        home: "Inicio", project: "Proyecto", features: "Características",
        server: "Servidor", gallery: "Galería", roadmap: "Hoja de ruta",
        progress: "Avance", download: "Descarga", community: "Comunidad",
        support: "Soporte", cta: "Descargar", menu: "Abrir menú"
      },
      theme: { toggle: "Cambiar tema" },
      hero: {
        badge: "Proyecto independiente · En desarrollo",
        sub: "Un launcher de Minecraft rápido, simple y con identidad propia. Hecho por jugadores, para jugadores.",
        cta1: "Descargar para Windows", cta2: "Unirse a la comunidad",
        note: "Versión 1.0.4 · Windows · Linux próximamente · Gratis y sin registro"
      },
      about: {
        kicker: "Sobre el proyecto", badge: "En desarrollo",
        title: "¿Qué es RagsMc Launcher?",
        p1: "RagsMc Launcher es un proyecto independiente creado para ofrecer una experiencia moderna y personalizada para jugar Minecraft desde un solo lugar.",
        p2: "Cada sistema, pantalla y decisión está siendo pensado para construir una base sólida, rápida y preparada para crecer junto a la comunidad.",
        s1: "Proyecto indie", s2: "Mundos posibles", s3: "Identidad propia"
      },
      feat: {
        kicker: "El núcleo", title: "Características",
        desc: "Una base enfocada en lo importante, preparada para evolucionar junto al proyecto.",
        "1t": "Rápido", "1d": "Inicio veloz y experiencia fluida sin complicaciones.",
        "2t": "Minecraft", "2d": "Pensado desde y para la experiencia de Minecraft.",
        "3t": "Personalizable", "3d": "Preparado para futuras opciones de personalización.",
        "4t": "Versiones", "4d": "Gestión de diferentes versiones de Minecraft.",
        "5t": "En desarrollo", "5d": "El proyecto evoluciona constantemente con la comunidad.",
        "6t": "Futuro", "6d": "Nuevas características incorporadas progresivamente."
      },
      server: {
        kicker: "El servidor", title: "Juega en RagsMC",
        p1: "RagsMc es un servidor de Minecraft pensado para la comunidad, con identidad propia y un entorno hecho para jugar junto a otros."
      },
      gal: {
        kicker: "Galería", title: "El mundo que nos inspira",
        desc: "Estética y ambiente que guían el diseño del proyecto.",
        note: "Imágenes conceptuales de referencia. No son capturas del launcher.",
        alt1: "Bosque de Minecraft al atardecer", alt2: "Lago en las llanuras de Minecraft",
        alt3: "Claro con agua en la jungla de Minecraft", alt4: "Campamento con fogata en Minecraft",
        alt5: "Atardecer en el bosque de Minecraft", alt6: "Valle con lago en Minecraft",
        alt7: "Vuelo con élitros sobre la jungla de Minecraft", alt8: "Picos nevados en Minecraft",
        alt9: "Arboleda de cerezos en Minecraft", alt10: "Colina de cerezos junto al lago en Minecraft"
      },
      road: {
        kicker: "Hoja de ruta", title: "RagsMc Launcher está creciendo.",
        desc: "Avance progresivo: primero una experiencia estable y clara, luego nuevas posibilidades. Sin promesas vacías.",
        phase: "Fase",
        "p1t": "Concepto", "p1d": "Diseño y concepto inicial del launcher.",
        "p2t": "Desarrollo", "p2d": "Construcción del launcher base.",
        "p3t": "Testing", "p3d": "Pruebas, correcciones y estabilidad.",
        "p4t": "Release", "p4d": "Primera versión pública estable.",
        "p5t": "Actualizaciones", "p5d": "Mejoras y nuevas funciones.",
        done: "Completado", now: "Actual", next: "Pendiente"
      },
      av: {
        kicker: "Avance del launcher", title: "Así va el launcher",
        desc: "Capturas reales del desarrollo. Sin renders ni promesas: esto es lo que ya existe hoy.",
        "c1": "Pantalla Jugar", "c2": "Selector 1.21.10", "c3": "Noticias",
        "c4": "Gestor de Mods", "c5": "Consola",
        note: "Iremos publicando cada avance aquí mismo."
      },
      dl: {
        kicker: "Descarga", title: "Consigue RagsMc Launcher",
        desc: "Ya disponible para Windows. Linux llegará próximamente.",
        soon: "Próximamente",
        status: "Versión 1.0.4 disponible para Windows",
        statussub: "Instalador de 11.0 MB, gratis y sin registro.",
        notify: "Avísame de novedades y nuevas versiones",
        ph: "tu@correo.com", btn: "Avisarme",
        privacy: "Tu correo se guarda solo en este dispositivo. Sin spam.",
        support: "¿Dudas o sugerencias?", supportbtn: "Habla con la comunidad"
      },
      soc: {
        kicker: "Comunidad", title: "Síguenos",
        desc: "Contenido, avances y directos del proyecto.",
        twitch: "Twitch de RagsMc", twitchd: "Directos y avances en vivo.",
        tiktok: "TikTok de RagsMc", tiktokd: "Clips y novedades en corto.",
        youtube: "YouTube de RagsMc", ytd: "Videos y devlogs.",
        wa: "WhatsApp de RagsMc", official: "Canal oficial", wad: "Avisos y novedades al instante."
      },
      faq: {
        kicker: "Preguntas frecuentes", title: "¿Tenés dudas?",
        desc: "Resolvemos las preguntas más comunes sobre RagsMc Launcher.",
        q1: "¿Qué es RagsMc Launcher?",
        a1: "RagsMc Launcher es un lanzador de Minecraft independiente, diseñado para ser rápido, simple y con identidad propia. Está hecho por jugadores, para jugadores.",
        q2: "¿Es gratis?", a2: "Sí, RagsMc Launcher es completamente gratuito. No hay costos ocultos ni suscripciones obligatorias.",
        q3: "¿En qué sistemas está disponible?",
        a3: "Por ahora para Windows. Linux está en nuestra ruta de desarrollo y llegará próximamente.",
        q4: "¿El launcher recopila mis datos?",
        a4: "No. RagsMc Launcher no recopila ni comparte tus datos personales. Tu privacidad es importante.",
        q5: "¿Cuándo estará disponible para Linux?",
        a5: "Está en nuestra ruta de desarrollo. No hay una fecha exacta todavía, pero es una prioridad.",
        q6: "¿Cómo reporto un bug o sugerencia?",
        a6: "Escríbenos en la sección de comunidad. Ahí nos encontrás activos y listos para ayudar.",
        q7: "¿Puedo usar mis mods existentes?",
        a7: "Sí, el launcher tiene un gestor de mods integrado para activar, desactivar y gestionar tus mods.",
        subject: "Asunto", email: "Tu correo", msg: "Tu mensaje...", send: "Enviar mensaje"
      },
      sup: {
        kicker: "Soporte", title: "¿Necesitás ayuda?",
        desc: "Escríbenos y te respondemos a la brevedad.",
        name: "Tu nombre", email: "Tu correo", msg: "Tu consulta...", send: "Enviar mensaje"
      },
      footer: { note: "Proyecto independiente. Sin afiliación con Mojang ni Microsoft." },
      legal: {
        terms: "Aviso legal",
        privacy: "Política de privacidad",
        cookies: "Aviso de cookies"
      },
      misc: { top: "Volver arriba" },
      music: { toggle: "Activar o pausar música" },
      load: { loading: "Cargando mundo...", tipLabel: "Consejo:" },
      noping: {
        tab: "¿Tu Internet anda muy mal?", close: "Cerrar", logoalt: "Logo de NoPing",
        kicker: "Conexión", title: "¿Lag en tus partidas?",
        desc: "NoPing es un programa que optimiza la ruta de tu conexión hacia los servidores de juego.",
        b1: "Menos ping y menos tirones.", b2: "Conexión más estable.",
        b3: "Funciona con Minecraft y cientos de juegos.",
        cta: "Probar NoPing gratis", video: "Ver qué es NoPing en video",
        note: "Los resultados dependen de tu conexión. Enlace de referido."
      },
      brand: { alt: "Logo de lobo RagsMc" },
      lb: { close: "Cerrar" }
    },
    en: {
      skip: "Skip to content",
      nav: {
        home: "Home", project: "Project", features: "Features", server: "Server",
        gallery: "Gallery", roadmap: "Roadmap", progress: "Progress",
        download: "Download", community: "Community", support: "Support",
        cta: "Download", menu: "Open menu"
      },
      theme: { toggle: "Change theme" },
      hero: {
        badge: "Independent project · In development",
        sub: "A fast, simple Minecraft launcher with its own identity. Made by players, for players.",
        cta1: "Download for Windows", cta2: "Join the community",
        note: "Version 1.0.4 · Windows · Linux coming soon · Free and no registration"
      },
      about: {
        kicker: "About the project", badge: "In development",
        title: "What is RagsMc Launcher?",
        p1: "RagsMc Launcher is an independent project created to offer a modern and personalized experience to play Minecraft from a single place.",
        p2: "Each system, screen and decision is being thought to build a solid, fast base ready to grow with the community.",
        s1: "Indie project", s2: "Possible worlds", s3: "Own identity"
      },
      feat: {
        kicker: "The core", title: "Features",
        desc: "A base focused on what matters, ready to evolve with the project.",
        "1t": "Fast", "1d": "Quick start and smooth experience without complications.",
        "2t": "Minecraft", "2d": "Made from and for the Minecraft experience.",
        "3t": "Customizable", "3d": "Prepared for future customization options.",
        "4t": "Versions", "4d": "Management of different Minecraft versions.",
        "5t": "In development", "5d": "The project constantly evolves with the community.",
        "6t": "Future", "6d": "New features added progressively."
      },
      server: {
        kicker: "The server", title: "Play on RagsMC",
        p1: "RagsMc is a Minecraft server designed for the community, with its own identity and an environment made to play with others."
      },
      gal: {
        kicker: "Gallery", title: "The world that inspires us",
        desc: "Aesthetic and atmosphere that guide the project design.",
        note: "Conceptual reference images. Not launcher screenshots.",
        alt1: "Minecraft forest at sunset", alt2: "Lake in Minecraft plains",
        alt3: "Clearing with water in Minecraft jungle", alt4: "Campfire camp in Minecraft",
        alt5: "Sunset in Minecraft forest", alt6: "Valley with lake in Minecraft",
        alt7: "Elytra flight over Minecraft jungle", alt8: "Snowy peaks in Minecraft",
        alt9: "Cherry grove in Minecraft", alt10: "Cherry hill next to lake in Minecraft"
      },
      road: {
        kicker: "Roadmap", title: "RagsMc Launcher is growing.",
        desc: "Progressive advancement: first a stable and clear experience, then new possibilities. No empty promises.",
        phase: "Phase",
        "p1t": "Concept", "p1d": "Design and initial concept of the launcher.",
        "p2t": "Development", "p2d": "Building the base launcher.",
        "p3t": "Testing", "p3d": "Tests, fixes and stability.",
        "p4t": "Release", "p4d": "First stable public version.",
        "p5t": "Updates", "p5d": "Improvements and new features.",
        done: "Completed", now: "Current", next: "Pending"
      },
      av: {
        kicker: "Launcher progress", title: "How the launcher is going",
        desc: "Real development captures. No renders or promises: this is what exists today.",
        "c1": "Play screen", "c2": "Version selector 1.21.10", "c3": "News",
        "c4": "Mods manager", "c5": "Console",
        note: "We will publish each advance here."
      },
      dl: {
        kicker: "Download", title: "Get RagsMc Launcher",
        desc: "Available for Windows. Linux coming soon.",
        soon: "Coming soon",
        status: "Version 1.0.4 available for Windows",
        statussub: "11.0 MB installer, free and no registration.",
        notify: "Notify me about news and new versions",
        ph: "your@email.com", btn: "Notify me",
        privacy: "Your email is stored only on this device. No spam.",
        support: "Questions or suggestions?", supportbtn: "Talk to the community"
      },
      soc: {
        kicker: "Community", title: "Follow us",
        desc: "Content, news and live streams of the project.",
        twitch: "RagsMc Twitch", twitchd: "Live streams and news.",
        tiktok: "RagsMc TikTok", tiktokd: "Short clips and news.",
        youtube: "RagsMc YouTube", ytd: "Videos and devlogs.",
        wa: "RagsMc WhatsApp", official: "Official channel", wad: "News and updates instantly."
      },
      faq: {
        kicker: "Frequently asked questions", title: "Got questions?",
        desc: "We answer the most common questions about RagsMc Launcher.",
        q1: "What is RagsMc Launcher?",
        a1: "RagsMc Launcher is an independent Minecraft launcher, designed to be fast, simple and with its own identity. Made by players, for players.",
        q2: "Is it free?", a2: "Yes, RagsMc Launcher is completely free. No hidden costs or mandatory subscriptions.",
        q3: "What systems is it available on?",
        a3: "For now Windows. Linux is on our roadmap and will be coming soon.",
        q4: "Does the launcher collect my data?",
        a4: "No. RagsMc Launcher does not collect or share your personal data. Your privacy matters.",
        q5: "When will Linux be available?",
        a5: "It's on our roadmap. No exact date yet, but it's a priority.",
        q6: "How do I report a bug or suggestion?",
        a6: "Write to us in the community section. We're active there and ready to help.",
        q7: "Can I use my existing mods?",
        a7: "Yes, the launcher has an integrated mods manager to activate, deactivate and manage your mods.",
        subject: "Subject", email: "Your email", msg: "Your message...", send: "Send message"
      },
      sup: {
        kicker: "Support", title: "Need help?",
        desc: "Write to us and we'll reply as soon as possible.",
        name: "Your name", email: "Your email", msg: "Your inquiry...", send: "Send message"
      },
      footer: { note: "Independent project. Not affiliated with Mojang or Microsoft." },
      legal: {
        terms: "Legal Notice",
        privacy: "Privacy Policy",
        cookies: "Cookie Notice"
      },
      misc: { top: "Back to top" },
      music: { toggle: "Activate or pause music" },
      load: { loading: "Loading world...", tipLabel: "Tip:" },
      noping: {
        tab: "Is your Internet very bad?", close: "Close", logoalt: "NoPing logo",
        kicker: "Connection", title: "Lag in your matches?",
        desc: "NoPing is a program that optimizes the route of your connection to game servers.",
        b1: "Less ping and fewer stutters.", b2: "More stable connection.",
        b3: "Works with Minecraft and hundreds of games.",
        cta: "Try NoPing for free", video: "See what NoPing is in video",
        note: "Results depend on your connection. Referral link."
      },
      brand: { alt: "RagsMc wolf logo" },
      lb: { close: "Close" }
    }
  };

  let lang = localStorage.getItem("ragsmc-lang") || "es";
  function t(key) {
    const parts = key.split(".");
    let obj = i18n[lang];
    for (const p of parts) {
      if (!obj || !(p in obj)) return key;
      obj = obj[p];
    }
    return typeof obj === "string" ? obj : key;
  }
  function applyLang() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(el => {
      el.placeholder = t(el.dataset.i18nPh);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      el.alt = t(el.dataset.i18nAlt);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.documentElement.lang = lang;
    const esBtn = document.querySelector('.lang-btn[data-lang="es"]');
    const enBtn = document.querySelector('.lang-btn[data-lang="en"]');
    if (esBtn) esBtn.classList.toggle("active", lang === "es");
    if (enBtn) enBtn.classList.toggle("active", lang === "en");
  }
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      lang = btn.dataset.lang;
      localStorage.setItem("ragsmc-lang", lang);
      applyLang();
      playSfx("click");
    });
  });

  /* ---------- Tema claro/oscuro ---------- */
  const themeBtn = document.getElementById("themeBtn");
  const metaTheme = document.getElementById("metaTheme");
  const savedTheme = localStorage.getItem("ragsmc-theme");
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let isDark = savedTheme ? savedTheme === "dark" : systemDark;
  function setTheme(dark) {
    isDark = dark;
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem("ragsmc-theme", dark ? "dark" : "light");
    metaTheme.content = dark ? "#0b0f1a" : "#f7f3ee";
  }
  setTheme(isDark);
  themeBtn.addEventListener("click", () => { setTheme(!isDark); playSfx("pop"); });

  /* ---------- Año footer ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sonidos estilo Minecraft (WebAudio) ---------- */
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const audioCtx = AudioCtx ? new AudioCtx() : null;
  const sfxFiles = {
    click: "./assets/sfx/click.mp3", chest: "./assets/sfx/chest.mp3",
    pop: "./assets/sfx/pop.mp3", enderman: "./assets/sfx/enderman.mp3",
    portal: "./assets/sfx/portal.mp3", levelup: "./assets/sfx/levelup.mp3",
    dragon: "./assets/sfx/dragon.mp3", dl: "./assets/sfx/dl.mp3"
  };
  function playSfx(name) {
    const file = sfxFiles[name];
    if (file && audioCtx) {
      fetch(file).then(r => r.arrayBuffer()).then(buf => audioCtx.decodeAudioData(buf)).then(bd => {
        const s = audioCtx.createBufferSource();
        s.buffer = bd;
        s.connect(audioCtx.destination);
        s.start(0);
      }).catch(() => synthSfx(name));
    } else {
      synthSfx(name);
    }
  }
  function synthSfx(name) {
    if (!audioCtx) return;
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.connect(g);
    g.connect(audioCtx.destination);
    if (name === "click") {
      osc.type = "square";
      osc.frequency.setValueAtTime(880, t);
      osc.frequency.exponentialRampToValueAtTime(1100, t + 0.08);
      g.gain.setValueAtTime(0.12, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      osc.start(t);
      osc.stop(t + 0.12);
    } else if (name === "pop") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, t);
      osc.frequency.exponentialRampToValueAtTime(1200, t + 0.1);
      g.gain.setValueAtTime(0.15, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
      osc.start(t);
      osc.stop(t + 0.18);
    } else if (name === "dl") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, t);
      osc.frequency.linearRampToValueAtTime(440, t + 0.15);
      g.gain.setValueAtTime(0.1, t);
      g.gain.linearRampToValueAtTime(0.001, t + 0.3);
      osc.start(t);
      osc.stop(t + 0.3);
    } else {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, t);
      g.gain.setValueAtTime(0.1, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
      osc.start(t);
      osc.stop(t + 0.1);
    }
  }
  window.playSfx = playSfx;
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-sfx]");
    if (el) playSfx(el.dataset.sfx);
  });

  /* ---------- Música (c418.mp3 local, loop) ---------- */
  const musicBtn = document.getElementById("musicBtn");
  const music = new Audio("./assets/audio/c418.mp3");
  music.loop = true;
  music.volume = 0.3;
  let musicStarted = false;
  function toggleMusic() {
    if (!musicStarted) {
      music.play().catch(() => {});
      musicStarted = true;
    }
    if (music.paused) {
      music.play();
      musicBtn.setAttribute("aria-pressed", "true");
    } else {
      music.pause();
      musicBtn.setAttribute("aria-pressed", "false");
    }
    playSfx("portal");
  }
  if (musicBtn) musicBtn.addEventListener("click", toggleMusic);
  document.body.addEventListener("click", () => {
    if (!musicStarted) {
      music.play().catch(() => {});
      musicStarted = true;
      if (musicBtn) musicBtn.setAttribute("aria-pressed", "true");
    }
  }, { once: true });

  /* ---------- Loader (Minecraft) con fail-safe ---------- */
  const loader = document.getElementById("loader");
  const loaderFill = document.getElementById("loaderFill");
  const loaderStage = document.getElementById("loaderStage");
  const loaderTip = document.getElementById("loaderTip");
  const tipsES = [
    "El lobo protege a la manada.", "El cuervo vigila desde el cielo.",
    "Cada bloque cuenta.", "Preparando tu experiencia Minecraft.", "Sin promesas vacías."
  ];
  const tipsEN = [
    "The wolf protects the pack.", "The raven watches from the sky.",
    "Every block counts.", "Preparing your Minecraft experience.", "No empty promises."
  ];
  const stages = ["Generando terreno...", "Despertando al Enderdragón...", "Cargando texturas...", "Conectando al servidor...", "Listo para jugar."];
  const stagesEN = ["Generating terrain...", "Awakening the Enderdragon...", "Loading textures...", "Connecting to server...", "Ready to play."];

  function hideLoader() {
    if (!loader) return;
    loader.classList.add("done");
  }

  let prog = 0;
  const loaderInterval = setInterval(() => {
    prog += Math.random() * 12;
    if (prog >= 100) {
      prog = 100;
      clearInterval(loaderInterval);
    }
    if (loaderFill) loaderFill.style.width = prog + "%";
    if (loaderStage) {
      const st = lang === "es" ? stages : stagesEN;
      loaderStage.textContent = st[Math.min(Math.floor(prog / 22), st.length - 1)];
    }
    if (loaderTip) {
      const tp = lang === "es" ? tipsES : tipsEN;
      loaderTip.textContent = tp[Math.floor(Math.random() * tp.length)];
    }
    if (prog >= 100) {
      setTimeout(() => {
        hideLoader();
        initAnimations();
      }, 350);
    }
  }, 120);

  // Fail-safe: si algo falla, ocultar el loader y lanzar animaciones igual
  setTimeout(() => {
    if (loader && !loader.classList.contains("done")) {
      hideLoader();
      initAnimations();
    }
  }, 4000);

  /* ---------- GSAP / Lenis / SplitText ---------- */
  function initAnimations() {
    try {
      if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger, SplitText);
      }
    } catch (e) {
      console.warn("GSAP plugins no cargaron", e);
    }

    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        touchMultiplier: 1.35
      });
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
      lenis.on("scroll", () => {
        const s = window.pageYOffset || document.documentElement.scrollTop;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const pf = document.getElementById("progressFill");
        if (pf) pf.style.width = (s / h * 100) + "%";
        updateNavbar();
      });
    } catch (e) {
      console.warn("Lenis no cargó", e);
      window.addEventListener("scroll", () => {
        const s = window.pageYOffset || document.documentElement.scrollTop;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        const pf = document.getElementById("progressFill");
        if (pf) pf.style.width = (s / h * 100) + "%";
        updateNavbar();
      });
    }

    // SplitText título hero
    try {
      if (typeof SplitText !== "undefined" && typeof gsap !== "undefined") {
        const split = new SplitText(".hero-title span", { type: "chars, words", charsClass: "char" });
        gsap.from(split.chars, {
          opacity: 0, y: 40, rotateX: -40, duration: 0.7, stagger: 0.035,
          ease: "back.out(1.7)", delay: 0.4
        });
      }
    } catch (e) {
      console.warn("SplitText no disponible", e);
    }

    // Hero entrada
    try {
      if (typeof gsap !== "undefined") {
        gsap.to(".hero-coords", { opacity: 1, y: 0, duration: 0.8, delay: 0.6, ease: "power2.out" });
        gsap.to(".hero-mascots img", { y: "-=10", duration: 2, repeat: -1, yoyo: true, ease: "sine.inOut", stagger: 0.6 });
      }
    } catch (e) { console.warn("Hero anim falló", e); }

    // Reveal secciones
    try {
      if (typeof gsap !== "undefined") {
        gsap.utils.toArray(".reveal").forEach(el => {
          const delay = el.dataset.delay ? parseInt(el.dataset.delay) / 1000 : 0;
          ScrollTrigger.create({
            trigger: el, start: "top 82%", end: "bottom 20%", once: true,
            onEnter: () => {
              el.classList.add("visible");
              gsap.to(el, { opacity: 1, y: 0, duration: 0.7, delay, ease: "power2.out" });
            }
          });
        });
      }
    } catch (e) { console.warn("Reveal falló", e); }

    // Cards tilt 3D
    document.querySelectorAll(".card, .soc-card, .os-btn.ready").forEach(el => {
      el.addEventListener("mousemove", e => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const dx = (x - cx) / cx;
        const dy = (y - cy) / cy;
        el.style.transform = `perspective(700px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg) scale(1.02)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });

    // Botones magnéticos (solo PC)
    if (window.matchMedia("(pointer: fine)").matches) {
      document.querySelectorAll(".btn-primary.btn-lg").forEach(btn => {
        btn.addEventListener("mousemove", e => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.35, y: y * 0.35, duration: 0.5, ease: "power2.out" });
        });
        btn.addEventListener("mouseleave", () => gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: "power2.out" }));
      });
    }

    // Coordenadas hero animadas
    setInterval(() => {
      const cX = document.getElementById("cX");
      const cY = document.getElementById("cY");
      const cZ = document.getElementById("cZ");
      if (cX) cX.textContent = Math.floor(Math.random() * 2000) - 1000;
      if (cY) cY.textContent = 64 + Math.floor(Math.random() * 4) - 2;
      if (cZ) cZ.textContent = Math.floor(Math.random() * 2000) - 1000;
    }, 1500);

    // Partículas hero (canvas)
    const canvas = document.getElementById("heroParticles");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      let w, h, particles = [];
      function resize() {
        w = canvas.width = canvas.parentElement.clientWidth;
        h = canvas.height = canvas.parentElement.clientHeight;
      }
      window.addEventListener("resize", resize);
      resize();
      for (let i = 0; i < 35; i++) {
        particles.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
          r: Math.random() * 2 + 1, a: Math.random() * 0.6 + 0.2
        });
      }
      function drawParticles() {
        ctx.clearRect(0, 0, w, h);
        ctx.fillStyle = "#22c55e";
        for (const p of particles) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
          ctx.globalAlpha = p.a;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        requestAnimationFrame(drawParticles);
      }
      drawParticles();
    }

    // Marquee duplicado
    const track = document.getElementById("marqueeTrack");
    if (track) {
      const dup = track.cloneNode(true);
      dup.setAttribute("aria-hidden", "true");
      track.parentNode.appendChild(dup);
    }

    // Roadmap línea progreso
    try {
      if (typeof gsap !== "undefined") {
        ScrollTrigger.create({
          trigger: ".road-line", start: "top 70%", once: true,
          onEnter: () => {
            const rf = document.getElementById("roadLineFill");
            if (rf) gsap.to(rf, { width: "100%", duration: 1.4, ease: "power2.inOut" });
          }
        });
      }
    } catch (e) { console.warn("Roadmap falló", e); }
  }

  /* ---------- Navbar scroll ---------- */
  const navbar = document.getElementById("navbar");
  function updateNavbar() {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    if (y > 40) navbar.classList.add("nav-scrolled");
    else navbar.classList.remove("nav-scrolled");
  }
  window.addEventListener("scroll", updateNavbar);

  /* ---------- Menú móvil ---------- */
  const burger = document.getElementById("burger");
  const mobileMenu = document.getElementById("mobileMenu");
  if (burger && mobileMenu) {
    burger.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      burger.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll(".mobile-menu a").forEach(a => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Scroll suave anclas ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", e => {
      const id = a.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  /* ---------- Volver arriba ---------- */
  const toTop = document.getElementById("toTop");
  window.addEventListener("scroll", () => {
    const y = window.pageYOffset || document.documentElement.scrollTop;
    toTop.classList.toggle("visible", y > 400);
  });
  if (toTop) toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---------- Lightbox galería ---------- */
  const lightbox = document.getElementById("lightbox");
  const lightImg = document.getElementById("lightImg");
  const lightClose = lightbox ? lightbox.querySelector(".lightbox-x") : null;
  document.querySelectorAll(".gal-item").forEach(item => {
    item.addEventListener("click", () => {
      lightImg.src = item.dataset.full;
      lightImg.alt = item.querySelector("img").alt || "";
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });
  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
  if (lightClose) lightClose.addEventListener("click", closeLightbox);
  const backdrop = lightbox ? lightbox.querySelector(".lightbox-backdrop") : null;
  if (backdrop) backdrop.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeLightbox(); });

  /* ---------- Cargar imágenes de galería ---------- */
  document.querySelectorAll("img[loading='lazy']").forEach(img => {
    img.addEventListener("load", () => img.classList.add("loaded"));
  });

  /* ---------- Copiar IP servidor ---------- */
  document.querySelectorAll(".ip-copy").forEach(btn => {
    btn.addEventListener("click", async () => {
      const val = btn.dataset.clipboard;
      try {
        await navigator.clipboard.writeText(val);
        btn.textContent = "¡Copiado!";
        setTimeout(() => btn.textContent = "Copiar", 1400);
      } catch (e) {
        console.warn("No se pudo copiar", e);
      }
      playSfx("click");
    });
  });

  /* ---------- Formulario novedades (localStorage, sin backend) ---------- */
  const notifyForm = document.getElementById("notifyForm");
  const notifyMsg = document.getElementById("notifyMsg");
  if (notifyForm) {
    notifyForm.addEventListener("submit", e => {
      e.preventDefault();
      // Honeypot: si el campo oculto tiene valor, es un bot → no enviar
      const website = notifyForm.elements.website;
      if (website && website.value.trim() !== "") return;
      const email = notifyForm.elements.email.value.trim();
      if (!email) return;
      const list = JSON.parse(localStorage.getItem("ragsmc-notify") || "[]");
      if (!list.includes(email)) {
        list.push(email);
        localStorage.setItem("ragsmc-notify", JSON.stringify(list));
      }
      notifyMsg.textContent = lang === "es" ? "Te avisaremos cuando haya novedades." : "We'll let you know when there's news.";
      notifyMsg.style.color = "#4ade80";
      notifyForm.reset();
      playSfx("levelup");
      setTimeout(() => { notifyMsg.textContent = ""; }, 4500);
    });
  }

  /* ---------- Formulario soporte (Formspool) ---------- */
  const supportForm = document.getElementById("supportForm");
  const supportMsg = document.getElementById("supportMsg");
  if (supportForm) {
    supportForm.addEventListener("submit", async e => {
      e.preventDefault();
      // Honeypot: si el campo oculto tiene valor, es un bot → no enviar
      const website = supportForm.elements.website;
      if (website && website.value.trim() !== "") return;
      const btn = supportForm.querySelector("button[type='submit']");
      const orig = btn.innerHTML;
      btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Enviando...';
      btn.disabled = true;
      try {
        const fd = new FormData(supportForm);
        const res = await fetch("https://formsubmit.co/RagsnorWolf@gmail.com", {
          method: "POST", body: fd, headers: { Accept: "application/json" }
        });
        if (res.ok) {
          supportMsg.textContent = lang === "es" ? "Mensaje enviado. ¡Gracias!" : "Message sent. Thanks!";
          supportMsg.style.color = "#4ade80";
          supportForm.reset();
          playSfx("levelup");
        } else throw new Error("Error");
      } catch (err) {
        supportMsg.textContent = lang === "es" ? "No se pudo enviar. Intenta de nuevo." : "Could not send. Try again.";
        supportMsg.style.color = "#ef4444";
        playSfx("pop");
      }
      finally {
        btn.innerHTML = orig;
        btn.disabled = false;
        setTimeout(() => { supportMsg.textContent = ""; }, 5000);
      }
    });
  }

  /* ---------- Aplicar idioma inicial ---------- */
  applyLang();

  // Exponer para uso global
  window.RagsMc = { t, lang, setTheme, playSfx };
})();
