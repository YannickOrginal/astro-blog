const fs = require('fs');

// 1. SwipeNavigation erstellen
const heroPath = 'src/components/SwipeNavigation.astro';
const heroContent = `---
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
</script>`;

fs.writeFileSync('E:/Projekte/astro-blog/src/components/SwipeNavigation.astro', heroContent, 'utf8');
console.log('✓ SwipeNavigation.astro created');

// 2. index.astro aktualisieren - stringbasierte Operationen ohne Regex
const indexPath = 'src/pages/index.astro';
let content = fs.readFileSync(indexPath, 'utf8');

if (!content.includes('SwipeNavigation')) {
  const marker1 = "import Header from '../components/Header.astro';";
  const insertAfter = marker1 + '\n';
  
  if (content.indexOf(marker1) !== -1) {
    content = content.replace(marker1, marker1 + "\nimport SwipeNavigation from '../components/SwipeNavigation.astro';");
    console.log('✓ Import added after Header');
  } else {
    console.log('// Marker not found');
  }
  
  const mainEnd = '</main>';
  if (content.indexOf(mainEnd) !== -1) {
    content = content.replace(mainEnd, '\n      <SwipeNavigation />\n    </main>');
    fs.writeFileSync(indexPath, content);
    console.log('✓ component embedded before </main>');
  }
} else {
  console.log('// SwipeNavigation already present');
}

console.log('[SWIPE_FEATURE_IMPLEMENTED]');
