// Intelligente, zyklische Swipe-Navigation
(function() {
  const mainRoutes = ['/', '/blog', '/about'];

  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  const minSwipeDistance = 60;
  const maxSwipeTime = 600;

  window.addEventListener('touchstart', function(e) {
    if (e.touches.length !== 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartTime = Date.now();
  }, { passive: true });

  window.addEventListener('touchend', async function(e) {
    if (e.changedTouches.length !== 1) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const elapsedTime = Date.now() - touchStartTime;

    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (elapsedTime > maxSwipeTime) return;

    // Nur überwiegend horizontale Wischgesten werten
    if (Math.abs(diffX) >= minSwipeDistance && Math.abs(diffX) > Math.abs(diffY) * 1.5) {
      const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
      const isArticle = currentPath.startsWith('/blog/') && currentPath !== '/blog';

      if (isArticle) {
        // --- 1. Navigation innerhalb von Blog-Artikeln ---
        try {
          // Holt die Artikelliste aus der Blog-Übersicht
          let articleLinks = JSON.parse(sessionStorage.getItem('yd_blog_articles') || '[]');

          if (!articleLinks.length) {
            const res = await fetch('/blog');
            const html = await res.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const links = Array.from(doc.querySelectorAll('a[href^="/blog/"]'))
              .map(a => a.getAttribute('href').replace(/\/$/, ''))
              .filter((v, i, a) => a.indexOf(v) === i && v !== '/blog');

            if (links.length) {
              articleLinks = links;
              sessionStorage.setItem('yd_blog_articles', JSON.stringify(links));
            }
          }

          if (articleLinks.length > 1) {
            const curIdx = articleLinks.indexOf(currentPath);
            if (curIdx !== -1) {
              let nextIdx = curIdx;
              if (diffX < 0) {
                // Nach links gewischt -> nächster (älterer) Artikel
                nextIdx = (curIdx + 1) % articleLinks.length;
              } else {
                // Nach rechts gewischt -> vorheriger (neuerer) Artikel
                nextIdx = (curIdx - 1 + articleLinks.length) % articleLinks.length;
              }

              if (nextIdx !== curIdx) {
                window.location.href = articleLinks[nextIdx];
              }
            }
          }
        } catch (err) {
          console.error('Fehler bei der Artikel-Navigation:', err);
        }
      } else {
        // --- 2. Navigation zwischen den Hauptseiten ---
        const idx = mainRoutes.indexOf(currentPath);
        const currentIdx = idx !== -1 ? idx : 0;
        let nextIdx = currentIdx;

        if (diffX < 0) {
          // Nach links gewischt -> Vorwärts
          nextIdx = (currentIdx + 1) % mainRoutes.length;
        } else {
          // Nach rechts gewischt -> Rückwärts
          nextIdx = (currentIdx - 1 + mainRoutes.length) % mainRoutes.length;
        }

        if (nextIdx !== currentIdx) {
          window.location.href = mainRoutes[nextIdx];
        }
      }
    }
  }, { passive: true });
})();