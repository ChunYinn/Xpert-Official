import "./assets/app.css";
import "./src/js/faqs.js";
import "./src/js/theme.js";
import "./src/js/solutions.js";

const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector("#navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("navbar-active");
});
