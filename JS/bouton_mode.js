const modeToggle = document.getElementById('mode');
const container = document.getElementById('fullpage');

modeToggle.addEventListener('click', () => {
	container.classList.toggle('light-mode');

	const sun = document.querySelector('.soleil');
	const moon = document.querySelector('.lune');

	sun.style.transition = 'all 0.3s';
	moon.style.transition = 'all 0.3s';

	if (container.classList.contains('light-mode')) {
		sun.style.opacity = 1;
		moon.style.opacity = 0;
	} else {
		sun.style.opacity = 0;
		moon.style.opacity = 1;
	}
});