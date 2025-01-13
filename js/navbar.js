const navbar = document.querySelector(".navbar");
const mainElement = document.querySelector("main");
let lastScrollY = window.scrollY;

navbar.style.transition = "transform .5s ease";

window.addEventListener("load", () => {
    navbar.style.transform = "translateY(0px)";
    mainElement.style.transform = "translateY(98px)"
});

window.addEventListener("resize", () => {
    if (document.documentElement.clientWidth < 992) {
        navbar.style.transform = "translateY(0px)";
        mainElement.style.transform = "translateY(98px)";
    }
});

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (document.documentElement.clientWidth > 991) {
        if (currentScrollY > lastScrollY) {
            navbar.style.transform = "translateY(-98px)";
        } else if (currentScrollY < lastScrollY) {
            navbar.style.transform = "translateY(0px)";
        }
    } else {
        navbar.style.transform = "translateY(0px)";
    }

    lastScrollY = currentScrollY;
});

function IsOnTopOfPage() {
    return window.scrollY === 0;
}
