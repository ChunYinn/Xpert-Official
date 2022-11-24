import "./assets/app.css";
import "./src/js/faqs.js";

let switchers = document.querySelectorAll(".switcher");

if (localStorage.getItem("color-theme") === "dark" || (!("color-theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
} else {
    document.documentElement.classList.remove("dark");
}

switchers.forEach((switcher) => {
    switcher.addEventListener("click", function () {
        if (localStorage.getItem("color-theme")) {
            if (localStorage.getItem("color-theme") === "light") {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            } else {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            }
        } else {
            if (document.documentElement.classList.contains("dark")) {
                document.documentElement.classList.remove("dark");
                localStorage.setItem("color-theme", "light");
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("color-theme", "dark");
            }
        }
    });
});

let tabs = document.querySelectorAll(".tab");
let indicator = document.querySelector(".tab-indicator");
let panels = document.querySelectorAll(".panel");
let previews = document.querySelectorAll(".panel-preview");

indicator.style.width = tabs[0].getBoundingClientRect().width + "px";
indicator.style.left = tabs[0].getBoundingClientRect().left - tabs[0].parentElement.getBoundingClientRect().left + "px";

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        let tabTarget = tab.getAttribute("aria-controls");

        indicator.style.width = tab.getBoundingClientRect().width + "px";
        indicator.style.left = tab.getBoundingClientRect().left - tab.parentElement.getBoundingClientRect().left + "px";

        panels.forEach((panel) => {
            let panelId = panel.getAttribute("id");
            if (tabTarget === panelId) {
                panel.classList.remove("invisible", "opacity-0", "scale-90");
                panel.classList.add("visible", "opacity-100", "scale-100");
            } else {
                panel.classList.add("invisible", "opacity-0", "scale-90");
                panel.classList.remove("visible", "opacity-100", "scale-100");
            }

            previews.forEach((preview) => {
                let prevTarget = preview.getAttribute("data-target");

                if (tabTarget === prevTarget) {
                    preview.classList.replace("translate-y-[100%]", "translate-y-0");
                    preview.classList.replace("scale-75", "scale-100");
                    preview.classList.replace("opacity-50", "opacity-100");
                    preview.classList.replace("z-0", "z-10");
                } else {
                    preview.classList.replace("scale-100", "scale-75");
                    preview.classList.replace("opacity-100", "opacity-50");
                    preview.classList.replace("z-10", "z-0");

                    setTimeout(() => {
                        preview.classList.replace("translate-y-0", "translate-y-[100%]");
                    }, 300);
                    clearTimeout();
                }
            });
        });
    });
});
