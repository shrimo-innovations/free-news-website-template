
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

document.querySelectorAll('[data-save-article]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const title = btn.getAttribute('data-title') || 'Article';
    const saved = JSON.parse(localStorage.getItem('savedArticles') || '[]');
    if (!saved.includes(title)) saved.push(title);
    localStorage.setItem('savedArticles', JSON.stringify(saved));
    btn.textContent = 'Saved';
  });
});

const newsletter = document.querySelector('[data-newsletter-form]');
if (newsletter) {
  newsletter.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = newsletter.querySelector('[data-form-message]');
    if (msg) msg.textContent = 'Thanks! You are subscribed to the daily news digest.';
    newsletter.reset();
  });
}

const contact = document.querySelector('[data-contact-form]');
if (contact) {
  contact.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = contact.querySelector('[data-form-message]');
    if (msg) msg.textContent = 'Your message has been recorded in this demo template.';
    contact.reset();
  });
}
