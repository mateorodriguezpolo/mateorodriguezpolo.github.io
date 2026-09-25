// Navigation is fully functional without JavaScript. Highlight the section in view.
const navigationLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = [...document.querySelectorAll('main section[id]')];

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    const visibleSection = entries.find((entry) => entry.isIntersecting);
    if (!visibleSection) return;

    for (const link of navigationLinks) {
      if (link.hash === `#${visibleSection.target.id}`) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}
