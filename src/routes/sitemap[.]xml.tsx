import { createFileRoute } from "@tanstack/react-router";
import { JOURNAL } from "@/content/journal";

const SITE_URL = "https://oakandechoaudio.com";

const ROUTES = [
  "/",
  "/about",
  "/services",
  "/experience",
  "/portfolio",
  "/journal",
  "/faq",
  "/contact",
  ...JOURNAL.map((a) => `/journal/${a.slug}`),
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const today = new Date().toISOString().slice(0, 10);
        const xml =
          `<?xml version="1.0" encoding="UTF-8"?>\n` +
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
          ROUTES.map(
            (r) =>
              `  <url><loc>${SITE_URL}${r}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq></url>`,
          ).join("\n") +
          `\n</urlset>\n`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});