// utils/reveal.js
export function initReveal() {
  const revealElements = document.querySelectorAll("[data-reveal]");

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target); // reveal once
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  revealElements.forEach(el => revealObserver.observe(el));
}
