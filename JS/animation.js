const text = document.querySelector(".mot_Dynamique");
const words = ["ÉTUDIANT", "DÉVELOPPEUR", "PASSIONNÉ"];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";

// Fonction récursive qui affiche les lettres une par une si la longueur du mot n'est pas atteinte sinon on passe au mot suivant après un délai de 2 secondes

const updateText = () => {
	if (letterIndex < words[wordIndex].length) {
		currentWord += words[wordIndex][letterIndex];
		text.textContent = currentWord;
		letterIndex++;
		setTimeout(updateText, 100);
	} else {
		setTimeout(() => {
			wordIndex = (wordIndex + 1) % words.length;
			currentWord = "";
			letterIndex = 0;
			updateText();
		}, 2000);
	}
};

updateText();