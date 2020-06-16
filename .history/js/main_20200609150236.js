var burger = document.querySelector("#burger");
var menu = document.querySelector("header nav");
burger.onclick = function () {
	{
		if (menu.style.display == "none") { menu.style.display = "block"; }
		else menu.style.display = "none";
	}
}