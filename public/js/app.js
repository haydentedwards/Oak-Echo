/* app.js — Entry point. Wires modules on DOMContentLoaded, and exposes
   `init` on window so the SPA can re-run it after client-side route
   changes (which never fire a fresh DOMContentLoaded event). */
import { initNavigation } from "./navigation.js";
import { initReveal } from "./reveal.js";
import { initForms } from "./forms.js";

function init() {
  initNavigation();
  initReveal();
  initForms();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

window.__oakEchoInit = init;
