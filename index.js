document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Scroll reveal animation
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(r => observer.observe(r));

  // Parallax effect for hero image
  const heroImg = document.querySelector(".hero-img");
  let moveX = 0, moveY = 0;

  if (heroImg) {
    window.addEventListener("mousemove", e => {
      const x = (window.innerWidth / 2 - e.clientX) / 40;
      const y = (window.innerHeight / 2 - e.clientY) / 40;
      moveX = x;
      moveY = y;
      heroImg.style.transform = translate3d(${moveX}px, ${moveY}px, 0);
    });

    window.addEventListener("mouseleave", () => {
      heroImg.style.transform = translate3d(0, 0, 0);
    });
  }

  // Fade-in on load
  document.body.classList.add("loaded");
});
