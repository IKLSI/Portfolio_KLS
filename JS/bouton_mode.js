// Script permettant de changer les couleurs du site selon le mode choisi par l'utilisateur

const modeToggle = document.getElementById('boutonMode');
const page = document.getElementById('fullpage');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const buttonPresentation = document.querySelector('.buttons_Presentation');

modeToggle.addEventListener('change', () => {
	page.classList.toggle('light-mode');

	isLightMode = !isLightMode;
	scene.background = new THREE.Color(isLightMode ? 0xffffff : 0x212121);

	if (page.classList.contains('light-mode')) {
		header.classList.add('light-header');
		footer.classList.add('light-footer');
		buttonPresentation.classList.add('active-button');
		console.log('light mode');
	} else {
		header.classList.remove('light-header');
		footer.classList.remove('light-footer');
		buttonPresentation.classList.remove('active-button');
	}

	if (modeToggle.checked) {
        spheres.material.color.setHex(0x000000);
    } else {
        spheres.material.color.setHex(0xffffff);
    }
});