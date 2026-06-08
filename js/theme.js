/* ================================================
   theme.js — Dark / Light Theme Toggle
   ================================================ */

(function () {
  // Apply saved theme immediately to avoid flash
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();

function initTheme() {
  const saved = localStorage.getItem('portfolio-theme') || 'dark';
  setTheme(saved, false);
}

function setTheme(theme, animate) {
  if (animate === undefined) animate = true;

  if (animate) {
    document.body.classList.add('translating');
    setTimeout(() => document.body.classList.remove('translating'), 400);
  }

  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }

  localStorage.setItem('portfolio-theme', theme);
  updateThemeToggleUI(theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  setTheme(current === 'light' ? 'dark' : 'light');
}

function updateThemeToggleUI(theme) {
  // Tooltip update
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    const label = theme === 'light' ? 'Mode sombre' : 'Mode clair';
    btn.setAttribute('title', label);
    btn.setAttribute('aria-label', label);
  });
}

window.initTheme  = initTheme;
window.toggleTheme = toggleTheme;
