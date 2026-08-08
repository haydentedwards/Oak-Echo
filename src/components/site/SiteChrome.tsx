import type { ReactNode } from "react";
import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

// Module-scoped (not component state) so it survives across every
// client-side route change for the lifetime of the page, and only resets
// on a genuine full reload — used to skip the redundant re-init below on
// the very first page mount, since app.js's own DOMContentLoaded listener
// already handles that one.
let hasInitializedOnce = false;

const NAV_LEFT = [
  { href: "/packages", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/experience", label: "Experience" },
];

const NAV_RIGHT = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/journal", label: "Journal" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`nav ${!isHome ? "nav--dark" : ""}`} data-nav>
      <div className="nav__inner">
        <nav className="nav__group nav__group--left" aria-label="Primary">
          {NAV_LEFT.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" data-nav-link>
              {l.label}
            </a>
          ))}
        </nav>
        <a href="/" className="nav__logo" aria-label="Oak &amp; Echo — home">
          <span className="nav__logo-mark">Oak &amp; Echo</span>
        </a>
        <nav className="nav__group nav__group--right" aria-label="Secondary">
          {NAV_RIGHT.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" data-nav-link>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="nav__toggle"
          data-nav-toggle
          aria-expanded="false"
          aria-controls="nav-drawer"
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="nav__drawer" id="nav-drawer" data-nav-drawer>
        <button
          className="nav__drawer-close"
          data-nav-drawer-close
          aria-label="Close menu"
        >
          ✕
        </button>
        {[...NAV_LEFT, ...NAV_RIGHT].map((l) => (
          <a key={l.href} href={l.href} className="nav__drawer-link">
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer--editorial" aria-labelledby="footer-statement">
      <div className="container">
        <p
          className="chapter__eyebrow"
          style={{ marginBottom: "var(--space-4)" }}
        >
          Oak &amp; Echo
        </p>
        <p id="footer-statement" className="footer__statement">
          Let's make sure every word <em>is heard.</em>
        </p>

        <div className="footer__grid">
          <div className="footer__column">
            <p className="footer__wordmark">Oak &amp; Echo</p>
            <p style={{ maxWidth: "30ch" }}>
              Ceremony audio specialists. We arrive early, prepare thoroughly,
              and disappear into the moment.
            </p>
          </div>
          <div className="footer__column">
            <h4>Studio</h4>
            <p>Youngstown, Ohio</p>
            <p>Weddings across the Midwest &amp; beyond</p>
            <p style={{ marginTop: "var(--space-2)" }}>
              <a href="mailto:hello@oakandechoaudio.com">
                hello@oakandechoaudio.com
              </a>
            </p>
          </div>
          <div className="footer__column">
            <h4>Elsewhere</h4>
            <a href="/portfolio">Portfolio</a>
            <a href="/journal">Journal</a>
            <a href="/faq">FAQ</a>
            <a href="https://instagram.com" rel="noreferrer">
              Instagram
            </a>
            <a href="/contact">Begin the conversation</a>
          </div>
        </div>

        <div className="footer__legal">
          <span>© {new Date().getFullYear()} Oak &amp; Echo</span>
          <span>Every word matters.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    // On the very first page mount, app.js's own DOMContentLoaded listener
    // already runs init() — running it again here would double-attach
    // click listeners (nav toggle, accordion, etc.), causing them to
    // cancel each other out. Only re-run on subsequent client-side
    // route changes, which never fire a fresh DOMContentLoaded.
    if (!hasInitializedOnce) {
      hasInitializedOnce = true;
      return;
    }
    const raf = requestAnimationFrame(() => {
      (window as unknown as { __oakEchoInit?: () => void }).__oakEchoInit?.();
    });
    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <SiteNav />
      <main id="main" className={!isHome ? "main--offset" : ""}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  lede,
  notice,
  cta,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lede?: string;
  notice?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="page-hero" aria-label={eyebrow}>
      <div className="container container--content page-hero__inner">
        {notice ? (
          <p className="notice-bar reveal" role="status">
            {notice}
          </p>
        ) : null}
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="page-hero__title display--xl reveal reveal--delay-1 text-balance">
          {title}
          {italic ? (
            <>
              {" "}
              <em className="display--italic">{italic}</em>
            </>
          ) : null}
        </h1>
        {lede ? (
          <p className="page-hero__lede lede reveal reveal--delay-2">{lede}</p>
        ) : null}
        {cta ? (
          <p className="page-hero__cta reveal reveal--delay-3">
            <a href={cta.href} className="link link--gold">
              {cta.label}
              <span aria-hidden="true"> →</span>
            </a>
          </p>
        ) : null}
      </div>
    </section>
  );
}

export const pageScripts = [{ src: "/js/app.js", type: "module", defer: true }];
