/* ==================== toggle style switcher ==================== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler")
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})


//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/* ==================== theme colors ==================== */
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    })
}

/* ==================== theme light and dark mode ==================== */
/* const dayNight = document.querySelector(".daynight");
const darkMode = dayNight.querySelector(".night");
const night = darkMode.querySelector(".darkmode");
const lightMode = document.querySelector(".day");
dayNight.addEventListener("click", () => {
    // dayNight.querySelector("span").classList.toggle("fa-sun");
    // dayNight.querySelector("span").classList.toggle("fa-moon");
    // dayNight.querySelector("span").classList.toggle(".darkmode");
    // dayNight.querySelector("span").classList.toggle(".lightmode");
    darkMode.querySelector("span").classList.toggle(".darkmode");
    lightMode.querySelector("span").classList.toggle(".lightmode");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        //dayNight.querySelector("i").classList.add("fa-sun");
        //dayNight.querySelector("span.style").classList.removeAttribute("none");
        // dayNight.querySelector("span.style").classList.setAttribute("none", "true");
        //darkMode.removeAttribute("disabled");
        //darkMode.querySelector.removeAttribute("style");
        darkMode.querySelectorAll.add("hidden");
        //darkMode.classList.remove("hidden");
        //dayNight.querySelector(".darkmode").cl
    } else {
        //dayNight.querySelector("i").classList.add("fa-moon");
        //dayNight.querySelector("span.style").classList.removeAttribute("none");
        //dayNight.querySelector("span.style").classList.removeAttribute("none", "true");
        //lightMode.removeAttribute("disabled");
        //lightMode.querySelector.removeAttribute("style");

        lightMode.classList.remove("hidden");
        //darkMode.classList.add("hidden");
    }
}) */


const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    //change the theme of the website
    document.body.classList.toggle('dark');
});