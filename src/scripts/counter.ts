/**
 * Animated counter for elements with `data-counter`.
 * Supports a numeric value with a suffix (e.g. "1000+", "7+").
 */
function parseTarget(raw: string) {
  const match = raw.match(/(\d+)(.*)/);
  if (!match) return null;
  return { value: Number(match[1]), suffix: match[2] };
}

function animate(el: HTMLElement, value: number, suffix: string, duration = 1400) {
  const start = performance.now();
  const ease = (t: number) => 1 - Math.pow(1 - t, 3);

  function tick(now: number) {
    const t = Math.min((now - start) / duration, 1);
    const current = Math.round(value * ease(t));
    el.textContent = current + suffix;
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function init() {
  const els = document.querySelectorAll<HTMLElement>("[data-counter]:not(.is-counted)");
  if (!els.length) return;

  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-counted"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = entry.target as HTMLElement;
        const raw = target.dataset.counter ?? target.textContent ?? "";
        const parsed = parseTarget(raw);
        if (!parsed) return;
        target.classList.add("is-counted");
        animate(target, parsed.value, parsed.suffix);
        io.unobserve(target);
      });
    },
    { threshold: 0.4 }
  );

  els.forEach((el) => io.observe(el));
}

document.addEventListener("astro:page-load", init);
init();
