import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";

const NAV_LEFT = [
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
            <a key={l.href} href={l.href} className="nav__link" data-nav-link>{l.label}</a>
          ))}
        </nav>
        <a href="/" className="nav__logo" aria-label="Oak &amp; Echo — home">
          <span className="nav__logo-mark">Oak &amp; Echo</span>
        </a>
        <nav className="nav__group nav__group--right" aria-label="Secondary">
          {NAV_RIGHT.map((l) => (
            <a key={l.href} href={l.href} className="nav__link" data-nav-link>{l.label}</a>
          ))}
        </nav>
        <button
          className="nav__toggle"
          data-nav-toggle
          aria-expanded="false"
          aria-controls="nav-drawer"
          aria-label="Open menu"
        >
          <span></span><span></span>
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
          <a key={l.href} href={l.href} className="nav__drawer-link">{l.label}</a>
        ))}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer--editorial" aria-labelledby="footer-statement">
      <div className="container">
        <p className="chapter__eyebrow" style={{ marginBottom: "var(--space-4)" }}>Oak &amp; Echo</p>
        <p id="footer-statement" className="footer__statement">
          Let's make sure every word <em>is heard.</em>
        </p>

        <div className="footer__grid">
          <div className="footer__column">
            <p className="footer__wordmark">Oak &amp; Echo</p>
            <p style={{ maxWidth: "30ch" }}>
              Ceremony audio specialists. We arrive early, prepare thoroughly, and disappear
              into the moment.
            </p>
          </div>
          <div className="footer__column">
            <h4>Studio</h4>
            <p>Youngstown, Ohio</p>
            <p>Weddings across the Midwest &amp; beyond</p>
            <p style={{ marginTop: "var(--space-2)" }}>
              <a href="mailto:hello@oakandechoaudio.com">hello@oakandechoaudio.com</a>
            </p>
          </div>
          <div className="footer__column">
            <h4>Elsewhere</h4>
            <a href="/portfolio">Portfolio</a>
            <a href="/journal">Journal</a>
            <a href="/faq">FAQ</a>
            <a href="https://instagram.com" rel="noreferrer">Instagram</a>
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
  
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <SiteNav />
      <main id="main" className={!isHome ? "main--offset" : ""}>{children}</main>
      <SiteFooter />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  italic,
  lede,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  lede?: string;
}) {
  return (
    <section className="page-hero" aria-label={eyebrow}>
      <div className="container container--content page-hero__inner">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="page-hero__title display--xl reveal reveal--delay-1 text-balance">
          {title}
          {italic ? (<>{" "}<em className="display--italic">{italic}</em></>) : null}
        </h1>
        {lede ? <p className="page-hero__lede lede reveal reveal--delay-2">{lede}</p> : null}
      </div>
    </section>
  );
}

export const pageScripts = [{ src: "/js/app.js", type: "module", defer: true }];