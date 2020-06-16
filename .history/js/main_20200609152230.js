var burger = document.querySelector("header .mobile img");
var menu = document.querySelector("@media header nav");
// var i = 0;
burger.onclick = function () {
	if (menu.style.display == "none") { menu.style.display = "block"; }
	// else if (menu.style.display == "block" && i == 1) { menu.style.display = "none"; i = 0; }
}
