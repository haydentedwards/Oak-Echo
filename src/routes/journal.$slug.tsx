import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteChrome, pageScripts } from "@/components/site/SiteChrome";
import { JOURNAL } from "@/content/journal";

export const Route = createFileRoute("/journal/$slug")({
  component: JournalArticlePage,
  loader: ({ params }) => {
    const article = JOURNAL.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  notFoundComponent: () => (
    <SiteChrome>
      <section className="section section--lg bg-white">
        <div className="container container--content text-center">
          <p className="eyebrow">Not found</p>
          <h1 className="display--lg" style={{ marginTop: "var(--space-3)" }}>
            That entry has moved on.
          </h1>
          <p className="lede" style={{ margin: "var(--space-4) auto 0" }}>
            Return to the <Link className="link" to="/journal">Journal</Link>.
          </p>
        </div>
      </section>
    </SiteChrome>
  ),
  errorComponent: ({ reset }) => (
    <SiteChrome>
      <section className="section section--lg bg-white">
        <div className="container container--content text-center">
          <p className="eyebrow">Something didn't come through</p>
          <button className="btn btn--outline" onClick={() => reset()} style={{ marginTop: "var(--space-4)" }}>
            Try again
          </button>
        </div>
      </section>
    </SiteChrome>
  ),
  head: ({ params }) => {
    const article = JOURNAL.find((a) => a.slug === params.slug);
    const title = article ? `${article.title} — Oak & Echo Journal` : "Journal — Oak & Echo";
    const desc = article?.dek ?? "Field notes from the Oak & Echo studio.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/journal/${params.slug}` },
        ...(article?.hero
          ? [
              { property: "og:image", content: article.hero },
              { name: "twitter:image", content: article.hero },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: `/journal/${params.slug}` }],
      scripts: pageScripts,
    };
  },
});

function JournalArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <SiteChrome>
      <article className="article">
        <header className="article__header">
          <div className="container container--content">
            <p className="chapter__eyebrow reveal">{article.kicker}</p>
            <h1 className="article__title display--xl reveal reveal--delay-1 text-balance">
              {article.title}
            </h1>
            <p className="lede reveal reveal--delay-2" style={{ marginTop: "var(--space-4)" }}>
              {article.dek}
            </p>
            <p className="caption reveal reveal--delay-3" style={{ marginTop: "var(--space-3)" }}>
              {article.readTime} · {article.date}
            </p>
          </div>
        </header>

        {article.hero ? (
          <figure className="article__hero">
            <img src={article.hero} alt="" loading="lazy" />
          </figure>
        ) : null}

        <div className="container container--content">
          <div className="article__body">
            {article.body.map((p: string, i: number) => (
              <p key={i} className="reveal">{p}</p>
            ))}
          </div>

          <footer className="article__footer">
            <Link to="/journal" className="link">← All entries</Link>
          </footer>
        </div>
      </article>
    </SiteChrome>
  );
}