const animationSpeed = 2000;
const handElement = document.querySelector('.main');

function startWaveAnimation() {
	handElement.style.animationDuration = animationSpeed + 'ms';
}

startWaveAnimation();