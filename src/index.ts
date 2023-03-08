function loadThemeCookie(mySwitch: HTMLInputElement) {

    if (
        localStorage.getItem("isLight")
    ) {
        document.documentElement.className = "light-theme";
    } else {
        mySwitch.checked = false;
        document.documentElement.className = "dark-theme";
    }
}

function pushFooter() {
    const footer = document.getElementById("footer") as Element;
    const main = document.getElementById("main") as HTMLElement;
    const header = document.getElementById("header") as Element;

    const headerHeight = header !== null ? getComputedStyle(header).height : 0;
    const footerHeight = footer !== null ? getComputedStyle(footer)?.height : 0;

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
    if (localStorage.getItem("isLight")) {
        document.documentElement.className = "dark-theme";
        localStorage.setItem("isLight", "");
    } else {
        document.documentElement.className = "light-theme";
        localStorage.setItem("isLight", "true");
    }

}

/**
 * To help maintain themes for pages that still link to old stylesheets
 */
function updateStyleSheet() {
    document.documentElement.className = "light-theme";

    const styleTag = document.getElementById("page-color");

    if (!styleTag) return;

    const styleLink = styleTag.getAttribute("href")!;

    if (styleLink.includes("dark.css") || styleLink.includes("colorful.css")) {
        styleTag.setAttribute("href", "/styling/theme.css");
    }
}

function elementOuterHeight(el: Element) {
    const style = getComputedStyle(el);

    return (
        el.getBoundingClientRect().height +
        parseFloat(style.marginTop) +
        parseFloat(style.marginBottom)
    );
}

pushFooter();

updateStyleSheet();

let themeSwitch = document.getElementById("color-switch") as HTMLInputElement;
loadThemeCookie(themeSwitch);
themeSwitch.addEventListener("click", swapThemeStyleSheet);
