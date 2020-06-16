"use strict";

let burger = document.querySelector("header .mobile img");
let menu = document.querySelector("header nav");
burger.onclick = function () {
	console.log(burger.style.display);
	console.log(menu.style.display);
	if (menu.style.display == "none" || menu.style.display == "") {
		menu.style.ma
		menu.style.display = "block";
	}
	else { menu.style.display = "none"; }
}

