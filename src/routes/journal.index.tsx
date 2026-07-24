import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteChrome, PageHero, pageScripts } from "@/components/site/SiteChrome";
import { JOURNAL } from "@/content/journal";

export const Route = createFileRoute("/journal/")({
  component: JournalIndex,
  head: () => ({
    meta: [
      { title: "Journal — Oak & Echo" },
      { name: "description", content: "Field notes on ceremony audio, outdoor planning, and thoughtful vendor collaboration — from the Oak & Echo studio." },
      { property: "og:title", content: "Journal — Oak & Echo" },
      { property: "og:description", content: "Field notes on ceremony audio and outdoor wedding planning." },
      { property: "og:url", content: "/journal" },
      { property: "og:image", content: "/assets/images/editorial-wide.jpg" },
      { name: "twitter:image", content: "/assets/images/editorial-wide.jpg" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
    scripts: pageScripts,
  }),
});

function JournalIndex() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="The Journal"
        title="Field notes"
        italic="from a working studio."
        lede="Occasional writing on ceremony audio, outdoor planning, and the small disciplines that keep a wedding sounding effortless."
      />

      <section className="section section--lg bg-white">
        <div className="container container--content">
          <ol className="journal-list">
            {JOURNAL.map((a, i) => (
              <li key={a.slug} className="journal-list__item reveal">
                <span className="journal-list__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="journal-list__body">
                  <p className="eyebrow">{a.kicker}</p>
                  <h2 className="journal-list__title display--md">
                    {a.pdfUrl ? (
                      <a href={a.pdfUrl} download>
                        {a.title}
                        <span className="journal-list__pdf-tag" aria-hidden="true">PDF ↓</span>
                      </a>
                    ) : (
                      <Link to="/journal/$slug" params={{ slug: a.slug }}>{a.title}</Link>
                    )}
                  </h2>
                  <p className="journal-list__dek">{a.dek}</p>
                  <p className="caption journal-list__meta">{a.readTime} · {a.date}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </SiteChrome>
  );
}