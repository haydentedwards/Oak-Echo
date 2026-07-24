/* app.js — Entry point. Wires modules on DOMContentLoaded. */
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
