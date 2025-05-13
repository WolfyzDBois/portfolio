// scripts/script.js

// Thème sombre permanent — aucune bascule de thème nécessaire
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  html.classList.add("dark-mode");
});


document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");

  if (toggleBtn && menu) {
    toggleBtn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
});
