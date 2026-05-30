/**
 * Scroll-reveal utility.
 * Any element with `data-reveal` becomes visible when entering the viewport.
 * Optional `data-reveal-delay="200"` (ms) for stagger.
 *
 * Re-runs on Astro page navigations (View Transitions).
 */
function init() {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        const delay = Number(target.dataset.revealDelay ?? 0);
        if (delay) {
          target.style.transitionDelay = `${delay}ms`;
        }
        target.classList.add("is-revealed");
        io.unobserve(target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  els.forEach((el) => io.observe(el));
}

document.addEventListener("astro:page-load", init);
init();
