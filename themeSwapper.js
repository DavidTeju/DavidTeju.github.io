onPageLoad();

function onPageLoad() {
	const pageTheme = document.getElementById("page-color");
	if (
		sessionStorage.getItem("isDark") == null ||
		sessionStorage.getItem("isDark") == "false"
	) {
		sessionStorage.setItem("isDark", "false");
	} else {
		document.getElementById("color-switch").checked = false;
		pageTheme.setAttribute("href", "/styling/dark.css");
	}

	pushFooter();
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

function swapThemeStyleSheet() {
	const pageTheme = document.getElementById("page-color");
	if (sessionStorage.getItem("isDark") == "false") {
		pageTheme.setAttribute("href", "/styling/dark.css");
		sessionStorage.setItem("isDark", "true");
	} else {
		pageTheme.setAttribute("href", "/styling/colorful.css");
		sessionStorage.setItem("isDark", "false");
	}
}
