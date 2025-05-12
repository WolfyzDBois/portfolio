// scripts/script.js - Gestion du thème clair/sombre

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleBtn = document.getElementById("toggle-theme");
  
    const setTheme = (theme) => {
      if (theme === "light") {
        body.classList.add("light");
        localStorage.setItem("theme", "light");
      } else {
        body.classList.remove("light");
        localStorage.setItem("theme", "dark");
      }
    };
  
    // Appliquer le thème sauvegardé
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
  
    toggleBtn.addEventListener("click", () => {
      const isLight = body.classList.contains("light");
      setTheme(isLight ? "dark" : "light");
    });
  });
  