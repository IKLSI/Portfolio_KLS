const slides = document.querySelectorAll('.slide');
const bullets = document.querySelectorAll('.bulle');
let currentSlide = 0;
let interval; // Variable pour stocker l'intervalle de temps

function showSlide(index) {
	slides[currentSlide].classList.remove('active');
	slides[index].classList.add('active');
	bullets[currentSlide].classList.remove('active');
	bullets[index].classList.add('active');
	currentSlide = index;
	restartInterval(); // Réinitialiser l'intervalle de temps lors du changement de diapositive
}

function startInterval() {
	interval = setInterval(() => {
		const nextSlide = (currentSlide + 1) % slides.length;
		showSlide(nextSlide);
	}, 5000);
}

function restartInterval() {
	clearInterval(interval); // Effacer l'intervalle de temps actuel
	startInterval(); // Démarrer un nouvel intervalle de temps
}

startInterval(); // Démarrer l'intervalle de temps initial
showSlide(currentSlide);