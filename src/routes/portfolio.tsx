import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, PageHero, pageScripts } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Style & Vision — Oak & Echo" },
      { name: "description", content: "A visual sense of the ceremonies Oak & Echo is built to support — outdoor, intimate, and precisely engineered." },
      { property: "og:title", content: "Style & Vision — Oak & Echo" },
      { property: "og:description", content: "The look and feel we're building toward." },
      { property: "og:url", content: "/portfolio" },
      { property: "og:image", content: "/assets/images/portfolio-1.jpg" },
      { name: "twitter:image", content: "/assets/images/portfolio-1.jpg" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
    scripts: pageScripts,
  }),
});

const GALLERY = [
  { src: "/assets/images/portfolio-1.jpg", alt: "A couple exchanging vows under a canopy of trees at golden hour", cap: "Golden Hour Aisle", meta: "Style Reference" },
  { src: "/assets/images/portfolio-2.jpg", alt: "Close-up of a discreet lavalier microphone on a groom's lapel", cap: "Lapel Study", meta: "Equipment Detail" },
  { src: "/assets/images/portfolio-3.jpg", alt: "A candlelit chapel interior during a wedding ceremony", cap: "Candlelit Interior", meta: "Style Reference" },
  { src: "/assets/images/portfolio-4.jpg", alt: "A compact speaker discreetly placed among wild grasses at an outdoor aisle", cap: "Concealment Study", meta: "Equipment Detail" },
  { src: "/assets/images/editorial-vows.jpg", alt: "A couple exchanging vows beneath a large oak tree in front of seated guests", cap: "Beneath the Oak", meta: "Style Reference" },
  { src: "/assets/images/protect-guests.jpg", alt: "Guests seated in wooden chairs watching an outdoor ceremony", cap: "Guests, Front to Back", meta: "Style Reference" },
];

function PortfolioPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Style & Vision"
        title="The look and feel"
        italic="we're building toward."
        lede="A visual sense of the ceremonies we're built to support — outdoor, intimate, and precisely engineered."
      />

      <section className="section section--lg bg-white">
        <div className="container">
          <div className="gallery">
            {GALLERY.map((g, i) => (
              <figure key={g.src} className={`gallery__item gallery__item--${(i % 4) + 1} reveal`}>
                <div className="gallery__media">
                  <img src={g.src} alt={g.alt} loading="lazy" />
                </div>
                <figcaption className="gallery__cap">
                  <span className="gallery__title">{g.cap}</span>
                  <span className="gallery__meta caption">{g.meta}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="cta bg-forest">
        <div className="container container--content text-center">
          <p className="eyebrow eyebrow--gold reveal">Next</p>
          <h2 className="cta__title display--xl reveal reveal--delay-1 text-balance">
            Yours could be<br/><em className="display--italic">the next entry.</em>
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