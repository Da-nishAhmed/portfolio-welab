// Smooth scroll
document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.getElementById(btn.dataset.scroll)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Theme toggle (with persistence)
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) root.setAttribute("data-theme", savedTheme);

toggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  const newTheme = current === "light" ? "dark" : "light";
  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Intersection Observer for animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-in").forEach(el => {
  observer.observe(el);
});

// Form handling
document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  document.getElementById("status").textContent = "✅ Sent!";
});