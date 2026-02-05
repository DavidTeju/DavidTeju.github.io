function stretchMain() {
    const main = document.querySelector("#main") as HTMLElement;
    let toStretch = document.querySelector("#front") as HTMLElement;

    toStretch.style.minHeight = `calc(100vh - ${
        getComputedStyle(main).marginTop
    } - ${getComputedStyle(toStretch).marginBottom})`;
}

function scrollToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

function onScroll() {
    let sum: number;

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

function changeScrollButton(shouldHide: boolean) {
    if (shouldHide) {
        scrollButton.classList.remove("visible");
        scrollButton.setAttribute("disabled", "");
    } else {
        scrollButton.classList.add("visible");
        if (scrollButton.attributes.getNamedItem("disabled"))
            scrollButton.attributes.removeNamedItem("disabled");
    }
}

stretchMain();

const scrollButton: HTMLElement = document.querySelector("#scroll-to-top")!;
scrollButton.addEventListener("click", scrollToTop);

let sections = Array.from(
    document.querySelectorAll("main>section").values()
).map((section) => section as HTMLElement);

onScroll();

window.addEventListener("scroll", onScroll);
