//responsive navbar

const myFunction = () => {
	let navbar = document.getElementById("navbarid");
	if (navbar.className === "navbar") {
		navbar.className += " responsive";
	} else {
		navbar.className = "navbar";
	}
}

//hiding navbar

let prevScrollpos = window.scrollY;

window.onscroll = () => {
	let currentScrollpos = window.scrollY;
	if (prevScrollpos > currentScrollpos) {
		document.getElementById("navbarid").style.top = "0";
	} else {
		document.getElementById("navbarid").style.top = "-100px";
	}
	prevScrollpos = currentScrollpos;
}

// hiding/appearing logo