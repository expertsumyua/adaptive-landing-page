"use strict";

let burger = document.querySelector("header .mobile img");
let menu = document.querySelector("header nav");
// let menuFloat = document.querySelector("header nav a");
let menuShow = true;
let body = document.querySelector("body");
burger.onclick = function () {

	// console.log(burger.style.display);
	// console.log(menu.style.display);
	// if (menu.style.display == "none" || menu.style.display == "") {
	if (!menuShow) {
		burgerShow = true;
		menu.style.margin = "50px";
		menu.style.display = "block";
	}
	else {
		menuShow = false;
		menu.style.display = "none";
		menu.style.margin = "0px";
	}
}

window.onresize = function (event) {
	// console.dir(burger.style.display);
	if (body.offsetWidth <= 650) {
		if (burger.style.display == "none") {
			burger.style.display = "block";
			menu.style.margin = "50px";
		}

	} else {
		burger.style.display = "none";
		menu.style.margin = "0px";
	}
	if ((body.offsetWidth > 650)) {
		// console.log(body.offsetWidth);
		// menu.style.margin = "0px";
		menu.style.display = "block";

	}
}
