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


function elementOuterHeight(el: Element) {
    const style = getComputedStyle(el);

    return (
        el.getBoundingClientRect().height +
        parseFloat(style.marginTop) +
        parseFloat(style.marginBottom)
    );
}

pushFooter();

let themeSwitch = document.getElementById("color-switch") as HTMLInputElement;
loadThemeCookie(themeSwitch);
themeSwitch.addEventListener("click", swapThemeStyleSheet);

// Easter egg: Set rat animation duration based on screen width
// Uses logarithmic scaling so wide screens don't have 10+ second runs
function setupRatAnimation() {
    const rat = document.getElementById("trail-rat");
    if (!rat) return;

    const screenWidth = window.innerWidth + 120;
    // Logarithmic duration: ~2s at 500px, ~3s at 1500px, ~4s at 3000px
    const duration = 1 + Math.log2(screenWidth / 300) * 0.9;
    const delay = 3; // seconds before rat appears

    rat.style.animationDuration = `${duration}s, 0.1s, ${duration}s`;
    rat.style.animationDelay = `${delay}s, ${delay}s, ${delay}s`;

    // Start leg/tail animations after delay
    setTimeout(() => {
        rat.classList.add("running");
    }, delay * 1000);
}

setupRatAnimation();
