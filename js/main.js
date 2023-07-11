"use strict"

// Mobile Menu Icon
let menu = document.querySelector(".mobile-menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
   navbar.classList.toggle("open-menu");
   menu.classList.toggle("move");
};
window.onscroll = () => {
   navbar.classList.remove("open-menu");
   menu.classList.remove("move");
};

// // Scroll to Top
const scrollTop = document.querySelector(".scroll-top");
window.addEventListener("scroll", () => {
   scrollTop.classList.toggle("scroll-active", window.scrollY > 600);
});

// Toggle light/dark theme
const checkbox = document.getElementById("checkbox");
// Function to set the theme
const setTheme = (theme) => {
   const body = document.body;
   body.setAttribute("data-theme", theme);
   localStorage.setItem("theme", theme);
};

// Function to toggle the theme
const toggleTheme = () => {
   const body = document.body;
   const currentTheme = body.getAttribute("data-theme");
   const newTheme = currentTheme === "light" ? "dark" : "light";
   setTheme(newTheme);
};

// Event listener for the toggle switch
checkbox.addEventListener("change", toggleTheme);

// Apply the stored theme when the page loads
window.addEventListener("load", () => {
   const savedTheme = localStorage.getItem("theme");
   if (savedTheme) {
      setTheme(savedTheme);
      checkbox.checked = savedTheme === "dark";
   }
});

// Date at page bottom
function loadDate() {
   const display = document.getElementById("today-date");
   const year = new Date().getFullYear();
   display.innerHTML = year;
}
window.onload = () => {
   loadDate();
};