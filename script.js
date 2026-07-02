// MANTRA 2026 | LifeCare Health — JavaScript

/* ── Email De-obfuscation (keeps addresses out of static HTML/scrapers) ── */
document.querySelectorAll('.e-mail').forEach(el => {
  const user   = el.getAttribute('data-u');
  const domain = el.getAttribute('data-d');
  if (user && domain) {
    el.setAttribute('href', `mailto:${user}@${domain}`);
  }
});

/* ── Mobile Menu ── */
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
}

/* ── Appointment Form Validation ── */
const apptForm = document.getElementById('appointmentForm');
if (apptForm) {
  apptForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name       = document.getElementById('apptName').value.trim();
    const email      = document.getElementById('apptEmail').value.trim();
    const phone      = document.getElementById('apptPhone').value.trim();
    const dept       = document.getElementById('apptDept').value;
    const date       = document.getElementById('apptDate').value;
    const msgEl      = document.getElementById('apptMessage');

    const showErr = (msg) => {
      msgEl.className = 'result error';
      msgEl.textContent = msg;
    };

    if (!name || !email || !phone || !dept || !date) return showErr('Please fill in all required fields.');
    if (!email.includes('@') || !email.includes('.'))   return showErr('Please enter a valid email address.');
    if (phone.length !== 10 || isNaN(phone))            return showErr('Please enter a valid 10-digit mobile number.');

    const today = new Date(); today.setHours(0,0,0,0);
    if (new Date(date) < today) return showErr('Please select a future date.');

    msgEl.className = 'result success';
    msgEl.textContent = `✓ Appointment request received! We will confirm your slot within 24 hours, ${name}.`;
    apptForm.reset();
  });
}

/* ── Gallery Filter ── */
function filterGallery(category, btn) {
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.display = (category === 'all' || item.classList.contains(category)) ? '' : 'none';
  });
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

/* ── Health Tips FAQ Toggle ── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', function () {
    const answer  = this.nextElementSibling;
    const isOpen  = answer.style.maxHeight;
    // close all
    document.querySelectorAll('.faq-answer').forEach(a => { a.style.maxHeight = ''; });
    document.querySelectorAll('.faq-question').forEach(b => b.classList.remove('open'));
    if (!isOpen) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
      this.classList.add('open');
    }
  });
});

/* ── Counter Animation (home stats) ── */
function animateCounters() {
  document.querySelectorAll('.count-up').forEach(el => {
    const target = +el.dataset.target;
    const step   = Math.ceil(target / 60);
    let current  = 0;
    const timer  = setInterval(() => {
      current += step;
      if (current >= target) { el.textContent = target.toLocaleString(); clearInterval(timer); }
      else el.textContent = current.toLocaleString();
    }, 25);
  });
}
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) { animateCounters(); observer.disconnect(); }
  }, { threshold: 0.5 });
  observer.observe(heroStats);
}
