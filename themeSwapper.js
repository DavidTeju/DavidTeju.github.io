window.onload = onPageLoad();

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
