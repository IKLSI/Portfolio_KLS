window.addEventListener('scroll', function() {
	var presentationSection = document.getElementById('Presentation');
	var menu = document.querySelector('.Menu');

	if (window.scrollY >= presentationSection.offsetTop) {
		menu.style.background = '#fff';
	} else {
		menu.style.background = 'transparent';
	}
});