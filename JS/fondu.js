// Applique à tous les éléments de la page la classe CSS "fade-in" qui permet de faire un fondu lors de la première apparition

function addFadeInClassToElements() {
	const elements = document.querySelectorAll('*');

	elements.forEach(element => {
		element.classList.add('fade-in');
	});
}

addFadeInClassToElements();