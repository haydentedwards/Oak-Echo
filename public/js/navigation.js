/* navigation.js — Scroll-state navbar, mobile drawer, accordion, parallax, active nav indicator */

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function initNavigation() {
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Active nav indicator based on pathname
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll("[data-nav-link]").forEach((el) => {
    const href = el.getAttribute("href");
    if (!href) return;
    const match = href === "/" ? path === "/" : path === href || path.startsWith(href + "/");
    if (match) el.setAttribute("data-active", "true");
  });

  const toggle = document.querySelector("[data-nav-toggle]");
  const drawer = document.querySelector("[data-nav-drawer]");
  if (toggle && drawer) {
    const closeDrawer = () => {
      drawer.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    toggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.classList.toggle("is-open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    const closeButton = drawer.querySelector("[data-nav-drawer-close]");
    if (closeButton) {
      closeButton.addEventListener("click", closeDrawer);
    }
    drawer.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", closeDrawer)
    );
  }

  // Accordions
  document.querySelectorAll("[data-accordion-item]").forEach((item) => {
    const trigger = item.querySelector("[data-accordion-trigger]");
    const panel = item.querySelector("[data-accordion-panel]");
    if (!trigger || !panel) return;
    trigger.addEventListener("click", () => {
      const open = item.getAttribute("aria-expanded") === "true";
      item.setAttribute("aria-expanded", String(!open));
      panel.style.maxHeight = open ? "0px" : panel.scrollHeight + "px";
    });
  });

  // Parallax — subtle vertical drift on [data-parallax] with data-speed
  const parallaxEls = document.querySelectorAll("[data-parallax]");
  if (parallaxEls.length && !prefersReducedMotion) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.speed || "0.2");
        // progress: -1 (below viewport) → 1 (above)
        const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        const py = -progress * speed * 100;
        el.style.setProperty("--py", py.toFixed(2) + "px");
      });
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
  }

  // Stagger index on reveal--lines children
  document.querySelectorAll(".reveal--lines").forEach((el) => {
    Array.from(el.children).forEach((child, i) => {
      child.style.setProperty("--i", String(i));
    });
  });

  // Hero video: pause when offscreen, fallback if unavailable
  const heroVideo = document.querySelector("[data-hero-video]");
  if (heroVideo) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) heroVideo.play().catch(() => {});
          else heroVideo.pause();
        });
      },
      { threshold: 0.1 }
    );
    io.observe(heroVideo);
    heroVideo.addEventListener("error", () => {
      heroVideo.style.display = "none";
    });
  }
}
