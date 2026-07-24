import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, pageScripts } from "@/components/site/SiteChrome";

// Local hero loop — see GETTING_THE_HERO_VIDEO.md for how to obtain and
// place the actual .mp4 file. Using a normal /public path (rather than
// Lovable's internal CDN route) so this works in any environment: local
// dev, this VS Code project, or any hosting provider.
const HERO_VIDEO_URL = "/assets/video/hero-loop.mp4";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    meta: [
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/assets/images/hero.jpg" },
      { name: "twitter:image", content: "/assets/images/hero.jpg" },
    ],
    scripts: [
      ...pageScripts,
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Oak & Echo",
          description:
            "Ceremony audio specialists. Discreet microphones, balanced speaker coverage, and redundant recordings so every guest hears every promise.",
          areaServed: "United States",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Youngstown",
            addressRegion: "OH",
            addressCountry: "US",
          },
          url: "/",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <SiteChrome>
      {/* ═════════════════════════════════════════════════════
          CHAPTER I — HERO
          Monumental typography. Cinematic loop with image fallback.
          ═════════════════════════════════════════════════════ */}
      <section className="hero" aria-label="Introduction">
        <div className="hero__media" data-parallax data-speed="0.15">
          <img
            src="/assets/images/hero.jpg"
            alt=""
            width={1920}
            height={1280}
            fetchPriority="high"
            aria-hidden="true"
          />
          <video
            data-hero-video
            src={HERO_VIDEO_URL}
            poster="/assets/images/hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__content container">
          <p className="eyebrow eyebrow--cream reveal reveal--fade">
            <span className="hero__eyebrow-line">Oak &amp; Echo — Est. Ohio</span>
          </p>
          <h1 className="hero__title reveal">
            Every guest deserves
            <br />
            <em className="display--italic">to hear every promise.</em>
          </h1>
          <div className="hero__meta reveal reveal--delay-2">
            <p className="hero__sub">Ceremony Audio, Precisely Engineered.</p>
            <a href="/contact" className="btn btn--ghost">
              Begin the Conversation
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <a href="#why" className="hero__scroll" aria-label="Continue reading">
          <span className="hero__scroll-label">Scroll</span>
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER II — WHY CEREMONY AUDIO MATTERS
          Calm opener. Centered editorial statement.
          ═════════════════════════════════════════════════════ */}
      <section id="why" className="chapter bg-cream--paper">
        <div className="container container--content">
          <p className="chapter__eyebrow reveal">Chapter One</p>
          <h2 className="display--xl reveal reveal--delay-1 text-balance" style={{ maxWidth: "20ch" }}>
            The shortest part of the day
            <br />
            <em className="display--italic">is the part they'll remember.</em>
          </h2>
          <p className="prose reveal reveal--delay-2" style={{ marginTop: "var(--space-5)", fontSize: "var(--text-lg)" }}>
            Twenty minutes of vows. A few readings. A blessing. This is the ceremony —
            and it is over before most guests have finished settling in. When the microphones
            work, no one notices. When they don't, no one forgets.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER III — OUR PHILOSOPHY (split, image right)
          ═════════════════════════════════════════════════════ */}
      <section className="chapter bg-white">
        <div className="container">
          <div className="split split--wide">
            <div className="split__body reveal">
              <p className="chapter__eyebrow">Chapter Two — Philosophy</p>
              <h2 className="split__title">
                Technology should never be the center of attention.
                <br />
                <em className="display--italic">The moment should be.</em>
              </h2>
              <p className="split__prose">
                We built Oak &amp; Echo around one belief: professional audio is invisible
                when it is done well. The equipment should disappear. The engineer should
                disappear. What remains is the ceremony itself — clear, natural, present.
              </p>
              <p className="split__prose">
                Every choice we make — from microphone selection to speaker placement to
                the color of our cable — is made in service of that disappearance.
              </p>
            </div>
            <div className="split__media reveal reveal--delay-1">
              <img
                src="/assets/images/editorial-vows.jpg"
                alt="A couple exchanging vows beneath an oak tree, guests looking on"
                loading="lazy"
                width={1200}
                height={1500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          PACING PULLQUOTE — calm interstitial
          ═════════════════════════════════════════════════════ */}
      <section className="chapter chapter--pause bg-cream--paper" aria-label="Pause">
        <div className="container container--content text-center">
          <p className="pullquote reveal" style={{ margin: "0 auto" }}>
            <em>“</em>The ceremony only happens once.
            <br />
            There are no second takes.<em>”</em>
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          FULL BLEED EDITORIAL — visual breath
          ═════════════════════════════════════════════════════ */}
      <section className="editorial section--flush" aria-label="Editorial pause">
        <figure className="editorial__figure">
          <img
            src="/assets/images/editorial-wide.jpg"
            alt="An empty ceremony aisle at dusk, framed by trees"
            width={1920}
            height={1088}
            loading="lazy"
          />
          <figcaption className="editorial__caption">
            <span className="eyebrow eyebrow--cream">Chapter Three</span>
            <h2 className="editorial__title display--lg text-balance">
              Invisible technology.
              <br />
              <em className="display--italic">Unforgettable moments.</em>
            </h2>
          </figcaption>
        </figure>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER IV — WHAT WE PROTECT
          Six emotional moments, editorial grid, no imagery per card.
          ═════════════════════════════════════════════════════ */}
      <section className="chapter bg-cream--paper">
        <div className="container">
          <header className="stack reveal">
            <p className="chapter__eyebrow">Chapter Four — What We Protect</p>
            <h2 className="display--lg text-balance" style={{ maxWidth: "16ch" }}>
              Six essential moments,
              <br />
              <em className="display--italic">kept without fail.</em>
            </h2>
          </header>

          <div className="protect-grid">
            {[
              { n: "i.",   t: "Every promise",  d: "The words you say only to each other, spoken once, meant forever — captured with the clarity they deserve." },
              { n: "ii.",  t: "Every guest",    d: "From the front row to the very back, from your grandmother to a plus-one — no one strains to hear." },
              { n: "iii.", t: "Every memory",   d: "A clean audio feed to your videographer, plus a backup recording of our own. The ceremony is preserved twice over." },
              { n: "iv.",  t: "Every blessing", d: "Officiants, elders, and readers speak softly. We make sure their words reach every ear in the room." },
              { n: "v.",   t: "Every laugh",    d: "The sudden joy when the ring drops, the sharp intake at a first look — the small, unrepeatable sounds of a real ceremony." },
              { n: "vi.",  t: "Every reading",  d: "Whether it is a poem, a scripture, or a letter from a friend — the reader is heard exactly as they intended." },
            ].map((c) => (
              <article key={c.n} className="protect-card reveal">
                <span className="protect-card__num">{c.n}</span>
                <h3 className="protect-card__title">{c.t}</h3>
                <p className="protect-card__text">{c.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER V — THE OAK STANDARD
          Four near-fullscreen moments on forest ground.
          ═════════════════════════════════════════════════════ */}
      <section className="bg-forest" aria-label="The Oak Standard">
        <div className="container">
          <div style={{ paddingBlock: "var(--space-7) 0" }}>
            <p className="chapter__eyebrow reveal" style={{ color: "var(--color-gold)" }}>
              Chapter Five — The Oak Standard
            </p>
            <h2 className="display--lg reveal reveal--delay-1" style={{ color: "var(--color-cream)", maxWidth: "22ch" }}>
              Four words that shape
              <br />
              <em className="display--italic">every ceremony we serve.</em>
            </h2>
          </div>

          {[
            { n: "i.",   w: "Prepared.",  d: "We arrive three to four hours before the ceremony. Every cable is labeled. Every microphone is tested. Nothing is left to the morning-of." },
            { n: "ii.",  w: "Calm.",      d: "There is no rush at an Oak &amp; Echo setup. The team moves deliberately, works methodically, and never once raises a voice on the venue floor." },
            { n: "iii.", w: "Invisible.", d: "Compact speakers, chosen to disappear. Microphones concealed in linen. Cables run behind florals. Your photographer will not have to work around us." },
            { n: "iv.",  w: "Reliable.",  d: "Every microphone has a backup. Every receiver has a backup. Every power source has a backup. Redundancy is the discipline." },
          ].map((m) => (
            <article key={m.n} className="moment reveal">
              <div>
                <span className="moment__index">{m.n}</span>
                <p className="moment__word">{m.w}</p>
              </div>
              <div className="moment__body">
                <p className="moment__line" dangerouslySetInnerHTML={{ __html: m.d }} />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER V.5 — CALM CONFIDENCE (philosophy signature)
          ═════════════════════════════════════════════════════ */}
      <section className="chapter bg-cream--paper">
        <div className="container container--content text-center">
          <p className="chapter__eyebrow reveal" style={{ justifyContent: "center" }}>
            Chapter Five &amp; a Half — A Philosophy
          </p>
          <h2 className="display--xl reveal reveal--delay-1 text-balance" style={{ maxWidth: "18ch", margin: "var(--space-4) auto 0" }}>
            Calm
            <br />
            <em className="display--italic">confidence.</em>
          </h2>
          <div className="prose reveal reveal--delay-2" style={{ margin: "var(--space-5) auto 0", textAlign: "left" }}>
            <p>The best ceremony audio is the kind you never notice.</p>
            <p>No distractions. No interruptions. No visible technology.</p>
            <p>Just every voice, naturally heard — the officiant, the reader, the whispered vow, the soft laugh from the second row.</p>
            <p>Everything we do is in service of that stillness.</p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER VI — WHY OAK & ECHO (difference list)
          ═════════════════════════════════════════════════════ */}
      <section className="chapter bg-white">
        <div className="container container--content">
          <header className="stack reveal">
            <p className="chapter__eyebrow">Chapter Six — Why Oak &amp; Echo</p>
            <h2 className="display--lg text-balance" style={{ maxWidth: "18ch" }}>
              A discipline, not a service.
            </h2>
            <p className="lede" style={{ marginTop: "var(--space-3)" }}>
              Most competitors list equipment. We think the difference lives elsewhere.
            </p>
          </header>

          <ol className="difference">
            {[
              { n: "01", t: "Ceremony audio, first.",       d: "Ceremony audio is where we focus — the thing our season is built around, not a side offering. That focus is what makes the difference." },
              { n: "02", t: "Purpose-built for speech.",         d: "Every microphone, receiver, and speaker in our kit was chosen for one job: reproducing the human voice cleanly, outdoors, in real conditions." },
              { n: "03", t: "Redundancy at every layer.",       d: "Two microphones on the officiant. Two on the couple. Two receivers. Two power sources. Two recordings. Failure is designed against, not hoped away." },
              { n: "04", t: "Discretion as craft.",              d: "Our cable disappears into the landscape. If your photographer never has to reframe around us, we've done our job." },
              { n: "05", t: "Coordination with your team.",     d: "We talk to your planner, your DJ, your officiant, and your videographer before the day. Nothing about our presence should be a surprise." },
              { n: "06", t: "We protect the atmosphere.",       d: "Our discipline is subtractive. We remove the friction of hearing so the moment can move through the room unimpeded." },
            ].map((r) => (
              <li key={r.n} className="difference__item reveal">
                <span className="difference__num">{r.n}</span>
                <h3 className="difference__title">{r.t}</h3>
                <p className="difference__text">{r.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          TRUST STRIP — subtle, inline
          ═════════════════════════════════════════════════════ */}
      <section className="bg-white">
        <div className="container">
          <ul className="trust-strip">
            <li className="trust-strip__item">Early arrival</li>
            <li className="trust-strip__item">Redundant backup</li>
            <li className="trust-strip__item">Vendor coordination</li>
            <li className="trust-strip__item">Photographer friendly</li>
            <li className="trust-strip__item">Videographer ready</li>
            <li className="trust-strip__item">Weather prepared</li>
          </ul>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER VII — FOR PLANNERS & VENUES (dark)
          ═════════════════════════════════════════════════════ */}
      <section className="chapter bg-forest">
        <div className="container">
          <div className="planners">
            <div className="planners__aside reveal">
              <p className="chapter__eyebrow" style={{ color: "var(--color-gold)" }}>
                Chapter Seven — For Planners &amp; Venues
              </p>
              <h2 className="planners__title">
                A seamless addition
                <br />
                <em className="display--italic">to your vendor team.</em>
              </h2>
              <p className="planners__lede">
                We know your day is a choreography. Oak &amp; Echo is built to slip into
                that choreography without breaking its rhythm.
              </p>
            </div>

            <ul className="planners__list">
              {[
                { t: "Early communication", d: "We introduce ourselves to your team weeks before the ceremony, not the morning of." },
                { t: "Officiant coordination", d: "We reach out directly to review readings, unity moments, and microphone placement." },
                { t: "Clean setup and teardown", d: "In discreetly, out discreetly. Cables coiled, marks removed, floor left as we found it." },
                { t: "Photographer friendly", d: "Equipment placed behind sightlines. Nothing to work around in post." },
                { t: "Videographer ready", d: "Clean XLR or 3.5mm feed to your video team, plus our own backup recording." },
                { t: "Discreet operation", d: "No talkback, no on-site radios. Just an attentive engineer at the back of the room." },
              ].map((p) => (
                <li key={p.t} className="planners__item reveal">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          EDITORIAL IMAGE — image left / prose right split
          ═════════════════════════════════════════════════════ */}
      <section className="chapter bg-white">
        <div className="container">
          <div className="split split--reverse split--wide">
            <div className="split__media reveal">
              <img
                src="/assets/images/protect-guests.jpg"
                alt="Guests seated in wooden chairs, watching an outdoor ceremony in soft light"
                loading="lazy"
                width={1200}
                height={1500}
              />
            </div>
            <div className="split__body reveal reveal--delay-1">
              <p className="chapter__eyebrow">Chapter Eight — How we work</p>
              <h2 className="split__title">
                Six unhurried steps,
                <br />
                <em className="display--italic">the same every time.</em>
              </h2>
              <ol style={{ listStyle: "none", padding: 0, margin: "var(--space-3) 0 0", counterReset: "step" }}>
                {[
                  ["Conversation", "An unhurried call about your ceremony, your venue, and the moments that matter most."],
                  ["Planning",     "We design the audio approach around your space, officiant, and vendor team."],
                  ["Preparation",  "Equipment is tested, redundancies are built, every cable labeled — before we leave."],
                  ["Coordination", "We speak with your planner, DJ, and videographer so nothing is a surprise on the day."],
                  ["The day",      "We arrive early, place everything discreetly, and stay attentive through the final blessing."],
                  ["Every word heard", "Your ceremony is captured, your guests heard every word, and the moment belonged to you."],
                ].map(([t, d], i) => (
                  <li key={t} style={{
                    display: "grid",
                    gridTemplateColumns: "42px 1fr",
                    gap: "var(--space-3)",
                    padding: "var(--space-3) 0",
                    borderTop: "1px solid var(--color-border)",
                  }}>
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      color: "var(--color-gold)",
                    }}>{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--text-lg)",
                        color: "var(--color-forest)",
                        margin: 0,
                        fontWeight: 400,
                      }}>{t}</h3>
                      <p style={{ marginTop: 6, color: "var(--color-gray-600)", lineHeight: 1.65 }}>{d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER IX — A NOTE FROM US (founder statement)
          ═════════════════════════════════════════════════════ */}
      <section className="chapter bg-cream--paper">
        <div className="container container--content" style={{ textAlign: "center" }}>
          <p className="chapter__eyebrow reveal" style={{ justifyContent: "center" }}>A Note From Us</p>
          <blockquote className="reveal reveal--delay-1" style={{ margin: "var(--space-5) auto 0" }}>
            <p className="pullquote">
              <em>“</em>We're not chasing volume. We're chasing the moment a couple says,
              <em> “I forgot the microphones were even there.”</em> That's the only metric
              that matters to us.<em>”</em>
            </p>
            <footer style={{ marginTop: "var(--space-5)" }}>
              <span className="rule rule--short" style={{ margin: "0 auto var(--space-2)" }} aria-hidden="true" />
              <cite style={{ display: "block", fontStyle: "normal", fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--color-forest)" }}>
                Oak &amp; Echo Audio
              </cite>
              <span className="caption" style={{ display: "block", marginTop: 4 }}>
                Founder
              </span>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════
          CHAPTER X — INVITATION
          ═════════════════════════════════════════════════════ */}
      <section className="cta bg-forest" aria-label="Invitation">
        <div className="container container--content text-center">
          <p className="chapter__eyebrow reveal" style={{ color: "var(--color-gold)", justifyContent: "center" }}>Chapter Ten — Begin</p>
          <h2 className="cta__title reveal reveal--delay-1 text-balance" style={{ fontSize: "var(--text-5xl)" }}>
            Let's make sure
            <br />
            every word
            <br />
            <em className="display--italic">is heard.</em>
          </h2>
          <div className="cta__actions reveal reveal--delay-2">
            <a href="/contact" className="btn btn--ghost">
              Begin the Conversation
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
