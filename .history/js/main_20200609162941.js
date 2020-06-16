"use strict";

let burger = document.querySelector("header .mobile img");

// var i = 0;
burger.onclick = function () {
	let menu = document.querySelector("header nav");
	// menu.style.display = "block";
	console.log(menu.style.display);
	if (menu.style.display == "none" || menu.style.display == "") {
		// burger.style.display = "none";
		menu.style.display = "block";
		// burger.style.display = "block";
	}
	else { menu.style.display = "none"; }
}

