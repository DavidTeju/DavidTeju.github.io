onPageLoad();

function onPageLoad() {
	const pageTheme = document.getElementById("page-color");
	if (
		sessionStorage.getItem("isDark") == null ||
		sessionStorage.getItem("isDark") == "false"
	) {
		document.getElementById("color-switch").checked = true;
		sessionStorage.setItem("isDark", "false");
	} else {
		pageTheme.setAttribute("href", "/styling/dark.css");
	}
	console.log("I made it");
	pushFooter();
}

function pushFooter() {
	const footer = document.getElementById("footer");
	const main = document.getElementById("main");
	const header = document.getElementById("header");

	let headerHeight = getComputedStyle(header).height;
	let footerHeight = getComputedStyle(footer).height;

	main.style.minHeight =
		"calc(" + "100vh - 96px - " + headerHeight + " - " + footerHeight + ")";
	//-96px to account for margins
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
