/* forms.js — Progressive-enhancement form handling */
export function initForms() {
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = "Thank you. We will be in touch shortly.";
      }
      form.reset();
    });
  });
}
