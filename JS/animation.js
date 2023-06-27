// Attendre que le document soit chargé
document.addEventListener("DOMContentLoaded", function(event) {
	// Obtenir l'élément de défilement
	var scrollingElement = document.getElementById("defilement");
	// Générer les chiffres de 0 à 9 avec style
	var numbers = "";
	numbers += "<span class='message'>B</span>";
	numbers += "<span class='message'>I</span>";
	numbers += "<span class='message'>E</span>";
	numbers += "<span class='message'>N</span>";
	numbers += "<span class='message'>V</span>";
	numbers += "<span class='message'>E</span>";
	numbers += "<span class='message'>N</span>";
	numbers += "<span class='message'>U</span>";
	numbers += "<span class='message'>E</span>";
	// Ajouter les chiffres à l'élément de défilement
	scrollingElement.innerHTML = numbers.repeat(1);
	// Calculer la durée de l'animation en fonction de la largeur de l'élément de défilement
	var animationDuration = Math.ceil(scrollingElement.offsetWidth / 100) + "s";
	// Appliquer l'animation de défilement
	scrollingElement.style.animationName = "scrollingAnimation";
	scrollingElement.style.animationDuration = animationDuration;
	scrollingElement.style.animationTimingFunction = "linear";
	scrollingElement.style.animationIterationCount = "infinite";
	scrollingElement.style.animationDelay = "0s";
});
