forOutDatedPages();
onPageLoad();

function onPageLoad() {
	if (
		sessionStorage.getItem("isDark") == null ||
		sessionStorage.getItem("isDark") == "false"
	) {
		sessionStorage.setItem("isDark", "false");
	} else {
		document.getElementById("color-switch").checked = false;
		document.documentElement.className = "dark-theme";
	}

	pushFooter();
}

function swapThemeStyleSheet() {
	if (sessionStorage.getItem("isDark") == "false") {
		document.documentElement.className = "dark-theme";
		sessionStorage.setItem("isDark", "true");
	} else {
		document.documentElement.className = "light-theme";
		sessionStorage.setItem("isDark", "false");
	}
}

function pushFooter() {
	const footer = document.getElementById("footer");
	const main = document.getElementById("main");
	const header = document.getElementById("header");

	const headerHeight = getComputedStyle(header).height;
	const footerHeight = getComputedStyle(footer).height;

	main.style.minHeight =
		"calc" +
		"(100vh - 2vh - 64px - " +
		headerHeight +
		" - " +
		footerHeight +
		")";
	//-2vh -64px to account for margins
}

/**
 * To help maintain themes for pages that still link to old stylesheets
 */
function forOutDatedPages() {
	document.documentElement.className = "light-theme";

	const styleLink = document.getElementById("page-color").getAttribute("href");
	if (styleLink.includes("dark.css") || styleLink.includes("colorful.css")) {
		document
			.getElementById("page-color")
			.setAttribute("href", "https://davidteju.dev/styling/theme.css");
	}
}
