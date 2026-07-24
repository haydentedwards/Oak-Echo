import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, PageHero, pageScripts } from "@/components/site/SiteChrome";

const FAQ_GROUPS = [
  {
    title: "The Basics",
    items: [
      { q: "Why isn't the DJ enough?", a: "A DJ is a performance role. Ceremony audio is an engineering role. The two require different equipment, different placement, and — most importantly — a different mindset. We exist so your DJ can focus on the reception." },
      { q: "Do we actually need ceremony audio?", a: "If your ceremony is outdoors, has more than thirty guests, or includes readings and vows longer than a minute — yes. Guests remember whether or not they could hear." },
      { q: "What if we already have a great venue with built-in speakers?", a: "House systems are usually engineered for announcements, not intimate speech. We often complement a venue system rather than replace it — using their speakers for coverage while we handle microphones and mixing." },
    ],
  },
  {
    title: "On The Day",
    items: [
      { q: "How early do you arrive?", a: "Three to four hours before ceremony start, depending on venue and setup complexity. We stay out of the way, we are early, and we are gone before your first look." },
      { q: "Will speakers appear in photos?", a: "Rarely. We choose compact speakers and place them where sightlines are already broken — behind florals, tucked into tree lines, or set beyond the aisle. Your photographer will thank us." },
      { q: "What if it rains?", a: "We plan for weather in advance. Our equipment is rated for outdoor use with appropriate protection, and we always confirm rain-plan logistics with your planner before the day." },
      { q: "Do you provide music playback for the ceremony?", a: "Yes. Prelude, processional, recessional, and any interlude music can run through our system, cued precisely to your timeline." },
    ],
  },
  {
    title: "Technical",
    items: [
      { q: "Can our videographer connect?", a: "Yes. We provide a clean, professional audio feed directly to your videographer, plus independent backup recordings — so the words spoken today are preserved even if one system fails." },
      { q: "What happens if equipment fails?", a: "It doesn't, because we assume it will. Every microphone has a backup. Every receiver has a backup. Every power source has a backup. Redundancy is the entire discipline." },
      { q: "What microphones do you use?", a: "Broadcast-grade Sennheiser and Shure wireless systems, chosen for the specific ceremony — lavaliers for officiants and readers, discreet handhelds when appropriate. Every unit is paired with a hot spare on a separate frequency." },
      { q: "Can you support a livestream for family who can't attend?", a: "Yes. We can provide a dedicated audio feed to a livestream setup, or partner with your video team to make sure the stream sounds as good as it looks." },
    ],
  },
  {
    title: "Booking",
    items: [
      { q: "How far in advance should we book?", a: "Most couples reach out six to twelve months in advance. We're intentionally limiting our first season to a small number of weddings so every ceremony gets our full attention as we grow. Early booking is still the best way to secure your date — especially for peak-season Saturdays." },
      { q: "Where do you travel?", a: "We are based in Youngstown, Ohio and regularly serve the greater Midwest. We travel farther for destination weddings when the timing is right." },
      { q: "How does pricing work?", a: "Every ceremony is different. After a short conversation about your venue and vision, we send a written proposal with a fixed, all-inclusive price. No surprises." },
    ],
  },
];

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — Oak & Echo Ceremony Audio" },
      { name: "description", content: "The questions couples ask us most, answered plainly — from DJ overlap to rain plans, redundancy, and booking." },
      { property: "og:title", content: "FAQ — Oak & Echo" },
      { property: "og:description", content: "The questions couples ask us most, answered plainly." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      ...pageScripts,
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ_GROUPS.flatMap((g) =>
            g.items.map((i) => ({
              "@type": "Question",
              name: i.q,
              acceptedAnswer: { "@type": "Answer", text: i.a },
            })),
          ),
        }),
      },
    ],
  }),
});

function FaqPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Questions, Answered Plainly"
        title="The things"
        italic="couples ask us most."
        lede="If you don't find your question here, write to us — we answer every message personally."
      />

      <section className="section section--lg bg-white">
        <div className="container container--content faq-page">
          {FAQ_GROUPS.map((group) => (
            <div key={group.title} className="faq-group">
              <h2 className="faq-group__title display--sm reveal">{group.title}</h2>
              <div className="accordion" role="list">
                {group.items.map((f) => (
                  <div key={f.q} className="accordion__item" data-accordion-item aria-expanded="false" role="listitem">
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
          ))}
        </div>
      </section>

      <section className="cta bg-forest">
        <div className="container container--content text-center">
          <p className="eyebrow eyebrow--gold reveal">Still Wondering</p>
          <h2 className="cta__title display--xl reveal reveal--delay-1 text-balance">
            Write to us <em className="display--italic">directly.</em>
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