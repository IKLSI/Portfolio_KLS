var date = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = date.toLocaleDateString('fr-FR', options);
document.write(formattedDate);