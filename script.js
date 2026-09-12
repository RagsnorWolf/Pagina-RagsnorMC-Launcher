/* ============================================================
   RagsMc Launcher — script.js
   Tema claro/oscuro · ES/EN · reveal · lightbox · aviso · música
   Vanilla JS · sin módulos · file:// safe
   ============================================================ */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s, c) { return (c || document).querySelector(s); }
  function $all(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

  /* ---------------- DICCIONARIO ES / EN ---------------- */
  var I18N = {
    es: {
      'skip': 'Saltar al contenido',
      'brand.alt': 'Logo de lobo RagsMc',
      'nav.home': 'Inicio', 'nav.project': 'Proyecto', 'nav.features': 'Características', 'nav.gallery': 'Galería',
      'nav.community': 'Comunidad', 'nav.progress': 'Avance', 'nav.download': 'Descarga', 'nav.cta': 'Descargar', 'nav.menu': 'Abrir menú',
      'theme.toggle': 'Cambiar tema',
      'hero.badge': 'Proyecto independiente · En desarrollo',
      'hero.sub': 'Un launcher de Minecraft rápido, simple y con identidad propia. Hecho por jugadores, para jugadores.',
      'hero.cta1': 'Descargar', 'hero.cta2': 'Ver características',
      'hero.note': 'Disponible para Windows · macOS y Linux próximamente.',
      'about.kicker': 'Sobre el proyecto',
      'about.badge': 'En desarrollo',
      'about.title': '¿Qué es RagsMc Launcher?',
      'about.p1': 'RagsMc Launcher es un proyecto independiente creado con el objetivo de ofrecer una experiencia moderna y personalizada para jugar Minecraft desde un único lugar.',
      'about.p2': 'Actualmente se encuentra en construcción. Cada sistema, pantalla y decisión está siendo pensado para crear una base sólida, rápida y preparada para crecer.',
      'about.s1': 'Proyecto indie', 'about.s2': 'Mundos posibles', 'about.s3': 'Identidad propia',
      'feat.kicker': 'El núcleo',
      'feat.title': 'Características',
      'feat.desc': 'Una base enfocada en lo importante, preparada para evolucionar junto al proyecto.',
      'feat.1t': 'Rápido',
      'feat.1d': 'Diseñado para ofrecer una experiencia de inicio rápida y sencilla.',
      'feat.2t': 'Minecraft',
      'feat.2d': 'Pensado alrededor de la experiencia de Minecraft.',
      'feat.3t': 'Personalizable',
      'feat.3d': 'Preparado para futuras opciones de personalización.',
      'feat.4t': 'Versiones',
      'feat.4d': 'Preparado para gestionar diferentes versiones de Minecraft.',
      'feat.5t': 'En desarrollo',
      'feat.5d': 'El proyecto continúa evolucionando constantemente.',
      'feat.6t': 'Futuro',
      'feat.6d': 'Nuevas características serán incorporadas progresivamente.',
      'gal.kicker': 'Galería', 'gal.title': 'El mundo que nos inspira',
      'gal.desc': 'La estética y el ambiente que guían el diseño del proyecto.',
      'gal.alt1': 'Bosque de Minecraft al atardecer', 'gal.alt2': 'Lago en las llanuras de Minecraft',
      'gal.alt3': 'Claro con agua en la jungla de Minecraft', 'gal.alt4': 'Campamento con fogata en Minecraft',
      'gal.alt5': 'Atardecer en el bosque de Minecraft',
      'gal.alt6': 'Valle con lago en Minecraft',
      'gal.alt7': 'Vuelo con élitros sobre la jungla en Minecraft',
      'gal.alt8': 'Picos nevados en Minecraft',
      'gal.alt9': 'Arboleda de cerezos en Minecraft',
      'gal.alt10': 'Colina de cerezos junto al lago en Minecraft',
      'gal.note': 'Imágenes conceptuales de referencia. No son capturas del launcher.',
      'av.kicker': 'Avance del launcher',
      'av.title': 'Así va el launcher',
      'av.desc': 'Capturas reales del desarrollo. Sin renders ni promesas: esto es lo que ya existe hoy.',
      'av.alt1': 'Pantalla principal del launcher RagsMc en desarrollo',
      'av.c1': 'Pantalla Jugar', 'av.c2': 'Selector 1.21.10', 'av.c3': 'Canal DEV',
      'av.note': 'Iremos publicando cada avance aquí mismo.',
      'road.kicker': 'Ruta de desarrollo',
      'road.title': 'RagsMc Launcher está creciendo.',
      'road.desc': 'El avance será progresivo: primero una experiencia estable y clara; después, nuevas posibilidades. Sin promesas vacías.',
      'road.phase': 'Fase',
      'road.p1t': 'Concepto', 'road.p1d': 'Diseño y concepto inicial.',
      'road.p2t': 'Desarrollo', 'road.p2d': 'Construcción del launcher.',
      'road.p3t': 'Testing', 'road.p3d': 'Pruebas, correcciones y estabilidad.',
      'road.p4t': 'Release', 'road.p4d': 'Primera versión pública estable.',
      'road.p5t': 'Actualizaciones', 'road.p5d': 'Mejoras y nuevas funciones.',
      'road.done': 'Completado', 'road.now': 'Actual', 'road.next': 'Pendiente',
      'soc.kicker': 'Comunidad', 'soc.title': 'Síguenos',
      'soc.desc': 'Contenido, avances y directos del proyecto.',
      'soc.twitch': 'Twitch de RagsMc', 'soc.tiktok': 'TikTok de RagsMc', 'soc.youtube': 'YouTube de RagsMc',
      'soc.twitchd': 'Directos y avances en vivo.',
      'soc.tiktokd': 'Clips y novedades en corto.',
      'soc.ytd': 'Videos y devlogs.',
      'dl.kicker': 'Descarga', 'dl.title': 'Consigue RagsMc Launcher',
      'dl.desc': 'Ya disponible para Windows. macOS y Linux llegarán próximamente.',
      'dl.status': 'Versión 1.0.0 disponible para Windows',
      'dl.statussub': 'Instalador de 73 MB, gratis y sin registro.',
      'dl.notify': 'Avísame de novedades y nuevas versiones', 'dl.ph': 'tu@correo.com', 'dl.btn': 'Avisarme',
      'dl.privacy': 'Tu correo se guarda solo en este dispositivo. Sin spam.',
      'dl.soon': 'Próximamente',
      'dl.support': '¿Dudas o sugerencias? Habla con nosotros en la comunidad.',
      'dl.supportbtn': 'Ir a la comunidad',
      'footer.note': 'Proyecto independiente. Sin afiliación con Mojang ni Microsoft.',
      'footer.mirror': '¿No puedes entrar? Usa el espejo:',
      'noping.tab': '¿Tu Internet anda muy mal?',
      'noping.logo': 'NoPing: abrir sitio oficial',
      'noping.logoalt': 'Logo de NoPing',
      'noping.kicker': 'Conexión',
      'noping.title': '¿Lag en tus partidas?',
      'noping.desc': 'NoPing es un programa que optimiza la ruta de tu conexión hacia los servidores de juego: en vez del camino congestionado de tu operadora, te lleva por la vía más rápida disponible.',
      'noping.b1': 'Menos ping y menos tirones.',
      'noping.b2': 'Conexión más estable.',
      'noping.b3': 'Funciona con Minecraft y cientos de juegos.',
      'noping.cta': 'Probar NoPing gratis',
      'noping.video': 'Ver qué es NoPing en video',
      'noping.note': 'Los resultados dependen de tu conexión. Enlace de referido.',
      'lb.close': 'Cerrar',
      'misc.top': 'Volver arriba',
      'load.loading': 'Cargando mundo...',
      'load.tipLabel': 'Consejo:',
      'marquee': 'RAGSMC LAUNCHER <b>✦</b> MINECRAFT <b>✦</b> EN DESARROLLO <b>✦</b> MODO CLARO Y OSCURO <b>✦</b> ',
      tips: ['El botón de música está abajo a la izquierda', 'Puedes cambiar entre modo claro y oscuro arriba', 'La galería se amplía con un clic', 'Dicen que el lobo esconde un rugido... hazle 3 clics'],
      stages: ['Generando terreno...', 'Cargando chunks...', 'Despertando al Enderdragón...', 'Puliendo esmeraldas...'],
      'music.toggle': 'Activar o pausar música',
      'notify.ok': '¡Listo! Te avisaremos en cuanto esté disponible.',
      'notify.err': 'Escribe un correo válido para avisarte.'
    },
    en: {
      'skip': 'Skip to content',
      'brand.alt': 'RagsMc wolf logo',
      'nav.home': 'Home', 'nav.project': 'Project', 'nav.features': 'Features', 'nav.gallery': 'Gallery',
      'nav.community': 'Community', 'nav.progress': 'Progress', 'nav.download': 'Download', 'nav.cta': 'Download', 'nav.menu': 'Open menu',
      'theme.toggle': 'Toggle theme',
      'hero.badge': 'Independent project · In development',
      'hero.sub': 'A fast, simple Minecraft launcher with its own identity. Made by players, for players.',
      'hero.cta1': 'Download', 'hero.cta2': 'View features',
      'hero.note': 'Available for Windows · macOS and Linux coming soon.',
      'about.kicker': 'About the project',
      'about.badge': 'In development',
      'about.title': 'What is RagsMc Launcher?',
      'about.p1': 'RagsMc Launcher is an independent project created to offer a modern, personalized experience for playing Minecraft from a single place.',
      'about.p2': 'It is currently under construction. Every system, screen and decision is being designed to build a solid, fast base ready to grow.',
      'about.s1': 'Indie project', 'about.s2': 'Possible worlds', 'about.s3': 'Own identity',
      'feat.kicker': 'The core',
      'feat.title': 'Features',
      'feat.desc': 'A base focused on what matters, ready to evolve with the project.',
      'feat.1t': 'Fast',
      'feat.1d': 'Designed for a fast, simple startup experience.',
      'feat.2t': 'Minecraft',
      'feat.2d': 'Built around the Minecraft experience.',
      'feat.3t': 'Customizable',
      'feat.3d': 'Ready for future customization options.',
      'feat.4t': 'Versions',
      'feat.4d': 'Ready to manage different Minecraft versions.',
      'feat.5t': 'In development',
      'feat.5d': 'The project keeps evolving.',
      'feat.6t': 'Future',
      'feat.6d': 'New features will be added over time.',
      'gal.kicker': 'Gallery', 'gal.title': 'The world that inspires us',
      'gal.desc': "The aesthetics and atmosphere guiding the project's design.",
      'gal.alt1': 'Minecraft forest at sunset', 'gal.alt2': 'Lake in the Minecraft plains',
      'gal.alt3': 'Water clearing in the Minecraft jungle', 'gal.alt4': 'Minecraft camp with campfire',
      'gal.alt5': 'Minecraft forest sunset',
      'gal.alt6': 'Minecraft valley with lake',
      'gal.alt7': 'Elytra flight over the Minecraft jungle',
      'gal.alt8': 'Snowy peaks in Minecraft',
      'gal.alt9': 'Cherry grove in Minecraft',
      'gal.alt10': 'Cherry hill by the lake in Minecraft',
      'gal.note': 'Conceptual reference images. Not launcher screenshots.',
      'av.kicker': 'Launcher progress',
      'av.title': 'How the launcher looks',
      'av.desc': 'Real development screenshots. No renders, no promises: this is what already exists today.',
      'av.alt1': 'RagsMc launcher main screen in development',
      'av.c1': 'Play screen', 'av.c2': '1.21.10 selector', 'av.c3': 'DEV channel',
      'av.note': 'We will keep posting every step forward right here.',
      'road.kicker': 'Development roadmap',
      'road.title': 'RagsMc Launcher is growing.',
      'road.desc': 'Progress will be gradual: first a stable, clear experience; then new possibilities. No empty promises.',
      'road.phase': 'Phase',
      'road.p1t': 'Concept', 'road.p1d': 'Design and initial concept.',
      'road.p2t': 'Development', 'road.p2d': 'Building the launcher.',
      'road.p3t': 'Testing', 'road.p3d': 'Tests, fixes and stability.',
      'road.p4t': 'Release', 'road.p4d': 'First stable public release.',
      'road.p5t': 'Updates', 'road.p5d': 'Improvements and new features.',
      'road.done': 'Completed', 'road.now': 'Current', 'road.next': 'Pending',
      'soc.kicker': 'Community', 'soc.title': 'Follow us',
      'soc.desc': 'Content, updates and live streams from the project.',
      'soc.twitch': 'RagsMc on Twitch', 'soc.tiktok': 'RagsMc on TikTok', 'soc.youtube': 'RagsMc on YouTube',
      'soc.twitchd': 'Live streams and sneak peeks.',
      'soc.tiktokd': 'Short clips and quick news.',
      'soc.ytd': 'Videos and devlogs.',
      'dl.kicker': 'Download', 'dl.title': 'Get RagsMc Launcher',
      'dl.desc': 'Now available for Windows. macOS and Linux coming soon.',
      'dl.status': 'Version 1.0.0 available for Windows',
      'dl.statussub': '73 MB installer, free with no sign-up.',
      'dl.notify': "Notify me of news and new releases", 'dl.ph': 'you@email.com', 'dl.btn': 'Notify me',
      'dl.privacy': 'Your email is stored only on this device. No spam.',
      'dl.soon': 'Coming soon',
      'dl.support': 'Questions or suggestions? Talk to us in the community.',
      'dl.supportbtn': 'Go to the community',
      'footer.note': 'Independent project. Not affiliated with Mojang or Microsoft.',
      'footer.mirror': "Can't get in? Use the mirror:",
      'noping.tab': 'Is your Internet running badly?',
      'noping.logo': 'NoPing: open official site',
      'noping.logoalt': 'NoPing logo',
      'noping.kicker': 'Connection',
      'noping.title': 'Lag in your games?',
      'noping.desc': 'NoPing is software that optimizes the route of your connection to game servers: instead of your ISP congested path, it takes you through the fastest available way.',
      'noping.b1': 'Lower ping and fewer spikes.',
      'noping.b2': 'More stable connection.',
      'noping.b3': 'Works with Minecraft and hundreds of games.',
      'noping.cta': 'Try NoPing free',
      'noping.video': 'Watch what NoPing is',
      'noping.note': 'Results depend on your connection. Referral link.',
      'lb.close': 'Close',
      'misc.top': 'Back to top',
      'load.loading': 'Loading world...',
      'load.tipLabel': 'Tip:',
      'marquee': 'RAGSMC LAUNCHER <b>✦</b> MINECRAFT <b>✦</b> IN DEVELOPMENT <b>✦</b> DARK &amp; LIGHT MODE <b>✦</b> ',
      tips: ['The music button is at the bottom left', 'You can switch between light and dark mode above', 'Click the gallery to enlarge it', 'They say the wolf hides a roar... click it 3 times'],
      stages: ['Generating terrain...', 'Loading chunks...', 'Waking the Ender Dragon...', 'Polishing emeralds...'],
      'music.toggle': 'Toggle music',
      'notify.ok': "Done! We'll let you know as soon as it's available.",
      'notify.err': 'Please enter a valid email address.'
    }
  };

  var lang = 'es';
  try { lang = localStorage.getItem('ragsmc-lang') || 'es'; } catch (e) {}
  if (lang !== 'es' && lang !== 'en') lang = 'es';

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key; }

  function applyLang() {
    document.documentElement.lang = lang;
    $all('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $all('[data-i18n-ph]').forEach(function (el) { el.setAttribute('placeholder', t(el.getAttribute('data-i18n-ph'))); });
    $all('[data-i18n-aria]').forEach(function (el) { el.setAttribute('aria-label', t(el.getAttribute('data-i18n-aria'))); });
    $all('[data-i18n-alt]').forEach(function (el) { el.setAttribute('alt', t(el.getAttribute('data-i18n-alt'))); });
    $all('.lang-btn').forEach(function (b) { b.classList.toggle('active', b.getAttribute('data-lang') === lang); });
    try { localStorage.setItem('ragsmc-lang', lang); } catch (e) {}
  }
  $all('.lang-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      if (lang === b.getAttribute('data-lang')) return;
      lang = b.getAttribute('data-lang');
      applyLang();
      playSfx('enderman');
      var msg = $('#notifyMsg');
      if (msg && msg.textContent) msg.textContent = msg.classList.contains('ok') ? t('notify.ok') : t('notify.err');
    });
  });

  /* ---------------- TEMA CLARO / OSCURO ---------------- */
  var root = document.documentElement, metaTheme = $('#metaTheme');
  var theme = 'dark';
  try { theme = localStorage.getItem('ragsmc-theme') || theme; } catch (e) {}
  if (!localStorage.getItem('ragsmc-theme') && window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light';
  function applyTheme() {
    root.setAttribute('data-theme', theme);
    if (metaTheme) metaTheme.setAttribute('content', theme === 'dark' ? '#05070d' : '#f6f8fb');
    try { localStorage.setItem('ragsmc-theme', theme); } catch (e) {}
  }
  var themeBtn = $('#themeBtn');
  if (themeBtn) themeBtn.addEventListener('click', function () {
    theme = theme === 'dark' ? 'light' : 'dark';
    applyTheme();
    playSfx('pop');
  });
  applyTheme();
  applyLang();

  /* ---------------- SCROLL: navbar, progreso, to-top, parallax hero ---------------- */
  var nav = $('#navbar'), burger = $('#burger'), mMenu = $('#mobileMenu');
  var progressFill = $('#progressFill'), toTop = $('#toTop'), heroContent = $('.hero-content');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var y = window.scrollY || 0;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (nav) nav.classList.toggle('scrolled', y > 24);
      if (progressFill) progressFill.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      if (toTop) toTop.classList.toggle('show', y > 700);
      if (heroContent && !reduceMotion && y < window.innerHeight) {
        heroContent.style.transform = 'translateY(' + (y * 0.22) + 'px)';
        heroContent.style.opacity = Math.max(0, 1 - y / (window.innerHeight * 0.85));
      }
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (toTop) toTop.addEventListener('click', function () {
    playSfx('pop');
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  });
  if (burger && mMenu) {
    burger.addEventListener('click', function () {
      var open = mMenu.classList.toggle('open');
      burger.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $all('a', mMenu).forEach(function (a) {
      a.addEventListener('click', function () {
        mMenu.classList.remove('open'); burger.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* link activo según sección visible */
  var navLinks = $all('.nav-link');
  if ('IntersectionObserver' in window) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.toggle('active', l.getAttribute('data-nav') === e.target.id); });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    ['inicio', 'proyecto', 'features', 'galeria', 'comunidad', 'descarga'].forEach(function (id) {
      var el = document.getElementById(id); if (el) navObs.observe(el);
    });
  }

  /* ---------------- REVEAL ON SCROLL ---------------- */
  var revealEls = $all('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          var d = parseInt(e.target.getAttribute('data-delay') || '0', 10);
          setTimeout(function () { e.target.classList.add('visible'); }, d);
          ro.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { ro.observe(el); });
  } else { revealEls.forEach(function (el) { el.classList.add('visible'); }); }

  /* ---------------- LIGHTBOX ---------------- */
  var lightbox = $('#lightbox'), lightImg = $('#lightImg');
  function openLight(src, alt) {
    lightImg.src = src; lightImg.alt = alt || '';
    lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function closeLight() {
    lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  $all('.gal-item').forEach(function (item) {
    item.addEventListener('click', function () {
      playSfx('chest');
      var img = $('img', item);
      openLight(item.getAttribute('data-full'), img ? img.alt : '');
    });
  });
  $all('[data-close]', lightbox).forEach(function (el) { el.addEventListener('click', closeLight); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLight(); });

  /* ---------------- FORMULARIO DE AVISO ---------------- */
  var form = $('#notifyForm'), mail = $('#notifyMail'), msg = $('#notifyMsg');
  if (form) {
    try { var prev = localStorage.getItem('ragsmc-notify'); if (prev && mail) mail.value = prev; } catch (e) {}
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var v = (mail.value || '').trim();
      var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      if (!ok) {
        msg.textContent = t('notify.err'); msg.className = 'notify-msg err';
        playSfx('click');
        mail.focus(); return;
      }
      try { localStorage.setItem('ragsmc-notify', v); } catch (err) {}
      msg.textContent = t('notify.ok'); msg.className = 'notify-msg ok';
      playSfx('levelup');
      mail.value = v;
    });
  }

  /* ---------------- MÚSICA ----------------
     Autoplay al entrar + loop. El botón la enciende/apaga a voluntad.
     1) Si existe ./assets/audio/c418.mp3 (tu propio archivo), lo reproduce en bucle.
     2) Si no, genera un ambiente tranquilo con WebAudio (sin archivos). */
  var musicBtn = $('#musicBtn');
  var musicOn = false, musicMode = null, fileAudio = null;
  var wantOn = true, retryArmed = false; // wantOn: el usuario (o el autoplay) la quiere sonando
  var AC = null, master = null, genTimer = null, genStep = 0;

  var SCALE = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25, 587.33, 659.25, 783.99]; // pentatónica Do mayor
  var MELODY = [0, 2, 4, 2, 5, 4, 2, 1, 0, -1, -1, 0, 2, 4, 7, 5, 4, 2, 0, -1];

  function ensureCtx() {
    if (AC) return true;
    var Ctor = window.AudioContext || window.webkitAudioContext;
    if (!Ctor) return false;
    AC = new Ctor();
    master = AC.createGain();
    master.gain.value = 0.32;
    var delay = AC.createDelay(1.0);
    delay.delayTime.value = 0.42;
    var fb = AC.createGain(); fb.gain.value = 0.35;
    var wet = AC.createGain(); wet.gain.value = 0.35;
    master.connect(AC.destination);
    master.connect(delay); delay.connect(fb); fb.connect(delay);
    delay.connect(wet); wet.connect(AC.destination);
    return true;
  }
  function softNote(freq, when, vol, dur) {
    var o = AC.createOscillator(), g = AC.createGain();
    o.type = 'triangle'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.0001, when);
    g.gain.exponentialRampToValueAtTime(vol, when + 1.4);
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
    o.connect(g); g.connect(master);
    o.start(when); o.stop(when + dur + 0.2);
  }
  function genTick() {
    clearTimeout(genTimer); genTimer = null;
    if (!wantOn || musicMode !== 'gen' || !AC) return;
    if (AC.state === 'running') {
      var now = AC.currentTime + 0.1;
      var idx = MELODY[genStep % MELODY.length];
      var f = idx < 0 ? SCALE[0] / 2 : SCALE[idx % SCALE.length];
      softNote(f, now, 0.12, 5.5);
      if (genStep % 4 === 0) softNote(SCALE[0] / 2, now, 0.06, 7); // bajo suave
      genStep++;
      uiPlaying(true);
      genTimer = setTimeout(genTick, 2600 + Math.random() * 1800);
    } else {
      uiPlaying(false);
      genTimer = setTimeout(genTick, 1000); // reintentar hasta tener permiso
    }
  }
  function pauseAll() {
    if (fileAudio) fileAudio.pause();
    clearTimeout(genTimer); genTimer = null;
    if (AC) { try { AC.suspend(); } catch (e) {} }
    uiPlaying(false);
  }
  function beginPlayback() {
    if (!wantOn) return;
    if (musicMode === 'file') startFile();
    else if (musicMode === 'gen') {
      if (!ensureCtx()) return;
      try { AC.resume(); } catch (e) {}
      genTick();
      armRetry();
    }
  }
  function armRetry() {
    // los navegadores bloquean el audio hasta el primer gesto: reintentar entonces
    if (retryArmed) return;
    retryArmed = true;
    var h = function () {
      if (!wantOn || musicOn) { unsub(); return; }
      beginPlayback();
      setTimeout(function () { if (musicOn || !wantOn) unsub(); }, 1500);
    };
    var unsub = function () {
      retryArmed = false;
      window.removeEventListener('pointerdown', h);
      window.removeEventListener('keydown', h);
      window.removeEventListener('touchstart', h);
    };
    window.addEventListener('pointerdown', h);
    window.addEventListener('keydown', h);
    window.addEventListener('touchstart', h);
  }
  function detectFile(cb) {
    var done = false;
    function fin(v) { if (!done) { done = true; cb(v); } }
    // en http(s): HEAD liviano (no descarga los 3 MB para detectar)
    if (location.protocol.indexOf('http') === 0 && window.fetch) {
      try {
        fetch('./assets/audio/c418.mp3', { method: 'HEAD', cache: 'no-store' })
          .then(function (r) { fin(!!(r && r.ok)); }, function () { fin(false); });
      } catch (e) { fin(false); return; }
      setTimeout(function () { fin(false); }, 4000);
      return;
    }
    // en file:// (doble clic local): sonda con Audio
    var a = new Audio();
    a.addEventListener('canplaythrough', function () { fin(true); });
    a.addEventListener('error', function () { fin(false); });
    try { a.src = './assets/audio/c418.mp3'; a.load(); } catch (e) { fin(false); return; }
    setTimeout(function () { fin(false); }, 4000);
  }
  function startFile() {
    if (!fileAudio) {
      fileAudio = new Audio('./assets/audio/c418.mp3');
      fileAudio.loop = true; // al terminar, vuelve a empezar solo
      fileAudio.volume = 0.3;
      fileAudio.addEventListener('playing', function () { uiPlaying(true); });
    }
    var pr = null;
    try { pr = fileAudio.play(); } catch (e) { pr = null; }
    if (pr && typeof pr.catch === 'function') {
      pr.catch(function () { armRetry(); }); // bloqueado: esperar al primer gesto
    } else {
      setTimeout(function () {
        if (fileAudio && !fileAudio.paused) uiPlaying(true); else armRetry();
      }, 600);
    }
  }
  function uiPlaying(on) {
    musicOn = on;
    if (musicBtn) {
      musicBtn.classList.toggle('playing', on);
      musicBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
  }
  var detecting = false, pendingCb = [];
  function detectMode(cb) {
    if (musicMode) { if (cb) cb(); return; }
    if (cb) pendingCb.push(cb);
    if (detecting) return;
    detecting = true;
    detectFile(function (found) {
      musicMode = found ? 'file' : 'gen';
      detecting = false;
      var cbs = pendingCb; pendingCb = [];
      cbs.forEach(function (f) { f(); });
    });
  }
  function startAutoMusic() { detectMode(function () { beginPlayback(); }); }
  if (musicBtn) musicBtn.addEventListener('click', function () {
    if (wantOn) { wantOn = false; pauseAll(); playSfx('click'); return; } // el usuario la apaga
    wantOn = true; // el usuario la enciende
    playSfx('portal');
    detectMode(function () { beginPlayback(); });
  });

  /* ---------------- SONIDO CLIC ESTILO MINECRAFT ----------------
     Cada enlace o botón reproduce un "tock" corto generado con WebAudio. */
  var sctx = null;
  function mcClick() {
    try {
      var Ctor = window.AudioContext || window.webkitAudioContext;
      if (!Ctor) return;
      if (!sctx) sctx = new Ctor();
      if (sctx.state === 'suspended') sctx.resume();
      var t = sctx.currentTime + 0.01;
      var o = sctx.createOscillator(), g = sctx.createGain();
      o.type = 'square';
      o.frequency.setValueAtTime(880, t);
      o.frequency.exponentialRampToValueAtTime(590, t + 0.055);
      g.gain.setValueAtTime(0.09, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      o.connect(g); g.connect(sctx.destination);
      o.start(t); o.stop(t + 0.09);
      var o2 = sctx.createOscillator(), g2 = sctx.createGain();
      o2.type = 'triangle';
      o2.frequency.setValueAtTime(300, t);
      o2.frequency.exponentialRampToValueAtTime(170, t + 0.07);
      g2.gain.setValueAtTime(0.07, t);
      g2.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
      o2.connect(g2); g2.connect(sctx.destination);
      o2.start(t); o2.stop(t + 0.1);
    } catch (e) {}
  }
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('a,button') : null;
    if (!el || el.disabled) return;
    if (el.hasAttribute('data-sfx') || el.closest('.gal-item')) return; // tiene sonido propio
    playSfx('click');
  });
  document.addEventListener('click', function (e) {
    var d = e.target.closest ? e.target.closest('[data-sfx="dl"]') : null;
    if (d) playSfx('levelup'); // empieza una descarga
  });

  /* ---------------- BOTONES MAGNÉTICOS (sutil) ---------------- */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    $all('.hero-cta .btn').forEach(function (b) {
      b.classList.add('magnetic');
      b.addEventListener('mousemove', function (e) {
        var r = b.getBoundingClientRect();
        var dx = (e.clientX - r.left - r.width / 2) * 0.1;
        var dy = (e.clientY - r.top - r.height / 2) * 0.16;
        b.style.transform = 'translate(' + dx.toFixed(1) + 'px,' + dy.toFixed(1) + 'px)';
      });
      b.addEventListener('mouseleave', function () { b.style.transform = ''; });
    });
  }

  /* ---------------- PANTALLA DE CARGA ---------------- */
  var loader = $('#loader'), loaderFill = $('#loaderFill'),
      loaderStage = $('#loaderStage'), loaderTip = $('#loaderTip');
  var loadP = 0, loadDone = false, stageI = 0;
  if (loaderTip) {
    var tipArr = (I18N[lang] && I18N[lang].tips) || [];
    loaderTip.textContent = tipArr[Math.floor(Math.random() * tipArr.length)] || '';
  }
  var stageIv = setInterval(function () {
    if (loadDone || !loaderStage) { clearInterval(stageIv); return; }
    var arr = (I18N[lang] && I18N[lang].stages) || [];
    loaderStage.textContent = arr[stageI % arr.length] || '';
    stageI++;
  }, 650);
  var loadIv = setInterval(function () {
    loadP = Math.min(90, loadP + Math.random() * 14 + 4);
    if (loaderFill) loaderFill.style.width = loadP + '%';
  }, 180);
  function finishLoad() {
    if (loadDone) return;
    loadDone = true;
    clearInterval(loadIv); clearInterval(stageIv);
    if (loaderFill) loaderFill.style.width = '100%';
    setTimeout(function () {
      document.body.classList.add('loaded');
      if (loader) {
        loader.classList.add('done');
        loader.setAttribute('aria-hidden', 'true');
        setTimeout(function () { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 600);
      }
      startAutoMusic();
    }, 350);
  }
  // la carga NO depende de recursos lentos: tiempo fijo tras DOM listo
  setTimeout(finishLoad, 1900);
  window.addEventListener('load', function () { setTimeout(finishLoad, 600); });
  setTimeout(finishLoad, 6000); // seguridad

  /* ---------------- SFX: SONIDOS REALES SI EXISTEN ----------------
     Coloca tus .mp3/.ogg en assets/audio/sfx/ (ver LEEME.txt).
     Si falta alguno, usa el "tock" sintetizado. */
  var SFX_FILES = {
    click: ['click.mp3', 'click.ogg'],
    chest: ['chest.mp3', 'chest.ogg'],
    pop: ['pop.mp3', 'pop.ogg'],
    enderman: ['enderman.mp3', 'enderman.ogg'],
    portal: ['portal.mp3', 'portal.ogg'],
    levelup: ['levelup.mp3', 'levelup.ogg'],
    dragon: ['dragon.mp3', 'dragon.ogg']
  };
  var SFX_VOL = { click: 0.35, chest: 0.5, pop: 0.4, enderman: 0.45, portal: 0.4, levelup: 0.5, dragon: 0.6 };
  var sfxCache = {};
  function probeSfx(name, i) {
    var list = SFX_FILES[name];
    if (i >= list.length) { sfxCache[name] = null; return; }
    var a = new Audio(), done = false;
    a.addEventListener('canplaythrough', function () {
      if (done) return; done = true;
      sfxCache[name] = './assets/audio/sfx/' + list[i];
    });
    a.addEventListener('error', function () { if (!done) { done = true; probeSfx(name, i + 1); } });
    try { a.src = './assets/audio/sfx/' + list[i]; a.load(); }
    catch (e) { done = true; probeSfx(name, i + 1); return; }
    setTimeout(function () { if (!done) { done = true; probeSfx(name, i + 1); } }, 2500);
  }
  function preloadSfx() { Object.keys(SFX_FILES).forEach(function (n) { probeSfx(n, 0); }); }
  function playSfx(name) {
    var url = sfxCache[name];
    if (url) {
      try {
        var a = new Audio(url);
        a.volume = SFX_VOL[name] || 0.4;
        var pr = a.play();
        if (pr && pr.catch) pr.catch(function () {});
      } catch (e) {}
      return;
    }
    mcClick(); // respaldo sintetizado
  }
  // elementos con sonido propio (no usan el clic global)
  ['themeBtn', 'toTop', 'musicBtn'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.setAttribute('data-sfx', '1');
  });
  $all('.lang-btn').forEach(function (b) { b.setAttribute('data-sfx', '1'); });
  var subBtn = $('#notifyForm button[type="submit"]');
  if (subBtn) subBtn.setAttribute('data-sfx', '1');
  if (document.readyState === 'complete') preloadSfx();
  else window.addEventListener('load', preloadSfx);

  /* easter egg: 3 clics rápidos al lobo = rugido del dragón */
  var logoClicks = [];
  $all('.brand').forEach(function (b) {
    b.addEventListener('click', function () {
      var now = Date.now();
      logoClicks = logoClicks.filter(function (x) { return now - x < 1200; });
      logoClicks.push(now);
      if (logoClicks.length >= 3) {
        logoClicks = [];
        playSfx('dragon');
        var img = $('img', b);
        if (img) { img.classList.remove('wiggle'); void img.offsetWidth; img.classList.add('wiggle'); }
      }
    });
  });

  /* ---------------- TÍTULO HERO LETRA POR LETRA ---------------- */
  function splitHero() {
    if (reduceMotion) return;
    var h = $('.hero-title');
    if (!h || h.dataset.split) return;
    h.dataset.split = '1';
    var idx = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split('').forEach(function (ch) {
            if (ch === ' ') frag.appendChild(document.createTextNode(' '));
            else {
              var s = document.createElement('span');
              s.className = 'ch'; s.textContent = ch;
              s.style.animationDelay = (0.35 + idx * 0.032).toFixed(2) + 's';
              frag.appendChild(s); idx++;
            }
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) walk(n);
      });
    })(h);
  }
  splitHero();

  /* ---------------- RIPPLE EN BOTONES ---------------- */
  document.addEventListener('click', function (e) {
    if (reduceMotion) return;
    var b = e.target.closest ? e.target.closest('.btn') : null;
    if (!b) return;
    var r = b.getBoundingClientRect(), m = Math.max(r.width, r.height);
    var s = document.createElement('span');
    s.className = 'ripple';
    s.style.width = s.style.height = m + 'px';
    s.style.left = (e.clientX - r.left - m / 2) + 'px';
    s.style.top = (e.clientY - r.top - m / 2) + 'px';
    b.appendChild(s);
    setTimeout(function () { s.remove(); }, 650);
  });

  /* ---------------- MARQUEE ---------------- */
  function buildMarquee() {
    var tr = $('#marqueeTrack');
    if (!tr) return;
    var s = t('marquee');
    tr.innerHTML = '<span>' + s + '</span><span>' + s + '</span>';
  }
  buildMarquee();
  $all('.lang-btn').forEach(function (b) { b.addEventListener('click', buildMarquee); });

  /* ---------------- PARTÍCULAS PIXEL EN EL HERO ---------------- */
  function initParticles() {
    var cv = $('#heroParticles');
    if (!cv || reduceMotion) return;
    var ctx = cv.getContext('2d'), W = 0, H = 0, ps = [];
    function size() {
      var r = cv.parentNode.getBoundingClientRect();
      W = cv.width = Math.max(1, r.width);
      H = cv.height = Math.max(1, r.height);
    }
    size();
    window.addEventListener('resize', size);
    var cols = ['0,230,122', '255,255,255', '255,200,120'];
    for (var i = 0; i < 45; i++) ps.push({
      x: Math.random(), y: Math.random(),
      s: Math.random() * 3 + 1, v: Math.random() * 0.0006 + 0.0002,
      o: Math.random() * 0.5 + 0.2, ph: Math.random() * 6.28, c: i % 3
    });
    (function tick() {
      requestAnimationFrame(tick);
      if (document.hidden) return;
      ctx.clearRect(0, 0, W, H);
      var tm = Date.now() / 1000;
      for (var j = 0; j < ps.length; j++) {
        var p = ps[j];
        p.y -= p.v;
        if (p.y < -0.02) { p.y = 1.02; p.x = Math.random(); }
        var x = (p.x + Math.sin(tm * 0.7 + p.ph) * 0.008) * W, y = p.y * H;
        ctx.fillStyle = 'rgba(' + cols[p.c] + ',' + (p.o * (0.7 + 0.3 * Math.sin(tm * 2 + p.ph))).toFixed(3) + ')';
        ctx.fillRect(x, y, p.s, p.s);
      }
    })();
  }
  initParticles();

  /* ---------------- PANEL NOPING ---------------- */
  var nopingTab = $('#nopingTab'), nopingPanel = $('#nopingPanel'),
      nopingBackdrop = $('#nopingBackdrop'), nopingClose = $('#nopingClose');
  function openNoping() {
    if (!nopingPanel) return;
    nopingPanel.classList.add('open');
    nopingPanel.setAttribute('aria-hidden', 'false');
    if (nopingBackdrop) nopingBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    playSfx('pop');
    if (nopingClose) nopingClose.focus();
  }
  function closeNoping() {
    if (!nopingPanel) return;
    nopingPanel.classList.remove('open');
    nopingPanel.setAttribute('aria-hidden', 'true');
    if (nopingBackdrop) nopingBackdrop.hidden = true;
    document.body.style.overflow = '';
  }
  if (nopingTab) {
    nopingTab.setAttribute('data-sfx', '1');
    nopingTab.addEventListener('click', openNoping);
  }
  if (nopingClose) nopingClose.addEventListener('click', function () { closeNoping(); playSfx('click'); });
  if (nopingBackdrop) nopingBackdrop.addEventListener('click', closeNoping);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nopingPanel && nopingPanel.classList.contains('open')) closeNoping();
  });

  /* año dinámico */
  var year = $('#year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
