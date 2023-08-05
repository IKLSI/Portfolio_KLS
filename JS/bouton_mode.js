// Permet de changer le mode de la page (clair/sombre) en cliquant sur le bouton situé sur la partie supérieure droite du header

const modeToggle = document.getElementById('mode');
const container = document.getElementById('fullpage');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const buttonPresentation = document.querySelector('.buttons_Presentation');

modeToggle.addEventListener('click', () => {
	container.classList.toggle('light-mode');

	const sun = document.querySelector('.soleil');
	const moon = document.querySelector('.lune');

	sun.style.transition = 'all 0.3s';
	moon.style.transition = 'all 0.3s';

	if (container.classList.contains('light-mode')) {
		sun.style.opacity = 1;
		moon.style.opacity = 0;
		header.classList.add('light-header');
		footer.classList.add('light-footer');
		buttonPresentation.classList.add('active-button');
	} else {
		sun.style.opacity = 0;
		moon.style.opacity = 1;
		header.classList.remove('light-header');
		footer.classList.remove('light-footer');
		buttonPresentation.classList.remove('active-button');
	}
});
