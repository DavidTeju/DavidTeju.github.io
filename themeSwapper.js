window.onload = onPageLoad();

function onPageLoad() {
	const pageTheme = document.getElementById("page-color");
	if (!sessionStorage.getItem("runOnce")) {
		sessionStorage.setItem("isColored", true);
		sessionStorage.setItem("runOnce", true);
	}

	if (sessionStorage.getItem("isColored")) {
		document.getElementById("color-switch").checked = true;
	} else {
		pageTheme.setAttribute("href", "/styling/dark.css");
		console.log("In else");
	}
}
function swapThemeStyleSheet() {
	const pageTheme = document.getElementById("page-color");
	if (sessionStorage.getItem("isColored")) {
		pageTheme.setAttribute("href", "/styling/dark.css");
		sessionStorage.setItem("isColored", "");
	} else {
		pageTheme.setAttribute("href", "/styling/colorful.css");
		sessionStorage.setItem("isColored", true);
	}
}
