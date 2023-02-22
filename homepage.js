"use strict";
function stretchMain() {
    const main = document.querySelector("#main");
    let toStretch = document.querySelector("#front");
    toStretch.style.minHeight = `calc(100vh - ${getComputedStyle(main).marginTop} - ${getComputedStyle(toStretch).marginBottom})`;
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
function onScroll() {
    let sum;
    let cumSizes = sections
        .map((element) => element)
        .map((element) => elementOuterHeight(element))
        .map(((sum = 0), (n) => (sum += n)))
        .map((mem) => mem - window.innerHeight / 3);
    let focused = 0;
    for (let i = 0; i < cumSizes.length; i++) {
        if (document.documentElement.scrollTop < cumSizes[i]) {
            focused = i;
            break;
        }
    }
    changeScrollButton(focused == 0);
    sections.forEach((section) => section.classList.remove("selected"));
    sections[focused].classList.add("selected");
}
function changeScrollButton(shouldEnable) {
    if (shouldEnable) {
        scrollButton.style.opacity = "0";
        scrollButton.setAttribute("disabled", "");
    }
    else {
        scrollButton.style.opacity = "1";
        if (scrollButton.attributes.getNamedItem("disabled"))
            scrollButton.attributes.removeNamedItem("disabled");
    }
}
stretchMain();
const scrollButton = document.querySelector("#scroll-to-top");
scrollButton.addEventListener("click", scrollToTop);
let sections = Array.from(document.querySelectorAll("main>section").values()).map((section) => section);
onScroll();
window.addEventListener("scroll", onScroll);
