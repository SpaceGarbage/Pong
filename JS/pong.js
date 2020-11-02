alert("Coucou")

let largeur=$("#balle").width();
let gauche=parsInt($("#balle").css("left"));
let haut=parsInt($("balle").css("top"));

setInterval(function(){
    gauche=gauche + 1;
    haut=haut + 0.5
    // Affiche le résultat de I dans le titre de page toutes les 1000 millisecondes 
    $("#balle").css("left",gauche);
    $("#balle").css("top",haut);
    
}, 10);
