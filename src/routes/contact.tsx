import { createFileRoute } from "@tanstack/react-router";
import { SiteChrome, PageHero, pageScripts } from "@/components/site/SiteChrome";
import { useRef, useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Oak & Echo" },
      { name: "description", content: "Begin the conversation about your ceremony. We reply to every message personally within one business day." },
      { property: "og:title", content: "Contact — Oak & Echo" },
      { property: "og:description", content: "Begin the conversation about your ceremony." },
      { property: "og:url", content: "https://oakandechoaudio.com/contact" },
      { property: "og:image", content: "https://oakandechoaudio.com/assets/images/contact-still.jpg" },
      { name: "twitter:image", content: "https://oakandechoaudio.com/assets/images/contact-still.jpg" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: pageScripts,
  }),
});

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Minimum time (ms) that must pass between the form rendering and being
// submitted. Real visitors take at least a few seconds to fill this out;
// bots that submit instantly get silently rejected in handleSubmit below.
const MIN_SUBMIT_TIME_MS = 2000;

type FieldErrors = {
  name?: string;
  email?: string;
};

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const navigate = useNavigate();
  const mountedAt = useRef<number>(Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);

    // ---- Honeypot + timing spam check ----
    // "company" is a hidden field real visitors never see or fill in.
    // If it has a value, or the form was submitted unrealistically fast,
    // treat this as a bot: pretend it succeeded (so the bot learns
    // nothing) but never touch the database.
    const honeypot = String(fd.get("company") ?? "").trim();
    const submittedTooFast = Date.now() - mountedAt.current < MIN_SUBMIT_TIME_MS;
    if (honeypot !== "" || submittedTooFast) {
      setStatus("success");
      form.reset();
      navigate({ to: "/thank-you" });
      return;
    }

    // ---- Client-side validation ----
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const nextFieldErrors: FieldErrors = {};

    if (name.length < 1) {
      nextFieldErrors.name = "Please enter your name.";
    } else if (name.length > 200) {
      nextFieldErrors.name = "That name is too long.";
    }

    if (email.length < 3) {
      nextFieldErrors.email = "Please enter your email.";
    } else if (!EMAIL_PATTERN.test(email)) {
      nextFieldErrors.email = "Please enter a valid email address.";
    }

    if (nextFieldErrors.name || nextFieldErrors.email) {
      setFieldErrors(nextFieldErrors);
      setStatus("error");
      setErrorMsg("Please fix the highlighted field(s) below and try again.");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setErrorMsg("");

    const guestsRaw = String(fd.get("guests") ?? "").trim();
    const dateRaw = String(fd.get("date") ?? "").trim();
    const payload = {
      name,
      partner: String(fd.get("partner") ?? "").trim() || null,
      email,
      ceremony_date: dateRaw || null,
      venue: String(fd.get("venue") ?? "").trim() || null,
      guests: guestsRaw ? Number(guestsRaw) : null,
      message: String(fd.get("message") ?? "").trim() || null,
    };

    const { error } = await supabase.from("inquiries").insert(payload);
    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please email hello@oakandechoaudio.com directly.");
      return;
    }
    setStatus("success");
    form.reset();
    navigate({ to: "/thank-you" });
  }

  return (
    <SiteChrome>
      <PageHero
        eyebrow="Contact"
        title="Tell us about"
        italic="your day."
        lede="A few details are all we need to begin. We reply personally, within one business day."
      />

      <section className="section section--lg bg-white">
        <div className="container contact__grid">
          <div className="contact__aside">
            <figure className="contact__figure reveal">
              <img src="/assets/images/contact-still.jpg" alt="An open leather journal, fountain pen, oak leaves, and a small brass bell on cream linen" width={1536} height={1920} loading="lazy" />
            </figure>
            <div className="contact__details">
              <p className="eyebrow">Studio</p>
              <p className="contact__line">Youngstown, Ohio</p>
              <p className="contact__line">Serving the Midwest &amp; beyond</p>
              <p className="eyebrow" style={{ marginTop: "var(--space-32)" }}>Direct</p>
              <p className="contact__line">
                <a className="link" href="mailto:hello@oakandechoaudio.com">hello@oakandechoaudio.com</a>
              </p>
              <p className="contact__line">
                <a className="link" href="tel:+13302778440">+1 (330) 277-8440</a>
              </p>
              <p className="eyebrow" style={{ marginTop: "var(--space-32)" }}>Hours</p>
              <p className="contact__line">Mon – Fri, 9 – 5 ET</p>
              <p className="contact__line">Weekends reserved for weddings</p>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {/* Honeypot field — visually hidden from real visitors via CSS
                (see .field--honeypot in components.css), left unlabeled
                and out of tab order so screen reader / keyboard users
                never encounter it. Bots that fill every field will
                populate this and get silently rejected above. */}
            <div className="field field--honeypot" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="field reveal">
              <label className="field__label" htmlFor="name">Your Name</label>
              <input
                className="field__input"
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                aria-invalid={Boolean(fieldErrors.name)}
                aria-describedby={fieldErrors.name ? "name-error" : undefined}
              />
              {fieldErrors.name ? (
                <p className="field__error" id="name-error" role="alert">{fieldErrors.name}</p>
              ) : null}
            </div>
            <div className="field reveal">
              <label className="field__label" htmlFor="partner">Partner's Name</label>
              <input className="field__input" id="partner" name="partner" type="text" />
            </div>
            <div className="field reveal">
              <label className="field__label" htmlFor="email">Email</label>
              <input
                className="field__input"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
              {fieldErrors.email ? (
                <p className="field__error" id="email-error" role="alert">{fieldErrors.email}</p>
              ) : null}
            </div>
            <div className="field reveal">
              <label className="field__label" htmlFor="date">Ceremony Date</label>
              <input className="field__input" id="date" name="date" type="date" />
            </div>
            <div className="field reveal">
              <label className="field__label" htmlFor="venue">Venue &amp; Location</label>
              <input className="field__input" id="venue" name="venue" type="text" />
            </div>
            <div className="field reveal">
              <label className="field__label" htmlFor="guests">Approximate Guest Count</label>
              <input className="field__input" id="guests" name="guests" type="number" min={0} />
            </div>
            <div className="field field--full reveal">
              <label className="field__label" htmlFor="message">A Little About Your Ceremony</label>
              <textarea className="field__input" id="message" name="message" rows={6} placeholder="Indoor or outdoor, readings, musicians, any concerns about acoustics…" />
            </div>
            <div className="field field--full contact__submit reveal">
              <button type="submit" className="btn btn--primary" disabled={status === "submitting"}>
                {status === "submitting" ? "Sending…" : "Begin the Conversation"}
                <span className="btn__arrow" aria-hidden="true">→</span>
              </button>
              {status === "success" ? (
                <p className="caption contact__disclaimer" role="status">
                  Thank you. Your message has arrived — we will reply personally within one business day.
                </p>
              ) : status === "error" ? (
                <p className="caption contact__disclaimer" role="alert" style={{ color: "var(--color-forest)" }}>
                  {errorMsg}
                </p>
              ) : (
                <p className="caption contact__disclaimer">
                  We keep every inquiry private. No mailing lists, no follow-ups you did not ask for.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </SiteChrome>
  );
}
