// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn?.addEventListener("click", () => {
  const isOpen = mobileNav.classList.toggle("show");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  mobileNav.setAttribute("aria-hidden", String(!isOpen));
});

// Close mobile nav on click
mobileNav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    mobileNav.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
  });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: generate an email draft (no backend)
const form = document.getElementById("contactForm");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name")?.toString().trim();
  const email = data.get("email")?.toString().trim();
  const message = data.get("message")?.toString().trim();

  const subject = encodeURIComponent("Inquiry: CivicForge IoT Pilot / Prototype");
  const body = encodeURIComponent(
`Hi CivicForge Technologies,

My name is ${name}.
My email is ${email}.

Here’s what I’d like to build or monitor:
${message}

Can we schedule a short call to discuss a prototype and success metrics?

Thanks,
${name}`
  );

  const mailto = `mailto:support@civicforge.ca?subject=${subject}&body=${body}`;
  window.location.href = mailto;

});
