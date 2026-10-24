const fs = require('fs');
const path = require('path');

// 1. SwipeNavigation.astro Komponente erstellen
const swipeComponentPath = path.join('src', 'components', 'SwipeNavigation.astro');
const swipeCode = `---
<div class="swipe-guard"></div>
---
<script is:inline>
  const routes = ['/', '/blog', '/about'];

  function getNormalizedPath() {
    let p = window.location.pathname;
    if (p.length > 1 && p.endsWith('/')) return p.slice(0, -1);
    return p;
  }

  function initSwipe() {
    const currentPath = getNormalizedPath();
    const currentIndex = routes.indexOf(currentPath);
    
    if (currentIndex === -1) return;

    const minSwipeDistance = 60;

    window.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    window.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;

      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;

      if (Math.abs(deltaX) > Math.abs(deltaY) * 1.5 && Math.abs(deltaX) > minSwipeDistance) {
        const nextIndex = deltaX < 0 ? (currentIndex + 1) % routes.length : (currentIndex - 1 + routes.length) % routes.length;
        window.location.href = routes[nextIndex];
      }

      touchStartX = touchEndX;
      touchStartY = touchEndY;
    }, { passive: true });
  }

  initSwipe();
</script>
`;

fs.writeFileSync(swipeComponentPath, swipeCode, 'utf8');
console.log('✓ SwipeNavigation.astro erstellt');

// 2. In src/pages/index.astro einbinden
const indexPath = path.join('src', 'pages', 'index.astro');
let indexContent = fs.readFileSync(indexPath, 'utf8');

if (!indexContent.includes('SwipeNavigation')) {
  indexContent = indexContent.replace(
  indexContent.replace('import Header from', 'import SwipeNavigation \nfrom' + "import Header from")
  );
  indexContent = indexContent.replace(
    /<\/main>/,
    '\n      <SwipeNavigation />\n    </main>'
  );
  fs.writeFileSync(indexPath, indexContent, 'utf8');
  console.log('✓ SwipeNavigation in index.astro eingebunden');
}

console.log('[SWIPE_NAV_IMPLEMENTED]');
