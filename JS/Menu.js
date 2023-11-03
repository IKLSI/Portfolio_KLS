// Permet d'afficher le menu grâce à un bouton pour le responsive

const menuToggle = document.querySelector('.btn');
const menuList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
	menuList.classList.toggle('show');
});