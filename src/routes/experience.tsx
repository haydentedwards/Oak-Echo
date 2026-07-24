import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, PageHero, pageScripts } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "The Experience — Oak & Echo" },
      { name: "description", content: "What it feels like to work with Oak & Echo — from first conversation through the last blessing of your ceremony." },
      { property: "og:title", content: "The Experience — Oak & Echo" },
      { property: "og:description", content: "The full arc of working with Oak & Echo: conversation, planning, arrival, ceremony, delivery." },
      { property: "og:url", content: "/experience" },
      { property: "og:image", content: "/assets/images/experience-wide.jpg" },
      { name: "twitter:image", content: "/assets/images/experience-wide.jpg" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
    scripts: pageScripts,
  }),
});

function ExperiencePage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="The Experience"
        title="Unhurried, prepared,"
        italic="and out of the way."
        lede="The way we work is a large part of what we sell. Here is what to expect from the first email to the final blessing."
      />

      <section className="editorial section--flush" aria-label="Editorial">
        <figure className="editorial__figure">
          <img src="/assets/images/experience-wide.jpg" alt="Rows of wooden chairs under an enormous oak tree at golden hour, arranged for an outdoor wedding ceremony" width={1920} height={1080} loading="lazy" />
          <figcaption className="editorial__caption">
            <span className="eyebrow eyebrow--cream">On The Day</span>
            <h2 className="editorial__title display--lg text-balance">
              We arrive early.<br/><em className="display--italic">Then we disappear.</em>
            </h2>
          </figcaption>
        </figure>
      </section>

      <section className="section section--lg bg-white">
        <div className="container container--content">
          <div className="grid grid--2 experience__pairs">
            {[
              { t: "Before The Wedding", d: "One or two thoughtful conversations. A short questionnaire about your ceremony, your officiant, and your venue. A written plan you can share with your planner and video team." },
              { t: "The Week Of", d: "Confirmation calls with your planner, videographer, and DJ. Equipment tested, packed, and re-tested. If there are weather questions, we already have contingencies written down." },
              { t: "Wedding Morning", d: "We arrive three to four hours early. We introduce ourselves to your vendor team by first name. We place speakers before your florist finishes staging the aisle." },
              { t: "The Ceremony", d: "One of us is monitoring audio the entire time. If something happens, we solve it before you notice." },
              { t: "After The Ceremony", d: "We hand off the videographer feed, break down without disturbing cocktail hour, and are usually gone before your first dance is on the reception timeline." },
              { t: "The Following Week", d: "Independent backup recordings delivered to you privately, so you can hear the vows again exactly as they were spoken." },
            ].map((p) => (
              <article key={p.t} className="experience__card reveal">
                <h3 className="experience__title display--sm">{p.t}</h3>
                <p className="experience__text">{p.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: Replace with a real client testimonial once available. Do not use placeholder/fake quotes. */}
    </SiteChrome>
  );
}