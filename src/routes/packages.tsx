import { createFileRoute } from "@tanstack/react-router";
import {
  SiteChrome,
  PageHero,
  pageScripts,
} from "@/components/site/SiteChrome";

type ComparePlan = "essential" | "classic" | "signature";

const PACKAGES: Array<{
  key: ComparePlan;
  badge?: string;
  name: string;
  tagline: string;
  price: string;
  includesLabel: string;
  bullets: string[];
  cta: string;
  featured?: boolean;
}> = [
  {
    key: "essential",
    name: "Essential Ceremony",
    tagline: "Perfect for intimate weddings and smaller guest counts.",
    price: "$495",
    includesLabel: "Includes",
    bullets: [
      "Professional ceremony sound system",
      "Wireless officiant microphone",
      "Wireless groom microphone",
      "Music playback",
      "Audio engineer throughout ceremony",
      "Early arrival and testing",
      "Coordination with officiant and planner",
    ],
    cta: "Book Essential",
  },
  {
    key: "classic",
    badge: "Most Popular",
    name: "Classic Ceremony",
    tagline: "Our most-booked package, built for a full ceremony program.",
    price: "$695",
    includesLabel: "Everything in Essential, plus",
    bullets: [
      "Second speaker for wider coverage",
      "Additional wireless microphone",
      "Prelude music",
      "Processional",
      "Ceremony",
      "Recessional",
      "Post ceremony music",
      "Coordination with photographer and videographer",
    ],
    cta: "Book Classic",
    featured: true,
  },
  {
    key: "signature",
    badge: "Premium",
    name: "Signature Ceremony",
    tagline: "For larger venues and ceremonies with extra moving parts.",
    price: "$895",
    includesLabel: "Everything in Classic, plus",
    bullets: [
      "Larger venue audio coverage",
      "Additional microphones as needed",
      "Readings microphone",
      "Live musician support",
      "Custom audio planning consultation",
      "Backup equipment on-site",
      "Priority scheduling",
    ],
    cta: "Book Signature",
  },
];

const ADDONS = [
  { name: "Additional Speaker Coverage", price: "$100" },
  { name: "Cocktail Hour Audio", price: "$250" },
  { name: "Wireless Handheld Microphone", price: "$50" },
  { name: "Live Music Support", price: "$150" },
  { name: "Rehearsal Attendance", price: "$150" },
  { name: "Travel Outside Service Area", price: "Custom Quote" },
];

const COMPARE_ROWS: Array<{
  feature: string;
  essential: boolean;
  classic: boolean;
  signature: boolean;
}> = [
  {
    feature: "Professional Audio",
    essential: true,
    classic: true,
    signature: true,
  },
  {
    feature: "Wireless Officiant Mic",
    essential: true,
    classic: true,
    signature: true,
  },
  {
    feature: "Wireless Groom Mic",
    essential: true,
    classic: true,
    signature: true,
  },
  {
    feature: "Ceremony Music",
    essential: true,
    classic: true,
    signature: true,
  },
  {
    feature: "Second Speaker",
    essential: false,
    classic: true,
    signature: true,
  },
  {
    feature: "Additional Wireless Mic",
    essential: false,
    classic: true,
    signature: true,
  },
  {
    feature: "Live Music Support",
    essential: false,
    classic: false,
    signature: true,
  },
  {
    feature: "Backup Equipment",
    essential: false,
    classic: false,
    signature: true,
  },
  {
    feature: "Priority Scheduling",
    essential: false,
    classic: false,
    signature: true,
  },
];

const TRUST = [
  {
    n: "i.",
    t: "Crystal Clear Audio",
    d: "Every guest hears every vow, from the front row to the last.",
  },
  {
    n: "ii.",
    t: "Professional Appearance",
    d: "Discreet equipment that blends into your ceremony, not around it.",
  },
  {
    n: "iii.",
    t: "Reliable Equipment",
    d: "Professional-grade systems, paired with careful backup planning.",
  },
  {
    n: "iv.",
    t: "Dedicated Audio Engineer",
    d: "One person, focused entirely on your ceremony, start to finish.",
  },
];

const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We're based in Youngstown, Ohio and serve ceremonies throughout Northeast Ohio and Western Pennsylvania, with travel farther afield for the right date.",
  },
  {
    q: "Can you work with live musicians?",
    a: "Yes. We provide sensitive amplification for string quartets, guitarists, harpists, and vocalists, carefully balanced against the officiant channel so the music supports the moment rather than competing with it.",
  },
  {
    q: "How early do you arrive?",
    a: "Three to four hours before your ceremony begins, depending on the venue. Every cable is labeled and every microphone tested well before your first guest arrives.",
  },
  {
    q: "Do you have backup equipment?",
    a: "Redundancy is built into how we work at every level. Our Signature package adds a fully independent backup system on-site for larger or higher-stakes ceremonies.",
  },
  {
    q: "Can you accommodate outdoor weddings?",
    a: "Outdoor ceremonies are a large part of what we do. We plan for wind, weather, and open-air coverage as a matter of course, not an afterthought.",
  },
  {
    q: "Do you provide microphones for readings?",
    a: "Yes — a readings microphone is included on our Signature package, and can be added to Essential or Classic ceremonies as well.",
  },
  {
    q: "Can you play our custom music?",
    a: "Yes. Send us your prelude, processional, recessional, and any interlude songs ahead of time, and we'll cue them precisely to your timeline.",
  },
];

export const Route = createFileRoute("/packages")({
  component: PackagesPage,
  head: () => ({
    meta: [
      { title: "Wedding Ceremony Audio Packages | Oak & Echo" },
      {
        name: "description",
        content:
          "Explore professional wedding ceremony audio packages from Oak & Echo. Simple pricing, premium equipment, and crystal-clear sound for ceremonies throughout Northeast Ohio.",
      },
      { property: "og:title", content: "Packages — Oak & Echo" },
      {
        property: "og:description",
        content:
          "Simple pricing, premium equipment, and crystal-clear sound for ceremonies throughout Northeast Ohio and Western Pennsylvania.",
      },
      { property: "og:url", content: "/packages" },
      { property: "og:image", content: "/assets/images/services-speaker.jpg" },
      { name: "twitter:image", content: "/assets/images/services-speaker.jpg" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
    scripts: [
      ...pageScripts,
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "LocalBusiness",
              name: "Oak & Echo",
              areaServed: "United States",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Youngstown",
                addressRegion: "OH",
                addressCountry: "US",
              },
              url: "/packages",
            },
            {
              "@type": "Service",
              serviceType: "Wedding Ceremony Audio",
              provider: { "@type": "LocalBusiness", name: "Oak & Echo" },
              areaServed: "United States",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Ceremony Audio Packages",
                itemListElement: PACKAGES.map((p) => ({
                  "@type": "Offer",
                  name: p.name,
                  price: p.price.replace("$", ""),
                  priceCurrency: "USD",
                })),
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
});

function PackagesPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Packages"
        title="Packages designed"
        italic="around your ceremony."
        lede="Every ceremony is unique. Whether you're exchanging vows in a backyard, church, vineyard, or elegant ballroom, Oak & Echo ensures every word is heard clearly by every guest."
        cta={{ label: "Request Availability", href: "/contact" }}
      />

      {/* Intro — simple pricing statement */}
      <section className="section section--lg bg-white">
        <div className="container container--content text-center">
          <p className="eyebrow reveal" style={{ justifyContent: "center" }}>
            Simple, Transparent
          </p>
          <h2
            className="display--lg reveal reveal--delay-1 text-balance"
            style={{ maxWidth: "20ch", margin: "var(--space-2) auto 0" }}
          >
            Simple pricing.
            <br />
            <em className="display--italic">Professional results.</em>
          </h2>
          <p
            className="prose reveal reveal--delay-2"
            style={{ margin: "var(--space-4) auto 0", textAlign: "left" }}
          >
            We believe ceremony audio should be straightforward. Every package
            includes professional equipment, discreet setup, experienced
            operation, and careful attention to every detail — so you can stay
            focused on your moment instead of worrying about the sound.
          </p>
        </div>
      </section>

      {/* Package cards */}
      <section className="section section--lg bg-cream" aria-label="Packages">
        <div className="container">
          <div className="packages-grid">
            {PACKAGES.map((p) => (
              <article
                key={p.key}
                className={`package-card reveal${p.featured ? " package-card--featured" : ""}`}
              >
                {p.badge ? (
                  <span className="package-card__badge">{p.badge}</span>
                ) : null}
                <h3 className="package-card__name">{p.name}</h3>
                <p className="package-card__tagline">{p.tagline}</p>
                <p className="package-card__price">{p.price}</p>
                <p className="package-card__price-note">Per ceremony</p>
                <hr className="package-card__divider" />
                <p className="package-card__includes-label">
                  {p.includesLabel}
                </p>
                <ul className="package-card__list">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="btn btn--outline package-card__cta"
                >
                  {p.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section section--lg bg-white" aria-label="Add-ons">
        <div className="container container--content">
          <p className="eyebrow reveal">Add-Ons</p>
          <h2
            className="display--lg reveal reveal--delay-1 text-balance"
            style={{ maxWidth: "18ch", margin: "var(--space-2) 0 0" }}
          >
            Customize your experience.
          </h2>
          <div className="addon-grid">
            {ADDONS.map((a) => (
              <div key={a.name} className="addon-card reveal">
                <span className="addon-card__name">{a.name}</span>
                <span className="addon-card__price">{a.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section
        className="section section--lg bg-white"
        aria-label="Compare packages"
      >
        <div className="container container--content">
          <p className="eyebrow reveal">Compare</p>
          <h2
            className="display--lg reveal reveal--delay-1 text-balance"
            style={{ maxWidth: "18ch", margin: "var(--space-2) 0 0" }}
          >
            Side by side.
          </h2>

          <div className="compare-wrap reveal">
            <table className="compare">
              <caption className="sr-only">
                Feature comparison across Essential, Classic, and Signature
                packages
              </caption>
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Essential</th>
                  <th scope="col" className="compare__col--featured">
                    Classic
                  </th>
                  <th scope="col">Signature</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row">{row.feature}</th>
                    {(["essential", "classic", "signature"] as const).map(
                      (plan) => (
                        <td key={plan}>
                          {row[plan] ? (
                            <span
                              className="compare__dot"
                              role="img"
                              aria-label="Included"
                            />
                          ) : (
                            <span
                              className="compare__dash"
                              aria-label="Not included"
                            >
                              —
                            </span>
                          )}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Accordion fallback for narrower screens */}
          <div className="compare-mobile">
            <div className="accordion" role="list">
              {PACKAGES.map((p) => (
                <div
                  key={p.key}
                  className="accordion__item"
                  data-accordion-item
                  aria-expanded="false"
                  role="listitem"
                >
                  <button className="accordion__trigger" data-accordion-trigger>
                    <span>{p.name}</span>
                    <span className="accordion__icon" aria-hidden="true"></span>
                  </button>
                  <div className="accordion__panel" data-accordion-panel>
                    <div className="accordion__panel-inner">
                      <ul className="package-card__list">
                        {COMPARE_ROWS.filter((row) => row[p.key]).map((row) => (
                          <li key={row.feature}>{row.feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section
        className="section section--lg bg-cream"
        aria-label="Why couples choose Oak & Echo"
      >
        <div className="container">
          <header className="stack reveal" style={{ textAlign: "center" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>
              Why Couples Choose Us
            </p>
            <h2
              className="display--lg text-balance"
              style={{ maxWidth: "20ch", margin: "0 auto" }}
            >
              Why couples choose{" "}
              <em className="display--italic">Oak &amp; Echo.</em>
            </h2>
          </header>
          <div className="protect-grid protect-grid--4">
            {TRUST.map((c) => (
              <article key={c.n} className="protect-card reveal">
                <span className="protect-card__num">{c.n}</span>
                <h3 className="protect-card__title">{c.t}</h3>
                <p className="protect-card__text">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="section section--lg bg-white"
        aria-label="Package FAQ"
      >
        <div className="container container--content">
          <p className="eyebrow reveal">Questions</p>
          <h2
            className="display--lg reveal reveal--delay-1 text-balance"
            style={{
              maxWidth: "16ch",
              margin: "var(--space-2) 0 var(--space-5)",
            }}
          >
            A few things couples ask.
          </h2>
          <div className="accordion" role="list">
            {FAQS.map((f) => (
              <div
                key={f.q}
                className="accordion__item"
                data-accordion-item
                aria-expanded="false"
                role="listitem"
              >
                <button className="accordion__trigger" data-accordion-trigger>
                  <span>{f.q}</span>
                  <span className="accordion__icon" aria-hidden="true"></span>
                </button>
                <div className="accordion__panel" data-accordion-panel>
                  <div className="accordion__panel-inner">
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta bg-forest" aria-label="Check availability">
        <div className="container container--content text-center">
          <p
            className="eyebrow eyebrow--gold reveal"
            style={{ justifyContent: "center" }}
          >
            Begin
          </p>
          <h2 className="cta__title display--xl reveal reveal--delay-1 text-balance">
            Let's make every
            <br />
            <em className="display--italic">word count.</em>
          </h2>
          <p
            className="prose reveal reveal--delay-2"
            style={{
              color: "var(--color-cream)",
              opacity: 0.85,
              margin: "var(--space-3) auto 0",
              textAlign: "center",
            }}
          >
            Your ceremony deserves more than "good enough." Let's create an
            experience where every guest hears every promise exactly as it was
            meant to be heard.
          </p>
          <div
            className="cta__actions reveal reveal--delay-2"
            style={{ marginTop: "var(--space-5)" }}
          >
            <a href="/contact" className="btn btn--ghost">
              Check Availability
              <span className="btn__arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
          <p
            className="reveal reveal--delay-2"
            style={{ marginTop: "var(--space-3)" }}
          >
            <a href="/contact" className="link link--cream">
              Contact Us
            </a>
          </p>
        </div>
      </section>
    </SiteChrome>
  );
}
