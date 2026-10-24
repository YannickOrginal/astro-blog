function initSwipeNavigation() {
  const routes = ["/", "/blog", "/about"];
  let currentPath = window.location.pathname.replace(//+$/, "") || "/";
  const currentIndex = routes.indexOf(currentPath);
  if (currentIndex === -1) return;
  let startX = 0;
  let startY = 0;
  window.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });
  window.addEventListener("touchend", (e) => {
    const diffX = e.changedTouches[0].clientX - startX;
    const diffY = e.changedTouches[0].clientY - startY;
    if (Math.abs(diffX) > Math.abs(diffY) * 1.5 && Math.abs(diffX) > 60) {
      if (diffX < 0) {
        window.location.href = routes[(currentIndex + 1) % routes.length];
      } else {
        window.location.href = routes[(currentIndex - 1 + routes.length) % routes.length];
      }
    }
  }, { passive: true });
}
initSwipeNavigation();
document.addEventListener("astro:page-load", initSwipeNavigation);
