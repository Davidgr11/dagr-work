let lang = 'es';
let dark = true;
let content = {};

async function loadContent() {
  const res = await fetch('data/content.json');
  const json = await res.json();
  content = json;
  renderAll();
}

const langToggle = document.getElementById('lang-toggle');
const themeToggle = document.getElementById('theme-toggle');

langToggle.addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  langToggle.textContent = lang === 'es' ? 'ES' : 'EN';
  renderAll();
});

themeToggle.addEventListener('click', () => {
  dark = !dark;
  document.body.classList.toggle('light', !dark);
  themeToggle.textContent = dark ? '🌙' : '☀️';
});

function renderAll() {
  const t = content[lang];
  // Header
  document.querySelector('.hero__role').textContent = t.header.role;
  document.querySelector('.hero__desc').textContent = t.header.desc;
  const links = document.querySelectorAll('.hero__btn');
  t.header.links.forEach((l, i) => {
    links[i].textContent = l.label;
    links[i].href = l.url;
    if (l.download) links[i].setAttribute('download', '');
    else links[i].removeAttribute('download');
  });
  // About
  document.querySelector('.about__title').textContent = t.about.title;
  document.querySelector('.about__desc').textContent = t.about.desc;
  document.querySelector('.about__img img').src = t.about.photo;
  const edu = document.querySelector('.about__education');
  edu.innerHTML = '';
  t.about.education.forEach(e => {
    const li = document.createElement('li');
    li.textContent = e;
    edu.appendChild(li);
  });
  // Experience
  document.querySelector('.experience__title').textContent = t.experience.title;
  const timeline = document.querySelector('.experience__timeline');
  timeline.innerHTML = '';
  t.experience.items.forEach(item => {
    const el = document.createElement('div');
    el.className = 'timeline__item';
    el.innerHTML = `<div class="timeline__dot"></div>
      <div class="timeline__date">${item.date}</div>
      <div class="timeline__content">
        <h3 class="timeline__role">${item.role}</h3>
        <p>${item.desc}</p>
      </div>`;
    timeline.appendChild(el);
  });
  // Technologies
  document.querySelector('.technologies__title').textContent = t.technologies.title;
  const techList = document.querySelector('.technologies__list');
  techList.innerHTML = '';
  t.technologies.items.forEach(tech => {
    const item = document.createElement('div');
    item.className = 'technologies__item';
    item.innerHTML = `<img src="${tech.icon}" alt="${tech.name}"><span>${tech.name}</span>`;
    techList.appendChild(item);
  });
  // Projects
  document.querySelector('.projects__title').textContent = t.projects.title;
  renderProjects();
  // Certifications
  document.querySelector('.certifications__title').textContent = t.certifications.title;
  renderCerts();
  // Achievements
  document.querySelector('.achievements__title').textContent = t.achievements.title;
  const achList = document.querySelector('.achievements__list');
  achList.innerHTML = '';
  t.achievements.items.forEach(a => {
    const li = document.createElement('li');
    li.textContent = a;
    achList.appendChild(li);
  });
  // Contact
  document.querySelector('.contact__title').textContent = t.contact.title;
  document.querySelector('.contact__input[name="name"]').placeholder = t.contact.name;
  document.querySelector('.contact__input[name="email"]').placeholder = t.contact.email;
  document.querySelector('.contact__textarea').placeholder = t.contact.message;
  document.querySelector('.contact__btn').textContent = t.contact.send;
}

// Projects paginación
let showAllProjects = false;
function renderProjects() {
  const t = content[lang];
  const list = document.getElementById('projects-list');
  list.innerHTML = '';
  let toShow = showAllProjects ? 10 : 3;
  t.projects.items.slice(0, toShow).forEach(p => {
    const card = document.createElement('div');
    card.className = 'projects__card';
    card.innerHTML = `
      <img class="projects__card-img" src="${p.img}" alt="${p.title}">
      <div class="projects__card-title">${p.title}</div>
      <div class="projects__card-desc">${p.desc}</div>
      <div class="projects__card-links">
        <a href="${p.demo}" target="_blank">DEMO</a>
        <a href="${p.repo}" target="_blank">REPO</a>
      </div>`;
    list.appendChild(card);
  });
  const btn = document.getElementById('more-projects');
  btn.textContent = showAllProjects ? t.projects.less : t.projects.more;
}
document.getElementById('more-projects').addEventListener('click', () => {
  showAllProjects = !showAllProjects;
  renderProjects();
});

// Certificaciones paginación
let showAllCerts = false;
function renderCerts() {
  const t = content[lang];
  const list = document.getElementById('certifications-list');
  list.innerHTML = '';
  let toShow = showAllCerts ? 14 : 3;
  t.certifications.items.slice(0, toShow).forEach(c => {
    const card = document.createElement('div');
    card.className = 'certifications__card';
    card.innerHTML = `
      <div class="certifications__card-title">${c.title}</div>
      <div class="certifications__card-org">${c.org}</div>
      <a class="certifications__card-link" href="${c.link}" target="_blank">${t.certifications.viewCert}</a>
    `;
    list.appendChild(card);
  });
  let btn = document.getElementById('more-certs');
  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'more-certs';
    btn.className = 'btn certifications__btn';
    document.querySelector('.certifications').appendChild(btn);
    btn.addEventListener('click', () => {
      showAllCerts = !showAllCerts;
      renderCerts();
    });
  }
  btn.textContent = showAllCerts ? t.certifications.less : t.certifications.more;
}

// Animación de partículas flotantes
document.addEventListener('DOMContentLoaded', () => {
  loadContent();
  if (window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: { value: 60, density: { enable: true, value_area: 900 } },
        color: { value: ['#1e90ff', '#00ffe7', '#2ecc40'] },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true },
        size: { value: 4, random: true },
        line_linked: { enable: true, distance: 150, color: '#1e90ff', opacity: 0.2, width: 1 },
        move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          repulse: { distance: 100, duration: 0.4 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }
}); 