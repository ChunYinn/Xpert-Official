// Ensure the document always uses the light theme
document.documentElement.classList.remove("dark");

// Clear any stored theme preference from localStorage to prevent interference
localStorage.removeItem("color-theme");

// Get all switchers (if necessary, you can disable them)
let switchers = document.querySelectorAll(".switcher");

// Optionally, disable the switchers so users cannot interact with them (optional step)
switchers.forEach((switcher) => {
    switcher.setAttribute("disabled", "true"); // This makes the switchers non-functional
});
