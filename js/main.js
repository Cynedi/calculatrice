//Mes variables//

var leInput=document.getElementsByTagName('th')[0];
var leNumeral=document.getElementsByClassName('numeral');
var operator=document.getElementsByClassName('operator');
var result=document.getElementById('result');
var clear=document.getElementById('reset');

//On va mettre une fonction clique sur chaque chiffre de la calculatrice//
for (let i = 0; i < leNumeral.length; i++) {
  // console.log(leNumeral);
  leNumeral[i].addEventListener("click", function() {
     var affichage = leNumeral[i].textContent;
    // alert(affichage);
    leInput.innerHTML = affichage;
    // var x = affichage[affichage.length - 1];

    // console.log (affichage);
});
}
