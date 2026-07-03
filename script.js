const CONFIG = {
  discordInvite: 'https://discord.gg/4djd8aVTCr',
  instagram: 'https://www.instagram.com/badxass_crew?igsh=dHUxNDdqbnhrd3Fq',
  youtube: 'https://youtube.com/@bdss343?si=A-qacQGp3ldYTy_J',
  discordWebhookUrl: '' // niemals einen geheimen Discord-Webhook direkt im Frontend speichern
};

const I18N = {
  de: {
    introText:'Badass Crew wird geladen', navHome:'Home', navAlliance:'Allianz', navDashboard:'Dashboard', navMembers:'Mitglieder', navNews:'News', navGallery:'Galerie', navCalendar:'Kalender', navApply:'Bewerben',
    heroLead:'Aktive Allianz, klare Kommunikation und starker Zusammenhalt. Wachse mit uns, kämpfe mit uns und dominiere Events gemeinsam mit der Crew.', applyNow:'Jetzt bewerben',
    value1Title:'Aktive Allianz', value1Text:'Gemeinsam stark, gemeinsam siegreich.', value2Title:'Teamplay', value2Text:'Zusammenhalt und Unterstützung stehen bei uns vorne.', value3Title:'Events', value3Text:'Regelmäßige Aktionen und Belohnungen.', value4Title:'Wachstum', value4Text:'Wir wachsen weiter und erreichen gemeinsame Ziele.', value5Title:'Real Life geht vor', value5Text:'Spaß am Spiel, aber Respekt vor deinem Alltag.',
    aboutEyebrow:'Über uns', aboutTitle:'Eine Crew. Ein Ziel.', aboutText:'BDss ist für Spieler, die aktiv sind, mitdenken und nicht nur nebenbei in einer Allianz sitzen wollen. Wir setzen auf Respekt, Unterstützung, klare Ansagen und gemeinsame Entwicklung.', expectTitle:'Was dich erwartet', expect1:'Aktive Allianz-Events', expect2:'Discord-Community', expect3:'Hilfe beim Wachstum', expect4:'Faire und verständliche Regeln', dashTitle:'Allianz-Dashboard', membersActive:'Aktive Spieler', nextEvent:'Nächstes Event', membersEyebrow:'Crew-Struktur', membersTitle:'Führung & Rollen', newsTitle:'Aktuelle Meldungen', galleryEyebrow:'Galerie', galleryTitle:'BDss Grafiken', galleryText:'Neue Bilder kannst du später im Ordner assets ergänzen und in script.js in die Galerie-Liste eintragen.', videoTitle:'BDss Video Hub', openYoutube:'YouTube öffnen', discordTitle:'Werde Teil der Crew', discordText:'Live-Status ist vorbereitet. Sobald euer Discord-Server-Widget aktiviert ist, kann hier ein echtes Widget eingebunden werden.', joinNow:'Beitreten →', calendarEyebrow:'Event-Kalender', calendarTitle:'Nächste Termine', applyEyebrow:'Bewerbung', applyTitle:'Bewirb dich bei BDss', applyText:'Das Formular erstellt eine fertige Bewerbung. Ohne sicheren Discord-Backend-Endpunkt wird der Text kopiert, damit du ihn direkt im Discord senden kannst.', formName:'Spielername', formPower:'Power / Stärke', formDiscord:'Discord-Name', formLanguage:'Sprache', formMessage:'Warum BDss?', formSend:'Bewerbung vorbereiten', formNote:'Tipp: Danach direkt im Discord melden.'
  },
  en: {
    introText:'Badass Crew loading', navHome:'Home', navAlliance:'Alliance', navDashboard:'Dashboard', navMembers:'Members', navNews:'News', navGallery:'Gallery', navCalendar:'Calendar', navApply:'Apply',
    heroLead:'Active alliance, clear communication and strong teamwork. Grow with us, fight with us and dominate events together with the crew.', applyNow:'Apply now',
    value1Title:'Active alliance', value1Text:'Strong together, victorious together.', value2Title:'Teamplay', value2Text:'Support and unity come first.', value3Title:'Events', value3Text:'Regular action and rewards.', value4Title:'Growth', value4Text:'We keep growing and reach our goals together.', value5Title:'Real life first', value5Text:'Enjoy the game, respect your daily life.',
    aboutEyebrow:'About us', aboutTitle:'One crew. One goal.', aboutText:'BDss is for active players who communicate, support each other and want more than just a place in an alliance.', expectTitle:'What you get', expect1:'Active alliance events', expect2:'Discord community', expect3:'Growth support', expect4:'Fair and clear rules', dashTitle:'Alliance dashboard', membersActive:'Active players', nextEvent:'Next event', membersEyebrow:'Crew structure', membersTitle:'Leadership & roles', newsTitle:'Latest updates', galleryEyebrow:'Gallery', galleryTitle:'BDss graphics', galleryText:'Add new images to the assets folder and list them in script.js later.', videoTitle:'BDss video hub', openYoutube:'Open YouTube', discordTitle:'Join the crew', discordText:'Live status is prepared. Once the Discord server widget is enabled, a real widget can be embedded here.', joinNow:'Join →', calendarEyebrow:'Event calendar', calendarTitle:'Upcoming dates', applyEyebrow:'Application', applyTitle:'Apply to BDss', applyText:'The form prepares your application. Without a secure Discord backend endpoint, the text is copied so you can post it in Discord.', formName:'Player name', formPower:'Power', formDiscord:'Discord name', formLanguage:'Language', formMessage:'Why BDss?', formSend:'Prepare application', formNote:'Tip: Contact us on Discord afterwards.'
  }
};

const intro = document.getElementById('intro');
window.addEventListener('load', () => setTimeout(() => intro.classList.add('hide'), 1700));

const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('show'); }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const backTop = document.getElementById('backTop');
addEventListener('scroll', () => backTop.classList.toggle('show', scrollY > 520));
backTop.addEventListener('click', () => scrollTo({top:0,behavior:'smooth'}));

const galleryImages = [
  {src:'recruiting.png', alt:'BDss Recruiting'},
  {src:'banner.jpg', alt:'BDss Banner'},
  {src:'recruiting.png', alt:'BDss Allianz Grafik'},
  {src:'banner.jpg', alt:'BDss Fantasy Banner'},
  {src:'recruiting.png', alt:'BDss Call of Dragons'}
];
const galleryGrid = document.getElementById('galleryGrid');
galleryImages.forEach(img => {
  const btn = document.createElement('button'); btn.className = 'gallery-item'; btn.dataset.img = img.src;
  btn.innerHTML = `<img src="${img.src}" alt="${img.alt}">`; galleryGrid.appendChild(btn);
});
const lightbox = document.getElementById('lightbox'), lightboxImg = lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(btn => btn.addEventListener('click', () => { lightboxImg.src = btn.dataset.img; lightbox.classList.add('open'); lightbox.setAttribute('aria-hidden','false'); }));
function closeLightbox(){ lightbox.classList.remove('open'); lightbox.setAttribute('aria-hidden','true'); }
lightbox.querySelector('button').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });

const events = [
  {date:'Täglich', title:'Aktivität & Hilfe', text:'Spenden, Hilfe und Wachstum.'},
  {date:'Wöchentlich', title:'Allianz-Events', text:'Gemeinsame Teilnahme und Belohnungen.'},
  {date:'Nach Ansage', title:'Kämpfe & Ziele', text:'Koordination über Discord.'}
];
document.getElementById('eventList').innerHTML = events.map(e => `<article class="event"><b>${e.date}</b><h3>${e.title}</h3><p>${e.text}</p></article>`).join('');

const members = [
  {name:'Leader', role:'R5 / Leitung', icon:'👑'},
  {name:'Officer Team', role:'R4 / Organisation', icon:'🛡'},
  {name:'Event Leads', role:'Planung & Kampf', icon:'⚔'},
  {name:'BDss Crew', role:'Aktive Mitglieder', icon:'🔥'}
];
document.getElementById('memberGrid').innerHTML = members.map(m => `<article class="member-card"><div class="avatar">${m.icon}</div><h3>${m.name}</h3><p class="role">${m.role}</p><p>Platzhalter – Namen und Avatare können später ergänzt werden.</p></article>`).join('');

const news = [
  {date:'Heute', title:'Website 3.0 online', text:'Neues Design mit Dashboard, News, Galerie, Formular und Sprachumschalter.'},
  {date:'Server 343', title:'Wir wachsen weiter', text:'Aktive Spieler sind willkommen. Discord beitreten und bewerben.'},
  {date:'Community', title:'Events & Teamplay', text:'Unsere Ziele werden über Discord koordiniert und gemeinsam umgesetzt.'}
];
document.getElementById('newsGrid').innerHTML = news.map(n => `<article class="news-card"><time>${n.date}</time><h3>${n.title}</h3><p>${n.text}</p></article>`).join('');

function updateCountdown(){
  const now = new Date();
  const next = new Date(now); next.setHours(20,0,0,0); if(next < now) next.setDate(next.getDate()+1);
  const diff = next - now;
  const h = String(Math.floor(diff/36e5)).padStart(2,'0');
  const m = String(Math.floor(diff%36e5/6e4)).padStart(2,'0');
  const s = String(Math.floor(diff%6e4/1000)).padStart(2,'0');
  document.getElementById('countdown').textContent = `${h}:${m}:${s}`;
}
updateCountdown(); setInterval(updateCountdown,1000);

const form = document.getElementById('applyForm');
const note = document.getElementById('formNote');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const d = new FormData(form);
  const message = `**Neue BDss Bewerbung**\nSpielername: ${d.get('name')}\nPower/Stärke: ${d.get('power')}\nDiscord: ${d.get('discord')}\nSprache: ${d.get('language')}\nNachricht: ${d.get('message')}`;
  try { await navigator.clipboard.writeText(message); note.textContent = 'Bewerbung wurde kopiert. Füge sie jetzt im Discord ein.'; } catch { note.textContent = 'Bewerbung vorbereitet. Bitte kopieren und im Discord senden.'; }
  if(CONFIG.discordWebhookUrl){
    try{ await fetch(CONFIG.discordWebhookUrl,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:message})}); note.textContent='Bewerbung wurde gesendet.'; form.reset(); return; }catch(err){ note.textContent='Senden nicht möglich. Text wurde kopiert.'; }
  }
  setTimeout(() => window.open(CONFIG.discordInvite, '_blank'), 350);
});

const langToggle = document.getElementById('langToggle');
let lang = localStorage.getItem('bdss-lang') || 'de';
function setLang(next){
  lang = next; localStorage.setItem('bdss-lang', lang); document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if(I18N[lang][key]) el.childNodes[0].nodeValue = I18N[lang][key]; });
  langToggle.textContent = lang === 'de' ? 'EN' : 'DE';
}
langToggle.addEventListener('click', () => setLang(lang === 'de' ? 'en' : 'de'));
setLang(lang);

const canvas = document.getElementById('stars'), ctx = canvas.getContext('2d');
let stars = [], mouse = {x:0,y:0};
function resize(){ canvas.width = innerWidth; canvas.height = innerHeight; stars = Array.from({length:Math.min(180,Math.floor(innerWidth/8))},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,z:Math.random()*1.8+.2,r:Math.random()*2+.4,a:Math.random()*.7+.2,c:Math.random()>.5?'#8737ff':'#8cff2a'})); }
addEventListener('mousemove', e => { mouse.x = (e.clientX - innerWidth/2) * .01; mouse.y = (e.clientY - innerHeight/2) * .01; document.querySelectorAll('[data-depth]').forEach(el => { const d = Number(el.dataset.depth); el.style.transform = `translate3d(${mouse.x*d*18}px,${mouse.y*d*18}px,0)`; }); });
function draw(){ ctx.clearRect(0,0,canvas.width,canvas.height); for(const s of stars){ s.y -= .25*s.z; s.x += Math.sin(s.y*.01)*.25; if(s.y < -10){s.y=canvas.height+10;s.x=Math.random()*canvas.width} ctx.beginPath(); ctx.fillStyle=s.c.replace(')',`,${s.a})`).replace('#8737ff',`rgba(135,55,255,${s.a})`).replace('#8cff2a',`rgba(140,255,42,${s.a})`); ctx.shadowColor=s.c; ctx.shadowBlur=18; ctx.arc(s.x+mouse.x*s.z,s.y+mouse.y*s.z,s.r*s.z,0,Math.PI*2); ctx.fill(); } requestAnimationFrame(draw); }
resize(); draw(); addEventListener('resize', resize);

document.querySelectorAll('.tilt').forEach(card => card.addEventListener('mousemove', e => { const r=card.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5; card.style.transform=`rotateY(${x*8}deg) rotateX(${-y*8}deg)`; }));
document.querySelectorAll('.tilt').forEach(card => card.addEventListener('mouseleave', () => card.style.transform=''));
