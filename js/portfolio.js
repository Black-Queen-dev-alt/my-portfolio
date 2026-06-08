/* ================================================
   portfolio.js — Project Filters
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initFilters();
});

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card[data-category]');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach((card, i) => {
        const category = card.getAttribute('data-category');
        const matches  = filter === 'all' || category === filter;

        card.style.transition = `opacity 0.4s ease ${i * 0.05}s, transform 0.4s ease ${i * 0.05}s`;

        if (matches) {
          card.style.opacity = '1';
          card.style.transform = 'scale(1) translateY(0)';
          card.style.display = 'flex';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.92) translateY(20px)';
          setTimeout(() => {
            if (card.getAttribute('data-category') !== filter && filter !== 'all') {
              card.style.display = 'none';
            }
          }, 400 + i * 50);
        }
      });
    });
  });
}
