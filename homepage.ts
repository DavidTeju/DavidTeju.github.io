function stretchMain() {
	const main = document.querySelector("#main") as HTMLElement;
	let toStretch = document.querySelector("#front") as HTMLElement;

	toStretch.style.minHeight = `calc(100vh - ${
		getComputedStyle(main).marginTop
	} - ${getComputedStyle(toStretch).marginBottom})`;
}

function onScroll() {
    let sum: number;

    let cumSizes = sections
        .map((element) => element)
        .map((element) => elementOuterHeight(element))
        .map(((sum = 0), (n) => (sum += n)))
        .map((mem) => mem - window.innerHeight / 3);

    let highlightShadow = "0 0 5px 5px #1b2027";
    let focused = 0;

    for (let i = 0; i < cumSizes.length; i++) {
        if (document.documentElement.scrollTop < cumSizes[i]) {
            focused = i;
            break;
        }
    }
    sections.forEach((section) => (section.style.boxShadow = ""));

    sections[focused].style.boxShadow = highlightShadow;
}


stretchMain();

let sections = Array.from(
    document.querySelectorAll("main>section").values()
).map((section) => section as HTMLElement);

onScroll();

window.addEventListener("scroll", onScroll);