// Dark/light theme toggle that is remembered across all pages
const themeBtn = document.getElementById("themeBtn");

function applyTheme(theme) {
    if (theme === "light") {
        document.body.classList.add("light");
        themeBtn.textContent = "Dark Mode";
    } else {
        document.body.classList.remove("light");
        themeBtn.textContent = "Light Mode";
    }
}

let savedTheme = "dark";
try {
    savedTheme = localStorage.getItem("theme") || "dark";
} catch (e) {}

applyTheme(savedTheme);

themeBtn.addEventListener("click", () => {
    const next = document.body.classList.contains("light") ? "dark" : "light";
    applyTheme(next);
    try {
        localStorage.setItem("theme", next);
    } catch (e) {}
});
const btn = document.getElementById("themeBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "Dark Mode" : "Light Mode";
});
