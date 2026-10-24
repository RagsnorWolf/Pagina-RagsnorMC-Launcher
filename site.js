(function () {
  "use strict";

  const I18N = {
    es: {
      "meta.title": "RagsMc Launcher — Minecraft sin fricción",
      "meta.desc": "RagsMc Launcher es un launcher independiente de Minecraft: rápido, simple y con identidad propia. Gestor de mods, múltiples versiones y servidor comunitario. Gratis para Windows 10/11.",
      "loader.text": "Iniciando launcher",

      "nav.project": "Proyecto",
      "nav.features": "Características",
      "nav.server": "Servidor",
      "nav.gallery": "Galería",
      "nav.roadmap": "Roadmap",
      "nav.download": "Descarga",
      "nav.community": "Comunidad",
      "nav.downloadCta": "Descargar",

      "hero.badge": "v1.0.4 ya disponible",
      "hero.title1": "El launcher que",
      "hero.title2": "Minecraft merecía.",
      "hero.sub": "Rápido, simple y con identidad propia. Todo lo que necesitás para jugar, en un solo lugar.",
      "hero.cta": "Descargar para Windows",
      "hero.cta2": "Ver capturas",
      "hero.meta1": "Gratis",
      "hero.meta2": "Sin registro",
      "hero.meta3": "Windows 10/11 · v1.0.4",
      "hero.stat1": "Versión recomendada",
      "hero.stat2": "Loaders compatibles",
      "hero.stat3": "Servidor comunitario",
      "hero.stat4": "Instalador",
      "hero.floatServer": "Servidor online",

      "about.eyebrow": "El proyecto",
      "about.title1": "No es otro launcher.",
      "about.title2": "Es el tuyo.",
      "about.lead": "RagsMc nació de una idea simple: jugar Minecraft debería ser rápido, claro y sin pelearte con la configuración.",
      "about.p2": "Es un proyecto independiente, hecho por un jugador y mantenido junto a la comunidad. Sin telemetría, sin cuentas obligatorias y sin funciones que no pediste.",
      "about.check1": "Versiones, mods y ajustes en un solo lugar",
      "about.check2": "Interfaz propia, sin skin de tienda",
      "about.check3": "Actualizaciones gratuitas, sin suscripción",
      "about.link": "Ver qué incluye",
      "about.specTitle": "Ficha del proyecto",
      "about.specStatus": "Activo",
      "about.quote": "«Hecho por jugadores, para jugadores.»",
      "about.quoteBy": "— RagsnorWolf, creador",

      "spec.version": "Versión",
      "spec.platform": "Plataforma",
      "spec.loaders": "Loaders",
      "spec.server": "Servidor",
      "spec.price": "Precio",
      "spec.free": "Gratis",
      "spec.status": "Estado",
      "spec.stable": "Release estable",

      "features.eyebrow": "Características",
      "features.title1": "Menos fricción.",
      "features.title2": "Más juego.",
      "features.desc": "Cada parte del launcher está pensada para que llegues al mundo en menos clics, sin sacrificar control.",
      "features.f1.title": "Gestor de mods, sin salir del launcher",
      "features.f1.desc": "Instalá, activá y desactivá mods desde una sola pantalla. Menos carpetas, menos errores.",
      "features.f2.title": "Todas tus versiones, ordenadas",
      "features.f2.desc": "Cambiá de versión y de loader sin reinstalar nada. Tus instalaciones quedan a un clic.",
      "features.f3.title": "Arranque directo",
      "features.f3.desc": "Sin pantallas intermedias ni configuraciones eternas. Abrís y jugás.",
      "features.f4.title": "Personalización real",
      "features.f4.desc": "Temas, fondos y ajustes que se quedan con vos, no que se resetean solos.",
      "features.f5.title": "Actualizaciones discretas",
      "features.f5.desc": "Avisos cuando importan. Instalás la nueva versión cuando vos querés.",
      "features.f5.auto": "Auto",
      "features.f6.title": "Consola cuando la necesitás",
      "features.f6.desc": "Logs en tiempo real para entender qué pasa con tus mods, sin adivinar.",
      "features.f6.live": "En vivo",

      "server.eyebrow": "El servidor",
      "server.title1": "Un mundo",
      "server.title2": "compartido.",
      "server.desc": "Entrá a RagsMc y jugá con la comunidad. Una IP, una versión, cero vueltas.",
      "server.online": "Online · 24/7",
      "server.cardTitle": "Tu próximo mundo empieza acá.",
      "server.cardCopy": "Supervivencia, comunidad y un servidor que no se cae cada vez que alguien pone un bloque de más.",
      "server.ipLabel": "IP del servidor",
      "server.copy": "Copiar IP",
      "server.stepsTitle": "Cómo conectarte",
      "server.step1": "Abrí Minecraft 1.21.1 con Forge instalado.",
      "server.step2": "Entrá a Multijugador y agregá un servidor.",
      "server.step3": "Pegá la IP y conectate. Nos vemos adentro.",
      "server.visualTag": "Survival · Comunidad",

      "gallery.eyebrow": "Galería",
      "gallery.title1": "Así se ve",
      "gallery.title2": "por dentro.",
      "gallery.desc": "Capturas reales del launcher y del servidor. Sin renders, sin humo.",
      "gallery.hint": "Usá las flechas del teclado",

      "roadmap.eyebrow": "Hoja de ruta",
      "roadmap.title1": "Lo que viene,",
      "roadmap.title2": "sin humo.",
      "roadmap.desc": "Sin fechas inventadas. Cada fase se publica cuando está lista.",
      "roadmap.done": "Completado",
      "roadmap.current": "En desarrollo",
      "roadmap.planned": "Planificado",
      "roadmap.exploring": "Explorando",
      "roadmap.r1.title": "Primera versión",
      "roadmap.r1.desc": "Base del launcher, instalaciones y arranque de Minecraft.",
      "roadmap.r2.title": "Estabilidad",
      "roadmap.r2.desc": "Correcciones, rendimiento y soporte para 1.21.1.",
      "roadmap.r3.title": "Mods 2.0",
      "roadmap.r3.desc": "Activar, desactivar y actualizar mods sin salir del launcher.",
      "roadmap.r4.title": "Linux y macOS",
      "roadmap.r4.desc": "Llevar el launcher a más sistemas, con la misma experiencia.",
      "roadmap.r5.title": "Perfiles y sync",
      "roadmap.r5.desc": "Sincronizar ajustes y perfiles entre dispositivos.",
      "roadmap.note": "El roadmap puede cambiar. El feedback de la comunidad manda.",

      "download.eyebrow": "Descarga",
      "download.title1": "Listo para",
      "download.title2": "jugar.",
      "download.desc": "Instalador para Windows 10/11. Sin registro, sin anuncios, sin sorpresas.",
      "download.badgeWin": "Windows 10/11",
      "download.badgeSize": "11.0 MB",
      "download.cardTitle": "RagsMc Launcher",
      "download.cardCopy": "El instalador oficial, con todo lo necesario para empezar a jugar en menos de un minuto.",
      "download.cta": "Descargar para Windows",
      "download.altZip": "Descargar ZIP portable",
      "download.altAv": "¿Windows lo marca como virus?",
      "download.note": "SHA-256 verificado. SmartScreen puede pedir confirmación: es normal en apps sin firma comercial.",
      "download.sideTitle": "Detalles de la release",
      "download.sideStatus": "Estable",
      "download.metaFile": "Archivo",
      "download.metaSize": "Tamaño",
      "download.metaDate": "Publicado",
      "download.metaDateValue": "22 oct 2026",
      "download.metaPlatform": "Plataforma",
      "download.includesTitle": "Incluye",
      "download.include1": "Gestor de mods integrado",
      "download.include2": "Fabric, Forge, NeoForge y Quilt",
      "download.include3": "Consola de logs en tiempo real",

      "community.eyebrow": "Comunidad",
      "community.title1": "Donde pasa",
      "community.title2": "todo.",
      "community.desc": "Directos, clips, avances y soporte. Elegí el canal que más te guste.",
      "community.tagTwitch": "Directos",
      "community.tagTikTok": "Clips",
      "community.tagYouTube": "Vídeos",
      "community.tagWhatsApp": "Novedades",
      "community.waHandle": "Canal oficial",

      "faq.eyebrow": "FAQ",
      "faq.title1": "Antes de",
      "faq.title2": "descargar.",
      "faq.desc": "Lo que suelen preguntar antes de instalar. Si te queda algo, la comunidad está a un mensaje.",
      "faq.support": "Ir a la comunidad",
      "faq.q1": "¿Qué es RagsMc Launcher?",
      "faq.a1": "Un launcher independiente de Minecraft, pensado para centralizar versiones, mods y ajustes en una interfaz rápida y clara. No está afiliado a Mojang ni a Microsoft.",
      "faq.q2": "¿Es gratis?",
      "faq.a2": "Sí. El launcher es gratuito y no tiene suscripciones ni funciones bloqueadas por pago. Las actualizaciones también son gratis.",
      "faq.q3": "¿Qué versiones y loaders soporta?",
      "faq.a3": "La versión recomendada para el servidor es Minecraft 1.21.1 con Forge. El launcher también contempla Fabric, NeoForge y Quilt en sus instalaciones.",
      "faq.q4": "¿Necesito una cuenta de Microsoft?",
      "faq.a4": "RagsMc no gestiona cuentas. Para jugar en el servidor comunitario necesitás una cuenta de Minecraft Java Edition, igual que en cualquier servidor online.",
      "faq.q5": "Windows lo marca como virus. ¿Es normal?",
      "faq.a5": "Es un falso positivo habitual en instaladores indie sin firma comercial. Verificá el SHA-256 publicado arriba antes de ejecutarlo.",
      "faq.a5link": "Leer la guía de falsos positivos",
      "faq.q6": "¿Cómo me uno al servidor?",
      "faq.a6": "Abrí Minecraft 1.21.1 con Forge, entrá a Multijugador, agregá un servidor con la IP ragsmc.dpdns.org y conectate. También podés copiar la IP desde la sección Servidor.",
      "faq.q7": "¿Va a estar para Linux o macOS?",
      "faq.a7": "Está en el roadmap como fase v1.2. Todavía no hay fecha: preferimos publicarlo cuando funcione bien y no antes.",

      "footer.tagline": "Launcher independiente de Minecraft. Hecho por jugadores, para jugadores.",
      "footer.status": "Servidor online",
      "footer.product": "Producto",
      "footer.resources": "Recursos",
      "footer.legal": "Legal",
      "footer.faq": "Preguntas frecuentes",
      "footer.falsePositive": "Falsos positivos",
      "footer.github": "Sitio en GitHub",
      "footer.notice": "Aviso legal",
      "footer.privacy": "Privacidad",
      "footer.cookies": "Cookies",
      "footer.contact": "Contacto",
      "footer.copyright": "Proyecto independiente.",
      "footer.disclaimer": "No afiliado a Mojang Studios ni Microsoft. Minecraft es una marca de Mojang Synergies AB.",
      "footer.top": "Volver arriba",

      "common.copied": "Copiado",
      "toast.copied": "Copiado al portapapeles",
      "toast.langEs": "Idioma: español",
      "toast.langEn": "Idioma: inglés",
      "theme.toLight": "Cambiar a tema claro",
      "theme.toDark": "Cambiar a tema oscuro",
      "lang.switch": "Switch to English",
      "menu.open": "Abrir menú",
      "menu.close": "Cerrar menú",
      "gallery.prev": "Captura anterior",
      "gallery.next": "Captura siguiente",
      "gallery.play": "Reanudar reproducción automática",
      "gallery.pause": "Pausar reproducción automática",
      "gallery.viewport": "Galería de capturas",
      "hash.aria": "Copiar SHA-256"
    },

    en: {
      "meta.title": "RagsMc Launcher — Minecraft without the friction",
      "meta.desc": "RagsMc Launcher is an independent Minecraft launcher: fast, simple, and with an identity of its own. Mod manager, multiple versions, and a community server. Free for Windows 10/11.",
      "loader.text": "Starting launcher",

      "nav.project": "Project",
      "nav.features": "Features",
      "nav.server": "Server",
      "nav.gallery": "Gallery",
      "nav.roadmap": "Roadmap",
      "nav.download": "Download",
      "nav.community": "Community",
      "nav.downloadCta": "Download",

      "hero.badge": "v1.0.4 out now",
      "hero.title1": "The launcher",
      "hero.title2": "Minecraft deserved.",
      "hero.sub": "Fast, simple, and with an identity of its own. Everything you need to play, in one place.",
      "hero.cta": "Download for Windows",
      "hero.cta2": "See screenshots",
      "hero.meta1": "Free",
      "hero.meta2": "No sign-up",
      "hero.meta3": "Windows 10/11 · v1.0.4",
      "hero.stat1": "Recommended version",
      "hero.stat2": "Supported loaders",
      "hero.stat3": "Community server",
      "hero.stat4": "Installer",
      "hero.floatServer": "Server online",

      "about.eyebrow": "The project",
      "about.title1": "Not another launcher.",
      "about.title2": "It's yours.",
      "about.lead": "RagsMc started from a simple idea: playing Minecraft should be fast, clear, and free of config headaches.",
      "about.p2": "It's an independent project, built by a player and maintained with the community. No telemetry, no mandatory accounts, and no features you didn't ask for.",
      "about.check1": "Versions, mods, and settings in one place",
      "about.check2": "Its own interface, not a store skin",
      "about.check3": "Free updates, no subscription",
      "about.link": "See what's inside",
      "about.specTitle": "Project sheet",
      "about.specStatus": "Active",
      "about.quote": "“Made by players, for players.”",
      "about.quoteBy": "— RagsnorWolf, creator",

      "spec.version": "Version",
      "spec.platform": "Platform",
      "spec.loaders": "Loaders",
      "spec.server": "Server",
      "spec.price": "Price",
      "spec.free": "Free",
      "spec.status": "Status",
      "spec.stable": "Stable release",

      "features.eyebrow": "Features",
      "features.title1": "Less friction.",
      "features.title2": "More play.",
      "features.desc": "Every part of the launcher is designed to get you into the world in fewer clicks, without giving up control.",
      "features.f1.title": "Mod manager, without leaving the launcher",
      "features.f1.desc": "Install, enable, and disable mods from one screen. Fewer folders, fewer mistakes.",
      "features.f2.title": "All your versions, sorted",
      "features.f2.desc": "Switch versions and loaders without reinstalling anything. Your installs stay one click away.",
      "features.f3.title": "Straight to the game",
      "features.f3.desc": "No intermediate screens or endless setup. Open it and play.",
      "features.f4.title": "Real customization",
      "features.f4.desc": "Themes, backgrounds, and settings that stick with you instead of resetting.",
      "features.f5.title": "Quiet updates",
      "features.f5.desc": "Notices when they matter. Install the new version whenever you want.",
      "features.f5.auto": "Auto",
      "features.f6.title": "A console when you need it",
      "features.f6.desc": "Real-time logs so you understand what's happening with your mods instead of guessing.",
      "features.f6.live": "Live",

      "server.eyebrow": "The server",
      "server.title1": "A shared",
      "server.title2": "world.",
      "server.desc": "Join RagsMc and play with the community. One IP, one version, no fuss.",
      "server.online": "Online · 24/7",
      "server.cardTitle": "Your next world starts here.",
      "server.cardCopy": "Survival, community, and a server that doesn't fall over every time someone places one block too many.",
      "server.ipLabel": "Server IP",
      "server.copy": "Copy IP",
      "server.stepsTitle": "How to join",
      "server.step1": "Open Minecraft 1.21.1 with Forge installed.",
      "server.step2": "Go to Multiplayer and add a server.",
      "server.step3": "Paste the IP and connect. See you inside.",
      "server.visualTag": "Survival · Community",

      "gallery.eyebrow": "Gallery",
      "gallery.title1": "A look",
      "gallery.title2": "inside.",
      "gallery.desc": "Real screenshots of the launcher and the server. No renders, no hype.",
      "gallery.hint": "Use the arrow keys",

      "roadmap.eyebrow": "Roadmap",
      "roadmap.title1": "What's next,",
      "roadmap.title2": "no hype.",
      "roadmap.desc": "No made-up dates. Each phase ships when it's ready.",
      "roadmap.done": "Done",
      "roadmap.current": "In progress",
      "roadmap.planned": "Planned",
      "roadmap.exploring": "Exploring",
      "roadmap.r1.title": "First release",
      "roadmap.r1.desc": "Launcher base, installs, and Minecraft launching.",
      "roadmap.r2.title": "Stability",
      "roadmap.r2.desc": "Fixes, performance, and 1.21.1 support.",
      "roadmap.r3.title": "Mods 2.0",
      "roadmap.r3.desc": "Enable, disable, and update mods without leaving the launcher.",
      "roadmap.r4.title": "Linux and macOS",
      "roadmap.r4.desc": "Bring the launcher to more systems with the same experience.",
      "roadmap.r5.title": "Profiles and sync",
      "roadmap.r5.desc": "Sync settings and profiles across devices.",
      "roadmap.note": "The roadmap can change. Community feedback leads.",

      "download.eyebrow": "Download",
      "download.title1": "Ready to",
      "download.title2": "play.",
      "download.desc": "Windows 10/11 installer. No sign-up, no ads, no surprises.",
      "download.badgeWin": "Windows 10/11",
      "download.badgeSize": "11.0 MB",
      "download.cardTitle": "RagsMc Launcher",
      "download.cardCopy": "The official installer, with everything you need to start playing in under a minute.",
      "download.cta": "Download for Windows",
      "download.altZip": "Download portable ZIP",
      "download.altAv": "Windows flags it as a virus?",
      "download.note": "SHA-256 verified. SmartScreen may ask for confirmation: that's normal for apps without a commercial signature.",
      "download.sideTitle": "Release details",
      "download.sideStatus": "Stable",
      "download.metaFile": "File",
      "download.metaSize": "Size",
      "download.metaDate": "Published",
      "download.metaDateValue": "Oct 22, 2026",
      "download.metaPlatform": "Platform",
      "download.includesTitle": "Includes",
      "download.include1": "Built-in mod manager",
      "download.include2": "Fabric, Forge, NeoForge, and Quilt",
      "download.include3": "Real-time log console",

      "community.eyebrow": "Community",
      "community.title1": "Where it all",
      "community.title2": "happens.",
      "community.desc": "Streams, clips, updates, and support. Pick your channel.",
      "community.tagTwitch": "Streams",
      "community.tagTikTok": "Clips",
      "community.tagYouTube": "Videos",
      "community.tagWhatsApp": "Updates",
      "community.waHandle": "Official channel",

      "faq.eyebrow": "FAQ",
      "faq.title1": "Before you",
      "faq.title2": "download.",
      "faq.desc": "What people usually ask before installing. If something's still unclear, the community is one message away.",
      "faq.support": "Go to the community",
      "faq.q1": "What is RagsMc Launcher?",
      "faq.a1": "An independent Minecraft launcher built to bring versions, mods, and settings together in a fast, clear interface. It is not affiliated with Mojang or Microsoft.",
      "faq.q2": "Is it free?",
      "faq.a2": "Yes. The launcher is free, with no subscriptions or paywalled features. Updates are free too.",
      "faq.q3": "Which versions and loaders are supported?",
      "faq.a3": "The recommended version for the server is Minecraft 1.21.1 with Forge. The launcher also covers Fabric, NeoForge, and Quilt in its installs.",
      "faq.q4": "Do I need a Microsoft account?",
      "faq.a4": "RagsMc doesn't manage accounts. To play on the community server you need a Minecraft Java Edition account, just like on any online server.",
      "faq.q5": "Windows flags it as a virus. Is that normal?",
      "faq.a5": "It's a common false positive for indie installers without a commercial signature. Verify the SHA-256 above before running it.",
      "faq.a5link": "Read the false-positive guide",
      "faq.q6": "How do I join the server?",
      "faq.a6": "Open Minecraft 1.21.1 with Forge, go to Multiplayer, add a server with the IP ragsmc.dpdns.org, and connect. You can also copy the IP from the Server section.",
      "faq.q7": "Will it come to Linux or macOS?",
      "faq.a7": "It's on the roadmap as phase v1.2. There's no date yet: we'd rather ship it when it works well, not before.",

      "footer.tagline": "An independent Minecraft launcher. Made by players, for players.",
      "footer.status": "Server online",
      "footer.product": "Product",
      "footer.resources": "Resources",
      "footer.legal": "Legal",
      "footer.faq": "FAQ",
      "footer.falsePositive": "False positives",
      "footer.github": "Site on GitHub",
      "footer.notice": "Legal notice",
      "footer.privacy": "Privacy",
      "footer.cookies": "Cookies",
      "footer.contact": "Contact",
      "footer.copyright": "Independent project.",
      "footer.disclaimer": "Not affiliated with Mojang Studios or Microsoft. Minecraft is a trademark of Mojang Synergies AB.",
      "footer.top": "Back to top",

      "common.copied": "Copied",
      "toast.copied": "Copied to clipboard",
      "toast.langEs": "Language: Spanish",
      "toast.langEn": "Language: English",
      "theme.toLight": "Switch to light theme",
      "theme.toDark": "Switch to dark theme",
      "lang.switch": "Cambiar a español",
      "menu.open": "Open menu",
      "menu.close": "Close menu",
      "gallery.prev": "Previous screenshot",
      "gallery.next": "Next screenshot",
      "gallery.play": "Resume autoplay",
      "gallery.pause": "Pause autoplay",
      "gallery.viewport": "Screenshot gallery",
      "hash.aria": "Copy SHA-256"
    }
  };

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const metaTheme = $('meta[name="theme-color"]');
  const metaDesc = $('meta[name="description"]');
  const ogTitle = $('meta[property="og:title"]');
  const ogDesc = $('meta[property="og:description"]');
  const ogLocale = $('meta[property="og:locale"]');
  const twTitle = $('meta[name="twitter:title"]');
  const twDesc = $('meta[name="twitter:description"]');

  const langToggle = $("#langToggle");
  const themeToggle = $("#themeToggle");
  const menuBtn = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");
  const header = $("#siteHeader");
  const scrollProgress = $("#scrollProgress");
  const toTop = $("#toTop");
  const toast = $("#toast");
  const toastText = $("#toastText");
  const heroSpot = $("#heroSpot");

  let lang = "es";
  try {
    lang = localStorage.getItem("ragsmc-lang") === "en" ? "en" : "es";
  } catch (e) {}

  const t = (key) => (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;

  /* ---------- Año ---------- */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---------- Toast ---------- */
  let toastTimer = null;
  function showToast(message) {
    if (!toast || !toastText) return;
    toastText.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2600);
  }

  /* ---------- Tema ---------- */
  function themeLabel(theme) {
    return theme === "light" ? t("theme.toDark") : t("theme.toLight");
  }
  function applyTheme(theme, persist) {
    root.setAttribute("data-theme", theme);
    if (metaTheme) metaTheme.setAttribute("content", theme === "light" ? "#F7F8FA" : "#0B0F14");
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
      themeToggle.setAttribute("aria-label", themeLabel(theme));
    }
    if (persist) {
      try { localStorage.setItem("ragsmc-theme", theme); } catch (e) {}
    }
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
      applyTheme(next, true);
    });
  }

  /* ---------- Galería ---------- */
  const gallery = $("#gallery");
  const galleryViewport = $("#galleryViewport");
  const galleryThumbs = $("#galleryThumbs");
  const galleryTitle = $("#galleryTitle");
  const galleryDesc = $("#galleryDesc");
  const galleryBarTitle = $("#galleryBarTitle");
  const galleryCounter = $("#galleryCounter");
  const galleryAutoplay = $("#galleryAutoplay");
  const galleryPrev = $("[data-gallery-prev]");
  const galleryNext = $("[data-gallery-next]");
  const slides = $$(".gallery-slide");
  const thumbs = [];

  const CAPTIONS = {
    es: [
      { t: "Pantalla principal", d: "Todo a un clic: jugar, instalar, ajustar." },
      { t: "El campamento", d: "Una base de la comunidad, lista para explorar." },
      { t: "El mundo", d: "Bosque de cerezos en el servidor comunitario." },
      { t: "Atardecer", d: "Captura del servidor. Sin filtros." }
    ],
    en: [
      { t: "Main screen", d: "Everything one click away: play, install, adjust." },
      { t: "The camp", d: "A community base, ready to explore." },
      { t: "The world", d: "Cherry grove on the community server." },
      { t: "Sunset", d: "A server screenshot. No filters." }
    ]
  };

  let currentSlide = 0;
  let renderSlide = () => {};
  let playing = !reduceMotion;
  let galleryVisible = false;
  let galleryHovered = false;
  let galleryTimer = null;
  const slideCount = slides.length;

  if (gallery && galleryThumbs && slideCount) {
    slides.forEach((slide, i) => {
      slide.id = "gallery-panel-" + i;
      slide.setAttribute("role", "tabpanel");
      slide.setAttribute("aria-roledescription", "slide");
      const img = slide.querySelector("img");
      const button = document.createElement("button");
      button.type = "button";
      button.className = "gallery-thumb";
      button.id = "gallery-tab-" + i;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "gallery-panel-" + i);
      button.setAttribute("aria-selected", i === 0 ? "true" : "false");
      button.tabIndex = i === 0 ? 0 : -1;
      const thumbImg = document.createElement("img");
      thumbImg.src = img ? img.getAttribute("src") : "";
      thumbImg.alt = "";
      thumbImg.loading = "lazy";
      thumbImg.decoding = "async";
      button.appendChild(thumbImg);
      button.addEventListener("click", () => {
        renderSlide(i, true);
        button.focus();
      });
      galleryThumbs.appendChild(button);
      thumbs.push(button);
    });

    const startTimer = () => {
      window.clearInterval(galleryTimer);
      galleryTimer = null;
      if (!playing || !galleryVisible || galleryHovered || document.hidden) return;
      galleryTimer = window.setInterval(() => renderSlide(currentSlide + 1, false), 6200);
    };
    const stopTimer = () => {
      window.clearInterval(galleryTimer);
      galleryTimer = null;
    };
    const restartTimer = () => {
      stopTimer();
      startTimer();
    };

    renderSlide = function (index, userAction) {
      currentSlide = ((index % slideCount) + slideCount) % slideCount;
      slides.forEach((slide, i) => {
        const active = i === currentSlide;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
      });
      thumbs.forEach((thumb, i) => {
        const active = i === currentSlide;
        thumb.setAttribute("aria-selected", active ? "true" : "false");
        thumb.tabIndex = active ? 0 : -1;
      });
      const copy = (CAPTIONS[lang] || CAPTIONS.es)[currentSlide] || CAPTIONS.es[0];
      if (galleryTitle) galleryTitle.textContent = copy.t;
      if (galleryDesc) galleryDesc.textContent = copy.d;
      if (galleryCounter) {
        galleryCounter.textContent =
          String(currentSlide + 1).padStart(2, "0") + " / " + String(slideCount).padStart(2, "0");
      }
      if (galleryBarTitle) {
        galleryBarTitle.textContent = currentSlide < 1 ? "RagsMc Launcher" : "ragsmc.dpdns.org";
      }
      if (userAction) restartTimer();
    };

    const go = (dir) => renderSlide(currentSlide + dir, true);

    if (galleryPrev) galleryPrev.addEventListener("click", () => go(-1));
    if (galleryNext) galleryNext.addEventListener("click", () => go(1));

    if (galleryViewport) {
      galleryViewport.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") { e.preventDefault(); go(-1); }
        else if (e.key === "ArrowRight") { e.preventDefault(); go(1); }
        else if (e.key === "Home") { e.preventDefault(); renderSlide(0, true); }
        else if (e.key === "End") { e.preventDefault(); renderSlide(slideCount - 1, true); }
      });

      let touchStartX = null;
      galleryViewport.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].clientX;
      }, { passive: true });
      galleryViewport.addEventListener("touchend", (e) => {
        if (touchStartX === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX;
        touchStartX = null;
        if (Math.abs(delta) > 42) go(delta > 0 ? -1 : 1);
      }, { passive: true });
    }

    if (galleryThumbs) {
      galleryThumbs.addEventListener("keydown", (e) => {
        if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
        e.preventDefault();
        const dir = e.key === "ArrowRight" ? 1 : -1;
        renderSlide(currentSlide + dir, true);
        const nextThumb = thumbs[currentSlide];
        if (nextThumb) nextThumb.focus();
      });
    }

    if (galleryAutoplay) {
      if (reduceMotion) {
        playing = false;
        galleryAutoplay.hidden = true;
      }
      galleryAutoplay.setAttribute("aria-pressed", playing ? "true" : "false");
      galleryAutoplay.addEventListener("click", () => {
        playing = !playing;
        galleryAutoplay.setAttribute("aria-pressed", playing ? "true" : "false");
        galleryAutoplay.setAttribute("aria-label", t(playing ? "gallery.pause" : "gallery.play"));
        if (playing) startTimer(); else stopTimer();
      });
    }

    gallery.addEventListener("mouseenter", () => { galleryHovered = true; stopTimer(); });
    gallery.addEventListener("mouseleave", () => { galleryHovered = false; startTimer(); });
    gallery.addEventListener("focusin", () => { galleryHovered = true; stopTimer(); });
    gallery.addEventListener("focusout", (e) => {
      if (!gallery.contains(e.relatedTarget)) { galleryHovered = false; startTimer(); }
    });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        galleryVisible = entries[0].isIntersecting;
        if (galleryVisible) startTimer(); else stopTimer();
      }, { threshold: 0.22 }).observe(gallery);
    } else {
      galleryVisible = true;
      startTimer();
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopTimer(); else startTimer();
    });

    renderSlide(0, false);
  }

  /* ---------- Idioma ---------- */
  const galleryAria = () => {
    if (galleryPrev) galleryPrev.setAttribute("aria-label", t("gallery.prev"));
    if (galleryNext) galleryNext.setAttribute("aria-label", t("gallery.next"));
    if (galleryViewport) galleryViewport.setAttribute("aria-label", t("gallery.viewport"));
    if (galleryAutoplay && !galleryAutoplay.hidden) {
      galleryAutoplay.setAttribute("aria-label", t(playing ? "gallery.pause" : "gallery.play"));
    }
    thumbs.forEach((thumb, i) => {
      const copy = (CAPTIONS[lang] || CAPTIONS.es)[i];
      if (copy) thumb.setAttribute("aria-label", copy.t);
    });
  };

  function applyLang(next, announce) {
    lang = next === "en" ? "en" : "es";
    const dict = I18N[lang];
    root.setAttribute("lang", lang);
    root.setAttribute("data-lang", lang);

    $$("[data-i18n]").forEach((el) => {
      const value = dict[el.getAttribute("data-i18n")];
      if (value !== undefined) el.textContent = value;
    });

    document.title = dict["meta.title"];
    if (metaDesc) metaDesc.setAttribute("content", dict["meta.desc"]);
    if (ogTitle) ogTitle.setAttribute("content", dict["meta.title"]);
    if (ogDesc) ogDesc.setAttribute("content", dict["meta.desc"]);
    if (twTitle) twTitle.setAttribute("content", dict["meta.title"]);
    if (twDesc) twDesc.setAttribute("content", dict["meta.desc"]);
    if (ogLocale) ogLocale.setAttribute("content", lang === "en" ? "en_US" : "es_AR");

    if (langToggle) {
      langToggle.textContent = lang === "es" ? "EN" : "ES";
      langToggle.setAttribute("aria-label", dict["lang.switch"]);
      langToggle.setAttribute("title", dict["lang.switch"]);
    }
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", themeLabel(root.getAttribute("data-theme") || "dark"));
    }
    if (menuBtn) {
      menuBtn.setAttribute("aria-label", t(mobileMenu && mobileMenu.classList.contains("is-open") ? "menu.close" : "menu.open"));
    }
    const hashCopy = $(".hash-copy");
    if (hashCopy) hashCopy.setAttribute("aria-label", t("hash.aria"));

    galleryAria();
    if (slideCount) renderSlide(currentSlide, false);

    try { localStorage.setItem("ragsmc-lang", lang); } catch (e) {}
    if (announce) showToast(t(lang === "es" ? "toast.langEs" : "toast.langEn"));
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => applyLang(lang === "es" ? "en" : "es", true));
  }

  /* ---------- Menú móvil ---------- */
  let menuOpen = false;
  function setMenu(open) {
    if (!mobileMenu || !menuBtn) return;
    menuOpen = open;
    mobileMenu.classList.toggle("is-open", open);
    mobileMenu.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) mobileMenu.removeAttribute("inert");
    else mobileMenu.setAttribute("inert", "");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    menuBtn.setAttribute("aria-label", t(open ? "menu.close" : "menu.open"));
    document.body.classList.toggle("menu-open", open);
    if (open) {
      const first = mobileMenu.querySelector("a[href]");
      window.setTimeout(() => { if (first) first.focus(); }, 70);
    }
  }
  if (menuBtn) {
    menuBtn.addEventListener("click", () => setMenu(!menuOpen));
  }
  $$("#mobileMenu a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });
  document.addEventListener("keydown", (e) => {
    if (!menuOpen) return;
    if (e.key === "Escape") {
      setMenu(false);
      if (menuBtn) menuBtn.focus();
      return;
    }
    if (e.key !== "Tab" || !mobileMenu) return;
    const focusables = $$('a[href], button:not([disabled])', mobileMenu)
      .filter((el) => el.offsetParent !== null);
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    }
  });
  const desktopQuery = window.matchMedia("(min-width: 1121px)");
  const onDesktop = (e) => { if (e.matches && menuOpen) setMenu(false); };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", onDesktop);
  else if (desktopQuery.addListener) desktopQuery.addListener(onDesktop);

  /* ---------- Copiar ---------- */
  async function writeClipboard(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (e) {}
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.top = "-1000px";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch (e) {
      return false;
    }
  }

  $$("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const value = button.getAttribute("data-copy") || "";
      const ok = await writeClipboard(value);
      if (!ok) {
        showToast(lang === "es" ? "No se pudo copiar" : "Couldn't copy");
        return;
      }
      showToast(t("toast.copied"));
      button.classList.add("is-copied");
      const label = button.querySelector("span[data-i18n]");
      if (label) {
        const key = label.getAttribute("data-i18n");
        label.textContent = t("common.copied");
        window.setTimeout(() => { label.textContent = t(key); }, 1700);
      }
      window.setTimeout(() => button.classList.remove("is-copied"), 1700);
    });
  });

  /* ---------- FAQ ---------- */
  const faqItems = $$(".faq-item");
  faqItems.forEach((item) => {
    const question = $(".faq-q", item);
    const panel = $(".faq-panel", item);
    if (!question || !panel) return;
    question.addEventListener("click", () => {
      const willOpen = !item.classList.contains("open");
      faqItems.forEach((other) => {
        if (other === item) return;
        other.classList.remove("open");
        const q = $(".faq-q", other);
        const p = $(".faq-panel", other);
        if (q) q.setAttribute("aria-expanded", "false");
        if (p) p.setAttribute("aria-hidden", "true");
      });
      item.classList.toggle("open", willOpen);
      question.setAttribute("aria-expanded", willOpen ? "true" : "false");
      panel.setAttribute("aria-hidden", willOpen ? "false" : "true");
    });
  });

  /* ---------- Reveals ---------- */
  function initReveals() {
    const elements = $$(".reveal");
    if (!elements.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    elements.forEach((el) => {
      el.classList.add("reveal-ready");
      observer.observe(el);
    });
  }

  /* ---------- Scroll / navbar ---------- */
  const navLinks = $$(".desktop-nav a");
  const navSections = navLinks
    .map((link) => document.getElementById((link.getAttribute("href") || "").slice(1)))
    .filter(Boolean);

  function updateActiveNav(y) {
    if (!navSections.length) return;
    const marker = y + window.innerHeight * 0.34;
    let activeId = "";
    navSections.forEach((section) => {
      if (section.offsetTop <= marker) activeId = section.id;
    });
    navLinks.forEach((link) => {
      const active = link.getAttribute("href") === "#" + activeId;
      link.classList.toggle("active", active);
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      const y = window.scrollY || window.pageYOffset || 0;
      if (header) header.classList.toggle("scrolled", y > 18);
      if (scrollProgress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress.style.transform = "scaleX(" + (max > 0 ? Math.min(1, y / max) : 0) + ")";
      }
      if (toTop) toTop.classList.toggle("show", y > 620);
      updateActiveNav(y);
      ticking = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Spotlight del hero ---------- */
  if (heroSpot && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    let spotFrame = 0;
    let spotX = 0;
    let spotY = 0;
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.addEventListener("pointermove", (e) => {
        const rect = hero.getBoundingClientRect();
        spotX = e.clientX - rect.left;
        spotY = e.clientY - rect.top;
        if (spotFrame) return;
        spotFrame = window.requestAnimationFrame(() => {
          heroSpot.style.setProperty("--mx", spotX + "px");
          heroSpot.style.setProperty("--my", spotY + "px");
          spotFrame = 0;
        });
      }, { passive: true });
    }
  }

  /* ---------- GSAP (opcional y protegido) ---------- */
  function initScrollFX() {
    if (reduceMotion) return;
    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    if (!gsap || !ScrollTrigger) return;
    try {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".hero-media video", {
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1 }
      });
      gsap.to(".float-card-a", {
        y: -16,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 }
      });
      gsap.to(".float-card-b", {
        y: 14,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.2 }
      });
      gsap.to(".download-glow", {
        y: -48,
        ease: "none",
        scrollTrigger: { trigger: "#descarga", start: "top bottom", end: "bottom top", scrub: 1.4 }
      });
      window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
    } catch (e) {}
  }

  /* ---------- Loader ---------- */
  const loader = $("#loader");
  const loaderBar = $("#loaderBar");
  const loaderPct = $("#loaderPct");
  let loaderFinished = false;

  function finishLoader(immediate) {
    if (loaderFinished) return;
    loaderFinished = true;
    document.body.classList.add("loaded");
    try { sessionStorage.setItem("ragsmc-loader", "1"); } catch (e) {}
    if (loader) {
      loader.classList.add("is-done");
      window.setTimeout(() => { if (loader.parentNode) loader.parentNode.removeChild(loader); }, immediate ? 0 : 760);
    }
    window.setTimeout(initScrollFX, immediate ? 0 : 280);
  }

  function runLoader() {
    if (root.classList.contains("loader-skip") || reduceMotion) {
      finishLoader(true);
      return;
    }
    const duration = 1150;
    let start = null;
    const step = (now) => {
      if (!start) start = now;
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (loaderBar) loaderBar.style.setProperty("--p", eased.toFixed(3));
      if (loaderPct) loaderPct.textContent = Math.round(eased * 100) + "%";
      if (progress < 1) window.requestAnimationFrame(step);
      else finishLoader(false);
    };
    window.requestAnimationFrame(step);
  }

  /* ---------- Init ---------- */
  let initialTheme = "dark";
  try {
    initialTheme = localStorage.getItem("ragsmc-theme") === "light" ? "light" : "dark";
  } catch (e) {}

  applyTheme(initialTheme, false);
  applyLang(lang, false);
  initReveals();
  runLoader();
  onScroll();
})();
