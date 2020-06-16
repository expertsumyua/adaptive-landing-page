var burger = document.querySelector("header .mobile img");
var menu = document.querySelector("header nav");
var i = 0;
burger.onclick = function () {
	if (menu.style.display == "none" && i == 0) { menu.style.display = "block"; i = 1; }
	// else if (menu.style.display == "block" && i == 1) { menu.style.display = "none"; i = 0; }
}
