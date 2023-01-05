"use strict";
function loadThemeCookie(mySwitch) {
    if (sessionStorage.getItem("isDark") == null ||
        sessionStorage.getItem("isDark") == "false") {
        sessionStorage.setItem("isDark", "false");
    }
    else {
        mySwitch.checked = false;
        document.documentElement.className = "dark-theme";
    }
}
function pushFooter() {
    var _a;
    const footer = document.getElementById("footer");
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    const headerHeight = header !== null ? getComputedStyle(header).height : 0;
    const footerHeight = footer !== null ? (_a = getComputedStyle(footer)) === null || _a === void 0 ? void 0 : _a.height : 0;
    main.style.minHeight =
        "calc" +
            "(100vh - 2vh - 64px - " +
            headerHeight +
            " - " +
            footerHeight +
            ")";
    //-2vh -64px to account for margins
}
function swapThemeStyleSheet() {
    // noinspection EqualityComparisonWithCoercionJS
    if (sessionStorage.getItem("isDark") == "false") {
        document.documentElement.className = "dark-theme";
        sessionStorage.setItem("isDark", "true");
    }
    else {
        document.documentElement.className = "light-theme";
        sessionStorage.setItem("isDark", "false");
    }
}
/**
 * To help maintain themes for pages that still link to old stylesheets
 */
function updateStyleSheet() {
    var _a, _b;
    document.documentElement.className = "light-theme";
    const styleLink = (_a = document.getElementById("page-color")) === null || _a === void 0 ? void 0 : _a.getAttribute("href");
    if ((styleLink === null || styleLink === void 0 ? void 0 : styleLink.includes("dark.css")) || (styleLink === null || styleLink === void 0 ? void 0 : styleLink.includes("colorful.css"))) {
        (_b = document
            .getElementById("page-color")) === null || _b === void 0 ? void 0 : _b.setAttribute("href", "https://davidteju.dev/styling/theme.css");
    }
}
function elementOuterHeight(el) {
    const style = getComputedStyle(el);
    return (el.getBoundingClientRect().height +
        parseFloat(style.marginTop) +
        parseFloat(style.marginBottom));
}
pushFooter();
updateStyleSheet();
let themeSwitch = document.getElementById("color-switch");
loadThemeCookie(themeSwitch);
themeSwitch.addEventListener("click", swapThemeStyleSheet);
