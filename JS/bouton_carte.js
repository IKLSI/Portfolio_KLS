$(document).ready(function() {
	$(".card").hide();

	// Afficher les cartes correspondant à la zone "Personnel" par défaut
	$(".card.personnel").show();

	// Lorsque le bouton "Personnel" est cliqué afficher les cartes correspondant à la zone "Personnel"
	$("#personnel").click(function() {
		$(".card").hide();
		$(".card.personnel").show();
	});

	// Lorsque le bouton "Langage" est cliqué afficher les cartes correspondant à la zone "Langage"
	$("#langage").click(function() {
		$(".card").hide();
		$(".card.langage").show();
	});

	// Lorsque le bouton "Centre" est cliqué afficher les cartes correspondant à la zone "Centre d'intérêt"
	$("#centre").click(function() {
		$(".card").hide();
		$(".card.centre").show();
	});
});