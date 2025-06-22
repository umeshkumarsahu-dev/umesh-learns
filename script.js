const htmlTag = document.documentElement;
const toggleBtn = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  htmlTag.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

toggleBtn.addEventListener("click", () => {
  const current = htmlTag.getAttribute("data-theme");
  const newTheme = current === "light" ? "dark" : "light";
  htmlTag.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  toggleBtn.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
});
