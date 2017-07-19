//Mes variables//

var ecran=document.getElementsByTagName('th')[0];
var numbers=document.getElementsByClassName('numeral');
var operande=document.getElementsByClassName('operator');
var result=document.getElementById('result');
var clear=document.getElementById('reset');


for (let i = 0; i < numbers.length; i++) {

//On va mettre une fonction clique sur chaque chiffre de la calculatrice et l'afficher//
  numbers[i].addEventListener("click", function() {
     var affichage = numbers[i].textContent;
     ecran.innerHTML += affichage;

});
}

for (let j = 0; j < operande.length; j++) {

//On va mettre une fonction clique sur chaque operateur de la calculatrice et l'afficher//
  operande[j].addEventListener("click", function() {
     var affich = operande[j].textContent;
     ecran.innerHTML += affich;

});
}
