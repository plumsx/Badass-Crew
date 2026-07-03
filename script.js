const CONFIG = {
  website: 'https://badass-crew.netlify.app/',
  discordInvite: 'https://discord.gg/4djd8aVTCr',
  instagram: 'https://www.instagram.com/badxass_crew/',
  youtube: 'https://www.youtube.com/@BDss343',
  discordWebhookUrl: ''
};

const I18N = {
  de: {
    introText: 'Badass Crew wird geladen',
    navHome: 'Start',
    navAlliance: 'Allianz',
    navDashboard: 'Dashboard',
    navMembers: 'Team',
    navNews: 'News',
    navGallery: 'Galerie',
    navVideos: 'Videos',
    navCalendar: 'Kalender',
    navShop: 'Shop',
    navDonations: 'Donations',
    navApply: 'Bewerben',
    applyNow: 'Jetzt bewerben',
    openYoutube: 'YouTube öffnen',
    joinNow: 'Beitreten →',
    membersActive: 'Aktive Spieler',
    nextEvent: 'Nächstes Event'
  },
  en: {
    introText: 'Badass Crew loading',
    navHome: 'Home',
    navAlliance: 'Alliance',
    navDashboard: 'Dashboard',
    navMembers: 'Team',
    navNews: 'News',
    navGallery: 'Gallery',
    navVideos: 'Videos',
    navCalendar: 'Calendar',
    navShop: 'Shop',
    navDonations: 'Donations',
    navApply: 'Apply',
    applyNow: 'Apply now',
    openYoutube: 'Open YouTube',
    joinNow: 'Join →',
    membersActive: 'Active players',
    nextEvent: 'Next event'
  }
};

const galleryImages = [
  {src: 'recruiting.png', alt: 'BDss Recruiting'},
  {src: 'banner.jpg', alt: 'BDss Banner'},
  {src: 'recruiting.png', alt: 'BDss Allianz Grafik'},
  {src: 'banner.jpg', alt: 'BDss Fantasy Banner'},
  {src: 'recruiting.png', alt: 'BDss Call of Dragons'}
];

const events = [
  {date: 'Täglich', title: 'Aktivität & Hilfe', text: 'Spenden, Hilfe und Wachstum.'},
  {date: 'Wöchentlich', title: 'Allianz-Events', text: 'Gemeinsame Teilnahme und Belohnungen.'},
  {date: 'Nach Ansage', title: 'Kämpfe & Ziele', text: 'Koordination über Discord.'}
];

const members = [
  {name: 'R5 Ebene', role: '3 Leader', icon: '👑', text: 'Direkt zum Teambereich mit der R5-Führung springen.', target: 'r5-team', action: 'R5 Leader anzeigen'},
  {name: 'Officer Team', role: 'R4 / Organisation', icon: '🛡', text: 'Organisation, Ansagen und Unterstützung für die Crew.'},
  {name: 'Event Leads', role: 'Planung & Kampf', icon: '⚔', text: 'Koordination für Events, Ziele und gemeinsame Kämpfe.'},
  {name: 'BDss Crew', role: 'Aktive Mitglieder', icon: '🔥', text: 'Aktive Spieler, Wachstum, Hilfe und Teamplay.'}
];

const r5Leaders = [
  {
    name: 'ᴷⁱⁿᵍ乂Plums乂ᴮᴰˢˢ',
    title: 'Erster Leader · Serverleitung · Großkönig',
    power: 'ca. 90 Mio Power',
    media: 'assets/plums-profile.mp4',
    mediaType: 'video',
    text: 'R5-Leitung von BDss auf Server 343. Fokus auf klare Ansagen, starke Präsenz und eine Crew, die geschlossen wächst.'
  },
  {
    name: 'PW Nospang',
    title: 'Zweiter Leader · PWB-Gründer · Stamm-Legende',
    power: 'ca. 60 Mio Power',
    media: 'assets/nospang-profile.png',
    mediaType: 'image',
    text: 'Unsere gute Seele und derjenige, der die Waage hält. Ruhiger Pol, Stamm-Legende und verlässliche R5-Stimme für BDss.'
  },
  {
    name: 'ʊKillerTwixʊᴿᴴ',
    title: 'Dritter Leader · Kriegs-Titan · Angriffs-Stratege',
    power: 'ca. 186 Mio Power',
    media: 'assets/killertwix-profile.png',
    mediaType: 'image',
    text: 'Das Schwert der Allianz. Angriffsstark, fokussiert und die R5-Stimme, wenn BDss in den Kampf zieht.'
  }
];

const news = [
  {date: 'Heute', title: 'Website wird übersichtlicher', text: 'Alle Bereiche sind jetzt als eigene Seiten geplant, damit Besucher schneller finden, was sie suchen.'},
  {date: 'Server 343', title: 'Wir wachsen weiter', text: 'Aktive Spieler sind willkommen. Discord beitreten und bewerben.'},
  {date: 'Community', title: 'Events & Teamplay', text: 'Unsere Ziele werden über Discord koordiniert und gemeinsam umgesetzt.'}
];

const shopItems = [
  {title: 'BDss Merch', text: 'Platz für spätere Crew-Shirts, Banner, Avatare oder digitale Goodies.', state: 'In Vorbereitung'},
  {title: 'Community Pakete', text: 'Bereich für optionale Pakete, Giveaways oder Aktionen rund um die Crew.', state: 'Coming soon'},
  {title: 'Design Assets', text: 'Später können hier Profilrahmen, Wallpaper und Social-Media-Grafiken landen.', state: 'Geplant'}
];

const donationItems = [
  {title: 'Server & Tools', text: 'Unterstützung für Website, Bots, Organisation und Community-Tools.'},
  {title: 'Events & Preise', text: 'Spenden können später für interne Aktionen, Giveaways oder Eventpreise genutzt werden.'},
  {title: 'Crew Support', text: 'Transparente Unterstützung für Dinge, die der Allianz wirklich helfen.'}
];

function setSocialLinks() {
  document.querySelectorAll('[data-social]').forEach(link => {
    const target = CONFIG[link.dataset.social];
    if (target) link.href = target;
  });
}

function setActiveNav() {
  const file = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav a[href]').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', href === file || (file === '' && href === 'index.html'));
  });
}

function initIntro() {
  const intro = document.getElementById('intro');
  if (!intro) return;
  window.addEventListener('load', () => setTimeout(() => intro.classList.add('hide'), 1000));
}

function initMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav');
  if (!menuBtn || !nav) return;
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

function initReveal() {
  const revealItems = document.querySelectorAll('.reveal');
  if (!revealItems.length) return;
  const observer = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  }), {threshold: .12});
  revealItems.forEach(el => observer.observe(el));
}

function initBackTop() {
  const backTop = document.getElementById('backTop');
  if (!backTop) return;
  addEventListener('scroll', () => backTop.classList.toggle('show', scrollY > 520));
  backTop.addEventListener('click', () => scrollTo({top: 0, behavior: 'smooth'}));
}

function renderGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  if (!galleryGrid) return;
  galleryGrid.innerHTML = galleryImages.map(img => (
    `<button class="gallery-item" type="button" data-img="${img.src}"><img src="${img.src}" alt="${img.alt}"></button>`
  )).join('');
}

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  const lightboxImg = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('button');
  document.querySelectorAll('.gallery-item').forEach(btn => btn.addEventListener('click', () => {
    lightboxImg.src = btn.dataset.img;
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }));
  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }
  if (closeButton) closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) closeLightbox();
  });
}

function renderEvents() {
  const eventList = document.getElementById('eventList');
  if (!eventList) return;
  eventList.innerHTML = events.map(e => (
    `<article class="event"><b>${e.date}</b><h3>${e.title}</h3><p>${e.text}</p></article>`
  )).join('');
}

function renderMembers() {
  const memberGrid = document.getElementById('memberGrid');
  if (!memberGrid) return;
  memberGrid.innerHTML = members.map(m => {
    const content = `<div class="avatar">${m.icon}</div><h3>${m.name}</h3><p class="role">${m.role}</p><p>${m.text}</p>${m.action ? `<span class="member-action">${m.action}</span>` : ''}`;
    return m.target ? `<button class="member-card member-link" type="button" data-target="${m.target}">${content}</button>` : `<article class="member-card">${content}</article>`;
  }).join('');
  document.querySelectorAll('[data-target]').forEach(button => {
    button.addEventListener('click', () => {
      const target = document.getElementById(button.dataset.target);
      if (!target) return;
      const top = target.getBoundingClientRect().top + window.scrollY - 104;
      window.history.replaceState(null, '', `#${target.id}`);
      window.scrollTo({top, behavior: 'smooth'});
    });
  });
}

function renderR5Team() {
  const r5Team = document.getElementById('r5-team');
  if (!r5Team) return;
  r5Team.innerHTML = `
    <div class="r5-head">
      <p class="eyebrow">R5 Ebene</p>
      <h3>Die 3 Leader</h3>
    </div>
    <div class="r5-grid">
      ${r5Leaders.map((leader, index) => `
        <article class="r5-card ${index === 0 ? 'r5-card-featured' : ''}">
          <div class="profile-media-wrap profile-round">
            ${leader.mediaType === 'image'
              ? `<img class="profile-media profile-image" src="${leader.media}" alt="Profilbild und Rahmen von ${leader.name}">`
              : `<video class="profile-media profile-video" src="${leader.media}" autoplay muted loop playsinline preload="metadata" aria-label="Animiertes Profilbild von ${leader.name}"></video>`}
          </div>
          <div class="r5-copy">
            <span class="r5-rank">${leader.title}</span>
            <h4>${leader.name}</h4>
            <strong>${leader.power}</strong>
            <p>${leader.text}</p>
          </div>
        </article>
      `).join('')}
    </div>`;
  document.querySelectorAll('.profile-video').forEach(video => {
    video.muted = true;
    const playProfile = () => video.play().catch(() => {});
    if (video.readyState >= 2) playProfile();
    else video.addEventListener('loadeddata', playProfile, {once: true});
  });
}

function renderNews() {
  const newsGrid = document.getElementById('newsGrid');
  if (!newsGrid) return;
  newsGrid.innerHTML = news.map(n => (
    `<article class="news-card"><time>${n.date}</time><h3>${n.title}</h3><p>${n.text}</p></article>`
  )).join('');
}

function renderShop() {
  const shopGrid = document.getElementById('shopGrid');
  if (!shopGrid) return;
  shopGrid.innerHTML = shopItems.map(item => (
    `<article class="page-card"><span>${item.state}</span><h3>${item.title}</h3><p>${item.text}</p></article>`
  )).join('');
}

function renderDonations() {
  const donationGrid = document.getElementById('donationGrid');
  if (!donationGrid) return;
  donationGrid.innerHTML = donationItems.map(item => (
    `<article class="page-card"><h3>${item.title}</h3><p>${item.text}</p></article>`
  )).join('');
}

function initCountdown() {
  const countdown = document.getElementById('countdown');
  if (!countdown) return;
  function updateCountdown() {
    const now = new Date();
    const next = new Date(now);
    next.setHours(20, 0, 0, 0);
    if (next < now) next.setDate(next.getDate() + 1);
    const diff = next - now;
    const h = String(Math.floor(diff / 36e5)).padStart(2, '0');
    const m = String(Math.floor(diff % 36e5 / 6e4)).padStart(2, '0');
    const s = String(Math.floor(diff % 6e4 / 1000)).padStart(2, '0');
    countdown.textContent = `${h}:${m}:${s}`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function initApplicationForm() {
  const form = document.getElementById('applyForm');
  const note = document.getElementById('formNote');
  if (!form || !note) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const d = new FormData(form);
    const message = `**Neue BDss Bewerbung**\nSpielername: ${d.get('name')}\nPower/Stärke: ${d.get('power')}\nDiscord: ${d.get('discord')}\nSprache: ${d.get('language')}\nNachricht: ${d.get('message')}`;
    try {
      await navigator.clipboard.writeText(message);
      note.textContent = 'Bewerbung wurde kopiert. Füge sie jetzt im Discord ein.';
    } catch {
      note.textContent = 'Bewerbung vorbereitet. Bitte kopieren und im Discord senden.';
    }
    if (CONFIG.discordWebhookUrl) {
      try {
        await fetch(CONFIG.discordWebhookUrl, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({content: message})});
        note.textContent = 'Bewerbung wurde gesendet.';
        form.reset();
        return;
      } catch {
        note.textContent = 'Senden nicht möglich. Text wurde kopiert.';
      }
    }
    setTimeout(() => window.open(CONFIG.discordInvite, '_blank'), 350);
  });
}

function initLanguage() {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;
  let lang = localStorage.getItem('bdss-lang') || 'de';
  function setLang(next) {
    lang = next;
    localStorage.setItem('bdss-lang', lang);
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (I18N[lang][key]) el.childNodes[0].nodeValue = I18N[lang][key];
    });
    langToggle.textContent = lang === 'de' ? 'EN' : 'DE';
  }
  langToggle.addEventListener('click', () => setLang(lang === 'de' ? 'en' : 'de'));
  setLang(lang);
}

function initStars() {
  const canvas = document.getElementById('stars');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars = [];
  const mouse = {x: 0, y: 0};
  function resize() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    stars = Array.from({length: Math.min(180, Math.floor(innerWidth / 8))}, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1.8 + .2,
      r: Math.random() * 2 + .4,
      a: Math.random() * .7 + .2,
      c: Math.random() > .5 ? '#8737ff' : '#8cff2a'
    }));
  }
  addEventListener('mousemove', e => {
    mouse.x = (e.clientX - innerWidth / 2) * .01;
    mouse.y = (e.clientY - innerHeight / 2) * .01;
    document.querySelectorAll('[data-depth]').forEach(el => {
      const d = Number(el.dataset.depth);
      el.style.transform = `translate3d(${mouse.x * d * 18}px,${mouse.y * d * 18}px,0)`;
    });
  });
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      s.y -= .25 * s.z;
      s.x += Math.sin(s.y * .01) * .25;
      if (s.y < -10) {
        s.y = canvas.height + 10;
        s.x = Math.random() * canvas.width;
      }
      ctx.beginPath();
      ctx.fillStyle = s.c.replace('#8737ff', `rgba(135,55,255,${s.a})`).replace('#8cff2a', `rgba(140,255,42,${s.a})`);
      ctx.shadowColor = s.c;
      ctx.shadowBlur = 18;
      ctx.arc(s.x + mouse.x * s.z, s.y + mouse.y * s.z, s.r * s.z, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  resize();
  draw();
  addEventListener('resize', resize);
}

function initTilt() {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - .5;
      const y = (e.clientY - r.top) / r.height - .5;
      card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
    });
    card.addEventListener('mouseleave', () => card.style.transform = '');
  });
}

setSocialLinks();
setActiveNav();
initIntro();
initMenu();
initReveal();
initBackTop();
renderGallery();
initLightbox();
renderEvents();
renderMembers();
renderR5Team();
renderNews();
renderShop();
renderDonations();
initCountdown();
initApplicationForm();
initLanguage();
initStars();
initTilt();
