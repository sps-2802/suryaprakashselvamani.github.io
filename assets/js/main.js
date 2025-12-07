// ========== AOS INIT ==========
AOS.init({
  duration: 700,
  easing: "ease-out",
  once: true,
  offset: 80
});

// ========== TYPED.JS ==========
document.addEventListener("DOMContentLoaded", function () {
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    const items = typedElement.getAttribute("data-typed-items");
    if (items) {
      new Typed(".typed", {
        strings: items.split(","),
        typeSpeed: 70,
        backSpeed: 35,
        backDelay: 1500,
        loop: true
      });
    }
  }
});

// ========== BACK TO TOP ==========
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// ========== SMOOTH SCROLL FOR NAV LINKS ==========
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId && targetId.length > 1) {
      e.preventDefault();
      const el = document.querySelector(targetId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  });
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    const href = link.getAttribute("href");
    if (href && href.includes(`#${current}`)) {
      link.classList.add("active-link");
    }
  });
});

// ========== SKILL BARS ANIMATION ==========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const value = bar.getAttribute("data-skill") || "0";
      bar.style.transformOrigin = "left";
      bar.style.transform = "scaleX(" + value / 100 + ")";
      bar.classList.add("visible");
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".skill-bar-inner").forEach(bar => observer.observe(bar));
