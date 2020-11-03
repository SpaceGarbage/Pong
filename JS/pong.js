//Définir des variables du script

let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));

//Script déplacement balle
setInterval(function(){
    gauche = gauche + 1;
    haut = haut + 0.5;
    // Affiche le résultat de I dans le titre de page toutes les 10 millisecondes 
    $("#balle").css("left",gauche); 
    $("#balle").css("top",haut);

}, 10);
