const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    primaryNav.classList.toggle("is-open", !isOpen);
  });

  primaryNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      primaryNav.classList.remove("is-open");
    }
  });
}

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm instanceof HTMLFormElement && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const values = new FormData(contactForm);
    const body = [
      `Name: ${values.get("firstName")} ${values.get("lastName")}`,
      `Email: ${values.get("email")}`,
      `Phone: ${values.get("phone")}`,
      `Interested in: ${values.get("interest")}`,
      `Additional notes: ${values.get("notes") || "None"}`
    ].join("\n");
    const subject = `Military Prime website inquiry: ${values.get("interest")}`;

    formStatus.textContent = "Opening your email app with this message. Review it there and send when you're ready.";
    window.location.href = `mailto:Rebrokercurry@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

const currentYear = document.querySelector("#current-year");
if (currentYear) currentYear.textContent = String(new Date().getFullYear());
