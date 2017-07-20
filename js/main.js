//Mes variables//

var ecran=document.getElementsByTagName('th')[0];
var numbers=document.getElementsByClassName('numeral');
var operande=document.getElementsByClassName('operator');
var clear=document.getElementById('reset');



//On crée une boucle qui parcoure le tableau des chiffres//
for (let i = 0; i < numbers.length; i++) {

//On va mettre une fonction clique sur chaque chiffre de la calculatrice et l'afficher//
  numbers[i].addEventListener("click", function() {
     var affichage = numbers[i].textContent;//recupère le contenu de chaque bouton chiffre//
     ecran.innerHTML += affichage;//nouveau contenu pour l'ecran//

});
}

//on crée une autre boucle qui parcoure le tableau des operateurs//
for (let j = 0; j < operande.length; j++) {

//On va mettre une fonction clique sur chaque operateur de la calculatrice et l'afficher//
  operande[j].addEventListener("click", function() {
     var affich = operande[j].textContent;//recupère le contenu de chaque bouton operateur//
     ecran.innerHTML += affich;//nouveau contenu pour l'ecran//
});
}

function resultat() {//calcul le contenu actuel//
   var x = 0; //variable ou le resultat est sauvegardé//
   x = eval(window.document.calculatrice.affiche.value);//l'opération de calcul transmise à eval qui calcul automatiquement//
   window.document.calculatrice.affiche.value = x; //affecté au champs de formulaire pour etre affiché//
 }
