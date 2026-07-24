import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, PageHero, pageScripts } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Oak & Echo" },
      { name: "description", content: "Oak & Echo is a small, specialist ceremony-audio studio built on preparation, calm, and reverence for the moment." },
      { property: "og:title", content: "About — Oak & Echo" },
      { property: "og:description", content: "A specialist ceremony-audio studio built on preparation, calm, and reverence." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: "/assets/images/about-hands.jpg" },
      { name: "twitter:image", content: "/assets/images/about-hands.jpg" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: pageScripts,
  }),
});

function AboutPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="About Oak & Echo"
        title="A focused studio built"
        italic="on one obsession."
        lede="We specialize in one thing — professional ceremony audio — so we can do it better than anyone else in the room."
      />

      <section className="section section--lg bg-white about-story">
        <div className="container about-story__grid">
          <figure className="about-story__media reveal">
            <img src="/assets/images/about-hands.jpg" alt="Hands coiling an XLR audio cable on a linen surface" width={1536} height={1920} loading="lazy" />
          </figure>
          <div className="about-story__body">
            <p className="eyebrow reveal">Our Story</p>
            <h2 className="display--lg reveal reveal--delay-1 text-balance">Founded on a single, stubborn belief.</h2>
            <div className="prose reveal reveal--delay-2">
              <p>Oak &amp; Echo exists because too many ceremonies are remembered for the wrong reason — a microphone that cut out, a speaker aimed the wrong way, a guest in the back row who missed the vows entirely.</p>
              <p>We built this company around one narrow idea: ceremony audio deserves its own specialist, not an afterthought bolted onto a DJ package. Every part of how we work — the redundancy, the discretion, the coordination with your other vendors — comes from treating that twenty minutes as the most important twenty minutes of the day.</p>
              <p>We're intentionally starting small and deliberate, taking on a limited number of ceremonies so every one gets our full attention. That's not a marketing angle — it's how we plan to operate at every size we ever grow to.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--lg bg-cream">
        <div className="container container--content">
          <p className="eyebrow reveal">What We Believe</p>
          <h2 className="display--lg reveal reveal--delay-1 text-balance" style={{ maxWidth: "22ch" }}>
            Four convictions we do not compromise on.
          </h2>
          <ol className="beliefs">
            {[
              { n: "01", t: "Preparation is a form of respect.", d: "Every cable, every microphone, every backup is tested, labeled, and packed before we leave for your venue." },
              { n: "02", t: "Calm is a professional skill.", d: "We arrive early. We stay out of the way. We do not create small emergencies for your planner to solve." },
              { n: "03", t: "Invisibility is the goal.", d: "The best compliment we receive is that guests never noticed us — and never noticed the audio, either." },
              { n: "04", t: "Redundancy is the discipline.", d: "Every critical component has a backup. Every microphone has a second microphone. Nothing important runs on one thing." },
            ].map((b) => (
              <li key={b.n} className="beliefs__item reveal">
                <span className="beliefs__num">{b.n}</span>
                <div>
                  <h3 className="beliefs__title display--sm">{b.t}</h3>
                  <p className="beliefs__text">{b.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cta bg-forest">
        <div className="container container--content text-center">
          <p className="eyebrow eyebrow--gold reveal">Next</p>
          <h2 className="cta__title display--xl reveal reveal--delay-1 text-balance">
            See what we <em className="display--italic">actually do.</em>
          </h2>
          <div className="cta__actions reveal reveal--delay-2">
            <a href="/services" className="btn btn--ghost">
              Explore the services<span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}