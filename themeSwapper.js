window.onload = onPageLoad();

function onPageLoad() {
	const pageTheme = document.getElementById("page-color");
	if (sessionStorage.getItem("isDark") == "false") {
		document.getElementById("color-switch").checked = true;
	} else {
		pageTheme.setAttribute("href", "/styling/dark.css");
		console.log("In else");
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
