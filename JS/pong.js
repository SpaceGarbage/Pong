/* Nouvelle fonction afin de définir les mouvements de la balle et de la raquette */
let terrain = new Terrain($("#terrain"));
let balle = new Balle($("#balle"));
let raquetteGauche = new Raquette($("#gauche"));
let raquetteDroite = new Raquette($("#droite"));

/* Boucle pour les fonction précédentes */
setInterval(function () {

    balle.bouger();

    raquetteGauche.bouger();

    raquetteDroite.bouger();

}, 10);

/* addEventListener afin de pouvoir détecter touches */
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }

    /* Définition des touches, ainsi que les conditions de déplacement des raquettes */
    if (event.key === "a") {
        raquetteGauche.monter();
    }
    if (event.key === "q") {
        raquetteGauche.descendre();
    }
    if (event.key === "p") {
        raquetteDroite.monter();
    }
    if (event.key === "m") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);

window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    /* Attribution des conditions d'arrêt du mouvement des raquettes aux touches, afin que nos raquettes aient pas un mouvement continu */
    if (event.key === "a" || event.key === "q") {
        raquetteGauche.arret();
    }
    if (event.key === "p" || event.key === "m") {
        raquetteDroite.arret();
    }
    event.preventDefault();
}, true);