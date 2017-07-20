//Mes variables//

var ecran=document.getElementsByTagName('th')[0];
var numbers=document.getElementsByClassName('numeral');
var operande=document.getElementsByClassName('operator');
var clear=document.getElementById('reset');
var res=document.getElementById('resultat');
var display=document.getElementById('display');

console.log(ecran.value);
//On crée une boucle qui parcoure le tableau des chiffres//
for (let i = 0; i < numbers.length; i++) {

//On va mettre une fonction clique sur chaque chiffre de la calculatrice et l'afficher//
  numbers[i].addEventListener("click", function() {
     var affichage = numbers[i].value;//recupère le contenu de chaque bouton chiffre//
     display.value +=affichage ;//nouveau contenu pour l'ecran//

});
}

//on crée une autre boucle qui parcoure le tableau des operateurs//
for (let j = 0; j < operande.length; j++) {

//On va mettre une fonction clique sur chaque operateur de la calculatrice et l'afficher//
  operande[j].addEventListener("click", function() {
     var affich = operande[j].value;//recupère le contenu de chaque bouton operateur//
     display.value +=affich;//nouveau contenu pour l'ecran//
});
}

function result() {//calcul le contenu actuel//
 //variable ou le resultat est sauvegardé//
   display.value = eval (display.value);//l'opération de calcul transmise à eval qui calcul automatiquement//
   //affecté au champs de formulaire pour etre affiché//

 }
