document.addEventListener('DOMContentLoaded', function() {
	const buttons = document.querySelectorAll('.serieBouton button');

	buttons.forEach(button => {
		button.addEventListener('click', function() {
			// Réinitialise l'état en enlevant la classe "active" de tous les boutons
			buttons.forEach(btn => btn.classList.remove('active'));
			// Ajoute la classe "active" au bouton cliqué
			this.classList.add('active');
		});
	});
});