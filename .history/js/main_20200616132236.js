"use strict";

let burger = document.querySelector("header .mobile img");
let menu = document.querySelector("header nav");
let menuFloat = document.querySelector("header nav a");
let body = document.querySelector("body");
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
	console.log(menuFloat.style.float);
	if (body.offsetWidth > 650 && menuFloat.style.float != "none" && burger.style.display == "none") {
		console.log(body.offsetWidth);
		menu.style.margin = "0px";
		menu.style.display = "block";
	}
}
