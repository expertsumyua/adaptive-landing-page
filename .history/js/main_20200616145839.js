"use strict";

let burger = document.querySelector("header .mobile img");
let menu = document.querySelector("header nav");
let burgerShow = false;
let menuShow = true;
let body = document.querySelector("body");
burger.onclick = function () {

	if (menu.style.display == "none" || menu.style.display == "") {
		// if (!menuShow) {

		// menuShow = true;
		menu.style.margin = "50px";
		menu.style.display = "block";
	}
	else {
		// menuShow = false;
		menu.style.display = "none";
		menu.style.margin = "0px";
	}
}

window.onresize = function (event) {
	// if (menu.style.display == "none" || menu.style.display == "") { menuShow = false; }
	// else { menuShow = true; }

	if (body.offsetWidth <= 650) {
		burgerShow = true;
		menu.style.margin = "50px";
	} else {
		burgerShow = false;
		menu.style.margin = "0px";
	}

	if (body.offsetWidth > 650 && !burgerShow) { menu.style.display = "block"; }
	else { menu.style.display = "none"; }
}

