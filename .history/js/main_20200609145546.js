var burger = document.querySelector("header .mobile img");
var menu = document.querySelector("header nav");
burger.onclick = function () {
	if (burger.style.display == "block") {
		if (menu.style.display == "none") { menu.style.display = "block"; }
		else menu.style.display = "none";
	}
}