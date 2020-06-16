var burger = document.querySelector("header .mobile img");
var menu = document.querySelector("header nav");
var i = 0;
burger.onclick = function () {
	if (menu.style.display == "none") { menu.style.display = "block"; i = 1 }
	else if (menu.style.display == "block") { menu.style.display = "none"; }
}
