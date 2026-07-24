import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, pageScripts } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/thank-you")({
  component: ThankYouPage,
  head: () => ({
    meta: [
      { title: "Thank you — Oak & Echo" },
      { name: "description", content: "Your inquiry has arrived. We will reply personally within one business day." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
    scripts: pageScripts,
  }),
});

function ThankYouPage() {
  return (
    <SiteChrome>
      <section className="thanks bg-cream--paper">
        <div className="container thanks__inner">
          <p className="chapter__eyebrow reveal" style={{ justifyContent: "center" }}>
            Your message has arrived
          </p>
          <h1 className="thanks__title reveal reveal--delay-1">
            Thank you.
            <br />
            <em className="display--italic">We'll be in touch soon.</em>
          </h1>
          <p className="thanks__lede reveal reveal--delay-2">
            We read every inquiry personally. You'll hear back from us within one business
            day — usually the same afternoon. In the meantime, we've put together something
            worth reading.
          </p>

          <div className="thanks__divider" aria-hidden="true" />

          <div className="thanks__actions reveal">
            <a
              href="/downloads/oak-papers-essay-01-why-ceremony-audio-matters.pdf"
              className="btn btn--outline"
              download
            >
              Download Oak Papers — Essay Nº 01
              <span className="btn__arrow" aria-hidden="true">↓</span>
            </a>
            <p className="caption" style={{ marginTop: "var(--space-3)", maxWidth: "36ch" }}>
              "Why Ceremony Audio Matters More Than Couples Expect" — a short essay on the
              part of the day almost no one plans for.
            </p>
          </div>

          <div style={{ marginTop: "var(--space-7)" }}>
            <a href="/" className="link">← Return home</a>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
