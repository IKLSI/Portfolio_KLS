// Lorsque l'élément est visible, ajoute la classe "visible" à l'élément

function observeElements() {
	const elements = document.querySelectorAll('.fade-in');
	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	});

	elements.forEach(element => {
		observer.observe(element);
	});
}

observeElements();