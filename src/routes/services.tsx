import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, PageHero, pageScripts } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Oak & Echo Ceremony Audio" },
      { name: "description", content: "Discreet wireless microphones, balanced speaker coverage, videographer feeds, and independent backup recordings for wedding ceremonies." },
      { property: "og:title", content: "Services — Oak & Echo" },
      { property: "og:description", content: "Wireless mics, balanced speakers, videographer feeds, and backup recordings — engineered for wedding ceremonies." },
      { property: "og:url", content: "/services" },
      { property: "og:image", content: "/assets/images/services-speaker.jpg" },
      { name: "twitter:image", content: "/assets/images/services-speaker.jpg" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
    scripts: pageScripts,
  }),
});

const SERVICES = [
  {
    n: "01",
    t: "Wireless Ceremony Microphones",
    d: "Broadcast-grade lavalier and handheld microphones, placed with intention on officiants, readers, and — when appropriate — the couple. Every unit paired with a hot spare.",
    bullets: ["Sennheiser & Shure wireless systems", "Redundant receivers on separate frequencies", "Discreet, skin-tone or lapel-matched placement"],
  },
  {
    n: "02",
    t: "Balanced Guest Coverage",
    d: "Compact speakers engineered around your specific space and guest count so every row hears the ceremony at the same, comfortable level.",
    bullets: ["Custom coverage plan per venue", "Battery-powered options for aisle placement", "Placed behind florals or tree lines, out of photos"],
  },
  {
    n: "03",
    t: "Videographer & Livestream Feed",
    d: "Clean, professional audio delivered directly to your videographer and, if requested, to a private livestream — so distant family hears every word too.",
    bullets: ["Isolated pro audio feed (XLR or wireless)", "Coordinated with your video team in advance", "Optional dedicated livestream mix"],
  },
  {
    n: "04",
    t: "Independent Backup Recording",
    d: "A separate, self-contained recorder captures the entire ceremony as a safety net — a preserved copy of the vows that lives entirely apart from the main system.",
    bullets: ["Two independent recording paths", "Delivered to you within 72 hours", "Yours to keep, forever"],
  },
  {
    n: "05",
    t: "Musician & Instrument Amplification",
    d: "Sensitive reinforcement for string quartets, acoustic guitarists, harpists, and vocalists — supporting the sound without ever overtaking it.",
    bullets: ["Instrument-specific microphones", "Careful monitoring for the musicians", "Balanced against the officiant channel"],
  },
  {
    n: "06",
    t: "Site Walkthrough & Planning",
    d: "Before your wedding day we visit or study your venue, coordinate with your planner and vendor team, and design an audio plan around the specifics of your ceremony.",
    bullets: ["Detailed venue-specific plan", "Direct coordination with planner & DJ", "Timeline & cue sheet the day-of team can read"],
  },
];

function ServicesPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Services"
        title="Six services."
        italic="One outcome."
        lede="Every guest hears every word — and no one notices how it happened."
      />

      <section className="editorial section--flush" aria-label="Editorial">
        <figure className="editorial__figure">
          <img src="/assets/images/services-speaker.jpg" alt="A compact black speaker on a slim stand tucked behind ornamental grasses and white florals at an outdoor ceremony" width={1536} height={1920} loading="lazy" />
          <figcaption className="editorial__caption">
            <span className="eyebrow eyebrow--cream">The Discipline</span>
            <h2 className="editorial__title display--lg text-balance">
              Placed where sightlines
              <br /><em className="display--italic">are already broken.</em>
            </h2>
          </figcaption>
        </figure>
      </section>

      <section className="section section--lg bg-white">
        <div className="container">
          <ol className="services">
            {SERVICES.map((s) => (
              <li key={s.n} className="services__item reveal">
                <div className="services__head">
                  <span className="services__num">{s.n}</span>
                  <h3 className="services__title display--md">{s.t}</h3>
                </div>
                <div className="services__body">
                  <p className="services__desc">{s.d}</p>
                  <ul className="services__bullets">
                    {s.bullets.map((b) => (<li key={b}>{b}</li>))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta bg-forest">
        <div className="container container--content text-center">
          <p className="eyebrow eyebrow--gold reveal">Begin</p>
          <h2 className="cta__title display--xl reveal reveal--delay-1 text-balance">
            Tell us about<br/>your ceremony.
          </h2>
          <div className="cta__actions reveal reveal--delay-2">
            <a href="/contact" className="btn btn--ghost">
              Begin the Conversation<span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}