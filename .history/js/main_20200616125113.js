"use strict";

let burger = document.querySelector("header .mobile img");
let menu = document.querySelector("header nav");
burger.onclick = function () {
	console.log(burger.style.display);
	console.log(menu.style.display);
	if (menu.style.display == "none" || menu.style.display == "") {
		menu.style.margin = "50px";
		menu.style.display = "block";
	}
	else {
		menu.style.display = "none";
		menu.style.margin = "0px";
	}
}

window.onresize = function (event) {
	console.log(menu.style.display);
	if (document.documentElement.offsetWidth > 650 + "px" && menu.style.display == "none") {
		// console.log(menu.style.display);
		menu.style.margin = "50px";
		menu.style.display = "block";
	}
}
