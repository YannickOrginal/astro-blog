(function () {
  const routes = ['/', '/blog', '/about'];
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const currentIndex = routes.indexOf(currentPath);

  if (currentIndex === -1) return;

  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;

  const minSwipeDistance = 60;
  const maxPerpendicularDistance = 80;

  window.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) return;
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    if (e.changedTouches.length === 0) return;
    touchEndX = e.changedTouches[0].clientX;
    touchEndY = e.changedTouches[0].clientY;

    const deltaX = touchEndX - touchStartX;
    const deltaY = touchEndY - touchStartY;

    if (Math.abs(deltaY) > maxPerpendicularDistance) return;

    if (deltaX < -minSwipeDistance && currentIndex < routes.length - 1) {
      window.location.href = routes[currentIndex + 1];
    } else if (deltaX > minSwipeDistance && currentIndex > 0) {
      window.location.href = routes[currentIndex - 1];
    }
  }, { passive: true });
})();