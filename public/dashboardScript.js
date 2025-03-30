const menuBtn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");
const mainContent = document.getElementById("main-content");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  mainContent.classList.toggle("close");
});

// For Mobile View Toggle
menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
