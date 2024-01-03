var chargement = false;

const load = gsap.timeline({
	paused: true,
});

load.to("#percent , #bar", {
	duration: 0.2,
	opacity: 0,
	zIndex: -1,
});

load.to(".progress", {
	duration: 0.8,
	width: "0%",
});

load.from(".content", {
	duration: 0.8,
	opacity: 0,
	ease: "Power4.out",
}, "-=.5");

load.from(".content h1", {
	duration: 0.5,
	y: 50,
	skewY: 10,
	opacity: 0,
}, "-=1");

var id, width = 1;

function loading() {
	id = setInterval(frame, 25);
}

function frame() {
	if (width >= 100) {
		clearInterval(id);
		load.play();
		chargement = true;
		enableScroll();
	} else {
		width++;
		document.getElementById("barconfirm").style.width = width + '%';
		document.getElementById("percent").innerHTML = width + '%';
	}
}

window.onload = function () {
	loading();
}

function disableScroll() {
	document.body.style.overflow = 'hidden';
}

function enableScroll() {
	document.body.style.overflow = '';
}

document.addEventListener("DOMContentLoaded", function () {
	disableScroll();
});